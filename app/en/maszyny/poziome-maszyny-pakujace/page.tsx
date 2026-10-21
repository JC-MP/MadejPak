import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';
import LeadFormEn from './LeadFormEn';

export const metadata: Metadata = {
  title: 'Horizontal Flow Wrap Packaging Machines GSP',
  description:
    'Horizontal flow wrap machines GSP: model comparison 45 S–600 EVO, BB and box motion versions, options and selection by product. Up to 400 packs/min — MadejPak.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace`,
    title:       'Horizontal Flow Wrap Packaging Machines GSP | MadejPak',
    description: 'Horizontal flow wrap machines GSP from MadejPak. S series and EVO series (MAP, box motion). Food, cosmetics and industrial packaging.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Horizontal Flow Wrap Machines – MadejPak' }],
  },
};

const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
        letterSpacing: '-0.03em', color: ACCENT, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>
        {label}
      </Typography>
    </Box>
  );
}

interface ModelSpec { label: string; value: string }
interface MachineModel {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  specs: ModelSpec[];
  features: string[];
  products: string[];
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

function ModelCard({ model }: { model: MachineModel }) {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '340px 1fr' },
      border: `1px solid ${BORDER}`,
      borderRadius: '4px',
      overflow: 'hidden',
      bgcolor: BG_CARD,
    }}>
      <Box sx={{
        position: 'relative',
        minHeight: { xs: 220, md: 'auto' },
        background: 'linear-gradient(160deg, #1F1F21 0%, #252527 100%)',
        flexShrink: 0,
      }}>
        <Image src={model.imageSrc} alt={model.imageAlt} fill
          sizes="(max-width: 900px) 100vw, 340px"
          style={{ objectFit: 'cover' }} />
        {model.badge && (
          <Box sx={{
            position: 'absolute', top: 16, left: 16,
            px: 1.5, py: 0.5,
            bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`,
            borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT,
          }}>
            {model.badge}
          </Box>
        )}
      </Box>

      <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box>
          <Typography component="h3" sx={{
            fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 0.5,
          }}>
            {model.name}
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', color: ACCENT, fontWeight: 600 }}>
            {model.tagline}
          </Typography>
        </Box>

        <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7 }}>
          {model.description}
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 1.5 }}>
          {model.specs.map((s) => (
            <Box key={s.label} sx={{
              px: 1.5, py: 1.25,
              bgcolor: 'var(--surface-03)', border: `1px solid ${BORDER}`, borderRadius: '3px',
            }}>
              <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--dim-28)', mb: 0.4 }}>
                {s.label}
              </Typography>
              <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>
                {s.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box>
          <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--dim-28)', mb: 1 }}>
            Typical products
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {model.products.map((p) => (
              <Box key={p} sx={{
                px: 1.25, py: 0.35,
                bgcolor: 'var(--surface-04)', border: `1px solid ${BORDER}`,
                borderRadius: '2px', fontSize: '0.72rem', color: TEXT_DIM,
              }}>
                {p}
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {model.features.map((f) => (
            <Box key={f} sx={{
              px: 1.25, py: 0.35,
              bgcolor: ACCENT,
              borderRadius: '2px', fontSize: '0.7rem', color: '#fff',
            }}>
              {f}
            </Box>
          ))}
        </Box>

        {model.href && (
          <Box>
            <Box component={Link} href={model.href}
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75,
                fontSize: '0.82rem', fontWeight: 700, color: ACCENT, textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' } }}>
              Model details →
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

const MODELS: MachineModel[] = [
  {
    id: 'gsp45s',
    name: 'GSP 45 S',
    href: '/en/maszyny/poziome-maszyny-pakujace/gsp-45-s',
    badge: 'New model',
    tagline: 'Compact flow pack — versatile and easy to operate',
    description:
      'Electronic horizontal pillow pack wrapper with cantilever frame construction. Compact design works equally well in food and non-food industries. Simple operation and easy format changeover — a great entry point for packaging automation.',
    specs: [
      { label: 'Frame', value: 'Cantilever' },
      { label: 'Application', value: 'Food & non-food' },
    ],
    features: ['Electronic control', 'Cantilever frame', 'Easy format change', 'Heat-seal films'],
    products: ['Bars', 'Biscuits', 'Soap', 'Cosmetics', 'Technical components'],
    imageSrc: '/images/machines/flowpack-gsp45s.jpg',
    imageAlt: 'GSP 45 S – compact flow pack machine',
  },
  {
    id: 'gsp50s',
    name: 'GSP 50 S',
    href: '/en/maszyny/poziome-maszyny-pakujace/gsp-50-s',
    tagline: 'Versatile flow wrap for a wider range of products',
    description:
      'Electronic horizontal wrapper with cantilever frame — larger format than GSP 45 S, equally simple to operate. Proven in food and non-food industries. Handles a wide range of product shapes and sizes.',
    specs: [
      { label: 'Frame', value: 'Cantilever' },
      { label: 'Application', value: 'Food & non-food' },
    ],
    features: ['Electronic control', 'Cantilever frame', 'Wide format range', 'Heat-seal & cold-seal films'],
    products: ['Bread', 'Cheese', 'Vegetables', 'Cosmetics', 'DIY articles'],
    imageSrc: '/images/machines/flowpack-gsp50s.jpg',
    imageAlt: 'GSP 50 S – flow pack machine',
  },
  {
    id: 'gsp55s',
    name: 'GSP 55 S',
    href: '/en/maszyny/poziome-maszyny-pakujace/gsp-55-s',
    badge: 'Most popular',
    tagline: 'High throughput and multi-axis loader support',
    description:
      'Electronic horizontal wrapper with cantilever frame — supports multi-axis loaders, enabling integration with sorters, vibratory tables and automatic feeding systems. Ideal for building complete production lines.',
    specs: [
      { label: 'Frame', value: 'Cantilever' },
      { label: 'Loaders', value: 'Multi-axis' },
      { label: 'Application', value: 'Food & non-food' },
    ],
    features: ['Electronic control', 'Multi-axis loader support', 'Production line integration', 'Cantilever frame'],
    products: ['Bread & pastries', 'Chocolate', 'Dairy', 'Fruit & vegetables', 'Chemical products'],
    imageSrc: '/images/machines/flowpack-gsp55s.jpg',
    imageAlt: 'GSP 55 S – flow pack with multi-axis loaders',
  },
  {
    id: 'gsp55sbb',
    name: 'GSP 55 S BB',
    badge: 'New model',
    tagline: 'Film fed from below — for delicate and unstable products',
    description:
      'BB version (Italian: bobina bassa) — the film reel sits at the bottom of the machine and the film is fed from below. Worth considering for delicate or unstable products, or products that are hard to move with pushers. Up to 150 packs/min, product 10–250 × 1–120 × 60–600 mm.',
    specs: [
      { label: 'Film reel', value: 'At the bottom (BB — bobina bassa)' },
      { label: 'Throughput', value: 'up to 150 packs/min' },
      { label: 'Application', value: 'Food & non-food' },
    ],
    features: ['Film fed from below (BB)', 'Delicate and unstable products', 'Electronic control', 'Film 520 / 720 / 920 mm'],
    products: ['Confectionery', 'Cosmetics', 'Premium products', 'Bread', 'Cheese'],
    imageSrc: '/images/machines/flowpack-gsp55sbb.jpg',
    imageAlt: 'GSP 55 S BB – flow pack with film fed from below',
  },
  {
    id: 'gsp75s',
    name: 'GSP 75 S',
    badge: 'Highest throughput',
    tagline: 'Up to 400 packs/min — robust design for automatic lines',
    description:
      'The fastest machine in the GSP range — up to 400 packs/min. A robust cantilever frame and a stable film unwinder are built for automatic lines, including intensive use. Tiltable longitudinal sealing units allow high-speed sealing, including gas-tight seals. Supports multi-axis loaders.',
    specs: [
      { label: 'Throughput', value: 'up to 400 packs/min' },
      { label: 'Long. seal unit', value: 'Tiltable sealing units' },
      { label: 'Loaders', value: 'Multi-axis' },
    ],
    features: ['Up to 400 packs/min', 'Tiltable longitudinal sealing units', 'Built for automatic lines', 'Standard & gas-barrier films'],
    products: ['Biscuits & wafers', 'Bars & chocolate', 'FMCG products', 'Industrial articles'],
    imageSrc: '/images/machines/flowpack-gsp75s.jpg',
    imageAlt: 'GSP 75 S – high throughput robust flow pack',
  },
  {
    id: 'gsp65evo',
    name: 'GSP 65 EVO',
    href: '/en/maszyny/poziome-maszyny-pakujace/gsp-65-evo',
    badge: 'Modified atmosphere',
    tagline: 'MAP and box motion — industrial hermetic packaging',
    description:
      'Industrial MAP (Modified Atmosphere Packaging) machine with electronically controlled box motion jaw system — jaws move together with the film, which extends the sealing time and supports tight seals, also with variable pack length. Handles large, tall and in-chain products. Available with gas flushing (N₂/CO₂) or aroma spraying. PE and polyolefin films.',
    specs: [
      { label: 'Cross seal', value: 'Box motion (electronic)' },
      { label: 'Packaging', value: 'MAP (modified atmosphere)' },
      { label: 'Bag length', value: 'Variable' },
    ],
    features: ['Box motion – electronic sealing jaws', 'N₂/CO₂ gas flushing (MAP)', 'Aroma spraying (option)', 'Hermetic packaging', 'PE & polyolefin films', 'Variable bag length'],
    products: ['Fresh meat & fish', 'Cheese & dairy', 'Ready meals', 'Large & tall products', 'In-chain products'],
    imageSrc: '/images/machines/flowpack-gsp65evo.jpg',
    imageAlt: 'GSP 65 EVO – MAP box motion packaging',
  },
  {
    id: 'gsp65evobb',
    name: 'GSP 65 EVO BB',
    badge: 'New model',
    tagline: 'MAP and box motion with film fed from below',
    description:
      'BB version of the GSP 65 EVO — film reel at the bottom of the machine, film fed from below. Combines modified atmosphere packaging (MAP) with box motion sealing — for larger and delicate products that need proper sealing.',
    specs: [
      { label: 'Cross seal', value: 'Box motion (electronic)' },
      { label: 'Film reel', value: 'At the bottom (BB — bobina bassa)' },
      { label: 'Packaging', value: 'MAP (modified atmosphere)' },
    ],
    features: ['Box motion – electronic sealing jaws', 'Film fed from below (BB)', 'N₂/CO₂ gas flushing (MAP)', 'PE & polyolefin films'],
    products: ['Fresh meat & fish', 'Premium cheeses', 'Ready meals', 'Tall & large products'],
    imageSrc: '/images/machines/flowpack-gsp65evobb.jpg',
    imageAlt: 'GSP 65 EVO BB – MAP, box motion, film fed from below',
  },
  {
    id: 'gsp600trbbe',
    name: 'GSP 600 TR BB-E',
    tagline: 'MAP for large products — box motion and film fed from below',
    description:
      'Industrial machine for long-shelf-life products packed with gas injection (MAP). BB version — film reel at the bottom, film fed from below — with an electronically controlled traversing cross seal. For large, tall and overlapping products, up to 80/90 packs/min. Polyethylene and polyolefin films.',
    specs: [
      { label: 'Film reel', value: 'At the bottom (BB — bobina bassa)' },
      { label: 'Packaging', value: 'MAP (modified atmosphere)' },
      { label: 'Cross seal', value: 'Box motion (electronic)' },
    ],
    features: ['Film fed from below (BB)', 'Box motion – electronic cross seal', 'Gas flushing (MAP)', 'Product up to 280 × 200 × 2000 mm', 'PE & polyolefin films'],
    products: ['Large meat cuts', 'Fish & seafood', 'Large MAP products', 'In-chain products'],
    imageSrc: '/images/machines/flowpack-gsp600trbbe.jpg',
    imageAlt: 'GSP 600 TR BB-E – MAP for large products',
  },
];

const HOW_WORKS = [
  { num: '01', title: 'Tube forming', desc: 'Film from the reel passes through the forming collar — a continuous film tube is created matched to the product width.' },
  { num: '02', title: 'Product infeed', desc: 'Product is fed manually or by an automatic feeding system directly into the film tube.' },
  { num: '03', title: 'Longitudinal seal', desc: 'Side sealing seam closing the tube around the product — performed continuously by a pair of sealing rollers.' },
  { num: '04', title: 'Cross seal & cut', desc: 'Sealing jaws close the package at the front and rear of the product; a knife cuts off the finished pack.' },
];

const SECTORS = [
  { name: 'Food', items: ['Bread & pastries', 'Chocolate & confectionery', 'Dairy & cheeses', 'Fruit & vegetables', 'Frozen products'] },
  { name: 'Pharma / OTC', items: ['Blister packaging', 'Hygiene products', 'Dietary supplements', 'Medical materials'] },
  { name: 'Chemical / FMCG', items: ['Soap & cosmetics', 'Cleaning agents', 'Household items', 'Technical chemicals'] },
  { name: 'Industrial', items: ['Small components', 'Tools & accessories', 'DIY articles', 'Electronic components'] },
];

// ─── Comparison and selection (source: GSP product cards; catalogue data, not a guarantee) ───
const COMPARE = [
  { model: 'GSP 45 S', href: '/en/maszyny/poziome-maszyny-pakujace/gsp-45-s', speed: 'up to 150', size: '20–200 × 1–100 × 50–600', feature: 'Basic, compact machine', when: 'Simple wrapping of single products' },
  { model: 'GSP 50 S', href: '/en/maszyny/poziome-maszyny-pakujace/gsp-50-s', speed: 'up to 150', size: '10–250 × 1–120 × up to 600', feature: 'Larger size range than the 45 S', when: 'Versatile food and industrial applications' },
  { model: 'GSP 55 S', href: '/en/maszyny/poziome-maszyny-pakujace/gsp-55-s', speed: 'up to 200', size: '10–250 × 1–120 × 60–600', feature: 'Higher output and more upgrade options', when: 'Automatic lines, biscuits, bars, baked goods' },
  { model: 'GSP 55 S BB', href: null, speed: 'up to 150', size: '10–250 × 1–120 × 60–600', feature: 'Film fed from below', when: 'Delicate, unstable or hard-to-push products' },
  { model: 'GSP 65 EVO', href: '/en/maszyny/poziome-maszyny-pakujace/gsp-65-evo', speed: 'up to 60/70', size: '10–280 × 1–200 × 50–2000', feature: 'Box motion — longer cross seal', when: 'Large products, MAP, PE and polyolefin films' },
  { model: 'GSP 65 EVO BB', href: null, speed: 'up to 60/70', size: '10–280 × 1–200 × 50–2000', feature: 'Box motion + film from below', when: 'Larger, delicate products needing a good seal' },
  { model: 'GSP 75 S', href: null, speed: 'up to 400', size: '10–250 × 1–120 × 60–600', feature: 'Highest output', when: 'Fast lines with automatic infeed' },
  { model: 'GSP 600 EVO', href: null, speed: 'up to 80/90', size: '10–280 × 1–200 × 50–2000', feature: 'Large products, box motion', when: 'Long products, MAP, demanding films' },
  { model: 'GSP 600 TR BB-E', href: null, speed: 'up to 80/90', size: '10–280 × 1–200 × 50–2000', feature: 'Box motion + film from below', when: 'Large products needing special handling' },
];

const QUICK_SELECT = [
  { need: 'Standard single product', pick: 'GSP 45 S or 50 S' },
  { need: 'High output', pick: 'GSP 55 S or 75 S' },
  { need: 'Delicate or unstable product', pick: 'GSP 55 S BB' },
  { need: 'Large, long or tall product', pick: 'GSP 65 EVO or 600 EVO' },
  { need: 'Large and delicate product', pick: 'GSP 65 EVO BB or 600 TR BB-E' },
];

const TECH_DIFFS = [
  { title: 'Standard or BB?', desc: 'BB (Italian: bobina bassa) is the version with the film reel at the bottom — the film is fed from below. It is worth considering for products that are hard to move with pushers or deform easily. The choice depends on trials and the feeder design.' },
  { title: 'Rotary jaws or box motion?', desc: 'In standard applications the cross seal is made by rotary jaws. With box motion the jaws move together with the film, which extends the contact time — important for some PE films, tall products and packs that need a tighter seal.' },
  { title: 'GSP 55 S or GSP 65 EVO?', desc: 'The 55 S has a higher catalogue maximum output, but the 65 EVO handles larger products and applications that need longer sealing. We never choose a model on packs per minute alone.' },
];

const OPTIONS = [
  { name: 'Automatic product infeed', why: 'Less manual handling; can be integrated with a cobot or another system.' },
  { name: 'Registration-mark photocell', why: 'Positioning of printed film.' },
  { name: 'No product – no bag', why: 'Reduces empty packs when product is missing.' },
  { name: 'PE film kit', why: 'Sealing adapted to polyethylene.' },
  { name: 'Modified atmosphere packaging (MAP)', why: 'Protective gas introduced into the pack.' },
  { name: 'Side gusset forming', why: 'Changes the shape of the pack.' },
  { name: 'Printer', why: 'Date, batch or other markings.' },
  { name: 'Automatic film splicing', why: 'Shorter stoppage at the end of a reel.' },
  { name: 'Product misposition sensor', why: 'Lower risk of sealing the film onto the product.' },
];

const INQUIRY_QUESTIONS = [
  { q: 'What do we pack?', hint: 'product type, dimensions, weight, fragility, how it is arranged' },
  { q: 'How many pieces per minute?', hint: 'required output and number of products per pack' },
  { q: 'What film?', hint: 'type, thickness, width, print, MAP if needed' },
  { q: 'How does the product reach the machine?', hint: 'manually, from a conveyor, in stacks, from several lanes or via an automatic system' },
  { q: 'What happens to the finished pack?', hint: 'inspection, conveying, case packing, palletising' },
];

const BEYOND_MACHINE = [
  { label: 'Robotics and cobots', href: '/en/maszyny/robotyzacja-pakowania' },
  { label: 'Conveying and end of line', href: '/en/maszyny/transport-i-koniec-linii' },
  { label: 'Palletising', href: '/en/maszyny/paletyzacja' },
];

const PAGE_TOC = [
  { label: 'How it works', href: '#jak-dziala' },
  { label: 'Models', href: '#models' },
  { label: 'Comparison and selection', href: '#porownanie' },
  { label: 'BB and box motion', href: '#technologia' },
  { label: 'Options', href: '#opcje' },
  { label: 'Enquiry', href: '#zapytanie' },
  { label: 'FAQ', href: '#faq' },
];

// FAQ — text visible on the page and in the FAQPage schema (must be identical)
const FAQ = [
  { q: 'How many packs per minute does a flow pack machine make?', a: 'In the catalogue, from 60/70 packs/min on box motion models (GSP 65 EVO) up to 400 packs/min on the GSP 75 S. These are maximum values — real output depends on the product, film, infeed and pack discharge. We confirm it after selection and trials.' },
  { q: 'What is the difference between the BB and the standard version?', a: 'BB (Italian: bobina bassa) means the film reel is at the bottom — the film is fed from below. It is worth considering for delicate or unstable products, or products that are hard to move with pushers. Trials and the feeder design decide.' },
  { q: 'What is box motion?', a: 'A cross-sealing system in which the jaws move together with the film, so they stay in contact with it longer. It matters for PE and polyolefin films, tall products and packs that need a tight seal, e.g. modified atmosphere packs. Standard models use rotary jaws.' },
  { q: 'Can I pack in a modified atmosphere (MAP)?', a: 'Yes. The EVO models — GSP 65 EVO, 600 EVO and 600 TR BB-E — are designed for long-shelf-life products packed in a modified atmosphere with gas injection. MAP also requires a suitable film and a tight seal.' },
  { q: 'Which films does a flow pack machine handle?', a: 'Heat-sealable and laminated films, cold-seal films and, on selected models, polyethylene (PE), polyolefin films and cast polypropylene. A dedicated sealing kit is used for PE film. We confirm film compatibility for the specific model.' },
  { q: 'GSP 55 S or GSP 65 EVO?', a: 'The GSP 55 S has a higher catalogue output (up to 200 packs/min), but the GSP 65 EVO handles larger products (up to 280 × 200 × 2000 mm) and applications that need longer sealing, such as MAP and PE films. We choose the model by product and film, not just packs per minute.' },
  { q: 'Can the product be fed automatically, e.g. by a cobot?', a: 'Yes. Besides the GSP machine we design automatic product infeed — including with cobots — and, after the machine, pack discharge, case packing and palletising.' },
  { q: 'What should I prepare for a quote request?', a: 'Product type, dimensions, weight and fragility, the required output, the film (thickness, width, print, MAP if needed), how the product reaches the machine and what happens to the finished pack.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MadejPak', item: `${SITE_URL}/en` },
        { '@type': 'ListItem', position: 2, name: 'Machines', item: `${SITE_URL}/en/maszyny` },
        { '@type': 'ListItem', position: 3, name: 'Horizontal packaging machines', item: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace` },
      ],
    },
  ],
};

