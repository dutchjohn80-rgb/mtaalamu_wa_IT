import Link from "next/link";

const clauses = [
  {
    sw: "Kuhusu ukurasa wa masharti",
    en: "About these terms",
    body: {
      sw: "Ukurasa huu unatoa masharti ya matumizi ya tovuti hii. Kwa kutumia tovuti, unakubali masharti haya kwa ukamilifu.",
      en: "This page outlines the terms for using this website. By using the site, you agree to these terms in full.",
    },
  },
  {
    sw: "Huduma",
    en: "Services",
    body: {
      sw: "Huduma zinajumuisha kubuni na kutengeneza tovuti, mifumo ya biashara, programu za simu, usaidizi wa mitandao, na mafunzo ya IT kulingana na mahitaji ya mradi.",
      en: "Services include website design and development, business systems, mobile apps, IT support, and technical training based on the project requirements.",
    },
  },
  {
    sw: "Bila dhamana ya gharama",
    en: "No guaranteed outcome",
    body: {
      sw: "Licha ya kujitolea kwa ubora wa kazi, matokeo ya mwisho yanategemea mahitaji ya mradi, maelezo ya mtumiaji, na ushirikiano wa mtumiaji wa huduma.",
      en: "While quality is prioritized, final outcomes depend on project scope, client requirements, and the level of collaboration provided by the client.",
    },
  },
  {
    sw: "Ufadhili wa taarifa",
    en: "Content and materials",
    body: {
      sw: "Tovuti, maudhui, picha na faili vinavyotolewa vinatumiwa kwa madhumuni ya mawasiliano na utoaji wa huduma. Hakuna ruhusa ya kutumia vyovyote kwa matumizi yasiyokubalika.",
      en: "The website, content, visuals, and materials are provided for communication and service delivery. They may not be reused beyond what is authorized.",
    },
  },
  {
    sw: "Kusitishwa kwa huduma",
    en: "Service changes",
    body: {
      sw: "Tunahifadhi haki ya kurekebisha, kusitisha, au kukomesha huduma kwa sababu zozote za kiutendaji, za kisheria au za ubora wa kazi.",
      en: "We reserve the right to modify, suspend, or discontinue services when necessary for operational, legal, or quality reasons.",
    },
  },
];

export default function TermsPage() {
  return (
    <main className="wrap legal-shell">
      <div className="legal-page">
        <p className="kicker">John Dutch</p>
        <h1>Terms & Conditions / Masharti ya Matumizi</h1>
        <p className="legal-intro">
          These conditions apply to all use of this website and related digital services. / Masharti haya yanatumika kwa matumizi ya tovuti hii na huduma za kidigitali zinazohusiana.
        </p>

        {clauses.map((clause) => (
          <section key={clause.sw} className="legal-card">
            <h2>{clause.sw} / {clause.en}</h2>
            <p>
              <strong>Kiswahili:</strong> {clause.body.sw}
            </p>
            <p>
              <strong>English:</strong> {clause.body.en}
            </p>
          </section>
        ))}

        <div className="legal-cta">
          <Link href="/" className="btn primary">Back home / Rudi mwanzo</Link>
          <Link href="/wasiliana" className="btn ghost">Contact / Wasiliana</Link>
        </div>
      </div>
    </main>
  );
}
