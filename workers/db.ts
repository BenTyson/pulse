import { createClient } from '@supabase/supabase-js';
import type { Database } from '../src/lib/database.types.js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing SUPABASE_URL or SUPABASE_ANON_KEY environment variables');
}

export const db = createClient<Database>(supabaseUrl, supabaseKey);

// Source helpers
export async function getActiveSources(type?: 'rss' | 'html' | 'api') {
  let query = db.from('sources').select('*').eq('is_active', true);

  if (type) {
    query = query.eq('scrape_type', type);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function updateSourceLastScraped(sourceId: string) {
  const { error } = await db
    .from('sources')
    .update({ last_scraped_at: new Date().toISOString() })
    .eq('id', sourceId);

  if (error) throw error;
}

// Raw items helpers
export async function insertRawItem(item: {
  source_id: string;
  external_id: string;
  title: string;
  content?: string;
  url: string;
  published_at?: string;
}) {
  const { data, error } = await db
    .from('raw_items')
    .upsert(
      {
        ...item,
        scraped_at: new Date().toISOString(),
        processed: false,
      },
      { onConflict: 'source_id,external_id', ignoreDuplicates: true }
    )
    .select();

  if (error) throw error;
  return data;
}

export async function getUnprocessedItems(limit = 50) {
  const { data, error } = await db
    .from('raw_items')
    .select('*')
    .eq('processed', false)
    .order('scraped_at', { ascending: true })
    .limit(limit);

  if (error) throw error;
  return data;
}

export async function markItemProcessed(itemId: string) {
  const { error } = await db
    .from('raw_items')
    .update({ processed: true })
    .eq('id', itemId);

  if (error) throw error;
}
