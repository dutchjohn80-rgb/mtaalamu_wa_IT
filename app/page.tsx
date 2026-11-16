import Link from "next/link";
import type { CSSProperties } from "react";
import HeroTitle from "@/components/HeroTitle";
import RotatingWords from "@/components/RotatingWords";
import Magnetic from "@/components/Magnetic";
import Marquee from "@/components/Marquee";
import ProjectArt from "@/components/ProjectArt";
import { site, services, projects, marquee, band2, roles } from "@/data/site";

export default function Home() {
  return (
    <>
      <section className="wrap hero">
        <p className="kicker">Arusha, Tanzania</p>
        <HeroTitle first="John" last="Dutch" />
        <p className="role">Mimi ni <RotatingWords words={roles} /></p>
        <div className="hero-bottom">
          <p className="lead">
            Nasaidia biashara, vituo vya afya na mashirika kupata website, mifumo
            na mitandao ya uhakika. Chini kuna kazi nilizojenga.
          </p>
          <div className="actions">
            <Magnetic><a className="btn primary" href="#kazi">Ona kazi zangu</a></Magnetic>
            <Magnetic><Link className="btn ghost" href="/wasiliana">Wasiliana nami</Link></Magnetic>
          </div>
        </div>
      </section>

      <Marquee items={marquee} />

      <section className="wrap section" id="kazi">
        <div className="sec-head">
          <h2 className="sec-title">Kazi zangu</h2>
          <p className="lead">Mifumo halisi niliyojenga. Bonyeza kila kazi kuiona kwa undani.</p>
        </div>
        <div className="stack">
          {projects.map((p, i) => (
            <Link
              key={p.slug}
              className="panel"
              href={`/kazi/${p.slug}`}
              data-cursor="Angalia"
              style={{ "--bg": p.bg, "--fg": p.fg, "--i": i } as CSSProperties}
            >
              <div className="pinfo">
                <span className="pnum">0{i + 1} / 0{projects.length}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <p className="pstack">{p.stack}</p>
                <span className="pgo">Angalia kazi</span>
              </div>
              <div className="part"><ProjectArt kind={p.kind} label={p.title} color={p.bg} /></div>
            </Link>
          ))}
        </div>
        <p className="lead">
          Msimbo zaidi uko <a href={site.github} style={{ color: "var(--accent)", fontWeight: 700 }}>GitHub</a>.
        </p>
      </section>

      <section className="wrap section" id="huduma">
        <div className="sec-head">
          <h2 className="sec-title">Huduma</h2>
          <p className="lead">Kuanzia website rahisi hadi mfumo kamili wenye programu ya simu na mtandao.</p>
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
        <p className="kicker">Mtaani kwetu</p>
        <p className="statement" style={{ marginTop: 20 }}>
          Naishi na kufanya kazi <em>Arusha</em>. Nimefanya kazi za IT kwenye hospitali
          na vituo vya afya vya hapa, nimejenga website ya shirika la kijamii, na sasa
          nafundisha vijana kuandika programu.
        </p>
      </section>

      <div style={{ marginTop: 96 }}>
        <Marquee items={band2} variant="stroke" reverse />
      </div>

      <section className="wrap section">
        <a className="big-link" href={`mailto:${site.email}`} data-cursor="Andika">
          <small>Una biashara au wazo?</small>
          Tufanye kazi pamoja →
        </a>
      </section>
    </>
  );
}
