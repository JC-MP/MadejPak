'use client';

import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('mp-consent');
      if (!consent) setVisible(true);
    } catch {
      // ignore
    }
  }, []);

  function accept(type: 'all' | 'essential') {
    try {
      localStorage.setItem('mp-consent', type);
    } catch {
      // ignore
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        bgcolor: 'var(--bg-card)',
        borderTop: '1px solid var(--border)',
        px: { xs: 2, md: 4 },
        py: { xs: 1.5, md: 1.25 },
        display: 'flex',
        alignItems: 'center',
        gap: { xs: 2, md: 3 },
        flexWrap: 'wrap',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
        animation: 'slideUp 0.3s ease',
        '@keyframes slideUp': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
      }}
    >
      <Typography
        sx={{ fontSize: '0.85rem', color: 'var(--dim-72)', flex: 1, minWidth: 200, lineHeight: 1.5 }}
      >
        Używamy plików cookies. Szczegóły znajdziesz w naszej{' '}
        <Box
          component={Link}
          href="/polityka-cookies"
          sx={{ color: '#E8610A', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
        >
          Polityce Cookies
        </Box>
        .
      </Typography>

      <Box sx={{ display: 'flex', gap: 1.5, flexShrink: 0 }}>
        <Button
          size="small"
          onClick={() => accept('essential')}
          sx={{
            fontSize: '0.8rem',
            px: 2,
            py: 0.75,
            color: 'var(--dim-72)',
            bgcolor: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '6px',
            textTransform: 'none',
            '&:hover': { bgcolor: 'var(--surface-06)' },
          }}
        >
          Tylko niezbędne
        </Button>
        <Button
          size="small"
          onClick={() => accept('all')}
          sx={{
            fontSize: '0.8rem',
            px: 2,
            py: 0.75,
            color: '#fff',
            bgcolor: '#E8610A',
            borderRadius: '6px',
            textTransform: 'none',
            '&:hover': { bgcolor: '#d4560a' },
          }}
        >
          Akceptuj wszystkie
        </Button>
      </Box>
    </Box>
  );
}
