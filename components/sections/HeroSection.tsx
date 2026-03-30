'use client';

import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

// ─── Design tokens — MadejPak brand ──────────────────────────────────────────
const BG = 'var(--bg)';           // popielaty ciemny
const ACCENT = '#E8610A';       // pomarańczowy
const ACCENT_HOVER = '#F07520'; // pomarańczowy jaśniejszy (hover)

// ─── Video sources ────────────────────────────────────────────────────────────
const YOUTUBE_ID = '-isRtDx3tn8';
const VIDEO_SRC = '/videos/hero.mp4';
const POSTER_SRC = '/images/hero-poster.jpg';

function isSafari(): boolean {
  const ua = navigator.userAgent;
  return /iP(hone|ad|od)/.test(ua) || (/Macintosh/.test(ua) && /Safari/.test(ua) && !/Chrome/.test(ua));
}

// ─── Trust metrics ───────────────────────────────────────────────────────────
const METRICS = [
  { value: '25', unit: 'lat', label: 'doświadczenia' },
  { value: '200+', unit: '', label: 'wdrożeń' },
  { value: '9', unit: '', label: 'obsługiwanych branż' },
  { value: '6', unit: '', label: 'partnerów technologicznych' },
] as const;

// ─── Video background ─────────────────────────────────────────────────────────

function VideoBackground() {
  const [useSafari, setUseSafari] = useState<boolean | null>(null);

  useEffect(() => {
    setUseSafari(isSafari());
  }, []);

  const youtubeSrc =
    `https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}` +
    `?autoplay=1&mute=1&loop=1&playlist=${YOUTUBE_ID}` +
    `&controls=0&rel=0&modestbranding=1&playsinline=1&disablekb=1`;

  const gradientSx = {
    position: 'absolute',
    inset: 0,
    zIndex: 1,
    background: {
      xs: `linear-gradient(to bottom, var(--hero-f0) 0%, var(--hero-99) 40%, var(--hero-e0) 100%)`,
      md: [
        `linear-gradient(to right, var(--hero-bg) 0%, var(--hero-ee) 15%, var(--hero-66) 45%, transparent 100%)`,
        `linear-gradient(to bottom, transparent 55%, var(--hero-99) 100%)`,
      ].join(', '),
    },
  };

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: { xs: '100%', md: '52%' },
        height: '100%',
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <Box sx={gradientSx} />

      {/* Poster — always present as base layer */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${POSTER_SRC})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Safari/iOS — native video file (autoplay works) */}
      {useSafari === true && (
        <Box
          component="video"
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      )}

      {/* Chrome/Firefox — YouTube iframe */}
      {useSafari === false && (
        <Box
          component="iframe"
          src={youtubeSrc}
          allow="autoplay; encrypted-media"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: 'max(100%, calc(100vh * 16 / 9))',
            height: 'max(100%, calc(100vw * 9 / 16))',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            pointerEvents: 'none',
          }}
        />
      )}
    </Box>
  );
}

