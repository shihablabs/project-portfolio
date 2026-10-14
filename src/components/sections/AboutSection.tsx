'use client';

import React from 'react';
import Image from 'next/image';
import SectionLayout from '@/components/layout/SectionLayout';

/**
 * AboutSection — Matches Figma "about section" (Node 2666:846) & home_defult-new pixel-for-pixel
 *
 * Design Specifications from Figma (finals page, Node 2666:846):
 *  - Ghost number: 01 (Concert One 200px)
 *  - Section label: ABOUT (Almarai Bold 48px, outlined gradient stroke #FEC163 → #DE4313)
 *  - Headline: "Multidisciplinary Designer specializing in UX & UI Design" (Almarai Regular 32px)
 *  - Bio: "Designer by passion, IT grad by education..." (Almarai Regular 18px, 80% opacity)
 *  - Stats: "8+ Years" & "60+ Projects" (DM Sans Bold 48px, gradient fill #FEC163 → #DE4313)
 *  - Card 1 (Left): UX & UI DESIGN with top badge (responsive 1 icon) and 3 sub-items:
 *      WEBSITE, APP, SOFTWARE with extracted high-res Figma 3D assets
 *  - Card 2 & 3 (Right): Stacked cards with left edge badges:
 *      LOGO & BRANDING (with design_6319883 icon)
 *      PRINT & DIGITAL MARKETING (with digital-marketing_12688055 icon)
 *  - Right side tab: Diamonds + "KNOW MORE" vertical rotated gradient text linking to /about
 */
