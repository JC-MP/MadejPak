import PartnersSection from '@/components/sections/PartnersSection';
import Box from '@mui/material/Box';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata = {
  title: 'Partnerzy technologiczni',
  description:
    'Sprawdzone technologie i zweryfikowani partnerzy — Concetti, Essegi, GSP, Technowrapp, Vimco oraz liderzy w robotyzacji. MadejPak realizuje kompleksowe projekty integracji linii pakujących.',
  alternates: {
    canonical: `${SITE_URL}/partnerzy`,
    languages: {
      'pl':        `${SITE_URL}/partnerzy`,
      'en':        `${SITE_URL}/en/partnerzy`,
      'x-default': `${SITE_URL}/partnerzy`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/partnerzy`,
    title:       'Partnerzy technologiczni | MadejPak',
    description: 'Sprawdzone technologie i zweryfikowani partnerzy — Concetti, Essegi, GSP, Technowrapp, Vimco, KUKA. MadejPak realizuje kompleksowe projekty integracji linii pakujących.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Partnerzy technologiczni – MadejPak' }],
  },
};

export default function PartnerzyPage() {
  return (
    <main>
      {/* Spacer for fixed header */}
      <Box sx={{ height: { xs: 64, lg: 72 } }} />
      <PartnersSection />
    </main>
  );
}
