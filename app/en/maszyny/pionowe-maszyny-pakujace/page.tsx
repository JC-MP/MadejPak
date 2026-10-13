import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';
import TrustDifferentiator from '@/components/sections/TrustDifferentiator';
import { REALIZACJE } from '@/data/realizacjeData';
import { REALIZACJE_EN } from '@/data/realizacjeDataEn';

export const metadata: Metadata = {
  title: 'Vertical VFFS Packaging Machines – Essegi Models',
  description:
    'How a vertical VFFS packaging machine works, bag types and dosing. Essegi F700–F1400 from 50 g to 50 kg — selection, integration and service by MadejPak.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/pionowe-maszyny-pakujace`,
    languages: {
      'pl': `${SITE_URL}/maszyny/pionowe-maszyny-pakujace`,
      'en': `${SITE_URL}/en/maszyny/pionowe-maszyny-pakujace`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/pionowe-maszyny-pakujace`,
    title:       'Vertical VFFS Packaging Machines Essegi – how they work and how to choose | MadejPak',
    description: 'VFFS working principle, machine anatomy, bag and film types, dosing. Essegi F700–F1400 from 50 g to 50 kg — authorised Essegi representative in Poland.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Vertical packaging machines – MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
}

// ─── Data ────────────────────────────────────────────────────────────────────

const ESSEGI_SERIES = [
  {
    model: 'F700',
    label: 'F700 Series',
    scope: 'Food products and fine granulates',
    desc: 'Compact VFFS machine for packaging food and fine granulates. Available with volumetric cup dosing, vibratory channel weighing systems and vertical auger dosing.',
    products: ['Short pasta, rice, groats', 'Coffee, cocoa, spices, salt, sugar', 'Dried fruit, nuts, seeds', 'Pet food', 'Frozen goods, peas, vegetables'],
    params: [
      { label: 'Weight range', value: '50 g – 3 kg' },
      { label: 'Max bag format', value: '320 × 420 mm' },
    ],
    dosing: ['Cup dosing (DT)', 'Vibratory channel weigher (B/V-K)', 'Vertical auger dosing (DV5000)'],
  },
  {
    model: 'F1000',
    label: 'F1000 Series',
    scope: 'Powders, industrial granulates, building materials',
    desc: 'Wide family of VFFS machines for powdered, granulated and building material products. Available in Standard, EcoFocus and Motion SU&SO variants — with various dosing systems.',
    products: ['Flour, starch, milk powder', 'Washing powder, cleaning agents', 'Cement, plaster, construction mixes', 'Wood pellets', 'Sand, gravel, aggregates'],
    params: [
      { label: 'Variants', value: 'Standard / EcoFocus / Motion SU&SO / Stone' },
      { label: 'Dosing', value: 'Belt, twin-auger, volumetric' },
    ],
    dosing: ['Belt-fed weigher (B/N-K)', 'Twin-auger weigher (B/2C-K)', 'Volumetric belt (DT10)', 'Liquid dosing'],
  },
  {
    model: 'F1200 / F1300',
    label: 'F1200 / F1300 Series',
    scope: 'Large bags — granules, feed, fertilisers, soil and bark',
    desc: 'Machines for large bags: with a belt weigher for granules, feed and fertilisers (5–50 kg), and with a volumetric belt feeder for soil, bark, compost and peat (10–80 l).',
    products: ['Feed, fertilisers, granules', 'Garden soil, peat, bark', 'Compost, growing media', 'Bulk free-flowing materials'],
    params: [
      { label: 'Range', value: '5 – 50 kg / 10 – 80 l' },
      { label: 'Max. bag size', value: 'F1200: 980 × 570 mm · F1300: 1080 × 670 mm' },
    ],
    dosing: ['Belt-fed weigher (B/N-K)', 'Volumetric belt feeder DTS80'],
  },
  {
    model: 'F8004S',
    label: 'F8004S — Stabilo bags',
    scope: 'Food, grains, pet food — packs with a regular shape',
    desc: 'VFFS machine for 50 g – 5 kg packs with four corner seals (Stabilo). The bag gets a regular, box-like shape — it stands better and looks good on the shelf. Pillow, square bottom and Stabilo formats.',
    products: ['Coffee, snacks, confectionery', 'Grains, seeds, rice', 'Pet food'],
    params: [
      { label: 'Range', value: '50 g – 5 kg' },
      { label: 'Max. bag size', value: '360 × 560 mm' },
    ],
    dosing: ['Vibratory (B/V-K) or multihead weigher', 'Twin-auger weigher (B/2C)'],
  },
  {
    model: 'F1400 COMBINED',
    label: 'F1400 COMBINED — bag in a carton',
    scope: 'Bag-in-box: film bag inserted into a carton',
    desc: 'The machine forms and fills a film bag, then automatically places it in a carton. The film protects the product, the carton gives shape and protection in transport.',
    products: ['Fresh and frozen vegetables', 'Dried fruit', 'Biscuits'],
    params: [
      { label: 'Range', value: '5 – 25 kg' },
      { label: 'Max. bag size', value: '1280 × 670 mm' },
    ],
    dosing: ['Weighing system matched to the product'],
  },
  {
    model: 'W1200 Fluid',
    label: 'W1200 Fluid — liquid products',
    scope: 'Liquids and fluid products',
    desc: 'Specialist VFFS machine for packaging liquid and semi-liquid products. Dedicated liquid dosing system maintaining seal integrity and process hygiene.',
    products: ['Oils, juices, sauces', 'Liquid food and chemical products'],
    params: [
      { label: 'Application', value: 'Liquid and semi-liquid products only' },
      { label: 'Dosing', value: 'Dedicated liquid dosing' },
    ],
    dosing: ['Liquid dosing'],
  },
];

const SECTORS = [
  {
    name: 'Food',
    items: ['Coffee, cocoa, spices', 'Pasta, rice, groats', 'Dried fruit, nuts', 'Flour, starch, sugar', 'Salt, seeds, grain', 'Feed and pet food'],
  },
  {
    name: 'Chemicals and plastics',
    items: ['Washing powders', 'Cleaning agents', 'Fertilisers, chemical granulates', 'Plastic granules (PP, PE), masterbatch', 'Calcium chloride, industrial salt'],
  },
  {
    name: 'Construction',
    items: ['Cement, plaster', 'Construction mixes', 'Sand, gravel, aggregates', 'Expanded clay, decorative stones'],
  },
  {
    name: 'Horticulture and fuel',
    items: ['Garden soil, peat, bark', 'Compost, growing media', 'Wood pellets', 'Charcoal, briquettes'],
  },
];

const BAG_TYPES: { name: string; desc: string; svg: 'pillow' | 'gusset' | 'stabilo' | 'square' }[] = [
  { name: 'Pillow bag', desc: 'The simplest VFFS bag: one longitudinal and two transverse seals. Used e.g. for granules, salt and pellets.', svg: 'pillow' },
  { name: 'Gusset — side folds', desc: 'The folds increase volume and help achieve a more regular bag shape — also useful when stacking on a pallet.', svg: 'gusset' },
  { name: 'Stabilo — corner seals', desc: 'Four additional corner seals give the pack a regular, near-cuboid shape.', svg: 'stabilo' },
  { name: 'Square bottom — flat base', desc: 'A formed flat base improves stability on display. It is still a film bag, not a carton.', svg: 'square' },
];

// ─── Page ────────────────────────────────────────────────────────────────────
const PAGE_URL = `${SITE_URL}/en/maszyny/pionowe-maszyny-pakujace`;

// Graphics (based on the MadejPak/Essegi sales & technical handbook) — static SVG, colours from currentColor
const VFFS_SCHEMA_SVG = `<path d="M126 10 H194 L172 52 H148 Z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07" stroke-linejoin="round"/><circle cx="150" cy="24" r="2.4" fill="#E8610A"/><circle cx="160" cy="31" r="2.4" fill="#E8610A"/><circle cx="170" cy="22" r="2.4" fill="#E8610A"/><circle cx="156" cy="40" r="2.4" fill="#E8610A"/><circle cx="166" cy="40" r="2.4" fill="#E8610A"/><circle cx="160" cy="24" r="2.4" fill="#E8610A"/><circle cx="55" cy="125" r="34" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><circle cx="55" cy="125" r="9" stroke="currentColor" stroke-width="1.6" fill="none"/><circle cx="108" cy="82" r="6" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M55 91 L108 76 L136 100" stroke="#E8610A" stroke-width="2" fill="none" stroke-linejoin="round"/><rect x="141" y="112" width="38" height="190" fill="currentColor" fill-opacity="0.07"/><rect x="148" y="52" width="24" height="250" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M126 98 H194 L178 118 H142 Z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07" stroke-linejoin="round"/><rect x="154" y="138" width="12" height="26" rx="2" fill="#E8610A"/><rect x="126" y="176" width="10" height="64" rx="4" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><rect x="184" y="176" width="10" height="64" rx="4" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><rect x="110" y="306" width="46" height="12" rx="2" fill="#E8610A"/><rect x="164" y="306" width="46" height="12" rx="2" fill="#E8610A"/><path d="M156 312 L164 308 L164 316 Z" fill="currentColor"/><path d="M140 330 H180 L184 344 V392 Q184 402 174 402 H146 Q136 402 136 392 V344 Z" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07" stroke-linejoin="round"/><line x1="138" y1="337" x2="182" y2="337" stroke="currentColor" stroke-width="1.4"/><circle cx="150" cy="372" r="2.4" fill="#E8610A"/><circle cx="160" cy="380" r="2.4" fill="#E8610A"/><circle cx="170" cy="370" r="2.4" fill="#E8610A"/><circle cx="155" cy="390" r="2.4" fill="#E8610A"/><circle cx="166" cy="392" r="2.4" fill="#E8610A"/><circle cx="160" cy="362" r="2.4" fill="#E8610A"/><circle cx="146" cy="386" r="2.4" fill="#E8610A"/><circle cx="174" cy="384" r="2.4" fill="#E8610A"/><rect x="80" y="410" width="170" height="11" rx="5.5" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><circle cx="88" cy="415.5" r="3" fill="currentColor"/><circle cx="242" cy="415.5" r="3" fill="currentColor"/><rect x="240" y="150" width="56" height="42" rx="4" stroke="currentColor" stroke-width="1.6" fill="currentColor" fill-opacity="0.07"/><rect x="247" y="157" width="42" height="22" rx="2" fill="#E8610A" fill-opacity="0.3"/><line x1="268" y1="192" x2="268" y2="226" stroke="currentColor" stroke-width="1.6"/><line x1="136" y1="151" x2="154" y2="151" stroke="currentColor" stroke-width="1" stroke-dasharray="2 2"/><circle cx="22" cy="90" r="9" fill="#E8610A"/><text x="22" y="93.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">1</text><circle cx="108" cy="62" r="9" fill="#E8610A"/><text x="108" y="65.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">2</text><circle cx="214" cy="108" r="9" fill="#E8610A"/><text x="214" y="111.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">3</text><circle cx="214" cy="208" r="9" fill="#E8610A"/><text x="214" y="211.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">4</text><circle cx="122" cy="151" r="9" fill="#E8610A"/><text x="122" y="154.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">5</text><circle cx="92" cy="312" r="9" fill="#E8610A"/><text x="92" y="315.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">5</text><circle cx="228" cy="312" r="9" fill="#E8610A"/><text x="228" y="315.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">6</text><circle cx="268" cy="138" r="9" fill="#E8610A"/><text x="268" y="141.5" text-anchor="middle" font-size="10" font-weight="700" fill="#fff" font-family="Arial">7</text>`;
const BAG_SVG = {
  pillow: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><line x1="12" y1="108" x2="88" y2="108" stroke="currentColor" stroke-width="2"/><line x1="50" y1="22" x2="50" y2="108" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/>`,
  gusset: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><line x1="12" y1="108" x2="88" y2="108" stroke="currentColor" stroke-width="2"/><line x1="28" y1="22" x2="28" y2="108" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/><line x1="72" y1="22" x2="72" y2="108" stroke="currentColor" stroke-width="2" stroke-dasharray="3 4"/>`,
  stabilo: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><line x1="12" y1="108" x2="88" y2="108" stroke="currentColor" stroke-width="2"/><line x1="22" y1="12" x2="22" y2="118" stroke="#E8610A" stroke-width="2.4"/><line x1="78" y1="12" x2="78" y2="118" stroke="#E8610A" stroke-width="2.4"/>`,
  square: `<rect x="12" y="6" width="76" height="118" rx="10" stroke="currentColor" stroke-width="2" fill="currentColor" fill-opacity="0.07"/><line x1="12" y1="22" x2="88" y2="22" stroke="currentColor" stroke-width="2"/><path d="M18 118 L32 98 H68 L82 118" stroke="#E8610A" stroke-width="2.4" fill="none" stroke-linejoin="round"/>`,
};

const PAGE_TOC = [
  { label: 'How it works', href: '#jak-dziala' },
  { label: 'Machine anatomy', href: '#budowa' },
  { label: 'Models', href: '#modele' },
  { label: 'Bags and films', href: '#worki' },
  { label: 'Cartons', href: '#karton' },
  { label: 'Dosing', href: '#dozowanie' },
  { label: 'Machine selection', href: '#dobor' },
  { label: 'Existing line?', href: '#problemy' },
  { label: 'FAQ and glossary', href: '#faq' },
];

const VFFS_STEPS = [
  { title: 'Product supply', desc: 'The product comes from a silo, hopper or conveying system to the dosing unit.' },
  { title: 'Weighing', desc: 'The weigher measures the set portion. Free-flowing products are often dosed in a coarse and a fine stage.' },
  { title: 'Bag forming', desc: 'The film is guided over the forming shoulder and forming tube. The longitudinal sealing unit joins its edges.' },
  { title: 'Filling', desc: 'After the bottom seal is made, the weighed portion drops through the filling chute into the bag.' },
  { title: 'Closing and cutting', desc: 'The transverse sealing unit closes the filled bag and makes the seal for the next cycle; the cutting unit separates the packs.' },
  { title: 'Discharge', desc: 'The discharge conveyor passes the bag on to inspection, flattening and further conveying or palletising.' },
];

const VFFS_PARTS = [
  { name: 'Film unwinder', desc: 'Holds the reel and allows controlled unwinding of the film.' },
  { name: 'Film guiding and centring', desc: 'Keeps the film in the correct position before the bag is formed.' },
  { name: 'Forming shoulder and forming tube', desc: 'Give the film the shape of a sleeve; the filling chute guides the product into the pack.' },
  { name: 'Film transport', desc: 'Advances the film by one pack length — intermittently or continuously, depending on the version.' },
  { name: 'Sealing units', desc: 'Make the longitudinal seal and the transverse seals.' },
  { name: 'Cutting unit', desc: 'Separates the filled and closed bag.' },
  { name: 'PLC and HMI operator panel', desc: 'Control the cycle, settings, recipes and alarms.' },
];

const VERSIONS = [
  { name: 'PN', desc: 'Pneumatic actuation of the sealing unit — in smaller models, e.g. F700.' },
  { name: 'MEC', desc: 'Mechanical drive. F1000 with a single belt weigher: 10–14 bags/min.' },
  { name: 'SYNCRO', desc: 'Sealing unit with a servo drive (brushless motor); the weighing set-up may differ too — F1000 with two weighers: 16–22 bags/min.' },
  { name: 'MOTION SU&SO', desc: 'Continuous film transport; the transverse sealing unit moves in sync with it — F1000: up to 30 bags/min.' },
  { name: 'EcoFocus', desc: 'Ready F1000 configuration for 5–15 kg pellets: B/N-K40 belt weigher and discharge conveyor, 7–10 bags/min.' },
];

const ESSEGI_VS_CONCETTI = [
  { need: 'Pellets 5–15 kg, a few hundred bags per hour', fit: 'Essegi F1000' },
  { need: 'Granules 10–25 kg, moderate output', fit: 'Essegi F1000 / F1200' },
  { need: 'Granules 25 kg, 1,500–2,000 bags per hour', fit: 'Concetti FFS-E' },
  { need: 'Cement or dusty premix in a sealed bag', fit: 'Concetti CONTINUA Six Station' },
  { need: 'Pre-made paper or woven PP bags', fit: 'Concetti — open-mouth bags' },
  { need: 'Large big-bag packs', fit: 'Concetti — big-bag systems' },
];

const FILMS = [
  { material: 'PE / LDPE', props: 'Flexible film designed for sealing.', example: 'Pellets, salt, fertilisers' },
  { material: 'Multilayer PE film', props: 'Layers with different strength and sealing properties.', example: 'Bags under heavier loads' },
  { material: 'PET/PE', props: 'Laminate with an outer layer and an inner sealing layer.', example: 'Selected food products' },
  { material: 'Barrier film', props: 'Can limit the passage of oxygen, water vapour or aromas.', example: 'Products sensitive to storage conditions' },
];

const CARTON_NEEDS = [
  { need: 'Bag in a carton (bag-in-box)', solution: 'Essegi F1400 COMBINED — forms and fills the bag, then automatically inserts it into a carton' },
  { need: 'Several finished bags in a carton', solution: 'A case packer working with the VFFS machine' },
  { need: 'Loose product straight into a carton', solution: 'A custom-designed carton dosing system, often with a protective liner' },
];

const SELECTION_FACTORS = [
  { title: 'Bulk density', desc: 'Product mass per unit of volume. Two 15 kg bags — of salt and of light bark — need completely different sizes. Bag weight alone is not enough to select a machine.' },
  { title: 'Flowability', desc: 'Granules flow freely from a hopper, while damp powder can hang up and bridge. Moisture, granulation and tendency to cake all matter.' },
  { title: 'Dust and de-aeration', desc: 'Powders contain a lot of air — the bag comes out larger and is harder to close and stack on a pallet. Dust in the seal area can cause leaks.' },
  { title: 'Film and sealing', desc: 'Flat film formed on a VFFS machine is different from ready-made PE tubular film in industrial FFS systems. Thickness, sealability and puncture resistance matter.' },
  { title: 'Output and downstream process', desc: 'How many bags per hour and over how many shifts — and what happens to the bag after filling: manual stacking, palletising, wrapping, conveying.' },
  { title: 'Dust safety (ATEX)', desc: 'Dust from flour, sugar, starch or organic materials can form explosive atmospheres. We ask about hazard zones and dust extraction — ATEX design is confirmed for the specific configuration.' },
];

const PRODUCT_FIT = [
  { product: 'Pellets, wood granules', direction: 'F1000 EcoFocus or F1000 with a belt weigher, then palletising', watch: 'dust and breakage, bag stacking on the pallet' },
  { product: 'Granular fertilisers', direction: 'F1000 or F1200 with a belt weigher — depending on bag weight', watch: 'aggressive product, dust, stainless steel design' },
  { product: 'Flour, cement, premixes', direction: 'F1000 with an auger weigher and dust extraction', watch: 'aeration, bag tightness, bridging, ATEX' },
  { product: 'Rice, sugar, seeds', direction: 'F700 with a cup doser or vibratory weigher; larger bags — F1000', watch: 'small doses, weighing tolerance, moisture, format changes' },
  { product: 'Pet food', direction: 'F700 / F8004S (small packs) or F1000 / F1200 (large bags)', watch: 'fat, varied granulation, film durability' },
  { product: 'Frozen vegetables, dried fruit, biscuits — in a carton', direction: 'F1400 COMBINED — bag inserted automatically into a carton', watch: 'carton type, closing, cold-store operation' },
  { product: 'Soil, peat, bark', direction: 'F1000 / F1200 / F1300 with a DTS volumetric doser', watch: 'portion in litres, moisture, irregular fractions' },
  { product: 'Chemicals, detergents', direction: 'belt or auger weigher — depending on granulation', watch: 'corrosion, hygiene, dust' },
];

const INQUIRY_CHECKLIST = [
  { q: 'What do you pack?', hint: 'product name and properties: granules or powder, dust, moisture' },
  { q: 'In what pack?', hint: 'bag weight or volume; film on a reel or pre-made bags' },
  { q: 'What output?', hint: 'bags or tonnes per hour and the number of shifts' },
  { q: 'How do you pack today?', hint: 'manually, semi-automatically or on a machine — and what causes the biggest problem' },
  { q: 'What happens to the bag next?', hint: 'manual stacking, palletising, wrapping, conveying' },
];

const LINE_PROBLEMS = [
  { symptom: '“The weigher is off”', check: 'We check whether it is a weigher or a volumetric doser, how the product density varies, how coarse and fine feeding work, and whether vibrations affect the measurement.' },
  { symptom: 'Dust and poor seals', check: 'De-aeration, dust extraction, product fall time, fill height and film structure — dust in the seal area is a common cause of leaks.' },
  { symptom: 'The bag is “puffed up”', check: 'We look at product aeration and air in the bag. Compaction or air removal is selected after a trial with the product.' },
  { symptom: 'Too many changeovers', check: 'We count recipes, bag weights and film widths. A different bag length is usually a settings change; a different width often means changing the forming tube.' },
  { symptom: 'Bags sit badly on the pallet', check: 'Format, side folds, flattening and bag orientation — and finally robotics and pallet stability.' },
  { symptom: 'Output too low', check: 'We look for the bottleneck: doser, sealing jaws, discharge conveyor, palletising or product supply.' },
];

const MACHINE_OPTIONS = [
  { group: 'Film and print', items: ['Registration-mark photocell', 'Automatic film centring', 'Printer / coder — date, batch, code'] },
  { group: 'Bag shape', items: ['Side folds and flat base', 'Stabilo corner seals', 'Handle-making unit'] },
  { group: 'Discharge and inspection', items: ['Discharge belt, turntable', 'Bag turning and flattening', 'Checkweigher', 'Bag-into-carton feeding'] },
  { group: 'Operation', items: ['Platforms, stairs, railings', 'Film reel lifter', 'Forming tube stands', 'Bag shaking unit'] },
];

const LINE_INTEGRATION = [
  { group: 'Product supply', desc: 'Conveyors, screw feeders, hoppers, take-off from a silo or an existing installation.', href: '/en/maszyny/transport-i-koniec-linii', link: 'Conveying' },
  { group: 'Weighing and inspection', desc: 'Multihead weighers, checkweighing, metal detection, rejection, labelling.', href: '/en/maszyny/wazenie-i-dozowanie', link: 'Weighing & dosing' },
  { group: 'End of line', desc: 'Bag conveying and orientation, robot or cobot, palletising, pallet wrapping.', href: '/en/maszyny/paletyzacja', link: 'Palletising' },
  { group: 'Controls', desc: 'Integration and communication with equipment already running in the plant.', href: '/en/maszyny/robotyzacja-pakowania', link: 'Robotics' },
];

// Case studies with Essegi machines — EN industry labels (PL data has Polish labels)
const CASE_ORDER = ['europol', 'planta', 'ciech-sarzyna', 'qemetica', 'certech', 'gryfstevedring', 'brapta', 'axpal'];
const CASE_INDUSTRY_EN: Record<string, string> = {
  europol: 'Energy / solid fuels',
  planta: 'Chemicals / fertilisers',
  'ciech-sarzyna': 'Chemicals / fertilisers',
  qemetica: 'Chemicals / industrial chemicals',
  certech: 'Packaging / FMCG',
  gryfstevedring: 'Building materials / aggregates',
  brapta: 'Food / feed and seeds',
  axpal: 'Food / snacks',
};
const CASE_CLIENT_EN: Record<string, string> = { qemetica: 'Qemetica (formerly Soda Ciech)' };
const caseRank = (slug: string) => {
  const i = CASE_ORDER.indexOf(slug);
  return i === -1 ? 99 : i;
};
const ESSEGI_CASES = REALIZACJE
  .filter((r) => r.status === 'pelne' && r.partnerzy?.includes('Essegi'))
  .sort((a, b) => caseRank(a.slug) - caseRank(b.slug))
  .map((r) => ({
    slug: r.slug,
    client: CASE_CLIENT_EN[r.slug] ?? r.klient,
    industry: CASE_INDUSTRY_EN[r.slug] ?? '',
    title: REALIZACJE_EN.find((e) => e.slug === r.slug)?.tytul ?? r.tytul,
  }));

// FAQ — text visible on the page and in the FAQPage schema (must be identical)
const FAQ = [
  { q: 'How many bags per hour does a vertical packaging machine make?', a: 'In the catalogue, from a few up to 30 bags per minute — depending on the model and version. For example F1000: MEC 10–14, SYNCRO 16–22, Motion up to 30 bags/min. We confirm the real output for your product after selecting the dosing and analysing the end of the line: if the machine makes 20 bags/min and palletising 15, the whole line will not reach 20 without a buffer.' },
  { q: 'What is the difference between weighing and volumetric dosing?', a: 'A weigher measures net weight, e.g. 15 kg. A volumetric doser measures volume, e.g. 20 l of soil. When product density changes with moisture, the same volume does not always weigh the same — then we choose weighing.' },
  { q: 'Is the film width the same as the finished bag width?', a: 'No. The flat film is wrapped around the forming tube and joined with a longitudinal seal, so the web is wider than the finished bag, and side folds add more. We set the final format from the pack drawing.' },
  { q: 'Can the bag carry a logo, date and batch number?', a: 'Yes. The artwork is on pre-printed film, and a registration-mark photocell keeps it aligned with the seal and cut. Variable data — date, batch, code — is added by a printer mounted on the machine.' },
  { q: 'Will any film run on the machine?', a: 'No. We check the film structure and thickness, sealability, puncture resistance and requirements such as food contact. That is why we ask for a film sample or the supplier’s specification.' },
  { q: 'Can a vertical machine pack a bag into a carton?', a: 'A standard VFFS machine forms a bag from film. For a bag in a carton (bag-in-box) there is the Essegi F1400 COMBINED. If finished bags are to go into a carton, a separate case packer working with the VFFS machine is needed.' },
  { q: 'Can only palletising be automated, without replacing the packaging machine?', a: 'Yes. The end of the line — discharge, bag turning and flattening, robot or cobot, palletising and pallet wrapping — can be automated with the existing packaging machine.' },
  { q: 'What should I prepare for a quote request?', a: 'The product name and properties, bag weight or volume, required output, type of pack and what happens to the bag next. Ideally with a product sample, a photo of your current bag or a drawing, and photos of where the line will stand.' },
];

const GLOSSARY = [
  { term: 'VFFS (Vertical Form Fill Seal)', def: 'Vertical forming, filling and sealing of packs from reel-fed film.' },
  { term: 'Forming tube and forming shoulder', def: 'Shape the flat film into a sleeve; the product enters the bag through the tube.' },
  { term: 'Filling chute', def: 'The path through which the weighed portion drops into the forming bag.' },
  { term: 'Sealing jaws', def: 'The transverse sealing unit — closes the bag and forms the bottom of the next one.' },
  { term: 'Registration mark (eye-mark)', def: 'A mark on the film read by a photocell so that the artwork is always in the same place.' },
  { term: 'Impulse / hot-bar sealing', def: 'A heating element heated during the cycle, or heated bars kept at a constant working temperature.' },
  { term: 'Bulk density', def: 'Product mass per unit of volume — determines the bag size for a given weight.' },
  { term: 'Recipe', def: 'Stored settings for a product and format: weight, bag length, sealing parameters.' },
  { term: 'Changeover', def: 'Switching product or format; may require changing the forming tube.' },
  { term: 'Bottleneck', def: 'A device or step that limits the output of the whole line.' },
  { term: 'OEE (Overall Equipment Effectiveness)', def: 'An effectiveness indicator combining availability, performance and quality.' },
  { term: 'Checkweigher / case packer', def: 'Weight check of finished bags / packing several packs into a shipping case.' },
  { term: 'Bag-in-box', def: 'A film bag placed inside a carton — e.g. in the Essegi F1400 COMBINED.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MadejPak', item: `${SITE_URL}/en` },
        { '@type': 'ListItem', position: 2, name: 'Machines', item: `${SITE_URL}/en/maszyny` },
        { '@type': 'ListItem', position: 3, name: 'Vertical VFFS packaging machines', item: PAGE_URL },
      ],
    },
  ],
};

export default function PionoweMaszynyPageEn() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 10 },
              alignItems: 'end',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2.5,
                }}
              >
                Vertical packaging
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem', lg: '3rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--dim-85)',
                }}
              >
                Vertical VFFS
                <br />
                packaging machines
              </Typography>
            </Box>

            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.8,
                  color: TEXT_DIM,
                  mb: 3,
                }}
              >
                VFFS (Vertical Form-Fill-Seal) machines form the package from a film roll, dose
                the product and seal the bag in a single working cycle. We supply and integrate
                Essegi machines and Concetti FFS systems — for free-flowing, powder, granulated
                and liquid products.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={Link}
                  href="/en/kontakt"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 1.25,
                    bgcolor: ACCENT,
                    borderRadius: '3px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: '#D45509' },
                  }}
                >
                  Enquire about a machine
                  <ArrowRight />
                </Box>
                <Box
                  component={Link}
                  href="/en/maszyny/partnerzy"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 1.25,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '3px',
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: TEXT_DIM,
                    textDecoration: 'none',
                    transition: 'border-color 0.15s ease, color 0.15s ease',
                    '&:hover': {
                      borderColor: 'var(--dim-20)',
                      color: 'var(--dim-85)',
                    },
                  }}
                >
                  All machines
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── On this page ── */}
      <Box component="nav" aria-label="On this page" sx={{ borderBottom: `1px solid ${BORDER}`, py: 2 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflowX: 'auto', pb: 0.25, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim-45)', whiteSpace: 'nowrap', mr: 1 }}>
              On this page
            </Typography>
            {PAGE_TOC.map((t) => (
              <Box key={t.href} component="a" href={t.href} sx={{ whiteSpace: 'nowrap', px: 1.5, py: 0.6, border: `1px solid ${BORDER}`, borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                {t.label}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── What it is ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                What this machine is
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3 }}>
                What is a vertical VFFS packaging machine?
              </Typography>
              <Box sx={{ pl: 2.5, borderLeft: `3px solid ${ACCENT}`, mb: 3.5 }}>
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.02rem' }, fontWeight: 600, color: 'var(--dim-85)', lineHeight: 1.7 }}>
                  VFFS (Vertical Form Fill Seal) is a technology in which the machine unwinds film from a reel, forms a bag,
                  fills it with a measured portion of product, makes the seals and separates the finished pack.
                </Typography>
              </Box>
              <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1 }}>
                What does “vertical” mean?
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8 }}>
                The product enters the pack from above, usually by gravity. It does not mean every device in the line stands
                vertically — feeders, conveyors and the palletising station can work in different directions.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                When this is the right solution
              </Typography>
              {[
                'You pack by hand and want to automate — the machine replaces several workstations and runs in a continuous cycle.',
                'You need repeatable portions — they are measured by a weighing or dosing system matched to and synchronised with the machine.',
                'Your product is free-flowing: flour, sugar, coffee, granules, pellets, powders, groats, fertiliser, pet food.',
                'You want several formats — a different bag length is usually just a setting; a different width may require changing the forming tube.',
              ].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75 }}>{text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── How VFFS works + machine anatomy ── */}
      <Box id="jak-dziala" sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 720 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Working principle
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              One cycle — from product to finished bag
            </Typography>
          </Box>
          <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2, mb: { xs: 4, md: 5 } }}>
            {VFFS_STEPS.map((step, i) => (
              <Box key={step.title} component="li" sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1, color: ACCENT, mb: 1.5 }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1 }}>{step.title}</Typography>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.65, color: TEXT_DIM }}>{step.desc}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ p: { xs: 3, md: 3.5 }, mb: { xs: 8, md: 10 }, borderLeft: `3px solid ${ACCENT}`, bgcolor: `color-mix(in srgb, ${ACCENT} 6%, var(--bg-card))`, borderRadius: '4px' }}>
            <Typography sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>Example: packing 15 kg of pellets</Typography>
            <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM }}>
              A belt conveyor feeds pellets into the weigh hopper. Once weighed, the portion passes through the filling system into a
              bag formed from PE film. The machine makes the transverse seal and cuts the bag, and the discharge conveyor passes it on
              to the next devices — checkweighing, flattening and palletising.
            </Typography>
          </Box>

          {/* Machine anatomy */}
          <Box id="budowa" sx={{ scrollMarginTop: '80px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '320px 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
            <Box
              component="svg"
              viewBox="0 0 320 440"
              role="img"
              aria-label="Diagram of a vertical VFFS packaging machine with numbered assemblies"
              sx={{ display: 'block', width: '100%', maxWidth: 320, height: 'auto', mx: { xs: 'auto', md: 0 }, color: 'var(--dim-55)' }}
              dangerouslySetInnerHTML={{ __html: VFFS_SCHEMA_SVG }}
            />
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Machine anatomy
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 3 }}>
                Main assemblies of a vertical packaging machine
              </Typography>
              <Box component="ol" sx={{ listStyle: 'none', m: 0, p: 0, display: 'grid', gap: 1.5, mb: 4 }}>
                {VFFS_PARTS.map((part, i) => (
                  <Box key={part.name} component="li" sx={{ display: 'flex', gap: 1.75, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 22, height: 22, borderRadius: '50%', bgcolor: ACCENT, color: '#fff', fontSize: '0.72rem', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, mt: '1px' }}>{i + 1}</Box>
                    <Typography sx={{ fontSize: '0.86rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      <Box component="span" sx={{ fontWeight: 700, color: 'var(--dim-85)' }}>{part.name}</Box> — {part.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2, mb: 3 }}>
                {[
                  { title: 'Before the machine', desc: 'Silo, hopper, belt or screw conveyors, screening equipment, weigher or doser.' },
                  { title: 'After the machine', desc: 'Discharge conveyor, checkweigher, metal detector (if required), bag turning and flattening, palletising robot, stretch wrapper.' },
                ].map((bx) => (
                  <Box key={bx.title} sx={{ p: 2.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                    <Typography variant="h3" sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>{bx.title}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{bx.desc}</Typography>
                  </Box>
                ))}
              </Box>
              <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--dim-55)' }}>
                The packaging machine alone does not guarantee the required weight accuracy — the portion is prepared by a matched
                weighing or dosing system synchronised with it.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Essegi series ── */}
      <Box id="modele" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Essegi — machine series
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 2, md: 6 },
                alignItems: { md: 'flex-end' },
                justifyContent: 'space-between',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                }}
              >
                Essegi VFFS machines
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: TEXT_DIM,
                  maxWidth: 460,
                  lineHeight: 1.7,
                  flexShrink: 0,
                }}
              >
                Essegi has been manufacturing vertical packaging machines for over 30 years.
                The machine family ranges from compact (F700) to industrial (F8004S),
                with dedicated dosing systems for every product group.
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {ESSEGI_SERIES.map((series) => (
              <Box
                key={series.model}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', lg: '260px 1fr 240px' },
                  gap: { xs: 3, lg: 0 },
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '4px',
                  overflow: 'hidden',
                }}
              >
                {/* Left: model name */}
                <Box
                  sx={{
                    p: { xs: 3, md: 3.5 },
                    borderRight: { lg: `1px solid ${BORDER}` },
                    borderBottom: { xs: `1px solid ${BORDER}`, lg: 'none' },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      letterSpacing: '-0.04em',
                      color: ACCENT,
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {series.model}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--dim-42)',
                      lineHeight: 1.45,
                      mb: 2.5,
                    }}
                  >
                    {series.scope}
                  </Typography>
                  {series.params.map((p) => (
                    <Box key={p.label} sx={{ mb: 1 }}>
                      <Typography sx={{ fontSize: '0.65rem', color: 'var(--dim-35)', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 0.25 }}>
                        {p.label}
                      </Typography>
                      <Typography sx={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-85)' }}>
                        {p.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                {/* Middle: description + products */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, borderRight: { lg: `1px solid ${BORDER}` } }}>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                    {series.desc}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--dim-42)',
                      mb: 1.5,
                    }}
                  >
                    Products
                  </Typography>
                  <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                    {series.products.map((p) => (
                      <Box
                        key={p}
                        component="li"
                        sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}
                      >
                        <Box
                          aria-hidden="true"
                          sx={{
                            width: 4,
                            height: 4,
                            borderRadius: '50%',
                            bgcolor: ACCENT,
                            flexShrink: 0,
                            mt: '6px',
                          }}
                        />
                        <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>
                          {p}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

                {/* Right: dosing */}
                <Box sx={{ p: { xs: 3, md: 3.5 } }}>
                  <Typography
                    sx={{
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--dim-42)',
                      mb: 1.5,
                    }}
                  >
                    Dosing systems
                  </Typography>
                  <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                    {series.dosing.map((d) => (
                      <Box
                        key={d}
                        component="li"
                        sx={{
                          py: 0.75,
                          borderBottom: `1px solid ${BORDER}`,
                          '&:last-child': { borderBottom: 'none' },
                        }}
                      >
                        <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                          {d}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          {/* What the versions mean */}
          <Box sx={{ mt: { xs: 5, md: 6 }, p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
            <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 2.5 }}>
              PN, MEC, SYNCRO, MOTION, EcoFocus — what the versions mean
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }, gap: { xs: 2, md: 3 } }}>
              {VERSIONS.map((v) => (
                <Box key={v.name}>
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, letterSpacing: '0.08em', color: ACCENT, mb: 0.75 }}>{v.name}</Typography>
                  <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.6, color: TEXT_DIM }}>{v.desc}</Typography>
                </Box>
              ))}
            </Box>
            <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--dim-55)', mt: 2.5 }}>
              We match the version to the real output of the line, not to the highest figure in the catalogue.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Concetti FFS ── */}
      <Box id="concetti" sx={{ scrollMarginTop: '80px', py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Concetti — FFS
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                FFS systems
                for industrial bags
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                Industrial bagging from PE tubular film — high throughput and difficult products.
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 3.5 }}>
                Concetti supplies FFS (Form-Fill-Seal) systems for industrial bagging
                from polyethylene tubular film — bags from 10 to 50 kg, depending on the system
                and product. It is a different design from Essegi vertical VFFS machines: the bag
                is formed in a horizontal, multi-station process. Concetti also offers machines
                for pre-made open-mouth bags, big-bag systems and palletisers.
              </Typography>

              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                  gap: 2,
                }}
              >
                {[
                  {
                    model: 'FFS-E',
                    desc: 'For free-flowing granules — plastics, fertilisers, salt. Bags 10–40 kg, up to 2,000 bags/h.',
                  },
                  {
                    model: 'CONTINUA',
                    desc: 'For products that are harder to dose — aerated and dusty. Several output versions matched to the product.',
                  },
                  {
                    model: 'CONTINUA Six Station',
                    desc: 'For cement and fine premixes. Product de-aeration and compaction, seal-area cleaning. Bags 10–40 kg, up to 800 bags/h.',
                  },
                ].map((m) => (
                  <Box
                    key={m.model}
                    sx={{
                      p: 3,
                      bgcolor: BG_CARD,
                      border: `1px solid ${BORDER}`,
                      borderRadius: '4px',
                    }}
                  >
                    <Box sx={{ width: 24, height: 2, bgcolor: ACCENT, mb: 2, borderRadius: '1px' }} />
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        color: 'var(--dim-85)',
                        mb: 1.25,
                      }}
                    >
                      {m.model}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>
                      {m.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Essegi or Concetti — a first direction */}
              <Box sx={{ mt: 4, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                <Box sx={{ px: 3, py: 2, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
                  <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)' }}>
                    Essegi or Concetti? A first direction
                  </Typography>
                </Box>
                {ESSEGI_VS_CONCETTI.map((row) => (
                  <Box key={row.need} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1.4fr 1fr' }, gap: { xs: 0.5, sm: 3 }, px: 3, py: 1.75, bgcolor: BG_CARD, borderBottom: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.84rem', lineHeight: 1.55, color: TEXT_DIM }}>{row.need}</Typography>
                    <Typography sx={{ fontSize: '0.84rem', lineHeight: 1.55, fontWeight: 700, color: 'var(--dim-85)' }}>{row.fit}</Typography>
                  </Box>
                ))}
                <Box sx={{ px: 3, py: 1.75, bgcolor: BG_CARD }}>
                  <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--dim-55)' }}>
                    This is not a split into a “cheaper and a more expensive” machine — they are different designs for different
                    working ranges. The choice depends on the product, bag weight and required output.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Sectors ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 6 } }}>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Applications
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Sectors and products
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
              gap: 0,
              border: `1px solid ${BORDER}`,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {SECTORS.map((sector, idx) => (
              <Box
                key={sector.name}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  bgcolor: BG_CARD,
                  borderRight: {
                    xs: 'none',
                    sm: idx % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                    lg: idx < 3 ? `1px solid ${BORDER}` : 'none',
                  },
                  borderBottom: {
                    xs: idx < SECTORS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    sm: idx < 2 ? `1px solid ${BORDER}` : 'none',
                    lg: 'none',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: ACCENT,
                    mb: 2.5,
                  }}
                >
                  {sector.name}
                </Typography>
                <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                  {sector.items.map((item) => (
                    <Box
                      key={item}
                      component="li"
                      sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 1 }}
                    >
                      <Box
                        aria-hidden="true"
                        sx={{
                          width: 4,
                          height: 4,
                          borderRadius: '50%',
                          bgcolor: 'var(--dim-28)',
                          flexShrink: 0,
                          mt: '6px',
                        }}
                      />
                      <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Bag types ── */}
      <Box id="worki" sx={{ scrollMarginTop: '80px', py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Packaging formats
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                VFFS bag types
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 2.5,
              }}
            >
              {BAG_TYPES.map((bag) => (
                <Box
                  key={bag.name}
                  sx={{
                    p: 3,
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '4px',
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 100 130"
                    aria-hidden="true"
                    sx={{ display: 'block', width: 56, height: 'auto', mb: 2, color: 'var(--dim-55)' }}
                    dangerouslySetInnerHTML={{ __html: BAG_SVG[bag.svg] }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: 'var(--dim-85)',
                      mb: 1.25,
                      lineHeight: 1.3,
                    }}
                  >
                    {bag.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: TEXT_DIM }}>
                    {bag.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.7, color: 'var(--dim-55)', mt: 3, ml: { md: 'calc(280px + 80px)' } }}>
            Formats in the Essegi catalogue: F700 and F8004S — pillow, square bottom, Stabilo · F1000 with a belt weigher — pillow,
            gusset, Stabilo · F1000 with an auger weigher, EcoFocus, F1200, F1300 — pillow, gusset · F1400 COMBINED — pillow, gusset
            (bag in a carton). The format must be confirmed for the forming set and equipment of the specific machine.
          </Typography>

          {/* Film, print and sealing */}
          <Box id="folie" sx={{ mt: { xs: 6, md: 8 }, pt: { xs: 6, md: 8 }, borderTop: `1px solid ${BORDER}`, scrollMarginTop: '80px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Films
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Film, print and sealing
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                The film must suit the machine, the product and the requirements of whoever receives the pack.
              </Typography>
            </Box>
            <Box>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', mb: 3 }}>
                {FILMS.map((f, idx) => (
                  <Box key={f.material} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '0.9fr 1.6fr 1fr' }, gap: { xs: 0.5, sm: 3 }, px: 3, py: 1.75, bgcolor: BG_CARD, borderBottom: idx < FILMS.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                    <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--dim-85)' }}>{f.material}</Typography>
                    <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>{f.props}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.55, color: 'var(--dim-55)' }}>{f.example}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2, mb: 3 }}>
                {[
                  { title: 'Thickness', desc: 'Given in micrometres: 100 µm = 0.10 mm. Thicker film does not always mean a better bag — structure, puncture resistance and seal strength matter.' },
                  { title: 'Sealing', desc: 'Impulse: the heating element heats up during the sealing cycle. Hot-bar: heated bars stay at a constant working temperature. The choice depends on the film, its thickness and the cycle time.' },
                  { title: 'Print', desc: 'The full artwork is printed by the film supplier. A registration-mark photocell keeps the artwork aligned with the seal and cut, and a printer on the machine adds variable data — date, batch number.' },
                ].map((b) => (
                  <Box key={b.title} sx={{ p: 2.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                    <Typography variant="h3" sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>{b.title}</Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{b.desc}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ p: { xs: 2.5, md: 3 }, borderLeft: `3px solid ${ACCENT}`, bgcolor: `color-mix(in srgb, ${ACCENT} 6%, var(--bg-card))`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>Why film width ≠ bag width?</Typography>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.7, color: TEXT_DIM, mb: 1.25 }}>
                  Flat film is wrapped around the forming tube. The bag circumference depends on the tube shape, side folds and the
                  longitudinal seal — which is why we confirm the format from a technical drawing.
                </Typography>
                <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.6, color: 'var(--dim-55)' }}>
                  For a film enquiry it helps to have: material and structure, thickness [µm], width [mm], reel diameter and weight,
                  print type and registration mark, bag drawing.
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Bag in a carton or case packing */}
          <Box id="karton" sx={{ mt: { xs: 6, md: 8 }, pt: { xs: 6, md: 8 }, borderTop: `1px solid ${BORDER}`, scrollMarginTop: '80px', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Cartons
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Bag in a carton or case packing?
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                These are different technologies — easy to confuse in an enquiry.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
                A standard VFFS machine forms a bag from film. When the bag has to go into a carton, Essegi offers{' '}
                <Box component="span" sx={{ fontWeight: 700, color: 'var(--dim-85)' }}>F1400 COMBINED</Box> — a machine that
                forms and fills the bag and then automatically inserts it into a carton. The film protects the product, the carton
                gives shape and protection in transport.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3.5 }}>
                {['5–25 kg', 'pillow / gusset', 'MEC 8–15 · SYNCRO 10–20 bags/min', 'film up to 1380 mm', 'bag up to 1280 × 670 mm'].map((chip) => (
                  <Box key={chip} sx={{ px: 1.5, py: 0.6, border: `1px solid ${BORDER}`, borderRadius: '3px', bgcolor: BG_CARD }}>
                    <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--dim-75)' }}>{chip}</Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                {CARTON_NEEDS.map((row, idx) => (
                  <Box key={row.need} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1.6fr' }, gap: { xs: 0.5, sm: 3 }, px: 3, py: 1.75, bgcolor: BG_CARD, borderBottom: idx < CARTON_NEEDS.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                    <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.5 }}>{row.need}</Typography>
                    <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.55 }}>{row.solution}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Integration with weighing ── */}
      <Box id="dozowanie" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Dosing and weighing
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                Integration with dosing systems
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                A VFFS machine is just one element of the packaging line. The key component is
                the dosing system that feeds the product at the correct weight or volume.
                MadejPak integrates Essegi machines with various weighing and dosing systems —
                selecting them to suit the product and required accuracy.
              </Typography>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                  gap: 2,
                }}
              >
                {[
                  {
                    title: 'Vibratory-fed weigher (B/V-K)',
                    desc: 'Vibratory channels feed the product into the weigh buckets. For fine granules and mixes in smaller portions — coffee, rice, seeds.',
                  },
                  {
                    title: 'Auger-fed weigher (B/2C-K)',
                    desc: 'Augers feed the powder coarsely and finely into the weighing unit. For flour, spices, milk powder, cement and premixes.',
                  },
                  {
                    title: 'Cup doser (DT)',
                    desc: 'Measures a fixed volume with cups — for rice, seeds, sugar and regular granules. The portion weight depends on the bulk density of the product.',
                  },
                  {
                    title: 'Auger doser (DV5000)',
                    desc: 'Doses a portion of powder by auger revolutions — for smaller powder portions. Flowability, feed condition and moisture matter.',
                  },
                  {
                    title: 'Belt-fed weigher (B/N-K)',
                    desc: 'For granules and free-flowing products — pellets, fertilisers, salt, seeds, building materials. Large portions, coarse and fine dosing.',
                  },
                  {
                    title: 'Multihead weigher',
                    desc: 'For mixes and irregular products — nuts, snacks, frozen foods. Combines portions from several heads to hit the target weight.',
                  },
                  {
                    title: 'Volumetric belt doser (DTS)',
                    desc: 'For soil, peat, bark and compost — when the portion is defined by volume in litres, not only by weight.',
                  },
                ].map((item) => (
                  <Box
                    key={item.title}
                    sx={{
                      p: 3,
                      bgcolor: BG_CARD,
                      border: `1px solid ${BORDER}`,
                      borderLeft: `3px solid ${BORDER}`,
                      borderRadius: '4px',
                      transition: 'border-left-color 0.15s ease',
                      '&:hover': { borderLeftColor: ACCENT },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: '0.88rem',
                        fontWeight: 700,
                        color: 'var(--dim-85)',
                        mb: 1,
                        lineHeight: 1.35,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>
                      {item.desc}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box sx={{ mt: 3, p: { xs: 2.5, md: 3 }, borderLeft: `3px solid ${ACCENT}`, bgcolor: 'var(--bg-card)', borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>Weighing or volumetric dosing?</Typography>
                <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.7, color: TEXT_DIM }}>
                  If the requirement is 15 kg net, the selection is based on weighing. If the product is sold e.g. in 20 l bags,
                  volumetric dosing may be right — but the same volume at a different bulk density does not have a constant weight.
                  Example: 15 kg of pellets at a density of 650 kg/m³ takes up approx. 23.1 l — that is the volume of the product
                  itself, not the bag size.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Machine selection ── */}
      <Box id="dobor" sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 6 }, maxWidth: 720 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Machine selection
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 2 }}>
              We match the machine to the product, not to the catalogue
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM }}>
              The catalogue output is only a starting point. How many bags per minute the line achieves depends on the product
              properties, the dosing system and the film. That is why before quoting we check:
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2, mb: { xs: 6, md: 8 } }}>
            {SELECTION_FACTORS.map((f, i) => (
              <Box key={f.title} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', color: ACCENT, mb: 1.25 }}>{String(i + 1).padStart(2, '0')}</Typography>
                <Typography variant="h3" sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1, lineHeight: 1.35 }}>{f.title}</Typography>
                <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{f.desc}</Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography variant="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.25rem' }, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', mb: 2.5 }}>
              From product to machine — a first direction
            </Typography>
            <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              <Box sx={{ display: { xs: 'none', md: 'grid' }, gridTemplateColumns: '1fr 1.6fr 1.4fr', gap: 3, px: 3, py: 1.5, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
                {['Product', 'First direction', 'What we look at'].map((h) => (
                  <Typography key={h} sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: TEXT_DIM }}>{h}</Typography>
                ))}
              </Box>
              {PRODUCT_FIT.map((row, idx) => (
                <Box key={row.product} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1.6fr 1.4fr' }, gap: { xs: 0.5, md: 3 }, px: 3, py: 1.75, bgcolor: BG_CARD, borderBottom: idx < PRODUCT_FIT.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                  <Typography sx={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.5 }}>{row.product}</Typography>
                  <Typography sx={{ fontSize: '0.84rem', color: 'var(--dim-75)', lineHeight: 1.55 }}>{row.direction}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.55 }}>{row.watch}</Typography>
                </Box>
              ))}
            </Box>
            <Typography sx={{ fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--dim-55)', mt: 1.5 }}>
              Indicative — machine version, dosing and output are confirmed after analysing the product.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 3, md: 10 }, alignItems: 'start', pt: { xs: 5, md: 6 }, borderTop: `1px solid ${BORDER}` }}>
            <Box>
              <Typography variant="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.25rem' }, fontWeight: 700, lineHeight: 1.3, letterSpacing: '-0.01em', mb: 1.5 }}>
                What to prepare for an enquiry
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM, mb: 2.5 }}>
                This is enough for us to point to the right model and dosing variant. A product sample, a photo of your current bag
                or a drawing, and photos of the line location also help.
              </Typography>
              <Box component={Link} href="/en/kontakt" sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                Go to the contact form →
              </Box>
            </Box>
            <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gap: 1.5 }}>
              {INQUIRY_CHECKLIST.map((item, i) => (
                <Box key={item.q} component="li" sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                  <Typography sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT, minWidth: 18 }}>{i + 1}.</Typography>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.6, color: TEXT_DIM }}>
                    <Box component="span" sx={{ fontWeight: 700, color: 'var(--dim-85)' }}>{item.q}</Box> — {item.hint}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Existing line? Typical problems ── */}
      <Box id="problemy" sx={{ bgcolor: BG_ALT, py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Upgrades and service
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Already have a line? These symptoms are where we start
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM, mb: 3 }}>
                Not every problem needs a new machine. The bottleneck is often in dosing, the film or at the end of the line — and
                that is where we start.
              </Typography>
              <Box component={Link} href="/en/serwis" sx={{ fontSize: '0.8rem', fontWeight: 700, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                MadejPak service →
              </Box>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2 }}>
              {LINE_PROBLEMS.map((p) => (
                <Box key={p.symptom} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 1 }}>{p.symptom}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.65, color: TEXT_DIM }}>{p.check}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Equipment and line integration ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 6 }, maxWidth: 720 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Equipment and integration
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 2 }}>
              More than a packaging machine
            </Typography>
            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM }}>
              We complement the Essegi machine with options from the manufacturer’s catalogue and build the rest of the line
              around it — from product supply to the wrapped pallet.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
              <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>Essegi machine options</Typography>
              <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-55)', mb: 2.5 }}>
                A catalogue option does not fit every model — we match it to the configuration.
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 2.5 }}>
                {MACHINE_OPTIONS.map((g) => (
                  <Box key={g.group}>
                    <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>{g.group}</Typography>
                    <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                      {g.items.map((it) => (
                        <Box key={it} component="li" sx={{ display: 'flex', gap: 1.25, mb: 0.75 }}>
                          <Box aria-hidden="true" sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'var(--dim-28)', flexShrink: 0, mt: '7px' }} />
                          <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.55, color: TEXT_DIM }}>{it}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              <Box sx={{ px: { xs: 3, md: 3.5 }, pt: { xs: 3, md: 3.5 }, pb: 2 }}>
                <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.5 }}>What we integrate around the machine</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-55)' }}>Design, build and commissioning — one partner for the whole line.</Typography>
              </Box>
              {LINE_INTEGRATION.map((g) => (
                <Box key={g.group} component={Link} href={g.href} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, px: { xs: 3, md: 3.5 }, py: 1.75, borderTop: `1px solid ${BORDER}`, textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: 'var(--surface-03)' }, '&:hover .int-link': { color: ACCENT } }}>
                  <Box>
                    <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.25 }}>{g.group}</Typography>
                    <Typography sx={{ fontSize: '0.78rem', lineHeight: 1.55, color: TEXT_DIM }}>{g.desc}</Typography>
                  </Box>
                  <Typography className="int-link" sx={{ fontSize: '0.72rem', fontWeight: 600, color: TEXT_DIM, whiteSpace: 'nowrap', transition: 'color 0.15s ease' }}>{g.link} →</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Case studies with Essegi machines ── */}
      <Box sx={{ bgcolor: BG_ALT, py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { sm: 'flex-end' }, justifyContent: 'space-between', gap: 3, mb: { xs: 5, md: 6 } }}>
            <Box sx={{ maxWidth: 640 }}>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Case studies
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-0.02em', mb: 1.5 }}>
                Essegi vertical machines at our customers
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.75, color: TEXT_DIM }}>
                Pellets, fertilisers, industrial chemicals, aggregates, seeds and snacks — lines we designed, integrated and service.
              </Typography>
            </Box>
            <Box component={Link} href="/en/realizacje" sx={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.04em', color: TEXT_DIM, textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { color: ACCENT } }}>
              All case studies →
            </Box>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2 }}>
            {ESSEGI_CASES.map((c) => (
              <Box key={c.slug} component={Link} href={`/en/realizacje/${c.slug}`} sx={{ display: 'flex', flexDirection: 'column', p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: '2px solid var(--surface-08)', borderRadius: '4px', textDecoration: 'none', transition: 'border-color 0.15s ease', '&:hover': { borderTopColor: ACCENT, borderColor: 'var(--surface-13)' }, '&:hover .case-more': { color: ACCENT } }}>
                <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1.25 }}>{c.industry}</Typography>
                <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.75 }}>{c.client}</Typography>
                <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.6, color: TEXT_DIM, mb: 2, flex: 1 }}>{c.title}</Typography>
                <Typography className="case-more" sx={{ fontSize: '0.75rem', fontWeight: 600, color: TEXT_DIM, transition: 'color 0.15s ease' }}>View case study →</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Partners ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography
            sx={{
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: ACCENT,
              mb: 5,
            }}
          >
            Technology partners
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {[
              {
                name: 'Essegi',
                country: 'Italy (Galliera Veneta)',
                scope: 'Vertical VFFS packaging machines',
                desc: 'Italian manufacturer of VFFS machines with over 30 years of experience. Essegi specialises in vertical form-fill-seal machines for food, chemical, construction and horticultural products. The company offers a wide machine family (F700, F1000, F1200, F8004S) with the ability to select the dosing system to suit the product.',
                href: 'https://www.essegi.com',
              },
              {
                name: 'Concetti',
                country: 'Italy',
                scope: 'FFS systems, bagging, palletising',
                desc: 'Concetti designs complete bagging lines: FFS systems from PE tubular film (FFS-E, CONTINUA — bags 10–50 kg depending on the system), machines for pre-made open-mouth bags, big-bag systems and palletisers — for the chemical, construction and agri-food industries.',
                href: 'https://www.concetti.com',
              },
            ].map((p) => (
              <Box
                key={p.name}
                sx={{
                  p: { xs: 3.5, md: 4 },
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: '4px',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: 2,
                    mb: 2.5,
                    flexWrap: 'wrap',
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '1.05rem',
                        fontWeight: 800,
                        color: 'var(--dim-85)',
                        letterSpacing: '-0.02em',
                        mb: 0.5,
                      }}
                    >
                      {p.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: 'var(--dim-42)' }}>
                      {p.country}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      px: 1.5,
                      py: 0.4,
                      bgcolor: `${ACCENT}15`,
                      border: `1px solid ${ACCENT}40`,
                      borderRadius: '3px',
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      color: ACCENT,
                      letterSpacing: '0.06em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {p.scope}
                  </Box>
                </Box>
                <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                  {p.desc}
                </Typography>
                <Box
                  component="a"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                    fontSize: '0.75rem',
                    color: 'var(--dim-42)',
                    textDecoration: 'none',
                    transition: 'color 0.15s ease',
                    '&:hover': { color: TEXT_DIM },
                  }}
                >
                  {p.href.replace('https://', '')}
                  <Box
                    component="svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    sx={{ width: 11, height: 11 }}
                  >
                    <path
                      d="M6 3H3v10h10v-3M9 3h4v4M13 3l-6 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── FAQ and glossary ── */}
      <Box id="faq" sx={{ bgcolor: BG_ALT, py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}`, scrollMarginTop: '80px' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                FAQ
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Frequently asked questions about vertical machines
              </Typography>
            </Box>
            <Box>
              {FAQ.map((f, idx) => (
                <Box key={f.q} component="details" sx={{ borderTop: idx === 0 ? `1px solid ${BORDER}` : 'none', borderBottom: `1px solid ${BORDER}`, '& summary': { listStyle: 'none', cursor: 'pointer' }, '& summary::-webkit-details-marker': { display: 'none' }, '&[open] .faq-icon': { transform: 'rotate(45deg)' } }}>
                  <Box component="summary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, py: 2.25 }}>
                    <Typography variant="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.4 }}>{f.q}</Typography>
                    <Box className="faq-icon" aria-hidden="true" sx={{ color: ACCENT, fontSize: '1.3rem', lineHeight: 1, flexShrink: 0, transition: 'transform 0.2s ease' }}>+</Box>
                  </Box>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM, pb: 2.5, pr: { md: 6 } }}>{f.a}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Glossary */}
          <Box sx={{ mt: { xs: 6, md: 8 }, pt: { xs: 6, md: 8 }, borderTop: `1px solid ${BORDER}`, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Glossary
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Terms you will hear from a process engineer
              </Typography>
            </Box>
            <Box component="dl" sx={{ m: 0, display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, columnGap: 4, rowGap: 2.5 }}>
              {GLOSSARY.map((g) => (
                <Box key={g.term}>
                  <Box component="dt" sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--dim-85)', mb: 0.25 }}>{g.term}</Box>
                  <Box component="dd" sx={{ m: 0, fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>{g.def}</Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Why MadejPak (authorized integrator vs random importer) ── */}
      <TrustDifferentiator lang="en" />

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 12 },
              alignItems: 'center',
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Machine selection
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  mb: 2.5,
                }}
              >
                We will match a machine
                to your product and process
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                The choice of VFFS machine depends on the product, dosing system, required throughput
                and bag format. Contact us — we will help select the right Essegi series
                and integrate it with your line.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={Link}
                  href="/en/kontakt"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3.5,
                    py: 1.5,
                    bgcolor: ACCENT,
                    borderRadius: '3px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: '#D45509' },
                  }}
                >
                  Send an enquiry
                  <ArrowRight />
                </Box>
                <Box
                  component={Link}
                  href="/en/realizacje"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3.5,
                    py: 1.5,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '3px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: TEXT_DIM,
                    textDecoration: 'none',
                    transition: 'border-color 0.15s ease, color 0.15s ease',
                    '&:hover': {
                      borderColor: 'var(--dim-20)',
                      color: 'var(--dim-85)',
                    },
                  }}
                >
                  Case studies
                  <ArrowRight />
                </Box>
              </Box>
            </Box>

            {/* Quick summary */}
            <Box
              sx={{
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ACCENT}`,
                borderRadius: '4px',
                p: { xs: 3.5, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 3,
                }}
              >
                VFFS offering summary
              </Typography>
              {[
                'Essegi F700 — food, 50 g – 3 kg, max 320×420 mm',
                'Essegi F1000 — pellets, granules, powders, building materials',
                'Essegi F1200/F1300 — large 5–50 kg bags: feed, fertilisers, soil, bark',
                'Essegi F8004S — Stabilo bags, 50 g – 5 kg',
                'Essegi F1400 COMBINED — bag in a carton (bag-in-box), 5–25 kg',
                'Essegi W1200 Fluid — liquid products',
                'Concetti FFS-E / CONTINUA — industrial bags 10–50 kg',
              ].map((item) => (
                <Box
                  key={item}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    py: 0.85,
                    borderBottom: `1px solid ${BORDER}`,
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      bgcolor: ACCENT,
                      flexShrink: 0,
                      mt: '6px',
                    }}
                  />
                  <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Machines</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny/partnerzy" style={{ color: 'inherit', textDecoration: 'none' }}>Partner machines</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Vertical VFFS packaging machines</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
