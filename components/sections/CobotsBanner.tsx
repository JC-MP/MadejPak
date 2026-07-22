'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT = '#E8610A';
const HIDE_AFTER = new Date('2026-06-27');

export default function CobotsBanner() {
  if (new Date() >= HIDE_AFTER) return null;

  return (
    <Box
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
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, animation: 'cobot-banner-pulse 2s infinite' }} />
            <Typography sx={{ fontSize: { xs: '0.82rem', md: '0.88rem' }, color: 'var(--dim-75)', lineHeight: 1.4 }}>
              <Box component="span" sx={{ fontWeight: 700, color: ACCENT }}>Coboty w Akcji</Box>
              {' '}— Dni Otwarte MadejPak + DOBOT · do 31 sierpnia 2026, Dziewin.{' '}
              <Box component="span" sx={{ color: 'var(--dim-52)' }}>
                Pokazy na żywo: paletyzacja CR20A, Nova 5, stanowisko paletyzacji.
              </Box>
            </Typography>
          </Box>
          <Box sx={{ flexShrink: 0 }}>
            <Box
              component={Link}
              href="/coboty-w-akcji"
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
              Zarejestruj się →
            </Box>
          </Box>
        </Box>
      </Container>
      <style>{`@keyframes cobot-banner-pulse{0%,100%{opacity:1}50%{opacity:0.35}}`}</style>
    </Box>
  );
}
