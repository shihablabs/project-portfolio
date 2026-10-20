export type WorkCategory =
  | "websites"
  | "apps"
  | "softwares"
  | "branding"
  | "marketing";

export interface CaseStudyData {
  overview: string;
  client: string;
  year: string;
  role: string;
  deliverables: string[];
  challenge: string;
  solution: string;
  designProcess: {
    phase: string;
    description: string;
  }[];
  finalDesigns: {
    title: string;
    image: string;
    caption?: string;
  }[];
  results: {
    label: string;
    value: string;
  }[];
}

export interface WorkProject {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: WorkCategory;
  categoryLabel: string;
  discipline: "ux" | "branding" | "marketing";
  tags: string[];
  thumbnail: string;
  gallery: string[];
  year: string;
  client: string;
  // ── Crucial Conditional Logic ──
  hasCaseStudy: boolean;
  caseStudyUrl?: string;
  caseStudyData?: CaseStudyData;
}

export const WORK_PROJECTS: WorkProject[] = [
  // ── 01. WEBSITES ──
  {
    id: "daahuk-travel",
    slug: "daahuk-travel",
    title: "DAAHUK: ECO-CONSCIOUS TRAVEL & EXPEDITION PORTAL",
    description:
      "A modern visual storytelling platform and booking experience celebrating wild expeditions and thoughtful travel across South Asia.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["UX & UI Design", "Web Design", "Travel & Hospitality", "Responsive UI"],
    thumbnail: "/assets/clients/daahuk.png",
    gallery: [
      "/assets/clients/daahuk.png",
      "/assets/projects/aamar-pharma-mockup.png",
      "/assets/images/work-mockup.png",
    ],
    year: "2023",
    client: "Daahuk",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/daahuk-travel",
    caseStudyData: {
      overview:
        "Daahuk needed a website overhaul that translates their philosophy of mindful, low-impact travel into an immersive digital journey.",
      client: "Daahuk Expeditions",
      year: "2023",
      role: "Lead Product & UI/UX Designer",
      deliverables: ["Responsive Web Platform", "Editorial Design System", "Expedition Itinerary CMS"],
      challenge:
        "Communicating expedition depth and regional biodiversity without overwhelming users looking for rapid departure schedules.",
      solution:
        "Crafted high-impact editorial storytelling layouts paired with an intuitive modular booking flow.",
      designProcess: [
        { phase: "01. Research & Discovery", description: "Interviewed travelers and expedition leaders to map anxiety points during remote travel bookings." },
        { phase: "02. Information Architecture", description: "Restructured itinerary schedules and gear checklists into modular collapsible cards." },
        { phase: "03. Visual System", description: "Developed an earth-toned color palette with atmospheric photography rules." },
      ],
      finalDesigns: [
        { title: "Expedition Detail Page", image: "/assets/clients/daahuk.png", caption: "Modular itinerary timeline with live weather indicators" },
      ],
      results: [
        { label: "Booking Conversion", value: "+44%" },
        { label: "Avg. Session Duration", value: "3m 48s" },
      ],
    },
  },
  {
    id: "solargao-web",
    slug: "solargao",
    title: "SOLARGAO: RENEWABLE RURAL SOLAR ELECTRIFICATION",
    description:
      "Clean tech company portfolio detailing off-grid micro-solar installations for remote river delta communities.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["CleanTech", "Web Design", "Renewable Energy"],
    thumbnail: "/assets/images/work-mockup.png",
    gallery: [
      "/assets/images/work-mockup.png",
      "/assets/projects/aamar-pharma-mockup.png",
    ],
    year: "2023",
    client: "Solargao Energy Ltd.",
    // NOTE: Solargao DOES NOT have a case study — button must remain hidden!
    hasCaseStudy: false,
  },
  {
    id: "elevate-solutions-web",
    slug: "elevate-solutions-brand",
    title: "ELEVATE SOLUTIONS: CORPORATE WEBSITE REDESIGN",
    description:
      "Enterprise digital portal modernizing service offerings, case archives, and stakeholder communications for a premier consultancy.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Corporate Portal", "Enterprise UX", "Design System"],
    thumbnail: "/assets/clients/elevate-solutions-c.png",
    gallery: [
      "/assets/clients/elevate-solutions-c.png",
      "/assets/images/work-mockup.png",
    ],
    year: "2023",
    client: "Elevate Solutions",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/elevate-solutions-brand",
    caseStudyData: {
      overview:
        "Modernized the visual language and corporate hierarchy of Elevate Solutions to appeal to Tier-1 financial institutions.",
      client: "Elevate Solutions Global",
      year: "2023",
      role: "Senior UI/UX Designer",
      deliverables: ["Brand Refresh", "Design System", "Full Corporate Site"],
      challenge: "Outdated legacy website with fragmented navigation and poor mobile responsiveness.",
      solution: "Created an enterprise component library with streamlined consultation funnels.",
      designProcess: [
        { phase: "Audit", description: "Conducted usability audit of 60+ legacy pages." },
        { phase: "Prototype", description: "Built high-fidelity clickable Figma prototypes for board review." },
      ],
      finalDesigns: [
        { title: "Homepage Layout", image: "/assets/clients/elevate-solutions.png" },
      ],
      results: [
        { label: "Inbound Leads", value: "+62%" },
        { label: "Mobile Bounce Rate", value: "-28%" },
      ],
    },
  },

  // ── 02. APPS ──
  {
    id: "aamar-pharma",
    slug: "aamar-pharma",
    title: "AAMAR PHARMA: DIGITAL MEDICINE ORDERING PLATFORM",
    description:
      "A dual mobile healthcare app ecosystem connecting urban patients, licensed pharmacies, and rapid prescription delivery dispatchers.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["Mobile iOS & Android", "HealthTech", "E-Commerce", "Design System"],
    thumbnail: "/assets/projects/aamar-pharma-mockup.png",
    gallery: [
      "/assets/projects/aamar-pharma-mockup.png",
      "/assets/images/work-mockup.png",
      "/assets/clients/aamar-pharma-c.png",
    ],
    year: "2024",
    client: "Aamar Pharma",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/aamar-pharma",
    caseStudyData: {
      overview:
        "Engineered an intuitive mobile application for seamless medicine uploads, prescription verification by pharmacists, and one-tap reorders.",
      client: "Aamar Pharma Bangladesh",
      year: "2024",
      role: "Lead Mobile Product Designer",
      deliverables: ["iOS App", "Android App", "Pharmacist Admin Portal", "Complete Design System"],
      challenge:
        "Senior citizens struggled with complicated search hierarchies and medical generic name variations.",
      solution:
        "Implemented camera-based prescription scanning and automated prescription parsing with 1-click pharmacist chat.",
      designProcess: [
        { phase: "User Interviews", description: "Conducted 18 usability test sessions with elderly patients and caregivers." },
        { phase: "Design System", description: "Created high-contrast typography, 48px touch targets, and clear iconography." },
      ],
      finalDesigns: [
        { title: "Prescription Scan Flow", image: "/assets/projects/aamar-pharma-mockup.png" },
      ],
      results: [
        { label: "Order Completion Rate", value: "89%" },
        { label: "Prescription Uploads", value: "+120%" },
      ],
    },
  },
  {
    id: "healthtrack-app",
    slug: "healthtrack",
    title: "HEALTHTRACK: TELEHEALTH & PATIENT VITALS COMPANION",
    description:
      "Connected patient mobile app tracking daily glucose, blood pressure, and syncing with clinical teams.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["HealthTech", "Mobile App", "Wearable Sync"],
    thumbnail: "/assets/images/work-mockup.png",
    gallery: ["/assets/images/work-mockup.png"],
    year: "2024",
    client: "HealthTrack Inc.",
    hasCaseStudy: false,
  },

  // ── 03. SOFTWARES ──
  {
    id: "hospital-system",
    slug: "hospital-management-system",
    title: "HOSPITAL MANAGEMENT SYSTEM: ENTERPRISE CLINICAL SUITE",
    description:
      "A high-density clinical dashboard managing OPD patient admissions, pathology reports, ward allocations, and billing.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["Enterprise SaaS", "Clinical UX", "Data Density", "Healthcare"],
    thumbnail: "/assets/images/work-mockup.png",
    gallery: [
      "/assets/images/work-mockup.png",
      "/assets/projects/aamar-pharma-mockup.png",
    ],
    year: "2024",
    client: "ENT Foundation Hospital",
    hasCaseStudy: false,
  },
  {
    id: "arbree-analytics",
    slug: "arbree-analytics",
    title: "ARBREE SOLUTIONS: ENTERPRISE DATA ANALYTICS & INSIGHTS",
    description:
      "Enterprise telemetry software providing real-time data pipelines, customizable multi-metric dashboards, and anomaly detection.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["SaaS UX", "Data Visualization", "Telemetry", "Design System"],
    thumbnail: "/assets/clients/arbree-solutions-c.png",
    gallery: [
      "/assets/clients/arbree-solutions-c.png",
      "/assets/projects/aamar-pharma-mockup.png",
    ],
    year: "2024",
    client: "Arbree Solutions",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/arbree-analytics",
    caseStudyData: {
      overview:
        "Designed real-time operations dashboards handling millions of data points across dispersed server clusters.",
      client: "Arbree Solutions",
      year: "2024",
      role: "Lead Enterprise UX Architect",
      deliverables: ["Telemetry Dashboard", "Widget Customizer", "Design Tokens"],
      challenge: "Data overload and latency in alert triage across server operations teams.",
      solution: "Engineered color-coded threshold alerts and high-density widget grids with zero visual clutter.",
      designProcess: [
        { phase: "Contextual Inquiry", description: "Shadowed DevOps engineers during server outages." },
        { phase: "Component Prototyping", description: "Built dark-mode data widgets with custom SVG graphing." },
      ],
      finalDesigns: [
        { title: "Real-time Telemetry Grid", image: "/assets/clients/arbree-solutions.png" },
      ],
      results: [
        { label: "Incident Triage Time", value: "-45%" },
        { label: "Daily Active Users", value: "+75%" },
      ],
    },
  },

  // ── BRANDING ──
  {
    id: "vanilla-bean",
    slug: "the-vanilla-bean-bakery",
    title: "THE VANILLA BEAN: ARTISAN BAKERY & PACKAGING IDENTITY",
    description:
      "Handcrafted botanical logo, bespoke stationery, custom pastry packaging boxes, and gold-foiled satin ribbons.",
    category: "branding",
    categoryLabel: "Logo & Branding",
    discipline: "branding",
    tags: ["Logo Design", "Packaging", "Foil Printing", "Brand Identity"],
    thumbnail: "/assets/images/work-mockup.png",
    gallery: ["/assets/images/work-mockup.png"],
    year: "2023",
    client: "The Vanilla Bean Bakery",
    hasCaseStudy: false,
  },
  {
    id: "london-consulting",
    slug: "london-consulting-limited",
    title: "LONDON CONSULTING LIMITED: CORPORATE MONOGRAM",
    description:
      "Geometric monogram identity and stationery suite for an international tax advisory firm.",
    category: "branding",
    categoryLabel: "Logo & Branding",
    discipline: "branding",
    tags: ["Monograms", "Tax & Law", "Corporate Identity"],
    thumbnail: "/assets/images/work-mockup.png",
    gallery: ["/assets/images/work-mockup.png"],
    year: "2023",
    client: "London Consulting Ltd.",
    hasCaseStudy: false,
  },

  // ── MARKETING ──
  {
    id: "hospital-brochure",
    slug: "hospital-management-brochure",
    title: "HOSPITAL MANAGEMENT SOLUTION: TRI-FOLD BROCHURE",
    description:
      "Enterprise healthcare marketing collateral explaining hospital software modules with detailed diagrams and infographics.",
    category: "marketing",
    categoryLabel: "Print & Digital Marketing",
    discipline: "marketing",
    tags: ["Brochure", "Tri-Fold", "Healthcare ERP", "Print Design"],
    thumbnail: "/assets/images/work-mockup.png",
    gallery: ["/assets/images/work-mockup.png"],
    year: "2024",
    client: "MedSoft Innovations",
    hasCaseStudy: false,
  },
  {
    id: "delta-profile",
    slug: "delta-group-company-profile",
    title: "DELTA GROUP: CORPORATE COMPANY PROFILE 2022",
    description:
      "High-end corporate profile publication detailing multi-sector tender execution across civil engineering, aviation, and power grids.",
    category: "marketing",
    categoryLabel: "Print & Digital Marketing",
    discipline: "marketing",
    tags: ["Company Profile", "Editorial Design", "Aviation & Conglomerate"],
    thumbnail: "/assets/images/work-mockup.png",
    gallery: ["/assets/images/work-mockup.png"],
    year: "2022",
    client: "Delta Group International",
    hasCaseStudy: false,
  },
];

export const CATEGORY_META: Record<
  WorkCategory,
  {
    number: string;
    title: string;
    subtitle: string;
    description: string;
  }
> = {
  websites: {
    number: "01",
    title: "WEBSITES",
    subtitle: "Curated Web Experiences",
    description: "Responsive portals, brand storytelling platforms, and high-converting marketing sites.",
  },
  apps: {
    number: "02",
    title: "APPS",
    subtitle: "Mobile & Product Ecosystems",
    description: "iOS and Android mobile applications designed with human-centric ergonomics and seamless flows.",
  },
  softwares: {
    number: "03",
    title: "SOFTWARES",
    subtitle: "Enterprise & SaaS Platforms",
    description: "High-density dashboards, telemetry suites, and workflow automation systems.",
  },
  branding: {
    number: "04",
    title: "LOGO & BRANDING",
    subtitle: "Identity & Visual Systems",
    description: "Distinctive brandmarks, comprehensive guidelines, and tactile packaging assets.",
  },
  marketing: {
    number: "05",
    title: "PRINT & DIGITAL MARKETING",
    subtitle: "Collateral & Campaigns",
    description: "Multi-page company profiles, tri-fold brochures, exhibition banners, and social collateral.",
  },
};
