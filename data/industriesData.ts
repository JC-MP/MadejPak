export interface Industry {
  id: string;
  iconId: string;
  name: string;
  category: string;
  description: string;
  products: string[];
  technologies: string[];
  cta: { label: string; href: string };
}

export const INDUSTRIES: Industry[] = [
  {
    id: 'spozywcza',
    iconId: 'food',
    name: 'Spożywcza',
    category: 'Żywność i przetwórstwo',
    description:
      'Przemysł spożywczy wymaga precyzji dozowania, elastyczności formatowej i ciągłości produkcji. Obsługujemy produkty sypkie, granulowane, piekarnicze, kawę, przekąski i przetwory. Integrujemy systemy ważenia, pakowania i paletyzacji w spójną linię dopasowaną do tempa zakładu.',
    products: [
      'Produkty sypkie i granulowane',
      'Kawa, kakao, herbata',
      'Mąka, cukier, kasze, makarony',
      'Wyroby piekarnicze i cukiernicze',
      'Przekąski i słone produkty',
      'Mrożonki i produkty przetworzone',
    ],
    technologies: [
      'Ważenie wielogłowicowe i dozowanie',
      'Pakowanie pionowe i poziome (flowpack)',
      'Workowanie i napełnianie big-bag',
      'Paletyzacja i owijanie palet',
      'Integracja linii i transport wewnętrzny',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'chemiczna',
    iconId: 'chemical',
    name: 'Chemiczna',
    category: 'Chemia przemysłowa i techniczna',
    description:
      'Branża chemiczna wymaga hermetyczności opakowania, bezpiecznego podawania produktu i odporności maszyn na warunki produkcji. Pracujemy z proszkami technicznymi, granulowanymi środkami czyszczącymi, nawozami i detergentami. Dobieramy linie workowania i dozowania do specyfiki produktu i środowiska pracy.',
    products: [
      'Proszki i granulaty techniczne',
      'Detergenty i środki czyszczące',
      'Nawozy i środki ochrony roślin',
      'Pigmenty i surowce mineralne',
      'Półprodukty chemiczne',
    ],
    technologies: [
      'Workowanie big-bag i worków otwartych',
      'Precyzyjne dozowanie i napełnianie',
      'Pakowanie foliowe i hermetyczne',
      'Paletyzacja przemysłowa',
      'Transport wewnętrzny produktów sypkich',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'kosmetyczna',
    iconId: 'cosmetics',
    name: 'Kosmetyczna',
    category: 'Kosmetyki i higiena osobista',
    description:
      'Producenci kosmetyków wymagają powtarzalności procesu, wysokiej estetyki opakowania końcowego i płynnej automatyzacji konfekcjonowania. Obsługujemy pakowanie produktów jednostkowych, grupowanie w opakowania zbiorcze i kartonowanie. Rozwiązania dobieramy do formatu produktu, tempa linii i wymagań jakościowych.',
    products: [
      'Produkty pielęgnacyjne i higieniczne',
      'Saszetki i opakowania jednostkowe',
      'Zestawy i opakowania zbiorcze',
      'Kartony grupowe i ekspozytorowe',
      'Produkty sezonowe i limitowane serie',
    ],
    technologies: [
      'Automatyzacja pakowania jednostkowego',
      'Grupowanie i pakowanie zbiorcze',
      'Kartonowanie i taśmowanie',
      'Robotyzacja pick-and-place',
      'Koniec linii i przygotowanie do wysyłki',
    ],
    cta: { label: 'Sprawdź możliwości', href: '/kontakt' },
  },
  {
    id: 'farmaceutyczna',
    iconId: 'pharma',
    name: 'Farmaceutyczna',
    category: 'Farmacja i wyroby medyczne',
    description:
      'Zakłady farmaceutyczne i producenci suplementów wymagają wysokiej kontroli procesu, pełnej powtarzalności cykli i integrowalności z systemami kontroli jakości. Wspieramy automatyzację pakowania jednostkowego i zbiorczego, konfekcjonowania oraz przygotowania do dystrybucji.',
    products: [
      'Suplementy i żywność funkcjonalna',
      'Produkty OTC i parafarmaceutyki',
      'Wyroby w saszetkach i blistry',
      'Produkty medyczne i diagnostyczne',
    ],
    technologies: [
      'Precyzyjne dozowanie i napełnianie',
      'Pakowanie jednostkowe i konfekcjonowanie',
      'Etykietowanie i identyfikacja produktu',
      'Pakowanie zbiorcze i kartonowanie',
      'Paletyzacja i koniec linii',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'petfood',
    iconId: 'petfood',
    name: 'Produkty dla zwierząt',
    category: 'Pet food i karma',
    description:
      'Branża pet food łączy wymagania spożywcze — precyzja dozowania, higieniczność procesu — z koniecznością obsługi dużych wolumenów workowania i wydajnej paletyzacji. Pracujemy z karmą suchą, mieszankami granulowanymi i produktami specjalistycznymi. Integrujemy pełny przepływ: ważenie, workowanie, transport i koniec linii.',
    products: [
      'Karma sucha i granulat',
      'Mieszanki i suplementy dla zwierząt',
      'Przysmaki i produkty specjalistyczne',
      'Produkty sypkie workowane',
    ],
    technologies: [
      'Workowanie i napełnianie worków',
      'Ważenie i dozowanie wielogłowicowe',
      'Transport wewnętrzny i przenośniki',
      'Paletyzacja i owijanie palet',
      'Integracja linii end-to-end',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'napoje',
    iconId: 'beverages',
    name: 'Napoje',
    category: 'Przemysł napojowy',
    description:
      'Producenci napojów potrzebują wydajnych systemów pakowania wtórnego, grupowania formatów i stabilnej paletyzacji przed ekspedycją. Skupiamy się na automatyzacji końcowych etapów linii: grupowaniu, owijaniu termicznym, kartonowaniu i paletyzacji. Rozwiązania dostosowujemy do formatu opakowania i tempa produkcji.',
    products: [
      'Butelki szklane i PET',
      'Puszki i kartony aseptyczne',
      'Opakowania zbiorcze i shrink-pack',
      'Palety jednorodne i mieszane',
    ],
    technologies: [
      'Pakowanie wtórne i grupowanie',
      'Owijanie termiczne (shrink)',
      'Systemy przenośników i transfer',
      'Paletyzacja i stabilizacja ładunku',
      'Owijanie palet stretch',
    ],
    cta: { label: 'Zobacz rozwiązania', href: '/kontakt' },
  },
  {
    id: 'przemyslowa',
    iconId: 'industrial',
    name: 'Paliwa stałe i kruszywa',
    category: 'Produkty sypkie i mineralne',
    description:
      'Branża przemysłowa obejmuje pakowanie ciężkich, sypkich i pylących produktów — od węgla i peletu po kruszywa mineralne i keramzyt. Wymagana jest odporność maszyn na ekstremalne warunki pracy: silne zapylenie, wilgoć, ścieralność materiałów. Dobieramy linie workowania i dozowania przystosowane do twardych realiów produkcji.',
    products: [
      'Węgiel drzewny i brykiet',
      'Pelet drzewny i węglowy',
      'Ekogroszek i miał węglowy',
      'Keramzyt i kamienie ozdobne',
      'Piasek i kruszywa mineralne',
      'Żwirek zoologiczny i produkty mineralne',
    ],
    technologies: [
      'Maszyny pionowe do workowania produktów sypkich',
      'Systemy dozowania wagowego i objętościowego',
      'Paletyzacja robotyczna w trudnych warunkach',
      'Linie pakowania w worki papierowe i foliowe',
      'Konstrukcje antykorozyjne i odpylające',
    ],
    cta: { label: 'Zapytaj o wdrożenie', href: '/kontakt' },
  },
  {
    id: 'inne',
    iconId: 'other',
    name: 'Inne branże produkcyjne',
    category: 'Projekty custom',
    description:
      'Nie każdy zakład mieści się w standardowej kategorii. Realizujemy projekty integracji linii, stanowisk pakujących i automatyzacji dla produkcji o zróżnicowanym profilu: tworzywa, artykuły budowlane, komponenty, produkty wieloformatowe. Punktem wyjścia jest zawsze analiza produktu, procesu i celu wdrożenia.',
    products: [
      'Tworzywa i produkty techniczne',
      'Artykuły budowlane i ogrodnicze',
      'Komponenty i podzespoły przemysłowe',
      'Produkty wieloformatowe i wieloasortymentowe',
    ],
    technologies: [
      'Custom engineering i projekty dedykowane',
      'Integracja różnych maszyn w jedną linię',
      'Modernizacje istniejących stanowisk',
      'Automatyzacja procesów pomocniczych',
      'Robotyzacja stanowisk pakujących',
    ],
    cta: { label: 'Omów projekt', href: '/kontakt' },
  },
];
