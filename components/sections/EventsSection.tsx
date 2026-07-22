import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { EVENTS, getEventStatus, type TradeEvent } from '@/data/eventsData';

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// Statusy wydarzeń: trwa (pomarańczowy), nadchodzące (szary), zakończone (wygaszony)
const STATUS_BADGE = {
  ongoing:  { label: 'Trwa',        sx: { bgcolor: ACCENT, color: '#fff', border: `1px solid ${ACCENT}` } },
  upcoming: { label: 'Nadchodzące', sx: { color: 'var(--dim-55)', border: `1px solid ${BORDER}` } },
  past:     { label: 'Zakończone',  sx: { color: 'var(--dim-28)', border: `1px solid ${BORDER}` } },
} as const;

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
      {/* Header */}
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
            color: TEXT_DIM,
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
            ...STATUS_BADGE[status].sx,
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
          {STATUS_BADGE[status].label}
        </Box>
      </Box>

      {/* Body */}
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
            color: TEXT_DIM,
            mb: 2.5,
            letterSpacing: '0.02em',
          }}
        >
          {event.city} — {event.venue}
        </Typography>
        <Typography sx={{ fontSize: '0.83rem', lineHeight: 1.7, color: TEXT_DIM }}>
          {event.zajawka}
        </Typography>
      </Box>

      {/* Footer */}
      <Box sx={{ px: { xs: 3, md: 3.5 }, pb: 3, pt: 1 }}>
        <Box
          component={Link}
          href={`/targi-i-wydarzenia#${event.id}`}
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
          Zobacz szczegóły
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

export default function EventsSection() {
  const sorted = [...EVENTS]
    .sort((a, b) => new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime())
    .slice(0, 4);

  return (
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
        {/* Header row */}
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
              Targi i wydarzenia
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
              Aktywność branżowa
            </Typography>
            <Typography
              sx={{
                fontSize: '0.88rem',
                lineHeight: 1.7,
                color: TEXT_DIM,
                maxWidth: 520,
              }}
            >
              MadejPak uczestniczy w wydarzeniach związanych z technologiami pakowania,
              automatyką i robotyzacją — śledząc rozwój branży i prezentując rozwiązania
              dla przemysłu.
            </Typography>
          </Box>

          <Box
            component={Link}
            href="/targi-i-wydarzenia"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              fontSize: '0.78rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              color: TEXT_DIM,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'color 0.15s ease',
              '&:hover': { color: 'var(--dim-72)' },
              '&:hover svg': { transform: 'translateX(2px)' },
            }}
          >
            Wszystkie wydarzenia
            <ArrowRight />
          </Box>
        </Box>

        {/* Cards grid */}
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

        {/* Bottom CTA */}
        <Box sx={{ textAlign: { xs: 'left', sm: 'center' } }}>
          <Box
            component={Link}
            href="/targi-i-wydarzenia"
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
              color: TEXT_DIM,
              textDecoration: 'none',
              transition: 'border-color 0.15s ease, color 0.15s ease',
              '&:hover': {
                borderColor: 'var(--dim-20)',
                color: 'var(--dim-75)',
              },
              '&:hover svg': { transform: 'translateX(2px)' },
            }}
          >
            Zobacz wszystkie targi i wydarzenia
            <ArrowRight />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
