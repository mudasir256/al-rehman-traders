export const phones = {
  desk: {
    label: "For more information",
    display: "0325-3500097",
    tel: "+923253500097",
    wa: "923253500097",
  },
  ceo: {
    label: "CEO",
    display: "0300-4466125",
    tel: "+923004466125",
    wa: "923004466125",
  },
} as const;

export function whatsappLink(text?: string) {
  const base = `https://wa.me/${phones.desk.wa}`;
  if (!text) return base;
  return `${base}?text=${encodeURIComponent(text)}`;
}

export type Service = {
  id: string;
  index: string;
  name: string;
  short: string;
  image: string;
  alt: string;
  summary: string;
  uses: string[];
  materials: string;
};

export const services: Service[] = [
  {
    id: "flex",
    index: "01",
    name: "Flex",
    short: "Vinyl and mesh banners",
    image: "/photos/flex.jpg",
    alt: "A large vinyl banner on a warm plaster wall",
    summary:
      "Frontlit, backlit, and mesh banners for gates, walls, and roadside frames. In Lahore this is the panaflex job: an opening, an offer, a direction, printed to the size of the actual wall.",
    uses: ["Shop openings", "Roadside offers", "Event backdrops"],
    materials: "Frontlit vinyl, backlit flex, mesh. Hem, eyelet, and rope when the frame needs it.",
  },
  {
    id: "backlight",
    index: "02",
    name: "Back Light Boards",
    short: "Panels that work after dark",
    image: "/photos/backlight.jpg",
    alt: "An illuminated lightbox glowing on a brick shopfront at dusk",
    summary:
      "Light boxes and illuminated fascias that stay readable once the sun is gone. For clinics, showrooms, pharmacies, and any board that has to work a night shift.",
    uses: ["Clinic fascias", "Showroom boxes", "Night-facing shops"],
    materials: "Backlit film, acrylic face, LED modules, aluminium tray.",
  },
  {
    id: "3d-board",
    index: "03",
    name: "3D Board",
    short: "Letters with depth",
    image: "/photos/letters.jpg",
    alt: "Raised acrylic letters on a dark wood wall",
    summary:
      "Raised letters and dimensional boards. The name has thickness, so it reads before a person is close enough for the small type.",
    uses: ["Building names", "Reception walls", "Shop fascias"],
    materials: "Acrylic, PVC, stainless, and LED channel letters.",
  },
  {
    id: "neon",
    index: "04",
    name: "Neon Sign",
    short: "LED neon, bent to a drawing",
    image: "/photos/neon.jpg",
    alt: "A warm LED neon curve in a wood-panelled room",
    summary:
      "Custom LED neon for cafés, counters, and brand walls. Warm or cool, indoor, cut to the shape you actually want — not a stock word from a catalogue.",
    uses: ["Café walls", "Counter signs", "Brand marks"],
    materials: "LED neon on cut acrylic backing.",
  },
  {
    id: "screen-printing",
    index: "05",
    name: "Screen Printing",
    short: "Ink through a screen",
    image: "/photos/screen.jpg",
    alt: "Hands pulling terracotta ink across a screen printing press",
    summary:
      "Ink pushed through a screen onto shirts and flat stock. The right press when a flat colour has to stay solid across a run, instead of pretending to be a photograph.",
    uses: ["Staff shirts", "Tote bags", "Flat-colour runs"],
    materials: "Plastisol and water-based inks on cotton, blends, and totes.",
  },
  {
    id: "offset",
    index: "06",
    name: "Offset Printing",
    short: "Cards, flyers, brochures",
    image: "/photos/offset.jpg",
    alt: "Stacks of printed cards on a linen table",
    summary:
      "Visiting cards, flyers, brochures, forms, and packaging once the quantity is real. Cleaner type and truer colour than a desktop print, at a cost that makes sense for a run.",
    uses: ["Visiting cards", "Flyers and brochures", "Forms and packaging"],
    materials: "Art paper, bond, card, and coated stocks.",
  },
  {
    id: "t-shirts",
    index: "07",
    name: "T-Shirts",
    short: "Uniforms and event shirts",
    image: "/photos/shirts.jpg",
    alt: "Folded printed t-shirts on a wooden table",
    summary:
      "Staff shirts, event tees, and small uniform runs. Screen or digital, sized properly, printed so the mark survives a wash.",
    uses: ["Staff uniforms", "Event tees", "Team shirts"],
    materials: "Cotton, PK, and blends. Screen print or digital.",
  },
  {
    id: "party-flags",
    index: "08",
    name: "Party Flags",
    short: "Feather, teardrop, bunting",
    image: "/photos/flags.jpg",
    alt: "Cream and terracotta feather flags outside a shop",
    summary:
      "Feather flags, teardrops, and bunting for openings and outdoor sales. They move in the wind, so the artwork has to stay simple enough to read while it does.",
    uses: ["Openings", "Roadside sales", "Event lines"],
    materials: "Flag fabric, poles, cross-bases, and water bases.",
  },
  {
    id: "election",
    index: "09",
    name: "Election Publicity",
    short: "Campaign print, on a date",
    image: "/photos/campaign.jpg",
    alt: "Rolls of banner material and stacks of print on a workshop table",
    summary:
      "Panaflex, flags, banners, and handbills on a campaign clock. Volume, an area, and a date that will not move. The artwork stays bold enough for a moving car.",
    uses: ["Panaflex banners", "Constituency flags", "Handbills"],
    materials: "Flex, paper, and flag cloth, scheduled backwards from polling day.",
  },
  {
    id: "branded-goods",
    index: "10",
    name: "Branded Goods",
    short: "Things people keep",
    image: "/photos/goods.jpg",
    alt: "A mug, notebook, cap, and pen arranged on linen",
    summary:
      "Mugs, bottles, caps, diaries, notebooks, pens, keychains, bags, and stickers. Bring a sketch, a logo, or a sentence. The workshop turns it into the object people actually keep.",
    uses: ["Corporate gifts", "Event kits", "A drawing you already have"],
    materials: "Ceramic, steel, cotton, paper, and small leather goods.",
  },
];

