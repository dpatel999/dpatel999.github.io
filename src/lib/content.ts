export type Service = {
  slug: string;
  index: string;
  title: string;
  nav: string;
  lede: string;
  seoTitle: string;
  seo: string;
  range: string;
  weeks: string;
  fits: string[];
  skips: string[];
  deliverables: string[];
  body: string[];
};

export const services: Service[] = [
  {
    slug: "storefronts",
    index: "01",
    title: "Custom storefronts",
    nav: "Storefronts",
    lede: "A Shopify theme built around how you actually merchandise — not a purchased theme with the logo swapped.",
    seoTitle: "Custom Shopify storefronts in Canada",
    seo: "Clew designs and builds custom Shopify storefronts for Canadian brands that have outgrown a theme. Sections your team can run, without a developer on every campaign.",
    range: "$18k–$45k CAD",
    weeks: "6–10 weeks",
    fits: [
      "The current theme fights every campaign.",
      "You want the team to launch a collection without filing a ticket.",
      "Brand matters, and so does the add-to-cart.",
    ],
    skips: [
      "You need a logo and a colour pass on Dawn. A freelancer is the right price.",
      "The real problem is the ERP. A prettier theme will not fix it.",
    ],
    deliverables: [
      "UX and a section map before code",
      "Custom Online Store 2.0 theme, in your repo",
      "Merchandising patterns: collection, product, bundle, content",
      "Speed, accessibility, and a handover your team can use",
    ],
    body: [
      "Most Canadian brands do not have a design problem. They have a theme that was bought for a different catalogue. Every campaign becomes a developer task, and the developer is busy.",
      "A Clew storefront is a set of sections with opinions: how a hero behaves, how a bundle is explained, how a wholesale teaser stays out of the retail customer's way. You leave with the repo, not a login we can revoke.",
      "We stay on Liquid until Hydrogen is actually the cheaper way to get the experience. That line is drawn on the pricing page, not in a pitch.",
    ],
  },
  {
    slug: "shopify-plus",
    index: "02",
    title: "Shopify Plus",
    nav: "Plus",
    lede: "Plus is a set of permissions. We implement the ones that change the business, and we leave the rest alone.",
    seoTitle: "Shopify Plus agency in Canada",
    seo: "Shopify Plus implementation for Canadian brands: checkout extensibility, Markets, Flow, B2B, and a launch plan. Published ranges, senior-led, no invented partner badge.",
    range: "$40k–$120k CAD",
    weeks: "10–18 weeks",
    fits: [
      "Checkout rules, duties, or a second country are now the constraint.",
      "You are moving to Plus and do not want a six-month program office.",
      "Wholesale and DTC have to live on one store without embarrassing either.",
    ],
    skips: [
      "You want Plus because a competitor has it. The plan will not raise conversion by itself.",
      "You need twelve markets and a new ERP in one signature. That is a platinum program.",
    ],
    deliverables: [
      "A Plus scope that names what is out",
      "Checkout extensibility where the rule is real",
      "Markets, duties, and currency when a second country is in play",
      "Launch checklist, staff roles, and a week of floor support",
    ],
    body: [
      "North American Plus work clusters in two places: huge replatforms at platinum shops, and a long tail of brands who bought the plan and then lived in the same theme. The middle is underserved.",
      "We treat Plus as checkout, automation, markets, and B2B. If none of those are the constraint, we will say stay on standard Shopify.",
      "Partner badges are a directory status. This site does not wear one it has not earned. The work is still Plus-grade: extensibility, not a brochure.",
    ],
  },
  {
    slug: "migrations",
    index: "03",
    title: "Migrations",
    nav: "Migrations",
    lede: "Magento, Woo, BigCommerce, or a custom stack — onto Shopify, with the redirects and the rehearsal, not a weekend cutover.",
    seoTitle: "Shopify migration agency in Canada",
    seo: "Clew migrates Canadian brands onto Shopify and Shopify Plus: catalogue, customers, orders, redirects, and a cutover you can rehearse. CAD ranges published.",
    range: "$28k–$80k CAD",
    weeks: "10–16 weeks",
    fits: [
      "The current platform costs more to keep than to leave.",
      "SEO is a real channel and cannot be 'we'll 301 it later'.",
      "You can name the systems that have to come with you.",
    ],
    skips: [
      "The catalogue is a mess and nobody owns a cleanup. Migration will copy the mess.",
      "You want Hydrogen, a new ERP, and a rebrand in the same weekend.",
    ],
    deliverables: [
      "Data map: products, customers, orders, gift cards, blogs",
      "Redirect plan tied to what already ranks",
      "Rehearsal cutover before the real one",
      "App list chosen after the data, not from a partner's stack",
    ],
    body: [
      "The expensive part of a migration is not the theme. It is the data you forgot, the URL that ranked, and the integration someone promised was 'just an app'.",
      "We map those before we design a homepage. A pretty launch that drops organic revenue is not a launch.",
      "ERP, if you have one, is its own phase with its own range. It does not hide inside a theme quote.",
    ],
  },
  {
    slug: "custom-apps",
    index: "04",
    title: "Custom apps",
    nav: "Apps",
    lede: "The workflow an app-store listing almost does. Private apps, checkout extensions, admin tools, webhooks.",
    seoTitle: "Custom Shopify apps and checkout extensions",
    seo: "Custom Shopify apps for Canadian merchants: private apps, checkout UI extensions, admin workflows, metafields, and webhooks. You own the code.",
    range: "$15k–$60k CAD",
    weeks: "6–14 weeks",
    fits: [
      "A public app would need three settings screens of exceptions.",
      "Staff are living in a spreadsheet next to the admin.",
      "Checkout has a rule Shopify's defaults will not express.",
    ],
    skips: [
      "A well-known app already does the job. We will tell you to buy it.",
      "You want a second storefront disguised as an app.",
    ],
    deliverables: [
      "One job, written down, with the edge cases",
      "Private app or extension in your GitHub",
      "Metafields and webhooks documented",
      "A way for your team to operate it without us",
    ],
    body: [
      "This is the work a lot of design-led agencies hand to 'a dev shop'. The storefront and the system drift apart, and the merchant pays for the seam.",
      "Clew keeps them in one studio. Repair work orders, signature capture, B2B price exceptions, a staff tool that writes back to the order — scoped as one job, not a platform fantasy.",
      "You own the repository. If we part ways, the app does not go with us.",
    ],
  },
  {
    slug: "hydrogen",
    index: "05",
    title: "Hydrogen",
    nav: "Hydrogen",
    lede: "Headless when the experience has outgrown Liquid. Not as a trophy, and not under $5M.",
    seoTitle: "Shopify Hydrogen studio in Canada",
    seo: "Shopify Hydrogen and headless storefronts for Canadian brands that have genuinely outgrown a theme. Clew will talk you out of it when a theme is the better buy.",
    range: "$70k–$160k CAD",
    weeks: "14–24 weeks",
    fits: [
      "Content, configuration, or performance has a shape Liquid cannot hold.",
      "You have a team, or a retainer, that can live with a custom frontend.",
      "The revenue can pay for the ongoing cost, not just the launch.",
    ],
    skips: [
      "You read that headless is modern. It is also a second product to maintain.",
      "Under about $5M, a custom theme will almost always return more.",
    ],
    deliverables: [
      "A written reason Liquid lost",
      "Hydrogen storefront, cart, and account flows",
      "A content model editors can run",
      "Performance budget and a hosting plan",
    ],
    body: [
      "Platinum shops sell Hydrogen as the default for 'digital flagships'. Sometimes they are right. Often the brand needed a better theme and a faster collection page.",
      "We start from the constraint. If it is merchandising, we stay on Liquid. If it is a configurator, a content-heavy world, or a storefront that is really a product, Hydrogen is on the table.",
      "The range is higher because the surface area is higher. Anyone quoting a headless build like a theme is leaving the second year out of the story.",
    ],
  },
  {
    slug: "pos",
    index: "06",
    title: "Shopify POS",
    nav: "POS",
    lede: "The counter and the site on one catalogue. Retail UI extensions, staff flows, and the awkward SKUs in between.",
    seoTitle: "Shopify POS development in Canada",
    seo: "Shopify POS for Canadian retailers: retail UI extensions, staff workflows, endless aisle, and one inventory story with the online store.",
    range: "$18k–$55k CAD",
    weeks: "6–12 weeks",
    fits: [
      "Stores and the website disagree about what is in stock.",
      "Staff need a flow that is not the default POS tile grid.",
      "Service, repair, or made-to-order has to live next to a normal sale.",
    ],
    skips: [
      "You have one pop-up and the default POS is fine.",
      "The till is a different company from the website and must stay that way.",
    ],
    deliverables: [
      "Staff flows written with the people who stand there",
      "POS UI extensions where the default tiles fail",
      "Inventory and fulfillment rules that match the website",
      "A floor test before a Saturday",
    ],
    body: [
      "POS projects fail when they are treated as a hardware install. The work is the exception: a deposit, a repair intake, a ship-from-store promise the website already made.",
      "Canadian retail also means bilingual staff screens in Quebec, tax that is not a surprise, and a Saturday where the developer is not in the shop. We test for that Saturday.",
    ],
  },
  {
    slug: "b2b",
    index: "07",
    title: "B2B and wholesale",
    nav: "B2B",
    lede: "Company accounts, price lists, and a buyer portal that a sales rep can send without apologizing.",
    seoTitle: "Shopify B2B and wholesale in Canada",
    seo: "Shopify B2B for Canadian wholesalers and hybrid DTC brands: companies, catalogs, price lists, net terms, and the line where an ERP should take over.",
    range: "$30k–$90k CAD",
    weeks: "10–16 weeks",
    fits: [
      "Reps are emailing PDF price lists.",
      "DTC and wholesale are colliding on one storefront.",
      "You want Shopify's native B2B before you buy a wholesale suite you will outgrow.",
    ],
    skips: [
      "You need a full distribution ERP. Shopify can be the face; it should not pretend to be the ledger.",
      "You have twelve buyers. A price list and a password page may be enough.",
    ],
    deliverables: [
      "Company and location model",
      "Catalogs and price lists that match how you sell",
      "Payment terms and the approval moments that are real",
      "A DTC experience that does not leak wholesale pricing",
    ],
    body: [
      "The North American shops that only do B2B are good at this and expensive at everything else. The design houses are the opposite. Hybrid brands get stuck between them.",
      "Clew builds the buyer side on Shopify and names the moment an ERP has to own the truth. That sentence saves more money than a portal skin.",
    ],
  },
  {
    slug: "retainers",
    index: "08",
    title: "Retainers",
    nav: "Retainers",
    lede: "Senior hours after launch. Theme, checkout, apps, and the work that is actually merchandising.",
    seoTitle: "Shopify CRO and development retainer in Canada",
    seo: "A senior Shopify retainer for Canadian brands: monthly hours for theme, checkout, apps, and conversion work. Published CAD bands, 90-day minimum.",
    range: "$4.5k–$18k CAD / month",
    weeks: "90 days, then month to month",
    fits: [
      "The build is done and the store still needs an adult.",
      "You are tired of a queue that answers in three days.",
      "Experiments should ship, not sit in a slide.",
    ],
    skips: [
      "You want a growth agency that also buys media. We do not run your ad account.",
      "You need 24/7 coverage. We are a studio on Eastern Time, not a follow-the-sun desk.",
    ],
    deliverables: [
      "A named senior and a monthly plan",
      "Shipped changes, not a status deck",
      "A short note on what moved and what did not",
      "Your repo, your apps, your admin — always",
    ],
    body: [
      "Published retainers in this market run from a few thousand a month at boutiques to thirty thousand at multi-workstream pods. Clew sits in the senior-boutique band on purpose.",
      "The work is Shopify: speed, merchandising, checkout friction, the app that misbehaves, the landing page that has to exist on Thursday. Paid media and brand campaigns are someone else's craft, and we will not pretend.",
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type Pattern = {
  index: string;
  sector: string;
  title: string;
  shape: string;
  includes: string[];
  range: string;
  weeks: string;
  image: "hero" | "apparel" | "wholesale" | "counter";
  imageAlt: string;
};

export const patterns: Pattern[] = [
  {
    index: "01",
    sector: "Apparel",
    title: "The theme is the campaign bottleneck",
    shape: "A DTC label around a few million in sales. Every drop needs a developer. The purchased theme has been patched into a private language.",
    includes: ["Custom storefront", "Collection and product patterns", "A handover the marketer can run"],
    range: "$24k–$40k",
    weeks: "8 weeks",
    image: "apparel",
    imageAlt: "Three coats on a wooden rail in a pale plaster room",
  },
  {
    index: "02",
    sector: "CPG",
    title: "Off Magento, without dropping the year",
    shape: "A Canadian food brand on an aging stack, selling at home and starting to ship to the US. Organic search is a real channel.",
    includes: ["Migration and redirects", "Shopify Markets for the US", "Checkout rule for a regional fee"],
    range: "$55k–$90k",
    weeks: "14 weeks",
    image: "wholesale",
    imageAlt: "Packed cartons on a maple pallet, one open with tissue and a bottle",
  },
  {
    index: "03",
    sector: "Wholesale",
    title: "PDF price lists, retired",
    shape: "A distributor whose reps still send spreadsheets. DTC exists and must not see wholesale prices. An ERP is real, and it is phase two.",
    includes: ["B2B companies and catalogs", "DTC wall so prices do not leak", "A written line for what the ERP will own"],
    range: "$40k–$75k",
    weeks: "12 weeks",
    image: "wholesale",
    imageAlt: "Kraft shipping cartons sealed with plain green tape",
  },
  {
    index: "04",
    sector: "Retail",
    title: "The counter and the site disagree",
    shape: "A multi-location retailer. Endless aisle is a slogan. Staff need a deposit and a ship-from-store flow the default tiles do not have.",
    includes: ["POS UI extensions", "One inventory story", "A floor test before a Saturday"],
    range: "$28k–$52k",
    weeks: "10 weeks",
    image: "counter",
    imageAlt: "A retail counter in pale oak with a payment tablet seen from behind",
  },
  {
    index: "05",
    sector: "Service",
    title: "The order is a work order",
    shape: "Jewellery repair, alterations, or any job that starts at the counter and ends as a tracked piece of work — not a normal SKU sale.",
    includes: ["POS intake", "A private app for status", "Customer-facing updates that are not a shared inbox"],
    range: "$22k–$48k",
    weeks: "8–12 weeks",
    image: "counter",
    imageAlt: "Oak retail counter with a tablet and a small ceramic cup",
  },
  {
    index: "06",
    sector: "After a bad handoff",
    title: "The last agency left the repo",
    shape: "The store is live. Nobody wants to touch it. You do not need a rebrand. You need an adult who will read the theme before rewriting it.",
    includes: ["Paid diagnosis", "A short list of what is actually unsafe", "A retainer or a fixed repair phase"],
    range: "$4k–$8k, then a phase",
    weeks: "2–3 weeks to the document",
    image: "hero",
    imageAlt: "A spruce ceramic cup, a copper spoon, and folded wool on linen",
  },
];

export const tiers = [
  {
    name: "Freelancer",
    fit: "Under about $1M. One storefront. No integrations that matter.",
    range: "$3k–$15k",
    note: "Right price for a first store. They are gone in November.",
  },
  {
    name: "Clew",
    fit: "About $1M–$25M. Canada first. You want the person who scoped it on the build.",
    range: "$18k–$120k CAD",
    note: "Senior studio. Shopify only. Ranges written down. Not a 40-person pod.",
    ours: true,
  },
  {
    name: "Design house",
    fit: "Fashion, beauty, brand-led DTC. The film matters as much as the SKU.",
    range: "$25k–$150k",
    note: "Often beautiful. Often thin once checkout, B2B, or a private app shows up.",
  },
  {
    name: "B2B specialist",
    fit: "Manufacturers and distributors. Price lists, companies, ERP.",
    range: "$30k–$150k",
    note: "The right room if wholesale is the whole company.",
  },
  {
    name: "Platinum program",
    fit: "$50M+ and a board that wants a known logo on the SOW.",
    range: "$50k–$250k+ USD",
    note: "Domaine-scale, Diff-scale. Correct at that size. Slow and expensive under it.",
  },
];

export const cities = [
  {
    name: "Toronto",
    note: "Centre of gravity. The working day is Eastern Time. Not a claim of a street-front office.",
  },
  {
    name: "Montreal",
    note: "Bilingual catalogues, Markets, and Quebec tax are normal scope — not a surprise change order.",
  },
  {
    name: "Vancouver",
    note: "Pacific brands, same studio. Overlap is their morning and our afternoon.",
  },
  {
    name: "Calgary",
    note: "Wholesale, outdoor, and product brands that have outgrown a theme and do not need a local pod.",
  },
  {
    name: "Ottawa",
    note: "National shippers and sellers who want senior Shopify work without a capital-city agency premium.",
  },
  {
    name: "Halifax",
    note: "Atlantic makers selling across Canada. Distance is a calendar problem, not a quality problem.",
  },
];

export const faqs = [
  {
    q: "How much does a Shopify agency cost in Canada?",
    a: "For a senior studio in 2026, read $18k–$45k for a custom storefront, $28k–$80k for a migration, $40k–$120k for a real Plus implementation, and $4.5k–$18k a month for a retainer. Freelancers sit under that. Platinum programs sit well above it, often in USD. The pricing page is the longer version, and a written scope replaces it.",
  },
  {
    q: "Do you only work in Canada?",
    a: "Canada is the market we are built for. US brands can start a scope now. We will not invent a New York office to look larger. The studio day is Eastern Time, and ranges are in CAD unless we agree otherwise.",
  },
  {
    q: "Are you a Shopify Plus Partner?",
    a: "Not claimed. A partner badge is a directory status, not a skill, and this site will not wear one it has not earned. The work — checkout extensibility, Markets, B2B, POS, custom apps — does not wait on the badge.",
  },
  {
    q: "Theme, Plus, or Hydrogen?",
    a: "Theme, until a constraint proves otherwise. Plus when checkout, markets, or B2B are the actual problem. Hydrogen when Liquid cannot hold the experience and the revenue can pay for a second product. There is a full note under Insights.",
  },
  {
    q: "Who does the work?",
    a: "The person who scopes it stays on it. Specialists come in for QA, photography, or copy. We do not staff a pitch with seniors and the build with people you have not met.",
  },
  {
    q: "Can you sign an NDA and work in our repo?",
    a: "Yes. The theme, the app, and the admin stay yours. We do not hold the store hostage at the end of a contract.",
  },
];

export const images = {
  hero: {
    src: "/images/hero.jpg",
    alt: "A deep green ceramic cup, a copper spoon, and folded wool on a linen table",
  },
  apparel: {
    src: "/images/apparel.jpg",
    alt: "Oatmeal, spruce, and rust coats on a wooden rail",
  },
  wholesale: {
    src: "/images/wholesale.jpg",
    alt: "Kraft cartons on a maple pallet, one open around a ceramic bottle",
  },
  counter: {
    src: "/images/counter.jpg",
    alt: "A pale oak retail counter with a payment tablet seen from behind",
  },
} as const;
