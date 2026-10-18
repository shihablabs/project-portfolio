"use client";

import Image from "next/image";
import React from "react";

/**
 * ══════════════════════════════════════════════════════════════════════════════
 * DUMMY / TEMPLATE SECTION: FIGMA GRADIENT BORDER WITH TOP NOTCH BADGE
 * ══════════════════════════════════════════════════════════════════════════════
 *
 * How this pattern works:
 * 1. Container:
 *    - Has `.figma-gradient-border` which draws a continuous 1.5px gradient border
 *      (#FEC163 -> #DE4313) on all 4 sides with clean 90-degree corners.
 *
 * 2. Top Border Notch Mask (z-[1]):
 *    - Sits at `top-0 left-1/2 -translate-x-1/2 -translate-y-1/2`.
 *    - Has `.card-badge-bg` (matches theme canvas color and texture in light & dark).
 *    - Only h-3 (12px) high, just enough to cleanly cover the 1.5px top border line.
 *    - Adjust width (`w-[220px] sm:w-[280px]`) to match your title length.
 *
 * 3. Glow Layer (z-[2]) (Optional):
 *    - If a section uses a warm background glow, keep it at z-[2] so it diffuses
 *      smoothly OVER the mask and canvas without any visible rectangular seam.
 *
 * 4. Top Notch Badge (z-30):
 *    - Sits directly over the top border (`top-0 left-1/2 -translate-x-1/2 -translate-y-1/2`).
 *    - Kept transparent so the warm glow shines through hollow letters or text.
 *    - Can use an SVG (like `/assets/header-sejuti.svg`) OR pure text with `.text-gradient`.
 * ══════════════════════════════════════════════════════════════════════════════
 */

interface DamiSectionProps {
  id?: string;
  badgeTitle?: string;
  badgeSvgSrc?: string;
  badgeSvgWidth?: number;
  badgeSvgHeight?: number;
  children?: React.ReactNode;
}

export default function DamiSection({
  id = "dami-section",
  badgeTitle = "SECTION TITLE",
  badgeSvgSrc,
  badgeSvgWidth = 234,
  badgeSvgHeight = 42,
  children,
}: DamiSectionProps) {
  return (
    <section
      id={id}
      className="w-full max-w-6xl mx-auto pt-10 sm:pt-14 px-4 sm:px-6"
    >
      {/* ── Main Container with 4-side gradient border ── */}
      <div className="relative w-full figma-gradient-border p-8 sm:p-14 text-center flex flex-col items-center justify-center min-h-[400px]">
        {/* ── 1. Notch Mask: cleanly cuts the top border line behind the title ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] h-3 card-badge-bg z-[1]"
        />

        {/* ── 2. Top Title Badge (SVG or Text) ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 z-30 flex items-center justify-center select-none">
          {badgeSvgSrc ? (
            <>
              <Image
                src={badgeSvgSrc}
                alt={badgeTitle}
                width={badgeSvgWidth}
                height={badgeSvgHeight}
                className="h-7 sm:h-9 md:h-10 w-auto object-contain"
                priority
              />
              <span className="sr-only">{badgeTitle}</span>
            </>
          ) : (
            <span className="font-dm font-bold text-lg sm:text-2xl tracking-[0.25em] text-gradient uppercase">
              {badgeTitle}
            </span>
          )}
        </div>

        {/* ── 3. Optional Center Ellipse Glow (z-[2]) ── */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[380px] max-w-full rounded-full z-[2]"
          style={{
            backgroundColor: "rgba(222, 67, 19, 0.45)",
            filter: "blur(120px)",
          }}
        />

        {/* ── 4. Main Section Content (z-20) ── */}
        <div className="relative z-20 flex flex-col items-center gap-4">
          {children ? (
            children
          ) : (
            <>
              <h2 className="font-dm font-medium text-3xl sm:text-5xl uppercase text-[var(--ink)]">
                YOUR CONTENT HEADLINE
              </h2>
              <p className="font-almarai italic text-base sm:text-xl text-gradient">
                Your subtitle or caption goes here
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
