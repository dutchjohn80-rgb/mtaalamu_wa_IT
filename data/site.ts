// Maudhui yote ya website yako yako hapa. Hariri faili hili na kurasa zote zitasasishwa.

export const site = {
  name: "John Dutch",
  fullName: "John Ezebius Dutch",
  currentYear: 2026,
  location: "Arusha, Tanzania",
  email: "dutchjohn80@gmail.com",
  phone: "0744 853 054",
  phoneHref: "+255744853054",
  whatsapp: "https://wa.me/255744853054",
  github: "https://github.com/dutchjohn80-rgb",
  githubLabel: "github.com/dutchjohn80-rgb",
  summary:
    "John Dutch ni mtaalamu wa IT na mwalimu kutoka Arusha. Anatengeneza website, mifumo, programu za simu na mitandao.",
  summaryEn:
    "John Dutch is an IT specialist and teacher based in Arusha. He builds websites, systems, mobile apps, and network infrastructure.",
};

export const navByLocale: Record<"sw" | "en", Array<{ label: string; href: string; cta?: boolean }>> = {
  sw: [
    { label: "Kazi", href: "/#kazi" },
    { label: "Huduma", href: "/#huduma" },
    { label: "Kuhusu", href: "/kuhusu" },
    { label: "Wasiliana", href: "/wasiliana", cta: true },
  ],
  en: [
    { label: "Work", href: "/#kazi" },
    { label: "Services", href: "/#huduma" },
    { label: "About", href: "/kuhusu" },
    { label: "Contact", href: "/wasiliana", cta: true },
  ],
};

export const localeLabels = {
  sw: "SW",
  en: "EN",
} as const;

export const languageCopy = {
  sw: {
    location: "Arusha, Tanzania",
    home: {
      kicker: "Arusha, Tanzania",
      rolePrefix: "Mimi ni",
      ctaPrimary: "Ona kazi zangu",
      ctaSecondary: "Wasiliana nami",
      workTitle: "Kazi zangu",
      workLead: "Mifumo halisi niliyojenga. Bonyeza kila kazi kuiona kwa undani.",
      viewProject: "Angalia kazi",
      github: "Msimbo zaidi uko",
      servicesTitle: "Huduma",
      servicesLead: "Kuanzia website rahisi hadi mfumo kamili wenye programu ya simu na mtandao.",
      statement: "Naishi na kufanya kazi Arusha. Nimefanya kazi za IT kwenye hospitali na vituo vya afya vya hapa, nimejenga website ya shirika la kijamii, na sasa nafundisha vijana kuandika programu.",
      metricsTitle: "Utendaji, uaminifu na mafanikio ya vitendo",
      metricsLead: "Mikakati ya kielektroniki iliyotengenezwa kwa lengo la biashara, huduma za afya na maendeleo ya jamii.",
      trustTitle: "Kwa nini ninachaguliwa?",
      trustLead: "Ninatoa suluhisho zenye maelezo ya vitendo, ukamilifu wa teknologia na usaidizi wa baada ya kuanza.",
      ctaBig: "Tufanye kazi pamoja →",
      ctaBigSmall: "Una biashara au wazo?",
    },
    about: {
      kicker: "Kuhusu mimi",
      title: "Kutoka mitandao ya hospitali hadi mifumo ya mtandaoni.",
      current: "Mwalimu wa IT, Arusha Computing Centre",
    },
    contact: {
      kicker: "Wasiliana",
      title: "Tuzungumze kuhusu kazi yako.",
      emailLabel: "Barua pepe",
      phoneLabel: "Simu",
      githubLabel: "GitHub",
      locationLabel: "Mahali",
      noteLabel: "Niambie",
      notePoints: [
        "Unataka nini kijengwe, kitengenezwe au kifundishwe",
        "Nani atakitumia",
        "Unahitaji lini",
      ],
    },
    project: {
      back: "Kazi zote",
      next: "Kazi inayofuata",
      follow: "Fuata",
      email: "Andika",
    },
  },
  en: {
    location: "Arusha, Tanzania",
    home: {
      kicker: "Arusha, Tanzania",
      rolePrefix: "I am",
      ctaPrimary: "View my work",
      ctaSecondary: "Contact me",
      workTitle: "My work",
      workLead: "Real systems I have built. Click each project to explore the details.",
      viewProject: "View project",
      github: "More code is on",
      servicesTitle: "Services",
      servicesLead: "From simple websites to full systems with mobile apps and network support.",
      statement: "I live and work in Arusha. I have done IT work in hospitals and health centers here, built community-based websites, and now teach young people to write software.",
      metricsTitle: "Performance, trust, and real-world results",
      metricsLead: "Digital systems built with business clarity, practical usability, and long-term reliability in mind.",
      trustTitle: "Why choose me?",
      trustLead: "I design practical solutions with technical depth, clear communication, and support that continues after launch.",
      ctaBig: "Let’s build something together →",
      ctaBigSmall: "Got a business idea or project?",
    },
    about: {
      kicker: "About me",
      title: "From hospital networks to digital systems.",
      current: "IT Teacher, Arusha Computing Centre",
    },
    contact: {
      kicker: "Contact",
      title: "Let’s talk about your project.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      githubLabel: "GitHub",
      locationLabel: "Location",
      noteLabel: "Tell me",
      notePoints: [
        "What do you want built, developed, or taught",
        "Who will use it",
        "When you need it",
      ],
    },
    project: {
      back: "All work",
      next: "Next project",
      follow: "Follow",
      email: "Write",
    },
  },
} as const;

