// Maszyny własne MadejPak — wspólne źródło danych dla listy (/maszyny/madejpak)
// oraz podstron szczegółowych (/maszyny/madejpak/[slug]).
//
// UWAGA: wizualizacje są celowo ciemne — chronią rozwiązania konstrukcyjne przed
// konkurencją. Nie rozjaśniać, nie wycinać tła. Na stronie prezentowane są na
// stałym ciemnym kafelku, niezależnie od motywu.

export type MadejPakMachine = {
  /** slug — używany w URL /maszyny/madejpak/[slug] */
  id: string;
  group: string;
  name: string;
  /** krótka nazwa do kart, breadcrumbów i list */
  shortName: string;
  /** zajawka na karcie listy */
  desc: string;
  /** rozwinięcie na podstronie — kolejne akapity */
  longDesc: string[];
  applications: string[];
  benefits: string[];
  /** zdjęcie główne; null = brak renderu, karta pokazuje ikonę SVG */
  image: string | null;
  /** galeria na podstronie (pierwsze zdjęcie zwykle = image) */
  gallery: string[];
  /** ID filmu YouTube — uzupełniane po wrzuceniu materiałów */
  youtubeId: string | null;
  /** jak maszyna wpina się w linię */
  integration: string[];
  /** przykładowe realizacje z udziałem tej maszyny;
   *  slug = wpis w data/realizacjeData.ts → link do pełnego case study */
  realizations: { label: string; scope: string; slug?: string }[];
};

const BASE = '/images/machines/madejpak';

