"use client";

import Image from "next/image";
import React from "react";

interface LaptopWebsitePreviewProps {
  clientName?: string;
  headline?: string;
  subheadline?: string;
  accentColor?: string;
  theme?: "elevate" | "daahuk" | "aamar" | "arbree";
}

/**
 * LaptopWebsitePreview
 * Pixel-perfect MacBook Pro mockup displaying the responsive website UI
 * matching the user's Figma screenshot of Elevate Solutions / Websites.
 */
export default function LaptopWebsitePreview({
  clientName = "ELEVATE SOLUTIONS",
  headline = "UNLOCKING EXCELLENCE",
  subheadline = "WITH MICROSOFT:",
  theme = "elevate",
}: LaptopWebsitePreviewProps) {
  return (
    <div className="relative w-full max-w-[680px] mx-auto select-none">
      {/* ── Laptop Lid (Screen Bezel) ── */}
      <div className="relative w-full bg-[#1A1F2C] rounded-t-[14px] sm:rounded-t-[18px] p-2.5 sm:p-3 pb-0 shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-[#334155]/60">
        {/* Webcam dot */}
        <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#334155]" />
          <span className="w-0.5 h-0.5 rounded-full bg-[#22D3EE] opacity-60" />
        </div>

        {/* ── Inner Screen Display ── */}
        <div className="relative w-full aspect-[16/10] bg-[#0A192F] rounded-t-[6px] overflow-hidden flex flex-col justify-between text-white border border-[#1E293B]">
          {/* Website Top Navigation Bar */}
          <div className="w-full h-8 sm:h-9 bg-[#0B1528]/90 backdrop-blur border-b border-white/10 px-3 sm:px-4 flex items-center justify-between z-10 flex-shrink-0">
            {/* Logo */}
            <div className="flex items-center gap-1.5">
              <span className="font-dm font-black text-[10px] sm:text-[11px] tracking-wider text-[#F97316]">
                ELEVATE
              </span>
              <span className="font-dm font-medium text-[8px] sm:text-[9px] tracking-widest text-slate-300">
                SOLUTIONS
              </span>
            </div>

            {/* Nav links */}
            <div className="hidden sm:flex items-center gap-3 text-[9px] font-dm text-slate-300">
              <span className="hover:text-white cursor-pointer">HOME</span>
              <span className="hover:text-white cursor-pointer flex items-center gap-0.5">
                ABOUT <span className="text-[7px]">▾</span>
              </span>
              <span className="hover:text-white cursor-pointer flex items-center gap-0.5">
                SOLUTIONS <span className="text-[7px]">▾</span>
              </span>
              <span className="hover:text-white cursor-pointer flex items-center gap-0.5">
                INSIGHTS <span className="text-[7px]">▾</span>
              </span>
            </div>

            {/* Orange Contact Button */}
            <div>
              <span className="px-2.5 py-1 rounded-[3px] bg-[#E45D23] hover:bg-[#F97316] text-[8px] sm:text-[9px] font-bold tracking-wider text-white uppercase shadow-sm cursor-pointer">
                CONTACT US
              </span>
            </div>
          </div>

          {/* Website Hero Area with Deep Blue Network Canvas */}
          <div className="relative flex-1 p-4 sm:p-6 flex items-center justify-between overflow-hidden">
            {/* Ambient network glows and nodes */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 75% 50%, rgba(56, 189, 248, 0.25) 0%, transparent 60%), radial-gradient(circle at 20% 40%, rgba(228, 93, 35, 0.15) 0%, transparent 50%)",
              }}
            />

            {/* SVG Network Constellation Mesh in background */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="20%" y1="30%" x2="40%" y2="60%" stroke="#38BDF8" strokeWidth="0.8" />
              <line x1="40%" y1="60%" x2="65%" y2="40%" stroke="#38BDF8" strokeWidth="0.8" />
              <line x1="65%" y1="40%" x2="80%" y2="70%" stroke="#38BDF8" strokeWidth="0.8" />
              <line x1="50%" y1="20%" x2="65%" y2="40%" stroke="#38BDF8" strokeWidth="0.8" />
              <line x1="75%" y1="30%" x2="85%" y2="50%" stroke="#38BDF8" strokeWidth="0.8" />
              <circle cx="20%" cy="30%" r="2" fill="#38BDF8" />
              <circle cx="40%" cy="60%" r="2.5" fill="#38BDF8" />
              <circle cx="65%" cy="40%" r="3" fill="#38BDF8" />
              <circle cx="80%" cy="70%" r="2" fill="#38BDF8" />
              <circle cx="75%" cy="30%" r="2" fill="#38BDF8" />
              <circle cx="50%" cy="20%" r="2" fill="#38BDF8" />
            </svg>

            {/* Left Content: Headline + Subtitle + CTA */}
            <div className="relative z-10 max-w-[55%] space-y-2 sm:space-y-3">
              <div>
                <h3 className="font-dm font-extrabold text-sm sm:text-lg md:text-xl lg:text-[22px] leading-tight uppercase tracking-tight text-white drop-shadow-md">
                  {headline}
                </h3>
                <h3 className="font-dm font-extrabold text-sm sm:text-lg md:text-xl lg:text-[22px] leading-tight uppercase tracking-tight text-[#38BDF8] drop-shadow-md">
                  {subheadline}
                </h3>
              </div>

              <p className="font-dm text-[8px] sm:text-[10px] md:text-[11px] leading-relaxed text-slate-300 max-w-sm line-clamp-3 sm:line-clamp-4">
                Our Solution Partner Designation signifies our commitment to delivering cutting-edge solutions for success in the digital age. Join us on the path to innovation and transformation.
              </p>

              <div>
                <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-[3px] border border-[#38BDF8] bg-[#38BDF8]/20 hover:bg-[#38BDF8]/30 text-[8px] sm:text-[9px] font-bold text-white uppercase tracking-wider transition-colors cursor-pointer shadow-sm">
                  VIEW SOLUTIONS
                </span>
              </div>
            </div>

            {/* Right Content: Microsoft Solution Partner Cards Grid */}
            <div className="relative z-10 w-[40%] max-w-[210px] grid grid-cols-2 gap-1.5 sm:gap-2">
              {[
                { title: "Solutions Partner", sub: "Business Applications" },
                { title: "Solutions Partner", sub: "Data & AI" },
                { title: "Solutions Partner", sub: "Digital & App Innovation" },
                { title: "Solutions Partner", sub: "Infrastructure" },
              ].map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white/95 rounded-[3px] p-1.5 sm:p-2 shadow-md flex flex-col justify-between text-slate-900 border border-slate-200"
                >
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-[#F25022] inline-block" />
                    <span className="w-1.5 h-1.5 bg-[#7FBA00] inline-block" />
                    <span className="font-dm font-bold text-[6px] sm:text-[7px] text-slate-800">
                      Microsoft
                    </span>
                  </div>
                  <div className="mt-1">
                    <span className="block font-dm font-extrabold text-[6px] sm:text-[7px] leading-tight text-slate-900">
                      {card.title}
                    </span>
                    <span className="block font-dm text-[5px] sm:text-[6px] text-slate-600 leading-tight">
                      {card.sub}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Dots at Bottom Center */}
            <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Laptop Base (Keyboard Deck & Lip) ── */}
      <div className="relative w-[105%] -left-[2.5%] h-3.5 sm:h-4.5 bg-gradient-to-b from-[#CBD5E1] via-[#94A3B8] to-[#475569] rounded-b-[10px] sm:rounded-b-[14px] shadow-[0_12px_24px_rgba(0,0,0,0.7)] flex justify-center items-start">
        {/* Thumb Opening Notch */}
        <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-[#334155] rounded-b-[4px]" />
      </div>

      {/* Bottom Reflection / Ground Glow */}
      <div
        className="w-[90%] mx-auto h-4 rounded-full filter blur-md opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(0,0,0,0.8) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
