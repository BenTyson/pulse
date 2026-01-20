/**
 * Migration: Add image_url column to raw_items table
 *
 * Run this script to add the image_url column to the raw_items table.
 * This enables storing article images extracted from RSS feeds.
 *
 * Usage: npx tsx scripts/add-image-url-column.ts
 */

import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function addImageUrlColumn() {
  console.log('Adding image_url column to raw_items table...\n');

  // Check if column already exists by trying to query it
  const { error: checkError } = await supabase
    .from('raw_items')
    .select('image_url')
    .limit(1);

  if (!checkError) {
    console.log('✓ Column image_url already exists in raw_items table');
    return;
  }

  // Column doesn't exist, need to add it via Supabase SQL editor or direct SQL
  // Since Supabase client doesn't support DDL, provide instructions
  console.log('The image_url column needs to be added to the raw_items table.');
  console.log('\nRun this SQL in the Supabase SQL Editor:\n');
  console.log('─'.repeat(60));
  console.log(`
ALTER TABLE raw_items
ADD COLUMN IF NOT EXISTS image_url TEXT;

COMMENT ON COLUMN raw_items.image_url IS 'URL of the article image extracted from RSS feed';
  `.trim());
  console.log('─'.repeat(60));
  console.log('\nAfter running the SQL, new scraped articles will include images.');
}

addImageUrlColumn()
  .then(() => {
    console.log('\nDone!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });
