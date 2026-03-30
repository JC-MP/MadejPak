import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';

const CLIENTS = [
  { name: 'Agrigem',          src: '/logos/klienci/agrigem.png',              href: 'https://www.agrigem.pl' },
  { name: 'Aleuro',           src: '/logos/klienci/aleuro.png',               href: 'https://www.aleuro.pl' },
  { name: 'Certech',          src: '/logos/klienci/certech.jpg',              href: 'https://www.certech.pl' },
  { name: 'ESAB',             src: '/logos/klienci/esab.png',                 href: 'https://www.esab.pl' },
  { name: 'Eurowafel',        src: '/logos/klienci/eurowafel.png',            href: 'https://www.eurowafel.pl' },
  { name: 'Gold Drop',        src: '/logos/klienci/golddrop.png',             href: 'https://www.golddrop.pl' },
  { name: 'Lazur',            src: '/logos/klienci/lazur.png',                href: 'https://www.lazur.com.pl' },
  { name: 'Makarony Polskie', src: '/logos/klienci/makarony-polskie.svg',     href: 'https://www.makaronypolskie.pl' },
  { name: 'PCO',              src: '/logos/klienci/pco.svg',                  href: 'https://www.pco.pl' },
  { name: 'Siarkopol',        src: '/logos/klienci/siarkopol.png',            href: 'https://www.siarkopol.pl' },
  { name: 'Solbet',           src: '/logos/klienci/solbet.png',               href: 'https://www.solbet.pl' },
  { name: 'York',             src: '/logos/klienci/york.png',                 href: 'https://www.york.com' },
];

// Duplicate for seamless loop
const TRACK = [...CLIENTS, ...CLIENTS];

export default function ClientsSection() {
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
          <Box>
            <Typography
              sx={{
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: ACCENT,
                mb: 1.5,
              }}
            >
              Referencje
            </Typography>
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
              Zaufali nam
            </Typography>
          </Box>

          <Box
            component={Link}
            href="/realizacje"
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
            Zobacz realizacje →
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
              component="a"
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={client.name}
              sx={{
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: { xs: 2, md: 3 },
                py: 1,
                height: 56,
                textDecoration: 'none',
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
                src={client.src}
                alt={client.name}
                sx={{
                  height: { xs: 28, md: 36 },
                  width: 'auto',
                  maxWidth: 120,
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
