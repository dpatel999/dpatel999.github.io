import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getService, services } from "@/lib/content";
import { Shell } from "@/components/site/shell";
import { ButtonLink } from "@/components/site/ui";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.seoTitle ?? "Service"} | Clew` },
      { name: "description", content: loaderData?.seo ?? "" },
    ],
  }),
  component: ServicePage,
});

function ServicePage() {
  const service = Route.useLoaderData();
  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <Shell>
      <header className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <p className="text-sm font-medium text-spruce">
            Service {service.index} · {service.weeks}
          </p>
          <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-6xl">{service.title}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{service.lede}</p>
          <p className="mt-6 font-serif text-3xl tabular-nums text-ink">{service.range}</p>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-14 md:grid-cols-12">
        <div className="space-y-5 md:col-span-7">
          {service.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-ink">
              {paragraph}
            </p>
          ))}
          <ButtonLink to="/start">Scope this</ButtonLink>
        </div>
        <div className="space-y-8 md:col-span-5">
          <List title="Fits" items={service.fits} />
          <List title="We will say no" items={service.skips} />
          <List title="You leave with" items={service.deliverables} />
        </div>
      </div>
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <h2 className="font-serif text-2xl text-ink">Adjacent work</h2>
          <ul className="mt-4 divide-y divide-line border-y border-line">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: item.slug }}
                  className="flex items-baseline justify-between gap-4 py-4"
                >
                  <span className="text-ink">{item.title}</span>
                  <span className="text-sm tabular-nums text-muted">{item.range}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-sm font-medium text-spruce">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item} className="border-t border-line pt-2 text-sm leading-relaxed text-ink">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
