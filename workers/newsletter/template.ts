import type { Article } from '../../src/lib/database.types';

interface DigestData {
  articles: Article[];
  weekOf: string;
  unsubscribeUrl: string;
}

export function generateDigestHtml({ articles, weekOf, unsubscribeUrl }: DigestData): string {
  const topStories = articles.filter((a) => a.category === 'research').slice(0, 3);
  const businessNews = articles.filter((a) => a.category === 'business').slice(0, 2);
  const otherNews = articles
    .filter((a) => !topStories.includes(a) && !businessNews.includes(a))
    .slice(0, 3);

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Graphene Weekly - ${weekOf}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #0d0d0d; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #0d0d0d;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom: 32px; border-bottom: 1px solid #262626;">
              <h1 style="margin: 0; font-size: 28px; font-weight: 700; color: #f5f5f5; letter-spacing: -0.5px;">
                Graphene Pulse
              </h1>
              <p style="margin: 8px 0 0 0; font-size: 14px; color: #737373;">
                Week of ${weekOf}
              </p>
            </td>
          </tr>

          <!-- Intro -->
          <tr>
            <td style="padding: 32px 0;">
              <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #a0a0a0;">
                This week's essential graphene news, curated for researchers, investors, and industry professionals.
              </p>
            </td>
          </tr>

          ${topStories.length > 0 ? `
          <!-- Research Highlights -->
          <tr>
            <td style="padding-bottom: 32px;">
              <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #e0e0e0; text-transform: uppercase; letter-spacing: 1px;">
                Research Highlights
              </h2>
              ${topStories.map((article) => articleBlock(article)).join('')}
            </td>
          </tr>
          ` : ''}

          ${businessNews.length > 0 ? `
          <!-- Industry News -->
          <tr>
            <td style="padding-bottom: 32px;">
              <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #e0e0e0; text-transform: uppercase; letter-spacing: 1px;">
                Industry News
              </h2>
              ${businessNews.map((article) => articleBlock(article)).join('')}
            </td>
          </tr>
          ` : ''}

          ${otherNews.length > 0 ? `
          <!-- More Stories -->
          <tr>
            <td style="padding-bottom: 32px;">
              <h2 style="margin: 0 0 20px 0; font-size: 18px; font-weight: 600; color: #e0e0e0; text-transform: uppercase; letter-spacing: 1px;">
                More Stories
              </h2>
              ${otherNews.map((article) => articleBlock(article)).join('')}
            </td>
          </tr>
          ` : ''}

          <!-- CTA -->
          <tr>
            <td style="padding: 24px 0; text-align: center; border-top: 1px solid #262626;">
              <a href="https://graphenepulse.com/news" style="display: inline-block; padding: 14px 28px; background-color: #ffffff; color: #0d0d0d; text-decoration: none; font-weight: 600; font-size: 14px; border-radius: 6px;">
                View All Articles
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 32px 0 0 0; border-top: 1px solid #262626;">
              <p style="margin: 0; font-size: 13px; color: #525252; text-align: center;">
                You're receiving this because you subscribed to Graphene Pulse.
              </p>
              <p style="margin: 12px 0 0 0; font-size: 13px; color: #525252; text-align: center;">
                <a href="${unsubscribeUrl}" style="color: #737373; text-decoration: underline;">Unsubscribe</a>
                &nbsp;&middot;&nbsp;
                <a href="https://graphenepulse.com" style="color: #737373; text-decoration: underline;">Visit Website</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function articleBlock(article: Article): string {
  const url = `https://graphenepulse.com/news/${article.slug}`;
  const summary = article.summary || '';

  return `
    <div style="padding: 16px 0; border-bottom: 1px solid #1a1a1a;">
      <a href="${url}" style="text-decoration: none;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 600; color: #f5f5f5; line-height: 1.4;">
          ${article.title}
        </h3>
      </a>
      <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #a0a0a0;">
        ${summary.slice(0, 150)}${summary.length > 150 ? '...' : ''}
      </p>
      <a href="${url}" style="display: inline-block; margin-top: 8px; font-size: 13px; color: #a3a3a3; text-decoration: none;">
        Read more &rarr;
      </a>
    </div>
  `;
}

export function generateSubject(weekOf: string): string {
  return `Graphene Weekly: ${weekOf}`;
}
