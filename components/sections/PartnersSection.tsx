'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Image from 'next/image';
import Link from 'next/link';
import { PARTNERS, type Partner } from '@/data/partnersData';

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

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

// ─── Partner logo ──────────────────────────────────────────────────────────────
function PartnerLogo({ partner }: { partner: Partner }) {
  if (partner.logoSrc) {
    return (
      <Box
        component="img"
        src={partner.logoSrc}
        alt={partner.name}
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          e.currentTarget.style.display = 'none';
          const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
          if (fallback) fallback.style.display = 'block';
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
    );
  }

  return (
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
  );
}

// ─── Partner card ──────────────────────────────────────────────────────────────
function PartnerCard({ partner }: { partner: Partner }) {
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
        <PartnerLogo partner={partner} />
        {/* fallback tekst — pokazuje się tylko gdy plik logo nie istnieje */}
        <Typography
          sx={{
            display: 'none',
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
        {/* Headline */}
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

        {/* Description */}
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

        {/* Tech areas */}
        <Stack spacing={1} sx={{ mb: 3.5 }}>
          {partner.areas.map((area) => (
            <Box
              key={area}
              sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}
            >
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
              <Typography
                sx={{
                  fontSize: '0.8rem',
                  color: 'var(--dim-65)',
                  lineHeight: 1.55,
                }}
              >
                {area}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Card footer: CTA */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pb: { xs: 3, md: 3.5 },
          pt: 0,
        }}
      >
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
            '&:hover': {
              color: '#F07520',
              gap: 1.25,
            },
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

// ─── Partners section ──────────────────────────────────────────────────────────
export default function PartnersSection() {
  return (
    <Box
      component="section"
      aria-labelledby="partners-heading"
      sx={{ bgcolor: BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}
    >
      {/* Header band — with right image */}
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
            Partnerzy technologiczni
          </Typography>
          <Typography
            component="h2"
            id="partners-heading"
            sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800,
              letterSpacing: '-0.025em', color: 'var(--text)', lineHeight: 1.15, mb: 2.5 }}
          >
            Sprawdzone technologie.<br />
            Zweryfikowani partnerzy.
          </Typography>
          <Typography
            sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 480, mb: 2 }}
          >
            MadejPak wdraża technologie partnerów jako integrator — odpowiadamy za dobór,
            instalację, integrację z linią i serwis. Klient ma jednego partnera odpowiedzialnego
            za całość, niezależnie od liczby maszyn w układzie.
          </Typography>
          <Typography
            sx={{ fontSize: '0.85rem', color: 'var(--dim-45)', lineHeight: 1.7, maxWidth: 440 }}
          >
            Partnerzy technologiczni: Concetti, Essegi, GSP / Tecno Pack, Technowrapp, Vimco —
            plus roboty przemysłowe KUKA do paletyzacji i handlingu.
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        {/* Partners grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: '1fr 1fr 1fr',
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {PARTNERS.filter((p) => !p.hidden).map((partner) => (
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
            Dzięki partnerstwom technologicznym klient MadejPak otrzymuje kompletną linię pakującą —
            od maszyny pakującej, przez robotyzację i paletyzację, po koniec linii — bez konieczności
            koordynowania wielu dostawców i kontrahentów.
            Realizacje z udziałem partnerów znajdziesz w dziale{' '}
            <Box component={Link} href="/realizacje"
              sx={{ color: 'var(--dim-58)', textDecoration: 'underline', textDecorationColor: 'var(--dim-20)',
                '&:hover': { color: 'var(--text)' } }}>
              Realizacje
            </Box>.
          </Typography>

          <Box
            component={Link}
            href="/kontakt"
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
            Zapytaj o dobór technologii dla swojego procesu
            <ArrowRight />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
