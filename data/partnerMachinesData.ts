export interface MachineCategory {
  id: string;
  name: string;
  category: string;       // short type label shown in card header
  description: string;    // 2–4 sentences
  applications: string[]; // specific use cases
  partners: string[];     // partner names
  imageSrc: string;       // swap to real asset: /images/machines/<name>.jpg
  imageAlt: string;
  cta: { label: string; href: string };
}

export interface PartnerOverview {
  id: string;
  name: string;
  specialty: string;
}

export const MACHINE_CATEGORIES: MachineCategory[] = [
  {
    id: 'flowpack',
    name: 'Flowpack / maszyny poziome',
    category: 'Pakowanie poziome',
    description:
      'Poziome maszyny pakujące (flow wrappers) owijają produkt folią termokurczliwą lub flow pack — od pojedynczych wyrobów po pakiety wielosztukowe. GSP / Tecno Pack dostarcza kompaktowe i modularne rozwiązania dla branż spożywczej, chemicznej i farmaceutycznej. Maszyny integrują się z systemami automatycznego podawania, ważenia i transportu w ciągłą linię pakującą.',
    applications: [
      'Pakowanie jednostkowe w folię flow pack',
      'Produkty spożywcze, OTC i chemiczne',
      'Linie z ręcznym lub automatycznym podawaniem',
      'Systemy wielotorowe i wielorzędowe',
      'Integracja z ważeniem i transportem produktu',
    ],
    partners: ['GSP / Tecno Pack'],
    imageSrc: '/images/machines/flowpack.jpg',
    imageAlt: 'Pozioma maszyna pakująca flow pack',
    cta: { label: 'Zobacz maszyny flow pack', href: '/maszyny/poziome-maszyny-pakujace' },
  },
  {
    id: 'vffs',
    name: 'Maszyny pionowe VFFS',
    category: 'Pakowanie pionowe',
    description:
      'Pionowe maszyny pakujące (VFFS) formują opakowanie z rolki folii, dozują produkt i zgrzewają woreczek w jednym cyklu roboczym. Essegi dostarcza kompaktowe maszyny VFFS dla produktów sypkich, granulowanych i w płatkach. Rozwiązania integrują się z wielogłowicowymi systemami wagowymi i przenośnikami — zapewniając precyzję dozowania przy wysokiej wydajności linii.',
    applications: [
      'Produkty sypkie, granulowane i w płatkach',
      'Kawa, kakao, przyprawy, granulaty, proszki',
      'Opakowania woreczek i pillow bag',
      'Integracja z ważeniem wielogłowicowym',
      'Różne wydajności i formaty folii',
    ],
    partners: ['Essegi'],
    imageSrc: '/images/machines/vffs.jpg',
    imageAlt: 'Pionowa maszyna pakująca VFFS',
    cta: { label: 'Zobacz maszyny VFFS', href: '/maszyny/pionowe-maszyny-pakujace' },
  },
  {
    id: 'wazenie',
    name: 'Ważenie i dozowanie',
    category: 'Przygotowanie produktu',
    description:
      'Precyzyjne ważenie i dozowanie to fundament powtarzalnego procesu pakowania. Concetti i Essegi dostarczają systemy ważenia wielogłowicowego, dozowania objętościowego i wagowego dla szerokiego zakresu produktów sypkich. Systemy integrują się bezpośrednio z maszynami pakującymi — zapewniając zamknięty przepływ: ważenie, pakowanie, transport.',
    applications: [
      'Produkty sypkie, granulowane i ziarniste',
      'Ważenie wielogłowicowe (multihead)',
      'Dozowanie objętościowe i wagowe',
      'Integracja z maszynami VFFS i workującymi',
      'Linie dla sektorów spożywczego i chemicznego',
    ],
    partners: ['Concetti', 'Essegi'],
    imageSrc: '/images/machines/waga-wieloglowicowa.jpg',
    imageAlt: 'System ważenia wielogłowicowego do linii pakującej',
    cta: { label: 'Zobacz systemy ważenia', href: '/maszyny/wazenie-i-dozowanie' },
  },
  {
    id: 'workowanie',
    name: 'Workowanie i zamykanie worków',
    category: 'Systemy workowania',
    description:
      'Workowanie to kluczowy etap procesu dla produktów bulk — proszków, granulatu, mąki i surowców przemysłowych. Concetti projektuje kompletne linie workujące: napełnianie i ważenie, formowanie i zamykanie worka, przekazanie do transportu i paletyzacji. Systemy obejmują worki otwarte, big-bag i opakowania specjalistyczne w konfiguracji półautomatycznej i pełnej automatyzacji.',
    applications: [
      'Workowanie produktów sypkich i granulowanych',
      'Worki otwarte i big-bag',
      'Proszki, granulaty, mąka, nawozy, karma',
      'Kompletne linie z ważeniem i zamknięciem worka',
      'Wersje półautomatyczne i pełna automatyzacja',
    ],
    partners: ['Concetti'],
    imageSrc: '/images/machines/bagging.jpg',
    imageAlt: 'Linia workująca do produktów sypkich',
    cta: { label: 'Zobacz systemy workowania', href: '/maszyny/workowanie' },
  },
  {
    id: 'paletyzacja',
    name: 'Paletyzacja',
    category: 'Koniec linii',
    description:
      'Paletyzacja to finalny etap linii pakującej — automatyczne układanie opakowań, worków lub kartonów na palecie w stabilnym wzorze. MadejPak realizuje projekty paletyzacji we współpracy z Concetti (paletyzatory liniowe) oraz liderami w robotyzacji przemysłowej (roboty i coboty). Dobór systemu zależy od wydajności linii, formatu opakowania, dostępnej przestrzeni i wymagań procesu.',
    applications: [
      'Paletyzacja worków, kartonów i opakowań zbiorczych',
      'Paletyzatory liniowe i robotyczne',
      'Wydajności od 200 do 1800+ cykli/h',
      'Sektory spożywczy, chemiczny, FMCG',
      'Integracja z przenośnikami i owijarkami palet',
    ],
    partners: ['Concetti', 'KUKA', 'DOBOT'],
    imageSrc: '/images/machines/palletizing-concetti.jpg',
    imageAlt: 'Automatyczny paletyzator robotyczny na linii pakującej',
    cta: { label: 'Zobacz systemy paletyzacji', href: '/maszyny/paletyzacja' },
  },
  {
    id: 'owijanie',
    name: 'Owijanie palet',
    category: 'Stabilizacja ładunku',
    description:
      'Po zapaletyzowaniu każdy ładunek wymaga stabilizacji przed transportem. Technowrapp projektuje automatyczne i półautomatyczne owijarki do palet z systemem stretch wrapping — zapewniając szczelne, bezpieczne owinięcie w powtarzalnym cyklu. Rozwiązania integrują się z przenośnikami i paletyzatorami, tworząc spójny i wydajny koniec linii.',
    applications: [
      'Automatyczne owijanie palet folią stretch',
      'Systemy pełnoautomatyczne i półautomatyczne',
      'Owijarki ramieniowe i rotacyjne',
      'Koniec linii i obsługa gotowych palet',
      'Integracja z paletyzatorami i przenośnikami',
    ],
    partners: ['Technowrapp'],
    imageSrc: '/images/machines/wrapping.jpg',
    imageAlt: 'Automatyczna owijarką palet folią stretch',
    cta: { label: 'Zobacz owijarki palet', href: '/maszyny/owijarki-do-palet' },
  },
  {
    id: 'robotyzacja',
    name: 'Robotyzacja pakowania',
    category: 'Automatyzacja stanowisk',
    description:
      'Roboty przemysłowe i coboty automatyzują stanowiska pakujące — szczególnie tam, gdzie liczy się elastyczność, szybkie przezbrojenie lub obsługa zróżnicowanego asortymentu. Coboty liderów branży sprawdzają się na stanowiskach o średnich wydajnościach, roboty przemysłowe realizują wymagające aplikacje paletyzacji i handlingu na dużych liniach produkcyjnych.',
    applications: [
      'Pick-and-place i podawanie produktów',
      'Paletyzacja i depaletyzacja robotyczna',
      'Stanowiska wieloasortymentowe i elastyczne',
      'Obsługa końca linii i transfer produktów',
      'Integracja z systemami wizji i przenośnikami',
    ],
    partners: ['DOBOT', 'KUKA'],
    imageSrc: '/images/other/robotyzacja-cobot.jpg',
    imageAlt: 'Cobot na stanowisku pakującym',
    cta: { label: 'Poznaj technologię', href: '/maszyny/robotyzacja-pakowania' },
  },
  {
    id: 'koniec-linii',
    name: 'Transport i koniec linii',
    category: 'Integracja przepływu',
    description:
      'Sprawny transport wewnętrzny i ciągłość przepływu między maszynami to fundament wydajnej linii pakującej. MadejPak projektuje i integruje systemy przenośników, transferu i obsługi opakowań — łącząc urządzenia różnych partnerów w jeden spójny przepływ od wyjścia maszyny pakującej po owiniętą paletę gotową do ekspedycji.',
    applications: [
      'Przenośniki taśmowe i rolkowe',
      'Transfer i zbieżność linii',
      'Systemy akumulacji i buforowania',
      'Integracja urządzeń różnych producentów',
      'Kompletny przepływ od pakowania po ekspedycję',
    ],
    partners: ['Technowrapp', 'Concetti', 'MadejPak'],
    imageSrc: '/images/machines/conveyor-concetti.jpg',
    imageAlt: 'System przenośników i transportu wewnętrznego linii pakującej',
    cta: { label: 'Zobacz transport i koniec linii', href: '/maszyny/transport-i-koniec-linii' },
  },
];

