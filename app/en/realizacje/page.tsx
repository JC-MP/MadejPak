import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { Metadata } from 'next';
import RealizacjeClientEn from '@/components/realizacje/RealizacjeClientEn';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Case Studies | MadejPak',
  description:
    'Packaging automation, palletizing, and production line integration projects for manufacturers in the food, chemical, and industrial sectors. MadejPak completed implementations.',
  alternates: {
    canonical: `${SITE_URL}/en/realizacje`,
    languages: {
      'pl': `${SITE_URL}/realizacje`,
      'en': `${SITE_URL}/en/realizacje`,
      'x-default': `${SITE_URL}/realizacje`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/realizacje`,
    title:       'Case Studies | MadejPak',
    description: 'Packaging automation, palletizing, and production line integration projects for manufacturers in the food, chemical, and industrial sectors.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Case Studies – MadejPak' }],
  },
};

const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

export default function RealizacjeEnPage() {
  return (
    <Box sx={{ bgcolor: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* Hero */}
      <Box sx={{ position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Box aria-hidden="true" sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', top: 0, right: 0, width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)`,
            ].join(', '),
          }} />
          <Image src="/images/other/realizacje.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
            Case Studies
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' }, fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--dim-85)', mb: { xs: 3, md: 4 } }}>
            Projects that<br />transform production
          </Typography>
          <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.75, color: TEXT_DIM, mb: 3, maxWidth: 560 }}>
            Packaging automation, robotics, and production line integration deployments for Polish and European manufacturers.
            Every project tailored to a real process, environment, and client scale.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, pt: 3, borderTop: `1px solid ${BORDER}`, maxWidth: 400 }}>
            {[
              { value: '25+', label: 'years of experience' },
              { value: '15+', label: 'client industries' },
              { value: 'FAT', label: 'technical acceptance before each delivery' },
            ].map(({ value, label }) => (
              <Box key={label}>
                <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 0.5 }}>{value}</Typography>
                <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>{label}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <RealizacjeClientEn />
    </Box>
  );
}
