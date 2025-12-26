# Deployment Guide

Graphene Pulse is an Astro SSR application using the Node.js adapter. This guide covers deployment options.

## Environment Variables

All deployments require these environment variables:

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | Yes | Your Supabase project URL |
| `SUPABASE_ANON_KEY` | Yes | Supabase anonymous/public key |
| `SUPABASE_SERVICE_KEY` | Workers | Service role key (for scraper/processor) |
| `ANTHROPIC_API_KEY` | Workers | Claude API key (for AI processing) |
| `RESEND_API_KEY` | Workers | Resend API key (for newsletter) |

## Option 1: Vercel (Recommended)

### Setup

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Add environment variables in Vercel Dashboard:
   - Go to Project Settings > Environment Variables
   - Add `SUPABASE_URL` and `SUPABASE_ANON_KEY`

### Configuration

The project is configured for Node.js standalone mode. Vercel automatically detects Astro and configures the build.

### Workers

Vercel doesn't support long-running workers. Run scrapers/processors externally:
- GitHub Actions (scheduled)
- Railway worker
- Local cron job

## Option 2: Railway

Railway supports both the web app and workers.

### Setup

1. Create a new project on [railway.app](https://railway.app)

2. Connect your GitHub repository

3. Configure build settings:
   - Build command: `npm run build`
   - Start command: `npm run start`

4. Add environment variables in Railway dashboard

### Workers on Railway

Create separate services for workers:

**Scraper Service:**
- Start command: `npm run scrape`
- Schedule via Railway cron

**Processor Service:**
- Start command: `npm run process:all`
- Schedule via Railway cron

## Option 3: Docker (Self-Hosted)

### Dockerfile

Create `Dockerfile`:

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

ENV HOST=0.0.0.0
ENV PORT=4499

EXPOSE 4499

CMD ["node", "./dist/server/entry.mjs"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "4499:4499"
    environment:
      - SUPABASE_URL=${SUPABASE_URL}
      - SUPABASE_ANON_KEY=${SUPABASE_ANON_KEY}
    restart: unless-stopped

  scraper:
    build: .
    command: npm run scrape
    environment:
      - SUPABASE_URL=${SUPABASE_URL}
      - SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY}
    profiles:
      - workers

  processor:
    build: .
    command: npm run process:all
    environment:
      - SUPABASE_URL=${SUPABASE_URL}
      - SUPABASE_SERVICE_KEY=${SUPABASE_SERVICE_KEY}
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    profiles:
      - workers
```

### Build and Run

```bash
# Build
docker build -t graphene-pulse .

# Run
docker run -p 4499:4499 \
  -e SUPABASE_URL=your-url \
  -e SUPABASE_ANON_KEY=your-key \
  graphene-pulse
```

## Option 4: Fly.io

### Setup

1. Install Fly CLI:
   ```bash
   curl -L https://fly.io/install.sh | sh
   ```

2. Initialize:
   ```bash
   fly launch
   ```

3. Deploy:
   ```bash
   fly deploy
   ```

4. Set secrets:
   ```bash
   fly secrets set SUPABASE_URL=xxx SUPABASE_ANON_KEY=xxx
   ```

## Automated Workers

### GitHub Actions

Create `.github/workflows/scraper.yml`:

```yaml
name: Run Scraper

on:
  schedule:
    - cron: '0 */6 * * *'  # Every 6 hours
  workflow_dispatch:

jobs:
  scrape:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - run: npm ci

      - run: npm run scrape
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_SERVICE_KEY: ${{ secrets.SUPABASE_SERVICE_KEY }}

      - run: npm run process:all
        env:
          SUPABASE_URL: ${{ secrets.SUPABASE_URL }}
          SUPABASE_SERVICE_KEY: ${{ secrets.SUPABASE_SERVICE_KEY }}
          ANTHROPIC_API_KEY: ${{ secrets.ANTHROPIC_API_KEY }}
```

### Cron Timing Recommendations

| Task | Frequency | Cron Expression |
|------|-----------|-----------------|
| Scraper | Every 6 hours | `0 */6 * * *` |
| Processor | After scraper | Chain in workflow |
| Newsletter | Weekly (Mon 9am) | `0 9 * * 1` |

## Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] Database connection working
- [ ] Homepage loads correctly
- [ ] Articles display from Supabase
- [ ] Search functionality works
- [ ] Newsletter signup works
- [ ] Workers scheduled (scraper, processor)
- [ ] SSL certificate active
- [ ] Custom domain configured (graphenepulse.com)

## Monitoring

### Health Check

Add a health endpoint at `/api/health`:

```typescript
// src/pages/api/health.ts
export const GET = async () => {
  return new Response(JSON.stringify({ status: 'ok' }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
};
```

### Logging

Monitor these for issues:
- Supabase connection errors
- Claude API rate limits
- Worker execution times

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm ci
npm run build
```

### Environment Variables Not Loading

- Verify variables are set in deployment platform
- Check for typos in variable names
- Ensure no quotes around values in platform UI

### Database Connection Issues

- Verify Supabase URL is correct
- Check if IP needs whitelisting
- Verify anon key has correct permissions
