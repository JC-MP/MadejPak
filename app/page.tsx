import type { Metadata } from 'next';
import { SITE_URL, OG_IMAGE } from '@/lib/seo.config';

export const metadata: Metadata = {
  title: 'MadejPak – Technologie pakowania i integracja linii produkcyjnych',
  description:
    'Projektujemy i integrujemy linie pakujące, wdrażamy automatykę i robotyzację oraz dostarczamy maszyny dla przemysłu. 25 lat doświadczenia, 200+ wdrożeń, opieka serwisowa.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    url:   SITE_URL,
    title: 'MadejPak – Technologie pakowania i integracja linii produkcyjnych',
    description:
      'Projektujemy i integrujemy linie pakujące, wdrażamy automatykę i robotyzację oraz dostarczamy maszyny dla przemysłu. 25 lat doświadczenia, 200+ wdrożeń.',
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'MadejPak – technologie pakowania' }],
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

export default function HomePage() {
  return (
    <main>
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
