import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Integracja linii pakujących – projektowanie i wdrożenie | MadejPak',
  description: 'MadejPak projektuje i integruje linie pakujące z maszyn różnych producentów w spójny ciąg technologiczny. Synchronizacja, sterowanie, transport wewnętrzny i rozruch — wszystko pod klucz.',
  keywords: [
    'integracja linii pakujących', 'projektowanie linii pakujących',
    'integracja maszyn pakujących', 'linia pakująca pod klucz',
    'synchronizacja linii produkcyjnej', 'transport wewnętrzny linia pakująca',
    'integrator linii pakujących',
  ],
  alternates: { canonical: `${SITE_URL}/rozwiazania/integracja-linii-pakujacych` },
  openGraph: {
    url:         `${SITE_URL}/rozwiazania/integracja-linii-pakujacych`,
    title:       'Integracja linii pakujących | MadejPak',
    description: 'MadejPak projektuje i integruje kompletne linie pakujące — maszyny różnych producentów w spójny, zsynchronizowany ciąg technologiczny.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Integracja linii pakujących – MadejPak' }],
  },
};

const BG = 'var(--bg)', BG_CARD = 'var(--bg-card)', BG_ALT = 'var(--bg-alt)', ACCENT = '#E8610A', BORDER = 'var(--border)', TEXT_DIM = 'var(--dim-72)';

const STEPS = [
  {
    num: '01', title: 'Analiza procesu',
    desc: 'Wizytujemy zakład i analizujemy istniejący lub planowany proces. Identyfikujemy wąskie gardła, wymagania formatowe i interfejsy między etapami.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
        <path d="M16.5 16.5 21 21" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    num: '02', title: 'Projekt koncepcyjny',
    desc: 'Opracowujemy koncepcję linii — układ maszyn, schemat przepływu, punkty kontrolne i architekturę sterowania (PLC / SCADA / HMI). Klient otrzymuje schemat funkcjonalny, szacunkową wydajność i wstępną wycenę.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M7 8h10M7 12h6M7 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="15" r="2.5" fill="currentColor" opacity=".25" />
        <path d="M17 15h2M18 14v2" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    num: '03', title: 'Dobór maszyn',
    desc: 'Dobieramy urządzenia MadejPak i partnerów optymalne dla danego produktu i wolumenu. Koordynujemy dostawy i montaż.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    num: '04', title: 'Integracja i uruchomienie',
    desc: 'Integrujemy mechanicznie, elektrycznie i komunikacyjnie. Synchronizujemy prędkości, przeprowadzamy testy FAT (odbiór w zakładzie producenta) i SAT (odbiór u klienta).',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <path d="M13 2 4.09 12.26a1 1 0 0 0 .74 1.64H11l-1 8 8.91-10.26a1 1 0 0 0-.74-1.64H13l1-8Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    num: '05', title: 'Szkolenie i serwis',
    desc: 'Szkolimy obsługę i UR. Zapewniamy serwis gwarancyjny i pogwarancyjny oraz dostęp do części zamiennych.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 28, height: 28 }}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
];

const SCOPE = [
  {
    title: 'Pakowanie produktu',
    desc: 'Worki, kartony, flow-pack — dopasowujemy format opakowania do produktu i wolumenu linii.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m3.27 6.96 8.73 5.05 8.73-5.05M12 22.08V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    title: 'Ważenie i dozowanie',
    desc: 'Systemy ważenia wielogłowicowego, objętościowego i wagowego zintegrowane bezpośrednio z maszyną pakującą.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M12 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" fill="currentColor" />
        <path d="M6.5 7h11l2 13H4.5L6.5 7Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 7c0-1.66 1.34-3 3-3s3 1.34 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 13h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    title: 'Paletyzacja',
    desc: 'Paletyzatory z robotem i paletyzatory warstwowe — dla worków, kartonów i opakowań zbiorczych.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <rect x="3" y="14" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <rect x="13" y="14" width="8" height="7" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <rect x="7" y="7" width="10" height="6" rx="1" stroke="currentColor" strokeWidth="1.75" />
        <rect x="9" y="3" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.5" />
      </Box>
    ),
  },
  {
    title: 'Owijanie palet',
    desc: 'Automatyczne i półautomatyczne owijarki stretch — ramieniowe i rotacyjne, zintegrowane z przenośnikami.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M21.5 2v6h-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21.34 15.57a10 10 0 1 1-.57-8.38" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    title: 'Transport wewnętrzny',
    desc: 'Przenośniki taśmowe i rolkowe, systemy akumulacji i transferu łączące każdy etap linii w ciągły przepływ.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="9" y="11" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 15h5M15 12v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    title: 'Sterowanie HMI',
    desc: 'Jedna konsola operatora dla całej linii — synchronizacja prędkości, receptury, alarmy i diagnostyka.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M7 8h3M7 11h2M14 8l-2 3h3l-2 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </Box>
    ),
  },
  {
    title: 'Integracja ERP / MES',
    desc: 'Podłączenie linii do systemów informatycznych zakładu — wymiana danych produkcyjnych w czasie rzeczywistym.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.75" />
        <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 7v5M12 12l-5.5 5M12 12l5.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </Box>
    ),
  },
  {
    title: 'Kontrola jakości',
    desc: 'Detekcja metali i kontrola wagowa wbudowane w przepływ — przed lub po opakowaniu.',
    icon: (
      <Box component="svg" viewBox="0 0 24 24" fill="none" aria-hidden sx={{ width: 26, height: 26 }}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
        <path d="M12 9v1M12 14v1M9 12H8M16 12h-1" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      </Box>
    ),
  },
];

