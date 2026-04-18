import Link from "next/link";
import { BadgeCheck, CalendarClock, MapPin, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface FloatCardProps {
  icon: React.ReactNode;
  title: string;
  body: string;
  className?: string;
  animation: "animate-float-slow" | "animate-float-mid" | "animate-float-fast";
}

function FloatCard({ icon, title, body, className, animation }: FloatCardProps) {
  return (
    <div
      className={cn(
        "absolute w-60 rounded-2xl border border-border-soft bg-cream p-4 shadow-soft",
        animation,
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brass/20 text-brass-dark">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-navy">{title}</p>
          <p className="mt-1 text-xs leading-relaxed text-ink-muted">{body}</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 15% 15%, rgba(201, 169, 97, 0.18) 0%, transparent 60%), radial-gradient(55% 55% at 90% 90%, rgba(15, 30, 61, 0.12) 0%, transparent 65%)",
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-6 animate-fade-in-up">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brass/40 bg-brass/10 px-3 py-1 text-xs font-medium text-brass-dark">
            <Star className="h-3.5 w-3.5 fill-brass-dark" aria-hidden />
            Trusted by our community
          </span>

          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl md:text-6xl">
            Home Services Contractors Who{" "}
            <em className="not-italic bg-gradient-to-r from-brass-dark to-brass bg-clip-text italic text-transparent">
              Get Our Community
            </em>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-ink-muted">
            ChaverHub connects frum homeowners with vetted, licensed pros for HVAC,
            plumbing, electrical, appliance repair, and roofing — neighbors who
            respect Shabbos, yom tov, and the way we live.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link href="/quote">
              <Button variant="primary" size="lg">
                Find a Contractor
              </Button>
            </Link>
            <Link href="/contractors/apply">
              <Button variant="secondary" size="lg">
                List Your Business
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto h-[420px] w-full max-w-lg lg:h-[480px]">
          <div className="absolute left-1/2 top-1/2 flex h-56 w-56 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-navy to-navy-dark text-cream shadow-seal ring-8 ring-brass/15 md:h-64 md:w-64">
            <div className="absolute inset-3 rounded-full border border-brass/40" aria-hidden />
            <BadgeCheck className="h-9 w-9 text-brass" aria-hidden />
            <p className="mt-3 font-serif text-lg font-semibold tracking-wide">
              ChaverHub
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-brass">
              Verified
            </p>
          </div>

          <FloatCard
            animation="animate-float-slow"
            className="left-0 top-4 md:-left-6"
            icon={<CalendarClock className="h-5 w-5" aria-hidden />}
            title="Boiler repair — Flatbush"
            body="Matched in 18 minutes"
          />
          <FloatCard
            animation="animate-float-mid"
            className="right-0 top-24 md:-right-6"
            icon={<ShieldCheck className="h-5 w-5" aria-hidden />}
            title="Background checked"
            body="Licensed & insured pros"
          />
          <FloatCard
            animation="animate-float-fast"
            className="bottom-4 left-4 md:left-2"
            icon={<MapPin className="h-5 w-5" aria-hidden />}
            title="Shabbos-aware scheduling"
            body="No surprise calls"
          />
        </div>
      </div>
    </section>
  );
}
