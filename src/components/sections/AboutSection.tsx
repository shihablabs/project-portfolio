"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import Image from "next/image";
import Link from "next/link";

// Circular VIEW button
function ViewButton({ href, title }: { href: string; title: string }) {
  return (
    <Link
      href={href}
      title={title}
      className="group/btn relative inline-flex items-center select-none cursor-pointer flex-shrink-0"
    >
      <div className="relative flex items-center">
        {/* Ring with right gap */}
        <div className="relative w-[58px] h-[58px] flex items-center justify-center">
          <svg
            width="58"
            height="58"
            viewBox="0 0 58 58"
            fill="none"
            className="absolute inset-0 w-full h-full"
          >
            <defs>
              <linearGradient id="viewBtnRingGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FEC163" />
                <stop offset="100%" stopColor="#DE4313" />
              </linearGradient>
            </defs>
            <path
              d="M 51.1 13.5 A 27 27 0 1 0 51.1 44.5"
              stroke="url(#viewBtnRingGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              className="transition-all duration-300 group-hover/btn:stroke-[2]"
            />
          </svg>

          {/* Inner glowing circle */}
          <div
            className="w-[38px] h-[38px] rounded-full flex items-center justify-center shadow-[0_0_14px_rgba(222,67,19,0.55)] transition-transform duration-300 group-hover/btn:scale-105"
            style={{
              background: "linear-gradient(135deg, #FEC163 0%, #DE4313 100%)",
            }}
          >
            <svg width="15" height="15" viewBox="0 0 16 16" fill="white">
              <path d="M8 0C8 4.41828 4.41828 8 0 8C4.41828 8 8 11.5817 8 16C8 11.5817 11.5817 8 16 8C11.5817 8 8 4.41828 8 0Z" />
            </svg>
          </div>
        </div>

        {/* View text */}
        <span className="font-dm font-bold text-xs sm:text-sm tracking-wider uppercase text-[var(--ink)] pl-2 transition-colors duration-200 group-hover/btn:text-[var(--accent)]">
          VIEW
        </span>
      </div>
    </Link>
  );
}

