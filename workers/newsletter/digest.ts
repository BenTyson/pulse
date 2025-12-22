import { db } from '../db.js';
import type { Article } from '../../src/lib/database.types';

export interface DigestConfig {
  daysBack?: number;
  maxArticles?: number;
}

export async function getWeeklyDigestArticles(config: DigestConfig = {}): Promise<Article[]> {
  const { daysBack = 7, maxArticles = 10 } = config;

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysBack);

  const { data: articles, error } = await db
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .gte('published_at', cutoffDate.toISOString())
    .order('importance_score', { ascending: false })
    .order('published_at', { ascending: false })
    .limit(maxArticles);

  if (error) {
    console.error('[Digest] Error fetching articles:', error.message);
    return [];
  }

  return (articles as Article[]) || [];
}

export async function getActiveSubscribers(): Promise<{ email: string; id: string }[]> {
  const { data, error } = await db
    .from('subscribers')
    .select('id, email')
    .is('unsubscribed_at', null);

  if (error) {
    console.error('[Digest] Error fetching subscribers:', error.message);
    return [];
  }

  return data || [];
}

export async function recordNewsletterIssue(
  subject: string,
  content: string,
  articleIds: string[]
): Promise<string | null> {
  const { data, error } = await db
    .from('newsletter_issues')
    .insert({
      subject,
      content,
      article_ids: articleIds,
      sent_at: new Date().toISOString(),
    })
    .select('id')
    .single();

  if (error) {
    console.error('[Digest] Error recording issue:', error.message);
    return null;
  }

  return data?.id || null;
}

export function formatWeekOf(): string {
  const now = new Date();
  return now.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
