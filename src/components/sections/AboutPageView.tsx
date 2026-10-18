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
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* ── TOP BAR & HERO PROFILE ── */}
      <section className="space-y-6">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--ink-32)]">
          <Link
            href="/"
            className="flex items-center gap-2 font-dm font-bold text-sm tracking-wider uppercase text-[var(--ink)] hover:text-[var(--accent)] transition-colors"
          >
            ← Back to Home
          </Link>
          <span className="font-almarai font-bold text-2xl text-[var(--ink)]">
            About
          </span>
        </div>

        {/* Profile Card */}
        <div className="figma-card rounded-2xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="font-almarai font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[var(--ink)] tracking-tight">
                SEJUTI
              </h1>

              {/* Pronunciation & Bengali */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-almarai font-bold text-2xl text-gradient">
                  সেঁজুতি
                </span>
                <span className="font-merri italic text-base text-[var(--body-muted)]">
                  /shay.joo.tee/
                </span>
              </div>

              {/* Meaning & Bio */}
              <p className="font-merri italic text-sm text-[var(--body-muted)]">
                ([Sē̃juti] — evening light or lamp, light of the sunset, twilight)
              </p>
              <p className="font-almarai text-base leading-relaxed text-[var(--body-text)]">
                A name that means light in the dark — reflecting the values carried into work and beyond.
              </p>
              <p className="font-almarai font-semibold text-xs uppercase tracking-wider text-[var(--accent)]">
                Also known as ERA.
              </p>

              {/* Resume Button */}
              <div className="pt-2">
                <a
                  href="/assets/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-solid inline-flex items-center gap-2"
                >
                  <span>↓</span>
                  <span>VIEW RESUME</span>
                </a>
              </div>
            </div>

            {/* Portrait Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-64 sm:w-72 aspect-square">
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
      </section>

      {/* ── STICKY SUB-NAV TABS ── */}
      <nav
        aria-label="About sub navigation"
        className="sticky top-0 z-30 w-full py-3 bg-[var(--bg)]/90 backdrop-blur border-y border-[var(--ink-32)]"
      >
        <div className="flex items-center justify-around flex-wrap gap-4 text-xs font-dm font-bold uppercase tracking-wider text-[var(--ink)]">
          <button
            type="button"
            onClick={() => scrollTo('profile')}
            className="hover:text-[var(--accent)] transition-colors"
          >
            01. PROFILE
          </button>
          <button
            type="button"
            onClick={() => scrollTo('journey')}
            className="hover:text-[var(--accent)] transition-colors"
          >
            02. JOURNEY
          </button>
          <button
            type="button"
            onClick={() => scrollTo('expertise')}
            className="hover:text-[var(--accent)] transition-colors"
          >
            03. EXPERTISE
          </button>
          <button
            type="button"
            onClick={() => scrollTo('approach')}
            className="hover:text-[var(--accent)] transition-colors"
          >
            04. DESIGN APPROACH
          </button>
        </div>
      </nav>

      {/* ── SECTION 01: PROFILE ── */}
      <section id="profile" className="space-y-6 scroll-mt-20">
        <div className="flex items-baseline gap-4 select-none">
          <span className="font-concert text-5xl sm:text-6xl text-[var(--accent)]">
            01
          </span>
          <span className="font-almarai font-bold text-2xl sm:text-3xl text-gradient">
            PROFILE
          </span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h2 className="font-dm font-bold text-2xl text-[var(--ink)]">
            A Quiet Visionary
          </h2>
          <p className="font-almarai text-base leading-relaxed text-[var(--body-text)]">
            Being an UX &amp; UI designer feels like a natural extension of who I am — a space where I get to merge my tech roots with creative instincts. I see UX everywhere, finding inspiration in everyday moments and the subtle ways we interact with the world. A Bangladeshi native shaped by over a decade in Bangkok, I am currently freelancing in Dhaka, while exploring other creative outlets outside work.
          </p>
        </div>

        {/* Behind The Designs Traits */}
        <div className="space-y-4">
          <h3 className="font-dm font-bold text-xl text-gradient">
            Behind The Designs
          </h3>
          <div className="figma-card rounded-xl p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { img: '/assets/images/about-infj.png', title: 'INFJ-A +\nNEURODIVERGENT' },
              { img: '/assets/images/about-storyteller.png', title: 'VISUAL\nSTORYTELLER' },
              { img: '/assets/images/about-nature.png', title: 'NATURE\nDREAMER' },
              { img: '/assets/images/about-poetic.png', title: 'POETIC\nTHINKER' },
              { img: '/assets/images/about-curator.png', title: 'AESTHETIC\nCURATOR' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center gap-3">
                <div className="relative w-20 h-20">
                  <Image
                    src={item.img}
                    alt={item.title.replace('\n', ' ')}
                    width={80}
                    height={80}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-dm font-bold text-xs uppercase tracking-wider text-[var(--ink)] whitespace-pre-line">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 02: JOURNEY ── */}
      <section id="journey" className="space-y-6 scroll-mt-20">
        <div className="flex items-baseline gap-4 select-none">
          <span className="font-concert text-5xl sm:text-6xl text-[var(--accent)]">
            02
          </span>
          <span className="font-almarai font-bold text-2xl sm:text-3xl text-gradient">
            JOURNEY
          </span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h2 className="font-dm font-bold text-2xl text-[var(--ink)]">
            Education &amp; Experience
          </h2>
          <p className="font-almarai text-base leading-relaxed text-[var(--body-text)]">
            With a background in IT, I stumbled upon UX/UI design while watching how digital products take shape. What intrigued me most was how every experience is first imagined, planned, and designed long before it’s built. That curiosity soon became my calling — and since then, it’s been a path of continuous learning and growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-4 max-w-3xl">
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
            <div key={item.year} className="figma-card rounded-xl p-6 space-y-2">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-dm font-bold text-xs uppercase tracking-wider text-[var(--accent)]">
                  {item.year}
                </span>
                <span className="font-dm text-xs text-[var(--body-muted)]">
                  {item.org}
                </span>
              </div>
              <h3 className="font-dm font-bold text-lg text-[var(--ink)]">
                {item.role}
              </h3>
              <p className="font-almarai text-sm text-[var(--body-text)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="space-y-4">
          <h3 className="font-dm font-bold text-xl text-gradient">
            Certifications
          </h3>
          <div className="figma-card rounded-xl p-6 flex items-center justify-center">
            <div className="relative w-full max-w-2xl h-64 sm:h-80">
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
      <section id="expertise" className="space-y-6 scroll-mt-20">
        <div className="flex items-baseline gap-4 select-none">
          <span className="font-concert text-5xl sm:text-6xl text-[var(--accent)]">
            03
          </span>
          <span className="font-almarai font-bold text-2xl sm:text-3xl text-gradient">
            EXPERTISE
          </span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h2 className="font-dm font-bold text-2xl text-[var(--ink)]">
            Fueled by Passion, Defined by Skill
          </h2>
          <p className="font-almarai text-base leading-relaxed text-[var(--body-text)]">
            My craft sits at the intersection of innate traits and acquired capabilities. As a neurodivergent INFJ, I bring a balance of paradoxical strengths that gives me a unique edge in UX/UI design, allowing me to connect emotion with logic and structure with creativity.
          </p>
        </div>

        {/* Brain Graphic */}
        <div className="figma-card rounded-xl p-6 flex items-center justify-center">
          <div className="relative w-full max-w-3xl h-72 sm:h-96">
            <Image
              src="/assets/images/about-brain.png"
              alt="Analytical and Creative Brain UX Infographic"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Tools */}
        <div className="space-y-4">
          <h3 className="font-dm font-bold text-xl text-gradient">
            Tools
          </h3>
          <div className="figma-card rounded-xl p-6 flex items-center justify-around flex-wrap gap-4">
            {['FIGMA', 'SKETCH', 'INVISION', 'ADOBE XD', 'PHOTOSHOP', 'ILLUSTRATOR'].map((tool) => (
              <span
                key={tool}
                className="font-dm font-bold text-xs sm:text-sm uppercase tracking-wider text-[var(--ink)] px-4 py-2 border border-[var(--ink-32)] rounded"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 04: DESIGN APPROACH ── */}
      <section id="approach" className="space-y-6 scroll-mt-20">
        <div className="flex items-baseline gap-4 select-none">
          <span className="font-concert text-5xl sm:text-6xl text-[var(--accent)]">
            04
          </span>
          <span className="font-almarai font-bold text-2xl sm:text-3xl text-gradient">
            DESIGN APPROACH
          </span>
        </div>

        <div className="space-y-3 max-w-3xl">
          <h2 className="font-dm font-bold text-2xl text-[var(--ink)]">
            The pursuit of intentional design
          </h2>
          <p className="font-almarai text-base leading-relaxed text-[var(--body-text)]">
            I approach design as a way to solve problems elegantly. Every project is driven by purpose and the goal of leaving things better than I found them. It begins with understanding the vision, which then guides the design phase, where ideas take form through structure, interaction, and visual detail. The work is then refined through iteration and feedback, and finally brought to completion with a cohesive, well-executed design prepared for development.
          </p>
        </div>

        {/* Principles */}
        <div className="space-y-4">
          <h3 className="font-dm font-bold text-xl text-gradient">
            Core Principles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="figma-card rounded-xl p-6 text-center space-y-4">
              <div className="relative w-24 h-24 mx-auto">
                <Image
                  src="/assets/images/about-meraki.png"
                  alt="Meraki Principle"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="font-dm font-bold text-lg uppercase tracking-wider text-[var(--ink)]">
                MERAKI
              </h4>
              <p className="font-almarai text-sm text-[var(--body-text)] leading-relaxed">
                Designing with passion, devotion, and meticulous care, ensuring the work is a true labor of love.
              </p>
            </div>

            <div className="figma-card rounded-xl p-6 text-center space-y-4">
              <div className="relative w-24 h-24 mx-auto">
                <Image
                  src="/assets/images/about-significant.png"
                  alt="Simple yet significant Principle"
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="font-dm font-bold text-lg uppercase tracking-wider text-[var(--ink)]">
                SIMPLE YET SIGNIFICANT
              </h4>
              <p className="font-almarai text-sm text-[var(--body-text)] leading-relaxed">
                Striving for solutions that are radically clear and effortless, yet possess maximum impact, utility, and lasting value.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
