import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import type { Metadata } from 'next';
import RealizacjeClient from '@/components/realizacje/RealizacjeClient';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Realizacje',
  description:
    'Projekty automatyzacji, paletyzacji i integracji linii pakujących dla producentów z branży spożywczej, chemicznej i przemysłowej. Zrealizowane wdrożenia MadejPak.',
  alternates: {
    canonical: `${SITE_URL}/realizacje`,
    languages: {
      'pl':        `${SITE_URL}/realizacje`,
      'en':        `${SITE_URL}/en/realizacje`,
      'x-default': `${SITE_URL}/realizacje`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/realizacje`,
    title:       'Realizacje | MadejPak',
    description: 'Projekty automatyzacji, paletyzacji i integracji linii pakujących dla producentów z branży spożywczej, chemicznej i przemysłowej. Zrealizowane wdrożenia MadejPak.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Realizacje – MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

export default function RealizacjePage() {
  return (
    <Box sx={{ bgcolor: 'var(--bg)', minHeight: '100vh', color: 'var(--text)' }}>
      {/* Nav spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 8, md: 12 },
        }}
      >
        {/* Right image with gradient */}
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
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
          <Typography
            sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}
          >
            Realizacje
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.025em',
              color: 'var(--dim-85)', mb: { xs: 3, md: 4 },
            }}
          >
            Projekty, które
            <br />
            zmieniają produkcję
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.75,
              color: TEXT_DIM, mb: 3, maxWidth: 560 }}
          >
            Wdrożenia automatyzacji pakowania, robotyzacji i integracji linii produkcyjnych
            dla polskich i europejskich producentów. Każdy projekt dopasowany do realnego
            procesu, środowiska i skali działania klienta.
          </Typography>
          <Box sx={{ display: 'flex', gap: 4, pt: 3, borderTop: `1px solid ${BORDER}`, maxWidth: 400 }}>
            {[
              { value: '25+', label: 'lat doświadczenia' },
              { value: '15+', label: 'branż klientów' },
              { value: 'FAT', label: 'odbiór techniczny przed każdą dostawą' },
            ].map(({ value, label }) => (
              <Box key={label}>
                <Typography sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 0.5 }}>
                  {value}
                </Typography>
                <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Filter + grid (client component) ── */}
      <RealizacjeClient />
    </Box>
  );
}
