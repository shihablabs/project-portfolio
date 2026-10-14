'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionLayout from '@/components/layout/SectionLayout';
import { projects } from '@/data/projects';

/**
 * FeaturedWorkSection — Figma "02 WORK" section (Node 2667:1129) — pixel-perfect
 *
 * Key Figma observations:
 *  - Dark navy bg (#0A0F24) with two large orange radial glow ellipses
 *  - Left col: ghost "02" (Concert One 200px, stroke = bg color) + outlined-gradient "WORK" (Almarai Bold 48px)
 *  - Content col (x:623):
 *      "Blending aesthetics & functionality" — Almarai Regular 32px #FFF7E9
 *      body paragraph — Almarai Regular 18px, 80% opacity
 *      "Featured Projects" — DM Sans Bold 48px gradient (#FEC163→#DE4313)
 *  - Large showcase card: Subtract shape (gradient border 1.5px, w:1085 h:523)
 *      - Logo badge centered at top (Aamar Pharma logo, image 2667:1319, y:293-381)
 *        sitting on a bg-color rectangle that cuts the border
 *      - Full-width mockup image inside card (no left text pane in default state)
 *      - On hover: left pane appears with title, description, pill tags, VIEW CASE STUDY button
 *  - Pagination row: gradient arrow ← | gradient "01" (active) | muted "02" "03" | gradient arrow →
 *    with two gradient lines extending from the arrows outward
 *  - Right side tab: diamonds + "VIEW ALL WORK" vertical rotated gradient text
 */
