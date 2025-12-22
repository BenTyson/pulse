#!/usr/bin/env npx tsx
/**
 * Newsletter Runner
 *
 * Usage:
 *   npx tsx workers/newsletter/run.ts              # Preview digest (no send)
 *   npx tsx workers/newsletter/run.ts --send       # Send to all subscribers
 *   npx tsx workers/newsletter/run.ts --test EMAIL # Send test to specific email
 *   npx tsx workers/newsletter/run.ts --stats      # Show subscriber stats
 */

import {
  getWeeklyDigestArticles,
  getActiveSubscribers,
  recordNewsletterIssue,
  formatWeekOf,
} from './digest.js';
import { generateDigestHtml, generateSubject } from './template.js';
import { sendEmail } from './resend.js';

const args = process.argv.slice(2);

async function showStats() {
  const subscribers = await getActiveSubscribers();
  const articles = await getWeeklyDigestArticles();

  console.log('=== Newsletter Stats ===');
  console.log(`  Active subscribers: ${subscribers.length}`);
  console.log(`  Articles this week: ${articles.length}`);

  if (articles.length > 0) {
    console.log('\n  Top articles:');
    articles.slice(0, 5).forEach((a, i) => {
      console.log(`    ${i + 1}. ${a.title.slice(0, 60)}...`);
    });
  }
}

async function previewDigest() {
  const articles = await getWeeklyDigestArticles();
  const weekOf = formatWeekOf();

  if (articles.length === 0) {
    console.log('No articles found for this week.');
    return;
  }

  console.log('=== Digest Preview ===');
  console.log(`Week of: ${weekOf}`);
  console.log(`Articles: ${articles.length}`);
  console.log('\nSubject:', generateSubject(weekOf));
  console.log('\nArticles included:');

  articles.forEach((a, i) => {
    console.log(`  ${i + 1}. [${a.category}] ${a.title.slice(0, 60)}...`);
  });

  // Generate HTML preview
  const html = generateDigestHtml({
    articles,
    weekOf,
    unsubscribeUrl: 'https://graphenepulse.com/unsubscribe?token=PREVIEW',
  });

  console.log(`\nHTML generated: ${html.length} characters`);
  console.log('\nRun with --send to send to all subscribers');
  console.log('Run with --test your@email.com to send a test');
}

async function sendTestEmail(email: string) {
  const articles = await getWeeklyDigestArticles();
  const weekOf = formatWeekOf();

  if (articles.length === 0) {
    console.log('No articles found for this week.');
    return;
  }

  const subject = `[TEST] ${generateSubject(weekOf)}`;
  const html = generateDigestHtml({
    articles,
    weekOf,
    unsubscribeUrl: 'https://graphenepulse.com/unsubscribe?token=TEST',
  });

  console.log(`Sending test email to: ${email}`);
  const result = await sendEmail({ to: email, subject, html });

  if (result.success) {
    console.log('Test email sent successfully!');
  } else {
    console.error('Failed to send test email:', result.error);
  }
}

async function sendToAllSubscribers() {
  const articles = await getWeeklyDigestArticles();
  const subscribers = await getActiveSubscribers();
  const weekOf = formatWeekOf();

  if (articles.length === 0) {
    console.log('No articles found for this week. Aborting.');
    return;
  }

  if (subscribers.length === 0) {
    console.log('No active subscribers. Aborting.');
    return;
  }

  console.log(`=== Sending Newsletter ===`);
  console.log(`  Week of: ${weekOf}`);
  console.log(`  Articles: ${articles.length}`);
  console.log(`  Subscribers: ${subscribers.length}`);
  console.log('');

  const subject = generateSubject(weekOf);
  let sent = 0;
  let failed = 0;

  for (const subscriber of subscribers) {
    const html = generateDigestHtml({
      articles,
      weekOf,
      unsubscribeUrl: `https://graphenepulse.com/unsubscribe?token=${subscriber.id}`,
    });

    const result = await sendEmail({
      to: subscriber.email,
      subject,
      html,
    });

    if (result.success) {
      sent++;
      console.log(`  [OK] ${subscriber.email}`);
    } else {
      failed++;
      console.log(`  [FAIL] ${subscriber.email}: ${result.error}`);
    }

    // Rate limiting: 100ms between emails
    await new Promise((r) => setTimeout(r, 100));
  }

  console.log(`\n=== Send Complete ===`);
  console.log(`  Sent: ${sent}`);
  console.log(`  Failed: ${failed}`);

  // Record the newsletter issue
  if (sent > 0) {
    const articleIds = articles.map((a) => a.id);
    const html = generateDigestHtml({
      articles,
      weekOf,
      unsubscribeUrl: 'https://graphenepulse.com/unsubscribe',
    });
    const issueId = await recordNewsletterIssue(subject, html, articleIds);
    if (issueId) {
      console.log(`  Recorded as issue: ${issueId}`);
    }
  }
}

async function main() {
  if (args.includes('--help') || args.includes('help')) {
    console.log(`
Newsletter Runner for Graphene Pulse

Commands:
  (default)       Preview digest without sending
  --send          Send to all active subscribers
  --test EMAIL    Send test to specific email
  --stats         Show subscriber statistics
  --help          Show this help

Environment:
  RESEND_API_KEY  Required for sending emails
    `);
    return;
  }

  if (args.includes('--stats') || args.includes('stats')) {
    await showStats();
    return;
  }

  const testIndex = args.indexOf('--test');
  if (testIndex !== -1 && args[testIndex + 1]) {
    await sendTestEmail(args[testIndex + 1]);
    return;
  }

  if (args.includes('--send')) {
    await sendToAllSubscribers();
    return;
  }

  // Default: preview
  await previewDigest();
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
