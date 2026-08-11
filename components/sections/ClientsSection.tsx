'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';

const CLIENTS = [
  { name: 'Admit',                 src: '/logos/klienci/admit.png',                 href: 'https://admit.pl/' },
  { name: 'Agrigem',               src: '/logos/klienci/agrigem.png',               href: 'https://agrigem.pl' },
  { name: 'Aleuro',                src: '/logos/klienci/aleuro.png',                href: 'https://www.aleuro.pl' },
  { name: 'Alexpol',               src: '/logos/klienci/alexpol.png',               href: 'https://alex-pol.pl/' },
  { name: 'Andruty Kaliskie',      src: '/logos/klienci/andruty-kaliskie.png',      href: 'https://kaliskieandruty.pl' },
  { name: 'As Babuni',             src: '/logos/klienci/as-babuni.svg',             href: 'https://asbabuni.pl/' },
  { name: 'Asgard',                src: '/logos/klienci/asgard.png',                href: 'https://asgard.pl/' },
  { name: 'Astra',                 src: '/logos/klienci/astra.png',                 href: 'https://www.astrapolska.pl/' },
  { name: 'Axpal',                 src: '/logos/klienci/axpal.svg',                 href: 'https://axpal.pl/' },
  { name: 'Bolsius',               src: '/logos/klienci/bolsius.png',               href: 'https://www.bolsius.pl/' },
  { name: 'Boramex',               src: '/logos/klienci/boramex.png',               href: 'https://www.boramex.pl/' },
  { name: 'Brapta',                src: '/logos/klienci/brapta.png',                href: 'https://brapta.com.pl/' },
  { name: 'Celpap',                src: '/logos/klienci/celpap.png',                href: 'https://celpap.pl/' },
  { name: 'Certech',               src: '/logos/klienci/certech.png',               href: 'https://www.certech.com.pl' },
  { name: 'Ciech Sarzyna',         src: '/logos/klienci/ciech-sarzyna.png',         href: 'https://sarzynachemical.pl/' },
  { name: 'Cykoria',               src: '/logos/klienci/cykoria.png',               href: 'https://www.cykoria.pl/' },
  { name: 'Dankoal',               src: '/logos/klienci/jednorazowegrile.png',      href: 'https://www.dancoal.pl/' },
  { name: 'Dars Cosmetics',        src: '/logos/klienci/dars-cosmetics.png',        href: 'https://dars.pl/' },
  { name: 'Dobis',                 src: '/logos/klienci/dobis.png',                 href: 'https://www.dobis.com.pl/' },
  { name: 'ESAB',                  src: '/logos/klienci/esab.png',                  href: 'https://esab.com/pl/eur_pl/' },
  { name: 'Europol',               src: '/logos/klienci/europol.png',               href: 'https://pelletdopieca.pl/' },
  { name: 'Eurowafel',             src: '/logos/klienci/eurowafel.png',             href: 'https://eurowafel.pl/' },
  { name: 'Fammilky',              src: '/logos/klienci/fammilky.png',              href: 'https://www.ovesnasvacinka.cz/' },
  { name: 'Filter Service',        src: '/logos/klienci/filter-service.png',        href: 'https://www.filter-service.eu/' },
  { name: 'Gala',                  src: '/logos/klienci/gala.png',                  href: 'https://piekarniagala.pl/pl/' },
  { name: 'Gold Drop',             src: '/logos/klienci/golddrop.png',              href: 'https://www.golddrop.eu/' },
  { name: 'Gryf Stevedring',       src: '/logos/klienci/gryfstevedring.png',        href: 'https://www.gryfstevedoring.pl/' },
  { name: 'Jonex',                 src: '/logos/klienci/jonex.png',                 href: 'https://www.jonex.pl/index.php/pl/' },
  { name: 'Laboratoria Natury',    src: '/logos/klienci/laboratoria-natury.svg',    href: 'https://laboratorianatury.pl' },
  { name: 'Lazur',                 src: '/logos/klienci/lazur.png',                 href: 'https://lazur.pl/' },
  { name: 'Maced',                 src: '/logos/klienci/maced.svg',                 href: 'https://www.maced.pl/' },
  { name: 'Magrol',                src: '/logos/klienci/magrol.png',                href: 'https://www.magrol.pl/' },
  { name: 'Makarony Polskie',      src: '/logos/klienci/makarony-polskie.svg',      href: 'https://makaronypolskie.pl/' },
  { name: 'Manufaktura Czekolady', src: '/logos/klienci/manufaktura-czekolady.png', href: 'https://manufakturaczekolady.pl/' },
  { name: 'Mat Starachowice',      src: '/logos/klienci/mat-starachowice.svg',      href: 'https://matcukierki.pl/' },
  { name: 'PCO',                   src: '/logos/klienci/pco.svg',                   href: 'https://www.pco-group.com.pl/produkty/popcorn/' },
  { name: 'Pess',                  src: '/logos/klienci/pess.png',                  href: 'https://pess.eu/' },
  { name: 'Piekarnia Mika',        src: '/logos/klienci/piekarnia-mika.png',        href: 'https://piekarnia-mika.pl/' },
  { name: 'Planta',                src: '/logos/klienci/planta.webp',               href: 'https://www.planta.pl/pl/' },
  { name: 'Plastrol',              src: '/logos/klienci/plastrol.svg',              href: 'https://plastrol.pl/' },
  { name: 'Polkor',                src: '/logos/klienci/polkor.svg',                href: 'https://koraogrodowa.pl/' },
  { name: 'Promotor',              src: '/logos/klienci/promotor.png',              href: 'https://www.promotor.store' },
  { name: 'Qemetica',              src: '/logos/klienci/qemetica.svg',              href: 'https://qemetica.com/' },
  { name: 'Royal Pads',            src: '/logos/klienci/royal-pads.png',            href: 'https://royalpads.eu/' },
  { name: 'Sanmed',                src: '/logos/klienci/sanmed.png',                href: 'https://www.sanmed.com.pl/' },
  { name: 'Sekpol',                src: '/logos/klienci/sekpol.webp',               href: 'https://www.secpol.pl/' },
  { name: 'Siarkopol',             src: '/logos/klienci/siarkopol.png',             href: 'https://siarkopol.grupaazoty.com/' },
  { name: 'Skawa',                 src: '/logos/klienci/skawa.png',                 href: 'https://skawa.com.pl/' },
  { name: 'Solbet',                src: '/logos/klienci/solbet.png',                href: 'https://www.solbet.pl/' },
  { name: 'Stema & Manless',       src: '/logos/klienci/stema-manless.svg',         href: 'https://paluszkizpieca.pl/' },
  { name: 'Synergio',              src: '/logos/klienci/synergio.svg',              href: 'https://www.synergio.pl/' },
  { name: 'Synthos',               src: '/logos/klienci/synthos.svg',               href: 'https://www.synthosgroup.com' },
  { name: 'Unitop Optima',         src: '/logos/klienci/unitop-optima.jpg',         href: 'https://www.unitop.com.pl/' },
  { name: 'Woba',                  src: '/logos/klienci/woba.svg',                  href: 'https://woba.pl/' },
  { name: 'Yarych',                src: '/logos/klienci/yarych.svg',                href: 'https://www.yarych.com/pl/' },
  { name: 'York',                  src: '/logos/klienci/york.svg',                  href: 'https://york.pl/' },
  { name: 'ZPOW Środa Wlkp.',      src: '/logos/klienci/zpow-sroda-wlkp.png',       href: 'https://zpow.com.pl/' },
  { name: 'Cmolfruit',             src: '/logos/klienci/cmolfruit.png',             href: 'http://www.cmol-frut.pl/' },
  { name: 'Dr Marcus',             src: '/logos/klienci/dr-marcus.png',             href: 'https://dr-marcus.com/pl' },
  { name: 'Kazart',                src: '/logos/klienci/kazart.png',                href: 'https://kazart.com.pl/' },
  { name: 'Piekarnia Wielgomłyny', src: '/logos/klienci/piekarnia-wielgomyny.png',  href: 'http://piekarnia-wielgomlyny.pl/' },
  { name: 'Sandezia',              src: '/logos/klienci/sandezia.png',              href: 'https://www.sandezia.com/' },
  { name: 'Stabrawa',              src: '/logos/klienci/stabrawa.png',              href: 'https://pelletstabrawa.pl/' },
  { name: 'Timex',                 src: '/logos/klienci/timex.png',                 href: '' },
  { name: 'Trak',                  src: '/logos/klienci/trak.svg',                  href: 'https://www.trak-garbatka.pl/' },
];

