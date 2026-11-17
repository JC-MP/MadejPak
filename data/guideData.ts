// ─── Poradnik /poradnik (PL i EN) ─────────────────────────────────────────────
// Każda sekcja: pytanie (H2) + krótka odpowiedź na początku (cytowana przez Google
// AI Overviews i czaty AI, trafia też do FAQPage) + szczegóły + linki do oferty.
// Zasady: bez cen; liczby tylko potwierdzone (zwrot 8 mies.–3 lata podał Jakub,
// 11.2026; „blisko 50%” to realizacja Dobis). Nie podawać dat założenia partnerów
// (o Concetti źródła podają różne daty; pewne: włoska firma z Bastia Umbra, linie workowania i big bagów).

export type GuideLang = 'pl' | 'en';

interface GuideLink { label: string; href: string }

export interface GuideSection {
  id: string;
  question: string;
  short: string;
  body: string[];
  table?: { head: [string, string, string]; rows: [string, string, string][] };
  image?: { src: string; alt: string; dark?: boolean; width: number; height: number };
  links: GuideLink[];
}

export interface GuideCopy {
  meta: { title: string; description: string; ogTitle: string; keywords: string[] };
  eyebrow: string;
  h1: string;
  lead: string;
  tocTitle: string;
  shortLabel: string;
  seeAlso: string;
  sections: GuideSection[];
  cta: { title: string; text: string; contact: string; selector: string };
  breadcrumb: { home: string; current: string };
  updated: string;
}

export const GUIDE_PUBLISHED = '2026-11-15';

