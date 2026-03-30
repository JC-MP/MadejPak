import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact MadejPak — enquire about packaging automation, robotics, machine selection or service. Office near Kraków, projects across Europe.',
  alternates: {
    canonical: `${SITE_URL}/en/kontakt`,
    languages: {
      'pl': `${SITE_URL}/kontakt`,
      'en': `${SITE_URL}/en/kontakt`,
    },
  },
  openGraph: {
    url:         `${SITE_URL}/en/kontakt`,
    title:       'Contact | MadejPak',
    description: 'Contact MadejPak — enquire about packaging automation, robotics, machine selection or service.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Contact – MadejPak' }],
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
