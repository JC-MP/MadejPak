import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const BG      = 'var(--bg-alt)';
const BG_CARD = 'var(--bg-card)';

// ─── Featured case studies ────────────────────────────────────────────────────
// Wybierz 3 najsilniejsze realizacje — znane marki lub spektakularne efekty

const FEATURED = [
  {
    slug: 'siarkopol',
    klient: 'Siarkopol S.A.',
    logoSrc: '/logos/klienci/siarkopol.png',
    branza: 'Chemiczna',
    tytul: 'Robotyczna linia pakowania i paletyzacji nawozów',
    wynik: '2 linie pakujące z robotyczną paletyzacją KUKA dla producenta z Grupy Azoty — obsługa worków 25 kg i opakowań 0,5 kg w środowisku nawozowym.',
    tagi: ['KUKA', 'Paletyzacja', 'Nawozy'],
  },
  {
    slug: 'solbet',
    klient: 'Solbet S.A.',
    logoSrc: '/logos/klienci/solbet.png',
    branza: 'Materiały budowlane',
    tytul: 'Automatyzacja smarowania form betonowych',
    wynik: 'Robot KUKA zastąpił pracę manualną przy smarowaniu form betonowych — poprawa BHP, eliminacja strat materiału, pełna powtarzalność procesu.',
    tagi: ['KUKA', 'Robotyzacja', 'Custom'],
  },
  {
    slug: 'pco-group',
    klient: 'PCO Group',
    logoSrc: '/logos/klienci/pco.svg',
    branza: 'Spożywcza / przekąski',
    tytul: 'Ponad dekada automatyzacji produkcji przekąsek',
    wynik: 'Kilkanaście lat partnerskiej współpracy i kolejne etapy automatyzacji — pakowanie popcornu, produktów innowacyjnych i procesów produkcyjnych.',
    tagi: ['Automatyzacja', 'Wieloletnia współpraca', 'Custom'],
  },
];

// ─── Arrow icon ───────────────────────────────────────────────────────────────

function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0, transition: 'transform 0.15s ease' }}
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

// ─── Case card ────────────────────────────────────────────────────────────────

function CaseCard({ c }: { c: typeof FEATURED[number] }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: '4px',
        overflow: 'hidden',
        transition: 'border-color 0.2s ease',
        '&:hover': { borderColor: 'var(--surface-13)' },
      }}
    >
      {/* Top bar: logo + branza */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pt: { xs: 3, md: 3.5 },
          pb: 2.5,
          borderBottom: `1px solid ${BORDER}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 2,
          minHeight: 72,
        }}
      >
        <Box
          component="img"
          src={c.logoSrc}
          alt={c.klient}
          sx={{
            height: 32,
            maxWidth: 140,
            width: 'auto',
            objectFit: 'contain',
            display: 'block',
            filter: 'var(--logo-filter)',
          }}
        />
        <Typography
          sx={{
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--dim-28)',
            textAlign: 'right',
            lineHeight: 1.4,
            flexShrink: 0,
          }}
        >
          {c.branza}
        </Typography>
      </Box>

      {/* Body */}
      <Box sx={{ px: { xs: 3, md: 3.5 }, pt: 3, pb: 2.5, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Typography
          component="h3"
          sx={{
            fontSize: '0.97rem',
            fontWeight: 700,
            color: 'var(--text)',
            letterSpacing: '-0.01em',
            lineHeight: 1.35,
            mb: 1.75,
          }}
        >
          {c.tytul}
        </Typography>

        <Typography
          sx={{
            fontSize: '0.85rem',
            color: 'var(--dim-65)',
            lineHeight: 1.75,
            flex: 1,
            mb: 2.5,
          }}
        >
          {c.wynik}
        </Typography>

        {/* Tags */}
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 3 }}>
          {c.tagi.map((tag) => (
            <Box
              key={tag}
              sx={{
                fontSize: '0.7rem',
                color: 'var(--dim-55)',
                bgcolor: 'var(--surface-04)',
                border: '1px solid var(--surface-07)',
                borderRadius: '2px',
                px: 1,
                py: 0.375,
                lineHeight: 1.5,
              }}
            >
              {tag}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Footer CTA */}
      <Box
        sx={{
          px: { xs: 3, md: 3.5 },
          pb: { xs: 3, md: 3.5 },
          pt: 0,
          borderTop: `1px solid ${BORDER}`,
        }}
      >
        <Box
          component={Link}
          href={`/realizacje/${c.slug}`}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            fontSize: '0.82rem',
            fontWeight: 600,
            color: ACCENT,
            textDecoration: 'none',
            letterSpacing: '0.01em',
            pt: 2.5,
            transition: 'gap 0.15s ease, color 0.15s ease',
            '&:hover': { color: '#F07520', gap: 1.25 },
            '&:focus-visible': {
              outline: `2px solid ${ACCENT}`,
              outlineOffset: '2px',
              borderRadius: '2px',
            },
          }}
        >
          Zobacz realizację
          <ArrowRight />
        </Box>
      </Box>
    </Box>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FeaturedCasesSection() {
  return (
    <Box
      component="section"
      aria-labelledby="featured-cases-heading"
      sx={{
        bgcolor: BG,
        borderBottom: `1px solid ${BORDER}`,
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', md: 'flex-end' },
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 3, md: 0 },
            mb: { xs: 8, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: 580 }}>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: { xs: 2, md: 2.5 },
              }}
            >
              Realizacje
            </Typography>
            <Typography
              component="h2"
              id="featured-cases-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.25rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Projekty, które mówią same za siebie
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                color: 'var(--dim-65)',
                lineHeight: 1.75,
              }}
            >
              Kilkanaście branż, setki wdrożeń, wieloletnie współprace. Wybrane projekty z portfolio MadejPak.
            </Typography>
          </Box>

          <Box
            component={Link}
            href="/realizacje"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--dim-65)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'color 0.15s ease, gap 0.15s ease',
              '&:hover': { color: 'var(--text)', gap: 1.25 },
            }}
          >
            Wszystkie realizacje
            <ArrowRight />
          </Box>
        </Box>

        {/* Cards */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(3, 1fr)' },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {FEATURED.map((c) => (
            <CaseCard key={c.slug} c={c} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
