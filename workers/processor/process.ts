import { db, getUnprocessedItems, markItemProcessed } from '../db.js';
import { analyzeArticle } from './analyze.js';

interface ProcessResult {
  processed: number;
  relevant: number;
  published: number;
  errors: number;
}

// Generate URL-safe slug from title
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80)
    .replace(/^-|-$/g, '');
}

// Ensure slug is unique by appending a suffix if needed
async function ensureUniqueSlug(baseSlug: string): Promise<string> {
  let slug = baseSlug;
  let suffix = 1;

  while (true) {
    const { data } = await db
      .from('articles')
      .select('slug')
      .eq('slug', slug)
      .single();

    if (!data) break;

    slug = `${baseSlug}-${suffix}`;
    suffix++;
  }

  return slug;
}

// Get source name from source_id
async function getSourceName(sourceId: string | null): Promise<string | null> {
  if (!sourceId) return null;

  const { data } = await db
    .from('sources')
    .select('name')
    .eq('id', sourceId)
    .single();

  return data?.name || null;
}

export async function processItems(limit = 10): Promise<ProcessResult> {
  const result: ProcessResult = {
    processed: 0,
    relevant: 0,
    published: 0,
    errors: 0,
  };

  const items = await getUnprocessedItems(limit);
  console.log(`[Processor] Found ${items.length} unprocessed items`);

  for (const item of items) {
    console.log(`\n[Processor] Analyzing: ${item.title.slice(0, 60)}...`);

    try {
      // Analyze with Claude (use AI if API key is available)
      const useAI = Boolean(process.env.ANTHROPIC_API_KEY);
      const analysis = await analyzeArticle(item.title, item.content || '', useAI);
      result.processed++;

      if (!analysis.isRelevant) {
        console.log(`  -> Not relevant: ${analysis.relevanceReason}`);
        await markItemProcessed(item.id);
        continue;
      }

      result.relevant++;
      console.log(`  -> Relevant (${analysis.category}): ${analysis.relevanceReason}`);

      // Generate unique slug
      const slug = await ensureUniqueSlug(generateSlug(item.title));

      // Get source name
      const sourceName = await getSourceName(item.source_id);

      // Create article
      const { data: article, error } = await db
        .from('articles')
        .insert({
          raw_item_id: item.id,
          title: item.title,
          slug,
          summary: analysis.summary,
          content: item.content,
          source_id: item.source_id,
          source_url: item.url,
          source_name: sourceName,
          published_at: item.published_at || new Date().toISOString(),
          category: analysis.category,
          importance_score: analysis.importanceScore,
          tags: analysis.tags,
          status: 'published',
          featured: analysis.importanceScore >= 8,
        })
        .select()
        .single();

      if (error) {
        console.error(`  -> Failed to create article: ${error.message}`);
        result.errors++;
      } else {
        console.log(`  -> Published: /news/${slug}`);
        result.published++;
      }

      // Mark as processed
      await markItemProcessed(item.id);

      // Small delay to avoid rate limits
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (err: any) {
      console.error(`  -> Error: ${err.message}`);
      result.errors++;
      // Still mark as processed to avoid infinite loops
      await markItemProcessed(item.id);
    }
  }

  return result;
}

export function printResults(result: ProcessResult) {
  console.log('\n=== Processing Summary ===');
  console.log(`  Processed: ${result.processed}`);
  console.log(`  Relevant: ${result.relevant}`);
  console.log(`  Published: ${result.published}`);
  console.log(`  Errors: ${result.errors}`);
}
