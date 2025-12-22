-- Graphene Pulse Seed Data
-- Insert this into your Supabase database to populate initial content

-- Insert sample articles
INSERT INTO articles (title, slug, summary, content, source_url, source_name, category, subcategory, importance_score, tags, featured, published_at) VALUES

-- Research articles
('Breakthrough: Graphene Transistors Achieve Record 100GHz Operating Frequency',
'graphene-transistors-100ghz-breakthrough',
'MIT researchers have developed graphene transistors that can operate at frequencies up to 100GHz, potentially revolutionizing wireless communications and radar systems.',
'Researchers at the Massachusetts Institute of Technology have achieved a significant milestone in graphene electronics, demonstrating transistors that can operate at frequencies up to 100 gigahertz—far exceeding the capabilities of traditional silicon-based devices.

The breakthrough, published in Nature Electronics, could pave the way for next-generation wireless communications, radar systems, and high-speed computing applications.

"This represents a fundamental advance in graphene device physics," said lead researcher Dr. Tomás Palacios. "We''ve solved several key challenges that have limited graphene transistor performance for years."

The team used a novel fabrication technique that preserves the exceptional electron mobility of graphene while achieving the necessary current saturation for high-frequency operation.',
'https://news.mit.edu/example', 'MIT News', 'research', 'electronics', 9, ARRAY['transistors', 'electronics', 'MIT', 'breakthrough'], true, NOW() - INTERVAL '2 days'),

('New CVD Method Produces High-Quality Graphene 10x Faster',
'new-cvd-method-10x-faster',
'Scientists at Stanford have developed a modified chemical vapor deposition process that dramatically accelerates graphene production while maintaining quality.',
'A team at Stanford University has unveiled a new chemical vapor deposition (CVD) method that can produce high-quality graphene up to ten times faster than conventional approaches.

The modified process uses a novel catalyst system that enables rapid graphene growth at lower temperatures, potentially reducing both production costs and energy consumption.

"This could be a game-changer for industrial-scale graphene production," said Professor Hongjie Dai, who led the research. "We''re seeing the same quality graphene in a fraction of the time."

The research, funded by the Department of Energy, has already attracted interest from major electronics manufacturers.',
'https://news.stanford.edu/example', 'Stanford News', 'research', 'production', 8, ARRAY['CVD', 'production', 'Stanford', 'manufacturing'], false, NOW() - INTERVAL '5 days'),

('Graphene-Enhanced Batteries Show 500% Capacity Improvement',
'graphene-batteries-500-percent-improvement',
'Chinese researchers have demonstrated lithium-ion batteries with graphene anodes that deliver five times the capacity of conventional cells.',
'Researchers at the Chinese Academy of Sciences have achieved a major breakthrough in battery technology, demonstrating lithium-ion cells with graphene-enhanced anodes that offer 500% greater capacity than conventional batteries.

The new battery design uses a 3D graphene foam structure that dramatically increases the surface area available for lithium storage while maintaining excellent conductivity.

"The energy density we''re seeing is unprecedented for lithium-ion chemistry," said lead researcher Dr. Wei Chen. "This could enable electric vehicles with ranges exceeding 1,000 kilometers on a single charge."

The team is now working with Chinese battery manufacturers to scale up production.',
'https://english.cas.cn/example', 'Chinese Academy of Sciences', 'research', 'batteries', 9, ARRAY['batteries', 'energy storage', 'electric vehicles', 'China'], false, NOW() - INTERVAL '7 days'),

-- Business articles
('First Graphene Ltd Announces $12M Series B Funding Round',
'first-graphene-12m-series-b',
'Australian graphene manufacturer First Graphene has raised $12 million to expand production capacity and enter the North American market.',
'First Graphene Limited (ASX: FGR) has announced the successful completion of a $12 million Series B funding round led by Deep Science Ventures and existing investors.

The Perth-based company plans to use the capital to triple production capacity at its Henderson facility and establish a North American sales and distribution operation.

"This funding validates the growing demand for high-quality graphene in industrial applications," said CEO Michael Bell. "We''re seeing strong interest from composites, coatings, and battery manufacturers."

First Graphene produces its PureGRAPH® product using an electrochemical exfoliation process that yields high-purity graphene suitable for industrial-scale applications.',
'https://firstgraphene.net/example', 'First Graphene', 'business', 'funding', 7, ARRAY['First Graphene', 'funding', 'Australia', 'manufacturing'], false, NOW() - INTERVAL '3 days'),

