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
  title: 'GSP 65 EVO – MAP Flow Pack Machine Box Motion | MadejPak',
  description:
    'GSP 65 EVO – industrial MAP flow pack machine with electronically controlled box motion jaws. N₂/CO₂ gas flushing, PE and polyolefin films. BB version available. Hermetic packaging for long-shelf-life products.',
  keywords: [
    'GSP 65 EVO', 'MAP flow pack machine', 'modified atmosphere packaging',
    'box motion flow wrap', 'flow pack large products', 'PE film packaging machine',
    'gas flushing packaging', 'GSP 65EVO',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
    title:       'GSP 65 EVO – MAP Flow Pack Machine Box Motion | MadejPak',
    description: 'Industrial MAP flow pack machine with box motion jaws, N₂/CO₂ gas flushing, PE and polyolefin films. BB version available.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 65 EVO – MAP flow pack machine – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 65 EVO',
  description: 'Industrial MAP flow pack machine with electronically controlled box motion jaws. N₂/CO₂ gas flushing, PE and polyolefin films.',
  brand: { '@type': 'Brand', name: 'GSP – Tecnopack Group' },
  manufacturer: { '@type': 'Organization', name: 'GSP – Tecnopack Group' },
  offers: {
    '@type': 'Offer',
    seller: { '@type': 'Organization', name: COMPANY.name, url: COMPANY.url },
    areaServed: 'PL',
    availability: 'https://schema.org/InStock',
  },
};

const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
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
    title: 'Producers of large and tall products',
    desc: 'The GSP 65 EVO was designed for products that require more packaging space and stable guidance through the machine. It is the solution for plants packaging bulky, tall or difficult-to-handle products.',
  },
  {
    title: 'Companies working in modified atmosphere',
    desc: 'The machine enables packaging with gas flushing (N₂/CO₂), which extends product shelf life. Particularly important for products that require controlled packaging conditions.',
  },
  {
    title: 'Producers using PE and polyolefin films',
    desc: 'The GSP 65 EVO was developed to work with demanding packaging materials. Long sealing time and high clamping force help achieve a tight and durable seal even on difficult films.',
  },
  {
    title: 'Plants with continuous production',
    desc: 'The machine integrates well as part of a production line. It can be equipped with a belt conveyor and a variable bag length function, making it easy to adapt to different products and production rhythms.',
  },
  {
    title: 'Companies needing fast changeover',
    desc: 'The electronically controlled sealing unit reduces format change time. Important when producing many product variants or with frequent assortment changes.',
  },
];

const ADVANTAGES = [
  {
    title: 'Very airtight packaging',
    desc: 'The box motion sealing system delivers a stable, strong and repeatable seal. Long sealing time and high film clamping pressure support package integrity — especially with demanding materials.',
  },
  {
    title: 'High throughput',
    desc: 'An industrial solution for packaging products that require higher output. Electronic control of the sealing unit maintains stable operation under heavy production loads.',
  },
  {
    title: 'Format flexibility',
    desc: 'The GSP 65 EVO produces gusseted packs and square-shaped packages. Bead seal option is available on request.',
  },
  {
    title: 'Works with demanding films',
    desc: 'The machine handles PE, polyolefin and technical films that require stronger and longer sealing cycles.',
  },
  {
    title: 'BB version — film fed from below',
    desc: 'The Bottom Brake version feeds the film reel from below. The longitudinal seal is hidden under the package — resulting in a clean, attractive shelf presentation.',
  },
  {
    title: 'Easy line integration',
    desc: 'Both versions can be equipped with a belt conveyor and variable bag length function. The GSP 65 EVO adapts to the specific product, production pace and plant layout.',
  },
];

const APPLICATIONS = [
  'Long shelf-life products',
  'Large and tall products',
  'In-chain fed products',
  'Modified atmosphere packaging (MAP)',
  'Products requiring hermetic sealing',
  'Technical products',
  'PE and polyolefin films',
];

export default function Gsp65EvoEnPage() {
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
          <Image src="/images/machines/flowpack-gsp-65evo-page.jpg" alt="" fill
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
                Modified atmosphere
              </Box>
            </Box>
            <Typography component="h1" sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2,
            }}>
              GSP 65 EVO
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              For products that must stay fresh longer.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Industrial MAP flow pack machine with gas flushing or aroma application.
              Designed for large, tall and in-chain products, with box motion and
              PE or polyolefin film.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="MAP" label="modified atmosphere" />
              <StatChip value="Box motion" label="cross seal" />
              <StatChip value="N₂/CO₂" label="gas flushing" />
              <StatChip value="BB" label="bottom brake option" />
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
            Who is the GSP 65 EVO for?
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
            Advantages of the GSP 65 EVO
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {ADVANTAGES.map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `2px solid var(--dim-10)`,
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

      {/* ── APPLICATIONS + MADEJPAK ──────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
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
                GSP 65 EVO is suitable for packaging:
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
                GSP 65 EVO at MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Industrial packaging tailored to your requirements.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                The GSP 65 EVO is the solution for companies that need greater control over the
                packaging process. The machine combines high throughput, seal integrity and the
                ability to handle demanding products.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                At MadejPak we configure each machine to match the product, film and production
                conditions. Our in-house after-sales service team and spare parts stock ensure
                support long after commissioning.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORM ─────────────────────────────────────────────────── */}
      <Box id="enquiry">
        <LeadFormEn defaultModel="GSP 65 EVO" />
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
            <span>GSP 65 EVO</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
