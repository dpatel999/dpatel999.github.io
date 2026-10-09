import { useMemo, useState } from "react";
import { cad, scopeItems, type ScopeId } from "@/lib/estimate";
import { cn } from "@/lib/cn";

export function ScopeBuilder() {
  const [picked, setPicked] = useState<ScopeId[]>(["storefront"]);

  function toggle(id: ScopeId) {
    setPicked((current) => (current.includes(id) ? current.filter((item) => item !== id) : [...current, id]));
  }

  const totals = useMemo(() => {
    const chosen = scopeItems.filter((item) => picked.includes(item.id));
    return {
      low: chosen.reduce((sum, item) => sum + item.low, 0),
      high: chosen.reduce((sum, item) => sum + item.high, 0),
    };
  }, [picked]);

  const bothFaces = picked.includes("hydrogen") && picked.includes("storefront");

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="grid gap-3 lg:col-span-7">
        {scopeItems.map((item) => {
          const on = picked.includes(item.id);
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(item.id)}
              className={cn(
                "flex min-h-11 items-start justify-between gap-4 rounded-md border px-4 py-4 text-left",
                on ? "border-spruce bg-foam" : "border-line bg-card",
              )}
            >
              <span>
                <span className="block font-medium text-ink">{item.label}</span>
                <span className="mt-1 block text-sm text-muted">{item.detail}</span>
              </span>
              <span className="shrink-0 text-sm tabular-nums text-muted">
                {cad(item.low)}–{cad(item.high)}
              </span>
            </button>
          );
        })}
      </div>
      <aside className="h-fit border border-line bg-spruce p-6 text-paper lg:col-span-5">
        <p className="text-sm text-paper/75">Stacked sketch</p>
        <p className="mt-3 font-serif text-4xl tabular-nums">
          {picked.length === 0 ? "—" : `${cad(totals.low)}–${cad(totals.high)}`}
        </p>
        <p className="mt-2 text-sm text-paper/75">CAD, before tax. Not a quote.</p>
        <p className="mt-4 text-sm leading-relaxed text-paper/80">
          Adding every box double-counts shared work. A real scope collapses overlap. Use this to see which piece is the expensive one.
        </p>
        {bothFaces && (
          <p className="mt-4 text-sm leading-relaxed text-paper">
            Hydrogen replaces a custom theme. Do not buy both unless the theme is a temporary bridge with an end date.
          </p>
        )}
      </aside>
    </div>
  );
}
