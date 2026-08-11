import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Serwis i modernizacja maszyn pakujących – gwarancja i pogwarancja',
  description:
    'Serwis gwarancyjny i pogwarancyjny maszyn pakujących, modernizacja istniejącej linii pakującej, tele-serwis, części zamienne i planowe przeglądy. Szybkie wsparcie techniczne.',
  keywords: [
    'serwis maszyn pakujących', 'serwis pogwarancyjny maszyn', 'modernizacja linii pakujących',
    'modernizacja starej linii pakującej', 'naprawa maszyn pakujących',
    'części zamienne maszyny pakujące', 'przegląd maszyn pakujących',
    'tele-serwis maszyny pakujące',
  ],
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