export const processSteps = [
  {
    index: "01",
    title: "The brief",
    body: "Size, material, quantity, and the day the piece has to be up. A photo of the wall is worth more than a long message.",
  },
  {
    index: "02",
    title: "A proof",
    body: "You see the layout before we commit ink, acrylic, or neon. Changes happen on the screen, not on the finished board.",
  },
  {
    index: "03",
    title: "The bench",
    body: "Flex, screen, offset, or fabrication. The job goes to the process that suits the material, not the other way around.",
  },
  {
    index: "04",
    title: "Out the door",
    body: "Collect it from either branch, or have flex and boards fitted in Lahore when the site allows.",
  },
];

export const branches = [
  {
    index: "01",
    name: "Branch 1",
    area: "Lakshmi Chowk",
    lines: ["Royl Park, Lakshmi Chowk", "Near Barrah Pan Shop", "Lahore"],
    map: "https://www.google.com/maps/search/?api=1&query=Royl+Park+Lakshmi+Chowk+near+Barrah+Pan+Shop+Lahore",
  },
  {
    index: "02",
    name: "Branch 2",
    area: "Scheme Mor",
    lines: ["Hafiz Plaza, 141, Ground Floor", "Main Multan Road, Scheme Mor", "Lahore"],
    map: "https://www.google.com/maps/search/?api=1&query=Hafiz+Plaza+141+Main+Multan+Road+Scheme+Mor+Lahore",
  },
];

export const faqs = [
  {
    q: "Do you install, or only print?",
    a: "Many flex and board jobs are fitted in Lahore. Say so when you call, and we will tell you if that particular job can be installed or if it is a collection.",
  },
  {
    q: "Can you start from a rough idea?",
    a: "Yes. A wall size, a photo of the site, and the wording is enough for a first proof. For a mug, a flag, or a sign, a sketch or a logo is enough. You see the layout before we spend the material.",
  },
  {
    q: "Which branch should I visit?",
    a: "Lakshmi Chowk or Scheme Mor. Call first. The person who has your file may be at the other desk.",
  },
  {
    q: "How quickly can a flex banner be ready?",
    a: "It depends on the size and what is already on the machine. Tell us the day it has to be up. Flex and flags are usually the quicker jobs. Neon, 3D letters, and offset need a proof and more time.",
  },
];

export const catalogue = [
  {
    title: "Shopfronts",
    kicker: "Light and letters",
    image: "/photos/backlight.jpg",
    alt: "A glowing shopfront lightbox at dusk",
    body: "Backlight, 3D letters, neon, and flex on the facade. Built to be read at a glance, in sun and after dark.",
    points: ["Back light boards", "3D letters", "Neon", "Flex fascias"],
  },
  {
    title: "Campaigns",
    kicker: "A date that will not move",
    image: "/photos/campaign.jpg",
    alt: "Campaign print laid out on a wooden workshop table",
    body: "Election publicity, party flags, sale banners, opening week. A quantity and a deadline, run as one job.",
    points: ["Panaflex", "Flags", "Handbills"],
  },
  {
    title: "Apparel",
    kicker: "Ink on fabric",
    image: "/photos/shirts.jpg",
    alt: "Screen-printed shirts folded on a work table",
    body: "Screen-printed shirts for staff and events. Caps and totes when the job is cloth, not a wall.",
    points: ["T-shirts", "Caps", "Totes"],
  },
  {
    title: "Paper and giveaways",
    kicker: "The things people keep",
    image: "/photos/offset.jpg",
    alt: "Printed cards and paper stacks in warm window light",
    body: "Offset cards, flyers, and brochures. Mugs, bottles, diaries, pens, and keychains that leave with your name on them.",
    points: ["Offset print", "Diaries and notebooks", "Mugs, bottles, pens"],
  },
];

