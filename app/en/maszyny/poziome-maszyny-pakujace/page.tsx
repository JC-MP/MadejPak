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
    'Horizontal flow wrap packaging machines GSP from MadejPak. S series (45, 50, 55, 75) and EVO series (MAP, box motion). Food, cosmetics and industrial packaging — standard to modified atmosphere.',
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
    tagline: 'Bottom seal — clean package appearance without top seam',
    description:
      'Bottom Brake (BB) version — the film reel is fed from below, so the longitudinal seal is hidden underneath the package. Result: clean, attractive shelf presentation. Popular in food and cosmetics industries.',
    specs: [
      { label: 'Film reel', value: 'From below (bottom brake)' },
      { label: 'Longitudinal seal', value: 'Under the package' },
      { label: 'Application', value: 'Food & non-food' },
    ],
    features: ['Bottom Brake (reel from below)', 'Seal hidden under pack', 'Clean shelf appearance', 'Electronic control'],
    products: ['Confectionery', 'Cosmetics', 'Premium products', 'Bread', 'Cheese'],
    imageSrc: '/images/machines/flowpack-gsp55sbb.jpg',
    imageAlt: 'GSP 55 S BB – flow pack bottom brake',
  },
  {
    id: 'gsp75s',
    name: 'GSP 75 S',
    badge: 'Highest throughput',
    tagline: 'Heavy-duty frame and cantable sealing units — for the most demanding lines',
    description:
      'Exceptionally robust packaging machine supporting multi-axis loaders. Features special cantable longitudinal sealing units — ensuring precise seals even at high speed and with thicker gas-barrier films. Built for intensive multi-shift production.',
    specs: [
      { label: 'Frame', value: 'Heavy-duty industrial' },
      { label: 'Long. seal unit', value: 'Cantable' },
      { label: 'Loaders', value: 'Multi-axis' },
    ],
    features: ['Cantable longitudinal sealing units', 'High mechanical durability', 'Multi-axis loader support', 'Standard & gas-barrier films'],
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
      'Industrial MAP (Modified Atmosphere Packaging) machine with electronically controlled box motion jaw system — jaws follow the product, guaranteeing hermetic seals even with variable bag lengths. Handles large, tall and in-chain products. Available with gas flushing (N₂/CO₂) or aroma spraying. PE and polyolefin films.',
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
    tagline: 'MAP with box motion and bottom seal — shelf appeal plus airtight freshness',
    description:
      'Bottom Brake version of the GSP 65 EVO — combines all MAP box motion benefits with the aesthetic advantage of a hidden longitudinal seal under the package. Ideal for producers who prioritise both extended shelf life and on-shelf appearance.',
    specs: [
      { label: 'Cross seal', value: 'Box motion (electronic)' },
      { label: 'Film reel', value: 'From below (bottom brake)' },
      { label: 'Packaging', value: 'MAP (modified atmosphere)' },
    ],
    features: ['Box motion – electronic sealing jaws', 'Bottom Brake (seal hidden below)', 'N₂/CO₂ gas flushing (MAP)', 'Hermetic packaging', 'PE & polyolefin films'],
    products: ['Fresh meat & fish', 'Premium cheeses', 'Ready meals', 'Tall & large products'],
    imageSrc: '/images/machines/flowpack-gsp65evobb.jpg',
    imageAlt: 'GSP 65 EVO BB – MAP box motion bottom brake',
  },
  {
    id: 'gsp600trbbe',
    name: 'GSP 600 TR BB-E',
    tagline: 'MAP for large and heavy products — with motorised jaw closing',
    description:
      'Industrial MAP machine in Bottom Brake configuration only. Designed for large, tall and in-chain products. Optional motorised jaw closing mechanism enables high-speed operation with heavy-gauge films. PE and polyolefin films.',
    specs: [
      { label: 'Film reel', value: 'From below (bottom brake)' },
      { label: 'Packaging', value: 'MAP (modified atmosphere)' },
      { label: 'Jaw closing', value: 'Motorised (option)' },
    ],
    features: ['BB only (bottom brake)', 'Motorised jaw closing (option)', 'N₂/CO₂ gas flushing (MAP)', 'Heavy-gauge films at high speed', 'PE & polyolefin films'],
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

export default function HorizontalMachinesPage() {
  return (
    <main>
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
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
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

      <LeadFormEn />

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
                  { label: 'Shelf appearance', val: 'GSP 55 S BB / GSP 65 EVO BB' },
                  { label: 'High line throughput', val: 'GSP 75 S (cantable sealing units)' },
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
