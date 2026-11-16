import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import ProjectArt from "@/components/ProjectArt";
import { projects, site } from "@/data/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = projects.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const p = projects[i];
  const next = projects[(i + 1) % projects.length];

  return (
    <>
      <section className="case-hero" style={{ "--bg": p.bg, "--fg": p.fg } as CSSProperties}>
        <div className="wrap">
          <Link href="/#kazi" style={{ font: "500 14px var(--mono)", textTransform: "uppercase", letterSpacing: ".1em" }}>← Kazi zote</Link>
          <h1>{p.title}</h1>
          <p className="lead">{p.summary}</p>
        </div>
      </section>

      <div className="case-art"><ProjectArt kind={p.kind} label={p.title} color={p.bg} /></div>

      <section className="wrap section">
        <div className="cols">
          <div>
            <h2>Nilichojenga</h2>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            <h2>Teknolojia</h2>
            <div className="chips">{p.stack.split(", ").map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="wrap section">
        <Link className="next" href={`/kazi/${next.slug}`} data-cursor="Fuata" style={{ "--bg": next.bg, "--fg": next.fg } as CSSProperties}>
          <small>Kazi inayofuata</small>
          <span className="t">{next.title} →</span>
        </Link>
      </section>

      <section className="wrap section">
        <a className="big-link" href={`mailto:${site.email}`} data-cursor="Andika">
          <small>Unahitaji kitu kama hiki?</small>
          Niandikie →
        </a>
      </section>
    </>
  );
}
