import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Integracja i automatyzacja linii pakujących – rozwiązania | MadejPak',
  description:
    'MadejPak integruje linie pakujące, automatyzuje i robotyzuje pakowanie oraz realizuje projekty custom dla zakładów produkcyjnych. Od analizy procesu po serwis i modernizację.',
  keywords: [
    'integracja linii pakujących', 'automatyzacja pakowania', 'robotyzacja pakowania',
    'modernizacja linii pakujących', 'projekty custom maszyny pakujące',
    'linia pakująca dla przemysłu', 'integrator linii produkcyjnych',
  ],
  alternates: {
    canonical: `${SITE_URL}/rozwiazania`,
    languages: {
      'pl':        `${SITE_URL}/rozwiazania`,
      'en':        `${SITE_URL}/en/rozwiazania`,
      'x-default': `${SITE_URL}/rozwiazania`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/rozwiazania`,
    title:       'Integracja i automatyzacja linii pakujących | MadejPak',
    description: 'MadejPak integruje linie pakujące, automatyzuje i robotyzuje pakowanie oraz realizuje projekty custom dla zakładów produkcyjnych.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Rozwiązania MadejPak – integracja linii pakujących' }],
  },
};

const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

const SOLUTIONS = [
  {
    num: '01',
    title: 'Integracja linii pakujących',
    body: 'Masz maszyny pakujące, wagi i przenośniki różnych dostawców, które nie współpracują? Projektujemy przepływ materiału, dobieramy interfejsy komunikacyjne i synchronizujemy każdy etap — tak żeby cała linia działała jako jeden organizm bez wąskich gardeł.',
    tags: ['Linie wielomaszynowe', 'SCADA / HMI', 'Synchronizacja procesów', 'Rozruch i uruchomienie'],
    href: '/rozwiazania/integracja-linii-pakujacych',
  },
  {
    num: '02',
    title: 'Automatyzacja pakowania',
    body: 'Masz ręczne stanowiska pakowania, które nie nadążają z wydajnością lub generują duże koszty pracownicze? Wdrażamy flowpack, maszyny pionowe, systemy wtaktowywania i ważenia — pod konkretny produkt i tempo produkcji.',
    tags: ['Automatyczne podajniki', 'Ważenie i dozowanie', 'Etykietowanie', 'Kontrola jakości'],
    href: '/rozwiazania/automatyzacja-pakowania',
  },
  {
    num: '03',
    title: 'Robotyzacja pakowania',
    body: 'Koniec linii wąskim gardłem? Wdrażamy roboty i coboty do paletyzacji, pick-and-place i handlingu. Budujemy stanowiska pracujące 3 zmiany — od pojedynczego robota po zintegrowaną komórkę z systemem wizyjnym.',
    tags: ['Roboty i coboty', 'Paletyzacja', 'pick-and-place', 'Systemy wizyjne'],
    href: '/rozwiazania/robotyzacja-pakowania',
  },
  {
    num: '04',
    title: 'Projekty custom',
    body: 'Pył, substancje agresywne, delikatny produkt, ograniczona przestrzeń lub format bez maszyny z półki? Projektujemy i budujemy niestandardowe rozwiązania od koncepcji i prototypu po wdrożenie produkcyjne.',
    tags: ['Niestandardowe formaty', 'Trudne środowiska', 'Prototypowanie', 'Wdrożenie produkcyjne'],
    href: '/rozwiazania/projekty-custom',
  },
];

const PATHS = [
  { question: 'Chcesz połączyć istniejące maszyny w jeden ciąg produkcyjny?', solution: 'Integracja linii pakujących', href: '/rozwiazania/integracja-linii-pakujacych' },
  { question: 'Masz ręczne pakowanie do zastąpienia lub wsparcia automatyką?', solution: 'Automatyzacja pakowania', href: '/rozwiazania/automatyzacja-pakowania' },
  { question: 'Koniec linii wymaga robotyzacji lub masz paletyzację do zrobienia?', solution: 'Robotyzacja pakowania', href: '/rozwiazania/robotyzacja-pakowania' },
  { question: 'Produkt niestandardowy lub warunki wymagają rozwiązania szytego na miarę?', solution: 'Projekt custom', href: '/rozwiazania/projekty-custom' },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
      {children}
    </Typography>
  );
}

export default function RozwiazaniaPage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />

      {/* Hero */}
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
          <Image src="/images/other/rozwiazania-ogolnezdjecie.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 12 } }}>
          <SectionLabel>Rozwiązania</SectionLabel>
          <Typography component="h1"
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.1, mb: 3, maxWidth: 700 }}>
            Kompletne systemy pakowania — od koncepcji po uruchomienie
          </Typography>
          <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, color: TEXT_DIM, lineHeight: 1.8, maxWidth: 620, mb: 4 }}>
            MadejPak projektuje, dostarcza i integruje systemy pakowania dla producentów z różnych branż.
            Łączymy własne maszyny, technologie partnerów i oprogramowanie we wspólny, działający ciąg technologiczny.
          </Typography>
          <Button component={Link} href="/kontakt" variant="contained" disableElevation
            sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px', fontSize: '0.95rem', '&:hover': { bgcolor: '#d4560a' } }}>
            Zapytaj o projekt
          </Button>
        </Container>
      </Box>


      {/* Decision helper — dobierz ścieżkę */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 7, md: 9 } }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
            Dobierz rozwiązanie
          </Typography>
          <Typography component="h2"
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5 }}>
            Które rozwiązanie pasuje do Twojej sytuacji?
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.7, mb: 5, maxWidth: 560 }}>
            Wybierz opis najbliższy Twojej potrzebie — lub skontaktuj się, jeśli sytuacja jest bardziej złożona.
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
            {PATHS.map((p, i) => (
              <Box
                key={p.href}
                component={Link}
                href={p.href}
                sx={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  gap: { xs: 2, md: 4 },
                  px: { xs: 3, md: 4 }, py: { xs: 2.5, md: 3 },
                  borderBottom: i < PATHS.length - 1 ? `1px solid ${BORDER}` : 'none',
                  bgcolor: BG_CARD, textDecoration: 'none',
                  transition: 'background-color 0.15s ease',
                  '&:hover': { bgcolor: `color-mix(in srgb, ${ACCENT} 5%, var(--bg-card))` },
                  '&:hover .path-arrow': { transform: 'translateX(4px)' },
                }}
              >
                <Typography sx={{ fontSize: { xs: '0.88rem', md: '0.95rem' }, color: 'var(--dim-72)', lineHeight: 1.55 }}>
                  {p.question}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, flexShrink: 0 }}>
                  <Typography sx={{ fontSize: { xs: '0.82rem', md: '0.88rem' }, fontWeight: 700, color: ACCENT, whiteSpace: 'nowrap' }}>
                    {p.solution}
                  </Typography>
                  <Box
                    className="path-arrow"
                    component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
                    sx={{ width: 14, height: 14, flexShrink: 0, color: ACCENT, transition: 'transform 0.15s ease' }}
                  >
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ mt: 3, display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Typography sx={{ fontSize: '0.88rem', color: 'var(--dim-50)' }}>
              Nadal nie wiesz, które pasuje? Bezpłatna analiza procesu.
            </Typography>
            <Button component={Link} href="/kontakt" variant="outlined" size="small" disableElevation
              sx={{ borderColor: 'var(--dim-20)', color: 'var(--dim-85)', fontWeight: 600, textTransform: 'none', px: 2.5, py: 1, borderRadius: '6px', fontSize: '0.85rem', whiteSpace: 'nowrap', '&:hover': { borderColor: ACCENT, color: ACCENT, bgcolor: 'transparent' } }}>
              Skontaktuj się
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Solutions grid */}
      <Box sx={{ py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 3, md: 4 } }}>
            {SOLUTIONS.map((s) => (
              <Box key={s.num} component={Link} href={s.href}
                sx={{
                  display: 'flex', flexDirection: 'column',
                  bgcolor: BG_CARD, border: `1px solid ${BORDER}`,
                  borderTop: `3px solid ${ACCENT}`, borderRadius: '4px',
                  p: { xs: 3, md: 4 }, textDecoration: 'none',
                  transition: 'box-shadow 0.2s ease, border-color 0.2s ease',
                  '&:hover': { boxShadow: '0 8px 32px rgba(0,0,0,0.12)' },
                }}>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', mb: 2 }}>
                  {s.num}
                </Typography>
                <Typography component="h2" sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' }, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3, mb: 2 }}>
                  {s.title}
                </Typography>
                <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75, mb: 3, flex: 1 }}>
                  {s.body}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {s.tags.map((tag) => (
                    <Typography key={tag} sx={{ fontSize: '0.72rem', fontWeight: 600, px: 1.25, py: 0.5, bgcolor: 'var(--surface-05)', color: 'var(--dim-65)', borderRadius: '4px' }}>
                      {tag}
                    </Typography>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
