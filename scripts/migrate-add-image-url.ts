/**
 * Migration: Add image_url column to raw_items table
 * Uses Supabase's rpc to execute raw SQL
 */

import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Missing SUPABASE_URL or SUPABASE_SERVICE_KEY');
  console.log('\nThis migration requires SUPABASE_SERVICE_KEY (not SUPABASE_ANON_KEY)');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  db: { schema: 'public' },
});

async function runMigration() {
  console.log('Running migration: Add image_url column to raw_items...\n');

  // Try to add the column using a database function or direct insert test
  // First, let's check if the column exists by trying to select it
  const { data: testData, error: testError } = await supabase
    .from('raw_items')
    .select('id, image_url')
    .limit(1);

  if (!testError) {
    console.log('✓ Column image_url already exists in raw_items table');
    console.log('  Migration not needed.');
    return true;
  }

  // Column doesn't exist - we need to add it via Supabase Dashboard
  // The JS client cannot run DDL statements directly
  console.log('The image_url column needs to be added to raw_items.');
  console.log('\n' + '═'.repeat(60));
  console.log('MANUAL STEP REQUIRED');
  console.log('═'.repeat(60));
  console.log('\n1. Go to your Supabase Dashboard');
  console.log(`   ${supabaseUrl.replace('.supabase.co', '.supabase.co/project/')}`);
  console.log('\n2. Navigate to: SQL Editor');
  console.log('\n3. Run this SQL:\n');
  console.log('   ┌' + '─'.repeat(56) + '┐');
  console.log('   │ ALTER TABLE raw_items                                │');
  console.log('   │ ADD COLUMN IF NOT EXISTS image_url TEXT;             │');
  console.log('   └' + '─'.repeat(56) + '┘');
  console.log('\n4. Click "Run" to execute');
  console.log('\n' + '═'.repeat(60));

  return false;
}

runMigration()
  .then((success) => {
    if (success) {
      console.log('\n✓ Migration complete! New articles will now include images.');
    } else {
      console.log('\nAfter running the SQL, re-run this script to verify.');
    }
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error:', err.message);
    process.exit(1);
  });
