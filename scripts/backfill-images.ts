/**
 * Backfill: Extract images from existing raw_items content
 *
 * This script scans existing raw_items that have HTML content with images
 * but no image_url set, and extracts the image URL.
 *
 * Usage: npx tsx scripts/backfill-images.ts
 */

import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_SERVICE_KEY environment variables');
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Check if URL looks like an image
function isImageUrl(url: string): boolean {
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
  const lowercaseUrl = url.toLowerCase();

  if (imageExtensions.some((ext) => lowercaseUrl.includes(ext))) {
    return true;
  }

  if (lowercaseUrl.includes('/image') || lowercaseUrl.includes('/img') || lowercaseUrl.includes('/photo')) {
    return true;
  }

  return false;
}

// Extract image URL from HTML content
function extractImageFromContent(content: string): string | null {
  const imgMatch = content.match(/<img[^>]+src=["']([^"']+)["']/i);
  if (imgMatch?.[1] && isImageUrl(imgMatch[1])) {
    return imgMatch[1];
  }
  return null;
}

async function backfillImages() {
  console.log('Backfilling image URLs from existing content...\n');

  // Get all raw_items that have content with <img> but no image_url
  const { data: items, error } = await supabase
    .from('raw_items')
    .select('id, title, content')
    .is('image_url', null)
    .not('content', 'is', null);

  if (error) {
    console.error('Error fetching items:', error.message);
    return;
  }

  console.log(`Found ${items?.length || 0} items without image_url\n`);

  let updated = 0;
  let skipped = 0;

  for (const item of items || []) {
    if (!item.content?.includes('<img')) {
      skipped++;
      continue;
    }

    const imageUrl = extractImageFromContent(item.content);

    if (imageUrl) {
      const { error: updateError } = await supabase
        .from('raw_items')
        .update({ image_url: imageUrl })
        .eq('id', item.id);

      if (updateError) {
        console.error(`  Error updating ${item.title?.slice(0, 40)}: ${updateError.message}`);
      } else {
        console.log(`  ✓ ${item.title?.slice(0, 50)}...`);
        console.log(`    Image: ${imageUrl.slice(0, 60)}...`);
        updated++;
      }
    } else {
      skipped++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);

  // Also update articles that have raw_item_id linking to items we just updated
  if (updated > 0) {
    console.log('\nUpdating published articles...');

    // Get articles that don't have image_url but their raw_item does
    const { data: articles } = await supabase
      .from('articles')
      .select('id, raw_item_id')
      .is('image_url', null)
      .not('raw_item_id', 'is', null);

    let articlesUpdated = 0;

    for (const article of articles || []) {
      // Get the raw_item's image_url
      const { data: rawItem } = await supabase
        .from('raw_items')
        .select('image_url')
        .eq('id', article.raw_item_id)
        .single();

      if (rawItem?.image_url) {
        const { error: updateError } = await supabase
          .from('articles')
          .update({ image_url: rawItem.image_url })
          .eq('id', article.id);

        if (!updateError) {
          articlesUpdated++;
        }
      }
    }

    console.log(`Articles updated with images: ${articlesUpdated}`);
  }
}

backfillImages()
  .then(() => {
    console.log('\nDone!');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error:', err);
    process.exit(1);
  });
