// ─── Paletyzacja: dobór stanowiska + treści strony /maszyny/paletyzacja (PL i EN) ──
// Zasady: bez cen; wydajności i wymiary stanowisk podajemy dopiero po analizie linii
// klienta (zależą też od procesu producenta). Od partnerów: roboty KUKA / DOBOT,
// owijarki Technowrapp i maszyny do kartonów (bez nazwy producenta). Reszta — MadejPak.

import type { PalLang, ProductId, VariantId, StageId, ConditionId } from '@/data/palletizingSpec';
import { OWN_MACHINES } from '@/data/palletizingSpec';

export * from '@/data/palletizingSpec';

// ─── Teksty ──────────────────────────────────────────────────────────────────

interface Option { id: string; label: string }

export interface PalCopy {
  meta: { title: string; description: string; ogTitle: string; keywords: string[] };
  hero: { eyebrow: string; title: string; lead: string; facts: string[]; ctaSelect: string; ctaCases: string };
  selector: {
    eyebrow: string; title: string; lead: string;
    step1: string; step2: string; step2Hint: string; step3: string;
    stageLabels: Record<StageId, string>;
    massLabel: string; throughputLabel: string; palletLabel: string; linesLabel: string; conditionsLabel: string;
    massHint: string; throughputHint: string; conditionsHint: string;
    customLabel: string; customPlaceholder: string;
    resultTitle: string; resultNote: string;
    deliveredTitle: string;
    stageDelivered: Record<StageId, string>;
    packingByProduct: Record<ProductId, string>;
    palletisingByVariant: Record<VariantId | 'custom', string>;
    variantsTitle: string; chooseVariant: string; chosen: string;
    customResult: string;
    conditionNote: Record<ConditionId, string>;
    referencesTitle: string; seeCase: string; video: string;
    formTitle: string; formIntro: string;
    reset: string; required: string; notIncluded: string; watchVideo: string; seeProposal: string;
  };
  massOptions: Option[];
  throughputOptions: Option[];
  palletOptions: Option[];
  linesOptions: Option[];
  conditions: Record<ConditionId, string>;
  products: Record<ProductId, { name: string; examples: string; intro: string; points: string[]; line?: { alt: string; caption: string } }>;
  variants: Record<VariantId, { name: string; fit: string; note?: string; items: string[]; imageAlt: string }>;
  motion: { eyebrow: string; title: string; lead: string; more: string; videos: Record<'desztaplery-palet' | 'chwytaki-i-manipulatory' | 'podajniki-paletowe', string>; descriptions: Record<'desztaplery-palet' | 'chwytaki-i-manipulatory' | 'podajniki-paletowe', string> };
  packages: { eyebrow: string; title: string; lead: string; cta: string; refsLabel: string };
  own: {
    eyebrow: string; title: string; lead: string;
    ownTitle: string; partnerTitle: string;
    machines: Record<(typeof OWN_MACHINES)[number]['id'], { name: string; desc: string }>;
    ownExtra: string[];
    partners: { name: string; desc: string; href: string | null }[];
  };
  cases: { eyebrow: string; title: string; lead: string; video: string; see: string };
  process: { eyebrow: string; title: string; steps: { title: string; desc: string }[] };
  integration: { eyebrow: string; title: string; lead: string; items: { title: string; desc: string }[] };
  role: { eyebrow: string; title: string; steps: { title: string; desc: string }[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  cta: { title: string; text: string; button: string };
  breadcrumb: { home: string; machines: string; current: string };
  form: { subject: string; summaryVariant: string; summaryProduct: string; summaryStages: string; summaryCustom: string };
}

export const PAL_COPY: Record<PalLang, PalCopy> = {
  pl: {
    meta: {
      title: 'Paletyzacja – gotowe stanowiska z robotem i cobotem',
      description: 'Gotowe stanowiska paletyzacji worków, kartonów i ładunków nietypowych. Robot KUKA, cobot DOBOT, chwytaki i magazyn palet MadejPak. Dobierz stanowisko online.',
      ogTitle: 'Gotowe stanowiska paletyzacji | MadejPak',
      keywords: [
        'paletyzacja', 'stanowisko paletyzacji', 'robot do paletyzacji', 'paletyzacja worków',
        'paletyzacja kartonów', 'cobot do paletyzacji', 'zrobotyzowana paletyzacja',
        'automatyczny magazyn palet', 'paletyzator worków', 'koniec linii pakującej',
      ],
    },
    hero: {
      eyebrow: 'Gotowe stanowiska paletyzacji',
      title: 'Paletyzacja worków, kartonów i ładunków nietypowych',
      lead: 'Wskaż, co pakujesz, a pokażemy gotowe propozycje stanowisk. Odbierzemy produkt z Twojej maszyny, spakujemy go, ułożymy na palecie i zabezpieczymy paletę.',
      facts: ['Roboty KUKA', 'Cobot DOBOT dla lekkich kartonów', 'Chwytaki i magazyn palet MadejPak', 'Owijarki Technowrapp'],
      ctaSelect: 'Dobierz stanowisko',
      ctaCases: 'Zobacz realizacje',
    },
    selector: {
      eyebrow: 'Dobór stanowiska',
      title: 'Co pakujesz? Pokażemy gotowe propozycje',
      lead: 'Trzy krótkie kroki. Wynik zobaczysz od razu, dane kontaktowe podajesz dopiero przy zapytaniu.',
      step1: '1. Co chcesz paletyzować? (kliknij jedną opcję)',
      step2: '2. Co automatyzujemy? (kliknij, aby zaznaczyć lub odznaczyć)',
      step2Hint: 'Kliknij etapy, które mamy przejąć. Zaznaczone wchodzą w propozycję, paletyzacja jest zawsze.',
      step3: '3. Kilka parametrów (opcjonalnie, kliknij, jeśli wiesz)',
      stageLabels: { odbior: 'Odbiór z Twojej maszyny', pakowanie: 'Pakowanie', paletyzacja: 'Paletyzacja', zabezpieczenie: 'Zabezpieczenie palety' },
      massLabel: 'Masa jednego worka, kartonu lub sztuki',
      massHint: 'Tyle, ile waży jedna rzecz, którą robot odkłada na paletę. Nie cała paleta i nie sam produkt luzem.',
      throughputLabel: 'Wydajność linii',
      throughputHint: 'Ile worków lub kartonów na godzinę schodzi z linii i trzeba je ułożyć na paletach.',
      palletLabel: 'Paleta',
      linesLabel: 'Liczba linii',
      conditionsLabel: 'Warunki pracy',
      conditionsHint: 'Gdzie stanie stanowisko? Zaznacz, jeśli w hali jest pył, duża wilgotność albo częste mycie, lub jeśli to chłodnia. Przy zwykłych warunkach nic nie zaznaczaj.',
      customLabel: 'Co chcesz paletyzować?',
      customPlaceholder: 'np. meble, opony, elementy metalowe',
      resultTitle: 'Twoja propozycja',
      resultNote: 'To propozycja wstępna. Wydajność, wymiary stanowiska i wycenę podamy po analizie Twojej linii.',
      deliveredTitle: 'Co dostarczamy na każdym etapie',
      stageDelivered: {
        odbior: 'Przenośniki, podajniki i bufory MadejPak, zsynchronizowane z Twoją maszyną',
        pakowanie: '',
        paletyzacja: '',
        zabezpieczenie: 'Owijarka Technowrapp: automatyczna w linii albo półautomatyczna',
      },
      packingByProduct: {
        'worki-ciezkie': 'Maszyna pakująca do worków, dobrana do produktu',
        'worki-sypkie': 'Maszyna pakująca do worków, dobrana do produktu',
        kartony: 'Formowanie, pakowanie i zaklejanie kartonów',
        nietypowe: 'Pakowanie dobieramy do produktu',
      },
      palletisingByVariant: {
        cobot: 'Cobot DOBOT z chwytakiem MadejPak',
        paletyzacja: 'Robot KUKA z chwytakiem MadejPak i automatycznym magazynem palet',
        owijarka: 'Robot KUKA z chwytakiem MadejPak i automatycznym magazynem palet',
        custom: 'Robot z chwytakiem projektowanym pod Twój ładunek',
      },
      variantsTitle: 'Warianty stanowiska',
      chooseVariant: 'Wybieram ten wariant',
      chosen: 'Wybrany',
      customResult: 'Ładunki nietypowe paletyzujemy na stanowiskach projektowanych indywidualnie. Chwytak, podajniki i wzór układania robimy pod Twój produkt, a gotową paletę zabezpiecza owijarka.',
      conditionNote: {
        pyl: 'W zapylonym środowisku pracują nasze stanowiska m.in. u Siarkopolu, Promotora i Certech.',
        wilgoc: 'Przy wysokiej wilgotności pracuje nasze stanowisko pakowania serów w Lazurze.',
        chlodnia: 'W chłodni pracuje nasze stanowisko pakowania serów w Lazurze.',
      },
      referencesTitle: 'Podobne realizacje',
      seeCase: 'Zobacz realizację',
      video: 'Film',
      formTitle: 'Wyślij zapytanie o tę propozycję',
      formIntro: 'Twoje odpowiedzi dołączymy do zapytania, więc handlowiec od razu zobaczy, czego potrzebujesz.',
      reset: 'Zacznij od nowa',
      required: 'zawsze',
      notIncluded: 'Po Twojej stronie',
      watchVideo: 'Zobacz film',
      seeProposal: 'Zobacz propozycję',
    },
    massOptions: [
      { id: 'm1', label: 'do 5 kg' }, { id: 'm2', label: '5–15 kg' }, { id: 'm3', label: '15–30 kg' },
      { id: 'm4', label: '30–50 kg' }, { id: 'm5', label: 'powyżej 50 kg' },
    ],
    throughputOptions: [
      { id: 't1', label: 'do 300 szt./h' }, { id: 't2', label: '300–600 szt./h' }, { id: 't3', label: '600–1200 szt./h' },
      { id: 't4', label: 'powyżej 1200 szt./h' }, { id: 't5', label: 'nie wiem' },
    ],
    palletOptions: [{ id: 'eur', label: '1200 × 800 (EUR)' }, { id: 'ind', label: '1200 × 1000' }, { id: 'inna', label: 'inna' }],
    linesOptions: [{ id: 'l1', label: '1 linia' }, { id: 'l2', label: '2 linie' }, { id: 'l3', label: 'więcej' }],
    conditions: { pyl: 'Pył', wilgoc: 'Wilgoć, mycie', chlodnia: 'Chłodnia' },
    products: {
      'worki-ciezkie': {
        name: 'Ciężkie worki',
        line: { alt: 'Linia pakowania i paletyzacji pelletu: maszyna pionowa, przenośniki i robot KUKA w wygrodzeniu (rysunek 3D)', caption: 'Przykładowa linia: pakowanie pelletu w worki i paletyzacja robotem KUKA (realizacja Europol).' },
        examples: 'pellet, nawozy, zaprawy budowlane',
        intro: 'Ciężkie worki z produktem sypkim, często w zapylonym środowisku. Robot KUKA z chwytakiem MadejPak układa stabilne palety bez udziału pracownika.',
        points: [
          'Chwytak projektujemy pod rodzaj i masę worka',
          'Stanowiska pracujące w pyle, m.in. przy nawozach i zaprawach',
          'Cała linia od jednej firmy: pakowanie, transport, paletyzacja, owijanie',
        ],
      },
      'worki-sypkie': {
        name: 'Lżejsze worki sypkie',
        line: { alt: 'Linia z odbiorem małych worków, paletyzacją robotem KUKA i owijarką palet (rysunek 3D)', caption: 'Przykładowa linia: odbiór małych worków, paletyzacja robotem KUKA i owijanie palety.' },
        examples: 'żwirek, granulaty, mniejsze worki',
        intro: 'Lżejszy worek z produktem sypkim łatwo się odkształca, przez co paleta bywa niestabilna. Chwytak i wzór układania dobieramy tak, żeby paleta trzymała formę.',
        points: [
          'Stabilne układanie opakowań, które się odkształcają',
          'Opakowania z rączką i produkty chłonące wilgoć',
          'Dwie linie pakujące mogą zasilać jeden system paletyzacji',
        ],
      },
      kartony: {
        name: 'Kartony',
        line: { alt: 'Stanowisko paletyzacji kartonów z robotem KUKA, dwoma przenośnikami i dwoma miejscami paletowymi (rysunek 3D)', caption: 'Przykładowe stanowisko: robot KUKA układa kartony z dwóch przenośników na dwie palety.' },
        examples: 'kartony i opakowania zbiorcze',
        intro: 'Kartony układamy robotem KUKA, a przy lekkich kartonach i mniejszej wydajności tańszym cobotem DOBOT. Na życzenie dokładamy formowanie, pakowanie i zaklejanie kartonów.',
        points: [
          'Cobot DOBOT jako tańsze wejście w automatyzację',
          'Wzory układania zmieniane w programie',
          'Cały koniec linii: od formowania kartonu po owiniętą paletę',
        ],
      },
      nietypowe: {
        name: 'Ładunki nietypowe',
        examples: 'np. meble, opony, elementy o nietypowym kształcie',
        intro: 'Ładunek, który nie jest workiem ani kartonem, potrzebuje własnego chwytaka i wzoru układania. Projektujemy je u siebie, a gotową paletę zabezpiecza owijarka.',
        points: [
          'Chwytak projektowany pod kształt i masę ładunku',
          'Podajniki i transport dopasowane do produktu',
          'Owijanie palety w linii',
        ],
      },
    },
    variants: {
      paletyzacja: {
        name: 'Sama paletyzacja',
        imageAlt: 'Automatyczny magazyn palet MadejPak (wizualizacja)',
        fit: 'Robot KUKA i automatyczny magazyn palet',
        note: 'Operator wstawia do magazynu tylko stos pustych palet, a stanowisko samo podaje palety i układa na nich produkt.',
        items: ['Robot KUKA z chwytakiem MadejPak', 'Automatyczny magazyn palet MadejPak', 'Podajniki i przenośniki MadejPak', 'Wygrodzenie i zabezpieczenia strefy pracy'],
      },
      owijarka: {
        name: 'Paletyzacja z owijarką',
        imageAlt: 'Automatyczna owijarka Technowrapp z przenośnikami palet',
        fit: 'Gotowa paleta zabezpieczona folią stretch',
        note: 'Owijarka Technowrapp może pracować automatycznie w linii za stanowiskiem albo jako półautomat obsługiwany przez operatora.',
        items: ['Wszystko z wariantu „Sama paletyzacja”', 'Owijarka Technowrapp za stanowiskiem', 'Wersja automatyczna w linii albo półautomatyczna', 'Przenośniki do odbioru owiniętych palet (wersja automatyczna)'],
      },
      cobot: {
        name: 'Paletyzacja kompaktowa: cobot DOBOT',
        imageAlt: 'Kompaktowe stanowisko paletyzacji kartonów z cobotem DOBOT (wizualizacja)',
        fit: 'Lekkie kartony, mało miejsca, mniejsza wydajność',
        items: ['Cobot DOBOT z chwytakiem MadejPak', 'Stanowisko stałe lub mobilne', 'Może pracować obok operatora', 'Ręczna wymiana palety'],
      },
    },
    packages: {
      eyebrow: 'Gotowe stanowiska',
      title: 'Cztery najczęstsze zastosowania',
      lead: 'Każde stanowisko budujemy z gotowych, sprawdzonych modułów i dopasowujemy do Twojego produktu.',
      cta: 'Dobierz wariant',
      refsLabel: 'Realizacje',
    },
    own: {
      eyebrow: 'Własna produkcja',
      title: 'Chwytaki, podajniki, magazyn palet i integrację robimy sami',
      lead: 'Od partnerów bierzemy roboty, owijarki i maszyny do kartonów. Resztę stanowiska projektujemy i budujemy u siebie, więc dopasujemy je do produktu i szybko zmodyfikujemy.',
      ownTitle: 'Projektujemy i budujemy',
      partnerTitle: 'Od sprawdzonych partnerów',
      machines: {
        'chwytaki-i-manipulatory': { name: 'Chwytaki do robotów', desc: 'Projektowane pod worek, karton albo ładunek nietypowy.' },
        'desztaplery-palet': { name: 'Automatyczny magazyn palet', desc: 'Wstawiasz stos pustych palet, a magazyn sam podaje je pojedynczo.' },
        'podajniki-tasmowe': { name: 'Podajniki i przenośniki', desc: 'Odbiór produktu z Twojej maszyny i transport do robota.' },
        'magazyny-i-bufory': { name: 'Bufory produktu', desc: 'Wyrównują pracę linii, gdy paletyzacja chwilowo nie nadąża.' },
      },
      ownExtra: ['Sterowanie i integracja z Twoją linią', 'Serwis i zmiany formatów'],
      partners: [
        { name: 'Roboty KUKA', desc: 'Worki, cięższe kartony, praca ciągła', href: '/maszyny/robotyzacja-pakowania' },
        { name: 'Coboty DOBOT', desc: 'Budżetowa paletyzacja lekkich kartonów', href: '/maszyny/robotyzacja-pakowania' },
        { name: 'Owijarki Technowrapp', desc: 'Owijanie palety folią stretch, automatyczne lub półautomatyczne', href: '/maszyny/owijarki-do-palet' },
        { name: 'Formowarki, kartoniarki, zaklejarki', desc: 'Kartonowanie przed paletyzacją', href: '/maszyny/kartonowanie' },
      ],
    },
    motion: {
      eyebrow: 'Wideo',
      title: 'Moduły MadejPak w ruchu',
      lead: 'Magazyn palet, chwytak i podajnik paletowy z naszej produkcji podczas pracy.',
      more: 'Więcej',
      videos: { 'desztaplery-palet': 'Automatyczny magazyn palet', 'chwytaki-i-manipulatory': 'Chwytak do robota', 'podajniki-paletowe': 'Podajnik paletowy' },
      descriptions: {
        'desztaplery-palet': 'Automatyczny magazyn palet MadejPak: operator wstawia stos pustych palet, a magazyn podaje je pojedynczo na przenośnik.',
        'chwytaki-i-manipulatory': 'Chwytak (manipulator) MadejPak do robota przemysłowego podczas pracy.',
        'podajniki-paletowe': 'Podajnik paletowy MadejPak transportujący palety na linii.',
      },
    },
    cases: {
      eyebrow: 'Realizacje',
      title: 'Stanowiska, które już pracują',
      lead: 'Każda realizacja ma opis i film z pracy linii.',
      video: 'Film',
      see: 'Zobacz realizację',
    },
    process: {
      eyebrow: 'Zasada działania',
      title: 'Od wyjścia maszyny pakującej do gotowej palety',
      steps: [
        { title: 'Odbiór produktu', desc: 'Produkt opuszcza maszynę pakującą i trafia na transport doprowadzający do paletyzacji.' },
        { title: 'Buforowanie', desc: 'Sekcja buforująca wyrównuje różnice prędkości między maszyną pakującą a paletyzacją i zapobiega zatrzymaniom linii.' },
        { title: 'Formowanie warstwy', desc: 'Produkty są grupowane i orientowane w układ odpowiadający schematowi palety.' },
        { title: 'Odkładanie na paletę', desc: 'Robot układa produkty warstwami według zaprogramowanego wzoru paletyzacji.' },
        { title: 'Podawanie palet i przekładek', desc: 'Magazyn palet podaje puste palety i, jeśli trzeba, przekładki kartonowe lub foliowe między warstwami.' },
        { title: 'Zabezpieczenie i odbiór', desc: 'Gotowa paleta trafia do owijarki folią stretch, a potem na transport do magazynu.' },
      ],
    },
    integration: {
      eyebrow: 'Integracja z linią',
      title: 'Paletyzacja jako element końca linii',
      lead: 'Nie dostarczamy samego robota. Projektujemy i synchronizujemy całe otoczenie stanowiska.',
      items: [
        { title: 'Transport doprowadzający', desc: 'Przenośniki taśmowe i rolkowe, transfery i zwrotnice kierujące produkty z maszyny pakującej do paletyzacji.' },
        { title: 'Buforowanie i akumulacja', desc: 'Sekcje buforujące wyrównują różnice prędkości i zapobiegają zatrzymywaniu linii.' },
        { title: 'Formowanie warstw', desc: 'Grupowanie i orientacja produktów przed odłożeniem na paletę.' },
        { title: 'Podawanie palet i przekładek', desc: 'Automatyczny magazyn pustych palet i podawanie przekładek między warstwami.' },
        { title: 'Zabezpieczenie ładunku', desc: 'Owijarka folią stretch jako element linii, zsynchronizowany z paletyzacją.' },
        { title: 'Transport palet', desc: 'Przenośniki rolkowe i łańcuchowe odbierające gotowe palety ze stanowiska.' },
        { title: 'Wygrodzenia i bezpieczeństwo', desc: 'Strefy robocze zgodne z normami maszynowymi: ogrodzenia, kurtyny świetlne lub skanery bezpieczeństwa.' },
        { title: 'Synchronizacja z linią', desc: 'Wspólne sterowanie z maszyną pakującą lub komunikacja maszynowa (Profinet, EtherNet/IP, OPC-UA).' },
      ],
    },
    role: {
      eyebrow: 'Jak pracujemy',
      title: 'Od wizyty w zakładzie do serwisu',
      steps: [
        { title: 'Przyjeżdżamy i słuchamy', desc: 'Odwiedzamy zakład, oglądamy linię i rozmawiamy o problemie, zanim cokolwiek zaproponujemy.' },
        { title: 'Proponujemy konkretne rozwiązanie', desc: 'Na podstawie produktu, wydajności i układu hali wskazujemy, co wdrożyć, i przygotowujemy wycenę.' },
        { title: 'Dostarczamy i uruchamiamy', desc: 'Przywozimy stanowisko z transportem i owijarką, integrujemy je z linią i uruchamiamy w Twoim zakładzie.' },
        { title: 'Szkolimy Twoich ludzi', desc: 'Operatorzy i utrzymanie ruchu wychodzą z rozruchu ze znajomością stanowiska.' },
        { title: 'Jesteśmy po uruchomieniu', desc: 'Serwisujemy, dostarczamy części i pomagamy przy zmianach formatów. Jeden kontakt do wszystkich spraw technicznych.' },
      ],
    },
    faq: {
      eyebrow: 'Pytania',
      title: 'Najczęstsze pytania o paletyzację',
      items: [
        { q: 'Co jest potrzebne do wyceny stanowiska paletyzacji?', a: 'Rodzaj i masa produktu, wymiary opakowania, wydajność linii, rodzaj palety i miejsce w hali. Najszybciej podasz to w doborze na tej stronie, a resztę ustalimy w rozmowie lub podczas wizyty w zakładzie.' },
        { q: 'Czy cobot wystarczy do paletyzacji?', a: 'Przy lekkich kartonach i mniejszej wydajności tak. Cobot DOBOT jest tańszy, zajmuje mało miejsca i może pracować obok operatora. Worki i cięższe kartony paletyzujemy robotami KUKA.' },
        { q: 'Czy owijarka musi być automatyczna?', a: 'Nie. Owijarka Technowrapp może pracować automatycznie w linii za stanowiskiem albo jako półautomat obsługiwany przez operatora.' },
        { q: 'Czy możecie odebrać produkt z naszej maszyny pakującej?', a: 'Tak. Odbieramy produkt z maszyn, które już masz, i synchronizujemy stanowisko z linią. Jeśli trzeba, dostarczamy też maszynę pakującą.' },
        { q: 'Co robicie sami, a co pochodzi od partnerów?', a: 'Chwytaki, podajniki, bufory, automatyczny magazyn palet i integrację całej linii projektujemy i budujemy sami. Od partnerów pochodzą roboty (KUKA, DOBOT), owijarki (Technowrapp) i maszyny do formowania oraz zaklejania kartonów.' },
        { q: 'Czy stanowisko poradzi sobie w pyle albo w chłodni?', a: 'Tak, mamy takie wdrożenia: paletyzację nawozów, zapraw i żwirku w zapylonym środowisku oraz pakowanie serów w chłodni przy wysokiej wilgotności.' },
        { q: 'Czy jeden system paletyzacji obsłuży dwie linie?', a: 'Tak. U Certech dwie równoległe linie pakowania żwirku zasilają jeden system paletyzacji z dwoma robotami KUKA.' },
        { q: 'Czy zajmujecie się serwisem?', a: 'Tak. Serwisujemy stanowiska, dostarczamy części i pomagamy przy zmianach formatów. Masz jeden kontakt do wszystkich spraw technicznych.' },
      ],
    },
    cta: {
      title: 'Nie wiesz, który wariant wybrać?',
      text: 'Przejdź dobór albo opisz nam produkt. Przyjedziemy, obejrzymy linię i zaproponujemy stanowisko.',
      button: 'Dobierz stanowisko',
    },
    breadcrumb: { home: 'Home', machines: 'Maszyny', current: 'Paletyzacja' },
    form: { subject: 'ZAPYTANIE — dobór paletyzacji', summaryVariant: 'Wariant', summaryProduct: 'Produkt', summaryStages: 'Zakres', summaryCustom: 'Ładunek' },
  },

  en: {
    meta: {
      title: 'Palletising – ready-made robotic cells and cobots',
      description: 'Ready-made palletising cells for bags, cartons and unusual loads. KUKA robots, DOBOT cobots, MadejPak grippers and pallet magazines. Configure a cell online.',
      ogTitle: 'Ready-made palletising cells | MadejPak',
      keywords: [
        'palletising', 'palletising cell', 'palletising robot', 'bag palletising',
        'carton palletising', 'cobot palletiser', 'robotic palletising',
        'automatic pallet magazine', 'bag palletiser', 'end of line',
      ],
    },
    hero: {
      eyebrow: 'Ready-made palletising cells',
      title: 'Palletising of bags, cartons and unusual loads',
      lead: 'Tell us what you pack and we will show you ready-made cell proposals. We take the product from your machine, pack it, stack it on the pallet and secure the pallet.',
      facts: ['KUKA robots', 'DOBOT cobot for light cartons', 'MadejPak grippers and pallet magazine', 'Technowrapp wrappers'],
      ctaSelect: 'Configure a cell',
      ctaCases: 'See case studies',
    },
    selector: {
      eyebrow: 'Cell selection',
      title: 'What do you pack? We will show ready-made proposals',
      lead: 'Three short steps. You see the result straight away and only give contact details when you send an enquiry.',
      step1: '1. What do you want to palletise? (click one option)',
      step2: '2. What should we automate? (click to tick or untick)',
      step2Hint: 'Click the stages you want us to take over. Ticked stages go into the proposal; palletising is always included.',
      step3: '3. A few parameters (optional, click if you know)',
      stageLabels: { odbior: 'Take-off from your machine', pakowanie: 'Packing', paletyzacja: 'Palletising', zabezpieczenie: 'Pallet securing' },
      massLabel: 'Weight of one bag, carton or item',
      massHint: 'The weight of one thing the robot places on the pallet. Not the whole pallet and not the loose product.',
      throughputLabel: 'Line output',
      throughputHint: 'How many bags or cartons per hour come off the line and need stacking on pallets.',
      palletLabel: 'Pallet',
      linesLabel: 'Number of lines',
      conditionsLabel: 'Working conditions',
      conditionsHint: 'Where will the cell stand? Tick if the hall has dust, high humidity or frequent washdown, or if it is a cold store. Leave it blank for normal conditions.',
      customLabel: 'What do you want to palletise?',
      customPlaceholder: 'e.g. furniture, tyres, metal parts',
      resultTitle: 'Your proposal',
      resultNote: 'This is a preliminary proposal. We give output, cell dimensions and a quote after analysing your line.',
      deliveredTitle: 'What we deliver at each stage',
      stageDelivered: {
        odbior: 'MadejPak conveyors, feeders and buffers, synchronised with your machine',
        pakowanie: '',
        paletyzacja: '',
        zabezpieczenie: 'Technowrapp wrapper: automatic in the line or semi-automatic',
      },
      packingByProduct: {
        'worki-ciezkie': 'Bagging machine selected for the product',
        'worki-sypkie': 'Bagging machine selected for the product',
        kartony: 'Case erecting, packing and sealing',
        nietypowe: 'Packing selected for the product',
      },
      palletisingByVariant: {
        cobot: 'DOBOT cobot with a MadejPak gripper',
        paletyzacja: 'KUKA robot with a MadejPak gripper and an automatic pallet magazine',
        owijarka: 'KUKA robot with a MadejPak gripper and an automatic pallet magazine',
        custom: 'Robot with a gripper designed for your load',
      },
      variantsTitle: 'Cell variants',
      chooseVariant: 'Choose this variant',
      chosen: 'Selected',
      customResult: 'We palletise unusual loads on individually designed cells. We make the gripper, feeders and stacking pattern for your product, and a wrapper secures the finished pallet.',
      conditionNote: {
        pyl: 'Our cells work in dusty environments at Siarkopol, Promotor and Certech, among others.',
        wilgoc: 'Our cheese packing cell at Lazur works in high humidity.',
        chlodnia: 'Our cheese packing cell at Lazur works in a refrigerated environment.',
      },
      referencesTitle: 'Similar projects',
      seeCase: 'See the case study',
      video: 'Video',
      formTitle: 'Send an enquiry about this proposal',
      formIntro: 'We attach your answers to the enquiry, so our sales engineer sees straight away what you need.',
      reset: 'Start again',
      required: 'always',
      notIncluded: 'On your side',
      watchVideo: 'Watch the video',
      seeProposal: 'See the proposal',
    },
    massOptions: [
      { id: 'm1', label: 'up to 5 kg' }, { id: 'm2', label: '5–15 kg' }, { id: 'm3', label: '15–30 kg' },
      { id: 'm4', label: '30–50 kg' }, { id: 'm5', label: 'over 50 kg' },
    ],
    throughputOptions: [
      { id: 't1', label: 'up to 300 units/h' }, { id: 't2', label: '300–600 units/h' }, { id: 't3', label: '600–1,200 units/h' },
      { id: 't4', label: 'over 1,200 units/h' }, { id: 't5', label: 'not sure' },
    ],
    palletOptions: [{ id: 'eur', label: '1200 × 800 (EUR)' }, { id: 'ind', label: '1200 × 1000' }, { id: 'inna', label: 'other' }],
    linesOptions: [{ id: 'l1', label: '1 line' }, { id: 'l2', label: '2 lines' }, { id: 'l3', label: 'more' }],
    conditions: { pyl: 'Dust', wilgoc: 'Humidity, washdown', chlodnia: 'Cold store' },
    products: {
      'worki-ciezkie': {
        name: 'Heavy bags',
        line: { alt: 'Pellet bagging and palletising line: vertical bagger, conveyors and a KUKA robot in a guarded cell (3D drawing)', caption: 'Example line: bagging pellets and palletising with a KUKA robot (Europol project).' },
        examples: 'pellets, fertilisers, building mortars',
        intro: 'Heavy bags of bulk product, often in a dusty environment. A KUKA robot with a MadejPak gripper builds stable pallets without operator involvement.',
        points: [
          'Gripper designed for the bag type and weight',
          'Cells working in dust, e.g. with fertilisers and mortars',
          'The whole line from one company: packing, conveying, palletising, wrapping',
        ],
      },
      'worki-sypkie': {
        name: 'Lighter bags of bulk product',
        line: { alt: 'Line with small-bag take-off, KUKA robot palletising and a pallet wrapper (3D drawing)', caption: 'Example line: small-bag take-off, palletising with a KUKA robot and pallet wrapping.' },
        examples: 'cat litter, granules, smaller bags',
        intro: 'A lighter bag of bulk product deforms easily, which can make the pallet unstable. We select the gripper and stacking pattern so that the pallet keeps its shape.',
        points: [
          'Stable stacking of packs that deform',
          'Packs with handles and moisture-absorbing products',
          'Two packing lines can feed one palletising system',
        ],
      },
      kartony: {
        name: 'Cartons',
        line: { alt: 'Carton palletising cell with a KUKA robot, two infeed conveyors and two pallet positions (3D drawing)', caption: 'Example cell: a KUKA robot stacks cartons from two conveyors onto two pallets.' },
        examples: 'cartons and secondary packaging',
        intro: 'We stack cartons with a KUKA robot, or with a lower-cost DOBOT cobot for light cartons and lower output. On request we add case erecting, packing and sealing.',
        points: [
          'DOBOT cobot as a lower-cost entry into automation',
          'Stacking patterns changed in the program',
          'The whole end of line: from case erecting to a wrapped pallet',
        ],
      },
      nietypowe: {
        name: 'Unusual loads',
        examples: 'e.g. furniture, tyres, irregularly shaped parts',
        intro: 'A load that is neither a bag nor a carton needs its own gripper and stacking pattern. We design them in-house, and a wrapper secures the finished pallet.',
        points: [
          'Gripper designed for the shape and weight of the load',
          'Feeders and conveying matched to the product',
          'Pallet wrapping in the line',
        ],
      },
    },
    variants: {
      paletyzacja: {
        name: 'Palletising only',
        imageAlt: 'MadejPak automatic pallet magazine (visualisation)',
        fit: 'KUKA robot and automatic pallet magazine',
        note: 'The operator only loads a stack of empty pallets into the magazine, and the cell feeds the pallets and stacks the product on them by itself.',
        items: ['KUKA robot with a MadejPak gripper', 'MadejPak automatic pallet magazine', 'MadejPak feeders and conveyors', 'Guarding and work-zone safety'],
      },
      owijarka: {
        name: 'Palletising with a wrapper',
        imageAlt: 'Automatic Technowrapp wrapper with pallet conveyors',
        fit: 'Finished pallet secured with stretch film',
        note: 'The Technowrapp wrapper can work automatically in the line after the cell, or as a semi-automatic machine operated by staff.',
        items: ['Everything in “Palletising only”', 'Technowrapp wrapper after the cell', 'Automatic in-line or semi-automatic version', 'Conveyors taking away wrapped pallets (automatic version)'],
      },
      cobot: {
        name: 'Compact palletising: DOBOT cobot',
        imageAlt: 'Compact carton palletising cell with a DOBOT cobot (visualisation)',
        fit: 'Light cartons, little space, lower output',
        items: ['DOBOT cobot with a MadejPak gripper', 'Fixed or mobile cell', 'Can work next to an operator', 'Manual pallet change'],
      },
    },
    packages: {
      eyebrow: 'Ready-made cells',
      title: 'The four most common applications',
      lead: 'We build every cell from proven modules and adapt it to your product.',
      cta: 'Choose a variant',
      refsLabel: 'Case studies',
    },
    own: {
      eyebrow: 'In-house manufacturing',
      title: 'We make the grippers, feeders, pallet magazine and integration ourselves',
      lead: 'We source robots, wrappers and case-packing machines from partners. We design and build the rest of the cell in-house, so we can match it to the product and modify it quickly.',
      ownTitle: 'We design and build',
      partnerTitle: 'From trusted partners',
      machines: {
        'chwytaki-i-manipulatory': { name: 'Robot grippers', desc: 'Designed for the bag, carton or unusual load.' },
        'desztaplery-palet': { name: 'Automatic pallet magazine', desc: 'You load a stack of empty pallets and the magazine feeds them one by one.' },
        'podajniki-tasmowe': { name: 'Feeders and conveyors', desc: 'Product take-off from your machine and transport to the robot.' },
        'magazyny-i-bufory': { name: 'Product buffers', desc: 'Keep the line running when palletising briefly falls behind.' },
      },
      ownExtra: ['Control and integration with your line', 'Service and format changes'],
      partners: [
        { name: 'KUKA robots', desc: 'Bags, heavier cartons, continuous operation', href: '/en/maszyny/robotyzacja-pakowania' },
        { name: 'DOBOT cobots', desc: 'Lower-cost palletising of light cartons', href: '/en/maszyny/robotyzacja-pakowania' },
        { name: 'Technowrapp wrappers', desc: 'Stretch wrapping, automatic or semi-automatic', href: '/en/maszyny/owijarki-do-palet' },
        { name: 'Case erectors, packers and sealers', desc: 'Case packing before palletising', href: '/en/maszyny/kartonowanie' },
      ],
    },
    motion: {
      eyebrow: 'Video',
      title: 'MadejPak modules in motion',
      lead: 'Our pallet magazine, robot gripper and pallet conveyor at work.',
      more: 'More',
      videos: { 'desztaplery-palet': 'Automatic pallet magazine', 'chwytaki-i-manipulatory': 'Robot gripper', 'podajniki-paletowe': 'Pallet conveyor' },
      descriptions: {
        'desztaplery-palet': 'MadejPak automatic pallet magazine: the operator loads a stack of empty pallets and the magazine feeds them one by one onto the conveyor.',
        'chwytaki-i-manipulatory': 'MadejPak gripper (manipulator) for an industrial robot at work.',
        'podajniki-paletowe': 'MadejPak pallet conveyor transporting pallets on the line.',
      },
    },
    cases: {
      eyebrow: 'Case studies',
      title: 'Cells that are already running',
      lead: 'Every case study has a description and a video of the line at work.',
      video: 'Video',
      see: 'See the case study',
    },
    process: {
      eyebrow: 'How it works',
      title: 'From the packaging machine exit to a finished pallet',
      steps: [
        { title: 'Product take-off', desc: 'The product leaves the packaging machine and goes onto the infeed conveyor leading to palletising.' },
        { title: 'Buffering', desc: 'The buffer section evens out speed differences between the packaging machine and palletising and prevents line stoppages.' },
        { title: 'Layer forming', desc: 'Products are grouped and oriented into an arrangement matching the pallet pattern.' },
        { title: 'Placing on the pallet', desc: 'The robot places products layer by layer according to the programmed palletising pattern.' },
        { title: 'Pallet and slip-sheet feeding', desc: 'The pallet magazine feeds empty pallets and, where required, cardboard or film slip-sheets between layers.' },
        { title: 'Securing and take-away', desc: 'The finished pallet goes to a stretch-film wrapper and then on to the warehouse.' },
      ],
    },
    integration: {
      eyebrow: 'Line integration',
      title: 'Palletising as part of the end of line',
      lead: 'We do not deliver just a robot. We design and synchronise everything around the cell.',
      items: [
        { title: 'Infeed conveying', desc: 'Belt and roller conveyors, transfers and diverters directing products from the packaging machine to palletising.' },
        { title: 'Buffering and accumulation', desc: 'Buffer sections even out speed differences and prevent line stoppages.' },
        { title: 'Layer forming', desc: 'Grouping and orienting products before they are placed on the pallet.' },
        { title: 'Pallet and slip-sheet feeding', desc: 'An automatic empty-pallet magazine and slip-sheet feeding between layers.' },
        { title: 'Load securing', desc: 'A stretch-film wrapper as part of the line, synchronised with palletising.' },
        { title: 'Pallet transport', desc: 'Roller and chain conveyors taking finished pallets away from the cell.' },
        { title: 'Guarding and safety', desc: 'Work zones to machine-safety standards: fences, light curtains or safety scanners.' },
        { title: 'Line synchronisation', desc: 'Shared control with the packaging machine or machine communication (Profinet, EtherNet/IP, OPC-UA).' },
      ],
    },
    role: {
      eyebrow: 'How we work',
      title: 'From the plant visit to service',
      steps: [
        { title: 'We visit and listen', desc: 'We visit the plant, look at the line and discuss the problem before proposing anything.' },
        { title: 'We propose a specific solution', desc: 'Based on the product, output and hall layout, we show what to implement and prepare a quote.' },
        { title: 'We deliver and commission', desc: 'We bring the cell with conveying and the wrapper, integrate it with the line and start it up at your plant.' },
        { title: 'We train your people', desc: 'Operators and maintenance staff leave commissioning knowing the cell.' },
        { title: 'We stay after start-up', desc: 'We service the cell, supply parts and help with format changes. One contact for all technical matters.' },
      ],
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Frequently asked questions about palletising',
      items: [
        { q: 'What do you need to quote a palletising cell?', a: 'Product type and weight, pack dimensions, line output, pallet type and the space available. The quickest way is the selector on this page; we settle the rest in a call or during a plant visit.' },
        { q: 'Is a cobot enough for palletising?', a: 'For light cartons and lower output, yes. A DOBOT cobot costs less, takes up little space and can work next to an operator. We palletise bags and heavier cartons with KUKA robots.' },
        { q: 'Does the wrapper have to be automatic?', a: 'No. The Technowrapp wrapper can work automatically in the line after the cell, or as a semi-automatic machine operated by staff.' },
        { q: 'Can you take the product from our existing packaging machine?', a: 'Yes. We take the product from the machines you already have and synchronise the cell with the line. If needed, we also supply the packaging machine.' },
        { q: 'What do you make in-house and what comes from partners?', a: 'We design and build the grippers, feeders, buffers, automatic pallet magazine and integration of the whole line. Robots (KUKA, DOBOT), wrappers (Technowrapp) and case erecting and sealing machines come from partners.' },
        { q: 'Can the cell cope with dust or a cold store?', a: 'Yes, we have such installations: palletising fertilisers, mortars and cat litter in dusty environments, and cheese packing in a cold store with high humidity.' },
        { q: 'Can one palletising system serve two lines?', a: 'Yes. At Certech two parallel cat litter packing lines feed one palletising system with two KUKA robots.' },
        { q: 'Do you provide service?', a: 'Yes. We service the cells, supply parts and help with format changes. You have one contact for all technical matters.' },
      ],
    },
    cta: {
      title: 'Not sure which variant to choose?',
      text: 'Use the selector or describe your product. We will visit, look at the line and propose a cell.',
      button: 'Configure a cell',
    },
    breadcrumb: { home: 'Home', machines: 'Machines', current: 'Palletising' },
    form: { subject: 'ENQUIRY [EN] — palletising selector', summaryVariant: 'Variant', summaryProduct: 'Product', summaryStages: 'Scope', summaryCustom: 'Load' },
  },
};
