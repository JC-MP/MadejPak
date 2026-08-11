import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE, COMPANY } from '@/lib/seo.config';
import LeadFormEn from '../LeadFormEn';

export const metadata: Metadata = {
  title: 'GSP 55 S – Compact Industrial Flow Pack Machine',
  description:
    'GSP 55 S – compact flow pack machine up to 150 packs/min. Cantilever frame, 3 pairs of longitudinal sealing wheels, hot-seal and cold-seal films, recipe memory. Industrial packaging.',
  keywords: [
    'GSP 55 S', 'compact flow pack machine', 'cantilever flow wrap industrial',
    'hot seal cold seal flow pack', 'industrial packaging machine',
    'flow pack 150 packs', 'GSP 55S',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
    title:       'GSP 55 S – Compact Industrial Flow Pack Machine | MadejPak',
    description: 'Compact flow pack machine up to 150 packs/min. 3 pairs of sealing wheels, hot-seal and cold-seal films, recipe memory.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 55 S – flow pack machine – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 55 S',
  description: 'Compact electronic flow pack machine up to 150 packs/min. Cantilever frame, hot-seal and cold-seal films, recipe memory.',
  brand: { '@type': 'Brand', name: 'GSP – Tecnopack Group' },
  manufacturer: { '@type': 'Organization', name: 'GSP – Tecnopack Group' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: COMPANY.name, url: COMPANY.url },
    areaServed: 'PL',
    availability: 'https://schema.org/InStock',
  },
};

const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.625rem' }, fontWeight: 800,
        letterSpacing: '-0.03em', color: ACCENT, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.7rem', color: TEXT_DIM, letterSpacing: '0.04em', lineHeight: 1.4 }}>
        {label}
      </Typography>
    </Box>
  );
}

const FOR_WHO = [
  {
    title: 'Companies looking for a compact flow pack machine',
    desc: 'The GSP 55 S is ideal where space savings, simple operation and stable performance matter. A good solution for plants that need an industrial-grade machine without an overly complex packaging system.',
  },
  {
    title: 'Producers needing a robust and reliable machine',
    desc: 'The GSP 55 S is compact yet durable — built for industrial conditions and reliable everyday production.',
  },
  {
    title: 'Plants packaging medium-sized products',
    desc: 'Handles products up to 200 mm wide and 120 mm tall. Suitable for many food and non-food products requiring classic flow pack packaging.',
  },
  {
    title: 'Companies requiring easy operation',
    desc: 'Alphanumeric display panel with keyboard for straightforward parameter control. Recipe recall function makes returning to saved settings for repeat products quick and error-free.',
  },
  {
    title: 'Producers working with hot-seal and cold-seal films',
    desc: 'The GSP 55 S works with both hot-seal and cold-seal packaging materials, increasing flexibility when selecting the right film for each product.',
  },
];

const ADVANTAGES = [
  {
    title: 'Compact construction',
    desc: 'Industrial packaging quality in a compact footprint. A good choice for plants with limited production space.',
  },
  {
    title: 'Up to 150 packs per minute',
    desc: 'Achieves up to 150 packs/min depending on product, film and process settings.',
  },
  {
    title: 'Cantilever frame',
    desc: 'Good access to the machine work area — facilitates cleaning, operation and maintenance.',
  },
  {
    title: 'Three pairs of sealing wheels',
    desc: 'Longitudinal sealing unit with three pairs of wheels supports stable film guidance and repeatable seals.',
  },
  {
    title: 'Three-motor control',
    desc: 'Three motors managed by axis control ensure precise synchronisation and repeatable packaging process.',
  },
  {
    title: 'Recipe memory',
    desc: 'Operators can recall saved recipes, reducing setup time when changing product or format.',
  },
  {
    title: 'Electronic thermostat',
    desc: 'Electronic temperature control maintains stable sealing parameters matched to the film.',
  },
  {
    title: 'Pack marking option',
    desc: 'A printer can be added for best-before date, batch number, production code or other required markings.',
  },
];

const OPTIONS = [
  'Photocell for print registration',
  'Printer (date, batch number, production code)',
  'Second film reel holder',
  'Film width extension to 760 mm',
  'Extended infeed conveyor',
  'Film pre-heating bars',
  'Fourth set of sealing wheels',
  'Stainless steel construction (INOX)',
];

