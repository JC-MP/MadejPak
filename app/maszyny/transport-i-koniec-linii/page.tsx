import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Transport i koniec linii — przenośniki i integracja | MadejPak',
  description:
    'MadejPak projektuje i integruje systemy transportu wewnętrznego, przenośników i końca linii pakujących. Od wyjścia maszyny pakującej po owiniętą paletę gotową do ekspedycji.',
  alternates: { canonical: `${SITE_URL}/maszyny/transport-i-koniec-linii` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/transport-i-koniec-linii`,
    title:       'Transport i koniec linii | MadejPak',
    description: 'MadejPak projektuje i integruje systemy transportu wewnętrznego, przenośników i końca linii pakujących. Od wyjścia maszyny pakującej po owiniętą paletę gotową do ekspedycji.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Transport i koniec linii – MadejPak' }],
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

const CONVEYOR_TYPES = [
  {
    id: 'tasmowe',
    label: 'Przenośniki taśmowe',
    desc: 'Podstawowy element każdej linii pakującej. Przenoszą opakowania jednostkowe, zgrzewki i kartony w poziomie lub z niewielkim kątem nachylenia. Dostępne w wersjach standardowych i higienicznych (sektor spożywczy i farmaceutyczny).',
    usecases: ['Transfer między maszynami', 'Bufory i sekcje akumulacji', 'Podawanie do kontroli i etykietowania', 'Odbiór produktów z maszyn VFFS i flow pack'],
  },
  {
    id: 'rolkowe',
    label: 'Przenośniki rolkowe',
    desc: 'Przeznaczone do transportu cięższych opakowań zbiorczych, kartonów i zapaletyzowanych jednostek. Możliwość wykonania z napędem lub grawitacyjnie. Idealne na końcu linii, przy paletyzatorach i w strefach kompletacji.',
    usecases: ['Transport kartonów i skrzynek', 'Odbiór z paletyzatora', 'Strefy kompletacji i konfekcjonowania', 'Systemy sortowania i zwrotnic'],
  },
  {
    id: 'pionowe',
    label: 'Windy i przenośniki pionowe',
    desc: 'Umożliwiają zmianę poziomu transportu między piętrami lub poziomami linii. Rozwiązują problemy przestrzenne w istniejących halach produkcyjnych bez przebudowy całego układu.',
    usecases: ['Zmiana poziomu między maszynami', 'Dostosowanie do istniejących hal', 'Integracja z antresolami i podestami', 'Przemysłowe i spożywcze linie produkcyjne'],
  },
  {
    id: 'specjalne',
    label: 'Systemy specjalne i zbieżność linii',
    desc: 'Zwrotnice, zbieżniki, odrzutniki i systemy grupowania opakowań — pozwalają scalić kilka linii pakujących w jeden strumień lub rozdzielić produkty na różne drogi transportu.',
    usecases: ['Scalanie kilku linii w jeden transport', 'Rozdzielanie produktów wg kryteriów', 'Grupowanie przed klejeniem i paletyzacją', 'Systemy odrzutu niezgodnych produktów'],
  },
];

const FLOW_STEPS = [
  { num: '01', title: 'Wyjście z maszyny pakującej', desc: 'Produkt opuszcza maszynę pakującą (VFFS, flow pack, workowanie) i trafia na pierwszy odcinek przenośnika odbiorczego.' },
  { num: '02', title: 'Kontrola i etykietowanie', desc: 'Opcjonalnie: ważenie kontrolne, detekcja metali, kamera inspekcyjna, etykieciarka lub drukarka kodu kreskowego.' },
  { num: '03', title: 'Grupowanie i akumulacja', desc: 'Produkty są grupowane, orientowane i akumulowane przed kolejnym etapem — pakowaniem zbiorczym, przekładką do kartonu lub bezpośrednią paletyzacją.' },
  { num: '04', title: 'Pakowanie zbiorcze (opcja)', desc: 'Kartonowanie, foliowanie termokurczliwe lub traysealery tworzą opakowania zbiorcze z jednostkowych produktów.' },
  { num: '05', title: 'Transport do paletyzatora', desc: 'Opakowania zbiorcze lub jednostki transportowane są do paletyzatora — robotycznego lub warstwowego.' },
  { num: '06', title: 'Owijanie i ekspedycja', desc: 'Gotowa paleta trafia do owijarki folią stretch, a następnie do magazynu lub strefy załadunku.' },
];

const INTEGRATION_POINTS = [
  { label: 'Maszyny pakujące', desc: 'VFFS, flow pack, workowanie, kartoniarka — każdy typ maszyny wymaga odpowiednio skonfigurowanego odbiornika produktu.' },
  { label: 'Ważenie kontrolne', desc: 'Wagi przenośnikowe in-line weryfikują wagę każdego opakowania i automatycznie odrzucają niezgodne produkty.' },
  { label: 'Systemy etykietowania', desc: 'Etykieciarki i drukarki integrują się z przenośnikiem i mogą być zasilane danymi z systemu ERP lub WMS.' },
  { label: 'Paletyzatory', desc: 'Przenośnik doprowadzający musi być zsynchronizowany z rytmem pracy paletyzatora i buforować różnice prędkości.' },
  { label: 'Owijarki palet', desc: 'Paleta po paletyzacji trafia bezpośrednio na przenośnik palet do owijarki — bez udziału wózka widłowego.' },
  { label: 'Systemy nadrzędne', desc: 'Cały transport może być sterowany i monitorowany przez PLC, SCADA lub system zarządzania produkcją (MES/ERP).' },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export default function TransportPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>

      {/* ── Hero ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 8, alignItems: 'center' }}>
            <Box>
              <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>
                Integracja przepływu
              </Typography>
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>
                Transport i koniec linii
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.1rem', lineHeight: 1.8, mb: 4 }}>
                Sprawny transport wewnętrzny i ciągłość przepływu między maszynami to fundament wydajnej linii pakującej. MadejPak projektuje i integruje systemy przenośników, transferu i obsługi opakowań — łącząc urządzenia różnych partnerów w jeden spójny przepływ.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {['Przenośniki', 'Buforowanie', 'Zbieżność linii', 'Integracja'].map((tag) => (
                  <Box key={tag} sx={{ px: 2, py: 0.75, borderRadius: 1, border: `1px solid ${BORDER}`, fontSize: '0.8rem', color: TEXT_DIM }}>
                    {tag}
                  </Box>
                ))}
              </Box>
            </Box>
            <Box sx={{ borderRadius: 2, overflow: 'hidden', border: `1px solid ${BORDER}` }}>
              <Box
                component="img"
                src="/images/machines/wrapping.jpg"
                alt="Systemy transportu i koniec linii pakującej"
                sx={{ width: '100%', height: { xs: 240, md: 380 }, objectFit: 'cover', display: 'block' }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Typy przenośników ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Systemy transportu w linii
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Dobieramy typ przenośnika do charakterystyki produktu, prędkości linii i warunków środowiskowych — od lekkich woreczków po ciężkie kartony i zapaletyzowane jednostki.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
            {CONVEYOR_TYPES.map((c) => (
              <Box key={c.id} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Typography variant="h3" sx={{ fontSize: '1.2rem', fontWeight: 700, mb: 2 }}>
                  {c.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                  {c.desc}
                </Typography>
                <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 1.5, display: 'block', mb: 1.5 }}>
                  Zastosowania
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.75 }}>
                  {c.usecases.map((u) => (
                    <Box component="li" key={u} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, color: TEXT_DIM, fontSize: '0.875rem' }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: ACCENT, flexShrink: 0, mt: '7px' }} />
                      {u}
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Przepływ produktu ── */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Kompletny przepływ produktu w linii
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            Transport wewnętrzny spaja wszystkie etapy linii pakującej — od pakowania jednostkowego po załadunek gotowej palety. MadejPak projektuje i integruje cały ten przepływ.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {FLOW_STEPS.map((s) => (
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

      {/* ── Punkty integracji ── */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, mb: 2 }}>
            Punkty integracji z urządzeniami linii
          </Typography>
          <Typography variant="body1" sx={{ color: TEXT_DIM, mb: 6, maxWidth: 720 }}>
            System transportu musi być zsynchronizowany z rytmem pracy wszystkich maszyn. Projektujemy integrację z każdym elementem linii — niezależnie od producenta.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {INTEGRATION_POINTS.map((p) => (
              <Box key={p.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Box sx={{ width: 36, height: 4, bgcolor: ACCENT, borderRadius: 1, mb: 2 }} />
                <Typography variant="h4" sx={{ fontSize: '1rem', fontWeight: 700, mb: 1 }}>
                  {p.label}
                </Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>
                  {p.desc}
                </Typography>
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
              MadejPak jako integrator systemu transportu
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85, mb: 3 }}>
              Systemy transportu wewnętrznego to obszar, w którym MadejPak realizuje własne projekty inżynierskie — dobierając i konfigurując urządzenia różnych producentów w spójny system. Projekt obejmuje analizę przepływu produktu, dobór komponentów, przygotowanie dokumentacji i integrację z urządzeniami linii.
            </Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
              Współpracujemy z dostawcami przenośników i systemów obsługi opakowań dostosowanych do wymagań konkretnej aplikacji — czy to w branży spożywczej, chemicznej czy farmaceutycznej. Zapewniamy obsługę serwisową i wsparcie techniczne po uruchomieniu linii.
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
                Potrzebujesz projektu transportu lub integracji końca linii?
              </Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>
                Opisz nam układ swojej hali i maszyny — przygotujemy koncepcję systemu transportu skrojonego pod Twoje potrzeby.
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
            <span>Transport i koniec linii</span>
          </Typography>
        </Container>
      </Box>

    </Box>
  );
}
