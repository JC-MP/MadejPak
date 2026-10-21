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
import LeadForm from './LeadForm';

export const metadata: Metadata = {
  title: 'Poziome maszyny pakujące flow pack GSP',
  description:
    'Poziome maszyny pakujące flow pack GSP: porównanie modeli 45 S–600 EVO, wersje BB i box motion, opcje i dobór. Do 400 op./min — dobór i serwis MadejPak.',
  keywords: [
    'flow pack', 'poziome maszyny pakujące', 'maszyna pakująca pozioma',
    'pakowanie żywności maszyna', 'pakowanie w folię', 'flowpack',
    'linia pakująca żywność', 'pakowanie kosmetyków maszyna',
  ],
  alternates: {
    canonical: `${SITE_URL}/maszyny/poziome-maszyny-pakujace`,
    languages: {
      pl: `${SITE_URL}/maszyny/poziome-maszyny-pakujace`,
      en: `${SITE_URL}/en/maszyny/poziome-maszyny-pakujace`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/maszyny/poziome-maszyny-pakujace`,
    title:       'Poziome maszyny pakujące Flow Pack | MadejPak',
    description: 'Poziome maszyny pakujące (flow pack) GSP w ofercie MadejPak. Serie S (45, 50, 55, 75) i EVO (MAP, box motion). Pakowanie żywności, kosmetyków i produktów przemysłowych — od standardowych po atmosferę modyfikowaną.',
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
  href?: string;
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
              bgcolor: ACCENT,
              borderRadius: '2px', fontSize: '0.7rem', color: '#fff',
            }}>
              {f}
            </Box>
          ))}
        </Box>

        {model.href && (
          <Box>
            <Box component={Link} href={model.href}
              sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75,
                fontSize: '0.82rem', fontWeight: 700, color: ACCENT, textDecoration: 'none',
                '&:hover': { textDecoration: 'underline' } }}>
              Szczegóły modelu →
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const MODELS: MachineModel[] = [
  {
    id: 'gsp45s',
    name: 'GSP 45 S',
    href: '/maszyny/poziome-maszyny-pakujace/gsp-45-s',
    badge: 'Nowość',
    tagline: 'Kompaktowy flow pack — wszechstronny i łatwy w obsłudze',
    description:
      'Elektroniczna pozioma maszyna pakująca (pillow pack) z ramą w wykonaniu wspornikowym (cantilever). Kompaktowa budowa sprawdza się zarówno w branży spożywczej, jak i niespożywczej. Prosta obsługa i łatwa zmiana formatu — dobre wejście w automatyzację pakowania.',
    specs: [
      { label: 'Konstrukcja', value: 'Wspornikowa (cantilever)' },
      { label: 'Zastosowanie', value: 'Spożywcze i niespożywcze' },
    ],
    features: ['Sterowanie elektroniczne', 'Rama wspornikowa (cantilever)', 'Łatwa zmiana formatu', 'Folie termozgrzewalne'],
    products: ['Batony', 'Ciastka', 'Mydło', 'Kosmetyki', 'Elementy techniczne'],
    imageSrc: '/images/machines/flowpack-gsp45s.jpg',
    imageAlt: 'GSP 45 S – kompaktowa maszyna flow pack',
  },
  {
    id: 'gsp50s',
    name: 'GSP 50 S',
    href: '/maszyny/poziome-maszyny-pakujace/gsp-50-s',
    tagline: 'Wszechstronny flow pack dla szerszego zakresu produktów',
    description:
      'Elektroniczna pozioma maszyna pakująca z ramą wspornikową — większy format niż GSP 45 S, równie prosta w obsłudze. Sprawdzona w branży spożywczej i niespożywczej. Obsługuje szeroki zakres kształtów i wymiarów produktu.',
    specs: [
      { label: 'Konstrukcja', value: 'Wspornikowa (cantilever)' },
      { label: 'Zastosowanie', value: 'Spożywcze i niespożywcze' },
    ],
    features: ['Sterowanie elektroniczne', 'Rama wspornikowa (cantilever)', 'Szeroki zakres formatów', 'Folie termozgrzewalne i cold seal'],
    products: ['Pieczywo', 'Sery', 'Warzywa', 'Kosmetyki', 'Artykuły DIY'],
    imageSrc: '/images/machines/flowpack-gsp50s.jpg',
    imageAlt: 'GSP 50 S – maszyna flow pack',
  },
  {
    id: 'gsp55s',
    name: 'GSP 55 S',
    href: '/maszyny/poziome-maszyny-pakujace/gsp-55-s',
    badge: 'Najpopularniejsza',
    tagline: 'Wysoka wydajność i obsługa podajników wieloosiowych',
    description:
      'Elektroniczna pozioma maszyna pakująca z ramą wspornikową — obsługuje podajniki wieloosiowe, co umożliwia integrację z sortownikami, wibrostołami i automatycznymi systemami podawania. Idealna do budowy kompletnych linii produkcyjnych.',
    specs: [
      { label: 'Konstrukcja', value: 'Wspornikowa (cantilever)' },
      { label: 'Podajniki', value: 'Wieloosiowe' },
      { label: 'Zastosowanie', value: 'Spożywcze i niespożywcze' },
    ],
    features: ['Sterowanie elektroniczne', 'Obsługa podajników wieloosiowych', 'Integracja z linią produkcyjną', 'Rama wspornikowa (cantilever)'],
    products: ['Pieczywo i ciastka', 'Czekolada', 'Nabiał', 'Owoce i warzywa', 'Produkty chemiczne'],
    imageSrc: '/images/machines/flowpack-gsp55s.jpg',
    imageAlt: 'GSP 55 S – maszyna flow pack z podajnikami wieloosiowymi',
  },
  {
    id: 'gsp55sbb',
    name: 'GSP 55 S BB',
    badge: 'Nowość',
    tagline: 'Folia podawana od dołu — dla produktów delikatnych i niestabilnych',
    description:
      'Wersja BB (z wł. bobina bassa) — rolka folii umieszczona jest na dole maszyny, a folia podawana od dołu. Warto ją rozważyć przy produktach delikatnych, niestabilnych lub trudnych do przesuwania popychaczami. Do 150 op./min, produkt 10–250 × 1–120 × 60–600 mm.',
    specs: [
      { label: 'Rolka folii', value: 'Na dole (BB — bobina bassa)' },
      { label: 'Wydajność', value: 'do 150 op./min' },
      { label: 'Zastosowanie', value: 'Spożywcze i niespożywcze' },
    ],
    features: ['Folia podawana od dołu (BB)', 'Produkty delikatne i niestabilne', 'Sterowanie elektroniczne', 'Folia 520 / 720 / 920 mm'],
    products: ['Wyroby cukiernicze', 'Kosmetyki', 'Produkty premium', 'Pieczywo', 'Sery'],
    imageSrc: '/images/machines/flowpack-gsp55sbb.jpg',
    imageAlt: 'GSP 55 S BB – flow pack z folią podawaną od dołu',
  },
  {
    id: 'gsp75s',
    name: 'GSP 75 S',
    badge: 'Najwyższa wydajność',
    tagline: 'Do 400 op./min — wytrzymała konstrukcja do linii automatycznych',
    description:
      'Najszybsza maszyna w ofercie GSP — do 400 op./min. Wytrzymała konstrukcja wspornikowa i stabilny odwijak folii są przeznaczone do pracy w liniach automatycznych, także przy intensywnej eksploatacji. Pochylane zespoły zgrzewu wzdłużnego pozwalają zgrzewać z dużą prędkością, również szczelnie (gazoszczelnie). Obsługa podajników wieloosiowych.',
    specs: [
      { label: 'Wydajność', value: 'do 400 op./min' },
      { label: 'Zgrzew podłużny', value: 'Pochylane zespoły zgrzewające' },
      { label: 'Podajniki', value: 'Wieloosiowe' },
    ],
    features: ['Do 400 op./min', 'Pochylane zespoły zgrzewu wzdłużnego', 'Praca w liniach automatycznych', 'Folie standardowe i gazoszczelne'],
    products: ['Ciastka i wafle', 'Batony i czekolada', 'Produkty FMCG', 'Artykuły przemysłowe'],
    imageSrc: '/images/machines/flowpack-gsp75s.jpg',
    imageAlt: 'GSP 75 S – flow pack wysoka wydajność i wytrzymałość',
  },
  {
    id: 'gsp65evo',
    name: 'GSP 65 EVO',
    href: '/maszyny/poziome-maszyny-pakujace/gsp-65-evo',
    badge: 'Atmosfera modyfikowana',
    tagline: 'MAP i box motion — przemysłowe pakowanie hermetyczne',
    description:
      'Przemysłowa maszyna do pakowania w atmosferze modyfikowanej (MAP) z elektronicznie sterowanym systemem szczęk box motion — szczęki poruszają się razem z folią, co wydłuża czas zgrzewu i sprzyja szczelnym zamknięciom, także przy zmiennej długości opakowania. Obsługuje duże, wysokie i łączone produkty. Dostępna w wersji z gazowaniem (N₂/CO₂) lub natryskiwaniem aromatu. Folia polietylenowa i poliolefinowa.',
    specs: [
      { label: 'Zgrzew poprzeczny', value: 'Box motion (elektroniczny)' },
      { label: 'Pakowanie', value: 'MAP (atmosfera modyfikowana)' },
      { label: 'Długość worka', value: 'Zmienna' },
    ],
    features: ['Box motion – elektroniczne szczęki zgrzewające', 'Gazowanie N₂/CO₂ (MAP)', 'Natrysk aromatu (opcja)', 'Hermetyczne opakowanie', 'Folia PE i poliolefinowa', 'Zmienna długość worka'],
    products: ['Świeże mięso i ryby', 'Sery i nabiał', 'Gotowe dania', 'Duże i wysokie produkty', 'Produkty łączone (in-chain)'],
    imageSrc: '/images/machines/flowpack-gsp65evo.jpg',
    imageAlt: 'GSP 65 EVO – pakowanie MAP box motion',
  },
  {
    id: 'gsp65evobb',
    name: 'GSP 65 EVO BB',
    badge: 'Nowość',
    tagline: 'MAP i box motion z folią podawaną od dołu',
    description:
      'Wersja BB modelu GSP 65 EVO — rolka folii na dole maszyny, folia podawana od dołu. Łączy pakowanie w atmosferze ochronnej (MAP) i zgrzew box motion — dla większych i delikatnych produktów, które wymagają odpowiedniego zgrzewania.',
    specs: [
      { label: 'Zgrzew poprzeczny', value: 'Box motion (elektroniczny)' },
      { label: 'Rolka folii', value: 'Na dole (BB — bobina bassa)' },
      { label: 'Pakowanie', value: 'MAP (atmosfera modyfikowana)' },
    ],
    features: ['Box motion – elektroniczne szczęki zgrzewające', 'Folia podawana od dołu (BB)', 'Gazowanie N₂/CO₂ (MAP)', 'Folia PE i poliolefinowa'],
    products: ['Świeże mięso i ryby', 'Sery premium', 'Gotowe dania', 'Produkty wysokie i duże'],
    imageSrc: '/images/machines/flowpack-gsp65evobb.jpg',
    imageAlt: 'GSP 65 EVO BB – MAP, box motion, folia podawana od dołu',
  },
  {
    id: 'gsp600trbbe',
    name: 'GSP 600 TR BB-E',
    tagline: 'MAP dla dużych produktów — box motion i folia podawana od dołu',
    description:
      'Przemysłowa maszyna do produktów o długim terminie przydatności, pakowanych z wtryskiem gazu (MAP). Wersja BB — rolka folii na dole, folia podawana od dołu — z elektronicznie sterowanym przesuwnym zgrzewem poprzecznym. Dla dużych, wysokich i zachodzących na siebie produktów, do 80/90 op./min. Folie polietylenowe i poliolefinowe.',
    specs: [
      { label: 'Rolka folii', value: 'Na dole (BB — bobina bassa)' },
      { label: 'Pakowanie', value: 'MAP (atmosfera modyfikowana)' },
      { label: 'Zgrzew poprzeczny', value: 'Box motion (elektroniczny)' },
    ],
    features: ['Folia podawana od dołu (BB)', 'Box motion – elektroniczny zgrzew poprzeczny', 'Gazowanie (MAP)', 'Produkt do 280 × 200 × 2000 mm', 'Folia PE i poliolefinowa'],
    products: ['Duże kawałki mięsa', 'Ryby i owoce morza', 'Wysokie i duże produkty MAP', 'Produkty łączone (in-chain)'],
    imageSrc: '/images/machines/flowpack-gsp600trbbe.jpg',
    imageAlt: 'GSP 600 TR BB-E – MAP dla dużych produktów',
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

// ─── Porównanie i dobór (źródło: karty GSP; dane katalogowe, nie gwarancja) ───
const COMPARE = [
  { model: 'GSP 45 S', href: '/maszyny/poziome-maszyny-pakujace/gsp-45-s', speed: 'do 150', size: '20–200 × 1–100 × 50–600', feature: 'Podstawowa, kompaktowa maszyna', when: 'Proste pakowanie pojedynczych produktów' },
  { model: 'GSP 50 S', href: '/maszyny/poziome-maszyny-pakujace/gsp-50-s', speed: 'do 150', size: '10–250 × 1–120 × do 600', feature: 'Większy zakres wymiarów niż 45 S', when: 'Uniwersalne zastosowania spożywcze i przemysłowe' },
  { model: 'GSP 55 S', href: '/maszyny/poziome-maszyny-pakujace/gsp-55-s', speed: 'do 200', size: '10–250 × 1–120 × 60–600', feature: 'Większa wydajność i możliwości doposażenia', when: 'Linie automatyczne, ciastka, batony, wypieki' },
  { model: 'GSP 55 S BB', href: null, speed: 'do 150', size: '10–250 × 1–120 × 60–600', feature: 'Folia podawana od dołu', when: 'Produkty delikatne, niestabilne, trudne do popychania' },
  { model: 'GSP 65 EVO', href: '/maszyny/poziome-maszyny-pakujace/gsp-65-evo', speed: 'do 60/70', size: '10–280 × 1–200 × 50–2000', feature: 'Box motion — dłuższy zgrzew poprzeczny', when: 'Duże produkty, MAP, folie PE i poliolefinowe' },
  { model: 'GSP 65 EVO BB', href: null, speed: 'do 60/70', size: '10–280 × 1–200 × 50–2000', feature: 'Box motion + folia od dołu', when: 'Większe i delikatne produkty wymagające dobrego zgrzewu' },
  { model: 'GSP 75 S', href: null, speed: 'do 400', size: '10–250 × 1–120 × 60–600', feature: 'Najwyższa wydajność', when: 'Szybkie linie z automatycznym podawaniem' },
  { model: 'GSP 600 EVO', href: null, speed: 'do 80/90', size: '10–280 × 1–200 × 50–2000', feature: 'Duże produkty, box motion', when: 'Długie produkty, MAP, wymagające folie' },
  { model: 'GSP 600 TR BB-E', href: null, speed: 'do 80/90', size: '10–280 × 1–200 × 50–2000', feature: 'Box motion + folia od dołu', when: 'Duże produkty wymagające szczególnego transportu' },
];

const QUICK_SELECT = [
  { need: 'Standardowy, pojedynczy produkt', pick: 'GSP 45 S lub 50 S' },
  { need: 'Wysoka wydajność', pick: 'GSP 55 S lub 75 S' },
  { need: 'Produkt delikatny lub niestabilny', pick: 'GSP 55 S BB' },
  { need: 'Duży, długi lub wysoki produkt', pick: 'GSP 65 EVO lub 600 EVO' },
  { need: 'Duży i delikatny produkt', pick: 'GSP 65 EVO BB lub 600 TR BB-E' },
];

const TECH_DIFFS = [
  { title: 'Standard czy BB?', desc: 'BB (z wł. bobina bassa) to wersja z rolką folii na dole — folia podawana jest od dołu. Warto ją rozważyć przy produktach, które trudno przesuwać popychaczami lub które łatwo się deformują. Wybór zależy od prób i konstrukcji podajnika.' },
  { title: 'Szczęki obrotowe czy box motion?', desc: 'W standardowych aplikacjach zgrzew poprzeczny wykonują szczęki obrotowe. W box motion szczęki poruszają się razem z folią, co wydłuża czas kontaktu — to ważne przy niektórych foliach PE, wysokich produktach i opakowaniach wymagających szczelniejszego zgrzewu.' },
  { title: 'GSP 55 S czy GSP 65 EVO?', desc: '55 S ma wyższą katalogową wydajność maksymalną, ale 65 EVO obsługuje większe produkty i zastosowania wymagające dłuższego zgrzewania. Modelu nie wybieramy wyłącznie na podstawie liczby opakowań na minutę.' },
];

const OPTIONS = [
  { name: 'Automatyczne podawanie produktu', why: 'Mniej ręcznej obsługi; możliwa integracja z cobotem lub innym systemem.' },
  { name: 'Fotokomórka znacznika nadruku', why: 'Pozycjonowanie folii z nadrukiem.' },
  { name: 'No product – no bag', why: 'Ogranicza tworzenie pustych opakowań przy braku produktu.' },
  { name: 'Zestaw do folii PE', why: 'Dostosowanie zgrzewania do polietylenu.' },
  { name: 'Pakowanie w atmosferze ochronnej (MAP)', why: 'Wprowadzenie gazu ochronnego do opakowania.' },
  { name: 'Wykonywanie zakładek bocznych', why: 'Zmiana kształtu opakowania.' },
  { name: 'Drukarka', why: 'Nanoszenie daty, partii lub innych oznaczeń.' },
  { name: 'Automatyczne łączenie folii', why: 'Krótszy przestój przy końcu rolki.' },
  { name: 'Czujnik nieprawidłowego położenia produktu', why: 'Mniejsze ryzyko zgrzania folii na produkcie.' },
];

const INQUIRY_QUESTIONS = [
  { q: 'Co pakujemy?', hint: 'rodzaj produktu, wymiary, masa, kruchość, sposób układania' },
  { q: 'Ile sztuk na minutę?', hint: 'wymagana wydajność i liczba produktów w opakowaniu' },
  { q: 'Jaka folia?', hint: 'rodzaj, grubość, szerokość, nadruk, ewentualnie MAP' },
  { q: 'Jak produkt trafia do maszyny?', hint: 'ręcznie, z przenośnika, w stosach, z kilku torów czy przez system automatyczny' },
  { q: 'Co dzieje się z gotowym opakowaniem?', hint: 'kontrola, transport, kartonowanie, paletyzacja' },
];

const BEYOND_MACHINE = [
  { label: 'Robotyzacja i coboty', href: '/maszyny/robotyzacja-pakowania' },
  { label: 'Coboty w akcji', href: '/coboty-w-akcji' },
  { label: 'Transport i koniec linii', href: '/maszyny/transport-i-koniec-linii' },
  { label: 'Paletyzacja', href: '/maszyny/paletyzacja' },
];

const PAGE_TOC = [
  { label: 'Jak działa', href: '#jak-dziala' },
  { label: 'Modele', href: '#modele' },
  { label: 'Porównanie i dobór', href: '#porownanie' },
  { label: 'BB i box motion', href: '#technologia' },
  { label: 'Opcje', href: '#opcje' },
  { label: 'Zapytanie', href: '#zapytanie' },
  { label: 'FAQ', href: '#faq' },
];

// FAQ — treść widoczna na stronie i w schemacie FAQPage (musi być identyczna)
const FAQ = [
  { q: 'Ile opakowań na minutę zrobi maszyna flow pack?', a: 'Katalogowo od 60/70 op./min w modelach z box motion (GSP 65 EVO) do 400 op./min w GSP 75 S. To wartości maksymalne — realna wydajność zależy od produktu, folii, sposobu podawania i odbioru opakowań. Potwierdzamy ją po doborze i próbach.' },
  { q: 'Czym różni się wersja BB od standardowej?', a: 'BB (z wł. bobina bassa) oznacza rolkę folii na dole — folia jest podawana od dołu. Taką wersję warto rozważyć przy produktach delikatnych, niestabilnych lub trudnych do przesuwania popychaczami. O wyborze decydują próby i konstrukcja podajnika.' },
  { q: 'Co to jest box motion?', a: 'To system zgrzewu poprzecznego, w którym szczęki poruszają się razem z folią, dzięki czemu dłużej się z nią stykają. Ma znaczenie przy foliach PE i poliolefinowych, wysokich produktach i opakowaniach wymagających szczelnego zgrzewu, np. w atmosferze ochronnej. Standardowe modele mają szczęki obrotowe.' },
  { q: 'Czy mogę pakować w atmosferze ochronnej (MAP)?', a: 'Tak. Modele EVO — GSP 65 EVO, 600 EVO i 600 TR BB-E — są przeznaczone do produktów o długim terminie przydatności i pakowania w atmosferze modyfikowanej z wtryskiem gazu. MAP wymaga też odpowiedniej folii i szczelnego zgrzewu.' },
  { q: 'Jakie folie obsługuje maszyna flow pack?', a: 'Folie termozgrzewalne i laminowane, cold-seal, a w wybranych modelach także polietylen (PE), folie poliolefinowe i polipropylen CAST. Do folii PE stosuje się dedykowany zestaw zgrzewający. Zgodność folii potwierdzamy dla konkretnego modelu.' },
  { q: 'GSP 55 S czy GSP 65 EVO?', a: 'GSP 55 S ma wyższą katalogową wydajność (do 200 op./min), ale GSP 65 EVO obsługuje większe produkty (do 280 × 200 × 2000 mm) i zastosowania wymagające dłuższego zgrzewania, np. MAP i folie PE. Model wybieramy według produktu i folii, nie tylko liczby opakowań na minutę.' },
  { q: 'Czy produkt może być podawany do maszyny automatycznie, np. przez cobota?', a: 'Tak. Oprócz maszyny GSP projektujemy automatyczne podawanie produktów — także z użyciem cobotów — a za maszyną odbiór gotowych opakowań, kartonowanie i paletyzację.' },
  { q: 'Co przygotować do zapytania ofertowego?', a: 'Rodzaj, wymiary, masę i kruchość produktu, wymaganą wydajność, rodzaj folii (grubość, szerokość, nadruk, ewentualnie MAP), sposób podawania produktu do maszyny i informację, co dzieje się z gotowym opakowaniem.' },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'FAQPage',
      mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MadejPak', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Maszyny', item: `${SITE_URL}/maszyny` },
        { '@type': 'ListItem', position: 3, name: 'Poziome maszyny pakujące', item: `${SITE_URL}/maszyny/poziome-maszyny-pakujace` },
      ],
    },
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function PoziomeMaszynyPage() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── 1. HERO ────────────────────────────────────────────────── */}
      <Box component="section" sx={{ position: 'relative', overflow: 'hidden', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 10, md: 14 } }}>
        {/* Zdjęcie GSP po prawej */}
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
            sizes="50vw" style={{ objectFit: 'cover', opacity: 0.45 }} priority />
        </Box>

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 380px' }, gap: { xs: 6, lg: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                GSP – Grupa Tecnopack — flow pack
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
              bgcolor: '#fff',
              border: `1px solid ${BORDER}`, borderRadius: '4px',
            }}>
              <StatChip value="400" label="opakowań/min – max wydajność" />
              <StatChip value="8" label="modeli w ofercie GSP" />
              <StatChip value="MAP" label="pakowanie w atmosferze modyfikowanej" />
              <StatChip value="920mm" label="max szerokość folii" />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Na tej stronie ── */}
      <Box component="nav" aria-label="Na tej stronie" sx={{ borderBottom: `1px solid ${BORDER}`, py: 2 }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, overflowX: 'auto', pb: 0.25, scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none' } }}>
            <Typography sx={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--dim-45)', whiteSpace: 'nowrap', mr: 1 }}>
              Na tej stronie
            </Typography>
            {PAGE_TOC.map((t) => (
              <Box key={t.href} component="a" href={t.href} sx={{ whiteSpace: 'nowrap', px: 1.5, py: 0.6, border: `1px solid ${BORDER}`, borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                {t.label}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Co to jest i do czego służy ── */}
      <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 } }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Czym jest ta maszyna
              </Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3, color: 'var(--text)' }}>
                Masz produkt, który chcesz zapakować w folię — szczelnie, estetycznie i szybko?
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8 }}>
                Pozioma maszyna pakująca (flow pack) pobiera produkt z podajnika, owija go folią z rolki, formuje opakowanie i zgrzewa z obu stron — wszystko w jednym ruchu taśmy. Na wyjściu masz gotowe, szczelne opakowania foliowe, jedno za drugim, w stałym tempie.
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Kiedy to rozwiązanie jest dla Ciebie
              </Typography>
              {[
                'Twój produkt ma stały kształt i można go podać na taśmę — baton, bułka, ser, wyrób cukierniczy, artykuł OTC, element przemysłowy.',
                'Chcesz estetyczne opakowanie foliowe — maszyna owija produkt szczelnie z każdej strony.',
                'Pakujesz ręcznie i chcesz to zastąpić automatem — jedna maszyna zastępuje kilka stanowisk.',
                'Zależy Ci na wydajności — flow pack może pakować setki sztuk na minutę.',
              ].map((text) => (
                <Box key={text} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 2 }}>
                  <Box sx={{ width: 5, height: 5, borderRadius: '50%', bgcolor: ACCENT, mt: '8px', flexShrink: 0 }} />
                  <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75 }}>{text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── 2. JAK DZIAŁA ─────────────────────────────────────────── */}
      <Box id="jak-dziala" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
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

      {/* ── WIDEO ─────────────────────────────────────────────────── */}
      <Box component="section" sx={{ bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em',
            textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Maszyny w akcji
          </Typography>
          <Typography component="h2" sx={{
            fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 800,
            letterSpacing: '-0.02em', color: 'var(--text)', mb: { xs: 6, md: 8 },
          }}>
            Zobacz jak działają maszyny GSP
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.5 }}>
            {['KwhZzYt-AlE', 'Ax-48tS95z8'].map(id => (
              <Box key={id} sx={{
                position: 'relative', paddingTop: '56.25%',
                borderRadius: '4px', overflow: 'hidden',
                border: `1px solid ${BORDER}`, bgcolor: '#000',
              }}>
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${id}`}
                  title={`Maszyna pakująca flow pack GSP – ${id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                />
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
            Maszyny GSP – Grupa Tecnopack w ofercie MadejPak
          </Typography>
          <Stack spacing={3}>
            {MODELS.map((model) => (
              <ModelCard key={model.id} model={model} />
            ))}
          </Stack>
        </Container>
      </Box>

      <Box id="zapytaj" sx={{ scrollMarginTop: '80px' }}>
        <LeadForm />
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

      {/* ── PORÓWNANIE I DOBÓR ──────────────────────────────────────── */}
      <Box id="porownanie" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 760 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Porównanie modeli</Typography>
            <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Którą maszynę GSP wybrać?</Typography>
            <Typography sx={{ fontSize: '0.92rem', color: TEXT_DIM, lineHeight: 1.75, mt: 2 }}>
              Zestawienie całej rodziny poziomych maszyn GSP. Wymiary dotyczą produktu (szerokość × wysokość × długość),
              a nie gotowego opakowania.
            </Typography>
          </Box>
          <Box sx={{ overflowX: 'auto', border: `1px solid ${BORDER}`, borderRadius: '4px', bgcolor: BG_CARD }}>
            <Box component="table" sx={{ width: '100%', minWidth: 860, borderCollapse: 'collapse', '& th': { textAlign: 'left', px: 2.5, py: 1.5, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: TEXT_DIM, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }, '& td': { px: 2.5, py: 1.75, fontSize: '0.84rem', lineHeight: 1.5, borderBottom: `1px solid ${BORDER}`, verticalAlign: 'top' }, '& tr:last-of-type td': { borderBottom: 'none' } }}>
              <thead>
                <tr><th>Model</th><th>Wydajność maks. (op./min)</th><th>Produkt [mm]</th><th>Najważniejsza cecha</th><th>Kiedy rozważać</th></tr>
              </thead>
              <tbody>
                {COMPARE.map((m) => (
                  <tr key={m.model}>
                    <Box component="td" sx={{ fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap' }}>
                      {m.href ? (
                        <Box component={Link} href={m.href} sx={{ color: 'inherit', textDecoration: 'none', borderBottom: `1px solid ${ACCENT}`, '&:hover': { color: ACCENT } }}>{m.model}</Box>
                      ) : m.model}
                    </Box>
                    <Box component="td" sx={{ fontWeight: 700, color: ACCENT, whiteSpace: 'nowrap' }}>{m.speed}</Box>
                    <Box component="td" sx={{ color: 'var(--dim-75)', whiteSpace: 'nowrap' }}>{m.size}</Box>
                    <Box component="td" sx={{ color: 'var(--dim-75)' }}>{m.feature}</Box>
                    <Box component="td" sx={{ color: TEXT_DIM }}>{m.when}</Box>
                  </tr>
                ))}
              </tbody>
            </Box>
          </Box>
          <Typography sx={{ fontSize: '0.75rem', color: 'var(--dim-55)', lineHeight: 1.6, mt: 1.5, maxWidth: 900 }}>
            Wydajności to katalogowe wartości maksymalne, nie gwarancja dla konkretnego produktu. Dla modeli EVO producent podaje
            wydajność jako „60/70” lub „80/90” — wartość dla Twojego produktu potwierdzamy po doborze. Wszystkie modele wymagają
            sprężonego powietrza 7 bar (suche, filtrowane).
          </Typography>

          {/* Dobór w 30 sekund */}
          <Box sx={{ mt: { xs: 6, md: 8 }, display: 'grid', gridTemplateColumns: { xs: '1fr', md: '300px 1fr' }, gap: { xs: 3, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography component="h3" sx={{ fontSize: { xs: '1.15rem', md: '1.3rem' }, fontWeight: 800, letterSpacing: '-0.01em', color: 'var(--text)', mb: 1.25 }}>
                Dobór w 30 sekund
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                Wstępny kierunek według głównego wymagania produktu. Nie zastępuje weryfikacji parametrów i testów pakowania.
              </Typography>
            </Box>
            <Box sx={{ border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden' }}>
              {QUICK_SELECT.map((r, idx) => (
                <Box key={r.need} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1.2fr 1fr' }, gap: { xs: 0.5, sm: 3 }, px: 3, py: 1.75, bgcolor: BG_CARD, borderBottom: idx < QUICK_SELECT.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
                  <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM }}>{r.need}</Typography>
                  <Typography sx={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text)' }}>→ {r.pick}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── RÓŻNICE TECHNOLOGICZNE ──────────────────────────────────── */}
      <Box id="technologia" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ mb: { xs: 4, md: 5 }, maxWidth: 760 }}>
            <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Różnice technologiczne</Typography>
            <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>BB, box motion i dobór modelu — co warto wiedzieć</Typography>
          </Box>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.5 }}>
            {TECH_DIFFS.map((t) => (
              <Box key={t.title} sx={{ p: { xs: 3, md: 3.5 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Typography component="h3" sx={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text)', mb: 1.25 }}>{t.title}</Typography>
                <Typography sx={{ fontSize: '0.86rem', color: TEXT_DIM, lineHeight: 1.75 }}>{t.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── OPCJE ───────────────────────────────────────────────────── */}
      <Box id="opcje" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '300px 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Wyposażenie</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Najczęściej wybierane opcje</Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.7, mt: 2 }}>
                Dostępność każdej opcji sprawdzamy dla wybranego modelu i wariantu.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 2 }}>
              {OPTIONS.map((o) => (
                <Box key={o.name} sx={{ p: 2.5, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography component="h3" sx={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)', mb: 0.75, lineHeight: 1.35 }}>{o.name}</Typography>
                  <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.6 }}>{o.why}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── ZAPYTANIE + WIĘCEJ NIŻ MASZYNA ──────────────────────────── */}
      <Box id="zapytanie" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>Zapytanie ofertowe</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Pięć pytań, od których zaczynamy</Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75, mt: 2, mb: 3.5 }}>
                Maszynę dobieramy do produktu, folii i całego procesu. Z tymi informacjami szybciej przygotujemy konkretną propozycję.
              </Typography>
              <Box component="ol" sx={{ m: 0, p: 0, listStyle: 'none', display: 'grid', gap: 1.75, mb: 3.5 }}>
                {INQUIRY_QUESTIONS.map((item, i) => (
                  <Box key={item.q} component="li" sx={{ display: 'flex', gap: 2, alignItems: 'baseline' }}>
                    <Typography sx={{ fontSize: '0.85rem', fontWeight: 800, color: ACCENT, minWidth: 18 }}>{i + 1}.</Typography>
                    <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: TEXT_DIM }}>
                      <Box component="span" sx={{ fontWeight: 700, color: 'var(--text)' }}>{item.q}</Box> — {item.hint}
                    </Typography>
                  </Box>
                ))}
              </Box>
              <Box component="a" href="#zapytaj" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', '&:hover': { bgcolor: '#D45509' } }}>
                Przejdź do formularza →
              </Box>
            </Box>
            <Box sx={{ p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: '4px' }}>
              <Typography component="h3" sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)', mb: 1.25 }}>Więcej niż maszyna</Typography>
              <Typography sx={{ fontSize: '0.88rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2.5 }}>
                W ofercie uwzględniamy nie tylko maszynę GSP, ale też automatyczne podawanie produktów — również z użyciem
                cobotów — odbiór gotowych opakowań, kartonowanie i paletyzację. Jeden partner za całą linię.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {BEYOND_MACHINE.map((b) => (
                  <Box key={b.href} component={Link} href={b.href} sx={{ px: 1.5, py: 0.6, border: `1px solid ${BORDER}`, borderRadius: '100px', fontSize: '0.78rem', fontWeight: 600, color: 'var(--dim-75)', textDecoration: 'none', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                    {b.label} →
                  </Box>
                ))}
              </Box>
            </Box>
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
                  GSP – Grupa Tecnopack
                </Typography>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em',
                  textTransform: 'uppercase', color: 'var(--dim-28)' }}>
                  Włochy
                </Typography>
              </Box>
              <Typography sx={{ fontSize: '0.875rem', color: TEXT_DIM, lineHeight: 1.7, mb: 3 }}>
                GSP (General System Pack) to włoski producent poziomych maszyn pakujących (flow wrappers)
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
                  { label: 'Dłuższy termin ważności', val: 'GSP 65 EVO / GSP 600 TR BB-E (MAP)' },
                  { label: 'Produkty delikatne i niestabilne', val: 'GSP 55 S BB / GSP 65 EVO BB' },
                  { label: 'Wysoka wydajność linii', val: 'GSP 75 S (do 400 op./min)' },
                  { label: 'Wejście w automatyzację', val: 'GSP 45 S / GSP 50 S' },
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

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <Box id="faq" component="section" sx={{ scrollMarginTop: '80px', bgcolor: BG, borderBottom: `1px solid ${BORDER}`, py: { xs: 9, md: 12 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '300px 1fr' }, gap: { xs: 4, md: 8 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>FAQ</Typography>
              <Typography component="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, color: 'var(--text)' }}>Najczęstsze pytania o maszyny flow pack</Typography>
            </Box>
            <Box>
              {FAQ.map((f, idx) => (
                <Box key={f.q} component="details" sx={{ borderTop: idx === 0 ? `1px solid ${BORDER}` : 'none', borderBottom: `1px solid ${BORDER}`, '& summary': { listStyle: 'none', cursor: 'pointer' }, '& summary::-webkit-details-marker': { display: 'none' }, '&[open] .faq-icon': { transform: 'rotate(45deg)' } }}>
                  <Box component="summary" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 3, py: 2.25 }}>
                    <Typography component="h3" sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.4 }}>{f.q}</Typography>
                    <Box className="faq-icon" aria-hidden="true" sx={{ color: ACCENT, fontSize: '1.3rem', lineHeight: 1, flexShrink: 0, transition: 'transform 0.2s ease' }}>+</Box>
                  </Box>
                  <Typography sx={{ fontSize: '0.88rem', lineHeight: 1.75, color: TEXT_DIM, pb: 2.5, pr: { md: 6 } }}>{f.a}</Typography>
                </Box>
              ))}
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
                Pomożemy dobrać właściwy model GSP do produktu, wydajności i wymagań pakowania w Twoim zakładzie.
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
