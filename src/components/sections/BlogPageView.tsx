"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

// Sparkle action button with enlarged notched ring and tight spacing
function ActionSparkleButton({
  label,
  onClick,
}: {
  label: string;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="group inline-flex items-center cursor-pointer select-none"
    >
      <div className="relative w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg width="52" height="58" viewBox="0 0 52 58" fill="none">
          {/* Notched outer ring with gap on the right */}
          <path
            d="M 46 44.5 A 25 25 0 1 1 46 13.5"
            stroke="url(#blogSparkleGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Inner filled circle */}
          <circle cx="26" cy="29" r="17" fill="url(#blogSparkleGrad)" />
          {/* Sparkle 4-point star */}
          <path
            d="M26 20L27.6 27.4L35 29L27.6 30.6L26 38L24.4 30.6L17 29L24.4 27.4L26 20Z"
            fill="#FFF7E7"
          />
        </svg>
      </div>

      <span
        className="font-almarai font-extrabold text-xs sm:text-sm tracking-[0.2em] text-transparent bg-clip-text transition-all uppercase whitespace-nowrap"
        style={{
          backgroundImage:
            "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function BlogPageView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSort, setSelectedSort] = useState<string>("Featured");
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [showSortMenu, setShowSortMenu] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [subscribed, setSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [showSubscribeBox, setShowSubscribeBox] = useState(false);

  const categories = ["All", "Design", "Photography", "Writing"];
  const sortOptions = ["Featured", "Newest", "Oldest"];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
      setShowSubscribeBox(false);
    }
  };

  return (
    <section
      id="blogs"
      className="w-full relative px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24 select-none"
    >
      {/* SVG Gradient definitions */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="blogSparkleGrad"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientTransform="rotate(129.89 0.5 0.5)"
          >
            <stop offset="-29.32%" stopColor="#FEC163" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full max-w-[1240px] mx-auto space-y-10 sm:space-y-14">
        {/* ── 01. BLOG HERO CARD (Pixel-perfect Figma Layout) ── */}
        <div className="relative w-full bg-transparent min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] flex items-center pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 pl-6 sm:pl-10 lg:pl-14 pr-6 sm:pr-10 lg:pr-14 mb-10">
          {/* Top horizontal border line (starts at 0,0 and stops before Blogs) */}
          <div
            className="absolute top-0 left-0 right-[150px] sm:right-[180px] h-[1.5px] pointer-events-none"
            style={{
              background:
                "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
            }}
          />

          {/* Left vertical border line (starts at 0,0 to bottom) */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[1.5px] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
            }}
          />

          {/* Bottom horizontal border line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
            style={{
              background:
                "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
            }}
          />

          {/* Right vertical border line (starts below Blogs to bottom) */}
          <div
            className="absolute top-[28px] sm:top-[34px] right-0 bottom-0 w-[1.5px] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
            }}
          />

          {/* Top-Right Blogs heading (font-weight: 500, centered on top line) */}
          <div className="absolute top-0 right-4 sm:right-8 -translate-y-1/2 flex items-center select-none z-20">
            <span className="font-dm font-medium text-3xl sm:text-4xl lg:text-[40px] text-[var(--ink)] tracking-tight leading-none">
              Blogs
            </span>
          </div>

          {/* ── Inner Artwork & Glow Frame with overflow-hidden ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Rich Ellipse Glow underneath artwork */}
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(222, 67, 19, 0.55) 0%, rgba(222, 67, 19, 0.22) 52%, transparent 75%)",
                filter: "blur(80px)",
                width: "460px",
                height: "400px",
                right: "10px",
                bottom: "0px",
              }}
            />

            {/* Soft ambient glow on left behind text */}
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                background: "rgba(222, 67, 19, 0.12)",
                filter: "blur(90px)",
                width: "340px",
                height: "260px",
                left: "20px",
                top: "60px",
              }}
            />

            {/* Desk artwork pinned to right bottom matching Figma */}
            <div className="absolute right-4 sm:right-8 lg:right-[-40px] bottom-[-40px] sm:bottom-[-120px] w-[320px] sm:w-[420px] md:w-[460px] lg:w-[500px] flex items-end justify-end">
              <Image
                src="/assets/blogs/blog-hero.png"
                alt="Off Canvas Journal Workspace"
                width={500}
                height={400}
                className="w-full h-auto object-contain object-right-bottom drop-shadow-xl"
                priority
              />
            </div>
          </div>

          {/* Left Hero Content Layer */}
          <div className="relative z-10 w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[780px] flex flex-col justify-center space-y-1 sm:space-y-1">
            <h1
              className="font-dm uppercase whitespace-nowrap text-[var(--ink)]"
              style={{
                fontFamily: "var(--font-dm-sans), sans-serif",
                fontWeight: 600,
                fontSize: "clamp(30px, 4.2vw, 72px)",
                lineHeight: "100%",
                letterSpacing: "0%",
                color: "var(--ink)",
                textShadow: "0px 0px 10px rgba(244, 115, 3, 0.25)",
                filter: "drop-shadow(0px 0px 8px rgba(244, 115, 3, 0.35))",
              }}
            >
              OFF CANVAS JOURNAL
            </h1>

            <h2
              className="font-dm font-bold text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] text-transparent bg-clip-text leading-tight mt-2 sm:mt-3"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              A Personal Archive
            </h2>

            <p className="font-dm text-xs sm:text-[14px] text-[var(--ink-78)] leading-[1.65] mt-4 sm:mt-5 max-w-lg">
              Get notified when new posts are published.
              <br />
              Stay updated with fresh thoughts and ideas.
              <br />
              Explore{" "}
              <span
                className="font-semibold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                design
              </span>
              ,{" "}
              <span
                className="font-semibold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                photography
              </span>
              , and{" "}
              <span
                className="font-semibold text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                creative writing
              </span>
              .
            </p>

            {/* Subscribe button & interactive modal/input */}
            <div className="pt-4 sm:pt-6">
              {!subscribed ? (
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <ActionSparkleButton
                    label="SUBSCRIBE"
                    onClick={() => setShowSubscribeBox(!showSubscribeBox)}
                  />

                  {showSubscribeBox && (
                    <form
                      onSubmit={handleSubscribe}
                      className="flex items-center gap-2 border border-[#DE4313]/60 bg-[var(--bg)] px-3 py-1.5 rounded-full"
                    >
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="Enter your email"
                        className="bg-transparent text-xs font-dm text-[var(--ink)] placeholder:text-[var(--body-muted)] focus:outline-none w-44 sm:w-52"
                      />
                      <button
                        type="submit"
                        className="text-xs font-dm font-bold text-[#DE4313] hover:text-[#FEC163] transition-colors uppercase"
                      >
                        Join
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 text-xs font-dm font-bold text-[#DE4313]">
                  <span>✓ Subscribed to Off Canvas Journal!</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── 02. CATEGORY & SORT BAR ── */}
        <div className="w-full flex items-center justify-between px-1 font-dm">
          {/* Category Dropdown */}
          <div className="relative">
            <span
              className="block font-dm font-bold text-sm sm:text-base tracking-[0.15em] uppercase text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              CATEGORY
            </span>

            <button
              onClick={() => setShowCatMenu(!showCatMenu)}
              className="flex items-center gap-4 sm:gap-6 text-sm sm:text-base font-normal transition-colors mt-1 cursor-pointer"
              style={{ color: "rgba(255, 247, 231, 0.8)" }}
            >
              <span>{selectedCategory}</span>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                className={`transition-transform duration-200 ${
                  showCatMenu ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1.5 1.5L7 7L12.5 1.5"
                  stroke="#DE4313"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showCatMenu && (
              <div className="absolute top-full left-0 mt-2 w-40 bg-[var(--card-bg)] border border-[#DE4313]/60 shadow-xl z-30 py-1.5 rounded-sm">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setShowCatMenu(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-sm font-dm transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "text-[#DE4313] font-bold bg-[#DE4313]/10"
                        : "text-[var(--ink)] hover:bg-[#DE4313]/5"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="relative text-right">
            <span
              className="block font-dm font-bold text-sm sm:text-base tracking-[0.15em] uppercase text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              SORT BY
            </span>

            <button
              onClick={() => setShowSortMenu(!showSortMenu)}
              className="flex items-center justify-end gap-4 sm:gap-6 text-sm sm:text-base font-normal transition-colors mt-1 ml-auto cursor-pointer"
              style={{ color: "rgba(255, 247, 231, 0.8)" }}
            >
              <span>{selectedSort}</span>
              <svg
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
                className={`transition-transform duration-200 ${
                  showSortMenu ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1.5 1.5L7 7L12.5 1.5"
                  stroke="#DE4313"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {showSortMenu && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-[var(--card-bg)] border border-[#DE4313]/60 shadow-xl z-30 py-1.5 text-left rounded-sm">
                {sortOptions.map((sort) => (
                  <button
                    key={sort}
                    onClick={() => {
                      setSelectedSort(sort);
                      setShowSortMenu(false);
                    }}
                    className={`w-full text-left px-3.5 py-2 text-sm font-dm transition-colors cursor-pointer ${
                      selectedSort === sort
                        ? "text-[#DE4313] font-bold bg-[#DE4313]/10"
                        : "text-[var(--ink)] hover:bg-[#DE4313]/5"
                    }`}
                  >
                    {sort}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── 03. FEATURED BLOG CARD ── */}
        <div
          className="relative w-full bg-transparent p-4 sm:p-6 lg:p-8 transition-transform duration-300 hover:-translate-y-1"
          style={{
            border: "1.5px solid transparent",
            borderImageSource:
              "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
            borderImageSlice: 1,
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left Cover Image */}
            <Link
              href="/blogs/navigating-road-to-ux-ui"
              className="lg:col-span-6 relative w-full aspect-[16/10] overflow-hidden bg-black/10 group cursor-pointer"
            >
              <Image
                src="/assets/images/blog-design.png"
                alt="Make Things Happen"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </Link>

            {/* Right Details */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-4">
              <div>
                <span
                  className="inline-block px-4 py-0.5 rounded-full text-xs font-dm font-semibold tracking-wide border border-[#E45D23] text-transparent bg-clip-text mb-3"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                  }}
                >
                  Design
                </span>

                <Link href="/blogs/navigating-road-to-ux-ui" className="block group">
                  <h3 className="font-almarai font-extrabold text-base sm:text-lg lg:text-xl text-[var(--ink)] tracking-wider leading-snug uppercase group-hover:text-[#FEC163] transition-colors">
                    NAVIGATING THE ROAD TO UX/UI DESIGN
                  </h3>
                </Link>

                <p
                  className="font-dm text-xs font-semibold mt-1 mb-3 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  March 10, 2026
                </p>

                <p className="font-dm text-xs sm:text-sm text-[var(--body-text)] leading-relaxed">
                  This post traces the road through day one — from discovering
                  design beyond code, to taking the first steps into UX,
                  learning through real projects, challenges, and growth. It is
                  a reflection on the milestones, lessons, and defining moments
                  that shaped the path toward becoming a UX/UI designer.
                </p>
              </div>

              <div className="pt-2">
                <Link href="/blogs/navigating-road-to-ux-ui">
                  <ActionSparkleButton label="VIEW FULL BLOG" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── 04. 2-COLUMN BLOG GRID (3 Cards: 1 Left, 2 Right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column (1 Tall Vertical Photography Card) */}
          <Link
            href="/blogs/sunsets-fleeting-beauty"
            className="group relative bg-transparent p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 h-full"
            style={{
              border: "1.5px solid transparent",
              borderImageSource:
                "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
              borderImageSlice: 1,
            }}
          >
            <div className="relative w-full aspect-[16/11] overflow-hidden bg-black/10">
              <Image
                src="/assets/images/blog-photography.png"
                alt="Sunsets Skyline"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="pt-4 sm:pt-6">
              <span
                className="inline-block px-4 py-0.5 rounded-full text-xs font-dm font-semibold tracking-wide border border-[#E45D23] text-transparent bg-clip-text mb-3"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                }}
              >
                Photography
              </span>

              <h4 className="font-almarai font-extrabold text-sm sm:text-base text-[var(--ink)] tracking-wider uppercase">
                SUNSETS – A CANVAS OF FLEETING BEAUTY
              </h4>

              <p
                className="font-dm text-xs sm:text-sm font-semibold mt-2 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                March 4, 2026
              </p>
            </div>
          </Link>

          {/* Right Column (2 Horizontal Writing Cards) */}
          <div className="flex flex-col gap-6 lg:gap-8 justify-between h-full">
            {/* Right Card 1 */}
            <Link
              href="/blogs/verses-that-speak-to-soul"
              className="group relative bg-transparent p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-7 transition-transform duration-300 hover:-translate-y-1 flex-1"
              style={{
                border: "1.5px solid transparent",
                borderImageSource:
                  "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
                borderImageSlice: 1,
              }}
            >
              <div className="relative w-full sm:w-[140px] lg:w-[160px] aspect-[3/4] sm:aspect-[3/4] flex-shrink-0 overflow-hidden bg-black/10">
                <Image
                  src="/assets/images/blog-writing.png"
                  alt="Emerald Companion"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>

              <div className="flex flex-col justify-center w-full pt-3 sm:pt-0">
                <span
                  className="inline-block px-4 py-0.5 rounded-full text-xs font-dm font-semibold tracking-wide border border-[#E45D23] text-transparent bg-clip-text w-fit mb-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                  }}
                >
                  Writing
                </span>

                <h4 className="font-almarai font-extrabold text-sm sm:text-base text-[var(--ink)] tracking-wider uppercase leading-snug">
                  INSPIRATION – VERSES THAT SPEAK TO THE SOUL
                </h4>

                <p
                  className="font-dm text-xs sm:text-sm font-semibold mt-2 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  March 4, 2026
                </p>
              </div>
            </Link>

            {/* Right Card 2 */}
            <Link
              href="/blogs/verses-that-speak-to-soul"
              className="group relative bg-transparent p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-5 sm:gap-7 transition-transform duration-300 hover:-translate-y-1 flex-1"
              style={{
                border: "1.5px solid transparent",
                borderImageSource:
                  "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
                borderImageSlice: 1,
              }}
            >
              <div className="relative w-full sm:w-[140px] lg:w-[160px] aspect-[3/4] sm:aspect-[3/4] flex-shrink-0 overflow-hidden bg-black/10">
                <Image
                  src="/assets/images/blog-writing.png"
                  alt="Emerald Companion"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 160px"
                />
              </div>

              <div className="flex flex-col justify-center w-full pt-3 sm:pt-0">
                <span
                  className="inline-block px-4 py-0.5 rounded-full text-xs font-dm font-semibold tracking-wide border border-[#E45D23] text-transparent bg-clip-text w-fit mb-2"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                  }}
                >
                  Writing
                </span>

                <h4 className="font-almarai font-extrabold text-sm sm:text-base text-[var(--ink)] tracking-wider uppercase leading-snug">
                  INSPIRATION – VERSES THAT SPEAK TO THE SOUL
                </h4>

                <p
                  className="font-dm text-xs sm:text-sm font-semibold mt-2 text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  March 4, 2026
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* ── 05. ROW OF 2 PHOTOGRAPHY CARDS ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <Link
            href="/blogs/sunsets-fleeting-beauty"
            className="group relative bg-transparent p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            style={{
              border: "1.5px solid transparent",
              borderImageSource:
                "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
              borderImageSlice: 1,
            }}
          >
            <div className="relative w-full aspect-[16/11] overflow-hidden bg-black/10">
              <Image
                src="/assets/images/blog-photography.png"
                alt="Sunsets Skyline"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="pt-4 sm:pt-6">
              <span
                className="inline-block px-4 py-0.5 rounded-full text-xs font-dm font-semibold tracking-wide border border-[#E45D23] text-transparent bg-clip-text mb-3"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                }}
              >
                Photography
              </span>

              <h4 className="font-almarai font-extrabold text-sm sm:text-base text-[var(--ink)] tracking-wider uppercase">
                SUNSETS – A CANVAS OF FLEETING BEAUTY
              </h4>

              <p
                className="font-dm text-xs sm:text-sm font-semibold mt-2 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                March 4, 2026
              </p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link
            href="/blogs/sunsets-fleeting-beauty"
            className="group relative bg-transparent p-5 sm:p-6 lg:p-7 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1"
            style={{
              border: "1.5px solid transparent",
              borderImageSource:
                "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
              borderImageSlice: 1,
            }}
          >
            <div className="relative w-full aspect-[16/11] overflow-hidden bg-black/10">
              <Image
                src="/assets/images/blog-photography.png"
                alt="Sunsets Skyline"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="pt-4 sm:pt-6">
              <span
                className="inline-block px-4 py-0.5 rounded-full text-xs font-dm font-semibold tracking-wide border border-[#E45D23] text-transparent bg-clip-text mb-3"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                }}
              >
                Photography
              </span>

              <h4 className="font-almarai font-extrabold text-sm sm:text-base text-[var(--ink)] tracking-wider uppercase">
                SUNSETS – A CANVAS OF FLEETING BEAUTY
              </h4>

              <p
                className="font-dm text-xs sm:text-sm font-semibold mt-2 text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                March 4, 2026
              </p>
            </div>
          </Link>
        </div>

        {/* ── 06. PAGINATION SLIDER BAR (Exact ContactSection Style) ── */}
        <div className="pt-8 sm:pt-12 pb-6">
          <div className="w-full flex items-center select-none pt-2">
            {/* Prev arrow and line */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className={`flex-1 flex items-center text-[#DE4313] transition-opacity ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:opacity-80 cursor-pointer"
              }`}
              aria-label="Previous page"
            >
              {/* Seamless arrow tip */}
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M8 1L2 6L8 11M2 6H10"
                  stroke="#DE4313"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Left line: from DE4313 to FEC163 */}
              <div
                className="flex-1 h-[1.5px]"
                style={{
                  background: "linear-gradient(to right, #DE4313, #FEC163)",
                }}
              />
            </button>

            {/* Slide number buttons */}
            <div className="flex items-center gap-6 sm:gap-8 px-5 sm:px-7 flex-shrink-0">
              {[1, 2, 3].map((num) => {
                const isActive = num === currentPage;
                return (
                  <button
                    key={num}
                    onClick={() => setCurrentPage(num)}
                    className={`font-dm text-sm sm:text-base cursor-pointer transition-all ${
                      isActive
                        ? "font-bold text-transparent bg-clip-text"
                        : "font-normal text-[var(--ink)] opacity-50 hover:opacity-100"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundImage:
                              "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                          }
                        : undefined
                    }
                  >
                    0{num}
                  </button>
                );
              })}
            </div>

            {/* Next arrow and line */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(3, p + 1))}
              disabled={currentPage === 3}
              className={`flex-1 flex items-center text-[#DE4313] transition-opacity ${
                currentPage === 3
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:opacity-80 cursor-pointer"
              }`}
              aria-label="Next page"
            >
              {/* Right line: from FEC163 to DE4313 */}
              <div
                className="flex-1 h-[1.5px]"
                style={{
                  background: "linear-gradient(to right, #FEC163, #DE4313)",
                }}
              />

              {/* Seamless arrow tip */}
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                className="flex-shrink-0"
              >
                <path
                  d="M2 1L8 6L2 11M0 6H8"
                  stroke="#DE4313"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
