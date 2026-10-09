export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string;
  minutes: string;
  lede: string;
  blocks: Block[];
};

export const articles: Article[] = [
  {
    slug: "shopify-agencies-north-america",
    title: "What North American Shopify agencies actually sell",
    seoTitle: "North American Shopify agencies, and what they sell",
    description:
      "A field guide to Shopify agencies in the US and Canada in 2026: platinum programs, design houses, B2B specialists, and the senior studio in between.",
    date: "October 2026",
    minutes: "8 min",
    lede: "The directory is crowded and the median pitch is the same. The work is not. Here is the map we use before we tell a brand whether we are the right room.",
    blocks: [
      {
        type: "p",
        text: "Shopify's partner track runs from a new service partner up to Platinum. The badge tells you about directory access and, roughly, about volume. It does not tell you whether the senior who took the call will still be on the build in week six. Hire for the work, then check the badge.",
      },
      { type: "h2", text: "Five shapes, not fifty logos" },
      {
        type: "ul",
        items: [
          "Platinum programs — New York and Montreal scale. Enterprise replatforms, many markets, an ERP in the room. Public project talk starts around $50k USD and runs past $250k. Domaine (the Tomorrow and Half Helix merger) and Diff are the reference shapes: right when a board wants a known container, slow when you needed a checkout rule.",
          "Design houses — fashion, beauty, lifestyle. The craft is brand experience. Strong when the film is the product. Thin when the next request is a private app, POS, or a wholesale price list.",
          "B2B specialists — Chicago, Pennsylvania, and a run of remote shops. Company accounts, tiered pricing, ERP. Atwix-shaped and Uncap-shaped practices. Hire them if wholesale is the company. Do not hire them to art-direct a lookbook.",
          "Canadian full-service — Toronto premier shops that combine migration, POS, and marketing; Vancouver's theme-studio lineage (Pixel Union, now inside Pivotree, is the historical one); Mississauga-scale Plus partners who have been in market since the early 2010s. Real benches. You are often buying a team, not a principal.",
          "Senior studios — the open lane. One practice, Shopify only, the scoper on the build. Fits roughly $1M–$25M, where a freelancer has topped out and a platinum RFP is theatre.",
        ],
      },
      { type: "h2", text: "What the work actually is" },
      {
        type: "p",
        text: "Strip the case-study language and the invoices cluster. Custom storefronts. Migrations off Magento, Woo, BigCommerce, or Salesforce. Plus: checkout extensibility, Markets, Flow, B2B. Private apps and checkout UI extensions. POS, especially once the counter and the site disagree. Hydrogen, sometimes earned and often sold early. A retainer so the store is not orphaned in November. CRO as a separate retainer when the theme is not the constraint.",
      },
      {
        type: "p",
        text: "Canada adds three things the US pitch decks skip. Bilingual catalogues are a scope, not a vibe. Quebec tax and shipping rules show up in checkout, not in a footnote. And a lot of strong brands are at $2M–$15M, which is exactly the size platinum shops price out and freelancers cannot hold.",
      },
      { type: "h2", text: "How to choose without a beauty parade" },
      {
        type: "ul",
        items: [
          "Name the constraint in one sentence. Theme, data, checkout, wholesale, counter, or content. If the agency's famous work is a different sentence, keep looking.",
          "Ask who writes code in week six. If the answer is a role you have not met, you are buying a bench.",
          "Ask for a range before the deck. Shops that will not say a band are usually protecting a number you will not like.",
          "Ask what they will refuse. A studio that takes every platform and every channel is a generalist with a Shopify page.",
        ],
      },
      {
        type: "quote",
        text: "Clew is built for the fifth shape. If you are the first shape, we will say so.",
      },
      {
        type: "p",
        text: "Ranges in this note are orientation, compiled from public 2026 partner surveys and agency pricing posts, not from anyone's confidential quotes. Your catalogue will move the number. A written scope replaces the map.",
      },
    ],
  },
  {
    slug: "shopify-agency-pricing-canada",
    title: "Shopify agency pricing in Canada, without the theatre",
    seoTitle: "Shopify agency pricing in Canada (2026)",
    description:
      "Realistic 2026 CAD ranges for Shopify storefronts, migrations, Plus, custom apps, POS, B2B, Hydrogen, and retainers — and what should not be hiding in the quote.",
    date: "October 2026",
    minutes: "7 min",
    lede: "Most sites will not publish a number. The number still exists. Here is the band a Canadian brand should walk into a sales call already knowing.",
    blocks: [
      { type: "h2", text: "Hourly, if you insist" },
      {
        type: "p",
        text: "Public 2026 ranges, mostly quoted in USD and broadly true in CAD at par for senior Canadian work: boutique and fractional help around $100–$175 an hour, a certified Plus partner around $175–$300, premier and platinum specialists around $250–$400. Clew prices phases, not a blurred rack rate. When a phase does not fit, senior time sits in the middle of that certified band.",
      },
      { type: "h2", text: "Projects" },
      {
        type: "ul",
        items: [
          "Custom storefront — $18k–$45k. Higher if the catalogue is hostile or a second language is in the first release.",
          "Migration — $28k–$80k. Redirects and a rehearsal are inside that, not a change order.",
          "Plus implementation — $40k–$120k. Buying the Plus plan is extra, and it is Shopify's invoice, not ours.",
          "Custom app or checkout extension — $15k–$60k for one job. A platform fantasy is a different conversation.",
          "POS — $18k–$55k including a floor test. Hardware is yours to buy.",
          "B2B — $30k–$90k before an ERP phase. The ERP is named separately or it will haunt the budget.",
          "Hydrogen — $70k–$160k, and the second year is a retainer whether anyone put it on the slide.",
        ],
      },
      { type: "h2", text: "Retainers" },
      {
        type: "p",
        text: "Light fractional help in this market is published as low as a few thousand a month. A real Plus retainer at an established partner is often $10k–$15k. Multi-workstream enterprise retainers run $20k–$30k. Clew's senior retainer is $4.5k–$18k a month depending on revenue and how many surfaces are in motion, 90 days minimum, then month to month.",
      },
      { type: "h2", text: "What moves the number" },
      {
        type: "ul",
        items: [
          "Catalogue quality. Dirty data is a project.",
          "A second country or a second language in the first release.",
          "Checkout rules, subscriptions, or B2B companies.",
          "Anything that must talk to an ERP, a 3PL with opinions, or a custom wholesale tool.",
          "A deadline inside eight weeks. Speed is a scope cut or a premium, never free.",
        ],
      },
      { type: "h2", text: "What should not be hiding in it" },
      {
        type: "p",
        text: "App subscriptions, product photography, copywriting, paid media, Shopify's own plan fees, and your staff's time to make decisions. If a quote is silent on those, ask. Silence is how a $40k build becomes a $70k one in month three.",
      },
      {
        type: "quote",
        text: "A range is not a quote. It is the number that keeps the first call honest.",
      },
      {
        type: "p",
        text: "The bands above are Clew's 2026 planning ranges in CAD, before tax, checked against public North American pricing posts from the same year. Use the pricing page to stack a sketch. Then ask for a scope.",
      },
    ],
  },
  {
    slug: "theme-plus-or-hydrogen",
    title: "Theme, Plus, or Hydrogen",
    seoTitle: "Shopify theme vs Plus vs Hydrogen",
    description:
      "A practical way for Canadian brands to choose a custom Shopify theme, Shopify Plus, or Hydrogen before sitting through a sales deck.",
    date: "October 2026",
    minutes: "6 min",
    lede: "You do not need a workshop to make this call. You need the constraint, the revenue, and a willingness to leave a fashionable option on the table.",
    blocks: [
      { type: "h2", text: "Stay on a theme when" },
      {
        type: "ul",
        items: [
          "The pain is merchandising, speed, or a homepage that cannot tell the truth about the product.",
          "Your team should launch a collection without a frontend deploy.",
          "Revenue is under about $5M and nothing structural is broken. Hydrogen will not outsell a clearer product page.",
        ],
      },
      {
        type: "p",
        text: "A custom theme is still real engineering. It is just the engineering that matches the job. Budget $18k–$45k and six to ten weeks for a first release that your marketers can run.",
      },
      { type: "h2", text: "Move to Plus when" },
      {
        type: "ul",
        items: [
          "Checkout has a rule you are faking with an app and a prayer.",
          "A second country needs duties, currency, and a catalogue that is not a copy-paste.",
          "Wholesale companies need their own prices on the same store as DTC.",
          "You are above the line where Shopify's Plus fee is smaller than the workaround.",
        ],
      },
      {
        type: "p",
        text: "Plus without a checkout, markets, or B2B problem is a logo. Do the math on Shopify's plan against the cost of the workaround before you take a meeting about 'enterprise'.",
      },
      { type: "h2", text: "Go Hydrogen when" },
      {
        type: "ul",
        items: [
          "The experience is a configurator, a content world, or a product that happens to sell — not a catalogue with a nicer font.",
          "You can staff or retain the frontend after launch. Headless is a second product.",
          "The revenue can pay $70k–$160k without betting the year on it.",
        ],
      },
      {
        type: "p",
        text: "If you are under about $5M and someone is pitching Hydrogen as modernization, ask them to price the theme that solves the actual sentence. If they will not, you have learned something useful about the pitch.",
      },
      {
        type: "quote",
        text: "Default to the theme. Promote Plus when the constraint is commercial. Promote Hydrogen when Liquid has actually lost.",
      },
      {
        type: "p",
        text: "Clew will write that choice down in a diagnosis if you do not want to make it alone. Two to three weeks, credited if a build follows.",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