const EXAMPLE_LINES = [
  {
    label: 'Produkty sypkie',
    title: 'Waga wielogłowicowa → VFFS → paletyzator → owijarka',
    desc: 'Sól, kasza, granulatym nawozy. Jeden ciąg od dozowania po gotową paletę z folią stretch — sterowany z jednego HMI.',
    tags: ['Przemysł spożywczy', 'FMCG', 'Materiały budowlane'],
  },
  {
    label: 'Produkty kruche',
    title: 'Podajnik z separacją → flowpack → grupowanie → kartonowanie',
    desc: 'Wafle, ciastka, pieczywo. Delikatny handling, stała prędkość linii i kontrola wagowa przed zakartonowaniem.',
    tags: ['Przemysł spożywczy', 'Opakowania jednostkowe'],
  },
  {
    label: 'Chemia techniczna',
    title: 'Dozownik → zgrzewarka worków → waga kontrolna → etykieciarka',
    desc: 'Nawozy, środki czyszczące, substancje pylące. Linia odporna na trudne środowisko, z detekcją metali i pełnym śledzeniem partii.',
    tags: ['Chemia', 'Przemysł rolno-spożywczy'],
  },
];

const VALUE_PILLARS = [
  {
    title: 'Jeden integrator, jedna odpowiedzialność',
    desc: 'Nie przepychasz problemu między dostawcami. MadejPak odpowiada za działanie całej linii — niezależnie od tego, czyja maszyna stoi na początku, a czyja na końcu.',
  },
  {
    title: 'Mniej przestojów, szybsza reakcja',
    desc: 'Kiedy za całą linię odpowiada jeden dostawca, awaria dowolnego elementu ma jeden punkt kontaktu, który ją usuwa — bez przerzucania odpowiedzialności.',
  },
  {
    title: 'Wydajność całego ciągu, nie jednej maszyny',
    desc: 'Wąskie gardło ujawnione w fazie projektu nie generuje strat w produkcji. Synchronizujemy prędkości i bufory tak, żeby żaden etap nie czekał na poprzedni.',
  },
  {
    title: 'Łatwiejszy serwis po wdrożeniu',
    desc: 'Jedna umowa serwisowa dla całej linii. Jeden telefon, kiedy coś się dzieje — bez rozdzielania problemów na osobne kontrakty z każdym producentem.',
  },
];

function Arrow() {
  return <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden sx={{ width: 13, height: 13, flexShrink: 0 }}><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></Box>;
}