('Samsung Partners with Graphene Flagship for Next-Gen Displays',
'samsung-graphene-flagship-partnership',
'Samsung Display has announced a strategic partnership with the EU Graphene Flagship to develop flexible, transparent graphene-based display technology.',
'Samsung Display has entered into a multi-year strategic partnership with the European Union''s Graphene Flagship program to accelerate the development of graphene-based display technology.

The collaboration will focus on creating flexible, transparent electrodes using graphene to replace indium tin oxide (ITO) in next-generation OLED and microLED displays.

"Graphene offers the perfect combination of transparency, flexibility, and conductivity for future display applications," said Samsung Display CTO Dr. Park Jin-ho. "This partnership brings together world-leading expertise from both industry and academia."

The partnership includes a €50 million research investment over five years.',
'https://samsung.com/example', 'Samsung Newsroom', 'business', 'partnerships', 8, ARRAY['Samsung', 'displays', 'Graphene Flagship', 'OLED', 'partnership'], true, NOW() - INTERVAL '1 day'),

('Graphene Market Expected to Reach $1.5B by 2030: New Report',
'graphene-market-1-5b-2030-report',
'A new market analysis predicts the global graphene market will grow at 28% CAGR, driven by battery and composite applications.',
'According to a new report from Grand View Research, the global graphene market is expected to reach $1.5 billion by 2030, growing at a compound annual rate of 28.1% from 2024.

The report identifies energy storage and composite materials as the primary growth drivers, with the battery segment alone projected to account for 35% of market value by 2030.

"The commercialization of graphene is accelerating faster than we anticipated," said lead analyst Maria Rodriguez. "We''re seeing real products reaching market, not just laboratory demonstrations."

Key players mentioned in the report include First Graphene, NanoXplore, Directa Plus, and Versarien.',
'https://grandviewresearch.com/example', 'Grand View Research', 'investment', 'market analysis', 7, ARRAY['market analysis', 'forecast', 'investment', 'growth'], false, NOW() - INTERVAL '10 days'),

-- Product articles
('Graphene-Infused Running Shoes Launch with 40% Weight Reduction',
'graphene-running-shoes-launch',
'Inov-8 has released the first running shoes featuring graphene-enhanced rubber soles, promising improved grip and durability.',
'British sports brand Inov-8 has launched a new line of trail running shoes featuring graphene-enhanced rubber outsoles, claiming a 40% reduction in weight while improving grip and durability.

The G-Series shoes use graphene rubber developed in partnership with the University of Manchester''s National Graphene Institute, marking the first commercial footwear application of the material.

"The graphene gives us the best grip we''ve ever achieved in a running shoe," said Inov-8 product director Michael Price. "And it''s 50% more hardwearing than conventional rubber."

The shoes are priced at $160 and available worldwide.',
'https://inov-8.com/example', 'Inov-8', 'products', 'consumer', 6, ARRAY['Inov-8', 'shoes', 'consumer products', 'sports'], false, NOW() - INTERVAL '15 days'),

('NanoXplore Launches Industrial-Scale Graphene Powder Production',
'nanoxplore-industrial-graphene-powder',
'Canadian company NanoXplore has opened a new facility capable of producing 4,000 tonnes of graphene powder annually.',
'Montreal-based NanoXplore (TSX: GRA) has officially opened its expanded production facility, capable of producing 4,000 tonnes of graphene powder per year—making it one of the largest graphene producers globally.

The $50 million facility uses the company''s proprietary exfoliation process to produce graphene powder for plastics, composites, and battery applications.

"We''ve reached a scale where graphene can compete economically with traditional additives," said CEO Soroush Nazarpour. "Our customers are now integrating graphene into mainstream products."

Major customers include automotive suppliers and battery manufacturers.',
'https://nanoxplore.ca/example', 'NanoXplore', 'products', 'manufacturing', 7, ARRAY['NanoXplore', 'manufacturing', 'Canada', 'production'], false, NOW() - INTERVAL '8 days'),

