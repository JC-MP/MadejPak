import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Wagi wielogłowicowe i dozowanie | MadejPak',
  description:
    'Wagi wielogłowicowe i systemy dozowania do linii pakujących — ważenie wagowe i sztukowe, integracja z maszynami VFFS i pakowaczkami tacek. Concetti, Essegi.',
  alternates: { canonical: `${SITE_URL}/maszyny/wazenie-i-dozowanie` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/wazenie-i-dozowanie`,
    title:       'Wagi wielogłowicowe i dozowanie | MadejPak',
    description: 'Wagi wielogłowicowe i systemy dozowania do linii pakujących — ważenie wagowe i sztukowe, integracja z maszynami VFFS i pakowaczkami tacek. Concetti, Essegi.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Wagi i dozowanie – MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
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

// ─── Data ────────────────────────────────────────────────────────────────────

const FEATURES = [
  { title: 'Ważenie według masy i liczby sztuk',    desc: 'Porcjowanie w jednym cyklu — wagowe lub zliczanie sztuk. Dokładność powtarzalna niezależnie od tempa linii.' },
  { title: 'Szeroki zakres produktów',              desc: 'Produkty sypkie, ziarniste, granulowane, kruche, lepkie i śliskie — bez konieczności zmiany urządzenia.' },
  { title: 'Ograniczone uszkodzenia',               desc: 'Konstrukcja misek i kanałów zminimalizowana pod kątem produktów łamliwych i kruchych — herbatniki, chipsy, wafle.' },
  { title: 'Integracja z maszyną pakującą',         desc: 'Waga montowana nad maszyną VFFS lub pakowaczką tacek. Bezpośrednie dozowanie do opakowania bez ręcznych operacji.' },
  { title: 'Pakowanie do woreczków i na tacki',     desc: 'Dostosowane do różnych typów opakowań jednostkowych — woreczki foliowe, tacki MAP, opakowania luzem.' },
];

const APPLICATIONS = [
  { sector: 'Spożywcza',        items: ['Świeże owoce i warzywa', 'Mrożonki', 'Płatki śniadaniowe', 'Nasiona i orzechy'] },
  { sector: 'Słodycze i snacki', items: ['Ciastka i herbatniki', 'Chipsy i wafle', 'Słodycze i żelki', 'Krakersy i paluszki'] },
  { sector: 'Karma i granulaty', items: ['Karma dla zwierząt', 'Pellet i granulat', 'Nawóz granulowany', 'Drobne elementy montażowe'] },
];

const SCALE_TYPES = [
  {
    name: 'Waga wielogłowicowa',
    img: '/images/machines/waga-wieloglowicowa.png',
    alt: 'Waga wielogłowicowa do linii pakującej',
    desc: 'Radialny układ misek — każda niezależnie waży porcję produktu. System wybiera kombinację misek, której suma jest najbliższa zadanej masie docelowej. Wysoka dokładność przy dużych prędkościach cyklu.',
    use: 'Produkty sypkie, ziarniste, granulowane, kruche i lepkie — kawa, orzechy, chipsy, mrożonki, karma, nasiona. Integracja z VFFS i pakowaczkami tacek.',
  },
  {
    name: 'Waga ryflowana',
    img: '/images/machines/waga_ryflowana',
    alt: 'Waga ryflowana do produktów kruchych',
    desc: 'Taca zbierająca z ryflowaną (rowkowaną) powierzchnią ogranicza przesuwanie się produktu podczas ważenia. Konstrukcja dedykowana dla produktów o tendencji do zsuwania się lub kruchych.',
    use: 'Herbatniki, ciastka, wafle, produkty w płatkach — wszędzie, gdzie kształt i kruchość produktu wyklucza standardowe miski.',
  },
  {
    name: 'Waga B/N-K pojedyncza',
    img: '/images/machines/waga-BN-K.jpg',
    alt: 'Waga B/N-K pojedyncza',
    desc: 'Jednostkowy modułowy system wagowy z jednym kanałem ważenia liniowego. Kompaktowa konstrukcja umożliwia integrację bezpośrednio nad wlotem maszyny pakującej.',
    use: 'Linie o niższych wydajnościach, produkty sypkie jednorodne, instalacje gdzie wystarczy jeden kanał dozujący.',
  },
  {
    name: 'Waga B/N-K podwójna',
    img: '/images/machines/waga-bn-k-2.jpg',
    alt: 'Waga B/N-K podwójna dwukanałowa',
    desc: 'Konfiguracja dwukanałowa na wspólnej podstawie — dwie niezależne głowice ważące zasilające jedną maszynę lub dwa równoległe tory pakowania.',
    use: 'Linie o wyższej wydajności wymagające podwójnego toru dozowania lub naprzemiennego zasilania dla wyrównania tempa linii.',
  },
];

const DOSING_TYPES = [
  { label: 'Wagowe wielogłowicowe', desc: 'Główna metoda dla nieregularnych kształtów i produktów wymagających precyzji masowej. Wiele głowic pracuje równocześnie — wyniki sumowane są do zadanej masy docelowej.' },
  { label: 'Objętościowe',          desc: 'Dozowanie kubkowe lub objętościowe stosowane dla produktów jednorodnych o stabilnej gęstości. Niższy koszt systemu przy akceptowalnej dokładności masowej.' },
  { label: 'Liniowe',               desc: 'Systemy ważenia liniowego dla produktów pakowanych w ciągłym strumieniu. Stosowane m.in. przy pakowaniu na tacki i do pojemników.' },
];

const PARTNERS = [
  {
    name: 'Concetti',
    origin: 'Włochy',
    href: 'https://www.concetti.com',
    desc: 'Producent kompletnych linii ważenia, pakowania i paletyzacji dla produktów sypkich (bulk solid products). Systemy Concetti obejmują ważenie wielogłowicowe i objętościowe zintegrowane z maszynami workującymi i pakującymi.',
  },
  {
    name: 'Essegi',
    origin: 'Włochy',
    href: 'https://www.essegi.com',
    desc: 'Producent pionowych maszyn pakujących VFFS z wbudowanymi lub integrowanymi systemami dozowania. Essegi oferuje rozwiązania z kubkowym dozownikiem objętościowym, wagowymi systemami vibro-kanałowymi i pionowymi dozownikami ślimakowymi — dopasowanymi do charakterystyki produktu.',
  },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function WazenieIDozowaniePage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                Przygotowanie produktu
              </Typography>
              <Typography variant="h1"
                sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3rem' }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--dim-85)' }}>
                Wagi wielogłowicowe<br />i systemy dozowania
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
                Urządzenia do precyzyjnego ważenia i porcjowania produktów według masy lub liczby sztuk.
                Integrowane bezpośrednio z maszynami pakującymi — tworzą zamknięty cykl: ważenie, dozowanie, pakowanie.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box component={Link} href="/kontakt"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', '&:hover': { bgcolor: '#D45509' } }}>
                  Zapytaj o wdrożenie
                  <ArrowRight />
                </Box>
                <Box component={Link} href="/maszyny/partnerzy"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                  Wszystkie maszyny
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Cechy i integracja ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zasada działania
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Jak działają wagi wielogłowicowe
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                Produkt podawany jest na stożek centralny i rozdzielany do misek radialnych. System dobiera kombinację misek, której suma jest najbliższa zadanej masie docelowej. Porcja trafia grawitacyjnie do opakowania poniżej.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {FEATURES.map((f, i) => (
                <Box key={f.title}
                  sx={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 3, py: 2.5, borderBottom: i < FEATURES.length - 1 ? `1px solid ${BORDER}` : 'none', alignItems: 'start' }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.35 }}>
                    {f.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.7 }}>
                    {f.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Typy wag ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Typy wag
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 1.5 }}>
            Typy wag i systemów dozowania
          </Typography>
          <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.75, mb: { xs: 5, md: 7 }, maxWidth: 600 }}>
            Dobór systemu ważenia zależy od charakterystyki produktu — kształtu, masy, lepkości i wrażliwości mechanicznej. Poniżej typy urządzeń, które integrujemy z maszynami pakującymi.
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3 }}>
            {SCALE_TYPES.map((scale) => (
              <Box key={scale.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                {/* Image */}
                <Box sx={{ bgcolor: 'var(--bg-alt)', borderBottom: `1px solid ${BORDER}`, height: 220, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box component="img" src={scale.img} alt={scale.alt}
                    sx={{ width: '100%', height: '100%', objectFit: 'contain', p: 2 }} />
                </Box>
                {/* Content */}
                <Box sx={{ p: { xs: 3, md: 3.5 }, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                  <Typography sx={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                    {scale.name}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                    {scale.desc}
                  </Typography>
                  <Box sx={{ pt: 1, borderTop: `1px solid ${BORDER}` }}>
                    <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 0.75 }}>
                      Zastosowanie
                    </Typography>
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                      {scale.use}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Typy dozowania ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Metody dozowania
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 4, md: 6 } }}>
            Typy systemów ważenia i dozowania
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 2.5 }}>
            {DOSING_TYPES.map((d) => (
              <Box key={d.label}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Typography sx={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', mb: 1.5 }}>{d.label}</Typography>
                <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>{d.desc}</Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Zastosowania ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zastosowania
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 } }}>
            Produkty i branże
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
            {APPLICATIONS.map((a) => (
              <Box key={a.sector}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  {a.sector}
                </Typography>
                {a.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.55 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Integracja z linią ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Integracja z linią
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2.5 }}>
                Ważenie jako element procesu pakowania
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 2 }}>
                Waga wielogłowicowa montowana jest nad maszyną pakującą i zasila ją bezpośrednio porcjami o zadanej masie lub liczbie sztuk. Połączenie z maszyną VFFS lub pakowaczką tacek tworzy zamknięty cykl — ważenie, dozowanie, pakowanie — bez pośrednich operacji manualnych.
              </Typography>
              <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8 }}>
                MadejPak dobiera i integruje systemy ważenia z maszynami pakującymi jako element kompletnej linii. Synchronizacja tempa ważenia z tempem maszyny odbywa się przez wspólne sterowanie lub sygnały I/O.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { label: 'Z maszyną VFFS',         desc: 'Waga nad maszyną VFFS dostarcza porcje wagowe bezpośrednio do formowanego woreczka. Stosowane dla produktów sypkich, granulowanych i ziarnistych.' },
                { label: 'Z pakowaczką tacek',      desc: 'Dozowanie na tacki MAP lub do pojemników. Ważenie kontroluje masę porcji, maszyna zamyka i uszczelnia opakowanie.' },
                { label: 'Z maszyną workującą',     desc: 'Systemy Concetti łączą ważenie i workowanie w jedną linię — dla produktów bulk i sypkich w workach otwartych lub zaworowych.' },
                { label: 'Z transportem i podajnikiem', desc: 'Podajniki wibracyjne lub taśmowe doprowadzają produkt do wagi. Wyjście z wagi trafia grawitacyjnie lub przez rynnę do opakowania.' },
              ].map((item) => (
                <Box key={item.label}
                  sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 2.5, md: 3 } }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 0.75 }}>{item.label}</Typography>
                  <Typography sx={{ fontSize: '0.83rem', color: TEXT_DIM, lineHeight: 1.65 }}>{item.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Partnerzy ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Partnerzy technologiczni
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 } }}>
            Producenci systemów ważenia
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 3 }}>
            {PARTNERS.map((p) => (
              <Box key={p.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px', p: { xs: 3, md: 3.5 } }}>
                <Box sx={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 2, mb: 1.5, flexWrap: 'wrap' }}>
                  <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.01em' }}>{p.name}</Typography>
                  <Typography sx={{ fontSize: '0.7rem', color: 'var(--dim-35)', textTransform: 'uppercase', letterSpacing: '0.1em', flexShrink: 0 }}>{p.origin}</Typography>
                </Box>
                <Typography sx={{ fontSize: '0.87rem', color: TEXT_DIM, lineHeight: 1.75, mb: 2 }}>{p.desc}</Typography>
                <Box component="a" href={p.href} target="_blank" rel="noopener noreferrer"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, fontSize: '0.78rem', fontWeight: 600, color: ACCENT, textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
                  Strona producenta <ArrowRight />
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── CTA ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr auto' }, gap: { xs: 4, md: 8 }, alignItems: 'center' }}>
            <Box>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: 2 }}>
                Dobierzemy system ważenia do Twojego procesu
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, maxWidth: 500 }}>
                Rodzaj wagi i metoda dozowania zależą od charakterystyki produktu, wymaganej dokładności i tempa linii. Opisz nam aplikację — zaproponujemy rozwiązanie dopasowane do warunków zakładu.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { bgcolor: '#D45509' } }}>
                Zapytaj o wdrożenie <ArrowRight />
              </Box>
              <Box component={Link} href="/maszyny/pionowe-maszyny-pakujace"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                Maszyny VFFS <ArrowRight />
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
            <span>Ważenie i dozowanie</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
