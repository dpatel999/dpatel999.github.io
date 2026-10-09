export const markets = [
  { id: "canada", label: "Canada", detail: "The home market." },
  { id: "both", label: "Canada and the US", detail: "One build, two markets, if the catalogue allows it." },
  { id: "us", label: "United States first", detail: "In scope. The studio day is still Eastern Time." },
] as const;

export const platforms = [
  { id: "shopify", label: "Shopify", detail: "Standard plan, already live or about to be." },
  { id: "plus", label: "Shopify Plus", detail: "Already on Plus." },
  { id: "other", label: "Another platform", detail: "Magento, Woo, BigCommerce, custom, Salesforce." },
  { id: "none", label: "No store yet", detail: "Starting from a catalogue and a point of view." },
] as const;

export const needs = [
  { id: "storefront", label: "Custom storefront", detail: "The theme is the ceiling." },
  { id: "migration", label: "Migration", detail: "Move the business onto Shopify without losing the year." },
  { id: "plus", label: "Shopify Plus", detail: "Checkout, markets, Flow, B2B, the launch itself." },
  { id: "app", label: "Custom app", detail: "Something an app store listing will not do cleanly." },
  { id: "pos", label: "Shopify POS", detail: "The counter and the site have to share one brain." },
  { id: "b2b", label: "B2B and wholesale", detail: "Companies, price lists, net terms, buyer portals." },
  { id: "headless", label: "Hydrogen / headless", detail: "When a theme cannot carry the experience." },
  { id: "retainer", label: "Retainer", detail: "Senior hours after the build, not a ticket queue." },
  { id: "unsure", label: "Not sure yet", detail: "Start with a written diagnosis, not a pitch." },
] as const;

export const revenues = [
  { id: "u1", label: "Under $1M", detail: "CAD online, roughly." },
  { id: "1to5", label: "$1M – $5M", detail: "The usual place a theme runs out." },
  { id: "5to20", label: "$5M – $20M", detail: "Where Plus, POS, or B2B starts to pay for itself." },
  { id: "20to50", label: "$20M – $50M", detail: "Real systems. Still not a 40-person program." },
  { id: "50p", label: "$50M+", detail: "Ask whether a platinum pod is the righter container." },
] as const;

export const timings = [
  { id: "asap", label: "Inside 8 weeks", detail: "Only if the scope is honest about what slips." },
  { id: "quarter", label: "This quarter", detail: "The pace most good builds actually want." },
  { id: "half", label: "This half", detail: "Room for migration, B2B, or a second market." },
] as const;

export type MarketId = (typeof markets)[number]["id"];
export type PlatformId = (typeof platforms)[number]["id"];
export type NeedId = (typeof needs)[number]["id"];
export type RevenueId = (typeof revenues)[number]["id"];
export type TimingId = (typeof timings)[number]["id"];

export type Brief = {
  market: MarketId;
  platform: PlatformId;
  need: NeedId;
  revenue: RevenueId;
  timing: TimingId;
  name: string;
  email: string;
  company: string;
  note: string;
};

export const emptyBrief: Brief = {
  market: "canada",
  platform: "shopify",
  need: "storefront",
  revenue: "1to5",
  timing: "quarter",
  name: "",
  email: "",
  company: "",
  note: "",
};

export type Recommendation = {
  lane: string;
  slug: string;
  low: number;
  high: number;
  unit: "project" | "month";
  weeks: string;
  summary: string;
  points: string[];
};

const cadFmt = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

export function cad(n: number) {
  return cadFmt.format(n);
}

function lift(high: number, revenue: RevenueId, market: MarketId) {
  let next = high;
  if (revenue === "20to50" || revenue === "50p") next = Math.round(high * 1.25);
  if (market === "both") next += 12000;
  return next;
}

