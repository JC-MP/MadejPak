import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Skontaktuj się z MadejPak – zapytaj o automatyzację pakowania, robotyzację, dobór maszyn lub serwis. Biuro w Krakowie, realizacje w całej Polsce.',
  alternates: { canonical: `${SITE_URL}/kontakt` },
  openGraph: {
    url:         `${SITE_URL}/kontakt`,
    title:       'Kontakt | MadejPak',
    description: 'Skontaktuj się z MadejPak – zapytaj o automatyzację pakowania, robotyzację, dobór maszyn lub serwis.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'Kontakt – MadejPak' }],
  },
};

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
