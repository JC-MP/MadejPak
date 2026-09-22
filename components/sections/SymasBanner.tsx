'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT = '#E8610A';
// Znika dzień po zakończeniu targów (14–15.10.2026)
const HIDE_AFTER = new Date('2026-10-16');

export default function SymasBanner() {
  if (new Date() >= HIDE_AFTER) return null;

  return (
    <Box
      component="section"
      aria-label="Zaproszenie na targi SYMAS & MAINTENANCE 2026"
      sx={{
        bgcolor: `${ACCENT}0D`,
        borderBottom: '1px solid rgba(232,97,10,0.22)',
        mt: { xs: '60px', md: '72px' },
        py: { xs: 2, md: 2.5 },
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'flex-start', sm: 'center' },
          justifyContent: 'space-between',
          gap: { xs: 1.5, sm: 2 },
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, animation: 'symas-banner-pulse 2s infinite' }} />
            <Typography sx={{ fontSize: { xs: '0.82rem', md: '0.88rem' }, color: 'var(--dim-75)', lineHeight: 1.4 }}>
              <Box component="span" sx={{ fontWeight: 700, color: ACCENT }}>SYMAS &amp; MAINTENANCE 2026</Box>
              {' '}— 14–15 października, EXPO Kraków · stoisko&nbsp;B33.{' '}
              <Box component="span" sx={{ color: 'var(--dim-52)' }}>
                Na żywo: pionowa maszyna pakująca Essegi F1000.
              </Box>
            </Typography>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Box
              component={Link}
              href="/zaproszenie-symas-2026"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 2,
                py: 0.75,
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.04em',
                color: '#fff',
                bgcolor: ACCENT,
                borderRadius: '3px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.15s ease',
                '&:hover': { bgcolor: '#D45509' },
              }}
            >
              Zobacz zaproszenie →
            </Box>
          </Box>
        </Box>
      </Container>
      <style>{`@keyframes symas-banner-pulse{0%,100%{opacity:1}50%{opacity:0.35}}`}</style>
    </Box>
  );
}