export default function AboutSection() {
  return (
    <SectionLayout
      id="about"
      num="01"
      sectionLabel="ABOUT"
      tabLabel="KNOW MORE"
      tabHref="/about"
    >
      <div className="relative w-full">
        {/* Figma Glow overlays (ellipses 2666:853 and 2666:854) */}
        <div
          className="absolute -top-16 -right-12 w-[380px] h-[360px] rounded-full bg-[#DE4313] opacity-25 blur-[120px] pointer-events-none -z-10"
          aria-hidden="true"
        />
        <div
          className="absolute -bottom-8 left-[10%] w-[270px] h-[260px] rounded-full bg-[#DE4313] opacity-20 blur-[100px] pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* ── Headline — Almarai Regular 32px ── */}
        <h2
          className="font-almarai text-[26px] sm:text-[30px] lg:text-[32px] text-[var(--ink)] leading-[1.25] mb-4 font-normal tracking-normal"
        >
          Multidisciplinary Designer<br />
          specializing in UX &amp; UI Design
        </h2>

        {/* ── Bio paragraph — Almarai Regular 18px, 80% opacity ── */}
        <p
          className="font-almarai text-[16px] sm:text-[18px] leading-[1.65] text-[var(--body-muted)] max-w-[650px] mb-8 font-normal"
        >
          Designer by passion, IT grad by education, and a creative generalist at heart —&nbsp;
          crafting digital products from concept to launch that look, feel, and work great —&nbsp;
          aligning user needs, business goals, and technology, with an unique brand of magic.
        </p>

        {/* ── Stats row: 8+ Years & 60+ Projects (Exact Figma specs) ── */}
        <div className="flex flex-wrap items-baseline gap-8 sm:gap-14 mb-12 select-none">
          <div>
            <span
              className="font-dm font-bold text-[36px] sm:text-[44px] lg:text-[48px] text-gradient block leading-none"
            >
              8+ Years
            </span>
          </div>
          <div>
            <span
              className="font-dm font-bold text-[36px] sm:text-[44px] lg:text-[48px] text-gradient block leading-none"
            >
              60+ Projects
            </span>
          </div>
        </div>

        {/* ── Service Cards Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-2">
          {/* ── Left Card: UX & UI DESIGN with Website, App, Software ── */}
          <div
            className="lg:col-span-7 relative flex flex-col justify-between pt-14 pb-8 px-4 sm:px-8 transition-transform duration-300 hover:shadow-[0_0_30px_rgba(222,67,19,0.15)]"
            style={{
              background:
                'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
              border: '1.5px solid transparent',
              minHeight: '340px',
            }}
          >
            {/* Top Cutout Badge with UX & UI Icon */}
            <div
              className="absolute -top-7 left-1/2 -translate-x-1/2 px-4 py-1 flex flex-col items-center z-10"
              style={{ background: 'var(--bg)' }}
            >
              <div className="relative w-12 h-12 mb-1 flex items-center justify-center">
                <Image
                  src="/assets/icons/about-ux-ui.png"
                  alt="UX & UI Icon"
                  width={58}
                  height={58}
                  className="w-12 h-12 object-contain"
                  priority
                />
              </div>
              <h3 className="font-dm font-bold text-[15px] sm:text-[17px] tracking-wide text-[var(--ink)] text-center uppercase leading-tight whitespace-nowrap">
                UX &amp; UI<br />DESIGN
              </h3>
            </div>

            {/* 3 Sub-items: WEBSITE / APP / SOFTWARE */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end mt-auto pt-6">
              {/* WEBSITE */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 flex items-center justify-center">
                  <Image
                    src="/assets/icons/about-website.png"
                    alt="Website design"
                    width={116}
                    height={116}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="font-dm font-bold text-[14px] sm:text-[16px] lg:text-[18px] text-[var(--ink)] uppercase tracking-[0.08em] mt-3">
                  WEBSITE
                </span>
              </div>

              {/* APP */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 flex items-center justify-center">
                  <Image
                    src="/assets/icons/about-app.png"
                    alt="App design"
                    width={103}
                    height={103}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="font-dm font-bold text-[14px] sm:text-[16px] lg:text-[18px] text-[var(--ink)] uppercase tracking-[0.08em] mt-3">
                  APP
                </span>
              </div>

              {/* SOFTWARE */}
              <div className="group flex flex-col items-center text-center">
                <div className="relative w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 flex items-center justify-center">
                  <Image
                    src="/assets/icons/about-software.png"
                    alt="Software UI design"
                    width={108}
                    height={108}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="font-dm font-bold text-[14px] sm:text-[16px] lg:text-[18px] text-[var(--ink)] uppercase tracking-[0.08em] mt-3">
                  SOFTWARE
                </span>
              </div>
            </div>
          </div>

          {/* ── Right Column: Stacked Cards ── */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-7">
            {/* Card 1: LOGO & BRANDING */}
            <div
              className="relative flex items-center px-6 sm:px-8 py-6 min-h-[145px] sm:min-h-[155px] group transition-transform duration-300 hover:shadow-[0_0_25px_rgba(222,67,19,0.15)]"
              style={{
                background:
                  'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
                border: '1.5px solid transparent',
              }}
            >
              {/* Left Cutout Badge with Branding Icon */}
              <div
                className="absolute -left-6 top-1/2 -translate-y-1/2 py-2 px-1 z-10 flex items-center justify-center"
                style={{ background: 'var(--bg)' }}
              >
                <Image
                  src="/assets/icons/about-branding.png"
                  alt="Logo & Branding Icon"
                  width={59}
                  height={59}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Label */}
              <div className="pl-8 sm:pl-10">
                <h3 className="font-dm font-bold text-[17px] sm:text-[19px] uppercase tracking-wide text-[var(--ink)] leading-snug">
                  LOGO &amp;<br />BRANDING
                </h3>
              </div>
            </div>

            {/* Card 2: PRINT & DIGITAL MARKETING */}
            <div
              className="relative flex items-center px-6 sm:px-8 py-6 min-h-[145px] sm:min-h-[155px] group transition-transform duration-300 hover:shadow-[0_0_25px_rgba(222,67,19,0.15)]"
              style={{
                background:
                  'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
                border: '1.5px solid transparent',
              }}
            >
              {/* Left Cutout Badge with Marketing Icon */}
              <div
                className="absolute -left-6 top-1/2 -translate-y-1/2 py-2 px-1 z-10 flex items-center justify-center"
                style={{ background: 'var(--bg)' }}
              >
                <Image
                  src="/assets/icons/about-marketing.png"
                  alt="Print & Digital Marketing Icon"
                  width={55}
                  height={55}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Label */}
              <div className="pl-8 sm:pl-10">
                <h3 className="font-dm font-bold text-[17px] sm:text-[19px] uppercase tracking-wide text-[var(--ink)] leading-snug">
                  PRINT &amp; DIGITAL<br />MARKETING
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
