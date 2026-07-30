import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const BG_ALT   = 'var(--bg-alt)';
const BG_CARD  = 'var(--bg-card)';
const ACCENT   = '#E8610A';
const BORDER   = 'var(--border)';
const TEXT_DIM = 'var(--dim-72)';

function Check() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 15, height: 15, flexShrink: 0, mt: '3px', color: ACCENT }}>
      <path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}
function Cross() {
  return (
    <Box component="svg" viewBox="0 0 16 16" fill="none" aria-hidden="true" sx={{ width: 15, height: 15, flexShrink: 0, mt: '3px', color: 'var(--dim-40)' }}>
      <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </Box>
  );
}
type Lang = 'pl' | 'en';

const CONTENT = {
  pl: {
    eyebrow: 'Pewny partner',
    h2: 'Kupujesz maszyny na lata — nie na jeden sezon',
    leadA: 'Od 2000 roku, 200+ wdrożeń. ',
    leadStrong1: 'Autoryzowany przedstawiciel Essegi i GSP',
    leadB: ' oraz partner wielu europejskich producentów. Serwis i części w Polsce — a gdy trzeba, ',
    leadStrong2: 'budujemy własne maszyny',
    leadC: '.',
    stats: [
      { num: 'od 2000', label: 'ćwierć wieku na rynku maszyn pakujących' },
      { num: '200+', label: 'wdrożeń w przemyśle spożywczym, chemicznym i innych' },
      { num: 'Essegi i GSP', label: 'autoryzowany przedstawiciel w Polsce' },
      { num: 'PL', label: 'serwis i oryginalne części na miejscu' },
    ],
    proofEyebrow: 'Nie musisz jechać do nas, żeby zobaczyć jak pakujemy — ',
    proofEyebrowAccent: 'wejdź do supermarketu',
    highlights: [
      { label: 'Wafle Skawa', sub: 'wyroby cukiernicze', slug: 'skawa' },
      { label: 'Andruty kaliskie', sub: 'tradycyjne wafle', slug: '' },
      { label: 'Żwirek Super Benek', sub: 'Certech', slug: 'certech' },
      { label: 'Ser pleśniowy Lazur', sub: 'nabiał', slug: 'lazur' },
      { label: 'Makaron Makarony Polskie', sub: 'makarony', slug: 'makarony-polskie' },
      { label: 'Znicze Bolsius', sub: 'wkłady zniczowe', slug: 'bolsius' },
      { label: 'Popcorn i chrupki PCO', sub: 'przekąski', slug: 'pco-group' },
      { label: 'Kora Polkor', sub: 'kora ogrodowa do kwiatów', slug: '' },
      { label: 'Zapachy Dr Marcus', sub: 'akcesoria samochodowe', slug: '' },
    ] as ReadonlyArray<{ label: string; sub: string; slug: string }>,
    oursTitle: 'MadejPak — integrator i autoryzowany partner',
    theirsTitle: 'Przypadkowy importer / pośrednik',
    ours: [
      'Autoryzowany przedstawiciel Essegi, GSP i wielu europejskich producentów',
      'Maszyny z oficjalnego kanału — z gwarancją producenta',
      'Serwis i oryginalne części w Polsce, nie „u dostawcy za granicą"',
      'Własne maszyny, gdy to najlepsze rozwiązanie dla projektu',
      'Odbiór techniczny (FAT) przed dostawą',
      'Jasna wycena — bez ukrytych kosztów w trakcie projektu',
      'Szybki serwis na miejscu — minimum przestojów',
      'Realny zespół i siedziba w Dziewinie — 25 lat historii',
    ],
    theirs: [
      'Maszyna z niepewnego źródła, bez autoryzacji producenta',
      'Gwarancja i serwis „u dostawcy" — realnie za granicą',
      'Części na tygodnie albo brak wsparcia po sprzedaży',
      'Brak odbioru technicznego i integracji z linią',
      'Ukryte koszty i dopłaty pojawiające się w trakcie projektu',
      'Częste przestoje — bez szybkiego serwisu na miejscu',
      'Tylko sprowadza i odsprzedaje — nic nie projektuje',
      'Firma bez historii, referencji i zaplecza',
    ],
    href: '/realizacje',
  },
  en: {
    eyebrow: 'A partner you can rely on',
    h2: 'You buy machines for years — not for one season',
    leadA: 'Since 2000, 200+ implementations. ',
    leadStrong1: 'Authorized representative of Essegi and GSP',
    leadB: ' and partner of many European manufacturers. Service and parts in Poland — and when it fits, we ',
    leadStrong2: 'build our own machines',
    leadC: '.',
    stats: [
      { num: 'since 2000', label: 'a quarter-century in packaging machinery' },
      { num: '200+', label: 'implementations across food, chemical and other industries' },
      { num: 'Essegi & GSP', label: 'authorized representative in Poland' },
      { num: 'PL', label: 'service and original parts on the spot' },
    ],
    proofEyebrow: 'You don’t have to visit us to see how we pack — ',
    proofEyebrowAccent: 'just walk into a supermarket',
    highlights: [
      { label: 'Skawa wafers', sub: 'confectionery', slug: 'skawa' },
      { label: 'Kalisz wafers', sub: 'traditional wafers', slug: '' },
      { label: 'Super Benek cat litter', sub: 'Certech', slug: 'certech' },
      { label: 'Lazur blue cheese', sub: 'dairy', slug: 'lazur' },
      { label: 'Makarony Polskie pasta', sub: 'pasta', slug: 'makarony-polskie' },
      { label: 'Bolsius candles', sub: 'candle inserts', slug: 'bolsius' },
      { label: 'PCO popcorn & snacks', sub: 'snacks', slug: 'pco-group' },
      { label: 'Polkor garden bark', sub: 'decorative mulch', slug: '' },
      { label: 'Dr Marcus fragrances', sub: 'car care', slug: '' },
    ] as ReadonlyArray<{ label: string; sub: string; slug: string }>,
    oursTitle: 'MadejPak — integrator and authorized partner',
    theirsTitle: 'A random importer / middleman',
    ours: [
      'Authorized representative of Essegi, GSP and many European manufacturers',
      'Machines from the official channel — with manufacturer warranty',
      'Service and original parts in Poland, not „at the supplier abroad"',
      'Our own machines when that is the best fit for the project',
      'Factory acceptance test (FAT) before delivery',
      'Clear quote — no hidden costs appearing mid-project',
      'Fast on-site service — minimal downtime',
      'A real team and premises in Dziewin — 25 years of history',
    ],
    theirs: [
      'Machine from an uncertain source, without manufacturer authorization',
      'Warranty and service „at the supplier" — effectively abroad',
      'Parts in weeks, or no support after the sale',
      'No acceptance testing and no line integration',
      'Hidden costs and surcharges appearing mid-project',
      'Frequent downtime — no fast service on the spot',
      'Only imports and resells — designs nothing',
      'A company with no history, references or backing',
    ],
    href: '/en/realizacje',
  },
} as const;