export const marquee = ["Website", "Mifumo", "Programu za simu", "Mitandao", "Mafunzo", "Video na michoro"];
export const marqueeByLocale: Record<"sw" | "en", string[]> = {
  sw: [...marquee],
  en: ["Website", "Systems", "Mobile apps", "Networks", "Training", "Video and design"],
};

export const services = [
  { title: "Website", text: "Website za biashara, taasisi na portfolio zinazopakia haraka na kuonekana vizuri kwenye simu." },
  { title: "Mifumo ya kompyuta", text: "Mfumo wenye API, hifadhidata na dashibodi ya usimamizi kwa ajili ya timu yako (Laravel, Django, React)." },
  { title: "Programu za simu", text: "Programu za Android na iOS kwa Flutter, zilizounganishwa na mfumo wako." },
  { title: "Mitandao na IT support", text: "Kuweka na kutunza mitandao ya ofisi na kompyuta: Cisco, LAN/WAN, firewall, Linux na Windows." },
  { title: "Mifumo ya afya", text: "Msaada wa mifumo kama GoT-HOMIS, DHIS2 na EMR kwa hospitali na vituo vya afya." },
  { title: "Mafunzo", text: "Mafunzo ya vitendo: programu, web development, usalama wa mitandao na graphics design." },
  { title: "Video na michoro", text: "Kuhariri video kwa Premiere Pro na CapCut, na kubuni UI/UX ya website na programu." },
];

export const servicesByLocale: Record<"sw" | "en", Array<{ title: string; text: string }>> = {
  sw: [...services],
  en: [
    { title: "Website", text: "Business, institutional, and portfolio websites that load fast and look great on mobile." },
    { title: "Computer systems", text: "Systems with APIs, databases, and admin dashboards built for your team (Laravel, Django, React)." },
    { title: "Mobile apps", text: "Android and iOS apps with Flutter, connected to your existing platform." },
    { title: "Networks and IT support", text: "Setup and maintenance for office networks and computers: Cisco, LAN/WAN, firewall, Linux, and Windows." },
    { title: "Health systems", text: "Support for systems such as GoT-HOMIS, DHIS2, and EMR for hospitals and health centers." },
    { title: "Training", text: "Hands-on training in software, web development, network security, and graphics design." },
    { title: "Video and design", text: "Video editing with Premiere Pro and CapCut, and UI/UX design for websites and apps." },
  ],
};

export const impactStatsByLocale: Record<"sw" | "en", Array<{ value: string; label: string }>> = {
  sw: [
    { value: "5+", label: "Miaka ya uzoefu" },
    { value: "30+", label: "Miradi ya vitendo" },
    { value: "100%", label: "Mikono ya kibinafsi" },
    { value: "24/7", label: "Msaada wa kiufundi" },
  ],
  en: [
    { value: "5+", label: "Years of experience" },
    { value: "30+", label: "Practical projects" },
    { value: "100%", label: "Hands-on delivery" },
    { value: "24/7", label: "Technical support" },
  ],
};

