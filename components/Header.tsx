"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { localeLabels, navByLocale, site } from "@/data/site";
import ArushaClock from "./ArushaClock";

function withLocale(href: string, locale: "sw" | "en") {
  const url = new URL(href, "http://localhost");
  url.searchParams.set("lang", locale);
  return `${url.pathname}${url.search}${url.hash}`;
}

export default function Header() {
  const path = usePathname();
  const router = useRouter();
  const [locale, setLocale] = useState<"sw" | "en">("sw");

  useEffect(() => {
    const nextLocale = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "sw";
    setLocale(nextLocale);
  }, [path]);

  const nav = useMemo(() => navByLocale[locale], [locale]);

  const setLocaleAndNavigate = (nextLocale: "sw" | "en") => {
    const nextParams = new URLSearchParams(window.location.search);
    nextParams.set("lang", nextLocale);
    const nextUrl = `${path}?${nextParams.toString()}`;
    setLocale(nextLocale);
    router.replace(nextUrl);
  };

  return (
    <header className="bar">
      <div className="wrap nav">
        <Link className="brand" href={withLocale("/", locale)}>{site.name}<span>.</span></Link>
        <ArushaClock />
        <nav aria-label="Menyu kuu">
          <ul className="links">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={withLocale(n.href, locale)} className={n.cta ? "pill" : undefined} aria-current={path === n.href ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button type="button" onClick={() => setLocaleAndNavigate("sw")} aria-label="Swahili" style={{ opacity: locale === "sw" ? 1 : 0.6, fontWeight: 700, background: "transparent", border: "1px solid var(--line)", color: "var(--ink)", borderRadius: 999, padding: "6px 10px", cursor: "pointer" }}>
            {localeLabels.sw}
          </button>
          <button type="button" onClick={() => setLocaleAndNavigate("en")} aria-label="English" style={{ opacity: locale === "en" ? 1 : 0.6, fontWeight: 700, background: "transparent", border: "1px solid var(--line)", color: "var(--ink)", borderRadius: 999, padding: "6px 10px", cursor: "pointer" }}>
            {localeLabels.en}
          </button>
        </div>
      </div>
    </header>
  );
}