-- More research
('Graphene Water Filters Remove 99% of Contaminants in Field Trials',
'graphene-water-filters-field-trials',
'A new graphene oxide membrane has shown exceptional performance in removing heavy metals and bacteria from contaminated water sources.',
'Field trials conducted in Bangladesh have demonstrated that graphene oxide membrane filters can remove over 99% of heavy metals, bacteria, and organic contaminants from groundwater.

The filters, developed by researchers at the University of Manchester in collaboration with local NGOs, could provide a low-cost solution for regions affected by arsenic contamination.

"A single filter cartridge can provide safe drinking water for a family of four for up to six months," said project leader Dr. Rahul Nair. "The cost is comparable to existing activated carbon filters."

The researchers are now seeking commercial partners to scale up production.',
'https://manchester.ac.uk/example', 'University of Manchester', 'research', 'water', 8, ARRAY['water filtration', 'graphene oxide', 'Manchester', 'clean water'], false, NOW() - INTERVAL '12 days'),

('Researchers Achieve Superconductivity in Twisted Bilayer Graphene',
'superconductivity-twisted-bilayer-graphene',
'A team at Princeton has reproduced superconductivity in twisted bilayer graphene at record high temperatures.',
'Physicists at Princeton University have achieved superconductivity in twisted bilayer graphene at temperatures approaching 5 Kelvin—significantly higher than previously reported.

The breakthrough comes from precise control of the "magic angle" twist between two graphene layers, which creates conditions for electrons to pair up and flow without resistance.

"Understanding superconductivity in this simple system could unlock the secrets of high-temperature superconductors," said Professor Ali Yazdani. "Graphene gives us an ideal platform to study these quantum phenomena."

The research, published in Science, could eventually lead to practical superconducting devices.',
'https://princeton.edu/example', 'Princeton University', 'research', 'physics', 9, ARRAY['superconductivity', 'physics', 'Princeton', 'quantum'], false, NOW() - INTERVAL '20 days'),

-- Investment
('Graphene ETF Launches on London Stock Exchange',
'graphene-etf-london-launch',
'The first exchange-traded fund focused exclusively on graphene and 2D materials companies has begun trading in London.',
'HANetf has launched the first graphene-focused exchange-traded fund (ETF) on the London Stock Exchange, offering investors exposure to companies involved in graphene production and applications.

The Graphene & 2D Materials ETF (GRPH) tracks an index of 25 companies with significant graphene-related revenues or research programs, including NanoXplore, First Graphene, and major technology firms like Samsung.

"Graphene is moving from laboratory to factory, and investors want exposure to this transition," said HANetf CEO Hector McNeil. "This ETF provides diversified access to the entire value chain."

The fund has an expense ratio of 0.75% and is available to retail investors.',
'https://hanetf.com/example', 'HANetf', 'investment', 'finance', 7, ARRAY['ETF', 'investment', 'London', 'stocks'], false, NOW() - INTERVAL '6 days'),

('Versarien Reports 200% Revenue Growth in Graphene Division',
'versarien-200-percent-growth',
'UK-based Versarien has announced record revenues from its graphene products division, driven by aerospace and defense contracts.',
'Versarien plc (LSE: VRS) has reported 200% year-over-year revenue growth in its graphene products division, citing strong demand from aerospace and defense customers.

The company''s Nanene® graphene nanoplatelets are being incorporated into composite materials for aircraft components, offering weight savings and improved mechanical properties.

"We''re seeing graphene transition from R&D budgets to production procurement," said CEO Neill Ricketts. "This is the inflection point we''ve been working toward."

The company raised its full-year revenue guidance by 25% following the announcement.',
'https://versarien.com/example', 'Versarien', 'investment', 'earnings', 6, ARRAY['Versarien', 'UK', 'aerospace', 'defense', 'earnings'], false, NOW() - INTERVAL '14 days');

-- Insert wiki pages
INSERT INTO wiki_pages (slug, title, content, excerpt, parent_slug, display_order, meta_description, status) VALUES

