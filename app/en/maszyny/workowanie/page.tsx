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

export const metadata: Metadata = {
  title: 'Bagging & Bag Closing – Concetti | MadejPak',
  description:
    'Concetti bagging machines available from MadejPak — IGF open-mouth, CONTINUA FFS, big-bag filling. Bulk products, powders, granules, cement, fertilizers.',
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/workowanie`,
    languages: {
      'pl': `${SITE_URL}/maszyny/workowanie`,
      'en': `${SITE_URL}/en/maszyny/workowanie`,
      'x-default': `${SITE_URL}/maszyny/workowanie`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/workowanie`,
    title:       'Bagging & Bag Closing | MadejPak',
    description: 'Concetti bagging machines available from MadejPak — IGF open-mouth, CONTINUA FFS, big-bag filling. Bulk products, powders, granules, cement, fertilizers.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Bagging – MadejPak' }],
  },
};

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: ACCENT, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>{label}</Typography>
    </Box>
  );
}

interface ModelSpec { label: string; value: string }
interface MachineModel {
  id: string; name: string; badge?: string; tagline: string; description: string;
  specs: ModelSpec[]; features: string[]; products: string[]; imageSrc: string; imageAlt: string;
}

function ModelCard({ model }: { model: MachineModel }) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '340px 1fr' }, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', bgcolor: BG_CARD }}>
      <Box sx={{ position: 'relative', minHeight: { xs: 220, md: 'auto' }, background: 'linear-gradient(160deg, #1F1F21 0%, #252527 100%)', flexShrink: 0 }}>
        <Image src={model.imageSrc} alt={model.imageAlt} fill sizes="(max-width: 900px) 100vw, 340px" style={{ objectFit: 'cover' }} />
        {model.badge && (
          <Box sx={{ position: 'absolute', top: 16, left: 16, px: 1.5, py: 0.5, bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`, borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT }}>
            {model.badge}
          </Box>
        )}
      </Box>
      <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box>
          <Typography component="h3" sx={{ fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 0.5 }}>{model.name}</Typography>
          <Typography sx={{ fontSize: '0.82rem', color: ACCENT, fontWeight: 600 }}>{model.tagline}</Typography>
        </Box>
        <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7 }}>{model.description}</Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: 1.5 }}>
          {model.specs.map((s) => (
            <Box key={s.label} sx={{ px: 1.5, py: 1.25, bgcolor: 'var(--surface-03)', border: `1px solid ${BORDER}`, borderRadius: '3px' }}>
              <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim-28)', mb: 0.4 }}>{s.label}</Typography>
              <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>{s.value}</Typography>
            </Box>
          ))}
        </Box>
        <Box>
          <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-28)', mb: 1 }}>Typical products</Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {model.products.map((p) => (
              <Box key={p} sx={{ px: 1.25, py: 0.35, bgcolor: 'var(--surface-04)', border: `1px solid ${BORDER}`, borderRadius: '2px', fontSize: '0.72rem', color: TEXT_DIM }}>{p}</Box>
            ))}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {model.features.map((f) => (
            <Box key={f} sx={{ px: 1.25, py: 0.35, bgcolor: ACCENT, borderRadius: '2px', fontSize: '0.7rem', color: '#fff' }}>{f}</Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const MODELS: MachineModel[] = [
  {
    id: 'igf', name: 'IGF – Open-mouth bagging', badge: 'Gravity fill',
    tagline: 'Open-mouth bag filling — weighing precision',
    description: 'Automatic open-mouth bag filling machine with gravity or gravimetric-volumetric weighing. Designed for bulk, granulated, and dusty products. Handles paper, PE, and PP bags in the 5–50 kg range. Wide range of sanitary options for the food industry — stainless steel construction, de-dusting systems, and bagging station seals.',
    specs: [{ label: 'Throughput', value: 'up to 600 bags/h' }, { label: 'Weight range', value: '5–50 kg' }, { label: 'Bag types', value: 'PP, PE, paper' }, { label: 'Weighing', value: 'gravimetric / volumetric' }],
    features: ['Multi-stage weighing', 'De-dusting system', 'Stainless version', 'Industry 4.0', 'Conveyor integration'],
    products: ['Flour', 'Sugar', 'Animal feed', 'Fertilizers', 'Salt', 'Chemical granules', 'Powders'],
    imageSrc: '/images/machines/bagging-igf.jpg', imageAlt: 'Concetti IGF – open-mouth bagging machine',
  },
  {
    id: 'continua', name: 'CONTINUA – FFS from film roll', tagline: 'Form-Fill-Seal — packaging from film reel',
    description: 'FFS (Form-Fill-Seal) machine that forms the bag directly from a film sleeve, fills it with product and seals it with a thermal weld — all in one automatic cycle. Eliminates the need to supply pre-made bags and reduces packaging material costs. Available in single- and multi-station versions for different throughput ranges.',
    specs: [{ label: 'Throughput', value: 'up to 600 bags/h' }, { label: 'Weight range', value: '5–50 kg' }, { label: 'Film', value: 'PE, PP, laminates' }, { label: 'Closure', value: 'Thermal weld' }],
    features: ['Forms from roll', 'No pre-made bags', 'Multiple bag formats', 'Top/bottom weld', 'Automatic restart'],
    products: ['Flour', 'Sugar', 'Animal feed', 'Technical powders', 'Granules', 'Rice', 'Coffee'],
    imageSrc: '/images/machines/bagging-continua.jpg', imageAlt: 'Concetti CONTINUA – FFS bagging machine',
  },
  {
    id: 'continua-6x', name: 'CONTINUA 6x – Six-station FFS', badge: 'High Performance',
    tagline: 'Up to 800 bags/h — cement, premixes, fine products',
    description: 'Six-station FFS machine dedicated to products that are difficult to deaerate — cement, fine premixes, and technical powders. Deaeration system (degassing probes) and air removal system from the top of the bag before welding ensure minimum package dimensions with fully hermetic closure. Automatic format change without operator intervention.',
    specs: [{ label: 'Throughput', value: 'up to 800 bags/h' }, { label: 'Weight range', value: '10–40 kg' }, { label: 'Stations', value: '6' }, { label: 'Closure', value: 'Hermetic PE' }],
    features: ['6 stations', 'Deaeration probes', 'Hermetic packaging', 'Auto format change', 'Pneumatic cleaning', 'Industry 4.0'],
    products: ['Cement', 'Fine premixes', 'Technical powders', 'Gypsum', 'Building binders'],
    imageSrc: '/images/machines/bagging-continua6.jpg', imageAlt: 'Concetti CONTINUA 6x – six-station FFS machine',
  },
  {
    id: 'bigbag', name: 'Big Bag – FIBC Filling', tagline: 'Big-bag filling — 30–50 units/h',
    description: 'FIBC (big-bag) filling system with gravimetric weighing on load cells. Designed for bulk and granulated products packed in large formats — from 200 to 2000 kg. Handles 2- and 4-loop configurations, full-open and candy-top bags, and octabins. Options: de-dusting system, pneumatic compaction, vibrating platform, and metal detector.',
    specs: [{ label: 'Throughput', value: '30–50 big-bags/h' }, { label: 'Big-bag weight', value: '200–2000 kg' }, { label: 'Big-bag height', value: '900–1800 mm' }, { label: 'Weighing', value: 'Load cells' }],
    features: ['Load cells', 'De-dusting system', 'Vibrating platform', 'Industry 4.0', 'ATEX (option)', 'Metal detector'],
    products: ['Fertilizers', 'Sand', 'Limestone', 'Technical granules', 'Resins', 'Bulk powders'],
    imageSrc: '/images/machines/bagging-bigbag.jpg', imageAlt: 'Concetti Big Bag – FIBC filling station',
  },
];

const HOW_WORKS = [
  { num: '01', title: 'Bag presentation', desc: 'A pre-made bag or a bag formed from a film sleeve is positioned on the filling head.' },
  { num: '02', title: 'Product weighing', desc: 'Product is dosed to the target weight — the multi-stage weighing system ensures ±0.1% of target value precision.' },
  { num: '03', title: 'Filling', desc: 'Product is transferred to the bag — a fast coarse phase and a precise fine phase minimize cycle time while maintaining accuracy.' },
  { num: '04', title: 'Closing & dispatch', desc: 'The bag is closed with a thermal weld, stitcher, or twister — then passed to a conveyor, checkweigher, or palletizer.' },
];

export default function WorkowanieEnPage() {
  return (
    <main>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* Hero */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                Concetti — bagging & end-of-line
              </Typography>
              <Typography component="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' }, fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 3 }}>
                Bagging &<br />bag closing.
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 540, mb: 4 }}>
                Concetti bagging systems — from open-mouth bags to FFS from film reel and big-bag.
                Precise weighing, automatic filling, and tight bag closure for bulk, granulated,
                and dusty products across all industrial sectors.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button component="a" href="#models" variant="contained" disableElevation
                  sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                  View bagging systems
                </Button>
                <Button component={Link} href="/en/kontakt" variant="outlined"
                  sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                  Send inquiry
                </Button>
              </Stack>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
              <StatChip value="800" label="bags/h – CONTINUA 6x" />
              <StatChip value="4" label="bagging system types" />
              <StatChip value="2000" label="kg max – big-bag" />
              <StatChip value="5–50" label="kg – standard bag range" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* How it works */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Operating principle</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 } }}>
            Bagging process step by step
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {HOW_WORKS.map((step) => (
              <Box key={step.num} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', borderTop: `2px solid ${ACCENT}22` }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT, letterSpacing: '-0.04em', lineHeight: 1, mb: 2, opacity: 0.6 }}>{step.num}</Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1 }}>{step.title}</Typography>
                <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.65 }}>{step.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Models */}
      <Box id="models" component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 }, scrollMarginTop: { xs: 64, lg: 72 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Bagging systems</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            Four Concetti systems available from MadejPak
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (<ModelCard key={model.id} model={model} />))}
          </Stack>
        </Container>
      </Box>

      {/* System selection */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>How to choose?</Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 } }}>
            Selecting the right bagging technology
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {[
              { need: 'Paper or open PP bags', system: 'IGF open-mouth', when: 'Flour, feed, fertilizers, salt — pre-made bags' },
              { need: 'Lower packaging costs', system: 'CONTINUA FFS', when: 'Product forms bag from roll — no pre-made bag purchase' },
              { need: 'Cement, fine powders, premixes', system: 'CONTINUA 6x', when: 'Products hard to deaerate — deaeration and hermetic weld' },
              { need: 'Large bulk packaging', system: 'Big Bag FIBC', when: 'Products on pallet — bags 200–2000 kg' },
            ].map((item) => (
              <Box key={item.system} sx={{ p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', borderTop: `2px solid ${ACCENT}` }}>
                <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-28)', mb: 1 }}>When you need</Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.6, mb: 2 }}>{item.need}</Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: ACCENT, mb: 1 }}>→ {item.system}</Typography>
                <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-48)', lineHeight: 1.55 }}>{item.when}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Partner */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Technology partner</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`, borderRadius: '4px' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>Concetti</Typography>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim-28)' }}>Italy</Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                Concetti is an Italian manufacturer of comprehensive bagging, palletizing, and end-of-line systems.
                Specializing in solutions for bulk and granulated products — from open-mouth and FFS systems to big-bag filling and complete packaging lines with palletizing.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Complete lines: weighing → bagging → palletizing → wrapping',
                  'Open-mouth, FFS from reel, and big-bag systems in one range',
                  'Integration with MadejPak palletizers and conveyors',
                  'Industry 4.0 — performance and OEE monitoring as standard',
                ].map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>{item}</Typography>
                  </Box>
                ))}
              </Stack>
              <Box sx={{ mt: 3.5 }}>
                <Box component="a" href="https://www.concetti.com" target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.82rem', fontWeight: 600, color: TEXT_DIM, textDecoration: 'none', '&:hover': { color: 'var(--text)' } }}>
                  concetti.com <ArrowRight />
                </Box>
              </Box>
            </Box>
            <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`, borderRadius: '4px' }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>Bagging line — complete integration</Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                Bagging is one stage — MadejPak designs and integrates the complete production flow: from product infeed to a finished stretch-wrapped pallet.
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Weighing / dosing', val: 'Concetti weighing systems' },
                  { label: 'Bagging', val: 'IGF / CONTINUA / Big Bag' },
                  { label: 'Checkweighing', val: 'In-line checkweigher' },
                  { label: 'Palletizing', val: 'Concetti palletizers / industrial robots' },
                  { label: 'Pallet wrapping', val: 'Technowrapp stretch wrapping' },
                ].map((r) => (
                  <Box key={r.label} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.25, borderBottom: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{r.label}</Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM }}>{r.val}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ bgcolor: BG, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: { xs: 5, md: 8 } }}>
            <Box sx={{ maxWidth: 560 }}>
              <Typography component="h2" sx={{ fontSize: { xs: '1.625rem', md: '2.125rem' }, fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 2 }}>
                Looking for a bagging system for your facility?
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 460 }}>
                We will select the right type of Concetti bagging machine for your product, throughput, and desired automation level.
              </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexShrink: 0 }}>
              <Button component={Link} href="/en/kontakt" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem', textTransform: 'none', px: 4, py: 2, borderRadius: '6px', minHeight: 52, '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)', boxShadow: '0 8px 28px rgba(232,97,10,0.35)' } }}>
                Send inquiry
              </Button>
              <Button component={Link} href="/en/maszyny/partnerzy" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-75)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 4, py: 2, borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                All partner machines
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Machines</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny/partnerzy" style={{ color: 'inherit', textDecoration: 'none' }}>Partner machines</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Bagging & bag closing</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
