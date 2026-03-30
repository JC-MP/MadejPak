import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Gotowe linie pakujące – sprawdzone układy dla zakładów produkcyjnych | MadejPak',
  description:
    'MadejPak wdraża gotowe linie pakujące i stanowiska paletyzacji oparte na realnych wdrożeniach. Linia do pakowania produktów sypkich, żywności lub chemikaliów — gotowa do uruchomienia.',
  keywords: [
    'gotowe linie pakujące', 'linia pakująca dla zakładu produkcyjnego',
    'linia do pakowania produktów sypkich', 'linia pakująca żywność',
    'stanowisko paletyzacji', 'gotowe rozwiązanie pakowania',
    'szybkie wdrożenie linii pakującej',
  ],
  alternates: { canonical: `${SITE_URL}/maszyny/gotowe-linie-pakujace` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/gotowe-linie-pakujace`,
    title:       'Gotowe linie pakujące | MadejPak',
    description: 'MadejPak projektuje i wdraża gotowe linie pakujące, stanowiska paletyzacji i rozwiązania automatyzacji końca linii. Sprawdzone układy oparte na realnych wdrożeniach przemysłowych.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Gotowe linie pakujące – MadejPak' }],
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
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// ─── Solution type icons ────────────────────────────────────────────────────

// Kartonowanie — produkty wpadają do kartonu, karton zamykany
function IconKartonowanie() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Karton otwarty */}
      <rect x="20" y="42" width="56" height="44" rx="2" stroke="currentColor" strokeWidth="2"/>
      {/* Klapy kartonu */}
      <path d="M20 42 L48 30 L76 42" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M48 30 L48 42" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
      {/* Produkty wpadające z góry */}
      <rect x="36" y="10" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="50" y="14" width="10" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      {/* Strzałki w dół */}
      <path d="M41 22 L41 30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M39 28 L41 31 L43 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M55 26 L55 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M53 32 L55 35 L57 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      {/* Produkty w kartonie */}
      <rect x="28" y="58" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="42" y="58" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="56" y="58" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </Box>
  );
}

// Paletyzacja — palet z ułożonymi warstwami kartonów
function IconPaletyzacja() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Paleta */}
      <rect x="8" y="74" width="80" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      <line x1="28" y1="74" x2="28" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="48" y1="74" x2="48" y2="82" stroke="currentColor" strokeWidth="2"/>
      <line x1="68" y1="74" x2="68" y2="82" stroke="currentColor" strokeWidth="2"/>
      {/* Warstwa 1 — 4 kartony */}
      <rect x="10" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="30" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="50" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="68" y="62" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Warstwa 2 — 3 kartony */}
      <rect x="14" y="50" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="38" y="50" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="62" y="50" width="20" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Warstwa 3 — 2 kartony */}
      <rect x="20" y="38" width="22" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="54" y="38" width="22" height="12" rx="1" stroke="currentColor" strokeWidth="2"/>
      {/* Robot/strzałka odkładająca */}
      <path d="M70 14 L78 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M70 14 L60 10 L64 20" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </Box>
  );
}

// Robotyzacja — ramię robota obsługujące linię z opakowaniami
function IconRobotyzacja() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Taśma transportowa */}
      <line x1="6" y1="76" x2="90" y2="76" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="6" y1="84" x2="90" y2="84" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="12" cy="80" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="84" cy="80" r="6" stroke="currentColor" strokeWidth="2"/>
      {/* Opakowania na taśmie */}
      <rect x="22" y="64" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="40" y="64" width="14" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      {/* Podstawa robota */}
      <rect x="58" y="58" width="24" height="8" rx="1.5" stroke="currentColor" strokeWidth="2"/>
      {/* Ramię 1 */}
      <line x1="70" y1="58" x2="56" y2="38" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="56" cy="38" r="3.5" stroke="currentColor" strokeWidth="2"/>
      {/* Ramię 2 */}
      <line x1="56" y1="34.5" x2="40" y2="20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <circle cx="40" cy="20" r="3" stroke="currentColor" strokeWidth="2"/>
      {/* Chwytak */}
      <path d="M40 17 L33 10 L33 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M40 17 L47 10 L47 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="33" y="2" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    </Box>
  );
}

// Trudne warunki — tarcza + zębatka = ochrona i niezawodność
function IconTrudneWarunki() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Tarcza ochronna */}
      <path d="M48 8 L76 20 L76 52 C76 68 62 80 48 86 C34 80 20 68 20 52 L20 20 Z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      {/* Koło zębate w tarczy */}
      <circle cx="48" cy="48" r="14" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="48" cy="48" r="7" stroke="currentColor" strokeWidth="1.5"/>
      {[0,45,90,135,180,225,270,315].map((a) => {
        const rad = (a * Math.PI) / 180;
        const x1 = 48 + 14 * Math.cos(rad);
        const y1 = 48 + 14 * Math.sin(rad);
        const x2 = 48 + 19 * Math.cos(rad);
        const y2 = 48 + 19 * Math.sin(rad);
        return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>;
      })}
      {/* Ptaszek — "potwierdzone" */}
      <path d="M40 48 L45 53 L56 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </Box>
  );
}

// Półautomatyzacja — prosta taśma + postać operatora obok
function IconPolautomatyczne() {
  return (
    <Box component="svg" viewBox="0 0 96 96" fill="none" aria-hidden="true"
      sx={{ width: 80, height: 80, color: ACCENT }}>
      {/* Taśma (krótsza — 2/3 szerokości) */}
      <line x1="30" y1="66" x2="88" y2="66" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="30" y1="74" x2="88" y2="74" stroke="currentColor" strokeWidth="2.5"/>
      <circle cx="36" cy="70" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="82" cy="70" r="6" stroke="currentColor" strokeWidth="2"/>
      {/* Opakowanie na taśmie */}
      <rect x="50" y="54" width="18" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="72" y="54" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      {/* Operator — głowa */}
      <circle cx="16" cy="28" r="8" stroke="currentColor" strokeWidth="2"/>
      {/* Tułów */}
      <line x1="16" y1="36" x2="16" y2="56" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Ręce — jedna wyciągnięta do taśmy */}
      <path d="M16 44 L28 48" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 44 L8 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Nogi */}
      <path d="M16 56 L10 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M16 56 L22 72" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      {/* Strzałka "etapowanie" */}
      <path d="M34 34 L44 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 2"/>
      <path d="M41 31 L44 34 L41 37" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Box>
  );
}

const SOLUTION_ICONS: Record<string, React.ReactNode> = {
  'kartonowanie':    <IconKartonowanie />,
  'paletyzacja':     <IconPaletyzacja />,
  'robotyzacja':     <IconRobotyzacja />,
  'trudne-warunki':  <IconTrudneWarunki />,
  'polautomatyczne': <IconPolautomatyczne />,
};

// ─── Data ────────────────────────────────────────────────────────────────────

const SOLUTION_TYPES = [
  {
    id: 'kartonowanie',
    name: 'Linie kartonowania i pakowania zbiorczego',
    desc: 'Rozwiązania do automatyzacji końcowego etapu pakowania produktów jednostkowych do kartonów lub opakowań zbiorczych. Obejmują transport produktu, grupowanie, kartonowanie, zamykanie oraz przekazanie do paletyzacji.',
    forWho: ['Chemia gospodarcza i FMCG', 'Producenci produktów pakowanych jednostkowo', 'Linie wymagające stabilnego przepływu produktu'],
    benefits: ['Ograniczenie pracy ręcznej przy pakowaniu', 'Wyższa wydajność i stabilność procesu', 'Powtarzalna jakość opakowania zbiorczego'],
    caseLinks: [
      { slug: 'golddrop',  label: 'Kartonowanie i robotyzacja pakowania detergentów' },
      { slug: 'skawa',     label: 'Dedykowana linia pakowania wafli do 320 szt./min' },
    ],
  },
  {
    id: 'paletyzacja',
    name: 'Gotowe stanowiska paletyzacji',
    desc: 'Stanowiska do automatycznej paletyzacji produktów, worków, kartonów i opakowań zbiorczych. Pracują jako niezależne wyspy robotyczne albo jako część większej linii pakującej.',
    forWho: ['Zakłady z dużym udziałem pracy ręcznej na końcu linii', 'Procesy pakowania ciężkich lub problematycznych opakowań', 'Linie wymagające stabilnego i powtarzalnego odkładania na paletę'],
    benefits: ['Redukcja pracy fizycznej i poprawa bezpieczeństwa', 'Powtarzalność układu warstw na palecie', 'Możliwość pracy ciągłej bez przerw zmianowych'],
    caseLinks: [
      { slug: 'siarkopol', label: 'Robotyczna paletyzacja nawozów — dwie niezależne linie' },
      { slug: 'promotor',  label: 'Paletyzacja robotyczna worków z zaprawami budowlanymi' },
    ],
  },
  {
    id: 'robotyzacja',
    name: 'Zrobotyzowane linie pakujące',
    desc: 'Kompletne układy z robotami przemysłowymi do pakowania, manipulacji produktem i obsługi końca linii. Stosowane tam, gdzie liczy się wydajność, ograniczenie błędów i obsługa wielu formatów opakowań.',
    forWho: ['Zakłady przemysłowe o większej skali produkcji', 'Procesy z dużą zmiennością opakowań i formatów', 'Firmy zastępujące manualne pakowanie automatyką'],
    benefits: ['Wyższa stabilność i powtarzalność procesu', 'Ograniczenie błędów ludzkich', 'Możliwość skalowania produkcji bez dodatkowego zatrudnienia'],
    caseLinks: [
      { slug: 'alexpol',  label: 'Mobilne stanowisko cobotyczne do paletyzacji' },
      { slug: 'certech',  label: 'Paletyzacja i pakowanie żwirku — dwa etapy robotyzacji' },
    ],
  },
  {
    id: 'trudne-warunki',
    name: 'Linie dla trudnych warunków i wymagających produktów',
    desc: 'Rozwiązania projektowane dla środowisk zapylonych, ograniczonych przestrzennie, zróżnicowanych formatów opakowań oraz produktów trudnych w automatycznej manipulacji.',
    forWho: ['Nawozy, chemia, produkty o niestabilnej geometrii', 'Zakłady z istniejącą, trudną do przebudowy infrastrukturą', 'Procesy ze śliskim, ciężkim lub zmiennym produktem'],
    benefits: ['Dopasowanie do rzeczywistych warunków zakładu', 'Integracja z istniejącą infrastrukturą bez przebudowy', 'Większa niezawodność w trudnym środowisku produkcyjnym'],
    caseLinks: [
      { slug: 'siarkopol', label: 'Obsługa śliskich worków nawozowych w środowisku zapylonym' },
      { slug: 'lazur',     label: 'Pakowanie serów w warunkach wysokiej wilgotności i chłodu' },
      { slug: 'qemetica',  label: 'Pakowanie chlorku wapnia — ekstremalnie trudne środowisko' },
    ],
  },
  {
    id: 'polautomatyczne',
    name: 'Stanowiska półautomatyczne i etapowa automatyzacja',
    desc: 'Stanowiska półautomatyczne dla firm, które chcą ograniczyć pracę ręczną i uporządkować proces pakowania bez pełnej robotyzacji całego układu. Dobre rozwiązanie dla etapowego rozwoju automatyzacji.',
    forWho: ['Mniejsze zakłady lub procesy o średniej wydajności', 'Firmy rozpoczynające automatyzację końca linii', 'Stanowiska przygotowane do późniejszej rozbudowy'],
    benefits: ['Niższy próg wejścia i krótszy czas wdrożenia', 'Poprawa ergonomii i organizacji pracy', 'Gotowość do dalszej automatyzacji kolejnych etapów'],
    caseLinks: [
      { slug: 'promotor', label: 'Robotyczna paletyzacja worków z zaprawami budowlanymi' },
    ],
  },
];

const SCOPE_LEVELS = [
  {
    label: 'Stanowisko',
    desc: 'Pojedyncze stanowisko pakowania, kartonowania lub paletyzacji dla konkretnego etapu procesu. Może pracować samodzielnie lub zostać dołączone do istniejącej linii.',
    tags: ['Paletyzacja', 'Kartonowanie', 'Odbiór produktu'],
  },
  {
    label: 'Wyspa robotyczna',
    desc: 'Zintegrowany układ z robotem, transportem i osprzętem wykonawczym, gotowy do pracy w istniejącej linii. Kompletny moduł do wstawienia w istniejącą infrastrukturę.',
    tags: ['Robot + transport', 'Chwytak', 'Sterowanie'],
  },
  {
    label: 'Kompletna linia',
    desc: 'Całościowy system obejmujący podawanie, pakowanie, transport, paletyzację oraz integrację z infrastrukturą klienta. Od maszyny pakującej po owiniętą paletę.',
    tags: ['Pełna integracja', 'Podawanie + pakowanie + paletyzacja', 'Sterowanie nadrzędne'],
  },
];

const CASE_STUDIES = [
  {
    id: 'gold-drop',
    client: 'Gold Drop',
    title: 'Automatyzacja kartonowania i pakowania detergentów',
    desc: 'Dedykowany system kartonowania i robotyzacji pakowania wdrożony dla producenta środków czystości. Projekt zastąpił pracę manualną i ustabilizował proces pakowania w ograniczonej przestrzeni roboczej.',
    scope: ['Analiza procesu i koncepcja automatyzacji', 'Projekt i wykonanie kartoniarek', 'Integracja z istniejącą linią klienta', 'Uruchomienie, testy i wsparcie powdrożeniowe'],
    effects: ['Redukcja kosztów operacyjnych', 'Wzrost wydajności pakowania', 'Pełna powtarzalność i stabilność procesu'],
    industry: 'Chemia gospodarcza / FMCG',
  },
  {
    id: 'siarkopol',
    client: 'Siarkopol',
    title: 'Robotyczna linia pakowania i paletyzacji nawozów',
    desc: 'Dwie niezależne linie pakujące oparte na robotach KUKA, przygotowane do obsługi worków 25 kg i opakowań 0,5 kg w trudnym, zapylonym środowisku nawozowym.',
    scope: ['Analiza procesu i koncepcja linii', 'Projekt i wykonanie systemu paletyzacji', 'Integracja z infrastrukturą klienta', 'Uruchomienie, testy i przygotowanie pod dalszą rozbudowę'],
    effects: ['Ograniczenie pracy manualnej przy końcu linii', 'Wzrost wydajności i stabilności procesu', 'Poprawa bezpieczeństwa pracy', 'Gotowość infrastruktury pod rozbudowę'],
    industry: 'Nawozy / Chemia przemysłowa',
  },
];

const ADVANTAGES = [
  { title: 'Oparte na realnych wdrożeniach', desc: 'Rozwiązania wynikają z doświadczeń projektowych i produkcyjnych — nie z katalogowych konfiguracji. Każdy układ przeszedł przez etap analizy, projektu i uruchomienia w realnym zakładzie.' },
  { title: 'Dopasowane do procesu', desc: 'Układ linii dobierany jest do produktu, wydajności, dostępnej przestrzeni i warunków zakładu — nie odwrotnie.' },
  { title: 'Etapowanie inwestycji', desc: 'Możliwe jest wdrożenie pojedynczego stanowiska, wyspy robotycznej lub pełnej linii. Klient nie musi od razu inwestować w kompletną automatyzację.' },
  { title: 'Integracja i rozwój', desc: 'Rozwiązania mogą zostać zintegrowane z istniejącą infrastrukturą i przygotowane pod dalszą rozbudowę — bez konieczności wymiany całej linii.' },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Analiza procesu', desc: 'Określamy produkt, wydajność, układ hali, istniejące maszyny i warunki pracy. Rozmawiamy z technologami i operatorami linii.' },
  { num: '02', title: 'Koncepcja linii', desc: 'Dobieramy układ stanowisk, typ robotyzacji, schemat przepływu i zakres automatyzacji. Przygotowujemy koncepcję do uzgodnienia.' },
  { num: '03', title: 'Projekt i wykonanie', desc: 'Opracowujemy dokumentację mechaniczną i elektryczną, wykonujemy urządzenia własne, integrujemy maszyny partnerów.' },
  { num: '04', title: 'Integracja i uruchomienie', desc: 'Instalujemy i uruchamiamy system w zakładzie klienta. Synchronizujemy ze sterowniem nadrzędnym i istniejącą infrastrukturą.' },
  { num: '05', title: 'Testy i optymalizacja', desc: 'Przeprowadzamy testy odbiorcze z pełnym obciążeniem produkcyjnym. Optymalizujemy parametry i szkolimy operatorów.' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function GotoweLiniePage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        {/* Zdjęcie tła — prawa strona, czarno-białe, z gradientem */}
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
          <Image src="/images/other/robotyzacja-cobot.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5, filter: 'grayscale(100%)' }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
              Gotowe układy wdrożeniowe
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
              Gotowe linie pakujące i stanowiska automatyzacji
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 2 }}>
              Dla zakładów, które chcą zautomatyzować pakowanie bez budowania projektu od zera — gotowe koncepcje linii i stanowisk, dopasowane do produktu, wydajności i warunków pracy.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8, mb: 5 }}>
              MadejPak projektuje i wdraża sprawdzone układy technologiczne: od stanowisk kartonowania i paletyzacji po kompletne linie pakujące z robotyzacją. Każde wdrożenie przechodzi przez analizę procesu i jest dopasowywane do specyfiki zakładu — szybciej niż projekt custom od podstaw.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              <Box
                component={Link}
                href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Zapytaj o linię <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Skonsultuj układ dla swojej produkcji
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Intro ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '5fr 4fr' }, gap: { xs: 4, md: 10 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
                Rozwiązania oparte na realnych wdrożeniach
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
                Prezentowane rozwiązania to gotowe koncepcje linii i stanowisk, które mogą zostać wdrożone w formie dopasowanej do konkretnego procesu. Obejmują zarówno kompletne układy pakujące, jak i pojedyncze stanowiska automatyzacji końca linii: kartonowanie, pakowanie zbiorcze, paletyzację czy organizację przepływu produktu.
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
                To nie są przypadkowe konfiguracje. To rozwiązania wynikające z doświadczeń wdrożeniowych MadejPak w zakładach przemysłowych — m.in. dla Gold Drop (kartonowanie i robotyzacja pakowania detergentów) oraz Siarkopol (dwie niezależne linie pakowania i paletyzacji nawozów).
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { val: '25+', label: 'lat doświadczeń wdrożeniowych w zakładach produkcyjnych' },
                { val: '5', label: 'etapów każdego projektu — od analizy po wsparcie' },
                { val: '3', label: 'poziomy zakresu wdrożenia — stanowisko / wyspa / linia' },
              ].map((s) => (
                <Box key={s.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, display: 'flex', alignItems: 'center', gap: 3 }}>
                  <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT, flexShrink: 0, lineHeight: 1 }}>
                    {s.val}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.5 }}>
                    {s.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Typy rozwiązań ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Główne typy gotowych rozwiązań
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 8, maxWidth: 680 }}>
            Każdy typ rozwiązania może zostać wdrożony jako stanowisko, wyspa robotyczna lub element kompletnej linii — w zależności od skali i wymagań zakładu.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {SOLUTION_TYPES.map((s, idx) => (
              <Box key={s.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, overflow: 'hidden', display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 2fr' } }}>
                {/* Icon */}
                <Box sx={{ bgcolor: BG_ALT, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: { xs: 160, md: 'auto' }, borderRight: { md: `1px solid ${BORDER}` }, borderBottom: { xs: `1px solid ${BORDER}`, md: 'none' } }}>
                  {SOLUTION_ICONS[s.id] ?? null}
                </Box>
                <Box sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Box sx={{ width: 32, height: 32, borderRadius: 1, bgcolor: `${ACCENT}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Typography sx={{ fontSize: '0.75rem', fontWeight: 800, color: ACCENT }}>
                        {String(idx + 1).padStart(2, '0')}
                      </Typography>
                    </Box>
                    <Typography variant="h3" sx={{ fontSize: '1.1rem', fontWeight: 700 }}>
                      {s.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                    {s.desc}
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                      <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.68rem' }}>
                        Dla kogo
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {s.forWho.map((f) => (
                          <Box component="li" key={f} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                            {f}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.68rem' }}>
                        Korzyści
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {s.benefits.map((b) => (
                          <Box component="li" key={b} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.8rem' }}>
                            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '5px' }} />
                            {b}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-38)', mb: 1.5 }}>
                      Przykłady wdrożeń
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                      {s.caseLinks.map((cl) => (
                        <Box
                          key={cl.slug}
                          component={Link}
                          href={`/realizacje/${cl.slug}`}
                          sx={{
                            display: 'inline-flex', alignItems: 'center', gap: 0.75,
                            fontSize: '0.8rem', color: ACCENT, textDecoration: 'none',
                            fontWeight: 500, lineHeight: 1.4,
                            transition: 'gap 0.15s ease, color 0.15s ease',
                            '&:hover': { gap: 1.25, color: '#F07520' },
                          }}
                        >
                          <ArrowRight />
                          {cl.label}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Zakres wdrożenia ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Zakres wdrożenia dopasowany do skali procesu
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 640 }}>
            Klient nie musi od razu inwestować w kompletną automatyzację. Możliwe jest wdrożenie etapowe — od pojedynczego stanowiska po pełną linię.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {SCOPE_LEVELS.map((level, idx) => (
              <Box key={level.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4, position: 'relative', overflow: 'hidden' }}>
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, bgcolor: ACCENT, opacity: idx === 2 ? 1 : 0.4 + idx * 0.3 }} />
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 1.5 }}>
                  {String(idx + 1).padStart(2, '0')}
                </Typography>
                <Typography variant="h3" sx={{ fontSize: '1.15rem', fontWeight: 700, mb: 2 }}>
                  {level.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                  {level.desc}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {level.tags.map((tag) => (
                    <Box key={tag} sx={{ px: 1.5, py: 0.5, borderRadius: 1, border: `1px solid ${BORDER}`, fontSize: '0.72rem', color: TEXT_DIM }}>
                      {tag}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* HIDDEN: przykładowe wdrożenia — przywróć usuwając {false &&} */}
      {false && <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Przykładowe wdrożenia
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 620 }}>
            Gotowe linie pakujące MadejPak to nie koncepcja — to systemy, które działają w realnych zakładach produkcyjnych.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {CASE_STUDIES.map((cs) => (
              <Box key={cs.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Image placeholder */}
                <Box sx={{ height: 220, bgcolor: BG, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${BORDER}` }}>
                  <Typography sx={{ color: TEXT_DIM, fontSize: '0.75rem' }}>Zdjęcie — {cs.client}</Typography>
                </Box>
                <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'inline-block', px: 2, py: 0.5, bgcolor: `${ACCENT}18`, color: ACCENT, borderRadius: 1, fontSize: '0.72rem', fontWeight: 700, mb: 2, alignSelf: 'flex-start' }}>
                    {cs.industry}
                  </Box>
                  <Typography variant="h3" sx={{ fontSize: '1.15rem', fontWeight: 700, mb: 0.75 }}>
                    {cs.client}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, fontSize: '0.95rem', fontWeight: 600, mb: 2 }}>
                    {cs.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                    {cs.desc}
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3, mt: 'auto' }}>
                    <Box>
                      <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.68rem' }}>
                        Zakres projektu
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {cs.scope.map((item) => (
                          <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.78rem' }}>
                            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '4px' }} />
                            {item}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                    <Box>
                      <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5, fontSize: '0.68rem' }}>
                        Efekty wdrożenia
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                        {cs.effects.map((item) => (
                          <Box component="li" key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, color: TEXT_DIM, fontSize: '0.78rem' }}>
                            <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '4px' }} />
                            {item}
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${BORDER}` }}>
                    <Box
                      component={Link}
                      href="/realizacje"
                      sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none' }}
                    >
                      Zobacz realizację <ArrowRight />
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>}

      {/* ── Przewagi ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Dlaczego gotowe linie MadejPak
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 620 }}>
            Gotowość rozwiązania nie oznacza braku elastyczności. Każdy układ jest dostosowywany do specyfiki zakładu i produktu.
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

      {/* ── Proces wdrożenia ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Jak pracujemy nad linią
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 620 }}>
            Każdy projekt przechodzi przez te same etapy — niezależnie od skali wdrożenia.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(5, 1fr)' }, gap: 3 }}>
            {PROCESS_STEPS.map((s, idx) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, position: 'relative' }}>
                {idx < PROCESS_STEPS.length - 1 && (
                  <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', right: -16, top: '50%', transform: 'translateY(-50%)', color: TEXT_DIM, zIndex: 1 }}>
                    <ArrowRight />
                  </Box>
                )}
                <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 1.5 }}>
                  {s.num}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '0.9rem', fontWeight: 700, mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.65, fontSize: '0.8rem' }}>
                  {s.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1.5 }}>
                Szukasz gotowej linii pakującej lub stanowiska do końca linii?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                Dobieramy układ do produktu, wydajności, poziomu automatyzacji i warunków pracy w zakładzie. Możemy przygotować zarówno pojedyncze stanowisko, jak i kompletną linię pakującą.
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
                href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Opisz swój proces
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
            <span>Gotowe linie pakujące</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
