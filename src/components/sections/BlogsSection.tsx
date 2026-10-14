'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionLayout from '@/components/layout/SectionLayout';
import { blogPosts, BlogCategory } from '@/data/blogs';

/**
 * BlogsSection — Figma "03 BLOGS" section (Node 2667:1501) — pixel-perfect
 *
 * Key Figma observations:
 *  - Dark navy bg (#0A0F24) with top-right orange radial glow ellipse
 *  - Left col: ghost "03" (Concert One 200px, fill = bg color) + outlined-gradient "BLOGS" (Almarai Bold 48px)
 *  - Content col (x:623):
 *      "Passion & Play"        — Almarai Regular 32px  #FFF7E9 100% opacity
 *      description paragraph   — Almarai Regular 18px  #FFF7E9 80% opacity
 *      "Design  Photography  Writing" — DM Sans Bold 48px  gradient fill (#FEC163→#DE4313)
 *        These also act as active-state highlight tabs on click
 *  - Three card columns (344×390px each, spaced at x:278/647/1016):
 *      Each = gradient border 1.5px Subtract rectangle
 *      Icon sits at the TOP CENTER with a bg-color notch rectangle behind it (cuts the border)
 *        – Design:      pencil/edit icon (stroke gradient)
 *        – Photography: camera icon (fill + heart overlay)
 *        – Writing:     lines icon (stroke gradient)
 *      Image fills the card interior
 *      Title below the card  (DM Sans Bold 18px, #FFF7E9, uppercase, centered)
 *  - Right side tab: diamonds + "VIEW ALL BLOGS" vertical gradient text (same as other sections)
 */

// ── Icon SVGs extracted to match Figma exactly ──────────────────────────────

/** Design icon: pencil/paint brush stroke  (Group 123 / 2667:1622) */
const DesignIcon = () => (
  <svg viewBox="0 0 42 42" fill="none" width="38" height="38">
    <defs>
      <linearGradient id="dig" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FEC163" />
        <stop offset="96%" stopColor="#DE4313" />
      </linearGradient>
    </defs>
    {/* Pencil body */}
    <path
      d="M6 32.5L2.5 39.5l7-3.5 24-24-3.5-3.5L6 32.5z"
      stroke="url(#dig)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* Pencil tip */}
    <path
      d="M30 4l8 8-2 2-8-8 2-2z"
      stroke="url(#dig)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
    {/* Eraser circle */}
    <circle cx="35" cy="35" r="2.5" stroke="url(#dig)" strokeWidth="1.5" />
  </svg>
);

/** Photography icon: camera with heart overlay (Group 2667:1605–1607) */
const CameraIcon = () => (
  <svg viewBox="0 0 51 40" fill="none" width="44" height="34">
    <defs>
      <linearGradient id="cig" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FEC163" />
        <stop offset="96%" stopColor="#DE4313" />
      </linearGradient>
    </defs>
    {/* Camera body outline */}
    <rect x="1" y="10" width="49" height="29" rx="3" stroke="url(#cig)" strokeWidth="1.8" />
    {/* Lens bump top */}
    <path
      d="M17 10V5a2 2 0 012-2h13a2 2 0 012 2v5"
      stroke="url(#cig)" strokeWidth="1.8" strokeLinecap="round"
    />
    {/* Lens circle */}
    <circle cx="25.5" cy="24" r="8" stroke="url(#cig)" strokeWidth="1.8" />
    {/* Heart inside lens */}
    <path
      d="M22 22c0-1.5 1.2-2.5 2.5-1.5C25.8 21.5 27 20.5 27 22c0 2-2.5 4-2.5 4S22 24 22 22z"
      fill="url(#cig)"
    />
  </svg>
);

/** Writing icon: lines with pen (Group 2667:1612–1617) */
const WriteIcon = () => (
  <svg viewBox="0 0 52 42" fill="none" width="44" height="36">
    <defs>
      <linearGradient id="wig" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#FEC163" />
        <stop offset="96%" stopColor="#DE4313" />
      </linearGradient>
    </defs>
    {/* Ruled lines, decreasing width left-aligned (as in Figma) */}
    <line x1="0" y1="34" x2="12" y2="34" stroke="url(#wig)" strokeWidth="2" strokeLinecap="round" />
    <line x1="0" y1="26" x2="18" y2="26" stroke="url(#wig)" strokeWidth="2" strokeLinecap="round" />
    <line x1="0" y1="18" x2="23" y2="18" stroke="url(#wig)" strokeWidth="2" strokeLinecap="round" />
    <line x1="0" y1="10" x2="29" y2="10" stroke="url(#wig)" strokeWidth="2" strokeLinecap="round" />
    {/* Pen / edit nib — diagonal, top-right */}
    <path
      d="M31 8l9 9-16 16-2-1-7 2 2-7-1-2 15-17z"
      stroke="url(#wig)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
    />
  </svg>
);

const ICONS = {
  Design: <DesignIcon />,
  Photography: <CameraIcon />,
  Writing: <WriteIcon />,
} as const;

// Map blog categories to figma image assets
const CARD_IMAGES: Record<BlogCategory, string> = {
  Design: '/assets/images/blog-design.png',
  Photography: '/assets/images/blog-photography.png',
  Writing: '/assets/images/blog-writing.png',
};

// ── Component ────────────────────────────────────────────────────────────────

