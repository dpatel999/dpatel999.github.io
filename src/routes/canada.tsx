import { createFileRoute } from "@tanstack/react-router";
import { cities } from "@/lib/content";
import { PageHeader, Shell } from "@/components/site/shell";
import { ButtonLink } from "@/components/site/ui";

export const Route = createFileRoute("/canada")({
  head: () => ({
    meta: [
      { title: "Shopify studio in Canada | Clew" },
      {
        name: "description",
        content:
          "Clew serves Shopify brands in Toronto, Montreal, Vancouver, Calgary, Ottawa, and Halifax from one Eastern Time studio. The United States is the next market, not a fake office.",
      },
    ],
  }),
  component: CanadaPage,
});

function CanadaPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Canada, then the US"
        title="One studio. The country first."
        lede="We do not list four offices we do not have. Brands across Canada get the same senior practice, on Eastern Time. US scopes can start now. A New York address will not be invented to hurry that."
      />
      <ul className="mx-auto max-w-6xl px-5">
        {cities.map((city) => (
          <li key={city.name} className="grid gap-2 border-b border-line py-6 md:grid-cols-12">
            <h2 className="font-serif text-2xl text-ink md:col-span-4">{city.name}</h2>
            <p className="leading-relaxed text-muted md:col-span-8">{city.note}</p>
          </li>
        ))}
      </ul>
      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
        <article className="border border-line bg-card p-6">
          <h2 className="font-serif text-2xl text-ink">What “Canada” changes in the build</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li>Bilingual catalogues are scoped, not discovered in week eight.</li>
            <li>Quebec tax, duties, and shipping rules live in checkout.</li>
            <li>CAD is the planning currency. USD if the contract says so.</li>
            <li>A second country is usually Markets, not a second theme.</li>
          </ul>
        </article>
        <article className="border border-line bg-spruce p-6 text-paper">
          <h2 className="font-serif text-2xl">The US, when it is real</h2>
          <p className="mt-4 text-sm leading-relaxed text-paper/80">
            The studio is built so a US brand is not a different company. Same ranges, same person on the work, overlap on Eastern Time. We will not staff a pitch with a city we do not work from.
          </p>
          <ButtonLink to="/start" tone="paper" className="mt-6">
            Start from either country
          </ButtonLink>
        </article>
      </section>
    </Shell>
  );
}
