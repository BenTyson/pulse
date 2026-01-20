// Graphene Relevance Scoring System v3
// Multi-signal scoring with tiered classification

// =============================================================================
// KEYWORD DEFINITIONS
// =============================================================================

// Primary keywords - highest signal for graphene relevance
const PRIMARY_KEYWORDS = [
  'graphene',
  'graphene oxide',
  'graphene-oxide',
  'reduced graphene oxide',
  'bilayer graphene',
  'monolayer graphene',
  'multilayer graphene',
  'few-layer graphene',
  'single-layer graphene',
  'twisted bilayer graphene',
  'magic angle graphene',
];

// Variant keywords - strong signal but slightly lower weight
const VARIANT_KEYWORDS = [
  'graphene nanoplatelet',
  'graphene nanoplatelets',
  'graphene quantum dot',
  'graphene quantum dots',
  'graphene composite',
  'graphene composites',
  'graphene film',
  'graphene films',
  'graphene sheet',
  'graphene sheets',
  'graphene nanosheet',
  'graphene nanosheets',
  'graphene battery',
  'graphene batteries',
  'graphene electrode',
  'graphene electrodes',
  'graphene sensor',
  'graphene sensors',
  'graphene membrane',
  'graphene membranes',
  'graphene coating',
  'graphene coatings',
  'graphene aerogel',
  'graphene foam',
  'graphene ink',
  'graphene transistor',
  'graphene supercapacitor',
  'cvd graphene',
  'epitaxial graphene',
  'exfoliated graphene',
  'functionalized graphene',
  'pristine graphene',
  'doped graphene',
  'nitrogen-doped graphene',
  'graphene flake',
  'graphene flakes',
  'graphene layer',
  'graphene layers',
  'graphene-based',
  'graphene-enhanced',
];

// Acronyms - require careful handling (only count if other signals present)
const ACRONYM_KEYWORDS = [
  'rgo', // reduced graphene oxide
  'go',  // graphene oxide (risky - also means "go" verb)
  'gnp', // graphene nanoplatelets
  'gqd', // graphene quantum dots
  'gnr', // graphene nanoribbons
];

// Negative keywords - competing materials that reduce relevance score
const NEGATIVE_KEYWORDS = [
  // Carbon nanotubes
  'carbon nanotube',
  'carbon nanotubes',
  'nanotube',
  'nanotubes',
  'cnt',
  'swcnt',
  'swnt',
  'mwcnt',
  'mwnt',
  'single-walled nanotube',
  'multi-walled nanotube',
  // Fullerenes
  'fullerene',
  'fullerenes',
  'buckyball',
  'buckyballs',
  'c60',
  'c70',
  // MXenes
  'mxene',
  'mxenes',
  'ti3c2',
  'ti2c',
  // Other 2D materials
  'boron nitride',
  'hexagonal boron nitride',
  'h-bn',
  'hbn',
  'molybdenum disulfide',
  'mos2',
  'tungsten diselenide',
  'wse2',
  'tungsten disulfide',
  'ws2',
  'black phosphorus',
  'phosphorene',
  'silicene',
  'germanene',
  'stanene',
  // Generic terms that indicate broad nanomaterial focus
  '2d material',
  '2d materials',
  'two-dimensional material',
  'two-dimensional materials',
  'van der waals',
  'van der waals heterostructure',
];

// Strong negative - if in title, very likely not about graphene
const STRONG_NEGATIVE_KEYWORDS = [
  'carbon nanotube',
  'carbon nanotubes',
  'nanotube',
  'nanotubes',
  'mxene',
  'mxenes',
  'fullerene',
  'fullerenes',
  'boron nitride',
];

// Exclusion patterns - definite false positives
const EXCLUDE_PATTERNS = [
  'graphene county',
  'graphene, texas',
  'graphene tx',
  'graphene alabama',
  'graphene al',
];

// Context phrases that suggest graphene is not the focus
const DIMINISHING_PHRASES = [
  'compared to graphene',
  'graphene vs',
  'vs graphene',
  'unlike graphene',
  'similar to graphene',
  'graphene and other',
  'other 2d materials like graphene',
  'such as graphene',
  'including graphene',
  'like graphene',
];

// =============================================================================
// SCORING WEIGHTS
// =============================================================================

