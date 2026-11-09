// ─── Kartonowanie: treści strony /maszyny/kartonowanie (PL i EN) ─────────────
// Formowarki, kartoniarki i zaklejarki pochodzą od partnera, którego NIE nazywamy
// (partnerzy mogą się zmienić). Publikujemy tylko zakresy parametrów, bez zdjęć.
// Zakresy zebrane z kart produktów producenta (11.2026); wartości „do” zależą od kartonu.

export type CartLang = 'pl' | 'en';
export type CartStage = 'formowanie' | 'pakowanie' | 'zaklejanie' | 'paletyzacja' | 'owijanie';
export const CART_STAGES: CartStage[] = ['formowanie', 'pakowanie', 'zaklejanie', 'paletyzacja', 'owijanie'];
export const CART_REFERENCES = ['golddrop', 'lazur', 'dobis'];

interface Row { label: string; value: string }

export interface CartCopy {
  meta: { title: string; description: string; ogTitle: string; keywords: string[] };
  hero: { eyebrow: string; title: string; lead: string; ctaAsk: string; ctaPallet: string };
  process: { eyebrow: string; title: string; steps: Record<CartStage, { title: string; desc: string }> };
  machines: {
    eyebrow: string; title: string; lead: string; note: string;
    groups: { id: 'formowarki' | 'pakowanie' | 'zaklejarki'; name: string; intro: string; rows: Row[] }[];
  };
  robot: { eyebrow: string; title: string; text: string; points: string[]; link: string; casesTitle: string; video: string; see: string };
  why: { eyebrow: string; title: string; items: { title: string; desc: string }[] };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  form: {
    eyebrow: string; title: string; text: string;
    needsLabel: string; needs: Record<CartStage, string>;
    boxLabel: string; boxPlaceholder: string; outputLabel: string; outputPlaceholder: string;
    subject: string; summaryNeeds: string; summaryBox: string; summaryOutput: string;
  };
  breadcrumb: { home: string; machines: string; current: string };
  more: string;
}

export const CART_STAGE_HREF: Partial<Record<CartStage, string>> = {
  paletyzacja: '/maszyny/paletyzacja?produkt=kartony#dobor',
  owijanie: '/maszyny/owijarki-do-palet',
};

