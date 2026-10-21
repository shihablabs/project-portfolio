"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import SectionBadge from "@/components/ui/SectionBadge";
import LaptopWebsitePreview from "@/components/ui/LaptopWebsitePreview";
import HospitalDashboardMockup from "@/components/ui/HospitalDashboardMockup";
import EzeedropAppMockup from "@/components/ui/EzeedropAppMockup";

export interface ProjectSlide {
  id: string;
  client: string;
  clientLogo?: string;
  title: string;
  categoryLabel: string;
  caseStudyUrl: string;
  mockupType: "laptop" | "device-bundle" | "hospital-monitor" | "phones-triplet";
  coverImage?: string;
  headline?: string;
  subheadline?: string;
}

interface WorkCategorySectionProps {
  id: string;
  number: string;
  title: string;
  viewAllLabel: string;
  viewAllHref: string;
  slides: ProjectSlide[];
  isActive?: boolean;
}

export default function WorkCategorySection({
  id,
  number,
  title,
  viewAllLabel,
  viewAllHref,
  slides,
  isActive = false,
}: WorkCategorySectionProps) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const currentSlide = slides[currentSlideIndex] || slides[0];

  const handlePrev = () => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id={id} className="w-full scroll-mt-28 select-none">
      <div className="relative w-full flex flex-col xl:flex-row items-center xl:items-start justify-between gap-8 sm:gap-10">
        {/* ════════════════════════════════════════════════════════════
            1. LEFT COLUMN: Reusable SectionBadge with fixed consistent width
               so all 3 sections align identically from left to right
            ════════════════════════════════════════════════════════════ */}
        <div className="w-full xl:w-[220px] 2xl:w-[240px] flex items-center justify-center xl:justify-start flex-shrink-0 select-none pt-4 xl:pt-8">
          <SectionBadge num={number} label={title} isFilled={isActive} />
        </div>

        {/* ════════════════════════════════════════════════════════════
            2. SHOWCASE UNIT (Box + 20px Gap + Vertical Line + View All Button + Outside Bottom Slider)
            ════════════════════════════════════════════════════════════ */}
        <div className="flex-1 w-full max-w-[850px] flex flex-col items-center xl:items-start">
          {/* ── ROW: Showcase Box (max-w 725px) + 20px Gap + Vertical Line + View All Button ── */}
          <div className="w-full flex items-stretch justify-center xl:justify-start gap-[20px]">
            {/* ── MAIN BORDER BOX (Fixed Max-Width 725px, Flush Bottom Mockup) ── */}
            <div className="relative w-full max-w-[725px] bg-transparent min-h-[400px] sm:min-h-[440px] md:min-h-[460px] flex flex-col justify-between pt-10 sm:pt-12 pb-0 px-4 sm:px-6">
              {/* Top horizontal border line (with center gap for client logo notch) */}
              <div
                className="absolute top-0 left-0 right-[calc(50%+85px)] sm:right-[calc(50%+105px)] h-[1.5px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
                }}
              />
              <div
                className="absolute top-0 left-[calc(50%+85px)] sm:left-[calc(50%+105px)] right-0 h-[1.5px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
                }}
              />

              {/* Left vertical border line */}
              <div
                className="absolute top-0 left-0 bottom-0 w-[1.5px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
                }}
              />

              {/* Right vertical border line */}
              <div
                className="absolute top-0 right-0 bottom-0 w-[1.5px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
                }}
              />

              {/* Bottom horizontal border line (Mockup sits directly on this line) */}
              <div
                className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
                }}
              />

              {/* ── Top-Center Notch: Client Logo / Emblem ── */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 bg-[var(--bg)] z-20 flex items-center justify-center">
                {currentSlide.clientLogo ? (
                  <div className="relative h-8 sm:h-10 w-36 sm:w-44 flex items-center justify-center">
                    <Image
                      src={currentSlide.clientLogo}
                      alt={currentSlide.client}
                      width={160}
                      height={42}
                      className="max-h-8 sm:max-h-9 w-auto object-contain"
                      priority
                    />
                  </div>
                ) : currentSlide.id === "ezeedrop" ? (
                  <div className="relative h-10 sm:h-12 px-6 rounded-full bg-[#0E1526] border border-[#DE4313] flex items-center justify-center shadow-lg">
                    <div className="flex items-center gap-0.5">
                      <span className="font-sans font-bold text-base text-white tracking-tight">
                        e
                      </span>
                      <span className="font-sans font-black text-lg text-white -rotate-6 text-[#FEC163]">
                        Z
                      </span>
                      <span className="font-sans font-bold text-base text-white tracking-tight">
                        ee
                      </span>
                      <span className="font-sans font-bold text-base text-[#DE4313] ml-0.5">
                        📍
                      </span>
                      <span className="font-sans font-bold text-base text-white -ml-1">
                        rop
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0E1526] border border-[#DE4313] flex items-center justify-center shadow-lg">
                    <span className="font-dm font-black text-xs text-[#FEC163]">
                      {number}
                    </span>
                  </div>
                )}
              </div>

              {/* ── Project Title inside Top of Card ── */}
              <div className="w-full text-center pt-2 sm:pt-3 pb-2 z-10">
                <h4 className="font-dm font-bold text-xs sm:text-sm lg:text-[15px] tracking-[0.16em] uppercase text-[var(--ink)]">
                  {currentSlide.title}
                </h4>
              </div>

              {/* ── Mockup Display (sitting flush against the bottom border with 0 padding) ── */}
              <div className="relative z-10 w-full flex-1 flex items-end justify-center pb-0 mb-0 overflow-visible mt-auto">
                {currentSlide.mockupType === "laptop" ? (
                  <LaptopWebsitePreview
                    clientName={currentSlide.client}
                    headline={currentSlide.headline || "UNLOCKING EXCELLENCE"}
                    subheadline={currentSlide.subheadline || "WITH MICROSOFT:"}
                  />
                ) : currentSlide.mockupType === "hospital-monitor" ? (
                  <HospitalDashboardMockup />
                ) : currentSlide.mockupType === "phones-triplet" ? (
                  <EzeedropAppMockup />
                ) : (
                  <div className="relative w-full max-w-[560px] h-[260px] sm:h-[320px] flex items-end justify-center pb-0">
                    {currentSlide.coverImage && (
                      <Image
                        src={currentSlide.coverImage}
                        alt={currentSlide.title}
                        fill
                        className="object-contain object-bottom drop-shadow-[0_16px_36px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-500"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* ── RIGHT COLUMN: Vertical Border Line (Matches Box Height) + Centered View All Button ── */}
            <div className="hidden sm:flex items-center gap-[20px] select-none flex-shrink-0">
              {/* Vertical line matching box height */}
              <div
                className="w-[1.5px] h-full"
                style={{
                  background:
                    "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
                }}
              />

              {/* Vertical "VIEW ALL ..." Button (Centered Vertically alongside Box) */}
              <Link
                href={viewAllHref}
                className="group flex flex-col items-center justify-center gap-3 py-2 cursor-pointer hover:opacity-85 transition-opacity"
                title={viewAllLabel}
              >
                {/* Top Diamond */}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L15 8L8 16L1 8L8 0Z"
                    fill="url(#workCategoryDiamondGrad)"
                  />
                </svg>

                {/* Vertical Rotated Text */}
                <span
                  className="text-xs font-dm font-bold tracking-[0.24em] text-transparent bg-clip-text [writing-mode:vertical-rl] whitespace-nowrap rotate-180"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  {viewAllLabel}
                </span>

                {/* Bottom Diamond */}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 0L15 8L8 16L1 8L8 0Z"
                    fill="url(#workCategoryDiamondGrad)"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* ════════════════════════════════════════════════════════════
              3. OUTSIDE BOTTOM SLIDER CONTROLS (Below the Box, matching screenshot)
              ════════════════════════════════════════════════════════════ */}
          <div className="w-full max-w-[725px] flex items-center select-none pt-4 sm:pt-5">
            {/* Prev arrow and gradient line */}
            <button
              type="button"
              onClick={handlePrev}
              className="flex-1 flex items-center text-[#DE4313] hover:opacity-80 transition-opacity cursor-pointer group"
              aria-label="Previous project"
            >
              {/* Arrow tip */}
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

            {/* Slide number buttons: 01, 02, 03 */}
            <div className="flex items-center gap-6 sm:gap-8 px-5 sm:px-7 flex-shrink-0">
              {slides.map((_, i) => {
                const isActive = i === currentSlideIndex;
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentSlideIndex(i)}
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
                    {`0${i + 1}`}
                  </button>
                );
              })}
            </div>

            {/* Next arrow and gradient line */}
            <button
              type="button"
              onClick={handleNext}
              className="flex-1 flex items-center text-[#DE4313] hover:opacity-80 transition-opacity cursor-pointer group"
              aria-label="Next project"
            >
              {/* Right line: from FEC163 to DE4313 */}
              <div
                className="flex-1 h-[1.5px]"
                style={{
                  background: "linear-gradient(to right, #FEC163, #DE4313)",
                }}
              />

              {/* Arrow tip */}
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
