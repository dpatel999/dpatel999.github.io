import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { articles, getArticle } from "@/lib/articles";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.seoTitle ?? "Note"} | Clew` },
      { name: "description", content: loaderData?.description ?? "" },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  const article = Route.useLoaderData();
  const more = articles.filter((item) => item.slug !== article.slug);

  return (
    <Shell>
      <article className="mx-auto max-w-3xl px-5 py-14 md:py-20">
        <p className="text-sm text-muted">
          {article.date} · {article.minutes}
        </p>
        <h1 className="mt-3 font-serif text-4xl leading-tight text-ink md:text-5xl">{article.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-muted">{article.lede}</p>
        <div className="mt-10 space-y-5">
          {article.blocks.map((block, index) => {
            if (block.type === "h2") {
              return (
                <h2 key={index} className="pt-4 font-serif text-2xl text-ink">
                  {block.text}
                </h2>
              );
            }
            if (block.type === "ul") {
              return (
                <ul key={index} className="space-y-3 pl-5 text-ink">
                  {block.items.map((item) => (
                    <li key={item} className="list-disc leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === "quote") {
              return (
                <blockquote key={index} className="border-l-2 border-copper pl-4 font-serif text-xl leading-snug text-ink">
                  {block.text}
                </blockquote>
              );
            }
            return (
              <p key={index} className="leading-relaxed text-ink">
                {block.text}
              </p>
            );
          })}
        </div>
      </article>
      <section className="border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-10">
          <h2 className="text-sm font-medium text-spruce">More notes</h2>
          <ul className="mt-3 space-y-2">
            {more.map((item) => (
              <li key={item.slug}>
                <Link to="/insights/$slug" params={{ slug: item.slug }} className="text-ink hover:text-spruce">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Shell>
  );
}
