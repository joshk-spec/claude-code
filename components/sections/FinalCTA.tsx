import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

const WHATSAPP_URL =
  "https://wa.me/17325551234?text=Hi%20ChaverHub%2C%20I%27d%20like%20help%20finding%20a%20contractor.";

export function FinalCTA() {
  return (
    <section
      id="get-started"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-navy-light via-navy to-navy-dark text-cream"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brass/20 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-brass/15 blur-3xl"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-10 top-10 h-24 w-24 rounded-full border border-brass/25"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-10 right-10 h-32 w-32 rounded-full border border-brass/20"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-24 text-center md:py-28">
        <h2
          id="final-cta-heading"
          className="text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-5xl md:text-6xl"
        >
          Ready to find your{" "}
          <em className="not-italic bg-gradient-to-r from-brass-light to-brass bg-clip-text italic text-transparent">
            pro?
          </em>
        </h2>

        <p className="max-w-xl text-balance text-base leading-relaxed text-cream/80 md:text-lg">
          Tell us what&rsquo;s broken and we&rsquo;ll connect you with up to 3 vetted
          ChaverHub contractors — usually within the hour.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <Link href="/quote" aria-label="Get a free quote">
            <Button variant="brass" size="lg">
              Get a Free Quote
            </Button>
          </Link>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with ChaverHub on WhatsApp"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-cream/30 bg-transparent px-6 text-base font-medium text-cream transition-colors hover:border-cream hover:bg-cream/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