const WEIGHTS = {
  // Positive signals
  PRIMARY_IN_TITLE: 55,  // Single graphene mention in title = auto-accept
  PRIMARY_IN_BODY: 15,
  VARIANT_IN_TITLE: 35,
  VARIANT_IN_BODY: 10,
  ACRONYM_IN_TITLE: 20,  // Lower because acronyms are risky
  ACRONYM_IN_BODY: 5,
  KEYWORD_DENSITY_BONUS: 20, // Max bonus for high density
  MULTIPLE_KEYWORD_TYPES: 15, // Bonus for diverse keyword matches

  // Negative signals
  NEGATIVE_IN_TITLE: -40,
  NEGATIVE_IN_BODY: -15,
  STRONG_NEGATIVE_IN_TITLE: -60,
  DIMINISHING_PHRASE: -20,

  // Thresholds
  AUTO_ACCEPT: 55,
  NEEDS_REVIEW: 25,
  // Below NEEDS_REVIEW = auto-reject
};

// =============================================================================
// SOURCE TRUST LEVELS
// =============================================================================

export type SourceTrust = 'high' | 'medium' | 'low';

// Source-specific trust configuration
// High trust = graphene-focused sources, lower threshold needed
// Low trust = general tech/science, higher threshold needed
const SOURCE_TRUST_CONFIG: Record<string, SourceTrust> = {
  // Graphene-specific (high trust)
  'graphene-info': 'high',
  'graphene-info.com': 'high',
  'thegraphenecouncil': 'high',
  'graphenecouncil': 'high',
  'graphene flagship': 'high',
  'graphene-flagship': 'high',

  // Materials science journals (medium trust)
  'nature materials': 'medium',
  'advanced materials': 'medium',
  'acs nano': 'medium',
  'nano letters': 'medium',
  'materials today': 'medium',
  '2d materials': 'medium',
  'carbon': 'medium',
  'advanced science news': 'medium',
  'advancedsciencenews': 'medium',

  // Nanotechnology sources (medium trust)
  'nanowerk': 'medium',
  'nanowerk.com': 'medium',

  // Industry sources (medium trust)
  'compositesworld': 'medium',
  'composites world': 'medium',

  // General science/tech (low trust - need strict filtering)
  'phys.org': 'low',
  'sciencedaily': 'low',
  'eurekalert': 'low',
  'techcrunch': 'low',
  'arxiv': 'low',
  'default': 'low',
};

const TRUST_THRESHOLD_MODIFIERS: Record<SourceTrust, number> = {
  high: -15,   // Lower threshold for trusted sources
  medium: 0,   // Standard threshold
  low: 10,     // Higher threshold for untrusted sources
};

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildWordBoundaryRegex(keyword: string): RegExp {
  return new RegExp(`\\b${escapeRegex(keyword)}\\b`, 'gi');
}

function countMatches(text: string, pattern: RegExp): number {
  const matches = text.match(pattern);
  return matches ? matches.length : 0;
}

function getSourceTrust(sourceName: string): SourceTrust {
  const normalized = sourceName.toLowerCase().trim();

  for (const [key, trust] of Object.entries(SOURCE_TRUST_CONFIG)) {
    if (key === 'default') continue;
    if (normalized.includes(key)) {
      return trust;
    }
  }

  return SOURCE_TRUST_CONFIG.default;
}

// =============================================================================
// SCORING TYPES
// =============================================================================

export interface ScoringBreakdown {
  primaryTitle: number;
  primaryBody: number;
  variantTitle: number;
  variantBody: number;
  acronymTitle: number;
  acronymBody: number;
  densityBonus: number;
  diversityBonus: number;
  negativeTitle: number;
  negativeBody: number;
  diminishingPhrases: number;
  trustModifier: number;
}

export interface ScoreResult {
  score: number;
  tier: 'accept' | 'review' | 'reject';
  breakdown: ScoringBreakdown;
  matchedPositive: string[];
  matchedNegative: string[];
  sourceTrust: SourceTrust;
  reason: string;
}

export interface FilterResult {
  relevant: boolean;
  needsAIReview: boolean;
  score: number;
  tier: 'accept' | 'review' | 'reject';
  matchedKeywords: string[];
  matchedNegative: string[];
  reason: string;
  titleMatch: boolean;
  sourceTrust: SourceTrust;
}

// =============================================================================
// MAIN SCORING FUNCTION
// =============================================================================

