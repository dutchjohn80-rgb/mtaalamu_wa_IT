import type { Metadata } from "next";
import { site, experience, education, skills, languages } from "@/data/site";

export const metadata: Metadata = {
  title: "Kuhusu",
  description: "Kuhusu John Dutch, mtaalamu wa IT na mwalimu kutoka Arusha.",
};

const h2 = { fontSize: "clamp(48px,8vw,110px)", marginBottom: 32 } as const;

export default function About() {
  return (
    <>
      <section className="wrap hero">
        <p className="kicker">Kuhusu mimi</p>
        <h1 className="sec-title" style={{ marginTop: 16, maxWidth: "14ch" }}>Kutoka mitandao ya hospitali hadi mifumo ya mtandaoni.</h1>
      </section>

      <section className="wrap section" style={{ paddingTop: 32 }}>
        <div className="prose">
          <p>
            Mimi ni John Dutch, mtaalamu wa IT na mwalimu. Nimesoma Teknolojia ya
            Habari (Bachelor of IT) Arusha Technical College, na nimefanya kazi za
            IT kwenye hospitali na vituo vya afya vya Arusha, nikitunza mitandao,
            kompyuta na mifumo kama GoT-HOMIS na DHIS2.
          </p>
          <p>
            Leo nafundisha programu, web development na usalama wa mitandao Arusha
            Computing Centre, na ninachukua kazi za website, mifumo na programu za
            simu. Zana zangu kuu ni Laravel, Django, React, Astro na Flutter.
          </p>
        </div>
        <div style={{ marginTop: 56 }}>
          <div className="row"><h3>Naishi</h3><div className="body"><p>{site.location}</p></div></div>
          <div className="row"><h3>Sasa hivi</h3><div className="body"><p>Mwalimu wa IT, Arusha Computing Centre</p></div></div>
          <div className="row"><h3>Lugha</h3><div className="body"><p>{languages}</p></div></div>
          <div className="row"><h3>Msimbo</h3><div className="body"><p><a href={site.github}>{site.githubLabel}</a></p></div></div>
        </div>
      </section>

      <section className="wrap section">
        <h2 className="sec-title" style={h2}>Kazi nilizofanya</h2>
        {experience.map((e) => (
          <div className="row" key={e.when + e.role}>
            <p className="when">{e.when}</p>
            <div className="body"><h3>{e.role}</h3><p>{e.org}</p><ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul></div>
          </div>
        ))}
      </section>

      <section className="wrap section">
        <h2 className="sec-title" style={h2}>Elimu</h2>
        {education.map((e) => (
          <div className="row" key={e.when}>
            <p className="when">{e.when}</p>
            <div className="body"><h3>{e.title}</h3><p>{e.school}</p></div>
          </div>
        ))}
      </section>

      <section className="wrap section">
        <h2 className="sec-title" style={h2}>Ujuzi</h2>
        {skills.map((s) => (
          <div className="row" key={s.group}>
            <h3>{s.group}</h3>
            <div className="chips">{s.text.split(", ").map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          </div>
        ))}
        <p className="lead" style={{ marginTop: 32 }}>Wadhamini (referees) wanapatikana ukiomba.</p>
      </section>
    </>
  );
}
