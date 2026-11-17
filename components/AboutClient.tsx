"use client";

import { useSearchParams } from "next/navigation";
import { education, experience, languages, skills, site, languageCopy } from "@/data/site";

const h2 = { fontSize: "clamp(48px,8vw,110px)", marginBottom: 32 } as const;

export default function AboutClient() {
  const searchParams = useSearchParams();
  const locale = (searchParams.get("lang") === "en" ? "en" : "sw") as "sw" | "en";
  const copy = languageCopy[locale];

  return (
    <>
      <section className="wrap hero">
        <p className="kicker">{copy.about.kicker}</p>
        <h1 className="sec-title" style={{ marginTop: 16, maxWidth: "14ch" }}>{copy.about.title}</h1>
      </section>

      <section className="wrap section" style={{ paddingTop: 32 }}>
        <div className="prose">
          <p>
            {locale === "sw"
              ? "Mimi ni John Dutch, mtaalamu wa IT na mwalimu. Nimesoma Teknolojia ya Habari (Bachelor of IT) Arusha Technical College, na nimefanya kazi za IT kwenye hospitali na vituo vya afya vya Arusha, nikitunza mitandao, kompyuta na mifumo kama GoT-HOMIS na DHIS2."
              : "I am John Dutch, an IT specialist and teacher. I studied Information Technology (Bachelor of IT) at Arusha Technical College, and I have worked in IT across hospitals and health centers in Arusha, supporting networks, computers, and systems such as GoT-HOMIS and DHIS2."}
          </p>
          <p>
            {locale === "sw"
              ? "Leo nafundisha programu, web development na usalama wa mitandao Arusha Computing Centre, na ninachukua kazi za website, mifumo na programu za simu. Zana zangu kuu ni Laravel, Django, React, Astro na Flutter."
              : "Today I teach programming, web development, and network security at Arusha Computing Centre, and I take on website, system, and mobile app projects. My main tools are Laravel, Django, React, Astro, and Flutter."}
          </p>
        </div>
        <div style={{ marginTop: 56 }}>
          <div className="row"><h3>{locale === "sw" ? "Naishi" : "Based in"}</h3><div className="body"><p>{site.location}</p></div></div>
          <div className="row"><h3>{locale === "sw" ? "Sasa hivi" : "Current"}</h3><div className="body"><p>{copy.about.current}</p></div></div>
          <div className="row"><h3>{locale === "sw" ? "Lugha" : "Languages"}</h3><div className="body"><p>{languages}</p></div></div>
          <div className="row"><h3>{locale === "sw" ? "Msimbo" : "Code"}</h3><div className="body"><p><a href={site.github}>{site.githubLabel}</a></p></div></div>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="sec-title" style={h2}>{locale === "sw" ? "Kazi nilizofanya" : "Work experience"}</h2>
        {experience.map((e) => (
          <div className="row" key={e.when + e.role}>
            <p className="when">{e.when}</p>
            <div className="body"><h3>{e.role}</h3><p>{e.org}</p><ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
          </div>
        ))}
      </section>

      <section className="wrap section">
        <h2 className="sec-title" style={h2}>{locale === "sw" ? "Elimu" : "Education"}</h2>
        {education.map((e) => (
          <div className="row" key={e.when}>
            <p className="when">{e.when}</p>
            <div className="body"><h3>{e.title}</h3><p>{e.school}</p></div>
          </div>
        ))}
      </section>

      <section className="wrap section">
        <h2 className="sec-title" style={h2}>{locale === "sw" ? "Ujuzi" : "Skills"}</h2>
        {skills.map((s) => (
          <div className="row" key={s.group}>
            <h3>{s.group}</h3>
            <div className="chips">{s.text.split(", ").map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          </div>
        ))}
        <p className="lead" style={{ marginTop: 32 }}>{locale === "sw" ? "Wadhamini (referees) wanapatikana ukiomba." : "References are available on request."}</p>
      </section>
    </>
  );
}