export function scoreGrapheneRelevance(
  title: string,
  content: string = '',
  sourceName: string = ''
): ScoreResult {
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();
  const fullText = `${titleLower} ${contentLower}`;
  const wordCount = fullText.split(/\s+/).length;

  // Check for hard exclusions first
  for (const pattern of EXCLUDE_PATTERNS) {
    if (fullText.includes(pattern.toLowerCase())) {
      return {
        score: 0,
        tier: 'reject',
        breakdown: createEmptyBreakdown(),
        matchedPositive: [],
        matchedNegative: [pattern],
        sourceTrust: getSourceTrust(sourceName),
        reason: `Hard exclusion: "${pattern}"`,
      };
    }
  }

  const breakdown: ScoringBreakdown = {
    primaryTitle: 0,
    primaryBody: 0,
    variantTitle: 0,
    variantBody: 0,
    acronymTitle: 0,
    acronymBody: 0,
    densityBonus: 0,
    diversityBonus: 0,
    negativeTitle: 0,
    negativeBody: 0,
    diminishingPhrases: 0,
    trustModifier: 0,
  };

  const matchedPositive: string[] = [];
  const matchedNegative: string[] = [];
  let totalPositiveMatches = 0;

  // Score primary keywords
  for (const keyword of PRIMARY_KEYWORDS) {
    const regex = buildWordBoundaryRegex(keyword);
    const titleMatches = countMatches(titleLower, regex);
    const bodyMatches = countMatches(contentLower, regex);

    if (titleMatches > 0) {
      breakdown.primaryTitle += WEIGHTS.PRIMARY_IN_TITLE;
      matchedPositive.push(keyword);
      totalPositiveMatches += titleMatches;
    }
    if (bodyMatches > 0) {
      breakdown.primaryBody += Math.min(WEIGHTS.PRIMARY_IN_BODY * bodyMatches, WEIGHTS.PRIMARY_IN_BODY * 3);
      if (!matchedPositive.includes(keyword)) matchedPositive.push(keyword);
      totalPositiveMatches += bodyMatches;
    }
  }

  // Score variant keywords
  for (const keyword of VARIANT_KEYWORDS) {
    const regex = buildWordBoundaryRegex(keyword);
    const titleMatches = countMatches(titleLower, regex);
    const bodyMatches = countMatches(contentLower, regex);

    if (titleMatches > 0) {
      breakdown.variantTitle += WEIGHTS.VARIANT_IN_TITLE;
      matchedPositive.push(keyword);
      totalPositiveMatches += titleMatches;
    }
    if (bodyMatches > 0) {
      breakdown.variantBody += Math.min(WEIGHTS.VARIANT_IN_BODY * bodyMatches, WEIGHTS.VARIANT_IN_BODY * 3);
      if (!matchedPositive.includes(keyword)) matchedPositive.push(keyword);
      totalPositiveMatches += bodyMatches;
    }
  }

  // Score acronyms (only if we already have some positive signals)
  const hasOtherPositiveSignals = breakdown.primaryTitle > 0 || breakdown.primaryBody > 0 ||
                                   breakdown.variantTitle > 0 || breakdown.variantBody > 0;

  if (hasOtherPositiveSignals) {
    for (const keyword of ACRONYM_KEYWORDS) {
      // Skip 'go' unless it's clearly "GO" (graphene oxide context)
      if (keyword === 'go') continue; // Too risky

      const regex = buildWordBoundaryRegex(keyword);
      const titleMatches = countMatches(titleLower, regex);
      const bodyMatches = countMatches(contentLower, regex);

      if (titleMatches > 0) {
        breakdown.acronymTitle += WEIGHTS.ACRONYM_IN_TITLE;
        matchedPositive.push(keyword.toUpperCase());
        totalPositiveMatches += titleMatches;
      }
      if (bodyMatches > 0) {
        breakdown.acronymBody += Math.min(WEIGHTS.ACRONYM_IN_BODY * bodyMatches, WEIGHTS.ACRONYM_IN_BODY * 2);
        if (!matchedPositive.includes(keyword.toUpperCase())) matchedPositive.push(keyword.toUpperCase());
        totalPositiveMatches += bodyMatches;
      }
    }
  }

  // Keyword density bonus (graphene mentions per 100 words)
  if (wordCount > 50) {
    const density = (totalPositiveMatches / wordCount) * 100;
    if (density > 2) {
      breakdown.densityBonus = Math.min(WEIGHTS.KEYWORD_DENSITY_BONUS, Math.floor(density * 5));
    }
  }

  // Diversity bonus - multiple types of graphene keywords
  const keywordTypes = [
    breakdown.primaryTitle > 0 || breakdown.primaryBody > 0,
    breakdown.variantTitle > 0 || breakdown.variantBody > 0,
    breakdown.acronymTitle > 0 || breakdown.acronymBody > 0,
  ].filter(Boolean).length;

  if (keywordTypes >= 2) {
    breakdown.diversityBonus = WEIGHTS.MULTIPLE_KEYWORD_TYPES;
  }

  // Score negative keywords
  for (const keyword of NEGATIVE_KEYWORDS) {
    const regex = buildWordBoundaryRegex(keyword);
    const isStrong = STRONG_NEGATIVE_KEYWORDS.includes(keyword);

    if (regex.test(titleLower)) {
      breakdown.negativeTitle += isStrong ? WEIGHTS.STRONG_NEGATIVE_IN_TITLE : WEIGHTS.NEGATIVE_IN_TITLE;
      matchedNegative.push(keyword);
    } else if (regex.test(contentLower)) {
      breakdown.negativeBody += WEIGHTS.NEGATIVE_IN_BODY;
      if (!matchedNegative.includes(keyword)) matchedNegative.push(keyword);
    }
  }

  // Check diminishing phrases
  for (const phrase of DIMINISHING_PHRASES) {
    if (fullText.includes(phrase.toLowerCase())) {
      breakdown.diminishingPhrases += WEIGHTS.DIMINISHING_PHRASE;
    }
  }

  // Apply source trust modifier
  const sourceTrust = getSourceTrust(sourceName);
  breakdown.trustModifier = -TRUST_THRESHOLD_MODIFIERS[sourceTrust]; // Inverted: high trust = bonus points

  // Calculate total score
  const score = Math.max(0,
    breakdown.primaryTitle +
    breakdown.primaryBody +
    breakdown.variantTitle +
    breakdown.variantBody +
    breakdown.acronymTitle +
    breakdown.acronymBody +
    breakdown.densityBonus +
    breakdown.diversityBonus +
    breakdown.negativeTitle +
    breakdown.negativeBody +
    breakdown.diminishingPhrases +
    breakdown.trustModifier
  );

  // Determine tier with trust-adjusted thresholds
  const acceptThreshold = WEIGHTS.AUTO_ACCEPT + TRUST_THRESHOLD_MODIFIERS[sourceTrust];
  const reviewThreshold = WEIGHTS.NEEDS_REVIEW + TRUST_THRESHOLD_MODIFIERS[sourceTrust];

  let tier: 'accept' | 'review' | 'reject';
  let reason: string;

  if (score >= acceptThreshold) {
    tier = 'accept';
    reason = `High confidence (score ${score}): ${matchedPositive.slice(0, 3).join(', ')}`;
  } else if (score >= reviewThreshold) {
    tier = 'review';
    reason = `Needs AI review (score ${score}): ${matchedPositive.slice(0, 3).join(', ')}`;
    if (matchedNegative.length > 0) {
      reason += ` | competing: ${matchedNegative.slice(0, 2).join(', ')}`;
    }
  } else {
    tier = 'reject';
    if (matchedPositive.length === 0) {
      reason = 'No graphene keywords found';
    } else if (matchedNegative.length > 0) {
      reason = `Low relevance (score ${score}): overshadowed by ${matchedNegative.slice(0, 2).join(', ')}`;
    } else {
      reason = `Below threshold (score ${score})`;
    }
  }

  return {
    score,
    tier,
    breakdown,
    matchedPositive,
    matchedNegative,
    sourceTrust,
    reason,
  };
}

