import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, Menu, X } from "lucide-react";
import { brand } from "@/lib/brand";
import { articles } from "@/lib/articles";
import { faqs, services } from "@/lib/content";
import { cn } from "@/lib/cn";
import { ButtonLink } from "@/components/site/ui";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/approach", label: "Approach" },
  { to: "/pricing", label: "Pricing" },
  { to: "/canada", label: "Canada" },
  { to: "/insights", label: "Insights" },
] as const;

function Wordmark({ tone = "ink" }: { tone?: "ink" | "paper" }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className={cn("size-2.5", tone === "paper" ? "bg-copper" : "bg-spruce")} aria-hidden />
      <span className={cn("font-serif text-xl tracking-tight", tone === "paper" ? "text-paper" : "text-ink")}>
        {brand.name}
      </span>
    </span>
  );
}

function NavLinks({ onNavigate, stacked }: { onNavigate?: () => void; stacked?: boolean }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <nav className={cn(stacked ? "flex flex-col gap-1" : "hidden items-center gap-5 md:flex")} aria-label="Primary">
      {links.map((link) => {
        const active = pathname === link.to || pathname.startsWith(`${link.to}/`);
        return (
          <Link
            key={link.to}
            to={link.to}
            onClick={onNavigate}
            className={cn(
              "rounded-md text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-spruce",
              stacked && "min-h-11 px-1 py-2 text-lg",
              active ? "text-spruce" : stacked ? "text-ink" : "text-muted hover:text-ink",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function Shell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#content"
        className="absolute -left-96 top-4 z-50 bg-spruce px-4 py-3 text-sm text-paper focus:left-4 focus:outline-2 focus:outline-offset-2 focus:outline-copper"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link
            to="/"
            aria-label={`${brand.name} home`}
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-spruce"
          >
            <Wordmark />
          </Link>
          <NavLinks />
          <div className="flex items-center gap-2">
            <ButtonLink to="/start" className="hidden sm:inline-flex">
              Start a project
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button
                  type="button"
                  className="press inline-flex size-11 items-center justify-center rounded-md border border-line text-ink md:hidden"
                  aria-label="Open menu"
                >
                  <Menu className="size-5" aria-hidden />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-line bg-paper p-6">
                  <div className="flex items-center justify-between">
                    <Dialog.Title className="font-serif text-2xl text-ink">Menu</Dialog.Title>
                    <Dialog.Close asChild>
                      <button
                        type="button"
                        className="inline-flex size-11 items-center justify-center rounded-md border border-line"
                        aria-label="Close menu"
                      >
                        <X className="size-5" aria-hidden />
                      </button>
                    </Dialog.Close>
                  </div>
                  <Dialog.Description className="sr-only">Primary navigation</Dialog.Description>
                  <div className="mt-8">
                    <NavLinks stacked onNavigate={() => setOpen(false)} />
                  </div>
                  <ButtonLink to="/start" className="mt-8" onClick={() => setOpen(false)}>
                    Start a project
                    <ArrowRight className="size-4" aria-hidden />
                  </ButtonLink>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer className="border-t border-line bg-spruce text-paper">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <Wordmark tone="paper" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/80">
              {brand.meaning} A senior Shopify studio. Canada first. {brand.timezone}.
            </p>
            <p className="mt-4 text-sm text-paper/70">
              Said “{brand.pronunciation}”. Spelled {brand.spell}.
            </p>
            <p className="mt-6 text-sm text-paper/80">
              {brand.principal}
              <br />
              <a className="underline-offset-2 hover:underline" href={`mailto:${brand.email}`}>
                {brand.email}
              </a>
            </p>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-paper">Services</p>
            <ul className="mt-3 space-y-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="text-sm text-paper/75 hover:text-paper"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="text-sm font-medium text-paper">Studio</p>
            <ul className="mt-3 space-y-2 text-sm text-paper/75">
              <li>
                <Link to="/work" className="hover:text-paper">
                  Illustrative work
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-paper">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/canada" className="hover:text-paper">
                  Canada, then the US
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-paper">
                  About
                </Link>
              </li>
              <li>
                <Link to="/start" className="hover:text-paper">
                  Start a project
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-sm font-medium text-paper">Notes</p>
            <ul className="mt-3 space-y-2">
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link
                    to="/insights/$slug"
                    params={{ slug: article.slug }}
                    className="text-sm text-paper/75 hover:text-paper"
                  >
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-paper/15">
          <p className="mx-auto max-w-6xl px-5 py-5 text-xs leading-relaxed text-paper/60">
            {brand.name} is an independent studio. Shopify is a trademark of Shopify Inc. We are not Shopify, and
            this site does not claim a partner badge. Illustrative scopes are not client results.
          </p>
        </div>
      </footer>
    </div>
  );
}

export function PageHeader({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-sm font-medium text-spruce">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">{lede}</p>
      </div>
    </header>
  );
}

export function Photo({
  src,
  alt,
  ratio = "photo",
  className,
  priority,
}: {
  src: string;
  alt: string;
  ratio?: "photo" | "video";
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure
      className={cn(
        "overflow-hidden rounded-md bg-spruce",
        ratio === "video" ? "aspect-video" : "aspect-photo",
        className,
      )}
    >
      <img src={src} alt={alt} className="h-full w-full object-cover" loading={priority ? "eager" : "lazy"} />
    </figure>
  );
}

export function FaqList() {
  return (
    <div className="border-t border-line">
      {faqs.map((faq) => (
        <details key={faq.q} className="group border-b border-line">
          <summary className="flex min-h-11 items-center justify-between gap-6 py-4 text-left text-base font-medium text-ink">
            {faq.q}
            <span className="text-muted group-open:hidden" aria-hidden>
              +
            </span>
            <span className="hidden text-muted group-open:inline" aria-hidden>
              –
            </span>
          </summary>
          <p className="max-w-3xl pb-5 text-sm leading-relaxed text-muted">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}
