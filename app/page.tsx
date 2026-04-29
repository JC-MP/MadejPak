import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'MadejPak – Integrator linii pakujących i automatyzacja pakowania',
  description:
    'MadejPak projektuje i integruje linie pakujące, wdraża automatyzację i robotyzację pakowania oraz zapewnia serwis maszyn pakujących. 25 lat doświadczenia, 200+ wdrożeń w przemyśle spożywczym, chemicznym i innych branżach.',
  keywords: [
    'MadejPak', 'Madej Pak', 'Madej',
    'integrator linii pakujących', 'integracja linii pakujących',
    'automatyzacja pakowania', 'robotyzacja pakowania',
    'maszyny pakujące', 'linie pakujące', 'linia pakująca',
    'automat do pakowania', 'pakowanie zbiorcze',
    'serwis maszyn pakujących', 'modernizacja linii pakujących',
    'systemy paletyzacji', 'flow pack', 'VFFS',
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
    title: 'MadejPak – Integrator linii pakujących i automatyzacja pakowania',
    description:
      'MadejPak projektuje i integruje linie pakujące, wdraża automatyzację i robotyzację pakowania oraz zapewnia serwis maszyn pakujących. 25 lat doświadczenia, 200+ wdrożeń.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak – integrator linii pakujących' }],
  },
};

import HeroSection from '@/components/sections/HeroSection';
// HIDDEN: przywróć importy gdy sekcje zostaną odkomentowane
// import ClientsSection from '@/components/sections/ClientsSection';
import WhyMadejPakSection from '@/components/sections/WhyMadejPakSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
// import FeaturedCasesSection from '@/components/sections/FeaturedCasesSection';
// import PartnersStripSection from '@/components/sections/PartnersStripSection';
import ServiceTeaserSection from '@/components/sections/ServiceTeaserSection';
import EventsSection from '@/components/sections/EventsSection';
import InterpackBanner from '@/components/sections/InterpackBanner';

export default function HomePage() {
  return (
    <main>
      {/* Tymczasowy baner Interpack 2026 — znika po 20 maja 2026 */}
      <InterpackBanner />

      {/* 1. Hero — kim jesteśmy, wideo, liczby */}
      <HeroSection />

      {/* HIDDEN: przywróć usuwając komentarze */}
      {/* <ClientsSection /> */}

      {/* 2. Dlaczego MadejPak — differentiator vs zwykły dystrybutor */}
      <WhyMadejPakSection />

      {/* 3. Rozwiązania — konkretne problemy i odpowiedzi */}
      <SolutionsSection />

      {/* HIDDEN: przywróć usuwając komentarze */}
      {/* <FeaturedCasesSection /> */}
      {/* <PartnersStripSection /> */}

      {/* 6. Serwis — strategiczny kierunek firmy */}
      <ServiceTeaserSection />

      {/* 7. Targi i wydarzenia — aktywność branżowa */}
      <EventsSection />
    </main>
  );
}
