export type BlogCategory = 'Design' | 'Photography' | 'Writing';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  date: string;
  readTime: string;
  coverImage: string;
  iconType: 'design' | 'photo' | 'write';
  excerpt: string;
  content?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "navigating-road-to-ux-ui",
    slug: "navigating-road-to-ux-ui",
    title: "NAVIGATING THE ROAD TO UX/UI DESIGN",
    category: "Design",
    date: "March 10, 2026",
    readTime: "5 min read",
    coverImage: "/assets/images/blog-design.png",
    iconType: "design",
    excerpt:
      "This post traces the road through day one — from discovering design beyond code, to taking the first steps into UX, learning through real projects, challenges, and growth. It is a reflection on the milestones, lessons, and defining moments that shaped the path toward becoming a UX/UI designer.",
    content: [
      "This post traces the road through day one — from discovering design beyond code, to taking the first steps into UX, learning through real projects, challenges, and growth. It is a reflection on the milestones, lessons, and defining moments that shaped the path toward becoming a UX/UI designer.",
      "Design is more than aesthetics; it is an empathetic conversation between human intent and systemic capability. Navigating from technical curiosity into UX required unlearning assumptions and actively listening to users.",
    ],
  },
  {
    id: "sunsets-fleeting-beauty",
    slug: "sunsets-fleeting-beauty",
    title: "SUNSETS – A CANVAS OF FLEETING BEAUTY",
    category: "Photography",
    date: "March 4, 2026",
    readTime: "3 min read",
    coverImage: "/assets/images/blog-photography.png",
    iconType: "photo",
    excerpt:
      "Exploring natural illumination, fleeting atmospheric shifts, and how observational photography shapes digital visual pacing.",
  },
  {
    id: "verses-that-speak-to-soul",
    slug: "verses-that-speak-to-soul",
    title: "INSPIRATION – VERSES THAT SPEAK TO THE SOUL",
    category: "Writing",
    date: "March 4, 2026",
    readTime: "4 min read",
    coverImage: "/assets/images/blog-writing.png",
    iconType: "write",
    excerpt:
      "Poetic reflections, contemplative journals, and rediscovering meaning through quiet observations of daily rituals.",
  },
];
