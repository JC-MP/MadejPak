import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { SITE_URL, OG_IMAGE, COMPANY } from '@/lib/seo.config';
import CobotyConsentGate from '@/components/ui/CobotyConsentGate';

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
      startDate:           '2026-06-08T09:00:00+02:00',
      endDate:             '2026-06-19T16:00:00+02:00',
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
    <div className={GeistSans.className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/*
        Scoped CSS tylko dla coboty page.
        W light mode dark-sekcje są ciemnym grafitem (#1c1c22) zamiast pure black (#0f0f10)
        żeby kontrast między sekcjami nie był zbyt agresywny.
        W dark mode zostają bez zmian.
      */}
      <style>{`
        /* Coboty page — dark-section tokens */
        :root {
          --cd-bg:     #f5f5f7;
          --cd-bg2:    #ececef;
          --cd-text:   rgba(0,0,0,0.88);
          --cd-dim:    rgba(0,0,0,0.52);
          --cd-mute:   rgba(0,0,0,0.30);
          --cd-border: rgba(0,0,0,0.09);
          --cd-surf:   rgba(0,0,0,0.04);
        }
        [data-theme="dark"] {
          --cd-bg:     #0f0f10;
          --cd-bg2:    #18181a;
          --cd-text:   #ffffff;
          --cd-dim:    rgba(255,255,255,0.48);
          --cd-mute:   rgba(255,255,255,0.28);
          --cd-border: rgba(255,255,255,0.08);
          --cd-surf:   rgba(255,255,255,0.04);
        }
      `}</style>
      <CobotyConsentGate />
      {children}
    </div>
  );
}
