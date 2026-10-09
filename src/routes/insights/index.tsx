import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/lib/articles";
import { PageHeader, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Shopify notes for Canadian brands | Clew" },
      {
        name: "description",
        content:
          "Field notes on North American Shopify agencies, Canadian pricing, and when to choose a theme, Plus, or Hydrogen.",
      },
    ],
  }),
  component: InsightsPage,
});

function InsightsPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Insights"
        title="Written so the first call is shorter."
        lede="The non-brand search — agency, pricing, Plus, Hydrogen — lives here. The name is how you remember who wrote it."
      />
      <ul className="mx-auto max-w-6xl px-5">
        {articles.map((article) => (
          <li key={article.slug} className="border-b border-line">
            <Link to="/insights/$slug" params={{ slug: article.slug }} className="block py-8">
              <p className="text-sm text-muted">
                {article.date} · {article.minutes}
              </p>
              <h2 className="mt-2 font-serif text-3xl text-ink">{article.title}</h2>
              <p className="mt-3 max-w-2xl text-muted">{article.lede}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Shell>
  );
}
