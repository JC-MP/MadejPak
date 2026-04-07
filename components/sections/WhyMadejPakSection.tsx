import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const BG      = 'var(--bg)';
const BG_CARD = 'var(--bg-card)';

const DIFFERENTIATORS = [
  {
    icon: (
      <>
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </>
    ),
    title: 'Integrator, nie pośrednik',
    desc: 'Projektujemy układ od podstaw, dobieramy maszyny, montujemy i uruchamiamy. Odpowiadamy za całość linii — nie za jeden element z katalogu.',
  },
  {
    icon: (
      <>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </>
    ),
    title: 'Własny serwis i magazyn części',
    desc: 'Reagujemy szybko, bo mamy własnych serwisantów i większość kluczowych części na stanie. Czas reakcji liczymy w godzinach — nie uzależniamy Cię od producenta z zagranicy.',
  },
  {
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
    title: '25 lat wdrożeń w branży',
    desc: 'Ponad 200 realizacji w przemyśle spożywczym, chemicznym, budowlanym i rolno-spożywczym. Znamy specyfikę branży i wiemy, co działa, zanim zaczniesz płacić.',
  },
  {
    icon: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    title: 'Jeden partner — pełna odpowiedzialność',
    desc: 'Jedno miejsce kontaktu: od analizy potrzeb, przez dobór maszyn i projekt linii, po uruchomienie, szkolenie i wieloletnią opiekę serwisową.',
  },
];

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
          '& path, & circle': {
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

export default function WhyMadejPakSection() {
  return (
    <Box
      component="section"
      aria-labelledby="why-madejpak-heading"
      sx={{
        bgcolor: BG,
        borderBottom: `1px solid ${BORDER}`,
        py: { xs: 10, md: 14 },
      }}
    >
      <Container maxWidth="xl">
        {/* Header row */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            alignItems: { lg: 'flex-end' },
            justifyContent: 'space-between',
            gap: { xs: 4, lg: 8 },
            mb: { xs: 8, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: 560 }}>
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
              Dlaczego MadejPak
            </Typography>
            <Typography
              component="h2"
              id="why-madejpak-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.25rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Więcej niż{' '}
              <Box component="span" sx={{ color: ACCENT }}>
                dystrybutor maszyn
              </Box>
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: '0.9rem', md: '0.95rem' },
              color: 'var(--dim-65)',
              lineHeight: 1.75,
              maxWidth: 520,
              flexShrink: 0,
            }}
          >
            Większość firm sprzedaje maszyny. My projektujemy, integrujemy
            i serwisujemy całe linie produkcyjne — biorąc odpowiedzialność
            za efekt końcowy, nie za pojedynczy element.
          </Typography>
        </Box>

        {/* Differentiators grid */}
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
          {DIFFERENTIATORS.map((d) => (
            <Box
              key={d.title}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: BG_CARD,
                border: `1px solid ${BORDER}`,
                borderTop: `2px solid ${ACCENT}`,
                borderRadius: '4px',
                px: { xs: 3, md: 3.5 },
                pt: { xs: 3, md: 3.5 },
                pb: { xs: 3, md: 3.5 },
              }}
            >
              <IconBox>{d.icon}</IconBox>

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
                {d.title}
              </Typography>

              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: 'var(--dim-65)',
                  lineHeight: 1.75,
                }}
              >
                {d.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
