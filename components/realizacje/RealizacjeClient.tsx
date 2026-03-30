'use client';

import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import {
  REALIZACJE,
  BRANZE_OPTIONS,
  TYPY_OPTIONS,
  type BranzaId,
  type TypProjektuId,
  type CaseStudy,
} from '@/data/realizacjeData';

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Arrow icon ─────────────────────────────────────────────────────────────
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

// ─── Filter pill ─────────────────────────────────────────────────────────────
function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <Box
      component="button"
      onClick={onClick}
      sx={{
        px: 2,
        py: 0.75,
        borderRadius: '3px',
        border: active ? `1px solid ${ACCENT}` : `1px solid ${BORDER}`,
        bgcolor: active ? `${ACCENT}18` : 'transparent',
        color: active ? ACCENT : TEXT_DIM,
        fontSize: '0.75rem',
        fontWeight: active ? 600 : 400,
        letterSpacing: '0.04em',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        whiteSpace: 'nowrap',
        fontFamily: 'inherit',
        '&:hover': {
          borderColor: active ? ACCENT : 'var(--dim-18)',
          color: active ? ACCENT : 'var(--dim-75)',
        },
      }}
    >
      {label}
    </Box>
  );
}

// ─── Client logo with error handling ────────────────────────────────────────
function ClientLogo({ src, alt }: { src: string; alt: string }) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.65rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--dim-20)',
            textAlign: 'center',
          }}
        >
          {alt}
        </Typography>
      </Box>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="160px"
      style={{ objectFit: 'contain' }}
      onError={() => setHasError(true)}
    />
  );
}

