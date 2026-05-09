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
  title: 'GSP 50 S – Flow Pack Machine 150 packs/min | MadejPak',
  description:
    'GSP 50 S – flow pack machine up to 150 packs/min. Products 10–250 mm wide, heat-seal and cold-seal films, 7" PLC touchscreen, program memory. Food and non-food packaging.',
  keywords: [
    'GSP 50 S', 'flow pack machine 150 packs', 'cantilever flow wrap',
    'cold seal packaging machine', 'flow pack PLC touchscreen',
    'food non-food packaging machine', 'GSP 50S',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
    title:       'GSP 50 S – Flow Pack Machine 150 packs/min | MadejPak',
    description: 'Flow pack machine up to 150 packs/min. Heat-seal, cold-seal and PE films. 7" PLC panel, program memory, rich options list.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 50 S – flow pack machine – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 50 S',
  description: 'Electronic horizontal flow pack machine up to 150 packs/min. Food and non-food packaging, heat-seal and cold-seal films, 7" PLC touchscreen.',
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
    title: 'Food producers',
    desc: 'The GSP 50 S is well suited for packaging food products that require repeatable, neat and hermetic packaging. It works with heat-seal, coated, cold-seal and polyethylene films.',
  },
  {
    title: 'Non-food product producers',
    desc: 'The machine is suitable for technical, cosmetic, hygiene, industrial and consumer products. One machine for many product categories.',
  },
  {
    title: 'Companies packaging singles and multipacks',
    desc: 'The GSP 50 S handles both single-unit and multi-piece packs. Useful for lines where format, product count or assortment changes regularly without investing in separate solutions.',
  },
  {
    title: 'Plants with frequent format changes',
    desc: 'Designed for fast and comfortable format changeover. Working programs can be saved in the controller, reducing setup time when returning to repeat products.',
  },
  {
    title: 'Production requiring hygiene and easy access',
    desc: 'The cantilever frame provides easy access to the work area — simplifying cleaning, maintenance and inspection, especially important in hygiene-critical environments.',
  },
];

const ADVANTAGES = [
  {
    title: 'Up to 150 packs per minute',
    desc: 'The GSP 50 S runs at up to 150 products per minute, depending on product, film and machine configuration.',
  },
  {
    title: 'Wide product size range',
    desc: 'Handles products 10–250 mm wide, 1–120 mm tall and 30–600 mm long. Adapts to many product types and pack formats.',
  },
  {
    title: 'Works with various films',
    desc: 'Compatible with heat-seal, coated, cold-seal and PE films — greater production flexibility and film choice matched to product requirements.',
  },
  {
    title: 'PLC control with 7" touchscreen',
    desc: 'PLC controller and 7" operator touchscreen — parameters, temperature, diagnostics and saved programs all controlled from one place.',
  },
  {
    title: 'Program memory',
    desc: 'Saving programs makes it easy to return to previous settings, reducing changeover time and the risk of errors when switching products frequently.',
  },
  {
    title: 'Easy access and simple maintenance',
    desc: 'Cantilever construction gives comfortable machine access — facilitating cleaning, sanitation, inspection and routine maintenance.',
  },
  {
    title: 'Pack marking option',
    desc: 'A printer can be added for best-before date, batch number, production code or other required markings.',
  },
];

const OPTIONS = [
  'Roller conveyor through the upper jaw',
  'Printer (best-before date, batch number)',
  'Photocell for pre-printed film registration',
  'Machine castors',
  'Short and long stroke gearbox',
  'Dual film reel holder',
  'PE film version',
  'Extended infeed conveyor',
  'Zig-zag knives',
  'Euroslot punch',
  'No product – no bag system',
  'Gusset-forming device',
];

const SPECS: { label: string; value: string }[] = [
  { label: 'Production speed',      value: 'up to 150 packs/min' },
  { label: 'Product width',         value: '10–250 mm' },
  { label: 'Product height',        value: '1–120 mm' },
  { label: 'Product length',        value: '30–600 mm' },
  { label: 'Film reel width',       value: '650 mm' },
  { label: 'Reel diameter',         value: 'Ø 350 mm' },
  { label: 'Core diameter',         value: '68–75 mm' },
  { label: 'Machine length',        value: '4 000 mm' },
  { label: 'Machine width',         value: '1 060 mm' },
  { label: 'Machine height',        value: '1 800 mm' },
  { label: 'Machine weight',        value: '650 kg' },
  { label: 'Installed power',       value: '3.5 kW' },
  { label: 'Compressed air',        value: '7 bar (dry, filtered)' },
];

const APPLICATIONS = [
  'Food products',
  'Non-food products',
  'Single-unit packaging',
  'Multi-piece packs (multipacks)',
  'Products requiring frequent format changes',
  'Pre-printed films (with photocell)',
  'Products requiring marking',
  'Gusseted packs',
  'PE film packaging',
];

export default function Gsp50SEnPage() {
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
          <Image src="/images/machines/flowpack-gsp-50s-page.jpg" alt="" fill
            sizes="50vw" style={{ objectFit: 'cover', opacity: 0.5 }} priority />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
              GSP – Tecnopack Group
            </Typography>
            <Typography component="h1" sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2,
            }}>
              GSP 50 S
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              More flexibility. Stable packaging. Fast format changeover.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Electronic flow pack machine designed for single-unit and multi-piece production.
              Up to 150 packs/min, heat-seal and cold-seal films,
              PLC control with 7" touchscreen and program memory.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="150" label="packs/min max" />
              <StatChip value='7"' label="PLC touchscreen" />
              <StatChip value="Cold seal" label="& hot seal" />
              <StatChip value="12+" label="equipment options" />
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
            Who is the GSP 50 S for?
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
            Advantages of the GSP 50 S
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {ADVANTAGES.map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
                borderRadius: '4px',
                '&:hover': { borderTopColor: ACCENT },
                transition: 'border-color 0.2s ease',
              }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>
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
                GSP 50 S specifications
              </Typography>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                {SPECS.map((spec, i) => (
                  <Box key={spec.label} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    px: 2.5, py: 1.5,
                    bgcolor: i % 2 === 0 ? BG_CARD : 'var(--surface-03)',
                    borderBottom: i < SPECS.length - 1 ? `1px solid ${BORDER}` : 'none',
                  }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.06em' }}>
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
                The GSP 50 S can be configured with a range of additional options tailored to your specific packaging process.
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
                GSP 50 S is suitable for packaging:
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
                GSP 50 S at MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Configuration matched to your line.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                The GSP 50 S is the solution for companies that need a fast, flexible and reliable
                flow pack machine for daily production.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                At MadejPak we configure the machine for the product, film and production line layout.
                We can add a printer, photocell, conveyor, PE film version, gusset-forming device
                or other equipment. We provide our own after-sales service and access to spare parts.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORM ─────────────────────────────────────────────────── */}
      <Box id="enquiry">
        <LeadFormEn defaultModel="GSP 50 S" />
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
            <span>GSP 50 S</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
