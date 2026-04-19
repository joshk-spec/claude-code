"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface QA {
  q: string;
  a: string;
}

const FAQS: QA[] = [
  {
    q: "Is ChaverHub free for homeowners?",
    a: "Yes — 100% free. Contractors pay us when we connect them with work; you never pay a dime to use ChaverHub.",
  },
  {
    q: "How fast will I hear back?",
    a: "Most homeowners hear from contractors within a few hours. For urgent requests (no heat, active leak, power out) we route within 30 minutes.",
  },
  {
    q: "Are these contractors actually Jewish?",
    a: "Not always — and that's intentional. Some are, some aren't. Every pro on ChaverHub is vetted and has committed to our community standards around Shabbos, yom tov, respectful communication, and dress code inside homes.",
  },
  {
    q: "What if I have a problem with a contractor?",
    a: "Report it. We step in, mediate the issue, and make it right. Repeat offenders are removed from the platform — our name is on the line every time we make a match.",
  },
  {
    q: "Do you cover my area?",
    a: "We cover most of the tri-state, Baltimore, and the Catskills (seasonal). If your area isn't listed, tell us — we're expanding based on where community demand is strongest.",
  },
  {
    q: "How do I know the reviews are real?",
    a: "Only customers who were actually matched through ChaverHub can leave a review. No bot-farm ratings, no paid-for five stars — just real neighbors.",
  },
  {
    q: "Can I request a specific contractor I've used before?",
    a: "Absolutely. Search their name or business directly, or ask for them when you submit a quote request and we'll route to them first.",
  },
];

interface ItemProps {
  faq: QA;
  isOpen: boolean;
  onToggle: () => void;
  panelId: string;
  buttonId: string;
}

function Item({ faq, isOpen, onToggle, panelId, buttonId }: ItemProps) {
  const panelRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border bg-white shadow-soft transition-colors",
        isOpen ? "border-brass/40" : "border-border-soft",
      )}
    >
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-inset"
        >
          <span className="font-serif text-base font-semibold text-navy md:text-lg">
            {faq.q}
          </span>
          <span
            aria-hidden
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
              isOpen
                ? "rotate-45 bg-brass text-navy"
                : "bg-cream text-navy ring-1 ring-border-soft",
            )}
          >
            <Plus className="h-4 w-4" strokeWidth={2.5} />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        ref={panelRef}
        className="grid transition-all duration-300 ease-out"
        style={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-6 text-sm leading-relaxed text-ink-muted md:text-base">
            {faq.a}
          </p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);
  const id = React.useId();

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <div className="flex flex-col items-center gap-5 text-center">
          <span className="inline-flex items-center rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-brass-dark">
            FAQ
          </span>
          <h2
            id="faq-heading"
            className="text-balance font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-5xl"
          >
            Questions? We&rsquo;ve got answers.
          </h2>
        </div>

        <div className="mt-12 flex flex-col gap-3 md:mt-14">
          {FAQS.map((faq, i) => (
            <Item
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex((prev) => (prev === i ? null : i))}
              panelId={`${id}-panel-${i}`}
              buttonId={`${id}-button-${i}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
