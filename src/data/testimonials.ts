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
    id: "aamar-pharma-team",
    author: "RAKIBUL HASAN",
    role: "Operations Head",
    company: "Aamar Pharma",
    quote: "Sejuti delivered a seamless experience for both our patient-facing mobile application and the dense order processing admin portal.",
    avatar: "/assets/testimonials/magfi-reza.png"
  },
  {
    id: "arbree-solutions-lead",
    author: "TANVIR AHMED",
    role: "Chief Technology Officer",
    company: "Arbree Solutions",
    quote: "Her design translated complex telemetry data into intuitive dashboards that our enterprise customers love using every single day.",
    avatar: "/assets/testimonials/magfi-reza.png"
  }
];

export const clientLogos = [
  { name: "Daahuk", image: "/assets/clients/daahuk.png" },
  { name: "Aamar Pharma", image: "/assets/clients/aamar-pharma.png" },
  { name: "Arbree Solutions", image: "/assets/clients/arbree-solutions.png" },
  { name: "Elevate Solutions", image: "/assets/clients/elevate-solutions.png" }
];
