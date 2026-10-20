"use client";

import React from "react";

/**
 * CaseStudyFullPageMockup
 * Detailed high-fidelity full-page responsive webpage mockup
 * matching the user's Figma screenshot for Section 03 (Final Designs).
 */
export default function CaseStudyFullPageMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[740px] mx-auto bg-white rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.85)] border-2 border-slate-200 overflow-hidden text-slate-800 select-none ${className}`}
    >
      {/* ── Browser Header Chrome ── */}
      <div className="w-full h-8 bg-slate-100 border-b border-slate-200 px-3 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
        </div>
        <div className="w-1/2 max-w-[280px] h-4 bg-white rounded-full border border-slate-200 text-[8px] text-slate-400 flex items-center justify-center font-mono">
          https://mindcare-wellness.health
        </div>
        <div className="w-4" />
      </div>

      {/* ── 01. Landing Page Navigation Bar ── */}
      <nav className="w-full px-5 py-3 border-b border-slate-100 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#0D9488] text-white flex items-center justify-center font-bold text-xs">
            ✚
          </div>
          <span className="font-dm font-bold text-sm text-[#0F766E] tracking-tight">
            MindCare
          </span>
        </div>
        <div className="flex items-center gap-4 text-[9px] font-dm text-slate-600 font-medium">
          <span className="text-[#0D9488] font-bold">Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Therapists</span>
          <span>FAQ</span>
        </div>
        <div className="px-3 py-1 bg-[#0D9488] text-white rounded-full text-[9px] font-bold">
          Get Started
        </div>
      </nav>

      {/* ── 02. Landing Page Hero Section ── */}
      <section className="px-6 py-8 bg-gradient-to-b from-[#F0FDFA] to-white grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-slate-100">
        <div className="md:col-span-7 space-y-2.5 text-left">
          <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-[#0F766E] text-[8px] font-bold uppercase tracking-wider">
            Safe &amp; Confidential Tele-Therapy
          </span>
          <h1 className="font-dm font-black text-xl sm:text-2xl text-slate-900 leading-tight">
            CONSULTATION &amp; MENTAL WELLNESS SUPPORT
          </h1>
          <p className="font-dm text-[10px] sm:text-[11px] text-slate-600 leading-relaxed max-w-sm">
            Empowering individuals through empathetic, evidence-based virtual counseling. Connect with certified therapists from the comfort of your home.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button className="px-4 py-1.5 rounded-full bg-[#0D9488] text-white text-[9px] font-bold shadow-sm">
              Book a Consultation
            </button>
            <span className="text-[9px] text-[#0F766E] font-bold underline cursor-pointer">
              Explore Programs ›
            </span>
          </div>
        </div>

        {/* Doctor & Patient Consultation Illustration */}
        <div className="md:col-span-5 flex items-center justify-center">
          <div className="w-full aspect-square bg-[#CCFBF1] rounded-2xl flex items-center justify-center text-5xl shadow-inner border border-teal-200">
            🧑‍⚕️💬👩
          </div>
        </div>
      </section>

      {/* ── 03. 4 Pillars / Features Row ── */}
      <section className="px-6 py-6 bg-white border-b border-slate-100">
        <div className="grid grid-cols-4 gap-3 text-center">
          <div className="p-2 rounded-lg bg-[#F0FDFA] border border-teal-100">
            <span className="text-lg block">💬</span>
            <span className="font-bold text-[8px] text-slate-800 block mt-1">
              Virtual Chat
            </span>
            <span className="text-[6.5px] text-slate-500">24/7 instant messaging</span>
          </div>
          <div className="p-2 rounded-lg bg-[#F0FDFA] border border-teal-100">
            <span className="text-lg block">📹</span>
            <span className="font-bold text-[8px] text-slate-800 block mt-1">
              HD Video Calls
            </span>
            <span className="text-[6.5px] text-slate-500">Encrypted sessions</span>
          </div>
          <div className="p-2 rounded-lg bg-[#F0FDFA] border border-teal-100">
            <span className="text-lg block">🛡</span>
            <span className="font-bold text-[8px] text-slate-800 block mt-1">
              100% Privacy
            </span>
            <span className="text-[6.5px] text-slate-500">HIPAA compliant</span>
          </div>
          <div className="p-2 rounded-lg bg-[#F0FDFA] border border-teal-100">
            <span className="text-lg block">🌱</span>
            <span className="font-bold text-[8px] text-slate-800 block mt-1">
              Self-Care Tools
            </span>
            <span className="text-[6.5px] text-slate-500">Guided meditations</span>
          </div>
        </div>
      </section>

      {/* ── 04. Empathy & Support Illustration Banner ── */}
      <section className="px-6 py-6 bg-[#E6FFFA] border-b border-teal-100 text-center">
        <div className="w-16 h-16 rounded-full bg-white mx-auto flex items-center justify-center text-3xl shadow-sm mb-2">
          🤝
        </div>
        <h3 className="font-dm font-bold text-sm text-[#0F766E]">
          You Are Never Alone in This Journey
        </h3>
        <p className="font-dm text-[9px] text-teal-800 max-w-md mx-auto mt-1 leading-relaxed">
          Over 10,000+ individuals have overcome anxiety, relationship stress, and professional burnout through personalized 1-on-1 care plans.
        </p>
      </section>

      {/* ── 05. 3 Pricing Packages in Mint / Teal Cards ── */}
      <section className="px-6 py-6 bg-white border-b border-slate-100">
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-lg bg-[#F0FDFA] border border-teal-200 text-center">
            <span className="font-bold text-[9px] text-slate-800 block">Single Session</span>
            <span className="font-black text-sm text-[#0D9488] block my-1">$45</span>
            <span className="text-[7px] text-slate-500 block">50 Min Video Session</span>
            <div className="w-full mt-2 py-1 bg-white border border-teal-300 rounded text-[7px] font-bold text-[#0D9488]">
              Choose
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#0D9488] text-white text-center shadow-md scale-105">
            <span className="font-bold text-[9px] block">4-Week Journey</span>
            <span className="font-black text-sm block my-1">$160</span>
            <span className="text-[7px] text-teal-100 block">4 Sessions + Daily Chat</span>
            <div className="w-full mt-2 py-1 bg-white rounded text-[7px] font-bold text-[#0D9488]">
              Popular Choice
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#F0FDFA] border border-teal-200 text-center">
            <span className="font-bold text-[9px] text-slate-800 block">Comprehensive</span>
            <span className="font-black text-sm text-[#0D9488] block my-1">$320</span>
            <span className="text-[7px] text-slate-500 block">8 Sessions + Care Plan</span>
            <div className="w-full mt-2 py-1 bg-white border border-teal-300 rounded text-[7px] font-bold text-[#0D9488]">
              Choose
            </div>
          </div>
        </div>
      </section>

      {/* ── 06. Mother & Child Maternal Health Illustration ── */}
      <section className="px-6 py-6 bg-[#F0FDFA] border-b border-teal-100 flex items-center justify-center gap-6">
        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-4xl shadow-sm border border-teal-100">
          🤱
        </div>
        <div className="text-left max-w-xs space-y-1">
          <span className="font-bold text-[10px] text-[#0F766E] block">
            Specialized Postpartum &amp; Family Care
          </span>
          <p className="text-[8px] text-slate-600 leading-relaxed">
            Nurturing mothers and caregivers through compassionate developmental consultations and maternal wellness programs.
          </p>
        </div>
      </section>

      {/* ── 07. FAQ Accordion List ── */}
      <section className="px-6 py-6 bg-white border-b border-slate-100 text-left">
        <h4 className="font-dm font-bold text-xs text-slate-900 mb-3 text-center">
          Frequently Asked Questions
        </h4>
        <div className="space-y-1.5 max-w-md mx-auto text-[8px]">
          <div className="p-2 rounded border border-teal-200 bg-[#F0FDFA] flex justify-between items-center text-[#0F766E] font-bold">
            <span>How does the first consultation work?</span>
            <span>+</span>
          </div>
          <div className="p-2 rounded border border-slate-200 flex justify-between items-center text-slate-700">
            <span>Is my medical information kept completely private?</span>
            <span>+</span>
          </div>
          <div className="p-2 rounded border border-slate-200 flex justify-between items-center text-slate-700">
            <span>Can I switch therapists anytime?</span>
            <span>+</span>
          </div>
        </div>
      </section>

      {/* ── 08. Dark Footer ── */}
      <footer className="w-full bg-[#0A192F] text-slate-400 p-5 text-center text-[8px] space-y-1.5">
        <div className="flex justify-center gap-4 text-slate-300 font-medium">
          <span>About</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Contact</span>
        </div>
        <p>© 2024 MindCare Tele-Therapy. All rights reserved.</p>
      </footer>
    </div>
  );
}
