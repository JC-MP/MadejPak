'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── EN partner data ───────────────────────────────────────────────────────────
const PARTNERS_EN = [
  {
    id: 'concetti',
    name: 'Concetti',
    logoSrc: 'https://link-pack.com/wp-content/uploads/2021/06/Concetti-logo.png',
    category: 'Bagging & end-of-line',
    headline: 'Bagging machines and bagging lines for industry',
    description:
      'Concetti specialises in bagging and filling systems — from standalone machines to complete bagging lines integrated with weighing and conveying. Proven solutions for food, chemical and mineral sectors where dosing precision and process continuity are critical.',
    areas: [
      'Big-bag and open-mouth bagging',
      'Weighing and dosing systems',
      'Integration with palletising and conveying',
      'Lines for food and chemical industry',
    ],
    cta: { label: 'Ask about implementation', href: '/en/kontakt' },
  },
  {
    id: 'essegi',
    name: 'Essegi',
    logoSrc: '/logos/partnerzy/essegi.png',
    category: 'Automatic packaging machines',
    headline: 'Packaging automation for medium and large runs',
    description:
      'Essegi provides compact machines for automatic packaging, wrapping and grouping of products. Solutions designed for plants that need efficient packaging automation without extensive infrastructure — ready to integrate into existing production lines.',
    areas: [
      'Automatic packaging machines',
      'Wrapping and grouping of products',
      'Compact packaging stations',
      'Integration into production lines',
    ],
    cta: { label: 'Explore the technology', href: '/en/kontakt' },
  },
  {
    id: 'gsp',
    name: 'GSP – Tecnopack Group',
    logoSrc: '/logos/partnerzy/GSP LOGO.png',
    category: 'Horizontal packaging machines',
    headline: 'Flow wrap and horizontal packaging machines',
    description:
      'GSP is a specialist in horizontal flow wrap packaging machines and automatic product infeed systems. Machines proven in food and industrial product packaging — delivering a sealed film wrap at high throughput and format flexibility.',
    areas: [
      'Horizontal packaging machines (flow wrap)',
      'Automatic product infeed systems',
      'Food and industrial product packaging',
      'Multi-lane and multi-row systems',
    ],
    cta: { label: 'View solutions', href: '/en/kontakt' },
  },
  {
    id: 'technowrapp',
    name: 'Technowrapp',
    logoSrc: '/logos/partnerzy/technowrapp.png',
    category: 'Pallet wrapping / end-of-line',
    headline: 'Automatic pallet wrapping and load stabilisation',
    description:
      'Technowrapp designs automatic pallet wrappers for manufacturing and logistics plants. Systems adapted to different load formats and line throughputs — from semi-automatic stations to fully integrated end-of-line solutions working with conveyor systems and palletisers.',
    areas: [
      'Automatic pallet wrappers',
      'Stretch wrapping and load stabilisation',
      'End-of-line and pallet handling',
      'Integration with packaging lines and palletisers',
    ],
    cta: { label: 'Ask about implementation', href: '/en/kontakt' },
  },
  {
    id: 'kuka',
    name: 'KUKA',
    logoSrc: '/logos/partnerzy/kuka.png',
    category: 'Industrial robotics',
    headline: 'Industrial robots for palletising, handling and line integration',
    description:
      'KUKA is a leading manufacturer of industrial robots for the packaging, FMCG and production sectors. In MadejPak projects, KUKA robots handle demanding palletising, depalletising and handling tasks — where high throughput, multi-shift reliability and full integration with conveyor and end-of-line systems are required.',
    areas: [
      'Industrial palletising and depalletising',
      'Handling and line transfers',
      'Integration with end-of-line and conveyors',
      'Robotics for FMCG and heavy industry',
    ],
    cta: { label: 'Explore the technology', href: '/en/kontakt' },
  },
];

