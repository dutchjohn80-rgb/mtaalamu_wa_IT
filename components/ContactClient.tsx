"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { languageCopy, site } from "@/data/site";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const locale = (searchParams.get("lang") === "en" ? "en" : "sw") as "sw" | "en";
  const copy = languageCopy[locale];
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: locale === "sw" ? "Website" : "Website",
    timeline: locale === "sw" ? "Katika mwezi 1-2" : "Within 1-2 months",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(locale === "sw" ? `Mradi mpya kutoka ${form.name}` : `New project inquiry from ${form.name}`);
    const body = encodeURIComponent(
      locale === "sw"
        ? `Jina: ${form.name}\nBarua pepe: ${form.email}\nAina ya mradi: ${form.projectType}\nMuda unaohitajika: ${form.timeline}\n\nMaelezo:\n${form.message}`
        : `Name: ${form.name}\nEmail: ${form.email}\nProject type: ${form.projectType}\nTimeline: ${form.timeline}\n\nProject details:\n${form.message}`
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <section className="wrap hero">
        <p className="kicker">{copy.contact.kicker}</p>
        <h1 className="sec-title" style={{ marginTop: 16, maxWidth: "12ch" }}>{copy.contact.title}</h1>
      </section>

      <section className="wrap section" style={{ paddingTop: 32 }}>
        <div className="contact-layout">
          <div className="contact-card">
            <a className="big-link small-link" href={`mailto:${site.email}`} data-cursor={locale === "sw" ? "Andika" : "Write"}>
              <small>{copy.contact.emailLabel}</small>
              {site.email}
            </a>
            <div style={{ marginTop: 32 }}>
              <div className="row"><h3>{copy.contact.phoneLabel}</h3><div className="body"><p><a href={`tel:${site.phoneHref}`}>{site.phone}</a></p></div></div>
              <div className="row"><h3>{copy.contact.githubLabel}</h3><div className="body"><p><a href={site.github}>{site.githubLabel}</a></p></div></div>
              <div className="row"><h3>{copy.contact.locationLabel}</h3><div className="body"><p>{site.location}</p></div></div>
              <div className="row">
                <h3>{copy.contact.noteLabel}</h3>
                <div className="body"><ul>
                  {copy.contact.notePoints.map((point) => <li key={point}>{point}</li>)}
                </ul></div>
              </div>
            </div>
          </div>

          <form className="inquiry-form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name">{locale === "sw" ? "Jina" : "Name"}</label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
            </div>
            <div className="field-group">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
            </div>
            <div className="field-grid">
              <div className="field-group">
                <label htmlFor="projectType">{locale === "sw" ? "Aina ya mradi" : "Project type"}</label>
                <select id="projectType" name="projectType" value={form.projectType} onChange={handleChange}>
                  <option value={locale === "sw" ? "Website" : "Website"}>{locale === "sw" ? "Website" : "Website"}</option>
                  <option value={locale === "sw" ? "Mfumo wa biashara" : "Business system"}>{locale === "sw" ? "Mfumo wa biashara" : "Business system"}</option>
                  <option value={locale === "sw" ? "Programu ya simu" : "Mobile app"}>{locale === "sw" ? "Programu ya simu" : "Mobile app"}</option>
                  <option value={locale === "sw" ? "Mafunzo ya IT" : "IT training"}>{locale === "sw" ? "Mafunzo ya IT" : "IT training"}</option>
                </select>
              </div>
              <div className="field-group">
                <label htmlFor="timeline">{locale === "sw" ? "Muda unaohitajika" : "Timeline"}</label>
                <select id="timeline" name="timeline" value={form.timeline} onChange={handleChange}>
                  <option value={locale === "sw" ? "Katika mwezi 1-2" : "Within 1-2 months"}>{locale === "sw" ? "Katika mwezi 1-2" : "Within 1-2 months"}</option>
                  <option value={locale === "sw" ? "Katika mwezi 3-6" : "Within 3-6 months"}>{locale === "sw" ? "Katika mwezi 3-6" : "Within 3-6 months"}</option>
                  <option value={locale === "sw" ? "Ninahitaji ushauri kwanza" : "I need advice first"}>{locale === "sw" ? "Ninahitaji ushauri kwanza" : "I need advice first"}</option>
                </select>
              </div>
            </div>
            <div className="field-group">
              <label htmlFor="message">{locale === "sw" ? "Maelezo ya mradi" : "Project details"}</label>
              <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} required placeholder={locale === "sw" ? "Andika lengo, mahitaji na vipengele vya mradi..." : "Describe your goals, needs, and key features..."} />
            </div>
            <button type="submit" className="btn primary submit-btn">
              {locale === "sw" ? "Tuma ujumla" : "Send inquiry"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
