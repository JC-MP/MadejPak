import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Niestandardowe maszyny pakujące – projekty custom | MadejPak',
  description: 'MadejPak projektuje i buduje niestandardowe maszyny pakujące i stanowiska specjalne — gdy żadna maszyna z katalogu nie rozwiązuje problemu. Trudne produkty, specyficzne linie, ograniczona przestrzeń.',
  keywords: [
    'niestandardowe maszyny pakujące', 'projekt custom maszyna',
    'dedykowana maszyna pakująca', 'stanowisko specjalne pakowanie',
    'chwytak robotyczny custom', 'maszyna pakująca na zamówienie',
  ],
  alternates: { canonical: `${SITE_URL}/rozwiazania/projekty-custom` },
  openGraph: {
    url:         `${SITE_URL}/rozwiazania/projekty-custom`,
    title:       'Projekty custom | MadejPak',
    description: 'MadejPak realizuje niestandardowe projekty maszyn i systemów pakujących — od chwytaków robotycznych po kompletne stanowiska specjalne.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Projekty custom – MadejPak' }],
  },
};

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

// 4 konkretne sytuacje, w których projekt custom jest jedyną odpowiedzią
const TRIGGER_CASES = [
  {
    label: 'Trudny produkt',
    title: 'Kruszy się, lepi lub ma nieregularny kształt',
    desc: 'Żadna maszyna z katalogu nie pobiera produktu bez uszkodzeń. Budujemy dedykowany podajnik, chwytak z regulowaną siłą i taktowanie pod konkretną geometrię.',
    icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
  },
  {
    label: 'Ograniczona przestrzeń',
    title: 'Maszyna musi wejść tam, gdzie nie wejdzie standardowa',
    desc: '600 mm między słupami, hala 2,5 m, linia w podkowę. Projekt zaczyna się od wymiarów zakładu jako twardych ograniczeń — nie od katalogu.',
    icon: <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
  },
  {
    label: 'Agresywne środowisko',
    title: 'Pył, wilgoć, substancje chemiczne',
    desc: 'Standardowe napędy i elektryka nie wytrzymują roku w zakładzie chemicznym albo pod pyłem wapna. Dobieramy klasy IP, materiały odporne na korozję i hermetyczne obudowy.',
    icon: <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" d2="M9 12l2 2 4-4" />,
  },
  {
    label: 'Brak maszyny z półki',
    title: 'Produkt lub format, którego nikt nie opakował automatycznie',
    desc: 'Specyficzny kształt opakowania, niestandardowa kolejność operacji lub brak dostępnych maszyn do danego zastosowania. Wychodzimy od kartki i ołówka.',
    icon: <Ico d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />,
  },
];

// Czym custom MadejPak różni się od "dorobimy coś pod klienta"
const DIFFERENTIATORS = [
  {
    title: 'Własny zakład wykonawczy',
    desc: 'Mechanikę i automatykę wykonujemy we własnym zakładzie — bez outsourcingu kluczowych elementów. To skraca czas realizacji i daje nam pełną kontrolę nad jakością.',
    icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
  },
  {
    title: 'Pełna dokumentacja i CE',
    desc: 'Każdy projekt kończy się dokumentacją techniczną, schematami elektrycznymi i deklaracją zgodności CE. Nie "działa i tyle" — masz wszystko potrzebne do utrzymania maszyny przez lata.',
    icon: <Ico d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" d2="M9 12h6M9 16h4" />,
  },
  {
    title: 'FAT przed wyjazdem do klienta',
    desc: 'Każdą maszynę testujemy u siebie z produktem klienta zanim trafi na produkcję. Próby odbioru (FAT) jeszcze w naszym zakładzie eliminują problemy rozruchowe na miejscu.',
    icon: <Ico d="M22 11.08V12a10 10 0 1 1-5.93-9.14" d2="M22 4 12 14.01l-3-3" />,
  },
  {
    title: 'Serwis jak przy maszynach standardowych',
    desc: 'Własny serwis, własne części, własna dokumentacja. Po roku nie szukamy kooperanta, który "coś tam robił" — znamy maszynę, bo ją zaprojektowaliśmy.',
    icon: <Ico d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
  },
];

