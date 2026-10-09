import { createFileRoute } from "@tanstack/react-router";
import { services } from "@/lib/content";
import { PageHeader, Shell } from "@/components/site/shell";
import { ScopeBuilder } from "@/components/site/scope-builder";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Shopify agency pricing in Canada | Clew" },
      {
        name: "description",
        content:
          "Published 2026 CAD ranges for Shopify storefronts, migrations, Plus, apps, POS, B2B, Hydrogen, and retainers. A planning sketch, not a quote.",
      },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Pricing"
        title="The number, before the deck."
        lede="Planning ranges in CAD, before tax, for 2026. A written scope replaces this page. Discovery is credited if a build follows."
      />
      <section className="mx-auto max-w-6xl px-5 py-14">
        <h2 className="font-serif text-3xl text-ink">Stack a sketch</h2>
        <p className="mt-3 max-w-2xl text-muted">
          Turn on the pieces you think you need. The total is a ceiling, not an invoice — shared work collapses in a real scope.
        </p>
        <div className="mt-8">
          <ScopeBuilder />
        </div>
      </section>
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14">
          <h2 className="font-serif text-3xl text-ink">The bands on their own</h2>
          <ul className="mt-6 divide-y divide-line border-y border-line">
            {services.map((service) => (
              <li key={service.slug} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="text-ink">{service.title}</span>
                <span className="text-sm tabular-nums text-muted">
                  {service.range} · {service.weeks}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-medium text-ink">Inside the range</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Senior Shopify work, staging, the repo, and a handover. Redirects on a migration. A floor test on POS. The diagnosis if you are not sure.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-ink">Not inside it</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Shopify plan fees, app subscriptions, photography, copy, paid media, hardware, and an ERP program. Those are named or they will surprise you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Shell>
  );
}
