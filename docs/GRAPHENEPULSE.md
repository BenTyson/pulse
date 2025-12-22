# Graphene Pulse

> The pulse of the graphene industry.

**For quick context, start with [session-start/README.md](./session-start/README.md)**

---

## Overview

Graphene Pulse is an AI-powered news aggregation + wiki for the graphene industry. Beautiful design, automated content, zero user friction.

**Core Components:**
1. Automated News Aggregation - AI pipeline scrapes, filters, classifies, summarizes
2. Wiki - Magazine-quality knowledge base
3. Newsletter - "Graphene Weekly" curated digest
4. Company Directory - Manufacturers, startups, research labs

## Quick Links

| Doc | Purpose |
|-----|---------|
| [session-start/README.md](./session-start/README.md) | 60-second context for agents |
| [session-start/STATUS.md](./session-start/STATUS.md) | Current progress & next steps |
| [session-start/DESIGN.md](./session-start/DESIGN.md) | Design system & colors |
| [session-start/ARCHITECTURE.md](./session-start/ARCHITECTURE.md) | Technical architecture |

---

## Vision

**"TechCrunch meets Wikipedia for graphene"** - authoritative but accessible, beautiful but substantive, automated but high-quality.

### Target Users

| Audience | Need |
|----------|------|
| Researchers | Latest papers, breakthroughs, funding |
| Investors | Market trends, company news, IPOs |
| Engineers | Applications, products, technical guides |
| Executives | Market intel, partnerships, regulations |
| Students | Educational wiki, career opportunities |

### Differentiators

- Beautiful modern design (competitors look like 2005)
- AI-powered automation (not manual curation)
- Open access (not membership-gated)
- Newsletter digest (direct to inbox)

---

## Stack (Final Decisions)

| Layer | Choice |
|-------|--------|
| Framework | Astro |
| Styling | Tailwind CSS v4 |
| Database | Supabase |
| Hosting | Railway |
| AI | Claude API |
| Search | Meilisearch |
| Newsletter | Buttondown |

---

## Implementation Phases

| Phase | Status | Description |
|-------|--------|-------------|
| 1. Foundation | **Complete** | Site, UI, seed content |
| 2. Scraping | Pending | Automated content ingestion |
| 3. AI Pipeline | Pending | Classification, summarization |
| 4. Newsletter | Pending | Automated weekly digest |
| 5. Search | Pending | Full-text search |
| 6. Monetization | Pending | Sponsors, premium tier |

---

## Revenue Model

| Stream | Target |
|--------|--------|
| Newsletter Sponsors | $200-2,000/issue |
| Premium Tier | $10-20/month |
| Display Ads | At 50K+ traffic |
| Job Board | $100-200/listing |

**Target:** $2-5K/month

---

## Design Principles

- **Dark mode only** - `#0d0d0d` background, no light mode
- **Monochrome palette** - White/silver/gray only
- **No emojis** - Text and subtle SVG only
- **High contrast** - White buttons on dark
- **Apple-level restraint** - Every pixel intentional

See [session-start/DESIGN.md](./session-start/DESIGN.md) for full system.

---

## Scraping Pipeline (Future)

```
Sources → Scrapers → Raw Queue → AI Processor → Published Articles
                                              → Newsletter
                                              → RSS Feed
```

### Target Sources

- arXiv, Nanowerk, Phys.org, EurekAlert
- Business Wire, PR Newswire
- Graphene Flagship, National Graphene Institute
- Company newsrooms

---

## Decisions (Do Not Re-evaluate)

- Astro over SvelteKit (better for content sites)
- Claude over OpenAI (better quality)
- Meilisearch over Algolia (cost-effective)
- Dark mode only (brand identity)
- No user accounts (maximum passivity)
- Monochrome design (no colorful badges)
- No emojis (luxury aesthetic)

---

## About Graphene

Single layer of carbon atoms in hexagonal lattice. Nobel Prize 2010.

| Property | Value |
|----------|-------|
| Strength | 200x steel |
| Conductivity | Best known |
| Thickness | 1 atom |
| Transparency | 97.7% |

**Market:** $200M (2023) to $1.5B+ (2030)

---

## Session Log

### 2024-12-20
- Phase 1 complete
- UI v2 polish: removed emojis, fixed button contrast, monochrome badges
- Created session-start documentation folder

### 2024-12-19
- Project created
- Initial planning and architecture