export default function IntegracjaPage() {
  return (
    <Box component="main" sx={{ bgcolor: BG, color: 'var(--text)' }}>
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
          <Image src="/images/other/integracjaliniipakowania.jpg" alt="" fill sizes="(max-width: 768px) 0vw, 50vw"
          style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }} />
        </Box>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, py: { xs: 6, md: 10 } }}>
          <Box>
            <Typography variant="overline" sx={{ color: ACCENT, fontWeight: 700, letterSpacing: 2, mb: 1, display: 'block' }}>Rozwiązania</Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2rem', md: '2.75rem' }, fontWeight: 800, lineHeight: 1.15, mb: 3 }}>Integracja linii pakujących</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, fontSize: '1.05rem', lineHeight: 1.8, mb: 5 }}>
              Łączymy maszyny różnych producentów w jeden spójny ciąg technologiczny. Projektujemy przepływ materiału, dobieramy interfejsy komunikacyjne i synchronizujemy każdy etap — od podawania produktu po ekspedycję gotowej palety.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Box component={Link} href="/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Zapytaj o wdrożenie <Arrow /></Box>
              <Box component={Link} href="/realizacje" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 3.5, py: 1.5, borderRadius: 1.5, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>Zobacz realizacje</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Zakres */}
      <Box sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 680 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2 }}>Co wchodzi w skład integracji</Typography>
            <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.85 }}>
              Integracja linii to znacznie więcej niż zestawienie maszyn obok siebie — każde urządzenie komunikuje się z pozostałymi, a całość sterowana jest z jednego miejsca.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)', md: 'repeat(4, 1fr)' }, gap: 2 }}>
            {SCOPE.map((item) => (
              <Box key={item.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ width: 44, height: 44, borderRadius: 1.5, bgcolor: `${ACCENT}15`, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', lineHeight: 1.35 }}>{item.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.65, fontSize: '0.8rem' }}>{item.desc}</Typography>
              </Box>
            ))}
          </Box>

          {/* Przykładowe linie */}
          <Box sx={{ mt: { xs: 6, md: 8 } }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 3 }}>
              Przykładowe linie
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
              {EXAMPLE_LINES.map((ex) => (
                <Box key={ex.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5, p: 3 }}>
                  <Typography sx={{ fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 1 }}>
                    {ex.label}
                  </Typography>
                  <Typography sx={{ fontWeight: 700, fontSize: '0.88rem', lineHeight: 1.4, color: 'var(--text)', mb: 1.5 }}>
                    {ex.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2 }}>
                    {ex.desc}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {ex.tags.map((t) => (
                      <Typography key={t} sx={{ fontSize: '0.68rem', fontWeight: 600, px: 1.25, py: 0.4, bgcolor: 'var(--surface-05)', color: 'var(--dim-55)', borderRadius: '4px' }}>
                        {t}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Wartość biznesowa */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Box sx={{ mb: 6, maxWidth: 600 }}>
            <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Dlaczego integracja
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 2, letterSpacing: '-0.02em' }}>
              Co zyskujesz, mając jednego integratora
            </Typography>
            <Typography sx={{ color: TEXT_DIM, lineHeight: 1.8, fontSize: '0.95rem' }}>
              Kupowanie maszyn od różnych dostawców i próba samodzielnej integracji to jeden z najczęstszych powodów przestojów i nieoczekiwanych kosztów w zakładach produkcyjnych.
            </Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5 }}>
            {VALUE_PILLARS.map((p) => (
              <Box key={p.title} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.975rem', color: 'var(--text)', mb: 1.25 }}>{p.title}</Typography>
                <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>{p.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Kroki */}
      <Box sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.5rem', md: '1.875rem' }, fontWeight: 700, mb: 6 }}>Proces wdrożenia</Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 3 }}>
            {STEPS.map((s) => (
              <Box key={s.num} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Box sx={{ width: 48, height: 48, borderRadius: 1.5, bgcolor: `${ACCENT}18`, color: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    {s.icon}
                  </Box>
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 800, color: ACCENT, letterSpacing: 2, lineHeight: 1 }}>{s.num}</Typography>
                </Box>
                <Typography sx={{ fontWeight: 700, fontSize: '0.975rem' }}>{s.title}</Typography>
                <Typography variant="body2" sx={{ color: TEXT_DIM, lineHeight: 1.7 }}>{s.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box sx={{ bgcolor: BG }}>
        <Container maxWidth="lg" sx={{ py: { xs: 7, md: 10 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 3, p: { xs: 4, md: 6 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' }, justifyContent: 'space-between', gap: 4 }}>
            <Box sx={{ maxWidth: 500 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.6rem' }, fontWeight: 700, mb: 1.5 }}>Masz projekt do omówienia?</Typography>
              <Typography variant="body1" sx={{ color: TEXT_DIM, lineHeight: 1.75 }}>Opisz nam swój proces i produkt — przygotujemy wstępną koncepcję integracji i wycenę.</Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/kontakt" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, bgcolor: ACCENT, color: '#fff', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { bgcolor: '#c9520a' } }}>Zapytanie ofertowe <Arrow /></Box>
              <Box component={Link} href="/rozwiazania" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, border: `1px solid ${BORDER}`, color: 'var(--text)', px: 4, py: 1.75, borderRadius: 1.5, fontWeight: 600, fontSize: '0.95rem', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>Wszystkie rozwiązania</Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Breadcrumb */}
      <Box sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid var(--border)` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{ color: 'var(--dim-72)', display: 'flex', gap: 1, alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem' }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/rozwiazania" style={{ color: 'inherit', textDecoration: 'none' }}>Rozwiązania</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>Integracja linii pakujących</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
