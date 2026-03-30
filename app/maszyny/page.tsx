import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import MachineSelector from '@/components/sections/MachineSelector';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Maszyny pakujące – flow pack, VFFS, paletyzacja, workowanie | MadejPak',
  description:
    'Maszyny pakujące MadejPak: flow pack, VFFS (maszyny pionowe), workowanie, systemy paletyzacji, owijarki do palet, transport wewnętrzny i dozowanie. Dobieramy, dostarczamy i integrujemy w linię.',
  keywords: [
    'maszyny pakujące', 'flow pack', 'VFFS', 'pionowe maszyny pakujące',
    'poziome maszyny pakujące', 'systemy paletyzacji', 'workowanie',
    'owijarki do palet', 'transport wewnętrzny', 'dozowanie i ważenie',
    'automat do pakowania', 'linia pakująca',
  ],
  alternates: { canonical: `${SITE_URL}/maszyny` },
  openGraph: {
    url:         `${SITE_URL}/maszyny`,
    title:       'Maszyny pakujące | MadejPak',
    description: 'Maszyny pakujące MadejPak i partnerów: pionowe i poziome maszyny pakujące, workowanie, paletyzacja, owijarki, robotyzacja, transport i dozowanie.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Maszyny pakujące – MadejPak' }],
  },
};

const BG      = 'var(--bg)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
      {children}
    </Typography>
  );
}

export default function MaszynyPage() {
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
          <Image src="/images/other/maszyny-zdjecieogolnedopodstrony.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 14 } }}>
          <SectionLabel>Maszyny</SectionLabel>
          <Typography component="h1"
            sx={{ fontSize: { xs: '2rem', md: '3.2rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, mb: 3, maxWidth: 760 }}>
            Maszyny pakujące dopasowane do Twojego procesu
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: TEXT_DIM, lineHeight: 1.8, maxWidth: 600, mb: 5 }}>
            Oferujemy pełne spektrum maszyn pakujących — własnej produkcji i od sprawdzonych partnerów.
            Dobieramy, integrujemy i uruchamiamy systemy dla przemysłu spożywczego, chemicznego, budowlanego i innych.
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            <Button component={Link} href="/kontakt" variant="contained" disableElevation
              sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.95rem', '&:hover': { bgcolor: '#d4560a' } }}>
              Zapytaj o maszynę
            </Button>
            <Button component={Link} href="/rozwiazania" variant="outlined" disableElevation
              sx={{ borderColor: BORDER, color: 'var(--text)', fontWeight: 600, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.95rem', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
              Zobacz rozwiązania
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Interactive machine selector */}
      <MachineSelector />

      {/* CTA bar */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box>
              <Typography component="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 1.5 }}>
                Szukasz gotowej linii pakującej?
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.7, maxWidth: 520 }}>
                Mamy w ofercie kompletne, skonfigurowane linie gotowe do wdrożenia — sprawdź lub skontaktuj się z nami.
              </Typography>
            </Box>
            <Button component={Link} href="/maszyny/gotowe-linie-pakujace" variant="contained" disableElevation
              sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 4, py: 1.75, borderRadius: '6px', fontSize: '0.95rem', whiteSpace: 'nowrap', flexShrink: 0, '&:hover': { bgcolor: '#d4560a' } }}>
              Gotowe linie pakujące
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
