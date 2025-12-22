#!/usr/bin/env npx tsx
/**
 * AI Processor Runner
 *
 * Usage:
 *   npx tsx workers/processor/run.ts           # Process 10 items
 *   npx tsx workers/processor/run.ts --all     # Process all items
 *   npx tsx workers/processor/run.ts --limit 5 # Process 5 items
 */

import { processItems, printResults } from './process.js';
import { db } from '../db.js';

const args = process.argv.slice(2);

function getLimit(): number {
  const allIndex = args.indexOf('--all');
  if (allIndex !== -1) return 1000;

  const limitIndex = args.indexOf('--limit');
  if (limitIndex !== -1 && args[limitIndex + 1]) {
    return parseInt(args[limitIndex + 1], 10) || 10;
  }

  return 10;
}

async function showStats() {
  const { count: total } = await db
    .from('raw_items')
    .select('*', { count: 'exact', head: true });

  const { count: unprocessed } = await db
    .from('raw_items')
    .select('*', { count: 'exact', head: true })
    .eq('processed', false);

  const { count: articles } = await db
    .from('articles')
    .select('*', { count: 'exact', head: true });

  console.log('=== Queue Stats ===');
  console.log(`  Raw items: ${total} total, ${unprocessed} unprocessed`);
  console.log(`  Articles: ${articles}`);
}

async function main() {
  if (args.includes('--help') || args.includes('help')) {
    console.log(`
AI Processor for Graphene Pulse

Commands:
  (default)     Process 10 items
  --all         Process all unprocessed items
  --limit N     Process N items
  --stats       Show queue statistics
  --help        Show this help

Environment:
  ANTHROPIC_API_KEY  Required for AI processing
    `);
    return;
  }

  if (args.includes('--stats') || args.includes('stats')) {
    await showStats();
    return;
  }

  // Check for API key (optional - will use keyword fallback)
  if (!process.env.ANTHROPIC_API_KEY) {
    console.log('Note: ANTHROPIC_API_KEY not set. Using keyword-based filtering.\n');
  }

  const limit = getLimit();
  console.log(`Starting AI processor (limit: ${limit})...\n`);

  await showStats();
  console.log('');

  const result = await processItems(limit);
  printResults(result);

  console.log('');
  await showStats();
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
