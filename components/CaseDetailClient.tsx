"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { CSSProperties } from "react";
import ProjectArt from "@/components/ProjectArt";
import { languageCopy, projectsByLocale, site } from "@/data/site";

export default function CaseDetailClient({ slug }: { slug: string }) {
  const searchParams = useSearchParams();
  const locale = (searchParams.get("lang") === "en" ? "en" : "sw") as "sw" | "en";
  const localizedProjects = projectsByLocale[locale];
  const i = localizedProjects.findIndex((x) => x.slug === slug);
  if (i < 0) return null;

  const p = localizedProjects[i];
  const next = localizedProjects[(i + 1) % localizedProjects.length];
  const copy = languageCopy[locale];

  return (
    <>
      <section className="case-hero" style={{ "--bg": p.bg, "--fg": p.fg } as CSSProperties}>
        <div className="wrap">
          <Link href={`/?lang=${locale}#kazi`} style={{ font: "500 14px var(--mono)", textTransform: "uppercase", letterSpacing: ".1em" }}>← {copy.project.back}</Link>
          <h1>{p.title}</h1>
          <p className="lead">{p.summary}</p>
        </div>
      </section>

      <div className="case-art"><ProjectArt kind={p.kind} label={p.title} color={p.bg} /></div>

      <section className="wrap section">
        <div className="cols">
          <div>
            <h2>{locale === "sw" ? "Nilichojenga" : "What I built"}</h2>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            <h2>{locale === "sw" ? "Teknolojia" : "Technology"}</h2>
            <div className="chips">{p.stack.split(", ").map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <Link className="next" href={`/kazi/${next.slug}?lang=${locale}`} data-cursor={copy.project.follow} style={{ "--bg": next.bg, "--fg": next.fg } as CSSProperties}>
          <small>{copy.project.next}</small>
          <span className="t">{next.title} →</span>
        </Link>
      </section>

      <section className="wrap section">
        <a className="big-link" href={`mailto:${site.email}`} data-cursor={copy.project.email}>
          <small>{locale === "sw" ? "Unahitaji kitu kama hiki?" : "Need something like this?"}</small>
          {locale === "sw" ? "Niandikie →" : "Email me →"}
        </a>
      </section>
    </>
  );
}
