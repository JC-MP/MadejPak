import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { EVENTS, type TradeEvent } from '@/data/eventsData';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Targi i wydarzenia',
  description:
    'MadejPak na targach branżowych: Taropak, IPACK-IMA, IBA, Warsaw Industry Automatica i innych. Technologie pakowania, automatyzacja i robotyzacja — obecność na kluczowych wydarzeniach przemysłowych.',
  alternates: { canonical: `${SITE_URL}/targi-i-wydarzenia` },
  openGraph: {
    url:         `${SITE_URL}/targi-i-wydarzenia`,
    title:       'Targi i wydarzenia | MadejPak',
    description: 'MadejPak na targach branżowych: Taropak, IPACK-IMA, IBA, Warsaw Industry Automatica i innych. Technologie pakowania, automatyzacja i robotyzacja — obecność na kluczowych wydarzeniach przemysłowych.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak na targach branżowych' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

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

function EventTypeBadge({ type }: { type: TradeEvent['eventType'] }) {
  const label = type === 'dni-otwarte' ? 'Dni Otwarte' : 'Targi';
  return (
    <Box
      sx={{
        display: 'inline-block',
        px: 1.25,
        py: 0.4,
        mb: 2.5,
        border: `1px solid ${type === 'dni-otwarte' ? `${ACCENT}50` : BORDER}`,
        borderRadius: '2px',
        fontSize: '0.6rem',
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: type === 'dni-otwarte' ? ACCENT : 'var(--dim-28)',
      }}
    >
      {label}
    </Box>
  );
}

function EventBlock({ event }: { event: TradeEvent }) {
  return (
    <Box
      id={event.id}
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '220px 1fr' },
        gap: { xs: 3, md: 0 },
        borderTop: `1px solid ${BORDER}`,
        pt: { xs: 5, md: 6 },
        scrollMarginTop: '96px',
      }}
    >
      {/* Left — meta */}
      <Box sx={{ pr: { md: 5 }, borderRight: { md: `1px solid ${BORDER}` } }}>
        <EventTypeBadge type={event.eventType} />

        <Typography
          sx={{
            fontSize: '0.78rem',
            fontWeight: 700,
            color: 'var(--dim-65)',
            letterSpacing: '0.04em',
            mb: 0.75,
            lineHeight: 1.4,
          }}
        >
          {event.dateLabel}
        </Typography>
        <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM, lineHeight: 1.5, mb: 0.5 }}>
          {event.city}
          {event.country !== 'Polska' ? `, ${event.country}` : ''}
        </Typography>
        {event.venue && (
          <Typography sx={{ fontSize: '0.72rem', color: 'var(--dim-28)', lineHeight: 1.5 }}>
            {event.venue}
          </Typography>
        )}

        {event.boothInfo && (
          <Box
            sx={{
              mt: 3,
              px: 2,
              py: 1.25,
              bgcolor: `${ACCENT}12`,
              border: `1px solid ${ACCENT}35`,
              borderRadius: '3px',
            }}
          >
            <Typography
              sx={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 0.5,
              }}
            >
              Stoisko
            </Typography>
            <Typography sx={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--dim-75)' }}>
              {event.boothInfo}
            </Typography>
          </Box>
        )}

        {event.teamNote && (
          <Typography
            sx={{
              mt: 2.5,
              fontSize: '0.72rem',
              color: TEXT_DIM,
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            {event.teamNote}
          </Typography>
        )}
      </Box>

      {/* Right — content */}
      <Box sx={{ pl: { md: 6 } }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '1.2rem', md: '1.4rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--dim-85)',
            mb: 2,
          }}
        >
          {event.name}
        </Typography>

        <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
          {event.opis}
        </Typography>

        {event.highlights && event.highlights.length > 0 && (
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 1.75,
              }}
            >
              Na stoisku
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
              {event.highlights.map((item) => (
                <Box
                  key={item}
                  component="li"
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    py: 0.75,
                    borderBottom: `1px solid ${BORDER}`,
                    '&:last-child': { borderBottom: 'none' },
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      bgcolor: ACCENT,
                      flexShrink: 0,
                      mt: '7px',
                    }}
                  />
                  <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.65, color: TEXT_DIM }}>
                    {item}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {event.partners && event.partners.length > 0 && (
          <Box>
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: TEXT_DIM,
                mb: 1.5,
              }}
            >
              Partnerzy
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {event.partners.map((p) => (
                <Box
                  key={p}
                  sx={{
                    px: 1.75,
                    py: 0.55,
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '3px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'var(--dim-55)',
                    letterSpacing: '0.04em',
                  }}
                >
                  {p}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

// ─── Group events by year ─────────────────────────────────────────────────────
function groupByYear(events: TradeEvent[]): Map<number, TradeEvent[]> {
  const map = new Map<number, TradeEvent[]>();
  for (const e of events) {
    const year = new Date(e.dateStart).getFullYear();
    if (!map.has(year)) map.set(year, []);
    map.get(year)!.push(e);
  }
  return map;
}

export default function TargiPage() {
  const sorted = [...EVENTS].sort(
    (a, b) => new Date(b.dateStart).getTime() - new Date(a.dateStart).getTime()
  );
  const byYear = groupByYear(sorted);
  const years = Array.from(byYear.keys()).sort((a, b) => b - a);

  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      {/* Nav spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 10 },
              alignItems: 'end',
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
                  mb: 2.5,
                }}
              >
                Targi i wydarzenia
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: '-0.03em',
                  color: 'var(--dim-85)',
                }}
              >
                Obecność
                <br />
                branżowa
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1.05rem' },
                  lineHeight: 1.8,
                  color: TEXT_DIM,
                  mb: 4,
                }}
              >
                MadejPak uczestniczy w kluczowych wydarzeniach związanych z technologiami
                pakowania, automatyką przemysłową i robotyzacją — zarówno jako wystawca,
                jak i uczestnik stoisk partnerów technologicznych.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box
                  component={Link}
                  href="/kontakt"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1.5,
                    px: 3,
                    py: 1.25,
                    bgcolor: ACCENT,
                    borderRadius: '3px',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--text)',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: '#D45509' },
                  }}
                >
                  Skontaktuj się
                  <ArrowRight />
                </Box>
                <Box
                  component={Link}
                  href="/maszyny/partnerzy"
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
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: TEXT_DIM,
                    textDecoration: 'none',
                    transition: 'border-color 0.15s ease, color 0.15s ease',
                    '&:hover': {
                      borderColor: 'var(--dim-20)',
                      color: 'var(--dim-75)',
                    },
                  }}
                >
                  Maszyny partnerów
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Events grouped by year ── */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {years.map((year) => (
            <Box key={year} sx={{ mb: { xs: 8, md: 12 } }}>
              {/* Year label */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 3,
                  mb: { xs: 2, md: 3 },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: '1.75rem', md: '2rem' },
                    fontWeight: 800,
                    letterSpacing: '-0.04em',
                    color: ACCENT,
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {year}
                </Typography>
                <Box sx={{ flex: 1, height: '1px', bgcolor: BORDER }} />
              </Box>

              {/* Events in this year */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 8 } }}>
                {byYear.get(year)!.map((event) => (
                  <EventBlock key={event.id} event={event} />
                ))}
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* ── Dlaczego uczestniczymy ── */}
      <Box
        sx={{
          bgcolor: BG_ALT,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 4, md: 10 },
              alignItems: 'start',
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
                Kontekst
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.3rem', md: '1.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                Obecność w branży pakowania
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 2.5 }}>
                Targi i wydarzenia branżowe pozwalają MadejPak śledzić kierunki rozwoju
                technologii pakowania, automatyzacji i robotyzacji procesów. Uczestniczymy
                w wydarzeniach zarówno jako wystawca — prezentując własne rozwiązania i pokazy
                na żywo — jak i jako partner technologiczny obecny na stoiskach współpracujących
                firm.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM }}>
                Bezpośredni kontakt z partnerami — Concetti, Essegi, Tecno Pack i liderami w robotyzacji —
                pozwala nam na bieżąco aktualizować wiedzę o dostępnych technologiach
                i integrować je w projektach dla klientów.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 10, md: 14 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 12 },
              alignItems: 'center',
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
                Kontakt
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.6rem', md: '2rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  mb: 2.5,
                }}
              >
                Chcesz porozmawiać
                o technologii pakowania
                dla swojej produkcji?
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.8, color: TEXT_DIM, mb: 4 }}>
                Skontaktuj się z zespołem MadejPak, aby omówić linię pakującą, automatyzację,
                robotyzację lub modernizację procesu.
              </Typography>
              <Box
                component={Link}
                href="/kontakt"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1.5,
                  px: 3.5,
                  py: 1.5,
                  bgcolor: ACCENT,
                  borderRadius: '3px',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--text)',
                  textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: '#D45509' },
                }}
              >
                Wyślij zapytanie
                <ArrowRight />
              </Box>
            </Box>

            <Box
              sx={{
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderRadius: '4px',
                overflow: 'hidden',
              }}
            >
              <Box sx={{ px: 3.5, py: 2.5, borderBottom: `1px solid ${BORDER}` }}>
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: TEXT_DIM,
                  }}
                >
                  Zobacz też
                </Typography>
              </Box>
              {[
                { label: 'Maszyny partnerów', href: '/maszyny/partnerzy', desc: 'Technologie, które prezentujemy na targach' },
                { label: 'Realizacje', href: '/realizacje', desc: 'Wdrożenia dla klientów' },
                { label: 'O firmie', href: '/o-firmie', desc: 'MadejPak — integrator i producent' },
              ].map(({ label, href, desc }, idx, arr) => (
                <Box
                  key={href}
                  component={Link}
                  href={href}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 3.5,
                    py: 2,
                    borderBottom: idx < arr.length - 1 ? `1px solid ${BORDER}` : 'none',
                    textDecoration: 'none',
                    transition: 'background-color 0.15s ease',
                    '&:hover': { bgcolor: 'var(--surface-03)' },
                    '&:hover .arr': { transform: 'translateX(3px)' },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--dim-75)',
                        mb: 0.25,
                        lineHeight: 1.3,
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM }}>{desc}</Typography>
                  </Box>
                  <Box className="arr" sx={{ color: TEXT_DIM, flexShrink: 0, transition: 'transform 0.15s ease' }}>
                    <ArrowRight />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
