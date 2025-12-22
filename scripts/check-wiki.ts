import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const db = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY!
);

async function main() {
  const { data } = await db
    .from('wiki_pages')
    .select('slug, title, content, meta_description')
    .order('display_order');

  for (const page of data || []) {
    console.log('='.repeat(60));
    console.log('SLUG:', page.slug);
    console.log('TITLE:', page.title);
    console.log('META:', page.meta_description);
    console.log('CONTENT LENGTH:', page.content?.length || 0, 'chars');
    console.log('---');
    console.log(page.content || '(empty)');
    console.log();
  }
}

main();
