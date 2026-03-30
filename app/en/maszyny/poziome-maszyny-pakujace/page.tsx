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
  title: 'Horizontal Flow Wrap Packaging Machines | MadejPak',
  description:
    'Horizontal flow wrap packaging machines GSP – Tecno Pack from MadejPak. Models FP 095E, FP 100E, FP 100 HP Box Motion. Packaging for food, chemical and industrial products.',
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
    title:       'Horizontal Flow Wrap Packaging Machines | MadejPak',
    description: 'Horizontal flow wrap packaging machines GSP – Tecno Pack from MadejPak. Models FP 095E, FP 100E, FP 100 HP Box Motion.',
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
              bgcolor: `${ACCENT}0D`, border: `1px solid ${ACCENT}25`,
              borderRadius: '2px', fontSize: '0.7rem', color: 'rgba(232,97,10,0.85)',
            }}>
              {f}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

const MODELS: MachineModel[] = [
  {
    id: 'fp095e',
    name: 'FP 095 E',
    tagline: 'Compact, high output — up to 350 packs/min',
    description:
      'Multi-axis horizontal machine with cantilever construction — designed for automatic production lines. High throughput up to 350 packs/min is combined with ergonomic access to the forming area and easy sanitation. Handles heat-seal films and cold-seal films for heat-sensitive products.',
    specs: [
      { label: 'Throughput', value: 'up to 350 pks/min' },
      { label: 'Max film width', value: '500 mm' },
      { label: 'Max prod. width', value: '200 mm' },
      { label: 'Max prod. height', value: '120 mm' },
    ],
    features: ['Multi-axis PLC control', 'Touch screen', 'Recipe storage', 'Cold seal', 'Machine diagnostics'],
    products: ['Bars', 'Chocolate', 'Biscuits', 'Soap', 'Cheese slices', 'OTC tablets'],
    imageSrc: '/images/machines/flowpack-fp095e.jpg',
    imageAlt: 'Tecno Pack FP 095 E – horizontal packaging machine',
  },
  {
    id: 'fp100e',
    name: 'FP 100 E',
    badge: 'Standard series',
    tagline: 'Versatile flow wrap — food and industrial products',
    description:
      'Standard horizontal machine series from Tecno Pack — flexible configuration for a wide range of products and packaging formats. Modular design enables integration with automatic feeding, weighing and marking systems. Proven in food, cosmetics and industrial sectors for formats from a few to several hundred grams.',
    specs: [
      { label: 'Throughput', value: 'up to 200 pks/min' },
      { label: 'Film format', value: 'wide range' },
      { label: 'Films', value: 'PP, OPP, PE, laminates' },
      { label: 'Control', value: 'PLC + HMI' },
    ],
    features: ['Print module', 'No-product-no-bag system', 'Toolless format change', 'Auto film tension', 'INOX version'],
    products: ['Bread', 'Vegetables', 'Chemical products', 'Pasta', 'Salads', 'Accessories'],
    imageSrc: '/images/machines/flowpack-fp100e.jpg',
    imageAlt: 'Tecno Pack FP 100 E – standard flow pack machine',
  },
  {
    id: 'fp100hp',
    name: 'FP 100 HP Box Motion',
    badge: 'High Performance',
    tagline: 'Box motion jaw — delicate products at maximum throughput',
    description:
      'High-performance version of the FP 100 series with a box motion sealing head — jaws move synchronously with the product, eliminating the risk of damage during sealing. Designed for delicate or irregular products requiring precise package closure at high line speeds. Optional automatic product infeed.',
    specs: [
      { label: 'Throughput', value: 'up to 400 pks/min' },
      { label: 'Head', value: 'Box Motion' },
      { label: 'Film format', value: 'up to 520 mm width' },
      { label: 'Control', value: 'Multi-axis PLC' },
    ],
    features: ['Box motion jaw', 'Product synchronisation', 'No pack deformation', 'Auto infeed', 'High sealing precision'],
    products: ['Croissants', 'Ice cream', 'Fragile products', 'Irregular items', 'Muffins', 'Fish'],
    imageSrc: '/images/machines/flowpack-fp100hp.jpg',
    imageAlt: 'Tecno Pack FP 100 HP Box Motion – high performance flow pack machine',
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
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                GSP – Tecno Pack — flow pack
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
              bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
            }}>
              <StatChip value="400" label="packs/min – max throughput" />
              <StatChip value="3" label="FP machine series" />
              <StatChip value="4" label="industry sectors" />
              <StatChip value="500mm" label="max film width" />
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
            FP series – Tecno Pack machines at MadejPak
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Stack>
        </Container>
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

      {/* ── 5. PACKAGING TYPES ── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Packaging types
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Flow pack packaging formats
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {[
              {
                name: 'Pillow bag',
                desc: 'Classic flow pack packaging — a sealed film bag with side, top and bottom seams. Simple to produce, economical in film use. The most popular format for food and consumer goods.',
                folie: 'PP, OPP, PE, metallic laminates',
              },
              {
                name: 'Gusseted bag',
                desc: 'Packaging with a side or bottom gusset — increased volume with the same film consumption. Used for irregularly shaped products or those requiring greater package capacity.',
                folie: 'PP, OPP, multi-layer films',
              },
              {
                name: 'Shrink film packaging',
                desc: 'Product wrapped in heat-shrink film that tightly shrinks around the product after passing through a shrink tunnel. Used in multipack packaging and for products displayed through the packaging.',
                folie: 'POF (polyolefin), PE shrink',
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
                    {item.folie}
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
                  GSP – Tecno Pack
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-28)' }}>
                  Italy
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                GSP (General System Pack) – Tecno Pack is an Italian manufacturer of horizontal packaging machines
                (flow wrappers) with long-standing experience in the food, pharmaceutical and industrial sectors.
                The modular machine design allows rapid adaptation to changing production formats.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Multi-axis PLC-controlled machines with touch screens',
                  'Supports heat-seal and cold-seal films',
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
                Flow pack machine selection guide
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                We select the right horizontal machine model based on the product, throughput and film format.
                Key parameters are product shape and dimensions, required line speed and film type.
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Delicate product', val: 'FP 100 HP Box Motion' },
                  { label: 'High throughput', val: 'FP 095 E (up to 350 pks/min)' },
                  { label: 'Versatility', val: 'FP 100 E – wide range' },
                  { label: 'Cold sealing', val: 'FP 095 E (cold seal)' },
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
                We will help select the right FP Tecno Pack model for your product, throughput and packaging requirements.
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
