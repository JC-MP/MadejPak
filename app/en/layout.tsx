import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE_URL, SITE_NAME, OG_IMAGE, NOTABLE_CLIENTS, BLOCK_INDEXING } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: {
    default: 'Packaging machine manufacturer & line integrator',
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'MadejPak — authorized representative of Essegi and GSP in Poland and a packaging line integrator. We design, build and service machines. Trusted by Synthos, Solbet, Makarony Polskie and Gold Drop.',
  keywords: [
    'MadejPak', 'packaging line integrator', 'packaging automation',
    'authorized representative Essegi', 'authorized representative GSP',
    'packaging robotics', 'packaging machines', 'flow pack', 'VFFS',
    'palletising systems', 'packaging line service', 'end of line',
    ...NOTABLE_CLIENTS,
  ],

  robots: BLOCK_INDEXING
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true } },

  openGraph: {
    type:        'website',
    siteName:    SITE_NAME,
    locale:      'en_US',
    title:       `${SITE_NAME} – Packaging Line Integration & Automation`,
    description: 'MadejPak designs and integrates packaging lines, implements automation and robotics, and delivers custom packaging machinery for industrial production.',
    url:         `${SITE_URL}/en`,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} – packaging technology` }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       `${SITE_NAME} – Packaging Line Integration & Automation`,
    description: 'MadejPak designs and integrates packaging lines, implements automation and robotics, and delivers custom packaging machinery for industrial production.',
    images:      [OG_IMAGE],
  },

  alternates: {
    canonical:  `${SITE_URL}/en`,
    languages: {
      'pl':       SITE_URL,
      'en':       `${SITE_URL}/en`,
      'x-default': SITE_URL,
    },
  },
};

export default function EnLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
