import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const siteUrl = "https://chaverhub.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ChaverHub — Home Services for the Frum Community",
    template: "%s · ChaverHub",
  },
  description:
    "ChaverHub connects Jewish homeowners with vetted contractors for HVAC, plumbing, electrical, appliance repair, and roofing — rooted in trust, shomer Shabbos friendly.",
  keywords: [
    "frum home services",
    "Jewish contractors",
    "shomer Shabbos contractors",
    "HVAC",
    "plumbing",
    "electrical",
    "appliance repair",
    "roofing",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "ChaverHub",
    title: "ChaverHub — Home Services for the Frum Community",
    description:
      "Find vetted, trusted contractors for your home — from neighbors who understand our values.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "ChaverHub — Home Services for the Frum Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChaverHub — Home Services for the Frum Community",
    description:
      "Find vetted, trusted contractors for your home — from neighbors who understand our values.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-cream text-ink antialiased">
        {children}
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
