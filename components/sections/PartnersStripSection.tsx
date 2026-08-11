'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { PARTNERS as ALL_PARTNERS } from '@/data/partnersData';

const ACCENT = '#E8610A';
const BORDER = 'var(--border)';

// Filtrowanie ukrytych partnerów — przywróć usuwając flagę hidden w partnersData.ts
const PARTNERS = ALL_PARTNERS.filter((p) => !p.hidden);

function ArrowRight() {
  return (
    <Box
      component="svg"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      sx={{ width: 12, height: 12, flexShrink: 0 }}
    >
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor"
        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Box>
  );
}

export default function PartnersStripSection() {
  return (
    <Box
      component="section"
      aria-label="Partnerzy technologiczni"
      sx={{
        bgcolor: 'var(--bg-alt)',
        borderBottom: `1px solid ${BORDER}`,
        py: { xs: 6, md: 7 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 5, sm: 6 },
          }}
        >
          {/* Label */}
          <Box sx={{ flexShrink: 0 }}>
            <Typography
              sx={{
                fontSize: '0.68rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--dim-35)',
                mb: 0.5,
              }}
            >
              Technologie
            </Typography>
            <Typography
              sx={{
                fontSize: '0.78rem',
                color: 'var(--dim-45)',
                lineHeight: 1.5,
                maxWidth: 160,
              }}
            >
              Realizujemy projekty w oparciu o najlepszych producentów
            </Typography>
          </Box>

          {/* Divider */}
          <Box
            sx={{
              display: { xs: 'none', sm: 'block' },
              width: '1px',
              height: 48,
              bgcolor: BORDER,
              flexShrink: 0,
            }}
          />

          {/* Logos */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: { xs: '20px 28px', md: '16px 40px' },
              flex: 1,
            }}
          >
            {PARTNERS.map((p) => (
              <Box
                key={p.id}
                component={Link}
                href={`/partnerzy#${p.id}`}
                title={p.name}
                aria-label={`${p.name} — poznaj partnera`}
                sx={{
                  height: { xs: 34, md: 44 },
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={`${p.logoSrc}?v=2`}
                  alt={p.name}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    // Fallback to text when logo file not present yet
                    const el = e.currentTarget;
                    el.style.display = 'none';
                    const span = document.createElement('span');
                    span.textContent = p.name;
                    span.style.cssText =
                      'font-size:0.82rem;font-weight:700;letter-spacing:-0.01em;color:var(--dim-45);';
                    el.parentElement?.appendChild(span);
                  }}
                  sx={{
                    height: '100%',
                    width: 'auto',
                    maxWidth: { xs: 120, md: 150 },
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'var(--logo-filter)',
                    opacity: 0.75,
                    transition: 'opacity 0.2s ease',
                    '&:hover': { opacity: 1 },
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Link */}
          <Box
            component={Link}
            href="/partnerzy"
            sx={{
              display: { xs: 'none', md: 'inline-flex' },
              alignItems: 'center',
              gap: 0.75,
              fontSize: '0.78rem',
              fontWeight: 600,
              color: 'var(--dim-45)',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'color 0.15s ease, gap 0.15s ease',
              '&:hover': { color: ACCENT, gap: 1.25 },
            }}
          >
            Poznaj partnerów
            <ArrowRight />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