// ─── Case study card ─────────────────────────────────────────────────────────
function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <Box
      component={Link}
      href={`/realizacje/${item.slug}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderTop: `2px solid var(--surface-08)`,
        borderRadius: '4px',
        overflow: 'hidden',
        textDecoration: 'none',
        transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          borderTopColor: ACCENT,
          borderColor: ACCENT,
          boxShadow: '0 6px 24px rgba(0,0,0,0.1)',
        },
        '&:hover .cta-btn': {
          bgcolor: ACCENT,
          color: '#fff',
        },
      }}
    >
      {/* Card header */}
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexWrap: 'wrap' }}>
          {item.branzaLabel && (
            <Box
              sx={{
                px: 1.5,
                py: 0.4,
                border: `1px solid ${BORDER}`,
                borderRadius: '2px',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: TEXT_DIM,
              }}
            >
              {item.branzaLabel}
            </Box>
          )}
          {/* HIDDEN: video badge — przywróć usuwając komentarz
          {item.hasVideo && (
            <Box sx={{ px: 1.5, py: 0.4, bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`, borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT }}>
              ▶ VIDEO
            </Box>
          )}
          HIDDEN */}
        </Box>
        {/* HIDDEN: nazwa klienta — przywróć usuwając komentarz
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, color: TEXT_DIM, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {item.klient}
        </Typography>
        HIDDEN */}
        {/* Placeholder ikony klienta — zastąp nazwą klienta po odblokowaniu */}
        <Box
          sx={{
            width: 28,
            height: 28,
            borderRadius: '4px',
            border: `1px solid ${BORDER}`,
            bgcolor: 'var(--surface-04)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Box
            component="svg"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            sx={{ width: 14, height: 14, color: 'var(--dim-28)' }}
          >
            <rect x="2" y="7" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" />
            <path d="M5 15V11h2v4M9 15V11h2v4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M5 7V4a1 1 0 011-1h4a1 1 0 011 1v3" stroke="currentColor" strokeWidth="1.2" />
            <path d="M7 4.5h2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </Box>
        </Box>
      </Box>

      {/* Card body */}
      <Box sx={{ flex: 1, px: { xs: 3, md: 3.5 }, pt: 3, pb: 2.5 }}>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: '1rem', md: '1.075rem' },
            fontWeight: 700,
            lineHeight: 1.4,
            color: 'var(--dim-85)',
            mb: 1.5,
          }}
        >
          {item.tytul}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.85rem',
            lineHeight: 1.65,
            color: TEXT_DIM,
          }}
        >
          {item.zajawka}
        </Typography>

        {/* Tags */}
        {item.tagi.length > 0 && (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 2.5 }}>
            {item.tagi.map((tag) => (
              <Box
                key={tag}
                sx={{
                  px: 1.25,
                  py: 0.3,
                  bgcolor: 'var(--surface-04)',
                  border: `1px solid ${BORDER}`,
                  borderRadius: '2px',
                  fontSize: '0.7rem',
                  color: 'var(--dim-38)',
                  letterSpacing: '0.04em',
                }}
              >
                {tag}
              </Box>
            ))}
          </Box>
        )}
      </Box>

      {/* Card footer CTA */}
      <Box sx={{ px: { xs: 3, md: 3.5 }, pb: { xs: 3, md: 3.5 }, pt: 2 }}>
        <Box
          className="cta-btn"
          sx={{
            display: 'inline-flex', alignItems: 'center', gap: 1,
            px: 2.5, py: 1.25, borderRadius: '6px',
            border: `1.5px solid ${ACCENT}`,
            bgcolor: 'transparent', color: ACCENT,
            fontSize: '0.82rem', fontWeight: 700,
            letterSpacing: '0.02em',
            transition: 'background-color 0.18s ease, color 0.18s ease',
          }}
        >
          Czytaj więcej
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Main client component ───────────────────────────────────────────────────
export default function RealizacjeClient() {
  const [activeBranze, setActiveBranze] = useState<BranzaId[]>([]);
  const [activeTypy, setActiveTypy]     = useState<TypProjektuId[]>([]);

  const toggleBranza = (id: BranzaId) =>
    setActiveBranze((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const toggleTyp = (id: TypProjektuId) =>
    setActiveTypy((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const filtersActive = activeBranze.length > 0 || activeTypy.length > 0;

  const fullItems = useMemo(() => {
    return REALIZACJE.filter((r) => r.status === 'pelne').filter((r) => {
      const matchBranza =
        activeBranze.length === 0 || (r.branza !== null && activeBranze.includes(r.branza));
      const matchTyp =
        activeTypy.length === 0 || r.typyProjektu.some((t) => activeTypy.includes(t));
      return matchBranza && matchTyp;
    });
  }, [activeBranze, activeTypy]);

  const logoOnlyItems = REALIZACJE.filter((r) => r.status === 'logo-only');

  return (
    <>
      {/* ── Filter section ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 3, md: 4 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 3, md: 4 },
              alignItems: { md: 'flex-start' },
            }}
          >
            {/* Branza filter group */}
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
                Branża
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {BRANZE_OPTIONS.map((opt) => (
                  <FilterPill
                    key={opt.id}
                    label={opt.label}
                    active={activeBranze.includes(opt.id)}
                    onClick={() => toggleBranza(opt.id)}
                  />
                ))}
              </Box>
            </Box>

            {/* Divider */}
            <Box
              sx={{
                display: { xs: 'none', md: 'block' },
                width: '1px',
                alignSelf: 'stretch',
                bgcolor: BORDER,
                flexShrink: 0,
              }}
            />

            {/* Typ projektu filter group */}
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
                Typ projektu
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {TYPY_OPTIONS.map((opt) => (
                  <FilterPill
                    key={opt.id}
                    label={opt.label}
                    active={activeTypy.includes(opt.id)}
                    onClick={() => toggleTyp(opt.id)}
                  />
                ))}
              </Box>
            </Box>

            {/* Clear filters */}
            {filtersActive && (
              <Box sx={{ display: 'flex', alignItems: 'flex-end', pb: 0.25 }}>
                <Box
                  component="button"
                  onClick={() => {
                    setActiveBranze([]);
                    setActiveTypy([]);
                  }}
                  sx={{
                    fontSize: '0.72rem',
                    fontWeight: 400,
                    color: TEXT_DIM,
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    padding: 0,
                    fontFamily: 'inherit',
                    transition: 'color 0.15s ease',
                    textDecoration: 'underline',
                    textDecorationColor: 'var(--dim-16)',
                    '&:hover': { color: 'var(--dim-58)' },
                  }}
                >
                  Wyczyść filtry
                </Box>
              </Box>
            )}
          </Box>

          {/* Filter result count */}
          {filtersActive && (
            <Typography
              sx={{
                mt: 2.5,
                fontSize: '0.78rem',
                color: TEXT_DIM,
              }}
            >
              {fullItems.length === 0
                ? 'Brak realizacji spełniających wybrane kryteria'
                : `${fullItems.length} ${fullItems.length === 1 ? 'realizacja' : fullItems.length < 5 ? 'realizacje' : 'realizacji'}`}
            </Typography>
          )}
        </Container>
      </Box>

      {/* ── Case study grid ── */}
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="lg">
          {fullItems.length === 0 && filtersActive ? (
            <Box
              sx={{
                py: 10,
                textAlign: 'center',
                border: `1px dashed ${BORDER}`,
                borderRadius: '4px',
              }}
            >
              <Typography sx={{ color: TEXT_DIM, fontSize: '0.9rem' }}>
                Brak realizacji dla wybranych filtrów.
              </Typography>
              <Box
                component="button"
                onClick={() => {
                  setActiveBranze([]);
                  setActiveTypy([]);
                }}
                sx={{
                  mt: 2,
                  fontSize: '0.8rem',
                  color: ACCENT,
                  cursor: 'pointer',
                  background: 'none',
                  border: 'none',
                  fontFamily: 'inherit',
                  textDecoration: 'underline',
                  '&:hover': { color: 'rgba(232,97,10,0.7)' },
                }}
              >
                Wyczyść filtry
              </Box>
            </Box>
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  lg: 'repeat(3, 1fr)',
                },
                gap: { xs: 2.5, md: 3 },
              }}
            >
              {fullItems.map((item) => (
                <CaseStudyCard key={item.slug} item={item} />
              ))}
            </Box>
          )}
        </Container>
      </Box>

      {/* HIDDEN: logo-only strip — przywróć usuwając komentarz */}
      {false && !filtersActive && logoOnlyItems.length > 0 && (
        <Box
          sx={{
            borderTop: `1px solid ${BORDER}`,
            py: { xs: 6, md: 8 },
            bgcolor: BG_ALT,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: TEXT_DIM,
                mb: 4,
                textAlign: 'center',
              }}
            >
              Zaufali nam również
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: { xs: 2.5, md: 4 },
              }}
            >
              {logoOnlyItems.map((item) => (
                <Box
                  key={item.slug}
                  sx={{
                    position: 'relative',
                    width: 120,
                    height: 52,
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '3px',
                    overflow: 'hidden',
                    flexShrink: 0,
                  }}
                >
                  <ClientLogo src={item.logoPath} alt={item.klient} />
                </Box>
              ))}
            </Box>
          </Container>
        </Box>
      )}
    </>
  );
}
