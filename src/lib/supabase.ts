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

// Topic hub configuration
export interface TopicConfig {
  slug: string;
  title: string;
  description: string;
  keywords: string[]; // Keywords to match in tags and title
  icon: string;
  color: string;
}

export const TOPIC_HUBS: TopicConfig[] = [
  {
    slug: 'batteries',
    title: 'Graphene Batteries',
    description: 'Energy storage innovations including lithium-ion enhancement, anodes, supercapacitors, and next-generation battery technology using graphene materials.',
    keywords: ['battery', 'batteries', 'anode', 'cathode', 'lithium', 'li-ion', 'supercapacitor', 'energy storage', 'charging', 'electrode'],
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    color: 'amber',
  },
  {
    slug: 'electronics',
    title: 'Graphene Electronics',
    description: 'Semiconductor applications, transistors, displays, sensors, and flexible electronics leveraging graphene\'s exceptional electrical properties.',
    keywords: ['transistor', 'semiconductor', 'display', 'sensor', 'electronic', 'chip', 'circuit', 'flexible', 'wearable', 'photodetector'],
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    color: 'blue',
  },
  {
    slug: 'composites',
    title: 'Graphene Composites',
    description: 'Structural materials, polymer composites, coatings, and advanced materials enhanced with graphene for improved strength and functionality.',
    keywords: ['composite', 'coating', 'polymer', 'structural', 'concrete', 'epoxy', 'resin', 'reinforcement', 'strength', 'lightweight'],
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    color: 'purple',
  },
  {
    slug: 'production',
    title: 'Graphene Production',
    description: 'Manufacturing methods including CVD, exfoliation, graphene oxide reduction, and scaling up graphene production for industrial applications.',
    keywords: ['cvd', 'production', 'manufacturing', 'exfoliation', 'synthesis', 'oxide', 'reduction', 'scaling', 'industrial', 'process'],
    icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
    color: 'emerald',
  },
  {
    slug: 'research',
    title: 'Graphene Research',
    description: 'Academic breakthroughs, fundamental science discoveries, and cutting-edge research advancing our understanding of graphene and 2D materials.',
    keywords: ['research', 'study', 'discovery', 'university', 'academic', 'scientists', 'breakthrough', 'paper', 'journal', 'fundamental'],
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    color: 'rose',
  },
];

// Helper function to fetch articles by topic
export async function getArticlesByTopic(
  topicSlug: string,
  options?: { limit?: number; offset?: number }
) {
  const topic = TOPIC_HUBS.find((t) => t.slug === topicSlug);
  if (!topic) {
    console.error(`Topic not found: ${topicSlug}`);
    return [];
  }

  // Fetch all published articles
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('published_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles for topic:', error);
    return [];
  }

  // Filter articles that match topic keywords in tags or title
  const filteredArticles = data.filter((article) => {
    const titleLower = article.title.toLowerCase();
    const tags = article.tags || [];
    const tagsLower = tags.map((t) => t.toLowerCase());

    return topic.keywords.some(
      (keyword) =>
        titleLower.includes(keyword.toLowerCase()) ||
        tagsLower.some((tag) => tag.includes(keyword.toLowerCase()))
    );
  });

  // Apply pagination
  const start = options?.offset || 0;
  const end = options?.limit ? start + options.limit : undefined;

  return filteredArticles.slice(start, end);
}

// Helper to get topic article counts
export async function getTopicCounts() {
  const { data, error } = await supabase
    .from('articles')
    .select('title, tags')
    .eq('status', 'published');

  if (error) {
    console.error('Error fetching topic counts:', error);
    return {};
  }

  const counts: Record<string, number> = {};

  TOPIC_HUBS.forEach((topic) => {
    counts[topic.slug] = data.filter((article) => {
      const titleLower = article.title.toLowerCase();
      const tags = article.tags || [];
      const tagsLower = tags.map((t) => t.toLowerCase());

      return topic.keywords.some(
        (keyword) =>
          titleLower.includes(keyword.toLowerCase()) ||
          tagsLower.some((tag) => tag.includes(keyword.toLowerCase()))
      );
    }).length;
  });

  return counts;
}

// Helper to get companies by focus area keywords
export async function getCompaniesByTopic(
  topicSlug: string,
  options?: { limit?: number }
) {
  const topic = TOPIC_HUBS.find((t) => t.slug === topicSlug);
  if (!topic) {
    return [];
  }

  const { data, error } = await supabase
    .from('companies')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching companies for topic:', error);
    return [];
  }

  // Filter companies whose focus areas match topic keywords
  const filtered = data.filter((company) => {
    const focusAreas = company.focus_areas || [];
    const focusLower = focusAreas.map((f) => f.toLowerCase());

    return topic.keywords.some((keyword) =>
      focusLower.some((focus) => focus.includes(keyword.toLowerCase()))
    );
  });

  return options?.limit ? filtered.slice(0, options.limit) : filtered;
}
