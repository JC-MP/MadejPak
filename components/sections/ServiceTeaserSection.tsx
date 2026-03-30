import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

const ACCENT = '#E8610A';
const BORDER = 'var(--border)';

const PILLARS = [
  {
    icon: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    ),
    title: 'Serwis maszyn i linii',
    desc: 'Diagnostyka, usuwanie awarii i przywracanie sprawności w miejscu instalacji.',
  },
  {
    icon: (
      <>
        <path d="M1.05 12A11 11 0 0 1 23 12M5 12a7 7 0 0 1 14 0M9 12a3 3 0 0 1 6 0" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </>
    ),
    title: 'Tele-serwis',
    desc: 'Szybka pomoc zdalna dla służb UR. Ogranicza czas przestoju bez wizyty na miejscu.',
  },
  {
    icon: (
      <>
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
        <path d="M3.27 6.96 12 12.01l8.73-5.05M12 22.08V12" />
      </>
    ),
    title: 'Części zamienne',
    desc: 'Oryginalne części do maszyn MadejPak i maszyn partnerskich. Szybka identyfikacja i dostawa.',
  },
  {
    icon: (
      <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    ),
    title: 'Modernizacje',
    desc: 'Dostosowanie istniejących linii do nowych formatów i wymagań. Alternatywa dla nowej inwestycji.',
  },
];

function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 13, height: 13, flexShrink: 0 }}
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

export default function ServiceTeaserSection() {
  return (
    <Box
      component="section"
      aria-labelledby="service-teaser-heading"
      sx={{
        bgcolor: 'var(--bg)',
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
            gap: { xs: 4, md: 0 },
            mb: { xs: 8, md: 10 },
          }}
        >
          <Box sx={{ maxWidth: 600 }}>
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
              Serwis i wsparcie
            </Typography>
            <Typography
              component="h2"
              id="service-teaser-heading"
              sx={{
                fontSize: { xs: '1.625rem', md: '2.25rem' },
                fontWeight: 800,
                letterSpacing: '-0.025em',
                color: 'var(--text)',
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Dostarczamy maszyny.
              <Box component="br" />
              <Box component="span" sx={{ color: ACCENT }}>
                Dbamy o nie przez lata.
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                color: 'var(--dim-65)',
                lineHeight: 1.75,
              }}
            >
              Serwis to dla nas nie usługa dodatkowa — to część oferty.
              Reagujemy szybko, mamy części na stanie i dbamy o ciągłość
              pracy Twojej linii.
            </Typography>
          </Box>

          <Stack
            direction={{ xs: 'row', md: 'column' }}
            spacing={{ xs: 2, md: 1.5 }}
            alignItems={{ xs: 'flex-start', md: 'flex-end' }}
            sx={{ flexShrink: 0 }}
          >
            <Button
              component={Link}
              href="/serwis"
              variant="contained"
              disableElevation
              endIcon={<ArrowRight />}
              sx={{
                bgcolor: ACCENT,
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.875rem',
                textTransform: 'none',
                px: 3,
                py: 1.5,
                minHeight: 46,
                borderRadius: '6px',
                gap: 0.5,
                transition: 'background-color 0.18s ease, transform 0.18s ease',
                '&:hover': {
                  bgcolor: '#F07520',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              Zgłoś serwis
            </Button>
            <Typography
              sx={{
                fontSize: '0.78rem',
                color: 'var(--dim-35)',
                lineHeight: 1.5,
                textAlign: { xs: 'left', md: 'right' },
              }}
            >
              serwis@madejpak.pl
            </Typography>
          </Stack>
        </Box>

        {/* Pillars grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: 'repeat(4, 1fr)' },
            border: `1px solid ${BORDER}`,
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {PILLARS.map((p, i) => (
            <Box
              key={p.title}
              sx={{
                px: { xs: 3, md: 3.5 },
                py: { xs: 3, md: 3.5 },
                borderRight: {
                  xs: 'none',
                  sm: i % 2 === 0 ? `1px solid ${BORDER}` : 'none',
                  lg: i < 3 ? `1px solid ${BORDER}` : 'none',
                },
                borderBottom: {
                  xs: `1px solid ${BORDER}`,
                  sm: i < 2 ? `1px solid ${BORDER}` : 'none',
                  lg: 'none',
                },
                transition: 'background-color 0.15s ease',
                '&:hover': { bgcolor: 'var(--surface-03)' },
              }}
            >
              {/* Icon */}
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '8px',
                  bgcolor: `color-mix(in srgb, ${ACCENT} 10%, transparent)`,
                  border: `1px solid color-mix(in srgb, ${ACCENT} 20%, transparent)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: ACCENT,
                  mb: 2.5,
                  flexShrink: 0,
                }}
              >
                <Box
                  component="svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  sx={{
                    width: 20,
                    height: 20,
                    '& path, & circle': {
                      stroke: 'currentColor',
                      strokeWidth: 1.65,
                      strokeLinecap: 'round',
                      strokeLinejoin: 'round',
                    },
                  }}
                >
                  {p.icon}
                </Box>
              </Box>

              <Typography
                sx={{
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                  mb: 1.25,
                }}
              >
                {p.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: '0.85rem',
                  color: 'var(--dim-55)',
                  lineHeight: 1.7,
                }}
              >
                {p.desc}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Bottom strip — packages teaser */}
        <Box
          sx={{
            mt: { xs: 4, md: 5 },
            p: { xs: 3, md: 4 },
            border: `1px solid color-mix(in srgb, ${ACCENT} 20%, transparent)`,
            borderLeft: `3px solid ${ACCENT}`,
            borderRadius: '4px',
            bgcolor: `color-mix(in srgb, ${ACCENT} 4%, transparent)`,
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            gap: { xs: 3, sm: 4 },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: '0.82rem',
                fontWeight: 700,
                color: ACCENT,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                mb: 0.75,
              }}
            >
              Pakiety serwisowe
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '0.9rem', md: '0.95rem' },
                color: 'var(--dim-72)',
                lineHeight: 1.6,
              }}
            >
              Planowa opieka nad maszyną oznacza mniej awarii i lepszą kontrolę kosztów UR.
              Oferujemy trzy pakiety serwisowe — od standardowego po pełną opiekę.
            </Typography>
          </Box>
          <Box
            component={Link}
            href="/serwis#opieka-serwisowa"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              fontSize: '0.82rem',
              fontWeight: 600,
              color: ACCENT,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'gap 0.15s ease, color 0.15s ease',
              '&:hover': { color: '#F07520', gap: 1.25 },
            }}
          >
            Sprawdź pakiety
            <ArrowRight />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
