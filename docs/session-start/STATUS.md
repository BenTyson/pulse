# Project Status

> Last updated: 2024-12-22

## Phase Overview

| Phase | Status | Description |
|-------|--------|-------------|
| 1. Foundation | **Complete** | Site structure, UI, seed content |
| 2. Scraping | **Complete** | Automated content ingestion |
| 3. AI Pipeline | **Complete** | Classification, summarization |
| 4. Newsletter | **Complete** | Automated weekly digest |
| 5. Search | **Complete** | Full-text search |
| 6. Monetization | Not started | Sponsors, premium tier |

## Phase 1 Completion Details

- [x] Astro project initialized (SSR mode, port 4499)
- [x] Tailwind CSS v4 with custom design tokens
- [x] Supabase schema deployed
- [x] Database seeded (10 articles, 4 wiki pages, 5 companies)
- [x] All core pages built
- [x] UI v2 Polish (no emojis, monochrome, high contrast)

## Phase 2 Completion Details

- [x] RSS scraper module (`workers/scraper/rss.ts`)
- [x] Source configuration system
- [x] Database helpers for raw_items (`workers/db.ts`)
- [x] CLI runner with commands
- [x] 6 active RSS sources configured

### Scraper Commands

```bash
npm run scrape        # Scrape all sources
npm run scrape:seed   # Seed sources to database
npm run scrape:stats  # Show statistics
```

## Phase 3 Completion Details

- [x] Claude API integration (`workers/processor/claude.ts`)
- [x] Relevance filter (graphene/2D materials detection)
- [x] Category classifier (research, business, products, investment)
- [x] AI-powered summarization
- [x] Keyword fallback when API unavailable
- [x] Pipeline: raw_items -> articles

### Processor Commands

```bash
npm run process       # Process 10 items
npm run process:all   # Process all items
npm run process:stats # Show queue statistics
```

## Phase 4 Completion Details

- [x] Resend email service integration (`workers/newsletter/resend.ts`)
- [x] Email template matching site design (`workers/newsletter/template.ts`)
- [x] Weekly digest generation (`workers/newsletter/digest.ts`)
- [x] Newsletter CLI runner (`workers/newsletter/run.ts`)
- [x] Subscribe API saves to Supabase
- [x] RLS policies for subscribers/newsletter_issues tables

### Newsletter Commands

```bash
npm run newsletter        # Preview digest (no send)
npm run newsletter:send   # Send to all subscribers
npm run newsletter:stats  # Show subscriber statistics
```

To send a test email:
```bash
npx tsx workers/newsletter/run.ts --test your@email.com
```

### Environment Variables Required

```
RESEND_API_KEY=re_...     # Get from resend.com
```

## Phase 5 Completion Details

- [x] PostgreSQL full-text search with tsvector
- [x] Weighted search (title > summary > tags)
- [x] Search API endpoint (`/api/search`)
- [x] Search modal with keyboard navigation
- [x] Cmd/Ctrl+K shortcut to open search
- [x] Arrow key navigation and Enter to select

### Search Features

- Full-text search across article titles, summaries, and tags
- Relevance ranking with PostgreSQL ts_rank
- Fallback to ILIKE search if FTS fails
- Debounced input (200ms)
- Keyboard shortcuts: ⌘K to open, ESC to close, ↑↓ to navigate

## Database Content

| Table | Count |
|-------|-------|
| articles | 84 |
| wiki_pages | 4 |
| companies | 5 |
| sources | 11 (6 active) |
| raw_items | 191 |
| subscribers | 0 |

## UI/UX v3 Polish

- [x] Article page: removed duplicate content (AI summary only, no RSS excerpt)
- [x] Article page: "Read Full Article" CTA moved above related articles
- [x] Wiki index redesigned (dynamic pages, cleaner layout)
- [x] Wiki article markdown rendering fixed (using marked)
- [x] Wiki typography improved (proper heading spacing, line-height)
- [x] Button text contrast fixed (`text-black` on white backgrounds)
- [x] Removed broken wiki sub-page links
- [x] WikiNav now shows only existing pages

## Known Issues

- Wiki only has 4 pages (what-is-graphene, properties, applications, glossary)

## Environment

```
Dev server: http://localhost:4499
Supabase: jnasccbjmuwewjkpydca.supabase.co
```

## Related Docs

- [README.md](./README.md) - Quick start
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details
- [DESIGN.md](./DESIGN.md) - Design system
