import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'O firmie',
  description:
    'MadejPak — integrator linii pakujących, producent technologii i partner wdrożeniowy dla przemysłu. Ponad 25 lat doświadczenia w automatyzacji i robotyzacji pakowania.',
  alternates: { canonical: `${SITE_URL}/o-firmie` },
  openGraph: {
    url:         `${SITE_URL}/o-firmie`,
    title:       'O firmie | MadejPak',
    description: 'MadejPak — integrator linii pakujących, producent technologii i partner wdrożeniowy dla przemysłu. Ponad 25 lat doświadczenia w automatyzacji i robotyzacji pakowania.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'O firmie MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

// ─── Icons ──────────────────────────────────────────────────────────────────
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

// ─── Section label ───────────────────────────────────────────────────────────
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
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
      {children}
    </Typography>
  );
}

// ─── Activity card (Sekcja 3) ────────────────────────────────────────────────
const ACTIVITIES = [
  {
    num: '01',
    title: 'Integracja linii pakujących',
    body: 'Łączymy urządzenia różnych producentów w jeden spójny ciąg technologiczny. Projektujemy przepływ, dobieramy interfejsy i integrujemy każdy etap — od podawania produktu po ekspedycję gotowej palety.',
    href: '/rozwiazania',
  },
  {
    num: '02',
    title: 'Automatyzacja pakowania',
    body: 'Zastępujemy lub wspieramy pracę manualną tam, gdzie liczy się powtarzalność, bezpieczeństwo i skala. Projektujemy dedykowane stanowiska automatyzacji dopasowane do produktu i procesu klienta.',
    href: '/rozwiazania',
  },
  {
    num: '03',
    title: 'Robotyzacja procesów',
    body: 'Wdrażamy roboty przemysłowe i coboty liderów branży do paletyzacji, pick-and-place, handlingu i stanowisk wieloasortymentowych.',
    href: '/maszyny/partnerzy',
  },
  {
    num: '04',
    title: 'Projekty custom',
    body: 'Projektujemy i wykonujemy autorskie rozwiązania dla procesów, które nie mają gotowego odpowiednika rynkowego. Obsługujemy trudne produkty, wymagające środowiska i niestandardowe warunki pracy.',
    href: '/realizacje',
  },
  {
    num: '07',
    title: 'Modernizacje i serwis',
    body: 'Utrzymujemy sprawność maszyn i linii pakujących po wdrożeniu — serwis bieżący, przeglądy, modernizacje i wsparcie techniczne, również po zakończeniu okresu gwarancyjnego.',
    href: '/serwis',
  },
];

function ActivityCard({ item }: { item: (typeof ACTIVITIES)[number] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderTop: '2px solid var(--surface-08)',
        borderRadius: '4px',
        p: { xs: 3, md: 3.5 },
        transition: 'border-color 0.2s ease',
        '&:hover': {
          borderTopColor: ACCENT,
          borderColor: 'var(--surface-13)',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.14em',
          color: ACCENT,
          mb: 1.5,
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {item.num}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.95rem',
          fontWeight: 700,
          lineHeight: 1.4,
          color: 'var(--dim-85)',
          mb: 1.5,
        }}
      >
        {item.title}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.82rem',
          lineHeight: 1.7,
          color: TEXT_DIM,
          flex: 1,
          mb: 2.5,
        }}
      >
        {item.body}
      </Typography>
      <Box
        component={Link}
        href={item.href}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 0.75,
          fontSize: '0.75rem',
          fontWeight: 600,
          color: ACCENT,
          textDecoration: 'none',
          letterSpacing: '0.04em',
          mt: 'auto',
          transition: 'gap 0.15s ease',
          '&:hover': { gap: 1.25 },
          '&:hover svg': { transform: 'translateX(2px)' },
        }}
      >
        Dowiedz się więcej
        <ArrowRight />
      </Box>
    </Box>
  );
}

