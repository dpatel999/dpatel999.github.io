import { Link } from "@tanstack/react-router";
import { Shell } from "@/components/site/shell";

export function NotFound() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-5 py-24">
        <p className="text-sm font-medium text-spruce">404</p>
        <h1 className="mt-3 font-serif text-4xl text-ink md:text-5xl">No page at this address.</h1>
        <p className="mt-4 max-w-md text-muted">The link may be old. The studio is still here.</p>
        <Link to="/" className="mt-8 inline-flex min-h-11 items-center text-sm font-medium text-spruce">
          Back home
        </Link>
      </div>
    </Shell>
  );
}
