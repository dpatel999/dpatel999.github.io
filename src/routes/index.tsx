import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/brand";
import { articles } from "@/lib/articles";
import { images, patterns, services, tiers } from "@/lib/content";
import { FaqList, Photo, Shell } from "@/components/site/shell";
import { ButtonLink } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Clew — Shopify studio for Canadian brands" },
      {
        name: "description",
        content:
          "Clew is the Shopify studio between a freelancer and a six-month RFP. Canada first, published CAD ranges, senior on the build. Storefronts, Plus, apps, POS, and B2B.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Clew",
          url: brand.siteUrl,
          email: brand.email,
          founder: { "@type": "Person", name: brand.principal },
          description:
            "Senior Shopify studio for Canadian brands. Custom storefronts, Plus, migrations, apps, POS, and B2B.",
          areaServed: ["CA", "US"],
          address: { "@type": "PostalAddress", "addressCountry": "CA", "addressRegion": "ON" },
          knowsAbout: ["Shopify", "Shopify Plus", "Shopify POS", "Headless commerce", "B2B ecommerce"],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 md:pt-20">
        <p className="text-sm font-medium text-spruce">Shopify studio · Canada</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-6xl">
          Between a freelancer and a six-month RFP.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          {brand.name} is a senior Shopify studio for Canadian brands that have outgrown a theme. Storefronts, Plus,
          migrations, custom apps, POS, and B2B — with the range written down before anyone builds a deck.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/start">
            Scope a project
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink to="/pricing" tone="ghost">
            See the ranges
          </ButtonLink>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-12">
          <Photo
            src={images.hero.src}
            alt={images.hero.alt}
            ratio="video"
            priority
            className="md:col-span-8"
          />
          <ul className="flex flex-col justify-end gap-4 border border-line bg-card p-6 md:col-span-4">
            {[
              "Shopify only. No second platform to keep the lights on.",
              "Ranges in CAD, before the call.",
              "One studio on Eastern Time. US work without a fictional New York office.",
            ].map((item) => (
              <li key={item} className="border-t border-line pt-4 text-sm leading-relaxed text-ink first:border-t-0 first:pt-0">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">How the market actually splits</h2>
            <p className="mt-4 text-muted">
              North American Shopify work is not one industry. It is five price bands wearing the same word, agency.
            </p>
          </div>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {tiers.map((tier) => (
              <li
                key={tier.name}
                className={
                  tier.ours
                    ? "grid gap-2 bg-foam px-4 py-5 md:grid-cols-12 md:items-baseline"
                    : "grid gap-2 py-5 md:grid-cols-12 md:items-baseline"
                }
              >
                <h3 className="font-serif text-xl text-ink md:col-span-3">{tier.name}</h3>
                <p className="text-sm leading-relaxed text-muted md:col-span-5">{tier.fit}</p>
                <p className="text-sm font-medium tabular-nums text-ink md:col-span-4 md:text-right">{tier.range}</p>
              </li>
            ))}
          </ul>
          <Link to="/approach" className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-spruce">
            Read the approach
          </Link>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-serif text-3xl text-ink md:text-4xl">The work, named</h2>
            <p className="mt-4 text-muted">
              Eight services. The same list the large shops sell, kept in one senior practice instead of three vendors.
            </p>
          </div>
          <ul className="md:col-span-8">
            {services.map((service) => (
              <li key={service.slug} className="border-t border-line">
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-serif text-lg tabular-nums text-copper">{service.index}</span>
                    <span className="text-lg text-ink group-hover:text-spruce">{service.title}</span>
                  </span>
                  <span className="text-sm tabular-nums text-muted">{service.range}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl text-ink md:text-4xl">Shapes of work, not borrowed logos</h2>
              <p className="mt-4 text-muted">
                These are the briefs we are built for. They are not claimed clients and not promised results.
              </p>
            </div>
            <Link to="/work" className="inline-flex min-h-11 items-center text-sm font-medium text-spruce">
              All six
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {patterns.slice(0, 3).map((pattern) => (
              <article key={pattern.index} className="flex flex-col">
                <Photo src={images[pattern.image].src} alt={pattern.imageAlt} />
                <p className="mt-4 text-sm text-spruce">{pattern.sector}</p>
                <h3 className="mt-1 font-serif text-2xl text-ink">{pattern.title}</h3>
                <p className="mt-3 text-sm tabular-nums text-muted">
                  {pattern.range} · {pattern.weeks}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-serif text-3xl text-ink md:text-4xl">Notes for the search, and for the call</h2>
          <ul className="mt-8 divide-y divide-line border-y border-line">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link to="/insights/$slug" params={{ slug: article.slug }} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="text-lg text-ink">{article.title}</span>
                  <span className="text-sm text-muted">{article.minutes}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-serif text-3xl text-ink">Questions worth answering in public</h2>
          <div className="mt-8">
            <FaqList />
          </div>
          <div className="mt-12 flex flex-col items-start gap-4 border border-line bg-foam p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl font-serif text-2xl text-ink">Bring the constraint. Leave with a range.</p>
            <ButtonLink to="/start">
              Start a project
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </section>
    </Shell>
  );
}
