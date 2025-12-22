import { askJson } from './claude.js';
import { GRAPHENE_KEYWORDS, isGrapheneRelevant } from '../scraper/filter.js';

export interface AnalysisResult {
  isRelevant: boolean;
  relevanceReason: string;
  category: 'research' | 'business' | 'products' | 'investment' | null;
  summary: string;
  tags: string[];
  importanceScore: number; // 1-10
}

const CATEGORY_KEYWORDS: Record<string, string[]> = {
  research: ['study', 'research', 'scientists', 'discovered', 'university', 'lab', 'experiment', 'paper', 'journal'],
  business: ['company', 'partnership', 'merger', 'acquisition', 'market', 'industry', 'corporation', 'deal'],
  products: ['product', 'launch', 'release', 'application', 'device', 'commercial', 'manufacturing'],
  investment: ['funding', 'investment', 'investor', 'ipo', 'stock', 'venture', 'million', 'billion', 'raised'],
};

function keywordAnalysis(title: string, content: string): AnalysisResult {
  const text = `${title} ${content}`.toLowerCase();

  // Check relevance using centralized filter
  const filterResult = isGrapheneRelevant(title, content);

  if (!filterResult.relevant) {
    return {
      isRelevant: false,
      relevanceReason: filterResult.reason,
      category: null,
      summary: '',
      tags: [],
      importanceScore: 1,
    };
  }

  const matchedKeywords = filterResult.matchedKeywords;

  // Determine category
  let category: 'research' | 'business' | 'products' | 'investment' | null = null;
  let maxScore = 0;

  for (const [cat, keywords] of Object.entries(CATEGORY_KEYWORDS)) {
    const score = keywords.filter((kw) => text.includes(kw)).length;
    if (score > maxScore) {
      maxScore = score;
      category = cat as 'research' | 'business' | 'products' | 'investment';
    }
  }

  // Default to research if no category matched
  if (!category) category = 'research';

  // Generate simple summary (first 200 chars of content)
  const summary = content
    ? content.slice(0, 200).replace(/\s+/g, ' ').trim() + '...'
    : title;

  // Generate tags from matched keywords
  const tags = matchedKeywords.slice(0, 5);

  // Score based on keyword density
  const importanceScore = Math.min(10, 3 + matchedKeywords.length);

  return {
    isRelevant: true,
    relevanceReason: `Matched keywords: ${matchedKeywords.join(', ')}`,
    category,
    summary,
    tags,
    importanceScore,
  };
}

const ANALYSIS_PROMPT = `You are an expert analyst for Graphene Pulse, a news site focused exclusively on graphene.

Analyze this article and respond with JSON only (no markdown):

TITLE: {{title}}

CONTENT: {{content}}

Respond with this exact JSON structure:
{
  "isRelevant": boolean (true ONLY if article is centrally about graphene or graphene-based materials),
  "relevanceReason": "brief explanation of why relevant or not",
  "category": "research" | "business" | "products" | "investment" | null (pick best fit, null if not relevant),
  "summary": "2-3 sentence summary focusing on the key news/development (empty if not relevant)",
  "tags": ["tag1", "tag2"] (3-5 relevant tags like "batteries", "electronics", "cvd", etc.),
  "importanceScore": number 1-10 (10 = major breakthrough, 1 = minor news)
}

Category definitions:
- research: Academic papers, scientific discoveries, lab breakthroughs
- business: Company news, partnerships, funding, market trends
- products: New products, commercial applications, product launches
- investment: Funding rounds, IPOs, market analysis, investor news

STRICT RELEVANCE RULES:
- INCLUDE: graphene, graphene oxide, reduced graphene oxide (rGO), graphene composites, graphene films, graphene quantum dots
- EXCLUDE: carbon nanotubes, MXene, boron nitride, other 2D materials (unless article is specifically about graphene)
- EXCLUDE: articles where graphene is only mentioned in passing or as background context
- The article must be PRIMARILY about graphene to be marked relevant.`;

export async function analyzeArticle(
  title: string,
  content: string,
  useAI = false
): Promise<AnalysisResult> {
  // Use keyword-based analysis if no API key or useAI is false
  if (!useAI || !process.env.ANTHROPIC_API_KEY) {
    return keywordAnalysis(title, content);
  }

  const prompt = ANALYSIS_PROMPT
    .replace('{{title}}', title)
    .replace('{{content}}', content.slice(0, 3000));

  try {
    const result = await askJson<AnalysisResult>(prompt);

    return {
      isRelevant: Boolean(result.isRelevant),
      relevanceReason: result.relevanceReason || '',
      category: validateCategory(result.category),
      summary: result.summary || '',
      tags: Array.isArray(result.tags) ? result.tags.slice(0, 5) : [],
      importanceScore: normalizeScore(result.importanceScore),
    };
  } catch (err: any) {
    console.error('AI analysis failed, falling back to keywords:', err.message);
    return keywordAnalysis(title, content);
  }
}

function validateCategory(
  cat: string | null
): 'research' | 'business' | 'products' | 'investment' | null {
  const valid = ['research', 'business', 'products', 'investment'];
  if (cat && valid.includes(cat)) {
    return cat as 'research' | 'business' | 'products' | 'investment';
  }
  return null;
}

function normalizeScore(score: number | undefined): number {
  if (typeof score !== 'number') return 5;
  return Math.max(1, Math.min(10, Math.round(score)));
}
