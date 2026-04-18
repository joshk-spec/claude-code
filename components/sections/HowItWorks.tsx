import Link from "next/link";
import { ClipboardList, Users, Wrench } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Step {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const STEPS: Step[] = [
  {
    icon: <ClipboardList className="h-6 w-6" aria-hidden />,
    title: "Tell Us What You Need",
    body: "Share the details in under 2 minutes — service, location, and when you need it by.",
  },
  {
    icon: <Users className="h-6 w-6" aria-hidden />,
    title: "Get Matched With Vetted Pros",
    body: "Up to 3 ChaverHub-verified contractors reach out with real availability, not voicemail tag.",
  },
  {
    icon: <Wrench className="h-6 w-6" aria-hidden />,
    title: "Get It Fixed — B'ezras Hashem",
    body: "Compare quotes, read community reviews, and book the pro who fits. Done.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      aria-labelledby="how-heading"
      className="bg-cream"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brass-dark">
            How It Works
          </span>
          <h2
            id="how-heading"
            className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            From broken to fixed in three simple steps.
          </h2>
          <p className="text-balance text-base leading-relaxed text-ink-muted md:text-lg">
            No cousin-calling. No WhatsApp chat spamming. Just a straight line to
            a trusted pro.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="group relative rounded-2xl border border-border-soft bg-cream p-7 pt-10 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-brass focus-within:-translate-y-1 focus-within:shadow-brass md:p-8 md:pt-12"
            >
              <span
                aria-hidden
                className="absolute -left-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-brass font-serif text-xl font-bold text-navy shadow-brass ring-4 ring-cream"
              >
                {i + 1}
              </span>

              <span
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy ring-1 ring-navy/10"
                aria-hidden
              >
                {step.icon}
              </span>

              <h3 className="mt-5 font-serif text-xl font-semibold text-navy md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted md:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex justify-center">
          <Link href="/quote" aria-label="Get started — it is free">
            <Button variant="brass" size="lg">
              Get Started — It&rsquo;s Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