const EXAMPLES = [
  {
    icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
    title: 'Chwytaki robotyczne',
    desc: 'Projektujemy i wykonujemy chwytaki pod konkretny produkt i robota — podciśnieniowe, mechaniczne, kombinowane.',
    example: 'np. chwytak 4-gniazdowy do kruchych ciastek, z regulacją siły podciśnienia',
  },
  {
    icon: <Ico d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />,
    title: 'Maszyny specjalne',
    desc: 'Urządzenia do operacji bez gotowego odpowiednika w katalogach — felcarki, podajniki, stanowiska montażowe.',
    example: 'np. automatyczna felcarka do worków po wypełnieniu',
  },
  {
    icon: <Ico d="M4 7h3M4 12h3M4 17h3M7 2v20M11 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-8" d2="M14 9h2M14 12h2M14 15h2" />,
    title: 'Maszyny liczące i dozujące',
    desc: 'Specjalistyczne urządzenia do automatycznego odliczania i pakowania produktów w zadanej ilości sztuk.',
    example: 'np. maszyna do liczenia i pakowania paluszków do sadzonek',
  },
  {
    icon: <Ico d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
    title: 'Modernizacje linii',
    desc: 'Przebudowa istniejących stanowisk — nowe moduły, wymiana automatyki, integracja z robotem lub systemem nadrzędnym.',
    example: 'np. wymiana sterowania starej zgrzewarki na nowe PLC z HMI',
  },
  {
    icon: <Ico d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" d2="M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
    title: 'Stanowiska półautomatyczne',
    desc: 'Układy łączące pracę operatora z automatyką — tam, gdzie pełna automatyzacja nie jest uzasadniona lub możliwa.',
    example: 'np. stanowisko z robotem do układania i operatorem do kontroli wizualnej',
  },
  {
    icon: <Ico d="M5 12h14M12 5l7 7-7 7" />,
    title: 'Systemy podawania i transferu',
    desc: 'Desztaplery, podajniki zabierakowe i taśmowe dopasowane do konkretnego produktu i układu linii.',
    example: 'np. podajnik ślimakowy dla produktów sypkich o nieregularnej granulacji',
  },
];

const PROCESS = [
  { icon: <Ico d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" d2="M9 12h6M9 16h4" />, num: '01', title: 'Analiza wymagań', desc: 'Szczegółowe omówienie produktu, procesu, wydajności, ograniczeń przestrzennych i wymagań środowiskowych.' },
  { icon: <Ico d="M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />, num: '02', title: 'Koncepcja rozwiązania', desc: 'Opracowujemy kilka wariantów koncepcji — prezentujemy je klientowi i uzgadniamy kierunek. Klient dostaje szkic układu i szacunkowe koszty projektu.' },
  { icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />, num: '03', title: 'Projekt i wykonanie', desc: 'Projekt mechaniczny i elektryczny, wykonanie we własnym zakładzie lub z kooperantami.' },
  { icon: <Ico d="M22 11.08V12a10 10 0 1 1-5.93-9.14" d2="M22 4 12 14.01l-3-3" />, num: '04', title: 'Testy i uruchomienie', desc: 'FAT w naszym zakładzie z produktem klienta, montaż na miejscu, SAT i szkolenie operatorów. Wsparcie w fazie rozruchu produkcyjnego.' },
];

function Arrow() {
  return <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden sx={{ width: 13, height: 13, flexShrink: 0 }}><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></Box>;
}

function Ico({ d, d2 }: { d: string; d2?: string }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 22, height: 22, color: 'inherit' }}>
      <path d={d} stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      {d2 && <path d={d2} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />}
    </Box>
  );
}

