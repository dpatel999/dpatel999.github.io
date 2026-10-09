import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/content";
import { PageHeader, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Shopify services in Canada | Clew" },
      {
        name: "description",
        content:
          "Shopify storefronts, Plus, migrations, custom apps, Hydrogen, POS, B2B, and retainers. One senior studio in Canada, with a range on every service.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Services"
        title="Eight ways the work actually shows up."
        lede="Pick the constraint, not the trend. Each page says who it fits, who it does not, and what the range assumes."
      />
      <ul className="mx-auto max-w-6xl px-5">
        {services.map((service) => (
          <li key={service.slug} className="border-b border-line">
            <Link
              to="/services/$slug"
              params={{ slug: service.slug }}
              className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline"
            >
              <span className="font-serif text-lg tabular-nums text-copper md:col-span-1">{service.index}</span>
              <span className="md:col-span-4">
                <span className="font-serif text-3xl text-ink">{service.title}</span>
              </span>
              <span className="text-muted md:col-span-5">{service.lede}</span>
              <span className="text-sm tabular-nums text-ink md:col-span-2 md:text-right">{service.range}</span>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