export const MADEJPAK_MACHINES: MadejPakMachine[] = [
  {
    id: 'desztaplery-palet',
    group: 'Systemy podawania i rozdzielania',
    name: 'Desztaplery palet — automatyczny magazyn palet',
    shortName: 'Desztaplery palet',
    desc: 'Automatyczny magazyn palet, który przyjmuje stos i pojedynczo odseparowuje z niego palety, podając je na przenośnik odbiorczy. Zastępuje ręczne rozdzielanie palet — operator uzupełnia stos raz na kilkadziesiąt cykli, zamiast obsługiwać każdą paletę osobno.',
    longDesc: [
      'Desztapler przyjmuje kompletny stos palet i wydaje je pojedynczo, w rytmie narzuconym przez linię. Stos wjeżdża do magazynu wózkiem widłowym, a urządzenie samo odseparowuje dolną paletę i przekazuje ją na przenośnik odbiorczy — **bez udziału operatora przy każdym cyklu**.',
      'To stanowisko, które najczęściej zwraca się **najszybciej z całej automatyzacji końca linii**. Ręczne układanie i rozdzielanie palet to praca powtarzalna, obciążająca kręgosłup i trudna do utrzymania w stałym tempie przez całą zmianę — a jednocześnie taka, której rytm bezpośrednio wyznacza wydajność paletyzatora.',
      '**Konstrukcję dobieramy pod typ palety**, z którą pracuje zakład: wymiar, wysokość stosu i stan palet (nowe, obiegowe, mieszane) wpływają na geometrię chwytu i sposób separacji. Ten sam mechanizm adaptujemy również do innych elementów podawanych ze stosu.',
    ],
    applications: [
      'Zasilanie stanowisk paletyzacji w puste palety',
      'Separacja palet ze stosu bez udziału operatora',
      'Bufor palet na wejściu linii pakującej',
      'Automatyzacja końca linii w zakładach o wysokiej rotacji palet',
    ],
    benefits: [
      'Eliminacja ręcznego przenoszenia palet i związanych z tym urazów',
      'Ciągłe zasilanie paletyzatora bez przerywania cyklu',
      'Konstrukcja dopasowana do typu i wymiaru palety klienta',
      'Praca z paletami obiegowymi o zróżnicowanej jakości',
    ],
    image: `${BASE}/desztapler.jpg`,
    gallery: [
      `${BASE}/desztapler/desztapler-1.jpg`,
      `${BASE}/desztapler/desztapler-2.jpg`,
      `${BASE}/desztapler/desztapler-3.jpg`,
      `${BASE}/desztapler/desztapler-4.jpg`,
      `${BASE}/desztapler/desztapler-5.jpg`,
      `${BASE}/desztapler/desztapler-6.jpg`,
      `${BASE}/desztapler/desztapler-7.jpg`,
    ],
    youtubeId: 'FqWWCK1Dtgc',
    integration: [
      'Przenośnik odbiorczy zsynchronizowany z taktem paletyzatora',
      'Sygnalizacja niskiego stanu stosu do systemu nadrzędnego',
      'Współpraca z paletyzatorami robotycznymi i kolumnowymi',
      'Możliwość zabudowy w istniejącym ciągu bez przestawiania maszyn',
    ],
    realizations: [
      { label: 'Kompleksowa linia pakowania i paletyzacji nawozów', scope: 'Paletyzacja robotem KUKA na końcu linii — od zasobnika produktu aż po owinięcie palety', slug: 'planta' },
      { label: 'Paletyzacja i pakowanie żwirku zoologicznego', scope: 'Linia paletyzacji z dwoma robotami KUKA, zsynchronizowana z systemem klienta', slug: 'certech' },
      { label: 'Robotyczna paletyzacja worków z zaprawami budowlanymi', scope: 'Eliminacja ręcznej paletyzacji w ciężkim i zapylonym środowisku produkcyjnym', slug: 'promotor' },
    ],
  },
  {
    id: 'podajniki-zabierakowe',
    group: 'Systemy podawania i rozdzielania',
    name: 'Podajniki zabierakowe',
    shortName: 'Podajniki zabierakowe',
    desc: 'Przenośnik z zabierakami, który wymusza stały odstęp między produktami i podaje je dalej w ustalonym rytmie. Pracuje samodzielnie — jako wtaktowanie przed maszyną pakującą lub stanowiskiem ręcznym — albo jako element układu zrobotyzowanego.',
    longDesc: [
      'Zabieraki zamocowane na łańcuchu lub pasku dzielą strumień produktu na równe podziałki. Produkt przestaje płynąć „jak leci" i zaczyna trafiać na kolejne stanowisko **zawsze w tej samej pozycji i w tym samym takcie**.',
      'Podajnik zabierakowy **nie wymaga robota**. Bardzo często pracuje jako wtaktowanie przed maszyną pakującą albo jako podawanie na stanowisko ręcznego pakowania czy kontroli — porządkuje strumień produktu tam, gdzie wcześniej robił to operator. Dopiero gdy dochodzi robotyzacja, ten sam podajnik staje się warunkiem stabilnego odbioru przez robota: bez powtarzalnej pozycji aplikacja pick-and-place nie ma czego chwytać.',
      'Podziałkę, wysokość i kształt zabieraków **dobieramy pod konkretny wyrób** — inaczej prowadzi się sztywny karton, a inaczej produkt delikatny lub nieregularny.',
    ],
    applications: [
      'Wtaktowywanie produktu przed maszyną pakującą',
      'Transport wyrobów jednostkowych z zachowaniem stałych odstępów',
      'Podawanie na stanowiska ręcznego pakowania i kontroli',
      'Opcjonalnie: zasilanie aplikacji pick-and-place i robotów',
    ],
    benefits: [
      'Powtarzalna pozycja i odstęp produktu na wyjściu',
      'Stabilny rytm linii i mniej przestojów na zatorach',
      'Podziałka i geometria zabieraków dobierane pod konkretny wyrób',
      'Działa samodzielnie — robotyzacja jest opcją, nie warunkiem',
    ],
    image: `${BASE}/podajnik-zabierakowy.jpg`,
    gallery: [
      `${BASE}/podajnik-zabierakowy/podajnik-zabierakowy-1.jpg`,
      `${BASE}/podajnik-zabierakowy/podajnik-zabierakowy-2.jpg`,
      `${BASE}/podajnik-zabierakowy/podajnik-zabierakowy-3.jpg`,
      `${BASE}/podajnik-zabierakowy/podajnik-zabierakowy-4.jpg`,
      `${BASE}/podajnik-zabierakowy/podajnik-zabierakowy-5.jpg`,
    ],
    youtubeId: 'gk0WDfaVlUI',
    integration: [
      'Synchronizacja prędkości z maszyną pakującą lub robotem',
      'Sygnał obecności produktu i kontrola zapełnienia podziałek',
      'Współpraca z systemami wizyjnymi przy odbiorze robotycznym',
      'Możliwość rozbudowy o kolejne tory i rozdział strumienia',
    ],
    realizations: [
      { label: 'Integracja linii naważania pomidorów z flow-packiem', scope: 'Automatyczny odbiór produktu z linii klienta i wtaktowywanie do maszyny pakującej', slug: 'agrigem' },
      { label: 'Pakowanie sękaczy w atmosferze modyfikowanej', scope: 'Dwie maszyny poziome z wtaktowywaniem produktu przed pakowaniem', slug: 'sekpol' },
      { label: 'Automatyczna linia pakowania wkładów zniczowych', scope: 'Odbiór z linii, zmiana orientacji i pakietowanie przed maszyną pakującą', slug: 'bolsius' },
    ],
  },
  {
    id: 'podajniki-tasmowe',
    group: 'Systemy transportu produktu',
    name: 'Podajniki taśmowe',
    shortName: 'Podajniki taśmowe',
    desc: 'Przenośniki taśmowe budowane pod konkretny odcinek linii — z taśmą dopuszczoną do kontaktu z żywnością i ramą z profilu aluminiowego. Długość, szerokość i wysokość robocza wynikają z układu hali, a nie z katalogu.',
    longDesc: [
      'Przenośnik taśmowy to najczęściej zamawiany element transportu — i jednocześnie ten, w którym **katalogowe wymiary najczęściej nie pasują**. Odległość między maszynami, wysokość wyjścia z pakowaczki i dostępne przejścia w hali są w każdym zakładzie inne.',
      '**Budujemy je pod konkretny odcinek**: długość, szerokość, wysokość robocza i kierunek napędu wynikają z pomiaru na miejscu. Dzięki temu podajnik wpina się w istniejące maszyny **bez podkładek, dorabianych wsporników i improwizacji na uruchomieniu**.',
      'Standardowo stosujemy **taśmy dopuszczone do kontaktu z żywnością** i ramy z profilu aluminiowego — konstrukcja jest lekka, odporna na mycie i łatwa do późniejszej modyfikacji, gdy linia się zmieni.',
    ],
    applications: [
      'Transport międzyoperacyjny między stanowiskami',
      'Odbiór produktu z wyjścia maszyny pakującej',
      'Zasilanie kolejnych etapów linii i stanowisk kontroli',
      'Odcinki wznoszące i opadające między poziomami linii',
    ],
    benefits: [
      'Wymiary i trasa dopasowane do rzeczywistego układu hali',
      'Wykonanie higieniczne, przystosowane do mycia',
      'Regulowana wysokość robocza pod istniejące maszyny',
      'Prosta późniejsza rozbudowa i zmiana konfiguracji',
    ],
    image: `${BASE}/podajnik-tasmowy.jpg`,
    gallery: [
      `${BASE}/podajnik-tasmowy/podajnik-tasmowy-1.jpg`,
      `${BASE}/podajnik-tasmowy/podajnik-tasmowy-2.jpg`,
      `${BASE}/podajnik-tasmowy/podajnik-tasmowy-3.jpg`,
      `${BASE}/podajnik-tasmowy/podajnik-tasmowy-4.jpg`,
    ],
    youtubeId: 'q8FtB7gtAhM',
    integration: [
      'Dopasowanie wysokości i szerokości do wyjścia istniejącej maszyny',
      'Sterowanie z panelu linii lub lokalnie, zależnie od układu',
      'Czujniki obecności produktu i zabezpieczenie przed zatorem',
      'Współpraca z wagami kontrolnymi i systemami znakowania',
    ],
    realizations: [
      { label: 'Automatyczna linia pakowania wkładów zniczowych', scope: 'Taśmociągi odbierające produkt z linii klienta i podające go do maszyny GSP 50', slug: 'admit' },
      { label: 'Odbiór i pakowanie wafli w formach tworzywa i tektury', scope: 'System podawania wafli do flow-packa przy mocno ograniczonej przestrzeni hali', slug: 'as-babuni' },
      { label: 'Dedykowana linia pakowania wafli — do 320 szt./min', scope: 'Automatyczny odbiór produktu bezpośrednio z linii produkcyjnej', slug: 'skawa' },
    ],
  },
  {
    id: 'podajniki-paletowe',
    group: 'Systemy transportu produktu',
    name: 'Podajniki paletowe i rolkowe',
    shortName: 'Podajniki paletowe',
    desc: 'Przenośniki rolkowe do przemieszczania palet, opakowań zbiorczych i kartonów — z prowadnicami i stoperami ustawiającymi ładunek w powtarzalnej pozycji. Pracują z napędem albo grawitacyjnie.',
    longDesc: [
      'Transport palet to inna klasa obciążeń niż transport produktu. Pełna paleta to **kilkaset kilogramów**, które trzeba przemieścić, zatrzymać w zadanym miejscu i przekazać dalej — bez przesunięcia ładunku i bez uderzeń w konstrukcję.',
      'Nasze przenośniki rolkowe budujemy z prowadnicami i stoperami, które ustawiają paletę w **powtarzalnej pozycji** przed kolejną operacją — owijaniem, etykietowaniem czy odbiorem wózkiem. Sposób pracy dobieramy do potrzeb: na odcinkach zjazdowych i buforowych rolki mogą pracować **grawitacyjnie — bez napędu i zasilania**, a tam, gdzie trasa wymaga wymuszonego, sterowanego transportu palety, stosujemy **wersję z napędem**.',
      'Ten sam układ sprawdza się przy opakowaniach zbiorczych i kartonach — zmienia się podziałka rolek i sposób prowadzenia ładunku.',
    ],
    applications: [
      'Transport palet między paletyzacją a owijarką',
      'Bufor palet i opakowań zbiorczych na końcu linii',
      'Przekazywanie kartonów między stanowiskami',
      'Strefy odbioru palet przez wózek widłowy',
    ],
    benefits: [
      'Konstrukcja przenosząca obciążenie pełnej palety',
      'Pozycjonowanie ładunku stoperami przed kolejną operacją',
      'Praca napędowa lub grawitacyjna — zależnie od odcinka',
      'Odcinki buforowe ograniczające przestoje na obsłudze wózkiem',
    ],
    image: `${BASE}/podajnik-paletowy.jpg`,
    gallery: [
      `${BASE}/podajnik-paletowy/podajnik-paletowy-1.jpg`,
      `${BASE}/podajnik-paletowy/podajnik-paletowy-2.jpg`,
      `${BASE}/podajnik-paletowy/podajnik-paletowy-3.jpg`,
      `${BASE}/podajnik-paletowy/podajnik-paletowy-4.jpg`,
      `${BASE}/podajnik-paletowy/podajnik-paletowy-5.jpg`,
      `${BASE}/podajnik-paletowy/podajnik-paletowy-6.jpg`,
      `${BASE}/podajnik-paletowy/podajnik-paletowy-7.jpg`,
      `${BASE}/podajnik-paletowy/podajnik-paletowy-8.jpg`,
    ],
    youtubeId: 'QUablwXX9y4',
    integration: [
      'Współpraca z owijarkami palet i paletyzatorami',
      'Stopery i czujniki pozycji zintegrowane ze sterowaniem linii',
      'Strefy buforowe dopasowane do częstotliwości odbioru wózkiem',
      'Rozbudowa istniejących ciągów paletowych o kolejne odcinki',
    ],
    realizations: [
      { label: 'Robotyczna paletyzacja worków z zaprawami budowlanymi', scope: 'Robot KUKA wraz z układem przenośników transportujących worki i palety', slug: 'promotor' },
      { label: 'Kompleksowa linia pakowania i paletyzacji nawozów', scope: 'Transport, obrotnica i paletyzacja robotem KUKA aż po owinięcie palety', slug: 'planta' },
      { label: 'Paletyzacja i pakowanie żwirku zoologicznego', scope: 'Transport opakowań i paletyzacja dwoma robotami w środowisku zapylonym', slug: 'certech' },
    ],
  },
  {
    id: 'podajniki-lukowe',
    group: 'Systemy transportu produktu',
    name: 'Podajniki łukowe',
    shortName: 'Podajniki łukowe',
    desc: 'Przenośniki łańcuchowe modularne prowadzące produkt w łuku, gdy linia musi zmienić kierunek. Pozwalają poprowadzić transport wokół istniejących maszyn i słupów hali.',
    longDesc: [
      'Mało która hala pozwala ustawić linię w idealnej prostej. Słupy konstrukcyjne, istniejące maszyny, bramy i przejścia ewakuacyjne wymuszają zmianę kierunku — a każde takie miejsce jest **potencjalnym wąskim gardłem**.',
      'Podajnik łukowy prowadzi produkt płynnie przez zakręt, bez przekazywania go między dwoma prostymi odcinkami. **Eliminuje to typowe miejsce powstawania zatorów i przewróceń**, w którym produkt „przeskakuje" ze wstęgi na wstęgę.',
      'Promień i kąt łuku **dobieramy pod konkretny układ hali i gabaryt produktu**. Dzięki temu linia wykorzystuje dostępną powierzchnię, zamiast wymuszać przebudowę pomieszczenia.',
    ],
    applications: [
      'Zmiana kierunku transportu w ciasnym układzie hali',
      'Łączenie odcinków linii ustawionych pod kątem',
      'Prowadzenie produktu wokół istniejących stanowisk',
      'Obejście słupów konstrukcyjnych i przejść w hali',
    ],
    benefits: [
      'Wykorzystanie dostępnej powierzchni bez przebudowy hali',
      'Płynne prowadzenie produktu w łuku, bez zatorów',
      'Promień i kąt dobierane pod konkretny układ linii',
      'Mniej punktów przekazania, w których produkt się przewraca',
    ],
    image: `${BASE}/podajnik-lukowy.jpg`,
    gallery: [
      `${BASE}/podajnik-lukowy/podajnik-lukowy-1.jpg`,
      `${BASE}/podajnik-lukowy/podajnik-lukowy-2.jpg`,
    ],
    youtubeId: 'absGd2ArsM8',
    integration: [
      'Łączenie z odcinkami prostymi bez dodatkowego przekazania',
      'Wspólny napęd lub niezależne sterowanie odcinkiem łuku',
      'Prowadnice boczne dobrane do gabarytu i stabilności produktu',
      'Wpięcie w istniejący ciąg transportowy innych producentów',
    ],
    realizations: [
      { label: 'Zmiana kierunku linii wokół słupa hali', scope: 'Poprowadzenie transportu bez przebudowy pomieszczenia' },
      { label: 'Połączenie dwóch ciągów pod kątem', scope: 'Płynne przekazanie produktu między odcinkami linii' },
    ],
  },
  {
    id: 'magazyny-i-bufory',
    group: 'Systemy transportu produktu',
    name: 'Magazyny i bufory produktu',
    shortName: 'Magazyny i bufory',
    desc: 'Wielotorowe układy gromadzące zapas produktu między etapami linii. Bufor przejmuje różnicę wydajności maszyn i pozwala krótko zatrzymać jeden etap bez zatrzymywania całej linii.',
    longDesc: [
      'W linii złożonej z kilku maszyn żadna nie pracuje dokładnie w tym samym tempie i żadna nie działa bez przerw. Pakowaczka musi przewinąć folię, etykieciarka wymienić rolkę, operator poprawić format. Bez bufora **każdy taki postój zatrzymuje wszystko**, co jest przed nim i za nim.',
      'Magazyn produktu gromadzi zapas wyrobu między etapami i oddaje go, gdy kolejna maszyna znów przyjmuje. Linia przestaje reagować na każdą krótką przerwę, a **realna wydajność rośnie bez wymiany maszyn** — samą zmianą sposobu przepływu.',
      'Pojemność bufora **dobieramy pod rytm konkretnej produkcji**: liczy się nie maksymalny zapas, tylko czas typowego postoju, który ma zostać przykryty.',
    ],
    applications: [
      'Wyrównanie różnic wydajności między maszynami',
      'Zapas produktu na czas krótkich postojów technologicznych',
      'Gromadzenie wyrobu przed pakowaniem zbiorczym',
      'Rozdzielenie etapów linii o różnym rytmie pracy',
    ],
    benefits: [
      'Mniej zatrzymań całej linii przy postoju jednego etapu',
      'Stabilne zasilanie maszyny pakującej',
      'Pojemność bufora dobierana pod rytm konkretnej produkcji',
      'Wzrost realnej wydajności bez wymiany maszyn',
    ],
    image: `${BASE}/magazyn-produktow.jpg`,
    gallery: [
      `${BASE}/magazyn-produktow/magazyn-produktow-1.jpg`,
      `${BASE}/magazyn-produktow/magazyn-produktow-2.jpg`,
      `${BASE}/magazyn-produktow/magazyn-produktow-3.jpg`,
    ],
    youtubeId: 'Yc8Uw2viOzk',
    integration: [
      'Sterowanie napełnianiem i opróżnianiem w funkcji stanu linii',
      'Czujniki poziomu zapełnienia na każdym torze',
      'Współpraca z maszyną pakującą i etapem poprzedzającym',
      'Dobór pojemności na podstawie realnych czasów postoju',
    ],
    realizations: [
      { label: 'Bufor przed pakowaniem zbiorczym', scope: 'Przykrycie krótkich postojów maszyny pakującej' },
      { label: 'Magazyn wielotorowy w linii ciągłej', scope: 'Wyrównanie wydajności między etapami produkcji' },
    ],
  },
  {
    id: 'felcarki',
    group: 'Maszyny specjalne',
    name: 'Felcarki i stanowiska specjalne',
    shortName: 'Felcarki',
    desc: 'Urządzenia do realizacji określonych operacji formowania lub zamykania elementów opakowania, projektowane zgodnie z wymaganiami procesu. Stosowane tam, gdzie wymagana jest powtarzalność, dokładność i integracja z dalszym etapem produkcji.',
    longDesc: [
      'Część operacji technologicznych **nie ma odpowiednika w katalogu żadnego producenta** — wynika z konkretnego opakowania, konkretnego materiału i konkretnej kolejności czynności w danym zakładzie.',
      'Felcarki i stanowiska specjalne **projektujemy od podstaw** pod taki właśnie przypadek. Punktem wyjścia jest opis procesu i próbki opakowania, a nie dobór z gotowej listy urządzeń.',
      'Stanowisko może pracować samodzielnie albo jako moduł wpięty w istniejącą linię — decyduje o tym układ produkcji, nie konstrukcja maszyny.',
    ],
    applications: [
      'Operacje technologiczne związane z formowaniem opakowania',
      'Domykanie lub przygotowanie elementu do dalszego procesu',
      'Stanowiska specjalne w liniach pakujących',
      'Procesy nietypowe, bez gotowego odpowiednika rynkowego',
    ],
    benefits: [
      'Dopasowanie do konkretnego produktu i procesu',
      'Powtarzalność operacji i ograniczenie braków',
      'Praca jako samodzielny moduł lub element linii',
      'Konstrukcja projektowana od podstaw pod wymagania klienta',
    ],
    image: null,
    gallery: [],
    youtubeId: null,
    integration: [
      'Wpięcie w istniejący ciąg technologiczny jako moduł',
      'Synchronizacja z etapem poprzedzającym i następnym',
      'Sterowanie zintegrowane z automatyką linii',
      'Możliwość pracy jako samodzielne stanowisko',
    ],
    realizations: [
      { label: 'Stanowisko technologiczne w linii pakującej', scope: 'Operacja formowania opakowania przed pakowaniem zbiorczym' },
    ],
  },
  {
    id: 'liczenie-i-pakowanie',
    group: 'Maszyny specjalne',
    name: 'Maszyna do liczenia i pakowania paluszków',
    shortName: 'Liczenie i pakowanie',
    desc: 'Specjalistyczne rozwiązanie zaprojektowane do automatycznego odliczania i pakowania paluszków w zadanej ilości. Łączy funkcję dozowania ilościowego, kontroli oraz przekazania produktu do dalszego etapu pakowania.',
    longDesc: [
      'Produkty sprzedawane „na sztuki" wymagają **dokładnego odliczenia, a nie odważenia**. Przy wyrobach lekkich i wydłużonych, takich jak paluszki, waga nie daje wystarczającej pewności co do liczby sztuk w opakowaniu.',
      'Maszyna odlicza zadaną liczbę produktów, kontroluje kompletność porcji i przekazuje ją do dalszego etapu pakowania. Eliminuje to zarówno niedobory — reklamacyjnie kosztowne — jak i systematyczne nadmiary, które przez cały rok produkcji sumują się w **realną stratę surowca**.',
      'Rozwiązanie **powstało pod konkretny produkt i konkretną wydajność**; ten sam mechanizm adaptujemy do innych wyrobów wymagających dozowania ilościowego.',
    ],
    applications: [
      'Produkty spożywcze wymagające zadanej liczby sztuk w opakowaniu',
      'Procesy wymagające ilościowej kontroli dozowania',
      'Linie nastawione na powtarzalność i ograniczenie pracy ręcznej',
      'Wyroby lekkie, przy których ważenie jest niewystarczające',
    ],
    benefits: [
      'Powtarzalne i dokładne odliczanie produktu',
      'Automatyzacja procesu pakowania ilościowego',
      'Ograniczenie błędów i strat w produkcji',
      'Mniej nadmiarów wynikających z zapasu bezpieczeństwa',
    ],
    image: null,
    gallery: [],
    youtubeId: null,
    integration: [
      'Przekazanie odliczonej porcji do maszyny pakującej',
      'Kontrola kompletności porcji przed zapakowaniem',
      'Współpraca z podajnikami zabierakowymi na wejściu',
      'Sterowanie zintegrowane z resztą linii',
    ],
    realizations: [
      { label: 'Kompleksowa automatyzacja pakowania przekąsek', scope: 'Maszyna do paluszków obok maszyny pionowej z wagą wielogłowicową i flow-packa GSP', slug: 'axpal' },
      { label: 'Długofalowa automatyzacja produkcji przekąsek słonych', scope: 'Kolejne etapy automatyzacji pakowania przekąsek u wieloletniego klienta', slug: 'pco-group' },
    ],
  },
  {
    id: 'chwytaki-i-manipulatory',
    group: 'Chwytaki robotyczne',
    name: 'Chwytaki (manipulatory) do robotów',
    shortName: 'Chwytaki do robotów',
    desc: 'Chwytaki i manipulatory projektowane pod konkretny produkt i konkretnego robota. Jeden chwytak może realizować kilka zadań naraz — przenosić produkt, pozycjonować go, podnosić przekładki paletowe czy układać warstwy — zamiast wymuszać osobne narzędzie do każdej czynności.',
    longDesc: [
      'Chwytak jest tym elementem aplikacji robotycznej, którego **nie da się kupić z katalogu** — bo to on styka się z produktem. Od niego zależy, czy robot pobierze wyrób pewnie, czy będzie go gubił, zniekształcał albo zwalniał, żeby w ogóle utrzymać.',
      'Projektujemy je **zawsze pod konkretny detal i konkretny proces**. Zakres zadań bywa szeroki: przenoszenie produktu, pozycjonowanie i orientowanie go przed kolejną operacją, pobieranie całych warstw, podnoszenie i odkładanie przekładek między warstwami palety, grupowanie sztuk w zestawy. Bardzo często jeden chwytak łączy kilka z tych funkcji — dzięki temu robot obsługuje pełny cykl bez wymiany narzędzia.',
      'Chwytaki montujemy na robotach czołowych producentów, m.in. KUKA, i **odpowiadamy za integrację z robotem oraz sterowaniem** — również wtedy, gdy sam robot pochodzi od naszego partnera, a nie z naszej produkcji.',
    ],
    applications: [
      'Przenoszenie produktu w aplikacjach pick-and-place',
      'Pozycjonowanie i orientowanie wyrobu przed kolejną operacją',
      'Podnoszenie i odkładanie przekładek między warstwami palety',
      'Paletyzacja i depaletyzacja warstwami',
      'Obsługa produktów delikatnych i o nietypowej geometrii',
      'Stanowiska wieloasortymentowe z szybką zmianą formatu',
    ],
    benefits: [
      'Kilka funkcji w jednym chwytaku — bez wymiany narzędzia w cyklu',
      'Konstrukcja projektowana pod konkretny produkt, nie uniwersalna',
      'Chwyt dobrany do wyrobu — mniej uszkodzeń i zrzutów',
      'Integracja z robotem i sterowaniem po naszej stronie',
    ],
    image: `${BASE}/chwytak-manipulator.jpg`,
    gallery: [
      `${BASE}/chwytak-manipulator/chwytak-manipulator-1.jpg`,
      `${BASE}/chwytak-manipulator/chwytak-manipulator-2.jpg`,
      `${BASE}/chwytak-manipulator/chwytak-manipulator-3.jpg`,
      `${BASE}/chwytak-manipulator/chwytak-manipulator-4.jpg`,
      `${BASE}/chwytak-manipulator/chwytak-manipulator-5.jpg`,
      `${BASE}/chwytak-manipulator/chwytak-manipulator-6.jpg`,
      `${BASE}/chwytak-manipulator/chwytak-manipulator-7.jpg`,
      `${BASE}/chwytak-manipulator/chwytak-manipulator-8.jpg`,
    ],
    youtubeId: '6lWOEPsGIr4',
    integration: [
      'Montaż na robotach czołowych producentów, m.in. KUKA',
      'Integracja z układem chwytu i sterowaniem robota',
      'Współpraca z podajnikami wtaktowującymi na wejściu',
      'Obsługa magazynu przekładek w cyklu paletyzacji',
      'Szybka zmiana formatu przy produkcji wieloasortymentowej',
    ],
    realizations: [
      {
        label: 'Automatyzacja smarowania form betonowych',
        scope: 'Manipulator na robocie KUKA zastąpił ręczne smarowanie form — mniej strat materiału, powtarzalność procesu i eliminacja ryzyka BHP',
        slug: 'solbet',
      },
      {
        label: 'Robotyczna linia pakowania i paletyzacji nawozów',
        scope: 'Chwytaki do paletyzacji robotycznej KUKA obsługujące worki 25 kg i opakowania 0,5 kg w zapylonym środowisku produkcyjnym',
        slug: 'siarkopol',
      },
      {
        label: 'Manipulator słupowy do odbioru szpul drutu spawalniczego',
        scope: 'Customowy chwytak MadejPak eliminujący niebezpieczną pracę manualną przy ciężkich szpulach',
        slug: 'esab',
      },
      {
        label: 'Mobilne stanowisko cobotyczne do paletyzacji',
        scope: 'Chwytak na cobocie współpracującym z operatorem — paletyzacja lodów i produktów garmażeryjnych',
        slug: 'alexpol',
      },
    ],
  },
];

// Kolejność sekcji na stronie — jawna, bo maszyny specjalne mają zamykać listę
// niezależnie od kolejności wpisów w tablicy powyżej.
export const MADEJPAK_GROUPS = [
  'Systemy podawania i rozdzielania',
  'Systemy transportu produktu',
  'Chwytaki robotyczne',
  'Maszyny specjalne',
];

export function getMadejPakMachine(slug: string) {
  return MADEJPAK_MACHINES.find((m) => m.id === slug);
}
