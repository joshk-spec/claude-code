import Link from "next/link";
import {
  Building,
  Droplets,
  Flame,
  HomeIcon,
  Refrigerator,
  Zap,
} from "lucide-react";

interface Service {
  slug: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  tags: [string, string, string, string];
}

const SERVICES: Service[] = [
  {
    slug: "hvac",
    name: "HVAC",
    description:
      "Heating, cooling, boilers, furnaces, mini-splits, commercial systems.",
    icon: <Flame className="h-6 w-6" aria-hidden />,
    tags: ["Repair", "Install", "Emergency", "Tune-ups"],
  },
  {
    slug: "plumbing",
    name: "Plumbing",
    description: "Leaks, clogs, water heaters, repiping, emergency calls.",
    icon: <Droplets className="h-6 w-6" aria-hidden />,
    tags: ["Leaks", "Water heaters", "Drain cleaning", "Emergency"],
  },
  {
    slug: "electrical",
    name: "Electrical",
    description: "Panel upgrades, outlets, lighting, generators, smart wiring.",
    icon: <Zap className="h-6 w-6" aria-hidden />,
    tags: ["Panels", "Generators", "Lighting", "Rewiring"],
  },
  {
    slug: "appliance-repair",
    name: "Appliance Repair",
    description: "Fridges, ovens, washers, dryers, dishwashers.",
    icon: <Refrigerator className="h-6 w-6" aria-hidden />,
    tags: ["Fridges", "Ovens", "Washers", "Dryers"],
  },
  {
    slug: "roofing",
    name: "Roofing",
    description: "Leak repairs, replacements, gutters, chimneys, inspections.",
    icon: <HomeIcon className="h-6 w-6" aria-hidden />,
    tags: ["Leaks", "Replacement", "Gutters", "Inspections"],
  },
  {
    slug: "commercial",
    name: "Commercial & Mosdos",
    description: "Shuls, yeshivas, mikvahs, offices, bungalow colonies.",
    icon: <Building className="h-6 w-6" aria-hidden />,
    tags: ["Rooftop units", "Multi-zone", "Maintenance", "24/7"],
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brass-dark">
            What We Cover
          </span>
          <h2
            id="services-heading"
            className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            Trusted pros for every home emergency.
          </h2>
          <p className="text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            From a dead boiler on the coldest Friday of the year to a mikvah
            that needs a same-day fix — we cover the biggest home service
            categories the community relies on.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/quote?service=${s.slug}`}
                aria-label={`Request a quote for ${s.name}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-soft bg-cream p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brass/40 hover:bg-white hover:shadow-brass focus-visible:-translate-y-1 focus-visible:border-brass focus-visible:bg-white focus-visible:shadow-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:p-7"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-brass-dark via-brass to-brass-light transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />

                <span
                  aria-hidden
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-brass shadow-soft transition-colors group-hover:bg-navy-light"
                >
                  {s.icon}
                </span>

                <h3 className="mt-5 font-serif text-xl font-semibold text-navy md:text-2xl">
                  {s.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                  {s.description}
                </p>

                <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                  {s.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border-soft bg-cream px-2.5 py-1 text-xs font-medium text-ink-muted transition-colors group-hover:border-brass/30 group-hover:text-navy"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
