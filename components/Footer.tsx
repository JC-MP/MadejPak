'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ACCENT  = '#E8610A';
const BORDER  = 'var(--border)';
const DIM     = 'var(--dim-45)';
const DIM_LO  = 'var(--dim-28)';

const COMPANY = {
  name:      'PPHU MADEJPAK SP. Z O.O.',
  address:   'Dziewin 333, 32-708 Dziewin',
  phone:     '+48 12 345 43 97',
  wew1: 'wew 11 - biuro',
  wew2: 'wew 12 - księgowość',
  wew3: 'wew 13 - projekty',
  wew4: 'wew 14 - serwis',
  email:     'biuro@madejpak.pl',
  nip:       '868-198-64-42',
  linkedin:  'https://www.linkedin.com/company/madejpak/posts/?feedView=all',
};

const NAV_COLS = [
  {
    label: 'Rozwiązania',
    links: [
      { label: 'Integracja linii pakujących', href: '/rozwiazania/integracja-linii-pakujacych' },
      { label: 'Automatyzacja pakowania',     href: '/rozwiazania/automatyzacja-pakowania' },
      { label: 'Robotyzacja pakowania',       href: '/rozwiazania/robotyzacja-pakowania' },
      { label: 'Projekty custom',             href: '/rozwiazania/projekty-custom' },
    ],
  },
  {
    label: 'Maszyny',
    links: [
      { label: 'Maszyny MadejPak',       href: '/maszyny/madejpak' },
      { label: 'Maszyny partnerów',      href: '/maszyny/partnerzy' },
      { label: 'Gotowe linie pakujące',  href: '/maszyny/gotowe-linie-pakujace' },
    ],
  },
  {
    label: 'Firma',
    links: [
      { label: 'O firmie',   href: '/o-firmie' },
      { label: 'Realizacje', href: '/realizacje' },
      { label: 'Branże',     href: '/branze' },
      { label: 'Partnerzy',  href: '/partnerzy' },
      { label: 'Serwis',     href: '/serwis' },
      { label: 'Kontakt',    href: '/kontakt' },
    ],
  },
  {
    label: 'Informacje prawne',
    links: [
      { label: 'Polityka prywatności', href: '/polityka-prywatnosci' },
      { label: 'Polityka cookies',     href: '/polityka-cookies' },
    ],
  },
];