export default function HorizontalMachinesPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── 1. HERO ── */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '50%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              'linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)',
              'linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)',
            ].join(', '),
          }} />
          <Image src="/images/machines/flowpack-gsp-55s-page.jpg" alt="" fill
            sizes="50vw" style={{ objectFit: 'cover', opacity: 0.45 }} priority />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                GSP – Tecnopack Group — flow pack
              </Typography>
              <Typography component="h1" sx={{
                fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
                fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 3,
              }}>
                Horizontal packaging<br />machines — Flow Pack.
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 540, mb: 4 }}>
                Horizontal flow wrappers form packaging from a film reel and wrap the product
                in a sealed film bag. Proven in food, OTC and industrial product packaging —
                from laboratory-scale throughput to multi-lane production lines.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button component="a" href="#models" variant="contained" disableElevation
                  sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                    textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                    '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                  View models
                </Button>
                <Button component={Link} href="/en/kontakt" variant="outlined"
                  sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)',
                    fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5,
                    borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                  Send enquiry
                </Button>
              </Stack>
            </Box>

            <Box sx={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
              p: { xs: 3, md: 3.5 },
              bgcolor: '#fff',
              border: `1px solid ${BORDER}`, borderRadius: '4px',
            }}>
              <StatChip value="400" label="packs/min – max throughput" />
              <StatChip value="8" label="GSP models in offer" />
              <StatChip value="MAP" label="modified atmosphere packaging" />
              <StatChip value="920mm" label="max film width" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── On this page ── */}
      <Box component="nav" aria-label="On this page" sx={{ borderBottom: `1px solid ${BORDER}`, py: 2 }}>
        <Container maxWidth="xl">
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

      {/* ── What is a flow pack ── */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                What this machine does
              </Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3, color: 'var(--text)' }}>
                Have a product you want to wrap in film — securely, neatly and fast?
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8 }}>
                A horizontal packaging machine (flow pack) takes the product from the infeed, wraps it in film from a reel, forms the package and seals both ends — all in one continuous motion. The output is a ready, sealed film pack, one after another, at a constant rate.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                When this solution is right for you
              </Typography>
              {[
                'Your product has a consistent shape and can be fed onto a conveyor — bar, roll, cheese, confectionery, OTC product, industrial part.',
                'You want clean, attractive film packaging — the machine wraps the product tightly on all sides.',
                'You are packaging manually and want to replace that with automation — one machine replaces several workstations.',
                'Throughput matters — flow packs can seal hundreds of products per minute.',
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

      {/* ── 2. HOW IT WORKS ── */}
      <Box id="jak-dziala" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Operating principle
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 },
          }}>
            How does a flow pack machine work?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {HOW_WORKS.map((step) => (
              <Box key={step.num} sx={{
                p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}22`,
              }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT,
                  letterSpacing: '-0.04em', lineHeight: 1, mb: 2, opacity: 0.6 }}>
                  {step.num}
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                  {step.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── VIDEOS ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Machines in action
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 },
          }}>
            See the GSP machines at work
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
            {['KwhZzYt-AlE', 'Ax-48tS95z8'].map(id => (
              <Box key={id} sx={{
                position: 'relative', paddingTop: '56.25%',
                borderRadius: '4px', overflow: 'hidden',
                border: `1px solid ${BORDER}`, bgcolor: '#000',
              }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={`GSP flow pack packaging machine – ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 3. MODELS ── */}
      <Box id="models" component="section"
        sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 }, scrollMarginTop: { xs: 64, lg: 72 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Machine models
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            GSP – Tecnopack Group machines at MadejPak
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Stack>
        </Container>
      </Box>

      <Box id="zapytaj" sx={{ scrollMarginTop: '80px' }}>
        <LeadFormEn />
      </Box>

      {/* ── 4. SECTORS ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Applications
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Sectors and products
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {SECTORS.map((sector) => (
              <Box key={sector.name} sx={{
                p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}`,
              }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                  {sector.name}
                </Typography>
                <Stack spacing={0.75}>
                  {sector.items.map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 5. PACK TYPES ── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Pack types
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Flow pack formats
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {[
              {
                name: 'Pillow bag',
                desc: 'Classic flow pack — sealed film bag with longitudinal and cross seals. Simple to produce, film-efficient. The most popular format for food and consumer goods.',
                films: 'PP, OPP, PE, metallic laminates',
              },
              {
                name: 'Gusseted pack',
                desc: 'Pack with side or bottom gusset — increased volume with the same film consumption. Used for irregularly shaped products or those requiring larger packaging capacity.',
                films: 'PP, OPP, multi-layer films',
              },
              {
                name: 'Shrink wrap',
                desc: 'Product wrapped in heat-shrink film that contracts tightly around the product after passing through a shrink tunnel. Used for group packaging and see-through product display.',
                films: 'POF (polyolefin), PE shrink',
              },
            ].map((item) => (
              <Box key={item.name} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
                borderRadius: '4px',
                '&:hover': { borderTopColor: ACCENT },
                transition: 'border-color 0.2s ease',
              }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                  {item.desc}
                </Typography>
                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 1.5 }}>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--dim-28)', mb: 0.5 }}>
                    Films
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM }}>
                    {item.films}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── COMPARISON AND SELECTION ── */}
      <Box id="porownanie" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 760 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Model comparison</Typography>
            <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Which GSP machine should you choose?</Typography>
            <Typography sx={{ fontSize: '0.92rem', color: TEXT_DIM, lineHeight: 1.75, mt: 2 }}>
              The whole range of GSP horizontal machines at a glance. Dimensions refer to the product (width × height × length),
              not the finished pack.
            </Typography>
          </Box>
          <Box sx={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '4px', bgcolor: BG_CARD }}>
            <Box component="table" sx={{ width: '100%', minWidth: 860, borderCollapse: 'collapse', '& th': { textAlign: 'left', px: 2.5, py: 1.5, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: TEXT_DIM, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }, '& td': { px: 2.5, py: 1.75, fontSize: '0.84rem', lineHeight: 1.5, borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' }, '& tr:last-of-type td': { borderBottom: 'none' } }}>
              <thead>
                <tr><th>Model</th><th>Max output (packs/min)</th><th>Product [mm]</th><th>Key feature</th><th>When to consider</th></tr>
              </thead>
              <tbody>
                {COMPARE.map((m) => (
                  <tr key={m.model}>
                    <Box component="td" sx={{ fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap' }}>
                      {m.href ? (
                        <Box component={Link} href={m.href} sx={{ color: 'inherit', textDecoration: 'none', borderBottom: `1px solid ${ACCENT}`, '&:hover': { color: ACCENT } }}>{m.model}</Box>
                      ) : m.model}
                    </Box>
                    <Box component="td" sx={{ fontWeight: 700, color: ACCENT, whiteSpace: 'nowrap' }}>{m.speed}</Box>
                    <Box component="td" sx={{ color: 'var(--dim-75)', whiteSpace: 'nowrap' }}>{m.size}</Box>
                    <Box component="td" sx={{ color: 'var(--dim-75)' }}>{m.feature}</Box>
                    <Box component="td" sx={{ color: TEXT_DIM }}>{m.when}</Box>
                  </tr>
                ))}
              </tbody>
            </Box>
          </Box>
          <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-55)', lineHeight: 1.6, mt: 1.5, maxWidth: 900 }}>
            Outputs are catalogue maximums, not a guarantee for a specific product. For EVO models the manufacturer states output as
            “60/70” or “80/90” — we confirm the value for your product after selection. All models need 7 bar compressed air
            (dry, filtered).
          </Typography>

          {/* Selection in 30 seconds */}
          <Box sx={{ mt: { xs: 6, md: 8 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '300px 1fr' }, gap: { xs: 3, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography component="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.3rem' }, fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--text)', mb: 1.25 }}>
                Selection in 30 seconds
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                A first direction based on the product’s main requirement. It does not replace checking parameters and packing trials.
              </Typography>
            </Box>
            <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              {QUICK_SELECT.map((r, idx) => (
                <Box key={r.need} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1.2fr 1fr' }, gap: { xs: 0.5, sm: 3 }, px: 3, py: 1.75, bgcolor: BG_CARD, borderBottom: idx < QUICK_SELECT.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                  <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM }}>{r.need}</Typography>
                  <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>→ {r.pick}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── TECHNOLOGY DIFFERENCES ── */}
      <Box id="technologia" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 760 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Technology differences</Typography>
            <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>BB, box motion and model choice — what to know</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {TECH_DIFFS.map((t) => (
              <Box key={t.title} sx={{ p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Typography component="h3" sx={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)', mb: 1.25 }}>{t.title}</Typography>
                <Typography sx={{ fontSize: '0.86rem', color: TEXT_DIM, lineHeight: 1.75 }}>{t.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── OPTIONS ── */}
      <Box id="opcje" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '300px 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Equipment</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Most popular options</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.7, mt: 2 }}>
                We check the availability of each option for the selected model and variant.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
              {OPTIONS.map((o) => (
                <Box key={o.name} sx={{ p: 2.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography component="h3" sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', mb: 0.75, lineHeight: 1.35 }}>{o.name}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.6 }}>{o.why}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── ENQUIRY + MORE THAN A MACHINE ── */}
      <Box id="zapytanie" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Quote request</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Five questions we start with</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75, mt: 2, mb: 3.5 }}>
                We match the machine to the product, the film and the whole process. With this information we can prepare a concrete proposal faster.
              </Typography>
              <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gap: 1.75, mb: 3.5 }}>
                {INQUIRY_QUESTIONS.map((item, i) => (
                  <Box key={item.q} component="li" sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: ACCENT, minWidth: 18 }}>{i + 1}.</Typography>
                    <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      <Box component="span" sx={{ fontWeight: 700, color: 'var(--text)' }}>{item.q}</Box> — {item.hint}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box component="a" href="#zapytaj" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', '&:hover': { bgcolor: '#D45509' } }}>
                Go to the form →
              </Box>
            </Box>
            <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: '4px' }}>
              <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)', mb: 1.25 }}>More than a machine</Typography>
              <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                Our offer covers not only the GSP machine but also automatic product infeed — including with cobots — pack
                discharge, case packing and palletising. One partner for the whole line.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {BEYOND_MACHINE.map((b) => (
                  <Box key={b.href} component={Link} href={b.href} sx={{ px: 1.5, py: 0.6, border: `1px solid ${BORDER}`, borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                    {b.label} →
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 6. PARTNER ── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Technology partner
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
              borderRadius: '4px',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                  GSP – Tecnopack Group
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-28)' }}>
                  Italy
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                GSP (General System Pack) is an Italian manufacturer of horizontal flow wrappers
                with decades of experience in the food, pharmaceutical and industrial sectors.
                The modular machine design enables fast adaptation to changing production formats.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Multi-axis machines with PLC control and touchscreen',
                  'Heat-seal and cold-seal film support',
                  'Automatic and manual feeding systems',
                  'CE certification, INOX versions for food industry',
                ].map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Box sx={{ mt: 3.5 }}>
                <Box component="a" href="https://www.tecnopackspa.it" target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75,
                    fontSize: '0.82rem', fontWeight: 600, color: TEXT_DIM, textDecoration: 'none',
                    '&:hover': { color: 'var(--text)' } }}>
                  tecnopackspa.it
                  <ArrowRight />
                </Box>
              </Box>
            </Box>

            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Choosing the right flow pack machine
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                The right horizontal machine is selected based on product, throughput and film format.
                Key parameters are product shape and dimensions, required line speed and film type.
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Extended shelf life', val: 'GSP 65 EVO / GSP 600 TR BB-E (MAP)' },
                  { label: 'Delicate or unstable products', val: 'GSP 55 S BB / GSP 65 EVO BB' },
                  { label: 'High line throughput', val: 'GSP 75 S (up to 400 packs/min)' },
                  { label: 'Entry into automation', val: 'GSP 45 S / GSP 50 S' },
                ].map((r) => (
                  <Box key={r.label} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    py: 1.25, borderBottom: `1px solid ${BORDER}`,
                  }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {r.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM }}>
                      {r.val}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FAQ ── */}
      <Box id="faq" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '300px 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>FAQ</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Frequently asked questions about flow pack machines</Typography>
            </Box>
            <Box>
              {FAQ.map((f, idx) => (
                <Box key={f.q} component="details" sx={{ borderTop: idx === 0 ? `1px solid ${BORDER}` : 'none', borderBottom: `1px solid ${BORDER}`, '& summary': { listStyle: 'none', cursor: 'pointer' }, '& summary::-webkit-details-marker': { display: 'none' }, '&[open] .faq-icon': { transform: 'rotate(45deg)' } }}>
                  <Box component="summary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, py: 2.25 }}>
                    <Typography component="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 }}>{f.q}</Typography>
                    <Box className="faq-icon" aria-hidden="true" sx={{ color: ACCENT, fontSize: '1.3rem', lineHeight: 1, flexShrink: 0, transition: 'transform 0.2s ease' }}>+</Box>
                  </Box>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM, pb: 2.5, pr: { md: 6 } }}>{f.a}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 7. CTA ── */}
      <Box component="section" sx={{ bgcolor: BG, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between',
            gap: { xs: 5, md: 8 },
          }}>
            <Box sx={{ maxWidth: 560 }}>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 2,
              }}>
                Looking for a horizontal machine for your line?
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 460 }}>
                We will help you select the right GSP model for your product, throughput and packaging requirements.
              </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexShrink: 0 }}>
              <Button component={Link} href="/en/kontakt" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  textTransform: 'none', px: 4, py: 2, borderRadius: '6px', minHeight: 52,
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)', boxShadow: '0 8px 28px rgba(232,97,10,0.35)' } }}>
                Send enquiry
              </Button>
              <Button component={Link} href="/en/maszyny/partnerzy" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-75)',
                  fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 4, py: 2,
                  borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                All partner machines
              </Button>
            </Stack>
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
            <span>Horizontal packaging machines (Flow pack)</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
