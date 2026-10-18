"use client";

import Image from "next/image";
import Link from "next/link";
import SectionBadge from "@/components/ui/SectionBadge";
import { blogPosts, BlogPost } from "@/data/blogs";

// Vertical blogs tab
function VerticalBlogsTab() {
  return (
    <div className="hidden lg:flex flex-shrink-0 pt-2">
      <Link
        href="/blogs"
        className="group flex items-center gap-3.5 select-none hover:opacity-85 transition-opacity"
        title="View All Blogs"
      >
        {/* Left vertical line */}
        <div
          className="w-[1.5px] h-[210px]"
          style={{
            background:
              "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
          }}
        />

        {/* Diamonds and text */}
        <div className="flex flex-col items-center justify-between h-[210px] py-1">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L15 8L8 16L1 8L8 0Z" fill="url(#blogsDiamondGrad)" />
          </svg>

          <span
            className="text-xs font-dm font-bold tracking-[0.2em] text-transparent bg-clip-text [writing-mode:vertical-rl] whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
            }}
          >
            VIEW ALL BLOGS
          </span>

          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L15 8L8 16L1 8L8 0Z" fill="url(#blogsDiamondGrad)" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

// Blog category icon
function BlogIcon({ type }: { type: "design" | "photo" | "write" }) {
  if (type === "design") {
    return (
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
        {/* Ruler */}
        <path
          d="M7 5L27 25L24 28L4 8L7 5Z"
          stroke="url(#blogIconGrad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 11L12 14M13 15L16 18M17 19L20 22"
          stroke="url(#blogIconGrad)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        {/* Pencil */}
        <path
          d="M5 27L8 24L25 7L28 4L28 8L11 25L8 28L5 27Z"
          stroke="url(#blogIconGrad)"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M24 10L22 8"
          stroke="url(#blogIconGrad)"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "photo") {
    return (
      <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
        {/* Viewfinder bump */}
        <path
          d="M12 5V2.5C12 2.2 12.2 2 12.5 2H19.5C19.8 2 20 2.2 20 2.5V5"
          stroke="url(#blogIconGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Camera body */}
        <rect
          x="2.5"
          y="5"
          width="27"
          height="20"
          rx="3"
          stroke="url(#blogIconGrad)"
          strokeWidth="1.5"
        />
        {/* Center heart */}
        <path
          d="M16 18.5C16 18.5 11 15.2 11 12.2C11 10.3 12.5 9 14.2 9C15.2 9 16 9.6 16 9.6C16 9.6 16.8 9 17.8 9C19.5 9 21 10.3 21 12.2C21 15.2 16 18.5 16 18.5Z"
          stroke="url(#blogIconGrad)"
          strokeWidth="1.4"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg width="32" height="28" viewBox="0 0 32 28" fill="none">
      {/* Speed lines */}
      <path
        d="M3 7H9M2 13H11M4 19H8"
        stroke="url(#blogIconGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Pen body */}
      <path
        d="M26 3L29 6L14 21L9 23L11 18L26 3Z"
        stroke="url(#blogIconGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Pen nib */}
      <path
        d="M11 18L14 21M9 23L12 20"
        stroke="url(#blogIconGrad)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Blog card component
function BlogCard({ post }: { post: BlogPost }) {
  const cardBorderStyle = {
    border: "1.5px solid",
    borderImageSource:
      "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
    borderImageSlice: 1,
  };

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group relative flex flex-col justify-between p-4 sm:p-5 pt-8 sm:pt-9 transition-transform duration-300 hover:-translate-y-1.5 cursor-pointer select-none"
      style={cardBorderStyle}
    >
      {/* Top notch mask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-3 card-badge-bg z-[1]"
      />

      {/* Top icon badge */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex items-center justify-center px-2">
        <BlogIcon type={post.iconType} />
      </div>

      {/* Card image container */}
      <div className="relative w-full aspect-square overflow-hidden bg-black/10">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      {/* Blog post title */}
      <div className="pt-5 pb-2 text-center flex items-center justify-center min-h-[58px]">
        <h4 className="font-dm font-bold text-xs sm:text-sm uppercase tracking-wider text-[var(--ink)] group-hover:text-[#DE4313] transition-colors leading-snug">
          {post.title}
        </h4>
      </div>
    </Link>
  );
}

// Blogs section parent
export default function BlogsSection() {
  return (
    <section id="blogs" className="relative w-full py-16 sm:py-24">
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(222, 67, 19, 0.4) 0%, rgba(222, 67, 19, 0) 70%)",
          width: "480px",
          height: "480px",
          top: "-60px",
          right: "-180px",
          filter: "blur(50px)",
          transform: "translateZ(0)",
        }}
      />

      {/* Main container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-12 sm:gap-14">
        {/* Header section layout */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
          {/* Section 03 badge */}
          <SectionBadge num="03" label="BLOGS" />

          {/* Center info */}
          <div className="flex-1 max-w-2xl flex flex-col justify-center gap-5 lg:pt-2">
            <h2 className="font-almarai text-2xl sm:text-3xl lg:text-[32px] font-bold text-[var(--ink)] leading-snug">
              Passion &amp; Play
            </h2>

            <p className="font-almarai text-sm sm:text-base text-[var(--body-muted)] leading-relaxed">
              A space to wander through ideas, reflections, and creative expression —
              exploring the beauty, wonder, and subtle magic in everyday life, and seeing
              the world through a thoughtful, artistic lens — offering inspiration,
              meaningful insights, and moments of quiet contemplation.
            </p>

            <h3 className="font-dm font-bold text-3xl sm:text-4xl text-gradient block leading-none pt-2">
              Design Photography Writing
            </h3>
          </div>

          {/* Right vertical tab */}
          <VerticalBlogsTab />
        </div>

        {/* Blog cards grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      {/* Global gradient definitions */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="blogsDiamondGrad"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientTransform="rotate(129.89 0.5 0.5)"
          >
            <stop offset="-29.32%" stopColor="#FEC163" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>

          <linearGradient id="blogIconGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEC163" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
}
