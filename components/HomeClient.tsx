"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import HeroTitle from "@/components/HeroTitle";
import RotatingWords from "@/components/RotatingWords";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import ProjectArt from "@/components/ProjectArt";
import { band2ByLocale, faqItemsByLocale, impactStatsByLocale, languageCopy, marqueeByLocale, processByLocale, projectsByLocale, rolesByLocale, servicePackagesByLocale, servicesByLocale, site, testimonialsByLocale, trustHighlightsByLocale } from "@/data/site";

export default function HomeClient() {
  const searchParams = useSearchParams();
  const locale = (searchParams.get("lang") === "en" ? "en" : "sw") as "sw" | "en";
  const copy = languageCopy[locale];
  const services = servicesByLocale[locale];
  const projects = projectsByLocale[locale];
  const marquee = marqueeByLocale[locale];
  const band2 = band2ByLocale[locale];
  const roles = rolesByLocale[locale];
  const testimonials = testimonialsByLocale[locale];
  const process = processByLocale[locale];
  const packages = servicePackagesByLocale[locale];
  const faqs = faqItemsByLocale[locale];
  const impactStats = impactStatsByLocale[locale];
  const trustHighlights = trustHighlightsByLocale[locale];

  return (
    <>
      <section className="wrap hero">
        <p className="kicker">{copy.home.kicker}</p>
        <HeroTitle first="John" last="Dutch" />
        <p className="role">{copy.home.rolePrefix} <RotatingWords words={roles} /></p>
        <div className="hero-bottom">
          <p className="lead">
            {locale === "sw"
              ? "Nasaidia biashara, vituo vya afya na mashirika kupata website, mifumo na mitandao ya uhakika. Chini kuna kazi nilizojenga."
              : "I help businesses, health organizations, and institutions launch reliable websites, systems, and networks. Below are projects I have built."}
          </p>
          <div className="actions">
            <Magnetic><a className="btn primary" href={`#kazi?lang=${locale}`}>{copy.home.ctaPrimary}</a></Magnetic>
            <Magnetic><Link className="btn ghost" href={`/wasiliana?lang=${locale}`}>{copy.home.ctaSecondary}</Link></Magnetic>
          </div>
        </div>
      </section>

      <Marquee items={marquee} />

      <section className="wrap section" id="kazi">
        <div className="sec-head">
          <h2 className="sec-title">{copy.home.workTitle}</h2>
          <p className="lead">{copy.home.workLead}</p>
        </div>
        <div className="stack">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              className="panel"
              href={`/kazi/${p.slug}?lang=${locale}`}
              data-cursor={locale === "sw" ? "Angalia" : "View"}
              style={{ "--bg": p.bg, "--fg": p.fg, "--i": i } as CSSProperties}
            >
              <div className="pinfo">
                <span className="pnum">0{i + 1} / 0{projects.length}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <p className="pstack">{p.stack}</p>
                <span className="pgo">{copy.home.viewProject}</span>
              </div>
              <div className="part"><ProjectArt kind={p.kind} label={p.title} color={p.bg} /></div>
            </Link>
          ))}
        </div>
        <p className="lead">
          {copy.home.github} <a href={site.github} style={{ color: "var(--accent)", fontWeight: 700 }}>GitHub</a>.
        </p>
      </section>

      <section className="wrap section" id="huduma">
        <div className="sec-head">
          <h2 className="sec-title">{copy.home.servicesTitle}</h2>
          <p className="lead">{copy.home.servicesLead}</p>
        </div>
        <div>
          {services.map((s, i) => (
            <div className="svc" key={s.title}>
              <span className="n">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="sec-title">{copy.home.metricsTitle}</h2>
          <p className="lead">{copy.home.metricsLead}</p>
        </div>
        <div className="impact-grid">
          {impactStats.map((stat) => (
            <div className="impact-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="sec-title">{copy.home.trustTitle}</h2>
          <p className="lead">{copy.home.trustLead}</p>
        </div>
        <div className="trust-grid">
          {trustHighlights.map((item) => (
            <article className="trust-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="sec-title">{locale === "sw" ? "Mipango ya huduma" : "Service packages"}</h2>
          <p className="lead">{locale === "sw" ? "Chaguzi za huduma zilizotengenezwa kwa miradi ndogo, ya biashara na ya kazi za ndani." : "Flexible options for small businesses, institutions, and growing teams."}</p>
        </div>
        <div className="package-grid">
          {packages.map((pkg) => (
            <div className={`package-card ${pkg.featured ? "featured" : ""}`} key={pkg.name}>
              <span className="package-badge">{pkg.badge}</span>
              <h3>{pkg.name}</h3>
              <p className="package-price">{pkg.price}</p>
              <ul>
                {pkg.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <Link className="btn ghost" href={`/wasiliana?lang=${locale}`}>
                {locale === "sw" ? "Tafadhali uliza" : "Ask for quote"}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="sec-title">{locale === "sw" ? "Wahudumu wetu" : "What clients say"}</h2>
          <p className="lead">{locale === "sw" ? "Mawasiliano ya kweli kutoka kwa wateja na washirika." : "Real feedback from people who needed practical digital solutions."}</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <p className="quote">“{item.quote}”</p>
              <div className="client-meta">
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="sec-title">{locale === "sw" ? "Mtazamo wa kazi" : "How I work"}</h2>
          <p className="lead">{locale === "sw" ? "Mchakato rahisi, wazi na unaoendeshwa kwa mawasiliano ya karibu." : "A simple, transparent process from idea to live delivery."}</p>
        </div>
        <div className="process-grid">
          {process.map((step, index) => (
            <div className="process-card" key={step.title}>
              <span className="process-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <div className="sec-head">
          <h2 className="sec-title">{locale === "sw" ? "Maswali ya mara kwa mara" : "Frequently asked questions"}</h2>
          <p className="lead">{locale === "sw" ? "Majibu kwa maswali ya kawaida kuhusu mradi, usaidizi na mafunzo." : "Quick answers to common questions about projects, support, and training."}</p>
        </div>
        <div className="faq-list">
          {faqs.map((item) => (
            <div className="faq-item" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap section">
        <p className="kicker">{locale === "sw" ? "Mtaani kwetu" : "Where I work"}</p>
        <p className="statement" style={{ marginTop: 20 }}>
          {copy.home.statement}
        </p>
      </section>

      <div style={{ marginTop: 96 }}>
        <Marquee items={band2} variant="stroke" reverse />
      </div>

      <section className="wrap section">
        <div className="cta-row">
          <a className="big-link cta-link" href={`mailto:${site.email}?subject=${encodeURIComponent(locale === "sw" ? "Kazi mpya" : "New project")}`} data-cursor={locale === "sw" ? "Andika" : "Write"}>
            <small>{copy.home.ctaBigSmall}</small>
            {copy.home.ctaBig}
          </a>
          <a className="wa-button" href={site.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
