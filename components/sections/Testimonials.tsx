import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  initial: string;
  avatarClass: string;
  name: string;
  location: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initial: "C",
    avatarClass: "bg-rose-400/80",
    name: "Chaya M.",
    location: "Lakewood, NJ",
    quote:
      "They were at my house within 2 hours on a Friday morning. Done before licht bentshen.",
  },
  {
    initial: "Y",
    avatarClass: "bg-emerald-400/80",
    name: "Yossi G.",
    location: "Flatbush, NY",
    quote:
      "Finally a contractor who understood why I couldn't take calls on Shabbos. Respectful, professional, fair price.",
  },
  {
    initial: "D",
    avatarClass: "bg-sky-400/80",
    name: "R' Dovid K.",
    location: "Monsey, NY",
    quote:
      "We use ChaverHub for our yeshiva. Every contractor we've worked with has been top-notch.",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4 fill-brass text-brass"
          aria-hidden
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="relative bg-navy text-cream"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brass to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(55% 55% at 20% 0%, rgba(201, 169, 97, 0.18) 0%, transparent 60%), radial-gradient(45% 55% at 85% 100%, rgba(201, 169, 97, 0.1) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full border border-brass/50 bg-brass/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brass">
            Kind Words
          </span>
          <h2
            id="testimonials-heading"
            className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-cream sm:text-4xl md:text-5xl"
          >
            Real neighbors. <span className="text-brass">Real results.</span>
          </h2>
          <p className="text-balance text-base leading-relaxed text-cream/75 md:text-lg">
            From Shabbos emergencies to shul-wide renovations, ChaverHub pros
            show up the way we&rsquo;d want a chaver to show up.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl border border-cream/10 bg-cream/5 p-7 shadow-soft backdrop-blur-md transition-colors duration-200 hover:bg-cream/10 md:p-8"
            >
              <Stars />
              <blockquote className="font-serif text-lg italic leading-relaxed text-cream md:text-xl">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <footer className="mt-auto flex items-center gap-3">
                <span
                  aria-hidden
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-serif text-lg font-semibold text-navy ring-2 ring-cream/20",
                    t.avatarClass,
                  )}
                >
                  {t.initial}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-cream">{t.name}</p>
                  <p className="text-sm text-cream/70">{t.location}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
