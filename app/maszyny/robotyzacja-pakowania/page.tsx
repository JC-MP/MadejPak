import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Robotyzacja pakowania — coboty i roboty przemysłowe | MadejPak',
  description:
    'MadejPak integruje roboty przemysłowe i coboty liderów branży w liniach pakujących. Pick-and-place, paletyzacja, handling produktów — elastyczna automatyzacja stanowisk.',
  alternates: { canonical: `${SITE_URL}/maszyny/robotyzacja-pakowania` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/robotyzacja-pakowania`,
    title:       'Robotyzacja pakowania | MadejPak',
    description: 'MadejPak integruje roboty i coboty DOBOT oraz KUKA w liniach pakujących. Pick-and-place, paletyzacja, handling produktów — elastyczna automatyzacja stanowisk.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Robotyzacja pakowania – MadejPak' }],
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

// ─── Data ────────────────────────────────────────────────────────────────────

const ROBOT_TYPES = [
  {
    id: 'dobot',
    label: 'Coboty wiodących producentów',
    scope: 'Elastyczne stanowiska, średnie wydajności, praca przy ludziach',
    desc: 'Coboty (roboty współpracujące) to lekkie, proste w programowaniu ramiona robotyczne, które mogą pracować bezpośrednio przy operatorze bez dodatkowych ogrodzeń. Idealne dla stanowisk wieloasortymentowych, gdzie liczy się szybkie przezbrojenie i elastyczność. Programowanie przez demonstrację — bez specjalistycznej wiedzy z zakresu robotyki.',
    applications: [
      'Pick-and-place produktów i opakowań',
      'Zasilanie i odbiór z maszyn pakujących',
      'Stanowiska kontroli i inspekcji',
      'Montaż i kompletacja zestawów',
      'Paletyzacja lekkich ładunków (do 16 kg)',
    ],
  },
  {
    id: 'kuka',
    label: 'Roboty przemysłowe',
    scope: 'Duże wydajności, ciężkie ładunki, paletyzacja i handling',
    desc: 'Roboty przemysłowe liderów branży realizują wymagające aplikacje paletyzacyjne i handlingowe na liniach produkcyjnych o wysokiej wydajności. Nośność od kilku do ponad 1000 kg, precyzja powtarzalności do ±0,03 mm. Systemy integrują się z przenośnikami, chwytakami podciśnieniowymi i mechanicznymi, systemami wizji maszynowej i systemami nadrzędnymi zakładu.',
    applications: [
      'Paletyzacja ciężkich worków i kartonów',
      'Depaletyzacja i załadunek surowców',
      'Handling produktów na dużych liniach',
      'Praca z chwytakami specjalistycznymi',
      'Integracja z systemami transportu palet',
    ],
  },
];

const PROCESS_STEPS = [
  { num: '01', title: 'Analiza stanowiska', desc: 'Określamy parametry aplikacji: typ produktu, ciężar, wymiary, wydajność, wymagania przestrzenne i warunki pracy.' },
  { num: '02', title: 'Dobór robota', desc: 'Na podstawie wymagań dobieramy odpowiednią platformę — cobot lub robot przemysłowy czołowego producenta — wraz z akcesoriami i narzędziem roboczym.' },
  { num: '03', title: 'Projekt chwytak i oprogramowanie', desc: 'Projektujemy lub dobieramy chwytak do produktu. Programujemy aplikację robotyczną z uwzględnieniem wszystkich wzorów, sekwencji i warunków bezpieczeństwa.' },
  { num: '04', title: 'Integracja z linią', desc: 'Robot zostaje zintegrowany z przenośnikami, maszyną pakującą i systemem nadrzędnym (PLC/SCADA). Konfigurujemy sygnały I/O i protokoły komunikacji.' },
  { num: '05', title: 'FAT i uruchomienie', desc: 'Przeprowadzamy testy odbiorcze w naszym zakładzie (FAT), a następnie montaż i uruchomienie u klienta z pełnym szkoleniem operatorów.' },
  { num: '06', title: 'Wsparcie i serwis', desc: 'MadejPak zapewnia serwis gwarancyjny i pogwarancyjny, zdalną diagnostykę oraz modyfikacje programu pod nowe formaty produktów.' },
];

const SECTORS = [
  'Spożywczy (pakowanie, porcjowanie, kompletacja)',
  'Chemiczny i kosmetyczny',
  'Farmaceutyczny i OTC',
  'FMCG i dobra konsumpcyjne',
  'Przemysłowy i e-commerce',
];

const ADVANTAGES = [
  { title: 'Elastyczność', desc: 'Szybka zmiana programu bez mechanicznego przezbrojenia — jeden robot obsługuje wiele formatów i wzorów.' },
  { title: 'Bezpieczeństwo', desc: 'Coboty mogą pracować bezpośrednio przy ludziach. Roboty przemysłowe liderów branży integrują się z systemami zabezpieczeń stref niebezpiecznych.' },
  { title: 'Powtarzalność', desc: 'Precyzja powtarzalności do ±0,03 mm eliminuje błędy ludzkie i zapewnia stałą jakość operacji.' },
  { title: 'Wydajność 24/7', desc: 'Niezmęczone działanie w systemie trójzmianowym bez przestojów wynikających z czynnika ludzkiego.' },
  { title: 'Szybkie ROI', desc: 'Efektywny zwrot z inwestycji dzięki eliminacji kosztów pracy manualnej i redukcji strat produktowych.' },
  { title: 'Skalowalność', desc: 'Możliwość rozbudowy systemu o dodatkowe roboty i stanowiska wraz z rozwojem linii produkcyjnej.' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function RobotyzacjaPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
                Automatyzacja stanowisk
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
                Robotyzacja pakowania
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                Roboty przemysłowe i coboty automatyzują stanowiska pakujące — szczególnie tam, gdzie liczy się elastyczność, szybkie przezbrojenie i wysoka powtarzalność. MadejPak integruje rozwiązania liderów w robotyzacji jako elementy kompletnych linii pakujących.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {['Pick-and-place', 'Paletyzacja', 'Depaletyzacja', 'Handling'].map((tag) => (
                  <Box key={tag} sx={{ px: 2, py: 0.75, borderRadius: 1, border: `1px solid ${BORDER}`, fontSize: '0.8rem', color: TEXT_DIM }}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
              <Box
                component="img"
                src="/images/other/robotyzacja-cobot.png"
                alt="Robot przemysłowy na stanowisku pakującym"
                sx={{ width: '100%', height: { xs: 240, md: 380 }, objectFit: 'cover', display: 'block' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Typy robotów ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Platformy robotyczne w ofercie MadejPak
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Dobieramy platformę robotyczną do wymagań aplikacji — zarówno pod kątem wydajności, nośności, jak i środowiska pracy i wymagań bezpieczeństwa.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {ROBOT_TYPES.map((r) => (
              <Box key={r.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Box sx={{ display: 'inline-block', px: 2, py: 0.5, bgcolor: `${ACCENT}22`, color: ACCENT, borderRadius: 1, fontSize: '0.75rem', fontWeight: 700, mb: 2 }}>
                  {r.scope}
                </Box>
                <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 700, mb: 2 }}>
                  {r.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.8, mb: 3 }}>
                  {r.desc}
                </Typography>
                <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5 }}>
                  Zastosowania
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {r.applications.map((a) => (
                    <Box component="li" key={a} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '7px' }} />
                      {a}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Zalety robotyzacji ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Dlaczego robotyzacja?
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Automatyzacja stanowisk robotycznych to nie tylko wzrost wydajności — to przede wszystkim powtarzalność procesu, niezależność od dostępności pracowników i elastyczność produkcji.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {ADVANTAGES.map((a) => (
              <Box key={a.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Box sx={{ width: 36, height: 4, bgcolor: ACCENT, borderRadius: 1, mb: 2 }} />
                <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>
                  {a.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>
                  {a.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Proces realizacji ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Jak realizujemy projekty robotyzacji?
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Każdy projekt robotyzacji to indywidualne rozwiązanie — od analizy wymagań po uruchomienie i szkolenie operatorów.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {PROCESS_STEPS.map((s) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT, lineHeight: 1, mb: 1.5 }}>
                  {s.num}
                </Typography>
                <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>
                  {s.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Sektory ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 6 }}>
            Sektory, w których pracujemy
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {SECTORS.map((s) => (
              <Box key={s} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 1.5, px: 2.5, py: 1.25 }}>
                <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>{s}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Partnerzy ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Nasi partnerzy technologiczni
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 5, maxWidth: 600 }}>
            Robotyzację realizujemy we współpracy z wiodącymi producentami robotów przemysłowych i cobotów.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {[
              { name: 'Coboty', desc: 'Lekkie ramiona robotyczne wiodących producentów do elastycznych stanowisk. Programowanie przez demonstrację, łatwa integracja, praca bezpośrednio przy operatorze.', href: '/kontakt' },
              { name: 'Roboty przemysłowe', desc: 'Roboty czołowych producentów światowych do paletyzacji, handlingu i aplikacji wysokowydajnych. Nośność od kilku do ponad 1000 kg.', href: '/kontakt' },
            ].map((p) => (
              <Box key={p.name} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 1.5 }}>
                  {p.name}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7, mb: 2 }}>
                  {p.desc}
                </Typography>
                <Box
                  component="a"
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: ACCENT, fontSize: '0.875rem', fontWeight: 600, textDecoration: 'none', '&:hover': { gap: 1.5 } }}
                >
                  Strona producenta <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Rola MadejPak ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Box sx={{ maxWidth: 760 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 3 }}>
              Rola MadejPak w projekcie robotyzacji
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
              MadejPak nie jest tylko dystrybutorem robotów — jesteśmy integratorem. Nasz zespół ocenia wymagania procesu, dobiera platformę, projektuje lub dobiera chwytak, opracowuje oprogramowanie aplikacyjne i przeprowadza pełną integrację z istniejącą lub nową linią pakującą.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
              Obsługujemy cały cykl projektu: od koncepcji i wyceny, przez dokumentację i FAT, po uruchomienie i szkolenie. Po oddaniu stanowiska zapewniamy serwis i wsparcie techniczne — w tym zdalne wsparcie i modyfikacje pod nowe produkty.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 540 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.75rem' }, fontWeight: 700, mb: 1.5 }}>
                Chcesz zautomatyzować stanowisko pakujące?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                Opisz nam swoje stanowisko — dobierzemy odpowiednią platformę robotyczną i przygotujemy koncepcję rozwiązania.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box
                component={Link}
                href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}
              >
                Zapytaj o projekt <ArrowRight />
              </Box>
              <Box
                component={Link}
                href="/maszyny/partnerzy"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}
              >
                Wróć do maszyn partnerów
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
            <span>Robotyzacja pakowania</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
