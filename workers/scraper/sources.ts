// Initial RSS sources for graphene news
// These are verified working feeds with graphene-related content
// Note: Relevance filtering is handled by filter.ts
// Trust levels are configured in filter.ts SOURCE_TRUST_CONFIG

export const initialSources = [
  // =============================================================================
  // TIER 1: ACADEMIC/RESEARCH SOURCES (High quality, peer-reviewed content)
  // =============================================================================
  {
    name: 'Nature Materials',
    url: 'https://www.nature.com/nmat/',
    feed_url: 'https://www.nature.com/nmat.rss',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'arXiv Cond-Mat',
    url: 'https://arxiv.org/list/cond-mat/new',
    feed_url: 'https://rss.arxiv.org/rss/cond-mat',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'ACS Nano',
    url: 'https://pubs.acs.org/journal/ancac3',
    feed_url: 'https://pubs.acs.org/action/showFeed?type=axatoc&feed=rss&jc=ancac3',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Nano Letters',
    url: 'https://pubs.acs.org/journal/nalefd',
    feed_url: 'https://pubs.acs.org/action/showFeed?type=axatoc&feed=rss&jc=nalefd',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },

  // =============================================================================
  // TIER 2: SCIENCE NEWS AGGREGATORS (Good coverage, needs filtering)
  // =============================================================================
  {
    name: 'ScienceDaily Materials',
    url: 'https://www.sciencedaily.com/news/matter_energy/materials_science/',
    feed_url: 'https://www.sciencedaily.com/rss/matter_energy/materials_science.xml',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'ScienceDaily Nanotechnology',
    url: 'https://www.sciencedaily.com/news/matter_energy/nanotechnology/',
    feed_url: 'https://www.sciencedaily.com/rss/matter_energy/nanotechnology.xml',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Phys.org Nanotechnology',
    url: 'https://phys.org/nanotech-news/',
    feed_url: 'https://phys.org/rss-feed/nanotech-news/',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Phys.org Nanomaterials',
    url: 'https://phys.org/nanotech-news/nanomaterials/',
    feed_url: 'https://phys.org/rss-feed/nanotech-news/nanomaterials/',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Phys.org Graphene',
    url: 'https://phys.org/nanotech-news/graphene/',
    feed_url: 'https://phys.org/rss-feed/nanotech-news/graphene/',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'EurekAlert Materials',
    url: 'https://www.eurekalert.org/news-releases/browse/technology-engineering',
    feed_url: 'https://www.eurekalert.org/rss/technology_engineering.xml',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Nanowerk',
    url: 'https://www.nanowerk.com/',
    feed_url: 'https://www.nanowerk.com/nanowerk_rss.xml',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },

  // =============================================================================
  // TIER 3: INDUSTRY SOURCES (Trade publications, business news)
  // =============================================================================
  {
    name: 'CompositesWorld',
    url: 'https://www.compositesworld.com/',
    feed_url: 'https://www.compositesworld.com/rss/all',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Materials Today',
    url: 'https://www.materialstoday.com/',
    feed_url: 'https://www.materialstoday.com/rss/',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Advanced Science News',
    url: 'https://www.advancedsciencenews.com/',
    feed_url: 'https://www.advancedsciencenews.com/feed/',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
  {
    name: 'Graphene Flagship',
    url: 'https://graphene-flagship.eu/graphene/news/',
    feed_url: 'https://graphene-flagship.eu/feed/',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
];
