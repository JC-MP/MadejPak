// ─── Treści podstron maszyn z akcji promocyjnej ───────────────────────────────
// Modal, hasło promocji i przełączniki `promo`: data/campaignData.ts.
//
// Źródła danych:
// - THERA 450: oferta Colimatic (konfiguracja) i broszura THERA 450,
// - AUTO 60 UNICA: karta „Lady Pack Auto 40/60 Unica”, strony pactur.com.

import { CAMPAIGN_MACHINES, type CampaignLang } from '@/data/campaignData';

export interface CampaignImage {
  src: string;
  width: number;
  height: number;
}

export interface CampaignVideo {
  youtubeId: string;
  uploadDate: string; // wymagane przez Google dla VideoObject
  duration: string;   // ISO 8601
}

interface MachineCopy {
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  lead: string;
  maker: string;
  imageAlt: string;
  imageNote?: string;
  how: string[];
  benefits: { title: string; desc: string }[];
  applications: string[];
  specs: { label: string; value: string }[];
  specsNote: string;
  galleryAlts: string[];
  galleryNote?: string;
  videos: { title: string; caption: string; description: string }[];
}

export interface CampaignMachine {
  slug: string;
  name: string;
  promo: boolean;
  image: CampaignImage;
  gallery: CampaignImage[];
  videos: CampaignVideo[];
  content: Record<CampaignLang, MachineCopy>;
}

