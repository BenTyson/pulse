-- Graphene Pulse Initial Schema
-- Created: 2024

-- News sources to scrape
CREATE TABLE sources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  feed_url TEXT,
  scrape_type TEXT CHECK (scrape_type IN ('rss', 'html', 'api')),
  scrape_config JSONB,
  scrape_frequency TEXT CHECK (scrape_frequency IN ('hourly', 'daily', 'weekly')),
  is_active BOOLEAN DEFAULT true,
  last_scraped_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Raw scraped items (before processing)
CREATE TABLE raw_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  source_id UUID REFERENCES sources(id) ON DELETE CASCADE,
  external_id TEXT,
  title TEXT NOT NULL,
  content TEXT,
  url TEXT NOT NULL,
  published_at TIMESTAMPTZ,
  scraped_at TIMESTAMPTZ DEFAULT NOW(),
  processed BOOLEAN DEFAULT false,
  UNIQUE(source_id, external_id)
);

-- Processed/published articles
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  raw_item_id UUID REFERENCES raw_items(id) ON DELETE SET NULL,

  -- Content
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  summary TEXT,
  content TEXT,
  image_url TEXT,

  -- Metadata
  source_id UUID REFERENCES sources(id) ON DELETE SET NULL,
  source_url TEXT NOT NULL,
  source_name TEXT,
  author TEXT,
  published_at TIMESTAMPTZ,

  -- AI-generated
  category TEXT CHECK (category IN ('research', 'business', 'products', 'investment')),
  subcategory TEXT,
  importance_score INTEGER CHECK (importance_score >= 1 AND importance_score <= 10),
  tags TEXT[],

  -- Status
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  featured BOOLEAN DEFAULT false,

  -- Engagement
  view_count INTEGER DEFAULT 0,

  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Wiki pages
CREATE TABLE wiki_pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  parent_slug TEXT,
  display_order INTEGER DEFAULT 0,
  meta_description TEXT,
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Companies directory
CREATE TABLE companies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  logo_url TEXT,
  website TEXT,
  company_type TEXT CHECK (company_type IN ('manufacturer', 'startup', 'research', 'investor')),
  focus_areas TEXT[],
  founded_year INTEGER,
  headquarters TEXT,
  employee_count TEXT,
  funding_total TEXT,
  funding_stage TEXT,
  twitter TEXT,
  linkedin TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Newsletter subscribers
CREATE TABLE subscribers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  frequency TEXT DEFAULT 'weekly' CHECK (frequency IN ('daily', 'weekly')),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  confirmed BOOLEAN DEFAULT false,
  confirmation_token TEXT,
  unsubscribed_at TIMESTAMPTZ
);

-- Newsletter issues
CREATE TABLE newsletter_issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL,
  content TEXT NOT NULL,
  article_ids UUID[],
  sent_at TIMESTAMPTZ,
  open_count INTEGER DEFAULT 0,
  click_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_articles_category ON articles(category);
CREATE INDEX idx_articles_published ON articles(published_at DESC);
CREATE INDEX idx_articles_status ON articles(status);
CREATE INDEX idx_articles_featured ON articles(featured) WHERE featured = true;
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_raw_items_processed ON raw_items(processed) WHERE processed = false;
CREATE INDEX idx_wiki_parent ON wiki_pages(parent_slug);
CREATE INDEX idx_wiki_slug ON wiki_pages(slug);
CREATE INDEX idx_companies_type ON companies(company_type);
CREATE INDEX idx_subscribers_email ON subscribers(email);

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_wiki_pages_updated_at
  BEFORE UPDATE ON wiki_pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_companies_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE wiki_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Public read access for articles, wiki, and companies
CREATE POLICY "Public read access for published articles"
  ON articles FOR SELECT
  USING (status = 'published');

CREATE POLICY "Public read access for published wiki pages"
  ON wiki_pages FOR SELECT
  USING (status = 'published');

CREATE POLICY "Public read access for companies"
  ON companies FOR SELECT
  USING (true);

-- Subscribers can only be created via API (service role)
CREATE POLICY "Service role can manage subscribers"
  ON subscribers FOR ALL
  USING (auth.role() = 'service_role');