export const PARTNER_OVERVIEW: PartnerOverview[] = [
  { id: 'gsp',         name: 'GSP / Tecno Pack', specialty: 'Dostarcza poziome maszyny flowpack do pakowania jednostkowego w folię — dla branż spożywczej, chemicznej i farmaceutycznej.' },
  { id: 'essegi',      name: 'Essegi',            specialty: 'Dostarcza pionowe maszyny VFFS i systemy ważenia wielogłowicowego do pakowania produktów sypkich: kawy, przypraw, granulatów, proszków.' },
  { id: 'concetti',    name: 'Concetti',          specialty: 'Projektuje kompletne linie workowania (worki otwarte, big-bag), systemy ważenia oraz paletyzatory liniowe dla sektorów sypkich i chemicznych.' },
  { id: 'technowrapp', name: 'Technowrapp',       specialty: 'Dostarcza automatyczne i półautomatyczne owijarki palet folią stretch oraz systemy transportu i handlingu końca linii.' },
  { id: 'dobot',       name: 'DOBOT',             specialty: 'Coboty DOBOT automatyzują stanowiska pick-and-place i lżejszą paletyzację — elastyczne, szybkie w przezbrojeniu, bezpieczne bez stałego ogrodzenia.' },
  { id: 'kuka',        name: 'KUKA',              specialty: 'Roboty przemysłowe KUKA realizują wymagające aplikacje paletyzacji ciężkich formatów, handlingu i obsługi intensywnych procesów końca linii.' },
];