('what-is-graphene', 'What is Graphene?',
'# What is Graphene?

Graphene is a single layer of carbon atoms arranged in a two-dimensional honeycomb lattice. Isolated in 2004 by Andre Geim and Konstantin Novoselov at the University of Manchester (who won the Nobel Prize in Physics in 2010 for their work), graphene is considered one of the most revolutionary materials of the 21st century.

## Key Properties

Graphene possesses an extraordinary combination of properties that make it unique among all known materials:

- **Mechanical Strength**: Graphene is approximately 200 times stronger than steel by weight, with a tensile strength of 130 GPa.
- **Electrical Conductivity**: Electrons travel through graphene at 1/300 the speed of light—faster than in any other known material at room temperature.
- **Thermal Conductivity**: With a thermal conductivity of ~5,000 W/mK, graphene is the best thermal conductor known.
- **Transparency**: Despite being the strongest material known, a single layer of graphene absorbs only 2.3% of light, making it nearly transparent.
- **Flexibility**: Graphene can be stretched up to 20% of its original size while maintaining its structural integrity.
- **Impermeability**: Graphene is impermeable to all gases, including helium.

## Why It Matters

The combination of these properties opens up possibilities across virtually every industry:

1. **Electronics**: Faster, more efficient transistors and flexible displays
2. **Energy**: Higher-capacity batteries and more efficient solar cells
3. **Medicine**: Targeted drug delivery and advanced biosensors
4. **Materials**: Ultra-strong, lightweight composites for aerospace and automotive
5. **Water**: Advanced filtration and desalination membranes

## Market Outlook

The global graphene market is projected to grow from approximately $200 million in 2023 to over $1.5 billion by 2030, representing a compound annual growth rate (CAGR) of around 30%.',
'Graphene is a single layer of carbon atoms arranged in a two-dimensional honeycomb lattice. It is the thinnest, strongest, and most conductive material known to science.',
NULL, 1,
'Learn what graphene is, its extraordinary properties, and why this wonder material is revolutionizing technology.',
'published'),

('properties', 'Graphene Properties',
'# Graphene Properties

Graphene''s unique structure gives it an extraordinary combination of properties that no other material can match.

## Overview

As a single layer of carbon atoms in a hexagonal arrangement, graphene exhibits properties that often seem contradictory: it''s the strongest material ever tested, yet flexible; nearly transparent, yet impermeable to gases; the best electrical conductor, yet only one atom thick.

## Property Categories

### Electrical Properties
Graphene has exceptional electrical conductivity due to its unique band structure. Electrons can travel through graphene without scattering, behaving as if they have no mass.

### Mechanical Properties
With a tensile strength of 130 GPa and a Young''s modulus of 1 TPa, graphene is the strongest material ever measured.

### Thermal Properties
Graphene has the highest thermal conductivity of any known material, approximately 5,000 W/mK at room temperature.

### Optical Properties
A single layer of graphene absorbs only 2.3% of visible light, making it nearly transparent while still interacting with electromagnetic radiation.',
'Graphene possesses an extraordinary combination of electrical, mechanical, thermal, and optical properties.',
NULL, 2,
'Explore graphene''s unique electrical, mechanical, thermal, and optical properties.',
'published'),

('applications', 'Graphene Applications',
'# Graphene Applications

Graphene''s exceptional properties enable applications across nearly every industry.

## Current Applications

### Energy Storage
- Enhanced lithium-ion battery anodes
- Supercapacitor electrodes
- Fuel cell catalysts

### Electronics
- Transparent conductive films
- High-frequency transistors
- Flexible displays

### Composites
- Structural reinforcement
- Thermal management
- Electromagnetic shielding

### Coatings
- Anti-corrosion coatings
- Conductive inks
- Barrier films

## Emerging Applications

### Medical
- Drug delivery systems
- Biosensors
- Tissue engineering

### Water Treatment
- Desalination membranes
- Heavy metal removal
- Antibacterial filtration

### Aerospace
- Lightweight structural materials
- De-icing coatings
- Radiation shielding',
'Graphene''s exceptional properties enable applications in energy, electronics, composites, medicine, and more.',
NULL, 3,
'Discover current and emerging applications of graphene across industries.',
'published'),