export type CustomGood = {
  name: string;
  line: string;
  image: string;
  alt: string;
  span: string;
  ratio: string;
};

export const customGoods: CustomGood[] = [
  {
    name: "Mugs",
    line: "A logo or a line of type on ceramic.",
    image: "/products/mug.jpg",
    alt: "A plain ceramic mug on a white table, ready for a printed mark",
    frame: "col-span-2 aspect-[5/4] md:col-span-7",
  },
  {
    name: "Bottles",
    line: "Steel bottles with your name on the side.",
    image: "/products/bottle.jpg",
    alt: "A white steel drink bottle standing on a table",
    frame: "col-span-2 aspect-[3/4] sm:col-span-1 sm:aspect-[3/5] md:col-span-5",
  },
  {
    name: "Caps",
    line: "Embroidery or print on the front panel.",
    image: "/products/cap.jpg",
    alt: "A blank white baseball cap on a light background",
    frame: "col-span-1 aspect-square md:col-span-4",
  },
  {
    name: "Bags",
    line: "Backpacks and totes that leave with the guest.",
    image: "/products/backpack.jpg",
    alt: "A black backpack standing against a white wall",
    frame: "col-span-1 aspect-[3/4] md:col-span-4",
  },
  {
    name: "Totes",
    line: "A flat print on cloth, for a shop or an event.",
    image: "/products/tote.jpg",
    alt: "A plain brown tote bag on a grey surface",
    frame: "col-span-2 aspect-[4/5] sm:col-span-1 md:col-span-4",
  },
  {
    name: "Notebooks",
    line: "Diaries and covers with the mark on the front.",
    image: "/products/notebook.jpg",
    alt: "A stack of spiral notebooks on a white desk",
    frame: "col-span-1 aspect-[3/4] md:col-span-5",
  },
  {
    name: "Pens",
    line: "A name on a pen that stays on the desk.",
    image: "/products/pens.jpg",
    alt: "A metal pen resting on an open notebook",
    frame: "col-span-1 aspect-[4/5] md:col-span-7 md:aspect-[16/10]",
  },
  {
    name: "Neon",
    line: "Bent to a word, a drawing, or the shop’s own mark.",
    image: "/products/neon.jpg",
    alt: "Neon signage glowing on a brick building at night",
    frame: "col-span-2 aspect-[4/3] md:col-span-8",
  },
  {
    name: "Night signs",
    line: "A sign that still reads after the street goes dark.",
    image: "/products/storefront.jpg",
    alt: "A neon open sign in a shop window at dusk",
    frame: "col-span-2 aspect-[3/4] sm:col-span-1 md:col-span-4",
  },
  {
    name: "Light boards",
    line: "An illuminated fascia for a clinic, shop, or showroom.",
    image: "/photos/backlight.jpg",
    alt: "An illuminated lightbox on a shopfront at dusk",
    frame: "col-span-2 aspect-[4/3] md:col-span-7",
  },
  {
    name: "Stickers",
    line: "Small runs of labels, for counters and giveaways.",
    image: "/products/stickers.jpg",
    alt: "A dense sheet of printed stickers",
    frame: "col-span-2 aspect-square sm:col-span-1 md:col-span-5",
  },
  {
    name: "Flags",
    line: "Feather flags for an opening or a roadside sale.",
    image: "/photos/flags.jpg",
    alt: "Cream and terracotta feather flags outside a shop",
    frame: "col-span-1 aspect-[3/4] md:col-span-4",
  },
  {
    name: "Bunting",
    line: "A line of flags across a gate or a stall.",
    image: "/products/bunting.jpg",
    alt: "Colourful triangular bunting strung along a building",
    frame: "col-span-1 aspect-[4/5] md:col-span-4",
  },
  {
    name: "Gift sets",
    line: "A box of the pieces, packed as one job.",
    image: "/products/gift.jpg",
    alt: "A wrapped gift box with a gold ribbon",
    frame: "col-span-2 aspect-[5/4] md:col-span-4",
  },
];

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/#goods", label: "Goods" },
  { href: "/#process", label: "Process" },
  { href: "/#branches", label: "Branches" },
  { href: "/contact", label: "Contact" },
];

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "PrintShop",
  name: "Al-Rehman Traders",
  description:
    "Printing and advertisement in Lahore: flex, backlight boards, 3D signage, neon, screen printing, offset, flags, branded goods, and custom pieces made from a sketch or a logo.",
  telephone: phones.desk.tel,
  areaServed: "Lahore",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Royl Park, Lakshmi Chowk, near Barrah Pan Shop",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  department: branches.map((branch) => ({
    "@type": "PrintShop",
    name: `Al-Rehman Traders, ${branch.area}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: branch.lines.slice(0, 2).join(", "),
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
  })),
};
