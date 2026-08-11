import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE, COMPANY } from '@/lib/seo.config';
import LeadForm from '../LeadForm';

export const metadata: Metadata = {
  title: 'GSP 65 EVO – Maszyna Flow Pack MAP Box Motion',
  description:
    'GSP 65 EVO – przemysłowa maszyna flow pack do pakowania MAP. Box motion, płukanie gazem N₂/CO₂, folia PE i poliolefinowa. Wersja BB. Szczelne opakowanie dla produktów długoterminowych.',
  keywords: [
    'GSP 65 EVO', 'maszyna MAP flow pack', 'pakowanie atmosfera modyfikowana',
    'box motion maszyna pakująca', 'flow pack duże produkty', 'maszyna pakująca folia PE',
    'pakowanie gazem maszyna', 'GSP 65EVO',
  ],
  alternates: {
    canonical: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-65-evo`,
    title:       'GSP 65 EVO – Maszyna Flow Pack MAP Box Motion | MadejPak',
    description: 'Przemysłowa maszyna flow pack do pakowania MAP. Box motion, płukanie gazem, folia PE i poliolefinowa. Wersja BB dostępna.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 65 EVO – maszyna flow pack MAP – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 65 EVO',
  description: 'Przemysłowa maszyna flow pack do pakowania w atmosferze modyfikowanej (MAP). Box motion, płukanie gazem N₂/CO₂, folia PE i poliolefinowa.',
  brand: { '@type': 'Brand', name: 'GSP – Grupa Tecnopack' },
  manufacturer: { '@type': 'Organization', name: 'GSP – Grupa Tecnopack' },
};

// ─── Design tokens ───────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.625rem' }, fontWeight: 800,
        letterSpacing: '-0.03em', color: ACCENT, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.7rem', color: TEXT_DIM, letterSpacing: '0.04em', lineHeight: 1.4 }}>
        {label}
      </Typography>
    </Box>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const DLA_KOGO = [
  {
    title: 'Producenci dużych i wysokich produktów',
    desc: 'GSP 65 EVO została zaprojektowana z myślą o produktach, które wymagają większej przestrzeni pakowania i stabilnego prowadzenia przez maszynę. To rozwiązanie dla zakładów pakujących produkty gabarytowe, wysokie lub trudniejsze w prowadzeniu.',
  },
  {
    title: 'Firmy pracujące w atmosferze modyfikowanej',
    desc: 'Maszyna umożliwia pakowanie z płukaniem gazem (N₂/CO₂), co pozwala wydłużyć trwałość produktu. To szczególnie ważne przy produktach wymagających kontrolowanych warunków pakowania.',
  },
  {
    title: 'Producenci korzystający z folii PE i poliolefinowych',
    desc: 'GSP 65 EVO została opracowana do pracy z wymagającymi materiałami opakowaniowymi. Długi czas zgrzewu oraz wysoka siła docisku pomagają uzyskać szczelne i trwałe opakowanie nawet na trudnych foliach.',
  },
  {
    title: 'Zakłady z produkcją ciągłą',
    desc: 'Maszyna dobrze sprawdza się jako element linii produkcyjnej. Może być wyposażona w podajnik taśmowy oraz funkcję zmiennej długości opakowania, co ułatwia dopasowanie do różnych produktów i rytmów produkcji.',
  },
  {
    title: 'Firmy potrzebujące szybkiego przezbrojenia',
    desc: 'Elektronicznie sterowany zespół zgrzewający pozwala skrócić czas zmiany formatu. To ważne przy produkcji wielu wariantów produktu lub częstych zmianach asortymentu.',
  },
];

const ZALETY = [
  {
    title: 'Bardzo szczelne opakowanie',
    desc: 'System zgrzewania box motion zapewnia stabilny, mocny i powtarzalny zgrzew. Długi czas zgrzewu i wysoki docisk folii wspierają szczelność — szczególnie przy trudniejszych materiałach.',
  },
  {
    title: 'Wysoka prędkość pracy',
    desc: 'Maszyna to przemysłowe rozwiązanie do pakowania produktów wymagających większej wydajności. Elektroniczne sterowanie zespołem zgrzewającym pozwala utrzymać stabilną pracę przy dużych obciążeniach produkcyjnych.',
  },
  {
    title: 'Elastyczność formatów',
    desc: 'GSP 65 EVO wykonuje opakowania z zakładkami bocznymi oraz opakowania o kształcie kwadratowym. Na żądanie dostępna jest opcja zgrzewu bead seal.',
  },
  {
    title: 'Praca z wymagającymi foliami',
    desc: 'Maszyna dobrze radzi sobie z foliami polietylenowymi, poliolefinowymi oraz materiałami technicznymi, które wymagają mocniejszego i dłuższego zgrzewania.',
  },
  {
    title: 'Wersja BB — folia od dołu',
    desc: 'Wersja Bottom Brake umożliwia podawanie rolki folii od dołu maszyny. Zgrzew podłużny ukryty jest pod opakowaniem — efekt: czysty, estetyczny wygląd produktu na półce.',
  },
  {
    title: 'Łatwa integracja z linią',
    desc: 'Obie wersje mogą być wyposażone w podajnik taśmowy oraz funkcję zmiennej długości worka. GSP 65 EVO dopasowuje się do konkretnego produktu, tempa pracy i układu produkcji.',
  },
];

const ZASTOSOWANIA = [
  'Produkty o długim terminie przydatności',
  'Duże i wysokie produkty',
  'Produkty podawane w linii (in-chain)',
  'Pakowanie w atmosferze modyfikowanej (MAP)',
  'Produkty wymagające szczelnego opakowania',
  'Produkty techniczne',
  'Folie PE i poliolefinowe',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Gsp65EvoPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Box aria-hidden="true" sx={{
          display: { xs: 'none', md: 'block' },
          position: 'absolute', top: 0, right: 0,
          width: '50%', height: '100%', zIndex: 0, pointerEvents: 'none',
        }}>
          <Box sx={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: [
              'linear-gradient(to right, var(--bg) 0%, color-mix(in srgb, var(--bg) 75%, transparent) 18%, color-mix(in srgb, var(--bg) 25%, transparent) 45%, transparent 100%)',
              'linear-gradient(to bottom, color-mix(in srgb, var(--bg) 55%, transparent) 0%, transparent 20%, transparent 80%, color-mix(in srgb, var(--bg) 55%, transparent) 100%)',
            ].join(', '),
          }} />
          <Image src="/images/machines/flowpack-gsp-65evo-page.jpg" alt="" fill
            sizes="50vw" style={{ objectFit: 'cover', opacity: 0.5 }} priority />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5, flexWrap: 'wrap' }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT }}>
                GSP – Grupa Tecnopack
              </Typography>
              <Box sx={{ px: 1.5, py: 0.4, bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`,
                borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT }}>
                Atmosfera modyfikowana
              </Box>
            </Box>
            <Typography component="h1" sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2,
            }}>
              GSP 65 EVO
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              Dla produktów, które muszą dłużej zachować jakość.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Przemysłowa maszyna flow pack do pakowania w atmosferze modyfikowanej — z płukaniem gazem
              lub aplikacją aromatów konserwujących. Zaprojektowana do dużych, wysokich i podawanych
              w linii produktów, z box motion i folią PE lub poliolefinową.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="MAP" label="atm. modyfikowana" />
              <StatChip value="Box motion" label="zgrzew poprzeczny" />
              <StatChip value="N₂/CO₂" label="gazy do płukania" />
              <StatChip value="BB" label="wersja od dołu" />
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
              <Button component={Link} href="#zapytaj" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                  textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                Zapytaj o maszynę
              </Button>
              <Button component={Link} href="/maszyny/poziome-maszyny-pakujace" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)',
                  fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5,
                  borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                Wszystkie maszyny flow pack
              </Button>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* ── DLA KOGO ─────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zastosowanie
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Dla kogo jest GSP 65 EVO?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
            {DLA_KOGO.map((item, i) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}`,
              }}>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 1.5 }}>
                  <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT,
                    letterSpacing: '-0.04em', lineHeight: 1, opacity: 0.5, flexShrink: 0 }}>
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── ZALETY ───────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Cechy maszyny
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Zalety GSP 65 EVO
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {ZALETY.map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `2px solid var(--dim-10)`,
                borderRadius: '4px',
                '&:hover': { borderTopColor: ACCENT },
                transition: 'border-color 0.2s ease',
              }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                  {item.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── ZASTOSOWANIA + MADEJPAK ──────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>

            {/* Zastosowania */}
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zastosowania
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 3,
              }}>
                GSP 65 EVO sprawdzi się przy pakowaniu:
              </Typography>
              <Stack spacing={1.5}>
                {ZASTOSOWANIA.map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* MadejPak */}
            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                GSP 65 EVO w MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Przemysłowe pakowanie pod Twoje wymagania.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 3 }}>
                GSP 65 EVO to rozwiązanie dla firm, które potrzebują większej kontroli nad procesem
                pakowania. Maszyna łączy wysoką wydajność, szczelność zgrzewu i możliwość pracy
                z wymagającymi produktami.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                W MadejPak dobieramy konfigurację maszyny do produktu, folii i warunków produkcyjnych.
                Dzięki własnemu serwisowi posprzedażowemu oraz magazynowi części zamiennych
                zapewniamy wsparcie również po uruchomieniu maszyny.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORMULARZ ────────────────────────────────────────────── */}
      <Box id="zapytaj">
        <LeadForm defaultModel="GSP 65 EVO" />
      </Box>

      {/* ── BREADCRUMB ───────────────────────────────────────────── */}
      <Box sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg" sx={{ py: 2 }}>
          <Typography variant="body2" sx={{
            color: 'var(--dim-72)', display: 'flex', gap: 1,
            alignItems: 'center', flexWrap: 'wrap', fontSize: '0.8rem',
          }}>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny" style={{ color: 'inherit', textDecoration: 'none' }}>Maszyny</Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <Link href="/maszyny/poziome-maszyny-pakujace" style={{ color: 'inherit', textDecoration: 'none' }}>
              Poziome maszyny pakujące
            </Link>
            <span style={{ opacity: 0.5 }}>/</span>
            <span>GSP 65 EVO</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
