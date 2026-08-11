import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';
import { MADEJPAK_MACHINES as MACHINES, MADEJPAK_GROUPS as GROUPS } from '@/data/madejpakMachinesData';

export const metadata: Metadata = {
  title: 'Maszyny własnej produkcji – urządzenia do pakowania, transportu i automatyzacji',
  description:
    'MadejPak projektuje i buduje własne maszyny do pakowania i transportu produktu: desztaplery, podajniki, chwytaki robotyczne oraz rozwiązania customowe dla przemysłu.',
  alternates: { canonical: `${SITE_URL}/maszyny/madejpak` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/madejpak`,
    title:       'Maszyny MadejPak | MadejPak',
    description: 'MadejPak projektuje i buduje własne maszyny do pakowania i transportu produktu: desztaplery, podajniki, chwytaki robotyczne oraz rozwiązania customowe dla przemysłu.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Maszyny MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';
// Tło pod wizualizacje — stałe, ciemne w obu motywach, dopasowane do renderów
const RENDER_BG = '#111113';

// ─── Icons ──────────────────────────────────────────────────────────────────
function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// Plakietka „film" na karcie maszyny z youtubeId
function VideoBadge({ label }: { label: string }) {
  return (
    <Box
      sx={{
        position: 'absolute', top: 10, left: 10, zIndex: 1,
        display: 'inline-flex', alignItems: 'center', gap: 0.75,
        bgcolor: 'rgba(0,0,0,0.72)', color: '#fff',
        px: 1.25, py: 0.5, borderRadius: 1,
        fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.04em',
        backdropFilter: 'blur(4px)',
      }}
    >
      <Box component="svg" viewBox="0 0 12 12" aria-hidden="true" sx={{ width: 9, height: 9, color: ACCENT }}>
        <path d="M2 1.5v9l8-4.5-8-4.5z" fill="currentColor" />
      </Box>
      {label}
    </Box>
  );
}

// Desztapler — kilka palet ułożonych jedna na drugiej
function IconDesztapler() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Pallet 1 — bottom */}
      <rect x="12" y="76" width="72" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="76" x2="30" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="76" x2="48" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="66" y1="76" x2="66" y2="82" stroke="currentColor" strokeWidth="2"/>
      {/* Boxes on pallet 1 */}
      <rect x="14" y="68" width="68" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Pallet 2 — middle */}
      <rect x="12" y="52" width="72" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="52" x2="30" y2="58" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="52" x2="48" y2="58" stroke="currentColor" strokeWidth="2"/>
      <line x1="66" y1="52" x2="66" y2="58" stroke="currentColor" strokeWidth="2"/>
      {/* Boxes on pallet 2 */}
      <rect x="14" y="44" width="68" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Pallet 3 — top */}
      <rect x="12" y="28" width="72" height="6" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="30" y1="28" x2="30" y2="34" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="28" x2="48" y2="34" stroke="currentColor" strokeWidth="2"/>
      <line x1="66" y1="28" x2="66" y2="34" stroke="currentColor" strokeWidth="2"/>
      {/* Boxes on pallet 3 */}
      <rect x="14" y="20" width="68" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Arrow down — oddziela jedną paletę */}
      <path d="M78 8 L84 16 L80 16 L80 20 L76 20 L76 16 L72 16 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </Box>
  );
}

// Podajnik zabierakowy — taśma z pionowymi elementami (zabierakami) wypychającymi produkt
function IconPodajnikZabierakowy() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Taśma — górna i dolna linia */}
      <line x1="8" y1="58" x2="88" y2="58" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="8" y1="68" x2="88" y2="68" stroke="currentColor" strokeWidth="2.5"/>
      {/* Koła napędowe */}
      <circle cx="14" cy="63" r="7" stroke="currentColor" strokeWidth="2"/>
      <circle cx="82" cy="63" r="7" stroke="currentColor" strokeWidth="2"/>
      {/* Zabieraki — pionowe elementy co ok. 20px */}
      <line x1="28" y1="42" x2="28" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="50" y1="42" x2="50" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="72" y1="42" x2="72" y2="58" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Produkt — prostokąt popychany przez zabierak */}
      <rect x="32" y="40" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="54" y="40" width="16" height="18" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* Strzałka kierunku ruchu */}
      <path d="M74 22 L84 30 L80 30 L80 34 L68 34 L68 30 L64 30 Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </Box>
  );
}

// Podajnik taśmowy — prosta taśma transportowa
function IconPodajnikTasmowy() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Taśma */}
      <line x1="8" y1="54" x2="88" y2="54" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="8" y1="64" x2="88" y2="64" stroke="currentColor" strokeWidth="2.5"/>
      {/* Koła */}
      <circle cx="14" cy="59" r="7" stroke="currentColor" strokeWidth="2"/>
      <circle cx="82" cy="59" r="7" stroke="currentColor" strokeWidth="2"/>
      {/* Produkty na taśmie */}
      <rect x="24" y="40" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <rect x="52" y="40" width="18" height="14" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* Strzałka ruchu */}
      <path d="M62 24 L72 32 L62 32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <line x1="38" y1="28" x2="71" y2="28" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Nogi/stojak */}
      <line x1="20" y1="71" x2="20" y2="82" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="76" y1="71" x2="76" y2="82" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Box>
  );
}

// Podajnik rolkowy — widok z rolkami
function IconPodajnikRolkowy() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Boczne ramy */}
      <line x1="6" y1="54" x2="90" y2="54" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="6" y1="64" x2="90" y2="64" stroke="currentColor" strokeWidth="2.5"/>
      {/* Rolki */}
      {[18, 32, 46, 60, 74].map((x) => (
        <React.Fragment key={x}>
          <circle cx={x} cy={59} r={5} stroke="currentColor" strokeWidth="2"/>
          <line x1={x} y1={54} x2={x} y2={64} stroke="currentColor" strokeWidth="1.5"/>
        </React.Fragment>
      ))}
      {/* Karton na rolkach */}
      <rect x="30" y="38" width="36" height="16" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* Nogi */}
      <line x1="16" y1="64" x2="16" y2="78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="80" y1="64" x2="80" y2="78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Box>
  );
}

// Felcarka / stanowisko specjalne — koła zębate i moduł roboczy
function IconFelcarka() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Duże koło zębate */}
      <circle cx="38" cy="52" r="20" stroke="currentColor" strokeWidth="2"/>
      <circle cx="38" cy="52" r="10" stroke="currentColor" strokeWidth="1.5"/>
      {[0,45,90,135,180,225,270,315].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 38 + 20 * Math.cos(rad);
        const y1 = 52 + 20 * Math.sin(rad);
        const x2 = 38 + 26 * Math.cos(rad);
        const y2 = 52 + 26 * Math.sin(rad);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>;
      })}
      {/* Małe koło zębate */}
      <circle cx="66" cy="34" r="12" stroke="currentColor" strokeWidth="2"/>
      <circle cx="66" cy="34" r="6" stroke="currentColor" strokeWidth="1.5"/>
      {[0,60,120,180,240,300].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 66 + 12 * Math.cos(rad);
        const y1 = 34 + 12 * Math.sin(rad);
        const x2 = 66 + 17 * Math.cos(rad);
        const y2 = 34 + 17 * Math.sin(rad);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>;
      })}
      {/* Stół roboczy */}
      <line x1="8" y1="78" x2="88" y2="78" stroke="currentColor" strokeWidth="2"/>
      <line x1="14" y1="78" x2="14" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="82" y1="78" x2="82" y2="88" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </Box>
  );
}

// Liczenie i pakowanie paluszków — moduł z licznikiem i opakowaniem
function IconLiczeniePaluszki() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Zasobnik z paluszkami */}
      <rect x="10" y="10" width="36" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
      {/* Paluszki w zasobniku */}
      {[18, 24, 30, 36].map((x) => (
        <line key={x} x1={x} y1={14} x2={x} y2={34} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      ))}
      {/* Licznik / sensor */}
      <circle cx="36" cy="50" r="8" stroke="currentColor" strokeWidth="2"/>
      <path d="M33 50 L36 47 L39 50" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Opakowanie na wyjściu */}
      <rect x="54" y="34" width="32" height="42" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="54" y1="50" x2="86" y2="50" stroke="currentColor" strokeWidth="1.5"/>
      {/* Paluszki w opakowaniu */}
      {[62, 68, 74, 80].map((x) => (
        <line key={x} x1={x} y1={54} x2={x} y2={72} stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      ))}
      {/* Strzałka z licznika do opakowania */}
      <path d="M44 50 L52 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M49 46 L53 50 L49 54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Box>
  );
}

// Chwytak robotyczny — ramię z chwytakiem
function IconChwytak() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Podstawa robota */}
      <rect x="30" y="78" width="36" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
      {/* Korpus */}
      <rect x="38" y="60" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
      {/* Ramię 1 */}
      <line x1="48" y1="60" x2="30" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Przegub */}
      <circle cx="30" cy="38" r="4" stroke="currentColor" strokeWidth="2"/>
      {/* Ramię 2 */}
      <line x1="30" y1="34" x2="52" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      {/* Przegub końcowy */}
      <circle cx="52" cy="18" r="3" stroke="currentColor" strokeWidth="2"/>
      {/* Chwytak — dwa palce */}
      <path d="M52 15 L44 8 L44 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M52 15 L60 8 L60 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Produkt trzymany */}
      <rect x="44" y="0" width="16" height="6" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </Box>
  );
}

const MACHINE_ICONS: Record<string, React.ReactNode> = {
  'desztaplery-palet':        <IconDesztapler />,
  'podajniki-zabierakowe':    <IconPodajnikZabierakowy />,
  'podajniki-tasmowe':        <IconPodajnikTasmowy />,
  'podajniki-paletowe':       <IconPodajnikRolkowy />,
  'felcarki':                 <IconFelcarka />,
  'liczenie-i-pakowanie':     <IconLiczeniePaluszki />,
  'chwytaki-i-manipulatory':  <IconChwytak />,
};

// ─── Data ────────────────────────────────────────────────────────────────────


const OWN_ITEMS = [
  'Podajniki taśmowe i rolkowe pod wymiar linii',
  'Desztaplery i podajniki zabierakowe',
  'Chwytaki robotyczne dopasowane do produktu',
  'Maszyny specjalne i stanowiska niestandardowe',
  'Modernizacje i rozbudowy istniejących instalacji',
  'Felcarki i moduły technologiczne',
];
const PARTNER_ITEMS = [
  'Maszyny pakujące flowpack i VFFS (GSP, Concetti)',
  'Wagi wielogłowicowe i systemy dozowania',
  'Owijarki palet i paletyzatory',
  'Roboty przemysłowe i coboty liderów branży',
  'Systemy wizyjne i automatyka sterowania',
  'Workowanie i stacje BigBag',
];

const ADVANTAGES = [
  { title: 'Projektowanie pod proces', desc: 'Urządzenia powstają na bazie realnych wymagań produkcyjnych — nie gotowych szablonów. Każda maszyna jest dopasowana do produktu, wydajności i układu linii.' },
  { title: 'Doświadczenie integracyjne', desc: 'Każda maszyna może zostać przygotowana jako element większego układu technologicznego — zsynchronizowana z robotami, przenośnikami i systemami automatyki.' },
  { title: 'Rozwiązania customowe', desc: 'Realizujemy projekty dla niestandardowych produktów, geometrii i wymagań procesu — od chwytaków po kompletne stanowiska specjalne.' },
  { title: 'Serwis i rozwój instalacji', desc: 'Oferujemy serwis gwarancyjny i pogwarancyjny, modyfikacje pod nowe produkty oraz dalszą rozbudowę wdrożonych rozwiązań.' },
];

const PROCESS = [
  { title: 'Zapytanie', desc: 'Opisujesz produkt, wydajność i układ linii. Im więcej szczegółów, tym szybsza i trafniejsza odpowiedź.' },
  { title: 'Analiza procesu', desc: 'Wspólnie doprecyzowujemy wymagania, wąskie gardła i sposób wpięcia urządzenia w istniejącą linię.' },
  { title: 'Projekt i wycena', desc: 'Przygotowujemy koncepcję maszyny dopasowaną do produktu oraz ofertę na kompletne rozwiązanie.' },
  { title: 'Budowa', desc: 'Wykonujemy maszynę we własnym zakładzie — pełna kontrola nad konstrukcją, materiałami i jakością.' },
  { title: 'Odbiór FAT', desc: 'Odbiór techniczny i testy z Twoim produktem jeszcze przed wysyłką maszyny do zakładu.' },
  { title: 'Wdrożenie i serwis', desc: 'Montaż, uruchomienie w linii oraz serwis gwarancyjny i pogwarancyjny z dalszą rozbudową.' },
];

const REALIZATIONS = [
  { label: 'Desztapler do podawania opakowań', scope: 'Automatyzacja rozdzielania opakowań jednostkowych w linii pakującej' },
  { label: 'Podajnik zabierakowy', scope: 'Taktowanie i transport produktów do maszyny pakującej' },
  { label: 'Chwytak robotyczny', scope: 'Aplikacja pick-and-place dla cobota' },
  { label: 'Stanowisko liczenia i pakowania', scope: 'Automatyczne odliczanie i pakowanie paluszków' },
  { label: 'Układ transportu w linii zbiorczej', scope: 'Integracja przenośników między maszynami pakującymi a paletyzatorem' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function MaszynyMadejPakPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 720 }}>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
              Własna produkcja
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
              Maszyny MadejPak
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
              Maszyna zaprojektowana pod Twój produkt i układ linii — nie adaptacja gotowego szablonu.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8, mb: 5 }}>
              Budujemy urządzenia, w których każdy detal był decyzją: od gabarytu po dobór napędu i interfejs do sterowania linią. Żadnych kompromisów wynikających z katalogowych ograniczeń — własna konstrukcja to pełne dopasowanie do procesu.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box
                component={Link}
                href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Zapytaj o maszynę <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/rozwiazania/projekty-custom"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Projekty customowe
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Intro ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
                Urządzenia budowane pod realne procesy produkcyjne
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
                Maszyny MadejPak powstają z myślą o konkretnych zastosowaniach produkcyjnych i pakujących. Obejmują urządzenia transportu produktu, systemy podawania, rozwiązania do pakowania, moduły wykonawcze dla robotów oraz konstrukcje specjalne projektowane pod indywidualne wymagania klienta.
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
                Nasze rozwiązania mogą pracować jako osobne stanowiska lub jako element większej, zintegrowanej linii technologicznej.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
              {[
                { num: '9', label: 'typów maszyn własnych' },
                { num: '100%', label: 'projektów realizowanych w Polsce' },
                { num: '25+', label: 'lat na rynku maszyn pakujących' },
                { num: 'FAT', label: 'odbiór techniczny przed dostawą' },
              ].map((s) => (
                <Box key={s.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                  <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 0.5 }}>
                    {s.num}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem', lineHeight: 1.4 }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Maszyny — grid kart ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Główne grupy maszyn i urządzeń
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 8, maxWidth: 680 }}>
            Oferujemy zarówno urządzenia o powtarzalnym zastosowaniu, jak i maszyny specjalne projektowane od zera pod konkretny produkt i proces.
          </Typography>

          {GROUPS.map((group) => (
            <Box key={group} sx={{ mb: 8 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                <Box sx={{ width: 4, height: 24, bgcolor: ACCENT, borderRadius: 1, flexShrink: 0 }} />
                <Typography variant="h3" sx={{ fontSize: '1rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1.5, color: TEXT_DIM }}>
                  {group}
                </Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
                {MACHINES.filter((m) => m.group === group).map((m) => (
                  <Box
                    key={m.id}
                    component={Link}
                    href={`/maszyny/madejpak/${m.id}`}
                    sx={{
                      bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, overflow: 'hidden',
                      display: 'flex', flexDirection: 'column',
                      textDecoration: 'none', color: 'var(--text)',
                      transition: 'border-color 0.15s ease, transform 0.15s ease',
                      '&:hover': { borderColor: ACCENT, transform: 'translateY(-2px)' },
                      '&:hover .card-cta': { color: ACCENT },
                    }}
                  >
                    {/* Wizualizacja — rendery są celowo ciemne (ochrona rozwiązań),
                        więc kafelek zostaje ciemny niezależnie od motywu strony */}
                    <Box sx={{ position: 'relative' }}>
                      {m.image ? (
                        <Box sx={{ position: 'relative', aspectRatio: '16 / 9', bgcolor: RENDER_BG, borderBottom: `1px solid ${BORDER}` }}>
                          <Image
                            src={m.image}
                            alt={`${m.name} — wizualizacja maszyny MadejPak`}
                            fill
                            sizes="(max-width: 900px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      ) : (
                        <Box sx={{ height: 180, bgcolor: BG_ALT, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${BORDER}` }}>
                          {MACHINE_ICONS[m.id] ?? null}
                        </Box>
                      )}
                      {m.youtubeId && <VideoBadge label="Film" />}
                    </Box>
                    <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 2 }}>
                        {m.name}
                      </Typography>
                      <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                        {m.desc}
                      </Typography>
                      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, mt: 'auto' }}>
                        <Box>
                          <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.7rem' }}>
                            Zastosowanie
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                            {m.applications.map((a) => (
                              <Box component="li" key={a} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                                {a}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                        <Box>
                          <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.7rem' }}>
                            Korzyści
                          </Typography>
                          <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                            {m.benefits.map((b) => (
                              <Box component="li" key={b} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                                <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                                {b}
                              </Box>
                            ))}
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        className="card-cta"
                        sx={{ mt: 3, pt: 2.5, borderTop: `1px solid ${BORDER}`, display: 'inline-flex', alignItems: 'center', gap: 1, fontWeight: 600, fontSize: '0.85rem', color: TEXT_DIM, transition: 'color 0.15s ease' }}
                      >
                        Zobacz szczegóły <ArrowRight />
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Container>
      </Box>

      {/* ── Co robimy sami, co z partnerami ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 680 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Zakres kompetencji
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              Co wykonujemy sami, a co integrujemy z partnerami
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8 }}>
              Niezależnie od źródła — projektujemy, uruchamiamy i serwisujemy całość. Jeden kontakt, jedna odpowiedzialność.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.08em', textTransform: 'uppercase', mb: 2 }}>
                Własna produkcja
              </Typography>
              <Typography variant="body2" sx={{ color: TEXT_DIM, mb: 3, lineHeight: 1.75 }}>
                Projektujemy i wykonujemy we własnym zakładzie — pełna kontrola nad geometrią, materiałami i integracją z linią.
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
                {OWN_ITEMS.map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid var(--dim-20)`, borderRadius: 2, p: 4 }}>
              <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--dim-55)', letterSpacing: '0.08em', textTransform: 'uppercase', mb: 2 }}>
                Integrowane od partnerów
              </Typography>
              <Typography variant="body2" sx={{ color: TEXT_DIM, mb: 3, lineHeight: 1.75 }}>
                Dobieramy, dostarczamy i integrujemy maszyny sprawdzonych partnerów — jako elementy kompletnego układu, nie osobne zakupy.
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
                {PARTNER_ITEMS.map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'var(--dim-30)', flexShrink: 0, mt: '5px' }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
          <Box sx={{ mt: 3, p: 3, bgcolor: `color-mix(in srgb, ${ACCENT} 5%, var(--bg))`, border: `1px solid color-mix(in srgb, ${ACCENT} 20%, transparent)`, borderRadius: 1.5 }}>
            <Typography sx={{ fontSize: '0.88rem', color: 'var(--dim-72)', lineHeight: 1.65 }}>
              W obu przypadkach odpowiadamy za uruchomienie, integrację z linią i serwis — niezależnie od producenta maszyny.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── Integracja z liniami ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
                Maszyny jako element większych linii pakujących
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
                Urządzenia MadejPak trafiają do linii produkcyjnych jako zsynchronizowane elementy — nie przypadkowe dodatki. Projektujemy je z myślą o integracji: wejście, wyjście, sygnały, prędkość — wszystko dopasowane do ciągu technologicznego.
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 4 }}>
                Dzięki doświadczeniu integracyjnemu jesteśmy w stanie dopasować maszynę nie tylko do produktu, ale również do całego procesu technologicznego — łącząc nasze urządzenia z maszynami partnerów i istniejącą automatyką klienta.
              </Typography>
              <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                {['Integracja mechaniczna i elektryczna z istniejącą linią', 'Dopasowanie do maszyn różnych producentów', 'Synchronizacja z robotami i systemami automatyki', 'Rozbudowa i modernizacja istniejących instalacji'].map((item) => (
                  <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.9rem' }}>
                    <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '6px' }} />
                    {item}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Box
                component={Link}
                href="/rozwiazania/integracja-linii-pakujacych"
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, color: 'var(--text)', '&:hover': { borderColor: ACCENT } }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Integracja linii pakujących</Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem' }}>Jak łączymy maszyny różnych producentów w kompletny system</Typography>
                </Box>
                <Box sx={{ color: ACCENT, flexShrink: 0 }}><ArrowRight /></Box>
              </Box>
              <Box
                component={Link}
                href="/maszyny/transport-i-koniec-linii"
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, color: 'var(--text)', '&:hover': { borderColor: ACCENT } }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Transport i koniec linii</Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem' }}>Systemy przenośników i przepływ produktu w linii</Typography>
                </Box>
                <Box sx={{ color: ACCENT, flexShrink: 0 }}><ArrowRight /></Box>
              </Box>
              <Box
                component={Link}
                href="/maszyny/robotyzacja-pakowania"
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, textDecoration: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2, color: 'var(--text)', '&:hover': { borderColor: ACCENT } }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, mb: 0.5 }}>Robotyzacja pakowania</Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.8rem' }}>Coboty i roboty przemysłowe w zautomatyzowanych liniach</Typography>
                </Box>
                <Box sx={{ color: ACCENT, flexShrink: 0 }}><ArrowRight /></Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Przewagi ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Dlaczego MadejPak
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 640 }}>
            Własna produkcja to możliwość pełnego dopasowania urządzenia do procesu — bez kompromisów wynikających z katalogowych ograniczeń.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {ADVANTAGES.map((a) => (
              <Box key={a.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Box sx={{ width: 36, height: 4, bgcolor: ACCENT, borderRadius: 1, mb: 2.5 }} />
                <Typography variant="h4" sx={{ fontSize: '1.05rem', fontWeight: 700, mb: 1.5 }}>
                  {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                  {a.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Realizacje ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 3, mb: 6 }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 1 }}>
                Przykładowe realizacje
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, maxWidth: 520 }}>
                Wybrane projekty zrealizowane przez MadejPak — od pojedynczych stanowisk po zintegrowane układy.
              </Typography>
            </Box>
            <Box
              component={Link}
              href="/realizacje"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', flexShrink: 0 }}
            >
              Wszystkie realizacje <ArrowRight />
            </Box>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {REALIZATIONS.map((r) => (
              <Box key={r.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: 3 }}>
                <Typography variant="body1" sx={{ fontWeight: 700, mb: 0.75, fontSize: '0.95rem', color: 'var(--text)' }}>
                  {r.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.65, fontSize: '0.82rem' }}>
                  {r.scope}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box sx={{ mt: 4, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM }}>
              Szczegółowe realizacje dostępne w dziale case studies.
            </Typography>
            <Box component={Link} href="/realizacje"
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', '&:hover': { color: '#c9520a' } }}>
              Przejdź do realizacji <ArrowRight />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Jak wygląda współpraca ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Jak wygląda współpraca
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 640 }}>
            Od pierwszego zapytania po serwis — jeden partner odpowiedzialny za całość, bez przerzucania odpowiedzialności między dostawcami.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {PROCESS.map((step, i) => (
              <Box key={step.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.75 }}>
                  <Box sx={{ width: 34, height: 34, borderRadius: '50%', bgcolor: `color-mix(in srgb, ${ACCENT} 14%, transparent)`, color: ACCENT, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.9rem', flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.05rem', fontWeight: 700 }}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>
                  {step.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG_ALT }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1.5 }}>
                Szukasz konkretnej maszyny lub rozwiązania specjalnego?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                Przygotowujemy zarówno pojedyncze urządzenia, jak i kompletne rozwiązania zintegrowane z linią produkcyjną. Opisz proces, produkt i wymagania.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box
                component={Link}
                href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Wyślij zapytanie <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/rozwiazania/projekty-custom"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Skonsultuj projekt customowy
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Breadcrumb ── */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Maszyny MadejPak</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