// ─── Trust bar ────────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <Box
      sx={{
        pt: { xs: 4, md: 5 },
        borderTop: `1px solid var(--surface-08)`,
      }}
    >
      <Stack
        direction="row"
        flexWrap="wrap"
        useFlexGap
        gap={{ xs: '24px 32px', md: '12px 40px' }}
      >
        {METRICS.map((m) => (
          <Box key={m.label}>
            <Typography
              sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1,
                color: ACCENT,
                mb: 0.5,
              }}
            >
              {m.value}
              {m.unit && (
                <Box component="span" sx={{ fontSize: '0.9em', ml: 0.25 }}>
                  {m.unit}
                </Box>
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '0.04em',
                color: 'var(--dim-45)',
                textTransform: 'uppercase',
                lineHeight: 1,
              }}
            >
              {m.label}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HeroSection() {
  return (
    <Box
      component="section"
      aria-label="MadejPak – technologie pakowania i integracja linii produkcyjnych"
      sx={{
        position: 'relative',
        minHeight: { xs: '100svh', md: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        bgcolor: BG,
        overflow: 'hidden',
      }}
    >
      <VideoBackground />

      {/* Content layer */}
      <Container
        maxWidth="xl"
        sx={{
          position: 'relative',
          zIndex: 1,
          py: { xs: 12, sm: 14, md: 0 },
          minHeight: { md: '100vh' },
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/*
         * Content column: full width on mobile, left ~50% on desktop.
         * Max 620px keeps lines at a comfortable reading length.
         */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            maxWidth: { md: 620 },
          }}
        >
          <Stack spacing={0}>
            {/* Brand label */}
            <Typography
              sx={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: { xs: 3, md: 4 },
              }}
            >
              MadejPak
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: {
                  xs: 'clamp(1.75rem, 7vw, 2.25rem)',
                  sm: 'clamp(2rem, 5vw, 2.75rem)',
                  md: 'clamp(2.5rem, 3.2vw, 3.25rem)',
                  lg: '3.5rem',
                },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                mb: { xs: 3, md: 4 },
              }}
            >
              Automatyzacja pakowania{' '}
              <Box
                component="span"
                sx={{
                  color: ACCENT,
                  display: { xs: 'inline', sm: 'block' },
                }}
              >
                dla zakładów
              </Box>{' '}
              <Box
                component="span"
                sx={{ display: { xs: 'inline', sm: 'block' } }}
              >
                produkcyjnych
              </Box>
            </Typography>

            {/* Subtitle */}
            <Typography
              sx={{
                fontSize: { xs: '1rem', md: '1.05rem' },
                lineHeight: 1.75,
                color: 'var(--dim-72)',
                maxWidth: 520,
                mb: { xs: 5, md: 6 },
              }}
            >
              Dla właścicieli zakładów i kierowników produkcji, którzy chcą
              wyeliminować ręczne pakowanie, zwiększyć wydajność linii
              i mieć pewność szybkiego serwisu — projektujemy i wdrażamy
              kompleksowo.
            </Typography>

            {/* CTA buttons */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{ mb: { xs: 5, md: 6 } }}
            >
              {/* Primary */}
              <Button
                component={Link}
                href="/rozwiazania"
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: ACCENT,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  letterSpacing: '0.01em',
                  textTransform: 'none',
                  px: { xs: 3.5, sm: 4 },
                  py: 1.75,
                  minHeight: 52,
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease',
                  '&:hover': {
                    bgcolor: ACCENT_HOVER,
                    transform: 'translateY(-1px)',
                    boxShadow: `0 8px 28px rgba(232,97,10,0.35)`,
                  },
                  '&:active': { transform: 'translateY(0)' },
                }}
              >
                Rozwiązania dla zakładów produkcyjnych
              </Button>

              {/* Secondary */}
              <Button
                component={Link}
                href="/maszyny"
                variant="outlined"
                sx={{
                  borderColor: 'var(--dim-20)',
                  color: 'var(--dim-85)',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.01em',
                  textTransform: 'none',
                  px: { xs: 3.5, sm: 4 },
                  py: 1.75,
                  minHeight: 52,
                  borderRadius: '6px',
                  whiteSpace: 'nowrap',
                  transition: 'border-color 0.18s ease, color 0.18s ease, background-color 0.18s ease, transform 0.18s ease',
                  '&:hover': {
                    borderColor: 'var(--dim-50)',
                    color: 'var(--text)',
                    bgcolor: 'var(--surface-05)',
                    transform: 'translateY(-1px)',
                  },
                  '&:active': { transform: 'translateY(0)' },
                }}
              >
                Maszyny i gotowe układy
              </Button>
            </Stack>

            <TrustBar />
          </Stack>
        </Box>
      </Container>

      {/* Bottom fade — smooth transition to next section */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: { xs: 64, md: 96 },
          background: `linear-gradient(to top, var(--hero-bg), transparent)`,
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
