'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT = '#E8610A';
// Znika dzień po zakończeniu targów (14–15.10.2026)
const HIDE_AFTER = new Date('2026-10-16');
// Pokazujemy raz na sesję przeglądarki
const SEEN_KEY = 'mp-symas-popup-seen';
const DELAY_MS = 3000;

export default function SymasPopup() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try { sessionStorage.setItem(SEEN_KEY, '1'); } catch { /* ignore */ }
  }, []);

  useEffect(() => {
    if (new Date() >= HIDE_AFTER) return;
    let seen = false;
    try { seen = sessionStorage.getItem(SEEN_KEY) === '1'; } catch { /* ignore */ }
    if (seen) return;
    const t = setTimeout(() => {
      // Nie pokazujemy popupu na telefonach (< 768 px)
      if (window.matchMedia('(max-width: 767.98px)').matches) return;
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  if (!open) return null;

  return (
    <Box
      role="dialog"
      aria-modal="true"
      aria-label="Zaproszenie na targi SYMAS & MAINTENANCE 2026"
      onClick={close}
      sx={{
        position: 'fixed', inset: 0, zIndex: 12000,
        display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2,
        bgcolor: 'rgba(6,6,8,0.62)', backdropFilter: 'blur(4px)',
        animation: 'symasPopFade 0.25s ease',
        '@keyframes symasPopFade': { from: { opacity: 0 }, to: { opacity: 1 } },
      }}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'relative', width: '100%', maxWidth: 420,
          maxHeight: '92vh', overflowY: 'auto',
          bgcolor: 'var(--bg-card)', borderRadius: '8px', overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)',
          animation: 'symasPopIn 0.28s cubic-bezier(0.2,0.8,0.2,1)',
          '@keyframes symasPopIn': {
            from: { opacity: 0, transform: 'translateY(12px) scale(0.98)' },
            to: { opacity: 1, transform: 'none' },
          },
        }}
      >
        {/* Zamknij */}
        <Box
          component="button"
          onClick={close}
          aria-label="Zamknij"
          sx={{
            position: 'absolute', top: 10, right: 10, zIndex: 2,
            width: 34, height: 34, display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', border: 'none', bgcolor: 'rgba(0,0,0,0.45)', color: '#fff',
            cursor: 'pointer', transition: 'background-color 0.15s ease',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.72)' },
          }}
        >
          <Box component="svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" sx={{ width: 16, height: 16 }}>
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </Box>
        </Box>

        {/* Zdjęcie */}
        <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 10', bgcolor: '#f2f2f2' }}>
          <Image src="/images/targi/essegi-f1000.jpg" alt="Essegi F1000 — na stoisku MadejPak" fill style={{ objectFit: 'cover' }} sizes="420px" />
          <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(0,0,0,0.35) 100%)' }} />
        </Box>

        {/* Treść */}
        <Box sx={{ px: { xs: 3, md: 3.5 }, pt: 3, pb: { xs: 3, md: 3.5 }, textAlign: 'center' }}>
          <Box sx={{ position: 'relative', width: 210, height: 46, mx: 'auto', mb: 2 }}>
            <Image src="/images/targi/symas-2026-logo.png" alt="SYMAS & MAINTENANCE 2026" fill style={{ objectFit: 'contain' }} sizes="210px" />
          </Box>

          <Typography sx={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.01em', color: ACCENT, mb: 1 }}>
            Spotkajmy się na targach!
          </Typography>
          <Typography sx={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--dim-75)', mb: 0.75 }}>
            14–15 października 2026 · EXPO Kraków
          </Typography>
          <Typography sx={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--dim-85)', mb: 2 }}>
            Odwiedź nas na stoisku{' '}
            <Box component="span" sx={{ color: ACCENT }}>B33</Box>
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.65, color: 'var(--dim-60)', mb: 2.5, maxWidth: 320, mx: 'auto' }}>
            Na żywo: pionowa maszyna pakująca <b>Essegi F1000</b> — automatyzacja, robotyzacja
            i&nbsp;integracja kompletnych linii pakujących.
          </Typography>

          <Box
            component={Link}
            href="/zaproszenie-symas-2026"
            onClick={close}
            sx={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1,
              width: '100%', px: 3, py: 1.4, mb: 1.5,
              bgcolor: ACCENT, borderRadius: '4px',
              fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase',
              color: '#fff', textDecoration: 'none',
              transition: 'background-color 0.15s ease',
              '&:hover': { bgcolor: '#D45509' },
            }}
          >
            Zobacz zaproszenie
            <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 14, height: 14 }}>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </Box>
          </Box>
          <Box
            component="button"
            onClick={close}
            sx={{
              background: 'none', border: 'none', cursor: 'pointer', p: 0,
              fontSize: '0.75rem', color: 'var(--dim-45)', textDecoration: 'underline',
              '&:hover': { color: 'var(--dim-72)' },
            }}
          >
            Może później
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
