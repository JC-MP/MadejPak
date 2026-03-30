import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Automatyzacja pakowania',
  description: 'MadejPak automatyzuje procesy pakowania — od pojedynczych stanowisk po kompletne linie. Ograniczamy pracę manualną i zwiększamy stabilność procesu.',
  alternates: { canonical: `${SITE_URL}/rozwiazania/automatyzacja-pakowania` },
  openGraph: {
    url:         `${SITE_URL}/rozwiazania/automatyzacja-pakowania`,
    title:       'Automatyzacja pakowania | MadejPak',
    description: 'MadejPak automatyzuje procesy pakowania — od pojedynczych stanowisk po kompletne linie. Ograniczamy pracę manualną i zwiększamy stabilność procesu.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Automatyzacja pakowania – MadejPak' }],
  },
};

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

// Etapy procesu — wyraźne rozróżnienie każdego obszaru automatyzacji
const AREAS = [
  {
    step: '01',
    icon: <Ico d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />,
    title: 'Podawanie i orientowanie',
    desc: 'Automatyczne podajniki wibracyjne, taśmowe i bębnowe — pobierają produkt luzem i podają go w odpowiedniej orientacji do maszyny pakującej. Eliminują ręczne układanie i zasilanie linii.',
  },
  {
    step: '02',
    icon: <Ico d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />,
    title: 'Grupowanie i kompletacja',
    desc: 'Systemy zliczania, grupowania i buforowania produktów przed wejściem do kartoniarski lub ekspedycją. Kluczowe tam, gdzie produkt musi trafić w ściśle określonych ilościach do opakowania zbiorczego.',
  },
  {
    step: '03',
    icon: <Ico d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M12 22.08V12" d2="M3.27 6.96 12 12.01l8.73-5.05" />,
    title: 'Formowanie i pakowanie',
    desc: 'Flowpack, maszyny pionowe (VFFS), wieczarkowanie, zgrzewanie worków i opakowań specjalnych — dobierane do produktu, formatu i wymaganej wydajności.',
  },
  {
    step: '04',
    icon: <Ico d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />,
    title: 'Kartonowanie i opakowania zbiorcze',
    desc: 'Automatyczne układanie opakowań jednostkowych do kartonów, skrzynek i opakowań zbiorczych. Zastępuje pracę ręczną przy kompletacji — powtarzalnie, bez błędów liczenia.',
  },
  {
    step: '05',
    icon: <Ico d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" d2="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />,
    title: 'Kontrola jakości in-line',
    desc: 'Ważenie kontrolne, detekcja metali, wizja maszynowa i kontrola szczelności — wbudowane w przepływ tak, że niezgodne opakowania są odrzucane zanim trafią na paletę.',
  },
  {
    step: '06',
    icon: <Ico d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01" />,
    title: 'Etykietowanie i oznakowanie',
    desc: 'Aplikacja etykiet oraz druk kodów i danych zmiennych — zintegrowane z maszyną pakującą i systemem ERP. Etykietowanie jednostkowe, zbiorcze i paletowe.',
  },
];

const BENEFITS = [
  {
    icon: <Ico d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" d2="M12 6v6l4 2" />,
    title: 'Stabilizacja taktów linii',
    desc: 'Maszyna pakuje z tą samą prędkością i precyzją przez całą zmianę. Eliminuje wahania wynikające ze zmęczenia, przerw i różnic między pracownikami — linia utrzymuje stały rytm produkcji.',
  },
  {
    icon: <Ico d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" d2="M9 12l2 2 4-4" />,
    title: 'Redukcja braków i reklamacji',
    desc: 'Zautomatyzowane dozowanie, ważenie i zamykanie opakowań ograniczają braki pakowania. Mniej niezgodności na kontroli jakości, mniej reklamacji klienta końcowego.',
  },
  {
    icon: <Ico d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" d2="M23 11h-6M9 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0" />,
    title: 'Niezależność od rotacji pracowników',
    desc: 'Absencje, rotacja i problemy z rekrutacją przestają blokować produkcję. Zautomatyzowane stanowisko działa niezależnie od dostępności personelu.',
  },
  {
    icon: <Ico d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />,
    title: 'Praca wielozmianowa bez dodatkowych kosztów',
    desc: 'Automatyczne stanowiska umożliwiają pracę w systemie wielozmianowym z ograniczeniem nieplanowanych przestojów — bez proporcjonalnego wzrostu zatrudnienia.',
  },
];

const CASE_SNIPPETS = [
  {
    branch: 'Przemysł spożywczy',
    title: 'Kartonowanie wafelków i ciastek',
    desc: 'Automatyczna kartoniarki zastąpiły 4 stanowiska ręcznego układania. Stała wydajność i eliminacja błędów liczenia przy kompletacji opakowań zbiorczych.',
  },
  {
    branch: 'Chemia i kosmetyki',
    title: 'Etykietowanie i kontrola wagowa',
    desc: 'Linia 120 opakowań/min z automatycznym etykietowaniem góra/dół i ważeniem kontrolnym in-line. Eliminacja błędów etykietowania i niezgodności wagowych.',
  },
  {
    branch: 'Materiały budowlane',
    title: 'Automatyczne ważenie i zgrzewanie worków',
    desc: 'Automatyczne napełnianie worków HDPE do 25 kg suchą mieszanką. Redukcja pracy fizycznej, powtarzalna dokładność ważenia i oznakowanie zgodne z wymaganiami branżowymi.',
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

export default function AutomatyzacjaPage() {
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
          <Image src="/images/other/automatyzacjapakowania.png" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>Rozwiązania</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>Automatyzacja pakowania</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 5 }}>
              Automatyzujemy procesy pakowania — od pojedynczych stanowisk po kompletne linie. Ograniczamy pracę manualną, zwiększamy stabilność procesu i wydajność produkcji.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box component={Link} href="/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Zapytaj o automatyzację <Arrow /></Box>
              <Box component={Link} href="/realizacje" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>Zobacz realizacje</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 640 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2 }}>Etapy procesu, które automatyzujemy</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.8 }}>Każdy etap można automatyzować niezależnie — od jednego stanowiska po pełną linię. Zakres dobieramy do produktu, wydajności i budżetu inwestycji.</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 3 }}>
            {AREAS.map((a) => (
              <Box key={a.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: 2, p: 3 }}>
                <Typography sx={{ fontSize: '0.68rem', fontWeight: 800, color: ACCENT, letterSpacing: '0.12em', mb: 2 }}>{a.step}</Typography>
                <Box sx={iconBox}>{a.icon}</Box>
                <Typography sx={{ fontWeight: 700, mb: 1 }}>{a.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>{a.desc}</Typography>
              </Box>
            ))}
          </Box>

          {/* Case snippets */}
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 3 }}>
              Przykłady z zakładów
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
              {CASE_SNIPPETS.map((c) => (
                <Box key={c.branch} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: 3 }}>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>
                    {c.branch}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.4, color: 'var(--text)', mb: 1.5 }}>
                    {c.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                    {c.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 600 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Efekty biznesowe
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, letterSpacing: '-0.02em' }}>
              Co naprawdę zmienia automatyzacja
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {BENEFITS.map((b) => (
              <Box key={b.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 4 }}>
                <Box sx={iconBox}>{b.icon}</Box>
                <Typography sx={{ fontWeight: 700, mb: 1.5 }}>{b.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>{b.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 1.5 }}>Chcesz ograniczyć pracę manualną w pakowaniu?</Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>Opisz nam swój proces — dobierzemy zakres automatyzacji dopasowany do produktu i skali produkcji.</Typography>
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
            <span>Automatyzacja pakowania</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