const EN_NAV_COLS = [
  {
    label: 'Solutions',
    links: [
      { label: 'Packaging Line Integration', href: '/en/rozwiazania/integracja-linii-pakujacych' },
      { label: 'Packaging Automation',       href: '/en/rozwiazania/automatyzacja-pakowania' },
      { label: 'Packaging Robotics',         href: '/en/rozwiazania/robotyzacja-pakowania' },
      { label: 'Custom Projects',            href: '/en/rozwiazania/projekty-custom' },
    ],
  },
  {
    label: 'Machines',
    links: [
      { label: 'MadejPak Machines',     href: '/en/maszyny/madejpak' },
      { label: 'Partner Machines',      href: '/en/maszyny/partnerzy' },
      { label: 'Ready Packaging Lines', href: '/en/maszyny/gotowe-linie-pakujace' },
    ],
  },
  {
    label: 'Company',
    links: [
      { label: 'About Us',    href: '/en/o-firmie' },
      { label: 'Case Studies', href: '/en/realizacje' },
      { label: 'Industries',  href: '/en/branze' },
      { label: 'Partners',    href: '/en/partnerzy' },
      { label: 'Service',     href: '/en/serwis' },
      { label: 'Contact',     href: '/en/kontakt' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/polityka-prywatnosci' },
      { label: 'Cookie Policy',  href: '/polityka-cookies' },
    ],
  },
];

const linkSx = {
  fontSize: '0.82rem',
  color: DIM,
  textDecoration: 'none',
  lineHeight: 1.5,
  transition: 'color 0.15s ease',
  '&:hover': { color: 'var(--text)' },
} as const;

export default function Footer() {
  const pathname = usePathname();
  const isEn     = pathname.startsWith('/en');
  const cols     = isEn ? EN_NAV_COLS : NAV_COLS;
  const year     = new Date().getFullYear();

  const t = {
    tagline:   isEn ? 'Packaging Technology'    : 'Technologie pakowania',
    address:   isEn ? 'Address'                 : 'Adres',
    phone:     isEn ? 'Phone'                   : 'Telefon',
    rights:    isEn ? 'All rights reserved.'    : 'Wszelkie prawa zastrzeżone.',
    design:    isEn ? 'Design & development:'   : 'Projekt i realizacja:',
  };

  return (
    <Box component="footer" sx={{ bgcolor: 'var(--bg-alt)', borderTop: `1px solid ${BORDER}`, mt: 'auto' }}>
      {/* ── Main footer content ── */}
      <Container maxWidth="xl" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '2fr 1fr 1fr 1fr 1fr' },
          gap: { xs: 6, md: 8 },
        }}>
          {/* Brand + contact */}
          <Box>
            <Typography sx={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', color: 'var(--text)', mb: 0.5 }}>
              Madej<Box component="span" sx={{ color: ACCENT }}>Pak</Box>
            </Typography>
            <Typography sx={{ fontSize: '0.72rem', color: DIM_LO, letterSpacing: '0.04em', mb: 3 }}>
              {t.tagline}
            </Typography>

            <Stack spacing={1.5}>
              <Box>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: DIM_LO, mb: 0.5 }}>
                  {t.address}
                </Typography>
                <Typography sx={{ fontSize: '0.82rem', color: DIM, lineHeight: 1.6, fontWeight: 900, }}>
                  {COMPANY.address}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: DIM_LO, mb: 0.5 }}>
                  {t.phone}
                </Typography>
                <Typography component="a" href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                  sx={{ ...linkSx,fontWeight: 900, '&:hover': { color: ACCENT }  }}>
                  {COMPANY.phone}
                </Typography>
                <Typography   sx={{ ...linkSx, '&:hover': { color: ACCENT } }}>
                  {COMPANY.wew1}
                  <br/>
                   {COMPANY.wew2}
                  <br/>
                   {COMPANY.wew3}
                  <br/>
                   {COMPANY.wew4}
                  <br/>
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: DIM_LO, mb: 0.5 }}>
                  E-mail
                </Typography>
                <Typography component="a" href={`mailto:${COMPANY.email}`}
                  sx={{ ...linkSx,fontWeight: 900, '&:hover': { color: ACCENT } }}>
                  {COMPANY.email}
                </Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: DIM_LO, mb: 0.5 }}>
                  NIP
                </Typography>
                <Typography sx={{ fontSize: '0.82rem',fontWeight: 900, color: DIM }}>{COMPANY.nip}</Typography>
              </Box>
              <Box>
                <Typography sx={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: DIM_LO, mb: 0.5 }}>
                  LinkedIn
                </Typography>
                <Typography component="a" href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer"
                  sx={{ ...linkSx,fontWeight: 900, '&:hover': { color: ACCENT } }}>
                  MadejPak
                </Typography>
              </Box>
            </Stack>
          </Box>

          {/* Nav columns */}
          {cols.map((col) => (
            <Box key={col.label}>
              <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--dim-58)', mb: 2.5 }}>
                {col.label}
              </Typography>
              <Stack spacing={1.5}>
                {col.links.map((l) => (
                  <Box key={l.href} component={Link} href={l.href} sx={linkSx}>
                    {l.label}
                  </Box>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>
      </Container>

      {/* ── Bottom bar ── */}
      <Box sx={{ borderTop: `1px solid ${BORDER}`, py: { xs: 3, md: 3.5 } }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'flex-start', sm: 'center' }, justifyContent: 'space-between', gap: 1.5 }}>
            <Typography sx={{ fontSize: '0.75rem', color: DIM_LO }}>
              © {year} {COMPANY.name}. {t.rights}
            </Typography>
            <Typography sx={{ fontSize: '0.75rem', color: DIM_LO }}>
              {t.design}{' '}
              <Box component="a" href="https://cholujdesign.com" target="_blank" rel="noopener noreferrer"
                sx={{ color: DIM, textDecoration: 'none', '&:hover': { color: 'var(--text)' }, transition: 'color 0.15s ease' }}>
                Choluj Design S.C.
              </Box>
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