export function recommend(b: Brief): Recommendation {
  const points: string[] = [];
  if (b.market === "us") {
    points.push("US brands are in scope. Contracts read in CAD unless we agree otherwise, and the overlap is Eastern Time.");
  }
  if (b.market === "both") {
    points.push("A second country is usually Shopify Markets plus duties, currency, and translation — not a second website.");
  }
  if (b.revenue === "50p") {
    points.push("At $50M+ a platinum program (the Domaine or Diff scale) is often the right container. Clew can still own one workstream — checkout, B2B, or the app — if you do not want the whole RFP.");
  }
  if (b.timing === "asap") {
    points.push("Inside eight weeks means a narrower first release. The catalogue, the edge cases, and the nice-to-haves wait.");
  }

  if (b.need === "headless" && (b.revenue === "u1" || b.revenue === "1to5")) {
    return {
      lane: "Custom storefront, not Hydrogen",
      slug: "storefronts",
      low: 18000,
      high: lift(45000, b.revenue, b.market),
      unit: "project",
      weeks: "6–10 weeks",
      summary:
        "Hydrogen is the wrong first dollar under about $5M. A custom theme will outsell a headless rewrite, and you will still own the code. We would decline the headless project and quote the storefront.",
      points,
    };
  }

  if (b.need === "migration" && b.platform === "none") {
    return {
      lane: "New Shopify storefront",
      slug: "storefronts",
      low: 18000,
      high: lift(45000, b.revenue, b.market),
      unit: "project",
      weeks: "6–10 weeks",
      summary: "There is nothing to migrate. This is a first store: theme, catalogue structure, payments, shipping, and a launch checklist.",
      points,
    };
  }

  if (b.need === "plus" && b.platform === "plus") {
    return {
      lane: "Plus expansion, not a replatform",
      slug: "shopify-plus",
      low: 20000,
      high: lift(70000, b.revenue, b.market),
      unit: "project",
      weeks: "6–14 weeks",
      summary: "You are already on Plus. The money is in checkout extensibility, markets, B2B, or the operational gaps — not in buying the plan again.",
      points,
    };
  }

  if (b.need === "retainer") {
    const band: Record<RevenueId, [number, number]> = {
      u1: [4500, 7000],
      "1to5": [6000, 10000],
      "5to20": [8000, 14000],
      "20to50": [12000, 18000],
      "50p": [15000, 24000],
    };
    const [low, high] = band[b.revenue];
    return {
      lane: "Senior retainer",
      slug: "retainers",
      low,
      high,
      unit: "month",
      weeks: "90-day minimum, then month to month",
      summary:
        "A named senior on the store: theme work, checkout, apps, and the bugs that are actually about merchandising. Not a shared inbox with a two-day reply.",
      points,
    };
  }

  if (b.need === "unsure") {
    return {
      lane: "Paid diagnosis",
      slug: "storefronts",
      low: 4000,
      high: 8000,
      unit: "project",
      weeks: "2–3 weeks",
      summary:
        "A written read of the store, the platform, and the constraint that is actually expensive. Credited in full if a build follows. You leave with a document either way.",
      points,
    };
  }

  const table: Record<Exclude<NeedId, "retainer" | "unsure" | "headless"> | "headless", Omit<Recommendation, "points">> = {
    storefront: {
      lane: "Custom storefront",
      slug: "storefronts",
      low: 18000,
      high: 45000,
      unit: "project",
      weeks: "6–10 weeks",
      summary: "A theme built for how you merchandise, not a purchased theme with the logo swapped. Sections your team can run without a developer on every campaign.",
    },
    migration: {
      lane: "Migration onto Shopify",
      slug: "migrations",
      low: 28000,
      high: 80000,
      unit: "project",
      weeks: "10–16 weeks",
      summary: "Catalogue, customers, orders, redirects, and a cutover you can rehearse. Apps are chosen after the data is understood, not before.",
    },
    plus: {
      lane: "Shopify Plus implementation",
      slug: "shopify-plus",
      low: 40000,
      high: 120000,
      unit: "project",
      weeks: "10–18 weeks",
      summary: "Plus is a set of permissions, not a redesign. The quote covers checkout, markets or B2B, and the operational launch — only the pieces you actually need.",
    },
    app: {
      lane: "Custom app",
      slug: "custom-apps",
      low: 15000,
      high: 60000,
      unit: "project",
      weeks: "6–14 weeks",
      summary: "A private app, a checkout extension, or the admin workflow your team is currently doing in spreadsheets. Scoped to one job, owned by you.",
    },
    pos: {
      lane: "Shopify POS",
      slug: "pos",
      low: 18000,
      high: 55000,
      unit: "project",
      weeks: "6–12 weeks",
      summary: "Retail UI extensions, staff flows, and the unglamorous link between the counter and the online catalogue. One inventory story.",
    },
    b2b: {
      lane: "B2B and wholesale",
      slug: "b2b",
      low: 30000,
      high: 90000,
      unit: "project",
      weeks: "10–16 weeks",
      summary: "Company accounts, price lists, minimums, and a buyer experience that does not embarrass a sales rep. ERP stays a named phase if it is real.",
    },
    headless: {
      lane: "Hydrogen",
      slug: "hydrogen",
      low: 70000,
      high: 160000,
      unit: "project",
      weeks: "14–24 weeks",
      summary: "A headless storefront when the experience, the content model, or the performance budget has actually outgrown Liquid. Not as a trophy.",
    },
  };

  const base = table[b.need as keyof typeof table];
  return { ...base, high: lift(base.high, b.revenue, b.market), points };
}

