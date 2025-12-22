// Centralized graphene relevance filtering
// V2: Strict graphene-only focus with word-boundary matching

// Primary keywords - must contain at least one of these
const GRAPHENE_KEYWORDS = [
  'graphene',
  'graphene oxide',
  'graphene-oxide',
  'reduced graphene oxide',
  'rgo',
  'bilayer graphene',
  'monolayer graphene',
  'multilayer graphene',
  'few-layer graphene',
  'single-layer graphene',
  'graphene nanoplatelet',
  'graphene nanoplatelets',
  'gnp',
  'graphene quantum dot',
  'graphene quantum dots',
  'gqd',
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
  'cvd graphene',
  'epitaxial graphene',
  'exfoliated graphene',
  'functionalized graphene',
  'pristine graphene',
  'doped graphene',
  'graphene aerogel',
  'graphene foam',
  'graphene membrane',
  'graphene coating',
];

// Exclusion patterns - if these appear, likely false positive
const EXCLUDE_PATTERNS = [
  'graphene county',
  'graphene, texas',
  'graphene tx',
];

// Build regex patterns for word-boundary matching
function buildKeywordRegex(keyword: string): RegExp {
  // Escape special regex characters
  const escaped = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Word boundary matching, case insensitive
  return new RegExp(`\\b${escaped}\\b`, 'i');
}

const KEYWORD_PATTERNS = GRAPHENE_KEYWORDS.map((kw) => ({
  keyword: kw,
  pattern: buildKeywordRegex(kw),
}));

const EXCLUSION_PATTERNS = EXCLUDE_PATTERNS.map((kw) => ({
  keyword: kw,
  pattern: buildKeywordRegex(kw),
}));

export interface FilterResult {
  relevant: boolean;
  matchedKeywords: string[];
  reason: string;
  titleMatch: boolean;
}

/**
 * Check if text is relevant to graphene
 * Uses word-boundary matching for precision
 */
export function isGrapheneRelevant(
  title: string,
  content: string = ''
): FilterResult {
  const titleLower = title.toLowerCase();
  const contentLower = content.toLowerCase();
  const fullText = `${titleLower} ${contentLower}`;

  // Check for exclusion patterns first
  for (const { keyword, pattern } of EXCLUSION_PATTERNS) {
    if (pattern.test(fullText)) {
      return {
        relevant: false,
        matchedKeywords: [],
        reason: `Excluded: matches "${keyword}"`,
        titleMatch: false,
      };
    }
  }

  // Find all matching keywords
  const matchedKeywords: string[] = [];
  let titleMatch = false;

  for (const { keyword, pattern } of KEYWORD_PATTERNS) {
    if (pattern.test(fullText)) {
      matchedKeywords.push(keyword);
      // Check if match is in title (higher signal)
      if (pattern.test(titleLower)) {
        titleMatch = true;
      }
    }
  }

  if (matchedKeywords.length === 0) {
    return {
      relevant: false,
      matchedKeywords: [],
      reason: 'No graphene keywords found',
      titleMatch: false,
    };
  }

  return {
    relevant: true,
    matchedKeywords,
    reason: `Matched: ${matchedKeywords.slice(0, 3).join(', ')}${matchedKeywords.length > 3 ? '...' : ''}`,
    titleMatch,
  };
}

/**
 * Quick check - just returns boolean
 * Use for simple filtering without detailed results
 */
export function containsGrapheneKeyword(text: string): boolean {
  const lower = text.toLowerCase();

  // Quick exclusion check
  for (const { pattern } of EXCLUSION_PATTERNS) {
    if (pattern.test(lower)) {
      return false;
    }
  }

  // Check for any graphene keyword
  for (const { pattern } of KEYWORD_PATTERNS) {
    if (pattern.test(lower)) {
      return true;
    }
  }

  return false;
}

// Export keywords for use in other modules (e.g., AI fallback analysis)
export { GRAPHENE_KEYWORDS, EXCLUDE_PATTERNS };
