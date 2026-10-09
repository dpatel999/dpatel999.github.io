import { createFileRoute } from "@tanstack/react-router";
import { brand } from "@/lib/brand";
import { PageHeader, Shell } from "@/components/site/shell";
import { ButtonLink } from "@/components/site/ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Clew | Shopify studio" },
      {
        name: "description",
        content:
          "Clew is a senior-led Shopify studio based in Canada. The name is four letters. The practice is storefronts, Plus, apps, POS, and B2B — without a fake headcount.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Shell>
      <PageHeader
        kicker="About"
        title={`${brand.name}. Four letters. One practice.`}
        lede={`${brand.meaning} Said “${brand.pronunciation}”, spelled ${brand.spell}. Short enough to own in search once the work earns it.`}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
        <div className="space-y-5 md:col-span-7">
          <p className="leading-relaxed text-ink">
            The Shopify market in North America is full of shops that are either too small to hold a migration or too large to put a senior on a $2M brand. {brand.name} is the room in between, based in the {brand.city}, working the day on {brand.timezone}.
          </p>
          <p className="leading-relaxed text-ink">
            {brand.principal} answers the brief. The fit call, the written scope, and the Shopify decisions stay with that person. Specialists join for QA, photography, or copy. We do not publish a headcount we do not have, a partner badge we have not earned, or a client logo we cannot stand behind.
          </p>
          <p className="leading-relaxed text-ink">
            The practice is deliberately narrow: Shopify, including Plus, POS, checkout, custom apps, and B2B. Not Magento on Tuesdays. Not a media desk. If the constraint is an ad account or a full ERP program, we will say so and point at the tier that fits.
          </p>
        </div>
        <aside className="h-fit border border-line bg-card p-6 md:col-span-5">
          <h2 className="font-serif text-2xl text-ink">What we will not pretend</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
            <li>That a directory badge is the same thing as judgment.</li>
            <li>That Hydrogen is a personality.</li>
            <li>That twelve markets and a new ERP fit in one signature.</li>
            <li>That a retainer is a substitute for a broken scope.</li>
          </ul>
          <ButtonLink to="/start" className="mt-6">
            Talk about a real store
          </ButtonLink>
        </aside>
      </div>
    </Shell>
  );
}
