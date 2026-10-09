import { createFileRoute } from "@tanstack/react-router";
import { images, patterns } from "@/lib/content";
import { PageHeader, Photo, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Shopify work, illustrated | Clew" },
      {
        name: "description",
        content:
          "Illustrative Shopify scopes for Canadian brands: apparel, CPG migration, wholesale, POS, repair work orders, and a bad handoff. Not client claims.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Work"
        title="The briefs, without borrowed logos."
        lede="A new studio does not get to invent a client list. These are shaped like real Canadian projects. They are not results, and they are not a promise."
      />
      <div className="mx-auto max-w-6xl px-5">
        {patterns.map((pattern) => (
          <article key={pattern.index} className="grid gap-6 border-b border-line py-12 md:grid-cols-12">
            <Photo src={images[pattern.image].src} alt={pattern.imageAlt} className="md:col-span-5" />
            <div className="md:col-span-7">
              <p className="text-sm text-spruce">
                {pattern.index} · {pattern.sector}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-ink">{pattern.title}</h2>
              <p className="mt-4 leading-relaxed text-muted">{pattern.shape}</p>
              <ul className="mt-4 space-y-2">
                {pattern.includes.map((item) => (
                  <li key={item} className="text-sm text-ink">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm tabular-nums text-muted">
                {pattern.range} CAD · {pattern.weeks}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Shell>
  );
}
