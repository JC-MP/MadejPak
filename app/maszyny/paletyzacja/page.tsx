import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Systemy paletyzacji – z robotem i warstwowa | MadejPak',
  description:
    'MadejPak dobiera i integruje systemy paletyzacji dla linii pakujących — z robotem, warstwowe i cobotowe. Robot do paletyzacji worków, kartonów i opakowań zbiorczych.',
  keywords: [
    'systemy paletyzacji', 'paletyzacja z robotem', 'robot do paletyzacji',
    'robot do paletyzacji worków', 'paletyzacja warstwowa', 'automatyczna paletyzacja',
    'paletyzacja kartonów', 'koniec linii pakującej',
  ],
  alternates: { canonical: `${SITE_URL}/maszyny/paletyzacja` },
  openGraph: {
    url:         `${SITE_URL}/maszyny/paletyzacja`,
    title:       'Paletyzacja z robotem i warstwowa | MadejPak',
    description: 'MadejPak dobiera i integruje systemy paletyzacji dla linii pakujących — z robotem, warstwowe i cobotowe. Robot do paletyzacji worków, kartonów i opakowań zbiorczych.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Paletyzacja – MadejPak' }],
  },
};

// ─── Design tokens ──────────────────────────────────────────────────────────
const BG       = 'var(--bg)';
const BG_CARD  = 'var(--bg-card)';
const BG_ALT   = 'var(--bg-alt)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
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

const PROCESS_STEPS = [
  { num: '01', title: 'Odbiór produktu',           desc: 'Produkt opuszcza maszynę pakującą i trafia na transport doprowadzający do paletyzatora.' },
  { num: '02', title: 'Buforowanie',               desc: 'Sekcja buforująca wyrównuje różnice prędkości między maszyną pakującą a paletyzatorem i zapobiega zatrzymaniom linii.' },
  { num: '03', title: 'Formowanie warstwy',         desc: 'Produkty są grupowane i orientowane w układ odpowiadający schematowi palety — w linii lub pod kątem 90°.' },
  { num: '04', title: 'Odkładanie na paletę',       desc: 'Robot lub głowica warstwowa układa produkty warstwami według zaprogramowanego wzoru paletyzacji.' },
  { num: '05', title: 'Podawanie palet i przekładek', desc: 'Automatyczny podajnik dostarcza puste palety i — jeśli wymagane — przekładki kartonowe lub foliowe między warstwami.' },
  { num: '06', title: 'Zabezpieczenie i transport', desc: 'Gotowa paleta trafia do owijarki folią stretch lub kapturem termicznym, a następnie przekazywana jest do dalszego transportu lub magazynu.' },
];

const SOLUTION_TYPES = [
  {
    id: 'elastyczna',
    type: 'Paletyzacja z robotem',
    forWhom: 'Masz wiele formatów i zmienny asortyment',
    desc: 'Jeśli Twoja linia pakuje kilka różnych produktów lub asortyment zmienia się sezonowo — paletyzacja powinna nadążać bez długich przestojów na przezbrojenie. Dobieramy rozwiązanie, które zmienia format szybko i bez angażowania mechanika.',
    products: [
      'Kartony i opakowania kartonowe',
      'Worki z produktami sypkimi',
      'Zgrzewki butelek i puszek',
      'Skrzynki i pojemniki',
      'Tacki i opakowania wielosztukowe',
    ],
  },
  {
    id: 'wydajnosc',
    type: 'Paletyzacja warstwowa',
    forWhom: 'Zależy Ci na wysokiej wydajności i niezawodności',
    desc: 'Gdy asortyment jest stały, a linia pracuje 3 zmiany — liczy się przede wszystkim niezawodność i niski koszt utrzymania. Wdrażamy sprawdzone systemy paletyzacji dopasowane do tempa Twojej linii, które nie generują przestojów.',
    products: [
      'Kartony z produktami spożywczymi i FMCG',
      'Opakowania zbiorcze w ustabilizowanych formatach',
      'Pojemniki i skrzynki',
    ],
  },
  {
    id: 'worki',
    type: 'Paletyzacja worków',
    forWhom: 'Pakujesz w worki — nawozy, chemię, materiały budowlane',
    desc: 'Worki to specyficzny produkt — ciężkie, nieregularne, podatne na uszkodzenie. Paletyzacja worków wymaga innego podejścia niż kartony. Dobieramy system, który układa palety stabilnie i bezpiecznie, bez uszkodzeń worka i bez udziału pracownika.',
    products: [
      'Worki z cementem i zaprawą',
      'Worki z nawozami i granulatem',
      'Karma dla zwierząt',
      'Chemia przemysłowa',
      'Surowce sypkie',
    ],
  },
  {
    id: 'mniejszy-zaklad',
    type: 'Kompaktowe stanowisko paletyzacji',
    forWhom: 'Masz mniejszy zakład lub ograniczoną przestrzeń',
    desc: 'Automatyzacja paletyzacji nie wymaga dużej hali ani wielkiego budżetu. Dla mniejszych zakładów lub linii o umiarkowanej wydajności mamy kompaktowe rozwiązania, które zajmują mało miejsca i szybko się zwracają — nawet przy jednej zmianie.',
    products: [
      'Kartony i opakowania dla mniejszych wolumenów',
      'Linie z częstymi zmianami formatów',
      'Zakłady stawiające pierwsze kroki w automatyzacji',
    ],
  },
];

