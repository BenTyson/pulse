import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const db = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY!
);

const newWikiPages = [
  {
    slug: 'production-methods',
    title: 'Production Methods',
    meta_description: 'Comprehensive guide to graphene production methods: CVD, exfoliation, reduction of graphene oxide, and industrial manufacturing processes.',
    content: `# Graphene Production Methods

The commercialization of graphene depends critically on scalable, cost-effective production methods. Different applications require different grades of graphene, and no single production method satisfies all requirements. This guide covers the major production techniques, their advantages, limitations, and industrial applications.

## Overview of Methods

| Method | Quality | Scalability | Cost | Primary Use |
|--------|---------|-------------|------|-------------|
| Mechanical Exfoliation | Highest | Very Low | High | Research |
| CVD | High | High | Medium | Electronics |
| Liquid Phase Exfoliation | Medium | High | Low | Composites |
| Reduction of GO | Low-Medium | Very High | Very Low | Coatings, Batteries |
| SiC Epitaxy | High | Medium | High | Electronics |

## Mechanical Exfoliation

### The Scotch Tape Method

The technique that earned Geim and Novoselov the Nobel Prize remains the gold standard for producing pristine graphene.

**Process:**
1. Apply adhesive tape to highly oriented pyrolytic graphite (HOPG)
2. Peel tape to remove graphite layers
3. Repeatedly fold and peel tape to thin the material
4. Transfer to substrate (typically SiO2/Si wafer)
5. Identify single-layer flakes via optical microscopy

**Specifications:**
- Flake size: 10-100 micrometers typical
- Defect density: <0.01 defects/nm²
- Mobility: >100,000 cm²/V·s achievable
- Throughput: Milligrams per day

**Advantages:**
- Highest quality graphene achievable
- Minimal defects and contamination
- No specialized equipment required
- Ideal for fundamental research

**Limitations:**
- Not scalable to industrial quantities
- Random flake sizes and locations
- Labor-intensive identification process
- Unsuitable for commercial production

## Chemical Vapor Deposition (CVD)

CVD has emerged as the leading method for producing large-area, high-quality graphene for electronics applications.

### Standard CVD Process

**Equipment:**
- Tube furnace capable of 1000°C+
- Vacuum or atmospheric pressure system
- Gas flow controllers (CH4, H2, Ar)
- Metal foil substrates (Cu or Ni)

**Typical Recipe (Copper Foil):**
1. Load Cu foil into quartz tube
2. Evacuate and purge with Ar/H2
3. Heat to 1000°C under H2 flow (anneal 30 min)
4. Introduce CH4 (0.1-1% in H2) for 10-30 min
5. Rapid cool under Ar flow
6. Transfer to target substrate (PMMA-assisted)

**Growth Parameters:**
| Parameter | Typical Range | Effect |
|-----------|--------------|--------|
| Temperature | 950-1050°C | Higher = larger grains |
| CH4 Concentration | 0.1-5% | Lower = fewer layers |
| H2 Flow | 10-500 sccm | Etching vs. growth balance |
| Growth Time | 5-60 min | Domain size, coverage |
| Pressure | 0.1-760 Torr | Growth kinetics |

### Substrate Considerations

**Copper:**
- Low carbon solubility enables self-limiting monolayer growth
- Large-grain polycrystalline Cu preferred
- Single-crystal Cu(111) for best quality
- Industry standard for graphene electronics

**Nickel:**
- High carbon solubility causes multilayer formation
- Faster growth rates
- Used for few-layer graphene applications
- More challenging thickness control

### Transfer Methods

The CVD graphene must be transferred from metal to target substrate:

**PMMA Transfer:**
1. Spin-coat PMMA onto graphene/Cu
2. Etch Cu in FeCl3 or ammonium persulfate
3. Rinse PMMA/graphene in DI water
4. Scoop onto target substrate
5. Remove PMMA with acetone

**Direct Transfer (Roll-to-Roll):**
- Thermal release tape or EVA adhesive
- Enables continuous processing
- Used in Samsung's graphene production line

### Industrial CVD Systems

Major equipment manufacturers:
- **Aixtron** (Germany): MOCVD systems adapted for graphene
- **Graphene Square** (Korea): Dedicated graphene CVD
- **CVD Equipment Corporation** (USA): Custom CVD systems
- **First Nano** (USA): Research-scale CVD

Production capacity has reached:
- Samsung: 30-inch diagonal sheets (2014)
- Sony: 100-meter roll (2013)
- BGT Materials: 60 cm × 1000 m rolls (2023)

## Liquid Phase Exfoliation (LPE)

LPE produces graphene dispersions suitable for coatings, composites, and inks.

### Sonication Method

**Process:**
1. Disperse graphite in suitable solvent
2. Apply ultrasonic energy (bath or probe)
3. Centrifuge to remove unexfoliated material
4. Collect supernatant containing graphene

**Optimal Solvents:**
| Solvent | Surface Tension (mJ/m²) | Notes |
|---------|------------------------|-------|
| NMP | 40 | Best stability, toxic |
| DMF | 36 | Good dispersion, toxic |
| IPA/Water | 25-40 (tunable) | Safe, moderate stability |
| Cyrene | 33 | Bio-derived, promising |

**Typical Parameters:**
- Sonication: 1-48 hours
- Power: 100-500 W
- Concentration: 0.01-1 mg/mL achievable
- Flake size: 100 nm - 5 μm
- Thickness: 1-10 layers typical

### Shear Exfoliation

Higher throughput alternative to sonication:

- Kitchen blender demonstration (2014)
- Industrial rotor-stator mixers
- Microfluidization
- Ball milling

**Advantages:**
- Scalable to tons/year
- Lower energy input
- Continuous processing possible

### Surfactant-Assisted Exfoliation

Aqueous dispersions using surfactants:
- Sodium cholate
- Sodium dodecyl sulfate (SDS)
- Pluronic polymers
- Pyrene derivatives

Enables water-based processing for:
- Inkjet printing
- Spray coating
- Composite manufacturing

## Reduction of Graphene Oxide

The most scalable method, producing reduced graphene oxide (rGO) from oxidized graphite.

### Graphene Oxide Synthesis

**Modified Hummers Method:**
1. Oxidize graphite with KMnO4 in H2SO4
2. Add H2O2 to remove excess oxidizer
3. Wash and purify
4. Exfoliate in water via sonication

**Oxygen Content:** 30-40 atomic %
**Functional Groups:** Epoxy, hydroxyl, carboxyl, carbonyl

### Reduction Methods

**Thermal Reduction:**
- Temperature: 200-1000°C
- Atmosphere: Ar, N2, or H2
- Removes most oxygen
- Creates structural defects

**Chemical Reduction:**
- Hydrazine (toxic but effective)
- Vitamin C (green chemistry)
- Hydroiodic acid (high quality)
- Sodium borohydride

**Electrochemical Reduction:**
- Applied potential: -1.0 to -1.5 V
- Aqueous or organic electrolytes
- Controllable reduction degree

### rGO Quality

| Property | Graphene Oxide | rGO | Pristine Graphene |
|----------|---------------|-----|-------------------|
| C/O Ratio | 2-3 | 10-15 | >100 |
| Conductivity | Insulating | 100-1000 S/m | 10⁶ S/m |
| Sheet Resistance | >10¹⁰ Ω/sq | 10³-10⁵ Ω/sq | 30 Ω/sq |

### Industrial Production

Major rGO producers:
- **The Sixth Element** (China): 100+ tons/year
- **Angstron Materials** (USA): Multi-ton scale
- **XG Sciences** (USA): Graphene nanoplatelets
- **Directa Plus** (Italy): G+ graphene products

## Epitaxial Growth on Silicon Carbide

High-temperature decomposition of SiC produces graphene directly on a semiconductor substrate.

### Process

1. Heat SiC wafer to 1200-1600°C
2. Si atoms sublimate preferentially
3. Remaining C atoms rearrange into graphene
4. Growth occurs on Si-face or C-face

**Si-Face Growth:**
- More controlled
- Uniform thickness
- Buffer layer at interface
- Lower mobility

**C-Face Growth:**
- Multilayer formation
- Rotational stacking
- Higher mobility
- Less uniform

### Advantages for Electronics

- No transfer required
- Wafer-scale processing
- Compatible with semiconductor fabs
- Direct integration with SiC electronics

### Limitations

- High cost of SiC wafers
- High process temperatures
- Insulating substrate (for most electronics)
- Limited to specific applications

## Emerging Methods

### Plasma-Enhanced CVD

- Lower temperatures (400-700°C)
- Direct growth on various substrates
- Enables flexible substrate processing

### Molecular Beam Epitaxy (MBE)

- Ultra-clean environment
- Precise control
- Research-scale only

### Flash Joule Heating

- Developed at Rice University (2020)
- Converts any carbon source to graphene
- 10 ms process time
- Potential for waste upcycling

### Electrochemical Exfoliation

- Graphite electrode in ionic solution
- Applied voltage causes intercalation
- Rapid, scalable process
- Variable quality

## Choosing a Production Method

| Application | Recommended Method | Rationale |
|-------------|-------------------|-----------|
| Transistors | CVD on Cu | High mobility, large area |
| Composites | LPE or rGO | Scalable, cost-effective |
| Batteries | rGO | High surface area, conductivity |
| Sensors | CVD or Mechanical | High quality required |
| Thermal Management | CVD or HOPG-derived | High thermal conductivity |
| Coatings | LPE or rGO | Solution processable |
| Research | Mechanical Exfoliation | Highest quality |

## Quality Metrics

When evaluating graphene from any method:

1. **Layer Number**: Raman 2D/G ratio, AFM
2. **Defect Density**: Raman D/G ratio, ID/IG < 0.1 for high quality
3. **Domain Size**: SEM, TEM, optical microscopy
4. **Contamination**: XPS for residues, trace metals
5. **Conductivity**: Sheet resistance, Hall mobility`
  },
  {
    slug: 'market-overview',
    title: 'Graphene Market Overview',
    meta_description: 'Analysis of the global graphene market: industry size, growth projections, key players, regional dynamics, and investment landscape.',
    content: `# Graphene Market Overview

The graphene industry has evolved from laboratory curiosity to commercial reality over the past decade. This overview examines the current market landscape, key players, regional dynamics, and future projections.

## Market Size and Growth

### Current Valuation

| Metric | 2023 Value | 2030 Projection | CAGR |
|--------|------------|-----------------|------|
| Global Market | $320M | $1.5B | 25% |
| Graphene Oxide | $45M | $280M | 30% |
| CVD Graphene | $85M | $420M | 26% |
| Graphene Nanoplatelets | $140M | $550M | 22% |
| Graphene-Enhanced Products | $2.8B | $18B | 30% |

### Growth Drivers

**Technology Maturation:**
- Production costs decreased 90% since 2010
- Quality and consistency improvements
- Standardization of grades and specifications

**Application Development:**
- Battery technology (major driver)
- Composite materials commercialization
- Thermal management solutions
- Sensor technologies

**Investment:**
- $500M+ in venture funding since 2010
- Government programs worldwide
- Corporate R&D budgets

## Market Segmentation

### By Product Type

**Graphene Nanoplatelets (GNPs):**
- Largest segment by volume
- 5-50 layers thick
- Used in composites, coatings
- Lowest cost per gram

**Graphene Oxide (GO) / rGO:**
- Fastest growing segment
- Solution processable
- Battery electrodes, membranes
- Moderate cost

**CVD Graphene:**
- Highest value per unit area
- Electronics, sensors
- Transparent conductors
- Premium pricing

**Few-Layer Graphene:**
- 2-10 layers
- Balance of properties and cost
- Thermal, mechanical applications

### By Application

| Application | 2023 Share | Growth Rate | Key Drivers |
|-------------|------------|-------------|-------------|
| Energy Storage | 35% | 35% | EV batteries, supercapacitors |
| Composites | 25% | 20% | Automotive, aerospace |
| Electronics | 15% | 30% | Flexible displays, sensors |
| Coatings | 12% | 18% | Corrosion, thermal |
| Other | 13% | 22% | Biomedical, filtration |

### By End-Use Industry

**Automotive (30%):**
- Lightweighting (composites)
- Battery improvements
- Thermal management
- Tire reinforcement

**Electronics (25%):**
- Flexible displays
- Touchscreens
- RF components
- Thermal interface materials

**Energy (20%):**
- Lithium-ion batteries
- Supercapacitors
- Solar cells
- Fuel cells

**Aerospace & Defense (10%):**
- Structural composites
- EMI shielding
- De-icing systems
- Sensors

**Other (15%):**
- Sports equipment
- Medical devices
- Water filtration
- Lubricants

## Regional Analysis

### Asia-Pacific (45% market share)

**China:**
- World's largest producer
- Government "Made in China 2025" support
- Major companies: The Sixth Element, XG Sciences China
- Focus: High-volume, cost-competitive production

**South Korea:**
- Samsung's graphene initiatives
- Strong electronics integration
- Companies: Graphene Square, Hanwha

**Japan:**
- Advanced materials focus
- Integration with existing industries
- Companies: Nippon Shokubai, Toray

### Europe (30% market share)

**United Kingdom:**
- National Graphene Institute (NGI)
- Strong research base
- Companies: Versarien, Applied Graphene Materials

**Germany:**
- Industrial application focus
- Automotive integration
- Companies: NanoXplore Europe, Sixonia Tech

**Spain:**
- Graphenea (leading CVD producer)
- ICN2 research center

### North America (20% market share)

**United States:**
- Strong VC funding
- Defense applications
- Companies: Garmor, NanoXplore, CVD Equipment

**Canada:**
- NanoXplore headquarters
- Mining-to-graphene initiatives

### Rest of World (5% market share)

- Emerging production in India, Brazil
- Australia's graphite-to-graphene focus

## Key Industry Players

### Major Producers

| Company | Country | Focus | Est. Capacity |
|---------|---------|-------|---------------|
| The Sixth Element | China | GO/rGO | 100+ tons/yr |
| NanoXplore | Canada | GNPs | 10,000 tons/yr |
| XG Sciences | USA | GNPs | 80 tons/yr |
| Directa Plus | Italy | G+ products | 30 tons/yr |
| Graphenea | Spain | CVD, GO | Research scale |
| Applied Graphene Materials | UK | GNPs | 50 tons/yr |
| First Graphene | Australia | GNPs | 100 tons/yr |

### Technology Leaders

**CVD Graphene:**
- Graphenea (Spain)
- Graphene Square (Korea)
- BGT Materials (Taiwan)

**Graphene Oxide:**
- Angstron Materials (USA)
- The Sixth Element (China)
- Graphenea (Spain)

### Integrated Producers

Companies producing graphene-enhanced products:
- **Directa Plus**: Textile, environmental products
- **Haydale**: Functionalized graphene, composites
- **Versarien**: Industrial applications

## Pricing Trends

### Historical Price Decline

| Year | CVD ($/cm²) | rGO ($/kg) | GNPs ($/kg) |
|------|-------------|------------|-------------|
| 2010 | $100+ | $500 | $1000 |
| 2015 | $20 | $200 | $300 |
| 2020 | $5 | $80 | $100 |
| 2024 | $1-2 | $50 | $50-80 |

### Current Pricing by Grade

**CVD Graphene:**
- Research grade: $2-10/cm²
- Electronic grade: $10-50/cm²
- Production grade: $0.50-2/cm²

**Graphene Oxide:**
- Standard: $50-100/kg
- High purity: $200-500/kg
- Monolayer: $500-1000/kg

**Nanoplatelets:**
- Industrial: $50-100/kg
- High quality: $200-500/kg

## Investment Landscape

### Funding History

- **2010-2015**: Early stage, university spinouts
- **2015-2020**: Series A/B, capacity building
- **2020-Present**: Growth capital, M&A activity

### Notable Investments (2020-2024)

| Company | Funding | Investors | Use of Funds |
|---------|---------|-----------|--------------|
| NanoXplore | $75M | Public markets | Capacity expansion |
| Directa Plus | $40M | AIM listing | Product development |
| Paragraf | $60M | IQ Capital, BGF | Wafer-scale electronics |
| Graphcore | $222M | Sequoia, BMW | AI chips (graphene research) |

### Public Companies

**Pure-Play Graphene:**
- Directa Plus (AIM: DCTA)
- Applied Graphene Materials (AIM: AGM)
- First Graphene (ASX: FGR)
- Haydale (AIM: HAYD)
- NanoXplore (TSX: GRA)

**Graphene Exposure:**
- Samsung (KRX: 005930)
- BASF (ETR: BAS)
- Toray (TYO: 3402)

## Market Challenges

### Technical Barriers

- Consistent quality at scale
- Cost-effective transfer methods
- Integration with existing processes
- Standardization of specifications

### Commercial Barriers

- Long qualification cycles
- Competition from incumbent materials
- Limited large-scale applications
- Customer education required

### Market Structure

- Fragmented supply base
- No dominant standard
- Regional variations in quality
- Price pressure from China

## Future Outlook

### Near-Term (2024-2027)

- Battery applications drive volume growth
- Composite materials reach mainstream
- Pricing continues to decline
- Industry consolidation begins

### Medium-Term (2027-2030)

- Electronics applications commercialize
- Standards established globally
- Major corporations integrate supply chains
- $1B+ market achieved

### Long-Term (2030+)

- Graphene becomes commodity material
- Next-generation applications emerge
- Full supply chain maturation
- Broad industrial adoption`
  },
  {
    slug: 'safety-handling',
    title: 'Safety & Handling',
    meta_description: 'Guidelines for safe handling of graphene materials: toxicology research, workplace safety, regulations, and best practices for storage and disposal.',
    content: `# Graphene Safety & Handling

As graphene transitions from laboratory to industrial use, understanding its safety profile becomes critical. This guide covers current toxicology research, workplace safety guidelines, regulatory status, and best practices for handling graphene materials.

## Toxicology Overview

### Current State of Knowledge

Graphene safety research is ongoing, with findings varying based on:
- Form of graphene (GO, rGO, pristine, functionalized)
- Size and thickness of particles
- Concentration and exposure duration
- Route of exposure (inhalation, dermal, ingestion)

**Key Finding:** No graphene-specific regulations exist yet, but precautionary approaches are recommended based on nanomaterial guidelines.

### Physical-Chemical Properties Affecting Toxicity

| Property | Effect on Toxicity | Notes |
|----------|-------------------|-------|
| Lateral Size | Larger = different uptake | >10 μm may cause frustrated phagocytosis |
| Thickness | Thicker = less membrane disruption | Multilayer generally safer |
| Oxidation | More O = more reactive | GO more toxic than pristine in some studies |
| Functionalization | Can increase or decrease toxicity | PEGylation often reduces toxicity |
| Aggregation | Aggregates behave differently | Individual sheets more active |

## Inhalation Toxicity

### Research Findings

**Animal Studies:**
- Pulmonary inflammation observed at high doses
- Dose-dependent responses typical
- Some fibrosis at extreme exposures
- Most effects reversible at low doses

**Critical Factors:**
- Aerodynamic diameter determines lung deposition
- Nanoplatelets vs. large flakes behave differently
- Agglomeration affects respirability
- Duration of exposure matters

### Occupational Exposure Limits

No graphene-specific OELs established. Reference values:

| Organization | Guideline | Notes |
|--------------|-----------|-------|
| NIOSH | Use nanomaterial recommendations | 0.1-1 mg/m³ for CNTs |
| BSI | PD 6699-2:2019 | Benchmark exposure levels |
| Germany | IFA | Precautionary limits apply |
| Industry | Company-specific | Often 0.1 mg/m³ or lower |

### Recommended Exposure Controls

**Engineering Controls:**
- Local exhaust ventilation at handling points
- HEPA filtration for air systems
- Enclosed processes where possible
- Wet processing to minimize dust

**Personal Protective Equipment:**
- N95 or P100 respirators minimum
- Full-face respirator for high exposure
- Nitrile gloves (double-gloving recommended)
- Safety glasses or goggles
- Lab coat or coveralls

## Dermal Exposure

### Skin Contact Considerations

**Graphene Oxide:**
- Water dispersible, more likely skin contact
- Some studies show minimal dermal penetration
- May cause irritation at high concentrations
- Functionalized GO varies widely

**Dry Graphene:**
- Less likely to penetrate intact skin
- Mechanical irritation possible
- Keep cuts/abrasions covered

### Protective Measures

- Nitrile gloves (minimum 0.1 mm thickness)
- Change gloves frequently
- Wash hands thoroughly after handling
- Use barrier creams for extended work

## Ingestion Toxicity

### Research Status

- Least studied route of exposure
- Animal studies show generally low acute toxicity
- GO may affect gut microbiome
- Most passes through GI tract unabsorbed

### Prevention

- No eating/drinking in work areas
- Wash hands before breaks
- Clean work surfaces regularly
- Proper labeling of containers

## Environmental Considerations

### Fate and Transport

**Water:**
- GO disperses readily in water
- Pristine graphene hydrophobic
- May adsorb contaminants
- Behavior depends on water chemistry

**Soil:**
- Limited mobility in soil
- May bind to organic matter
- Long-term fate unknown

**Air:**
- Settles relatively quickly
- Agglomerates in atmosphere
- Limited long-range transport

### Ecotoxicity

| Organism Type | Findings | Notes |
|---------------|----------|-------|
| Bacteria | Variable effects | Some antibacterial activity |
| Algae | Growth inhibition at high conc. | Light-blocking effects |
| Invertebrates | Generally low toxicity | Some GO effects noted |
| Fish | Limited data | Embryo studies ongoing |
| Plants | Mixed results | Dose-dependent |

## Workplace Safety Guidelines

### Laboratory Handling

**Setup:**
1. Dedicated graphene handling area
2. Chemical fume hood with proper airflow
3. HEPA-filtered vacuum for cleaning
4. Spill containment materials ready

**Procedure:**
1. Review SDS before handling
2. Don appropriate PPE
3. Work in fume hood when possible
4. Use wet methods to minimize dust
5. Transfer carefully to avoid spills
6. Clean up immediately after work

### Industrial Handling

**Dry Powder Operations:**
- Enclosed handling systems preferred
- Local exhaust at transfer points
- Glovebox for high-purity work
- Bag-in/bag-out containment

**Solution/Dispersion Handling:**
- Less aerosol risk than powders
- Still use ventilation
- Prevent splashes
- Secondary containment for storage

### Spill Response

**Small Spills (<100 g):**
1. Alert nearby personnel
2. Don PPE (respirator, gloves, goggles)
3. Wet material if dry powder
4. Wipe with damp cloth/paper
5. Place waste in sealed container
6. Dispose as hazardous waste

**Large Spills:**
1. Evacuate immediate area
2. Contact EHS department
3. Prevent spread with barriers
4. Professional cleanup may be needed
5. Document incident

## Storage Requirements

### General Guidelines

| Form | Container | Conditions | Shelf Life |
|------|-----------|------------|------------|
| Dry Powder | Sealed bottle, desiccant | Cool, dry, dark | 1-2 years |
| GO Dispersion | Sealed bottle | Refrigerated (4°C) | 6-12 months |
| CVD Films | In carrier, sealed | Room temp, dark | 6 months |
| rGO Powder | Inert atmosphere | Cool, dry | 1-2 years |

### Specific Considerations

**Graphene Oxide:**
- Sensitive to light (photoreduction)
- Concentration may change over time
- Agglomeration possible
- Check before critical use

**Dry Graphene:**
- Electrostatic charges cause handling difficulty
- May adsorb moisture
- Store in original container
- Ground containers to prevent static

**Functionalized Graphene:**
- Follow specific supplier guidelines
- Some functional groups degrade
- Temperature sensitivity varies

## Regulatory Status

### United States

**EPA:**
- TSCA: Most graphene forms listed
- New forms may require PMN
- SNUR possible for some applications

**OSHA:**
- No graphene-specific standards
- General duty clause applies
- Use nanomaterial guidance

**FDA:**
- Case-by-case evaluation
- Several graphene devices cleared
- Food contact under review

### European Union

**REACH:**
- Graphene registered as substance
- Supplier must provide SDS
- Some applications require authorization

**Nanomaterial Definition:**
- EU definition includes graphene
- Labeling requirements apply
- ECHA guidance available

### Other Regions

**China:**
- Growing domestic production
- Standards under development
- Local regulations vary

**Japan:**
- METI registration required
- Chemical safety law applies

**Korea:**
- K-REACH registration
- Similar to EU approach

## Best Practices Summary

### Do:
- Treat as potentially hazardous until more data available
- Use engineering controls first
- Wear appropriate PPE
- Follow supplier SDS
- Train personnel properly
- Document exposures
- Report any health effects

### Don't:
- Create unnecessary dust
- Handle without ventilation
- Touch face during work
- Eat/drink in work areas
- Dispose in regular trash
- Assume all forms are equivalent
- Ignore precautionary measures

## Resources

### Key Publications

- NIOSH Current Intelligence Bulletin on CNTs/CNFs
- ISO/TS 80004-13 (Graphene terminology)
- OECD Working Party on Nanomaterials reports
- Nanosafety Cluster publications

### Reporting

Report workplace exposures or health effects to:
- Company EHS department
- OSHA (if required)
- NIOSH Health Hazard Evaluation (voluntary)`
  },
  {
    slug: 'graphene-grades',
    title: 'Graphene Grades & Standards',
    meta_description: 'Understanding graphene quality grades, ISO standards, testing methods, and specifications for different applications.',
    content: `# Graphene Grades & Standards

The graphene industry has historically suffered from inconsistent quality claims and lack of standardization. This guide covers the emerging standards landscape, quality grades, testing methods, and how to specify graphene for different applications.

## The Quality Challenge

### Historical Issues

**"Graphene" Label Misuse:**
- Products marketed as graphene often contain mostly graphite
- Layer counts frequently misrepresented
- Quality metrics inconsistently reported
- No universal grading system

**2018 Study by Kauling et al. (Nature Communications):**
- Tested 60 commercial "graphene" products
- Only 10% met reasonable graphene criteria
- Many were mostly graphite with <10% graphene content
- Wide variation in actual properties

### Why Standards Matter

- Enable fair comparison between suppliers
- Ensure fitness for intended application
- Reduce qualification time and cost
- Build customer confidence
- Drive industry maturation

## ISO Standards for Graphene

### Published Standards

| Standard | Title | Status |
|----------|-------|--------|
| ISO/TS 80004-13:2017 | Vocabulary - Graphene | Published |
| ISO/TR 19733:2019 | Matrix of characterization properties | Published |
| ISO/TS 21356-1:2021 | Structural characterization | Published |
| ISO 21356-2 | Layer number (Raman) | Under development |

### ISO/TS 80004-13 Definitions

**Graphene:**
"Single layer of carbon atoms with each atom bound to three neighbours in a honeycomb structure."

**Bilayer Graphene:**
"Two-dimensional material consisting of two well-defined stacked graphene layers."

**Few-Layer Graphene:**
"Two-dimensional material consisting of three to ten well-defined stacked graphene layers."

**Graphene Layer:**
"Single layer of carbon atoms in which each atom is bound to three neighbours in a honeycomb structure. This term is used when part of certain graphene structures."

**Key Point:** Material with >10 layers should be called "graphite nanoplatelets" or "graphite," not graphene.

## Quality Grades

### By Layer Number

| Grade | Layers | Typical Production | Applications |
|-------|--------|-------------------|--------------|
| Monolayer | 1 | Mechanical exfoliation, CVD | Research, high-end electronics |
| Bilayer | 2 | CVD, targeted exfoliation | Transistors, photonics |
| Few-Layer (FLG) | 3-10 | CVD, exfoliation | Electronics, thermal |
| Graphene Nanoplatelets (GNP) | 10-30 | Exfoliation, intercalation | Composites, coatings |
| Graphite Nanoplatelets | >30 | Exfoliation | Bulk applications |

### By Defect Level

Based on Raman spectroscopy ID/IG ratio:

| Grade | ID/IG Ratio | Quality Level | Applications |
|-------|-------------|---------------|--------------|
| Pristine | <0.1 | Highest | Research, electronics |
| High Quality | 0.1-0.3 | Excellent | Sensors, thermal |
| Standard | 0.3-0.5 | Good | Composites, coatings |
| Industrial | 0.5-1.0 | Acceptable | Bulk applications |
| Defective | >1.0 | Low | Limited |

### By Lateral Size

| Grade | Lateral Size | Aspect Ratio | Notes |
|-------|--------------|--------------|-------|
| Nano | <100 nm | Low | Quantum effects |
| Small | 100 nm - 1 μm | Medium | Coatings, inks |
| Medium | 1-10 μm | High | Standard grade |
| Large | 10-100 μm | Very High | Mechanical exfoliation |
| Ultra-Large | >100 μm | Extreme | CVD, specialized |

## Characterization Methods

### Essential Techniques

**1. Raman Spectroscopy**

Most important single technique for graphene characterization.

| Feature | Position | Information |
|---------|----------|-------------|
| D Band | ~1350 cm⁻¹ | Defects, edges |
| G Band | ~1580 cm⁻¹ | sp2 carbon |
| 2D Band | ~2700 cm⁻¹ | Layer number, stacking |

**Key Metrics:**
- I2D/IG > 2: Monolayer
- I2D/IG ~ 1: Bilayer
- ID/IG: Defect density
- 2D FWHM: Layer uniformity

**2. Atomic Force Microscopy (AFM)**

| Measurement | Information |
|-------------|-------------|
| Height | Layer thickness |
| Roughness | Surface quality |
| Phase | Material contrast |

**Thickness Reference:**
- Monolayer: 0.335-0.4 nm (varies with substrate)
- Additional layers: +0.335 nm each
- Contamination increases apparent height

**3. Transmission Electron Microscopy (TEM)**

- Direct imaging of atomic structure
- Selected area electron diffraction (SAED)
- Layer counting at edges
- Defect visualization

**4. X-ray Photoelectron Spectroscopy (XPS)**

| Peak | Position | Information |
|------|----------|-------------|
| C 1s sp2 | 284.5 eV | Graphene carbon |
| C 1s sp3 | 285.5 eV | Defects, contamination |
| O 1s | 532 eV | Oxidation level |
| C/O ratio | - | Quality indicator |

**5. Thermogravimetric Analysis (TGA)**

- Thermal stability
- Oxidation temperature
- Residual content
- Quality indicator (higher = better)

### Electrical Testing

**Sheet Resistance:**
- Four-point probe measurement
- Van der Pauw geometry for films
- Typical values: 100-1000 Ω/sq for CVD

**Mobility:**
- Hall effect measurement
- Field-effect transistor characterization
- Typical: 1,000-10,000 cm²/V·s for CVD

## Specification Checklist

When procuring graphene, request:

### Material Identity
- [ ] Production method
- [ ] Form (powder, dispersion, film)
- [ ] Substrate (if applicable)

### Physical Properties
- [ ] Layer distribution (% monolayer, bilayer, etc.)
- [ ] Lateral size distribution
- [ ] Thickness measurement method

### Quality Metrics
- [ ] Raman spectra (ID/IG, I2D/IG)
- [ ] C/O ratio (XPS)
- [ ] Electrical conductivity
- [ ] Surface area (BET)

### Purity
- [ ] Carbon content
- [ ] Metal impurities (ICP-MS)
- [ ] Ash content

### Handling Information
- [ ] Storage conditions
- [ ] Shelf life
- [ ] Safety data sheet

## Industry Grading Systems

### Graphene Flagship Grades

The EU Graphene Flagship proposed standardized grades:

**Grade A: Electronic Grade**
- Monolayer dominant (>80%)
- ID/IG < 0.1
- Mobility > 5000 cm²/V·s
- For: Electronics, photonics

**Grade B: Functional Grade**
- Few-layer dominant
- ID/IG < 0.3
- High conductivity
- For: Sensors, thermal

**Grade C: Industrial Grade**
- Mixed layer number
- ID/IG < 0.5
- Cost-effective
- For: Composites, coatings

### National Physical Laboratory (UK) Reference Materials

NPL offers certified graphene reference materials:
- Monolayer CVD graphene on SiO2
- Certified layer number
- Traceable Raman spectra
- For instrument calibration

## Application-Specific Requirements

### Electronics

| Parameter | Requirement |
|-----------|-------------|
| Layer Number | Monolayer or controlled bilayer |
| Defect Density | ID/IG < 0.1 |
| Mobility | >10,000 cm²/V·s |
| Coverage | >99% |
| Grain Size | >10 μm |

### Composites

| Parameter | Requirement |
|-----------|-------------|
| Layer Number | FLG or GNP (cost-driven) |
| Lateral Size | >5 μm for reinforcement |
| Aspect Ratio | >1000 |
| Surface Area | >200 m²/g |
| Dispersibility | Critical for loading |

### Coatings

| Parameter | Requirement |
|-----------|-------------|
| Layer Number | Variable |
| Lateral Size | Application-dependent |
| Defects | Less critical |
| Stability | In carrier solvent |
| Coverage | Uniform |

### Energy Storage

| Parameter | Requirement |
|-----------|-------------|
| Layer Number | FLG to maximize surface area |
| Surface Area | >500 m²/g |
| Conductivity | >1000 S/m |
| Purity | Low metals (<100 ppm) |
| Oxidation | Controlled (for GO) |

## Vendor Qualification

### Questions to Ask Suppliers

1. What production method do you use?
2. What is your quality control process?
3. Can you provide batch-to-batch consistency data?
4. Do you have independent verification of specifications?
5. What characterization data is provided with each lot?
6. What is your capacity and lead time?
7. Do you offer application support?

### Red Flags

- No Raman data provided
- Claiming "graphene" for >10 layer material
- No specification sheet
- Unable to discuss production method
- No SDS available
- Prices too good to be true

## Future Standards Development

### In Progress

- ISO methods for specific properties
- IEC standards for electronic-grade graphene
- National standards (China GB, Korea KS)
- Industry consortium specifications

### Needs

- Standardized dispersion characterization
- Functionalization quantification methods
- Long-term stability testing protocols
- Application-specific test methods`
  },
  {
    slug: 'history-timeline',
    title: 'History & Timeline',
    meta_description: 'Complete timeline of graphene history from theoretical prediction to Nobel Prize and commercial development.',
    content: `# Graphene History & Timeline

The story of graphene spans over 150 years, from early observations of graphite behavior to the revolutionary isolation of single-layer carbon and its recognition with the Nobel Prize. This timeline chronicles the key discoveries, breakthroughs, and milestones in graphene science.

## Early History (1840-1960)

### 1840: Understanding Graphite

**Benjamin Collins Brodie** (Oxford University) began investigating the structure of graphite. Through chemical oxidation experiments, he observed that graphite could be converted to a "graphite oxide" with lamellar structure.

### 1859: First Graphite Oxide

Brodie published detailed work on graphite oxide preparation, unknowingly creating a precursor to modern graphene oxide. His chemical treatment intercalated oxygen between graphite layers—the same principle used today for large-scale graphene production.

### 1898: Carbon Bond Length

**William Henry Bragg** and others used X-ray diffraction to determine the carbon-carbon bond length in graphite, establishing fundamental structural parameters still referenced today.

### 1947: Theoretical Foundation

**Philip R. Wallace** (McGill University) published a seminal paper: "The Band Theory of Graphite." He calculated the electronic band structure of a single graphite layer to understand graphite's unusual semimetallic properties. This paper essentially described graphene's electronic structure 57 years before its isolation.

Key predictions from Wallace's work:
- Linear dispersion at K points
- Zero bandgap
- High carrier velocity

### 1956: Interlayer Bonding Understood

**J.W. McClure** extended Wallace's work, developing a complete theory for graphite including interlayer interactions. This "Slonczewski-Weiss-McClure" model remains foundational.

### 1962: The Term "Graphene" Coined

**Hanns-Peter Boehm** (Technical University of Munich) and colleagues published TEM images of extremely thin graphite flakes. Boehm proposed the name "graphene" in this publication, combining "graphite" with the "-ene" suffix used for polycyclic aromatic hydrocarbons.

*The name wouldn't be widely adopted until the 2000s.*

## The Search for 2D Materials (1960-2000)

### 1970s: Theoretical Doubts

Conventional wisdom held that truly 2D crystals couldn't exist at finite temperatures. The **Mermin-Wagner theorem** (1966) suggested that thermal fluctuations would destroy long-range order in 2D systems.

### 1975: Epitaxial Graphene on Metals

Researchers observed single graphene layers growing on transition metal surfaces during CVD experiments. However, these were considered surface science curiosities rather than practical materials.

### 1986: Fullerenes Discovered

**Harry Kroto, Robert Curl, and Richard Smalley** discovered C60 buckminsterfullerene, sparking intense interest in carbon nanomaterials. They received the 1996 Nobel Prize in Chemistry.

### 1991: Carbon Nanotubes

**Sumio Iijima** reported multi-walled carbon nanotubes in Nature, igniting the field of carbon nanotechnology. This increased interest in what would happen if nanotubes were "unrolled."

### 1999: Mechanical Exfoliation Attempts

Various groups attempted to thin graphite to few-layer films:
- **Rodney Ruoff** (Washington University) used AFM to manipulate graphite
- Multiple attempts at "nanopencil" approaches
- None achieved stable monolayers

### 2002: Ultra-Thin Graphite Films

**Walt de Heer's group** (Georgia Tech) grew graphene epitaxially on silicon carbide, reporting electronic measurements of what they called "ultra-thin epitaxial graphite films."

## The 2004 Breakthrough

### October 2004: Isolation of Monolayer Graphene

**Andre Geim and Konstantin Novoselov** at the University of Manchester published "Electric Field Effect in Atomically Thin Carbon Films" in Science.

**The Method:**
1. Applied adhesive tape to bulk graphite
2. Repeatedly peeled to thin the material
3. Transferred to oxidized silicon wafer
4. Identified monolayers by optical contrast
5. Fabricated field-effect devices

**Key Results:**
- Stable monolayer graphene at room temperature
- Ambipolar electric field effect observed
- Carrier mobilities of ~10,000 cm²/V·s
- Disproved assumptions about 2D crystal instability

### Why This Succeeded When Others Failed

**Simple but non-obvious:**
- SiO2/Si substrate enabled optical identification
- Specific oxide thickness (300 nm) created visible contrast
- Focus on physics not material perfection
- Measured electronic properties, proving utility

## Rapid Development (2005-2009)

### 2005: Relativistic Charge Carriers

Two landmark papers in Nature confirmed that electrons in graphene behave as massless Dirac fermions, moving at 1/300 the speed of light with zero effective mass.

**Geim & Novoselov team** and **Philip Kim's group** (Columbia) independently demonstrated:
- Anomalous quantum Hall effect
- Berry's phase of π
- Minimum conductivity at charge neutrality

### 2006: Major Breakthroughs

**Mechanical Properties:**
- Columbia University measured graphene's breaking strength
- Found to be 200× stronger than steel
- Young's modulus: 1 TPa

**First CVD Graphene:**
- Researchers grew graphene on nickel and copper substrates
- Path to large-area production opened

### 2007: Room Temperature QHE

The quantum Hall effect was observed at room temperature in graphene—normally a phenomenon requiring extreme cold. This demonstrated graphene's unique quantum properties accessible under normal conditions.

### 2008: Mass Production Begins

**Samsung** announced development of CVD graphene processes
**First commercial graphene** products appeared (mostly research-grade)

### 2009: Graphene Records Multiply

- Thermal conductivity measured: 5000 W/m·K (highest known)
- Electron mobility: 200,000 cm²/V·s achieved
- First graphene transistors demonstrated
- IBM invested heavily in graphene electronics

## Nobel Prize and Mainstream Recognition (2010)

### October 5, 2010: Nobel Prize in Physics

**Andre Geim and Konstantin Novoselov** awarded the Nobel Prize "for groundbreaking experiments regarding the two-dimensional material graphene."

The Nobel Committee noted: "Playfulness is one of their hallmarks, one always finds their results scientific, scientific, scientific but you always find personal qualities that make their papers extraordinarily nice to read."

**Impact of the Nobel:**
- Graphene became household name
- Funding increased dramatically worldwide
- Thousands of new researchers entered the field

### Geim's Unique Achievement

Andre Geim remains the only person to have won both:
- **Ig Nobel Prize** (2000): For levitating a frog with magnets
- **Nobel Prize** (2010): For graphene

This highlighted his unconventional approach to research.

## Commercialization Era (2011-2020)

### 2013: Graphene Flagship Launched

The European Union committed €1 billion over 10 years to the Graphene Flagship—the largest research initiative in EU history. Goals included transitioning graphene from labs to commercial applications.

### 2014: Large-Area CVD Achieved

**Samsung** demonstrated 30-inch graphene sheets grown by CVD and transferred intact—crucial for display applications.

**Sony** produced 100-meter graphene rolls using roll-to-roll CVD processing.

### 2015: First Commercial Products

- Graphene-enhanced tennis rackets (HEAD)
- Graphene-coated light bulbs
- Graphene composite helmets
- First graphene inks commercialized

### 2016-2017: Battery Applications Emerge

- **Huawei** announced graphene-enhanced batteries
- Multiple battery companies integrated graphene
- Energy storage identified as key market

### 2018: Quality Crisis

Study revealed most commercial "graphene" was actually graphite, spurring standardization efforts and quality awareness.

### 2019-2020: Industry Maturation

- ISO graphene standards published
- Major chemical companies enter market (BASF, Dow)
- Automotive applications commercialize
- COVID-19 pandemic affects supply chains

## Recent Developments (2021-Present)

### 2021: Superconductivity Advances

**"Magic angle" graphene research** expanded:
- Twisted bilayer graphene at 1.1° shows superconductivity
- Room-temperature superconductivity claims (controversial)
- Moiré physics became major research area

### 2022: Production Scaling

- Global production capacity exceeded 1000 tons/year
- Prices declined to ~$100/kg for basic grades
- China dominated production volume

### 2023: Application Breakthroughs

- First graphene-silicon batteries in EVs (various manufacturers)
- Graphene thermal management in smartphones
- Commercial graphene sensors deployed

### 2024: Ongoing Developments

- Wafer-scale graphene electronics approaching commercialization
- New twisted graphene physics discoveries
- Continued market growth at 25%+ annually

## Key Figures in Graphene History

| Name | Contribution | Institution |
|------|-------------|-------------|
| Andre Geim | Isolation, Nobel laureate | Manchester |
| Konstantin Novoselov | Isolation, Nobel laureate | Manchester |
| Philip Kim | Dirac fermions discovery | Columbia |
| Walt de Heer | Epitaxial graphene | Georgia Tech |
| Hanns-Peter Boehm | Named graphene | TU Munich |
| Philip Wallace | Band theory (1947) | McGill |
| Rodney Ruoff | Mechanical properties | Northwestern |
| James Tour | CVD methods, flash graphene | Rice |

## Timeline Summary

| Year | Milestone |
|------|-----------|
| 1947 | Wallace calculates graphene band structure |
| 1962 | Boehm coins term "graphene" |
| 2004 | Geim & Novoselov isolate monolayer |
| 2005 | Dirac fermion nature confirmed |
| 2010 | Nobel Prize in Physics |
| 2013 | EU Graphene Flagship launched |
| 2015 | First consumer products |
| 2018 | Magic-angle superconductivity |
| 2020 | ISO standards published |
| 2024 | Market reaches $300M+ annually |`
  }
];

async function expandWiki() {
  console.log('Adding new wiki pages...\n');

  for (const page of newWikiPages) {
    try {
      const { error } = await db
        .from('wiki_pages')
        .upsert({
          slug: page.slug,
          title: page.title,
          meta_description: page.meta_description,
          content: page.content,
          updated_at: new Date().toISOString()
        }, { onConflict: 'slug' });

      if (error) {
        console.error(`Error adding ${page.slug}:`, error.message);
      } else {
        console.log(`✓ Added: ${page.title} (${page.content.length.toLocaleString()} chars)`);
      }
    } catch (err) {
      console.error(`Error adding ${page.slug}:`, err);
    }
  }

  console.log('\n✓ Wiki expansion complete');
  console.log(`Added ${newWikiPages.length} new pages`);
}

expandWiki();
