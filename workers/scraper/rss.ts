import Parser from 'rss-parser';
import { db, getActiveSources, updateSourceLastScraped, insertRawItem } from '../db.js';
import type { Source } from '../../src/lib/database.types.js';
import { isGrapheneRelevant } from './filter.js';

const parser = new Parser({
  timeout: 10000,
  headers: {
    'User-Agent': 'GraphenePulse/1.0 (+https://graphenepulse.com)',
  },
});

interface ScrapeResult {
  source: string;
  itemsFound: number;
  itemsInserted: number;
  itemsSkipped: number;
  itemsDuplicate: number;
  errors: string[];
}

export async function scrapeRssSource(source: Source): Promise<ScrapeResult> {
  const result: ScrapeResult = {
    source: source.name,
    itemsFound: 0,
    itemsInserted: 0,
    itemsSkipped: 0,
    itemsDuplicate: 0,
    errors: [],
  };

  if (!source.feed_url) {
    result.errors.push('No feed_url configured');
    return result;
  }

  try {
    console.log(`[RSS] Fetching ${source.name}: ${source.feed_url}`);
    const feed = await parser.parseURL(source.feed_url);

    result.itemsFound = feed.items?.length || 0;
    console.log(`[RSS] Found ${result.itemsFound} items in ${source.name}`);

    for (const item of feed.items || []) {
      if (!item.title || !item.link) {
        continue;
      }

      const content = item.content || item['content:encoded'] || item.summary || item.contentSnippet || '';

      // Pre-filter: Check graphene relevance before inserting
      const filterResult = isGrapheneRelevant(item.title, content);
      if (!filterResult.relevant) {
        result.itemsSkipped++;
        continue;
      }

      try {
        // Use link as external_id for deduplication
        const externalId = item.guid || item.link;

        await insertRawItem({
          source_id: source.id,
          external_id: externalId,
          title: item.title,
          content,
          url: item.link,
          published_at: item.pubDate ? new Date(item.pubDate).toISOString() : undefined,
        });

        result.itemsInserted++;
      } catch (err: any) {
        // Likely a duplicate, which is fine
        if (err.message?.includes('duplicate') || err.code === '23505') {
          result.itemsDuplicate++;
        } else {
          result.errors.push(`Item "${item.title}": ${err.message}`);
        }
      }
    }

    // Update last scraped timestamp
    await updateSourceLastScraped(source.id);
    console.log(`[RSS] Inserted ${result.itemsInserted} new items from ${source.name}`);
  } catch (err: any) {
    result.errors.push(`Feed error: ${err.message}`);
    console.error(`[RSS] Error scraping ${source.name}:`, err.message);
  }

  return result;
}

export async function scrapeAllRssSources(): Promise<ScrapeResult[]> {
  const sources = await getActiveSources('rss');
  console.log(`[RSS] Found ${sources.length} active RSS sources`);

  const results: ScrapeResult[] = [];

  for (const source of sources) {
    const result = await scrapeRssSource(source);
    results.push(result);

    // Small delay between sources to be polite
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return results;
}

// Summary helper
export function printResults(results: ScrapeResult[]) {
  console.log('\n=== Scrape Summary ===');
  let totalFound = 0;
  let totalInserted = 0;
  let totalSkipped = 0;
  let totalDuplicate = 0;

  for (const r of results) {
    totalFound += r.itemsFound;
    totalInserted += r.itemsInserted;
    totalSkipped += r.itemsSkipped;
    totalDuplicate += r.itemsDuplicate;
    const status = r.errors.length > 0 ? ` (${r.errors.length} errors)` : '';
    console.log(`  ${r.source}: +${r.itemsInserted} new, ${r.itemsSkipped} filtered, ${r.itemsDuplicate} dup${status}`);
  }

  console.log(`\nTotal: ${totalInserted} new items from ${totalFound} found`);
  console.log(`  Filtered out: ${totalSkipped} (not graphene-related)`);
  console.log(`  Duplicates: ${totalDuplicate} (already in database)`);
}