// ─── Process steps (Sekcja 4) ────────────────────────────────────────────────
const STEPS = [
  {
    n: '01',
    title: 'Analiza procesu',
    body: 'Zaczynamy od zrozumienia procesu klienta — produktu, wydajności, środowiska pracy, istniejącej infrastruktury i realnych ograniczeń. Bez tej fazy nie projektujemy.',
  },
  {
    n: '02',
    title: 'Dobór technologii',
    body: 'Na podstawie analizy dobieramy technologię: autorskie rozwiązania MadejPak, maszyny partnerów lub kombinację obu. Decyduje specyfika procesu, nie dostępność asortymentu.',
  },
  {
    n: '03',
    title: 'Projekt rozwiązania',
    body: 'Opracowujemy projekt techniczny — mechanikę, elektrykę, automatykę, layout linii. Uwzględniamy integrację z istniejącymi urządzeniami i wymagania BHP.',
  },
  {
    n: '04',
    title: 'Wykonanie i integracja',
    body: 'Realizujemy wdrożenie: produkujemy autorskie elementy, dostarczamy maszyny, montujemy stanowiska i integrujemy całość w jeden spójny system.',
  },
  {
    n: '05',
    title: 'Uruchomienie',
    body: 'Uruchamiamy i testujemy w warunkach produkcyjnych klienta — z produktem, w rzeczywistym środowisku. Szkolimy operatorów i przekazujemy dokumentację.',
  },
  {
    n: '06',
    title: 'Serwis i wsparcie',
    body: 'Po wdrożeniu pozostajemy do dyspozycji. Realizujemy serwis gwarancyjny i pogwarancyjny, przeglądy techniczne oraz modernizacje linii.',
  },
];

