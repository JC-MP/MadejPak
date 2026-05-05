import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE, COMPANY } from '@/lib/seo.config';

const TITLE       = 'Coboty w Akcji – Automatyzacja Pakowania i Paletyzacji | MadejPak';
const DESCRIPTION = 'Zobacz roboty współpracujące w praktyce. Pokazy paletyzacji i pakowania na żywo — DOBOT CR20A, Nova 5. Zarejestruj się na dni otwarte MadejPak. Czerwiec 2026, Małopolska.';
const PAGE_URL    = `${SITE_URL}/coboty-w-akcji`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    // intencja zakupowa
    'coboty', 'cobot', 'roboty współpracujące',
    'cobot do paletyzacji', 'robot do pakowania',
    'automatyzacja produkcji', 'automatyzacja pakowania',
    'automatyczna paletyzacja',
    // zastosowania
    'paletyzacja kartonów automatycznie', 'paletyzacja worków robot',
    'robot pick and place', 'robot do układania na palecie',
    'robot do pakowania żywności', 'automatyzacja linii pakującej',
    // brandowe
    'DOBOT', 'dobot cobot', 'DOBOT Nova 5', 'DOBOT CR20A',
    // eventowe
    'coboty w akcji', 'dni otwarte automatyzacja',
    'pokaz robotów przemysłowych', 'demo robotów współpracujących',
    // long-tail
    'ile kosztuje cobot do paletyzacji', 'cobot dla małej firmy produkcyjnej',
    'automatyzacja pakowania małe serie',
    // lokalne
    'automatyzacja produkcji Polska', 'integrator robotów Polska',
    'MadejPak',
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    type:        'website',
    url:         PAGE_URL,
    siteName:    'MadejPak',
    title:       'Coboty w Akcji – Automatyzacja Pakowania i Paletyzacji | MadejPak',
    description: 'Zobacz roboty współpracujące w praktyce. Pokazy paletyzacji i pakowania na żywo — DOBOT CR20A, Nova 5. Dni otwarte MadejPak, Czerwiec 2026.',
    images: [{ url: `${SITE_URL}/images/cobots/cr20a-transparent.png`, width: 480, height: 720, alt: 'DOBOT CR — cobot przemysłowy | Coboty w Akcji MadejPak' }],
    locale: 'pl_PL',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Coboty w Akcji — Dni Otwarte MadejPak + DOBOT | Czerwiec 2026',
    description: 'Pokazy robotów współpracujących DOBOT na żywo. Paletyzacja, pick & place, automatyzacja pakowania. Dni otwarte MadejPak, Czerwiec 2026.',
    images:      [`${SITE_URL}/images/cobots/cr20a-transparent.png`],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Event',
      name: 'Coboty w Akcji — Dni Otwarte MadejPak + DOBOT',
      description: DESCRIPTION,
      url: PAGE_URL,
      eventStatus:         'https://schema.org/EventScheduled',
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      isAccessibleForFree: true,
      image: `${SITE_URL}/images/cobots/dobot-atom.png`,
      location: {
        '@type': 'Place',
        name: 'Siedziba MadejPak',
        address: {
          '@type':           'PostalAddress',
          streetAddress:     COMPANY.address.streetAddress,
          addressLocality:   COMPANY.address.addressLocality,
          postalCode:        COMPANY.address.postalCode,
          addressRegion:     COMPANY.address.addressRegion,
          addressCountry:    COMPANY.address.addressCountry,
        },
      },
      organizer: {
        '@type': 'Organization',
        name:    COMPANY.name,
        url:     COMPANY.url,
      },
      offers: {
        '@type':       'Offer',
        price:         '0',
        priceCurrency: 'PLN',
        availability:  'https://schema.org/LimitedAvailability',
        url:           `${PAGE_URL}#rejestracja`,
        validFrom:     '2026-01-01',
      },
      performer: {
        '@type': 'Organization',
        name:    'DOBOT Robotics',
        url:     'https://www.dobot-robots.com',
      },
    },
    {
      '@type':      'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'MadejPak',         item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Coboty w Akcji',   item: PAGE_URL },
      ],
    },
  ],
};

export default function CobotyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
