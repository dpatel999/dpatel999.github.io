import { createFileRoute } from "@tanstack/react-router";
import { BriefForm } from "@/components/site/brief";
import { PageHeader, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/start")({
  head: () => ({
    meta: [
      { title: "Start a Shopify project | Clew" },
      {
        name: "description",
        content:
          "Answer five questions and get a Shopify planning range in CAD — storefront, migration, Plus, app, POS, B2B, Hydrogen, or a retainer.",
      },
    ],
  }),
  component: StartPage,
});

function StartPage() {
  return (
    <Shell>
      <PageHeader
        kicker="Start"
        title="Five questions. A range, not a performance."
        lede="This stays in your browser. Copy the brief when you are ready to send it. Nothing here is a quote until it is written as a scope."
      />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <BriefForm />
      </div>
    </Shell>
  );
}