function createEmptyBreakdown(): ScoringBreakdown {
  return {
    primaryTitle: 0,
    primaryBody: 0,
    variantTitle: 0,
    variantBody: 0,
    acronymTitle: 0,
    acronymBody: 0,
    densityBonus: 0,
    diversityBonus: 0,
    negativeTitle: 0,
    negativeBody: 0,
    diminishingPhrases: 0,
    trustModifier: 0,
  };
}

// =============================================================================
// SIMPLIFIED INTERFACE (backwards compatible)
// =============================================================================

/**
 * Main filter function - returns detailed relevance assessment
 */
export function isGrapheneRelevant(
  title: string,
  content: string = '',
  sourceName: string = ''
): FilterResult {
  const scoreResult = scoreGrapheneRelevance(title, content, sourceName);

  return {
    relevant: scoreResult.tier !== 'reject',
    needsAIReview: scoreResult.tier === 'review',
    score: scoreResult.score,
    tier: scoreResult.tier,
    matchedKeywords: scoreResult.matchedPositive,
    matchedNegative: scoreResult.matchedNegative,
    reason: scoreResult.reason,
    titleMatch: scoreResult.breakdown.primaryTitle > 0 || scoreResult.breakdown.variantTitle > 0,
    sourceTrust: scoreResult.sourceTrust,
  };
}

/**
 * Quick boolean check - for simple use cases
 */
export function containsGrapheneKeyword(text: string): boolean {
  const result = isGrapheneRelevant(text, '');
  return result.relevant;
}

// =============================================================================
// EXPORTS FOR OTHER MODULES
// =============================================================================

export const GRAPHENE_KEYWORDS = [...PRIMARY_KEYWORDS, ...VARIANT_KEYWORDS];
export const EXCLUDE_PATTERNS_LIST = EXCLUDE_PATTERNS;
export {
  PRIMARY_KEYWORDS,
  VARIANT_KEYWORDS,
  ACRONYM_KEYWORDS,
  NEGATIVE_KEYWORDS,
  WEIGHTS,
  getSourceTrust,
};
