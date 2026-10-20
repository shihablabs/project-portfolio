"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkProject } from "@/data/workProjects";
import SectionBadge from "@/components/ui/SectionBadge";
import CaseStudyHeroCascade from "@/components/ui/CaseStudyHeroCascade";
import CaseStudyFullPageMockup from "@/components/ui/CaseStudyFullPageMockup";

interface CaseStudyViewProps {
  project: WorkProject;
}

export default function CaseStudyView({ project }: CaseStudyViewProps) {
  const cs = project.caseStudyData;

  return (
    <article className="w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24 text-[var(--ink)] select-none">
      {/* ── 01. HERO BOX WITH 5-PHONE PERSPECTIVE CASCADE (Matching Screenshot) ── */}
      <div className="relative w-full bg-transparent border border-[#DE4313]/60 pt-10 sm:pt-14 pb-8 sm:pb-12 px-4 sm:px-8 mb-16 overflow-hidden shadow-2xl">
        {/* Top-Right Notch with "Work" and Top-Left "Back" Link */}
        <div className="absolute top-0 inset-x-4 sm:inset-x-8 -translate-y-1/2 flex items-center justify-between z-20 pointer-events-auto">
          <Link
            href="/work"
            className="px-4 py-1.5 rounded-full bg-[#0A0F24] border border-[#DE4313] text-[#FEC163] hover:text-white text-xs font-dm font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-md transition-colors"
          >
            <span>←</span>
            <span>Back</span>
          </Link>

          <span className="font-dm font-normal text-2xl sm:text-3xl text-[var(--ink)] tracking-tight">
            Work
          </span>
        </div>

        {/* Ambient Radial Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(222, 67, 19, 0.45) 0%, rgba(222, 67, 19, 0.15) 50%, transparent 72%)",
              filter: "blur(90px)",
              width: "500px",
              height: "420px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {/* 5-Phone Symmetrical Perspective Cascade Graphic */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <CaseStudyHeroCascade />
        </div>
      </div>

      {/* ════════════════════════════════════════════════════════════
          01. SECTION 01: PROJECT OVERVIEW
          ════════════════════════════════════════════════════════════ */}
      <section className="w-full mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12">
          {/* Left Column: SectionBadge 01 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge num="01" label="PROJECT&#10;OVERVIEW" isFilled={false} />
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
          02. SECTION 02: USER RESEARCH
          ════════════════════════════════════════════════════════════ */}
      <section className="w-full mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12">
          {/* Left Column: SectionBadge 02 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge num="02" label="USER&#10;RESEARCH" isFilled={false} />
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

      {/* ════════════════════════════════════════════════════════════
          03. DESIGN SYSTEM (STYLE GUIDE & COLOR PALETTE)
          ════════════════════════════════════════════════════════════ */}
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
          04. SECTION 03: FINAL DESIGNS (FULL WEBPAGE SCROLL MOCKUP)
          ════════════════════════════════════════════════════════════ */}
      <section className="w-full mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12 mb-10">
          {/* Left Column: SectionBadge 03 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge num="03" label="FINAL&#10;DESIGNS" isFilled={false} />
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
          05. SECTION 04: RESULTS & CLIENT TESTIMONIAL
          ════════════════════════════════════════════════════════════ */}
      <section className="w-full mb-16 sm:mb-24">
        <div className="relative w-full flex flex-col xl:flex-row items-start justify-between gap-8 sm:gap-12 mb-10">
          {/* Left Column: SectionBadge 04 */}
          <div className="w-full xl:w-auto flex items-center justify-center xl:justify-start flex-shrink-0">
            <SectionBadge num="04" label="RESULTS" isFilled={false} />
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
