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
  title: 'GSP 50 S – Maszyna Flow Pack 150 op./min | MadejPak',
  description:
    'GSP 50 S – maszyna flow pack do 150 op./min. Produkty 10–250 mm szerokości, folie zgrzewalne i cold-seal, PLC z ekranem 7", pamięć programów. Pakowanie spożywcze i niespożywcze.',
  keywords: [
    'GSP 50 S', 'maszyna flow pack 150 opakowań', 'flow pack cantilever',
    'maszyna pakująca cold seal', 'flow pack PLC ekran dotykowy',
    'maszyna pakująca spożywcze niespożywcze',
  ],
  alternates: {
    canonical: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-50-s`,
    title:       'GSP 50 S – Maszyna Flow Pack 150 op./min | MadejPak',
    description: 'Maszyna flow pack do 150 op./min. Folie zgrzewalne, cold-seal i PE. PLC z ekranem 7", pamięć programów, bogata konfiguracja opcji.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 50 S – maszyna flow pack – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 50 S',
  description: 'Elektroniczna pozioma maszyna pakująca flow pack do 150 op./min. Produkty spożywcze i niespożywcze, folie zgrzewalne i cold-seal, PLC z ekranem 7".',
  brand: { '@type': 'Brand', name: 'GSP – Grupa Tecnopack' },
  manufacturer: { '@type': 'Organization', name: 'GSP – Grupa Tecnopack' },
};

// ─── Design tokens ───────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
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
    title: 'Producenci żywności',
    desc: 'GSP 50 S sprawdzi się przy pakowaniu produktów spożywczych wymagających powtarzalnego, estetycznego i szczelnego opakowania. Może pracować z foliami zgrzewalnymi, powlekanymi, cold-seal oraz polietylenem.',
  },
  {
    title: 'Producenci produktów niespożywczych',
    desc: 'Maszyna nadaje się do pakowania produktów technicznych, kosmetycznych, higienicznych, przemysłowych i użytkowych. To rozwiązanie dla firm, które potrzebują jednej maszyny do wielu kategorii produktów.',
  },
  {
    title: 'Firmy pakujące produkty pojedyncze i multipaki',
    desc: 'GSP 50 S obsługuje zarówno opakowania jednostkowe, jak i wielosztukowe. Dzięki temu może pracować przy różnych wariantach asortymentu bez konieczności inwestowania w osobne rozwiązania.',
  },
  {
    title: 'Zakłady z częstymi zmianami formatu',
    desc: 'Maszyna została zaprojektowana pod szybką i wygodną zmianę formatu. Programy pracy można zapisywać w sterowaniu, co skraca czas ustawień przy powtarzalnych produktach.',
  },
  {
    title: 'Produkcja wymagająca higieny i łatwego dostępu',
    desc: 'Konstrukcja wspornikowa (cantilever) zapewnia łatwy dostęp do obszaru roboczego. Ułatwia czyszczenie, konserwację i kontrolę maszyny — szczególnie ważne w zakładach, gdzie liczy się higiena procesu.',
  },
];

const ZALETY = [
  {
    title: 'Do 150 opakowań na minutę',
    desc: 'GSP 50 S umożliwia pracę z prędkością do 150 produktów na minutę, w zależności od produktu, folii i konfiguracji maszyny.',
  },
  {
    title: 'Szeroki zakres wymiarów produktu',
    desc: 'Obsługuje produkty o szerokości 10–250 mm, wysokości 1–120 mm i długości 30–600 mm. Dopasowanie do wielu typów produktów i formatów opakowań.',
  },
  {
    title: 'Praca z różnymi foliami',
    desc: 'GSP 50 S może pracować z foliami zgrzewalnymi na gorąco, powlekanymi, cold-seal oraz polietylenem. Większa elastyczność produkcji i dobór opakowania do wymagań produktu.',
  },
  {
    title: 'Sterowanie PLC i ekran 7"',
    desc: 'Sterownik PLC i panel operatorski z ekranem dotykowym 7" — operator kontroluje parametry, temperaturę, diagnostykę i zapisane programy z jednego miejsca.',
  },
  {
    title: 'Pamięć programów roboczych',
    desc: 'Możliwość zapisu programów ułatwia powrót do wcześniejszych ustawień. Ogranicza czas przezbrojeń i zmniejsza ryzyko błędów przy częstych zmianach produktu.',
  },
  {
    title: 'Łatwy dostęp i prosta konserwacja',
    desc: 'Konstrukcja cantilever daje wygodny dostęp do maszyny — ułatwia czyszczenie, sanifikację, kontrolę i bieżącą konserwację.',
  },
  {
    title: 'Możliwość znakowania opakowań',
    desc: 'Do maszyny można dodać drukarkę do daty ważności, numeru partii, kodu produkcyjnego lub innych oznaczeń wymaganych w procesie.',
  },
];

const OPCJE = [
  'Przenośnik rolkowy przez górną szczękę',
  'Drukarka (data ważności, numer partii)',
  'Fotokomórka do pracy z folią z nadrukiem',
  'Kółka pod maszyną',
  'Przekładnia do krótkiego i długiego skoku',
  'Podwójny uchwyt rolki folii',
  'Wersja do pracy z polietylenem',
  'Przedłużenie podajnika wejściowego',
  'Noże zig-zag',
  'Wykrojnik euroslot',
  'System „no product — no bag"',
  'Urządzenie do wykonywania zakładek bocznych',
];

const SPECS: { label: string; value: string }[] = [
  { label: 'Prędkość produkcyjna',    value: 'do 150 op./min' },
  { label: 'Szerokość produktu',      value: '10–250 mm' },
  { label: 'Wysokość produktu',       value: '1–120 mm' },
  { label: 'Długość produktu',        value: '30–600 mm' },
  { label: 'Szerokość rolki folii',   value: '650 mm' },
  { label: 'Średnica rolki',          value: 'Ø 350 mm' },
  { label: 'Średnica gilzy',          value: '68–75 mm' },
  { label: 'Długość maszyny',         value: '4 000 mm' },
  { label: 'Szerokość maszyny',       value: '1 060 mm' },
  { label: 'Wysokość maszyny',        value: '1 800 mm' },
  { label: 'Masa maszyny',            value: '650 kg' },
  { label: 'Moc zainstalowana',       value: '3,5 kW' },
  { label: 'Sprężone powietrze',      value: '7 bar (suche, filtrowane)' },
];

const ZASTOSOWANIA = [
  'Produkty spożywcze',
  'Produkty niespożywcze',
  'Pakowanie jednostkowe',
  'Opakowania wielosztukowe (multipaki)',
  'Produkty wymagające częstych zmian formatu',
  'Folie z nadrukiem (z fotokomórką)',
  'Produkty wymagające znakowania',
  'Opakowania z zakładkami bocznymi',
  'Pakowanie w polietylen',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Gsp50SPage() {
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
          <Image src="/images/machines/flowpack-gsp-50s-page.jpg" alt="" fill
            sizes="50vw" style={{ objectFit: 'cover', opacity: 0.5 }} priority />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ maxWidth: 640 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
              textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
              GSP – Grupa Tecnopack
            </Typography>
            <Typography component="h1" sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2,
            }}>
              GSP 50 S
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              Większa elastyczność. Stabilne pakowanie. Szybka zmiana formatu.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Elektroniczna maszyna flow pack zaprojektowana do produkcji jednostkowej
              i wielosztukowej. Wydajność do 150 op./min, folie zgrzewalne i cold-seal,
              sterowanie PLC z ekranem 7" i pamięć programów roboczych.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="150" label="op./min max" />
              <StatChip value='7"' label="ekran PLC" />
              <StatChip value="Cold seal" label="i hot seal" />
              <StatChip value="12+" label="opcji wyposażenia" />
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
            Dla kogo jest GSP 50 S?
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
            Zalety GSP 50 S
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {ZALETY.map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
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

      {/* ── DANE TECHNICZNE ──────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>

            {/* Specs table */}
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Dane techniczne
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 3,
              }}>
                Specyfikacja GSP 50 S
              </Typography>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                {SPECS.map((spec, i) => (
                  <Box key={spec.label} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    px: 2.5, py: 1.5,
                    bgcolor: i % 2 === 0 ? BG_CARD : 'var(--surface-03)',
                    borderBottom: i < SPECS.length - 1 ? `1px solid ${BORDER}` : 'none',
                  }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {spec.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, fontWeight: 500, textAlign: 'right' }}>
                      {spec.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Opcje */}
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Konfiguracja
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 1.5,
              }}>
                Dostępne opcje wyposażenia
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, mb: 3, lineHeight: 1.7 }}>
                GSP 50 S można wyposażyć w szereg dodatkowych opcji dopasowanych do konkretnego procesu pakowania.
              </Typography>
              <Stack spacing={1.25}>
                {OPCJE.map((opcja) => (
                  <Box key={opcja} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.55 }}>
                      {opcja}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── ZASTOSOWANIA + MADEJPAK ──────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 6, md: 8 } }}>

            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zastosowania
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 3,
              }}>
                GSP 50 S sprawdzi się przy pakowaniu:
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

            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                GSP 50 S w MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Konfiguracja dopasowana do Twojej linii.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                GSP 50 S to rozwiązanie dla firm, które potrzebują szybkiej, elastycznej i niezawodnej
                maszyny flow pack do codziennej produkcji.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                W MadejPak dobieramy konfigurację do produktu, folii i organizacji linii produkcyjnej.
                Możemy dodać drukarkę, fotokomórkę, podajnik, wykonanie pod polietylen, system zakładek
                bocznych lub inne wyposażenie. Zapewniamy własny serwis posprzedażowy i dostęp
                do części zamiennych.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORMULARZ ────────────────────────────────────────────── */}
      <Box id="zapytaj">
        <LeadForm defaultModel="GSP 50 S" />
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
            <span>GSP 50 S</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