export const trustHighlightsByLocale: Record<"sw" | "en", Array<{ title: string; text: string }>> = {
  sw: [
    { title: "Kujenga kwa lengo", text: "Kila mfumo unahusisha lengo la biashara halisi, watumiaji na matokeo yanayoweza kupimika." },
    { title: "Ukiukaji wa usalama", text: "Mitandao na mifumo inajengwa kwa usalama, usalama wa data, na matumizi ya kila siku." },
    { title: "Msaada baada ya kuanza", text: "Ninatoa mafunzo na usaidizi wa kukagua kazi katika awamu ya nyuma ya kuzindua." },
    { title: "Utendaji wa muda mrefu", text: "Tovuti, mifumo na usaidizi huwa na miundo inayowezesha kuongezeka bila kuvuruga kazi." },
  ],
  en: [
    { title: "Built for outcomes", text: "Every solution is shaped around real business goals, real users, and measurable impact." },
    { title: "Security-first design", text: "Systems and networks are built with safer access, cleaner workflows, and better data control." },
    { title: "Support after launch", text: "I stay involved with training, monitoring, and help when the project goes live." },
    { title: "Long-term reliability", text: "Websites and systems are designed to grow with your team without breaking day-to-day operations." },
  ],
};

export const testimonials = [
  {
    name: "Aisha M.",
    role: "Clinic Administrator",
    quote: "John helped us make our patient information process much easier. The system is clear, fast, and dependable for daily use.",
  },
  {
    name: "Juma K.",
    role: "Business Owner",
    quote: "He designed a strong website for our business and gave us a presentation we could actually use to attract clients.",
  },
  {
    name: "Samuel P.",
    role: "Training Participant",
    quote: "The lessons were practical and easy to understand. I left with real tools I could use immediately in my work.",
  },
];

export const testimonialsByLocale: Record<"sw" | "en", Array<{ name: string; role: string; quote: string }>> = {
  sw: [
    {
      name: "Aisha M.",
      role: "Msimamizi wa kliniki",
      quote: "John alitusaidia kufanya mchakato wetu wa taarifa za wagonjwa kuwa rahisi. Mfumo ni wazi, wa haraka na wa kuaminika kwa matumizi ya kila siku.",
    },
    {
      name: "Juma K.",
      role: "Mmiliki wa biashara",
      quote: "Alitukusanya tovuti yenye nguvu ya biashara yetu na kutupa uwasilishaji unaoweza kutumika kwa kuteka wateja." ,
    },
    {
      name: "Samuel P.",
      role: "Mwanafunzi wa mafunzo",
      quote: "Mafunzo yalikuwa ya vitendo na ya kueleweka. Niliondoka na zana halisi nilizoweza kutumia mara moja kazini.",
    },
  ],
  en: [...testimonials],
};

export const processSteps = [
  { title: "Discovery", text: "We define the goal, audience, and main features needed for the project." },
  { title: "Design", text: "I map the system structure, user flow, and interface for a clear experience." },
  { title: "Build", text: "The product is built with clean code, testing, and the right stack for the task." },
  { title: "Launch", text: "We deploy, review, and make sure the system is ready to use in real life." },
];

export const processByLocale: Record<"sw" | "en", Array<{ title: string; text: string }>> = {
  sw: [
    { title: "Uchunguzi", text: "Tunafafanua lengo, watumiaji na vipengele muhimu vinavyohitajika kwa mradi." },
    { title: "Kubuni", text: "Naweka muundo wa mfumo, mtiririko wa matumizi na kiolesura kwa matumizi ya wazi." },
    { title: "Kujenga", text: "Mfumo hujengwa kwa msimbo safi, upimaji na stack sahihi kwa kazi hiyo." },
    { title: "Kuzindua", text: "Tunazindua, kukagua na kuhakikisha mfumo uko tayari kwa matumizi ya kweli." },
  ],
  en: [...processSteps],
};

export const servicePackages = [
  { name: "Launch Website", price: "From $350", badge: "Starter", features: ["Responsive business website", "Contact form", "On-page SEO basics", "2 revision rounds"], featured: false },
  { name: "Business System", price: "From $900", badge: "Popular", features: ["Custom admin dashboard", "Database backend", "User roles", "Deployment support"], featured: true },
  { name: "IT Support", price: "From $150", badge: "Flexible", features: ["Network setup", "Device setup", "Maintenance", "Training support"], featured: false },
];

export const servicePackagesByLocale: Record<"sw" | "en", Array<{ name: string; price: string; badge: string; features: string[]; featured: boolean }>> = {
  sw: [
    { name: "Website ya Launch", price: "Kuanzia $350", badge: "Starter", features: ["Website ya biashara inayofaa simu", "Fomu ya mawasiliano", "SEO za msingi", "Mizunguko 2 ya marekebisho"], featured: false },
    { name: "Mfumo wa Biashara", price: "Kuanzia $900", badge: "Maarufu", features: ["Dashibodi ya usimamizi ya kibinafsi", "Backend ya hifadhidata", "Majukumu ya watumiaji", "Msaada wa kuzindua"], featured: true },
    { name: "Msaada wa IT", price: "Kuanzia $150", badge: "Inayoweza kubadilika", features: ["Kuseti mtandao", "Kuseti vifaa", "Matengenezo", "Msaada wa mafunzo"], featured: false },
  ],
  en: [...servicePackages],
};

