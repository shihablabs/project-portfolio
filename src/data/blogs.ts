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
}

export const blogPosts: BlogPost[] = [
  {
    id: "navigating-road-to-ux-ui",
    slug: "navigating-road-to-ux-ui",
    title: "NAVIGATING THE ROAD TO UX/UI DESIGN",
    category: "Design",
    date: "May 2024",
    readTime: "5 min read",
    coverImage: "/assets/images/blog-design.png",
    iconType: "design",
    excerpt: "Key learnings, transitions from IT into product design, and balancing business objectives with empathetic user experiences."
  },
  {
    id: "sunsets-fleeting-beauty",
    slug: "sunsets-fleeting-beauty",
    title: "SUNSETS - A CANVAS OF FLEETING BEAUTY",
    category: "Photography",
    date: "August 2024",
    readTime: "3 min read",
    coverImage: "/assets/images/blog-photography.png",
    iconType: "photo",
    excerpt: "Exploring natural illumination, fleeting atmospheric shifts, and how observational photography shapes digital visual pacing."
  },
  {
    id: "verses-that-speak-to-soul",
    slug: "verses-that-speak-to-soul",
    title: "INSPIRATION - VERSES THAT SPEAK TO THE SOUL",
    category: "Writing",
    date: "January 2025",
    readTime: "4 min read",
    coverImage: "/assets/images/blog-writing.png",
    iconType: "write",
    excerpt: "Poetic reflections, contemplative journals, and rediscovering meaning through quiet observations of daily rituals."
  }
];