export const PACTUR_AUTO_60: CampaignMachine = {
  ...CAMPAIGN_MACHINES.pactur,
  image: { src: CAMPAIGN_MACHINES.pactur.image, width: 1280, height: 960 },
  gallery: [{ src: '/images/machines/campaign/pactur-auto-60-unica-panel.jpg', width: 1400, height: 1050 }],
  videos: [{ youtubeId: 'Xq_rFumA5EM', uploadDate: '2009-02-11T15:19:40-08:00', duration: 'PT7M31S' }],
  content: {
    pl: {
      metaTitle: 'Pactur AUTO 60 UNICA – pakowanie termokurczliwe',
      metaDescription:
        'Pactur AUTO 60 UNICA z oddzielnym tunelem: automatyczne foliowanie termokurczliwe i lepsza estetyka opakowań.',
      tagline: 'Automatyczne pakowanie termokurczliwe z oddzielnym tunelem',
      lead: 'Zautomatyzuj foliowanie produktów, popraw estetykę opakowań i ogranicz pracę ręczną. Automatyczna zgrzewarka kątowa i oddzielny tunel obkurczający pracują jako jeden proces.',
      maker: 'Producent: Pactur, Zola Predosa (Bolonia), Włochy',
      imageAlt: 'Pactur AUTO 60 UNICA — automatyczna zgrzewarka kątowa z oddzielnym tunelem obkurczającym',
      how: [
        'Produkt jest wykrywany i automatycznie przenoszony przez strefę zgrzewania, więc operator nie uruchamia każdego cyklu ręcznie. Zgrzewarka kątowa z monolitycznym nożem zgrzewającym zamyka produkt w folii.',
        'Opakowanie trafia następnie do oddzielnego tunelu, gdzie kontrolowany obieg gorącego powietrza obkurcza folię. Dłuższy i mocniejszy tunel daje, według producenta, bardziej równomierne obkurczenie i wysoką estetykę opakowania.',
      ],
      benefits: [
        { title: 'Mniej pracy ręcznej', desc: 'Automatyczne wykrywanie i przenoszenie produktu sprawia, że operator nie musi uruchamiać każdego cyklu.' },
        { title: 'Lepsza estetyka opakowań', desc: 'Dłuższy i mocniejszy tunel obkurcza folię równomierniej, co widać na gotowym opakowaniu.' },
        { title: 'Elastyczność formatów', desc: 'Rozdzielenie zgrzewania i obkurczania ułatwia dopasowanie procesu do różnych produktów i rozmiarów opakowań.' },
        { title: 'Sprawna zmiana formatu', desc: 'Regulacje z 20 programami w pamięci i automatyczne przezbrojenie na rozmiar produktu.' },
        { title: 'Praca samodzielna lub w linii', desc: 'Maszyna może działać samodzielnie albo zostać włączona w linię, z przenośnikami przed i za maszyną.' },
        { title: 'Próba na Twoim produkcie', desc: 'Producent umożliwia testy pakowania na produktach lub próbkach klienta, co pomaga ocenić efekt przed decyzją.' },
      ],
      applications: ['Żywność i pieczywo', 'Pudełka i multipaki', 'Kosmetyki i farmaceutyki', 'Druki i artykuły papiernicze', 'Artykuły gospodarstwa domowego', 'Produkty techniczne'],
      specs: [
        { label: 'Typ maszyny', value: 'Automatyczna zgrzewarka kątowa + oddzielny tunel obkurczający' },
        { label: 'Rama zgrzewająca', value: '510 × 610 mm' },
        { label: 'Maks. wysokość produktu', value: '150 mm (wersja standardowa)' },
        { label: 'Folia', value: 'PO i PE, półrękaw' },
        { label: 'Maks. rolka folii', value: 'szer. 700 mm, Ø 350 mm' },
        { label: 'Prędkość przenośnika', value: '8–28 m/min' },
        { label: 'Sterowanie', value: 'PLC, panel dotykowy, 20 programów w pamięci' },
        { label: 'Sprężone powietrze', value: '6–8 bar' },
        { label: 'Zasilanie', value: '380 V, 3 fazy + N + PE' },
      ],
      specsNote:
        'Dane z karty producenta dla AUTO 60 UNICA. Wymiary całkowite, moc i wydajność zależą od konfiguracji z oddzielnym tunelem oraz od produktu — potwierdzamy je w ofercie.',
      galleryAlts: ['Panel dotykowy AUTO 60 UNICA z osobnymi ustawieniami tunelu i maszyny'],
      videos: [
        {
          title: 'Pactur AUTO 60 UNICA — film producenta',
          caption: 'Archiwalny film producenta z 2009 r. pokazuje zasadę działania AUTO 60 UNICA. Wygląd i wyposażenie oferowanej wersji z oddzielnym tunelem mogą się różnić.',
          description: 'Automatyczna zgrzewarka kątowa do folii termokurczliwej Pactur AUTO 60 UNICA — film producenta.',
        },
      ],
    },
    en: {
      metaTitle: 'Pactur AUTO 60 UNICA – Automatic Shrink Wrapping',
      metaDescription:
        'Pactur AUTO 60 UNICA with a separate tunnel: automatic shrink wrapping and better pack appearance.',
      tagline: 'Automatic shrink wrapping with a separate tunnel',
      lead: 'Automate film wrapping, improve pack appearance and reduce manual work. An automatic L-sealer and a separate shrink tunnel work as one process.',
      maker: 'Manufacturer: Pactur, Zola Predosa (Bologna), Italy',
      imageAlt: 'Pactur AUTO 60 UNICA — automatic L-sealer with a separate shrink tunnel',
      how: [
        'The product is detected and transferred automatically through the sealing area, so the operator does not start each cycle by hand. An L-sealer with a monolithic sealing knife encloses the product in film.',
        'The pack then enters a separate tunnel, where controlled hot-air circulation shrinks the film. According to the manufacturer, the longer and more powerful tunnel gives more uniform shrinkage and a high-quality pack appearance.',
      ],
      benefits: [
        { title: 'Less manual work', desc: 'Automatic product detection and transfer mean the operator does not have to start each cycle.' },
        { title: 'Better pack appearance', desc: 'A longer, more powerful tunnel shrinks the film more evenly, which shows on the finished pack.' },
        { title: 'Format flexibility', desc: 'Separating sealing and shrinking makes it easier to adapt the process to different products and pack sizes.' },
        { title: 'Efficient format changes', desc: 'Adjustments with 20 stored programmes and automatic size changeover.' },
        { title: 'Stand-alone or in a line', desc: 'The machine can work on its own or be integrated into a line, with conveyors before and after it.' },
        { title: 'Trials on your product', desc: 'The manufacturer offers packaging tests on customer products or samples, which helps assess the result before deciding.' },
      ],
      applications: ['Food and bakery', 'Boxes and multipacks', 'Cosmetics and pharmaceuticals', 'Printed products and stationery', 'Household goods', 'Technical products'],
      specs: [
        { label: 'Machine type', value: 'Automatic L-sealer + separate shrink tunnel' },
        { label: 'Sealer size', value: '510 × 610 mm' },
        { label: 'Max. product height', value: '150 mm (standard version)' },
        { label: 'Film', value: 'PO and PE, centre-folded' },
        { label: 'Max. film reel', value: 'width 700 mm, Ø 350 mm' },
        { label: 'Conveyor speed', value: '8–28 m/min' },
        { label: 'Control', value: 'PLC, touch panel, 20 stored programmes' },
        { label: 'Compressed air', value: '6–8 bar' },
        { label: 'Power supply', value: '380 V, 3 phases + N + E' },
      ],
      specsNote:
        'Data from the manufacturer’s AUTO 60 UNICA sheet. Overall dimensions, power and output depend on the configuration with the separate tunnel and on the product — we confirm them in the offer.',
      galleryAlts: ['AUTO 60 UNICA touch panel with separate tunnel and machine settings'],
      videos: [
        {
          title: 'Pactur AUTO 60 UNICA — manufacturer’s video',
          caption: 'An archive manufacturer’s video from 2009 shows how the AUTO 60 UNICA works. The appearance and equipment of the offered version with a separate tunnel may differ.',
          description: 'Pactur AUTO 60 UNICA automatic L-sealer for shrink film — manufacturer’s video.',
        },
      ],
    },
  },
};

