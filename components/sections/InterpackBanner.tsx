'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT = '#E8610A';
const HIDE_AFTER = new Date('2026-05-20');

export default function InterpackBanner() {
  if (new Date() >= HIDE_AFTER) return null;

  return (
    <Box
      sx={{
        bgcolor: `${ACCENT}0D`,
        borderBottom: '1px solid rgba(232,97,10,0.25)',
        mt: { xs: '60px', md: '72px' },
        py: { xs: 2, md: 2.5 },
        '@media print': { display: 'none' },
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
            {/* Interpack dot */}
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, animation: 'pulse 2s infinite' }} />
            <Typography sx={{ fontSize: { xs: '0.82rem', md: '0.88rem' }, color: 'var(--dim-75)', lineHeight: 1.4 }}>
              <Box component="span" sx={{ fontWeight: 700, color: ACCENT }}>Interpack 2026</Box>
              {' '}— 7–13 maja, Düsseldorf.{' '}
              <Box component="span" sx={{ color: 'var(--dim-58)' }}>
                MadejPak na stoiskach partnerów: GSP, EsseGi, Concetti, Vimco.
              </Box>
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 1.5, flexShrink: 0 }}>
            {/* <Box
              component="a"
              href="https://www.concetti.com/events-registration#formeventi"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                px: 2,
                py: 0.75,
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: ACCENT,
                border: `1px solid ${ACCENT}55`,
                borderRadius: '3px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                transition: 'background-color 0.15s ease',
                '&:hover': { bgcolor: `${ACCENT}12` },
              }}
            >
              Bezpłatny bilet wstępu
            </Box> */}
            <Box
              component={Link}
              href="/zaproszenie-interpack-2026"
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
              Szczegóły →
            </Box>
          </Box>
        </Box>
      </Container>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </Box>
  );
}
