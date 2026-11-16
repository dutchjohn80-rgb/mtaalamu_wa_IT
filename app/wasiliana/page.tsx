import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Wasiliana",
  description: "Wasiliana na John Dutch kwa kazi za website, mifumo, programu za simu, mitandao au mafunzo Arusha.",
};

export default function Contact() {
  return (
    <>
      <section className="wrap hero">
        <p className="kicker">Wasiliana</p>
        <h1 className="sec-title" style={{ marginTop: 16, maxWidth: "12ch" }}>Tuzungumze kuhusu kazi yako.</h1>
      </section>

      <section className="wrap section" style={{ paddingTop: 32 }}>
        <a className="big-link" href={`mailto:${site.email}`} data-cursor="Andika">
          <small>Barua pepe</small>
          {site.email}
        </a>
        <div style={{ marginTop: 32 }}>
          <div className="row"><h3>Simu</h3><div className="body"><p><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p></div></div>
          <div className="row"><h3>GitHub</h3><div className="body"><p><a href={site.github}>{site.githubLabel}</a></p></div></div>
          <div className="row"><h3>Mahali</h3><div className="body"><p>{site.location}</p></div></div>
          <div className="row">
            <h3>Niambie</h3>
            <div className="body"><ul>
              <li>Unataka nini kijengwe, kitengenezwe au kifundishwe</li>
              <li>Nani atakitumia</li>
              <li>Unahitaji lini</li>
            </ul></div>
          </div>
        </div>
      </section>
    </>
  );
}
