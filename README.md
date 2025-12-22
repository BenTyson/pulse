# Graphene Pulse

> The pulse of the graphene industry

AI-powered news aggregation and knowledge hub for graphene research, business, and applications.

## Features

- **Automated News Aggregation** - AI-powered pipeline scrapes, filters, classifies, and summarizes graphene news
- **Beautiful Wiki** - Magazine-quality knowledge base covering graphene properties, applications, and more
- **Company Directory** - Database of graphene manufacturers, startups, and research labs
- **Weekly Newsletter** - Curated digest with top stories

## Tech Stack

- **Framework**: Astro (SSR)
- **Styling**: Tailwind CSS v4
- **Database**: Supabase (PostgreSQL)
- **Hosting**: Railway
- **AI Processing**: Claude API (planned)

## Getting Started

### Prerequisites

- Node.js 18+
- A Supabase project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/graphene-pulse.git
cd graphene-pulse
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your Supabase credentials
```

4. Push the database schema to Supabase:
```bash
# Using Supabase CLI
npx supabase db push
```

5. (Optional) Seed the database with sample content:
```bash
# Run the seed.sql file in your Supabase SQL editor
# Located at: supabase/seed.sql
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321`

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
graphene-pulse/
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── pages/            # Routes
│   ├── lib/              # Utilities and API clients
│   └── styles/           # Global styles
├── public/               # Static assets
├── supabase/
│   ├── migrations/       # Database schema
│   └── seed.sql          # Sample data
└── docs/                 # Project documentation
```

## Design System

- **Colors**: Charcoal dark (#0d0d0d) + Silver accents (#c0c0c0)
- **Typography**: Inter (body), JetBrains Mono (code)
- **Dark mode only** - commitment to the aesthetic

## Commands

| Command | Action |
|---------|--------|
| `npm run dev` | Start dev server at localhost:4321 |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run preview` | Preview production build |

## License

MIT
