'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT = '#E8610A';
const DARK   = '#0f0f10';

function grantAllConsent() {
  try { localStorage.setItem('mp-consent', 'all'); } catch { /* ignore */ }
  const w = window as any;
  if (typeof w.gtag === 'function') {
    w.gtag('consent', 'update', {
      ad_storage:         'granted',
      ad_user_data:       'granted',
      ad_personalization: 'granted',
      analytics_storage:  'granted',
    });
    // Konwersja — wejście na stronę Coboty (Google Ads CHD)
    w.gtag('event', 'coboty_wejscie');
    w.gtag('event', 'conversion', {
      send_to:  'AW-18172696218/oF1RCKLJjLMcEJqttdlD',
      value:     100,
      currency: 'PLN',
    });
  }
}

function denyMarketing() {
  try { localStorage.setItem('mp-consent', 'essential'); } catch { /* ignore */ }
}

export default function CobotyConsentGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const c = localStorage.getItem('mp-consent');
      if (!c) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function accept() {
    grantAllConsent();
    setVisible(false);
  }

  function essential() {
    denyMarketing();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        bgcolor: DARK,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        animation: 'cgFadeIn 0.3s ease',
        '@keyframes cgFadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
        overflow: 'hidden',
      }}
    >
      {/* ── lewa kolumna: zdjęcie cobota ── */}
      <Box
        sx={{
          display: { xs: 'none', md: 'block' },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* gradient overlay żeby cobot wtapiał się w ciemne tło */}
        <Box sx={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: `linear-gradient(to right, transparent 50%, ${DARK} 100%), linear-gradient(to bottom, ${DARK} 0%, transparent 15%, transparent 85%, ${DARK} 100%)`,
        }} />
        <Image
          src="/images/cobots/cr20a-transparent.png"
          alt="DOBOT CR20A — cobot przemysłowy"
          fill
          sizes="50vw"
          style={{ objectFit: 'contain', objectPosition: 'center', opacity: 0.85 }}
          priority
        />
      </Box>

      {/* ── prawa kolumna: treść ── */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'flex-start' },
          justifyContent: 'center',
          px: { xs: 3, sm: 5, md: 7 },
          py: { xs: 6, md: 0 },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        {/* eyebrow */}
        <Typography sx={{
          fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.22em',
          textTransform: 'uppercase', color: ACCENT, mb: { xs: 3, md: 4 },
        }}>
          MadejPak · Coboty w Akcji · 8–19 czerwca 2026
        </Typography>

        {/* headline */}
        <Typography
          component="h1"
          sx={{
            fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4rem', lg: '4.75rem' },
            fontWeight: 800,
            lineHeight: 0.97,
            letterSpacing: '-0.04em',
            color: '#fff',
            mb: 3,
          }}
        >
          Coboty<br />
          <Box component="span" sx={{ color: ACCENT }}>w akcji.</Box>
        </Typography>

        {/* opis */}
        <Typography sx={{
          fontSize: { xs: '0.88rem', md: '0.92rem' },
          color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.8,
          maxWidth: 380,
          mb: { xs: 4, md: 5 },
        }}>
          Żeby zobaczyć program i zarezerwować termin, potrzebujemy Twojej zgody
          na pliki cookies — używamy ich do analizy ruchu i mierzenia skuteczności reklam.{' '}
          <Box
            component={Link}
            href="/polityka-cookies"
            target="_blank"
            sx={{
              color: 'rgba(255,255,255,0.35)',
              textDecoration: 'underline',
              textDecorationColor: 'rgba(255,255,255,0.15)',
              '&:hover': { color: 'rgba(255,255,255,0.65)' },
              transition: 'color 0.15s',
            }}
          >
            Polityka cookies →
          </Box>
        </Typography>

        {/* główny przycisk */}
        <Box
          component="button"
          onClick={accept}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 4, md: 5 },
            py: { xs: 1.75, md: 2 },
            bgcolor: ACCENT,
            border: 'none',
            borderRadius: '3px',
            fontSize: { xs: '0.85rem', md: '0.9rem' },
            fontWeight: 700,
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            color: '#fff',
            cursor: 'pointer',
            width: { xs: '100%', sm: 'auto' },
            maxWidth: { xs: 360, sm: 'none' },
            transition: 'background-color 0.15s',
            mb: 2,
            '&:hover': { bgcolor: '#D45509' },
          }}
        >
          Wchodzę — akceptuję cookies
        </Box>

        {/* odrzuć */}
        <Box
          component="button"
          onClick={essential}
          sx={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.72rem',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.03em',
            textDecoration: 'underline',
            textDecorationColor: 'rgba(255,255,255,0.1)',
            '&:hover': { color: 'rgba(255,255,255,0.5)' },
            transition: 'color 0.15s',
            p: 0,
          }}
        >
          Kontynuuj tylko z niezbędnymi
        </Box>
      </Box>
    </Box>
  );
}
