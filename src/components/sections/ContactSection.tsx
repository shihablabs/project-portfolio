"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import { clientLogos, Testimonial, testimonials } from "@/data/testimonials";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Vertical contact tab
function VerticalContactTab() {
  return (
    <div className="hidden lg:flex flex-shrink-0 pt-2">
      <Link
        href="/contact"
        className="group flex items-center gap-3.5 select-none hover:opacity-85 transition-opacity"
        title="Get In Touch"
      >
        {/* Left vertical line */}
        <div
          className="w-[1.5px] h-[190px]"
          style={{
            background:
              "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
          }}
        />

        {/* Diamonds and text */}
        <div className="flex flex-col items-center justify-between h-[190px] py-1">
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L15 8L8 16L1 8L8 0Z" fill="url(#contactDiamondGrad)" />
          </svg>

          <span
            className="text-xs font-dm font-bold tracking-[0.22em] text-transparent bg-clip-text [writing-mode:vertical-rl] whitespace-nowrap"
            style={{
              backgroundImage:
                "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
            }}
          >
            GET IN TOUCH
          </span>

          <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
            <path d="M8 0L15 8L8 16L1 8L8 0Z" fill="url(#contactDiamondGrad)" />
          </svg>
        </div>
      </Link>
    </div>
  );
}

// Opening quote icon (66)
function OpenQuoteIcon() {
  return (
    <svg
      width="26"
      height="20"
      viewBox="0 0 28 22"
      fill="none"
      className="inline-block mr-2.5 align-top -translate-y-1 flex-shrink-0"
    >
      <path
        d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 14.5 10 18 13 19.5"
        stroke="#DE4313"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 13C23.6569 13 25 11.6569 25 10C25 8.34315 23.6569 7 22 7C20.3431 7 19 8.34315 19 10C19 14.5 22 18 25 19.5"
        stroke="#DE4313"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Closing quote icon (99)
function CloseQuoteIcon() {
  return (
    <svg
      width="26"
      height="20"
      viewBox="0 0 28 22"
      fill="none"
      className="inline-block ml-2.5 align-baseline translate-y-1 flex-shrink-0"
    >
      <path
        d="M7 8C5.34315 8 4 9.34315 4 11C4 12.6569 5.34315 14 7 14C8.65685 14 10 12.6569 10 11C10 6.5 7 3 4 1.5"
        stroke="#DE4313"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 8C17.3431 8 16 9.34315 16 11C16 12.6569 17.3431 14 19 14C20.6569 14 22 12.6569 22 11C22 6.5 19 3 16 1.5"
        stroke="#DE4313"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Testimonial card component
function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isHovered, setIsHovered] = useState(false);

  const cardBorderStyle = {
    border: "1.5px solid",
    borderImageSource:
      "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
    borderImageSlice: 1,
  };

  return (
    <div
      style={cardBorderStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered((prev) => !prev)}
      className="group relative min-h-[500px] sm:min-h-[520px] flex flex-col justify-between pt-12 sm:pt-14 px-6 sm:px-10 pb-0 cursor-pointer select-none"
    >
      {/* Top notch mask: cleanly cuts the top border line behind logos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[94%] max-w-[880px] h-8 sm:h-10 card-badge-bg z-[1]"
      />

      {/* Large colorful client partner logos on top border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 px-4 w-[94%] max-w-[880px] flex items-center justify-between sm:justify-around gap-6 sm:gap-10 md:gap-14 lg:gap-16 select-none">
        {clientLogos.map((cl) => (
          <div
            key={cl.name}
            className="flex items-center justify-center opacity-95 hover:opacity-100 transition-opacity"
          >
            <Image
              src={cl.image}
              alt={cl.name}
              width={160}
              height={56}
              className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
              priority
            />
          </div>
        ))}
      </div>

      {/* Inner horizontal divider line centered under logos */}
      <div
        className="w-[94%] max-w-[880px] mx-auto h-[1.5px] mt-5 sm:mt-5 mb-4 sm:mb-6 relative z-10"
        style={{
          background:
            "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
        }}
      />

      {/* Card content layout (Default: Centered Quote Content | Hover: Author Photo on left + Quote on right) */}
      <div className="relative z-10 w-full flex flex-col md:flex-row items-end justify-between gap-6 md:gap-8 flex-1 min-h-[380px] sm:min-h-[420px] overflow-hidden">
        {/* Left: Author portrait with centered ellipse glow (Hidden by default, slides in on hover) */}
        <div
          className={`transition-all duration-500 ease-out flex justify-center items-end relative self-end ${
            isHovered
              ? "w-full md:w-[42%] lg:w-[45%] opacity-100 translate-x-0 pointer-events-auto max-h-[420px] visible"
              : "w-0 md:w-0 opacity-0 -translate-x-8 pointer-events-none overflow-hidden max-h-0 invisible"
          } group-hover:w-full group-hover:md:w-[42%] group-hover:lg:w-[45%] group-hover:opacity-100 group-hover:translate-x-0 group-hover:pointer-events-auto group-hover:max-h-[420px] group-hover:visible`}
        >
          {/* Ellipse glow behind author */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 rounded-full z-0"
            style={{
              width: "360px",
              height: "340px",
              maxWidth: "100%",
              backgroundColor: "rgba(222, 67, 19, 0.45)",
              filter: "blur(80px)",
              transform: "translateZ(0)",
            }}
          />

          {/* Author photo */}
          <div className="relative z-10 w-[280px] sm:w-[340px] lg:w-[380px] h-[280px] sm:h-[340px] lg:h-[360px] flex items-end justify-center">
            <Image
              key={testimonial.id}
              src={testimonial.avatar}
              alt={testimonial.author}
              width={400}
              height={400}
              className="w-full h-full object-contain object-bottom"
              priority
            />
          </div>
        </div>

        {/* Right / Center: Testimonial quote and credentials */}
        <div
          className={`transition-all duration-500 ease-out flex flex-col justify-center gap-6 pb-8 sm:pb-12 lg:pb-14 pt-4 self-center ${
            isHovered
              ? "w-full md:w-[58%] lg:w-[55%] text-left items-start"
              : "w-full max-w-2xl lg:max-w-3xl mx-auto text-center items-center"
          } group-hover:w-full group-hover:md:w-[58%] group-hover:lg:w-[55%] group-hover:text-left group-hover:items-start`}
        >
          <p
            className={`font-almarai italic text-base sm:text-lg lg:text-[22px] text-[#2BB3A3] leading-relaxed transition-all duration-500 ${
              isHovered ? "text-left" : "text-center"
            } group-hover:text-left`}
          >
            <OpenQuoteIcon />
            {testimonial.quote}
            <CloseQuoteIcon />
          </p>

          <div
            className={`transition-all duration-500 ${
              isHovered ? "text-left" : "text-center"
            } group-hover:text-left`}
          >
            <h4 className="font-dm font-bold text-base sm:text-lg uppercase tracking-wider text-[var(--ink)] leading-snug">
              {testimonial.author}
            </h4>

            <p className="font-almarai text-sm sm:text-base text-[var(--body-muted)] mt-1">
              {testimonial.role}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Testimonial slider navigation
function TestimonialSliderBar({
  currentIndex,
  totalCount,
  onSelect,
  onPrev,
  onNext,
}: {
  currentIndex: number;
  totalCount: number;
  onSelect: (index: number) => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="w-full flex items-center select-none pt-2">
      {/* Prev arrow and line */}
      <button
        onClick={onPrev}
        className="flex-1 flex items-center text-[#DE4313] hover:opacity-80 transition-opacity cursor-pointer group"
        aria-label="Previous testimonial"
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
        {Array.from({ length: totalCount }).map((_, i) => {
          const isActive = i === currentIndex;
          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
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
              {String(i + 1).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      {/* Next arrow and line */}
      <button
        onClick={onNext}
        className="flex-1 flex items-center text-[#DE4313] hover:opacity-80 transition-opacity cursor-pointer group"
        aria-label="Next testimonial"
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
  );
}

// Contact section parent
export default function ContactSection() {
  const [tidx, setTidx] = useState(0);
  const currentTestimonial = testimonials[tidx] ?? testimonials[0];

  const prev = () =>
    setTidx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setTidx((i) => (i + 1) % testimonials.length);

  return (
    <section id="contact" className="relative w-full py-16 sm:py-24">
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
          {/* Section 04 badge */}
          <SectionBadge num="04" label="CONTACT" />

          {/* Center info */}
          <div className="flex-1 max-w-2xl flex flex-col justify-center gap-5 lg:pt-2">
            <h2 className="font-almarai text-2xl sm:text-3xl lg:text-[32px] font-bold text-[var(--ink)] leading-snug">
              Vision Meets Design
            </h2>

            <p className="font-almarai text-sm sm:text-base text-[var(--body-muted)] leading-relaxed">
              It all begins with a vision — whether it&apos;s turning a fresh
              idea into a complete product, revamping an existing solution to
              align with evolving needs, or building a digital presence to grow
              brand visibility — each design is shaped by simplicity, built on
              quality, and delivered with care.
            </p>

            <h3 className="font-dm font-bold text-3xl sm:text-4xl text-gradient block leading-none pt-2">
              Collaboration Stories
            </h3>
          </div>

          {/* Right vertical tab */}
          <VerticalContactTab />
        </div>

        {/* Testimonial card */}
        <TestimonialCard testimonial={currentTestimonial} />

        {/* Bottom slider controls */}
        <TestimonialSliderBar
          currentIndex={tidx}
          totalCount={testimonials.length}
          onSelect={setTidx}
          onPrev={prev}
          onNext={next}
        />
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
            id="contactDiamondGrad"
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
