import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import { INDUSTRIES, type Industry } from '@/data/industriesData';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Linie pakujące dla branży spożywczej, chemicznej i kosmetycznej | MadejPak',
  description:
    'MadejPak projektuje linie pakujące dla przemysłu spożywczego, chemicznego, kosmetycznego i farmaceutycznego. Pakowanie nawozów, kosmetyków, żywności, proszków i granulatów.',
  keywords: [
    'linie pakujące dla branży spożywczej', 'pakowanie kosmetyków',
    'pakowanie nawozów', 'linia pakująca przemysł chemiczny',
    'pakowanie żywności linia', 'maszyny pakujące farmacja',
    'pakowanie proszków i granulatów', 'automatyzacja pakowania spożywcze',
  ],
  alternates: { canonical: `${SITE_URL}/branze` },
  openGraph: {
    url:         `${SITE_URL}/branze`,
    title:       'Branże | MadejPak',
    description: 'Technologie pakowania, integracja linii i automatyzacja dla przemysłu spożywczego, chemicznego, kosmetycznego, farmaceutycznego i innych branż produkcyjnych.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Branże – MadejPak' }],
  },
};

// ─── Design tokens ─────────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Industry icons ────────────────────────────────────────────────────────────

const ICON_PATHS: Record<string, React.ReactNode> = {
  food: (
    <>
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </>
  ),
  chemical: (
    <>
      <path d="M9 3h6" />
      <path d="M8.5 3v5.5L5 17a2 2 0 0 0 1.84 2.77h10.32A2 2 0 0 0 19 17l-3.5-8.5V3" />
      <path d="M7.5 13.5h9" />
    </>
  ),
  cosmetics: (
    <>
      <path d="M12 2a4 4 0 0 1 4 4v1H8V6a4 4 0 0 1 4-4z" />
      <path d="M8 7h8v13a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
      <path d="M12 11v5" />
      <path d="M10 13h4" />
    </>
  ),
  pharma: (
    <>
      <rect x="8" y="2" width="8" height="8" rx="1" />
      <rect x="8" y="14" width="8" height="8" rx="1" />
      <rect x="2" y="8" width="8" height="8" rx="1" />
      <rect x="14" y="8" width="8" height="8" rx="1" />
    </>
  ),
  petfood: (
    <>
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="7" r="2" />
      <circle cx="6.5" cy="12" r="1.5" />
      <circle cx="17.5" cy="12" r="1.5" />
      <path d="M12 22c-3.3 0-6-2-6-4.5S8 14 12 14s6 1 6 3.5S15.3 22 12 22z" />
    </>
  ),
  beverages: (
    <>
      <path d="M9 2v3M15 2v3" />
      <path d="M8.5 5S6 6.5 6 10v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9c0-3.5-2.5-5-2.5-5z" />
      <path d="M8 12h8" />
    </>
  ),
  ecommerce: (
    <>
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <path d="M3.29 6.96L12 12l8.71-5.04" />
      <path d="M12 22.08V12" />
    </>
  ),
  industrial: (
    <>
      <path d="M2 20h20" />
      <path d="M6 20V10l6-7 6 7v10" />
      <path d="M9 20v-5h6v5" />
      <path d="M9 12h6" />
    </>
  ),
  other: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
    </>
  ),
};

function IndustryIcon({ iconId }: { iconId: string }) {
  return (
    <Box
      component="svg"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      sx={{
        width: 28,
        height: 28,
        flexShrink: 0,
        color: ACCENT,
        '& path, & circle, & rect': {
          stroke: 'currentColor',
          strokeWidth: 1.6,
          strokeLinecap: 'round' as const,
          strokeLinejoin: 'round' as const,
        },
      }}
    >
      {ICON_PATHS[iconId] ?? ICON_PATHS.other}
    </Box>
  );
}

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

