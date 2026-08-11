import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Solutions for Industry',
  description:
    'Comprehensive solutions for packaging line integration, automation, robotics, and custom projects for industrial manufacturers.',
  alternates: {
    canonical: `${SITE_URL}/en/rozwiazania`,
    languages: {
      'pl': `${SITE_URL}/rozwiazania`,
      'en': `${SITE_URL}/en/rozwiazania`,
      'x-default': `${SITE_URL}/rozwiazania`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/rozwiazania`,
    title:       'Solutions for Industry | MadejPak',
    description: 'Comprehensive solutions for packaging line integration, automation, robotics, and custom projects for industrial manufacturers.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak Solutions' }],
  },
};

const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

const SOLUTIONS = [
  {
    num: '01',
    title: 'Packaging Line Integration',
    body: 'Do you have packaging machines, scales, and conveyors from different suppliers that don\'t work together? We design the material flow, select communication interfaces, and synchronize every stage — so the entire line works as one organism without bottlenecks.',
    tags: ['Multi-machine lines', 'SCADA / HMI', 'Process synchronization', 'Commissioning'],
    href: '/en/rozwiazania/integracja-linii-pakujacych',
  },
  {
    num: '02',
    title: 'Packaging Automation',
    body: 'Do you have manual packaging stations that can\'t keep up with throughput or generate high labor costs? We implement flowpack, vertical machines, feeding and weighing systems — tailored to your specific product and production pace.',
    tags: ['Automatic feeders', 'Weighing & dosing', 'Labeling', 'Quality control'],
    href: '/en/rozwiazania/automatyzacja-pakowania',
  },
  {
    num: '03',
    title: 'Packaging Robotics',
    body: 'Is the end-of-line a bottleneck? We implement robots and cobots for palletizing, pick-and-place, and handling. We build workstations running 3 shifts — from a single robot to an integrated cell with a vision system.',
    tags: ['Robots & cobots', 'Palletizing', 'Pick-and-place', 'Vision systems'],
    href: '/en/rozwiazania/robotyzacja-pakowania',
  },
  {
    num: '04',
    title: 'Custom Projects',
    body: 'Dust, aggressive substances, delicate products, limited space, or a format with no off-the-shelf machine? We design and build non-standard solutions from concept and prototype through to production deployment.',
    tags: ['Non-standard formats', 'Harsh environments', 'Prototyping', 'Production deployment'],
    href: '/en/rozwiazania/projekty-custom',
  },
];

const PATHS = [
  { question: 'Want to connect existing machines into a single production line?', solution: 'Packaging Line Integration', href: '/en/rozwiazania/integracja-linii-pakujacych' },
  { question: 'Do you have manual packaging to replace or support with automation?', solution: 'Packaging Automation', href: '/en/rozwiazania/automatyzacja-pakowania' },
  { question: 'Does the end of the line require robotics or do you have palletizing to do?', solution: 'Packaging Robotics', href: '/en/rozwiazania/robotyzacja-pakowania' },
  { question: 'Is your product non-standard or do the conditions require a custom solution?', solution: 'Custom Project', href: '/en/rozwiazania/projekty-custom' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
      {children}
    </Typography>
  );
}

export default function RozwiazaniaEnPage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* Hero */}
      <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg-alt) 0%, color-mix(in srgb, var(--bg-alt) 75%, transparent) 18%, color-mix(in srgb, var(--bg-alt) 25%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg-alt) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg-alt) 55%, transparent) 100%)`,
            ].join(', '),
          }} />
          <Image src="/images/other/rozwiazania-ogolnezdjecie.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
          <SectionLabel>Solutions</SectionLabel>
          <Typography component="h1"
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, mb: 3, maxWidth: 700 }}>
            Complete packaging systems — from concept to commissioning
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: TEXT_DIM, lineHeight: 1.8, maxWidth: 620, mb: 4 }}>
            MadejPak designs, supplies, and integrates packaging systems for manufacturers across various industries.
            We combine our own machines, partner technologies, and software into a single, operational production flow.
          </Typography>
          <Button component={Link} href="/en/kontakt" variant="contained" disableElevation
            sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.95rem', '&:hover': { bgcolor: '#d4560a' } }}>
            Ask about a project
          </Button>
        </Container>
      </Box>

      {/* Decision helper */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
            Find your solution
          </Typography>
          <Typography component="h2"
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5 }}>
            Which solution fits your situation?
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.7, mb: 5, maxWidth: 560 }}>
            Choose the description closest to your need — or contact us if your situation is more complex.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
            {PATHS.map((p, i) => (
              <Box
                key={p.href}
                component={Link}
                href={p.href}
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: { xs: 2, md: 4 },
                  px: { xs: 3, md: 4 }, py: { xs: 2.5, md: 3 },
                  borderBottom: i < PATHS.length - 1 ? `1px solid ${BORDER}` : 'none',
                  bgcolor: BG_CARD, textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: `color-mix(in srgb, ${ACCENT} 5%, var(--bg-card))` },
                  '&:hover .path-arrow': { transform: 'translateX(4px)' },
                }}
              >
                <Typography sx={{ fontSize: { xs: '0.88rem', md: '0.95rem' }, color: 'var(--dim-72)', lineHeight: 1.55 }}>
                  {p.question}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
                  <Typography sx={{ fontSize: { xs: '0.82rem', md: '0.88rem' }, fontWeight: 700, color: ACCENT, whiteSpace: 'nowrap' }}>
                    {p.solution}
                  </Typography>
                  <Box
                    className="path-arrow"
                    component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    sx={{ width: 14, height: 14, flexShrink: 0, color: ACCENT, transition: 'transform 0.15s ease' }}
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography sx={{ fontSize: '0.88rem', color: 'var(--dim-50)' }}>
              Still not sure which one fits? Free process analysis.
            </Typography>
            <Button component={Link} href="/en/kontakt" variant="outlined" size="small" disableElevation
              sx={{ borderColor: 'var(--dim-20)', color: 'var(--dim-85)', fontWeight: 600, textTransform: 'none', px: 2.5, py: 1, borderRadius: '6px', fontSize: '0.85rem', whiteSpace: 'nowrap', '&:hover': { borderColor: ACCENT, color: ACCENT, bgcolor: 'transparent' } }}>
              Contact us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Solutions grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            {SOLUTIONS.map((s) => (
              <Box key={s.num} component={Link} href={s.href}
                sx={{
                  display: 'flex', flexDirection: 'column',
                  bgcolor: BG_CARD, border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${ACCENT}`, borderRadius: '4px',
                  p: { xs: 3, md: 4 }, textDecoration: 'none',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                  '&:hover': { boxShadow: '0 8px 32px rgba(0,0,0,0.12)' },
                }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', mb: 2 }}>
                  {s.num}
                </Typography>
                <Typography component="h2" sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, mb: 2 }}>
                  {s.title}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75, mb: 3, flex: 1 }}>
                  {s.body}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {s.tags.map((tag) => (
                    <Typography key={tag} sx={{ fontSize: '0.72rem', fontWeight: 600, px: 1.25, py: 0.5, bgcolor: 'var(--surface-05)', color: 'var(--dim-65)', borderRadius: '4px' }}>
                      {tag}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