const SPECS: { label: string; value: string }[] = [
  { label: 'Frame type',                value: 'Cantilever' },
  { label: 'Longitudinal sealing',      value: '3 pairs of wheels' },
  { label: 'Throughput',                value: 'up to 150 packs/min' },
  { label: 'Max product width',         value: '200 mm' },
  { label: 'Max product height',        value: '120 mm' },
  { label: 'Max film width',            value: '520 mm' },
  { label: 'Packaging materials',       value: 'Hot-seal and cold-seal' },
  { label: 'Machine weight',            value: '750 kg' },
  { label: 'Number of motors',          value: '3' },
  { label: 'Control',                   value: 'Axis control' },
  { label: 'Operator panel',            value: 'Alphanumeric display + keyboard' },
  { label: 'Power supply',              value: '400 V, 50 Hz, 3 phases + N' },
  { label: 'Installed power',           value: '5 kW' },
  { label: 'Compressed air',            value: '6 bar (dry, filtered)' },
  { label: 'Air consumption',           value: '20 NL/min' },
];

const APPLICATIONS = [
  'Food products',
  'Non-food products',
  'Medium-sized products',
  'Products suited to a compact packaging machine',
  'Hot-seal and cold-seal films',
  'Products requiring marking',
  'Products with repeatable formats',
  'Industrial packaging environments',
];

export default function Gsp55SEnPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
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
            sizes="50vw" style={{ objectFit: 'cover', opacity: 0.5 }} priority />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, flexWrap: 'wrap' }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT }}>
                GSP – Tecnopack Group
              </Typography>
              <Box sx={{ px: 1.5, py: 0.4, bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`,
                borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT }}>
                Most popular
              </Box>
            </Box>
            <Typography component="h1" sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2,
            }}>
              GSP 55 S
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              Compact machine for industrial packaging.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Horizontal electronic flow pack machine with cantilever frame and three pairs of
              sealing wheels. Combines robust construction, proven technology and easy operation —
              for industrial production without unnecessary complexity.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="150" label="packs/min max" />
              <StatChip value="3" label="sealing wheel pairs" />
              <StatChip value="200mm" label="max product width" />
              <StatChip value="Hot+Cold" label="seal" />
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} href="#enquiry" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                  textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                Send enquiry
              </Button>
              <Button component={Link} href="/en/maszyny/poziome-maszyny-pakujace" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)',
                  fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5,
                  borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                All flow pack machines
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── FOR WHO ──────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Application
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Who is the GSP 55 S for?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
            {FOR_WHO.map((item, i) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT,
                    letterSpacing: '-0.04em', lineHeight: 1, opacity: 0.5, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── ADVANTAGES ───────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Machine features
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Advantages of the GSP 55 S
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {ADVANTAGES.map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
                borderRadius: '4px',
                '&:hover': { borderTopColor: ACCENT },
                transition: 'border-color 0.2s ease',
              }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', mb: 1.25 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── TECHNICAL SPECS ──────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>

            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Technical data
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 3,
              }}>
                GSP 55 S specifications
              </Typography>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                {SPECS.map((spec, i) => (
                  <Box key={spec.label} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    px: 2.5, py: 1.5,
                    bgcolor: i % 2 === 0 ? BG_CARD : 'var(--surface-03)',
                    borderBottom: i < SPECS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    gap: 2,
                  }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>
                      {spec.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, fontWeight: 500, textAlign: 'right' }}>
                      {spec.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Configuration
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5,
              }}>
                Available equipment options
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, mb: 3, lineHeight: 1.7 }}>
                The GSP 55 S can be configured with a range of additional options tailored to your specific packaging process.
              </Typography>
              <Stack spacing={1.25}>
                {OPTIONS.map((option) => (
                  <Box key={option} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.55 }}>
                      {option}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── APPLICATIONS + MADEJPAK ──────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>

            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Applications
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 3,
              }}>
                GSP 55 S is suitable for packaging:
              </Typography>
              <Stack spacing={1.5}>
                {APPLICATIONS.map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                GSP 55 S at MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Configuration matched to your process and film.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                The GSP 55 S is the solution for companies that need a compact, robust and easy-to-operate
                flow pack machine for industrial production.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                At MadejPak we configure the machine to match the product, film and production conditions.
                We can add a printer, photocell, second reel holder, extended infeed conveyor, pre-heating
                bars or stainless steel construction. We provide our own after-sales service and access to
                spare parts.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORM ─────────────────────────────────────────────────── */}
      <Box id="enquiry">
        <LeadFormEn defaultModel="GSP 55 S" />
      </Box>

      {/* ── BREADCRUMB ───────────────────────────────────────────── */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{
            color: 'var(--dim-72)', display: 'flex', gap: 1,
            alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem',
          }}>
            <Link href="/en" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Machines</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/en/maszyny/poziome-maszyny-pakujace" style={{ color: 'inherit', textDecoration: 'none' }}>
              Horizontal packaging machines
            </Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>GSP 55 S</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