// ─── Industry card ─────────────────────────────────────────────────────────────
function IndustryCard({ industry }: { industry: Industry }) {
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
      {/* Card header: icon + category */}
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
        }}
      >
        <IndustryIcon iconId={industry.iconId} />

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
          {industry.category}
        </Typography>
      </Box>

      {/* Card body */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: 3,
          pb: 2.5,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Industry name */}
        <Typography
          component="h3"
          sx={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--text)',
            lineHeight: 1.3,
            letterSpacing: '-0.015em',
            mb: 1.5,
          }}
        >
          {industry.name}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: '0.85rem',
            color: TEXT_DIM,
            lineHeight: 1.75,
            mb: 3,
          }}
        >
          {industry.description}
        </Typography>

        {/* Products / applications */}
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1.25,
            }}
          >
            Produkty i zastosowania
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {industry.products.map((product) => (
              <Box
                key={product}
                sx={{
                  fontSize: '0.72rem',
                  color: 'var(--dim-65)',
                  bgcolor: 'var(--surface-04)',
                  border: '1px solid var(--surface-07)',
                  borderRadius: '2px',
                  px: 1,
                  py: 0.375,
                  lineHeight: 1.5,
                }}
              >
                {product}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Technology areas */}
        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.13em',
              textTransform: 'uppercase',
              color: 'var(--dim-28)',
              mb: 1.25,
            }}
          >
            Obszary technologiczne
          </Typography>
          <Stack spacing={0.875}>
            {industry.technologies.map((tech) => (
              <Box
                key={tech}
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
                  {tech}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Card footer: CTA */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pb: { xs: 3, md: 3.5 },
          pt: 2.5,
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <Box
          component={Link}
          href={industry.cta.href}
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
          {industry.cta.label}
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function BranzePage() {
  return (
    <main>
      {/* Header spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── SECTION 1: Intro ──────────────────────────────────────── */}
      <Box
        component="section"
        aria-labelledby="branze-heading"
        sx={{
          position: 'relative',
          overflow: 'hidden',
          bgcolor: BG,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14 },
        }}
      >
        {/* Right image with gradient */}
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
          <Image src="/images/other/branze-zdjeciapudelek.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 620 }}>
            <Typography
              sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: { xs: 2, md: 2.5 } }}
            >
              Branże i zastosowania
            </Typography>

            <Typography
              component="h1"
              id="branze-heading"
              sx={{ fontSize: { xs: '1.875rem', md: '2.5rem', lg: '3rem' }, fontWeight: 800,
                letterSpacing: '-0.025em', color: 'var(--text)', lineHeight: 1.1, mb: { xs: 2.5, md: 3 } }}
            >
              Branże, dla których projektujemy technologie pakowania
            </Typography>

            <Typography
              sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 480, mb: 3 }}
            >
              Od produktów spożywczych i chemicznych po kosmetyki, napoje
              i produkty dla zwierząt — projektujemy rozwiązania dopasowane
              do realnych warunków pracy zakładu.
            </Typography>

            <Typography
              sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 440, mb: 4 }}
            >
              Dobieramy maszyny, linie i rozwiązania automatyzacji
              do produktu, procesu oraz wymagań konkretnej produkcji.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} href="/rozwiazania" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                  textTransform: 'none', px: 3, py: 1.5, borderRadius: '6px', whiteSpace: 'nowrap',
                  transition: 'background-color 0.18s ease, transform 0.18s ease',
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}
              >
                Zobacz rozwiązania
              </Button>
              <Button component={Link} href="/kontakt" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)', fontWeight: 600,
                  fontSize: '0.875rem', textTransform: 'none', px: 3, py: 1.5,
                  borderRadius: '6px', whiteSpace: 'nowrap',
                  transition: 'border-color 0.18s ease, color 0.18s ease',
                  '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}
              >
                Skontaktuj się z nami
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 2: How it works (dla laika) ──────────────────── */}
      <Box
        component="section"
        aria-label="Jak działamy"
        sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Jak działamy
          </Typography>
          <Typography component="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.875rem' }, fontWeight: 800, letterSpacing: '-0.02em', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            Nie musisz znać się na maszynach — my zadamy właściwe pytania
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: { xs: 3, md: 4 } }}>
            {[
              {
                num: '01',
                title: 'Słuchamy i analizujemy',
                body: 'Opowiedz nam o swoim produkcie, tempie produkcji i problemach, które chcesz rozwiązać. Nie musisz znać nazw maszyn — przyjedziemy, zobaczymy zakład i sami ocenimy co jest potrzebne.',
              },
              {
                num: '02',
                title: 'Dobieramy i wyceniamy',
                body: 'Na podstawie analizy proponujemy konkretne rozwiązania — maszyny, integrację linii lub automatyzację. Pokazujemy opcje z różnych przedziałów cenowych i pomagamy wybrać to, co ma sens dla Twojego biznesu.',
              },
              {
                num: '03',
                title: 'Wdrażamy i zostajemy',
                body: 'Instalujemy, uruchamiamy i szkolimy obsługę. Potem zostajemy — serwis i utrzymanie maszyn to nasza codzienność. Nie znikamy po sprzedaży.',
              },
            ].map((step) => (
              <Box key={step.num} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ width: 40, height: 40, borderRadius: '50%', bgcolor: `color-mix(in srgb, ${ACCENT} 12%, var(--bg-card))`, border: `1px solid color-mix(in srgb, ${ACCENT} 30%, transparent)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Typography sx={{ fontSize: '0.7rem', fontWeight: 800, color: ACCENT, letterSpacing: '0.05em' }}>{step.num}</Typography>
                </Box>
                <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.3, color: 'var(--text)' }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                  {step.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 3: Industry grid ──────────────────────────────── */}
      <Box
        component="section"
        aria-label="Lista branż"
        sx={{
          bgcolor: BG,
          py: { xs: 10, md: 14 },
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: '1fr 1fr',
                lg: 'repeat(3, 1fr)',
              },
              gap: { xs: 2.5, md: 3 },
            }}
          >
            {INDUSTRIES.map((industry) => (
              <IndustryCard key={industry.id} industry={industry} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 4: ROI ───────────────────────────────────────── */}
      <Box
        component="section"
        aria-label="Zwrot z inwestycji"
        sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, lg: 10 }, alignItems: 'center' }}>

            {/* Left: text */}
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zwrot z inwestycji
              </Typography>
              <Typography component="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.875rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3 }}>
                Automatyzacja pakowania się zwraca — orientacyjne dane z wdrożeń
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 2.5 }}>
                Wielu klientów podchodzi do rozmowy z nami z obawą o koszt. Tymczasem dobrze dobrana maszyna pakująca amortyzuje się zwykle w ciągu 1–3 lat — a oszczędności na kosztach pracy, odpadach i przestojach trwają przez kolejne dekady.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 4 }}>
                Każdą wycenę poprzedzamy analizą opłacalności. Pokazujemy konkretnie: ile kosztuje maszyna, ile można zaoszczędzić miesięcznie i kiedy inwestycja się zwróci. Poniższe dane mają charakter orientacyjny i zależą od branży, skali i projektu.
              </Typography>
              <Box component={Link} href="/realizacje"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.875rem', fontWeight: 600, color: ACCENT, textDecoration: 'none', '&:hover': { gap: 1.25 }, transition: 'gap 0.15s ease' }}>
                Zobacz realizacje i efekty wdrożeń
                <Box component="svg" viewBox="0 0 16 16" fill="none" sx={{ width: 13, height: 13 }}>
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </Box>
              </Box>
            </Box>

            {/* Right: KPI tiles */}
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { value: '12–36',  unit: 'miesięcy', label: 'typowy okres zwrotu z inwestycji (ROI)' },
                { value: 'do 60%', unit: '',         label: 'redukcja kosztów pracy przy pakowaniu' },
                { value: '2–5×',   unit: '',         label: 'wzrost wydajności linii produkcyjnej' },
                { value: 'do 40%', unit: '',         label: 'mniej odpadów i strat materiałowych' },
              ].map((kpi) => (
                <Box key={kpi.label}
                  sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--text)', lineHeight: 1 }}>
                    {kpi.value}
                    {kpi.unit && <Box component="span" sx={{ fontSize: '1rem', fontWeight: 600, color: ACCENT, ml: 0.5 }}>{kpi.unit}</Box>}
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM, lineHeight: 1.5, mt: 1 }}>
                    {kpi.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 5: Philosophy block ──────────────────────────── */}
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
              Każda branża ma inne wymagania dotyczące produktu, opakowania,
              wydajności i końca linii. Dlatego dobór technologii pakowania
              musi wynikać z procesu, a nie z samej maszyny.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.875rem', md: '0.95rem' },
                color: TEXT_DIM,
                lineHeight: 1.75,
              }}
            >
              MadejPak analizuje wymagania produkcji — typ produktu, format opakowania,
              tempo linii, warunki środowiskowe — i na tej podstawie dobiera
              i integruje rozwiązania technologiczne. Rezultat: linia, która
              działa w realnych warunkach Twojego zakładu.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── SECTION 6: Final CTA ─────────────────────────────────── */}
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
                Szukasz rozwiązania dla swojej produkcji?
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '0.9rem', md: '0.95rem' },
                  color: TEXT_DIM,
                  lineHeight: 1.75,
                  maxWidth: 460,
                }}
              >
                Dobieramy technologię pakowania, integrację linii i automatykę
                do konkretnego produktu oraz warunków pracy zakładu.
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
                Wyślij zapytanie
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </main>
  );
}
