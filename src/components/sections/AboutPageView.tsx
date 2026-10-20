"use client";

import SectionBadge from "@/components/ui/SectionBadge";
import Image from "next/image";
import { useEffect, useState } from "react";

const TABS = [
  { id: "profile", label: "01. PROFILE" },
  { id: "journey", label: "02. JOURNEY" },
  { id: "expertise", label: "03. EXPERTISE" },
  { id: "approach", label: "04. DESIGN APPROACH" },
] as const;

type TabId = (typeof TABS)[number]["id"];

/**
 * Signature Notched Sparkle Action Button
 */
function ActionSparkleButton({ label }: { label: string }) {
  return (
    <div className="group inline-flex items-center cursor-pointer select-none">
      <div className="relative w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <svg width="52" height="58" viewBox="0 0 52 58" fill="none">
          <path
            d="M 46 44.5 A 25 25 0 1 1 46 13.5"
            stroke="url(#aboutSparkleGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <circle cx="26" cy="29" r="17" fill="url(#aboutSparkleGrad)" />
          <path
            d="M26 20L27.6 27.4L35 29L27.6 30.6L26 38L24.4 30.6L17 29L24.4 27.4L26 20Z"
            fill="#FFF7E7"
          />
        </svg>
      </div>

      <span
        className="font-almarai font-extrabold text-xs sm:text-sm tracking-[0.2em] text-transparent bg-clip-text transition-all uppercase whitespace-nowrap"
        style={{
          backgroundImage:
            "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function AboutPageView() {
  const [activeTab, setActiveTab] = useState<TabId>("profile");

  // Scroll listener to update active tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 220;
      for (const tab of [...TABS].reverse()) {
        const el = document.getElementById(tab.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveTab(tab.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveTab(id as TabId);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const playAudio = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance("Sejuti");
      utterance.lang = "bn-BD";
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24">
      {/* ── Global SVG Gradient Defs ── */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="aboutSparkleGrad"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientTransform="rotate(129.89 0.5 0.5)"
          >
            <stop offset="-29.32%" stopColor="#FEC163" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>
        </defs>
      </svg>

      {/* ── 01. ABOUT HERO CARD (Pixel-perfect matching Blogs Hero) ── */}
      <div className="relative w-full bg-transparent min-h-[480px] sm:min-h-[520px] lg:min-h-[540px] flex items-center pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 pl-6 sm:pl-10 lg:pl-14 pr-6 sm:pr-10 lg:pr-14 mb-10">
        {/* Top horizontal border line (starts at 0,0 and stops before About) */}
        <div
          className="absolute top-0 left-0 right-[150px] sm:right-[180px] h-[1.5px] pointer-events-none"
          style={{
            background:
              "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
          }}
        />

        {/* Left vertical border line (starts at 0,0 to bottom) */}
        <div
          className="absolute top-0 left-0 bottom-0 w-[1.5px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
          }}
        />

        {/* Bottom horizontal border line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
          style={{
            background:
              "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
          }}
        />

        {/* Right vertical border line (starts below About to bottom) */}
        <div
          className="absolute top-[28px] sm:top-[34px] right-0 bottom-0 w-[1.5px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
          }}
        />

        {/* Top-Right About heading (font-weight: 500, centered on top line) */}
        <div className="absolute top-0 right-4 sm:right-8 -translate-y-1/2 flex items-center select-none z-20">
          <span className="font-dm font-medium text-3xl sm:text-4xl lg:text-[40px] text-[var(--ink)] tracking-tight leading-none">
            About
          </span>
        </div>

        {/* ── Inner Artwork & Glow Frame with overflow-hidden ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {/* Rich Ellipse Glow underneath Sejuti portrait */}
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(222, 67, 19, 0.65) 0%, rgba(222, 67, 19, 0.28) 52%, transparent 75%)",
              filter: "blur(75px)",
              width: "480px",
              height: "440px",
              right: "20px",
              bottom: "0px",
            }}
          />

          {/* Soft ambient glow on left behind text */}
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              background: "rgba(222, 67, 19, 0.12)",
              filter: "blur(90px)",
              width: "340px",
              height: "260px",
              left: "20px",
              top: "60px",
            }}
          />

          {/* Sejuti portrait pinned to right bottom matching Figma */}
          <div className="absolute right-4 sm:right-14 lg:right-16 bottom-0 w-[220px] sm:w-[220px] md:w-[270px] lg:w-[310px] xl:w-[330px] flex items-end justify-end">
            <Image
              src="/assets/about/sejuti.png"
              alt="Sejuti Mehjabin"
              width={330}
              height={400}
              className="w-full h-auto object-contain object-bottom drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Left Hero Content Layer */}
        <div className="relative z-10 w-full max-w-[600px] lg:max-w-[650px] flex flex-col justify-center space-y-4 sm:space-y-5">
          <h1 className="font-almarai sm:font-dm font-extrabold uppercase text-4xl sm:text-5xl lg:text-[56px] tracking-tight leading-none text-[rgba(255,247,231,1)]">
            SEJUTI
          </h1>

          {/* Bengali Script, Pronunciation & Speaker */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <span
              className="font-bold text-2xl sm:text-3xl text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              সেঁজুতি
            </span>

            <span
              className="font-dm text-base sm:text-lg text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              /shay.joo.tee/
            </span>

            {/* Pronunciation Sound Button */}
            <button
              onClick={playAudio}
              type="button"
              aria-label="Listen to pronunciation of Sejuti"
              className="text-[#DE4313] hover:text-[#FEC163] transition-transform hover:scale-110 cursor-pointer ml-1"
              title="Pronounce Sejuti"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M11 5L6 9H2V15H6L11 19V5Z"
                  fill="url(#aboutSparkleGrad)"
                  stroke="url(#aboutSparkleGrad)"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.54 8.46C16.48 9.4 17 10.67 17 12C17 13.33 16.48 14.6 15.54 15.54"
                  stroke="url(#aboutSparkleGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M19.07 4.93C20.94 6.8 22 9.35 22 12C22 14.65 20.94 17.2 19.07 19.07"
                  stroke="url(#aboutSparkleGrad)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          {/* Meaning & Essence */}
          <div className="space-y-1 font-dm text-xs sm:text-[13.5px] text-[rgba(255,247,231,0.78)] leading-[1.65] max-w-lg">
            <p>
              (Bengali) - evening light or lamp, light of the sunset, twilight.
            </p>
            <p>
              A name that means light in the dark — reflecting the values
              carried into work and beyond.
            </p>
            <p
              className="font-medium pt-2 text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              Also known as ERA.
            </p>
          </div>

          {/* View Resume Button */}
          <div className="pt-4 sm:pt-6">
            <a
              href="/assets/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <ActionSparkleButton label="VIEW RESUME" />
            </a>
          </div>
        </div>
      </div>

      {/* ── 02. STICKY SUB-NAVIGATION BAR (Top sticky on scroll) ── */}
      <div className="sticky top-0 z-40 bg-[var(--bg)]/95 backdrop-blur-md pt-3 pb-2 select-none mb-12">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 items-center text-center font-dm font-bold text-xs sm:text-sm tracking-wider uppercase">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`group flex items-center justify-center gap-2 sm:gap-2.5 py-3 transition-opacity cursor-pointer ${
                  isActive ? "opacity-100" : "opacity-75 hover:opacity-100"
                }`}
              >
                {/* Sparkle icon before */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8L5 0Z"
                    fill="url(#aboutSparkleGrad)"
                  />
                </svg>

                {/* Tab Label */}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  {tab.label}
                </span>

                {/* Sparkle icon after */}
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  className="flex-shrink-0"
                >
                  <path
                    d="M5 0L6.2 3.8L10 5L6.2 6.2L5 10L3.8 6.2L0 5L3.8 3.8L5 0Z"
                    fill="url(#aboutSparkleGrad)"
                  />
                </svg>
              </button>
            );
          })}
        </div>

        {/* Track Line and Active Indicator Slider */}
        <div className="relative w-full h-[1.5px] bg-[#DE4313]/30 mt-1">
          <div
            className="absolute top-0 h-[3px] -translate-y-[0.75px] transition-all duration-300"
            style={{
              width: "25%",
              left: `${TABS.findIndex((t) => t.id === activeTab) * 25}%`,
              background: "linear-gradient(90deg, #DE4313 0%, #FEC163 100%)",
            }}
          />
        </div>
      </div>

      {/* ── 03. SEQUENTIAL SECTIONS (One after another matching Figma) ── */}
      <div className="space-y-20 sm:space-y-28">
        {/* ══════════════ SECTION 01: PROFILE ══════════════ */}
        <section id="profile" className="scroll-mt-28 space-y-10">
          {/* Header Row: SectionBadge 01 PROFILE on Left, Intro on Right (Exact Home Page Match) */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
            <SectionBadge num="01" label="PROFILE" className="flex-shrink-0" />

            <div className="flex-1 max-w-3xl flex flex-col justify-center gap-4 lg:pt-2">
              <h2 className="font-almarai text-2xl sm:text-3xl lg:text-[32px] font-bold text-[var(--ink)] leading-snug">
                A Quiet Visionary
              </h2>
              <p className="font-almarai text-sm sm:text-base text-[rgba(255,247,231,0.85)] leading-relaxed">
                Being an UX &amp; UI designer feels like a natural extension of
                who I am — a space where I get to merge my tech roots with
                creative instincts. I see UX everywhere, finding inspiration in
                everyday moments and the subtle ways we interact with the world.
                A Bangladeshi native shaped by over a decade in Bangkok, I am
                currently freelancing in Dhaka, while exploring other creative
                outlets outside work.
              </p>
            </div>
          </div>

          {/* Centered Heading: Behind The Designs */}
          <div className="pt-4 text-center">
            <h3
              className="font-dm font-bold text-2xl sm:text-3xl text-transparent bg-clip-text inline-block"
              style={{
                backgroundImage:
                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
              }}
            >
              Behind The Designs
            </h3>
          </div>

          {/* Framed Container with 5 Traits */}
          <div
            className="p-6 sm:p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 bg-transparent"
            style={{
              border: "1.5px solid transparent",
              borderImageSource:
                "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
              borderImageSlice: 1,
            }}
          >
            {[
              {
                img: "/assets/about/infj.png",
                title: "INFJ-A +\nNEURODIVERGENT",
              },
              {
                img: "/assets/about/visual.png",
                title: "VISUAL\nSTORYTELLER",
              },
              {
                img: "/assets/about/nature.png",
                title: "NATURE\nDREAMER",
              },
              {
                img: "/assets/about/poetic.png",
                title: "POETIC\nTHINKER",
              },
              {
                img: "/assets/about/aesthetic.png",
                title: "AESTHETIC\nCURATOR",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center text-center gap-3 transition-transform hover:-translate-y-1 duration-300"
              >
                <div className="relative w-20 h-20 sm:w-24 sm:h-24">
                  <Image
                    src={item.img}
                    alt={item.title.replace("\n", " ")}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="font-dm font-bold text-xs uppercase tracking-wider text-[var(--ink)] whitespace-pre-line leading-tight">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════ SECTION 02: JOURNEY ══════════════ */}
        <section id="journey" className="scroll-mt-28 space-y-6">
          {/* Header Row: SectionBadge 02 JOURNEY on Left, Intro on Right (Exact Home Page Match) */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 relative">
            <SectionBadge num="02" label="JOURNEY" className="flex-shrink-0" />

            <div className="flex-1 max-w-3xl flex flex-col justify-center gap-3 lg:pt-1">
              <h2 className="font-almarai text-2xl sm:text-3xl lg:text-[32px] font-bold text-[var(--ink)] leading-snug">
                Education &amp; Experience
              </h2>
              <p className="font-almarai text-sm sm:text-base text-[rgba(255,247,231,0.85)] leading-relaxed">
                With a background in IT, I stumbled upon UX/UI design while
                watching how digital products take shape. What intrigued me most
                was how every experience is first imagined, planned, and
                designed long before it’s built. That curiosity soon became my
                calling — and since then, it’s been a path of continuous
                learning and growth.
              </p>
            </div>
          </div>

          {/* ── Timeline with journey.png in the Center (Standard Milestone Architecture, Exact Node Alignment) ── */}
          <div className="relative w-full max-w-5xl mx-auto py-2">
            {/* Desktop Layout (Exact 120px Step Alignment with journey.png Circles) */}
            <div className="hidden md:block relative w-full h-[640px]">
              {/* Centered S-Curve Timeline Image */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[144px] h-[636px] flex items-center justify-center pointer-events-none select-none z-0">
                <Image
                  src="/assets/about/journey.png"
                  alt="Career Journey Timeline (2015 - 2023)"
                  width={144}
                  height={636}
                  priority
                  className="w-[144px] h-[636px] object-contain block"
                />
              </div>

              {/* 5 Milestones Aligned to Circle Nodes (Each step is exactly 120px) */}
              {[
                {
                  year: "2015",
                  side: "right",
                  top: 20,
                  date: "2011 - 2015",
                  role: "BSc – IT GRADUATE",
                  org: "Assumption University of Thailand",
                  desc: "During my senior thesis, where our team of three built an online beauty store, I naturally gravitated toward handling the structure and visuals rather than coding. Although I had briefly encountered the concepts in an HCI elective, I didn’t yet realize UX/UI design was its own field— I only knew this was the part of development I loved most.",
                },
                {
                  year: "2016",
                  side: "left",
                  top: 140,
                  date: "May 2016 - Mar 2017",
                  role: "UX/UI DESIGN DISCOVERY",
                  org: "My Network & Solutions Co., Ltd (MyNet)",
                  desc: "My first full-time role in customer service and QA at this tech startup building a call and messaging app gave me a front-row view of how multiple teams collaborated to bring a product to life. Here, I discovered the UX/UI team — a turning point that sparked my decision to pivot to design.",
                },
                {
                  year: "2017",
                  side: "right",
                  top: 260,
                  date: "Apr 2017 - Oct 2017",
                  role: "UX/UI DESIGN INTERN",
                  org: "Web Courses Bangkok",
                  desc: "An internship where I worked alongside senior designers, gaining real-world experience in every stage of the UX process — from research to final design. Further expanded skills through courses in graphic design and web design.",
                },
                {
                  year: "2018",
                  side: "left",
                  top: 380,
                  date: "Feb 2018 - Oct 2022",
                  role: "UX/UI DESIGNER",
                  org: "Arbree Limited",
                  desc: "Serving as a one-person design team, I successfully led and delivered over 50 projects— from websites and apps to full-scale systems— while wearing many hats and single-handedly managing all company-wide design initiatives, from product to branding and marketing.",
                },
                {
                  year: "2023",
                  side: "right",
                  top: 500,
                  date: "2023 - Present",
                  role: "FREELANCE UX/UI DESIGNER",
                  org: "Self-Employed",
                  desc: "Working independently with clients across diverse creative projects, overseeing everything from design to administrative tasks.",
                },
              ].map((item) => {
                const isLeft = item.side === "left";
                return (
                  <div
                    key={item.year}
                    className={`absolute space-y-1 ${
                      isLeft
                        ? "right-[calc(50%+85px)] left-0 text-right flex flex-col items-end"
                        : "left-[calc(50%+85px)] right-0 text-left"
                    }`}
                    style={{ top: `${item.top}px` }}
                  >
                    <span
                      className="inline-block px-3 py-0.5 rounded-full text-[13px] font-normal border border-[#DE4313] text-[rgba(255,247,231,0.85)]"
                      style={{
                        boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                      }}
                    >
                      {item.date}
                    </span>
                    <h4 className="font-dm font-bold text-sm sm:text-[15px] text-[var(--ink)] uppercase tracking-wide">
                      {item.role}
                    </h4>
                    <p
                      className="font-dm font-normal text-xs sm:text-[13px] text-transparent bg-clip-text"
                      style={{
                        backgroundImage:
                          "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                      }}
                    >
                      {item.org}
                    </p>
                    <p className="font-dm font-normal text-xs sm:text-[13px] leading-[1.55] text-[rgba(255,247,231,0.78)] max-w-sm lg:max-w-[400px]">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile Stacked Layout (<768px, gap <= 20px) */}
            <div className="md:hidden flex flex-col gap-4">
              {[
                {
                  year: "2015",
                  date: "2011 - 2015",
                  role: "BSc – IT GRADUATE",
                  org: "Assumption University of Thailand",
                  desc: "During my senior thesis, where our team of three built an online beauty store, I naturally gravitated toward handling the structure and visuals rather than coding. Although I had briefly encountered the concepts in an HCI elective, I didn’t yet realize UX/UI design was its own field— I only knew this was the part of development I loved most.",
                },
                {
                  year: "2016",
                  date: "May 2016 - Mar 2017",
                  role: "UX/UI DESIGN DISCOVERY",
                  org: "My Network & Solutions Co., Ltd (MyNet)",
                  desc: "My first full-time role in customer service and QA at this tech startup building a call and messaging app gave me a front-row view of how multiple teams collaborated to bring a product to life. Here, I discovered the UX/UI team — a turning point that sparked my decision to pivot to design.",
                },
                {
                  year: "2017",
                  date: "Apr 2017 - Oct 2017",
                  role: "UX/UI DESIGN INTERN",
                  org: "Web Courses Bangkok",
                  desc: "An internship where I worked alongside senior designers, gaining real-world experience in every stage of the UX process — from research to final design. Further expanded skills through courses in graphic design and web design.",
                },
                {
                  year: "2018",
                  date: "Feb 2018 - Oct 2022",
                  role: "UX/UI DESIGNER",
                  org: "Arbree Limited",
                  desc: "Serving as a one-person design team, I successfully led and delivered over 50 projects— from websites and apps to full-scale systems— while wearing many hats and single-handedly managing all company-wide design initiatives, from product to branding and marketing.",
                },
                {
                  year: "2023",
                  date: "2023 - Present",
                  role: "FREELANCE UX/UI DESIGNER",
                  org: "Self-Employed",
                  desc: "Working independently with clients across diverse creative projects, overseeing everything from design to administrative tasks.",
                },
              ].map((item) => (
                <div
                  key={item.year}
                  className="p-4 sm:p-5 border border-[#DE4313]/60 rounded-lg space-y-1.5 bg-[#0A0F24]/40"
                >
                  <span
                    className="inline-block px-3 py-0.5 rounded-full text-xs font-normal border border-[#DE4313] text-[rgba(255,247,231,0.85)]"
                    style={{
                      boxShadow: "0px 0px 4px 0px rgba(228, 93, 35, 1)",
                    }}
                  >
                    {item.date}
                  </span>
                  <h4 className="font-dm font-bold text-sm sm:text-[15px] text-[var(--ink)] uppercase">
                    {item.role}
                  </h4>
                  <p
                    className="font-dm font-normal text-xs sm:text-[13px] text-transparent bg-clip-text"
                    style={{
                      backgroundImage:
                        "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    }}
                  >
                    {item.org}
                  </p>
                  <p className="font-dm font-normal text-xs sm:text-[13px] leading-relaxed text-[rgba(255,247,231,0.78)]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Certifications Sub-Section (Gap <= 30px) ── */}
          <div className="pt-6 space-y-6">
            <div className="text-center">
              <h3
                className="font-dm font-bold text-2xl sm:text-3xl text-transparent bg-clip-text inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                Certifications
              </h3>
            </div>

            {/* Framed Container with All 5 Certificates (1, 2.1, 2.2, 3, 4) */}
            <div
              className="p-4 sm:p-6 lg:p-8 bg-transparent max-w-6xl mx-auto"
              style={{
                border: "1.5px solid transparent",
                borderImageSource:
                  "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
                borderImageSlice: 1,
              }}
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-5 w-full">
                {/* 1. Assumption University Bachelor Degree */}
                <div className="w-full sm:flex-[1.68] flex items-center justify-center">
                  <div className="relative w-full overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                    <Image
                      src="/assets/about/certificate/1.png"
                      alt="Assumption University - Bachelor of Science Information Technology"
                      width={348}
                      height={288}
                      className="w-full h-auto object-contain block"
                      priority
                    />
                  </div>
                </div>

                {/* 2. Middle Column: Stack of 2 Certificates (2.1 & 2.2) */}
                <div className="w-full sm:flex-[1] flex flex-col gap-2 sm:gap-2.5 lg:gap-3 justify-between">
                  {/* 2.1 Green Certificate */}
                  <div className="relative w-full overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300">
                    <Image
                      src="/assets/about/certificate/2.1.png"
                      alt="Certificate of Web Design - Sejuti Mehjabin"
                      width={207}
                      height={144}
                      className="w-full h-auto object-contain block"
                    />
                  </div>

                  {/* 2.2 Orange Certificate */}
                  <div className="relative w-full overflow-hidden shadow-md transition-transform hover:scale-[1.02] duration-300">
                    <Image
                      src="/assets/about/certificate/2.2.png"
                      alt="Certificate of Graphic Design - Sejuti Mehjabin"
                      width={207}
                      height={144}
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                </div>

                {/* 3. Recommendation Letter 1 */}
                <div className="w-full sm:flex-[1.01] flex items-center justify-center">
                  <div className="relative w-full overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                    <Image
                      src="/assets/about/certificate/3.png"
                      alt="Letter of Recommendation - Web Courses Bangkok"
                      width={208}
                      height={288}
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                </div>

                {/* 4. Arbree Limited Recommendation Letter */}
                <div className="w-full sm:flex-[1] flex items-center justify-center">
                  <div className="relative w-full overflow-hidden shadow-lg transition-transform hover:scale-[1.02] duration-300">
                    <Image
                      src="/assets/about/certificate/4.png"
                      alt="Arbree Limited - Recommendation Letter"
                      width={207}
                      height={288}
                      className="w-full h-auto object-contain block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ SECTION 03: EXPERTISE ══════════════ */}
        <section id="expertise" className="scroll-mt-28 space-y-12">
          {/* Header Row: SectionBadge 03 EXPERTISE on Left, Intro on Right (Exact Home Page Match) */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
            <SectionBadge
              num="03"
              label="EXPERTISE"
              className="flex-shrink-0"
            />

            <div className="flex-1 max-w-3xl flex flex-col justify-center gap-4 lg:pt-2">
              <h2 className="font-almarai text-2xl sm:text-3xl lg:text-[32px] font-bold text-[var(--ink)] leading-snug">
                Fueled by Passion, Defined by Skill
              </h2>
              <p className="font-almarai text-sm sm:text-base text-[rgba(255,247,231,0.85)] leading-relaxed">
                My craft sits at the intersection of innate traits and acquired
                capabilities. As a neurodivergent INFJ, I bring a balance of
                paradoxical strengths that gives me a unique edge in UX/UI
                design, allowing me to connect emotion with logic and structure
                with creativity.
              </p>
            </div>
          </div>

          {/* Full Analytical & Creative Brain Infographic Matching Screenshot 4 */}
          <div className="relative w-full max-w-5xl mx-auto py-4 flex items-center justify-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[580px] overflow-hidden">
              <Image
                src="/assets/images/about-brain.png"
                alt="Analytical vs Creative Brain UX Diagram"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* ── Tools Section with Authentic Icons & Framed Box ── */}
          <div className="space-y-6 max-w-5xl mx-auto pt-6">
            <div className="text-center">
              <h3
                className="font-dm font-bold text-2xl sm:text-3xl text-transparent bg-clip-text inline-block"
                style={{
                  backgroundImage:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                Tools
              </h3>
            </div>

            {/* Framed Container with Tool Icons */}
            <div
              className="p-6 sm:p-8 bg-transparent"
              style={{
                border: "1.5px solid transparent",
                borderImageSource:
                  "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
                borderImageSlice: 1,
              }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-center">
                {[
                  { name: "FIGMA", icon: "/assets/tools/figma.png" },
                  { name: "SKETCH", icon: "/assets/tools/sketch.png" },
                  { name: "INVISION", icon: "/assets/tools/invision.png" },
                  { name: "ADOBE XD", icon: "/assets/tools/xd.png" },
                  { name: "PHOTOSHOP", icon: "/assets/tools/ps.png" },
                  { name: "ILLUSTRATOR", icon: "/assets/tools/ai.png" },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="flex flex-col items-center justify-center gap-3 p-3 transition-transform hover:-translate-y-1 duration-300 group"
                  >
                    <div className="relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform group-hover:scale-110">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <span className="font-dm font-bold text-xs sm:text-sm uppercase tracking-wider text-[var(--ink)] text-center group-hover:text-[#FEC163] transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════ SECTION 04: DESIGN APPROACH ══════════════ */}
        <section id="approach" className="scroll-mt-28 space-y-12">
          {/* Header Row: SectionBadge 04 DESIGN APPROACH on Left, Intro on Right (Exact Figma Match) */}
          <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 relative">
            <SectionBadge
              num="04"
              label="DESIGN<br/>APPROACH"
              className="flex-shrink-0"
            />

            <div className="flex-1 max-w-3xl flex flex-col justify-center gap-4 lg:pt-2">
              <h2 className="font-almarai text-2xl sm:text-3xl lg:text-[32px] font-bold text-[var(--ink)] leading-snug">
                The pursuit of intentional design
              </h2>
              <p className="font-almarai text-sm sm:text-base text-[rgba(255,247,231,0.85)] leading-relaxed">
                I approach design as a way to solve problems elegantly. Every
                project is driven by purpose and the goal of leaving things
                better than I found them. It begins with understanding the
                vision, which then guides the design phase, where ideas take
                form through structure, interaction, and visual detail. The work
                is then refined through iteration and feedback, and finally
                brought to completion with a cohesive, well-executed design
                prepared for development.
              </p>

              {/* Core Principles Heading (Aligned with text above) */}
              <div className="pt-2">
                <h3
                  className="font-dm font-bold text-2xl sm:text-3xl text-transparent bg-clip-text inline-block"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  Core Principles
                </h3>
              </div>
            </div>
          </div>

          {/* Single Bordered Container for Both Principles (Exact Figma Match) */}
          <div
            className="w-full max-w-5xl mx-auto p-6 sm:p-8 lg:p-10 bg-transparent transition-transform hover:-translate-y-0.5 duration-300"
            style={{
              border: "1.5px solid transparent",
              borderImageSource:
                "linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)",
              borderImageSlice: 1,
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Principle 1: Meraki */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 lg:gap-8">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-[155px] lg:h-[155px] flex-shrink-0">
                  <Image
                    src="/assets/tools/design-aproch/1.png"
                    alt="Meraki Principle"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="font-dm font-bold text-base sm:text-lg lg:text-xl uppercase tracking-wider text-[var(--ink)]">
                    MERAKI
                  </h4>
                  <p className="font-dm text-xs sm:text-sm text-[rgba(255,247,231,0.8)] leading-relaxed max-w-xs">
                    Designing with passion, devotion, and meticulous care,
                    ensuring the work is a true labor of love.
                  </p>
                </div>
              </div>

              {/* Principle 2: Simple Yet Significant */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 sm:gap-6 lg:gap-8">
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-[155px] lg:h-[155px] flex-shrink-0">
                  <Image
                    src="/assets/tools/design-aproch/2.png"
                    alt="Simple yet significant Principle"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="font-dm font-bold text-base sm:text-lg lg:text-xl uppercase tracking-wider text-[var(--ink)]">
                    SIMPLE YET SIGNIFICANT
                  </h4>
                  <p className="font-dm text-xs sm:text-sm text-[rgba(255,247,231,0.8)] leading-relaxed max-w-xs">
                    Striving for solutions that are radically clear and
                    effortless, yet possess maximum impact, utility, and lasting
                    value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
