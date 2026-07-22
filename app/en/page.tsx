'use client';

import React, { useRef, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { EVENTS, getEventStatus, type TradeEvent } from '@/data/eventsData';

// ─── Design tokens ────────────────────────────────────────────────────────────
const ACCENT       = '#E8610A';
const ACCENT_HOVER = '#F07520';
const BORDER       = 'var(--border)';
const BG           = 'var(--bg)';
const BG_CARD      = 'var(--bg-card)';
const BG_ALT       = 'var(--bg-alt)';

// ─── Hero assets ──────────────────────────────────────────────────────────────
const VIDEO_SRC = '/videos/hero.mp4';
const POSTER_SRC = '/images/hero-poster.jpg';

// ─── Hero metrics ─────────────────────────────────────────────────────────────
const METRICS = [
  { value: '25', unit: 'yrs', label: 'experience' },
  { value: '200+', unit: '', label: 'implementations' },
  { value: '9', unit: '', label: 'industries served' },
  { value: '6', unit: '', label: 'technology partners' },
] as const;

// ─── Why MadejPak differentiators ─────────────────────────────────────────────
const DIFFERENTIATORS = [
  {
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
    title: 'Integrator, not a dealer',
    desc: 'We design the layout from scratch, select machines, assemble and commission. We take responsibility for the whole line — not for a single item from a catalogue.',
  },
  {
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    title: 'In-house service & parts warehouse',
    desc: 'We respond fast because we have our own service engineers and parts in stock. Response time measured in hours — no dependency on a foreign OEM.',
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    title: '25 years of industry implementations',
    desc: 'Over 200 projects in food, chemical, construction and agri-food industries. We know the sector and what works — before you start paying.',
  },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    title: 'One partner — full accountability',
    desc: 'A single point of contact: from needs analysis and machine selection to line design, commissioning, training and years of service support.',
  },
];

// ─── Solutions ────────────────────────────────────────────────────────────────
const SOLUTIONS = [
  {
    icon: (
      <path d="M12 2H2v10h10V2zM22 2h-6v6h6V2zM22 14h-6v8h6v-8zM12 14H2v8h10v-8z" />
    ),
    problem: 'Manual packaging?',
    headline: 'Packaging automation',
    description:
      'Flow wrap, vertical and horizontal machines, infeed systems — matched to your product and throughput. We eliminate dependence on manual labour.',
    href: '/en/rozwiazania/automatyzacja-pakowania',
    cta: 'Explore packaging automation',
  },
  {
    icon: (
      <>
        <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
        <path d="M2 22c0-4.4 4.5-8 10-8s10 3.6 10 8" />
      </>
    ),
    problem: 'Palletising a bottleneck?',
    headline: 'Robotics & palletising',
    description:
      'Industrial robots, cobots and palletisers from industry leaders — we build stations that run 3 shifts non-stop. Bags, cartons and trays in demanding conditions.',
    href: '/en/rozwiazania/robotyzacja-pakowania',
    cta: 'Explore robotics & palletising',
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    problem: 'Machines not talking to each other?',
    headline: 'Line integration',
    description:
      'We connect into one system: packer, scales, conveyors, robot and palletiser. One controller, one flow, zero bottlenecks.',
    href: '/en/rozwiazania/integracja-linii-pakujacych',
    cta: 'Explore line integration',
  },
  {
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    problem: 'Difficult product or environment?',
    headline: 'Custom projects',
    description:
      'Dust, moisture, corrosives, delicate products, confined space — we design solutions from scratch when off-the-shelf machines fall short.',
    href: '/en/rozwiazania/projekty-custom',
    cta: 'Discuss a custom project',
  },
];

