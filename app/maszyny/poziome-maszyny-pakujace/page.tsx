import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Poziome maszyny pakujące Flow Pack – pakowanie żywności i produktów | MadejPak',
  description:
    'Poziome maszyny pakujące flow pack GSP – Tecno Pack. Pakowanie żywności, kosmetyków, produktów chemicznych i przemysłowych w folię. Modele FP 095E, FP 100E, FP 100 HP Box Motion.',
  keywords: [
    'flow pack', 'poziome maszyny pakujące', 'maszyna pakująca pozioma',
    'pakowanie żywności maszyna', 'pakowanie w folię', 'flowpack',
    'linia pakująca żywność', 'pakowanie kosmetyków maszyna',
  ],
  alternates: { canonical: `${SITE_URL}/maszyny/poziome-maszyny-pakujace` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/poziome-maszyny-pakujace`,
    title:       'Poziome maszyny pakujące Flow Pack | MadejPak',
    description: 'Poziome maszyny pakujące (flow pack) GSP – Tecno Pack w ofercie MadejPak. Modele FP 095E, FP 100E, FP 100 HP Box Motion. Pakowanie żywności, produktów chemicznych i przemysłowych.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Poziome maszyny pakujące – MadejPak' }],
  },
};

// ─── Design tokens ────────────────────────────────────────────────────────────
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';
const BG_ALT  = 'var(--bg-alt)';
const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function ArrowRight() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}>
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      <Typography sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
        letterSpacing: '-0.03em', color: ACCENT, lineHeight: 1 }}>
        {value}
      </Typography>
      <Typography sx={{ fontSize: '0.72rem', color: TEXT_DIM, letterSpacing: '0.04em' }}>
        {label}
      </Typography>
    </Box>
  );
}

// ─── Model card ───────────────────────────────────────────────────────────────
interface ModelSpec { label: string; value: string }
interface MachineModel {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  description: string;
  specs: ModelSpec[];
  features: string[];
  products: string[];
  imageSrc: string;
  imageAlt: string;
}

function ModelCard({ model }: { model: MachineModel }) {
  return (
    <Box sx={{
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '340px 1fr' },
      border: `1px solid ${BORDER}`,
      borderRadius: '4px',
      overflow: 'hidden',
      bgcolor: BG_CARD,
    }}>
      {/* Image */}
      <Box sx={{
        position: 'relative',
        minHeight: { xs: 220, md: 'auto' },
        background: 'linear-gradient(160deg, #1F1F21 0%, #252527 100%)',
        flexShrink: 0,
      }}>
        <Image src={model.imageSrc} alt={model.imageAlt} fill
          sizes="(max-width: 900px) 100vw, 340px"
          style={{ objectFit: 'cover' }} />
        {model.badge && (
          <Box sx={{
            position: 'absolute', top: 16, left: 16,
            px: 1.5, py: 0.5,
            bgcolor: `${ACCENT}22`, border: `1px solid ${ACCENT}60`,
            borderRadius: '2px', fontSize: '0.65rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT,
          }}>
            {model.badge}
          </Box>
        )}
      </Box>

      {/* Content */}
      <Box sx={{ px: { xs: 3, md: 4 }, py: { xs: 3, md: 3.5 }, display: 'flex', flexDirection: 'column', gap: 2.5 }}>
        <Box>
          <Typography component="h3" sx={{
            fontSize: { xs: '1.125rem', md: '1.25rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 0.5,
          }}>
            {model.name}
          </Typography>
          <Typography sx={{ fontSize: '0.82rem', color: ACCENT, fontWeight: 600 }}>
            {model.tagline}
          </Typography>
        </Box>

        <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7 }}>
          {model.description}
        </Typography>

        {/* Specs */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: 1.5 }}>
          {model.specs.map((s) => (
            <Box key={s.label} sx={{
              px: 1.5, py: 1.25,
              bgcolor: 'var(--surface-03)', border: `1px solid ${BORDER}`, borderRadius: '3px',
            }}>
              <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                textTransform: 'uppercase', color: 'var(--dim-28)', mb: 0.4 }}>
                {s.label}
              </Typography>
              <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>
                {s.value}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Products */}
        <Box>
          <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em',
            textTransform: 'uppercase', color: 'var(--dim-28)', mb: 1 }}>
            Typowe produkty
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
            {model.products.map((p) => (
              <Box key={p} sx={{
                px: 1.25, py: 0.35,
                bgcolor: 'var(--surface-04)', border: `1px solid ${BORDER}`,
                borderRadius: '2px', fontSize: '0.72rem', color: TEXT_DIM,
              }}>
                {p}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Features */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {model.features.map((f) => (
            <Box key={f} sx={{
              px: 1.25, py: 0.35,
              bgcolor: `${ACCENT}0D`, border: `1px solid ${ACCENT}25`,
              borderRadius: '2px', fontSize: '0.7rem', color: 'rgba(232,97,10,0.85)',
            }}>
              {f}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const MODELS: MachineModel[] = [
  {
    id: 'fp095e',
    name: 'FP 095 E',
    tagline: 'Kompaktowa, wysoko wydajna — do 350 opakowań/min',
    description:
      'Wieloosiowa maszyna pozioma o konstrukcji wspornikowej (cantilever) — zaprojektowana do pracy w automatycznych liniach produkcyjnych. Wysoka wydajność do 350 opakowań/min łączy się z ergonomiczną dostępnością strefy formatowania i łatwością sanitacji. Obsługuje folie termozgrzewalne oraz folie zimno-klejące (cold seal) dla produktów wrażliwych na ciepło.',
    specs: [
      { label: 'Wydajność', value: 'do 350 op./min' },
      { label: 'Szer. folii max', value: '500 mm' },
      { label: 'Szer. prod. max', value: '200 mm' },
      { label: 'Wys. prod. max', value: '120 mm' },
    ],
    features: ['Wieloosiowe sterowanie PLC', 'Ekran dotykowy', 'Zapis receptur', 'Cold seal', 'Diagnostyka maszyny'],
    products: ['Batony', 'Czekolada', 'Biszkopty', 'Mydło', 'Sera plastry', 'Tabletki OTC'],
    imageSrc: '/images/machines/flowpack-fp095e.jpg',
    imageAlt: 'Tecno Pack FP 095 E – pozioma maszyna pakująca',
  },
  {
    id: 'fp100e',
    name: 'FP 100 E',
    badge: 'Podstawowa seria',
    tagline: 'Wszechstronny flow wrap — żywność i produkty przemysłowe',
    description:
      'Standardowa seria maszyn poziomych Tecno Pack — elastyczna konfiguracja dla szerokiego zakresu produktów i formatów opakowań. Modułowa budowa umożliwia integrację z automatycznym podawaniem, ważeniem i systemem znakowania. Sprawdzona w branży spożywczej, kosmetycznej i przemysłowej przy formatach od kilku do kilkuset gramów.',
    specs: [
      { label: 'Wydajność', value: 'do 200 op./min' },
      { label: 'Format folii', value: 'szeroki zakres' },
      { label: 'Folie', value: 'PP, OPP, PE, laminaty' },
      { label: 'Sterowanie', value: 'PLC + HMI' },
    ],
    features: ['Moduł drukujący', 'System no-product-no-bag', 'Zmiana formatu bez narzędzi', 'Auto naciąg folii', 'Wersja INOX'],
    products: ['Pieczywo', 'Warzywa', 'Artykuły chemiczne', 'Pasta', 'Sałatki', 'Akcesoria'],
    imageSrc: '/images/machines/flowpack-fp100e.jpg',
    imageAlt: 'Tecno Pack FP 100 E – standardowa maszyna flow pack',
  },
  {
    id: 'fp100hp',
    name: 'FP 100 HP Box Motion',
    badge: 'High Performance',
    tagline: 'Box motion jaw — produkty delikatne przy najwyższej wydajności',
    description:
      'Wersja wysokowydajna serii FP 100 z głowicą zgrzewającą w układzie box motion — szczęki poruszają się synchronicznie z produktem, eliminując ryzyko uszkodzenia podczas zgrzewu. Dedykowana dla delikatnych lub nieregularnych produktów wymagających precyzyjnego zamknięcia opakowania przy dużej prędkości linii. Możliwość instalacji automatycznego podajnika produktu.',
    specs: [
      { label: 'Wydajność', value: 'do 400 op./min' },
      { label: 'Głowica', value: 'Box Motion' },
      { label: 'Format folii', value: 'do 520 mm szer.' },
      { label: 'Sterowanie', value: 'Wieloosiowe PLC' },
    ],
    features: ['Box motion jaw', 'Synchronizacja z produktem', 'Brak deformacji opakowania', 'Auto podawanie', 'Wysoka precyzja zgrzewu'],
    products: ['Croissanty', 'Lody', 'Produkty kruche', 'Artykuły nieregularne', 'Muffinki', 'Ryby'],
    imageSrc: '/images/machines/flowpack-fp100hp.jpg',
    imageAlt: 'Tecno Pack FP 100 HP Box Motion – maszyna flow pack high performance',
  },
];

const HOW_WORKS = [
  { num: '01', title: 'Formowanie rękawa', desc: 'Folia z rolki przechodzi przez formierz — tworzony jest ciągły rękaw foliowy dopasowany do szerokości produktu.' },
  { num: '02', title: 'Podawanie produktu', desc: 'Produkt podawany jest ręcznie lub automatycznym systemem podającym bezpośrednio do rękawa folii.' },
  { num: '03', title: 'Zgrzew podłużny', desc: 'Boczny zgrzew zamykający rękaw wokół produktu — wykonywany w sposób ciągły przez parę rolek zgrzewających.' },
  { num: '04', title: 'Zgrzew poprzeczny i cięcie', desc: 'Szczęki zgrzewające zamykają opakowanie z przodu i tyłu produktu, nóż odcina gotowe opakowanie.' },
];

const SECTORS = [
  { name: 'Spożywcza', items: ['Pieczywo i ciastka', 'Czekolada i cukierki', 'Nabiał i sery', 'Owoce i warzywa', 'Produkty mrożone'] },
  { name: 'Farmaceutyczna / OTC', items: ['Opakowania blistrów', 'Produkty higieniczne', 'Suplementy diety', 'Materiały medyczne'] },
  { name: 'Chemiczna / FMCG', items: ['Mydło i kosmetyki', 'Środki czyszczące', 'Artykuły DOM', 'Chemikalia techniczne'] },
  { name: 'Przemysłowa', items: ['Drobne elementy', 'Narzędzia i akcesoria', 'Artykuły DIY', 'Komponenty elektroniczne'] },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PoziomeMaszynyPage() {
  return (
    <main>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                GSP – Tecno Pack — flow pack
              </Typography>
              <Typography component="h1" sx={{
                fontSize: { xs: '2rem', md: '2.75rem', lg: '3.25rem' },
                fontWeight: 800, letterSpacing: '-0.028em', color: 'var(--text)', lineHeight: 1.1, mb: 3,
              }}>
                Poziome maszyny<br />pakujące Flow Pack.
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 540, mb: 4 }}>
                Maszyny poziome (flow wrappers) formują opakowanie z rolki folii i owijają produkt
                w szczelny worek foliowy. Sprawdzone w pakowaniu żywności, artykułów OTC i produktów
                przemysłowych — od wydajności laboratoryjnych po wielotorowe linie produkcyjne.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.5}>
                <Button component="a" href="#modele" variant="contained" disableElevation
                  sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.875rem',
                    textTransform: 'none', px: 3.5, py: 1.5, borderRadius: '6px',
                    '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)' } }}>
                  Zobacz modele
                </Button>
                <Button component={Link} href="/kontakt" variant="outlined"
                  sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-85)',
                    fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 3.5, py: 1.5,
                    borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                  Wyślij zapytanie
                </Button>
              </Stack>
            </Box>

            {/* Stats */}
            <Box sx={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2,
              p: { xs: 3, md: 3.5 },
              bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
            }}>
              <StatChip value="400" label="opakowań/min – max wydajność" />
              <StatChip value="3" label="serie maszynowe FP" />
              <StatChip value="4" label="sektory przemysłowe" />
              <StatChip value="500mm" label="max szerokość folii" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 2. JAK DZIAŁA ─────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zasada działania
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 },
          }}>
            Jak działa maszyna flow pack?
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 3 }}>
            {HOW_WORKS.map((step) => (
              <Box key={step.num} sx={{
                p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}22`,
              }}>
                <Typography sx={{ fontSize: '2rem', fontWeight: 800, color: ACCENT,
                  letterSpacing: '-0.04em', lineHeight: 1, mb: 2, opacity: 0.6 }}>
                  {step.num}
                </Typography>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1 }}>
                  {step.title}
                </Typography>
                <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                  {step.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 3. MODELE ─────────────────────────────────────────────── */}
      <Box id="modele" component="section"
        sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 }, scrollMarginTop: { xs: 64, lg: 72 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Modele maszyn
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 }, maxWidth: 560,
          }}>
            Serie FP – Tecno Pack w ofercie MadejPak
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Stack>
        </Container>
      </Box>

      {/* ── 4. SEKTORY ────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zastosowania
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Sektory i produkty
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' }, gap: 2.5 }}>
            {SECTORS.map((sector) => (
              <Box key={sector.name} sx={{
                p: 3, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px',
                borderTop: `2px solid ${ACCENT}`,
              }}>
                <Typography sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                  {sector.name}
                </Typography>
                <Stack spacing={0.75}>
                  {sector.items.map((item) => (
                    <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25 }}>
                      <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.5 }}>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 5. TYPY OPAKOWAŃ ──────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Typy opakowań
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 7 },
          }}>
            Formaty opakowań flow pack
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {[
              {
                name: 'Pillow bag (poduszka)',
                desc: 'Klasyczne opakowanie flow pack — szczelny worek foliowy z zgrzewem bocznym, górnym i dolnym. Prosty w produkcji, ekonomiczny w zużyciu folii. Najpopularniejszy format dla żywności i artykułów konsumenckich.',
                folie: 'PP, OPP, PE, laminaty metaliczne',
              },
              {
                name: 'Opakowanie z zakładką (gusseted)',
                desc: 'Opakowanie z boczną lub dolną zakładką — zwiększona objętość przy tym samym zużyciu folii. Stosowane przy produktach o nieregularnym kształcie lub wymagających większej pojemności opakowania.',
                folie: 'PP, OPP, folie wielowarstwowe',
              },
              {
                name: 'Opakowanie w folii kurczliwej',
                desc: 'Produkt owijany folią termokurczliwą, która po przejściu przez tunel kurczący się szczelnie obkurcza na produkcie. Stosowane przy pakowaniu grupowym i eksponowaniu produktu przez opakowanie.',
                folie: 'POF (poliolefin), PE shrink',
              },
            ].map((item) => (
              <Box key={item.name} sx={{
                p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
                borderRadius: '4px',
                '&:hover': { borderTopColor: ACCENT },
                transition: 'border-color 0.2s ease',
              }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>
                  {item.name}
                </Typography>
                <Typography sx={{ fontSize: '0.84rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                  {item.desc}
                </Typography>
                <Box sx={{ borderTop: `1px solid ${BORDER}`, pt: 1.5 }}>
                  <Typography sx={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                    textTransform: 'uppercase', color: 'var(--dim-28)', mb: 0.5 }}>
                    Folie
                  </Typography>
                  <Typography sx={{ fontSize: '0.78rem', color: TEXT_DIM }}>
                    {item.folie}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── 6. PARTNER ────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Partner technologiczny
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
              borderRadius: '4px',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2.5 }}>
                <Typography sx={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em' }}>
                  GSP – Tecno Pack
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-28)' }}>
                  Włochy
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                GSP (General System Pack) – Tecno Pack to włoski producent poziomych maszyn pakujących (flow wrappers)
                z wieloletnim doświadczeniem w sektorze spożywczym, farmaceutycznym i przemysłowym.
                Modułowa budowa maszyn umożliwia szybkie dostosowanie do zmieniających się formatów produkcji.
              </Typography>
              <Stack spacing={1}>
                {[
                  'Maszyny wieloosiowe sterowane PLC z ekranem dotykowym',
                  'Obsługa folii termozgrzewalnych i cold seal',
                  'Systemy podawania automatycznego i ręcznego',
                  'Certyfikacja CE, wersje INOX dla branży spożywczej',
                ].map((item) => (
                  <Box key={item} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.82rem', color: 'var(--dim-65)', lineHeight: 1.55 }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
              <Box sx={{ mt: 3.5 }}>
                <Box component="a" href="https://www.tecnopackspa.it" target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75,
                    fontSize: '0.82rem', fontWeight: 600, color: TEXT_DIM, textDecoration: 'none',
                    '&:hover': { color: 'var(--text)' } }}>
                  tecnopackspa.it
                  <ArrowRight />
                </Box>
              </Box>
            </Box>

            <Box sx={{
              p: { xs: 3, md: 4 }, bgcolor: BG_CARD,
              border: `1px solid ${BORDER}`, borderTop: `2px solid var(--dim-10)`,
              borderRadius: '4px',
            }}>
              <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 2 }}>
                Dobór maszyny flow pack
              </Typography>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 2.5 }}>
                Właściwy model maszyny poziomej dobieramy na podstawie produktu, wydajności i formatu folii.
                Kluczowe parametry to kształt i wymiary produktu, wymagana prędkość linii i typ folii.
              </Typography>
              <Stack spacing={1.5}>
                {[
                  { label: 'Produkt delikatny', val: 'FP 100 HP Box Motion' },
                  { label: 'Wysoka wydajność', val: 'FP 095 E (do 350 op./min)' },
                  { label: 'Wszechstronność', val: 'FP 100 E – szeroki zakres' },
                  { label: 'Zimne klejenie', val: 'FP 095 E (cold seal)' },
                ].map((r) => (
                  <Box key={r.label} sx={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    py: 1.25, borderBottom: `1px solid ${BORDER}`,
                  }}>
                    <Typography sx={{ fontSize: '0.78rem', color: 'var(--dim-38)', fontWeight: 600,
                      textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {r.label}
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM }}>
                      {r.val}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 7. CTA ────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG, py: { xs: 10, md: 14 } }}>
        <Container maxWidth="xl">
          <Box sx={{
            display: 'flex', flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' }, justifyContent: 'space-between',
            gap: { xs: 5, md: 8 },
          }}>
            <Box sx={{ maxWidth: 560 }}>
              <Typography component="h2" sx={{
                fontSize: { xs: '1.625rem', md: '2.125rem' }, fontWeight: 800,
                letterSpacing: '-0.02em', color: 'var(--text)', lineHeight: 1.2, mb: 2,
              }}>
                Szukasz maszyny poziomej dla swojej linii?
              </Typography>
              <Typography sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, color: TEXT_DIM, lineHeight: 1.75, maxWidth: 460 }}>
                Pomożemy dobrać właściwy model FP Tecno Pack do produktu, wydajności i wymagań pakowania w Twoim zakładzie.
              </Typography>
            </Box>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ flexShrink: 0 }}>
              <Button component={Link} href="/kontakt" variant="contained" disableElevation
                sx={{ bgcolor: ACCENT, color: '#fff', fontWeight: 700, fontSize: '0.95rem',
                  textTransform: 'none', px: 4, py: 2, borderRadius: '6px', minHeight: 52,
                  '&:hover': { bgcolor: '#F07520', transform: 'translateY(-1px)', boxShadow: '0 8px 28px rgba(232,97,10,0.35)' } }}>
                Wyślij zapytanie
              </Button>
              <Button component={Link} href="/maszyny/partnerzy" variant="outlined"
                sx={{ borderColor: 'var(--dim-18)', color: 'var(--dim-75)',
                  fontWeight: 600, fontSize: '0.875rem', textTransform: 'none', px: 4, py: 2,
                  borderRadius: '6px', '&:hover': { borderColor: 'var(--dim-42)', color: 'var(--text)', bgcolor: 'var(--surface-04)' } }}>
                Wszystkie maszyny partnerów
              </Button>
            </Stack>
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
            <span>Poziome maszyny pakujące (Flow pack)</span>
          </Typography>
        </Container>
      </Box>
    </main>
  );
}
