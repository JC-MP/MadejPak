'use client';

import { useState, useMemo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {
  REALIZACJE,
  BRANZE_OPTIONS,
  TYPY_OPTIONS,
  type BranzaId,
  type TypProjektuId,
  type CaseStudy,
} from '@/data/realizacjeData';
import { REALIZACJE_EN } from '@/data/realizacjeDataEn';

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── EN filter labels ────────────────────────────────────────────────────────
const BRANZE_EN: Record<BranzaId, string> = {
  'spozywcza':           'Food',
  'chemiczna':           'Chemical',
  'materialy-budowlane': 'Building materials',
  'opakowania-fmcg':     'Packaging / FMCG',
  'tekstylia':           'Textiles',
};

const TYPY_EN: Record<string, string> = {
  'automatyzacja-pakowania': 'Packaging automation',
  'paletyzacja':             'Palletising',
  'robotyzacja':             'Robotics',
  'integracja-linii':        'Line integration',
  'projekt-custom':          'Custom project',
};

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

// ─── Case study card (EN) ────────────────────────────────────────────────────
function CaseStudyCard({ item }: { item: CaseStudy }) {
  const enItem = REALIZACJE_EN.find((e) => e.slug === item.slug);
  const tytul  = enItem?.tytul  ?? item.tytul;
  const zajawka = enItem?.zajawka ?? item.zajawka;

  return (
    <Box
      component={Link}
      href={`/en/realizacje/${item.slug}`}
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
              {item.branza ? (BRANZE_EN[item.branza] ?? item.branzaLabel) : item.branzaLabel}
            </Box>
          )}
        </Box>
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
          {tytul}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.85rem',
            lineHeight: 1.65,
            color: TEXT_DIM,
          }}
        >
          {zajawka}
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
          Read more
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Main client component ───────────────────────────────────────────────────
export default function RealizacjeClientEn() {
  const [activeBranze, setActiveBranze] = useState<BranzaId[]>([]);
  const [activeTypy, setActiveTypy]     = useState<string[]>([]);

  const toggleBranza = (id: BranzaId) =>
    setActiveBranze((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );

  const toggleTyp = (id: string) =>
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
            {/* Industry filter group */}
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
                Industry
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {BRANZE_OPTIONS.map((opt) => (
                  <FilterPill
                    key={opt.id}
                    label={BRANZE_EN[opt.id] ?? opt.label}
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

            {/* Project type filter group */}
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
                Project type
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {TYPY_OPTIONS.map((opt) => (
                  <FilterPill
                    key={opt.id}
                    label={TYPY_EN[opt.id] ?? opt.label}
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
                  Clear filters
                </Box>
              </Box>
            )}
          </Box>

          {/* Filter result count */}
          {filtersActive && (
            <Typography sx={{ mt: 2.5, fontSize: '0.78rem', color: TEXT_DIM }}>
              {fullItems.length === 0
                ? 'No case studies match the selected filters'
                : `${fullItems.length} case ${fullItems.length === 1 ? 'study' : 'studies'}`}
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
                No case studies match the selected filters.
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
                Clear filters
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
    </>
  );
}
