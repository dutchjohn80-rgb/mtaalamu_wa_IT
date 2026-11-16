// Maudhui yote ya website yako yako hapa. Hariri faili hili na kurasa zote zitasasishwa.

export const site = {
  name: "John Dutch",
  fullName: "John Ezebius Dutch",
  currentYear: 2026,
  location: "Arusha, Tanzania",
  email: "dutchjohn80@gmail.com",
  phone: "0744 853 054",
  phoneHref: "+255744853054",
  github: "https://github.com/dutchjohn80-rgb",
  githubLabel: "github.com/dutchjohn80-rgb",
  summary:
    "John Dutch ni mtaalamu wa IT na mwalimu kutoka Arusha. Anatengeneza website, mifumo, programu za simu na mitandao.",
};

export const nav = [
  { label: "Kazi", href: "/#kazi" },
  { label: "Huduma", href: "/#huduma" },
  { label: "Kuhusu", href: "/kuhusu" },
  { label: "Wasiliana", href: "/wasiliana", cta: true },
];

export const marquee = ["Website", "Mifumo", "Programu za simu", "Mitandao", "Mafunzo", "Video na michoro"];

export const services = [
  { title: "Website", text: "Website za biashara, taasisi na portfolio zinazopakia haraka na kuonekana vizuri kwenye simu." },
  { title: "Mifumo ya kompyuta", text: "Mfumo wenye API, hifadhidata na dashibodi ya usimamizi kwa ajili ya timu yako (Laravel, Django, React)." },
  { title: "Programu za simu", text: "Programu za Android na iOS kwa Flutter, zilizounganishwa na mfumo wako." },
  { title: "Mitandao na IT support", text: "Kuweka na kutunza mitandao ya ofisi na kompyuta: Cisco, LAN/WAN, firewall, Linux na Windows." },
  { title: "Mifumo ya afya", text: "Msaada wa mifumo kama GoT-HOMIS, DHIS2 na EMR kwa hospitali na vituo vya afya." },
  { title: "Mafunzo", text: "Mafunzo ya vitendo: programu, web development, usalama wa mitandao na graphics design." },
  { title: "Video na michoro", text: "Kuhariri video kwa Premiere Pro na CapCut, na kubuni UI/UX ya website na programu." },
];

// bg = rangi ya kadi, fg = rangi ya maandishi juu yake.
export const projects = [
  {
    slug: "ufuatiliaji-usafiri",
    title: "Ufuatiliaji wa usafiri wa umma",
    kind: "map",
    bg: "#ff4f1f", fg: "#0b0b0c",
    summary: "Mfumo wa kufuatilia magari moja kwa moja kwa GPS, kukadiria muda wa kufika na kuonyesha njia kwenye ramani. Madereva na abiria wana programu zao.",
    features: ["Ufuatiliaji wa GPS wa moja kwa moja", "Makadirio ya muda wa kufika", "Ramani ya njia", "Programu ya dereva na ya abiria (Flutter)", "Dashibodi ya msimamizi (React)"],
    stack: "Laravel 11, Laravel Reverb, Flutter, React, Google Maps SDK",
  },
  {
    slug: "usimamizi-wa-stoo",
    title: "Mfumo wa usimamizi wa stoo",
    kind: "table",
    bg: "#2f5bff", fg: "#ffffff",
    summary: "Programu ya wavuti na ya simu ya kusimamia bidhaa, yenye kuingia kwa usalama na kuhifadhi taarifa za stoo mtandaoni.",
    features: ["Kuingia kwa token salama", "Kuongeza, kuhariri na kufuta bidhaa", "Toleo la wavuti na la simu", "Hifadhidata ya MySQL"],
    stack: "Laravel Sanctum (Railway), React na Tailwind CSS (Vercel), Flutter, MySQL",
  },
  {
    slug: "alaredefo-ngo",
    title: "Website ya ALAREDEFO NGO",
    kind: "lang",
    bg: "#ffd21f", fg: "#0b0b0c",
    summary: "Website ya shirika lisilo la kiserikali yenye lugha mbili (Kiingereza na Kiswahili) na fomu ya mawasiliano inayotuma barua pepe.",
    features: ["Kubadili lugha kati ya Kiingereza na Kiswahili", "Fomu ya mawasiliano inayotuma barua pepe", "Seva ya Express iliyotengwa kwa ajili ya barua", "Imewekwa mtandaoni na inatumika"],
    stack: "React, TypeScript, Tailwind CSS, Express.js, Nodemailer",
  },
  {
    slug: "mfumo-wa-afya",
    title: "Dashibodi ya mfumo wa afya",
    kind: "dash",
    bg: "#3ddc97", fg: "#0b0b0c",
    summary: "Mfumo wa moduli wa kurekodi taarifa za kliniki kwa mpangilio mmoja na kuzionyesha kwa usalama kwenye dashibodi.",
    features: ["REST API ya Laravel", "Dashibodi za React (Vite)", "Taarifa za kliniki zenye mpangilio mmoja"],
    stack: "Laravel REST API, React (Vite)",
  },
];

