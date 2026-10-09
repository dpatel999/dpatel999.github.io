import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  briefText,
  emptyBrief,
  markets,
  needs,
  platforms,
  recommend,
  revenues,
  timings,
  cad,
  type Brief,
} from "@/lib/estimate";
import { brand } from "@/lib/brand";
import { Button } from "@/components/site/ui";
import { cn } from "@/lib/cn";

const KEY = "clew-brief-v1";

const steps = [
  { key: "market", title: "Where do you sell?", options: markets },
  { key: "platform", title: "What are you on today?", options: platforms },
  { key: "need", title: "What do you actually need?", options: needs },
  { key: "revenue", title: "Rough online revenue?", options: revenues },
  { key: "timing", title: "When does it have to be real?", options: timings },
] as const;

export function BriefForm() {
  const [brief, setBrief] = useState<Brief>(emptyBrief);
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);
  const [copied, setCopied] = useState(false);
  const rec = useMemo(() => recommend(brief), [brief]);
  const done = step >= steps.length;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<Brief>;
        setBrief({ ...emptyBrief, ...parsed });
      }
    } catch {
      /* ignore broken drafts */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(KEY, JSON.stringify(brief));
  }, [brief, ready]);

  function pick(id: string) {
    const key = steps[step]?.key;
    if (!key) return;
    setBrief((current) => ({ ...current, [key]: id }));
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(briefText(brief, rec));
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const current = steps[step];

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">
        <ol className="flex flex-wrap gap-2" aria-label="Progress">
          {steps.map((item, index) => (
            <li key={item.key}>
              <button
                type="button"
                onClick={() => setStep(index)}
                className={cn(
                  "min-h-11 rounded-md px-3 text-sm tabular-nums",
                  index === step ? "bg-spruce text-paper" : "bg-card text-muted",
                )}
                aria-current={index === step ? "step" : undefined}
              >
                0{index + 1}
              </button>
            </li>
          ))}
        </ol>

        {current ? (
          <fieldset className="mt-8">
            <legend className="font-serif text-3xl text-ink md:text-4xl">{current.title}</legend>
            <div className="mt-6 grid gap-3">
              {current.options.map((option) => {
                const selected = brief[current.key] === option.id;
                return (
                  <label
                    key={option.id}
                    className={cn(
                      "flex min-h-11 cursor-pointer items-start gap-3 rounded-md border px-4 py-4",
                      selected ? "border-spruce bg-foam" : "border-line bg-card",
                    )}
                  >
                    <input
                      type="radio"
                      name={current.key}
                      value={option.id}
                      checked={selected}
                      onChange={() => pick(option.id)}
                      className="mt-1 size-4 accent-spruce"
                    />
                    <span>
                      <span className="block font-medium text-ink">{option.label}</span>
                      <span className="mt-1 block text-sm text-muted">{option.detail}</span>
                    </span>
                  </label>
                );
              })}
            </div>
            <div className="mt-6 flex gap-3">
              <Button tone="ghost" onClick={() => setStep((n) => Math.max(0, n - 1))} disabled={step === 0}>
                Back
              </Button>
              <Button onClick={() => setStep((n) => n + 1)}>
                {step === steps.length - 1 ? "See the range" : "Next"}
              </Button>
            </div>
          </fieldset>
        ) : (
          <div className="mt-8">
            <h2 className="font-serif text-3xl text-ink">Who should we address it to?</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              Optional. Nothing is sent to a server — the brief stays in this browser until you copy it.
            </p>
            <div className="mt-6 grid gap-4">
              <Field label="Name" value={brief.name} onChange={(name) => setBrief({ ...brief, name })} />
              <Field label="Email" value={brief.email} onChange={(email) => setBrief({ ...brief, email })} type="email" />
              <Field label="Company" value={brief.company} onChange={(company) => setBrief({ ...brief, company })} />
              <label className="block text-sm font-medium text-ink">
                What is in the way
                <textarea
                  value={brief.note}
                  onChange={(event) => setBrief({ ...brief, note: event.target.value })}
                  rows={4}
                  className="mt-2 w-full rounded-md border border-line bg-card px-3 py-3 text-base font-normal text-ink"
                />
              </label>
            </div>
            <Button tone="ghost" className="mt-6" onClick={() => setStep(steps.length - 1)}>
              Back
            </Button>
          </div>
        )}
      </div>

      <aside className="h-fit border border-line bg-card p-6 lg:col-span-5 lg:sticky lg:top-24">
        <p className="text-sm font-medium text-spruce">{done ? "Planning range" : "Live read"}</p>
        <h2 className="mt-2 font-serif text-3xl text-ink">{rec.lane}</h2>
        <p className="mt-4 font-serif text-2xl tabular-nums text-ink">
          {cad(rec.low)}–{cad(rec.high)}
          <span className="ml-2 font-sans text-sm text-muted">{rec.unit === "month" ? "CAD / month" : "CAD"}</span>
        </p>
        <p className="mt-2 text-sm text-muted">{rec.weeks}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{rec.summary}</p>
        {rec.points.length > 0 && (
          <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
            {rec.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-xs leading-relaxed text-muted">
          A range is not a quote.{" "}
          <Link to="/services/$slug" params={{ slug: rec.slug }} className="text-spruce underline-offset-2 hover:underline">
            Read the service
          </Link>
          .
        </p>
        {done && (
          <div className="mt-6">
            <Button onClick={copy}>{copied ? "Copied" : "Copy the brief"}</Button>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Or{" "}
              <a
                className="text-spruce underline-offset-2 hover:underline"
                href={`mailto:${brand.email}?subject=${encodeURIComponent("Clew project brief")}&body=${encodeURIComponent(briefText(brief, rec))}`}
              >
                email it to {brand.email}
              </a>
              . Nothing is a quote until it is written as a scope.
            </p>
            <pre className="mt-4 max-h-64 overflow-auto whitespace-pre-wrap rounded-md bg-paper p-3 text-xs leading-relaxed text-ink">
              {briefText(brief, rec)}
            </pre>
          </div>
        )}
      </aside>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm font-medium text-ink">
      {label}
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-11 w-full rounded-md border border-line bg-card px-3 text-base font-normal text-ink"
      />
    </label>
  );
}
