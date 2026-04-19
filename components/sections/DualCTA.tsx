import Link from "next/link";
import { Building2, Check, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const CONTRACTOR_POINTS = [
  "Exclusive verified customer requests",
  "Pay-per-lead or flat monthly — your choice",
  "Community credibility & trust from day one",
  "No long-term contracts, cancel anytime",
] as const;

const MOSDOS_POINTS = [
  "Rooftop units & multi-zone commercial systems",
  "Preventive maintenance contracts",
  "Seasonal prep for camps & bungalow colonies",
  "24/7 emergency service when it can't wait",
] as const;

interface BulletsProps {
  items: readonly string[];
  tone: "light" | "dark";
}

function Bullets({ items, tone }: BulletsProps) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden
            className={cn(
              "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
              tone === "light"
                ? "bg-brass/20 text-brass ring-1 ring-brass/30"
                : "bg-brass/15 text-brass-dark ring-1 ring-brass/30",
            )}
          >
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span
            className={cn(
              "text-sm leading-relaxed md:text-base",
              tone === "light" ? "text-cream/90" : "text-ink",
            )}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function DualCTA() {
  return (
    <section
      id="contractors"
      aria-labelledby="dual-cta-heading"
      className="bg-white"
    >
      <h2 id="dual-cta-heading" className="sr-only">
        For contractors and mosdos
      </h2>
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-8">
        <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-light via-navy to-navy-dark p-8 text-cream shadow-soft md:p-10">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-brass/20 bg-brass/10 blur-2xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-brass/25"
          />

          <div className="relative flex h-full flex-col gap-6">
            <span
              aria-hidden
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brass text-navy shadow-brass"
            >
              <Wrench className="h-6 w-6" strokeWidth={2.2} />
            </span>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass">
              For Contractors
            </p>

            <h3 className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-cream md:text-4xl">
              Grow your business in the frum market.
            </h3>

            <p className="text-base leading-relaxed text-cream/80 md:text-lg">
              Exclusive leads from motivated homeowners and mosdos that need the
              work done right — no racing a hundred other bidders to the bottom.
            </p>

            <Bullets items={CONTRACTOR_POINTS} tone="light" />

            <Link
              href="/contractors/apply"
              className="mt-auto inline-flex"
              aria-label="Apply to join ChaverHub"
            >
              <Button variant="brass" size="lg">
                Apply to Join ChaverHub
              </Button>
            </Link>
          </div>
        </article>

        <article className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cream via-cream to-cream-dark p-8 text-ink shadow-soft ring-1 ring-border-soft md:p-10">
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brass/15 blur-2xl"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-brass/40"
          />

          <div className="relative flex h-full flex-col gap-6">
            <span
              aria-hidden
              className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brass shadow-soft"
            >
              <Building2 className="h-6 w-6" strokeWidth={2.2} />
            </span>

            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brass-dark">
              For Mosdos &amp; Businesses
            </p>

            <h3 className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-navy md:text-4xl">
              Commercial HVAC for shuls, yeshivas &amp; camps.
            </h3>

            <p className="text-base leading-relaxed text-ink-muted md:text-lg">
              Every dollar matters in a mosad. Get pros who understand the
              budgets, the calendars, and the people — and deliver work that
              lasts.
            </p>

            <Bullets items={MOSDOS_POINTS} tone="dark" />

            <Link
              href="/quote?type=commercial"
              className="mt-auto inline-flex"
              aria-label="Request a commercial quote"
            >
              <Button variant="primary" size="lg">
                Request a Commercial Quote
              </Button>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
