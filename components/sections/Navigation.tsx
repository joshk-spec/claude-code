"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#coverage", label: "Coverage" },
  { href: "#for-contractors", label: "For Contractors" },
  { href: "#faq", label: "FAQ" },
] as const;

function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-lg"
      aria-label="ChaverHub home"
    >
      <span
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy font-serif text-xl font-bold text-brass shadow-soft transition-transform group-hover:scale-[1.03]"
        aria-hidden
      >
        C
      </span>
      <span className="font-serif text-xl font-semibold tracking-tight text-navy">
        ChaverHub
      </span>
    </Link>
  );
}

export function Navigation() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileRendered, setMobileRendered] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = React.useCallback(() => {
    setMobileOpen(false);
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMobileRendered(false), 300);
  }, []);

  const openMobile = React.useCallback(() => {
    setMobileRendered(true);
    requestAnimationFrame(() => setMobileOpen(true));
  }, []);

  React.useEffect(() => {
    if (!mobileRendered) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [mobileRendered, closeMobile]);

  React.useEffect(() => {
    if (mobileRendered) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [mobileRendered]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "border-b border-border-soft bg-cream/80 backdrop-blur-md shadow-soft"
          : "border-b border-transparent bg-cream/60 backdrop-blur-sm",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-ink transition-colors hover:text-navy hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link href="/quote" aria-label="Get a quote">
            <Button variant="brass" size="md">
              Get a Quote
            </Button>
          </Link>
        </div>

        <button
          type="button"
          onClick={openMobile}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream md:hidden"
        >
          <Menu className="h-5 w-5" aria-hidden />
        </button>
      </nav>

      {mobileRendered && (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <div
            onClick={closeMobile}
            className={cn(
              "absolute inset-0 bg-navy/40 backdrop-blur-sm transition-opacity duration-300",
              mobileOpen ? "opacity-100" : "opacity-0",
            )}
            aria-hidden
          />
          <div
            id="mobile-menu"
            className={cn(
              "absolute right-0 top-0 flex h-full w-80 max-w-[85%] flex-col gap-6 border-l border-border-soft bg-cream p-6 shadow-soft transition-transform duration-300 ease-out",
              mobileOpen ? "translate-x-0" : "translate-x-full",
            )}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={closeMobile}
                aria-label="Close menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-cream-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-cream"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-cream-dark hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link href="/quote" onClick={closeMobile} className="mt-auto">
              <Button variant="brass" size="lg" className="w-full">
                Get a Quote
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
