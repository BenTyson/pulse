# Technical Architecture

## Stack

| Layer | Technology | Notes |
|-------|------------|-------|
| Framework | Astro 5.x | SSR mode, Node adapter |
| Styling | Tailwind CSS v4 | `@theme` in CSS, not config file |
| Database | Supabase | Postgres + RLS |
| Hosting | Railway | (planned) |
| AI | Claude API | (Phase 3) |
| Search | Meilisearch | (Phase 5) |
| Newsletter | Buttondown | (Phase 4) |

## Project Structure

```
pulse/
├── src/
│   ├── pages/
│   │   ├── index.astro              # Homepage
│   │   ├── news/
│   │   │   ├── index.astro          # News listing
│   │   │   └── [slug].astro         # Article detail
│   │   ├── wiki/
│   │   │   ├── index.astro          # Wiki hub
│   │   │   └── [...slug].astro      # Wiki pages (catch-all)
│   │   ├── companies/
│   │   │   ├── index.astro          # Directory
│   │   │   └── [slug].astro         # Company profile
│   │   ├── category/
│   │   │   └── [category].astro     # Category filter
│   │   ├── newsletter.astro
│   │   ├── about.astro
│   │   └── api/
│   │       └── subscribe.ts         # Newsletter API
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ArticleCard.astro
│   │   ├── NewsletterSignup.astro
│   │   └── WikiNav.astro
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ArticleLayout.astro
│   │   └── WikiLayout.astro
│   ├── lib/
│   │   ├── supabase.ts              # DB client & queries
│   │   └── database.types.ts        # TypeScript types
│   └── styles/
│       └── global.css               # Design tokens
├── supabase/
│   └── migrations/
│       └── 001_initial_schema.sql
├── scripts/
│   └── seed.js                      # Database seeder
├── docs/
│   ├── session-start/               # Agent docs
│   └── GRAPHENEPULSE.md            # Full spec
├── astro.config.mjs
├── package.json
└── .env
```

## Database Schema

### Core Tables

**articles**
```sql
id, slug, title, summary, content, category,
source_url, source_name, author, published_at,
featured, tags[], status, view_count
```

**wiki_pages**
```sql
id, slug, title, content (markdown), parent_slug,
display_order, meta_description, status
```

**companies**
```sql
id, slug, name, description, logo_url, website,
company_type, focus_areas[], headquarters,
founded_year, funding_total
```

**subscribers**
```sql
id, email, frequency, subscribed_at, confirmed
```

### Future Tables (Phase 2+)

**sources** - RSS feeds and scrape configs
**raw_items** - Unprocessed scraped content

## URL Routes

```
/                        Homepage
/news                    News listing (paginated)
/news/[slug]            Article detail
/category/[category]    Category filter
/wiki                   Wiki hub
/wiki/[...slug]         Wiki pages
/companies              Company directory
/companies/[slug]       Company profile
/newsletter             Newsletter signup
/about                  About page
/api/subscribe          POST newsletter signup
```

## Configuration

### astro.config.mjs

```javascript
export default defineConfig({
  site: 'https://graphenepulse.com',
  output: 'server',
  server: { port: 4499 },
  adapter: node({ mode: 'standalone' }),
  vite: {
    plugins: [tailwindcss()]
  }
});
```

### Environment Variables

```
SUPABASE_URL=https://xxx.supabase.co
SUPABASE_ANON_KEY=xxx
```

## Data Flow

### Current (Phase 1)

```
Seed Script → Supabase → Astro Pages → Browser
```

### Future (Phase 2+)

```
Sources → Scrapers → Raw Queue → AI Processor → Articles → Site
                                              → Newsletter
```

## Key Functions

### src/lib/supabase.ts

```typescript
getArticles({ category?, featured?, limit?, offset? })
getArticleBySlug(slug)
getWikiPages()
getWikiPageBySlug(slug)
getCompanies()
getCompanyBySlug(slug)
getCategoriesWithCounts()
```

## Related Docs

- [README.md](./README.md) - Quick start
- [STATUS.md](./STATUS.md) - Current progress
- [DESIGN.md](./DESIGN.md) - Design system
- [../GRAPHENEPULSE.md](../GRAPHENEPULSE.md) - Full project spec
