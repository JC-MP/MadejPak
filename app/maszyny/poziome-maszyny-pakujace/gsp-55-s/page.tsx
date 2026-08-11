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
  title: 'GSP 55 S – Kompaktowa Maszyna Flow Pack | MadejPak',
  description:
    'GSP 55 S – kompaktowa maszyna flow pack do 150 op./min. Budowa wspornikowa, 3 pary kół zgrzewających, folie hot-seal i cold-seal, zapamiętywanie receptur. Pakowanie przemysłowe.',
  keywords: [
    'GSP 55 S', 'kompaktowa maszyna flow pack', 'maszyna pakująca cantilever',
    'flow pack hot seal cold seal', 'maszyna pakująca przemysłowa',
    'flow pack 150 opakowań', 'GSP 55S',
  ],
  alternates: {
    canonical: `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
    languages: {
      'pl': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
      'en': `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
      'x-default': `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/maszyny/poziome-maszyny-pakujace/gsp-55-s`,
    title:       'GSP 55 S – Kompaktowa Maszyna Flow Pack | MadejPak',
    description: 'Kompaktowa maszyna flow pack do 150 op./min. 3 pary kół zgrzewających, folie hot-seal i cold-seal, zapamiętywanie receptur.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'GSP 55 S – maszyna flow pack – MadejPak' }],
  },
};

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GSP 55 S',
  description: 'Kompaktowa elektroniczna maszyna flow pack do 150 op./min. Budowa wspornikowa, folie hot-seal i cold-seal, zapamiętywanie receptur.',
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
    title: 'Firmy szukające kompaktowej maszyny flow pack',
    desc: 'GSP 55 S sprawdzi się tam, gdzie liczy się oszczędność miejsca, prosta obsługa i stabilna praca. To dobre rozwiązanie dla zakładów potrzebujących maszyny przemysłowej bez nadmiernie rozbudowanego systemu pakowania.',
  },
  {
    title: 'Producenci potrzebujący solidnej i niezawodnej maszyny',
    desc: 'Model GSP 55 S to kompaktowa, ale wytrzymała maszyna do pracy w warunkach przemysłowych. Nadaje się do codziennej produkcji i powtarzalnego pakowania.',
  },
  {
    title: 'Zakłady pakujące produkty średniej wielkości',
    desc: 'Maszyna obsługuje produkty o szerokości do 200 mm i wysokości do 120 mm. Sprawdzi się przy wielu produktach spożywczych i niespożywczych wymagających klasycznego opakowania flow pack.',
  },
  {
    title: 'Firmy wymagające łatwej obsługi',
    desc: 'Panel operatorski z wyświetlaczem alfanumerycznym i klawiaturą umożliwia prostą kontrolę parametrów. Funkcja przywoływania receptur ułatwia powrót do zapisanych ustawień dla powtarzalnych produktów.',
  },
  {
    title: 'Producenci pracujący z foliami hot-seal i cold-seal',
    desc: 'GSP 55 S może pracować z materiałami opakowaniowymi do zgrzewania na gorąco i na zimno. To zwiększa elastyczność doboru folii do produktu.',
  },
];

const ZALETY = [
  {
    title: 'Kompaktowa konstrukcja',
    desc: 'Przemysłowa jakość pakowania w kompaktowej formie. Dobry wybór dla zakładów z ograniczoną przestrzenią produkcyjną.',
  },
  {
    title: 'Do 150 opakowań na minutę',
    desc: 'Maszyna osiąga wydajność do 150 op./min, w zależności od produktu, folii i ustawień procesu.',
  },
  {
    title: 'Rama wspornikowa (cantilever)',
    desc: 'Dobry dostęp do obszaru roboczego maszyny — ułatwia czyszczenie, obsługę i konserwację.',
  },
  {
    title: 'Trzy pary kół zgrzewających',
    desc: 'Jednostka zgrzewania wzdłużnego z trzema parami kół wspiera stabilne prowadzenie folii i powtarzalny zgrzew.',
  },
  {
    title: 'Sterowanie trzema silnikami',
    desc: 'Trzy silniki zarządzane przez kontrolę osi zapewniają precyzyjną synchronizację i powtarzalność procesu pakowania.',
  },
  {
    title: 'Zapamiętywanie receptur',
    desc: 'Operator korzysta z funkcji przywoływania zapisanych receptur. Skraca czas ustawień przy zmianie produktu lub formatu.',
  },
  {
    title: 'Elektroniczny termostat',
    desc: 'Regulacja temperatury przez termostat elektroniczny pozwala utrzymać stabilne parametry zgrzewania dopasowane do folii.',
  },
  {
    title: 'Możliwość znakowania opakowań',
    desc: 'Do maszyny można dodać drukarkę do daty ważności, numeru partii, kodu produkcyjnego lub innych oznaczeń.',
  },
];

const OPCJE = [
  'Fotokomórka do centrowania nadruku',
  'Drukarka (data, numer partii, kod produkcyjny)',
  'Drugi uchwyt rolki folii',
  'Zwiększenie szerokości folii do 760 mm',
  'Przedłużenie podajnika wejściowego',
  'Listwy do wstępnego podgrzewania folii',
  'Czwarty zestaw kół zgrzewających',
  'Wykonanie ze stali nierdzewnej (INOX)',
];

