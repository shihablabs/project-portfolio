"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { BlogPost, blogPosts } from "@/data/blogs";

interface BlogDetailViewProps {
  post: BlogPost;
}

export default function BlogDetailView({ post }: BlogDetailViewProps) {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, []);

  // Compute Prev and Next blog posts
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const safeIndex = currentIndex !== -1 ? currentIndex : 0;
  const prevIndex = (safeIndex - 1 + blogPosts.length) % blogPosts.length;
  const nextIndex = (safeIndex + 1) % blogPosts.length;
  const prevPost = blogPosts[prevIndex];
  const nextPost = blogPosts[nextIndex];

  // More blogs list (2 cards matching screenshot)
  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug);
  const morePosts =
    otherPosts.length >= 2
      ? otherPosts.slice(0, 2)
      : [
          blogPosts.find((p) => p.slug === "verses-that-speak-to-soul") || post,
          blogPosts.find((p) => p.slug === "verses-that-speak-to-soul") || post,
        ];

  return (
    <section className="w-full px-4 sm:px-6 lg:px-10 pt-6 sm:pt-10 pb-20">
      {/* ── Main Framed Container with Top-Right Close Button ── */}
      <div
        className="relative w-full bg-transparent p-5 sm:p-8 lg:p-12"
        style={{
          border: "1.5px solid transparent",
          borderImageSource:
            "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
          borderImageSlice: 1,
        }}
      >
        {/* Top-Right "X" Back/Close Button sitting exactly on the corner */}
        <Link
          href="/blogs"
          aria-label="Back to Blogs"
          className="group absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DE4313] hover:border-[#FEC163] bg-[var(--bg)] flex items-center justify-center transition-all duration-300 hover:scale-110 z-30 cursor-pointer shadow-sm"
          style={{ backgroundColor: "var(--bg)" }}
        >
          <X
            className="w-4 h-4 sm:w-5 sm:h-5 text-[#DE4313] group-hover:text-[#FEC163] transition-colors"
            strokeWidth={2}
          />
        </Link>

        {/* ── Article Title ── */}
        <h1 className="font-dm font-extrabold uppercase text-2xl sm:text-4xl lg:text-[44px] leading-[1.15] tracking-wide max-w-4xl text-[var(--ink)]">
          {post.title}
        </h1>

        {/* ── Meta Row: Category + Date & Social Share Icons ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-6 sm:mt-8 mb-8 sm:mb-10">
          {/* Left: Category & Date */}
          <div>
            <span
              className="block font-dm font-bold text-2xl sm:text-3xl text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              {post.category}
            </span>

            <p className="font-dm text-xs sm:text-sm text-[var(--ink-64)] mt-1.5">
              Posted on{" "}
              <span
                className="font-medium text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                {post.date}
              </span>
            </p>
          </div>

          {/* Right: 4 Social Sharing Buttons with linear-gradient(135deg, #FEC163 0%, #DE4313 100%) */}
          <div className="flex items-center gap-3 sm:gap-3.5">
            {/* Facebook */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on Facebook"
              className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DE4313] p-[2.5px] flex items-center justify-center transition-transform hover:scale-105"
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #FEC163 0%, #DE4313 100%)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.14 0 9 1.583 9 4.615V8z" />
                </svg>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                shareUrl
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on LinkedIn"
              className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DE4313] p-[2.5px] flex items-center justify-center transition-transform hover:scale-105"
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #FEC163 0%, #DE4313 100%)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </div>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DE4313] p-[2.5px] flex items-center justify-center transition-transform hover:scale-105"
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #FEC163 0%, #DE4313 100%)",
                }}
              >
                <svg
                  width="15"
                  height="15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>

            {/* X / Twitter */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                shareUrl
              )}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Share on X"
              className="group relative w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-[#DE4313] p-[2.5px] flex items-center justify-center transition-transform hover:scale-105"
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center text-white transition-opacity hover:opacity-90 shadow-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #FEC163 0%, #DE4313 100%)",
                }}
              >
                <svg
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* ── Featured Cover Artwork ── */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9] overflow-hidden bg-black/10">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 1200px"
          />
        </div>

        {/* ── Article Content Area (Exact Copy from User Screenshot) ── */}
        <div className="mt-8 sm:mt-12 space-y-6 font-dm text-[var(--ink-78)] text-sm sm:text-base leading-[1.75]">
          <p>
            This post traces the road through day one — from discovering design
            beyond code, to taking the first steps into UX, learning through
            real projects, challenges, and growth. It is a reflection on the
            milestones, lessons, and defining moments that shaped the path
            toward becoming a UX/UI designer.
          </p>

          <p>
            This post traces the road through day one — from discovering design
            beyond code, to taking the first steps into UX, learning through
            real projects, challenges, and growth. It is a reflection on the
            milestones, lessons, and defining moments that shaped the path
            toward becoming a UX/UI designer.
          </p>

          <h2 className="font-dm font-bold text-2xl sm:text-3xl text-[var(--ink)] pt-4">
            A Quiet Visionary
          </h2>

          <p>
            Being an UX & UI designer feels like a natural extension of who I
            am — a space where I get to merge my tech roots with creative
            instincts. I see UX everywhere, finding inspiration in everyday
            moments and the subtle ways we interact with the world. A
            Bangladeshi native shaped by over a decade in Bangkok, I am
            currently freelancing in Dhaka, while exploring other creative
            outlets outside work.
          </p>

          <h2 className="font-dm font-bold text-2xl sm:text-3xl text-[var(--ink)] pt-4">
            A Quiet Visionary
          </h2>

          <p>
            Being an UX & UI designer feels like a natural extension of who I
            am — a space where I get to merge my tech roots with creative
            instincts. I see UX everywhere, finding inspiration in everyday
            moments and the subtle ways we interact with the world. A
            Bangladeshi native shaped by over a decade in Bangkok, I am
            currently freelancing in Dhaka, while exploring other creative
            outlets outside work.
          </p>

          <h3 className="font-dm font-bold text-sm sm:text-base uppercase tracking-wider text-[var(--ink)] pt-3">
            MERAKI
          </h3>

          <p>
            Designing with passion, devotion, and meticulous care, ensuring the
            work is a true labor of love. Designing with passion, devotion, and
            meticulous care, ensuring the work is a true labor of love. Designing
            with passion, devotion, and meticulous care, ensuring the work is a
            true labor of love. Designing with passion, devotion, and meticulous
            care, ensuring the work is a true labor of love.
          </p>

          <h3 className="font-dm font-bold text-sm sm:text-base uppercase tracking-wider text-[var(--ink)] pt-3">
            MERAKI
          </h3>

          <p>
            Designing with passion, devotion, and meticulous care, ensuring the
            work is a true labor of love. Designing with passion, devotion, and
            meticulous care, ensuring the work is a true labor of love. Designing
            with passion, devotion, and meticulous care, ensuring the work is a
            true labor of love. Designing with passion, devotion, and meticulous
            care, ensuring the work is a true labor of love.
          </p>
        </div>
      </div>

      {/* ── More Blogs Divider Line ── */}
      <div className="w-full flex items-center my-12 sm:my-16 select-none">
        <div className="flex-1 h-[1.5px] bg-[#DE4313]/60" />
        <span
          className="px-6 font-dm font-bold text-sm sm:text-base text-transparent bg-clip-text flex-shrink-0"
          style={{
            backgroundImage:
              "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
          }}
        >
          More Blogs
        </span>
        <div className="flex-1 h-[1.5px] bg-[#DE4313]/60" />
      </div>

      {/* ── More Blogs Grid (2 Cards Matching Screenshot) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
        {morePosts.map((item, idx) => (
          <Link
            key={`${item.slug}-${idx}`}
            href={`/blogs/${item.slug}`}
            className="group relative bg-transparent p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-6 transition-transform duration-300 hover:-translate-y-1"
            style={{
              border: "1.5px solid transparent",
              borderImageSource:
                "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
              borderImageSlice: 1,
            }}
          >
            {/* Left Thumbnail */}
            <div className="relative w-full sm:w-[140px] lg:w-[160px] aspect-square flex-shrink-0 overflow-hidden bg-black/10">
              <Image
                src={item.coverImage}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 160px"
              />
            </div>

            {/* Right Info */}
            <div className="flex flex-col justify-center w-full pt-2 sm:pt-0">
              {/* Tag with linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%) */}
              <span
                className="inline-block px-4 py-0.5 rounded-full border border-[#DE4313] text-xs font-dm font-semibold text-transparent bg-clip-text w-fit mb-2.5"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                }}
              >
                {item.category}
              </span>

              <h4 className="font-almarai font-extrabold text-sm sm:text-base text-[var(--ink)] tracking-wider uppercase leading-snug group-hover:text-[#FEC163] transition-colors">
                {item.title}
              </h4>

              <p
                className="font-dm text-xs sm:text-sm font-semibold mt-2.5 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                {item.date}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ── Previous / Next Slider Navigation Bar ── */}
      <div className="w-full flex items-center select-none pt-10 sm:pt-14 pb-4">
        {/* Left Arrow & Line */}
        <Link
          href={`/blogs/${prevPost.slug}`}
          className="flex-1 flex items-center text-[#DE4313] hover:opacity-80 transition-opacity group cursor-pointer"
          aria-label="Previous Blog"
        >
          {/* Left Arrow Tip on the far left edge */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="flex-shrink-0 text-[#DE4313]"
          >
            <path
              d="M7 2L3 6L7 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 6H11"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          {/* Left Line */}
          <div className="flex-1 h-[1.5px] bg-[#DE4313]/60 group-hover:bg-[#DE4313] transition-colors" />
        </Link>

        {/* Previous & Next Text Buttons in Center */}
        <div className="flex items-center gap-6 sm:gap-10 px-5 sm:px-8 flex-shrink-0 font-dm text-sm sm:text-base">
          <Link
            href={`/blogs/${prevPost.slug}`}
            className="font-medium text-transparent bg-clip-text hover:opacity-80 transition-opacity cursor-pointer"
            style={{
              backgroundImage:
                "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
            }}
          >
            Previous
          </Link>

          <Link
            href={`/blogs/${nextPost.slug}`}
            className="font-medium text-transparent bg-clip-text hover:opacity-80 transition-opacity cursor-pointer"
            style={{
              backgroundImage:
                "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
            }}
          >
            Next
          </Link>
        </div>

        {/* Right Line & Arrow */}
        <Link
          href={`/blogs/${nextPost.slug}`}
          className="flex-1 flex items-center text-[#DE4313] hover:opacity-80 transition-opacity group cursor-pointer"
          aria-label="Next Blog"
        >
          {/* Right Line */}
          <div className="flex-1 h-[1.5px] bg-[#DE4313]/60 group-hover:bg-[#DE4313] transition-colors" />

          {/* Right Arrow Tip on the far right edge */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            className="flex-shrink-0 text-[#DE4313]"
          >
            <path
              d="M1 6H9"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M5 2L9 6L5 10"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
