'use client';

import React, { useState, useEffect, useCallback, useId, useRef } from 'react';
import Image from 'next/image';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import PromoBanner from '@/components/campaign/PromoBanner';
import { ACTIVE_CAMPAIGN, PROMO_COPY, PROMO_RED, type CampaignLang } from '@/data/campaignData';

const ACCENT = '#E8610A';

const pillSx = {
  display: 'inline-block', px: 1, py: 0.4, bgcolor: PROMO_RED, color: '#fff', borderRadius: '3px',
  fontSize: { xs: '0.64rem', sm: '0.7rem' }, fontWeight: 800, letterSpacing: '0.09em', textTransform: 'uppercase', lineHeight: 1.3,
} as const;

// Modal kampanii na stronie głównej: po opóźnieniu, raz na sesję przeglądarki.
// Treść i włączanie: data/campaignData.ts (ACTIVE_CAMPAIGN).
export default function CampaignPopup({ lang = 'pl' }: { lang?: CampaignLang }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const campaign = ACTIVE_CAMPAIGN;
  const seenKey = `mp-campaign-seen-${campaign.id}`;

  const close = useCallback(() => {
    setOpen(false);
    try { sessionStorage.setItem(seenKey, '1'); } catch { /* ignore */ }
  }, [seenKey]);

  useEffect(() => {
    if (!campaign.enabled) return;
    if (campaign.hideAfter && new Date() >= new Date(campaign.hideAfter)) return;
    let seen = false;
    try { seen = sessionStorage.getItem(seenKey) === '1'; } catch { /* ignore */ }
    if (seen) return;
    const t = setTimeout(() => {
      if (!campaign.showOnPhones && window.matchMedia('(max-width: 767.98px)').matches) return;
      setOpen(true);
    }, campaign.delayMs);
    return () => clearTimeout(t);
  }, [campaign, seenKey]);

  useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { close(); return; }
      if (e.key !== 'Tab') return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };

    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      previousFocus?.focus?.();
    };
  }, [open, close]);

  if (!open) return null;
  const copy = campaign.content[lang];
  const promo = PROMO_COPY[lang];
  const anyPromo = copy.products.some((p) => p.promo);
  const allPromo = copy.products.every((p) => p.promo);

  return (
    <Box
      onClick={close}
      sx={{
        position: 'fixed', inset: 0, zIndex: 12000,
        display: 'flex', alignItems: 'center', justifyContent: 'center', p: { xs: 1.5, sm: 2 },
        bgcolor: 'rgba(6,6,8,0.62)', backdropFilter: 'blur(4px)',
        animation: 'campaignPopFade 0.25s ease',
        '@keyframes campaignPopFade': { from: { opacity: 0 }, to: { opacity: 1 } },
        '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
      }}
    >
      <Box
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'relative', display: 'flex', width: '100%', maxWidth: 880, maxHeight: '100%',
          bgcolor: 'var(--bg-card)', borderRadius: '8px', overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: '0 30px 80px -20px rgba(0,0,0,0.6)',
          animation: 'campaignPopIn 0.28s cubic-bezier(0.2,0.8,0.2,1)',
          '@keyframes campaignPopIn': {
            from: { opacity: 0, transform: 'translateY(12px) scale(0.98)' },
            to: { opacity: 1, transform: 'none' },
          },
          '@media (prefers-reduced-motion: reduce)': { animation: 'none' },
        }}
      >
        <Box
          component="button"
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label={copy.closeLabel}
          sx={{
            position: 'absolute', top: 10, right: 10, zIndex: 2,
            width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%', border: 'none', bgcolor: 'rgba(0,0,0,0.62)', color: '#fff',
            cursor: 'pointer', transition: 'background-color 0.15s ease',
            '&:hover': { bgcolor: 'rgba(0,0,0,0.85)' },
            '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: 2 },
          }}
        >
          <Box component="svg" viewBox="0 0 20 20" fill="none" aria-hidden="true" sx={{ width: 18, height: 18 }}>
            <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </Box>
        </Box>

        <Box sx={{ width: '100%', overflowY: 'auto', overscrollBehavior: 'contain' }}>
          {anyPromo && <PromoBanner lang={lang} sx={{ px: { xs: 4.5, sm: 6 } }} />}
          <Box sx={{ px: { xs: 2, sm: 3.5 }, pt: { xs: 1.75, sm: 2.75 }, pb: { xs: 1.5, sm: 2.25 }, pr: anyPromo ? { xs: 2, sm: 3.5 } : { xs: 7, sm: 8 }, textAlign: anyPromo ? 'center' : 'left' }}>
            <Typography
              id={titleId}
              component="h2"
              sx={{ fontSize: { xs: '1.08rem', sm: '1.35rem', md: '1.6rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--dim-85)' }}
            >
              {allPromo ? copy.promoTitle : copy.dialogTitle}
            </Typography>
            {allPromo && (
              <Typography sx={{ fontSize: { xs: '0.86rem', sm: '1rem' }, lineHeight: 1.4, color: 'var(--dim-72)', mt: 0.5 }}>
                {copy.promoSubtitle}
              </Typography>
            )}
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: { xs: 1.25, sm: 2 }, px: { xs: 1.5, sm: 3.5 } }}>
            {copy.products.map((p) => (
              <Box
                key={p.href}
                sx={{
                  display: 'grid',
                  gridTemplateRows: 'auto 1fr',
                  border: '1px solid var(--border)', borderRadius: '6px', overflow: 'hidden', minWidth: 0,
                }}
              >
                {/* Wysokość celowo mała: większe zdjęcie staje się elementem LCP strony głównej
                    (modal otwiera się po 3 s, więc LCP rośnie do ponad 3 s). */}
                <Box sx={{ position: 'relative', height: { xs: 118, sm: 128, md: 160 }, bgcolor: '#fff' }}>
                  <Image src={p.image} alt={p.imageAlt} fill sizes="(max-width: 600px) 340px, 400px" style={{ objectFit: 'contain', padding: 6 }} />
                  {p.promo && <Box sx={{ ...pillSx, position: 'absolute', top: 8, left: 8 }}>{promo.badge}</Box>}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', p: { xs: 1.5, sm: 2.5 }, minWidth: 0 }}>
                  <Typography sx={{ fontSize: { xs: '0.6rem', sm: '0.66rem' }, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: { xs: 0.4, sm: 0.75 } }}>
                    {p.label}
                  </Typography>
                  <Typography component="h3" sx={{ fontSize: { xs: '0.92rem', sm: '1.08rem' }, fontWeight: 800, lineHeight: 1.25, color: 'var(--dim-85)', mb: { xs: 0.5, sm: 1 } }}>
                    {p.heading}
                  </Typography>
                  <Typography sx={{ fontSize: { xs: '0.76rem', sm: '0.84rem' }, lineHeight: 1.5, color: 'var(--dim-72)', mb: { xs: 1.1, sm: 2 }, flex: 1 }}>
                    {p.description}
                  </Typography>
                  <Box
                    component={Link}
                    href={p.href}
                    onClick={close}
                    sx={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0.75,
                      px: 1.5, py: { xs: 0.9, sm: 1.25 },
                      bgcolor: ACCENT, borderRadius: '4px',
                      fontSize: { xs: '0.74rem', sm: '0.8rem' }, fontWeight: 800, letterSpacing: '0.03em', textTransform: 'uppercase',
                      color: '#fff', textDecoration: 'none', textAlign: 'center',
                      transition: 'background-color 0.15s ease',
                      '&:hover': { bgcolor: '#D45509' },
                    }}
                  >
                    {p.cta}
                    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 13, height: 13, flexShrink: 0 }}>
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: { xs: 0.75, sm: 3 }, px: { xs: 2, sm: 3.5 }, pt: { xs: 1.5, sm: 2.25 }, pb: { xs: 1.75, sm: 2.75 } }}>
            <Typography sx={{ fontSize: { xs: '0.72rem', sm: '0.78rem' }, lineHeight: 1.5, color: 'var(--dim-55)' }}>
              {copy.footer}
            </Typography>
            <Box
              component="button"
              type="button"
              onClick={close}
              sx={{
                flexShrink: 0, background: 'none', border: 'none', cursor: 'pointer', p: 0,
                fontSize: '0.75rem', color: 'var(--dim-55)', textDecoration: 'underline',
                '&:hover': { color: 'var(--dim-85)' },
              }}
            >
              {copy.laterLabel}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
