import { createClient } from '@supabase/supabase-js';
import type { Database } from './database.types';

const supabaseUrl = import.meta.env.SUPABASE_URL;
const supabaseAnonKey = import.meta.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

// Helper function to fetch articles
export async function getArticles(options?: {
  limit?: number;
  offset?: number;
  category?: string;
  featured?: boolean;
}) {
  let query = supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (options?.category) {
    query = query.eq('category', options.category);
  }

  if (options?.featured) {
    query = query.eq('featured', true);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  if (options?.offset) {
    query = query.range(options.offset, options.offset + (options.limit || 10) - 1);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }

  return data;
}

// Helper function to fetch a single article by slug
export async function getArticleBySlug(slug: string) {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('Error fetching article:', error);
    return null;
  }

  return data;
}

// Helper function to fetch wiki pages
export async function getWikiPages(parentSlug?: string) {
  let query = supabase
    .from('wiki_pages')
    .select('*')
    .eq('status', 'published')
    .order('display_order', { ascending: true });

  if (parentSlug) {
    query = query.eq('parent_slug', parentSlug);
  } else {
    query = query.is('parent_slug', null);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching wiki pages:', error);
    return [];
  }

  return data;
}

// Helper function to fetch a single wiki page by slug
export async function getWikiPageBySlug(slug: string) {
  const { data, error } = await supabase
    .from('wiki_pages')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (error) {
    console.error('Error fetching wiki page:', error);
    return null;
  }

  return data;
}

// Helper function to fetch companies
export async function getCompanies(options?: {
  limit?: number;
  type?: string;
}) {
  let query = supabase
    .from('companies')
    .select('*')
    .order('name', { ascending: true });

  if (options?.type) {
    query = query.eq('company_type', options.type);
  }

  if (options?.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching companies:', error);
    return [];
  }

  return data;
}

// Helper to get categories with article counts
export async function getCategoriesWithCounts() {
  const { data, error } = await supabase
    .from('articles')
    .select('category')
    .eq('status', 'published');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  const counts: Record<string, number> = {};
  data.forEach((article) => {
    if (article.category) {
      counts[article.category] = (counts[article.category] || 0) + 1;
    }
  });

  return Object.entries(counts).map(([category, count]) => ({
    category,
    count,
  }));
}
