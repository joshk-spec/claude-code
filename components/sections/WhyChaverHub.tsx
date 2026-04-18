import { Building2, CalendarX, Home, Quote, Star } from "lucide-react";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const BENEFITS: Benefit[] = [
  {
    icon: <CalendarX className="h-5 w-5" aria-hidden />,
    title: "Our calendar",
    body: "No surprise visits on Shabbos or Yom Tov.",
  },
  {
    icon: <Home className="h-5 w-5" aria-hidden />,
    title: "Our homes",
    body: "Big families, big systems, mezuzahs on every door.",
  },
  {
    icon: <Building2 className="h-5 w-5" aria-hidden />,
    title: "Our mosdos",
    body: "Shuls, yeshivas, mikvahs, kollelim, camps, bungalow colonies.",
  },
  {
    icon: <Star className="h-5 w-5" aria-hidden />,
    title: "Our standards",
    body: "Clean, respectful, reliable. Word travels fast.",
  },
];

const STATS = [
  { value: "2hr", label: "Avg match time" },
  { value: "4.9★", label: "Avg rating" },
  { value: "100%", label: "Vetted & licensed" },
  { value: "20+", label: "Communities" },
] as const;

export function WhyChaverHub() {
  return (
    <section id="why" aria-labelledby="why-heading" className="bg-cream">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brass-dark">
            Why ChaverHub
          </span>

          <h2
            id="why-heading"
            className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            Built for our community, by our community.
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            We know the community because we&rsquo;re part of it. Every contractor on
            ChaverHub understands the rhythm of a frum home — the yomim tovim, the
            simchas, the last-minute Erev Shabbos emergencies — and shows up ready
            to work the way we actually live.
          </p>

          <ul className="mt-2 grid gap-5 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brass/15 text-brass-dark ring-1 ring-brass/25">
                  {b.icon}
                </span>
                <div>
                  <p className="font-semibold text-navy">{b.title}</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-muted">
                    {b.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-light via-navy to-navy-dark p-8 text-cream shadow-soft md:p-10">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(55% 60% at 85% 0%, rgba(201, 169, 97, 0.22) 0%, transparent 60%), radial-gradient(45% 55% at 0% 100%, rgba(201, 169, 97, 0.12) 0%, transparent 65%)",
              }}
            />
            <div className="relative">
              <Quote
                className="h-8 w-8 text-brass"
                aria-hidden
                strokeWidth={2.2}
              />
              <blockquote className="mt-5 font-serif text-2xl leading-snug text-cream md:text-3xl">
                &ldquo;They were at my house within 2 hours on a Friday morning.
                Done before licht bentshen.&rdquo;
              </blockquote>
              <footer className="mt-5 text-sm text-cream/75">
                <span className="font-semibold text-brass">Chaya M.</span>
                <span className="mx-2 text-cream/40">·</span>
                Lakewood
              </footer>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-cream/10 pt-8">
                {STATS.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl bg-cream/5 p-4 ring-1 ring-cream/10 backdrop-blur-sm"
                  >
                    <p className="font-serif text-2xl font-semibold text-brass md:text-3xl">
                      {s.value}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-wider text-cream/70">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