// ─── Service pillars ──────────────────────────────────────────────────────────
const PILLARS = [
  {
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    title: 'Machine & line service',
    desc: 'Diagnostics, fault repair and restoration of full operation on-site.',
  },
  {
    icon: (
      <>
        <path d="M1.05 12A11 11 0 0 1 23 12M5 12a7 7 0 0 1 14 0M9 12a3 3 0 0 1 6 0" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    title: 'Remote support / tele-service',
    desc: 'Fast remote assistance for maintenance teams. Reduces downtime without an on-site visit.',
  },
  {
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
    title: 'Spare parts',
    desc: 'Original parts for MadejPak and partner machines. Fast identification and delivery.',
  },
  {
    icon: (
      <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    ),
    title: 'Modernisations',
    desc: 'Adapting existing lines to new formats and requirements. An alternative to a new investment.',
  },
];

// ─── Shared sub-components ────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}
    >
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Box>
  );
}

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: 44,
        height: 44,
        borderRadius: '8px',
        bgcolor: `color-mix(in srgb, ${ACCENT} 12%, transparent)`,
        border: `1px solid color-mix(in srgb, ${ACCENT} 22%, transparent)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        mb: 3,
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        sx={{
          width: 22,
          height: 22,
          color: ACCENT,
          '& path, & circle, & rect': {
            stroke: 'currentColor',
            strokeWidth: 1.65,
            strokeLinecap: 'round' as const,
            strokeLinejoin: 'round' as const,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

// ─── Video background ─────────────────────────────────────────────────────────

function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const onReady = () => setReady(true);
    el.addEventListener('canplaythrough', onReady, { once: true });
    if (el.readyState >= 4) setReady(true);
    return () => el.removeEventListener('canplaythrough', onReady);
  }, []);

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
      <Box
        sx={{
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
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${POSTER_SRC})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: ready ? 0 : 1,
          transition: 'opacity 0.6s ease',
        }}
      />
      <Box
        ref={videoRef}
        component="video"
        src={VIDEO_SRC}
        poster={POSTER_SRC}
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: ready ? 1 : 0,
          transition: 'opacity 0.6s ease',
        }}
      />
    </Box>
  );
}

// ─── TrustBar ─────────────────────────────────────────────────────────────────

function TrustBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: { xs: 3, sm: 4 },
        alignItems: 'center',
      }}
    >
      {METRICS.map((m) => (
        <Box key={m.label} sx={{ display: 'flex', flexDirection: 'column', gap: 0.15 }}>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.5 }}>
            <Typography
              sx={{
                fontSize: { xs: '1.45rem', md: '1.6rem' },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--text)',
                lineHeight: 1,
              }}
            >
              {m.value}
            </Typography>
            {m.unit && (
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: ACCENT,
                  lineHeight: 1,
                }}
              >
                {m.unit}
              </Typography>
            )}
          </Box>
          <Typography
            sx={{
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--dim-35)',
              lineHeight: 1,
            }}
          >
            {m.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

// ─── EventCard ────────────────────────────────────────────────────────────────

function EventCard({ event }: { event: TradeEvent }) {
  const status = getEventStatus(event);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: status === 'ongoing'
          ? `color-mix(in srgb, ${ACCENT} 6%, var(--bg-card))`
          : BG_CARD,
        border: `1px solid ${status === 'ongoing' ? `color-mix(in srgb, ${ACCENT} 30%, transparent)` : BORDER}`,
        borderTop: `2px solid ${status === 'ongoing' ? ACCENT : 'var(--surface-08)'}`,
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderTopColor: ACCENT,
          borderColor: 'var(--surface-13)',
        },
      }}
    >
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: { xs: 3, md: 3.5 },
          pb: 2.5,
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--dim-72)',
          }}
        >
          {event.dateLabel}
        </Typography>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.6,
            px: 1.25,
            py: 0.35,
            borderRadius: '2px',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            ...(status === 'ongoing'
              ? { bgcolor: ACCENT, color: '#fff', border: `1px solid ${ACCENT}` }
              : status === 'upcoming'
              ? { color: 'var(--dim-55)', border: `1px solid ${BORDER}` }
              : { color: 'var(--dim-28)', border: `1px solid ${BORDER}` }),
          }}
        >
          {status === 'ongoing' && (
            <Box
              sx={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                bgcolor: '#fff',
                animation: 'eventPulse 1.6s ease-in-out infinite',
                '@keyframes eventPulse': { '0%,100%': { opacity: 1 }, '50%': { opacity: 0.3 } },
              }}
            />
          )}
          {status === 'ongoing' ? 'Now on' : status === 'upcoming' ? 'Upcoming' : 'Past'}
        </Box>
      </Box>

      <Box sx={{ flex: 1, px: { xs: 3, md: 3.5 }, pt: 3, pb: 2.5 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1rem', md: '1.05rem' },
            fontWeight: 700,
            lineHeight: 1.35,
            color: 'var(--dim-85)',
            mb: 0.75,
          }}
        >
          {event.name}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.78rem',
            color: 'var(--dim-72)',
            mb: 2.5,
            letterSpacing: '0.02em',
          }}
        >
          {event.city} — {event.venue}
        </Typography>
        <Typography sx={{ fontSize: '0.83rem', lineHeight: 1.7, color: 'var(--dim-72)' }}>
          {event.zajawka}
        </Typography>
      </Box>

      <Box sx={{ px: { xs: 3, md: 3.5 }, pb: 3, pt: 1 }}>
        <Box
          component={Link}
          href={`/en/targi-i-wydarzenia#${event.id}`}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: '0.78rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            color: ACCENT,
            textDecoration: 'none',
            transition: 'gap 0.15s ease',
            '&:hover': { gap: 1.25 },
            '&:hover svg': { transform: 'translateX(2px)' },
          }}
        >
          View details
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function EnHomePage() {
  const sorted = [...EVENTS]
    .sort((a, b) => new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime())
    .slice(0, 4);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Hero"
        sx={{
          position: 'relative',
          bgcolor: BG,
          minHeight: { xs: '100svh', md: '92vh' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          pt: { xs: 10, md: 0 },
          pb: { xs: 8, md: 0 },
        }}
      >
        <VideoBackground />

        <Container
          maxWidth="xl"
          sx={{ position: 'relative', zIndex: 2, py: { xs: 6, md: 10 } }}
        >
          <Box sx={{ maxWidth: { xs: '100%', md: '52%', lg: '48%' } }}>
            <Stack spacing={{ xs: 0, md: 0 }}>
              {/* Eyebrow */}
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                Packaging automation
              </Typography>

              {/* h1 */}
              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem', lg: '3.75rem' },
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  color: 'var(--text)',
                  lineHeight: 1.08,
                  mb: { xs: 3, md: 3.5 },
                }}
              >
                <Box
                  component="span"
                  sx={{ color: ACCENT }}
                >
                  Packaging automation
                </Box>{' '}
                <Box
                  component="span"
                  sx={{ display: { xs: 'inline', sm: 'block' } }}
                >
                  for manufacturing
                </Box>{' '}
                <Box
                  component="span"
                  sx={{ display: { xs: 'inline', sm: 'block' } }}
                >
                  plants
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
                For plant owners and production managers who want to eliminate manual
                packaging, increase line throughput and have the certainty of fast
                service — we design and implement end-to-end.
              </Typography>

              {/* CTA buttons */}
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: { xs: 5, md: 6 } }}
              >
                <Button
                  component={Link}
                  href="/en/rozwiazania"
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
                  Solutions for manufacturing plants
                </Button>

                <Button
                  component={Link}
                  href="/en/maszyny"
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
                  Machines & ready systems
                </Button>
              </Stack>

              <TrustBar />
            </Stack>
          </Box>
        </Container>

        {/* Bottom fade */}
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

      {/* ── WHY MADEJPAK ─────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="why-madejpak-heading"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', lg: 'row' },
              alignItems: { lg: 'flex-end' },
              justifyContent: 'space-between',
              gap: { xs: 4, lg: 8 },
              mb: { xs: 8, md: 10 },
            }}
          >
            <Box sx={{ maxWidth: 560 }}>
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                Why MadejPak
              </Typography>
              <Typography
                component="h2"
                id="why-madejpak-heading"
                sx={{
                  fontSize: { xs: '1.625rem', md: '2.25rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  lineHeight: 1.15,
                  mb: 2,
                }}
              >
                More than a{' '}
                <Box component="span" sx={{ color: ACCENT }}>
                  machine distributor
                </Box>
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                color: 'var(--dim-65)',
                lineHeight: 1.75,
                maxWidth: 520,
                flexShrink: 0,
              }}
            >
              Most companies sell machines. We design, integrate and service entire
              production lines — taking responsibility for the end result, not a single
              component.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {DIFFERENTIATORS.map((d) => (
              <Box
                key={d.title}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `2px solid ${ACCENT}`,
                  borderRadius: '4px',
                  px: { xs: 3, md: 3.5 },
                  pt: { xs: 3, md: 3.5 },
                  pb: { xs: 3, md: 3.5 },
                }}
              >
                <IconBox>{d.icon}</IconBox>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    mb: 1.75,
                  }}
                >
                  {d.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: 'var(--dim-65)',
                    lineHeight: 1.75,
                  }}
                >
                  {d.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SOLUTIONS ────────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="solutions-heading"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 8, md: 10 }, maxWidth: 640 }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: { xs: 2, md: 2.5 },
              }}
            >
              What we do
            </Typography>
            <Typography
              component="h2"
              id="solutions-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.25rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              We solve specific production problems
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                color: 'var(--dim-65)',
                lineHeight: 1.75,
              }}
            >
              Whether you&apos;re packaging manually and want to change that, or building
              a new line from scratch — we select and implement technology matched to
              your product and plant.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: 'repeat(4, 1fr)',
              },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {SOLUTIONS.map((s) => (
              <Box
                key={s.href}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `2px solid var(--surface-07)`,
                  borderRadius: '4px',
                  px: { xs: 3, md: 3.5 },
                  pt: { xs: 3, md: 3.5 },
                  pb: { xs: 3, md: 3.5 },
                  transition: 'border-color 0.2s ease',
                  '&:hover': {
                    borderTopColor: ACCENT,
                    borderColor: 'var(--surface-13)',
                  },
                }}
              >
                <IconBox>{s.icon}</IconBox>
                <Typography
                  sx={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--dim-35)',
                    mb: 1,
                  }}
                >
                  {s.problem}
                </Typography>
                <Typography
                  component="h3"
                  sx={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.3,
                    mb: 1.75,
                  }}
                >
                  {s.headline}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: 'var(--dim-65)',
                    lineHeight: 1.75,
                    flex: 1,
                    mb: 3,
                  }}
                >
                  {s.description}
                </Typography>
                <Box
                  component={Link}
                  href={s.href}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: ACCENT,
                    textDecoration: 'none',
                    letterSpacing: '0.01em',
                    transition: 'gap 0.15s ease, color 0.15s ease',
                    '&:hover': { color: '#F07520', gap: 1.25 },
                    '&:focus-visible': {
                      outline: `2px solid ${ACCENT}`,
                      outlineOffset: '2px',
                      borderRadius: '2px',
                    },
                  }}
                >
                  {s.cta}
                  <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SERVICE TEASER ────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="service-teaser-heading"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 4, md: 0 },
              mb: { xs: 8, md: 10 },
            }}
          >
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: { xs: 2, md: 2.5 },
                }}
              >
                Service & support
              </Typography>
              <Typography
                component="h2"
                id="service-teaser-heading"
                sx={{
                  fontSize: { xs: '1.625rem', md: '2.25rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  lineHeight: 1.15,
                  mb: 2,
                }}
              >
                We deliver machines.
                <Box component="br" />
                <Box component="span" sx={{ color: ACCENT }}>
                  We take care of them for years.
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: 'var(--dim-65)',
                  lineHeight: 1.75,
                }}
              >
                Service is not an add-on for us — it&apos;s part of the offer.
                We respond fast, keep parts in stock and ensure continuous
                operation of your line.
              </Typography>
            </Box>

            <Stack
              direction={{ xs: 'row', md: 'column' }}
              spacing={{ xs: 2, md: 1.5 }}
              alignItems={{ xs: 'flex-start', md: 'flex-end' }}
              sx={{ flexShrink: 0 }}
            >
              <Button
                component={Link}
                href="/en/serwis"
                variant="contained"
                disableElevation
                endIcon={<ArrowRight />}
                sx={{
                  bgcolor: ACCENT,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  px: 3,
                  py: 1.5,
                  minHeight: 46,
                  borderRadius: '6px',
                  gap: 0.5,
                  transition: 'background-color 0.18s ease, transform 0.18s ease',
                  '&:hover': {
                    bgcolor: ACCENT_HOVER,
                    transform: 'translateY(-1px)',
                  },
                }}
              >
                Request service
              </Button>
              <Typography
                sx={{
                  fontSize: '0.78rem',
                  color: 'var(--dim-35)',
                  lineHeight: 1.5,
                  textAlign: { xs: 'left', md: 'right' },
                }}
              >
                serwis@madejpak.pl
              </Typography>
            </Stack>
          </Box>

          {/* Pillars grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
              border: `1px solid ${BORDER}`,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {PILLARS.map((p, i) => (
              <Box
                key={p.title}
                sx={{
                  px: { xs: 3, md: 3.5 },
                  py: { xs: 3, md: 3.5 },
                  borderRight: {
                    xs: 'none',
                    sm: i % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                    lg: i < 3 ? `1px solid ${BORDER}` : 'none',
                  },
                  borderBottom: {
                    xs: `1px solid ${BORDER}`,
                    sm: i < 2 ? `1px solid ${BORDER}` : 'none',
                    lg: 'none',
                  },
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: 'var(--surface-03)' },
                }}
              >
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '8px',
                    bgcolor: `color-mix(in srgb, ${ACCENT} 10%, transparent)`,
                    border: `1px solid color-mix(in srgb, ${ACCENT} 20%, transparent)`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: ACCENT,
                    mb: 2.5,
                    flexShrink: 0,
                  }}
                >
                  <Box
                    component="svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    sx={{
                      width: 20,
                      height: 20,
                      '& path, & circle': {
                        stroke: 'currentColor',
                        strokeWidth: 1.65,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                      },
                    }}
                  >
                    {p.icon}
                  </Box>
                </Box>
                <Typography
                  sx={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    mb: 1.25,
                  }}
                >
                  {p.title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.85rem',
                    color: 'var(--dim-55)',
                    lineHeight: 1.7,
                  }}
                >
                  {p.desc}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Packages teaser strip */}
          <Box
            sx={{
              mt: { xs: 4, md: 5 },
              p: { xs: 3, md: 4 },
              border: `1px solid color-mix(in srgb, ${ACCENT} 20%, transparent)`,
              borderLeft: `3px solid ${ACCENT}`,
              borderRadius: '4px',
              bgcolor: `color-mix(in srgb, ${ACCENT} 4%, transparent)`,
              display: 'flex',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              gap: { xs: 3, sm: 4 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  color: ACCENT,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  mb: 0.75,
                }}
              >
                Service packages
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: 'var(--dim-72)',
                  lineHeight: 1.6,
                }}
              >
                Planned machine care means fewer breakdowns and better control of
                maintenance costs. We offer three service packages — from standard to full
                care.
              </Typography>
            </Box>
            <Box
              component={Link}
              href="/en/serwis#form"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                fontSize: '0.82rem',
                fontWeight: 600,
                color: ACCENT,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'gap 0.15s ease, color 0.15s ease',
                '&:hover': { color: ACCENT_HOVER, gap: 1.25 },
              }}
            >
              View packages
              <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── EVENTS ───────────────────────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="events-heading"
        sx={{
          bgcolor: BG_ALT,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { sm: 'flex-end' },
              justifyContent: 'space-between',
              gap: 3,
              mb: { xs: 5, md: 7 },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  mb: 2,
                }}
              >
                Trade shows & events
              </Typography>
              <Typography
                id="events-heading"
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  mb: 1.5,
                }}
              >
                Industry presence
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'var(--dim-72)',
                  maxWidth: 520,
                }}
              >
                MadejPak participates in events related to packaging technologies,
                automation and robotics — tracking industry developments and presenting
                solutions for manufacturing.
              </Typography>
            </Box>

            <Box
              component={Link}
              href="/en/targi-i-wydarzenia"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                color: 'var(--dim-72)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'color 0.15s ease',
                '&:hover': { color: 'var(--dim-72)' },
                '&:hover svg': { transform: 'translateX(2px)' },
              }}
            >
              All events
              <ArrowRight />
            </Box>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: 2.5, md: 3 },
              mb: { xs: 4, md: 5 },
            }}
          >
            {sorted.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </Box>

          <Box sx={{ textAlign: { xs: 'left', sm: 'center' } }}>
            <Box
              component={Link}
              href="/en/targi-i-wydarzenia"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1.5,
                px: 3,
                py: 1.25,
                border: `1px solid ${BORDER}`,
                borderRadius: '3px',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: 'var(--dim-72)',
                textDecoration: 'none',
                transition: 'border-color 0.15s ease, color 0.15s ease',
                '&:hover': {
                  borderColor: 'var(--dim-20)',
                  color: 'var(--dim-75)',
                },
                '&:hover svg': { transform: 'translateX(2px)' },
              }}
            >
              View all trade shows & events
              <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
