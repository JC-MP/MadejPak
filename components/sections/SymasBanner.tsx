'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT = '#E8610A';
const DARK   = '#0f0f10';
// Znika dzień po zakończeniu targów (14–15.10.2026)
const HIDE_AFTER = new Date('2026-10-16');

export default function SymasBanner() {
  if (new Date() >= HIDE_AFTER) return null;

  return (
    <Box
      component="section"
      aria-label="Zaproszenie na targi SYMAS & MAINTENANCE 2026"
      sx={{
        bgcolor: DARK,
        borderBottom: `2px solid ${ACCENT}`,
        mt: { xs: '60px', md: '72px' },
        py: { xs: 2.25, md: 2.75 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* subtelna poświata akcentu */}
      <Box sx={{ position: 'absolute', inset: 0, background: `radial-gradient(60% 140% at 100% 0%, ${ACCENT}26 0%, transparent 60%)`, pointerEvents: 'none' }} />
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: { xs: 'flex-start', md: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 1.75, md: 3 },
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, boxShadow: `0 0 0 4px ${ACCENT}33`, animation: 'symas-banner-pulse 1.8s infinite' }} />
            <Box>
              <Typography sx={{ fontSize: { xs: '0.62rem', md: '0.68rem' }, fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 0.5 }}>
                SYMAS &amp; MAINTENANCE 2026 · Targi
              </Typography>
              <Typography sx={{ fontSize: { xs: '1.02rem', md: '1.25rem' }, fontWeight: 700, lineHeight: 1.35, color: '#fff', letterSpacing: '-0.01em' }}>
                Odwiedź nas na stoisku{' '}
                <Box component="span" sx={{ color: ACCENT, fontWeight: 800 }}>B33</Box>
                <Box component="span" sx={{ color: 'rgba(255,255,255,0.72)', fontWeight: 500 }}>{' — 14–15 października, EXPO Kraków'}</Box>
              </Typography>
            </Box>
          </Box>
          <Box
            component={Link}
            href="/zaproszenie-symas-2026"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.9,
              flexShrink: 0,
              px: { xs: 2.5, md: 3 },
              py: { xs: 1, md: 1.15 },
              fontSize: { xs: '0.78rem', md: '0.82rem' },
              fontWeight: 800,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              color: '#fff',
              bgcolor: ACCENT,
              borderRadius: '3px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              width: { xs: '100%', md: 'auto' },
              justifyContent: 'center',
              transition: 'background-color 0.15s ease, transform 0.15s ease',
              '&:hover': { bgcolor: '#D45509', transform: 'translateY(-1px)' },
            }}
          >
            Zobacz zaproszenie
            <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 14, height: 14 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
          </Box>
        </Box>
      </Container>
      <style>{`@keyframes symas-banner-pulse{0%,100%{opacity:1}50%{opacity:0.4}}`}</style>
    </Box>
  );
}
