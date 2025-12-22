// Initial RSS sources for graphene news
// These are verified working feeds with graphene-related content
// Note: Relevance filtering is handled by filter.ts

export const initialSources = [
  // Working feeds
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
    name: 'Nature Materials',
    url: 'https://www.nature.com/nmat/',
    feed_url: 'https://www.nature.com/nmat.rss',
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
    name: 'arXiv Cond-Mat',
    url: 'https://arxiv.org/list/cond-mat/new',
    feed_url: 'https://rss.arxiv.org/rss/cond-mat',
    scrape_type: 'rss' as const,
    scrape_frequency: 'daily' as const,
  },
];
