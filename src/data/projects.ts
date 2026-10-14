export type ProjectCategory = 'websites' | 'apps' | 'softwares' | 'branding' | 'marketing';

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  categoryLabel: string;
  tags: string[];
  year: string;
  featured: boolean;
  coverImage: string;
  mockupImage?: string;
  summary: string;
  overview?: string;
  deliverables?: string[];
  metrics?: { label: string; value: string }[];
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    id: "aamar-pharma",
    slug: "aamar-pharma",
    title: "DIGITAL PHARMACY PLATFORM: MEDICINE ORDERING AND DELIVERY SOLUTION",
    client: "Aamar Pharma",
    category: "apps",
    categoryLabel: "App Design & Development",
    tags: ["UX & UI Design", "Branding", "Print & Digital Marketing"],
    year: "2024",
    featured: true,
    coverImage: "/assets/projects/aamar-pharma-mockup.png",
    mockupImage: "/assets/images/work-mockup.png",
    summary: "Designed a comprehensive online pharmacy solution, featuring a customer app for ordering medicines and an admin panel for managing and processing orders efficiently.",
    deliverables: ["Mobile iOS & Android App", "Web Dashboard", "Design System", "Brand Identity"],
    caseStudyUrl: "/work/aamar-pharma"
  },
  {
    id: "daahuk-travel",
    slug: "daahuk-travel",
    title: "DAAHUK: ECO-CONSCIOUS TRAVEL & EXPEDITION PORTAL",
    client: "Daahuk",
    category: "websites",
    categoryLabel: "Website Design",
    tags: ["UX & UI Design", "Web Development", "Content Strategy"],
    year: "2023",
    featured: true,
    coverImage: "/assets/clients/daahuk.png",
    mockupImage: "/assets/projects/aamar-pharma-mockup.png",
    summary: "Created a modern visual storytelling website celebrating wild expeditions and thoughtful travel experiences across South Asia.",
    deliverables: ["Responsive Web Platform", "Editorial UI", "CMS Integration"],
    caseStudyUrl: "/work/daahuk-travel"
  },
  {
    id: "arbree-analytics",
    slug: "arbree-analytics",
    title: "ARBREE SOLUTIONS: ENTERPRISE DATA ANALYTICS & INSIGHTS",
    client: "Arbree Solutions",
    category: "softwares",
    categoryLabel: "Software & SaaS",
    tags: ["SaaS UX", "Data Visualization", "Design System"],
    year: "2024",
    featured: true,
    coverImage: "/assets/clients/arbree-solutions.png",
    mockupImage: "/assets/projects/aamar-pharma-mockup.png",
    summary: "Engineered high-density data visualizations and customizable dashboards for real-time business telemetry and operations monitoring.",
    deliverables: ["SaaS Architecture", "Component Library", "Interactive Charts"],
    caseStudyUrl: "/work/arbree-analytics"
  },
  {
    id: "elevate-solutions-brand",
    slug: "elevate-solutions-brand",
    title: "ELEVATE SOLUTIONS: CORPORATE IDENTITY & DIGITAL ASSETS",
    client: "Elevate Solutions",
    category: "branding",
    categoryLabel: "Logo & Branding",
    tags: ["Brand Identity", "Design Guidelines", "Print Collateral"],
    year: "2023",
    featured: false,
    coverImage: "/assets/clients/elevate-solutions.png",
    mockupImage: "/assets/projects/aamar-pharma-mockup.png",
    summary: "Developed a comprehensive brand book, typographic rules, and pitch materials reflecting technical precision and corporate leadership.",
    deliverables: ["Brand Identity System", "Stationery", "Social Media Kit"],
    caseStudyUrl: "/work/elevate-solutions-brand"
  }
];

export const projectCategories = [
  { id: "all", label: "ALL WORK" },
  { id: "websites", label: "WEBSITES" },
  { id: "apps", label: "APPS" },
  { id: "softwares", label: "SOFTWARES" },
  { id: "branding", label: "LOGO & BRANDING" },
  { id: "marketing", label: "PRINT & DIGITAL MARKETING" }
];
