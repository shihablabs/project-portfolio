'use client';

import React from 'react';
import Image from 'next/image';

/**
 * HeroHeader — Figma "hero section" frames 66:3836 (light) / 2666:282 (dark)
 *
 * Layout (pixel-matched to Figma):
 *   - Solid orange border (1.5px #DE4313) forming a rectangle
 *   - "S E J U T I" gradient text centered in the top border gap (with bg colour behind it)
 *   - Inside the box:
 *       • Large colourful lightbulb PNG centred (slightly lower-half)
 *       • Warm radial glow behind the bulb
 *       • "BRINGING IDEAS TO LIGHT" — huge bold, centred at top of inner box, overlaid on bulb
 *       • "by means of design" — Almarai italic gradient, directly below headline
 */
export default function HeroHeader() {
  return (
    <section id="home" className="relative w-full px-4 sm:px-6 md:px-8 pt-6 pb-0" suppressHydrationWarning>
      <div className="relative mx-auto" style={{ maxWidth: '1200px' }}>

        {/* ── Top border row: line — S E J U T I — line ── */}
        <div className="flex items-center w-full" style={{ zIndex: 1, position: 'relative' }}>
          <div className="flex-1 h-[1.5px]" style={{ background: '#DE4313' }} />

          {/* SEJUTI — floats in the border gap, background masks the line behind it */}
          <div
            className="shrink-0 px-5 flex items-center justify-center"
            style={{ background: 'var(--bg)', marginBottom: '-1px', paddingTop: '2px', paddingBottom: '2px' }}
          >
            <span
              className="font-almarai font-extrabold text-gradient select-none whitespace-nowrap"
              style={{ fontSize: 'clamp(14px, 1.8vw, 24px)', letterSpacing: '0.38em' }}
            >
              S E J U T I
            </span>
          </div>

          <div className="flex-1 h-[1.5px]" style={{ background: '#DE4313' }} />
        </div>

        {/* ── Hero Box (no top border — the line above IS the top border) ── */}
        <div
          className="relative overflow-hidden"
          style={{
            border: '1.5px solid #DE4313',
            borderTop: 'none',
            minHeight: 'clamp(400px, 52vw, 660px)',
            background: 'var(--bg)',
          }}
        >
          {/* Warm radial glow — Figma Ellipse 58: large amber-red bloom centred on bulb */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 55% at 52% 68%, rgba(222,67,19,0.30) 0%, rgba(254,193,99,0.10) 50%, transparent 80%)',
            }}
          />

          {/* Lightbulb PNG — centred horizontally, anchored to bottom half */}
          <div
            className="absolute pointer-events-none select-none"
            style={{
              left: '50%',
              bottom: '-2%',
              transform: 'translateX(-50%)',
              width: 'clamp(240px, 36%, 440px)',
            }}
          >
            <Image
              src="/assets/hero-lightbulb.png"
              alt="Geometric lightbulb artwork"
              width={440}
              height={682}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          {/* Text block — overlaid, z-20, centred top area */}
          <div
            className="relative z-20 w-full flex flex-col items-center justify-start text-center"
            style={{ paddingTop: 'clamp(28px, 6%, 72px)', paddingLeft: '5%', paddingRight: '5%' }}
          >
            {/* "BRINGING IDEAS TO LIGHT" — renders as large bold text matching Figma  */}
            <h1
              className="font-dm font-extrabold uppercase leading-[0.9] text-[var(--ink)]"
              style={{ fontSize: 'clamp(36px, 7.5vw, 104px)', maxWidth: '100%', letterSpacing: '-0.01em' }}
            >
              BRINGING IDEAS
              <br />
              TO LIGHT
            </h1>

            {/* "by means of design" — Almarai Regular italic gradient */}
            <p
              className="font-almarai text-gradient mt-2 sm:mt-3"
              style={{
                fontSize: 'clamp(16px, 2.4vw, 32px)',
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}
            >
              by means of design
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
