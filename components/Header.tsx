"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav, site } from "@/data/site";
import ArushaClock from "./ArushaClock";

export default function Header() {
  const path = usePathname();
  return (
    <header className="bar">
      <div className="wrap nav">
        <Link className="brand" href="/">{site.name}<span>.</span></Link>
        <ArushaClock />
        <nav aria-label="Menyu kuu">
          <ul className="links">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={n.cta ? "pill" : undefined} aria-current={path === n.href ? "page" : undefined}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