export default function FeaturedWorkSection() {
  const [idx, setIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const featured = projects.filter(p => p.featured);
  const proj = featured[idx] ?? featured[0];

  const prev = () => setIdx(i => (i - 1 + featured.length) % featured.length);
  const next = () => setIdx(i => (i + 1) % featured.length);

  const gradId = `work-grad-${idx}`;

  return (
    <SectionLayout
      id="work"
      num="02"
      sectionLabel="WORK"
      tabLabel="VIEW ALL WORK"
      tabHref="/work"
    >
      {/* ── Sub-headline — Almarai Regular 32px ── */}
      <h2 className="font-almarai font-normal text-[26px] sm:text-[30px] lg:text-[32px] text-[var(--ink)] leading-[1.3] mb-4">
        Blending aesthetics &amp; functionality
      </h2>

      {/* ── Description paragraph — Almarai Regular 18px 80% opacity ── */}
      <p
        className="font-almarai text-[16px] sm:text-[18px] leading-[1.65] mb-10"
        style={{ color: 'rgba(255,247,231,0.8)', maxWidth: '649px' }}
      >
        From websites and apps to full-fledged digital systems, projects range from business
        tools to consumer products — spanning industries like healthcare, education, non-profits,
        e-commerce, travel, finance, and more — designed for companies of all sizes within agency,
        in-house, and freelance settings.
      </p>

      {/* ── "Featured Projects" — DM Sans Bold 48px gradient ── */}
      <h3 className="font-dm font-bold text-gradient text-[36px] sm:text-[44px] lg:text-[48px] mb-10 leading-none">
        Featured Projects
      </h3>

      {/* ── Main showcase card — gradient border, notched logo badge at top ── */}
      <div className="relative">
        {/* Logo badge notch — sits ON TOP of the top border line, with bg-color fill behind it */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-[44px] z-10 px-4 py-2 flex items-center justify-center"
          style={{ background: 'var(--bg)' }}
        >
          <div className="relative h-[88px] w-[191px]">
            <Image
              src="/assets/icons/work-logo.png"
              alt={proj.client}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* The card itself */}
        <div
          className="relative w-full overflow-hidden cursor-pointer group"
          style={{
            background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 96%) border-box',
            border: '1.5px solid transparent',
            minHeight: '523px',
            paddingTop: '44px', // compensate for logo badge height
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Default state: full-width mockup centered */}
          <div
            className="transition-opacity duration-500"
            style={{ opacity: hovered ? 0 : 1 }}
          >
            <div className="relative w-full h-[460px] flex items-center justify-center px-4 sm:px-8">
              <div className="relative w-full h-full">
                <Image
                  src={proj.mockupImage ?? proj.coverImage}
                  alt={proj.client}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Hover state: side-by-side layout (text + mockup) */}
          <div
            className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 gap-0 transition-opacity duration-500"
            style={{ opacity: hovered ? 1 : 0, paddingTop: '44px' }}
          >
            {/* LEFT: project info */}
            <div className="flex flex-col justify-center p-8 sm:p-10 border-r border-[#FEC163]/30">
              <h4 className="font-dm font-black text-[var(--ink)] uppercase text-[14px] sm:text-[16px] leading-snug mb-4 tracking-wide">
                {proj.title}
              </h4>
              <p className="font-almarai text-[15px] sm:text-[16px] leading-[1.65] mb-8" style={{ color: 'rgba(255,247,231,0.8)' }}>
                {proj.summary}
              </p>

              {/* Tag pills — pill outline style matching Figma */}
              <div className="flex flex-wrap gap-2 mb-10">
                {proj.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 text-[12px] sm:text-[13px] font-dm font-semibold tracking-wide text-[var(--ink)] border border-[var(--ink)]/60 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* VIEW CASE STUDY button — circle with diamond icon + gradient text */}
              <Link
                href={proj.caseStudyUrl ?? `/work/${proj.slug}`}
                className="inline-flex items-center gap-4 w-fit group/btn"
              >
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
                    border: '1.5px solid transparent',
                  }}
                >
                  <svg width="14" height="16" viewBox="0 0 16 18" fill="none">
                    <defs>
                      <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FEC163" />
                        <stop offset="100%" stopColor="#DE4313" />
                      </linearGradient>
                    </defs>
                    <polygon points="8 0, 16 9, 8 18, 0 9" fill={`url(#${gradId})`} />
                  </svg>
                </span>
                <span className="font-dm font-bold text-gradient text-[14px] sm:text-[15px] tracking-[0.16em] uppercase">
                  VIEW CASE STUDY
                </span>
              </Link>
            </div>

            {/* RIGHT: mockup */}
            <div className="hidden lg:flex items-center justify-center p-6">
              <div className="relative w-full h-[380px]">
                <Image
                  src={proj.mockupImage ?? proj.coverImage}
                  alt={proj.client}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Pagination row — gradient arrows + gradient lines + page numbers ── */}
      <div className="relative flex items-center justify-center gap-0 mt-6 select-none">
        {/* Left gradient line extending from arrow */}
        <div
          className="hidden sm:block flex-1 h-[1.5px] mr-6"
          style={{ background: 'linear-gradient(90deg, transparent, #FEC163 60%, #DE4313 100%)' }}
        />

        {/* Left arrow button */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="flex items-center justify-center w-8 h-8 hover:opacity-70 transition-opacity"
        >
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
            <defs>
              <linearGradient id="arrow-left-grad" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#FEC163" />
                <stop offset="100%" stopColor="#DE4313" />
              </linearGradient>
            </defs>
            <line x1="28" y1="6" x2="2" y2="6" stroke="url(#arrow-left-grad)" strokeWidth="1.5" />
            <polyline points="9,1 2,6 9,11" fill="none" stroke="url(#arrow-left-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Page numbers */}
        <div className="flex items-center gap-10 sm:gap-14 mx-8">
          {featured.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="font-almarai font-normal text-[18px] leading-none transition-all duration-200"
              style={{
                background: i === idx ? 'linear-gradient(135deg, #FEC163 0%, #DE4313 100%)' : 'none',
                WebkitBackgroundClip: i === idx ? 'text' : 'unset',
                WebkitTextFillColor: i === idx ? 'transparent' : 'rgba(255,247,231,0.8)',
                backgroundClip: i === idx ? 'text' : 'unset',
                color: i === idx ? 'transparent' : 'rgba(255,247,231,0.8)',
              }}
            >
              {String(i + 1).padStart(2, '0')}
            </button>
          ))}
        </div>

        {/* Right arrow button */}
        <button
          onClick={next}
          aria-label="Next project"
          className="flex items-center justify-center w-8 h-8 hover:opacity-70 transition-opacity"
        >
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
            <defs>
              <linearGradient id="arrow-right-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FEC163" />
                <stop offset="100%" stopColor="#DE4313" />
              </linearGradient>
            </defs>
            <line x1="0" y1="6" x2="26" y2="6" stroke="url(#arrow-right-grad)" strokeWidth="1.5" />
            <polyline points="19,1 26,6 19,11" fill="none" stroke="url(#arrow-right-grad)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right gradient line extending from arrow */}
        <div
          className="hidden sm:block flex-1 h-[1.5px] ml-6"
          style={{ background: 'linear-gradient(90deg, #DE4313 0%, #FEC163 40%, transparent)' }}
        />
      </div>
    </SectionLayout>
  );
}
