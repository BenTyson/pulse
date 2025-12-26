# Project Status

> Last updated: 2024-12-26

## Phase Overview

| Phase | Status | Description |
|-------|--------|-------------|
| 1. Foundation | **Complete** | Site structure, UI, seed content |
| 2. Scraping | **Complete** | V2 with graphene pre-filtering |
| 3. AI Pipeline | **Complete** | Classification, summarization |
| 4. Newsletter | **Complete** | Automated weekly digest |
| 5. Search | **Complete** | Full-text search |
| 6. Deployment | **Complete** | Production-ready setup |
| 7. Monetization | Not started | Sponsors, premium tier |

## Recent Updates (Dec 26, 2024)

### Scraper V2
- Pre-filtering at scrape time (graphene-only keywords)
- Centralized filter config (`workers/scraper/filter.ts`)
- Word-boundary matching to reduce false positives
- Tracking for skipped/duplicate items

### Wiki Expansion
- Expanded from 4 to 9 comprehensive pages
- New pages: Production Methods, Market Overview, Safety & Handling, Graphene Grades, History & Timeline
- Each page 7,000-10,000+ characters of accurate content

### UI/UX V4 Polish
- Wiki index: hexagon pattern, stats bar, featured article, topic grid
- Wiki articles: reading progress bar, auto ToC, prev/next navigation
- News pages: Live Feed badge, category filters, featured hero, improved cards
- Companies: global directory badge, stats, category cards, location icons
- Homepage: stats bar, improved hero, category icons, wiki preview

### Deployment Ready
- GitHub Actions workflows for scraper/newsletter
- Health check endpoint (`/api/health`)
- Comprehensive deployment guide (`docs/DEPLOYMENT.md`)
- Environment variables documented

## Database Content

| Table | Count |
|-------|-------|
| articles | 84+ |
| wiki_pages | 9 |
| companies | 5 |
| sources | 11 (6 active) |
| raw_items | 191+ |
| subscribers | 0 |

## Commands

### Development
```bash
npm run dev           # Start dev server (port 4499)
npm run build         # Production build
npm run preview       # Preview production build
npm run start         # Start production server
```

### Scraper
```bash
npm run scrape        # Scrape all sources
npm run scrape:seed   # Seed sources to database
npm run scrape:stats  # Show statistics
```

### Processor
```bash
npm run process       # Process 10 items
npm run process:all   # Process all items
npm run process:stats # Show queue statistics
```

### Newsletter
```bash
npm run newsletter        # Preview digest
npm run newsletter:send   # Send to subscribers
npm run newsletter:stats  # Show statistics
```

## Environment Variables

| Variable | Required | Use |
|----------|----------|-----|
| `SUPABASE_URL` | Yes | Database connection |
| `SUPABASE_ANON_KEY` | Yes | Frontend queries |
| `SUPABASE_SERVICE_KEY` | Workers | Admin operations |
| `ANTHROPIC_API_KEY` | Workers | AI processing |
| `RESEND_API_KEY` | Workers | Email sending |

## Deployment Options

- **Vercel** - Recommended, auto-detects Astro
- **Railway** - Supports web + workers
- **Docker** - Self-hosted option
- **Fly.io** - Container deployment

See `docs/DEPLOYMENT.md` for full instructions.

## GitHub Actions

- `.github/workflows/scraper.yml` - Runs every 6 hours
- `.github/workflows/newsletter.yml` - Runs weekly (Monday 9am UTC)

## Environment

```
Dev server: http://localhost:4499
Production: https://graphenepulse.com
Supabase: jnasccbjmuwewjkpydca.supabase.co
```

## Related Docs

- [README.md](./README.md) - Quick start
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical details
- [DESIGN.md](./DESIGN.md) - Design system
- [DEPLOYMENT.md](../DEPLOYMENT.md) - Deployment guide