const iconBox = { width: 44, height: 44, borderRadius: '10px', bgcolor: 'rgba(232,97,10,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5, color: ACCENT } as const;

export default function ProjektyCustomPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>
      <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '46%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              `linear-gradient(to right, var(--bg-alt) 0%, color-mix(in srgb, var(--bg-alt) 75%, transparent) 18%, color-mix(in srgb, var(--bg-alt) 25%, transparent) 45%, transparent 100%)`,
              `linear-gradient(to bottom, color-mix(in srgb, var(--bg-alt) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg-alt) 55%, transparent) 100%)`,
            ].join(', '),
          }} />
          <Image src="/images/other/custom-smarowanieform.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>Rozwiązania</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>Projekty custom</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 5 }}>
              Realizujemy projekty, dla których nie istnieje gotowe rozwiązanie katalogowe. Projektujemy i wykonujemy maszyny specjalne, chwytaki robotyczne, stanowiska niestandardowe i systemy dopasowane do konkretnego produktu i procesu.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box component={Link} href="/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Opisz swój projekt <Arrow /></Box>
              <Box component={Link} href="/maszyny/madejpak" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>Maszyny MadejPak <Arrow /></Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Kiedy projekt custom — 4 scenariusze */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Kiedy projekt custom
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              Gdy maszyna katalogowa nie wystarczy
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              Projekt custom nie jest droższy dlatego, że chcemy więcej zarobić — jest potrzebny, bo standardowe rozwiązanie po prostu nie zadziała.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {TRIGGER_CASES.map((c) => (
              <Box key={c.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: { xs: 3, md: 3.5 } }}>
                <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>
                  {c.label}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                  <Box sx={{ ...iconBox, mb: 0, flexShrink: 0 }}>{c.icon}</Box>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.975rem', lineHeight: 1.35, pt: 0.5 }}>{c.title}</Typography>
                </Box>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>{c.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Czym różni się custom MadejPak */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 620 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Czym się różnimy
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              Custom to nie „dorobimy coś pod klienta"
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              Realizujemy projekty niestandardowe z takim samym poziomem dokumentacji, testów i wsparcia serwisowego jak maszyny z naszej oferty standardowej.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {DIFFERENTIATORS.map((d) => (
              <Box key={d.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: 2, p: { xs: 3, md: 3.5 } }}>
                <Box sx={iconBox}>{d.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.975rem', mb: 1.25 }}>{d.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>{d.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Przykładowe projekty */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2 }}>Kategorie projektów</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8 }}>Każde wdrożenie jest inne — to kierunki, w których realizujemy projekty. Przykłady obok to rzeczywiste typy zleceń.</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {EXAMPLES.map((e) => (
              <Box key={e.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, display: 'flex', flexDirection: 'column' }}>
                <Box sx={iconBox}>{e.icon}</Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{e.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7, mb: 2, flex: 1 }}>{e.desc}</Typography>
                <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-45)', fontStyle: 'italic', lineHeight: 1.5, borderTop: `1px solid ${BORDER}`, pt: 1.5 }}>
                  {e.example}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 6 }}>Jak realizujemy projekty specjalne</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(4, 1fr)' }, gap: 3 }}>
            {PROCESS.map((s) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box sx={{ ...iconBox, mb: 0 }}>{s.icon}</Box>
                  <Typography sx={{ fontSize: '1.25rem', fontWeight: 800, color: ACCENT, lineHeight: 1 }}>{s.num}</Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>{s.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 1.5 }}>Masz niestandardowy proces do rozwiązania?</Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>Opisz produkt, proces i wymagania — przygotujemy koncepcję i wycenę projektu.</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Zapytanie ofertowe <Arrow /></Box>
              <Box component={Link} href="/rozwiazania" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>Wszystkie rozwiązania</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/rozwiazania" style={{ color: 'inherit', textDecoration: 'none' }}>Rozwiązania</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Projekty custom</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