export default function BlogsSection() {
  const [activeTab, setActiveTab] = useState<BlogCategory | null>(null);

  // In Figma, ALL three cards are shown simultaneously — the gradient text is
  // a display header, not a filter. But we still support clicking to highlight.
  const displayed = activeTab
    ? blogPosts.filter(b => b.category === activeTab)
    : blogPosts;

  return (
    <SectionLayout
      id="blogs"
      num="03"
      sectionLabel="BLOGS"
      tabLabel="VIEW ALL BLOGS"
      tabHref="/blogs"
    >
      {/* ── Sub-headline — Almarai Regular 32px ── */}
      <h2 className="font-almarai font-normal text-[26px] sm:text-[30px] lg:text-[32px] text-[var(--ink)] leading-[1.3] mb-4">
        Passion &amp; Play
      </h2>

      {/* ── Description — Almarai Regular 18px 80% ── */}
      <p
        className="font-almarai text-[16px] sm:text-[18px] leading-[1.65] mb-8"
        style={{ color: 'rgba(255,247,231,0.8)', maxWidth: '647px' }}
      >
        A space to wander through ideas, reflections, and creative expression —
        exploring the beauty, wonder, and subtle magic in everyday life, and
        seeing the world through a thoughtful, artistic lens — offering
        inspiration, meaningful insights, and moments of quiet contemplation.
      </p>

      {/* ── "Design  Photography  Writing" — DM Sans Bold 48px gradient + clickable filter ── */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-2 mb-12">
        {(['Design', 'Photography', 'Writing'] as BlogCategory[]).map(cat => (
          <button
            key={cat}
            onClick={() => setActiveTab(prev => prev === cat ? null : cat)}
            className="font-dm font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-none transition-all duration-200"
            style={{
              background: (!activeTab || activeTab === cat)
                ? 'linear-gradient(135deg, #FEC163 0%, #DE4313 100%)'
                : 'none',
              WebkitBackgroundClip: (!activeTab || activeTab === cat) ? 'text' : 'unset',
              WebkitTextFillColor: (!activeTab || activeTab === cat) ? 'transparent' : 'rgba(255,247,231,0.35)',
              backgroundClip: (!activeTab || activeTab === cat) ? 'text' : 'unset',
              color: (!activeTab || activeTab === cat) ? 'transparent' : 'rgba(255,247,231,0.35)',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Three blog cards — full 4-sided gradient border, image + title inside, icon notch at top ──
          Figma layout per card (absolute y coords within 870px section):
            Border outline:  y:342 → y:732  (h:390)
            Image:           y:360 → y:650  (18px from top border, 290px tall)
            Title text:      y:666 → y:710  (inside border, 16px below image)
            Icon group:      y:303 → y:344  (straddles top border line at y:342)
          Proportions inside card:
            top gap   = 18 / 390 ≈ 4.6%
            image     = 290 / 390 ≈ 74.4%
            mid gap   = 16 / 390 ≈ 4.1%
            title     = 44 / 390 ≈ 11.3%
            bottom    = 22 / 390 ≈ 5.6%
      ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {displayed.map(post => (
          <Link key={post.id} href={`/blogs/${post.slug}`} className="group block">

            {/* Outer wrapper — extra top margin so the icon (which overflows the card upward) has room */}
            <div className="relative mt-[20px]">

              {/* ── Bordered card: wraps BOTH the image and the title ── */}
              <div
                className="relative w-full overflow-hidden group-hover:scale-[1.01] transition-transform duration-300"
                style={{
                  background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 96%) border-box',
                  border: '1.5px solid transparent',
                }}
              >
                {/* Top notch gap — 18/390 of total card height.
                    Keeps the image 18px below the top border (where the icon masking is). */}
                <div style={{ height: `${(18 / 390) * 100}%`, minHeight: '14px' }} />

                {/* Image — flush, no horizontal padding, aspect 302:290 */}
                <div className="relative w-full" style={{ aspectRatio: '302/290' }}>
                  <Image
                    src={CARD_IMAGES[post.category]}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Gap between image and title — 16/390 */}
                <div style={{ height: `${(16 / 390) * 100}%`, minHeight: '12px' }} />

                {/* Title inside card — DM Sans Bold 18px, uppercase, centered, #FFF7E9 */}
                <p
                  className="font-dm font-bold text-center uppercase leading-snug px-3
                             text-[13px] sm:text-[15px] lg:text-[18px]
                             group-hover:text-gradient transition-all duration-200"
                  style={{ color: 'rgba(255,246,233,1)' }}
                >
                  {post.title}
                </p>

                {/* Bottom padding — 22/390 */}
                <div style={{ height: `${(22 / 390) * 100}%`, minHeight: '16px' }} />
              </div>

              {/* ── Icon badge — absolutely positioned to overlap the top border ──
                  Icon group in Figma: y:303 → y:344 (h≈41px)
                  Top border at y:342. Icon center at y≈324 (19px above border).
                  Here: icon bottom ≈ touches the border top.
                  We use -top-[20px] so the icon's lower portion overlaps the card's top border,
                  and the bg-color fill behind it masks that exact stretch. ── */}
              <div
                className="absolute -top-[20px] left-1/2 -translate-x-1/2 z-10
                           flex items-center justify-center px-4"
                style={{ background: 'var(--bg)' }}
              >
                {ICONS[post.category]}
              </div>

            </div>
          </Link>
        ))}
      </div>
    </SectionLayout>
  );
}
