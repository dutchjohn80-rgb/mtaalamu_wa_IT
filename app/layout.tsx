import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "John Dutch | IT Specialist, Web Developer & Trainer in Arusha", template: "%s | John Dutch" },
  description: site.summaryEn,
  keywords: [
    "John Dutch",
    "IT specialist Arusha",
    "website developer Tanzania",
    "web design Arusha",
    "business systems",
    "mobile apps",
    "network support",
    "IT training",
  ],
  authors: [{ name: "John Dutch" }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "John Dutch | IT Specialist, Web Developer & Trainer",
    description: site.summaryEn,
    siteName: "John Dutch",
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Dutch | IT Specialist, Web Developer & Trainer",
    description: site.summaryEn,
  },
};

export const viewport: Viewport = { themeColor: "#0b0b0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sw" data-scroll-behavior="smooth">
      <body>
        <a className="skip" href="#main">Ruka hadi kwenye maudhui</a>
        <ScrollProgress />
        <Cursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
