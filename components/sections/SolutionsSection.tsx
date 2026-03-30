import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';

// ─── Inline icons ──────────────────────────────────────────────────────────────

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <Box
      aria-hidden="true"
      sx={{
        width: 44,
        height: 44,
        borderRadius: '8px',
        bgcolor: `color-mix(in srgb, ${ACCENT} 12%, transparent)`,
        border: `1px solid color-mix(in srgb, ${ACCENT} 22%, transparent)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        mb: 3,
      }}
    >
      <Box
        component="svg"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        sx={{
          width: 22,
          height: 22,
          color: ACCENT,
          '& path, & circle, & rect, & polyline': {
            stroke: 'currentColor',
            strokeWidth: 1.65,
            strokeLinecap: 'round' as const,
            strokeLinejoin: 'round' as const,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

// ─── Solution cards data ───────────────────────────────────────────────────────

const SOLUTIONS = [
  {
    icon: (
      <>
        <path d="M12 2H2v10h10V2zM22 2h-6v6h6V2zM22 14h-6v8h6v-8zM12 14H2v8h10v-8z" />
      </>
    ),
    problem: 'Pakujesz ręcznie?',
    headline: 'Automatyzacja pakowania',
    description:
      'Flowpack, maszyny pionowe i poziome, systemy wtaktowywania — dopasowane do Twojego produktu i wydajności. Eliminujemy zależność od pracy manualnej.',
    href: '/rozwiazania/automatyzacja-pakowania',
    cta: 'Sprawdź rozwiązania pakowania',
  },
  {
    icon: (
      <>
        <path d="M12 2a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
        <path d="M2 22c0-4.4 4.5-8 10-8s10 3.6 10 8" />
      </>
    ),
    problem: 'Paletyzacja blokuje tempo linii?',
    headline: 'Robotyzacja i paletyzacja',
    description:
      'Roboty przemysłowe, coboty i paletyzatory liderów branży — budujemy stanowiska, które pracują 3 zmiany bez przerwy. Obsługujemy worki, kartony i tace w trudnych warunkach.',
    href: '/rozwiazania/robotyzacja-pakowania',
    cta: 'Sprawdź robotyzację',
  },
  {
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
    problem: 'Maszyny nie rozmawiają ze sobą?',
    headline: 'Integracja linii pakujących',
    description:
      'Łączymy w jeden system: pakarkę, wagę, przenośniki, robot i paletyzator. Jeden sterownik, jeden przepływ, zero wąskich gardeł.',
    href: '/rozwiazania/integracja-linii-pakujacych',
    cta: 'Sprawdź integrację',
  },
  {
    icon: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </>
    ),
    problem: 'Trudny produkt lub środowisko?',
    headline: 'Projekty custom',
    description:
      'Pył, wilgoć, substancje żrące, delikatne produkty, ograniczona przestrzeń — projektujemy rozwiązania od zera, gdy standardowe maszyny nie wystarczają.',
    href: '/rozwiazania/projekty-custom',
    cta: 'Omów projekt custom',
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

// ─── Section ──────────────────────────────────────────────────────────────────

export default function SolutionsSection() {
  return (
    <Box
      component="section"
      aria-labelledby="solutions-heading"
      sx={{
        bgcolor: BG,
        borderBottom: `1px solid ${BORDER}`,
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header */}
        <Box sx={{ mb: { xs: 8, md: 10 }, maxWidth: 640 }}>
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
            Co robimy
          </Typography>
          <Typography
            component="h2"
            id="solutions-heading"
            sx={{
              fontSize: { xs: '1.625rem', md: '2.25rem' },
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: 'var(--text)',
              lineHeight: 1.15,
              mb: 2,
            }}
          >
            Rozwiązujemy konkretne problemy produkcyjne
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              color: 'var(--dim-65)',
              lineHeight: 1.75,
            }}
          >
            Niezależnie czy pakujesz ręcznie i chcesz to zmienić, czy budujesz nową linię od zera —
            dobieramy i wdrażamy technologię dopasowaną do Twojego produktu i zakładu.
          </Typography>
        </Box>

        {/* Cards grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: '1fr 1fr',
              lg: 'repeat(4, 1fr)',
            },
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {SOLUTIONS.map((s) => (
            <Box
              key={s.href}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `2px solid var(--surface-07)`,
                borderRadius: '4px',
                px: { xs: 3, md: 3.5 },
                pt: { xs: 3, md: 3.5 },
                pb: { xs: 3, md: 3.5 },
                transition: 'border-color 0.2s ease',
                '&:hover': {
                  borderTopColor: ACCENT,
                  borderColor: 'var(--surface-13)',
                },
              }}
            >
              <IconBox>{s.icon}</IconBox>

              {/* Problem label */}
              <Typography
                sx={{
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'var(--dim-35)',
                  mb: 1,
                }}
              >
                {s.problem}
              </Typography>

              {/* Solution headline */}
              <Typography
                component="h3"
                sx={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.3,
                  mb: 1.75,
                }}
              >
                {s.headline}
              </Typography>

              {/* Description */}
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: 'var(--dim-65)',
                  lineHeight: 1.75,
                  flex: 1,
                  mb: 3,
                }}
              >
                {s.description}
              </Typography>

              {/* CTA */}
              <Box
                component={Link}
                href={s.href}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.75,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: ACCENT,
                  textDecoration: 'none',
                  letterSpacing: '0.01em',
                  transition: 'gap 0.15s ease, color 0.15s ease',
                  '&:hover': { color: '#F07520', gap: 1.25 },
                  '&:focus-visible': {
                    outline: `2px solid ${ACCENT}`,
                    outlineOffset: '2px',
                    borderRadius: '2px',
                  },
                }}
              >
                {s.cta}
                <ArrowRight />
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