// About section component
export default function AboutSection() {
  const cardBorderStyle = {
    border: "1.5px solid",
    borderImageSource:
      "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
    borderImageSlice: 1,
  };

  return (
    <section id="about" className="relative w-full py-16 sm:py-24">
      {/* Top-right ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-full z-0"
        style={{
          background:
            "radial-gradient(circle, rgba(222, 67, 19, 0.42) 0%, rgba(222, 67, 19, 0) 70%)",
          width: "480px",
          height: "480px",
          top: "-60px",
          right: "-180px",
          filter: "blur(50px)",
          transform: "translateZ(0)",
        }}
      />

      {/* Main container */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* Header block */}
        <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
          {/* Reusable section badge */}
          <SectionBadge num="01" label="ABOUT" />

          {/* Section info */}
          <div className="flex-1 max-w-2xl flex flex-col justify-center gap-5 lg:pt-2">
            <h2 className="font-almarai text-2xl sm:text-3xl lg:text-[32px] font-bold text-[var(--ink)] leading-snug">
              Multidisciplinary Designer
              <br />
              specializing in UX &amp; UI Design
            </h2>

            <p className="font-almarai text-sm sm:text-base text-[var(--body-muted)] leading-relaxed">
              Designer by passion, IT grad by education, and a creative
              generalist at heart — crafting digital products from concept to
              launch that look, feel, and work great — aligning user needs,
              business goals, and technology, with an unique brand of magic.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8 sm:gap-14 pt-2 select-none">
              <div>
                <span className="font-dm font-bold text-3xl sm:text-4xl text-gradient block leading-none">
                  8+ Years
                </span>
              </div>
              <div>
                <span className="font-dm font-bold text-3xl sm:text-4xl text-gradient block leading-none">
                  60+ Projects
                </span>
              </div>
            </div>
          </div>

          {/* Know more button */}
          <div className="hidden lg:flex flex-shrink-0 pt-2">
            <Link
              href="/about"
              className="group flex items-center gap-3.5 select-none hover:opacity-85 transition-opacity"
              title="Know More About Sejuti"
            >
              {/* Left vertical border line */}
              <div
                className="w-[1.5px] h-[170px]"
                style={{
                  background:
                    "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
                }}
              />

              {/* Diamonds and vertical text */}
              <div className="flex flex-col items-center justify-between h-[170px] py-1">
                {/* Top diamond */}
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L15 8L8 16L1 8L8 0Z"
                    fill="url(#aboutDiamondGrad)"
                  />
                </svg>

                {/* Vertical text */}
                <span
                  className="text-xs font-dm font-bold tracking-[0.24em] text-transparent bg-clip-text [writing-mode:vertical-rl] whitespace-nowrap"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  KNOW MORE
                </span>

                {/* Bottom diamond */}
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L15 8L8 16L1 8L8 0Z"
                    fill="url(#aboutDiamondGrad)"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch relative">
          {/* Left card */}
          <div
            style={cardBorderStyle}
            className="relative p-6 sm:p-8 pt-14 sm:pt-16 flex flex-col justify-between"
          >
            {/* Card inner glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute rounded-full z-0"
              style={{
                background:
                  "radial-gradient(circle, rgba(222, 67, 19, 0.22) 0%, rgba(222, 67, 19, 0) 70%)",
                width: "260px",
                height: "260px",
                bottom: "30px",
                left: "50%",
                transform: "translateX(-50%)",
                filter: "blur(90px)",
              }}
            />

            {/* Top notch mask */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-3 card-badge-bg z-[1]"
            />

            {/* Top notched badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="relative w-10 h-10 mb-1">
                <Image
                  src="/assets/icons/about-ux-ui.png"
                  alt="UX & UI Icon"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-dm font-bold text-xs sm:text-sm tracking-wider uppercase text-[var(--ink)] text-center leading-tight">
                UX &amp; UI
                <br />
                DESIGN
              </span>
            </div>

            {/* Category items */}
            <div className="relative z-10 grid grid-cols-3 gap-4 items-end text-center pt-4 sm:pt-6">
              <div className="flex flex-col items-center gap-3 group">
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/icons/about-website.png"
                    alt="Website design"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-dm font-bold text-xs sm:text-sm text-[var(--ink)] uppercase tracking-wider">
                  WEBSITE
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 group">
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/icons/about-app.png"
                    alt="App design"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-dm font-bold text-xs sm:text-sm text-[var(--ink)] uppercase tracking-wider">
                  APP
                </span>
              </div>

              <div className="flex flex-col items-center gap-3 group">
                <div className="relative w-20 sm:w-24 h-20 sm:h-24 transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src="/assets/icons/about-software.png"
                    alt="Software UI design"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-dm font-bold text-xs sm:text-sm text-[var(--ink)] uppercase tracking-wider">
                  SOFTWARE
                </span>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col justify-between gap-6">
            {/* Card 1: Logo & Branding */}
            <div
              style={cardBorderStyle}
              className="group relative p-6 sm:p-7 flex items-center justify-between min-h-[140px]"
            >
              {/* Left notch mask */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-12 card-badge-bg z-[1]"
              />

              {/* Left icon */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-11 h-11">
                  <Image
                    src="/assets/icons/about-branding.png"
                    alt="Logo & Branding"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="font-dm font-bold text-sm sm:text-base uppercase tracking-wider text-[var(--ink)] pl-8 sm:pl-10 leading-snug">
                LOGO &amp;
                <br />
                BRANDING
              </h3>

              {/* View button default */}
              <div className="flex-shrink-0 pr-2">
                <ViewButton
                  href="/work"
                  title="View Logo &amp; Branding work"
                />
              </div>
            </div>

            {/* Card 2: Print & Marketing */}
            <div
              style={cardBorderStyle}
              className="group relative p-6 sm:p-7 flex items-center justify-between min-h-[140px]"
            >
              {/* Left notch mask */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-12 card-badge-bg z-[1]"
              />

              {/* Left icon */}
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative w-11 h-11">
                  <Image
                    src="/assets/icons/about-marketing.png"
                    alt="Print & Digital Marketing"
                    width={44}
                    height={44}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <h3 className="font-dm font-bold text-sm sm:text-base uppercase tracking-wider text-[var(--ink)] pl-8 sm:pl-10 leading-snug">
                PRINT &amp; DIGITAL
                <br />
                MARKETING
              </h3>

              {/* View button hover */}
              <div className="flex-shrink-0 pr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ViewButton
                  href="/work"
                  title="View Print &amp; Digital Marketing work"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SVG diamond gradient */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="aboutDiamondGrad"
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
    </section>
  );
}
