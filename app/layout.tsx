import type { Metadata } from 'next';
import { headers } from 'next/headers';
import Script from 'next/script';
import ThemeRegistry from '@/components/ThemeRegistry';
import Header from '@/components/navigation/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/ui/CookieConsent';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE, COMPANY, BLOCK_INDEXING } from '@/lib/seo.config';
import './globals.css';

const GTM_ID = 'GTM-NRN8B8C';
const GA_ID  = 'G-SXXHPR7C8E';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} – Technologie pakowania i integracja linii produkcyjnych`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,

  robots: BLOCK_INDEXING
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true } },

  openGraph: {
    type:        'website',
    siteName:    SITE_NAME,
    locale:      'pl_PL',
    title:       `${SITE_NAME} – Technologie pakowania i integracja linii produkcyjnych`,
    description: SITE_DESCRIPTION,
    url:         SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: `${SITE_NAME} – technologie pakowania` }],
  },

  twitter: {
    card:        'summary_large_image',
    title:       `${SITE_NAME} – Technologie pakowania i integracja linii produkcyjnych`,
    description: SITE_DESCRIPTION,
    images:      [OG_IMAGE],
  },

  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

// ─── JSON-LD Organization schema ─────────────────────────────────────────────
const organizationSchema = {
  '@context':    'https://schema.org',
  '@type':       ['Organization', 'LocalBusiness'],
  name:          COMPANY.name,
  legalName:     COMPANY.legalName,
  url:           COMPANY.url,
  logo:          COMPANY.logo,
  email:         COMPANY.email,
  telephone:     COMPANY.phone,
  foundingDate:  COMPANY.foundingYear,
  address: {
    '@type':          'PostalAddress',
    streetAddress:    COMPANY.address.streetAddress,
    addressLocality:  COMPANY.address.addressLocality,
    postalCode:       COMPANY.address.postalCode,
    addressRegion:    COMPANY.address.addressRegion,
    addressCountry:   COMPANY.address.addressCountry,
  },
  taxID:       COMPANY.taxID,
  vatID:       COMPANY.vatID,
  sameAs:      COMPANY.sameAs,
  description: SITE_DESCRIPTION,
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') ?? '';
  const lang = pathname.startsWith('/en') ? 'en' : 'pl';

  return (
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('mp-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeRegistry>
          {/*
           * Header is fixed-position — it overlays page content.
           * Pages starting with a full-screen hero (transparent header)
           * do NOT need a spacer. For inner pages with solid BG, add:
           *   <Box sx={{ height: { xs: 60, md: 72 } }} />
           * at the top of the page component.
           */}
          <Header />
          {children}
          <Footer />
          <CookieConsent />
        </ThemeRegistry>
        {/* Google Tag Manager — afterInteractive nie blokuje renderowania */}
        <Script id="gtm" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}</Script>
        {/* Google Analytics 4 */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
      </body>
    </html>
  );
}
