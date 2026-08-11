import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Robotyzacja pakowania – roboty i coboty w liniach pakujących',
  description: 'MadejPak wdraża roboty przemysłowe i coboty w liniach pakujących — pick-and-place, paletyzacja robotyczna, robot do paletyzacji worków i kartonów. Integracja z istniejącą linią.',
  keywords: [
    'robotyzacja pakowania', 'robot do pakowania', 'paletyzacja robotyczna',
    'robot do paletyzacji worków', 'pick-and-place robot', 'cobot linia pakująca',
    'robotyzacja końca linii', 'robot przemysłowy pakowanie',
  ],
  alternates: { canonical: `${SITE_URL}/rozwiazania/robotyzacja-pakowania` },
  openGraph: {
    url:         `${SITE_URL}/rozwiazania/robotyzacja-pakowania`,
    title:       'Robotyzacja i paletyzacja | MadejPak',
    description: 'MadejPak wdraża roboty przemysłowe i coboty liderów branży w liniach pakujących — pick-and-place, paletyzacja, handling.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Robotyzacja pakowania – MadejPak' }],
  },
};

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

const APPLICATIONS = [
  { icon: <Ico d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" d2="M12 8v4l3 3" />, title: 'Pick-and-place', desc: 'Pobieranie i odkładanie produktów z przenośnika — do opakowania, kartonu lub na paletę. Może pracować z produktami luźnymi, w tacach lub na przenośniku.' },
  { icon: <Ico d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />, title: 'Paletyzacja', desc: 'Automatyczne układanie opakowań, worków i kartonów na palecie według zaprogramowanego wzoru. Praca ciągła, bez udziału operatora, z możliwością obsługi wielu formatów.' },
  { icon: <Ico d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />, title: 'Depaletyzacja', desc: 'Automatyczne zdejmowanie produktów z palety — surowców, półproduktów lub pustych opakowań — i podawanie do linii bez udziału człowieka.' },
  { icon: <Ico d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" d2="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />, title: 'Pakowanie robotyczne', desc: 'Robot obsługuje cały cykl: pobranie, orientację, umieszczenie w opakowaniu i przekazanie dalej. Jeden robot może obsługiwać kilka formatów — w zależności od produktu, chwytaka i zakresu przezbrojenia.' },
  { icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />, title: 'Chwytaki specjalne', desc: 'Projektujemy i wykonujemy chwytaki dopasowane do konkretnego produktu i procesu: podciśnieniowe, mechaniczne, kombinowane i magnetyczne.' },
  { icon: <Ico d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />, title: 'Integracja z linią', desc: 'Robot synchronizuje się z przenośnikami, maszyną pakującą i sterowaniem nadrzędnym — staje się pełnowartościowym elementem linii, nie osobnym wyspą.' },
];

const ROBOT_TYPES = [
  {
    type: 'Cobot',
    subtitle: 'Robot współpracujący',
    icon: <Ico d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" d2="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />,
    params: ['Nośność: od <1 kg do 25 kg', 'Praca bez stałego ogrodzenia', 'Uczenie przez demonstrację', 'Szybkie przezbrojenie formatu'],
    when: 'Gdy liczy się elastyczność, różnorodność formatów lub stanowisko musi współpracować z operatorem — sprawdza się zarówno przy delikatnych produktach jak i lżejszej paletyzacji do 25 kg.',
    tags: ['Elastyczne stanowiska', 'Pick-and-place', 'Paletyzacja lekkich formatów'],
  },
  {
    type: 'Robot przemysłowy',
    subtitle: 'Robot o wysokiej nośności',
    icon: <Ico d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    params: ['Nośność: 10–1000+ kg', 'Praca w strefie ogrodzonej', 'Wysoka prędkość i powtarzalność', 'Cykle poniżej 1 sekundy'],
    when: 'Gdy kluczowa jest wysoka wydajność, duże obciążenia lub praca ciągła — np. paletyzacja worków 25–50 kg, obsługa ciężkich kartonów, wielozmianowy cykl bez przestojów.',
    tags: ['Paletyzacja', 'Duże wolumeny', 'Praca 24/7'],
  },
];

const STATION_ELEMENTS = [
  {
    title: 'Bezpieczeństwo stanowiska',
    desc: 'Projekt stanowiska robotycznego obejmuje ocenę ryzyka, dobór ogrodzeń lub skanerów bezpieczeństwa, stref zatrzymania i blokad dostępu. Oddajemy stanowisko z deklaracją zgodności CE.',
    icon: <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" d2="M9 12l2 2 4-4" />,
  },
  {
    title: 'Systemy wizyjne',
    desc: 'Kamery 2D i 3D do identyfikacji produktu, określania pozycji i orientacji na przenośniku. Umożliwiają pick-and-place z losowo ułożonych produktów bez dodatkowych prowadnic.',
    icon: <Ico d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" d2="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
  },
  {
    title: 'Dobór i projekt chwytaka',
    desc: 'Własne projektowanie i wykonawstwo chwytaków. Podciśnieniowe, mechaniczne, kombinowane — każdy dobierany indywidualnie do kształtu, masy i wymagań produktu.',
    icon: <Ico d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" />,
  },
  {
    title: 'Przezbrojenie i zmiana formatu',
    desc: 'Projekty z systemem szybkiej wymiany chwytaka i receptur produktowych w sterowniku. Zmiana formatu od kilku minut — bez narzędzi i bez inżyniera na miejscu.',
    icon: <Ico d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />,
  },
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

export default function RobotyzacjaRozwiazaniaPage() {
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
          <Image src="/images/other/robotyzacjapakowania.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>Rozwiązania</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>Robotyzacja pakowania</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 5 }}>
              Roboty przemysłowe i coboty automatyzują stanowiska pakujące — szczególnie tam, gdzie liczy się elastyczność, szybkie przezbrojenie i wysoka powtarzalność. MadejPak integruje rozwiązania liderów w robotyzacji jako elementy kompletnych linii pakujących.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box component={Link} href="/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Zapytaj o robotyzację <Arrow /></Box>
              <Box component={Link} href="/maszyny/robotyzacja-pakowania" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>Maszyny i chwytaki <Arrow /></Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Cobot vs robot przemysłowy */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Dobór platformy
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              Cobot czy robot przemysłowy?
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              Wybór zależy od produktu, wydajności i specyfiki stanowiska. Pomagamy dobrać właściwą platformę — i bierzemy odpowiedzialność za cały projekt.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {ROBOT_TYPES.map((r) => (
              <Box key={r.type} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: 2, p: { xs: 3, md: 4 } }}>
                <Box sx={iconBox}>{r.icon}</Box>
                <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 0.5 }}>{r.type}</Typography>
                <Typography sx={{ fontSize: '0.8rem', color: ACCENT, fontWeight: 600, mb: 2.5 }}>{r.subtitle}</Typography>
                <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', mb: 2.5 }}>
                  {r.params.map((p) => (
                    <Box component="li" key={p} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
                      <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM }}>{p}</Typography>
                    </Box>
                  ))}
                </Box>
                <Box sx={{ p: 2, bgcolor: `color-mix(in srgb, ${ACCENT} 6%, var(--bg))`, borderRadius: 1, mb: 2.5 }}>
                  <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-72)', lineHeight: 1.7, fontStyle: 'italic' }}>
                    {r.when}
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                  {r.tags.map((t) => (
                    <Typography key={t} sx={{ fontSize: '0.7rem', fontWeight: 600, px: 1.25, py: 0.4, bgcolor: 'var(--surface-05)', color: 'var(--dim-55)', borderRadius: '4px' }}>
                      {t}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Zastosowania */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2 }}>Zastosowania</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8 }}>Jeden robot może obsługiwać kilka zastosowań w tej samej linii — lub zostać przeprogramowany pod nowy produkt w zależności od chwytaka i receptury.</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {APPLICATIONS.map((a) => (
              <Box key={a.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Box sx={iconBox}>{a.icon}</Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{a.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>{a.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Elementy stanowiska */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 580 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Projekt stanowiska
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
              Więcej niż sam robot
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              Stanowisko robotyczne to system: bezpieczeństwo, wizja, chwytak i możliwość przezbrojenia. Projektujemy to całościowo.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {STATION_ELEMENTS.map((e) => (
              <Box key={e.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: { xs: 3, md: 3.5 } }}>
                <Box sx={iconBox}>{e.icon}</Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.975rem', mb: 1.25 }}>{e.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>{e.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 1.5 }}>Chcesz zautomatyzować stanowisko pakujące?</Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>Opisz nam swoje stanowisko — dobierzemy odpowiednią platformę i przygotujemy koncepcję rozwiązania.</Typography>
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
            <span>Robotyzacja pakowania</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