export const COLIMATIC_THERA_450: CampaignMachine = {
  ...CAMPAIGN_MACHINES.thera,
  image: { src: CAMPAIGN_MACHINES.thera.image, width: 1135, height: 558 },
  gallery: [
    { src: '/images/machines/campaign/colimatic-thera-450-stacja.jpg', width: 506, height: 299 },
    { src: '/images/machines/campaign/colimatic-thera-450-mechanizm.jpg', width: 642, height: 358 },
  ],
  videos: [
    { youtubeId: '2Bg5wEZZfw8', uploadDate: '2019-03-19T08:52:49-07:00', duration: 'PT1M15S' },
    { youtubeId: '7TaMmam6wpE', uploadDate: '2020-03-23T06:37:55-07:00', duration: 'PT1M7S' },
  ],
  content: {
    pl: {
      metaTitle: 'Colimatic THERA 450 – termoformowanie, próżnia i MAP',
      metaDescription:
        'Colimatic THERA 450: termoformowanie z próżnią i MAP oraz instalacją gazową, do 1680 op./h w określonej konfiguracji.',
      tagline: 'Termoformowanie, pakowanie próżniowe i MAP',
      lead: 'Automatyczne formowanie i pakowanie produktów spożywczych. Oferowana konfiguracja ma system pakowania próżniowego oraz MAP wraz z instalacją gazową — do 1680 opakowań/h przy formacie 200 × 150 mm.',
      maker: 'Producent: Colimatic (Coligroup), Chiari, Włochy — od 1973\u00A0r.',
      imageAlt: 'Colimatic THERA 450 — automatyczna linia termoformująca',
      imageNote: 'Ilustracja poglądowa podobnej maszyny, materiał producenta.',
      how: [
        'Folia dolna jest wstępnie nagrzewana, a w stacji formowania powstają w niej zagłębienia opakowań (próżnia i sprężone powietrze). Produkt trafia do nich w strefie załadunku — w tej konfiguracji ręcznie, przez operatora.',
        'W stacji zgrzewania z opakowania usuwane jest powietrze i, zależnie od zastosowania, wprowadzany gaz ochronny (MAP), a następnie zgrzewana jest folia górna. Cięcie poprzeczne i wzdłużne rozdziela opakowania, a taśma wyjściowa je odbiera.',
      ],
      benefits: [
        { title: 'Próżnia i MAP w jednej maszynie', desc: 'System próżniowy z cyfrową kontrolą i instalacja gazowa z czujnikiem ciśnienia i zbiornikiem.' },
        { title: 'Mniej odpadu folii', desc: 'Według producenta odpad to tylko 10 mm z boku i wyłącznie na folii dolnej, a oszczędność folii sięga 30%.' },
        { title: 'Sprawna zmiana formatu', desc: 'Uchylne stacje formowania i zgrzewania ze wspomaganym otwieraniem. Konfiguracja obejmuje matryce na dwa formaty.' },
        { title: 'Powtarzalny zgrzew', desc: 'Czterokolumnowy mechanizm podnoszenia równomiernie rozkłada siły i wspiera stałą jakość cyklu.' },
        { title: 'Prosta obsługa i teleserwis', desc: 'Regulowany panel 12″ do obsługi w rękawicach, do 99 receptur, diagnostyka i zdalna pomoc.' },
        { title: 'Higieniczna konstrukcja', desc: 'Rama i osłony ze stali nierdzewnej AISI 304 oraz powierzchnie ze spadkiem ułatwiające mycie.' },
      ],
      applications: ['Wędliny i mięso', 'Świeży makaron', 'Sery', 'Ryby i owoce morza', 'Warzywa', 'Kanapki'],
      specs: [
        { label: 'Technologia', value: 'Próżnia + MAP, instalacja gazowa' },
        { label: 'Formowanie', value: 'Próżnia + powietrze, ze wstępnym nagrzewaniem' },
        { label: 'Komory formowania i zgrzewania', value: '400 × 300 × 60 mm' },
        { label: 'Format 1', value: '200 × 300 mm, 2 opakowania w cyklu' },
        { label: 'Format 2', value: '200 × 150 mm, 4 opakowania w cyklu' },
        { label: 'Głębokość opakowania', value: '10–60 mm' },
        { label: 'Wydajność', value: 'do 6/7 cykli/min; do 1680 op./h (format 2)' },
        { label: 'Folia dolna', value: 'Sztywna PET/PE 300–350 µm lub elastyczna PA/PE 150–200 µm, szer. 420 mm' },
        { label: 'Folia górna', value: 'PA/PE 80–90 µm, szer. 400 mm, fotokomórka nadruku' },
        { label: 'Załadunek', value: 'Ręczny, strefa ok. 1200 mm' },
        { label: 'Cięcie', value: 'Poprzeczne: wykrojnik z narożnikami R9; wzdłużne: noże obrotowe, 2 tory' },
        { label: 'Sterowanie', value: 'PLC Siemens S7-1200, panel dotykowy 12″, do 99 receptur' },
        { label: 'Podzespoły', value: 'Pompa próżniowa Busch 300 m³/h, pneumatyka Festo' },
        { label: 'Zasilanie', value: '400 V, 3 fazy + N + PE, 50 Hz; znak CE' },
      ],
      specsNote:
        'Dane oferowanej konfiguracji. Wymiary są orientacyjne i potwierdzane przy zamówieniu. Wydajność zależy od folii zatwierdzonej przez producenta, podawania produktu, głębokości formy, poziomu próżni i odległości pomp.',
      galleryAlts: ['Uchylna stacja formowania THERA 450', 'Czterokolumnowy mechanizm podnoszenia THERA 450'],
      galleryNote: 'Ilustracje poglądowe, materiały producenta.',
      videos: [
        {
          title: 'THERA 450 — MAP świeżego makaronu',
          caption: 'Film producenta: pakowanie świeżego makaronu w atmosferze ochronnej. Konfiguracja na filmie może różnić się od oferowanej.',
          description: 'Colimatic THERA 450 — pakowanie świeżego makaronu w atmosferze ochronnej (MAP), film producenta.',
        },
        {
          title: 'THERA 450 — próżnia, wędliny',
          caption: 'Film producenta: pakowanie próżniowe i termokurczliwe wędlin. Konfiguracja na filmie może różnić się od oferowanej.',
          description: 'Colimatic THERA 450 — pakowanie próżniowe i termokurczliwe wędlin, film producenta.',
        },
      ],
    },
    en: {
      metaTitle: 'Colimatic THERA 450 – Thermoforming, Vacuum and MAP',
      metaDescription:
        'Colimatic THERA 450: thermoforming with vacuum, MAP and a gas system, up to 1,680 packs/h in a specified configuration.',
      tagline: 'Thermoforming, vacuum packaging and MAP',
      lead: 'Automatic forming and packing of food products. The offered configuration has a vacuum and MAP packaging system with a gas installation — up to 1,680 packs/h with a 200 × 150 mm format.',
      maker: 'Manufacturer: Colimatic (Coligroup), Chiari, Italy — since 1973',
      imageAlt: 'Colimatic THERA 450 — automatic thermoforming line',
      imageNote: 'Indicative illustration of a similar machine, manufacturer’s material.',
      how: [
        'The bottom film is preheated and pack cavities are formed in it at the forming station (vacuum and compressed air). The product goes into them in the loading area — in this configuration manually, by the operator.',
        'At the sealing station air is removed from the pack and, depending on the application, protective gas is introduced (MAP), and then the top film is sealed. Cross and longitudinal cutting separate the packs, and an exit belt takes them away.',
      ],
      benefits: [
        { title: 'Vacuum and MAP in one machine', desc: 'A vacuum system with digital control and a gas installation with a pressure sensor and tank.' },
        { title: 'Less film waste', desc: 'According to the manufacturer, scrap is only 10 mm at the side and only on the bottom film, with film savings of up to 30%.' },
        { title: 'Efficient format changes', desc: 'Hinged forming and sealing stations with assisted opening. The configuration includes dies for two formats.' },
        { title: 'Repeatable sealing', desc: 'A four-column lifting mechanism distributes forces evenly and supports consistent cycle quality.' },
        { title: 'Easy operation and teleservice', desc: 'An adjustable 12″ panel usable with gloves, up to 99 recipes, diagnostics and remote assistance.' },
        { title: 'Hygienic design', desc: 'Frame and guards in AISI 304 stainless steel, with sloped surfaces for easier washing.' },
      ],
      applications: ['Cold cuts and meat', 'Fresh pasta', 'Cheese', 'Fish and seafood', 'Vegetables', 'Sandwiches'],
      specs: [
        { label: 'Technology', value: 'Vacuum + MAP, gas installation' },
        { label: 'Forming', value: 'Vacuum + air, with preheating' },
        { label: 'Forming and sealing chambers', value: '400 × 300 × 60 mm' },
        { label: 'Format 1', value: '200 × 300 mm, 2 packs per cycle' },
        { label: 'Format 2', value: '200 × 150 mm, 4 packs per cycle' },
        { label: 'Pack depth', value: '10–60 mm' },
        { label: 'Output', value: 'up to 6/7 cycles/min; up to 1,680 packs/h (format 2)' },
        { label: 'Bottom film', value: 'Rigid PET/PE 300–350 µm or flexible PA/PE 150–200 µm, width 420 mm' },
        { label: 'Top film', value: 'PA/PE 80–90 µm, width 400 mm, print registration photocell' },
        { label: 'Loading', value: 'Manual, area approx. 1,200 mm' },
        { label: 'Cutting', value: 'Cross: punch with R9 corners; longitudinal: rotary blades, 2 lanes' },
        { label: 'Control', value: 'Siemens S7-1200 PLC, 12″ touch panel, up to 99 recipes' },
        { label: 'Components', value: 'Busch vacuum pump 300 m³/h, Festo pneumatics' },
        { label: 'Power supply', value: '400 V, 3 phases + N + E, 50 Hz; CE marked' },
      ],
      specsNote:
        'Data for the offered configuration. Dimensions are indicative and confirmed on order. Output depends on film approved by the manufacturer, product feed, mould depth, vacuum level and pump distance.',
      galleryAlts: ['THERA 450 hinged forming station', 'THERA 450 four-column lifting mechanism'],
      galleryNote: 'Indicative illustrations, manufacturer’s materials.',
      videos: [
        {
          title: 'THERA 450 — MAP for fresh pasta',
          caption: 'Manufacturer’s video: modified atmosphere packaging of fresh pasta. The configuration shown may differ from the one offered.',
          description: 'Colimatic THERA 450 — modified atmosphere packaging (MAP) of fresh pasta, manufacturer’s video.',
        },
        {
          title: 'THERA 450 — vacuum, cold cuts',
          caption: 'Manufacturer’s video: vacuum and shrink packaging of cold cuts. The configuration shown may differ from the one offered.',
          description: 'Colimatic THERA 450 — vacuum and shrink packaging of cold cuts, manufacturer’s video.',
        },
      ],
    },
  },
};
