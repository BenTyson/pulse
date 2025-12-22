# Graphene Pulse - Agent Quick Start

> Read this file first. 60 seconds to full context.

## What Is This?

**Graphene Pulse** is an AI-powered graphene industry news aggregator + wiki. Dark mode, luxury monochrome aesthetic.

## Stack

| Layer | Tech |
|-------|------|
| Framework | Astro (SSR, port 4499) |
| Styling | Tailwind CSS v4 |
| Database | Supabase (Postgres) |
| Hosting | Railway |

## Current Status

**Phase 1 Complete** - Foundation built, UI polished.

See [STATUS.md](./STATUS.md) for detailed progress.

## Critical Context

### Design Rules (Non-Negotiable)

- **Dark mode only** - `#0d0d0d` background
- **No emojis** - Ever
- **Monochrome palette** - White/silver/gray only
- **High contrast buttons** - `bg-white text-bg-primary`
- **Apple-level quality** - Restraint over decoration

See [DESIGN.md](./DESIGN.md) for full design system.

### Key Files

```
src/
├── pages/
│   ├── index.astro          # Homepage
│   ├── news/index.astro     # News listing
│   ├── wiki/index.astro     # Wiki hub
│   └── companies/index.astro # Company directory
├── components/
│   ├── ArticleCard.astro    # News cards
│   ├── Header.astro         # Site header
│   └── NewsletterSignup.astro
├── layouts/
│   └── BaseLayout.astro     # Base template
├── styles/
│   └── global.css           # Design tokens
└── lib/
    ├── supabase.ts          # DB client
    └── database.types.ts    # TypeScript types
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for full technical details.

### Database

Supabase project: `jnasccbjmuwewjkpydca`

Tables: `articles`, `wiki_pages`, `companies`, `subscribers`, `sources`, `raw_items`

### Commands

```bash
npm run dev      # Dev server (localhost:4499)
npm run build    # Production build
```

## What NOT To Do

1. Don't add emojis
2. Don't use colorful badges/buttons
3. Don't use `bg-silver text-bg-primary` (unreadable)
4. Don't re-debate stack decisions
5. Don't add light mode

## Related Docs

- [STATUS.md](./STATUS.md) - Current progress & next steps
- [DESIGN.md](./DESIGN.md) - Design system & colors
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Technical architecture
- [../GRAPHENEPULSE.md](../GRAPHENEPULSE.md) - Full project spec