export const experience = [
  { when: "Okt 2025 hadi sasa", role: "Mwalimu wa IT", org: "Arusha Computing Centre, Arusha", points: ["Nafundisha programu, uhandisi wa programu, web development, graphics design na usalama wa mitandao.", "Nawaongoza wanafunzi wapya kwenye Astro, Django na Laravel.", "Naendesha maabara za vitendo: kuweka routers, kubuni hifadhidata na kuweka mifumo mtandaoni."] },
  { when: "2024 hadi 2025", role: "ICT Support Intern", org: "Mount Meru Regional Referral Hospital, Arusha", points: ["Nilitunza mtandao wa ndani na kompyuta za wafanyakazi.", "Nilitoa msaada wa hifadhidata kwa GoT-HOMIS, DHIS2 na EMR."] },
  { when: "Jul 2023 hadi Ago 2024", role: "Healthcare IT Assistant (field intern)", org: "Arusha Lutheran Medical Centre, Arusha", points: ["Nilikagua vifaa na ufikiaji salama wa vituo vya kazi kwa mujibu wa kanuni za faragha ya data za kituo."] },
  { when: "Mar 2022 hadi Ago 2024", role: "ICT Support Intern", org: "Levolosi Health Centre, Arusha", points: ["Niliweka na kusanidi kompyuta za Linux na Windows."] },
];

export const education = [
  { when: "2022 hadi 2025", title: "Shahada ya Teknolojia ya Habari (Bachelor of IT)", school: "Arusha Technical College" },
  { when: "2020 hadi 2022", title: "Kidato cha Sita (ACSEE), mchepuo EGM", school: "Inyonga Secondary School" },
  { when: "2016 hadi 2019", title: "Kidato cha Nne (CSEE)", school: "Mwangaza Secondary School" },
];

export const skills = [
  { group: "Back end", text: "Laravel, Django, Node.js, Express.js" },
  { group: "Front end na simu", text: "Astro, React (Vite), Tailwind CSS, Flutter" },
  { group: "Lugha za programu", text: "Python, PHP, JavaScript, TypeScript, SQL, C++" },
  { group: "Hifadhidata", text: "MySQL, PostgreSQL, Firebase" },
  { group: "Mitandao na usalama", text: "Cisco, LAN/WAN, firewall, ACLs, TCP/IP, DNS, DHCP, SSH, FTP" },
  { group: "Mifumo ya afya", text: "GoT-HOMIS, DHIS2, EMR/EHR" },
  { group: "Video na design", text: "Adobe Premiere Pro, CapCut, UI/UX" },
];

export const languages = "Kiingereza na Kiswahili, vyote kwa ufasaha";

// Maneno yanayobadilika kwenye ukurasa wa mbele: "Mimi ni ..."
export const roles = ["msanidi wa mifumo", "mwalimu wa IT", "fundi wa mitandao", "mbunifu wa website"];

// Mkanda wa pili (wenye maandishi ya mstari tu)
export const band2 = ["Arusha", "Tanzania", "Kazi safi", "Tuijenge pamoja"];