export default function TrustDifferentiator({ lang = 'pl' }: { lang?: Lang }) {
  const t = CONTENT[lang];
  return (
    <Box component="section" aria-label="MadejPak" sx={{ bgcolor: BG_ALT, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}` }}>
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>

        <Box sx={{ maxWidth: 720, mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
            {t.eyebrow}
          </Typography>
          <Typography component="h2" sx={{ fontSize: { xs: '1.6rem', md: '2.1rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.15, mb: 2.5 }}>
            {t.h2}
          </Typography>
          <Typography sx={{ fontSize: { xs: '1.1rem', md: '1.3rem' }, color: TEXT_DIM, lineHeight: 1.65 }}>
            {t.leadA}<strong style={{ color: 'var(--text)' }}>{t.leadStrong1}</strong>{t.leadB}<strong style={{ color: ACCENT }}>{t.leadStrong2}</strong>{t.leadC}
          </Typography>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' }, gap: 2, mb: { xs: 5, md: 7 } }}>
          {t.stats.map((s) => (
            <Box key={s.label} sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderRadius: 2, p: 3 }}>
              <Typography sx={{ fontSize: '1.5rem', fontWeight: 800, color: ACCENT, lineHeight: 1.1, mb: 0.75 }}>{s.num}</Typography>
              <Typography sx={{ fontSize: '0.8rem', color: TEXT_DIM, lineHeight: 1.45 }}>{s.label}</Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ mb: { xs: 5, md: 7 } }}>
          <Typography sx={{ fontSize: { xs: '1.25rem', md: '1.6rem' }, fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.2, mb: 3, maxWidth: 760 }}>
            {t.proofEyebrow}<Box component="span" sx={{ color: ACCENT }}>{t.proofEyebrowAccent}</Box>
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr 1fr', sm: 'repeat(3, 1fr)' }, gap: { xs: 1.5, md: 2 } }}>
            {t.highlights.map((h) => (
              <Box
                key={h.label}
                component={Link}
                href={t.href}
                sx={{
                  bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderLeft: `3px solid ${ACCENT}`, borderRadius: 1.5,
                  px: 2, py: 1.75, textDecoration: 'none', color: 'var(--text)',
                  display: 'flex', flexDirection: 'column', gap: 0.25,
                  transition: 'border-color 0.15s ease, transform 0.15s ease',
                  '&:hover': { borderColor: ACCENT, transform: 'translateY(-2px)' },
                }}
              >
                <Typography sx={{ fontSize: { xs: '0.95rem', md: '1.05rem' }, fontWeight: 800, lineHeight: 1.25 }}>{h.label}</Typography>
                <Typography sx={{ fontSize: '0.7rem', color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h.sub}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 2.5, md: 3 } }}>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid ${ACCENT}`, borderRadius: 2, p: { xs: 3, md: 4 } }}>
            <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: ACCENT, letterSpacing: '0.06em', textTransform: 'uppercase', mb: 2.5 }}>
              {t.oursTitle}
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {t.ours.map((x) => (
                <Box component="li" key={x} sx={{ display: 'flex', gap: 1.25, fontSize: '0.9rem', color: 'var(--dim-85)', lineHeight: 1.55 }}>
                  <Check />{x}
                </Box>
              ))}
            </Box>
          </Box>
          <Box sx={{ bgcolor: BG_CARD, border: `1px solid ${BORDER}`, borderTop: `3px solid var(--dim-20)`, borderRadius: 2, p: { xs: 3, md: 4 } }}>
            <Typography sx={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--dim-55)', letterSpacing: '0.06em', textTransform: 'uppercase', mb: 2.5 }}>
              {t.theirsTitle}
            </Typography>
            <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {t.theirs.map((x) => (
                <Box component="li" key={x} sx={{ display: 'flex', gap: 1.25, fontSize: '0.9rem', color: 'var(--dim-55)', lineHeight: 1.55 }}>
                  <Cross />{x}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

      </Container>
    </Box>
  );
}
