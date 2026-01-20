import type { APIRoute } from 'astro';
import { getArticles } from '../lib/supabase';

export const GET: APIRoute = async ({ site }) => {
  const articles = await getArticles({ limit: 50 });
  const siteUrl = site?.toString() || 'https://graphenepulse.com';

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Graphene Pulse</title>
    <description>AI-curated graphene news and research. Quality over quantity - focused coverage of graphene science, industry, and applications.</description>
    <link>${siteUrl}</link>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Graphene Pulse</generator>
    <docs>https://www.rssboard.org/rss-specification</docs>
    <ttl>60</ttl>
    <image>
      <url>${siteUrl}/favicon.svg</url>
      <title>Graphene Pulse</title>
      <link>${siteUrl}</link>
    </image>
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
      ${article.source_url ? `<source url="${escapeXml(article.source_url)}">${escapeXml(article.source_name || 'Original Source')}</source>` : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
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
