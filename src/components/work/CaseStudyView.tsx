"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkProject } from "@/data/workProjects";
import SectionBadge from "@/components/ui/SectionBadge";
import CaseStudyHeroCascade from "@/components/ui/CaseStudyHeroCascade";
import CaseStudyFullPageMockup from "@/components/ui/CaseStudyFullPageMockup";

interface CaseStudyViewProps {
  project: WorkProject;
}

const CASE_STUDY_TABS = [
  { id: "overview", label: "01. OVERVIEW" },
  { id: "research", label: "02. RESEARCH" },
  { id: "designs", label: "03. FINAL DESIGNS" },
  { id: "results", label: "04. RESULTS" },
];

export default function CaseStudyView({ project }: CaseStudyViewProps) {
  const cs = project.caseStudyData;
  const [activeTab, setActiveTab] = useState("overview");

  // Scroll listener to update active tab based on scroll position (exact same logic as Work Hub)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 260;
      for (const tab of [...CASE_STUDY_TABS].reverse()) {
        const el = document.getElementById(tab.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(tab.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeIdx = Math.max(
    0,
    CASE_STUDY_TABS.findIndex((t) => t.id === activeTab)
  );

  return (
    <article className="w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24 text-[var(--ink)] select-none">
      {/* ── Global SVG Gradient Defs ── */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="csSparkleGrad"
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

      {/* ── 01. HERO CARD (Pixel-perfect copy of Work Main Page Hero Layout) ── */}
      <div className="relative w-full bg-transparent min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] flex items-center pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 pl-6 sm:pl-10 lg:pl-14 pr-6 sm:pr-10 lg:pr-14 mb-10">
        {/* Top horizontal border line (starts at 0,0 and stops before icons & Work notch) */}
        <div
          className="absolute top-0 left-0 right-[310px] sm:right-[340px] lg:right-[360px] h-[1.5px] pointer-events-none"
          style={{
            background:
              "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
          }}
        />

        {/* Left vertical border line */}
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

        {/* Right vertical border line (starts below Work header to bottom) */}
        <div
          className="absolute top-[28px] sm:top-[34px] right-0 bottom-0 w-[1.5px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
          }}
        />

        {/* ── Top-Right Notch: 3 Discipline Icons + "Work" Text (Directly copied from Work Main Page) ── */}
        <div className="absolute top-0 right-4 sm:right-8 -translate-y-1/2 flex items-center gap-3 sm:gap-4 select-none z-20">
          {/* 1. UX & UI Design Circle (Active by default for case studies) */}
          <Link
            href="/work"
            title="UX & UI Design"
            aria-label="UX & UI Design"
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 shadow-[0_0_16px_rgba(222,67,19,0.7)] scale-105"
            style={{
              background:
                "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
            }}
          >
            <Image
              src="/assets/icons/ux-icon.png"
              alt="UX & UI"
              width={26}
              height={26}
              className="brightness-0 invert"
            />
          </Link>

          {/* 2. Logo & Branding Circle */}
          <Link
            href="/work?discipline=branding"
            title="Logo & Branding"
            aria-label="Logo & Branding"
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#0A0F24] border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
          >
            <Image
              src="/assets/icons/branding-icon.png"
              alt="Branding"
              width={26}
              height={26}
            />
          </Link>

          {/* 3. Print & Digital Marketing Circle */}
          <Link
            href="/work?discipline=marketing"
            title="Print & Digital Marketing"
            aria-label="Print & Digital Marketing"
            className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-[#0A0F24] border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
          >
            <Image
              src="/assets/icons/marketing-icon.png"
              alt="Marketing"
              width={26}
              height={26}
            />
          </Link>

          {/* "Work" Page Heading */}
          <Link
            href="/work"
            className="font-dm font-normal text-3xl sm:text-4xl lg:text-[42px] text-[var(--ink)] tracking-tight leading-none ml-2 hover:opacity-80 transition-opacity"
          >
            Work
          </Link>
        </div>

        {/* ── Inner Glow Effects (Exact Same as Work Main Page) ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(222, 67, 19, 0.55) 0%, rgba(222, 67, 19, 0.2) 50%, transparent 72%)",
              filter: "blur(85px)",
              width: "480px",
              height: "420px",
              right: "40px",
              bottom: "10px",
            }}
          />
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
        </div>

        {/* ── Main Hero Content Grid: Left Title + Right Mockup (Copied from Work Main Page) ── */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading + Subtitle */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            <h1 className="font-dm font-bold text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] text-[var(--ink)] uppercase tracking-tight">
              UX &amp; UI DESIGN
            </h1>
            <h2
              className="font-dm font-bold text-2xl sm:text-3xl lg:text-[32px] leading-tight text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              Curated Projects
            </h2>
          </div>

          {/* Right Column: Case Study Hero Mockup */}
          <div className="lg:col-span-7 w-full flex items-center justify-center lg:justify-end">
            <CaseStudyHeroCascade className="w-full max-w-[540px] lg:max-w-[580px]" />
          </div>
        </div>
      </div>

      {/* ── 02. STICKY SUB-NAVIGATION BAR (Directly copied from Work Main Page) ── */}
      <div className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-md pt-3 pb-2 select-none mb-14">
        <div className="w-full grid grid-cols-4 gap-2 sm:gap-4 items-center text-center font-dm font-bold text-xs sm:text-sm tracking-wider uppercase">
          {CASE_STUDY_TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => scrollToSection(tab.id)}
                className={`group flex items-center justify-center gap-2 sm:gap-2.5 py-3 transition-opacity cursor-pointer ${
                  isActive ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                {/* Sparkle icon before */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8L5 0Z"
                    fill="url(#csSparkleGrad)"
                  />
                </svg>

                {/* Tab Label */}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  {tab.label}
                </span>

                {/* Sparkle icon after */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8L5 0Z"
                    fill="url(#csSparkleGrad)"
                  />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Track Line and Active Indicator Slider */}
        <div className="relative w-full h-[1.5px] bg-[#DE4313]/30 mt-1">
          <div
            className="absolute top-0 h-full bg-gradient-to-r from-[#FEC163] to-[#DE4313] transition-all duration-300"
            style={{
              left: `${(activeIdx / CASE_STUDY_TABS.length) * 100}%`,
              width: `${100 / CASE_STUDY_TABS.length}%`,
              boxShadow: "0 0 10px rgba(222, 67, 19, 0.8)",
            }}
          />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          03. SECTION 01: PROJECT OVERVIEW (id="overview")
          ════════════════════════════════════════════════════════════ */}
      <section id="overview" className="w-full scroll-mt-28 mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12">
          {/* Left Column: SectionBadge 01 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge
              num="01"
              label="PROJECT&#10;OVERVIEW"
              isFilled={activeTab === "overview"}
            />
          </div>

          {/* Right Column: Overview Narrative & Problem Statement */}
          <div className="flex-1 space-y-6 text-left max-w-3xl">
            <div>
              <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block mb-1">
                PROJECT OVERVIEW
              </span>
              <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
                {cs?.overview ||
                  "The primary objective of this project was to design a comprehensive digital mental wellness platform that bridges the gap between certified clinical therapists and patients in need of accessible, stigma-free counseling."}
              </p>
            </div>

            <div>
              <h3 className="font-dm font-bold text-base sm:text-lg text-white mb-2">
                Problem
              </h3>
              <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
                {cs?.challenge ||
                  "Existing telemedicine solutions were cluttered, clinical, and intimidating for patients experiencing acute anxiety or seeking their first psychological consultation. Complex registration funnels and unclear therapist credentials created high drop-off rates before the initial booking."}
              </p>
            </div>

            <div>
              <span
                className="font-dm font-bold text-sm uppercase tracking-wider text-transparent bg-clip-text"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                Project Goal &amp; Solution
              </span>
            </div>
          </div>
        </div>

        {/* 4-Column Meta Stats Bar Sitting over Gradient Line */}
        <div className="w-full mt-10 pt-6 border-t border-[#DE4313]/40 grid grid-cols-2 md:grid-cols-4 gap-6 text-left font-dm">
          <div>
            <span className="block text-[10px] sm:text-xs text-[#FEC163] uppercase tracking-wider font-bold">
              ROLE
            </span>
            <strong className="block text-xs sm:text-sm text-white mt-1">
              {cs?.role || "Lead UX/UI Designer"}
            </strong>
          </div>
          <div>
            <span className="block text-[10px] sm:text-xs text-[#FEC163] uppercase tracking-wider font-bold">
              TIMELINE
            </span>
            <strong className="block text-xs sm:text-sm text-white mt-1">
              4 Months (2024)
            </strong>
          </div>
          <div>
            <span className="block text-[10px] sm:text-xs text-[#FEC163] uppercase tracking-wider font-bold">
              PLATFORM
            </span>
            <strong className="block text-xs sm:text-sm text-white mt-1">
              iOS, Android &amp; Web
            </strong>
          </div>
          <div>
            <span className="block text-[10px] sm:text-xs text-[#FEC163] uppercase tracking-wider font-bold">
              CLIENT
            </span>
            <strong className="block text-xs sm:text-sm text-white mt-1">
              {cs?.client || project.client}
            </strong>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          04. SECTION 02: USER RESEARCH (id="research")
          ════════════════════════════════════════════════════════════ */}
      <section id="research" className="w-full scroll-mt-28 mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12">
          {/* Left Column: SectionBadge 02 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge
              num="02"
              label="USER&#10;RESEARCH"
              isFilled={activeTab === "research"}
            />
          </div>

          {/* Right Column: Research Methodology & Wireframing */}
          <div className="flex-1 space-y-6 text-left max-w-3xl">
            <div>
              <h3 className="font-dm font-bold text-base sm:text-lg text-white mb-2">
                Understanding the User &amp; Pain Points
              </h3>
              <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
                We conducted in-depth qualitative interviews with 24 individuals seeking therapy and 8 licensed psychologists. Users expressed vulnerability about data privacy, hesitation regarding session pricing transparency, and frustration with clinical jargon.
              </p>
              <div className="mt-3">
                <span
                  className="font-dm font-bold text-xs uppercase tracking-wider text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  User Personas
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DE4313]/25">
              <h3 className="font-dm font-bold text-base sm:text-lg text-white mb-2">
                User Journey &amp; Wireframes
              </h3>
              <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
                Low-fidelity sketches were transformed into rapid Figma interactive prototypes, mapping every touchpoint from initial mental state check-in to post-session homework assignments.
              </p>
              <div className="mt-3">
                <span
                  className="font-dm font-bold text-xs uppercase tracking-wider text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  Wireframe Flow
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DESIGN SYSTEM (STYLE GUIDE & COLOR PALETTE) ── */}
      <section className="w-full mb-16 sm:mb-24 p-6 sm:p-10 border border-[#DE4313]/40 bg-[#070B19]/70 rounded-xs text-left max-w-4xl mx-auto">
        <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block mb-1">
          Style Guide
        </span>
        <h2 className="font-dm font-black text-2xl sm:text-3xl text-white uppercase tracking-tight mb-2">
          DESIGN SYSTEM
        </h2>
        <span
          className="font-dm font-bold text-xs sm:text-sm uppercase tracking-wider text-transparent bg-clip-text block mb-6"
          style={{
            backgroundImage:
              "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
          }}
        >
          Typography &amp; Color Palette
        </span>

        {/* Color Palette Swatches */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3 bg-[#0D9488] rounded-xs text-white text-[10px] font-dm flex flex-col justify-between h-20 shadow-sm">
            <span className="font-bold">Teal Calming</span>
            <span className="font-mono">#0D9488</span>
          </div>
          <div className="p-3 bg-[#0A0F24] border border-gray-700 rounded-xs text-white text-[10px] font-dm flex flex-col justify-between h-20 shadow-sm">
            <span className="font-bold">Deep Space</span>
            <span className="font-mono">#0A0F24</span>
          </div>
          <div className="p-3 bg-[#F0FDFA] rounded-xs text-teal-900 text-[10px] font-dm flex flex-col justify-between h-20 shadow-sm">
            <span className="font-bold">Soft Mint</span>
            <span className="font-mono">#F0FDFA</span>
          </div>
          <div className="p-3 bg-[#DE4313] rounded-xs text-white text-[10px] font-dm flex flex-col justify-between h-20 shadow-sm">
            <span className="font-bold">Amber Accent</span>
            <span className="font-mono">#DE4313</span>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          05. SECTION 03: FINAL DESIGNS (id="designs")
          ════════════════════════════════════════════════════════════ */}
      <section id="designs" className="w-full scroll-mt-28 mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12 mb-10">
          {/* Left Column: SectionBadge 03 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge
              num="03"
              label="FINAL&#10;DESIGNS"
              isFilled={activeTab === "designs"}
            />
          </div>

          {/* Right Column: Visual Design Narrative */}
          <div className="flex-1 space-y-3 text-left max-w-3xl">
            <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block">
              Visual Design
            </span>
            <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
              The high-fidelity design integrates calming organic curves, micro-animations, accessible high-contrast typography, and intuitive step-by-step intake forms to deliver a supportive, welcoming digital sanctuary.
            </p>
            <span
              className="font-dm font-bold text-xs uppercase tracking-wider text-transparent bg-clip-text block"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              Full Web &amp; Mobile Experience
            </span>
          </div>
        </div>

        {/* Full-Page Landing Page Mockup (Matching Screenshot Vertical Showcase) */}
        <div className="w-full flex items-center justify-center py-4">
          <CaseStudyFullPageMockup />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          06. SECTION 04: RESULTS (id="results")
          ════════════════════════════════════════════════════════════ */}
      <section id="results" className="w-full scroll-mt-28 mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12 mb-10">
          {/* Left Column: SectionBadge 04 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge
              num="04"
              label="RESULTS"
              isFilled={activeTab === "results"}
            />
          </div>

          {/* Right Column: Impact Metrics */}
          <div className="flex-1 space-y-3 text-left max-w-3xl">
            <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block">
              Impact
            </span>
            <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
              Post-launch data revealed an 84% reduction in patient onboarding friction, a 3.4x surge in first-week session reservations, and a 96% positive satisfaction rating across Android and iOS platforms.
            </p>
            <span
              className="font-dm font-bold text-xs uppercase tracking-wider text-transparent bg-clip-text block"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              Measurable Impact
            </span>
          </div>
        </div>

        {/* ── Client Testimonial Quote Card (Matching Screenshot with Magfi Reza Avatar) ── */}
        <div className="relative w-full max-w-[740px] mx-auto bg-[#0A0F24] border border-[#DE4313]/60 p-6 sm:p-8 rounded-sm shadow-xl flex flex-col sm:flex-row items-center gap-6 text-left mb-12">
          {/* Client Avatar */}
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#FEC163] flex-shrink-0 shadow-md">
            <Image
              src="/assets/testimonials/magfi-reza.png"
              alt="Magfi Reza"
              fill
              className="object-cover"
            />
          </div>

          {/* Quote & Credentials */}
          <div className="space-y-2">
            <p className="font-dm text-xs sm:text-sm text-gray-200 leading-relaxed italic">
              &ldquo;Sejuti&apos;s thoughtful UX research and pristine interface design transformed our platform&apos;s patient engagement and conversion beyond expectations. She approaches design with immense empathy and technical rigor.&rdquo;
            </p>
            <div>
              <strong className="block text-sm font-dm font-bold text-white">
                Magfi Reza
              </strong>
              <span className="text-xs font-dm text-[#FEC163]">
                Founder &amp; CEO — MindCare Telemedicine
              </span>
            </div>
          </div>
        </div>

        {/* ── Bottom Prev / Next Project Navigation (Matching Screenshot Split Cards) ── */}
        <div className="w-full max-w-[740px] mx-auto grid grid-cols-1 sm:grid-cols-2 border border-[#DE4313]/60 bg-[#070B19] divide-y sm:divide-y-0 sm:divide-x divide-[#DE4313]/60 rounded-xs overflow-hidden">
          {/* Left: Previous Project */}
          <Link
            href="/work/case-study/elevate-solutions-brand"
            className="group p-5 flex items-center gap-4 hover:bg-white/5 transition-colors"
          >
            <div className="w-16 h-12 bg-slate-800 rounded-xs flex items-center justify-center text-xs flex-shrink-0">
              💻
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-dm">
                ‹ Previous Case Study
              </span>
              <strong className="block text-xs sm:text-sm text-white group-hover:text-[#FEC163] transition-colors font-dm">
                Elevate Solutions Brand
              </strong>
            </div>
          </Link>

          {/* Right: Next Project */}
          <Link
            href="/work/case-study/arbree-analytics"
            className="group p-5 flex items-center justify-between sm:justify-end gap-4 hover:bg-white/5 transition-colors text-right"
          >
            <div>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-dm">
                Next Case Study ›
              </span>
              <strong className="block text-xs sm:text-sm text-white group-hover:text-[#FEC163] transition-colors font-dm">
                Arbree Solutions Analytics
              </strong>
            </div>
            <div className="w-16 h-12 bg-slate-800 rounded-xs flex items-center justify-center text-xs flex-shrink-0">
              📊
            </div>
          </Link>
        </div>
      </section>
    </article>
  );
}