const SECTORS = [
  {
    name: 'Spożywcza',
    items: ['Kartony z żywnością', 'Zgrzewki butelek i słoiczków', 'Tacki i opakowania wielosztukowe', 'Worki z produktami sypkimi'],
  },
  {
    name: 'Napoje',
    items: ['Butelki PET i szklane', 'Puszki i kartony', 'Zgrzewki i opakowania wielosztukowe'],
  },
  {
    name: 'Chemiczna',
    items: ['Worki z chemią przemysłową', 'Kanistry i pojemniki', 'Opakowania FMCG z chemii domowej'],
  },
  {
    name: 'Materiały budowlane',
    items: ['Worki z cementem i zaprawą', 'Worki z piaskiem i kruszywami', 'Granulat i pellet budowlany'],
  },
  {
    name: 'Pet food i nawozy',
    items: ['Worki z karmą dla zwierząt', 'Worki z nawozami i granulatem', 'Produkty agrochemiczne'],
  },
  {
    name: 'FMCG / Przemysł ogólny',
    items: ['Zróżnicowane formaty opakowań', 'Skrzynki i pojemniki przemysłowe', 'Opakowania zbiorcze'],
  },
];

const INTEGRATION_ITEMS = [
  { title: 'Transport doprowadzający',      desc: 'Przenośniki taśmowe i rolkowe, transfery i zwrotnice kierujące strumień produktów z maszyny pakującej na wejście paletyzatora.' },
  { title: 'Buforowanie i akumulacja',      desc: 'Sekcje buforujące wyrównujące różnice prędkości i zapobiegające zatrzymywaniu linii przy chwilowym braku wydajności paletyzatora.' },
  { title: 'Formowanie warstw',             desc: 'Grupowanie i orientacja produktów przed podaniem na paletyzator — szczególnie istotne przy systemach warstwowych.' },
  { title: 'Podawanie palet i przekładek',  desc: 'Automatyczne podajniki pustych palet i systemy podawania przekładek kartonowych lub foliowych między warstwami.' },
  { title: 'Zabezpieczenie ładunku',        desc: 'Owijarka folią stretch, kaptur termiczny lub spinanie taśmą — jako element zintegrowanego układu, zsynchronizowany z paletyzatorem.' },
  { title: 'Transport palet',              desc: 'Przenośniki rolkowe i łańcuchowe, wózki transferowe lub integracja z systemem AGV i magazynem.' },
  { title: 'Wygrodzenia i bezpieczeństwo', desc: 'Strefy robocze projektowane zgodnie z normami maszynowymi — ogrodzenia stałe, kurtyny świetlne lub skanery bezpieczeństwa, dobrane do aplikacji.' },
  { title: 'Synchronizacja z linią',        desc: 'Paletyzator synchronizowany z maszyną pakującą i otoczeniem przez wspólny system sterowania lub komunikację maszynową (Profinet, EtherNet/IP, OPC-UA).' },
];