export const faqItems = [
  { question: "How long does a project usually take?", answer: "Simple websites can take 1-3 weeks, while systems and more complex work usually take several weeks depending on the scope." },
  { question: "Can you work with existing systems or only new projects?", answer: "I can support both new builds and improvements to existing systems, websites, and internal tools." },
  { question: "Do you also offer training and support?", answer: "Yes. I offer practical IT training, technical support, and guidance after launch." },
];

export const faqItemsByLocale: Record<"sw" | "en", Array<{ question: string; answer: string }>> = {
  sw: [
    { question: "Mradi kawaida huchukua muda gani?", answer: "Tovuti rahisi zinaweza kuchukua wiki 1-3, huku mifumo na miradi ngumu zaidi ikichukua wiki kadhaa kulingana na ukubwa wa kazi." },
    { question: "Unaweza kufanya kazi na mifumo iliyopo au mradi mpya pekee?", answer: "Ninaweza kusaidia miradi mipya na kuboresha mifumo, tovuti, na zana za ndani zilizopo." },
    { question: "Je, unatoa mafunzo na usaidizi pia?", answer: "Ndiyo. Ninafanya mafunzo ya vitendo ya IT, usaidizi wa kiufundi, na mwongozo baada ya kuzindua." },
  ],
  en: [...faqItems],
};

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

export const projectsByLocale: Record<"sw" | "en", Array<{
  slug: string;
  title: string;
  kind: string;
  bg: string;
  fg: string;
  summary: string;
  features: string[];
  stack: string;
}>> = {
  sw: [...projects],
  en: [
    {
      slug: "ufuatiliaji-usafiri",
      title: "Public transport tracking system",
      kind: "map",
      bg: "#ff4f1f", fg: "#0b0b0c",
      summary: "A GPS-based live public transport tracking system that estimates arrival times and shows routes on a map. Drivers and passengers each have their own app.",
      features: ["Live GPS tracking", "Arrival time estimation", "Route mapping", "Driver and passenger apps (Flutter)", "Admin dashboard (React)"],
      stack: "Laravel 11, Laravel Reverb, Flutter, React, Google Maps SDK",
    },
    {
      slug: "usimamizi-wa-stoo",
      title: "Store management system",
      kind: "table",
      bg: "#2f5bff", fg: "#ffffff",
      summary: "A web and mobile application for managing stock with secure login and online inventory records.",
      features: ["Secure token authentication", "Add, edit, and delete products", "Web and mobile experience", "MySQL database"],
      stack: "Laravel Sanctum (Railway), React and Tailwind CSS (Vercel), Flutter, MySQL",
    },
    {
      slug: "alaredefo-ngo",
      title: "ALAREDEFO NGO website",
      kind: "lang",
      bg: "#ffd21f", fg: "#0b0b0c",
      summary: "A bilingual NGO website in English and Swahili with a contact form that sends emails.",
      features: ["Language switch between English and Swahili", "Email contact form", "Dedicated Express mail server", "Live and working deployment"],
      stack: "React, TypeScript, Tailwind CSS, Express.js, Nodemailer",
    },
    {
      slug: "mfumo-wa-afya",
      title: "Health system dashboard",
      kind: "dash",
      bg: "#3ddc97", fg: "#0b0b0c",
      summary: "A modular healthcare records system that centralizes patient data and presents it safely in a dashboard.",
      features: ["Laravel REST API", "React dashboard (Vite)", "Structured clinical records"],
      stack: "Laravel REST API, React (Vite)",
    },
  ],
};

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
export const rolesByLocale: Record<"sw" | "en", string[]> = {
  sw: [...roles],
  en: ["systems developer", "IT teacher", "network technician", "website designer"],
};

// Mkanda wa pili (wenye maandishi ya mstari tu)
export const band2 = ["Arusha", "Tanzania", "Kazi safi", "Tuijenge pamoja"];
export const band2ByLocale: Record<"sw" | "en", string[]> = {
  sw: [...band2],
  en: ["Arusha", "Tanzania", "Clean work", "Let’s build together"],
};
