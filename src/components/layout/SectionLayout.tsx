'use client';

/**
 * SectionLayout — Reusable wrapper matching Figma's section layout
 *
 * Figma structure at 1440px (sidebar 160px wide):
 *   [sidebar 160px] | [left col ~260px: ghost 01/02.. + outlined gradient label] | [content col] | [right tab ~80px with diamonds]
 */
import React from 'react';
import Link from 'next/link';

interface SectionLayoutProps {
  id: string;
  num: string;               // "01", "02", "03", "04"
  sectionLabel: string;      // "ABOUT", "WORK", "BLOGS", "CONTACT"
  tabLabel: string;          // "KNOW MORE", "VIEW ALL WORK", etc.
  tabHref: string;
  children: React.ReactNode;
}

export default function SectionLayout({
  id, num, sectionLabel, tabLabel, tabHref, children
}: SectionLayoutProps) {
  const gradId = `sec-grad-${num}`;
  const diamId1 = `diam-top-${num}`;
  const diamId2 = `diam-bot-${num}`;

  return (
    <section id={id} className="relative w-full py-16 md:py-24">
      {/* Top horizontal divider line */}
      <div className="w-full h-[1.5px] bg-[var(--ink-32)] mb-12 opacity-60" />

      <div className="relative flex items-start max-w-[1440px] mx-auto px-4 lg:px-6">
        {/* ── LEFT COLUMN: ghost section number + outlined gradient label ── */}
        <div
          className="hidden lg:flex flex-col items-start flex-shrink-0 select-none"
          style={{ width: '240px' }}
        >
          {/* Ghost section number */}
          <span
            className="font-concert text-[180px] leading-none select-none text-transparent"
            style={{ WebkitTextStroke: '1.5px var(--ink-32)' }}
          >
            {num}
          </span>

          {/* Outlined gradient section label */}
          <svg className="w-[220px] h-[64px] -mt-10 overflow-visible" viewBox="0 0 220 64">
            <defs>
              <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FEC163" />
                <stop offset="96%" stopColor="#DE4313" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="50"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="1.5"
              fontFamily="var(--font-almarai), sans-serif"
              fontWeight="700"
              fontSize="48"
              letterSpacing="0.02em"
            >
              {sectionLabel}
            </text>
          </svg>
        </div>

        {/* Mobile section indicator */}
        <div className="lg:hidden flex items-baseline gap-3 px-2 mb-6">
          <span
            className="font-concert text-[60px] text-transparent leading-none"
            style={{ WebkitTextStroke: '1px var(--ink-32)' }}
          >
            {num}
          </span>
          <span className="font-almarai font-bold text-[28px] text-gradient">
            {sectionLabel}
          </span>
        </div>

        {/* ── CONTENT COLUMN ── */}
        <div className="flex-1 min-w-0 lg:px-6">
          {children}
        </div>

        {/* ── RIGHT SIDE TAB: diamonds + vertical gradient text ── */}
        <div
          className="hidden lg:flex flex-col items-center justify-start flex-shrink-0 pt-2"
          style={{ width: '70px' }}
        >
          <Link
            href={tabHref}
            className="group flex flex-col items-center hover:opacity-85 transition-opacity"
            title={tabLabel}
          >
            {/* Top diamond */}
            <svg width="15" height="17" viewBox="0 0 16 18" fill="none">
              <defs>
                <linearGradient id={diamId1} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FEC163" />
                  <stop offset="100%" stopColor="#DE4313" />
                </linearGradient>
              </defs>
              <polygon points="8 0, 16 9, 8 18, 0 9" fill={`url(#${diamId1})`} />
            </svg>

            {/* Vertical text label */}
            <span
              className="my-5 select-none font-dm font-bold text-[16px] tracking-[0.16em] uppercase text-gradient"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              {tabLabel}
            </span>

            {/* Bottom diamond */}
            <svg width="15" height="17" viewBox="0 0 16 18" fill="none">
              <defs>
                <linearGradient id={diamId2} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FEC163" />
                  <stop offset="100%" stopColor="#DE4313" />
                </linearGradient>
              </defs>
              <polygon points="8 0, 16 9, 8 18, 0 9" fill={`url(#${diamId2})`} />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