export function briefText(b: Brief, rec: Recommendation) {
  const market = markets.find((m) => m.id === b.market)?.label;
  const platform = platforms.find((m) => m.id === b.platform)?.label;
  const need = needs.find((m) => m.id === b.need)?.label;
  const revenue = revenues.find((m) => m.id === b.revenue)?.label;
  const timing = timings.find((m) => m.id === b.timing)?.label;
  const lines = [
    `Clew project brief`,
    ``,
    `Lane: ${rec.lane}`,
    `Range: ${cad(rec.low)}–${cad(rec.high)} CAD ${rec.unit === "month" ? "per month" : "project"}`,
    `Pace: ${rec.weeks}`,
    ``,
    `Market: ${market}`,
    `Platform today: ${platform}`,
    `Asked for: ${need}`,
    `Revenue band: ${revenue}`,
    `Timing: ${timing}`,
    ``,
    rec.summary,
    ...rec.points.map((p) => `- ${p}`),
    ``,
    `Name: ${b.name || "—"}`,
    `Email: ${b.email || "—"}`,
    `Company: ${b.company || "—"}`,
    `Note: ${b.note || "—"}`,
  ];
  return lines.join("\n");
}

export const scopeItems = [
  { id: "storefront", label: "Custom storefront", detail: "Theme, UX, merchandising your team can run.", low: 18000, high: 45000 },
  { id: "migration", label: "Migration", detail: "Catalogue, customers, orders, redirects.", low: 28000, high: 80000 },
  { id: "plus", label: "Plus program", detail: "Checkout, Flow, markets, launch.", low: 22000, high: 70000 },
  { id: "app", label: "Custom app", detail: "Private app, webhooks, admin, extensions.", low: 15000, high: 60000 },
  { id: "pos", label: "POS", detail: "Retail UI, staff flows, shared catalogue.", low: 18000, high: 55000 },
  { id: "b2b", label: "B2B / wholesale", detail: "Companies, price lists, net terms.", low: 25000, high: 90000 },
  { id: "hydrogen", label: "Hydrogen", detail: "Replaces a theme. Does not stack on top of one.", low: 70000, high: 160000 },
  { id: "market", label: "Extra market or language", detail: "Duties, currency, translated catalogue.", low: 8000, high: 28000 },
  { id: "retainer", label: "First 90 days of retainer", detail: "Senior hours after launch.", low: 13500, high: 42000 },
] as const;

export type ScopeId = (typeof scopeItems)[number]["id"];
