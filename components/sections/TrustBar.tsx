import { Check } from "lucide-react";

const ITEMS = [
  "Shomer Shabbos-friendly",
  "Vetted & background-checked",
  "Lakewood, Brooklyn, Monsey & beyond",
  "Residential, commercial & mosdos",
] as const;

export function TrustBar() {
  return (
    <section
      aria-label="Why ChaverHub"
      className="relative bg-navy text-cream"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(50% 100% at 50% 0%, rgba(201, 169, 97, 0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-5 px-6 py-8 sm:grid-cols-2 md:py-6 lg:grid-cols-4">
        {ITEMS.map((label) => (
          <div
            key={label}
            className="flex items-center gap-3"
          >
            <span
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass/15 ring-1 ring-brass/30"
              aria-hidden
            >
              <Check className="h-4 w-4 text-brass" strokeWidth={3} />
            </span>
            <p className="text-sm font-medium text-cream/95">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
