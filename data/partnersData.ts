export interface Partner {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  areas: string[];
  cta: {
    label: string;
    href: string;
  };
  logoSrc?: string;
  // HIDDEN: ustaw na true żeby ukryć partnera bez usuwania danych
  hidden?: boolean;
}

// Loga partnerów umieść w: /public/logos/partnerzy/{id}.{png|svg}
export const PARTNERS: Partner[] = [
  {
    id: 'concetti',
    name: 'Concetti',
    logoSrc: '/logos/partnerzy/concetti.png',
    category: 'Workowanie i koniec linii',
    headline: 'Workownice i linie workujące dla przemysłu',
    description:
      'Concetti specjalizuje się w systemach workowania i napełniania — od maszyn standalone po kompletne linie workujące zintegrowane z ważeniem i transportem. Sprawdzone rozwiązania dla sektorów spożywczego, chemicznego i mineralnego, tam gdzie liczy się precyzja dozowania i ciągłość procesu.',
    areas: [
      'Workowanie big bag i worków otwartych',
      'Systemy ważenia i dozowania',
      'Integracja z paletyzacją i transportem',
      'Linie dla przemysłu spożywczego i chemicznego',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'essegi',
    name: 'Essegi',
    logoSrc: '/logos/partnerzy/essegi.png',
    category: 'Automatyczne maszyny pakujące',
    headline: 'Automatyzacja pakowania na średnich i dużych seriach',
    description:
      'Essegi dostarcza kompaktowe maszyny do automatycznego pakowania, owijania i grupowania produktów. Rozwiązania dedykowane dla zakładów, które potrzebują wydajnej automatyzacji pakowania bez rozbudowanej infrastruktury — gotowe do integracji w istniejące linie produkcyjne.',
    areas: [
      'Automatyczne maszyny pakujące',
      'Owijanie i grupowanie produktów',
      'Kompaktowe stanowiska pakujące',
      'Integracja w linie produkcyjne',
    ],
    cta: { label: 'Poznaj technologię', href: '/kontakt' },
  },
  {
    id: 'gsp',
    name: 'GSP – Tecnopack Group',
    logoSrc: '/logos/partnerzy/GSP LOGO.png',
    category: 'Poziome maszyny pakujące',
    headline: 'Flowpack i poziome maszyny do pakowania produktów',
    description:
      'GSP to specjalista w dziedzinie poziomych maszyn pakujących (flow pack) oraz automatycznych systemów podawania produktów. Maszyny sprawdzone w pakowaniu żywności i produktów przemysłowych — dostarczają szczelne opakowanie foliowe przy wysokiej wydajności i elastyczności formatowej.',
    areas: [
      'Poziome maszyny pakujące (flowpack)',
      'Automatyczne systemy podawania produktów',
      'Pakowanie żywności i produktów przemysłowych',
      'Systemy wielotorowe i wielorzędowe',
    ],
    cta: { label: 'Zobacz rozwiązania', href: '/kontakt' },
  },
  {
    id: 'technowrapp',
    name: 'Technowrapp',
    logoSrc: '/logos/partnerzy/technowrapp.png',
    category: 'Owijanie palet / koniec linii',
    headline: 'Automatyczne owijanie palet i stabilizacja ładunku',
    description:
      'Technowrapp projektuje automatyczne owijaczki do palet dla zakładów produkcyjnych i logistycznych. Systemy dopasowane do różnych formatów ładunków i wydajności linii — od stacji półautomatycznych po zintegrowane rozwiązania końca linii współpracujące z systemami przenośników i paletyzatorów.',
    areas: [
      'Automatyczne owijarki do palet',
      'Stretch wrapping i stabilizacja ładunku',
      'Koniec linii i obsługa palet',
      'Integracja z liniami pakującymi i paletyzacją',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'vimco',
    name: 'Vimco',
    logoSrc: 'https://vimco.it/wp-content/uploads/2021/11/cropped-Logo_VIMCO.png',
    category: 'Pakowanie wtórne / End-of-line',
    headline: 'Kompletne linie końca produkcji — kartoniarka, wrap-around, box erecting',
    description:
      'Vimco to włoski producent maszyn do pakowania wtórnego z ponad 40-letnim doświadczeniem. Specjalizuje się w projektowaniu i produkcji kompletnych linii końca produkcji dla branży spożywczej i niespożywczej — od kartoniarki po zintegrowany system końca linii.',
    areas: [
      'Pakowanie wtórne i kartoniarki',
      'Box erecting i wrap-around',
      'Top-load — załadunek od góry',
      'Kompletne linie end-of-line turnkey',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'dobot',
    name: 'DOBOT',
    logoSrc: '/logos/partnerzy/dobot.png',
    category: 'Kolaboratywna robotyzacja',
    headline: 'Coboty i elastyczna automatyzacja stanowisk pakujących',
    description:
      'DOBOT dostarcza kolaboratywne roboty (coboty) i systemy automatyzacji dla średnich i małych serii produkcyjnych. Tam, gdzie liczy się szybkie uruchomienie i elastyczność wdrożenia — coboty DOBOT uzupełniają portfolio MadejPak o dostępną robotyzację stanowisk pakujących i produkcji wieloasortymentowej.',
    areas: [
      'Kolaboratywne roboty (coboty)',
      'Pick-and-place i podawanie produktów',
      'Automatyzacja stanowisk pakujących',
      'Paletyzacja małych i średnich wydajności',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'kuka',
    name: 'KUKA',
    logoSrc: '/logos/partnerzy/kuka.png',
    category: 'Przemysłowa robotyzacja',
    headline: 'Roboty przemysłowe do paletyzacji, handlingu i integracji linii',
    description:
      'KUKA to wiodący producent robotów przemysłowych dla sektora packaging, FMCG i produkcji. W projektach MadejPak roboty KUKA realizują wymagające zadania paletyzacji, depaletyzacji i handlingu — gdzie liczy się wysoka wydajność, niezawodność pracy wielozmianowej i pełna integracja z systemami przenośników i końca linii.',
    areas: [
      'Paletyzacja i depaletyzacja przemysłowa',
      'Handling i transfery na linii',
      'Integracja z końcem linii i przenośnikami',
      'Robotyzacja dla FMCG i przemysłu ciężkiego',
    ],
    cta: { label: 'Poznaj technologię', href: '/kontakt' },
  },
];
