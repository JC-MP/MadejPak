import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { SITE_URL } from '@/lib/seo.config';

const ACCENT = '#E8610A';
const TITLE = 'Coboty w Akcji – akcja zakończona';
const DESCRIPTION =
  'Akcja Coboty w Akcji została zakończona. Dziękujemy za zainteresowanie. O coboty i robotyzację pakowania możesz zapytać zespół MadejPak.';
const PAGE_URL = `${SITE_URL}/coboty-w-akcji`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  // Strona zostaje dla starych linków, ale nie konkuruje w Google z /maszyny/robotyzacja-pakowania.
  robots: { index: false, follow: true },
  alternates: { canonical: PAGE_URL },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'MadejPak',
    title: `${TITLE} | MadejPak`,
    description: DESCRIPTION,
    images: [{ url: `${SITE_URL}/images/cobots/cr20a-transparent.png`, width: 480, height: 720, alt: 'Cobot DOBOT' }],
    locale: 'pl_PL',
  },
};

const buttonSx = {
  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', px: 3, py: 1.4,
  borderRadius: '4px', fontSize: '0.86rem', fontWeight: 800, textDecoration: 'none',
  transition: 'background-color 0.15s ease, border-color 0.15s ease, color 0.15s ease',
} as const;

export default function CobotyWAkcjiPage() {
  return (
    <Box component="main" sx={{ bgcolor: 'var(--bg)', color: 'var(--text)' }}>
      <Box sx={{ height: { xs: 60, md: 72 } }} />
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '3fr 2fr' }, gap: { xs: 4, md: 8 }, alignItems: 'center', minHeight: { md: '72vh' }, py: { xs: 8, md: 10 } }}>
          <Box>
            <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: ACCENT, mb: 2 }}>
              Coboty w Akcji · akcja zakończona
            </Typography>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.3rem', md: '3.4rem' }, fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--dim-85)', mb: 3 }}>
              Dziękujemy za zainteresowanie!
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.75, color: 'var(--dim-72)', maxWidth: 560, mb: 1.5 }}>
              Akcja Coboty w Akcji dobiegła końca, a rejestracja na pokazy jest już zamknięta.
            </Typography>
            <Typography sx={{ fontSize: { xs: '1rem', md: '1.1rem' }, lineHeight: 1.75, color: 'var(--dim-72)', maxWidth: 560, mb: 4 }}>
              Jeśli myślisz o cobotach lub robotyzacji pakowania w swoim zakładzie, chętnie o tym porozmawiamy.
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
              <Box component={Link} href="/maszyny/robotyzacja-pakowania" sx={{ ...buttonSx, bgcolor: ACCENT, color: '#fff', '&:hover': { bgcolor: '#D45509' } }}>
                Robotyzacja pakowania
              </Box>
              <Box component={Link} href="/kontakt" sx={{ ...buttonSx, border: '1px solid var(--border)', color: 'var(--dim-75)', '&:hover': { borderColor: ACCENT, color: ACCENT } }}>
                Kontakt
              </Box>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block' }, position: 'relative', aspectRatio: '2 / 3', maxHeight: 520, width: '100%' }}>
            <Image src="/images/cobots/cr20a-transparent.png" alt="Cobot DOBOT" fill sizes="400px" style={{ objectFit: 'contain' }} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
