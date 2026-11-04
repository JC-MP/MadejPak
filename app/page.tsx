import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE, NOTABLE_CLIENTS } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'MadejPak – Producent i integrator maszyn oraz linii pakujących',
  description:
    'Polski producent i integrator maszyn oraz kompletnych linii pakujących. Automatyzacja, robotyzacja, własne rozwiązania, serwis i magazyn części w Polsce. 25 lat, 200+ wdrożeń.',
  keywords: [
    'MadejPak', 'Madej Pak', 'Madej',
    'integrator linii pakujących', 'integracja linii pakujących',
    'autoryzowany przedstawiciel Essegi', 'autoryzowany przedstawiciel GSP',
    'wyłączny przedstawiciel Essegi', 'przedstawiciel GSP Polska',
    'automatyzacja pakowania', 'robotyzacja pakowania',
    'maszyny pakujące', 'linie pakujące', 'linia pakująca',
    'automat do pakowania', 'pakowanie zbiorcze',
    'serwis maszyn pakujących', 'modernizacja linii pakujących',
    'systemy paletyzacji', 'flow pack', 'VFFS',
    'realizacje MadejPak', 'wdrożenia pakowanie',
    ...NOTABLE_CLIENTS,
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      'pl':        `${SITE_URL}/`,
      'en':        `${SITE_URL}/en`,
      'x-default': `${SITE_URL}/`,
    },
  },
  openGraph: {
    url:   SITE_URL,
    title: 'MadejPak – Producent i integrator maszyn oraz linii pakujących',
    description:
      'Polski producent i integrator maszyn oraz kompletnych linii pakujących. Automatyzacja, robotyzacja, własne rozwiązania, serwis i magazyn części w Polsce.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak – integrator linii pakujących' }],
  },
};

import HeroSection from '@/components/sections/HeroSection';
import ClientsSection from '@/components/sections/ClientsSection';
import TrustDifferentiator from '@/components/sections/TrustDifferentiator';
import WhyMadejPakSection from '@/components/sections/WhyMadejPakSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
// import FeaturedCasesSection from '@/components/sections/FeaturedCasesSection';
import PartnersStripSection from '@/components/sections/PartnersStripSection';
import ServiceTeaserSection from '@/components/sections/ServiceTeaserSection';
import EventsSection from '@/components/sections/EventsSection';

import PromoBanner from '@/components/campaign/PromoBanner';
import SymasBanner from '@/components/sections/SymasBanner';
import CampaignPopup from '@/components/sections/CampaignPopup';

export default function HomePage() {
  return (
    <main>
      {/* Baner akcji promocyjnej — znika, gdy żadna maszyna nie ma `promo: true` (data/campaignData.ts) */}
      <PromoBanner lang="pl" showLinks sx={{ mt: { xs: '60px', md: '72px' } }} />

      {/* Baner targów SYMAS & MAINTENANCE 2026 — linkuje do zaproszenia, znika po 16.10.2026 */}
      <SymasBanner />

      {/* Modal aktywnej kampanii: data/campaignData.ts */}
      <CampaignPopup />

{/* 1. Hero — kim jesteśmy, wideo, liczby */}
      <HeroSection />

      {/* Pasek logo klientów — przewijany marquee */}
      <ClientsSection />

      {/* Wyróżnik: autoryzowany przedstawiciel vs przypadkowy importer + dowód Skawa */}
      <TrustDifferentiator />

      {/* 2. Dlaczego MadejPak — differentiator vs zwykły dystrybutor */}
      <WhyMadejPakSection />

      {/* 3. Rozwiązania — konkretne problemy i odpowiedzi */}
      <SolutionsSection />

      {/* HIDDEN: przywróć usuwając komentarze */}
      {/* <FeaturedCasesSection /> */}

      {/* Pasek logo partnerów technologicznych */}
      <PartnersStripSection />

      {/* 6. Serwis — strategiczny kierunek firmy */}
      <ServiceTeaserSection />

      {/* 7. Targi i wydarzenia — aktywność branżowa */}
      <EventsSection />
    </main>
  );
}