// ─── Advantages (Sekcja 6) ───────────────────────────────────────────────────
const ADVANTAGES = [
  {
    title: 'Doświadczenie integracyjne',
    body: 'Ponad 25 lat pracy przy liniach pakujących różnych klientów, branż i środowisk. Znamy problemy, które pojawiają się dopiero na etapie wdrożenia.',
  },
  {
    title: 'Projektowanie i wykonanie w jednym miejscu',
    body: 'Nie podwykonujemy projektu. Projektujemy, wykonujemy i wdrażamy samodzielnie — skraca to czas realizacji i eliminuje problemy komunikacyjne między etapami.',
  },
  {
    title: 'Realizacja trudnych projektów',
    body: 'Podejmujemy się wdrożeń w trudnych środowiskach i z niestandardowymi produktami: wilgotnych, zapylonych, wymagających precyzji lub dużych wydajności.',
  },
  {
    title: 'Elastyczność zakresu',
    body: 'Dopasowujemy zakres do klienta: pojedyncze stanowisko, kompletna linia pakująca, modernizacja istniejącego systemu. Skalujemy od etapu do etapu.',
  },
  {
    title: 'Technologie własne i partnerskie',
    body: 'Łączymy autorskie konstrukcje z maszynami sprawdzonych partnerów technologicznych. Dobieramy narzędzia do zadania, nie odwrotnie.',
  },
  {
    title: 'Serwis po gwarancji',
    body: 'Obsługujemy maszyny i linie także długo po zakończeniu gwarancji. Klient nie zostaje bez wsparcia, gdy projekt jest zamknięty w systemie sprzedażowym.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function OFirmiePage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      {/* Nav spacer */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ════════════════════════════════════════
          SEKCJA 1 — HERO
      ════════════════════════════════════════ */}
      <Box
        sx={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 10, md: 14, lg: 16 },
        }}
      >
        {/* Right image with gradient — hidden on mobile */}
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
          <Image src="/images/other/onas-zdjeciestoiska.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box>
            <SectionLabel>O firmie</SectionLabel>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
                color: 'var(--dim-85)',
                mb: { xs: 4, md: 5 },
              }}
            >
              Projektujemy,
              <br />
              integrujemy
              <br />
              i wdrażamy technologie
              <br />
              pakowania
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box
                component={Link}
                href="/kontakt"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1.5,
                  px: 3.5, py: 1.5, bgcolor: ACCENT, borderRadius: '3px',
                  fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: 'var(--text)', textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: '#D45509' },
                }}
              >
                Skontaktuj się
                <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/realizacje"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 1.5,
                  px: 3.5, py: 1.5, border: `1px solid ${BORDER}`, borderRadius: '3px',
                  fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em',
                  textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none',
                  transition: 'border-color 0.15s ease, color 0.15s ease',
                  '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-75)' },
                }}
              >
                Zobacz realizacje
                <ArrowRight />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SEKCJA 2 — KIM JEST MADEJPAK
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
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
              <SectionLabel>Kim jesteśmy</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                }}
              >
                Integrator i producent technologii pakowania
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
                gap: 3,
              }}
            >
              {[
                {
                  label: 'Integrator linii',
                  body: 'Łączymy maszyny i urządzenia różnych producentów w jeden spójny system technologiczny — od podawania surowca po wysyłkę gotowego produktu.',
                },
                {
                  label: 'Konstruktor i producent',
                  body: 'Część wdrożeń realizujemy w oparciu o autorskie konstrukcje — projektowane i wykonywane przez naszych inżynierów pod konkretny proces.',
                },
                {
                  label: 'Dostawca technologii',
                  body: 'Jesteśmy partnerem i integratorem wiodących producentów maszyn pakujących, robotów przemysłowych i cobotów oraz systemów automatyzacji.',
                },
              ].map(({ label, body }) => (
                <Box
                  key={label}
                  sx={{
                    p: 3,
                    bgcolor: BG_CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: '4px',
                  }}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 28,
                      height: 2,
                      bgcolor: ACCENT,
                      mb: 2.5,
                      borderRadius: '1px',
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: 'var(--dim-85)',
                      mb: 1.5,
                      lineHeight: 1.35,
                    }}
                  >
                    {label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: TEXT_DIM }}>
                    {body}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SEKCJA 3 — CO ROBIMY
      ════════════════════════════════════════ */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 6, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <SectionLabel>Co robimy</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Obszary działalności
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                Realizujemy projekty od pojedynczego stanowiska automatyzacji po kompletne
                linie pakujące — w różnych branżach i środowiskach produkcyjnych.
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: {
                  xs: '1fr',
                  sm: 'repeat(2, 1fr)',
                  xl: 'repeat(3, 1fr)',
                },
                gap: 2.5,
              }}
            >
              {ACTIVITIES.map((item) => (
                <ActivityCard key={item.num} item={item} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SEKCJA 4 — JAK PRACUJEMY
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
              gap: { xs: 6, md: 10 },
              alignItems: 'start',
            }}
          >
            <Box>
              <SectionLabel>Jak pracujemy</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.5rem', md: '1.75rem' },
                  fontWeight: 700,
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  mb: 2,
                }}
              >
                Proces współpracy
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.7, color: TEXT_DIM }}>
                Każdy projekt zaczyna się od analizy — nie od oferty cenowej.
                Nie dopasowujemy problemu do gotowego rozwiązania.
              </Typography>
            </Box>

            <Box>
              {STEPS.map((step, idx) => (
                <Box
                  key={step.n}
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: '52px 1fr',
                    gap: 3,
                    pb: idx < STEPS.length - 1 ? 4 : 0,
                    mb: idx < STEPS.length - 1 ? 4 : 0,
                    borderBottom: idx < STEPS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    alignItems: 'start',
                  }}
                >
                  {/* Number */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: ACCENT,
                        pt: 0.5,
                        fontVariantNumeric: 'tabular-nums',
                      }}
                    >
                      {step.n}
                    </Typography>
                  </Box>
                  {/* Content */}
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.95rem',
                        fontWeight: 700,
                        lineHeight: 1.35,
                        color: 'var(--dim-85)',
                        mb: 1,
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: '0.83rem',
                        lineHeight: 1.7,
                        color: TEXT_DIM,
                      }}
                    >
                      {step.body}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SEKCJA 5 — DLA KOGO PRACUJEMY
      ════════════════════════════════════════ */}
      <Box
        sx={{
          bgcolor: BG_ALT,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          py: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <SectionLabel>Dla kogo pracujemy</SectionLabel>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                maxWidth: 480,
              }}
            >
              Zakres dopasowany do skali klienta
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {/* Duże zakłady */}
            <Box
              sx={{
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid ${ACCENT}`,
                borderRadius: '4px',
                p: { xs: 3.5, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--dim-85)',
                  mb: 2,
                  lineHeight: 1.3,
                }}
              >
                Duże zakłady przemysłowe
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                Realizujemy złożone projekty integracji linii pakujących — z wieloma maszynami,
                różnymi producentami i wymaganiami dotyczącymi wydajności oraz ciągłości produkcji.
                Jesteśmy w stanie przeprowadzić wdrożenie bez zatrzymywania istniejącego procesu.
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                {[
                  'Kompletne linie pakujące od projektu po uruchomienie',
                  'Integracja urządzeń różnych producentów',
                  'Robotyzacja i paletyzacja w dużej skali',
                  'Wdrożenia etapowe bez zatrzymania produkcji',
                ].map((item) => (
                  <Box
                    key={item}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 0.75,
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
                    <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Mniejsze firmy */}
            <Box
              sx={{
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderLeft: `3px solid var(--dim-10)`,
                borderRadius: '4px',
                p: { xs: 3.5, md: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--dim-85)',
                  mb: 2,
                  lineHeight: 1.3,
                }}
              >
                Mniejsze firmy produkcyjne
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', lineHeight: 1.75, color: TEXT_DIM, mb: 3 }}>
                Dostarczamy konkretne maszyny i gotowe rozwiązania dla firm, które potrzebują
                jednego sprawdzonego stanowiska lub pierwszego kroku w automatyzacji procesu.
                Pracujemy z klientami, dla których to pierwsze wdrożenie tego rodzaju.
              </Typography>
              <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none' }}>
                {[
                  'Konkretne maszyny i gotowe rozwiązania',
                  'Automatyzacja wybranego etapu produkcji',
                  'Pierwsze wdrożenie poprowadzone od A do Z',
                  'Serwis i wsparcie na każdym etapie',
                ].map((item) => (
                  <Box
                    key={item}
                    component="li"
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 1.5,
                      py: 0.75,
                    }}
                  >
                    <Box
                      aria-hidden="true"
                      sx={{
                        width: 5,
                        height: 5,
                        borderRadius: '50%',
                        bgcolor: 'var(--dim-20)',
                        flexShrink: 0,
                        mt: '7px',
                      }}
                    />
                    <Typography sx={{ fontSize: '0.82rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SEKCJA 6 — DLACZEGO MADEJPAK
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: { xs: 5, md: 7 } }}>
            <SectionLabel>Dlaczego MadejPak</SectionLabel>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '1.75rem' },
                fontWeight: 700,
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                maxWidth: 520,
              }}
            >
              Co odróżnia nas od dystrybutora maszyn
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
              gap: 0,
              border: `1px solid ${BORDER}`,
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            {ADVANTAGES.map((adv, idx) => (
              <Box
                key={adv.title}
                sx={{
                  p: { xs: 3, md: 3.5 },
                  borderRight: {
                    xs: 'none',
                    sm: idx % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                    lg: idx % 3 !== 2 ? `1px solid ${BORDER}` : 'none',
                  },
                  borderBottom: {
                    xs: idx < ADVANTAGES.length - 1 ? `1px solid ${BORDER}` : 'none',
                    sm: idx < ADVANTAGES.length - 2 ? `1px solid ${BORDER}` : 'none',
                    lg: idx < 3 ? `1px solid ${BORDER}` : 'none',
                  },
                  bgcolor: BG_CARD,
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: 'var(--bg-card)' },
                }}
              >
                <Box
                  aria-hidden="true"
                  sx={{
                    width: 24,
                    height: 2,
                    bgcolor: ACCENT,
                    mb: 2.5,
                    borderRadius: '1px',
                  }}
                />
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--dim-85)',
                    mb: 1.5,
                    lineHeight: 1.35,
                  }}
                >
                  {adv.title}
                </Typography>
                <Typography sx={{ fontSize: '0.8rem', lineHeight: 1.7, color: TEXT_DIM }}>
                  {adv.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SEKCJA 7 — BLOK WIARYGODNOŚCI
      ════════════════════════════════════════ */}
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
              gap: { xs: 5, md: 10 },
              alignItems: 'center',
            }}
          >
            <Box>
              <SectionLabel>W liczbach</SectionLabel>
              <Typography
                sx={{
                  fontSize: { xs: '2.75rem', md: '3.5rem' },
                  fontWeight: 800,
                  lineHeight: 1,
                  color: ACCENT,
                  letterSpacing: '-0.04em',
                  mb: 0.75,
                }}
              >
                25+
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: TEXT_DIM,
                  lineHeight: 1.5,
                }}
              >
                lat doświadczenia
                <br />
                w technologiach pakowania
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { fact: 'Własny dział inżynierski i zakład produkcyjny', note: 'projektujemy i wykonujemy urządzenia we własnym zakresie' },
                { fact: 'Magazyn części zamiennych na stanie', note: 'szybka dostawa bez długiego oczekiwania na zamówienie' },
                { fact: 'FAT przed każdą dostawą', note: 'odbiór techniczny u producenta zanim maszyna trafi na linię' },
                { fact: 'Serwis po gwarancji jako standard', note: 'nie znikamy po zakończeniu projektu — obsługujemy przez lata' },
              ].map(({ fact, note }) => (
                <Box
                  key={fact}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 1.5,
                    py: 2,
                    borderBottom: `1px solid ${BORDER}`,
                  }}
                >
                  <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--dim-85)', lineHeight: 1.35, mb: 0.4 }}>
                      {fact}
                    </Typography>
                    <Typography sx={{ fontSize: '0.79rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                      {note}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════════════════════════
          SEKCJA 8 — CTA KOŃCOWE
      ════════════════════════════════════════ */}
      <Box sx={{ py: { xs: 10, md: 16 } }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 6, md: 12 },
              alignItems: 'center',
            }}
          >
            <Box>
              <SectionLabel>Kontakt</SectionLabel>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '1.75rem', md: '2.25rem' },
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: '-0.025em',
                  mb: 2.5,
                }}
              >
                Masz projekt do omówienia?
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.95rem',
                  lineHeight: 1.8,
                  color: TEXT_DIM,
                  mb: 4,
                }}
              >
                Porozmawiamy o Twoim procesie, produkcie i skali działania. Na tej podstawie
                ocenimy zakres i zaproponujemy konkretny kierunek — bez ogólnikowych ofert,
                bez dopasowywania problemu do gotowego katalogu.
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
                Napisz do nas
                <ArrowRight />
              </Box>
            </Box>

            {/* Quick nav */}
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
                  Eksploruj dalej
                </Typography>
              </Box>
              {[
                { label: 'Nasze realizacje', href: '/realizacje', desc: 'Projekty wdrożeń dla klientów' },
                { label: 'Maszyny partnerów', href: '/maszyny/partnerzy', desc: 'Technologie, które integrujemy' },
                { label: 'Branże', href: '/branze', desc: 'Sektory, w których pracujemy' },
                { label: 'Serwis', href: '/serwis', desc: 'Wsparcie po wdrożeniu' },
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
                    '&:hover .arrow': { transform: 'translateX(3px)' },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--dim-85)',
                        mb: 0.25,
                        lineHeight: 1.3,
                      }}
                    >
                      {label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM }}>
                      {desc}
                    </Typography>
                  </Box>
                  <Box
                    className="arrow"
                    sx={{ color: TEXT_DIM, flexShrink: 0, transition: 'transform 0.15s ease' }}
                  >
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
