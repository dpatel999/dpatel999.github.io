import { createFileRoute } from "@tanstack/react-router";
import { tiers } from "@/lib/content";
import { PageHeader, Shell } from "@/components/site/shell";
import { ButtonLink } from "@/components/site/ui";

const steps = [
  {
    title: "A fit call, not a deck",
    text: "Thirty minutes. You bring the constraint. We say if it is us, a freelancer, or a platinum program. No theatre either way.",
  },
  {
    title: "One written scope",
    text: "Range, risks, what is out, and what would make the number move. You can take it to another shop. That is the point.",
  },
  {
    title: "A phase, or senior time",
    text: "Fixed phase when the edges are known. Weekly senior rate when they are not. We do not blur the two.",
  },
  {
    title: "Build where you can click it",
    text: "Staging every week. The person who wrote the scope is still in the work. You are not meeting the team for the first time at launch.",
  },
  {
    title: "Handoff that survives us",
    text: "Repo, theme, app, admin. Optional retainer after. If we stop, the store does not.",
  },
];

export const Route = createFileRoute("/approach")({
  head: () => ({
    meta: [
      { title: "How Clew works | Shopify studio" },
      {
        name: "description",
        content:
          "How a senior Shopify studio in Canada scopes, prices, and hands over the work — and which agency tier you actually need.",
      },
    ],
  }),
  component: ApproachPage,
});

function ApproachPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Approach"
        title="Senior on the work, or we are the wrong room."
        lede="The failure mode in this market is a pitch staffed by people you will not see again. Clew is small on purpose so that cannot happen."
      />
      <ol className="mx-auto max-w-6xl px-5">
        {steps.map((step, index) => (
          <li key={step.title} className="grid gap-3 border-b border-line py-8 md:grid-cols-12">
            <span className="font-serif text-lg tabular-nums text-copper md:col-span-2">0{index + 1}</span>
            <h2 className="font-serif text-2xl text-ink md:col-span-4">{step.title}</h2>
            <p className="leading-relaxed text-muted md:col-span-6">{step.text}</p>
          </li>
        ))}
      </ol>
      <section className="border-t border-line bg-card">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-serif text-3xl text-ink">Where we sit in the market</h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead>
                <tr className="border-b border-line text-muted">
                  <th className="py-3 pr-4 font-medium">Shape</th>
                  <th className="py-3 pr-4 font-medium">Fits</th>
                  <th className="py-3 pr-4 font-medium">Range</th>
                  <th className="py-3 font-medium">The honest note</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((tier) => (
                  <tr key={tier.name} className="border-b border-line align-top">
                    <th className="py-4 pr-4 font-medium text-ink">{tier.name}</th>
                    <td className="py-4 pr-4 text-muted">{tier.fit}</td>
                    <td className="py-4 pr-4 tabular-nums text-ink">{tier.range}</td>
                    <td className="py-4 text-muted">{tier.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ButtonLink to="/start" className="mt-8">
            Start with the fit
          </ButtonLink>
        </div>
      </section>
    </Shell>
  );
}
