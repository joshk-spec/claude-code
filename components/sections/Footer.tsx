import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

const COLUMN_CHAVERHUB: NavItem[] = [
  { label: "About Us", href: "/about" },
  { label: "How It Works", href: "/#how" },
  { label: "Contact", href: "/contact" },
  { label: "Press / Media", href: "/press" },
];

const COLUMN_HOMEOWNERS: NavItem[] = [
  { label: "Request a Quote", href: "/quote" },
  { label: "Browse Contractors", href: "/contractors" },
  { label: "Reviews", href: "/reviews" },
  { label: "Emergency Service", href: "/quote?urgent=1" },
];

const COLUMN_CONTRACTORS: NavItem[] = [
  { label: "Join ChaverHub", href: "/contractors/apply" },
  { label: "Pricing", href: "/contractors/pricing" },
  { label: "Contractor Login", href: "/contractors/login" },
  { label: "Partner Resources", href: "/contractors/resources" },
];

const LEGAL_LINKS: NavItem[] = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Accessibility", href: "/accessibility" },
];

const SOCIAL_LINKS: {
  label: string;
  href: string;
  icon: React.ReactNode;
  external?: boolean;
}[] = [
  {
    label: "Chat on WhatsApp",
    href: "https://wa.me/15551234567",
    icon: <MessageCircle className="h-4 w-4" aria-hidden />,
    external: true,
  },
  {
    label: "Call ChaverHub",
    href: "tel:+15551234567",
    icon: <Phone className="h-4 w-4" aria-hidden />,
  },
  {
    label: "Email ChaverHub",
    href: "mailto:hello@chaverhub.com",
    icon: <Mail className="h-4 w-4" aria-hidden />,
  },
];

function FooterLink({ item }: { item: NavItem }) {
  const className =
    "inline-flex rounded-sm text-sm text-cream/70 transition-colors hover:text-brass focus-visible:text-brass focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark";

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

function FooterColumn({
  heading,
  items,
}: {
  heading: string;
  items: NavItem[];
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brass">
        {heading}
      </p>
      <ul className="mt-5 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item.href + item.label}>
            <FooterLink item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy-dark text-cream">
      <div
        className="mx-auto max-w-6xl px-6"
        style={{ paddingTop: "70px", paddingBottom: "30px" }}
      >
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-12">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              aria-label="ChaverHub home"
              className="inline-flex items-center gap-2.5 self-start rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark"
            >
              <span
                aria-hidden
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-cream font-serif text-xl font-bold text-brass-dark"
              >
                C
              </span>
              <span className="font-serif text-xl font-semibold tracking-tight text-cream">
                ChaverHub
              </span>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-cream/70">
              The trusted hub for home services in the frum community. HVAC,
              plumbing, electrical, appliance, and roofing — done the heimish
              way.
            </p>

            <ul className="mt-1 flex items-center gap-3">
              {SOCIAL_LINKS.map((s) => {
                const base =
                  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 bg-cream/5 text-cream transition-all hover:-translate-y-0.5 hover:border-brass hover:bg-brass hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-navy-dark";
                return (
                  <li key={s.label}>
                    {s.external ? (
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className={base}
                      >
                        {s.icon}
                      </a>
                    ) : (
                      <a href={s.href} aria-label={s.label} className={base}>
                        {s.icon}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <FooterColumn heading="ChaverHub" items={COLUMN_CHAVERHUB} />
          <FooterColumn heading="For Homeowners" items={COLUMN_HOMEOWNERS} />
          <FooterColumn heading="For Contractors" items={COLUMN_CONTRACTORS} />
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-brass/20 pt-6 text-center md:flex-row md:text-left">
          <p className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-cream/60 md:justify-start">
            <span>© ChaverHub 2026</span>
            {LEGAL_LINKS.map((item) => (
              <span key={item.href} className="flex items-center gap-2">
                <span aria-hidden className="text-cream/30">
                  ·
                </span>
                <FooterLink item={item} />
              </span>
            ))}
          </p>

          <p className="font-serif text-sm italic text-brass-light">
            B&rsquo;ezras Hashem, serving our community b&rsquo;ahava.
          </p>
        </div>
      </div>
    </footer>
  );
}
