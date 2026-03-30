import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Paletyzacja — systemy robotyczne i warstwowe | MadejPak',
  description:
    'MadejPak dobiera i integruje systemy paletyzacji dla linii pakujących — robotyczne, warstwowe i cobotowe. Partnerzy: KUKA, Yaskawa, Sidel, BEUMER, OCME, TopTier, Concetti.',
  alternates: { canonical: `${SITE_URL}/maszyny/paletyzacja` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/paletyzacja`,
    title:       'Paletyzacja robotyczna i warstwowa | MadejPak',
    description: 'MadejPak dobiera i integruje systemy paletyzacji dla linii pakujących — robotyczne, warstwowe i cobotowe. Partnerzy: KUKA, Yaskawa, Sidel, BEUMER, OCME, TopTier, Concetti.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Paletyzacja – MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
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

// ─── Data ────────────────────────────────────────────────────────────────────

const PROCESS_STEPS = [
  { num: '01', title: 'Odbiór produktu',           desc: 'Produkt opuszcza maszynę pakującą i trafia na transport doprowadzający do paletyzatora.' },
  { num: '02', title: 'Buforowanie',               desc: 'Sekcja buforująca wyrównuje różnice prędkości między maszyną pakującą a paletyzatorem i zapobiega zatrzymaniom linii.' },
  { num: '03', title: 'Formowanie warstwy',         desc: 'Produkty są grupowane i orientowane w układ odpowiadający schematowi palety — w linii lub pod kątem 90°.' },
  { num: '04', title: 'Odkładanie na paletę',       desc: 'Robot lub głowica warstwowa układa produkty warstwami według zaprogramowanego wzoru paletyzacji.' },
  { num: '05', title: 'Podawanie palet i przekładek', desc: 'Automatyczny podajnik dostarcza puste palety i — jeśli wymagane — przekładki kartonowe lub foliowe między warstwami.' },
  { num: '06', title: 'Zabezpieczenie i transport', desc: 'Gotowa paleta trafia do owijarki folią stretch lub kapturem termicznym, a następnie przekazywana jest do dalszego transportu lub magazynu.' },
];

const SOLUTION_TYPES = [
  {
    id: 'robotyczna',
    label: 'Paletyzacja robotyczna',
    scope: 'Wiele formatów, zmienny asortyment, aplikacje wymagające elastyczności',
    desc: 'Robot przemysłowy z odpowiednim chwytakiem obsługuje wiele formatów produktów bez mechanicznego przezbrojenia. Zmiana układu palety odbywa się przez przeprogramowanie. Systemy robotyczne umożliwiają integrację z transportem palet, magazynem palet, owijarką i systemem nadrzędnym zakładu.',
    products: [
      'Kartony i opakowania kartonowe',
      'Worki z produktami sypkimi',
      'Zgrzewki butelek i puszek',
      'Skrzynki i pojemniki',
      'Tacki i opakowania wielosztukowe',
    ],
    partners: ['KUKA', 'Yaskawa Motoman seria PL', 'ABB', 'Sidel Pal Robo-Kombi / Pal Vite / RoboAccess', 'BEUMER robotpac®'],
  },
  {
    id: 'warstwowa',
    label: 'Paletyzacja warstwowa / konwencjonalna',
    scope: 'Średnie i wysokie wydajności, powtarzalne formaty, ustabilizowany strumień produktu',
    desc: 'Produkty są grupowane w kompletne warstwy, które następnie odkładane są na paletę jako całość. Formowanie warstwy może odbywać się w linii z transportem lub pod kątem 90°. Systemy warstwowe są właściwym wyborem tam, gdzie kluczowa jest powtarzalność i wysoka przepustowość.',
    products: [
      'Kartony z produktami spożywczymi i FMCG',
      'Opakowania zbiorcze w ustabilizowanych formatach',
      'Pojemniki i skrzynki',
    ],
    partners: ['OCME (modele tradycyjne i jednokolumnowe)', 'Sidel PalPack 4000 / PalKombi', 'Sidel PalLinear (wysoka wydajność, górny załadunek)', 'BEUMER paletpac®', 'TopTier'],
  },
  {
    id: 'worki',
    label: 'Paletyzacja worków i produktów sypkich',
    scope: 'Produkty pakowane w worki — chemia, budownictwo, nawozy, pet food, surowce sypkie',
    desc: 'Produkty sypkie pakowane w worki wymagają odmiennej logiki paletyzacji niż kartony czy zgrzewki. Kluczowe jest stabilne chwytanie worka, kontrolowane odkładanie warstw i budowanie statecznego stosu na palecie. BEUMER paletpac® osiąga wydajność do 6 000 worków na godzinę.',
    products: [
      'Worki z cementem, zaprawą i kruszywa',
      'Worki z nawozami i produktami agrochemicznymi',
      'Worki z karmą dla zwierząt (pet food)',
      'Worki z chemią przemysłową i środkami czyszczącymi',
      'Worki z granulowanymi surowcami sypkimi',
    ],
    partners: ['BEUMER paletpac® (do 6 000 worków/h)', 'BEUMER robotpac® (wersja robotyczna)', 'Concetti (systemy dla bulk solid products)', 'TopTier (bag palletizing)'],
  },
  {
    id: 'coboty',
    label: 'Kompaktowe cele paletyzacji / coboty',
    scope: 'Mniejsze zakłady, ograniczona przestrzeń, niższy wolumen, pierwszy etap automatyzacji',
    desc: 'Dla zakładów o mniejszej skali produkcji lub ograniczonej dostępnej przestrzeni dostępne są kompaktowe cele paletyzacji z cobotami lub lżejszymi robotami przemysłowymi. Coboty w określonych aplikacjach mogą pracować bez klasycznego wygrodzenia stałego, co redukuje wymagania przestrzenne i skraca czas wdrożenia. Sidel CoboAccess_Pal generuje dopasowany layout celi na podstawie 10 parametrów produkcyjnych.',
    products: [
      'Kartony i opakowania dla mniejszych wolumenów',
      'Aplikacje wymagające częstych zmian formatów',
      'Stanowiska przy liniach krótkych serii',
    ],
    partners: ['Sidel CoboAccess_Pal', 'KUKA LBR iisy'],
  },
];

const SECTORS = [
  {
    name: 'Spożywcza',
    items: ['Kartony z żywnością', 'Zgrzewki butelek i słoiczków', 'Tacki i opakowania wielosztukowe', 'Worki z produktami sypkimi'],
  },
  {
    name: 'Napoje',
    items: ['Butelki PET i szklane', 'Puszki i kartony', 'Zgrzewki i opakowania wielosztukowe'],
  },
  {
    name: 'Chemiczna',
    items: ['Worki z chemią przemysłową', 'Kanistry i pojemniki', 'Opakowania FMCG z chemii domowej'],
  },
  {
    name: 'Materiały budowlane',
    items: ['Worki z cementem i zaprawą', 'Worki z piaskiem i kruszywami', 'Granulat i pellet budowlany'],
  },
  {
    name: 'Pet food i nawozy',
    items: ['Worki z karmą dla zwierząt', 'Worki z nawozami i granulatem', 'Produkty agrochemiczne'],
  },
  {
    name: 'FMCG / Przemysł ogólny',
    items: ['Zróżnicowane formaty opakowań', 'Skrzynki i pojemniki przemysłowe', 'Opakowania zbiorcze'],
  },
];

const INTEGRATION_ITEMS = [
  { title: 'Transport doprowadzający',      desc: 'Przenośniki taśmowe i rolkowe, transfery i zwrotnice kierujące strumień produktów z maszyny pakującej na wejście paletyzatora.' },
  { title: 'Buforowanie i akumulacja',      desc: 'Sekcje buforujące wyrównujące różnice prędkości i zapobiegające zatrzymywaniu linii przy chwilowym braku wydajności paletyzatora.' },
  { title: 'Formowanie warstw',             desc: 'Grupowanie i orientacja produktów przed podaniem na paletyzator — szczególnie istotne przy systemach warstwowych.' },
  { title: 'Podawanie palet i przekładek',  desc: 'Automatyczne podajniki pustych palet i systemy podawania przekładek kartonowych lub foliowych między warstwami.' },
  { title: 'Zabezpieczenie ładunku',        desc: 'Owijarka folią stretch, kaptur termiczny lub spinanie taśmą — jako element zintegrowanego układu, zsynchronizowany z paletyzatorem.' },
  { title: 'Transport palet',              desc: 'Przenośniki rolkowe i łańcuchowe, wózki transferowe lub integracja z systemem AGV i magazynem.' },
  { title: 'Wygrodzenia i bezpieczeństwo', desc: 'Strefy robocze projektowane zgodnie z normami maszynowymi — ogrodzenia stałe, kurtyny świetlne lub skanery bezpieczeństwa, dobrane do aplikacji.' },
  { title: 'Synchronizacja z linią',        desc: 'Paletyzator synchronizowany z maszyną pakującą i otoczeniem przez wspólny system sterowania lub komunikację maszynową (Profinet, EtherNet/IP, OPC-UA).' },
];

const PARTNERS = [
  {
    name: 'KUKA',
    origin: 'Niemcy',
    href: 'https://www.kuka.com',
    desc: 'Producent robotów przemysłowych z ofertą robotów paletyzujących i depaletyzujących. Systemy KUKA integrowane są z istniejącymi liniami pakującymi i końcówkami linii. W ofercie zarówno roboty do ciężkich aplikacji przemysłowych, jak i cobot LBR iisy do kompaktowych stanowisk paletyzacji bez klasycznego wygrodzenia stałego.',
  },
  {
    name: 'Yaskawa — Motoman seria PL',
    origin: 'Japonia',
    href: 'https://www.motoman.com',
    desc: 'Seria robotów paletyzujących o udźwigu od 80 do 800 kg. Przeznaczone do aplikacji z kartonami, workami, napojami i pojemnikami. Zakres udźwigu pozwala na obsługę zarówno lekkich opakowań jednostkowych, jak i ciężkich ładunków zbiorczych.',
  },
  {
    name: 'Sidel',
    origin: 'Francja',
    href: 'https://www.sidel.com',
    desc: 'Producent kompletnych systemów paletyzacji dla przemysłu napojowego i FMCG. Oferta obejmuje systemy warstwowe (PalKombi, PalPack 4000), robotyczne (Pal Robo-Kombi, Pal Vite, RoboAccess), wysokowydajne z górnym załadunkiem (PalLinear) oraz kompaktowe cele cobotowe (CoboAccess_Pal). Sidel dostarcza systemy jako element kompletnego end-of-line.',
  },
  {
    name: 'BEUMER Group',
    origin: 'Niemcy',
    href: 'https://www.beumergroup.com',
    desc: 'Producent systemów paletyzacji i transportu palet. Seria paletpac® to system warstwowy do worków z wydajnością do 6 000 worków na godzinę. Seria robotpac® to wersja robotyczna obsługująca worki, kartony, skrzynki i kanistry. BEUMER oferuje także systemy zabezpieczania palet i kompletne rozwiązania pakowania końca linii.',
  },
  {
    name: 'OCME',
    origin: 'Włochy',
    href: 'https://www.ocme.it',
    desc: 'Producent kompletnych systemów paletyzacji i depaletyzacji. Oferta obejmuje modele tradycyjne i jednokolumnowe z układami formowania warstw w linii lub pod kątem 90°. OCME dostarcza systemy end-of-line z akcesoriami i integracją z dalszym transportem palet.',
  },
  {
    name: 'TopTier',
    origin: 'USA',
    href: 'https://www.toptierpalletizer.com',
    desc: 'Producent systemów paletyzacji dla różnych sektorów przemysłowych. W ofercie systemy z dolnym załadunkiem (Low Level Infeed), konwencjonalne i hybrydowe robotyczne (Robotier Hybrid Robotic) oraz dedykowane systemy do worków. Kompaktowy model Value Palletizer przeznaczony do aplikacji o umiarkowanej wydajności przy ograniczonym footprincie.',
  },
  {
    name: 'Concetti',
    origin: 'Włochy',
    href: 'https://www.concetti.com',
    desc: 'Producent specjalizujący się w systemach ważenia, pakowania i paletyzacji produktów sypkich (bulk solid products). Oferta obejmuje kompletne linie dla materiałów bulk — od dozowania i pakowania w worki po paletyzację gotowego ładunku.',
  },
];

const MADEJPAK_ROLE = [
  { step: '01', title: 'Dobór rozwiązania',       desc: 'Analizujemy produkt, wolumen, zmienność formatów, dostępną przestrzeń i istniejący układ linii. Na tej podstawie dobieramy typ systemu i technologię partnera.' },
  { step: '02', title: 'Projektowanie aplikacji', desc: 'Projektujemy układ stanowiska, określamy schemat palety i definiujemy interfejsy z otoczeniem linii. W razie potrzeby dobieramy typ chwytaka robotycznego.' },
  { step: '03', title: 'Dostawa i integracja',    desc: 'Dostarczamy paletyzator i wszystkie elementy otoczenia — transport, bufory, podajniki palet, przekładki, owijarki. Integrujemy całość mechanicznie, elektrycznie i komunikacyjnie.' },
  { step: '04', title: 'Uruchomienie i testy',    desc: 'Przeprowadzamy testy odbiorcze (FAT) i uruchomienie w zakładzie klienta (SAT). Szkolimy operatorów i służby utrzymania ruchu.' },
  { step: '05', title: 'Serwis i modernizacje',   desc: 'Zapewniamy serwis gwarancyjny i pogwarancyjny, dostęp do części zamiennych oraz wsparcie przy zmianie formatów lub rozbudowie systemu.' },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function PaletyzacjaPage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                Koniec linii
              </Typography>
              <Typography variant="h1"
                sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3rem' }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--dim-85)' }}>
                Paletyzacja —<br />robotyczna, warstwowa<br />i zintegrowana
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
                MadejPak dobiera, dostarcza i integruje systemy paletyzacji dla przemysłowych linii pakujących.
                Oferujemy rozwiązania robotyczne, warstwowe i cobotowe — dopasowane do produktu, wydajności
                i układu przestrzennego zakładu. Paletyzator jest zawsze częścią szerszego systemu końca linii,
                nie odizolowaną maszyną.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box component={Link} href="/kontakt"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}>
                  Zapytaj o rozwiązanie
                  <ArrowRight />
                </Box>
                <Box component={Link} href="/realizacje"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                  Zobacz realizacje
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Zasada działania ── */}
      <Box sx={{ py: { xs: 6, md: 8 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zasada działania
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Od wyjścia maszyny pakującej do gotowej palety
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2 }}>
              {PROCESS_STEPS.map((s) => (
                <Box key={s.num} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>{s.num}</Typography>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{s.title}</Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>{s.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Typy rozwiązań ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Typy systemów
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            Jakie systemy paletyzacji dobieramy
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {SOLUTION_TYPES.map((sol) => (
              <Box key={sol.id}
                sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '280px 1fr' }, gap: { xs: 3, lg: 8 }, p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: '4px' }}>
                {/* Left: title + scope */}
                <Box>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', mb: 1.5, lineHeight: 1.3 }}>
                    {sol.label}
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-45)', lineHeight: 1.6, fontStyle: 'italic' }}>
                    {sol.scope}
                  </Typography>
                </Box>
                {/* Right: desc + products + partners */}
                <Box>
                  <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 3 }}>
                    {sol.desc}
                  </Typography>
                  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
                    <Box>
                      <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 1.5 }}>
                        Typowe produkty
                      </Typography>
                      {sol.products.map((p) => (
                        <Box key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                          <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{p}</Typography>
                        </Box>
                      ))}
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 1.5 }}>
                        Partnerzy / systemy
                      </Typography>
                      {sol.partners.map((p) => (
                        <Box key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                          <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: 'var(--dim-28)', mt: '7px', flexShrink: 0 }} />
                          <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{p}</Typography>
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

      {/* ── Zastosowania ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zastosowania
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 500 }}>
            Branże i grupy produktów
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2.5 }}>
            {SECTORS.map((sec) => (
              <Box key={sec.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 2.5, md: 3 } }}>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  {sec.name}
                </Typography>
                {sec.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Integracja z linią ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Integracja z linią
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Paletyzacja jako element końca linii
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                MadejPak nie dostarcza tylko paletyzatora — integruje kompletne stanowisko końca linii.
                Poniżej elementy, które projektujemy i synchronizujemy wokół paletyzatora.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {INTEGRATION_ITEMS.map((item) => (
                <Box key={item.title}
                  sx={{ p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 1, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Partnerzy ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Partnerzy technologiczni
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 480 }}>
            Producenci systemów paletyzacji
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {PARTNERS.map((partner) => (
              <Box key={partner.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 1.5, flexWrap: 'wrap' }}>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    {partner.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'var(--dim-35)', textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>
                    {partner.origin}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.87rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2 }}>
                  {partner.desc}
                </Typography>
                <Box component="a" href={partner.href} target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', fontWeight: 600, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  Strona producenta
                  <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Rola MadejPak ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Rola MadejPak
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 520 }}>
            Jak pracujemy przy projektach paletyzacji
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr' }, gap: 2.5 }}>
            {MADEJPAK_ROLE.map((r) => (
              <Box key={r.step} sx={{ p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', mb: 1.5 }}>{r.step}</Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 1.25, lineHeight: 1.3 }}>{r.title}</Typography>
                <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>{r.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
                Dobierzemy system do Twojego procesu
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, maxWidth: 540 }}>
                Właściwy system paletyzacji zależy od rodzaju i masy produktu, wymaganej wydajności, zmienności
                formatów i dostępnej przestrzeni. Opisz nam aplikację — przeanalizujemy wymagania i zaproponujemy
                rozwiązanie dopasowane do warunków zakładu.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { bgcolor: '#D45509' } }}>
                Zapytaj o rozwiązanie
                <ArrowRight />
              </Box>
              <Box component={Link} href="/realizacje"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                Zobacz realizacje
                <ArrowRight />
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
            <Link href="/maszyny/partnerzy" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny partnerów</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Paletyzacja</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
