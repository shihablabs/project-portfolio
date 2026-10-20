"use client";

import React from "react";

/**
 * CaseStudyHeroCascade
 * Pixel-perfect symmetrical cascade of 5 web pages for the "Me+" mental health platform,
 * matching the user's Figma screenshot (media_1792533553015.png) precisely:
 * 1. Far Left: "RESOURCES" page with filters and article cards
 * 2. Inner Left: "GET EXPERT HELP" with therapist listings
 * 3. Center: "MENTAL HEALTH SUPPORT FROM WHEREVER YOU ARE" / "Me+ Always With You" (tallest, prominent foreground)
 * 4. Inner Right: "Me+ Impact" & "FAQs"
 * 5. Far Right: "EVENTS" page with event cards
 */
export default function CaseStudyHeroCascade({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[1100px] mx-auto select-none flex items-center justify-center py-4 sm:py-6 overflow-hidden ${className}`}
    >
      <div className="relative w-full h-[320px] sm:h-[420px] md:h-[480px] lg:h-[520px] flex items-end justify-center">
        {/* ── 01. SHEET 1 (FAR LEFT - RESOURCES) ── */}
        <div
          className="absolute z-10 w-[140px] sm:w-[190px] md:w-[230px] lg:w-[260px] h-[240px] sm:h-[310px] md:h-[360px] lg:h-[390px] bg-white rounded-t-[4px] border border-slate-300/40 shadow-[0_16px_36px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col justify-between transform -translate-x-[150px] sm:-translate-x-[220px] md:-translate-x-[280px] lg:-translate-x-[320px] bottom-0 transition-transform duration-300"
        >
          {/* Header */}
          <div className="w-full bg-[#E6F4F1] p-1.5 sm:p-2 border-b border-[#0D9488]/20 flex items-center justify-between">
            <span className="font-dm font-bold text-[7px] sm:text-[9px] text-[#0F766E] tracking-wider">
              Me+
            </span>
            <span className="text-[6px] sm:text-[7px] text-gray-500 font-medium">
              RESOURCES
            </span>
            <div className="w-2.5 h-1 bg-[#0D9488] rounded-xs" />
          </div>

          {/* Body Content */}
          <div className="flex-1 p-1.5 sm:p-2.5 bg-gradient-to-b from-[#F0FDFA] to-white flex flex-col text-left overflow-hidden">
            <span className="font-dm font-bold text-[8px] sm:text-[10px] text-gray-800 mb-1 sm:mb-1.5 text-center">
              RESOURCES
            </span>

            {/* Filter bar */}
            <div className="w-full h-3 sm:h-4 bg-[#CCFBF1] rounded-xs mb-2 flex items-center px-1">
              <span className="text-[6px] sm:text-[7px] text-[#0F766E] font-medium">
                🔍 Search articles...
              </span>
            </div>

            {/* Grid of resource cards */}
            <div className="grid grid-cols-2 gap-1 sm:gap-1.5 flex-1">
              <div className="bg-white border border-teal-100 rounded-xs p-1 shadow-xs flex flex-col justify-between">
                <div className="w-full h-7 sm:h-9 bg-teal-100/70 rounded-xs flex items-center justify-center text-[10px]">
                  🌿
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1" />
                <div className="w-2/3 h-1 bg-gray-200 rounded-full mt-0.5" />
              </div>

              <div className="bg-white border border-teal-100 rounded-xs p-1 shadow-xs flex flex-col justify-between">
                <div className="w-full h-7 sm:h-9 bg-purple-100/70 rounded-xs flex items-center justify-center text-[10px]">
                  🧘
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1" />
                <div className="w-2/3 h-1 bg-gray-200 rounded-full mt-0.5" />
              </div>

              <div className="bg-white border border-teal-100 rounded-xs p-1 shadow-xs flex flex-col justify-between">
                <div className="w-full h-7 sm:h-9 bg-amber-100/70 rounded-xs flex items-center justify-center text-[10px]">
                  🧠
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1" />
                <div className="w-2/3 h-1 bg-gray-200 rounded-full mt-0.5" />
              </div>

              <div className="bg-white border border-teal-100 rounded-xs p-1 shadow-xs flex flex-col justify-between">
                <div className="w-full h-7 sm:h-9 bg-blue-100/70 rounded-xs flex items-center justify-center text-[10px]">
                  🤝
                </div>
                <div className="w-full h-1 bg-gray-200 rounded-full mt-1" />
                <div className="w-2/3 h-1 bg-gray-200 rounded-full mt-0.5" />
              </div>
            </div>
          </div>

          {/* Dark Footer */}
          <div className="w-full bg-[#0A0F1E] py-1 px-2 flex items-center justify-between text-white">
            <span className="font-dm font-bold text-[6px] sm:text-[7.5px] text-[#4ADE80]">
              Me+
            </span>
            <span className="text-[5.5px] sm:text-[6.5px] text-gray-400">
              📞 1614
            </span>
          </div>
        </div>

        {/* ── 02. SHEET 2 (INNER LEFT - GET EXPERT HELP) ── */}
        <div
          className="absolute z-20 w-[150px] sm:w-[205px] md:w-[250px] lg:w-[280px] h-[280px] sm:h-[355px] md:h-[415px] lg:h-[450px] bg-white rounded-t-[4px] border border-slate-300/40 shadow-[0_20px_42px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between transform -translate-x-[75px] sm:-translate-x-[110px] md:-translate-x-[140px] lg:-translate-x-[160px] bottom-0 transition-transform duration-300"
        >
          {/* Header */}
          <div className="w-full bg-white p-1.5 sm:p-2 border-b border-gray-100 flex items-center justify-between">
            <span className="font-dm font-bold text-[7.5px] sm:text-[9.5px] text-[#0F766E]">
              Me+
            </span>
            <div className="flex gap-1 text-[5px] sm:text-[6.5px] text-gray-500">
              <span>Home</span>
              <span>Therapists</span>
              <span>About</span>
            </div>
            <div className="w-8 h-2 sm:h-2.5 bg-[#0D9488] rounded-xs" />
          </div>

          {/* Body Content */}
          <div className="flex-1 p-2 sm:p-3 bg-gradient-to-b from-[#F0FDFA] to-white flex flex-col text-left overflow-hidden">
            <span className="font-dm font-extrabold text-[8.5px] sm:text-[11px] text-gray-900 text-center tracking-tight">
              GET EXPERT HELP
            </span>
            <p className="text-[5.5px] sm:text-[7px] text-gray-500 text-center mb-1.5 sm:mb-2">
              Find licensed therapists and book private online sessions
            </p>

            {/* Doctor Search & Filter Bar */}
            <div className="w-full h-3.5 sm:h-4.5 bg-[#0D9488] text-white text-[6px] sm:text-[7.5px] font-bold rounded-xs flex items-center justify-center mb-2 shadow-xs">
              Book a Confidential Consultation
            </div>

            {/* Doctor List */}
            <div className="space-y-1.5 sm:space-y-2 flex-1">
              {/* Doctor 1 */}
              <div className="p-1 sm:p-1.5 bg-white border border-teal-100 rounded-xs flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-[7px] font-bold">
                    AS
                  </div>
                  <div className="text-[5.5px] sm:text-[7px]">
                    <strong className="block text-gray-900 leading-tight">
                      Dr. Ananya Sen
                    </strong>
                    <span className="text-gray-500">Clinical Psych</span>
                  </div>
                </div>
                <div className="px-1.5 py-0.5 bg-[#0D9488] text-white rounded-xs text-[5px] sm:text-[6.5px] font-bold">
                  Book
                </div>
              </div>

              {/* Doctor 2 */}
              <div className="p-1 sm:p-1.5 bg-white border border-teal-100 rounded-xs flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[7px] font-bold">
                    TC
                  </div>
                  <div className="text-[5.5px] sm:text-[7px]">
                    <strong className="block text-gray-900 leading-tight">
                      Dr. Tariqul Islam
                    </strong>
                    <span className="text-gray-500">Cognitive Specialist</span>
                  </div>
                </div>
                <div className="px-1.5 py-0.5 bg-[#0D9488] text-white rounded-xs text-[5px] sm:text-[6.5px] font-bold">
                  Book
                </div>
              </div>

              {/* Doctor 3 */}
              <div className="p-1 sm:p-1.5 bg-white border border-teal-100 rounded-xs flex items-center justify-between shadow-xs">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-cyan-600 text-white flex items-center justify-center text-[7px] font-bold">
                    RA
                  </div>
                  <div className="text-[5.5px] sm:text-[7px]">
                    <strong className="block text-gray-900 leading-tight">
                      Rezaul Amin, MS
                    </strong>
                    <span className="text-gray-500">Family Counselor</span>
                  </div>
                </div>
                <div className="px-1.5 py-0.5 bg-[#0D9488] text-white rounded-xs text-[5px] sm:text-[6.5px] font-bold">
                  Book
                </div>
              </div>
            </div>
          </div>

          {/* Dark Footer */}
          <div className="w-full bg-[#0A0F1E] py-1 px-2.5 flex items-center justify-between text-white">
            <span className="font-dm font-bold text-[6.5px] sm:text-[8px] text-[#4ADE80]">
              Me+
            </span>
            <span className="text-[5.5px] sm:text-[7px] text-gray-400">
              📞 1614
            </span>
          </div>
        </div>

        {/* ── 03. SHEET 3 (CENTER - PROMINENT, TALLEST, MAIN LANDING PAGE) ── */}
        <div
          className="relative z-30 w-[170px] sm:w-[230px] md:w-[280px] lg:w-[320px] h-[320px] sm:h-[410px] md:h-[475px] lg:h-[515px] bg-white rounded-t-[5px] border-2 border-slate-300/60 shadow-[0_28px_65px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col justify-between transform translate-x-0 bottom-0 transition-transform duration-300"
        >
          {/* Main Top Nav Bar */}
          <div className="w-full bg-white px-2 py-1.5 sm:px-3 sm:py-2 border-b border-gray-100 flex items-center justify-between">
            <span className="font-dm font-black text-[9px] sm:text-[12px] text-[#0D9488] tracking-tight">
              Me+
            </span>
            <div className="flex gap-1.5 sm:gap-2 text-[5.5px] sm:text-[7.5px] text-gray-600 font-medium">
              <span>ABOUT US</span>
              <span>SERVICES</span>
              <span>FAQ</span>
              <span>BLOG</span>
            </div>
            <div className="px-1.5 py-0.5 bg-[#0D9488] text-white rounded-xs text-[5.5px] sm:text-[7px] font-bold">
              GET IN TOUCH
            </div>
          </div>

          {/* Main Hero Banner: "MENTAL HEALTH SUPPORT FROM WHEREVER YOU ARE" */}
          <div className="flex-1 bg-[#F8FAFC] flex flex-col text-left overflow-hidden">
            <div className="p-2 sm:p-3 bg-gradient-to-b from-white to-[#F0FDFA] flex items-center justify-between">
              <div className="flex-1 pr-2">
                <span className="font-dm font-black text-[9px] sm:text-[13px] text-gray-900 uppercase leading-tight block">
                  MENTAL HEALTH SUPPORT FROM WHEREVER YOU ARE
                </span>
                <span className="text-[6px] sm:text-[8px] text-gray-500 mt-1 block">
                  Accessible, confidential clinical therapy at your fingertips.
                </span>
                <div className="inline-block mt-1.5 px-2 py-0.5 bg-[#0D9488] text-white rounded-xs text-[6px] sm:text-[7.5px] font-bold">
                  Start Consultation
                </div>
              </div>

              {/* Illustration of Patient & Therapist on Video Call */}
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-[#CCFBF1] rounded-sm flex items-center justify-center text-xl sm:text-3xl flex-shrink-0 shadow-xs border border-teal-200">
                👩‍⚕️💻
              </div>
            </div>

            {/* Slogan & Support Illustration: "Me+ Always With You" */}
            <div className="p-2 sm:p-2.5 bg-white text-center border-t border-b border-teal-100">
              <span className="font-dm font-bold text-[7px] sm:text-[9px] text-[#0F766E] uppercase tracking-wider block">
                Me+ Always With You
              </span>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-4 gap-1 mt-1.5">
                <div className="p-1 bg-[#F0FDFA] rounded-xs text-[5.5px] sm:text-[7px] font-bold text-teal-800">
                  🌱 Counsel
                </div>
                <div className="p-1 bg-[#F0FDFA] rounded-xs text-[5.5px] sm:text-[7px] font-bold text-teal-800">
                  🤝 24/7 Aid
                </div>
                <div className="p-1 bg-[#F0FDFA] rounded-xs text-[5.5px] sm:text-[7px] font-bold text-teal-800">
                  🔒 Private
                </div>
                <div className="p-1 bg-[#F0FDFA] rounded-xs text-[5.5px] sm:text-[7px] font-bold text-teal-800">
                  ⭐ Experts
                </div>
              </div>
            </div>

            {/* Large Mint Illustration Card (Reassurance Graphic) */}
            <div className="mx-2 sm:mx-3 my-1.5 sm:my-2 p-2 bg-[#E6F4F1] border border-teal-200/60 rounded-xs flex items-center justify-between">
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/80 rounded-full flex items-center justify-center text-lg sm:text-2xl shadow-xs">
                🤲
              </div>
              <div className="flex-1 pl-2 text-left text-[6px] sm:text-[7.5px]">
                <strong className="block text-[#0F766E] font-bold">
                  Safe &amp; Stigma-Free Counseling
                </strong>
                <span className="text-gray-600 block leading-tight mt-0.5">
                  Over 10,000+ sessions held with certified clinical
                  psychologists.
                </span>
              </div>
            </div>

            {/* 3 Teal Action Cards */}
            <div className="grid grid-cols-3 gap-1 px-2 sm:px-3 mb-1.5">
              <div className="p-1 bg-[#0D9488] text-white rounded-xs text-center text-[5.5px] sm:text-[7px] font-bold">
                Individual
              </div>
              <div className="p-1 bg-[#0F766E] text-white rounded-xs text-center text-[5.5px] sm:text-[7px] font-bold">
                Couples
              </div>
              <div className="p-1 bg-[#115E59] text-white rounded-xs text-center text-[5.5px] sm:text-[7px] font-bold">
                Teens
              </div>
            </div>
          </div>

          {/* Dark Footer Bar with Phone Number */}
          <div className="w-full bg-[#0A0F1E] py-1.5 px-3 flex items-center justify-between text-white border-t border-slate-800">
            <span className="font-dm font-black text-[8px] sm:text-[10px] text-[#4ADE80]">
              Me+
            </span>
            <div className="flex items-center gap-1.5 text-[6px] sm:text-[8px] text-gray-300">
              <span>National Crisis Hotline:</span>
              <strong className="text-[#FEC163] font-bold">📞 1614</strong>
            </div>
          </div>
        </div>

        {/* ── 04. SHEET 4 (INNER RIGHT - IMPACT & FAQS) ── */}
        <div
          className="absolute z-20 w-[150px] sm:w-[205px] md:w-[250px] lg:w-[280px] h-[280px] sm:h-[355px] md:h-[415px] lg:h-[450px] bg-white rounded-t-[4px] border border-slate-300/40 shadow-[0_20px_42px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col justify-between transform translate-x-[75px] sm:translate-x-[110px] md:translate-x-[140px] lg:translate-x-[160px] bottom-0 transition-transform duration-300"
        >
          {/* Header */}
          <div className="w-full bg-white p-1.5 sm:p-2 border-b border-gray-100 flex items-center justify-between">
            <span className="font-dm font-bold text-[7.5px] sm:text-[9.5px] text-[#0F766E]">
              Me+
            </span>
            <span className="text-[5.5px] sm:text-[7px] text-gray-500 font-medium">
              IMPACT &amp; FAQS
            </span>
            <div className="w-8 h-2 sm:h-2.5 bg-[#0D9488] rounded-xs" />
          </div>

          {/* Body Content */}
          <div className="flex-1 p-2 sm:p-3 bg-gradient-to-b from-[#F0FDFA] to-white flex flex-col text-left overflow-hidden">
            <span className="font-dm font-extrabold text-[8.5px] sm:text-[11px] text-gray-900 text-center tracking-tight">
              Me+ Impact
            </span>

            {/* Testimonial Quote Graphic with Heart */}
            <div className="w-full p-2 bg-[#E6F4F1] rounded-xs border border-teal-200/60 my-1.5 flex items-center justify-center gap-2">
              <span className="text-xl sm:text-2xl">💖</span>
              <p className="text-[5.5px] sm:text-[7px] text-teal-900 italic font-medium leading-tight">
                &ldquo;Having an empathetic specialist available transformed my
                life.&rdquo;
              </p>
            </div>

            {/* FAQs Accordion Blocks */}
            <span className="font-dm font-bold text-[7.5px] sm:text-[9px] text-gray-800 text-center mb-1">
              FAQs
            </span>
            <div className="space-y-1 sm:space-y-1.5 flex-1">
              <div className="p-1 sm:p-1.5 bg-[#0D9488] text-white rounded-xs text-[5.5px] sm:text-[7px] font-medium flex justify-between items-center">
                <span>How does online counseling work?</span>
                <span>▾</span>
              </div>
              <div className="p-1 sm:p-1.5 bg-[#E6F4F1] border border-teal-200 rounded-xs text-[5.5px] sm:text-[7px] text-teal-900 flex justify-between items-center">
                <span>Is my medical information private?</span>
                <span>▾</span>
              </div>
              <div className="p-1 sm:p-1.5 bg-[#E6F4F1] border border-teal-200 rounded-xs text-[5.5px] sm:text-[7px] text-teal-900 flex justify-between items-center">
                <span>How much does each session cost?</span>
                <span>▾</span>
              </div>
            </div>
          </div>

          {/* Dark Footer */}
          <div className="w-full bg-[#0A0F1E] py-1 px-2.5 flex items-center justify-between text-white">
            <span className="font-dm font-bold text-[6.5px] sm:text-[8px] text-[#4ADE80]">
              Me+
            </span>
            <span className="text-[5.5px] sm:text-[7px] text-gray-400">
              📞 1614
            </span>
          </div>
        </div>

        {/* ── 05. SHEET 5 (FAR RIGHT - EVENTS) ── */}
        <div
          className="absolute z-10 w-[140px] sm:w-[190px] md:w-[230px] lg:w-[260px] h-[240px] sm:h-[310px] md:h-[360px] lg:h-[390px] bg-white rounded-t-[4px] border border-slate-300/40 shadow-[0_16px_36px_rgba(0,0,0,0.75)] overflow-hidden flex flex-col justify-between transform translate-x-[150px] sm:translate-x-[220px] md:translate-x-[280px] lg:translate-x-[320px] bottom-0 transition-transform duration-300"
        >
          {/* Header */}
          <div className="w-full bg-[#E6F4F1] p-1.5 sm:p-2 border-b border-[#0D9488]/20 flex items-center justify-between">
            <span className="font-dm font-bold text-[7px] sm:text-[9px] text-[#0F766E] tracking-wider">
              Me+
            </span>
            <span className="text-[6px] sm:text-[7px] text-gray-500 font-medium">
              EVENTS
            </span>
            <div className="w-2.5 h-1 bg-[#0D9488] rounded-xs" />
          </div>

          {/* Body Content */}
          <div className="flex-1 p-1.5 sm:p-2.5 bg-gradient-to-b from-[#F0FDFA] to-white flex flex-col text-left overflow-hidden">
            <span className="font-dm font-bold text-[8px] sm:text-[10px] text-gray-800 mb-1 text-center">
              EVENTS
            </span>

            {/* Events Search Bar */}
            <div className="w-full h-3 sm:h-4 bg-[#CCFBF1] rounded-xs mb-1.5 flex items-center px-1">
              <span className="text-[6px] sm:text-[7px] text-[#0F766E] font-medium">
                🔍 Search upcoming workshops...
              </span>
            </div>

            {/* Event List */}
            <div className="space-y-1 sm:space-y-1.5 flex-1">
              <div className="p-1 bg-white border border-teal-100 rounded-xs flex items-center justify-between shadow-xs">
                <div className="text-[5.5px] sm:text-[6.5px]">
                  <strong className="block text-gray-900">Mindful Breathing</strong>
                  <span className="text-gray-500">Live Zoom Workshop</span>
                </div>
                <div className="px-1 py-0.5 bg-[#0D9488] text-white rounded-xs text-[5px] sm:text-[6px] font-bold">
                  Join
                </div>
              </div>

              <div className="p-1 bg-white border border-teal-100 rounded-xs flex items-center justify-between shadow-xs">
                <div className="text-[5.5px] sm:text-[6.5px]">
                  <strong className="block text-gray-900">Anxiety Toolkit</strong>
                  <span className="text-gray-500">Community Circle</span>
                </div>
                <div className="px-1 py-0.5 bg-[#0D9488] text-white rounded-xs text-[5px] sm:text-[6px] font-bold">
                  Join
                </div>
              </div>

              <div className="p-1 bg-white border border-teal-100 rounded-xs flex items-center justify-between shadow-xs">
                <div className="text-[5.5px] sm:text-[6.5px]">
                  <strong className="block text-gray-900">Sleep Hygiene</strong>
                  <span className="text-gray-500">Interactive Q&amp;A</span>
                </div>
                <div className="px-1 py-0.5 bg-[#0D9488] text-white rounded-xs text-[5px] sm:text-[6px] font-bold">
                  Join
                </div>
              </div>
            </div>
          </div>

          {/* Dark Footer */}
          <div className="w-full bg-[#0A0F1E] py-1 px-2 flex items-center justify-between text-white">
            <span className="font-dm font-bold text-[6px] sm:text-[7.5px] text-[#4ADE80]">
              Me+
            </span>
            <span className="text-[5.5px] sm:text-[6.5px] text-gray-400">
              📞 1614
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
