import Link from "next/link";

const sections = [
  {
    sw: "Sera ya faragha",
    en: "Privacy Policy",
    body: {
      sw: "Tumeweka makubaliano ya faragha kwa lengo la kukuhakikishia kwamba taarifa zako zinatumiwa kwa usalama, kwa makusudi na kwa uangalifu wa kutosha.",
      en: "This privacy policy explains how we collect, use, protect, and manage personal information in a secure and transparent way.",
    },
  },
  {
    sw: "Taarifa tunazokusanya",
    en: "Information we collect",
    body: {
      sw: "Tunaweza kukusanya taarifa za mawasiliano kama vile jina, anwani ya barua pepe, namba ya simu, maelezo ya mradi, na habari yoyote unayotoa kupitia fomu za mawasiliano au barua pepe.",
      en: "We may collect contact information such as your name, email address, phone number, project details, and any information you provide through contact forms or email communication.",
    },
  },
  {
    sw: "Matumizi ya taarifa",
    en: "How information is used",
    body: {
      sw: "Taarifa hizi hutumiwa kupambanua ombi lako, kujadili mradi, kutoa huduma inayofaa, na kuwasiliana nawe kuhusu kazi, mafunzo au usaidizi unaohitajika.",
      en: "This information is used to understand your request, discuss your project, provide the relevant service, and communicate with you about work, training, or support you may need.",
    },
  },
  {
    sw: "Usalama",
    en: "Security",
    body: {
      sw: "Tunachukua hatua za msingi za usalama wa taarifa, ikijumuisha kutumia mifumo ya kuaminika, kupunguza ufikiaji usio wa lazima, na kuhifadhi taarifa kwa usaidizi wa uaminifu.",
      en: "We take reasonable security measures to protect personal information, including trusted systems, limited access, and careful handling of data.",
    },
  },
  {
    sw: "Kutoka kwenye taarifa",
    en: "Sharing of information",
    body: {
      sw: "Taarifa za kibinafsi hazitashirikiwa kwa watu wengine bila idhini yako isipokuwa kwa sababu za kisheria au kwa kufikia huduma zinazohitajika kwa ajili ya kutekeleza kazi.",
      en: "Personal information is not shared with third parties without your consent, except where required by law or necessary to deliver the service requested.",
    },
  },
  {
    sw: "Haki zako",
    en: "Your rights",
    body: {
      sw: "Una haki ya kuuliza kuhusu taarifa zako, kurekebisha makosa, na kukataa mawasiliano ya uhakika yanayotokana na ombi lako kwa kuwasiliana nasi kupitia barua pepe au namba ya simu iliyotangazwa kwenye tovuti.",
      en: "You may request access to your information, ask for corrections, or opt out of non-essential communication by contacting us through the contact details published on the website.",
    },
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="wrap legal-shell">
      <div className="legal-page">
        <p className="kicker">John Dutch</p>
        <h1>Privacy Policy / Sera ya Faragha</h1>
        <p className="legal-intro">
          This page is provided in English and Swahili for clarity and transparency. / Ukurasa huu umeandikwa kwa Kiingereza na Kiswahili ili kuweka uwazi na uwazi wa matumizi ya taarifa.
        </p>

        {sections.map((section) => (
          <section key={section.sw} className="legal-card">
            <h2>{section.sw} / {section.en}</h2>
            <p>
              <strong>Kiswahili:</strong> {section.body.sw}
            </p>
            <p>
              <strong>English:</strong> {section.body.en}
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
