'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionLayout from '@/components/layout/SectionLayout';
import { testimonials, clientLogos } from '@/data/testimonials';

/**
 * ContactSection — Figma "04 CONTACT" section
 *
 * Content (x:623):
 *   - "Vision Meets Design" — Almarai Regular 32px dark
 *   - Description paragraph
 *   - "Collaboration Stories" — DM Sans Bold 48px gradient
 *   - Client logos row (4 logos, greyscale hover colour)
 *   - Main testimonial card (Subtract bordered rectangle):
 *     ├─ LEFT: avatar circle (Ellipse 59 + photo), name, role
 *     └─ RIGHT: opening quote SVG (Group 120 = "❝"), quote text (Merriweather italic), author
 *   - Pagination: ← 01 02 03 04 05 06 →
 */
export default function ContactSection() {
  const [tidx, setTidx] = useState(0);
  const t = testimonials[tidx] ?? testimonials[0];

  const prev = () => setTidx(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setTidx(i => (i + 1) % testimonials.length);

  // Figma has 6 pagination indicators — pad if fewer testimonials
  const TOTAL_PAGINATES = Math.max(6, testimonials.length);

  return (
    <SectionLayout
      id="contact"
      num="04"
      sectionLabel="CONTACT"
      tabLabel="GET IN TOUCH"
      tabHref="/contact"
    >
      {/* Vision Meets Design — Almarai Regular 32px */}
      <p className="font-almarai text-[var(--body-text)] mb-3" style={{ fontSize: '28px' }}>
        Vision Meets Design
      </p>

      {/* Description */}
      <p className="font-dm text-[var(--body-muted)] leading-relaxed mb-6" style={{ fontSize: '15px', maxWidth: '647px' }}>
        It all begins with a vision — whether it's turning a fresh idea into a complete product, revamping an existing solution to align with evolving needs, or building a digital presence to grow brand visibility — each design is shaped by simplicity, built on quality, and delivered with care.
      </p>

      {/* "Collaboration Stories" — gradient DM Sans Bold 48px */}
      <h3 className="font-dm font-bold text-gradient mb-6" style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}>
        Collaboration Stories
      </h3>

      {/* Client logos row — 4 logos, matching Figma y:3808–3829 */}
      <div className="figma-card flex flex-wrap items-center justify-around gap-4 p-6 mb-6">
        {clientLogos.map(cl => (
          <div key={cl.name} className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 transition-all">
            <Image src={cl.image} alt={cl.name} width={160} height={70} className="h-10 w-auto object-contain" />
          </div>
        ))}
      </div>

      {/* Testimonial card — matches Figma Subtract bordered rect (278,3848 w:1083 h:390) */}
      <div className="figma-card p-0">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-0">
          {/* LEFT: avatar + name */}
          <div className="flex flex-col items-center justify-center gap-3 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[var(--ink-32)] md:w-64">
            {/* Avatar circle — matches Figma Ellipse 59 (322×308px) */}
            <div className="w-40 h-40 rounded-full overflow-hidden border-[2px] border-[var(--card-border)] bg-[var(--bg)]">
              <Image
                src={t.avatar}
                alt={t.author}
                width={320}
                height={308}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="text-center mt-1">
              <p className="font-dm font-black text-[var(--ink)] text-[13px] tracking-[0.12em] uppercase">{t.author}</p>
              <p className="font-dm text-[var(--accent)] text-[11px] tracking-wider mt-0.5">{t.role}, {t.company}</p>
            </div>
          </div>

          {/* RIGHT: quote */}
          <div className="flex flex-col justify-between p-6 md:p-8">
            {/* Opening quote marks — matches Figma Group 120 */}
            <div>
              <svg width="34" height="26" viewBox="0 0 34 26" fill="none" className="mb-3 opacity-30">
                <path d="M0 26V16.4C0 7.2 5.6 1.6 16.8 0l1.4 2.8C12 4 9.2 7.6 8.8 13.6H14V26H0zm20 0V16.4C20 7.2 25.6 1.6 36.8 0l1.4 2.8C32 4 29.2 7.6 28.8 13.6H34V26H20z" fill="var(--accent)"/>
              </svg>

              {/* Quote — Merriweather Light Italic matching Figma 91:378 */}
              <p
                className="font-merri italic text-[var(--ink)] leading-relaxed mb-6"
                style={{ fontSize: 'clamp(13px, 1.4vw, 16px)', fontWeight: 300 }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* CTA + pagination */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[var(--ink-32)]">
              <Link href="/contact" className="btn-solid text-[11px]">
                START A CONVERSATION
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>

              {/* Pagination ← 01 02 03 04 05 06 → matching Figma nodes 66:3848–3855 */}
              <div className="flex items-center gap-3">
                <button onClick={prev} aria-label="Previous testimonial"
                  className="text-[var(--body-muted)] hover:text-[var(--accent)] transition-colors">
                  <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                    <line x1="28" y1="5" x2="0" y2="5" stroke="currentColor" strokeWidth="1.5"/>
                    <polyline points="7,1 1,5 7,9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>

                {Array.from({ length: TOTAL_PAGINATES }, (_, i) => (
                  <button key={i} onClick={() => { if (i < testimonials.length) setTidx(i); }}
                    className={`font-dm font-bold text-[12px] transition-all ${
                      i === tidx ? 'text-gradient' : 'text-[var(--body-muted)] hover:text-[var(--ink)]'
                    } ${i >= testimonials.length ? 'opacity-30 cursor-default' : ''}`}>
                    {String(i + 1).padStart(2, '0')}
                  </button>
                ))}

                <button onClick={next} aria-label="Next testimonial"
                  className="text-[var(--body-muted)] hover:text-[var(--accent)] transition-colors">
                  <svg width="28" height="10" viewBox="0 0 28 10" fill="none">
                    <line x1="0" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="1.5"/>
                    <polyline points="21,1 27,5 21,9" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