export const GUIDE_COPY: Record<GuideLang, GuideCopy> = {
  pl: {
    meta: {
      title: 'Poradnik: automatyzacja pakowania i paletyzacji',
      description: 'Co to jest koniec linii, maszyna pionowa i pozioma, paletyzacja i cobot? Kiedy zwraca się automatyzacja i po co własne chwytaki. Poradnik MadejPak.',
      ogTitle: 'Automatyzacja pakowania: poradnik | MadejPak',
      keywords: [
        'koniec linii pakującej', 'maszyna pionowa VFFS', 'maszyna pozioma flow-pack', 'co to jest paletyzacja',
        'cobot czy robot przemysłowy', 'chwytak do robota', 'zwrot z inwestycji automatyzacja', 'brak pracowników produkcja',
      ],
    },
    eyebrow: 'Poradnik',
    h1: 'Automatyzacja pakowania w prostych słowach',
    lead: 'Najczęstsze pytania, które słyszymy od klientów, i krótkie odpowiedzi. Bez żargonu, z przykładami z naszych realizacji.',
    tocTitle: 'Spis treści',
    shortLabel: 'W skrócie',
    seeAlso: 'Zobacz także',
    updated: 'Aktualizacja: listopad 2026',
    sections: [
      {
        id: 'o-madejpak',
        question: 'Kim jest MadejPak i jak długo działa na rynku?',
        short: 'MadejPak działa na rynku od ponad 25 lat. Projektujemy i integrujemy linie pakujące oraz automatyzujemy koniec linii. Z wieloma klientami jesteśmy od czasów, gdy pakowali w garażu, a dziś mają duże fabryki. Rośliśmy razem z nimi.',
        body: [
          'Dostarczamy pojedyncze maszyny i kompletne, zautomatyzowane linie: od maszyny pakującej, przez paletyzację, po owiniętą paletę. Chwytaki, podajniki, bufory i magazyny palet budujemy sami, a maszyny serwisujemy. Siedziba firmy jest w Dziewinie w Małopolsce.',
          'Wielu klientów wraca do nas przy kolejnych etapach rozbudowy zakładu.',
        ],
        links: [
          { label: 'O firmie', href: '/o-firmie' },
          { label: 'Realizacje', href: '/realizacje' },
        ],
      },
      {
        id: 'koniec-linii',
        question: 'Co to jest obsługa końca linii?',
        short: 'Koniec linii to wszystko, co dzieje się z produktem po zapakowaniu: transport, pakowanie do kartonów, układanie na palecie i zabezpieczenie palety folią. Automatyzujemy go w całości albo etapami, zaczynając od odbioru produktu z maszyny, którą już masz.',
        body: [
          'To zwykle najbardziej pracochłonna część zakładu. Ludzie przenoszą worki i kartony, układają je na paletach i owijają palety folią. To ciężka, powtarzalna praca.',
          'Automatyczny koniec linii składa się z przenośników i buforów, kartonowania (formowanie, pakowanie i zaklejanie kartonów), paletyzacji robotem i owijarki. MadejPak łączy te etapy w jeden układ zsynchronizowany z Twoją linią.',
        ],
        image: { src: '/images/palletizing/linia-male-worki-owijarka.jpg', alt: 'Przykładowy koniec linii: odbiór worków, robot paletyzujący i owijarka (rysunek 3D)', width: 1600, height: 800 },
        links: [
          { label: 'Gotowe stanowiska paletyzacji', href: '/maszyny/paletyzacja' },
          { label: 'Kartonowanie', href: '/maszyny/kartonowanie' },
          { label: 'Owijarki do palet', href: '/maszyny/owijarki-do-palet' },
          { label: 'Transport i koniec linii', href: '/maszyny/transport-i-koniec-linii' },
        ],
      },
      {
        id: 'maszyny-pionowe',
        question: 'Czym jest maszyna pionowa (VFFS)?',
        short: 'Maszyna pionowa formuje worek z folii nawiniętej na rolkę, napełnia go produktem spadającym z góry i zgrzewa. Sprawdza się przy produktach sypkich i drobnych, takich jak granulaty, nawozy, pellet, przekąski czy mrożonki.',
        body: [
          'Skrót VFFS oznacza Vertical Form Fill Seal, czyli pionowe formowanie, napełnianie i zgrzewanie. Nad maszyną pracuje urządzenie, które odmierza porcję produktu, np. waga wielogłowicowa albo dozownik.',
          'Maszyna pionowa robi m.in. worki poduszkowe, worki z zakładkami i worki z płaskim dnem. Rodzaj worka dobiera się do produktu i wymagań odbiorcy.',
        ],
        links: [
          { label: 'Pionowe maszyny pakujące', href: '/maszyny/pionowe-maszyny-pakujace' },
          { label: 'Ważenie i dozowanie', href: '/maszyny/wazenie-i-dozowanie' },
        ],
      },
      {
        id: 'maszyny-poziome',
        question: 'Czym jest maszyna pozioma (flow-pack)?',
        short: 'Maszyna pozioma owija produkt podawany na taśmie w rękaw z folii i zgrzewa go wzdłuż oraz na obu końcach. Tak pakuje się produkty w sztukach o stałym kształcie, np. batony, wafle, pieczywo, wkłady zniczowe czy elementy techniczne.',
        body: [
          'Nazwa flow-pack pochodzi od ciągłego przepływu produktu przez maszynę. Spotyka się też skrót HFFS, czyli Horizontal Form Fill Seal.',
          'Maszyny poziome GSP pracują m.in. w liniach pakowania wkładów zniczowych u Bolsius i Admit.',
        ],
        links: [
          { label: 'Poziome maszyny pakujące', href: '/maszyny/poziome-maszyny-pakujace' },
          { label: 'Realizacje', href: '/realizacje' },
        ],
      },
      {
        id: 'pionowa-czy-pozioma',
        question: 'Maszyna pionowa czy pozioma: którą wybrać?',
        short: 'O wyborze decyduje produkt. Sypki lub drobny produkt, który odmierza się porcjami, pakuje się zwykle w maszynie pionowej. Produkt w sztukach o stałym kształcie pakuje się w maszynie poziomej.',
        body: ['Jeśli nie masz pewności, opisz nam produkt i opakowanie, a dobierzemy rozwiązanie.'],
        table: {
          head: ['', 'Maszyna pionowa (VFFS)', 'Maszyna pozioma (flow-pack)'],
          rows: [
            ['Produkt', 'sypki, granulowany, drobny', 'sztuki o stałym kształcie'],
            ['Podawanie', 'z góry, przez dozownik lub wagę', 'na taśmie, poziomo'],
            ['Opakowanie', 'worek formowany z rolki folii', 'rękaw z folii wokół produktu'],
            ['Przykłady', 'nawozy, pellet, przekąski, mrożonki', 'batony, wafle, pieczywo, wkłady zniczowe'],
          ],
        },
        links: [
          { label: 'Pionowe maszyny pakujące', href: '/maszyny/pionowe-maszyny-pakujace' },
          { label: 'Poziome maszyny pakujące', href: '/maszyny/poziome-maszyny-pakujace' },
        ],
      },
      {
        id: 'termoformowanie',
        question: 'Co to jest maszyna do termoformowania?',
        short: 'Termoformierka sama robi tacki z folii: podgrzewa folię dolną i formuje w niej zagłębienia, do których trafia produkt. Potem zamyka opakowanie folią górną, często z próżnią albo gazem ochronnym, i rozcina gotowe opakowania. Tak pakuje się m.in. wędliny, mięso, sery, świeży makaron i ryby.',
        body: [
          'Termoformowanie wybiera się, gdy produkt ma leżeć w szczelnej tacce i dłużej zachować świeżość. Jedna maszyna formuje, pakuje i zgrzewa, więc nie trzeba osobno kupować gotowych tacek.',
          'Przykładem jest Colimatic THERA 450 z pakowaniem próżniowym i w atmosferze modyfikowanej.',
        ],
        image: { src: '/images/machines/campaign/colimatic-thera-450.jpg', alt: 'Maszyna do termoformowania Colimatic THERA 450 (ilustracja poglądowa, materiał producenta)', width: 1135, height: 558 },
        links: [{ label: 'Colimatic THERA 450', href: '/maszyny/colimatic-thera-450' }],
      },
      {
        id: 'atmosfera-modyfikowana',
        question: 'Co to jest pakowanie w atmosferze modyfikowanej (MAP)?',
        short: 'To pakowanie, w którym powietrze w opakowaniu zastępuje się mieszaniną gazów ochronnych, najczęściej azotu i dwutlenku węgla, dobraną do produktu. Ogranicza to psucie się i utlenianie, więc produkt dłużej zachowuje świeżość, kolor i smak.',
        body: [
          'MAP stosuje się przy produktach, których nie chce się ściskać próżnią, np. przy świeżym makaronie, pieczywie, serach czy wędlinach w plastrach. Maszyna najpierw usuwa powietrze, potem wprowadza gaz i zgrzewa opakowanie.',
          'Do MAP potrzebna jest maszyna z instalacją gazową, np. termoformierka. Taką konfigurację ma Colimatic THERA 450.',
        ],
        links: [{ label: 'Termoformowanie, próżnia i MAP', href: '/maszyny/colimatic-thera-450' }],
      },
      {
        id: 'workowanie-concetti',
        question: 'Czym jest workowanie i kiedy pracujemy z Concetti?',
        short: 'Workowanie to napełnianie dużych worków otwartych produktem sypkim, razem z ważeniem i zamykaniem worka. Przy takich liniach, przy big bagach i przy niektórych projektach paletyzacji pracujemy z włoską firmą Concetti, specjalistą od kompletnych linii workowania.',
        body: [
          'Concetti z Umbrii od dziesięcioleci buduje linie workowania worków otwartych i big bagów, systemy ważenia oraz paletyzatory liniowe dla branży sypkiej i chemicznej.',
          'My dobieramy rozwiązanie, łączymy je z resztą linii, np. z naszymi przenośnikami i robotem paletyzującym, i zapewniamy serwis na miejscu.',
        ],
        links: [
          { label: 'Workowanie i big bagi', href: '/maszyny/workowanie' },
          { label: 'Partnerzy', href: '/partnerzy' },
        ],
      },
      {
        id: 'big-bag',
        question: 'Co to jest big bag i jak się go napełnia?',
        short: 'Big bag to duży worek z mocnej tkaniny na produkty sypkie, z uchwytami do podnoszenia wózkiem lub suwnicą. Mieści zwykle od kilkuset kilogramów do 2 ton. Napełnia się go na stanowisku, które waży produkt, napełnia worek i odstawia go na paletę lub przenośnik.',
        body: [
          'Big bagi stosuje się przy dużych ilościach surowców: nawozów, granulatów, chemii, pelletu czy materiałów budowlanych. Jeden big bag zastępuje kilkadziesiąt mniejszych worków.',
          'Stanowiska do big bagów realizujemy z Concetti. Dobieramy je do produktu i łączymy z transportem i paletyzacją.',
        ],
        image: { src: '/images/machines/bagging-bigbag.jpg', alt: 'Stanowisko do napełniania big bagów Concetti', width: 400, height: 400 },
        links: [{ label: 'Workowanie i big bagi', href: '/maszyny/workowanie' }],
      },
      {
        id: 'kartonowanie',
        question: 'Czym jest kartonowanie?',
        short: 'Kartonowanie to automatyczne pakowanie produktów do kartonów: formowarka składa karton z płaskiego arkusza, produkt trafia do środka zrzutowo albo robotem, a zaklejarka zamyka karton taśmą lub klejem. Potem karton jedzie na paletyzację.',
        body: [
          'Formowarki składają do 20 kartonów na minutę, a zaklejarki mogą same dopasować się do różnych formatów kartonów na jednej linii. Wydajność zależy od wymiarów kartonu.',
          'Kartonowanie łączymy z paletyzacją i owijaniem w jeden koniec linii, z naszymi podajnikami i buforami między maszynami.',
        ],
        links: [
          { label: 'Kartonowanie', href: '/maszyny/kartonowanie' },
          { label: 'Paletyzacja kartonów', href: '/maszyny/paletyzacja' },
        ],
      },
      {
        id: 'paletyzacja',
        question: 'Co to jest paletyzacja i kto ją u nas robi?',
        short: 'Paletyzacja to układanie worków, kartonów lub innych opakowań na palecie według stałego wzoru, tak żeby paleta była stabilna w transporcie. Stanowiska paletyzacji projektujemy i budujemy sami, na robotach przemysłowych KUKA i cobotach DOBOT.',
        body: [
          'Robot pobiera produkt z przenośnika chwytakiem i odkłada go warstwami. Wzór układania zmienia się w programie, bez przezbrajania mechaniki.',
          'Od partnerów bierzemy roboty i owijarki. Chwytaki, podajniki, bufory, automatyczny magazyn palet i integrację całej linii robimy u siebie.',
        ],
        image: { src: '/images/palletizing/linia-pellet.jpg', alt: 'Linia pakowania i paletyzacji pelletu z robotem KUKA (rysunek 3D, realizacja Europol)', width: 1600, height: 900 },
        links: [
          { label: 'Dobierz stanowisko paletyzacji', href: '/maszyny/paletyzacja' },
          { label: 'Automatyczny magazyn palet', href: '/maszyny/madejpak/desztaplery-palet' },
        ],
      },
      {
        id: 'coboty',
        question: 'Co to są roboty współpracujące (coboty) i czym różnią się od robotów przemysłowych?',
        short: 'Cobot to robot zaprojektowany do pracy obok człowieka. Jest lżejszy i wolniejszy, a po analizie ryzyka może pracować bez pełnego wygrodzenia. Robot przemysłowy jest szybszy i przenosi większe ciężary, ale pracuje w wydzielonej, zabezpieczonej strefie.',
        body: [
          'Coboty DOBOT stosujemy tam, gdzie liczy się mała powierzchnia i niższy koszt: przy lekkich kartonach i mniejszej wydajności. Roboty KUKA wybieramy do worków, cięższych kartonów i pracy ciągłej na kilka zmian.',
          'Przykład: mobilne stanowisko cobotyczne do paletyzacji u producenta lodów i produktów garmażeryjnych Alexpol.',
        ],
        image: { src: '/images/palletizing/cobot-kompakt.jpg', alt: 'Kompaktowe stanowisko paletyzacji kartonów z cobotem DOBOT (wizualizacja)', width: 1316, height: 740 },
        links: [
          { label: 'Robotyzacja pakowania', href: '/maszyny/robotyzacja-pakowania' },
          { label: 'Realizacja Alexpol', href: '/realizacje/alexpol' },
        ],
      },
      {
        id: 'chwytaki',
        question: 'Dlaczego MadejPak robi własne chwytaki do robotów?',
        short: 'Bo chwytak to część robota, która dotyka produktu, i nie da się go dobrze kupić z katalogu. Projektujemy go pod konkretny produkt i warunki, żeby pewnie chwytał i wytrzymał lata pracy w pyle, wilgoci czy chłodni.',
        body: [
          'Od chwytaka zależy, czy robot pobierze worek lub karton pewnie, czy będzie go gubił albo uszkadzał. Jeden chwytak może też łączyć kilka funkcji, np. przenosić produkt i układać przekładki między warstwami.',
          'Skoro sami go projektujemy, szybko go zmodyfikujemy przy nowym formacie i dostarczymy części. Integrację chwytaka z robotem i sterowaniem bierzemy na siebie.',
        ],
        image: { src: '/images/machines/madejpak/chwytak-manipulator.jpg', alt: 'Chwytak MadejPak na robocie przemysłowym (wizualizacja)', dark: true, width: 1600, height: 878 },
        links: [{ label: 'Chwytaki i manipulatory MadejPak', href: '/maszyny/madejpak/chwytaki-i-manipulatory' }],
      },
      {
        id: 'rentownosc',
        question: 'Czy automatyzacja pakowania się opłaca?',
        short: 'W naszych wdrożeniach maszyny zwracają się zwykle po 8 miesiącach do 3 lat. Najszybciej tam, gdzie linia pracuje na kilka zmian, a przy pakowaniu lub paletyzacji pracuje dziś kilka osób.',
        body: [
          'Na czas zwrotu wpływają przede wszystkim liczba zmian i dni pracy, liczba osób, które przejdą do innych zadań, koszt pracy, wydajność linii i straty materiału. U producenta toreb papierowych Dobis zużycie materiału spadło o blisko 50%.',
          'Dokładne wyliczenie przygotowujemy po analizie Twojej linii, razem z ofertą.',
        ],
        links: [
          { label: 'Realizacja Dobis', href: '/realizacje/dobis' },
          { label: 'Kontakt', href: '/kontakt' },
        ],
      },
      {
        id: 'pracownicy',
        question: 'Brakuje ludzi do pakowania i paletyzacji. Co można zrobić?',
        short: 'Przejąć automatyką najcięższą i najbardziej powtarzalną pracę: przenoszenie worków i kartonów, układanie palet i owijanie. Pracownicy przechodzą do nadzoru i lżejszych zadań, a linia nie staje, gdy brakuje ludzi na zmianie.',
        body: [
          'Ręczna paletyzacja worków po 25 kg to praca, do której trudno znaleźć i utrzymać ludzi, i która mocno obciąża organizm. Robot pracuje tak samo na każdej zmianie.',
          'Często zaczynamy od jednego stanowiska, np. paletyzacji, i rozbudowujemy automatyzację etapami.',
        ],
        links: [
          { label: 'Gotowe stanowiska paletyzacji', href: '/maszyny/paletyzacja' },
          { label: 'Realizacje', href: '/realizacje' },
        ],
      },
      {
        id: 'wloskie-maszyny',
        question: 'Dlaczego maszyny pionowe i poziome sprowadzamy z Włoch?',
        short: 'Bo włoscy producenci, z którymi pracujemy, Essegi (maszyny pionowe) i GSP / Tecno Pack (maszyny poziome), mają wieloletnią historię i dobry stosunek jakości do ceny. Nasi klienci potwierdzają to w codziennej pracy maszyn.',
        body: [
          'Włochy słyną z budowy maszyn pakujących, a nasi partnerzy specjalizują się w nich od lat.',
          'Maszyny Essegi pracują m.in. w liniach Europol (pellet), Certech (żwirek) i Planta (nawozy), a maszyny GSP w liniach pakowania wkładów zniczowych u Bolsius i Admit. Dobór, integrację z linią i serwis zapewniamy na miejscu, w Polsce. Z Włoch pochodzą też Concetti (workowanie i big bagi) oraz Colimatic (termoformowanie).',
        ],
        links: [
          { label: 'Pionowe maszyny pakujące', href: '/maszyny/pionowe-maszyny-pakujace' },
          { label: 'Poziome maszyny pakujące', href: '/maszyny/poziome-maszyny-pakujace' },
          { label: 'Partnerzy', href: '/partnerzy' },
        ],
      },
    ],
    cta: {
      title: 'Masz pytanie, którego tu nie ma?',
      text: 'Zadzwoń albo napisz. Odpowiemy prosto, bez żargonu.',
      contact: 'Kontakt',
      selector: 'Dobierz stanowisko paletyzacji',
    },
    breadcrumb: { home: 'Home', current: 'Poradnik' },
  },

  en: {
    meta: {
      title: 'Guide: packaging and palletising automation',
      description: 'What are end-of-line handling, vertical and horizontal packaging machines, palletising and cobots? When does automation pay back? The MadejPak guide.',
      ogTitle: 'Packaging automation guide | MadejPak',
      keywords: [
        'end of line packaging', 'vertical packaging machine VFFS', 'horizontal flow wrapper', 'what is palletising',
        'cobot vs industrial robot', 'robot gripper', 'automation payback', 'labour shortage production',
      ],
    },
    eyebrow: 'Guide',
    h1: 'Packaging automation in plain words',
    lead: 'The questions we hear most often from customers, with short answers. No jargon, with examples from our projects.',
    tocTitle: 'Contents',
    shortLabel: 'In short',
    seeAlso: 'See also',
    updated: 'Updated: November 2026',
    sections: [
      {
        id: 'o-madejpak',
        question: 'Who is MadejPak and how long has it been in business?',
        short: 'MadejPak has been on the market for more than 25 years. We design and integrate packaging lines and automate the end of line. We have worked with many customers since they were packing in a garage, and today they run large factories. We have grown together with them.',
        body: [
          'We supply single machines and complete automated lines: from the packaging machine, through palletising, to the wrapped pallet. We build grippers, feeders, buffers and pallet magazines ourselves and service the machines. Our headquarters is in Dziewin, Lesser Poland.',
          'Many customers come back to us as their plants grow.',
        ],
        links: [
          { label: 'About us', href: '/o-firmie' },
          { label: 'Case studies', href: '/realizacje' },
        ],
      },
      {
        id: 'koniec-linii',
        question: 'What is end-of-line handling?',
        short: 'The end of line is everything that happens to the product after it is packed: conveying, case packing, stacking on the pallet and securing the pallet with film. We automate it fully or in stages, starting with taking the product from the machine you already have.',
        body: [
          'It is usually the most labour-intensive part of a plant. People carry bags and cartons, stack them on pallets and wrap the pallets in film. It is heavy, repetitive work.',
          'An automatic end of line consists of conveyors and buffers, case packing (erecting, packing and sealing cases), robotic palletising and a wrapper. MadejPak combines these stages into one system synchronised with your line.',
        ],
        image: { src: '/images/palletizing/linia-male-worki-owijarka.jpg', alt: 'Example end of line: bag take-off, palletising robot and wrapper (3D drawing)', width: 1600, height: 800 },
        links: [
          { label: 'Ready-made palletising cells', href: '/maszyny/paletyzacja' },
          { label: 'Case packing', href: '/maszyny/kartonowanie' },
          { label: 'Pallet wrappers', href: '/maszyny/owijarki-do-palet' },
          { label: 'Transport & end of line', href: '/maszyny/transport-i-koniec-linii' },
        ],
      },
      {
        id: 'maszyny-pionowe',
        question: 'What is a vertical packaging machine (VFFS)?',
        short: 'A vertical machine forms a bag from film on a reel, fills it with product falling from above and seals it. It suits bulk and small products such as granules, fertilisers, pellets, snacks or frozen food.',
        body: [
          'VFFS stands for Vertical Form Fill Seal. Above the machine there is a device that measures out the portion of product, e.g. a multihead weigher or a doser.',
          'A vertical machine makes, among others, pillow bags, gusseted bags and flat-bottom bags. The bag type is chosen for the product and the customer’s requirements.',
        ],
        links: [
          { label: 'Vertical packaging machines', href: '/maszyny/pionowe-maszyny-pakujace' },
          { label: 'Weighing & dosing', href: '/maszyny/wazenie-i-dozowanie' },
        ],
      },
      {
        id: 'maszyny-poziome',
        question: 'What is a horizontal packaging machine (flow wrapper)?',
        short: 'A horizontal machine wraps the product, fed on a belt, in a film tube and seals it lengthwise and at both ends. It packs individual products with a fixed shape, e.g. bars, wafers, bakery products, candle inserts or technical parts.',
        body: [
          'The name flow pack comes from the continuous flow of product through the machine. The abbreviation HFFS (Horizontal Form Fill Seal) is also used.',
          'GSP horizontal machines run, among others, in candle-insert packaging lines at Bolsius and Admit.',
        ],
        links: [
          { label: 'Horizontal packaging machines', href: '/maszyny/poziome-maszyny-pakujace' },
          { label: 'Case studies', href: '/realizacje' },
        ],
      },
      {
        id: 'pionowa-czy-pozioma',
        question: 'Vertical or horizontal machine: which one to choose?',
        short: 'The product decides. A bulk or small product measured out in portions is usually packed on a vertical machine. A product in pieces with a fixed shape is packed on a horizontal machine.',
        body: ['If you are not sure, describe the product and the pack to us and we will select a solution.'],
        table: {
          head: ['', 'Vertical machine (VFFS)', 'Horizontal machine (flow wrapper)'],
          rows: [
            ['Product', 'bulk, granular, small', 'pieces with a fixed shape'],
            ['Feeding', 'from above, via a doser or weigher', 'on a belt, horizontally'],
            ['Pack', 'bag formed from a film reel', 'film tube around the product'],
            ['Examples', 'fertilisers, pellets, snacks, frozen food', 'bars, wafers, bakery, candle inserts'],
          ],
        },
        links: [
          { label: 'Vertical packaging machines', href: '/maszyny/pionowe-maszyny-pakujace' },
          { label: 'Horizontal packaging machines', href: '/maszyny/poziome-maszyny-pakujace' },
        ],
      },
      {
        id: 'termoformowanie',
        question: 'What is a thermoforming packaging machine?',
        short: 'A thermoformer makes its own trays from film: it heats the bottom film and forms cavities in it, into which the product is placed. It then closes the pack with a top film, often with vacuum or protective gas, and cuts the finished packs apart. It is used for cold cuts, meat, cheese, fresh pasta and fish, among others.',
        body: [
          'Thermoforming is chosen when the product should lie in a sealed tray and stay fresh longer. One machine forms, packs and seals, so there is no need to buy ready-made trays.',
          'An example is the Colimatic THERA 450 with vacuum and modified atmosphere packaging.',
        ],
        image: { src: '/images/machines/campaign/colimatic-thera-450.jpg', alt: 'Colimatic THERA 450 thermoforming machine (indicative illustration, manufacturer material)', width: 1135, height: 558 },
        links: [{ label: 'Colimatic THERA 450', href: '/maszyny/colimatic-thera-450' }],
      },
      {
        id: 'atmosfera-modyfikowana',
        question: 'What is modified atmosphere packaging (MAP)?',
        short: 'It is packaging in which the air in the pack is replaced with a mix of protective gases, usually nitrogen and carbon dioxide, selected for the product. This slows spoilage and oxidation, so the product keeps its freshness, colour and taste longer.',
        body: [
          'MAP is used for products that should not be squeezed by vacuum, e.g. fresh pasta, bakery products, cheese or sliced cold cuts. The machine first removes the air, then injects the gas and seals the pack.',
          'MAP requires a machine with a gas system, e.g. a thermoformer. The Colimatic THERA 450 has such a configuration.',
        ],
        links: [{ label: 'Thermoforming, vacuum and MAP', href: '/maszyny/colimatic-thera-450' }],
      },
      {
        id: 'workowanie-concetti',
        question: 'What is bagging and when do we work with Concetti?',
        short: 'Bagging means filling large open-mouth bags with bulk product, together with weighing and closing the bag. For such lines, for big bags and for some palletising projects we work with the Italian company Concetti, a specialist in complete bagging lines.',
        body: [
          'Concetti, based in Umbria, has been building bagging lines for open-mouth bags and big bags, weighing systems and inline palletisers for the bulk and chemical sectors for decades.',
          'We select the solution, connect it to the rest of the line, e.g. our conveyors and palletising robot, and provide local service.',
        ],
        links: [
          { label: 'Bagging and big bags', href: '/maszyny/workowanie' },
          { label: 'Partners', href: '/partnerzy' },
        ],
      },
      {
        id: 'big-bag',
        question: 'What is a big bag and how is it filled?',
        short: 'A big bag is a large bag made of strong fabric for bulk products, with loops for lifting by forklift or crane. It usually holds from several hundred kilograms up to 2 tonnes. It is filled at a station that weighs the product, fills the bag and places it on a pallet or conveyor.',
        body: [
          'Big bags are used for large quantities of raw materials: fertilisers, granules, chemicals, pellets or building materials. One big bag replaces dozens of smaller bags.',
          'We deliver big-bag stations together with Concetti. We select them for the product and connect them with conveying and palletising.',
        ],
        image: { src: '/images/machines/bagging-bigbag.jpg', alt: 'Concetti big-bag filling station', width: 400, height: 400 },
        links: [{ label: 'Bagging and big bags', href: '/maszyny/workowanie' }],
      },
      {
        id: 'kartonowanie',
        question: 'What is case packing?',
        short: 'Case packing means automatically packing products into cases: an erector forms the case from a flat blank, the product goes in by dropping or by robot, and a sealer closes the case with tape or glue. The case then goes on to palletising.',
        body: [
          'Erectors form up to 20 cases per minute, and sealers can adjust themselves to different case formats on one line. Output depends on case dimensions.',
          'We combine case packing with palletising and wrapping into one end of line, with our own feeders and buffers between machines.',
        ],
        links: [
          { label: 'Case packing', href: '/maszyny/kartonowanie' },
          { label: 'Carton palletising', href: '/maszyny/paletyzacja' },
        ],
      },
      {
        id: 'paletyzacja',
        question: 'What is palletising and who does it for us?',
        short: 'Palletising means stacking bags, cartons or other packs on a pallet in a fixed pattern, so that the pallet is stable in transport. We design and build palletising cells ourselves, on KUKA industrial robots and DOBOT cobots.',
        body: [
          'The robot picks the product from the conveyor with a gripper and places it layer by layer. The stacking pattern is changed in the program, without mechanical changeover.',
          'We source robots and wrappers from partners. We make the grippers, feeders, buffers, automatic pallet magazine and the integration of the whole line in-house.',
        ],
        image: { src: '/images/palletizing/linia-pellet.jpg', alt: 'Pellet bagging and palletising line with a KUKA robot (3D drawing, Europol project)', width: 1600, height: 900 },
        links: [
          { label: 'Configure a palletising cell', href: '/maszyny/paletyzacja' },
          { label: 'Automatic pallet magazine', href: '/maszyny/madejpak/desztaplery-palet' },
        ],
      },
      {
        id: 'coboty',
        question: 'What are collaborative robots (cobots) and how do they differ from industrial robots?',
        short: 'A cobot is a robot designed to work next to people. It is lighter and slower, and after a risk assessment it can work without full guarding. An industrial robot is faster and carries heavier loads, but works in a separate, guarded zone.',
        body: [
          'We use DOBOT cobots where small footprint and lower cost matter: light cartons and lower output. We choose KUKA robots for bags, heavier cartons and continuous multi-shift work.',
          'Example: a mobile cobot palletising cell at the ice cream and ready-meal producer Alexpol.',
        ],
        image: { src: '/images/palletizing/cobot-kompakt.jpg', alt: 'Compact carton palletising cell with a DOBOT cobot (visualisation)', width: 1316, height: 740 },
        links: [
          { label: 'Packaging robotics', href: '/maszyny/robotyzacja-pakowania' },
          { label: 'Alexpol case study', href: '/realizacje/alexpol' },
        ],
      },
      {
        id: 'chwytaki',
        question: 'Why does MadejPak make its own robot grippers?',
        short: 'Because the gripper is the part of the robot that touches the product, and a good one cannot be bought from a catalogue. We design it for the specific product and conditions, so that it grips reliably and lasts for years in dust, humidity or a cold store.',
        body: [
          'The gripper decides whether the robot picks a bag or carton reliably or drops and damages it. One gripper can also combine several functions, e.g. moving the product and placing slip-sheets between layers.',
          'Because we design it ourselves, we can quickly modify it for a new format and supply parts. We take care of integrating the gripper with the robot and the control system.',
        ],
        image: { src: '/images/machines/madejpak/chwytak-manipulator.jpg', alt: 'MadejPak gripper on an industrial robot (visualisation)', dark: true, width: 1600, height: 878 },
        links: [{ label: 'MadejPak grippers and manipulators', href: '/maszyny/madejpak/chwytaki-i-manipulatory' }],
      },
      {
        id: 'rentownosc',
        question: 'Does packaging automation pay off?',
        short: 'In our projects, machines usually pay back within 8 months to 3 years. Fastest where the line runs several shifts and several people work on packing or palletising today.',
        body: [
          'The payback time depends mainly on the number of shifts and working days, the number of people who move to other tasks, labour cost, line output and material losses. At the paper bag producer Dobis, material consumption fell by almost 50%.',
          'We prepare an exact calculation after analysing your line, together with the offer.',
        ],
        links: [
          { label: 'Dobis case study', href: '/realizacje/dobis' },
          { label: 'Contact', href: '/kontakt' },
        ],
      },
      {
        id: 'pracownicy',
        question: 'There are not enough people for packing and palletising. What can be done?',
        short: 'Let automation take over the heaviest and most repetitive work: carrying bags and cartons, stacking pallets and wrapping. People move to supervision and lighter tasks, and the line does not stop when a shift is short-staffed.',
        body: [
          'Manual palletising of 25 kg bags is work for which it is hard to find and keep people, and it puts a heavy strain on the body. A robot works the same on every shift.',
          'We often start with one cell, e.g. palletising, and expand automation in stages.',
        ],
        links: [
          { label: 'Ready-made palletising cells', href: '/maszyny/paletyzacja' },
          { label: 'Case studies', href: '/realizacje' },
        ],
      },
      {
        id: 'wloskie-maszyny',
        question: 'Why do we supply vertical and horizontal machines from Italy?',
        short: 'Because the Italian manufacturers we work with, Essegi (vertical machines) and GSP / Tecno Pack (horizontal machines), have a long history and a good balance of quality and price. Our customers confirm this in the daily work of the machines.',
        body: [
          'Italy is known for building packaging machines, and our partners have specialised in them for years.',
          'Essegi machines run, among others, in the lines of Europol (pellets), Certech (cat litter) and Planta (fertilisers), and GSP machines in candle-insert packaging lines at Bolsius and Admit. We provide selection, line integration and service locally, in Poland. Concetti (bagging and big bags) and Colimatic (thermoforming) are also Italian.',
        ],
        links: [
          { label: 'Vertical packaging machines', href: '/maszyny/pionowe-maszyny-pakujace' },
          { label: 'Horizontal packaging machines', href: '/maszyny/poziome-maszyny-pakujace' },
          { label: 'Partners', href: '/partnerzy' },
        ],
      },
    ],
    cta: {
      title: 'Have a question that is not here?',
      text: 'Call or write to us. We will answer simply, without jargon.',
      contact: 'Contact',
      selector: 'Configure a palletising cell',
    },
    breadcrumb: { home: 'Home', current: 'Guide' },
  },
};
