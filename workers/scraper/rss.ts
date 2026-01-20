import Parser from 'rss-parser';
import { db, getActiveSources, updateSourceLastScraped, insertRawItem } from '../db.js';
import type { Source } from '../../src/lib/database.types.js';
import { isGrapheneRelevant } from './filter.js';

// Define custom fields to extract media content
type CustomItem = {
  'media:content'?: { $?: { url?: string } } | Array<{ $?: { url?: string } }>;
  'media:thumbnail'?: { $?: { url?: string } } | Array<{ $?: { url?: string } }>;
  enclosure?: { url?: string };
  itunes?: { image?: string };
};

const parser = new Parser<Record<string, unknown>, CustomItem>({
  timeout: 10000,
  headers: {
    'User-Agent': 'GraphenePulse/1.0 (+https://graphenepulse.com)',
  },
  customFields: {
    item: [
      ['media:content', 'media:content'],
      ['media:thumbnail', 'media:thumbnail'],
    ],
  },
});

// Extract image URL from RSS item using various methods
function extractImageUrl(item: Parser.Item & CustomItem, content: string): string | undefined {
  // 1. Try enclosure (standard RSS media attachment)
  if (item.enclosure?.url && isImageUrl(item.enclosure.url)) {
    return item.enclosure.url;
  }

  // 2. Try media:content (Media RSS extension)
  const mediaContent = item['media:content'];
  if (mediaContent) {
    const url = Array.isArray(mediaContent)
      ? mediaContent[0]?.$?.url
      : mediaContent.$?.url;
    if (url && isImageUrl(url)) {
      return url;
    }
  }

  // 3. Try media:thumbnail
  const mediaThumbnail = item['media:thumbnail'];
  if (mediaThumbnail) {
    const url = Array.isArray(mediaThumbnail)
      ? mediaThumbnail[0]?.$?.url
      : mediaThumbnail.$?.url;
    if (url && isImageUrl(url)) {
      return url;
    }
  }

  // 4. Try iTunes image
  if (item.itunes?.image) {
    return item.itunes.image;
  }

  // 5. Parse first image from HTML content
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1] && isImageUrl(imgMatch[1])) {
    return imgMatch[1];
  }

  return undefined;
}

// Check if URL looks like an image
function isImageUrl(url: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const lowercaseUrl = url.toLowerCase();

  // Check file extension
  if (imageExtensions.some(ext => lowercaseUrl.includes(ext))) {
    return true;
  }

  // Check for common image CDN patterns
  if (lowercaseUrl.includes('/image') || lowercaseUrl.includes('/img') || lowercaseUrl.includes('/photo')) {
    return true;
  }

  return false;
}

interface ScrapeResult {
  source: string;
  sourceTrust: string;
  itemsFound: number;
  itemsAccepted: number;      // High confidence - auto-accepted
  itemsNeedsReview: number;   // Medium confidence - needs AI review
  itemsRejected: number;      // Low confidence - filtered out
  itemsDuplicate: number;
  errors: string[];
}

export async function scrapeRssSource(source: Source): Promise<ScrapeResult> {
  const result: ScrapeResult = {
    source: source.name,
    sourceTrust: 'low',
    itemsFound: 0,
    itemsAccepted: 0,
    itemsNeedsReview: 0,
    itemsRejected: 0,
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

      // Score relevance using new multi-signal system
      const filterResult = isGrapheneRelevant(item.title, content, source.name);
      result.sourceTrust = filterResult.sourceTrust;

      // Handle based on tier
      if (filterResult.tier === 'reject') {
        result.itemsRejected++;
        if (process.env.DEBUG_FILTER) {
          console.log(`[FILTER] Rejected: "${item.title.slice(0, 60)}..." | ${filterResult.reason}`);
        }
        continue;
      }

      try {
        // Use link as external_id for deduplication
        const externalId = item.guid || item.link;

        // Extract image from various RSS sources
        const imageUrl = extractImageUrl(item, content);

        await insertRawItem({
          source_id: source.id,
          external_id: externalId,
          title: item.title,
          content,
          url: item.link,
          image_url: imageUrl,
          published_at: item.pubDate ? new Date(item.pubDate).toISOString() : undefined,
        });

        if (filterResult.tier === 'accept') {
          result.itemsAccepted++;
          console.log(`[FILTER] Accepted (score ${filterResult.score}): "${item.title.slice(0, 50)}..."`);
        } else {
          result.itemsNeedsReview++;
          console.log(`[FILTER] Review needed (score ${filterResult.score}): "${item.title.slice(0, 50)}..."`);
        }
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

    const totalInserted = result.itemsAccepted + result.itemsNeedsReview;
    console.log(`[RSS] ${source.name}: +${totalInserted} new (${result.itemsAccepted} accepted, ${result.itemsNeedsReview} need review)`);
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
  console.log('Using scoring system v3 with tiered classification\n');

  let totalFound = 0;
  let totalAccepted = 0;
  let totalNeedsReview = 0;
  let totalRejected = 0;
  let totalDuplicate = 0;

  for (const r of results) {
    totalFound += r.itemsFound;
    totalAccepted += r.itemsAccepted;
    totalNeedsReview += r.itemsNeedsReview;
    totalRejected += r.itemsRejected;
    totalDuplicate += r.itemsDuplicate;

    const status = r.errors.length > 0 ? ` (${r.errors.length} errors)` : '';
    const trustBadge = `[${r.sourceTrust}]`;
    console.log(`  ${trustBadge} ${r.source}: +${r.itemsAccepted} accepted, ${r.itemsNeedsReview} review, ${r.itemsRejected} rejected, ${r.itemsDuplicate} dup${status}`);
  }

  const totalNew = totalAccepted + totalNeedsReview;
  console.log(`\n  Total from ${totalFound} items found:`);
  console.log(`    Accepted (high confidence): ${totalAccepted}`);
  console.log(`    Needs AI review:            ${totalNeedsReview}`);
  console.log(`    Rejected (low relevance):   ${totalRejected}`);
  console.log(`    Duplicates skipped:         ${totalDuplicate}`);
  console.log(`    ─────────────────────────────`);
  console.log(`    New items in queue:         ${totalNew}`);
}
