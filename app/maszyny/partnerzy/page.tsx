import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { MACHINE_CATEGORIES, PARTNER_OVERVIEW, type MachineCategory } from '@/data/partnerMachinesData';
import MachineImage from '@/components/ui/MachineImage';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Maszyny partnerów technologicznych | MadejPak',
  description:
    'Katalog kategorii maszyn i technologii pakowania partnerów MadejPak — flow pack, VFFS, paletyzacja, robotyzacja, owijanie palet i więcej.',
  alternates: { canonical: `${SITE_URL}/maszyny/partnerzy` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/partnerzy`,
    title:       'Maszyny partnerów technologicznych | MadejPak',
    description: 'Katalog kategorii maszyn i technologii pakowania partnerów MadejPak — flow pack, VFFS, paletyzacja, robotyzacja, owijanie palet i więcej.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Maszyny partnerów – MadejPak' }],
  },
};

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
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

// ─── Machine category card ─────────────────────────────────────────────────────
function MachineCard({ category, index }: { category: MachineCategory; index: number }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderTop: '2px solid var(--surface-08)',
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderColor: 'var(--surface-13)',
          borderTopColor: ACCENT,
        },
      }}
    >
      {/* Image — clickable link to category subpage */}
      <Box
        component={Link}
        href={category.cta.href}
        sx={{ display: 'block', textDecoration: 'none' }}
      >
        <MachineImage
          src={category.imageSrc}
          alt={category.imageAlt}
          label={category.name}
        />
      </Box>

      {/* Card header: number + category label */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: 2.5,
          pb: 2,
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
        }}
      >
        <Typography
          aria-hidden="true"
          sx={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: ACCENT,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          {num}
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
          {category.category}
        </Typography>
      </Box>

      {/* Card body */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: 2.5,
          pb: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Category name */}
        <Typography
          component="h3"
          sx={{
            fontSize: '1rem',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.3,
            letterSpacing: '-0.015em',
            mb: 1.5,
          }}
        >
          {category.name}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '0.84rem',
            color: TEXT_DIM,
            lineHeight: 1.75,
            mb: 2.5,
          }}
        >
          {category.description}
        </Typography>

        {/* Applications */}
        <Box sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1,
            }}
          >
            Zastosowania
          </Typography>
          <Stack spacing={0.75}>
            {category.applications.map((app) => (
              <Box key={app} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
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
                    fontSize: '0.79rem',
                    color: 'var(--dim-65)',
                    lineHeight: 1.55,
                  }}
                >
                  {app}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        {/* Partners */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1,
            }}
          >
            Partnerzy
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {category.partners.map((partner) => (
              <Box
                key={partner}
                sx={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: ACCENT,
                  bgcolor: 'rgba(232,97,10,0.08)',
                  border: '1px solid rgba(232,97,10,0.2)',
                  borderRadius: '2px',
                  px: 1,
                  py: 0.375,
                  lineHeight: 1.5,
                }}
              >
                {partner}
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Card footer: CTA */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pb: { xs: 3, md: 3.5 },
          pt: 2,
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <Box
          component={Link}
          href={category.cta.href}
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
          {category.cta.label}
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function MaszynyPartnerzyPage() {
  return (
    <main>
      {/* Header spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── SECTION 1: Hero ──────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="machines-heading"
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
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'flex-end' },
              justifyContent: 'space-between',
              gap: { xs: 5, md: 10 },
            }}
          >
            {/* Left: heading */}
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
                Oferta maszyn partnerów
              </Typography>

              <Typography
                component="h1"
                id="machines-heading"
                sx={{
                  fontSize: { xs: '1.875rem', md: '2.5rem', lg: '3rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.025em',
                  color: 'var(--text)',
                  lineHeight: 1.1,
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                Maszyny partnerów technologicznych
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '0.95rem', md: '1rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                  maxWidth: 480,
                }}
              >
                Dobieramy maszyny pakujące, systemy ważenia, paletyzacji,
                robotyzacji i końca linii do produktu, procesu oraz wymagań zakładu.
              </Typography>
            </Box>

            {/* Right: sub-description + CTAs */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3.5,
                flexShrink: 0,
                maxWidth: { xs: '100%', md: 360 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                }}
              >
                MadejPak wdraża technologie partnerów jako integrator — nie jako pośrednik.
                Każda maszyna wchodzi do linii jako zsynchronizowany element, za który
                odpowiadamy od doboru i projektu po uruchomienie i serwis.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button
                  component="a"
                  href="#kategorie"
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: ACCENT,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    px: 3,
                    py: 1.5,
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    transition: 'background-color 0.18s ease, transform 0.18s ease',
                    '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' },
                    '&:active': { transform: 'translateY(0)' },
                  }}
                >
                  Zobacz kategorie maszyn
                </Button>
                <Button
                  component={Link}
                  href="/kontakt"
                  variant="outlined"
                  sx={{
                    borderColor: 'var(--dim-18)',
                    color: 'var(--dim-85)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    textTransform: 'none',
                    px: 3,
                    py: 1.5,
                    borderRadius: '6px',
                    whiteSpace: 'nowrap',
                    transition: 'border-color 0.18s ease, color 0.18s ease',
                    '&:hover': {
                      borderColor: 'var(--dim-42)',
                      color: 'var(--text)',
                      bgcolor: 'var(--surface-04)',
                    },
                  }}
                >
                  Wyślij zapytanie
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Partner name strip */}
          <Box
            sx={{
              mt: { xs: 7, md: 9 },
              pt: { xs: 4, md: 5 },
              borderTop: `1px solid ${BORDER}`,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: { xs: 2.5, sm: 4 },
            }}
          >
            <Typography
              sx={{
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--dim-22)',
                flexShrink: 0,
              }}
            >
              Partnerzy
            </Typography>
            {['GSP / Tecno Pack', 'Essegi', 'Concetti', 'Technowrapp', 'KUKA'].map((name) => (
              <Typography
                key={name}
                sx={{
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: 'var(--dim-38)',
                  letterSpacing: '0.01em',
                }}
              >
                {name}
              </Typography>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 2: Machine categories grid ──────────────────── */}
      <Box
        id="kategorie"
        component="section"
        aria-labelledby="categories-heading"
        sx={{
          bgcolor: BG,
          py: { xs: 10, md: 14 },
          borderBottom: `1px solid ${BORDER}`,
          scrollMarginTop: { xs: 64, lg: 72 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 7, md: 9 } }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Kategorie technologiczne
            </Typography>
            <Typography
              component="h2"
              id="categories-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.15,
                maxWidth: 560,
              }}
            >
              Typy maszyn i systemów w ofercie partnerów
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: 3, md: 3.5 },
            }}
          >
            {MACHINE_CATEGORIES.map((category, index) => (
              <MachineCard key={category.id} category={category} index={index} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 3: Philosophy block ──────────────────────────── */}
      <Box
        component="section"
        sx={{
          bgcolor: BG_ALT,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 9, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              maxWidth: 740,
              borderLeft: `3px solid ${ACCENT}`,
              pl: { xs: 3, md: 4 },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '1.05rem', md: '1.1875rem' },
                color: 'var(--dim-85)',
                lineHeight: 1.8,
                mb: 2.5,
                letterSpacing: '-0.01em',
              }}
            >
              Dobór maszyny pakującej nie wynika wyłącznie z typu urządzenia.
              Kluczowe są produkt, format opakowania, wydajność, sposób podawania,
              integracja z linią i wymagania końca linii.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                color: TEXT_DIM,
                lineHeight: 1.75,
              }}
            >
              MadejPak dobiera technologie partnerów do konkretnego procesu produkcyjnego
              — nie odwrotnie. Punktem wyjścia jest zawsze analiza produktu, tempa linii
              i wymagań zakładu, a dopiero na tej podstawie dobierana jest maszyna
              lub kompletna konfiguracja linii.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 3b: When to choose what ─────────────────────── */}
      <Box
        component="section"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 9, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Dobór technologii
            </Typography>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.15,
                maxWidth: 560,
              }}
            >
              Kiedy maszyna partnera, kiedy MadejPak, kiedy układ mieszany?
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: { xs: 3, md: 3.5 },
            }}
          >
            {[
              {
                label: 'Maszyna partnera',
                when: 'Sprawdzona technologia dla standardowego procesu.',
                desc: 'Flow pack, VFFS, workowanie, owijarki palet, paletyzatory liniowe — gdy wymagania procesu mieszczą się w możliwościach katalogowych maszyny partnera, dobieramy ją i integrujemy z linią.',
                examples: ['Pakowanie flow pack produktów spożywczych', 'Worki 25 kg na gotowej linii workującej', 'Owijarki palet jako element końca linii'],
              },
              {
                label: 'Maszyna MadejPak',
                when: 'Produkt lub linia wymaga rozwiązania szytego na miarę.',
                desc: 'Gdy format jest niestandardowy, środowisko trudne lub maszyna z katalogu nie pasuje do istniejącej linii — budujemy własne urządzenie: od projektu mechanicznego, przez sterownik, po FAT u klienta.',
                examples: ['Niestandardowy format lub chwytak', 'Integracja ze starym sterowaniem', 'Trudne środowisko (zapylenie, wilgoć, temperatura)'],
              },
              {
                label: 'Układ mieszany',
                when: 'Kilka etapów procesu o różnej specyfice.',
                desc: 'Najczęstszy scenariusz: część linii oparta na maszynach partnerów, część na urządzeniach własnych MadejPak. Integrujemy wszystko w jeden ciąg produkcyjny ze wspólnym sterowaniem i jednym odpowiedzialnym za całość.',
                examples: ['Maszyna partnera + transport MadejPak', 'Robot KUKA + chwytak i stacja MadejPak', 'VFFS + przenośniki + paletyzacja robotyczna'],
              },
            ].map((item) => (
              <Box
                key={item.label}
                sx={{
                  bgcolor: BG_CARD,
                  border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${ACCENT}`,
                  borderRadius: '4px',
                  p: { xs: 3, md: 3.5 },
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                <Typography
                  sx={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: ACCENT,
                  }}
                >
                  {item.label}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.975rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1.35,
                  }}
                >
                  {item.when}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.84rem',
                    color: TEXT_DIM,
                    lineHeight: 1.75,
                  }}
                >
                  {item.desc}
                </Typography>
                <Box
                  sx={{
                    mt: 'auto',
                    pt: 2,
                    borderTop: `1px solid ${BORDER}`,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 0.75,
                  }}
                >
                  {item.examples.map((ex) => (
                    <Box key={ex} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
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
                      <Typography sx={{ fontSize: '0.79rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>
                        {ex}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 4: Partner overview ──────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="partners-overview-heading"
        sx={{
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 9, md: 12 },
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 6, md: 8 } }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 2,
              }}
            >
              Technologia partnerów
            </Typography>
            <Typography
              component="h2"
              id="partners-overview-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' },
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'var(--text)',
                lineHeight: 1.15,
              }}
            >
              Partnerzy w ofercie MadejPak
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              columnGap: { md: 8, lg: 12 },
            }}
          >
            {PARTNER_OVERVIEW.filter((p) => p.id !== 'dobot').map((partner) => (
              <Box
                key={partner.id}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 2.5,
                  py: { xs: 3, md: 3.5 },
                  borderBottom: `1px solid ${BORDER}`,
                }}
              >
                <Box
                  sx={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    bgcolor: ACCENT,
                    mt: '9px',
                    flexShrink: 0,
                  }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontSize: '0.95rem',
                      fontWeight: 700,
                      color: 'var(--text)',
                      lineHeight: 1.3,
                      mb: 0.5,
                    }}
                  >
                    {partner.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '0.82rem',
                      color: TEXT_DIM,
                      lineHeight: 1.5,
                    }}
                  >
                    {partner.specialty}
                  </Typography>
                </Box>
                <Box
                  component={Link}
                  href="/partnerzy"
                  aria-label={`Więcej o partnerze ${partner.name}`}
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    color: 'var(--dim-25)',
                    textDecoration: 'none',
                    mt: '2px',
                    flexShrink: 0,
                    transition: 'color 0.15s ease',
                    '&:hover': { color: ACCENT },
                  }}
                >
                  <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 5: Final CTA ─────────────────────────────────── */}
      <Box
        component="section"
        sx={{
          bgcolor: BG,
          py: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              justifyContent: 'space-between',
              gap: { xs: 5, md: 8 },
            }}
          >
            <Box sx={{ maxWidth: 560 }}>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: '1.625rem', md: '2.125rem' },
                  fontWeight: 800,
                  letterSpacing: '-0.02em',
                  color: 'var(--text)',
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Szukasz odpowiedniej maszyny lub kompletnego układu pakowania?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                  maxWidth: 460,
                }}
              >
                Pomagamy dobrać technologię partnerów do produktu, procesu
                oraz planowanej wydajności linii.
              </Typography>
            </Box>

            <Box sx={{ flexShrink: 0 }}>
              <Button
                component={Link}
                href="/kontakt"
                variant="contained"
                disableElevation
                sx={{
                  bgcolor: ACCENT,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  px: { xs: 4, md: 5 },
                  py: 2,
                  borderRadius: '6px',
                  minHeight: 52,
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease',
                  '&:hover': {
                    bgcolor: '#F07520',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 8px 28px rgba(232,97,10,0.35)',
                  },
                  '&:active': { transform: 'translateY(0)' },
                }}
              >
                Skontaktuj się z nami
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