export const CART_COPY: Record<CartLang, CartCopy> = {
  pl: {
    meta: {
      title: 'Formowarki i zaklejarki kartonów – kartonowanie',
      description: 'Automatyczne formowarki, pakowanie do kartonów i zaklejarki jako część linii. Kartony do 900 × 650 × 700 mm, integracja z paletyzacją i owijaniem.',
      ogTitle: 'Formowanie, pakowanie i zaklejanie kartonów | MadejPak',
      keywords: [
        'kartonowanie', 'formowarka kartonów', 'zaklejarka kartonów', 'kartoniarka',
        'automatyczne kartonowanie', 'pakowanie do kartonów', 'zamykanie kartonów taśmą', 'koniec linii pakującej',
      ],
    },
    hero: {
      eyebrow: 'Kartonowanie',
      title: 'Formowanie, pakowanie i zaklejanie kartonów',
      lead: 'Automatyczne kartonowanie jako część Twojej linii: od formowania kartonu, przez pakowanie produktu, po zaklejenie, paletyzację i owinięcie palety. Maszyny dobieramy do formatu kartonu i wydajności, a całą linię integrujemy sami.',
      ctaAsk: 'Zapytaj o kartonowanie',
      ctaPallet: 'Paletyzacja kartonów',
    },
    process: {
      eyebrow: 'Koniec linii',
      title: 'Od płaskiego kartonu do owiniętej palety',
      steps: {
        formowanie: { title: 'Formowanie kartonu', desc: 'Formowarka rozkłada płaski karton z magazynu i zamyka jego dno taśmą lub klejem.' },
        pakowanie: { title: 'Pakowanie', desc: 'Produkt trafia do kartonu zrzutowo albo jest układany robotem z chwytakiem MadejPak.' },
        zaklejanie: { title: 'Zaklejanie', desc: 'Zaklejarka zamyka karton taśmą lub klejem hot-melt, od góry i od dołu.' },
        paletyzacja: { title: 'Paletyzacja', desc: 'Robot KUKA albo cobot DOBOT układa kartony na palecie.' },
        owijanie: { title: 'Owijanie', desc: 'Owijarka Technowrapp, automatyczna albo półautomatyczna, zabezpiecza gotową paletę folią stretch.' },
      },
    },
    machines: {
      eyebrow: 'Maszyny',
      title: 'Zakresy maszyn, które integrujemy w linii',
      lead: 'Konkretny model dobieramy do formatu kartonu, wydajności i miejsca w hali.',
      note: 'Wydajności to wartości maksymalne i zależą od wymiarów kartonu. Konfigurację potwierdzamy po analizie Twojej linii.',
      groups: [
        {
          id: 'formowarki',
          name: 'Automatyczne formowarki kartonów',
          intro: 'Rozkładają karton z magazynu płaskich kartonów i zamykają dno. Operator tylko uzupełnia magazyn.',
          rows: [
            { label: 'Karton', value: 'od 200 × 150 × 150 mm do 620 × 500 × 600 mm' },
            { label: 'Wydajność', value: 'do 20 kartonów/min, przy dużych formatach do 15/min' },
            { label: 'Zamykanie dna', value: 'taśma 50 mm (opcja 75 mm) albo klej hot-melt' },
            { label: 'Magazyn kartonów', value: '120–220 sztuk' },
            { label: 'Typ kartonu', value: 'klapowy FEFCO 0200 i 0201, tektura B, C, E' },
          ],
        },
        {
          id: 'pakowanie',
          name: 'Pakowanie do kartonu',
          intro: 'Sposób pakowania dobieramy do produktu: zrzutowo albo robotem.',
          rows: [
            { label: 'Pakowanie zrzutowe', value: 'butelki, puszki, słoiki, torby, saszetki, kartoniki' },
            { label: 'Zmiana formatu', value: '5–15 min (pakowanie zrzutowe)' },
            { label: 'Pakowanie robotem', value: 'produkty, które trzeba ułożyć: robot KUKA lub cobot DOBOT z chwytakiem MadejPak' },
            { label: 'Wydajność', value: 'zależy od produktu i układu w kartonie' },
          ],
        },
        {
          id: 'zaklejarki',
          name: 'Automatyczne zaklejarki kartonów',
          intro: 'Zamykają karton od góry i od dołu, także gdy na jednej linii jadą różne formaty.',
          rows: [
            { label: 'Karton', value: 'od 130 × 100 × 90 mm do 600 × 500 × 600 mm, wersja na duże kartony do 900 × 650 × 700 mm' },
            { label: 'Wydajność', value: 'do 35 kartonów/min (opcja 40) przy jednym formacie, do 800 kartonów/h przy mieszanych formatach' },
            { label: 'Dopasowanie do kartonu', value: 'stałe, automatyczne z receptur albo samodzielne do każdego kartonu' },
            { label: 'Zamykanie', value: 'taśma 50 lub 75 mm albo klej hot-melt (do 1200 kartonów/h)' },
            { label: 'Wykonanie', value: 'dostępne wersje ze stali nierdzewnej' },
          ],
        },
      ],
    },
    robot: {
      eyebrow: 'Pakowanie robotem',
      title: 'Gdy produkt trzeba ułożyć, pakuje robot',
      text: 'Produkty, których nie da się zrzucić do kartonu, układamy robotem KUKA albo cobotem DOBOT. Chwytak projektujemy i budujemy u siebie, pod Twój produkt.',
      points: ['Chwytaki MadejPak pod konkretny produkt', 'Praca w chłodni i przy wysokiej wilgotności', 'Robot może też paletyzować gotowe kartony'],
      link: 'Chwytaki MadejPak',
      casesTitle: 'Realizacje',
      video: 'Film',
      see: 'Zobacz realizację',
    },
    why: {
      eyebrow: 'Dlaczego MadejPak',
      title: 'Cały koniec linii od jednej firmy',
      items: [
        { title: 'Jedna firma za całą linię', desc: 'Kartonowanie, paletyzację i owijanie łączymy w jeden układ zsynchronizowany z Twoją linią.' },
        { title: 'Podajniki i bufory z naszej produkcji', desc: 'Transport między maszynami projektujemy i budujemy sami, pod układ Twojej hali.' },
        { title: 'Serwis po uruchomieniu', desc: 'Serwisujemy całą linię i pomagamy przy zmianach formatów kartonów.' },
      ],
    },
    faq: {
      eyebrow: 'Pytania',
      title: 'Najczęstsze pytania o kartonowanie',
      items: [
        { q: 'Jakie kartony obsłużą maszyny?', a: 'Kartony klapowe (FEFCO 0200 i 0201) z tektury B, C lub E. Formowarki obsługują kartony od 200 × 150 × 150 mm do 620 × 500 × 600 mm, a zaklejarki od 130 × 100 × 90 mm do 900 × 650 × 700 mm, zależnie od modelu.' },
        { q: 'Taśma czy klej?', a: 'Dostępne są oba warianty: taśma 50 lub 75 mm albo klej hot-melt. Dobieramy je do kartonu i wymagań Twojego odbiorcy.' },
        { q: 'Czy zaklejarka poradzi sobie z różnymi formatami na jednej linii?', a: 'Tak. Są wersje, które same dopasowują się do każdego kartonu, oraz wersje przezbrajane automatycznie z zapisanych receptur.' },
        { q: 'Jak szybko formowarka składa kartony?', a: 'Do 20 kartonów na minutę, a przy dużych formatach do 15. Rzeczywista wydajność zależy od wymiarów kartonu.' },
        { q: 'Czy możecie połączyć kartonowanie z paletyzacją?', a: 'Tak. Projektujemy cały koniec linii: formowanie, pakowanie, zaklejanie, paletyzację i owijanie palety, z naszymi podajnikami i buforami między maszynami.' },
        { q: 'Czy maszyny nadają się do chłodni lub częstego mycia?', a: 'Dostępne są wersje ze stali nierdzewnej. Pakowanie w chłodni i przy wysokiej wilgotności robiliśmy m.in. dla producenta serów Lazur.' },
      ],
    },
    form: {
      eyebrow: 'Zapytanie',
      title: 'Zapytaj o kartonowanie',
      text: 'Zaznacz, czego potrzebujesz, i podaj wymiary kartonu. Przygotujemy propozycję dla Twojej linii.',
      needsLabel: 'Czego potrzebujesz?',
      needs: { formowanie: 'Formowanie kartonów', pakowanie: 'Pakowanie do kartonu', zaklejanie: 'Zaklejanie kartonów', paletyzacja: 'Paletyzacja', owijanie: 'Owijanie palet' },
      boxLabel: 'Wymiary kartonu (dł. × szer. × wys.)',
      boxPlaceholder: 'np. 400 × 300 × 250 mm',
      outputLabel: 'Wydajność',
      outputPlaceholder: 'np. 10 kartonów/min',
      subject: 'ZAPYTANIE — kartonowanie',
      summaryNeeds: 'Zakres',
      summaryBox: 'Karton',
      summaryOutput: 'Wydajność',
    },
    breadcrumb: { home: 'Home', machines: 'Maszyny', current: 'Kartonowanie' },
    more: 'Więcej',
  },

  en: {
    meta: {
      title: 'Case packing – case erecting, packing and sealing',
      description: 'Automatic case erectors, case packing and case sealers as part of your line. Cases up to 900 × 650 × 700 mm, integrated with palletising and wrapping.',
      ogTitle: 'Case erecting, packing and sealing | MadejPak',
      keywords: [
        'case packing', 'case erector', 'case sealer', 'case packer',
        'automatic case packing', 'carton sealing', 'carton taping machine', 'end of line',
      ],
    },
    hero: {
      eyebrow: 'Case packing',
      title: 'Case erecting, packing and sealing',
      lead: 'Automatic case packing as part of your line: from erecting the case, through packing the product, to sealing, palletising and wrapping the pallet. We select the machines for your case format and output, and integrate the whole line ourselves.',
      ctaAsk: 'Ask about case packing',
      ctaPallet: 'Carton palletising',
    },
    process: {
      eyebrow: 'End of line',
      title: 'From a flat blank to a wrapped pallet',
      steps: {
        formowanie: { title: 'Case erecting', desc: 'The erector opens a flat blank from the magazine and closes the bottom with tape or glue.' },
        pakowanie: { title: 'Packing', desc: 'The product drops into the case or is placed by a robot with a MadejPak gripper.' },
        zaklejanie: { title: 'Sealing', desc: 'The sealer closes the case with tape or hot-melt glue, top and bottom.' },
        paletyzacja: { title: 'Palletising', desc: 'A KUKA robot or a DOBOT cobot stacks the cases on the pallet.' },
        owijanie: { title: 'Wrapping', desc: 'A Technowrapp wrapper, automatic or semi-automatic, secures the finished pallet with stretch film.' },
      },
    },
    machines: {
      eyebrow: 'Machines',
      title: 'Ranges of the machines we integrate',
      lead: 'We select the specific model for your case format, output and floor space.',
      note: 'Outputs are maximum values and depend on case dimensions. We confirm the configuration after analysing your line.',
      groups: [
        {
          id: 'formowarki',
          name: 'Automatic case erectors',
          intro: 'They open the case from a magazine of flat blanks and close the bottom. The operator only refills the magazine.',
          rows: [
            { label: 'Case', value: 'from 200 × 150 × 150 mm to 620 × 500 × 600 mm' },
            { label: 'Output', value: 'up to 20 cases/min, up to 15/min for large formats' },
            { label: 'Bottom closing', value: '50 mm tape (75 mm optional) or hot-melt glue' },
            { label: 'Blank magazine', value: '120–220 blanks' },
            { label: 'Case type', value: 'regular slotted FEFCO 0200 and 0201, B, C, E flute' },
          ],
        },
        {
          id: 'pakowanie',
          name: 'Case packing',
          intro: 'We select the packing method for the product: drop packing or by robot.',
          rows: [
            { label: 'Drop packing', value: 'bottles, cans, jars, bags, pouches, cartons' },
            { label: 'Format change', value: '5–15 min (drop packing)' },
            { label: 'Robot packing', value: 'products that need placing: KUKA robot or DOBOT cobot with a MadejPak gripper' },
            { label: 'Output', value: 'depends on the product and the pattern in the case' },
          ],
        },
        {
          id: 'zaklejarki',
          name: 'Automatic case sealers',
          intro: 'They close the case top and bottom, also when different formats run on one line.',
          rows: [
            { label: 'Case', value: 'from 130 × 100 × 90 mm to 600 × 500 × 600 mm, large-case version up to 900 × 650 × 700 mm' },
            { label: 'Output', value: 'up to 35 cases/min (40 optional) with one format, up to 800 cases/h with mixed formats' },
            { label: 'Format adjustment', value: 'fixed, automatic from recipes, or self-adjusting to every case' },
            { label: 'Closing', value: '50 or 75 mm tape, or hot-melt glue (up to 1,200 cases/h)' },
            { label: 'Build', value: 'stainless steel versions available' },
          ],
        },
      ],
    },
    robot: {
      eyebrow: 'Robot packing',
      title: 'When the product needs placing, a robot packs it',
      text: 'Products that cannot be dropped into the case are placed by a KUKA robot or a DOBOT cobot. We design and build the gripper in-house, for your product.',
      points: ['MadejPak grippers for the specific product', 'Operation in cold stores and high humidity', 'The robot can also palletise the finished cases'],
      link: 'MadejPak grippers',
      casesTitle: 'Case studies',
      video: 'Video',
      see: 'See the case study',
    },
    why: {
      eyebrow: 'Why MadejPak',
      title: 'The whole end of line from one company',
      items: [
        { title: 'One company for the whole line', desc: 'We combine case packing, palletising and wrapping into one system synchronised with your line.' },
        { title: 'Our own feeders and buffers', desc: 'We design and build the conveying between machines ourselves, to fit your hall layout.' },
        { title: 'Service after start-up', desc: 'We service the whole line and help with case format changes.' },
      ],
    },
    faq: {
      eyebrow: 'Questions',
      title: 'Frequently asked questions about case packing',
      items: [
        { q: 'Which cases can the machines handle?', a: 'Regular slotted cases (FEFCO 0200 and 0201) in B, C or E flute. Erectors handle cases from 200 × 150 × 150 mm to 620 × 500 × 600 mm, and sealers from 130 × 100 × 90 mm to 900 × 650 × 700 mm, depending on the model.' },
        { q: 'Tape or glue?', a: 'Both are available: 50 or 75 mm tape, or hot-melt glue. We select them for your case and your customer’s requirements.' },
        { q: 'Can the sealer handle different formats on one line?', a: 'Yes. There are versions that adjust themselves to every case and versions that change over automatically from stored recipes.' },
        { q: 'How fast does the erector form cases?', a: 'Up to 20 cases per minute, and up to 15 for large formats. Actual output depends on case dimensions.' },
        { q: 'Can you combine case packing with palletising?', a: 'Yes. We design the whole end of line: erecting, packing, sealing, palletising and pallet wrapping, with our own feeders and buffers between machines.' },
        { q: 'Are the machines suitable for cold stores or frequent washdown?', a: 'Stainless steel versions are available. We have automated packing in a cold store with high humidity for the cheese producer Lazur, among others.' },
      ],
    },
    form: {
      eyebrow: 'Enquiry',
      title: 'Ask about case packing',
      text: 'Tick what you need and give the case dimensions. We will prepare a proposal for your line.',
      needsLabel: 'What do you need?',
      needs: { formowanie: 'Case erecting', pakowanie: 'Case packing', zaklejanie: 'Case sealing', paletyzacja: 'Palletising', owijanie: 'Pallet wrapping' },
      boxLabel: 'Case dimensions (L × W × H)',
      boxPlaceholder: 'e.g. 400 × 300 × 250 mm',
      outputLabel: 'Output',
      outputPlaceholder: 'e.g. 10 cases/min',
      subject: 'ENQUIRY [EN] — case packing',
      summaryNeeds: 'Scope',
      summaryBox: 'Case',
      summaryOutput: 'Output',
    },
    breadcrumb: { home: 'Home', machines: 'Machines', current: 'Case packing' },
    more: 'More',
  },
};
