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
  // ── Multi-Screenshot Option per Card (1, 2, or 3 images) ──
  cardScreenshots?: string[];
  year: string;
  client: string;
  // ── Crucial Conditional Logic ──
  hasCaseStudy: boolean;
  caseStudyUrl?: string;
  caseStudyData?: CaseStudyData;
  // ── Filter Metadata ──
  subCategory?: string;
  workType?: string;
  industry?: string;
}

export const WORK_PROJECTS: WorkProject[] = [
  // ════════════════════════════════════════════════════════════
  // 01. WEBSITES (public/assets/work/website/)
  // ════════════════════════════════════════════════════════════
  {
    id: "miftas-dining",
    slug: "miftas-indian-dining",
    title: "Indian Fine Dining Restaurant",
    description:
      "A rich, atmospheric culinary website and online reservation system crafted for authentic Indian fine dining.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Web Design", "Hospitality", "Reservation UI", "Responsive Design"],
    thumbnail: "/assets/work/website/1.png",
    gallery: [
      "/assets/work/website/1.png",
      "/assets/work/website/2.png",
    ],
    year: "2024",
    client: "Mifta's Indian Dining",
    hasCaseStudy: false,
    subCategory: "Restaurant & Hospitality",
    workType: "Web Design & Development",
    industry: "Food & Beverage",
  },
  {
    id: "alpha-square",
    slug: "alpha-square-partners",
    title: "IT Solutions Service Provider",
    description:
      "Clean corporate web presence showcasing end-to-end software engineering, cloud migration, and strategic IT advisory.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Corporate Portal", "Enterprise UX", "IT Services", "Design System"],
    thumbnail: "/assets/work/website/2.png",
    gallery: [
      "/assets/work/website/2.png",
      "/assets/work/website/1.png",
    ],
    year: "2024",
    client: "Alpha Square Partners",
    hasCaseStudy: false,
    subCategory: "Corporate & Enterprise",
    workType: "UX & UI Design",
    industry: "Technology",
  },
  {
    id: "maplewood-immigration",
    slug: "canadian-immigration",
    title: "Canadian Immigration Consultancy",
    description:
      "A structured legal consultancy website streamlining visa category evaluation, eligibility assessments, and client consultations.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Legal & Immigration", "Consultation Portal", "Responsive Web"],
    thumbnail: "/assets/work/website/3.png",
    gallery: [
      "/assets/work/website/3.png",
      "/assets/work/website/2.png",
    ],
    year: "2024",
    client: "Maplewood Immigration",
    hasCaseStudy: false,
    subCategory: "Professional Services",
    workType: "Web Design & Portal",
    industry: "Immigration & Legal",
  },
  {
    id: "wedding-photography",
    slug: "contemporary-wedding-photography",
    title: "Natural Relaxed Contemporary Wedding",
    description:
      "An evocative visual storytelling portfolio platform for luxury contemporary wedding cinematography and photography.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Portfolio", "Visual Storytelling", "Photography", "Gallery UX"],
    thumbnail: "/assets/work/website/4.png",
    gallery: [
      "/assets/work/website/4.png",
      "/assets/work/website/3.png",
    ],
    year: "2024",
    client: "Studio Heritage Cinema",
    hasCaseStudy: false,
    subCategory: "Creative & Portfolio",
    workType: "Web Design",
    industry: "Photography & Media",
  },
  {
    id: "maritime-craftsmanship",
    slug: "precision-craftsmanship-maritime",
    title: "Precision Craftsmanship & Maritime",
    description:
      "Heritage shipwright craftsmanship and marine engineering portfolio celebrating riverine boat fabrication traditions.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Manufacturing", "Marine Engineering", "Brand Website"],
    thumbnail: "/assets/work/website/5.png",
    gallery: [
      "/assets/work/website/5.png",
      "/assets/work/website/4.png",
    ],
    year: "2023",
    client: "Avijatrik Marine Works",
    hasCaseStudy: false,
    subCategory: "Industrial & Manufacturing",
    workType: "Brand Website",
    industry: "Maritime & Transport",
  },
  {
    id: "creative-agency",
    slug: "creative-agency-portfolio",
    title: "Creative Digital Studio & Agency",
    description:
      "High-energy interactive digital design agency portfolio showcasing brand campaigns, 3D animations, and digital experiences.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Digital Agency", "Interactive UX", "Design System"],
    thumbnail: "/assets/work/website/6.png",
    gallery: [
      "/assets/work/website/6.png",
      "/assets/work/website/1.png",
    ],
    year: "2024",
    client: "Apex Creative Agency",
    hasCaseStudy: false,
    subCategory: "Agency & Studio",
    workType: "Full Website Overhaul",
    industry: "Technology",
  },
  {
    id: "daahuk-travel",
    slug: "daahuk-travel",
    title: "Eco-Conscious Travel & Expedition Portal",
    description:
      "A modern visual storytelling platform and booking experience celebrating wild expeditions and thoughtful travel across South Asia.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["UX & UI Design", "Web Design", "Travel & Hospitality", "Responsive UI"],
    thumbnail: "/assets/work/website/5.png",
    gallery: [
      "/assets/work/website/5.png",
      "/assets/work/website/4.png",
    ],
    year: "2023",
    client: "Daahuk",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/daahuk-travel",
    subCategory: "Hospitality & Restaurant",
    workType: "UX & UI Design",
    industry: "Food & Beverage",
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
        { title: "Expedition Detail Page", image: "/assets/work/website/5.png", caption: "Modular itinerary timeline with live weather indicators" },
      ],
      results: [
        { label: "Booking Conversion", value: "+44%" },
        { label: "Avg. Session Duration", value: "3m 48s" },
      ],
    },
  },
  {
    id: "elevate-solutions-web",
    slug: "elevate-solutions-brand",
    title: "Corporate Website Redesign",
    description:
      "Enterprise digital portal modernizing service offerings, case archives, and stakeholder communications for a premier consultancy.",
    category: "websites",
    categoryLabel: "01. Websites",
    discipline: "ux",
    tags: ["Corporate Portal", "Enterprise UX", "Design System"],
    thumbnail: "/assets/work/website/2.png",
    gallery: [
      "/assets/work/website/2.png",
      "/assets/work/website/1.png",
    ],
    year: "2023",
    client: "Elevate Solutions",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/elevate-solutions-brand",
    subCategory: "Corporate & Enterprise",
    workType: "UX & UI Design",
    industry: "Technology",
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
        { title: "Homepage Layout", image: "/assets/work/website/2.png" },
      ],
      results: [
        { label: "Inbound Leads", value: "+62%" },
        { label: "Mobile Bounce Rate", value: "-28%" },
      ],
    },
  },

  // ════════════════════════════════════════════════════════════
  // 02. APPS (public/assets/work/app/)
  // ════════════════════════════════════════════════════════════
  {
    id: "student-portal",
    slug: "student-learning-portal",
    title: "Student Learning Management Portal",
    description:
      "Comprehensive mobile learning platform for interactive coursework, live video classrooms, and student peer collaboration.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["EdTech", "Mobile iOS & Android", "Student UX"],
    thumbnail: "/assets/work/app/01_student_home 2.png",
    cardScreenshots: [
      "/assets/work/app/01_student_home 2.png",
      "/assets/work/app/02_00_lessons 2.png",
      "/assets/work/app/04_02_contest_individual 2.png",
    ],
    gallery: [
      "/assets/work/app/01_student_home 2.png",
      "/assets/work/app/02_00_lessons 2.png",
      "/assets/work/app/04_02_contest_individual 2.png",
    ],
    year: "2024",
    client: "EduPulse Academy",
    hasCaseStudy: false,
    subCategory: "EdTech & Learning",
    workType: "Mobile iOS & Android",
    industry: "Education",
  },
  {
    id: "interactive-lessons",
    slug: "interactive-course-player",
    title: "Interactive Course & Lesson Player",
    description:
      "Micro-learning smartphone application with bite-sized video modules, quiz checkpoints, and verifiable course certificates.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["EdTech", "Mobile App", "Gamified Learning"],
    thumbnail: "/assets/work/app/02_00_lessons 2.png",
    cardScreenshots: [
      "/assets/work/app/04_Courses 1.png",
      "/assets/work/app/05_Course Details - Content 1.png",
    ],
    gallery: [
      "/assets/work/app/02_00_lessons 2.png",
      "/assets/work/app/04_Courses 1.png",
      "/assets/work/app/05_Course Details - Content 1.png",
    ],
    year: "2024",
    client: "SkillForge Learning",
    hasCaseStudy: false,
    subCategory: "EdTech & Learning",
    workType: "Mobile UI Design",
    industry: "Education",
  },
  {
    id: "cgm-tracker",
    slug: "cgm-glucose-monitoring",
    title: "Continuous Glucose Monitoring (CGM) App",
    description:
      "Real-time continuous blood glucose reader and alert ecosystem connecting Bluetooth biometric sensor hardware with mobile alerts.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["HealthTech", "Biometric Sync", "Mobile iOS", "Medical Device UX"],
    thumbnail: "/assets/work/app/14_Home_CGM 1.png",
    cardScreenshots: [
      "/assets/work/app/09_BG_Meter 1.png",
      "/assets/work/app/14_Home_CGM 1.png",
      "/assets/work/app/10_SyncDevice 1.png",
    ],
    gallery: [
      "/assets/work/app/14_Home_CGM 1.png",
      "/assets/work/app/09_BG_Meter 1.png",
      "/assets/work/app/10_SyncDevice 1.png",
    ],
    year: "2024",
    client: "GlucoTrack Care",
    hasCaseStudy: false,
    subCategory: "HealthTech & Telehealth",
    workType: "Mobile iOS & Android",
    industry: "Healthcare",
  },
  {
    id: "nutrition-diet",
    slug: "nutrition-diet-tracker",
    title: "Dietary & Daily Nutrition Tracker",
    description:
      "Personalized nutrition companion integrating daily meal macros, calorie tracking, and customized exercise schedule recommendations.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["Health & Fitness", "Nutrition", "Mobile UI", "Daily Logging"],
    thumbnail: "/assets/work/app/15_Home_Exercise+Food 1.png",
    cardScreenshots: [
      "/assets/work/app/15_Home_Exercise+Food 1.png",
      "/assets/work/app/20_Profile_Dietary 1.png",
    ],
    gallery: [
      "/assets/work/app/15_Home_Exercise+Food 1.png",
      "/assets/work/app/20_Profile_Dietary 1.png",
    ],
    year: "2024",
    client: "NutriLife Companion",
    hasCaseStudy: false,
    subCategory: "Fitness & Wellness",
    workType: "Mobile App",
    industry: "Healthcare",
  },
  {
    id: "aamar-pharma",
    slug: "aamar-pharma",
    title: "Aamar Pharma: Digital Medicine Ordering App",
    description:
      "A dual mobile healthcare app ecosystem connecting urban patients, licensed pharmacies, and rapid prescription delivery dispatchers.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["Mobile iOS & Android", "HealthTech", "E-Commerce", "Design System"],
    thumbnail: "/assets/work/app/16_Reports_Overview 1.png",
    cardScreenshots: [
      "/assets/work/app/16_Reports_Overview 1.png",
      "/assets/work/app/18_Reports_Logbook 1.png",
      "/assets/work/app/21_Profile_Diabetes 1.png",
    ],
    gallery: [
      "/assets/work/app/16_Reports_Overview 1.png",
      "/assets/work/app/18_Reports_Logbook 1.png",
      "/assets/work/app/21_Profile_Diabetes 1.png",
    ],
    year: "2024",
    client: "Aamar Pharma",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/aamar-pharma",
    subCategory: "HealthTech & Telehealth",
    workType: "Full Product Design",
    industry: "Healthcare",
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
        { title: "Prescription Scan Flow", image: "/assets/work/app/16_Reports_Overview 1.png" },
      ],
      results: [
        { label: "Order Completion Rate", value: "89%" },
        { label: "Prescription Uploads", value: "+120%" },
      ],
    },
  },
  {
    id: "sales-crm",
    slug: "enterprise-sales-crm",
    title: "Enterprise Field Sales CRM Mobile",
    description:
      "Mobile customer intelligence and field client management suite featuring offline client sync and lead routing.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["CRM", "Field Agent", "Enterprise Mobile", "Offline Sync"],
    thumbnail: "/assets/work/app/Customer List 1.png",
    cardScreenshots: [
      "/assets/work/app/Customer List 1.png",
      "/assets/work/app/view task or project 1.png",
    ],
    gallery: [
      "/assets/work/app/Customer List 1.png",
      "/assets/work/app/view task or project 1.png",
    ],
    year: "2024",
    client: "SalesPro Global",
    hasCaseStudy: false,
    subCategory: "Enterprise CRM",
    workType: "Enterprise Mobile",
    industry: "Technology",
  },
  {
    id: "finpay-wallet",
    slug: "finpay-mobile-remittance",
    title: "FinPay Mobile Remittance & Wallet",
    description:
      "Instant peer-to-peer payments, merchant QR checkouts, and international remittance tracking with bank-grade biometric authentication.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["Fintech", "Mobile Wallet", "QR Payment", "Design System"],
    thumbnail: "/assets/work/app/Home 5.png",
    cardScreenshots: [
      "/assets/work/app/Home 5.png",
    ],
    gallery: [
      "/assets/work/app/Home 5.png",
      "/assets/work/app/chat – all (homescre (1) 2.png",
    ],
    year: "2024",
    client: "FinPay Mobile",
    hasCaseStudy: false,
    subCategory: "Fintech & Banking",
    workType: "Full Product Design",
    industry: "Finance & Fintech",
  },
  {
    id: "campaign-manager",
    slug: "campaign-manager-app",
    title: "Digital Marketing Campaign Manager",
    description:
      "Influencer collaboration tracker, spend attribution dashboard, and campaign milestone approval app for growth agencies.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["Growth Marketing", "Campaign Analytics", "Mobile UI"],
    thumbnail: "/assets/work/app/Campaign Details-1 1.png",
    cardScreenshots: [
      "/assets/work/app/Campaign Details-1 1.png",
      "/assets/work/app/view event - invited 1.png",
    ],
    gallery: [
      "/assets/work/app/Campaign Details-1 1.png",
      "/assets/work/app/view event - invited 1.png",
    ],
    year: "2024",
    client: "AdSphere Growth",
    hasCaseStudy: false,
    subCategory: "Marketing & Growth",
    workType: "Mobile UI Design",
    industry: "Technology",
  },
  {
    id: "wellness-journey",
    slug: "mental-wellness-journey",
    title: "Daily Mental Wellness & Mindfulness Journey",
    description:
      "Gamified behavioral therapy companion featuring daily mood check-ins, guided meditation audio, and licensed therapist bookings.",
    category: "apps",
    categoryLabel: "02. Apps",
    discipline: "ux",
    tags: ["Mental Health", "Mindfulness", "Gamification", "UX Design"],
    thumbnail: "/assets/work/app/CONTINUE.png",
    cardScreenshots: [
      "/assets/work/app/CONTINUE.png",
      "/assets/work/app/SPIN THE WHEEL.png",
      "/assets/work/app/07_Course Details - Certification 1.png",
    ],
    gallery: [
      "/assets/work/app/CONTINUE.png",
      "/assets/work/app/SPIN THE WHEEL.png",
      "/assets/work/app/07_Course Details - Certification 1.png",
    ],
    year: "2024",
    client: "Me+ Telemedicine",
    hasCaseStudy: false,
    subCategory: "Mental Health & Therapy",
    workType: "Full Product Design",
    industry: "Healthcare",
  },

  // ════════════════════════════════════════════════════════════
  // 03. SOFTWARES (public/assets/work/software/)
  // ════════════════════════════════════════════════════════════
  {
    id: "hospital-system",
    slug: "hospital-management-system",
    title: "Healthcare Clinical Management Dashboard",
    description:
      "A high-density clinical dashboard managing OPD patient admissions, pathology reports, ward allocations, and billing.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["Enterprise SaaS", "Clinical UX", "Data Density", "Healthcare"],
    thumbnail: "/assets/work/software/01_DASHBOARD 1.png",
    gallery: [
      "/assets/work/software/01_DASHBOARD 1.png",
      "/assets/work/software/07_REPORTS 1.png",
    ],
    year: "2024",
    client: "ENT Foundation Hospital",
    hasCaseStudy: false,
    subCategory: "Clinical & Health",
    workType: "Enterprise SaaS",
    industry: "Healthcare",
  },
  {
    id: "talent-link",
    slug: "talent-link-workforce",
    title: "Workforce & Skilled Workers Portal",
    description:
      "Enterprise human resource management software tracking skilled labor credentials, deployment rosters, and compliance certification.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["HR ERP", "Staff Allocation", "Enterprise Software"],
    thumbnail: "/assets/work/software/05_SKILLED WORKERS 1.png",
    gallery: [
      "/assets/work/software/05_SKILLED WORKERS 1.png",
      "/assets/work/software/Calendar 1.png",
    ],
    year: "2024",
    client: "TalentLink Global",
    hasCaseStudy: false,
    subCategory: "HR & Enterprise ERP",
    workType: "UX & UI Design",
    industry: "Technology",
  },
  {
    id: "arbree-analytics",
    slug: "arbree-analytics",
    title: "Financial Analytics & Operational Reports",
    description:
      "Enterprise telemetry software providing real-time data pipelines, customizable multi-metric dashboards, and anomaly detection.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["SaaS UX", "Data Visualization", "Telemetry", "Design System"],
    thumbnail: "/assets/work/software/07_REPORTS 1.png",
    gallery: [
      "/assets/work/software/07_REPORTS 1.png",
      "/assets/work/software/01_DASHBOARD 1.png",
    ],
    year: "2024",
    client: "Arbree Solutions",
    hasCaseStudy: true,
    caseStudyUrl: "/work/case-study/arbree-analytics",
    subCategory: "Analytics & Reporting",
    workType: "Data Visualization",
    industry: "Finance & Fintech",
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
        { title: "Real-time Telemetry Grid", image: "/assets/work/software/07_REPORTS 1.png" },
      ],
      results: [
        { label: "Incident Triage Time", value: "-45%" },
        { label: "Daily Active Users", value: "+75%" },
      ],
    },
  },
  {
    id: "calendar-system",
    slug: "schedulify-calendar",
    title: "Enterprise Resource & Appointment Calendar",
    description:
      "Multi-facility medical appointment scheduling suite with collision avoidance, specialist room tracking, and automated SMS reminders.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["Calendar UI", "Operations", "Resource Scheduling"],
    thumbnail: "/assets/work/software/Calendar 1.png",
    gallery: [
      "/assets/work/software/Calendar 1.png",
      "/assets/work/software/01_DASHBOARD 1.png",
    ],
    year: "2024",
    client: "Schedulify Systems",
    hasCaseStudy: false,
    subCategory: "Productivity & Operations",
    workType: "UX & UI Design",
    industry: "Technology",
  },
  {
    id: "realcapita-asset",
    slug: "realcapita-asset-management",
    title: "RealCapita Asset Management Suite",
    description:
      "Institutional real estate asset management platform modeling yield projections, rental disbursements, and property capital expenditures.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["PropTech", "Real Estate SaaS", "Financial Modeling"],
    thumbnail: "/assets/work/software/realcapita1 1.png",
    gallery: [
      "/assets/work/software/realcapita1 1.png",
      "/assets/work/software/realcapita2 1.png",
    ],
    year: "2024",
    client: "RealCapita Partners",
    hasCaseStudy: false,
    subCategory: "Asset & Portfolio Management",
    workType: "Enterprise SaaS",
    industry: "Real Estate & Investment",
  },
  {
    id: "realcapita-prop",
    slug: "realcapita-commercial-property",
    title: "Commercial Property Portfolio Management",
    description:
      "High-density commercial real estate tenant lease manager, facilities tracker, and maintenance ticketing workflow.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["Real Estate", "Lease Management", "Facility Operations"],
    thumbnail: "/assets/work/software/realcapita2 1.png",
    gallery: [
      "/assets/work/software/realcapita2 1.png",
      "/assets/work/software/realcapita1 1.png",
    ],
    year: "2024",
    client: "RealCapita Properties",
    hasCaseStudy: false,
    subCategory: "Asset & Portfolio Management",
    workType: "SaaS Dashboard",
    industry: "Real Estate & Investment",
  },
  {
    id: "cloudops-telemetry",
    slug: "cloudops-telemetry-hub",
    title: "Cloud Infrastructure & Telemetry Hub",
    description:
      "Multi-region Kubernetes cluster observer providing latency heatmaps, pod telemetry logs, and distributed tracing.",
    category: "softwares",
    categoryLabel: "03. Softwares",
    discipline: "ux",
    tags: ["DevOps", "Cloud Telemetry", "Infrastructure SaaS"],
    thumbnail: "/assets/work/software/0-sa-d5-f35d061d92420498cef15efca028118a.1 1.png",
    gallery: [
      "/assets/work/software/0-sa-d5-f35d061d92420498cef15efca028118a.1 1.png",
      "/assets/work/software/07_REPORTS 1.png",
    ],
    year: "2024",
    client: "CloudOps Telemetry",
    hasCaseStudy: false,
    subCategory: "Cloud & DevOps",
    workType: "Data Visualization",
    industry: "Technology",
  },

  // ════════════════════════════════════════════════════════════
  // 04. BRANDING
  // ════════════════════════════════════════════════════════════
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
    subCategory: "Artisan & Food",
    workType: "Brand Identity",
    industry: "Food & Beverage",
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
    subCategory: "Corporate Identity",
    workType: "Logo & Stationery",
    industry: "Finance & Fintech",
  },

  // ════════════════════════════════════════════════════════════
  // 05. MARKETING
  // ════════════════════════════════════════════════════════════
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
    subCategory: "Print Collateral",
    workType: "Brochure & Editorial",
    industry: "Healthcare",
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
    subCategory: "Editorial & Publication",
    workType: "Company Profile",
    industry: "Technology",
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