('glossary', 'Graphene Glossary',
'# Graphene Glossary

## A

**Allotrope**: Different structural forms of the same element. Graphene, graphite, diamond, and fullerenes are all carbon allotropes.

## B

**Bilayer Graphene**: Two layers of graphene stacked together. Has different electronic properties than single-layer graphene.

## C

**Carbon Nanotube (CNT)**: A cylinder formed by rolling up a sheet of graphene. Can be single-walled or multi-walled.

**CVD (Chemical Vapor Deposition)**: A production method where carbon-containing gases decompose on a heated substrate to form graphene.

## E

**Exfoliation**: The process of separating graphene layers from graphite, either mechanically (using tape) or chemically.

## F

**Fullerene**: Spherical carbon molecules, like the famous C60 "buckyball." Related to graphene.

## G

**Graphene Oxide (GO)**: Oxidized form of graphene with oxygen-containing functional groups. Water-soluble and easier to process.

**Graphite**: Multiple layers of graphene stacked together. The material in pencils.

## H

**Hexagonal Lattice**: The honeycomb arrangement of carbon atoms in graphene, with each atom bonded to three neighbors.

## M

**Monolayer**: A single layer of graphene, just one atom thick (~0.335 nm).

## N

**Nanocomposite**: A material combining graphene with other materials (polymers, metals) to enhance properties.

## R

**Reduced Graphene Oxide (rGO)**: Graphene oxide that has been chemically or thermally reduced to restore conductivity.

## S

**sp² Hybridization**: The bonding arrangement in graphene where each carbon atom forms three sigma bonds with neighbors.

## T

**Thermal Conductivity**: The ability to conduct heat. Graphene''s is ~5,000 W/mK—the highest known.',
'A comprehensive glossary of graphene-related terms and definitions.',
NULL, 10,
'Comprehensive glossary of graphene terms, definitions, and concepts.',
'published');

-- Insert sample companies
INSERT INTO companies (name, slug, description, website, company_type, focus_areas, founded_year, headquarters) VALUES

('First Graphene', 'first-graphene',
'First Graphene is a leading supplier of high-performing, bulk graphene products. Using proprietary production techniques, we produce graphene suitable for bulk industrial applications.',
'https://firstgraphene.net',
'manufacturer',
ARRAY['composites', 'coatings', 'batteries'],
2015, 'Perth, Australia'),

('NanoXplore', 'nanoxplore',
'NanoXplore is a graphene company and the world''s largest producer of high-volume graphene powder. We focus on providing cost-effective graphene for industrial applications.',
'https://nanoxplore.ca',
'manufacturer',
ARRAY['plastics', 'batteries', 'composites'],
2011, 'Montreal, Canada'),

('Directa Plus', 'directa-plus',
'Directa Plus is one of the largest European producers and suppliers of graphene-based products for use in consumer and industrial markets.',
'https://directaplus.com',
'manufacturer',
ARRAY['textiles', 'environmental', 'composites'],
2005, 'Milan, Italy'),

('Versarien', 'versarien',
'Versarien is an advanced materials engineering group focused on the development and commercialization of graphene and related 2D materials.',
'https://versarien.com',
'manufacturer',
ARRAY['aerospace', 'defense', 'electronics'],
2010, 'Cheltenham, UK'),

('Graphene Flagship', 'graphene-flagship',
'The Graphene Flagship is a €1 billion European research initiative bringing together academic and industrial partners to take graphene from the laboratory into society.',
'https://graphene-flagship.eu',
'research',
ARRAY['research', 'commercialization', 'innovation'],
2013, 'Gothenburg, Sweden'),

('National Graphene Institute', 'national-graphene-institute',
'The National Graphene Institute at the University of Manchester is a world-leading research center dedicated to graphene and 2D materials.',
'https://ngi.manchester.ac.uk',
'research',
ARRAY['research', 'materials science', 'electronics'],
2015, 'Manchester, UK'),

('Graftech International', 'graftech-international',
'Graftech International is a leading manufacturer of high-quality graphite electrode products for the steel and other metals industries.',
'https://graftech.com',
'manufacturer',
ARRAY['electrodes', 'steel', 'industrial'],
1886, 'Brooklyn Heights, USA'),

('Haydale Graphene Industries', 'haydale-graphene',
'Haydale is a global technology group that specializes in the design, development, and commercialization of graphene and other nanomaterial products.',
'https://haydale.com',
'manufacturer',
ARRAY['inks', 'composites', 'sensors'],
2010, 'Ammanford, UK');