// ─── Arrow icon ────────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// ─── Partner card ──────────────────────────────────────────────────────────────
function PartnerCard({ partner }: { partner: typeof PARTNERS_EN[number] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderTop: `2px solid var(--dim-10)`,
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderColor: 'var(--dim-16)',
          borderTopColor: ACCENT,
        },
      }}
    >
      {/* Card header: logo + category */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: { xs: 3, md: 3.5 },
          pb: 2.5,
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 2,
          minHeight: 72,
        }}
      >
        {partner.logoSrc ? (
          <Box
            component="img"
            src={partner.logoSrc}
            alt={partner.name}
            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
              e.currentTarget.style.display = 'none';
            }}
            sx={{
              height: 36,
              maxWidth: 160,
              width: 'auto',
              display: 'block',
              objectFit: 'contain',
              filter: 'var(--logo-filter)',
            }}
          />
        ) : (
          <Typography
            sx={{
              fontSize: '1.05rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--dim-75)',
              lineHeight: 1,
              userSelect: 'none',
            }}
          >
            {partner.name}
          </Typography>
        )}

        <Typography
          sx={{
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--dim-28)',
            textAlign: 'right',
            lineHeight: 1.4,
            flexShrink: 0,
          }}
        >
          {partner.category}
        </Typography>
      </Box>

      {/* Card body */}
      <Box sx={{ px: { xs: 3, md: 3.5 }, pt: 3, pb: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            fontSize: '0.95rem',
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            mb: 1.75,
          }}
        >
          {partner.headline}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.85rem',
            color: TEXT_DIM,
            lineHeight: 1.75,
            mb: 3,
            flex: 1,
          }}
        >
          {partner.description}
        </Typography>

        <Stack spacing={1} sx={{ mb: 3.5 }}>
          {partner.areas.map((area) => (
            <Box key={area} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
              <Box
                sx={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  bgcolor: ACCENT,
                  mt: '7px',
                  flexShrink: 0,
                }}
              />
              <Typography sx={{ fontSize: '0.8rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>
                {area}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Card footer: CTA */}
      <Box sx={{ px: { xs: 3, md: 3.5 }, pb: { xs: 3, md: 3.5 }, pt: 0 }}>
        <Box
          component={Link}
          href={partner.cta.href}
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
          {partner.cta.label}
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function EnPartnerzyPage() {
  return (
    <main>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      <Box
        component="section"
        aria-labelledby="partners-heading"
        sx={{ bgcolor: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
      >
        {/* Header band */}
        <Box sx={{ position: 'relative', overflow: 'hidden', borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
          <Box aria-hidden="true" sx={{
            display: { xs: 'none', md: 'block' },
            position: 'absolute', top: 0, right: 0,
            width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
          }}>
            <Box sx={{
              position: 'absolute', inset: 0, zIndex: 1,
              background: [
                `linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)`,
                `linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)`,
              ].join(', '),
            }} />
            <Image src="/images/other/partnerzy-zdjecieusciskdloni.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
          </Box>

          <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: { xs: 2, md: 2.5 } }}
            >
              Technology partners
            </Typography>
            <Typography
              component="h1"
              id="partners-heading"
              sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800,
                letterSpacing: '-0.025em', color: 'var(--text)', lineHeight: 1.15, mb: 2.5 }}
            >
              Proven technologies.<br />
              Verified partners.
            </Typography>
            <Typography
              sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 480, mb: 2 }}
            >
              MadejPak deploys partner technologies as an integrator — we are responsible for selection,
              installation, line integration and service. The customer has a single partner accountable
              for the whole project, regardless of the number of machines in the system.
            </Typography>
            <Typography
              sx={{ fontSize: '0.85rem', color: 'var(--dim-45)', lineHeight: 1.7, maxWidth: 440 }}
            >
              Four main technology partners: Concetti, Essegi, GSP / Tecno Pack,
              Technowrapp — plus KUKA industrial robots for palletising and handling.
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
          {/* Partners grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            {PARTNERS_EN.map((partner) => (
              <PartnerCard key={partner.id} partner={partner} />
            ))}
          </Box>

          {/* Bottom note */}
          <Box
            sx={{
              mt: { xs: 7, md: 9 },
              pt: { xs: 5, md: 6 },
              borderTop: `1px solid ${BORDER}`,
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: { xs: 'flex-start', sm: 'center' },
              justifyContent: 'space-between',
              gap: 3,
            }}
          >
            <Typography sx={{ fontSize: '0.85rem', color: 'var(--dim-42)', maxWidth: 500, lineHeight: 1.7 }}>
              Thanks to technology partnerships, MadejPak customers receive a complete packaging line —
              from the packaging machine, through robotics and palletising, to end-of-line — without
              coordinating multiple suppliers and contractors.
              Partner project case studies can be found in the{' '}
              <Box component={Link} href="/en/realizacje"
                sx={{ color: 'var(--dim-58)', textDecoration: 'underline', textDecorationColor: 'var(--dim-20)',
                  '&:hover': { color: 'var(--text)' } }}>
                Case studies
              </Box>{' '}
              section.
            </Typography>

            <Box
              component={Link}
              href="/en/kontakt"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.75,
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--dim-65)',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'color 0.15s ease, gap 0.15s ease',
                '&:hover': { color: 'var(--text)', gap: 1.25 },
                '&:focus-visible': { outline: `2px solid ${ACCENT}`, outlineOffset: '2px', borderRadius: '2px' },
              }}
            >
              Ask about technology selection for your process
              <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
