import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const db = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY || process.env.SUPABASE_ANON_KEY!
);

const wikiPages = [
  {
    slug: 'what-is-graphene',
    title: 'What is Graphene?',
    meta_description: 'Learn what graphene is, its atomic structure, discovery history, and why this single-atom-thick carbon material is revolutionizing technology.',
    content: `# What is Graphene?

Graphene is a single layer of carbon atoms arranged in a two-dimensional hexagonal honeycomb lattice. At just one atom thick (approximately 0.335 nanometers), it is the thinnest material known to exist, yet possesses extraordinary mechanical, electrical, thermal, and optical properties that have made it one of the most studied materials of the 21st century.

## Atomic Structure

Each carbon atom in graphene is bonded to three neighboring carbon atoms through strong sp2 covalent bonds, forming a planar hexagonal pattern. This structure creates:

- **Bond Length**: 0.142 nm between adjacent carbon atoms
- **Bond Angle**: 120 degrees, forming perfect hexagons
- **Layer Thickness**: 0.335 nm (one carbon atom thick)
- **Lattice Constant**: 0.246 nm

The remaining electron in each carbon atom's outer shell forms a delocalized pi-bond network above and below the plane, which gives graphene its exceptional electrical conductivity.

## Discovery and History

### Early Research (1859-2004)

- **1859**: Benjamin Brodie observed highly lamellar structure of thermally reduced graphite oxide
- **1947**: Philip R. Wallace first described the electronic band structure of graphite, including single layers
- **1962**: Hanns-Peter Boehm published first TEM images of few-layer graphite and coined the term "graphene"
- **1970s-1990s**: Various attempts to isolate graphene, including epitaxial growth on metal surfaces

### The 2004 Breakthrough

In October 2004, Andre Geim and Konstantin Novoselov at the University of Manchester successfully isolated single-layer graphene using a remarkably simple method: mechanical exfoliation with adhesive tape (the "Scotch tape method"). They demonstrated that the isolated flakes were electrically stable and exhibited unique quantum properties.

### Nobel Prize Recognition

Geim and Novoselov were awarded the 2010 Nobel Prize in Physics "for groundbreaking experiments regarding the two-dimensional material graphene." The Nobel Committee noted that graphene's properties were so remarkable that they belonged "in the realm of science fiction."

## Relationship to Other Carbon Allotropes

Graphene is the fundamental building block of other carbon allotropes:

| Allotrope | Structure |
|-----------|-----------|
| **Graphite** | Multiple graphene layers stacked with 0.335 nm spacing |
| **Carbon Nanotubes** | Graphene rolled into cylindrical tubes |
| **Fullerenes (C60)** | Graphene wrapped into spherical shapes |
| **Diamond** | Different bonding (sp3), not graphene-based |

## Production Methods

### Laboratory Scale

- **Mechanical Exfoliation**: Scotch tape method, produces highest quality but low yield
- **Liquid Phase Exfoliation**: Sonication in solvents, scalable but variable quality

### Industrial Scale

- **Chemical Vapor Deposition (CVD)**: Growing graphene on metal catalysts (copper, nickel) from hydrocarbon gases at high temperature. Currently the leading method for large-area, high-quality graphene.
- **Epitaxial Growth**: Thermal decomposition of silicon carbide (SiC) at ~1300 C
- **Reduction of Graphene Oxide**: Chemical or thermal reduction of GO, produces reduced graphene oxide (rGO)

## Why Graphene Matters

Graphene combines properties that were previously thought to be mutually exclusive:

1. **Strongest material ever tested** while being extremely lightweight
2. **Best electrical conductor** while being atomically thin and flexible
3. **Highest thermal conductivity** while being nearly transparent
4. **Impermeable to gases** while allowing proton transport

These unique combinations enable applications that no other single material can achieve, from flexible electronics to advanced filtration membranes to next-generation batteries.

## Current State of the Industry

As of 2024, the global graphene market is valued at approximately $300 million annually, with projections to reach $1.5 billion by 2030. Over 300 companies worldwide are actively commercializing graphene-based products, with major investments from automotive, electronics, and energy sectors.`
  },
  {
    slug: 'properties',
    title: 'Graphene Properties',
    meta_description: 'Comprehensive guide to graphene properties: electrical, mechanical, thermal, optical, and chemical characteristics with scientific specifications.',
    content: `# Graphene Properties

Graphene's two-dimensional honeycomb structure of sp2-bonded carbon atoms creates an unprecedented combination of physical and chemical properties. This page provides detailed specifications for each category.

## Electrical Properties

Graphene is a zero-bandgap semiconductor (semimetal) with exceptional charge carrier properties.

### Key Specifications

| Property | Value | Comparison |
|----------|-------|------------|
| Electron Mobility | 200,000 cm2/V-s (suspended) | 140x silicon |
| Carrier Density | Up to 1013 cm-2 | Tunable via gating |
| Resistivity | ~10-6 ohm-cm | Lower than silver |
| Current Density | >108 A/cm2 | 1000x copper |

### Unique Characteristics

- **Ballistic Transport**: Electrons travel without scattering at room temperature over distances exceeding 1 micrometer
- **Ambipolar Field Effect**: Both electrons and holes can be induced by gate voltage
- **Quantum Hall Effect**: Observable at room temperature (normally requires near-absolute-zero temperatures)
- **Dirac Fermions**: Charge carriers behave as massless relativistic particles, traveling at ~1/300 the speed of light

### Bandgap Engineering

Pristine graphene has zero bandgap, limiting its use in digital electronics. Bandgap can be opened through:
- Quantum confinement in nanoribbons (<10 nm width)
- Chemical functionalization
- Bilayer graphene with perpendicular electric field
- Substrate interactions

## Mechanical Properties

Graphene is the strongest material ever measured, combining extreme strength with flexibility.

### Key Specifications

| Property | Value | Comparison |
|----------|-------|------------|
| Young's Modulus | 1.0 TPa | Stiffest known material |
| Tensile Strength | 130 GPa | 200x stronger than steel |
| Breaking Strength | 42 N/m | Intrinsic strength |
| Strain at Failure | ~25% | Highly flexible |
| Bending Rigidity | 1.2 eV | Extremely flexible |
| Density | 0.77 mg/m2 | Lightest 2D material |

### Practical Implications

- A single graphene sheet could support the weight of a 4 kg cat, but would weigh only as much as one of its whiskers
- A hypothetical 1 m2 graphene hammock weighing 0.77 mg could hold a 4 kg load
- Despite extreme stiffness, graphene can be bent, folded, and rolled without breaking

### Defect Sensitivity

- Single vacancy defects reduce strength by ~15%
- Grain boundaries in CVD graphene reduce strength to ~35 GPa
- Stone-Wales defects have minimal impact on mechanical properties

## Thermal Properties

Graphene has the highest thermal conductivity of any known material.

### Key Specifications

| Property | Value | Comparison |
|----------|-------|------------|
| Thermal Conductivity | 3,000-5,000 W/m-K (suspended) | 10x copper |
| Thermal Conductivity | 600 W/m-K (on substrate) | Still excellent |
| Specific Heat | 0.7 J/g-K at 300K | Similar to graphite |
| Thermal Expansion | -7 x 10-6 K-1 | Negative (contracts when heated) |

### Temperature Dependence

- Peak thermal conductivity occurs near room temperature
- Decreases at higher temperatures due to phonon-phonon scattering
- Suspended graphene: k proportional to T-1.3 above 300K
- Supported graphene: substrate phonon coupling reduces conductivity

### Thermal Interface Resistance

- Graphene-substrate interface: 4-8 x 10-8 m2K/W
- Critical consideration for thermal management applications

## Optical Properties

Despite being one atom thick, graphene has measurable optical absorption.

### Key Specifications

| Property | Value | Notes |
|----------|-------|-------|
| Optical Absorption | 2.3% per layer | Defined by fine structure constant |
| Transmittance | 97.7% | Visible spectrum |
| Opacity | piaα = 2.3% | Where α is fine structure constant |
| Reflectance | <0.1% | Negligible |

### Unique Optical Characteristics

- **Universal Optical Conductance**: Absorption of exactly piaα per layer is a fundamental constant
- **Saturable Absorption**: At high light intensities, graphene becomes transparent (useful for ultrafast lasers)
- **Broadband Absorption**: Nearly constant across visible and near-infrared spectrum
- **Plasmonics**: Supports tunable surface plasmons in infrared and terahertz ranges

## Chemical Properties

Graphene's surface chemistry enables functionalization and sensing applications.

### Reactivity

- **Pristine Graphene**: Chemically inert under normal conditions
- **Edge Sites**: More reactive than basal plane
- **Defect Sites**: Dramatically increased reactivity
- **Oxidation**: Begins at ~450 C in air

### Functionalization Routes

| Type | Method | Result |
|------|--------|--------|
| Covalent | Diazonium chemistry | sp3 defects, opens bandgap |
| Covalent | Fluorination | Fluorographene (insulator) |
| Non-covalent | Pi-stacking | Preserves electronic properties |
| Oxidation | Hummers method | Graphene oxide (GO) |

### Gas Impermeability

- Impermeable to all gases including helium
- Single-atom vacancies can selectively pass protons
- Enables ultra-thin barrier and membrane applications

## Comparison with Other Materials

| Property | Graphene | Silicon | Copper | Steel |
|----------|----------|---------|--------|-------|
| Electron Mobility (cm2/V-s) | 200,000 | 1,400 | - | - |
| Thermal Conductivity (W/m-K) | 5,000 | 150 | 400 | 50 |
| Tensile Strength (GPa) | 130 | 7 | 0.2 | 0.5 |
| Density (g/cm3) | 2.3* | 2.3 | 8.9 | 7.8 |

*Graphene areal density: 0.77 mg/m2`
  },
  {
    slug: 'applications',
    title: 'Graphene Applications',
    meta_description: 'Current and emerging graphene applications across energy, electronics, composites, medical, filtration, and sensor industries with real-world examples.',
    content: `# Graphene Applications

Graphene's unique combination of properties enables applications across nearly every industry. This page covers current commercial products, emerging applications, and future possibilities.

## Energy Storage

### Lithium-Ion Batteries

Graphene enhances battery performance in multiple roles:

**Anode Materials**
- Silicon-graphene composites: 3-5x higher capacity than graphite anodes
- Prevents silicon pulverization during charge/discharge cycles
- Commercial: Real Graphene power banks (3,000+ mAh capacity)

**Conductive Additives**
- Replaces carbon black in cathodes and anodes
- 0.5-2% graphene loading improves rate capability
- Commercial: Huawei Mate 20 X (graphene film for heat dissipation)

**Current Collectors**
- Graphene-coated aluminum foils reduce interface resistance
- Improves cycle life and fast-charging capability

### Supercapacitors

- Theoretical specific capacitance: 550 F/g (approaching activated carbon limits)
- Practical devices: 100-200 F/g with high power density
- Skeleton Technologies: Graphene-enhanced ultracapacitors for automotive
- ZapGo: Graphene supercapacitor power tools

### Emerging: Graphene-Aluminum Batteries

- 3x faster charging than lithium-ion
- Non-flammable electrolyte
- GMG (Graphene Manufacturing Group) announced coin cell production in 2024

## Electronics and Semiconductors

### Current Products

**Thermal Management**
- Graphene heat spreaders in smartphones (Huawei, Samsung)
- LED thermal interface materials
- Data center cooling solutions

**Conductive Inks**
- Printed electronics and RFID antennas
- Flexible circuits on paper and plastic
- Commercial: Haydale, Applied Graphene Materials

**Touchscreens and Displays**
- Graphene transparent conductors as ITO alternative
- Flexible OLED displays in development
- Samsung demonstrated graphene-based flexible displays (2019)

### Emerging Applications

**High-Frequency Electronics**
- Graphene transistors operating at 427 GHz demonstrated
- Ideal for millimeter-wave communications (5G/6G)
- IBM, Samsung, and TSMC have active research programs

**Photonics**
- Ultrafast photodetectors (bandwidth >500 GHz)
- Mode-locked lasers using graphene saturable absorbers
- Optical modulators for data centers

**Neuromorphic Computing**
- Graphene-based memristors for brain-inspired computing
- Low power consumption for edge AI applications

## Composites and Materials

### Sports Equipment (Commercial)

- **HEAD**: Graphene tennis rackets (Djokovic, Sharapova)
- **Vittoria**: Graphene bicycle tires
- **Catlike**: Graphene cycling helmets
- **Dassi**: Graphene-enhanced carbon fiber bicycles

### Automotive and Aerospace

**Current Applications**
- Ford: Graphene-reinforced foam in F-150 and Mustang (sound dampening)
- Briggs & Stratton: Graphene engine covers (improved durability)
- Airbus: Evaluating graphene for lightning strike protection

**Performance Improvements**
- 10-20% weight reduction in structural composites
- 50% improvement in fracture toughness
- Enhanced fatigue resistance

### Coatings and Paints

- **Directa Plus**: Graphene-enhanced textile coatings
- **Applied Graphene Materials**: Anticorrosion coatings
- **Graphene Composites**: Marine antifouling coatings

Typical improvements:
- Corrosion resistance: 50-100x longer protection
- Scratch resistance: 2-3x improvement
- Barrier properties: 1000x reduction in permeability

## Medical and Biotechnology

### Biosensors

**Glucose Monitoring**
- Graphene field-effect transistors for continuous monitoring
- 10-100x higher sensitivity than conventional sensors
- Grapheal (France): Commercializing graphene biosensors

**Disease Detection**
- COVID-19 rapid tests using graphene FETs (Paragraf, 2021)
- Cancer biomarker detection with femtomolar sensitivity
- Pathogen detection in <5 minutes

### Drug Delivery

- Graphene oxide nanocarriers for targeted drug delivery
- pH-responsive release mechanisms
- Improved bioavailability of hydrophobic drugs
- Active clinical research, no commercial products yet

### Tissue Engineering

- Graphene scaffolds for bone regeneration
- Neural interfaces and brain-machine interfaces
- Antibacterial wound dressings
- Inteliflex: Graphene-based medical devices

### Imaging and Diagnostics

- MRI contrast agents using graphene oxide
- Photothermal therapy for cancer treatment
- Photoacoustic imaging agents

## Water and Environmental

### Desalination

**Graphene Oxide Membranes**
- Precisely controlled nanochannels for ion sieving
- 10x higher flux than conventional reverse osmosis
- Lockheed Martin Perforene technology
- G2O Water Technologies: Commercial GO membranes

**Energy Requirements**
- Potential to reduce desalination energy by 20-30%
- Critical for addressing global water scarcity

### Water Purification

- Heavy metal removal (>99% efficiency for Pb, Cd, Cr)
- Organic pollutant adsorption
- Antibacterial properties prevent biofouling
- Graftech: Commercial water treatment systems

### Oil Spill Cleanup

- Graphene sponges absorb 90x their weight in oil
- Reusable after squeezing out oil
- Directa Plus: Grafysorber for marine applications

## Sensors

### Gas Sensors

- Single-molecule detection sensitivity
- Room temperature operation
- Applications: Industrial safety, air quality, medical diagnostics
- Paragraf: Commercial graphene Hall effect sensors

### Strain and Pressure Sensors

- Gauge factor up to 1000 (vs. 2 for metal foil)
- Wearable health monitoring
- Structural health monitoring in bridges and buildings

### Electromagnetic Sensors

- Terahertz detectors for security screening
- Infrared sensors for thermal imaging
- Magnetic field sensors (Hall effect)

## Barriers and Packaging

### Food Packaging

- Oxygen barrier: 1000x better than polymers alone
- Extended shelf life for perishables
- NanoXplore: Commercial graphene for packaging

### Corrosion Protection

- Atomically thin barrier prevents oxidation
- Graphene-coated copper: 100x longer lifetime
- Potential replacement for chromate coatings

## Market Status Summary

| Application Area | Commercial Status | Key Players |
|-----------------|-------------------|-------------|
| Sports Equipment | Production | HEAD, Vittoria |
| Thermal Management | Production | Huawei, Samsung |
| Coatings | Early Commercial | Applied Graphene Materials |
| Batteries | Pilot Production | Real Graphene, GAC |
| Composites | Early Commercial | Directa Plus, NanoXplore |
| Sensors | Early Commercial | Paragraf |
| Water Treatment | Pilot Production | G2O Water, Lockheed Martin |
| Electronics | R&D/Prototype | Samsung, IBM |
| Medical | Clinical Trials | Various |`
  },
  {
    slug: 'glossary',
    title: 'Graphene Glossary',
    meta_description: 'Comprehensive A-Z glossary of graphene terminology, production methods, materials, and scientific concepts.',
    content: `# Graphene Glossary

A comprehensive reference of terms, concepts, and definitions related to graphene science and technology.

---

## A

**Allotrope**
Different structural forms of the same element. Carbon allotropes include graphene, graphite, diamond, fullerenes, and carbon nanotubes.

**Ambipolar Transport**
The ability of graphene to conduct both electrons (n-type) and holes (p-type) depending on the applied gate voltage.

**Armchair Edge**
One of two primary edge configurations in graphene, where the edge atoms form a pattern resembling an armchair. Armchair-edged nanoribbons can be metallic or semiconducting depending on width.

---

## B

**Ballistic Transport**
Electron transport without scattering. In graphene, electrons can travel ballistically for distances exceeding 1 micrometer at room temperature.

**Bandgap**
The energy difference between the valence and conduction bands. Pristine graphene has zero bandgap, making it a semimetal.

**Bilayer Graphene**
Two layers of graphene stacked together. Can be AA-stacked (atoms directly aligned) or AB-stacked (Bernal stacking, more common). Applying an electric field perpendicular to AB-stacked bilayer graphene opens a tunable bandgap.

**Bernal Stacking**
The most common stacking arrangement in graphite and bilayer graphene, where atoms in one layer sit above the center of hexagons in the adjacent layer. Also called AB stacking.

---

## C

**Carbon Nanotube (CNT)**
A cylindrical nanostructure formed by rolling up a graphene sheet. Can be single-walled (SWCNT) or multi-walled (MWCNT). Properties depend on the "chiral vector" describing how the sheet is rolled.

**Carrier Mobility**
A measure of how quickly charge carriers (electrons or holes) move through a material under an electric field. Graphene's carrier mobility exceeds 200,000 cm2/V-s in suspended samples.

**Chemical Vapor Deposition (CVD)**
The primary industrial method for producing large-area graphene. Hydrocarbon gases (typically methane) decompose on a heated metal catalyst (copper or nickel) at 800-1050 C, depositing graphene on the surface.

**Chiral Vector**
In carbon nanotubes, the vector that describes how a graphene sheet is rolled up. Determines whether the nanotube is metallic or semiconducting.

---

## D

**Dirac Cone**
The unique linear energy-momentum relationship near the K and K' points in graphene's band structure. Creates a cone-shaped dispersion where electrons behave as massless particles.

**Dirac Fermions**
Charge carriers in graphene that behave as massless relativistic particles due to the linear dispersion relation. They travel at approximately 1/300 the speed of light.

**Dirac Point**
The point in graphene's band structure where the conduction and valence bands meet, located at the K and K' points of the Brillouin zone. At this point, the density of states is zero.

**Doping**
Modifying graphene's electronic properties by adding atoms or molecules that donate or accept electrons. Can be substitutional (replacing carbon atoms) or adsorptive (molecules on surface).

---

## E

**Epitaxial Graphene**
Graphene grown on a crystalline substrate, typically silicon carbide (SiC). Produced by heating SiC to ~1300 C in vacuum or argon, causing silicon to sublimate and carbon to rearrange into graphene.

**Exfoliation**
The process of separating graphene layers from bulk graphite. Can be mechanical (tape method), liquid-phase (sonication in solvents), or electrochemical.

---

## F

**Fermi Level**
The highest energy level occupied by electrons at absolute zero temperature. In undoped graphene, the Fermi level sits exactly at the Dirac point.

**Few-Layer Graphene (FLG)**
Graphene consisting of 2-10 layers. Properties transition from 2D (monolayer) toward 3D (graphite) behavior as layer count increases.

**Fluorographene**
Fully fluorinated graphene (CF)n, an insulator with a wide bandgap. One of the thinnest insulators known.

**Fullerene**
Spherical carbon molecules (C60, C70, etc.) that can be conceptualized as graphene wrapped into a closed cage structure with some pentagonal rings.

**Functionalization**
Chemical modification of graphene by attaching functional groups. Can be covalent (creating sp3 defects) or non-covalent (pi-stacking interactions).

---

## G

**Grain Boundary**
The interface between two graphene crystal domains with different orientations. Common in CVD graphene; affects electrical and mechanical properties.

**Graphane**
Fully hydrogenated graphene (CH)n, where each carbon is bonded to one hydrogen atom, converting sp2 to sp3 bonding. An insulator.

**Graphene Nanoplatelet (GNP)**
Small stacks of graphene layers, typically 1-15 nm thick and 1-50 micrometers in lateral dimension. Common commercial form of graphene for composites.

**Graphene Nanoribbon (GNR)**
Narrow strips of graphene with width less than 50 nm. Can be semiconducting due to quantum confinement; properties depend on width and edge structure.

**Graphene Oxide (GO)**
Chemically modified graphene containing oxygen functional groups (epoxy, hydroxyl, carboxyl). Produced by oxidizing graphite using Hummers method. Dispersible in water but electrically insulating.

**Graphene Quantum Dot (GQD)**
Graphene nanoparticles smaller than 20 nm that exhibit quantum confinement effects. Display tunable fluorescence useful for bioimaging and sensors.

**Graphite**
The most common form of carbon, consisting of many graphene layers stacked with 0.335 nm spacing and held together by weak van der Waals forces.

---

## H

**Hexagonal Boron Nitride (hBN)**
A 2D material isostructural to graphene but composed of alternating boron and nitrogen atoms. An excellent insulating substrate for graphene devices; sometimes called "white graphene."

**Hummers Method**
The most common chemical process for producing graphene oxide, using potassium permanganate and sulfuric acid to oxidize graphite.

---

## K

**K Point (K' Point)**
The corners of graphene's hexagonal Brillouin zone where the valence and conduction bands meet. Six equivalent points exist: three K and three K' related by time-reversal symmetry.

---

## L

**Liquid Phase Exfoliation (LPE)**
A scalable method for producing graphene by sonicating graphite in appropriate solvents (NMP, DMF) or surfactant solutions. Produces flakes of varying thickness.

---

## M

**Magic Angle**
The specific twist angle (~1.1 degrees) between two graphene layers where unconventional superconductivity and correlated insulating states emerge. Discovered by Pablo Jarillo-Herrero's group in 2018.

**Mechanical Exfoliation**
The original method for isolating graphene, using adhesive tape to repeatedly peel layers from graphite. Produces highest-quality graphene but very low yield.

**Monolayer Graphene**
A single layer of carbon atoms in the hexagonal honeycomb arrangement. Only true monolayer exhibits the unique properties of graphene.

---

## N

**Nanopore**
A nanometer-scale hole in graphene. Graphene nanopores are being developed for DNA sequencing and molecular sensing.

---

## O

**Oxidation**
Adding oxygen to graphene, either controlled (producing graphene oxide) or uncontrolled (degradation). Graphene oxidizes in air above ~450 C.

---

## P

**Phonon**
Quantized lattice vibration. Graphene's exceptional thermal conductivity arises from efficient phonon transport in the 2D lattice.

**Plasma-Enhanced CVD (PECVD)**
A CVD variant using plasma to enable graphene growth at lower temperatures (400-700 C vs. 1000 C for thermal CVD).

**Pristine Graphene**
Defect-free, unfunctionalized graphene with ideal properties.

---

## Q

**Quantum Hall Effect**
A quantum phenomenon where electrical conductance takes precisely quantized values. Graphene uniquely shows this effect at room temperature and displays "half-integer" quantum Hall effect due to Dirac fermions.

---

## R

**Raman Spectroscopy**
The primary technique for characterizing graphene. Key features:
- G band (~1580 cm-1): sp2 carbon vibration
- 2D band (~2700 cm-1): layer number indicator; sharp and symmetric for monolayer
- D band (~1350 cm-1): defect-activated; absent in pristine graphene

**Reduced Graphene Oxide (rGO)**
Graphene oxide that has been chemically, thermally, or electrochemically reduced to partially restore electrical conductivity. Retains some defects and residual oxygen.

**Roll-to-Roll Production**
Continuous manufacturing process for producing graphene on flexible substrates. Samsung and Sony have demonstrated R2R CVD graphene production.

---

## S

**Scotch Tape Method**
Colloquial name for mechanical exfoliation, the technique used by Geim and Novoselov to first isolate graphene in 2004.

**sp2 Hybridization**
The orbital configuration of carbon in graphene, where one s and two p orbitals hybridize to form three equivalent orbitals in a plane at 120 degrees. The remaining p orbital forms the pi bond network.

**Stone-Wales Defect**
A topological defect in graphene where four hexagons are converted into two pentagons and two heptagons through a 90-degree bond rotation.

**Sublimation**
In epitaxial graphene production, the process of heating SiC until silicon atoms evaporate from the surface, leaving carbon to form graphene.

---

## T

**Transfer**
The process of moving CVD-grown graphene from the metal growth substrate to a target substrate. Typically involves polymer support (PMMA) and metal etching.

**Turbostratic Graphene**
Multi-layer graphene where layers are randomly oriented relative to each other, rather than Bernal-stacked. Properties more similar to monolayer than graphite.

**Twisted Bilayer Graphene (TBG)**
Two graphene layers stacked with a relative rotation angle. At specific "magic angles," exhibits superconductivity and other exotic properties.

---

## V

**Van der Waals Forces**
Weak intermolecular forces that hold graphene layers together in graphite. Interlayer spacing is 0.335 nm.

**Van der Waals Heterostructure**
Artificial materials created by stacking different 2D materials (graphene, hBN, MoS2, etc.) held together by van der Waals forces. Enables designer electronic properties.

**Vacancy**
A missing carbon atom in the graphene lattice. Single vacancies are the most common point defects and affect electrical and mechanical properties.

---

## Y

**Young's Modulus**
A measure of material stiffness. Graphene's Young's modulus of 1 TPa makes it the stiffest material ever measured.

---

## Z

**Zigzag Edge**
One of two primary edge configurations in graphene. Zigzag-edged nanoribbons are always metallic and may exhibit magnetic properties at the edges.

**Zone Folding**
A theoretical approach to understanding carbon nanotube properties by "folding" the graphene band structure according to the nanotube's chiral vector.`
  }
];

async function updateWikiPages() {
  console.log('Updating wiki pages...\n');

  for (const page of wikiPages) {
    try {
      const { error } = await db
        .from('wiki_pages')
        .update({
          title: page.title,
          meta_description: page.meta_description,
          content: page.content,
        })
        .eq('slug', page.slug);

      if (error) {
        console.error(`Failed to update ${page.slug}:`, error.message);
      } else {
        console.log(`Updated: ${page.slug} (${page.content.length} chars)`);
      }
    } catch (err: any) {
      console.error(`Error updating ${page.slug}:`, err.message);
    }
  }

  console.log('\nDone!');
}

updateWikiPages();
