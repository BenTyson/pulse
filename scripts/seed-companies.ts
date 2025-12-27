import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const db = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY!
);

interface Company {
  name: string;
  slug: string;
  description: string;
  website: string;
  company_type: 'manufacturer' | 'startup' | 'research' | 'investor';
  focus_areas: string[];
  founded_year?: number;
  headquarters: string;
  employee_count?: string;
  funding_total?: string;
  funding_stage?: string;
}

const companies: Company[] = [
  // === MANUFACTURERS ===
  {
    name: 'First Graphene',
    slug: 'first-graphene',
    description: 'Leading graphene producer using proprietary electrochemical exfoliation process. Produces high-quality graphene from Sri Lankan vein graphite for composites, coatings, and energy storage applications.',
    website: 'https://firstgraphene.net',
    company_type: 'manufacturer',
    focus_areas: ['Graphene Production', 'Composites', 'Coatings', 'Energy Storage'],
    founded_year: 2015,
    headquarters: 'Perth, Australia',
    employee_count: '50-100',
  },
  {
    name: 'NanoXplore',
    slug: 'nanoxplore',
    description: 'World\'s largest graphene producer with 10,000+ tonnes annual capacity. Vertically integrated from graphite mining to graphene-enhanced products for automotive, industrial, and consumer applications.',
    website: 'https://nanoxplore.ca',
    company_type: 'manufacturer',
    focus_areas: ['Graphene Nanoplatelets', 'Automotive', 'Plastics', 'Batteries'],
    founded_year: 2011,
    headquarters: 'Montreal, Canada',
    employee_count: '200-500',
    funding_stage: 'Public (TSX: GRA)',
  },
  {
    name: 'Directa Plus',
    slug: 'directa-plus',
    description: 'European graphene producer specializing in G+ pristine graphene products. Focus on textiles, environmental remediation, and composite materials with sustainable production methods.',
    website: 'https://directa-plus.com',
    company_type: 'manufacturer',
    focus_areas: ['Textiles', 'Environmental', 'Composites', 'Elastomers'],
    founded_year: 2005,
    headquarters: 'Lomazzo, Italy',
    employee_count: '50-100',
    funding_stage: 'Public (AIM: DCTA)',
  },
  {
    name: 'XG Sciences',
    slug: 'xg-sciences',
    description: 'Pioneer in graphene nanoplatelet production using proprietary exfoliation technology. Supplies materials for energy storage, thermal management, and structural composites.',
    website: 'https://xgsciences.com',
    company_type: 'manufacturer',
    focus_areas: ['Nanoplatelets', 'Batteries', 'Thermal Management', 'Composites'],
    founded_year: 2006,
    headquarters: 'Lansing, Michigan, USA',
    employee_count: '50-100',
  },
  {
    name: 'Graphenea',
    slug: 'graphenea',
    description: 'Leading supplier of CVD graphene and graphene oxide for research and industry. Provides high-quality monolayer graphene on various substrates for electronics, sensors, and photonics.',
    website: 'https://graphenea.com',
    company_type: 'manufacturer',
    focus_areas: ['CVD Graphene', 'Graphene Oxide', 'Electronics', 'Sensors'],
    founded_year: 2010,
    headquarters: 'San Sebastian, Spain',
    employee_count: '50-100',
  },
  {
    name: 'Applied Graphene Materials',
    slug: 'applied-graphene-materials',
    description: 'UK-based graphene producer creating dispersion products for coatings, composites, and functional materials. Specializes in anti-corrosion and barrier coatings.',
    website: 'https://appliedgraphenematerials.com',
    company_type: 'manufacturer',
    focus_areas: ['Dispersions', 'Coatings', 'Anti-Corrosion', 'Composites'],
    founded_year: 2010,
    headquarters: 'Redcar, United Kingdom',
    employee_count: '20-50',
    funding_stage: 'Public (AIM: AGM)',
  },
  {
    name: 'The Sixth Element',
    slug: 'sixth-element',
    description: 'China\'s largest graphene producer with 100+ tonnes annual capacity. Mass production of graphene oxide and reduced graphene oxide for batteries, supercapacitors, and coatings.',
    website: 'https://www.c6th.com',
    company_type: 'manufacturer',
    focus_areas: ['Graphene Oxide', 'rGO', 'Batteries', 'Supercapacitors'],
    founded_year: 2012,
    headquarters: 'Changzhou, China',
    employee_count: '200-500',
  },
  {
    name: 'Haydale',
    slug: 'haydale',
    description: 'Specializes in functionalized graphene and other nanomaterials using plasma processing technology. Products for aerospace, automotive, and electronics sectors.',
    website: 'https://haydale.com',
    company_type: 'manufacturer',
    focus_areas: ['Functionalized Graphene', 'Plasma Processing', 'Aerospace', 'Inks'],
    founded_year: 2010,
    headquarters: 'Ammanford, United Kingdom',
    employee_count: '50-100',
    funding_stage: 'Public (AIM: HAYD)',
  },
  {
    name: 'CVD Equipment Corporation',
    slug: 'cvd-equipment',
    description: 'Designs and manufactures CVD systems for graphene and other advanced materials production. Equipment supplier for research institutions and industrial manufacturers.',
    website: 'https://cvdequipment.com',
    company_type: 'manufacturer',
    focus_areas: ['CVD Equipment', 'Process Development', 'Research Tools'],
    founded_year: 1982,
    headquarters: 'Central Islip, New York, USA',
    employee_count: '50-100',
    funding_stage: 'Public (NASDAQ: CVV)',
  },
  {
    name: 'BGT Materials',
    slug: 'bgt-materials',
    description: 'Taiwan-based CVD graphene manufacturer with roll-to-roll production capabilities. Produces large-area graphene films for display, touch panel, and electronic applications.',
    website: 'https://bfrtech.com',
    company_type: 'manufacturer',
    focus_areas: ['CVD Graphene', 'Roll-to-Roll', 'Displays', 'Electronics'],
    founded_year: 2013,
    headquarters: 'Taipei, Taiwan',
    employee_count: '50-100',
  },
  {
    name: 'Graftech International',
    slug: 'graftech-international',
    description: 'Major producer of graphite electrodes and advanced graphite materials. Expanding into graphene-enhanced products for steel, energy, and industrial applications.',
    website: 'https://graftech.com',
    company_type: 'manufacturer',
    focus_areas: ['Graphite Electrodes', 'Advanced Carbon', 'Steel Industry'],
    founded_year: 1886,
    headquarters: 'Brooklyn Heights, Ohio, USA',
    employee_count: '1000+',
    funding_stage: 'Public (NYSE: EAF)',
  },
  {
    name: 'Talga Group',
    slug: 'talga-group',
    description: 'Integrated graphite-graphene company developing the Vittangi anode project in Sweden. Focus on battery anode materials and graphene-enhanced products.',
    website: 'https://talgagroup.com',
    company_type: 'manufacturer',
    focus_areas: ['Battery Anodes', 'Graphite Mining', 'Coatings'],
    founded_year: 2010,
    headquarters: 'Perth, Australia',
    employee_count: '50-100',
    funding_stage: 'Public (ASX: TLG)',
  },
  {
    name: 'HGraphene',
    slug: 'hgraphene',
    description: 'World\'s first commodity-level supplier of high-grade graphene derived from industrial hemp fiber. Uses a proprietary hydrothermal-activation process to create 3D graphene nanosheets, offering a renewable and cost-effective alternative to traditional CVD or graphite oxide methods.',
    website: 'https://hgraphene.com',
    company_type: 'manufacturer',
    focus_areas: ['Hemp-Derived Graphene', 'Supercapacitors', 'EV Batteries', 'Energy Storage', 'Sustainable Production'],
    headquarters: 'Denver, Colorado, USA',
  },

  // === STARTUPS ===
  {
    name: 'Paragraf',
    slug: 'paragraf',
    description: 'Cambridge spin-out developing wafer-scale graphene electronics. Produces graphene Hall sensors and is working on graphene-based semiconductor devices.',
    website: 'https://paragraf.com',
    company_type: 'startup',
    focus_areas: ['Electronics', 'Sensors', 'Semiconductors', 'Wafer-Scale'],
    founded_year: 2018,
    headquarters: 'Cambridge, United Kingdom',
    employee_count: '50-100',
    funding_total: '$60M+',
    funding_stage: 'Series B',
  },
  {
    name: 'Nanotech Energy',
    slug: 'nanotech-energy',
    description: 'Developer of graphene-based energy storage solutions including non-flammable lithium-ion batteries and supercapacitors for consumer electronics and EVs.',
    website: 'https://nanotechenergy.com',
    company_type: 'startup',
    focus_areas: ['Batteries', 'Supercapacitors', 'Energy Storage', 'EVs'],
    founded_year: 2014,
    headquarters: 'Los Angeles, California, USA',
    employee_count: '100-200',
    funding_total: '$64M+',
    funding_stage: 'Series C',
  },
  {
    name: 'Skeleton Technologies',
    slug: 'skeleton-technologies',
    description: 'European leader in ultracapacitor technology using curved graphene. Products for automotive, grid, and industrial energy storage with 10x power density improvement.',
    website: 'https://skeletontech.com',
    company_type: 'startup',
    focus_areas: ['Ultracapacitors', 'Curved Graphene', 'Automotive', 'Grid Storage'],
    founded_year: 2009,
    headquarters: 'Tallinn, Estonia',
    employee_count: '200-500',
    funding_total: '$200M+',
    funding_stage: 'Series D',
  },
  {
    name: 'Garmor',
    slug: 'garmor',
    description: 'Produces edge-functionalized graphene oxide using a scalable, water-based process. Applications in composites, coatings, and concrete enhancement.',
    website: 'https://garmortech.com',
    company_type: 'startup',
    focus_areas: ['Graphene Oxide', 'Composites', 'Concrete', 'Coatings'],
    founded_year: 2013,
    headquarters: 'Orlando, Florida, USA',
    employee_count: '20-50',
    funding_stage: 'Series A',
  },
  {
    name: 'Graphene-XT',
    slug: 'graphene-xt',
    description: 'Italian startup producing graphene-enhanced sporting goods and industrial products. Focus on skis, bicycles, helmets, and composite materials.',
    website: 'https://graphene-xt.com',
    company_type: 'startup',
    focus_areas: ['Sporting Goods', 'Composites', 'Helmets', 'Equipment'],
    founded_year: 2017,
    headquarters: 'Bologna, Italy',
    employee_count: '10-20',
    funding_stage: 'Seed',
  },
  {
    name: 'Graphene Composites',
    slug: 'graphene-composites',
    description: 'UK developer of graphene-enhanced armor and protective materials. Products include ballistic protection, blast mitigation, and structural composites.',
    website: 'https://graphenecomposites.com',
    company_type: 'startup',
    focus_areas: ['Armor', 'Ballistics', 'Defense', 'Composites'],
    founded_year: 2013,
    headquarters: 'Cambridge, United Kingdom',
    employee_count: '10-20',
    funding_stage: 'Series A',
  },
  {
    name: 'Volexion',
    slug: 'volexion',
    description: 'Spin-out from WMG developing silicon-graphene composite anodes for next-generation lithium-ion batteries with higher capacity and faster charging.',
    website: 'https://volexion.com',
    company_type: 'startup',
    focus_areas: ['Battery Anodes', 'Silicon-Graphene', 'EVs', 'Fast Charging'],
    founded_year: 2020,
    headquarters: 'Coventry, United Kingdom',
    employee_count: '10-20',
    funding_total: '$5M+',
    funding_stage: 'Seed',
  },
  {
    name: 'Real Graphene',
    slug: 'real-graphene',
    description: 'Consumer electronics company producing graphene-enhanced power banks and batteries. Focus on fast-charging portable power solutions.',
    website: 'https://realgraphene.com',
    company_type: 'startup',
    focus_areas: ['Power Banks', 'Consumer Electronics', 'Fast Charging'],
    founded_year: 2019,
    headquarters: 'Los Angeles, California, USA',
    employee_count: '10-20',
    funding_stage: 'Seed',
  },
  {
    name: 'Graphene Manufacturing Group',
    slug: 'graphene-manufacturing-group',
    description: 'Australian company producing graphene aluminum-ion batteries and hydrogen production technology. Focus on sustainable energy solutions.',
    website: 'https://graphenemg.com',
    company_type: 'startup',
    focus_areas: ['Aluminum-Ion Batteries', 'Hydrogen', 'Clean Energy'],
    founded_year: 2016,
    headquarters: 'Brisbane, Australia',
    employee_count: '50-100',
    funding_stage: 'Public (TSXV: GMG)',
  },
  // === RESEARCH INSTITUTIONS ===
  {
    name: 'National Graphene Institute',
    slug: 'national-graphene-institute',
    description: 'World-leading research facility at the University of Manchester, founded by Nobel laureates Geim and Novoselov. Houses 200+ researchers working on graphene and 2D materials.',
    website: 'https://graphene.manchester.ac.uk',
    company_type: 'research',
    focus_areas: ['Fundamental Research', 'Applications', 'Industry Collaboration'],
    founded_year: 2015,
    headquarters: 'Manchester, United Kingdom',
    employee_count: '200-500',
  },
  {
    name: 'Graphene Flagship',
    slug: 'graphene-flagship',
    description: 'EU\'s largest research initiative with €1 billion budget. Coordinates 170+ partners across academia and industry to bring graphene from lab to market.',
    website: 'https://graphene-flagship.eu',
    company_type: 'research',
    focus_areas: ['EU Research', 'Technology Transfer', 'Industry Partnerships'],
    founded_year: 2013,
    headquarters: 'Gothenburg, Sweden',
    employee_count: '500+',
  },
  {
    name: 'Cambridge Graphene Centre',
    slug: 'cambridge-graphene-centre',
    description: 'University of Cambridge research center focused on graphene science and technology. Strong emphasis on electronics, photonics, and printed devices.',
    website: 'https://graphene.cam.ac.uk',
    company_type: 'research',
    focus_areas: ['Electronics', 'Photonics', 'Printed Devices', 'Industry Collaboration'],
    founded_year: 2013,
    headquarters: 'Cambridge, United Kingdom',
    employee_count: '100-200',
  },
  {
    name: 'Samsung Advanced Institute of Technology',
    slug: 'samsung-ait',
    description: 'Samsung\'s R&D division actively researching graphene for displays, semiconductors, and batteries. Holds numerous graphene patents and has demonstrated graphene ball batteries.',
    website: 'https://samsung.com/research',
    company_type: 'research',
    focus_areas: ['Displays', 'Batteries', 'Semiconductors', 'Patents'],
    founded_year: 1987,
    headquarters: 'Suwon, South Korea',
    employee_count: '1000+',
  },
  {
    name: 'KAIST Graphene Research Center',
    slug: 'kaist-graphene',
    description: 'Korean research center pioneering graphene synthesis and applications. Known for work on roll-to-roll CVD graphene and transparent electrodes.',
    website: 'https://kaist.ac.kr',
    company_type: 'research',
    focus_areas: ['CVD Synthesis', 'Roll-to-Roll', 'Electrodes', 'Flexible Electronics'],
    founded_year: 2010,
    headquarters: 'Daejeon, South Korea',
    employee_count: '100-200',
  },
  {
    name: 'Chalmers University Graphene Centre',
    slug: 'chalmers-graphene',
    description: 'Swedish research center and host of the Graphene Flagship. Focus on fundamental physics, thermal management, and electronic applications.',
    website: 'https://chalmers.se',
    company_type: 'research',
    focus_areas: ['Fundamental Physics', 'Thermal Management', 'Electronics'],
    founded_year: 2010,
    headquarters: 'Gothenburg, Sweden',
    employee_count: '50-100',
  },
  {
    name: 'Rice University Nanotechnology',
    slug: 'rice-nanotechnology',
    description: 'Leading US research group known for flash Joule heating graphene synthesis. Home to researchers including James Tour who developed rapid graphene production methods.',
    website: 'https://rice.edu',
    company_type: 'research',
    focus_areas: ['Flash Graphene', 'Synthesis', 'Nanotechnology', 'Carbon Materials'],
    founded_year: 1985,
    headquarters: 'Houston, Texas, USA',
    employee_count: '100-200',
  },
];

async function seedCompanies() {
  console.log('Seeding companies...\n');

  let added = 0;
  let updated = 0;
  let errors = 0;

  for (const company of companies) {
    try {
      const { data, error } = await db
        .from('companies')
        .upsert({
          ...company,
          updated_at: new Date().toISOString()
        }, { onConflict: 'slug' })
        .select()
        .single();

      if (error) {
        console.error(`✗ Error with ${company.name}:`, error.message);
        errors++;
      } else {
        console.log(`✓ ${company.name} (${company.company_type})`);
        added++;
      }
    } catch (err) {
      console.error(`✗ Error with ${company.name}:`, err);
      errors++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Added/Updated: ${added}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total: ${companies.length}`);
}

seedCompanies();
