import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jnasccbjmuwewjkpydca.supabase.co';
const supabaseServiceKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpuYXNjY2JqbXV3ZXdqa3B5ZGNhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2NjI0MzcxOCwiZXhwIjoyMDgxODE5NzE4fQ.RD_2y27B1D1GLd74Awvp_FJ6LdT14nnSXDakG4liNyM';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const articles = [
  {
    title: 'Breakthrough: Graphene Transistors Achieve Record 100GHz Operating Frequency',
    slug: 'graphene-transistors-100ghz-breakthrough',
    summary: 'MIT researchers have developed graphene transistors that can operate at frequencies up to 100GHz, potentially revolutionizing wireless communications and radar systems.',
    content: 'Researchers at the Massachusetts Institute of Technology have achieved a significant milestone in graphene electronics...',
    source_url: 'https://news.mit.edu/example',
    source_name: 'MIT News',
    category: 'research',
    subcategory: 'electronics',
    importance_score: 9,
    tags: ['transistors', 'electronics', 'MIT', 'breakthrough'],
    featured: true,
    published_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'New CVD Method Produces High-Quality Graphene 10x Faster',
    slug: 'new-cvd-method-10x-faster',
    summary: 'Scientists at Stanford have developed a modified chemical vapor deposition process that dramatically accelerates graphene production while maintaining quality.',
    content: 'A team at Stanford University has unveiled a new chemical vapor deposition (CVD) method...',
    source_url: 'https://news.stanford.edu/example',
    source_name: 'Stanford News',
    category: 'research',
    subcategory: 'production',
    importance_score: 8,
    tags: ['CVD', 'production', 'Stanford', 'manufacturing'],
    featured: false,
    published_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'Graphene-Enhanced Batteries Show 500% Capacity Improvement',
    slug: 'graphene-batteries-500-percent-improvement',
    summary: 'Chinese researchers have demonstrated lithium-ion batteries with graphene anodes that deliver five times the capacity of conventional cells.',
    content: 'Researchers at the Chinese Academy of Sciences have achieved a major breakthrough in battery technology...',
    source_url: 'https://english.cas.cn/example',
    source_name: 'Chinese Academy of Sciences',
    category: 'research',
    subcategory: 'batteries',
    importance_score: 9,
    tags: ['batteries', 'energy storage', 'electric vehicles', 'China'],
    featured: false,
    published_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'First Graphene Ltd Announces $12M Series B Funding Round',
    slug: 'first-graphene-12m-series-b',
    summary: 'Australian graphene manufacturer First Graphene has raised $12 million to expand production capacity and enter the North American market.',
    content: 'First Graphene Limited (ASX: FGR) has announced the successful completion of a $12 million Series B funding round...',
    source_url: 'https://firstgraphene.net/example',
    source_name: 'First Graphene',
    category: 'business',
    subcategory: 'funding',
    importance_score: 7,
    tags: ['First Graphene', 'funding', 'Australia', 'manufacturing'],
    featured: false,
    published_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'Samsung Partners with Graphene Flagship for Next-Gen Displays',
    slug: 'samsung-graphene-flagship-partnership',
    summary: 'Samsung Display has announced a strategic partnership with the EU Graphene Flagship to develop flexible, transparent graphene-based display technology.',
    content: 'Samsung Display has entered into a multi-year strategic partnership with the European Union\'s Graphene Flagship program...',
    source_url: 'https://samsung.com/example',
    source_name: 'Samsung Newsroom',
    category: 'business',
    subcategory: 'partnerships',
    importance_score: 8,
    tags: ['Samsung', 'displays', 'Graphene Flagship', 'OLED', 'partnership'],
    featured: true,
    published_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'Graphene Market Expected to Reach $1.5B by 2030: New Report',
    slug: 'graphene-market-1-5b-2030-report',
    summary: 'A new market analysis predicts the global graphene market will grow at 28% CAGR, driven by battery and composite applications.',
    content: 'According to a new report from Grand View Research, the global graphene market is expected to reach $1.5 billion by 2030...',
    source_url: 'https://grandviewresearch.com/example',
    source_name: 'Grand View Research',
    category: 'investment',
    subcategory: 'market analysis',
    importance_score: 7,
    tags: ['market analysis', 'forecast', 'investment', 'growth'],
    featured: false,
    published_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'Graphene-Infused Running Shoes Launch with 40% Weight Reduction',
    slug: 'graphene-running-shoes-launch',
    summary: 'Inov-8 has released the first running shoes featuring graphene-enhanced rubber soles, promising improved grip and durability.',
    content: 'British sports brand Inov-8 has launched a new line of trail running shoes featuring graphene-enhanced rubber outsoles...',
    source_url: 'https://inov-8.com/example',
    source_name: 'Inov-8',
    category: 'products',
    subcategory: 'consumer',
    importance_score: 6,
    tags: ['Inov-8', 'shoes', 'consumer products', 'sports'],
    featured: false,
    published_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'NanoXplore Launches Industrial-Scale Graphene Powder Production',
    slug: 'nanoxplore-industrial-graphene-powder',
    summary: 'Canadian company NanoXplore has opened a new facility capable of producing 4,000 tonnes of graphene powder annually.',
    content: 'Montreal-based NanoXplore (TSX: GRA) has officially opened its expanded production facility...',
    source_url: 'https://nanoxplore.ca/example',
    source_name: 'NanoXplore',
    category: 'products',
    subcategory: 'manufacturing',
    importance_score: 7,
    tags: ['NanoXplore', 'manufacturing', 'Canada', 'production'],
    featured: false,
    published_at: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'Graphene Water Filters Remove 99% of Contaminants in Field Trials',
    slug: 'graphene-water-filters-field-trials',
    summary: 'A new graphene oxide membrane has shown exceptional performance in removing heavy metals and bacteria from contaminated water sources.',
    content: 'Field trials conducted in Bangladesh have demonstrated that graphene oxide membrane filters can remove over 99% of heavy metals...',
    source_url: 'https://manchester.ac.uk/example',
    source_name: 'University of Manchester',
    category: 'research',
    subcategory: 'water',
    importance_score: 8,
    tags: ['water filtration', 'graphene oxide', 'Manchester', 'clean water'],
    featured: false,
    published_at: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    title: 'Researchers Achieve Superconductivity in Twisted Bilayer Graphene',
    slug: 'superconductivity-twisted-bilayer-graphene',
    summary: 'A team at Princeton has reproduced superconductivity in twisted bilayer graphene at record high temperatures.',
    content: 'Physicists at Princeton University have achieved superconductivity in twisted bilayer graphene at temperatures approaching 5 Kelvin...',
    source_url: 'https://princeton.edu/example',
    source_name: 'Princeton University',
    category: 'research',
    subcategory: 'physics',
    importance_score: 9,
    tags: ['superconductivity', 'physics', 'Princeton', 'quantum'],
    featured: false,
    published_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

const wikiPages = [
  {
    slug: 'what-is-graphene',
    title: 'What is Graphene?',
    excerpt: 'Graphene is a single layer of carbon atoms arranged in a two-dimensional honeycomb lattice. It is the thinnest, strongest, and most conductive material known to science.',
    content: `# What is Graphene?

Graphene is a single layer of carbon atoms arranged in a two-dimensional honeycomb lattice. Isolated in 2004 by Andre Geim and Konstantin Novoselov at the University of Manchester (who won the Nobel Prize in Physics in 2010 for their work), graphene is considered one of the most revolutionary materials of the 21st century.

## Key Properties

- **Mechanical Strength**: Approximately 200 times stronger than steel by weight
- **Electrical Conductivity**: Electrons travel at 1/300 the speed of light
- **Thermal Conductivity**: ~5,000 W/mK—the best thermal conductor known
- **Transparency**: Absorbs only 2.3% of light
- **Flexibility**: Can stretch up to 20% of its original size

## Why It Matters

Graphene enables applications across every industry: faster electronics, better batteries, stronger materials, advanced medical devices, and clean water solutions.`,
    parent_slug: null,
    display_order: 1,
    meta_description: 'Learn what graphene is, its extraordinary properties, and why this wonder material is revolutionizing technology.',
    status: 'published',
  },
  {
    slug: 'properties',
    title: 'Graphene Properties',
    excerpt: 'Graphene possesses an extraordinary combination of electrical, mechanical, thermal, and optical properties.',
    content: `# Graphene Properties

Graphene's unique structure gives it an extraordinary combination of properties that no other material can match.

## Electrical Properties
Graphene has exceptional electrical conductivity due to its unique band structure. Electrons can travel through graphene without scattering.

## Mechanical Properties
With a tensile strength of 130 GPa and a Young's modulus of 1 TPa, graphene is the strongest material ever measured.

## Thermal Properties
Graphene has the highest thermal conductivity of any known material, approximately 5,000 W/mK at room temperature.

## Optical Properties
A single layer of graphene absorbs only 2.3% of visible light, making it nearly transparent.`,
    parent_slug: null,
    display_order: 2,
    meta_description: 'Explore graphene\'s unique electrical, mechanical, thermal, and optical properties.',
    status: 'published',
  },
  {
    slug: 'applications',
    title: 'Graphene Applications',
    excerpt: 'Graphene\'s exceptional properties enable applications in energy, electronics, composites, medicine, and more.',
    content: `# Graphene Applications

Graphene's exceptional properties enable applications across nearly every industry.

## Energy Storage
- Enhanced lithium-ion battery anodes
- Supercapacitor electrodes
- Fuel cell catalysts

## Electronics
- Transparent conductive films
- High-frequency transistors
- Flexible displays

## Composites
- Structural reinforcement
- Thermal management
- Electromagnetic shielding

## Medical
- Drug delivery systems
- Biosensors
- Tissue engineering

## Water Treatment
- Desalination membranes
- Heavy metal removal
- Antibacterial filtration`,
    parent_slug: null,
    display_order: 3,
    meta_description: 'Discover current and emerging applications of graphene across industries.',
    status: 'published',
  },
  {
    slug: 'glossary',
    title: 'Graphene Glossary',
    excerpt: 'A comprehensive glossary of graphene-related terms and definitions.',
    content: `# Graphene Glossary

## A
**Allotrope**: Different structural forms of the same element.

## B
**Bilayer Graphene**: Two layers of graphene stacked together.

## C
**Carbon Nanotube (CNT)**: A cylinder formed by rolling up a sheet of graphene.
**CVD (Chemical Vapor Deposition)**: A production method for graphene.

## E
**Exfoliation**: The process of separating graphene layers from graphite.

## G
**Graphene Oxide (GO)**: Oxidized form of graphene.
**Graphite**: Multiple layers of graphene stacked together.

## M
**Monolayer**: A single layer of graphene, one atom thick.

## R
**Reduced Graphene Oxide (rGO)**: Graphene oxide that has been reduced to restore conductivity.`,
    parent_slug: null,
    display_order: 10,
    meta_description: 'Comprehensive glossary of graphene terms, definitions, and concepts.',
    status: 'published',
  },
];

const companies = [
  {
    name: 'First Graphene',
    slug: 'first-graphene',
    description: 'First Graphene is a leading supplier of high-performing, bulk graphene products.',
    website: 'https://firstgraphene.net',
    company_type: 'manufacturer',
    focus_areas: ['composites', 'coatings', 'batteries'],
    founded_year: 2015,
    headquarters: 'Perth, Australia',
  },
  {
    name: 'NanoXplore',
    slug: 'nanoxplore',
    description: 'World\'s largest producer of high-volume graphene powder.',
    website: 'https://nanoxplore.ca',
    company_type: 'manufacturer',
    focus_areas: ['plastics', 'batteries', 'composites'],
    founded_year: 2011,
    headquarters: 'Montreal, Canada',
  },
  {
    name: 'Directa Plus',
    slug: 'directa-plus',
    description: 'One of the largest European producers of graphene-based products.',
    website: 'https://directaplus.com',
    company_type: 'manufacturer',
    focus_areas: ['textiles', 'environmental', 'composites'],
    founded_year: 2005,
    headquarters: 'Milan, Italy',
  },
  {
    name: 'Graphene Flagship',
    slug: 'graphene-flagship',
    description: 'A €1 billion European research initiative bringing together academic and industrial partners.',
    website: 'https://graphene-flagship.eu',
    company_type: 'research',
    focus_areas: ['research', 'commercialization', 'innovation'],
    founded_year: 2013,
    headquarters: 'Gothenburg, Sweden',
  },
  {
    name: 'National Graphene Institute',
    slug: 'national-graphene-institute',
    description: 'World-leading research center at the University of Manchester.',
    website: 'https://ngi.manchester.ac.uk',
    company_type: 'research',
    focus_areas: ['research', 'materials science', 'electronics'],
    founded_year: 2015,
    headquarters: 'Manchester, UK',
  },
];

async function seed() {
  console.log('Seeding database...');

  // Insert articles
  console.log('Inserting articles...');
  const { error: articlesError } = await supabase.from('articles').insert(articles);
  if (articlesError) {
    console.error('Error inserting articles:', articlesError);
  } else {
    console.log(`Inserted ${articles.length} articles`);
  }

  // Insert wiki pages
  console.log('Inserting wiki pages...');
  const { error: wikiError } = await supabase.from('wiki_pages').insert(wikiPages);
  if (wikiError) {
    console.error('Error inserting wiki pages:', wikiError);
  } else {
    console.log(`Inserted ${wikiPages.length} wiki pages`);
  }

  // Insert companies
  console.log('Inserting companies...');
  const { error: companiesError } = await supabase.from('companies').insert(companies);
  if (companiesError) {
    console.error('Error inserting companies:', companiesError);
  } else {
    console.log(`Inserted ${companies.length} companies`);
  }

  console.log('Seeding complete!');
}

seed().catch(console.error);
