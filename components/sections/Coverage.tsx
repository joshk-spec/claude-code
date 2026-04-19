import Link from "next/link";
import { MapPin } from "lucide-react";

const AREAS = [
  "Lakewood",
  "Brooklyn",
  "Monsey",
  "Five Towns",
  "Toms River",
  "Passaic",
  "Teaneck",
  "Staten Island",
  "Jackson",
  "Spring Valley",
  "Baltimore",
  "Catskills (seasonal)",
] as const;

export function Coverage() {
  return (
    <section
      id="coverage"
      aria-labelledby="coverage-heading"
      className="bg-cream"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brass-dark">
            Coverage Areas
          </span>
          <h2
            id="coverage-heading"
            className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            Proudly serving frum communities across the tri-state &amp; beyond.
          </h2>
        </div>

        <ul className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-3 md:mt-14">
          {AREAS.map((area) => (
            <li key={area}>
              <span
                tabIndex={0}
                className="group inline-flex cursor-default items-center gap-2 rounded-full border border-border-soft bg-white px-4 py-2 text-sm font-medium text-navy shadow-soft transition-all duration-200 hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-cream focus-visible:-translate-y-0.5 focus-visible:border-navy focus-visible:bg-navy focus-visible:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                <MapPin
                  className="h-4 w-4 text-brass-dark transition-colors group-hover:text-brass group-focus-visible:text-brass"
                  aria-hidden
                />
                {area}
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center font-serif text-base italic text-ink-muted md:text-lg">
          Don&rsquo;t see your area?{" "}
          <Link
            href="/quote"
            className="font-semibold not-italic text-brass-dark underline decoration-brass/50 decoration-2 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded"
          >
            Let us know
          </Link>
          {" "}— we&rsquo;re expanding fast.
        </p>
      </div>
    </section>
  );
}
