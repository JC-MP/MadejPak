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
  title: 'GSP 45 S – Cantilever Flow Pack Machine',
  description:
    'GSP 45 S – electronic horizontal flow pack machine with cantilever frame. Food and non-food packaging, fast format changeover, printer option for best-before dates. Compact and easy to operate.',
  keywords: [
    'GSP 45 S', 'cantilever flow pack machine', 'horizontal flow wrap cantilever',
    'flow pack food non-food', 'flow pack format change',
    'compact packaging machine', 'GSP 45S',
  ],
  alternates: {
    canonical: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-45-s`,
    title:       'GSP 45 S – Cantilever Flow Pack Machine | MadejPak',
    description: 'Electronic flow pack machine with cantilever frame. Food and non-food packaging, fast format changeover, rich options.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 45 S – flow pack machine – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 45 S',
  description: 'Electronic horizontal flow pack machine with cantilever frame. Food and non-food packaging.',
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
    title: 'Producers looking for a versatile packaging machine',
    desc: 'The GSP 45 S is a great fit for plants that package different product types and need one flexible machine for many applications. It works equally well with food and non-food products.',
  },
  {
    title: 'Companies packaging single products and multipacks',
    desc: 'The GSP 45 S handles both single-unit and multi-piece packaging. A good solution for production lines where pack format, count per package or product range changes regularly.',
  },
  {
    title: 'Plants with frequent format changes',
    desc: 'The machine was designed for fast and easy changeover. Format flexibility allows production to be adapted quickly to different packaging variants.',
  },
  {
    title: 'Producers valuing hygiene and easy access',
    desc: 'The cantilever frame provides easy access to key machine areas, making cleaning, inspection and routine maintenance straightforward — especially important in food packaging environments.',
  },
  {
    title: 'Companies that need simple maintenance',
    desc: 'The GSP 45 S was designed with easy maintenance and safe operation in mind. The open frame and good access to working parts reduce service time.',
  },
];

const ADVANTAGES = [
  {
    title: 'Versatile application',
    desc: 'The GSP 45 S can package a wide range of food and non-food products, in both single and multi-piece configurations.',
  },
  {
    title: 'Fast format changeover',
    desc: 'The flexible design makes it quick to switch between different product sizes and pack types, reducing downtime and increasing production planning freedom.',
  },
  {
    title: 'Reliable operation',
    desc: 'A stable daily packaging solution for production plants. Electronic control supports repeatable process performance.',
  },
  {
    title: 'Easy machine access',
    desc: 'Cantilever frame construction provides comfortable access to the work area, simplifying cleaning, operation and maintenance.',
  },
  {
    title: 'Hygienic design',
    desc: 'The GSP 45 S was designed for easy cleaning — important for food packaging and plants that require regular sanitation.',
  },
  {
    title: 'Safe operation',
    desc: 'Built with operator safety, easy service access and comfortable daily use as priorities.',
  },
  {
    title: 'Product marking option',
    desc: 'A printer can be added for best-before date, batch number or other production markings.',
  },
];

const OPTIONS = [
  'Photocell for pre-printed film registration',
  'Printer (best-before date, batch number)',
  'Dual film reel holder',
  'Extended infeed conveyor',
  'Stainless steel construction (INOX)',
  'Machine castors',
  'Short and long stroke gearbox',
  'Zig-zag knives',
  'Euroslot punch',
  'No product – no bag system',
];

const APPLICATIONS = [
  'Food products',
  'Non-food products',
  'Single-unit packaging',
  'Multi-piece packs (multipacks)',
  'Products requiring frequent format changes',
  'Pre-printed films (with photocell)',
  'Products requiring best-before or batch marking',
];

export default function Gsp45SEnPage() {
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
          <Image src="/images/machines/flowpack-gsp-45s-page.jpg" alt="" fill
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
              GSP 45 S
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              A versatile machine for everyday production.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Electronic horizontal flow pack machine with cantilever frame construction.
              Combines simple operation, format flexibility and stable performance —
              for food and non-food products, in single and multi-piece packaging.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="Cantilever" label="frame construction" />
              <StatChip value="2-in-1" label="food & non-food" />
              <StatChip value="Multi" label="single & multipacks" />
              <StatChip value="10+" label="equipment options" />
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
            Who is the GSP 45 S for?
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
            Advantages of the GSP 45 S
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

      {/* ── OPTIONS ──────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Configuration
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5,
          }}>
            Available equipment options
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, mb: { xs: 5, md: 6 }, maxWidth: 520 }}>
            The GSP 45 S can be equipped with a range of additional options tailored to your specific packaging process.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 1.5 }}>
            {OPTIONS.map((option) => (
              <Box key={option} sx={{
                display: 'flex', alignItems: 'flex-start', gap: 1.5,
                p: 2, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
              }}>
                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.55 }}>
                  {option}
                </Typography>
              </Box>
            ))}
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
                GSP 45 S is suitable for packaging:
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
                GSP 45 S at MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                We configure the machine to match your process.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                The GSP 45 S is the solution for companies that need a versatile, flexible and
                easy-to-operate flow pack machine.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                At MadejPak we configure the machine for the product, film and plant workflow.
                We can add a printer, photocell for pre-printed film, extended infeed conveyor or
                other equipment to match the production process.
                We also provide our own after-sales service and access to spare parts.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORM ─────────────────────────────────────────────────── */}
      <Box id="enquiry">
        <LeadFormEn defaultModel="GSP 45 S" />
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
            <span>GSP 45 S</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
