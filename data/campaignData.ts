// ─── Kampania promocyjna: modal na stronie głównej ────────────────────────────
// Ten plik trafia do paczki JS strony głównej, więc trzyma tylko lekką konfigurację.
// Treści podstron: data/campaignMachines.ts.
//
// Wyłączenie modala:     enabled: false w ACTIVE_CAMPAIGN.
// Podmiana kampanii:     zmień `id` (użytkownicy zobaczą nową kampanię mimo
//                        zamknięcia poprzedniej) oraz treści w `content`.
// Maszyna sprzedana:     ustaw jej `promo: false` w CAMPAIGN_MACHINES
//                        (hasło znika z modala, podstrony, formularza i meta description,
//                        a wpis z listy wydarzeń).
//
// Hasło akcji podajemy bez kwot, rabatów, liczby sztuk i terminów dostawy.

export type CampaignLang = 'pl' | 'en';

export const CAMPAIGN_MACHINES = {
  pactur: {
    slug: 'pactur-auto-60-unica',
    name: 'Pactur AUTO 60 UNICA',
    promo: true,
    image: '/images/machines/campaign/pactur-auto-60-unica.jpg',
  },
  thera: {
    slug: 'colimatic-thera-450',
    name: 'Colimatic THERA 450',
    promo: true,
    image: '/images/machines/campaign/colimatic-thera-450.jpg',
  },
};

// Kolory wyłącznie dla oznaczeń promocji. Biały tekst spełnia na nich kontrast WCAG AA.
export const PROMO_RED = '#C62828';
export const PROMO_RED_GRADIENT = 'linear-gradient(90deg, #B71C1C 0%, #D32F2F 50%, #B71C1C 100%)';

export const PROMO_COPY: Record<CampaignLang, { label: string; note: string; ask: string; badge: string; banner: string; bannerNote: string }> = {
  pl: {
    label: 'Cena promocyjna do wyczerpania zapasów',
    note: 'Cena promocyjna na maszynę w tej konfiguracji, do wyczerpania zapasów.',
    ask: 'Zapytaj o cenę promocyjną',
    badge: 'Przecena',
    banner: 'Akcja promocyjna',
    bannerNote: 'Przecena do wyczerpania zapasów',
  },
  en: {
    label: 'Promotional price while stocks last',
    note: 'Promotional price on the machine in this configuration, while stocks last.',
    ask: 'Ask about the promotional price',
    badge: 'Reduced price',
    banner: 'Promotion',
    bannerNote: 'Reduced price while stocks last',
  },
};

interface PopupProduct {
  label: string;
  heading: string;
  description: string;
  cta: string;
  href: string;
  image: string;
  imageAlt: string;
  promo: boolean;
}

interface PopupCopy {
  promoTitle: string;     // gdy promocja obejmuje wszystkie maszyny z modala
  promoSubtitle: string;
  dialogTitle: string;    // gdy któraś maszyna jest już sprzedana (`promo: false`)
  products: PopupProduct[];
  footer: string;
  closeLabel: string;
  laterLabel: string;
}

export interface PopupCampaign {
  id: string;
  enabled: boolean;
  delayMs: number;
  hideAfter: string | null; // YYYY-MM-DD; null = bez daty końca
  showOnPhones: boolean;
  content: Record<CampaignLang, PopupCopy>;
}

const { pactur, thera } = CAMPAIGN_MACHINES;

export const ACTIVE_CAMPAIGN: PopupCampaign = {
  id: 'pactur-colimatic-2026',
  enabled: true,
  delayMs: 3000,
  hideAfter: null,
  showOnPhones: true,
  content: {
    pl: {
      promoTitle: 'Dwie technologie pakowania w obniżonej cenie',
      promoSubtitle: 'Nowe możliwości dla Twojej produkcji.',
      dialogTitle: 'Dwie technologie pakowania. Nowe możliwości dla Twojej produkcji.',
      products: [
        {
          label: pactur.name,
          heading: 'Automatyczne pakowanie termokurczliwe',
          description: 'Zautomatyzuj foliowanie produktów, popraw estetykę opakowań i ogranicz pracę ręczną.',
          cta: 'Poznaj rozwiązanie',
          href: `/maszyny/${pactur.slug}`,
          image: pactur.image,
          imageAlt: 'Pactur AUTO 60 UNICA z oddzielnym tunelem obkurczającym',
          promo: pactur.promo,
        },
        {
          label: thera.name,
          heading: 'Termoformowanie, próżnia i MAP',
          description: 'Automatyczne formowanie i pakowanie produktów spożywczych. Wydajność do 1680 opakowań/h w określonej konfiguracji.',
          cta: 'Poznaj rozwiązanie',
          href: `/maszyny/${thera.slug}`,
          image: thera.image,
          imageAlt: 'Colimatic THERA 450, automatyczna linia termoformująca',
          promo: thera.promo,
        },
      ],
      footer: 'MadejPak – 25 lat doświadczenia, własny serwis i integracja kompletnych linii pakujących.',
      closeLabel: 'Zamknij',
      laterLabel: 'Może później',
    },
    en: {
      promoTitle: 'Two packaging technologies at a reduced price',
      promoSubtitle: 'New possibilities for your production.',
      dialogTitle: 'Two packaging technologies. New possibilities for your production.',
      products: [
        {
          label: pactur.name,
          heading: 'Automatic shrink wrapping',
          description: 'Automate film wrapping, improve pack appearance and reduce manual work.',
          cta: 'Explore the solution',
          href: `/en/maszyny/${pactur.slug}`,
          image: pactur.image,
          imageAlt: 'Pactur AUTO 60 UNICA with a separate shrink tunnel',
          promo: pactur.promo,
        },
        {
          label: thera.name,
          heading: 'Thermoforming, vacuum and MAP',
          description: 'Automatic forming and packing of food products. Up to 1,680 packs/h in a specified configuration.',
          cta: 'Explore the solution',
          href: `/en/maszyny/${thera.slug}`,
          image: thera.image,
          imageAlt: 'Colimatic THERA 450 automatic thermoforming line',
          promo: thera.promo,
        },
      ],
      footer: 'MadejPak – 25 years of experience, in-house service and integration of complete packaging lines.',
      closeLabel: 'Close',
      laterLabel: 'Maybe later',
    },
  },
};