const MADEJPAK_ROLE = [
  { step: '01', title: 'Przyjeżdżamy i słuchamy', desc: 'Odwiedzamy zakład, oglądamy linię i rozmawiamy o problemie — nie sprzedajemy rozwiązania zanim go nie zrozumiemy.' },
  { step: '02', title: 'Proponujemy konkretne rozwiązanie', desc: 'Na podstawie Twojego produktu, wydajności i układu hali wskazujemy, co wdrożyć i ile to kosztuje. Bez ogólników.' },
  { step: '03', title: 'Dostarczamy i uruchamiamy', desc: 'Przywożmy wszystko — paletyzator, transport, owijarki. Integrujemy z istniejącą linią i uruchamiamy w Twoim zakładzie.' },
  { step: '04', title: 'Szkolimy Twoich ludzi', desc: 'Operatorzy i utrzymanie ruchu wychodzą z rozruchu ze znajomością maszyny — nie są zdani wyłącznie na serwis zewnętrzny.' },
  { step: '05', title: 'Jesteśmy po uruchomieniu', desc: 'Serwisujemy, dostarczamy części i pomagamy przy zmianach formatów. Jeden kontakt do wszystkich kwestii technicznych.' },
];

// ─── Page ────────────────────────────────────────────────────────────────────
export default function PaletyzacjaPage() {
  return (
    <Box sx={{ bgcolor: BG, minHeight: '100vh', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 64, lg: 72 } }} />

      {/* ── Hero ── */}
      <Box sx={{ borderBottom: `1px solid ${BORDER}`, py: { xs: 8, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 10 }, alignItems: 'end' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2.5 }}>
                Koniec linii
              </Typography>
              <Typography variant="h1"
                sx={{ fontSize: { xs: '2rem', md: '2.75rem', lg: '3rem' }, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', color: 'var(--dim-85)' }}>
                Paletyzacja —<br />z robotem, warstwowa<br />i zintegrowana
              </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, lineHeight: 1.8, color: TEXT_DIM, mb: 3 }}>
                Ręczna paletyzacja spowalnia koniec linii, obciąża pracowników i generuje błędy.
                MadejPak dobiera i wdraża system paletyzacji dopasowany do Twojego produktu i zakładu —
                tak żeby koniec linii przestał być wąskim gardłem i żebyś nie musiał szukać ludzi do tej roboty.
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                <Box component={Link} href="/kontakt"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', transition: 'background-color 0.15s ease', '&:hover': { bgcolor: '#D45509' } }}>
                  Zapytaj o rozwiązanie
                  <ArrowRight />
                </Box>
                <Box component={Link} href="/realizacje"
                  sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', transition: 'border-color 0.15s ease, color 0.15s ease', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                  Zobacz realizacje
                  <ArrowRight />
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Zasada działania ── */}
      <Box sx={{ py: { xs: 6, md: 8 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Zasada działania
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em' }}>
                Od wyjścia maszyny pakującej do gotowej palety
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2 }}>
              {PROCESS_STEPS.map((s) => (
                <Box key={s.num} sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', color: ACCENT }}>{s.num}</Typography>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>{s.title}</Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>{s.desc}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Typy rozwiązań ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Dla kogo
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 6, md: 8 }, maxWidth: 560 }}>
            Znajdź sytuację, która pasuje do Twojego zakładu
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {SOLUTION_TYPES.map((sol) => (
              <Box key={sol.id}
                sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '300px 1fr' }, gap: { xs: 3, lg: 8 }, p: { xs: 3, md: 4 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Box>
                  <Typography sx={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text)', mb: 1, lineHeight: 1.3 }}>
                    {sol.type}
                  </Typography>
                  <Typography sx={{ fontSize: '0.85rem', color: ACCENT, lineHeight: 1.6, fontWeight: 600 }}>
                    {sol.forWhom}
                  </Typography>
                </Box>
                <Box>
                  <Typography sx={{ fontSize: '0.9rem', color: TEXT_DIM, lineHeight: 1.8, mb: 3 }}>
                    {sol.desc}
                  </Typography>
                  <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-42)', mb: 1.5 }}>
                    Typowe produkty
                  </Typography>
                  {sol.products.map((p) => (
                    <Box key={p} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                      <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                      <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{p}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Zastosowania ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: BG_ALT, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Zastosowania
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 500 }}>
            Branże i grupy produktów
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2.5 }}>
            {SECTORS.map((sec) => (
              <Box key={sec.name}
                sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px', p: { xs: 2.5, md: 3 } }}>
                <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                  {sec.name}
                </Typography>
                {sec.items.map((item) => (
                  <Box key={item} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.25, mb: 0.75 }}>
                    <Box sx={{ width: 4, height: 4, borderRadius: '50%', bgcolor: ACCENT, mt: '7px', flexShrink: 0 }} />
                    <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.55 }}>{item}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Integracja z linią ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '280px 1fr' }, gap: { xs: 4, md: 10 }, alignItems: 'start' }}>
            <Box>
              <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
                Integracja z linią
              </Typography>
              <Typography variant="h2"
                sx={{ fontSize: { xs: '1.3rem', md: '1.5rem' }, fontWeight: 700, lineHeight: 1.25, letterSpacing: '-0.02em', mb: 2 }}>
                Paletyzacja jako element końca linii
              </Typography>
              <Typography sx={{ fontSize: '0.85rem', color: TEXT_DIM, lineHeight: 1.75 }}>
                MadejPak nie dostarcza tylko paletyzatora — integruje kompletne stanowisko końca linii.
                Poniżej elementy, które projektujemy i synchronizujemy wokół paletyzatora.
              </Typography>
            </Box>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
              {INTEGRATION_ITEMS.map((item) => (
                <Box key={item.title}
                  sx={{ p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: '4px' }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 1, lineHeight: 1.3 }}>
                    {item.title}
                  </Typography>
                  <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>
                    {item.desc}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>


      {/* ── Rola MadejPak ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, borderBottom: `1px solid ${BORDER}` }}>
        <Container maxWidth="lg">
          <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            Rola MadejPak
          </Typography>
          <Typography variant="h2"
            sx={{ fontSize: { xs: '1.4rem', md: '1.75rem' }, fontWeight: 700, letterSpacing: '-0.02em', mb: { xs: 5, md: 7 }, maxWidth: 520 }}>
            Jak pracujemy przy projektach paletyzacji
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr 1fr 1fr' }, gap: 2.5 }}>
            {MADEJPAK_ROLE.map((r) => (
              <Box key={r.step} sx={{ p: { xs: 2.5, md: 3 }, bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `2px solid ${ACCENT}`, borderRadius: '4px' }}>
                <Typography sx={{ fontSize: '0.65rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.12em', mb: 1.5 }}>{r.step}</Typography>
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text)', mb: 1.25, lineHeight: 1.3 }}>{r.title}</Typography>
                <Typography sx={{ fontSize: '0.82rem', color: TEXT_DIM, lineHeight: 1.65 }}>{r.desc}</Typography>
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
                Dobierzemy system do Twojego procesu
              </Typography>
              <Typography sx={{ fontSize: '0.95rem', color: TEXT_DIM, lineHeight: 1.8, maxWidth: 540 }}>
                Właściwy system paletyzacji zależy od rodzaju i masy produktu, wymaganej wydajności, zmienności
                formatów i dostępnej przestrzeni. Opisz nam aplikację — przeanalizujemy wymagania i zaproponujemy
                rozwiązanie dopasowane do warunków zakładu.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexShrink: 0 }}>
              <Box component={Link} href="/kontakt"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, bgcolor: ACCENT, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { bgcolor: '#D45509' } }}>
                Zapytaj o rozwiązanie
                <ArrowRight />
              </Box>
              <Box component={Link} href="/realizacje"
                sx={{ display: 'inline-flex', alignItems: 'center', gap: 1.5, px: 3, py: 1.25, border: `1px solid ${BORDER}`, borderRadius: '3px', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: TEXT_DIM, textDecoration: 'none', whiteSpace: 'nowrap', '&:hover': { borderColor: 'var(--dim-20)', color: 'var(--dim-85)' } }}>
                Zobacz realizacje
                <ArrowRight />
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
            <span>Paletyzacja</span>
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
