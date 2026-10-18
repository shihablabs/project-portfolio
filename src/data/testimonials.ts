export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "magfi-reza-siddique",
    author: "MAGFI REZA SIDDIQUE",
    role: "Founder & Director",
    company: "Daahuk",
    quote: "Throughout the development process, Sejuti's attention to detail was remarkable. She showcased an exceptional eye for design, creating a visually appealing website that perfectly captured our organization's ethos.",
    avatar: "/assets/testimonials/magfi-reza.png"
  },
  {
    id: "rakibul-hasan",
    author: "RAKIBUL HASAN",
    role: "Operations Head",
    company: "Aamar Pharma",
    quote: "Sejuti delivered a seamless experience for both our patient-facing mobile application and the dense order processing admin portal.",
    avatar: "/assets/testimonials/magfi-reza.png"
  },
  {
    id: "tanvir-ahmed",
    author: "TANVIR AHMED",
    role: "Chief Technology Officer",
    company: "Arbree Solutions",
    quote: "Her design translated complex telemetry data into intuitive dashboards that our enterprise customers love using every single day.",
    avatar: "/assets/testimonials/magfi-reza.png"
  },
  {
    id: "shahrin-chowdhury",
    author: "SHAHRIN CHOWDHURY",
    role: "Head of Growth",
    company: "Elevate Solutions",
    quote: "Working with Sejuti elevated our brand identity to global standards. Her creative vision and execution are truly world-class.",
    avatar: "/assets/testimonials/magfi-reza.png"
  },
  {
    id: "farhan-kabir",
    author: "FARHAN KABIR",
    role: "Product Manager",
    company: "HealthBridge",
    quote: "Her user research methodology and UI craft transformed our product onboarding flow, resulting in an immediate 35% bump in user engagement.",
    avatar: "/assets/testimonials/magfi-reza.png"
  },
  {
    id: "nusrat-jahan",
    author: "NUSRAT JAHAN",
    role: "Creative Director",
    company: "Studio Morph",
    quote: "An extraordinarily talented designer who brings empathy, clarity, and uncompromising aesthetic polish to every single project.",
    avatar: "/assets/testimonials/magfi-reza.png"
  }
];

export const clientLogos = [
  { name: "Daahuk", image: "/assets/clients/daahuk-c.png" },
  { name: "Aamar Pharma", image: "/assets/clients/aamar-pharma-c.png" },
  { name: "Arbree Solutions", image: "/assets/clients/arbree-solutions-c.png" },
  { name: "Elevate Solutions", image: "/assets/clients/elevate-solutions-c.png" }
];
