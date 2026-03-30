import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { SITE_URL, SITE_NAME, OG_IMAGE, BLOCK_INDEXING } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – Packaging Line Integration & Automation`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'MadejPak designs and integrates packaging lines, implements automation and robotics, and delivers custom packaging machinery for industrial production.',

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
