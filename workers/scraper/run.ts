#!/usr/bin/env npx tsx
/**
 * RSS Scraper Runner
 *
 * Usage:
 *   npx tsx workers/scraper/run.ts          # Scrape all sources
 *   npx tsx workers/scraper/run.ts --seed   # Seed sources to database
 *   npx tsx workers/scraper/run.ts --stats  # Show scraping stats
 */

import { db } from '../db.js';
import { scrapeAllRssSources, printResults } from './rss.js';
import { initialSources } from './sources.js';

const args = process.argv.slice(2);
const command = args[0] || 'scrape';

async function seedSources() {
  console.log('Seeding RSS sources to database...\n');

  for (const source of initialSources) {
    try {
      const { data, error } = await db
        .from('sources')
        .upsert(
          {
            name: source.name,
            url: source.url,
            feed_url: source.feed_url,
            scrape_type: source.scrape_type,
            scrape_frequency: source.scrape_frequency,
            is_active: true,
          },
          { onConflict: 'url' }
        )
        .select();

      if (error) {
        console.error(`  Failed: ${source.name} - ${error.message}`);
      } else {
        console.log(`  Added: ${source.name}`);
      }
    } catch (err: any) {
      console.error(`  Error: ${source.name} - ${err.message}`);
    }
  }

  console.log('\nDone seeding sources.');
}

async function showStats() {
  console.log('=== Scraper Stats ===\n');

  // Sources
  const { data: sources } = await db
    .from('sources')
    .select('*')
    .eq('is_active', true);

  console.log(`Active sources: ${sources?.length || 0}`);

  for (const s of sources || []) {
    const lastScraped = s.last_scraped_at
      ? new Date(s.last_scraped_at).toLocaleString()
      : 'never';
    console.log(`  - ${s.name} (${s.scrape_type}) - last: ${lastScraped}`);
  }

  // Raw items
  const { count: totalItems } = await db
    .from('raw_items')
    .select('*', { count: 'exact', head: true });

  const { count: unprocessedItems } = await db
    .from('raw_items')
    .select('*', { count: 'exact', head: true })
    .eq('processed', false);

  console.log(`\nRaw items: ${totalItems || 0} total, ${unprocessedItems || 0} unprocessed`);
}

async function runScraper() {
  console.log('Starting RSS scraper...\n');
  const results = await scrapeAllRssSources();
  printResults(results);
}

async function main() {
  try {
    switch (command) {
      case '--seed':
      case 'seed':
        await seedSources();
        break;
      case '--stats':
      case 'stats':
        await showStats();
        break;
      case '--help':
      case 'help':
        console.log(`
RSS Scraper for Graphene Pulse

Commands:
  (default)   Scrape all active RSS sources
  --seed      Add initial sources to database
  --stats     Show scraping statistics
  --help      Show this help
        `);
        break;
      default:
        await runScraper();
    }
  } catch (err) {
    console.error('Fatal error:', err);
    process.exit(1);
  }
}

main();
