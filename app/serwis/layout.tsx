import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Serwis maszyn pakujących',
  description:
    'Serwis gwarancyjny i pogwarancyjny maszyn pakujących, tele-serwis, części zamienne, modernizacje i planowe przeglądy. MadejPak – wsparcie techniczne dla przemysłu.',
  alternates: { canonical: `${SITE_URL}/serwis` },
  openGraph: {
    url:         `${SITE_URL}/serwis`,
    title:       'Serwis maszyn pakujących | MadejPak',
    description: 'Serwis gwarancyjny i pogwarancyjny maszyn pakujących, tele-serwis, części zamienne, modernizacje i planowe przeglądy.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Serwis maszyn pakujących – MadejPak' }],
  },
};

export default function SerwisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
