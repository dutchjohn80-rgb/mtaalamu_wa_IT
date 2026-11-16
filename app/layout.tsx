import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: { default: "John Dutch | Mtaalamu wa IT, Arusha", template: "%s | John Dutch" },
  description: site.summary,
};

export const viewport: Viewport = { themeColor: "#0b0b0c" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sw">
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
