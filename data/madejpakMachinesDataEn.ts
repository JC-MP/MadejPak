// MadejPak in-house machines — English content.
// Mirrors data/madejpakMachinesData.ts; slugs are kept identical across languages
// so /maszyny/madejpak/[slug] and /en/maszyny/madejpak/[slug] stay in sync.
//
// NOTE: the renders are deliberately dark — they protect design details from
// competitors. Never brighten them or cut out the background.

import type { MadejPakMachine } from './madejpakMachinesData';

const BASE = '/images/machines/madejpak';

export const MADEJPAK_MACHINES_EN: MadejPakMachine[] = [
  {
    id: 'desztaplery-palet',
    group: 'Feeding & separation systems',
    name: 'Pallet destackers — automatic pallet magazine',
    shortName: 'Pallet destackers',
    desc: 'An automatic pallet magazine that takes a full stack and separates pallets one by one onto the outfeed conveyor. It replaces manual pallet handling — the operator reloads the stack once every few dozen cycles instead of handling every pallet individually.',
    longDesc: [
      'The destacker takes a complete stack of pallets and releases them one at a time, at the rhythm the line demands. A forklift loads the stack into the magazine, and the unit separates the bottom pallet and passes it to the outfeed conveyor — **with no operator involvement on each cycle**.',
      'It is usually **the fastest-paying station in end-of-line automation**. Manual pallet stacking and separation is repetitive work, hard on the back and difficult to keep at a steady pace across a full shift — and its rhythm directly sets the throughput of the palletiser.',
      '**We build the design around the pallet the plant actually uses**: dimensions, stack height and pallet condition (new, pooled, mixed) all affect the gripping geometry and the separation method. The same mechanism can be adapted to other elements fed from a stack.',
    ],
    applications: [
      'Supplying palletising stations with empty pallets',
      'Separating pallets from a stack without operator involvement',
      'Pallet buffer at the packaging line infeed',
      'End-of-line automation in plants with high pallet turnover',
    ],
    benefits: [
      'Eliminates manual pallet handling and the injuries that come with it',
      'Continuous palletiser supply without interrupting the cycle',
      'Built around the customer’s pallet type and dimensions',
      'Handles pooled pallets of varying quality',
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
      'Outfeed conveyor synchronised with the palletiser cycle',
      'Low-stack signalling to the supervisory system',
      'Works with robotic and column palletisers',
      'Can be built into an existing line without moving machines',
    ],
    realizations: [
      { label: 'Complete fertiliser packaging and palletising line', scope: 'KUKA robotic palletising at the end of the line — from product hopper through to pallet wrapping', slug: 'planta' },
      { label: 'Cat litter palletising and packaging', scope: 'Palletising line with two KUKA robots, synchronised with the customer’s system', slug: 'certech' },
      { label: 'Robotic palletising of building mortar sacks', scope: 'Manual palletising eliminated in a heavy, dust-laden production environment', slug: 'promotor' },
    ],
  },
  {
    id: 'podajniki-zabierakowe',
    group: 'Feeding & separation systems',
    name: 'Lug chain feeders',
    shortName: 'Lug chain feeders',
    desc: 'A lug conveyor that enforces a fixed gap between products and passes them on in a set rhythm. It works on its own — timing product infeed ahead of a packaging machine or a manual station — or as part of a robotic cell.',
    longDesc: [
      'Lugs mounted on a chain or belt divide the product stream into equal pitches. The product stops flowing at random and starts arriving at the next station **always in the same position and on the same beat**.',
      'A lug feeder **does not require a robot**. It very often works as timing ahead of a packaging machine, or as infeed to a manual packing or inspection station — bringing order to a product stream that an operator used to handle. Only when robotics enters the picture does the same feeder become the prerequisite for stable robot pick-up: without a repeatable position, a pick-and-place application has nothing to grip.',
      '**We match lug pitch, height and shape to the specific product** — a rigid carton is guided differently than a delicate or irregular item.',
    ],
    applications: [
      'Timing product infeed ahead of a packaging machine',
      'Transporting individual items at constant intervals',
      'Feeding manual packing and inspection stations',
      'Optionally: supplying pick-and-place and robotic applications',
    ],
    benefits: [
      'Repeatable product position and spacing at the outfeed',
      'Steady line rhythm and fewer stoppages from jams',
      'Lug pitch and geometry matched to the specific product',
      'Works standalone — robotics is an option, not a requirement',
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
      'Speed synchronisation with the packaging machine or robot',
      'Product presence signal and pitch occupancy control',
      'Works with vision systems for robotic pick-up',
      'Can be extended with further lanes and stream splitting',
    ],
    realizations: [
      { label: 'Integrating a tomato weighing line with a flow-pack machine', scope: 'Automatic take-off from the customer’s line and timed infeed to the packaging machine', slug: 'agrigem' },
      { label: 'Packaging of sękacz cakes in modified atmosphere', scope: 'Two horizontal machines with timed product infeed ahead of packaging', slug: 'sekpol' },
      { label: 'Automatic packaging line for grave candle inserts', scope: 'Take-off from the line, reorientation and batching ahead of the packaging machine', slug: 'bolsius' },
    ],
  },
  {
    id: 'podajniki-tasmowe',
    group: 'Product transport systems',
    name: 'Belt conveyors',
    shortName: 'Belt conveyors',
    desc: 'Belt conveyors built for a specific section of the line — with food-grade belting and an aluminium profile frame. Length, width and working height follow the actual factory layout rather than a catalogue.',
    longDesc: [
      'The belt conveyor is the most frequently ordered transport element — and the one where **catalogue dimensions most often fail to fit**. The distance between machines, the outfeed height of a packaging machine and the available walkways differ in every plant.',
      '**We build them for a specific section**: length, width, working height and drive direction all follow measurements taken on site. The conveyor then ties into existing machines **without shims, improvised brackets or last-minute fixes during commissioning**.',
      'As standard we use **food-grade belting and aluminium profile frames** — the structure is light, washdown-resistant and easy to modify later, when the line changes.',
    ],
    applications: [
      'Inter-operational transport between workstations',
      'Product take-off from the packaging machine outfeed',
      'Feeding subsequent line stages and inspection stations',
      'Incline and decline sections between line levels',
    ],
    benefits: [
      'Dimensions and routing matched to the real factory layout',
      'Hygienic design, suitable for washdown',
      'Adjustable working height to match existing machines',
      'Straightforward later extension and reconfiguration',
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
      'Height and width matched to the outfeed of the existing machine',
      'Control from the line panel or locally, depending on layout',
      'Product presence sensors and jam protection',
      'Works with checkweighers and marking systems',
    ],
    realizations: [
      { label: 'Automatic packaging line for grave candle inserts', scope: 'Conveyors taking product off the customer’s line and feeding it to a GSP 50 machine', slug: 'admit' },
      { label: 'Take-off and packaging of wafers in plastic and cardboard trays', scope: 'Wafer infeed system to a flow-pack machine in a severely constrained floor space', slug: 'as-babuni' },
      { label: 'Dedicated wafer packaging line — up to 320 pcs/min', scope: 'Automatic product take-off straight from the production line', slug: 'skawa' },
    ],
  },
  {
    id: 'podajniki-paletowe',
    group: 'Product transport systems',
    name: 'Pallet & roller conveyors',
    shortName: 'Pallet conveyors',
    desc: 'Roller conveyors for moving pallets, collective packs and cartons — with guides and stops that hold the load in a repeatable position. They run powered or by gravity.',
    longDesc: [
      'Pallet transport is a different class of load than product transport. A full pallet is **several hundred kilograms** that must be moved, stopped at a defined point and handed over — without shifting the load and without shock loading the structure.',
      'We build our roller conveyors with guides and stops that set the pallet in **a repeatable position** ahead of the next operation — wrapping, labelling or forklift pick-up. We match the drive to the need: on decline and buffer sections the rollers can run **by gravity — no drive or power supply**, while wherever the route calls for forced, controlled pallet transport we use a **driven version**.',
      'The same arrangement works for collective packs and cartons — what changes is the roller pitch and the way the load is guided.',
    ],
    applications: [
      'Pallet transport between palletising and the wrapper',
      'Pallet and collective pack buffer at the end of the line',
      'Transferring cartons between workstations',
      'Forklift pallet pick-up zones',
    ],
    benefits: [
      'Construction rated for the load of a full pallet',
      'Load positioning by stops ahead of the next operation',
      'Powered or gravity operation, depending on the section',
      'Buffer sections that cut downtime waiting on forklift handling',
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
      'Works with pallet wrappers and palletisers',
      'Stops and position sensors integrated with line control',
      'Buffer zones sized to forklift pick-up frequency',
      'Extension of existing pallet handling runs',
    ],
    realizations: [
      { label: 'Robotic palletising of building mortar sacks', scope: 'A KUKA robot together with a conveyor system moving sacks and pallets', slug: 'promotor' },
      { label: 'Complete fertiliser packaging and palletising line', scope: 'Transport, turntable and KUKA robotic palletising through to pallet wrapping', slug: 'planta' },
      { label: 'Cat litter palletising and packaging', scope: 'Pack transport and palletising by two robots in a dust-laden environment', slug: 'certech' },
    ],
  },
  {
    id: 'podajniki-lukowe',
    group: 'Product transport systems',
    name: 'Curved conveyors',
    shortName: 'Curved conveyors',
    desc: 'Modular chain conveyors that guide product through a curve wherever the line has to change direction. They let transport run around existing machines and structural columns.',
    longDesc: [
      'Few factories allow a line to be laid out in a perfect straight run. Structural columns, existing machines, doorways and escape routes force changes of direction — and every such point is **a potential bottleneck**.',
      'A curved conveyor guides product smoothly through the bend, without handing it over between two straight sections. **This removes the classic jam-and-tip-over point** where product has to “jump” from one belt to another.',
      '**We match the radius and angle to the specific factory layout and product size**. The line then uses the space available instead of forcing a rebuild of the room.',
    ],
    applications: [
      'Changing transport direction in a tight factory layout',
      'Joining line sections set at an angle to each other',
      'Routing product around existing workstations',
      'Working around structural columns and walkways',
    ],
    benefits: [
      'Makes use of available floor space without rebuilding the hall',
      'Smooth product guidance through the curve, without jams',
      'Radius and angle matched to the specific line layout',
      'Fewer transfer points where product tips over',
    ],
    image: `${BASE}/podajnik-lukowy.jpg`,
    gallery: [
      `${BASE}/podajnik-lukowy/podajnik-lukowy-1.jpg`,
      `${BASE}/podajnik-lukowy/podajnik-lukowy-2.jpg`,
    ],
    youtubeId: 'absGd2ArsM8',
    integration: [
      'Joins straight sections without an additional transfer',
      'Shared drive or independent control of the curved section',
      'Side guides matched to product size and stability',
      'Ties into existing conveyor runs from other manufacturers',
    ],
    realizations: [
      { label: 'Direction change around a structural column', scope: 'Routing transport without rebuilding the room' },
      { label: 'Joining two runs set at an angle', scope: 'Smooth product handover between line sections' },
    ],
  },
  {
    id: 'magazyny-i-bufory',
    group: 'Product transport systems',
    name: 'Product magazines & buffers',
    shortName: 'Magazines & buffers',
    desc: 'Multi-lane systems that accumulate a product reserve between line stages. The buffer absorbs throughput differences and lets one stage stop briefly without stopping the whole line.',
    longDesc: [
      'In a line built from several machines, none runs at exactly the same pace and none runs without interruption. The packaging machine has to change a film reel, the labeller a roll, the operator has to correct a format. Without a buffer, **every such stop halts everything upstream and downstream**.',
      'A product magazine accumulates a reserve between stages and releases it once the next machine accepts product again. The line stops reacting to every short interruption, and **real throughput rises without replacing a single machine** — purely by changing how product flows.',
      '**We size buffer capacity to the rhythm of the specific production**: what matters is not maximum storage, but the duration of the typical stop that needs to be covered.',
    ],
    applications: [
      'Evening out throughput differences between machines',
      'Product reserve during short technological stops',
      'Accumulating product ahead of collective packaging',
      'Decoupling line stages that run at different rhythms',
    ],
    benefits: [
      'Fewer full-line stoppages when a single stage halts',
      'Steady supply to the packaging machine',
      'Buffer capacity sized to the rhythm of the specific production',
      'Higher real throughput without replacing machines',
    ],
    image: `${BASE}/magazyn-produktow.jpg`,
    gallery: [
      `${BASE}/magazyn-produktow/magazyn-produktow-1.jpg`,
      `${BASE}/magazyn-produktow/magazyn-produktow-2.jpg`,
      `${BASE}/magazyn-produktow/magazyn-produktow-3.jpg`,
    ],
    youtubeId: 'Yc8Uw2viOzk',
    integration: [
      'Fill and discharge control driven by line status',
      'Fill-level sensors on every lane',
      'Works with the packaging machine and the upstream stage',
      'Capacity sized from real recorded stop durations',
    ],
    realizations: [
      { label: 'Buffer ahead of collective packaging', scope: 'Covering short stops of the packaging machine' },
      { label: 'Multi-lane magazine in a continuous line', scope: 'Evening out throughput between production stages' },
    ],
  },
  {
    id: 'felcarki',
    group: 'Special machines',
    name: 'Forming & special workstations',
    shortName: 'Special workstations',
    desc: 'Devices for performing specific packaging forming or closing operations, designed to process requirements. Used where repeatability, precision and integration with further production stages are required.',
    longDesc: [
      'Some technological operations **have no equivalent in any manufacturer’s catalogue** — they follow from a specific pack, a specific material and a specific sequence of steps in a given plant.',
      'We design forming machines and special workstations **from scratch** for exactly that case. The starting point is a description of the process and pack samples, not a selection from a ready-made list of devices.',
      'The station can work standalone or as a module tied into an existing line — that is decided by the production layout, not by the machine design.',
    ],
    applications: [
      'Technological operations related to packaging forming',
      'Closing or preparing elements for the next process',
      'Special workstations in packaging lines',
      'Unusual processes with no off-the-shelf equivalent',
    ],
    benefits: [
      'Adapted to the specific product and process',
      'Repeatability of operations and reduction of rejects',
      'Works as a standalone module or line element',
      'Designed from scratch around customer requirements',
    ],
    image: null,
    gallery: [],
    youtubeId: null,
    integration: [
      'Tied into an existing technological run as a module',
      'Synchronised with the preceding and following stage',
      'Control integrated with line automation',
      'Can operate as a standalone workstation',
    ],
    realizations: [
      { label: 'Technological station in a packaging line', scope: 'Pack forming operation ahead of collective packaging' },
    ],
  },
  {
    id: 'liczenie-i-pakowanie',
    group: 'Special machines',
    name: 'Breadstick counting & packaging machine',
    shortName: 'Counting & packaging',
    desc: 'A specialised solution for automatic counting and packaging of breadsticks in a defined quantity. Combines quantitative dosing, control and product handover to the next packaging stage.',
    longDesc: [
      'Products sold by the piece need to be **counted accurately, not weighed**. For light, elongated items such as breadsticks, weight alone does not give sufficient certainty about the number of pieces in a pack.',
      'The machine counts out a defined number of products, verifies that the portion is complete and hands it over to the next packaging stage. This eliminates both shortfalls — expensive in complaints — and systematic overfills, which across a full production year add up to **a real loss of raw material**.',
      'The solution **was built for a specific product and throughput**; the same mechanism can be adapted to other items requiring quantitative dosing.',
    ],
    applications: [
      'Food products requiring a defined number of pieces per pack',
      'Processes requiring quantitative dosing control',
      'Lines focused on repeatability and reduction of manual work',
      'Light products where weighing alone is insufficient',
    ],
    benefits: [
      'Repeatable and precise product counting',
      'Automation of the quantitative packaging process',
      'Reduction of errors and production losses',
      'Fewer overfills driven by safety margins',
    ],
    image: null,
    gallery: [],
    youtubeId: null,
    integration: [
      'Handover of the counted portion to the packaging machine',
      'Portion completeness check before packing',
      'Works with lug feeders on the infeed',
      'Control integrated with the rest of the line',
    ],
    realizations: [
      { label: 'Comprehensive snack packaging automation', scope: 'A breadstick machine alongside a vertical machine with multihead weigher and a GSP flow-pack', slug: 'axpal' },
      { label: 'Long-term automation of savoury snack production', scope: 'Successive stages of snack packaging automation for a long-standing customer', slug: 'pco-group' },
    ],
  },
  {
    id: 'chwytaki-i-manipulatory',
    group: 'Robotic grippers',
    name: 'Robot grippers & manipulators',
    shortName: 'Robot grippers',
    desc: 'Grippers and manipulators designed around a specific product and a specific robot. A single gripper can perform several tasks at once — moving product, positioning it, lifting pallet slip sheets or stacking layers — instead of forcing a separate tool for each operation.',
    longDesc: [
      'The gripper is the one element of a robotic application that **cannot be bought off the shelf** — because it is what touches the product. It decides whether the robot picks the item securely, or keeps dropping it, deforming it, or slowing down just to hold on.',
      '**We always design them around the specific part and the specific process**. The scope of tasks can be broad: moving product, positioning and orienting it ahead of the next operation, picking whole layers, lifting and placing slip sheets between pallet layers, grouping pieces into sets. Very often a single gripper combines several of these functions — so the robot handles the full cycle without a tool change.',
      'We mount the grippers on robots from leading manufacturers, including KUKA, and **take responsibility for integration with the robot and its control** — also where the robot itself comes from one of our partners rather than our own production.',
    ],
    applications: [
      'Moving product in pick-and-place applications',
      'Positioning and orienting product ahead of the next operation',
      'Lifting and placing slip sheets between pallet layers',
      'Layer palletising and depalletising',
      'Handling delicate products and unusual geometries',
      'Multi-product stations with fast format changeover',
    ],
    benefits: [
      'Several functions in one gripper — no tool change within the cycle',
      'Designed around a specific product, not a universal solution',
      'Grip matched to the product — fewer damages and drops',
      'Robot and control integration handled on our side',
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
      'Mounted on robots from leading manufacturers, including KUKA',
      'Integration with the gripping system and robot control',
      'Works with timing feeders on the infeed',
      'Slip sheet magazine handling within the palletising cycle',
      'Fast format changeover for multi-product runs',
    ],
    realizations: [
      {
        label: 'Automated greasing of concrete moulds',
        scope: 'A manipulator on a KUKA robot replaced manual mould greasing — less material waste, a repeatable process and eliminated health and safety risk',
        slug: 'solbet',
      },
      {
        label: 'Robotic fertiliser packaging and palletising line',
        scope: 'Grippers for KUKA robotic palletising handling 25 kg sacks and 0.5 kg packs in a dust-laden production environment',
        slug: 'siarkopol',
      },
      {
        label: 'Column manipulator for handling welding wire spools',
        scope: 'A custom MadejPak gripper eliminating dangerous manual handling of heavy spools',
        slug: 'esab',
      },
      {
        label: 'Mobile collaborative palletising station',
        scope: 'A gripper on a cobot working alongside the operator — palletising ice cream and chilled foods',
        slug: 'alexpol',
      },
    ],
  },
];

// Section order — explicit, so special machines always close the list.
export const MADEJPAK_GROUPS_EN = [
  'Feeding & separation systems',
  'Product transport systems',
  'Robotic grippers',
  'Special machines',
];

export function getMadejPakMachineEn(slug: string) {
  return MADEJPAK_MACHINES_EN.find((m) => m.id === slug);
}
