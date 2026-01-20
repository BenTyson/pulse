import type { APIRoute } from 'astro';
import { TOPIC_HUBS, getArticlesByTopic } from '../../../lib/supabase';

export const GET: APIRoute = async ({ params, site }) => {
  const topicSlug = params.topic;
  const topic = TOPIC_HUBS.find((t) => t.slug === topicSlug);

  if (!topic) {
    return new Response('Topic not found', { status: 404 });
  }

  const articles = await getArticlesByTopic(topicSlug, { limit: 30 });
  const siteUrl = site?.toString() || 'https://graphenepulse.com';

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Graphene Pulse - ${topic.title}</title>
    <description>${escapeXml(topic.description)}</description>
    <link>${siteUrl}/topics/${topicSlug}</link>
    <atom:link href="${siteUrl}/topics/${topicSlug}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Graphene Pulse</generator>
    <ttl>60</ttl>
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${escapeXml(article.title)}]]></title>
      <link>${siteUrl}/news/${article.slug}</link>
      <guid isPermaLink="true">${siteUrl}/news/${article.slug}</guid>
      <description><![CDATA[${escapeXml(article.summary || '')}]]></description>
      <pubDate>${article.published_at ? new Date(article.published_at).toUTCString() : new Date(article.created_at).toUTCString()}</pubDate>
      ${article.category ? `<category>${escapeXml(article.category)}</category>` : ''}
      ${article.source_name ? `<dc:creator>${escapeXml(article.source_name)}</dc:creator>` : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};

function escapeXml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}