const SPECS: { label: string; value: string }[] = [
  { label: 'Typ konstrukcji',                 value: 'Rama wspornikowa (cantilever)' },
  { label: 'Zgrzewanie wzdłużne',             value: '3 pary kół' },
  { label: 'Wydajność',                       value: 'do 150 op./min' },
  { label: 'Maks. szerokość produktu',        value: '200 mm' },
  { label: 'Maks. wysokość produktu',         value: '120 mm' },
  { label: 'Maks. szerokość folii',           value: '520 mm' },
  { label: 'Materiały opakowaniowe',          value: 'Hot-seal i cold-seal' },
  { label: 'Masa maszyny',                    value: '750 kg' },
  { label: 'Liczba silników',                 value: '3' },
  { label: 'Sterowanie',                      value: 'Kontrola osi' },
  { label: 'Panel operatora',                 value: 'Wyświetlacz alfanumeryczny + klawiatura' },
  { label: 'Zasilanie',                       value: '400 V, 50 Hz, 3 fazy + N' },
  { label: 'Moc zainstalowana',               value: '5 kW' },
  { label: 'Sprężone powietrze',              value: '6 bar (suche, filtrowane)' },
  { label: 'Zużycie powietrza',               value: '20 NL/min' },
];

const ZASTOSOWANIA = [
  'Produkty spożywcze',
  'Produkty niespożywcze',
  'Produkty średniej wielkości',
  'Produkty wymagające zwartej maszyny pakującej',
  'Folie hot-seal i cold-seal',
  'Produkty wymagające znakowania',
  'Produkty z powtarzalnymi formatami',
  'Pakowanie w warunkach przemysłowych',
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Gsp55SPage() {
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
          <Image src="/images/machines/flowpack-gsp-55s-page.jpg" alt="" fill
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
                Najpopularniejsza
              </Box>
            </Box>
            <Typography component="h1" sx={{
              fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
              fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 2,
            }}>
              GSP 55 S
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.2rem' }, color: ACCENT,
              fontWeight: 600, mb: 3, letterSpacing: '-0.01em' }}>
              Kompaktowa maszyna do przemysłowego pakowania.
            </Typography>
            <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, mb: 4 }}>
              Pozioma elektroniczna maszyna flow pack z ramą wspornikową i trzema parami kół zgrzewających.
              Łączy solidną konstrukcję, sprawdzoną technologię i wygodną obsługę — do pracy przemysłowej
              bez nadmiernie rozbudowanej konfiguracji.
            </Typography>
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2, mb: 4,
              borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, py: 2.5 }}>
              <StatChip value="150" label="op./min max" />
              <StatChip value="3" label="pary kół zgrzew." />
              <StatChip value="200mm" label="maks. szer. produktu" />
              <StatChip value="Hot+Cold" label="seal" />
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
            Dla kogo jest GSP 55 S?
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
            Zalety GSP 55 S
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {ZALETY.map((item) => (
              <Box key={item.title} sx={{
                p: { xs: 3, md: 3 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
                borderRadius: '4px',
                '&:hover': { borderTopColor: ACCENT },
                transition: 'border-color 0.2s ease',
              }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', mb: 1.25 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.7 }}>
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

            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Dane techniczne
              </Typography>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', mb: 3,
              }}>
                Specyfikacja GSP 55 S
              </Typography>
              <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
                {SPECS.map((spec, i) => (
                  <Box key={spec.label} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    px: 2.5, py: 1.5,
                    bgcolor: i % 2 === 0 ? BG_CARD : 'var(--surface-03)',
                    borderBottom: i < SPECS.length - 1 ? `1px solid ${BORDER}` : 'none',
                    gap: 2,
                  }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.06em', flexShrink: 0 }}>
                      {spec.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, fontWeight: 500, textAlign: 'right' }}>
                      {spec.value}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

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
                GSP 55 S można wyposażyć w szereg dodatkowych opcji dopasowanych do konkretnego procesu pakowania.
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
                GSP 55 S sprawdzi się przy pakowaniu:
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
                GSP 55 S w MadejPak
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Konfiguracja dopasowana do procesu i folii.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                GSP 55 S to rozwiązanie dla firm potrzebujących kompaktowej, solidnej i łatwej w obsłudze
                maszyny flow pack do pracy przemysłowej.
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                W MadejPak dobieramy konfigurację do produktu, folii i warunków produkcji.
                Możemy dodać drukarkę, fotokomórkę, drugi uchwyt rolki, przedłużenie podajnika,
                listwy podgrzewające lub wykonanie ze stali nierdzewnej.
                Zapewniamy własny serwis posprzedażowy i dostęp do części zamiennych.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── FORMULARZ ────────────────────────────────────────────── */}
      <Box id="zapytaj">
        <LeadForm defaultModel="GSP 55 S" />
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
            <span>GSP 55 S</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
