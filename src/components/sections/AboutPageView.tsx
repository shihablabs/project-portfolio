'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPageView() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
      {/* ── TOP HERO PROFILE BOX ── */}
      <section className="relative w-full mb-12">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--ink-32)]">
          <Link
            href="/"
            className="flex items-center gap-2 font-dm font-bold text-sm tracking-wider uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            ← Back to Home
          </Link>
          <span className="font-almarai font-bold text-2xl lg:text-3xl text-[var(--ink)]">
            About
          </span>
        </div>

        {/* Hero Card Container */}
        <div
          className="relative w-full p-6 sm:p-10 lg:p-12 overflow-hidden"
          style={{
            background:
              'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
            border: '1.5px solid transparent',
          }}
        >
          {/* Subtle warm glow behind photo */}
          <div
            className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#DE4313] opacity-20 blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h1 className="font-almarai font-extrabold text-[44px] sm:text-[56px] lg:text-[68px] leading-tight text-[var(--ink)] tracking-tight mb-2">
                SEJUTI
              </h1>

              {/* Bengali name + pronunciation */}
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <span className="font-almarai font-bold text-[28px] sm:text-[34px] text-gradient">
                  সেঁজুতি
                </span>
                <span className="font-merri italic text-[18px] sm:text-[20px] text-[var(--body-muted)]">
                  /shay.joo.tee/
                </span>
                <button
                  type="button"
                  className="p-1 rounded-full text-[var(--accent)] hover:opacity-80 transition-opacity"
                  title="Pronunciation audio"
                  aria-label="Listen to pronunciation"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                  </svg>
                </button>
              </div>

              {/* Name Etymology */}
              <p className="font-merri italic text-[15px] sm:text-[16px] text-[var(--body-muted)] leading-relaxed mb-2 max-w-[580px]">
                ([Sē̃juti] — evening light or lamp, light of the sunset, twilight)
              </p>
              <p className="font-almarai text-[16px] sm:text-[17px] text-[var(--body-text)] leading-relaxed mb-6 max-w-[580px]">
                A name that means light in the dark — reflecting the values carried into work and beyond.
              </p>

              <p className="font-almarai font-semibold text-[14px] uppercase tracking-wider text-[var(--accent)] mb-8">
                Also known as ERA.
              </p>

              {/* View Resume Button */}
              <div>
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid inline-flex items-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(222,67,19,0.4)] transition-all"
                >
                  <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    ↓
                  </span>
                  VIEW RESUME
                </a>
              </div>
            </div>

            {/* Right Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-80 lg:w-96 aspect-square flex items-center justify-center">
                <div className="absolute inset-0 rounded-full border border-[var(--accent)]/30 scale-95" />
                <div className="relative w-full h-full">
                  <Image
                    src="/assets/images/about-portrait.png"
                    alt="Sejuti Mehjabin portrait"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STICKY SUB-NAV TABS ── */}
      <nav
        aria-label="About sub navigation"
        className="sticky top-0 z-30 w-full py-4 mb-16 bg-[var(--bg)]/95 backdrop-blur-md border-y border-[var(--ink-32)]"
      >
        <div className="flex items-center justify-center sm:justify-around flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm font-dm font-bold uppercase tracking-widest text-[var(--ink)]">
          <button
            type="button"
            onClick={() => scrollTo('profile')}
            className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-[var(--accent)]">◆</span> 01. PROFILE <span className="text-[var(--accent)]">◆</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTo('journey')}
            className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-[var(--accent)]">◆</span> 02. JOURNEY <span className="text-[var(--accent)]">◆</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTo('expertise')}
            className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-[var(--accent)]">◆</span> 03. EXPERTISE <span className="text-[var(--accent)]">◆</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTo('approach')}
            className="flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
          >
            <span className="text-[var(--accent)]">◆</span> 04. DESIGN APPROACH <span className="text-[var(--accent)]">◆</span>
          </button>
        </div>
      </nav>

      {/* ── SECTION 01: PROFILE ── */}
      <section id="profile" className="relative w-full mb-24 scroll-mt-24">
        <div className="flex items-baseline gap-4 mb-4 select-none">
          <span className="font-concert text-[70px] sm:text-[90px] text-transparent leading-none" style={{ WebkitTextStroke: '1.5px var(--ink-32)' }}>
            01
          </span>
          <span className="font-almarai font-bold text-[32px] sm:text-[40px] text-gradient">
            PROFILE
          </span>
        </div>

        <div className="max-w-[850px] mb-12">
          <h2 className="font-dm font-bold text-[24px] sm:text-[28px] text-[var(--ink)] mb-4">
            A Quiet Visionary
          </h2>
          <p className="font-almarai text-[17px] sm:text-[18px] leading-[1.7] text-[var(--body-muted)]">
            Being an UX &amp; UI designer feels like a natural extension of who I am — a space where I get to merge my tech roots with creative instincts. I see UX everywhere, finding inspiration in everyday moments and the subtle ways we interact with the world. A Bangladeshi native shaped by over a decade in Bangkok, I am currently freelancing in Dhaka, while exploring other creative outlets outside work.
          </p>
        </div>

        {/* Behind the Designs */}
        <div>
          <h3 className="font-dm font-bold text-[22px] sm:text-[26px] text-gradient mb-6">
            Behind The Designs
          </h3>
          <div
            className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
            style={{
              background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
              border: '1.5px solid transparent',
            }}
          >
            {[
              { img: '/assets/images/about-infj.png', title: 'INFJ-A +\nNEURODIVERGENT' },
              { img: '/assets/images/about-storyteller.png', title: 'VISUAL\nSTORYTELLER' },
              { img: '/assets/images/about-nature.png', title: 'NATURE\nDREAMER' },
              { img: '/assets/images/about-poetic.png', title: 'POETIC\nTHINKER' },
              { img: '/assets/images/about-curator.png', title: 'AESTHETIC\nCURATOR' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center group">
                <div className="relative w-28 h-28 mb-3 flex items-center justify-center">
                  <Image
                    src={item.img}
                    alt={item.title.replace('\n', ' ')}
                    width={112}
                    height={112}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="font-dm font-bold text-[11px] sm:text-[12px] uppercase tracking-wider text-[var(--ink)] leading-tight whitespace-pre-line">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 02: JOURNEY ── */}
      <section id="journey" className="relative w-full mb-24 scroll-mt-24">
        <div className="flex items-baseline gap-4 mb-4 select-none">
          <span className="font-concert text-[70px] sm:text-[90px] text-transparent leading-none" style={{ WebkitTextStroke: '1.5px var(--ink-32)' }}>
            02
          </span>
          <span className="font-almarai font-bold text-[32px] sm:text-[40px] text-gradient">
            JOURNEY
          </span>
        </div>

        <div className="max-w-[850px] mb-12">
          <h2 className="font-dm font-bold text-[24px] sm:text-[28px] text-[var(--ink)] mb-4">
            Education &amp; Experience
          </h2>
          <p className="font-almarai text-[17px] sm:text-[18px] leading-[1.7] text-[var(--body-muted)]">
            With a background in IT, I stumbled upon UX/UI design while watching how digital products take shape. What intrigued me most was how every experience is first imagined, planned, and designed long before it’s built. That curiosity soon became my calling — and since then, it’s been a path of continuous learning and growth.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-6 mb-16 max-w-[900px]">
          {[
            {
              year: '2011 - 2015',
              role: 'BSc - IT GRADUATE',
              org: 'Assumption University of Thailand',
              desc: 'During my senior thesis, where our team of three built an online beauty store, I naturally gravitated toward handling the structure and visuals rather than coding. Although I had briefly encountered the concepts in an HCI elective, I didn’t yet realize UX/UI design was its own field — I only knew this was the part of development I loved most.',
            },
            {
              year: 'May 2016 - Mar 2017',
              role: 'UX/UI DESIGN DISCOVERY',
              org: 'My Network & Solutions Co., Ltd (MyNet)',
              desc: 'My first full-time role in customer service and QA at this tech startup building a call and messaging app gave me a front-row view of how multiple teams collaborated to bring a product to life. Here, I discovered the UX/UI team — a turning point that sparked my decision to pivot to design.',
            },
            {
              year: 'Apr 2017 - Oct 2017',
              role: 'UX/UI DESIGN INTERN',
              org: 'Web Courses Bangkok',
              desc: 'An internship where I worked alongside senior designers, gaining real-world experience in every stage of the UX process — from research to final design. Further expanded skills through courses in graphic design and web design.',
            },
            {
              year: 'Feb 2018 - Oct 2022',
              role: 'UX/UI DESIGNER',
              org: 'Arbree Limited',
              desc: 'Serving as a one-person design team, I successfully led and delivered over 50 projects — from websites and apps to full-scale systems — while wearing many hats and single-handedly managing all company-wide design initiatives, from product to branding and marketing.',
            },
            {
              year: '2023 - Present',
              role: 'FREELANCE UX/UI DESIGNER',
              org: 'Self-Employed',
              desc: 'Working independently with clients across diverse creative projects, overseeing everything from design to administrative tasks.',
            },
          ].map((item) => (
            <div
              key={item.year}
              className="p-6 sm:p-8 transition-transform duration-200 hover:translate-x-1"
              style={{
                background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
                border: '1.5px solid transparent',
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <span className="font-dm font-bold text-xs uppercase tracking-widest text-[var(--accent)] px-3 py-1 bg-[var(--accent)]/10 border border-[var(--accent)]/30">
                  {item.year}
                </span>
                <span className="font-dm font-semibold text-xs text-[var(--body-muted)]">
                  {item.org}
                </span>
              </div>
              <h3 className="font-dm font-bold text-lg sm:text-xl text-[var(--ink)] mb-3">
                {item.role}
              </h3>
              <p className="font-almarai text-[15px] sm:text-[16px] text-[var(--body-muted)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications Card */}
        <div>
          <h3 className="font-dm font-bold text-[22px] sm:text-[26px] text-gradient mb-6">
            Certifications
          </h3>
          <div
            className="p-6 sm:p-10 flex items-center justify-center overflow-hidden"
            style={{
              background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
              border: '1.5px solid transparent',
            }}
          >
            <div className="relative w-full max-w-[800px] h-[300px] sm:h-[400px]">
              <Image
                src="/assets/images/about-certifications.png"
                alt="Sejuti Certifications"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 03: EXPERTISE ── */}
      <section id="expertise" className="relative w-full mb-24 scroll-mt-24">
        <div className="flex items-baseline gap-4 mb-4 select-none">
          <span className="font-concert text-[70px] sm:text-[90px] text-transparent leading-none" style={{ WebkitTextStroke: '1.5px var(--ink-32)' }}>
            03
          </span>
          <span className="font-almarai font-bold text-[32px] sm:text-[40px] text-gradient">
            EXPERTISE
          </span>
        </div>

        <div className="max-w-[850px] mb-12">
          <h2 className="font-dm font-bold text-[24px] sm:text-[28px] text-[var(--ink)] mb-4">
            Fueled by Passion, Defined by Skill
          </h2>
          <p className="font-almarai text-[17px] sm:text-[18px] leading-[1.7] text-[var(--body-muted)]">
            My craft sits at the intersection of innate traits and acquired capabilities. As a neurodivergent INFJ, I bring a balance of paradoxical strengths that gives me a unique edge in UX/UI design, allowing me to connect emotion with logic and structure with creativity.
          </p>
        </div>

        {/* Brain Infographic Graphic */}
        <div
          className="p-6 sm:p-12 mb-16 flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
            border: '1.5px solid transparent',
          }}
        >
          <div className="relative w-full max-w-[950px] h-[350px] sm:h-[500px]">
            <Image
              src="/assets/images/about-brain.png"
              alt="Analytical and Creative Brain UX Infographic"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="font-dm font-bold text-[22px] sm:text-[26px] text-gradient mb-6">
            Tools
          </h3>
          <div
            className="p-6 sm:p-8 flex items-center justify-around flex-wrap gap-6"
            style={{
              background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
              border: '1.5px solid transparent',
            }}
          >
            {['FIGMA', 'SKETCH', 'INVISION', 'ADOBE XD', 'PHOTOSHOP', 'ILLUSTRATOR'].map((tool) => (
              <span
                key={tool}
                className="font-dm font-bold text-sm sm:text-base uppercase tracking-wider text-[var(--ink)] px-4 py-2 border border-[var(--ink-32)]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: DESIGN APPROACH ── */}
      <section id="approach" className="relative w-full mb-16 scroll-mt-24">
        <div className="flex items-baseline gap-4 mb-4 select-none">
          <span className="font-concert text-[70px] sm:text-[90px] text-transparent leading-none" style={{ WebkitTextStroke: '1.5px var(--ink-32)' }}>
            04
          </span>
          <span className="font-almarai font-bold text-[32px] sm:text-[40px] text-gradient">
            DESIGN APPROACH
          </span>
        </div>

        <div className="max-w-[850px] mb-12">
          <h2 className="font-dm font-bold text-[24px] sm:text-[28px] text-[var(--ink)] mb-4">
            The pursuit of intentional design
          </h2>
          <p className="font-almarai text-[17px] sm:text-[18px] leading-[1.7] text-[var(--body-muted)]">
            I approach design as a way to solve problems elegantly. Every project is driven by purpose and the goal of leaving things better than I found them. It begins with understanding the vision, which then guides the design phase, where ideas take form through structure, interaction, and visual detail. The work is then refined through iteration and feedback, and finally brought to completion with a cohesive, well-executed design prepared for development.
          </p>
        </div>

        {/* Core Principles Cards */}
        <div>
          <h3 className="font-dm font-bold text-[22px] sm:text-[26px] text-gradient mb-6">
            Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Meraki */}
            <div
              className="p-8 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
                border: '1.5px solid transparent',
              }}
            >
              <div className="relative w-28 h-28 mb-6 mx-auto">
                <Image
                  src="/assets/images/about-meraki.png"
                  alt="Meraki Principle"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="font-dm font-bold text-xl uppercase tracking-wider text-[var(--ink)] text-center mb-3">
                MERAKI
              </h4>
              <p className="font-almarai text-[15px] sm:text-[16px] text-[var(--body-muted)] text-center leading-relaxed">
                Designing with passion, devotion, and meticulous care, ensuring the work is a true labor of love.
              </p>
            </div>

            {/* Simple yet significant */}
            <div
              className="p-8 flex flex-col justify-between"
              style={{
                background: 'linear-gradient(var(--bg), var(--bg)) padding-box, linear-gradient(135deg, #FEC163 0%, #DE4313 100%) border-box',
                border: '1.5px solid transparent',
              }}
            >
              <div className="relative w-28 h-28 mb-6 mx-auto">
                <Image
                  src="/assets/images/about-significant.png"
                  alt="Simple yet significant Principle"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="font-dm font-bold text-xl uppercase tracking-wider text-[var(--ink)] text-center mb-3">
                SIMPLE YET SIGNIFICANT
              </h4>
              <p className="font-almarai text-[15px] sm:text-[16px] text-[var(--body-muted)] text-center leading-relaxed">
                Striving for solutions that are radically clear and effortless, yet possess maximum impact, utility, and lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
