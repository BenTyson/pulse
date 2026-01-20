import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const db = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY!
);

// New wiki pages for topic hub coverage
const topicWikiPages = [
  {
    slug: 'graphene-batteries',
    title: 'Graphene Batteries',
    meta_description: 'How graphene enhances battery technology: types, performance improvements, and commercial applications in energy storage.',
    content: `# Graphene Batteries

Graphene is revolutionizing battery technology through multiple mechanisms: as an anode material additive, cathode coating, and conductive network enhancer. This guide covers how graphene improves batteries, current commercial applications, and future potential.

## Why Graphene in Batteries?

### Key Advantages

| Property | Benefit for Batteries | Impact |
|----------|----------------------|--------|
| High Surface Area | More reaction sites | +30-40% capacity |
| Electrical Conductivity | Better electron transport | Faster charging |
| Mechanical Strength | Electrode stability | Longer cycle life |
| Thermal Conductivity | Heat dissipation | Improved safety |
| Flexibility | Volume change tolerance | Reduced degradation |

### The Battery Problem

Conventional lithium-ion batteries face fundamental limitations:
- **Graphite anodes**: Limited to 372 mAh/g theoretical capacity
- **Charging speed**: Lithium plating risk at high rates
- **Cycle degradation**: Volume changes crack electrodes
- **Thermal management**: Heat buildup limits performance

Graphene addresses all of these challenges.

## Graphene in Lithium-Ion Batteries

### Anode Applications

**Graphene-Silicon Composite Anodes**

Silicon offers 10x the capacity of graphite (4200 vs 372 mAh/g) but swells 300% during charging, causing rapid degradation. Graphene solutions:

- **Graphene-wrapped silicon nanoparticles**: Accommodates expansion
- **Silicon-graphene laminates**: Provides conductive network
- **Porous graphene scaffolds**: Buffers volume changes

**Performance Data:**
| Configuration | Capacity (mAh/g) | Cycle Life | Charge Rate |
|--------------|------------------|------------|-------------|
| Graphite only | 350 | 1000+ | 1C |
| Si-Graphene composite | 1500-2500 | 500-800 | 2-4C |
| Graphene-coated Si | 2000-3000 | 300-500 | 5C |

**Commercial Examples:**
- NanoGraf: 30% capacity increase in production batteries
- Sila Nanotechnologies: Graphene-silicon anode in Whoop 4.0
- Amprius: High-energy cells for aviation

### Cathode Applications

**Graphene Coatings on Cathode Materials**

- Prevents side reactions with electrolyte
- Improves electron transfer to active material
- Reduces internal resistance

**Graphene-LFP (Lithium Iron Phosphate)**
- 20-30% improvement in rate capability
- Better low-temperature performance
- Enhanced cycle life

**Graphene-NMC (Nickel Manganese Cobalt)**
- Stabilizes high-nickel cathodes
- Reduces thermal runaway risk
- Maintains capacity at high rates

### Conductive Additives

Replacing carbon black with graphene nanoplatelets:

| Property | Carbon Black | Graphene | Improvement |
|----------|-------------|----------|-------------|
| Loading Required | 3-5% | 1-2% | Less inactive material |
| Conductivity | Moderate | High | 50% lower resistance |
| Dispersion | Easy | Challenging | Process optimization |
| Cost | Low | Moderate | Justified by performance |

## Lithium-Sulfur Batteries

Graphene is critical for practical Li-S batteries, which promise 5x the energy density of Li-ion.

### The Polysulfide Problem

Lithium-sulfur batteries suffer from:
- Insulating sulfur cathode
- Polysulfide dissolution and shuttling
- Volume changes during cycling

### Graphene Solutions

**3D Graphene-Sulfur Cathodes**
- Porous graphene hosts sulfur
- Traps polysulfides physically and chemically
- Provides conductive network

**Performance Achievements:**
| Metric | Conventional Li-S | Graphene-Enhanced |
|--------|-------------------|-------------------|
| Capacity Retention (100 cycles) | 50% | 80%+ |
| Sulfur Loading | 1-2 mg/cm² | 4-6 mg/cm² |
| Coulombic Efficiency | 85% | 98%+ |

**Key Players:**
- Lyten: 3D graphene Li-S batteries for automotive
- Oxis Energy: Graphene-enhanced Li-S development
- Sion Power: Licerion technology with graphene

## Supercapacitors

Graphene is ideal for supercapacitors due to its extreme surface area (2630 m²/g theoretical) and excellent conductivity.

### Electric Double-Layer Capacitors (EDLCs)

Graphene electrodes enable:
- Energy density: 100-150 Wh/kg (vs 5-10 for activated carbon)
- Power density: 10,000+ W/kg
- Cycle life: 1,000,000+ cycles
- Fast charge: Seconds to minutes

### Hybrid Supercapacitors

Combining graphene with pseudocapacitive materials:
- Graphene-MnO2
- Graphene-RuO2
- Graphene-conducting polymers

**Commercial Products:**
- Skeleton Technologies: Curved graphene supercapacitors
- Maxwell/Tesla: Graphene-enhanced ultracapacitors
- Nanotech Energy: Graphene supercapacitor cells

## Solid-State Batteries

Graphene enables better solid-state battery interfaces:

### Applications in Solid Electrolytes

- **Interfacial layers**: Reduces resistance between electrode and electrolyte
- **Mechanical stability**: Prevents dendrite penetration
- **Ionic pathways**: Graphene oxide facilitates lithium ion transport

### Performance Improvements

| Challenge | Graphene Solution | Benefit |
|-----------|------------------|---------|
| High interface resistance | Graphene interlayer | 10x lower resistance |
| Dendrite growth | Graphene coating | Prevents short circuits |
| Electrode cracking | Flexible graphene matrix | Better cycling |

## Aluminum-Ion Batteries

Graphene cathodes enable practical aluminum-ion batteries:

### Graphene Manufacturing Group (GMG) Approach

- Graphene cathode stores aluminum ions in interlayer spaces
- Fast insertion/extraction kinetics
- No lithium required (abundance advantage)

**Specifications:**
- Charge time: 1-5 minutes (claimed)
- Cycle life: 2000+ cycles
- Energy density: Lower than Li-ion but improving
- Temperature range: -30°C to 65°C

## Sodium-Ion and Beyond

### Sodium-Ion Batteries

Graphene addresses sodium's larger ion size:
- Expanded graphite/graphene anodes
- Hard carbon-graphene composites
- Better accommodation of Na+ intercalation

### Potassium-Ion Batteries

Graphene enables K-ion which is cheaper than sodium:
- Graphene foam anodes
- High rate capability
- Low-cost energy storage potential

## Commercial Landscape

### Battery Companies Using Graphene

| Company | Application | Status |
|---------|-------------|--------|
| Samsung SDI | Li-ion enhancement | Research |
| CATL | Conductive additives | Production |
| BYD | Graphene-enhanced LFP | Production |
| Panasonic | Silicon-graphene R&D | Development |
| LG Energy Solution | Various research | Development |
| Nanotech Energy | Non-flammable cells | Commercial |

### Graphene Suppliers for Batteries

- XG Sciences: Battery-grade nanoplatelets
- Directa Plus: G+ materials for batteries
- NanoXplore: Large-scale GNP production
- First Graphene: PureGRAPH for energy storage

## Technical Challenges

### Dispersion

Graphene tends to agglomerate, reducing effectiveness:
- Surface functionalization helps
- Specialized mixing required
- Processing optimization critical

### Cost-Performance Balance

Current graphene costs require careful justification:
- Must demonstrate clear performance benefit
- Loading levels affect economics
- Premium applications first (EVs, power tools)

### Standardization

Battery-grade graphene needs specifications for:
- Layer number distribution
- Surface area requirements
- Impurity levels
- Dispersion characteristics

## Future Outlook

### Near-Term (2024-2027)

- Graphene-silicon anodes reach mainstream EVs
- Supercapacitors in automotive applications
- Cost reduction through scale

### Medium-Term (2027-2030)

- Li-S batteries commercialize with graphene
- Solid-state batteries include graphene interfaces
- Energy density exceeds 500 Wh/kg

### Long-Term (2030+)

- Graphene becomes standard battery material
- New chemistries enabled by graphene
- Grid-scale storage applications`
  },
  {
    slug: 'cvd-graphene',
    title: 'CVD Graphene Production',
    meta_description: 'Chemical vapor deposition process for graphene: equipment, parameters, substrates, and quality optimization.',
    content: `# CVD Graphene Production

Chemical Vapor Deposition (CVD) is the dominant method for producing large-area, high-quality graphene for electronics and other demanding applications. This guide covers the process, equipment, parameters, and quality optimization.

## CVD Process Overview

### Basic Principle

CVD graphene growth involves:
1. Heating a metal catalyst substrate (typically copper)
2. Introducing carbon-containing precursor gas
3. Decomposition of precursor on hot surface
4. Carbon atoms diffuse and form graphene lattice
5. Cooling to preserve the graphene film

### Key Process Steps

**1. Substrate Preparation**
- Clean copper foil (electropolishing or annealing)
- Remove native oxide
- Surface treatment for uniform nucleation

**2. Heating and Annealing**
- Ramp to growth temperature (950-1050°C)
- Anneal under H2 to increase grain size
- Reduce surface roughness

**3. Growth Phase**
- Introduce CH4/H2 mixture
- Control flow rates and pressure
- Monitor growth time for coverage

**4. Cooling**
- Rapid cooling to preserve graphene
- Prevent additional layer formation
- Maintain protective atmosphere

## Substrates and Catalysts

### Copper Foil

**Why Copper?**
- Low carbon solubility (~0.001 at.%)
- Self-limiting monolayer growth
- High quality single-layer achievable
- Relatively inexpensive

**Copper Preparation:**
| Method | Effect | Quality Impact |
|--------|--------|----------------|
| Electropolishing | Smooth surface | Better uniformity |
| Thermal annealing | Grain growth | Larger graphene domains |
| Chemical cleaning | Remove oxides | Fewer defects |
| Single-crystal Cu | Epitaxial growth | Highest quality |

**Typical Copper Specifications:**
- Purity: 99.8%+ (higher = better)
- Thickness: 25-50 μm
- Surface roughness: <100 nm Ra

### Nickel Substrate

**Characteristics:**
- High carbon solubility (~0.1-0.5 at.%)
- Multilayer formation common
- Faster growth rates
- Segregation-based growth

**Applications:**
- Few-layer graphene production
- Specific multilayer structures
- Higher throughput processes

### Other Substrates

| Substrate | Advantages | Challenges |
|-----------|------------|------------|
| Pt | High quality | Very expensive |
| Ir | Excellent epitaxy | Cost prohibitive |
| Ni-Cu alloy | Tunable solubility | Complex control |
| Liquid metals | Defect-free | Handling difficulty |

## Process Parameters

### Temperature

| Range | Effect | Quality |
|-------|--------|---------|
| 800-900°C | Slower growth | Smaller domains |
| 900-1000°C | Standard growth | Good quality |
| 1000-1050°C | Fast, large domains | Best quality |
| >1050°C | Cu sublimation | Not recommended |

### Pressure

**Low Pressure CVD (LPCVD):**
- 0.1-10 Torr typical
- Larger domain sizes
- More uniform coverage
- Equipment cost higher

**Atmospheric Pressure CVD (APCVD):**
- Simpler equipment
- Higher growth rates
- Smaller domains typical
- Lower cost of entry

### Gas Composition

**Methane (CH4):**
- Most common carbon source
- 0.1-5% in H2 carrier
- Lower concentration = fewer layers

**Hydrogen (H2):**
- Etching agent controls nucleation
- Carrier gas
- 10-500 sccm typical
- Critical for quality

**Other Precursors:**
| Precursor | Advantage | Disadvantage |
|-----------|-----------|--------------|
| Ethylene (C2H4) | Faster growth | More nucleation |
| Ethanol | Oxygen content | More defects |
| Benzene | Six-carbon ring | Toxicity concerns |
| Acetylene | Very fast | Hard to control |

### Growth Time

| Duration | Coverage | Domain Size |
|----------|----------|-------------|
| 5 min | Partial | Small |
| 15 min | Full monolayer | Medium |
| 30 min | Full, annealed | Large |
| 60+ min | Optimized | Very large |

## Equipment Requirements

### Basic CVD System

**Components:**
1. Quartz tube furnace
2. Temperature controller
3. Mass flow controllers
4. Vacuum pump (for LPCVD)
5. Gas delivery system
6. Safety interlocks

**Cost Range:**
- Research systems: $30k-100k
- Production systems: $500k-2M+

### Advanced Systems

**Roll-to-Roll CVD:**
- Continuous graphene production
- Moving copper foil through hot zone
- 100s of meters possible
- Major investment required

**Plasma-Enhanced CVD (PECVD):**
- Lower temperatures (400-700°C)
- Direct growth on various substrates
- Different quality characteristics
- Faster nucleation

## Transfer Methods

### PMMA-Assisted Transfer

**Standard Process:**
1. Spin-coat PMMA on graphene/Cu
2. Cure PMMA layer
3. Etch Cu in FeCl3 or ammonium persulfate
4. Rinse PMMA/graphene film
5. Transfer to target substrate
6. Remove PMMA with acetone

**Challenges:**
- PMMA residue contamination
- Wrinkles and tears
- Water trapping
- Multiple steps required

### Dry Transfer Methods

**Thermal Release Tape:**
- Faster than wet transfer
- Less contamination
- Roll-to-roll compatible
- Used by Samsung

**EVA Adhesive:**
- Lamination approach
- Industrial scalable
- Good for flexible substrates

### Direct Growth

Eliminating transfer entirely:
- Growth on dielectric substrates
- Lower quality currently
- Active research area
- Would greatly simplify integration

## Quality Metrics

### Characterization Methods

**Raman Spectroscopy:**
| Peak | Position | Meaning |
|------|----------|---------|
| G | ~1580 cm⁻¹ | sp² carbon |
| 2D | ~2700 cm⁻¹ | Layer number |
| D | ~1350 cm⁻¹ | Defects |

**Quality Indicators:**
- I₂D/IG > 2: Monolayer
- ID/IG < 0.1: Low defects
- 2D FWHM < 30 cm⁻¹: High quality

**Other Techniques:**
- Optical microscopy for coverage
- SEM for domain boundaries
- TEM for atomic structure
- Hall measurements for mobility

### Common Defects

| Defect Type | Cause | Prevention |
|-------------|-------|------------|
| Wrinkles | Thermal expansion mismatch | Controlled cooling |
| Tears | Transfer handling | Careful processing |
| Multilayer patches | Nucleation density | Lower CH4, higher H2 |
| Contamination | Dirty substrate/transfer | Clean processing |
| Small domains | Fast nucleation | Higher temp, lower CH4 |

## Industrial Production

### Major CVD Producers

| Company | Capacity | Products |
|---------|----------|----------|
| Graphenea | Research scale | Films on various substrates |
| Graphene Square | Production scale | Touch panels, displays |
| BGT Materials | Large area rolls | Electronics, thermal |
| Sony | Demonstration | 100m rolls achieved |
| Samsung | Internal use | Display applications |

### Cost Factors

**Current Pricing:**
- Research grade: $50-200/cm²
- Production grade: $1-10/cm²
- Roll products: $10-50/m²

**Cost Drivers:**
- Copper foil: 10-20% of cost
- Energy: 20-30% of cost
- Labor: 20-30% of cost
- Equipment depreciation: 20-30%

## Future Developments

### Process Improvements

- Lower temperature growth (<500°C)
- Transfer-free direct growth
- Single-crystal monolayer
- Automated quality control

### Scaling Challenges

- Maintaining quality at scale
- Transfer yield improvement
- Cost reduction to $1/m²
- Integration with electronics fabs`
  },
  {
    slug: 'graphene-oxide',
    title: 'Graphene Oxide (GO)',
    meta_description: 'Understanding graphene oxide: synthesis, properties, reduction to rGO, and applications in energy, composites, and membranes.',
    content: `# Graphene Oxide (GO)

Graphene oxide is the oxidized form of graphene, featuring oxygen-containing functional groups that make it water-dispersible and chemically versatile. GO and its reduced form (rGO) are the most commercially available graphene materials due to scalable production.

## What is Graphene Oxide?

### Structure

Graphene oxide consists of:
- sp² carbon hexagonal lattice (graphene domains)
- sp³ carbon with oxygen groups (oxidized regions)
- Oxygen functional groups: epoxy, hydroxyl, carboxyl, carbonyl

**Composition (typical):**
| Element | Atomic % | Notes |
|---------|----------|-------|
| Carbon | 60-70% | Mix of sp² and sp³ |
| Oxygen | 25-35% | Various functional groups |
| Hydrogen | 3-5% | From hydroxyl groups |

### Key Properties

| Property | GO | rGO | Pristine Graphene |
|----------|----|----|-------------------|
| Conductivity | Insulator | 10²-10⁴ S/m | 10⁶ S/m |
| Water Dispersibility | Excellent | Poor | None |
| Chemical Reactivity | High | Moderate | Low |
| Mechanical Strength | Moderate | Good | Highest |
| Transparency | Yes | Partial | Yes |

## Synthesis Methods

### Modified Hummers Method

The most common industrial process, developed from the original Hummers method (1958).

**Process Steps:**
1. Mix graphite with NaNO₃ and H₂SO₄
2. Add KMnO₄ slowly (strong oxidizer)
3. Control temperature below 20°C initially
4. Raise temperature to 35°C and stir
5. Add water carefully (exothermic!)
6. Treat with H₂O₂ to remove excess oxidizer
7. Wash extensively to remove salts/acids
8. Exfoliate via sonication or stirring

**Safety Considerations:**
- Highly exothermic reactions
- Strong acids and oxidizers
- Toxic MnO₄⁻ species
- Requires proper ventilation and PPE

### Improved Methods

**Improved Hummers (Tour Method):**
- Eliminates NaNO₃ (toxic gas byproduct)
- Uses H₃PO₄ with H₂SO₄
- Better yield and less defects
- More consistent results

**Electrochemical Oxidation:**
- Graphite electrode in electrolyte
- Applied voltage causes oxidation
- Greener process, less waste
- Lower oxidation level typical

### Industrial Production

| Producer | Capacity | Method |
|----------|----------|--------|
| The Sixth Element | 100+ t/year | Modified Hummers |
| Graphenea | Research scale | Hummers variants |
| XG Sciences | Exfoliation | Intercalation + oxidation |
| Angstron Materials | Multi-ton | Proprietary |

## Graphene Oxide Properties

### Optical Properties

- Absorbs UV light strongly
- Yellow-brown color in solution
- Photoluminescence observed
- Transparency depends on thickness

### Colloidal Behavior

GO disperses well in water due to:
- Carboxyl groups (negative charge)
- Hydrogen bonding capability
- Electrostatic repulsion

**Stability factors:**
- pH (stable above pH 4)
- Concentration (dilute more stable)
- Ionic strength (salt causes aggregation)

### Mechanical Properties

| Property | Value | Notes |
|----------|-------|-------|
| Young's Modulus | 30-250 GPa | Depends on oxidation |
| Tensile Strength | 0.1-1 GPa | Lower than pristine |
| Flexibility | High | Can be bent, folded |

## Reduction of GO (rGO)

### Why Reduce?

GO is electrically insulating. Reduction removes oxygen groups, partially restoring graphene's conductivity while maintaining processability benefits.

### Reduction Methods

**Thermal Reduction:**
| Temperature | Atmosphere | Result |
|-------------|------------|--------|
| 200°C | Air/N₂ | Partial reduction |
| 400°C | Ar/H₂ | Good reduction |
| 800°C | Ar | High reduction |
| 1000°C | Ar/H₂ | Maximum reduction |

**Chemical Reduction:**
| Reducing Agent | Effectiveness | Safety |
|----------------|--------------|--------|
| Hydrazine | Excellent | Highly toxic |
| Vitamin C (Ascorbic acid) | Good | Safe, green |
| Hydroiodic acid (HI) | Excellent | Corrosive |
| Sodium borohydride | Moderate | Flammable |
| Glucose | Moderate | Safe, green |

**Electrochemical Reduction:**
- Apply negative potential
- Controllable reduction degree
- Room temperature process
- Can pattern reduced regions

### rGO Quality

| Metric | Typical rGO | Target |
|--------|-------------|--------|
| C/O Ratio | 8-15 | >20 |
| Conductivity | 10²-10⁴ S/m | >10⁴ S/m |
| Sheet Resistance | 10³-10⁵ Ω/sq | <10³ Ω/sq |
| Defect Density | Moderate | Minimize |

## Applications

### Energy Storage

**Supercapacitor Electrodes:**
- High surface area (700-1500 m²/g for rGO)
- Good conductivity after reduction
- Easy electrode fabrication
- Cost-effective

**Battery Applications:**
- Conductive additive in cathodes
- Anode material (higher capacity than graphite)
- Flexible battery substrates
- Separator coatings

### Membranes and Filtration

**Water Purification:**
- GO membranes with precise nanochannels
- Selective ion rejection
- Desalination potential
- Heavy metal removal

**Gas Separation:**
- CO₂ selective membranes
- Size-exclusion filtration
- Humidity sensing
- Barrier coatings

### Composites

**Polymer Reinforcement:**
- Better dispersion than pristine graphene
- Functional group bonding to matrix
- Mechanical property enhancement
- Barrier properties

**Concrete Enhancement:**
- Improved compressive strength
- Reduced permeability
- Crack bridging
- Commercial products available

### Biomedical

**Drug Delivery:**
- High drug loading capacity
- pH-responsive release
- Functionalization flexibility
- Biocompatibility concerns being studied

**Biosensors:**
- Good electron transfer with enzymes
- Surface functionalization options
- Electrochemical detection
- Commercial development ongoing

### Coatings

**Anti-Corrosion:**
- Barrier to oxygen and water
- Can be applied from solution
- Needs proper reduction
- Commercial products available

**Thermal Interface:**
- rGO films for heat spreading
- Flexible TIM materials
- Electronics cooling applications

## Commercial Products

### GO/rGO Suppliers

| Company | Products | Pricing |
|---------|----------|---------|
| Graphenea | Research GO, rGO | $40-200/g |
| The Sixth Element | Industrial GO | $50-100/kg |
| Angstron Materials | Various grades | $100-500/kg |
| XG Sciences | GO, hybrid products | Varies |

### End Products

- Graphene-enhanced concrete (various)
- Anticorrosion coatings (Applied Graphene Materials)
- Thermal management films (multiple)
- Water filters (under development)

## Challenges and Solutions

### Defects from Oxidation

**Problem:** Oxidation creates holes and defects that cannot be fully repaired.

**Solutions:**
- Milder oxidation conditions
- Selective oxidation methods
- Accept limitations for appropriate applications

### Scalability

**Problem:** Batch processing limits throughput.

**Solutions:**
- Continuous oxidation reactors
- Electrochemical methods
- Process automation

### Environmental Impact

**Problem:** Chemical oxidation generates waste.

**Solutions:**
- Green reduction methods (vitamin C)
- Electrochemical production
- Waste treatment and recycling
- Alternative synthesis routes`
  },
  {
    slug: 'graphene-supercapacitors',
    title: 'Graphene Supercapacitors',
    meta_description: 'How graphene enables next-generation supercapacitors with higher energy density, faster charging, and longer cycle life.',
    content: `# Graphene Supercapacitors

Supercapacitors bridge the gap between batteries and conventional capacitors, offering fast charging, long cycle life, and high power density. Graphene's exceptional surface area and conductivity make it an ideal electrode material for next-generation supercapacitors.

## Supercapacitor Fundamentals

### How Supercapacitors Work

**Electric Double-Layer Capacitors (EDLCs):**
- Store energy through ion adsorption on electrode surface
- No chemical reactions (unlike batteries)
- Charge/discharge in seconds
- Millions of cycles possible

**Pseudocapacitors:**
- Fast surface redox reactions
- Higher energy density than EDLCs
- Some cycle life trade-off
- Often combined with EDLCs

### Comparison with Batteries

| Property | Supercapacitor | Li-ion Battery |
|----------|---------------|----------------|
| Energy Density | 5-50 Wh/kg | 100-300 Wh/kg |
| Power Density | 10,000+ W/kg | 250-1000 W/kg |
| Charge Time | Seconds-minutes | Hours |
| Cycle Life | 500k-1M+ | 500-2000 |
| Efficiency | >95% | 80-90% |
| Temperature Range | -40 to 70°C | 0 to 45°C |

## Why Graphene?

### Theoretical Advantages

**Surface Area:**
- Theoretical: 2,630 m²/g
- Practical: 500-1,500 m²/g achievable
- Higher than activated carbon (1,000-2,000 m²/g)

**Electrical Conductivity:**
- No need for conductive additives
- Lower internal resistance
- Better power delivery

**Mechanical Strength:**
- Durable electrode structures
- Flexible device capability
- Longer mechanical lifetime

### Performance Improvements

| Metric | Activated Carbon | Graphene | Improvement |
|--------|-----------------|----------|-------------|
| Capacitance | 100-200 F/g | 200-550 F/g | 2-3x |
| Energy Density | 5-8 Wh/kg | 20-100 Wh/kg | 4-12x |
| Power Density | 5-10 kW/kg | 10-100+ kW/kg | 2-10x |
| Rate Capability | Moderate | Excellent | Significant |

## Graphene Electrode Types

### 3D Graphene Networks

**Graphene Aerogels:**
- Ultra-low density (1-10 mg/cm³)
- High porosity
- Excellent ion access
- Fragile structure

**Graphene Foams:**
- Template-grown on nickel foam
- Good mechanical stability
- High conductivity
- More robust than aerogels

### Graphene Films

**Stacked Graphene:**
- High areal capacitance
- Dense packing possible
- May limit ion access
- Surface area trade-off

**Holey Graphene:**
- Holes provide ion channels
- Better electrolyte access
- Maintains conductivity
- Improved rate performance

### Graphene Composites

**Graphene + Metal Oxides:**
| Composite | Capacitance | Mechanism |
|-----------|-------------|-----------|
| Graphene-MnO₂ | 300-500 F/g | Pseudocapacitance |
| Graphene-RuO₂ | 600-1000 F/g | High pseudocapacitance |
| Graphene-NiO | 400-800 F/g | Faradaic reactions |

**Graphene + Conducting Polymers:**
- Graphene-PANI (polyaniline)
- Graphene-PPy (polypyrrole)
- Synergistic effects
- 500-1000 F/g achievable

## Commercial Products

### Skeleton Technologies

**SuperBattery Technology:**
- Curved graphene electrodes
- 4x energy density vs. competitors
- Automotive applications
- €200M+ funding raised

**Products:**
- SkelCap (industrial ultracapacitors)
- SkelMod (modules for vehicles)
- Applications: grid, automotive, industrial

### Nanotech Energy

**Super Battery:**
- Graphene-based cells
- Non-flammable
- Consumer electronics focus
- Power banks available

**Specifications:**
- Cycle life: 10,000+ cycles
- Charge time: 20 minutes to 80%
- Safety: Non-flammable electrolyte

### Other Players

| Company | Technology | Status |
|---------|------------|--------|
| Maxwell/Tesla | Graphene-enhanced | Acquired by Tesla |
| Ioxus | Ultracapacitor modules | Commercial |
| CAP-XX | Thin supercapacitors | Commercial |
| Skeleton Technologies | Curved graphene | Commercial |
| Graphene Manufacturing Group | Aluminum-ion hybrid | Development |

## Performance Metrics

### Key Specifications

**Gravimetric Capacitance:**
- Unit: F/g
- Measures mass-normalized storage
- Important for weight-sensitive applications

**Volumetric Capacitance:**
- Unit: F/cm³
- Measures volume-normalized storage
- Critical for compact devices

**Areal Capacitance:**
- Unit: F/cm²
- Per electrode area
- Important for thin devices

### State of the Art

| Metric | Best Achieved | Commercial |
|--------|--------------|------------|
| Gravimetric | 550 F/g (lab) | 100-200 F/g |
| Volumetric | 600 F/cm³ (lab) | 50-100 F/cm³ |
| Energy Density | 100 Wh/kg (lab) | 10-30 Wh/kg |
| Power Density | 200 kW/kg (lab) | 10-50 kW/kg |

## Applications

### Automotive

**Regenerative Braking:**
- Capture braking energy
- Power assist during acceleration
- Reduce battery stress
- Fuel efficiency improvement

**Start-Stop Systems:**
- Handle frequent engine restarts
- Maintain electronics during stops
- Extend battery life

### Grid Energy

**Frequency Regulation:**
- Fast response to grid fluctuations
- Millions of cycles required
- High power capability
- Lower energy density acceptable

**Power Quality:**
- Voltage sag mitigation
- Bridging power for UPS
- Peak shaving

### Consumer Electronics

**Fast Charging:**
- Smartphone emergency charge
- Wearable devices
- IoT sensors
- Electric tools

### Industrial

**Heavy Equipment:**
- Hybrid excavators
- Port cranes
- Mining equipment
- Rail systems

## Challenges

### Energy Density Gap

**Problem:** Still lower than batteries for many applications.

**Solutions:**
- Hybrid battery-supercapacitor systems
- Pseudocapacitive materials
- Optimized electrode structures
- Accept role as power buffer

### Cost

**Current Status:**
- Graphene supercapacitors still premium priced
- $0.01-0.10/F vs $0.001/F for commodity

**Path to Reduction:**
- Scale up production
- Process optimization
- Material cost reduction
- Increasing competition

### Voltage Window

**Limitation:** Aqueous electrolytes limited to ~1V.

**Solutions:**
- Organic electrolytes (2.5-3V)
- Ionic liquids (4V+)
- Asymmetric designs
- Series cell stacking

## Future Outlook

### Technology Trends

- Higher energy density approaching batteries
- Flexible and stretchable devices
- Integration with energy harvesting
- Microsupercapacitors for IoT

### Market Growth

| Year | Market Size | CAGR |
|------|-------------|------|
| 2023 | $600M | - |
| 2028 | $2.5B | 33% |
| 2033 | $8B+ | 25% |

### Key Developments

- Graphene-battery hybrids
- Solid-state supercapacitors
- Printed/flexible devices
- Integration in EVs and grid storage`
  },
  {
    slug: 'graphene-sensors',
    title: 'Graphene Sensors',
    meta_description: 'Graphene-based sensors for chemical, biological, strain, and environmental detection with exceptional sensitivity.',
    content: `# Graphene Sensors

Graphene's unique electronic properties make it exceptionally sensitive to environmental changes, enabling a new generation of sensors with unprecedented performance. This guide covers the major types of graphene sensors and their applications.

## Why Graphene for Sensors?

### Fundamental Advantages

**Surface Sensitivity:**
- Every atom is a surface atom
- Maximum interaction with analytes
- Single-molecule detection possible

**Electronic Properties:**
- High carrier mobility
- Ambipolar field effect
- Small bandgap modifications detectable
- Low electronic noise

**Mechanical Properties:**
- Flexible and stretchable
- High gauge factor
- Withstands deformation
- Wearable applications

## Biosensors

### Field-Effect Transistor (FET) Biosensors

**Operating Principle:**
- Graphene channel between source and drain
- Biomolecules binding to surface change conductance
- Real-time, label-free detection
- Extremely sensitive

**Applications:**
| Target | Detection Limit | Application |
|--------|-----------------|-------------|
| DNA | femtomolar | Genetic testing |
| Proteins | pg/mL | Disease markers |
| Bacteria | 10 CFU/mL | Food safety |
| Viruses | Single particle | Diagnostics |

### Electrochemical Biosensors

**Graphene Advantages:**
- Fast electron transfer
- Large electroactive surface
- Easy functionalization
- Biocompatibility

**Commercial Development:**
- Glucose monitors (GraphWear)
- Cardiac markers (various)
- Cancer biomarkers (research)

### DNA Sensors

**Detection Methods:**
- Hybridization-based
- Aptamer sensors
- CRISPR-graphene combinations
- Direct electrical readout

**Specifications:**
- Single-base mismatch detection
- Multiplexed arrays possible
- Point-of-care potential
- Rapid results (<1 hour)

## Gas Sensors

### Operating Principles

**Chemiresistive Sensing:**
- Gas molecules adsorb on graphene
- Charge transfer changes resistance
- Simple two-terminal measurement
- Low power operation

**Sensing Mechanism:**
| Gas Type | Effect | Detection |
|----------|--------|-----------|
| Oxidizing (NO₂, O₃) | Hole doping | Resistance decreases |
| Reducing (NH₃, H₂) | Electron doping | Resistance increases |
| Polar molecules | Dipole interaction | Resistance change |

### Performance

**Detection Limits:**
| Gas | Graphene Sensor | Conventional |
|-----|-----------------|--------------|
| NO₂ | 1 ppb | 10-100 ppb |
| NH₃ | 1 ppm | 10-50 ppm |
| H₂ | 100 ppm | 1000 ppm |
| CO | 10 ppm | 50-100 ppm |

### Selectivity Enhancement

**Strategies:**
- Metal nanoparticle decoration
- Functionalization
- Sensor arrays (electronic nose)
- Operating temperature variation
- Machine learning analysis

### Applications

- Air quality monitoring
- Industrial safety
- Environmental sensing
- Medical breath analysis
- Food freshness

## Strain and Pressure Sensors

### Piezoresistive Effect

Graphene's resistance changes with mechanical deformation:
- High gauge factor (up to 300 in some configurations)
- Large strain range (up to 30%)
- Fast response
- Highly reversible

### Strain Sensor Configurations

**Woven/Textile Sensors:**
- Graphene-coated fibers
- Wearable integration
- Body motion tracking
- Sports applications

**Film Sensors:**
- CVD graphene on flexible substrates
- High sensitivity
- Touchscreens
- Robotics

**3D Network Sensors:**
- Graphene foams/aerogels
- Large deformation range
- Pressure sensing
- Compressible electronics

### Performance Comparison

| Configuration | Gauge Factor | Strain Range |
|--------------|--------------|--------------|
| Metal foil | 2-5 | 1-2% |
| Silicon | 100-200 | 0.1% |
| Graphene film | 10-150 | 5-10% |
| Graphene foam | 200-300 | 30%+ |

### Applications

**Wearables:**
- Health monitoring
- Motion capture
- Smart clothing
- Prosthetics feedback

**Structural Monitoring:**
- Bridge health
- Building integrity
- Composite damage detection
- Aircraft monitoring

## Temperature Sensors

### Graphene Thermistors

- Temperature coefficient of resistance
- High sensitivity
- Fast response time
- Wide temperature range

### Performance

| Property | Value |
|----------|-------|
| TCR | -0.1 to -1.0 %/°C |
| Response Time | <10 ms |
| Range | -200 to 600°C |
| Resolution | 0.1°C achievable |

### Applications

- Thermal imaging
- Temperature mapping
- Industrial monitoring
- Medical thermometry

## Optical Sensors

### Photodetectors

**Graphene Advantages:**
- Broad spectral response (UV to THz)
- Fast response (<50 ps)
- High responsivity with enhancements
- Flexible substrate compatible

**Performance Enhancement:**
| Strategy | Responsivity | Speed |
|----------|--------------|-------|
| Pure graphene | 1-10 mA/W | >40 GHz |
| Quantum dots | 10⁷ A/W | kHz |
| Plasmonic | 10³ A/W | GHz |
| Waveguide | 10² A/W | >100 GHz |

### Applications

- Imaging systems
- Fiber optic communications
- Spectroscopy
- LiDAR systems

## Magnetic Sensors

### Hall Effect Sensors

**Graphene Advantages:**
- High mobility = high Hall coefficient
- Linear response
- Wide dynamic range
- Low noise

**Paragraf Commercial Sensors:**
- Wafer-scale CVD graphene
- 0.1-7 Tesla range
- Cryogenic to high temperature
- Quantum computing applications

### Specifications

| Property | Graphene | InSb |
|----------|----------|------|
| Sensitivity | 2000+ V/AT | 100 V/AT |
| Temp Range | 2-400 K | 77-400 K |
| Linearity | Excellent | Good |
| Cost | Moderate | Moderate |

## Commercial Landscape

### Available Products

| Company | Sensor Type | Status |
|---------|-------------|--------|
| Paragraf | Magnetic | Commercial |
| GraphWear | Glucose | Development |
| Emberion | Infrared imaging | Commercial |
| Graphene Flagship spin-offs | Various | Development |

### Market Projections

**Graphene Sensor Market:**
| Year | Value | Growth |
|------|-------|--------|
| 2023 | $50M | - |
| 2028 | $300M | 40% CAGR |
| 2033 | $1B+ | 25% CAGR |

## Challenges

### Manufacturing

- Consistent graphene quality required
- Integration with electronics
- Packaging and protection
- Cost at scale

### Selectivity

- Cross-sensitivity to multiple analytes
- Environmental interference
- Requires signal processing
- Array approaches help

### Stability

- Drift over time
- Humidity effects
- Aging of functionalization
- Calibration requirements

## Future Directions

### Emerging Applications

- Implantable biosensors
- Neural interfaces
- Environmental IoT networks
- Smart agriculture
- Industrial 4.0

### Technology Trends

- Printed sensor arrays
- Integration with CMOS
- AI-enhanced analysis
- Wireless power and data
- Single-molecule detection`
  },
  {
    slug: 'graphene-composites',
    title: 'Graphene Composites',
    meta_description: 'Graphene-reinforced composites for structural, thermal, and functional applications in automotive, aerospace, and construction.',
    content: `# Graphene Composites

Graphene composites leverage graphene's exceptional mechanical, thermal, and electrical properties to enhance matrix materials. This guide covers polymer, metal, ceramic, and concrete composites reinforced with graphene.

## Fundamentals

### Why Graphene Reinforcement?

| Property | Graphene Value | Benefit |
|----------|---------------|---------|
| Tensile Strength | 130 GPa | Mechanical reinforcement |
| Young's Modulus | 1 TPa | Stiffness improvement |
| Thermal Conductivity | 5000 W/mK | Heat dissipation |
| Electrical Conductivity | 10⁶ S/m | Conductivity at low loading |
| Aspect Ratio | >1000 | Efficient reinforcement |

### Key Challenges

**Dispersion:**
- Graphene tends to agglomerate
- Processing must break up stacks
- Functionalization helps
- Quality control critical

**Interface:**
- Load transfer requires good bonding
- Surface treatment options
- Functionalization strategies
- Matrix compatibility

## Polymer Composites

### Thermoset Composites

**Epoxy-Graphene:**
| Property | Neat Epoxy | +0.5% Graphene | Improvement |
|----------|------------|----------------|-------------|
| Tensile Strength | 75 MPa | 95 MPa | 27% |
| Young's Modulus | 3.1 GPa | 4.2 GPa | 35% |
| Thermal Conductivity | 0.2 W/mK | 0.8 W/mK | 4x |
| Fracture Toughness | 0.8 MPa·m^½ | 1.2 MPa·m^½ | 50% |

**Processing Methods:**
1. Direct mixing (shear/sonication)
2. Solution blending
3. In-situ polymerization
4. Resin infusion with graphene pre-dispersed

**Applications:**
- Wind turbine blades
- Automotive body panels
- Sporting goods
- Aerospace structures

### Thermoplastic Composites

**Graphene-Enhanced Polymers:**
| Polymer | Improvement | Application |
|---------|-------------|-------------|
| HDPE | 30% tensile | Packaging, pipes |
| PP | 40% modulus | Automotive |
| PET | 25% strength | Bottles, fibers |
| Nylon | 50% modulus | Engineering parts |
| PEEK | 35% properties | Aerospace, medical |

**Processing:**
- Melt compounding (extruder)
- Master batch dilution
- Solution mixing
- In-situ polymerization

### Rubber Composites

**Graphene in Rubber:**
- Tire reinforcement
- Improved wear resistance
- Lower rolling resistance
- Better wet grip

**Performance:**
| Property | Standard | +1% Graphene |
|----------|----------|--------------|
| Tensile Strength | 20 MPa | 28 MPa |
| Elongation | 500% | 480% |
| Abrasion Resistance | Baseline | +30% |
| Rolling Resistance | Baseline | -15% |

**Commercial Example:**
- Vittoria tires (cycling)
- Continental research
- Pirelli development

## Metal Matrix Composites

### Aluminum-Graphene

**Benefits:**
- Weight reduction
- Strength increase
- Thermal management
- Wear resistance

**Processing Challenges:**
- Graphene degradation at high temperature
- Wetting and dispersion
- Interface reactions
- Carbide formation control

**Methods:**
| Method | Advantage | Challenge |
|--------|-----------|-----------|
| Powder metallurgy | Good dispersion | Porosity |
| Stir casting | Scalable | Segregation |
| Friction stir | No melting | Limited geometry |
| SPS | Fast, dense | Equipment cost |

### Copper-Graphene

**Applications:**
- Thermal management
- Electrical contacts
- Heat spreaders
- Electronics interconnects

**Performance:**
| Property | Pure Cu | Cu-Graphene |
|----------|---------|-------------|
| Thermal Cond. | 400 W/mK | 500+ W/mK |
| Electrical Cond. | 100% IACS | 95-105% IACS |
| Hardness | 40 HV | 80+ HV |

### Nickel and Other Metals

- Nickel-graphene for wear resistance
- Titanium-graphene for biomedical
- Steel-graphene research ongoing

## Ceramic Composites

### Graphene-Ceramic Benefits

- Improved fracture toughness
- Electrical conductivity addition
- Thermal shock resistance
- Machinability improvement

### Common Systems

| Ceramic | Graphene Effect |
|---------|-----------------|
| Al₂O₃ | 3x toughness increase |
| Si₃N₄ | 50% strength increase |
| SiC | Electrical conductivity |
| ZrO₂ | Improved thermal shock |

### Processing

**Challenges:**
- Graphene oxidation at sintering temperature
- Maintaining dispersion
- Achieving density
- Controlling reactions

**Methods:**
- Spark plasma sintering (preferred)
- Hot pressing
- Slip casting
- Gel casting

## Concrete Composites

### Graphene in Concrete

**Benefits:**
- Increased compressive strength
- Improved flexural strength
- Reduced permeability
- Crack resistance

**Typical Results:**
| Property | Standard | +0.05% Graphene |
|----------|----------|-----------------|
| Compressive Strength | 40 MPa | 52 MPa (+30%) |
| Flexural Strength | 5 MPa | 7 MPa (+40%) |
| Water Permeability | Baseline | -50% |
| Cement Usage | Baseline | Can reduce 25% |

### Commercial Applications

**First Graphene + Geofabrics:**
- Reinforced geotextiles
- Infrastructure applications
- Australia deployment

**Concretene (UK):**
- Graphene-enhanced concrete
- Residential construction
- Infrastructure projects

**Garmor (USA):**
- GO-enhanced concrete
- DOT applications
- Commercial buildings

### Environmental Benefits

**Cement Reduction:**
- Same strength with less cement
- Reduced CO₂ emissions
- Lower cost potential
- Sustainability improvement

## Coating Composites

### Anti-Corrosion Coatings

**Mechanism:**
- Graphene acts as barrier
- Blocks water and oxygen
- Improves adhesion
- Extends coating life

**Performance:**
| Coating Type | Without Graphene | With Graphene |
|--------------|-----------------|---------------|
| Epoxy primer | 1000h salt spray | 2000h+ |
| Polyurethane | 500h salt spray | 1500h+ |
| Zinc-rich | Good | Excellent |

### Thermal Interface Materials

**Graphene TIMs:**
- Heat spreaders for electronics
- LED thermal management
- Power electronics
- EV battery cooling

**Thermal Conductivity:**
- Polymer TIM: 1-5 W/mK
- Graphene-enhanced: 10-50 W/mK
- Graphene films: 1000+ W/mK

## Commercial Landscape

### Major Players

| Company | Focus | Status |
|---------|-------|--------|
| Directa Plus | Textiles, environmental | Commercial |
| Applied Graphene Materials | Coatings, composites | Commercial |
| First Graphene | Concrete, polymers | Commercial |
| NanoXplore | Automotive, industrial | Commercial |
| Haydale | Functionalized composites | Commercial |

### Market Size

| Segment | 2023 | 2030 | CAGR |
|---------|------|------|------|
| Polymer composites | $50M | $400M | 35% |
| Coatings | $30M | $200M | 30% |
| Concrete | $10M | $100M | 40% |
| Metal composites | $20M | $150M | 35% |

## Challenges and Solutions

### Dispersion

**Problem:** Agglomeration reduces effectiveness

**Solutions:**
- Functionalization
- High-shear mixing
- Sonication
- Surface treatment

### Cost-Benefit

**Problem:** Graphene cost vs. property improvement

**Solutions:**
- Low loading levels (0.1-1%)
- Target high-value applications
- Process optimization
- Volume pricing

### Quality Control

**Problem:** Inconsistent graphene quality

**Solutions:**
- Supplier qualification
- Incoming inspection
- Process monitoring
- Standards adoption`
  }
];

async function expandWikiTopics() {
  console.log('Adding topic-focused wiki pages...\n');

  let added = 0;
  let errors = 0;

  for (const page of topicWikiPages) {
    try {
      const { error } = await db
        .from('wiki_pages')
        .upsert({
          slug: page.slug,
          title: page.title,
          meta_description: page.meta_description,
          content: page.content,
          status: 'published',
          updated_at: new Date().toISOString()
        }, { onConflict: 'slug' });

      if (error) {
        console.error(`Error adding ${page.slug}:`, error.message);
        errors++;
      } else {
        console.log(`✓ Added: ${page.title} (${page.content.length.toLocaleString()} chars)`);
        added++;
      }
    } catch (err) {
      console.error(`Error adding ${page.slug}:`, err);
      errors++;
    }
  }

  console.log(`\n=== Summary ===`);
  console.log(`Added: ${added}`);
  console.log(`Errors: ${errors}`);
  console.log(`Total topic wiki pages: ${topicWikiPages.length}`);
}

expandWikiTopics();