// Duplicate for seamless loop
const TRACK = [...CLIENTS, ...CLIENTS];

const LABELS = {
  pl: {
    accent: 'Zaufali', rest: ' nam',
    subtitle: 'Marki, które zautomatyzowały pakowanie i koniec linii z MadejPak — od przemysłu spożywczego, przez chemię, po produkcję ciężką.',
    linkHref: '/realizacje', linkText: 'Zobacz realizacje →',
  },
  en: {
    accent: 'Trusted', rest: ' by leading brands',
    subtitle: 'Brands that automated their packaging and end-of-line with MadejPak — from food, through chemicals, to heavy industry.',
    linkHref: '/en/realizacje', linkText: 'See case studies →',
  },
} as const;

export default function ClientsSection({ lang = 'pl' }: { lang?: 'pl' | 'en' }) {
  const L = LABELS[lang];
  return (
    <Box
      component="section"
      sx={{
        bgcolor: 'var(--bg-alt)',
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
        py: { xs: 6, md: 8 },
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: { xs: 5, md: 6 },
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box sx={{ maxWidth: 560 }}>
            <Typography
              component="h2"
              sx={{
                fontSize: { xs: '1.5rem', md: '2rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                lineHeight: 1.15,
              }}
            >
              <Box component="span" sx={{ color: ACCENT }}>{L.accent}</Box>{L.rest}
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                color: 'var(--dim-58)',
                lineHeight: 1.6,
              }}
            >
              {L.subtitle}
            </Typography>
          </Box>

          <Box
            component={Link}
            href={L.linkHref}
            sx={{
              fontSize: '0.82rem',
              fontWeight: 600,
              color: ACCENT,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            {L.linkText}
          </Box>
        </Box>
      </Container>

      {/* Marquee track — full-width, outside Container so it bleeds edge-to-edge */}
      <Box
        sx={{
          position: 'relative',
          /* fade edges */
          '&::before, &::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            bottom: 0,
            width: { xs: 40, md: 100 },
            zIndex: 1,
            pointerEvents: 'none',
          },
          '&::before': {
            left: 0,
            background: 'linear-gradient(to right, var(--bg-alt), transparent)',
          },
          '&::after': {
            right: 0,
            background: 'linear-gradient(to left, var(--bg-alt), transparent)',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: { xs: 4, md: 6 },
            animation: 'marquee 32s linear infinite',
            width: 'max-content',
            '@keyframes marquee': {
              '0%':   { transform: 'translateX(0)' },
              '100%': { transform: 'translateX(-50%)' },
            },
            '&:hover': { animationPlayState: 'paused' },
          }}
        >
          {TRACK.map((client, i) => (
            <Box
              key={i}
              {...(client.href
                ? { component: 'a', href: client.href, target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              aria-label={client.name}
              sx={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, md: 3 },
                py: 1,
                height: 64,
                textDecoration: 'none',
                cursor: client.href ? 'pointer' : 'default',
                filter: 'var(--client-logo-filter)',
                opacity: 'var(--client-logo-opacity)',
                transition: 'opacity 0.2s ease, filter 0.2s ease',
                '&:hover': {
                  opacity: '1 !important',
                  filter: 'none !important',
                },
              }}
            >
              <Box
                component="img"
                src={`${client.src}?v=2`}
                alt={client.name}
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  // Brak pliku logo → pokaż nazwę firmy zamiast zepsutego obrazka
                  const el = e.currentTarget;
                  if (el.dataset.fallback) return;
                  el.dataset.fallback = '1';
                  el.style.display = 'none';
                  const span = document.createElement('span');
                  span.textContent = client.name;
                  span.style.cssText =
                    'font-size:1rem;font-weight:700;letter-spacing:-0.01em;color:var(--dim-75);white-space:nowrap;';
                  el.parentElement?.appendChild(span);
                }}
                sx={{
                  height: { xs: 36, md: 46 },
                  width: 'auto',
                  maxWidth: 150,
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
