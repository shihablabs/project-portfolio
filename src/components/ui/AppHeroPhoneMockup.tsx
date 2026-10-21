"use client";

import React from "react";

/**
 * AppHeroPhoneMockup
 * Single upright smartphone mockup for the Apps category hero
 * matching the user's Figma screenshot pixel-for-pixel.
 */
export default function AppHeroPhoneMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[280px] sm:max-w-[310px] mx-auto select-none flex flex-col items-center justify-center ${className}`}
    >
      {/* Smartphone Chassis */}
      <div className="relative w-full aspect-[9/18.2] bg-[#FFFFFF] rounded-[36px] sm:rounded-[40px] p-3 sm:p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-[4px] border-[#CBD5E1] flex flex-col justify-between overflow-hidden">
        {/* Top Speaker & Front Camera Dot */}
        <div className="flex items-center justify-center gap-2 mb-1.5 flex-shrink-0">
          <div className="w-1.5 h-1.5 bg-[#475569] rounded-full" />
          <div className="w-12 h-1 bg-[#94A3B8] rounded-full" />
        </div>

        {/* Screen Header Bar (Black Background with ≡ HOME) */}
        <div className="w-full bg-black text-white px-3 py-1.5 flex items-center justify-center relative rounded-t-[2px]">
          <span className="absolute left-3 text-xs font-bold leading-none cursor-pointer">
            ≡
          </span>
          <span className="text-[10px] sm:text-[11px] font-dm font-bold uppercase tracking-wider">
            HOME
          </span>
        </div>

        {/* Screen Body */}
        <div className="flex-1 flex flex-col justify-between items-center text-center px-1.5 py-2">
          {/* Tagline */}
          <p className="text-[8.5px] sm:text-[9.5px] font-dm font-medium text-gray-700 leading-tight max-w-[190px]">
            Book a valet in advance for a hassle free service
          </p>

          {/* Car Graphic with Valet & Customer */}
          <div className="relative w-full h-20 sm:h-24 flex items-center justify-center my-0.5">
            <svg viewBox="0 0 120 60" className="w-36 h-20" fill="none">
              {/* Ground Shadow */}
              <ellipse cx="60" cy="52" rx="48" ry="4" fill="#E2E8F0" />
              {/* Red Modern Sedan Car */}
              <path
                d="M38 42 L46 28 L72 24 L96 24 L108 34 L114 42 L114 48 L38 48 Z"
                fill="#DE4313"
              />
              <path
                d="M50 28 L70 26 L70 36 L44 36 Z"
                fill="#E2E8F0"
                opacity="0.8"
              />
              <path
                d="M74 26 L94 26 L104 36 L74 36 Z"
                fill="#E2E8F0"
                opacity="0.8"
              />
              {/* Wheels */}
              <circle cx="52" cy="48" r="6" fill="#1E293B" />
              <circle cx="52" cy="48" r="2.5" fill="#E2E8F0" />
              <circle cx="98" cy="48" r="6" fill="#1E293B" />
              <circle cx="98" cy="48" r="2.5" fill="#E2E8F0" />

              {/* Character 1: Valet Driver in Uniform */}
              <circle cx="20" cy="28" r="3" fill="#DC2626" />
              <path d="M17 32 L23 32 L23 44 L17 44 Z" fill="#DC2626" />
              <path d="M18 44 L18 52 M22 44 L22 52" stroke="#1E293B" strokeWidth="1.5" />

              {/* Character 2: Business Traveler */}
              <circle cx="30" cy="27" r="3" fill="#475569" />
              <path d="M27 31 L33 31 L33 44 L27 44 Z" fill="#1E293B" />
              <path d="M28 44 L28 52 M32 44 L32 52" stroke="#1E293B" strokeWidth="1.5" />
            </svg>
          </div>

          {/* Book Action Button (Black Button) */}
          <div className="w-full max-w-[170px] py-1.5 bg-[#0A0F24] text-white rounded-[2px] text-[9px] sm:text-[10px] font-dm font-bold uppercase tracking-wider text-center shadow-md cursor-pointer hover:bg-black transition-colors">
            BOOK A VALET
          </div>

          {/* Divider with "How it works" */}
          <div className="w-full flex items-center gap-2 my-1.5 px-2">
            <div className="flex-1 h-[1px] bg-gray-200" />
            <span className="text-[7.5px] font-dm font-medium text-gray-500 uppercase">
              How it works
            </span>
            <div className="flex-1 h-[1px] bg-gray-200" />
          </div>

          {/* 3 Steps Icons */}
          <div className="w-full grid grid-cols-3 gap-1 px-1 text-center">
            {/* Step 1: Calendar */}
            <div className="flex flex-col items-center">
              <span className="text-sm">📅</span>
              <span className="text-[6.5px] font-dm font-semibold text-gray-700 leading-tight mt-0.5">
                Make a booking
              </span>
            </div>
            {/* Step 2: Match Valet */}
            <div className="flex flex-col items-center">
              <span className="text-sm">🔍</span>
              <span className="text-[6.5px] font-dm font-semibold text-gray-700 leading-tight mt-0.5">
                Match Valet
              </span>
            </div>
            {/* Step 3: Notify Driver */}
            <div className="flex flex-col items-center">
              <span className="text-sm">🔔</span>
              <span className="text-[6.5px] font-dm font-semibold text-gray-700 leading-tight mt-0.5">
                Notify Driver
              </span>
            </div>
          </div>
        </div>

        {/* Screen Bottom Nav */}
        <div className="w-full pt-1.5 pb-1 border-t border-gray-100 flex items-center justify-around text-[9px] text-gray-500">
          <div className="flex flex-col items-center text-[#DE4313] font-bold">
            <span className="text-xs">🏠</span>
            <span className="text-[6.5px]">Home</span>
          </div>
          <div className="flex flex-col items-center hover:text-gray-900 cursor-pointer">
            <span className="text-xs">📋</span>
            <span className="text-[6.5px]">Bookings</span>
          </div>
          <div className="flex flex-col items-center hover:text-gray-900 cursor-pointer">
            <span className="text-xs">👤</span>
            <span className="text-[6.5px]">Account</span>
          </div>
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="w-16 h-1 bg-gray-400 rounded-full mx-auto mt-1 flex-shrink-0" />
      </div>

      {/* ── Slider Arrows & Indicators below Phone (Matching Screenshot 2) ── */}
      <div className="flex items-center justify-center gap-3 mt-4 text-[#DE4313]">
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path
            d="M8 1L2 6L8 11M3 6H24"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#DE4313]" />
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
          <span className="w-2 h-2 rounded-full bg-[#CBD5E1]" />
        </div>
        <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
          <path
            d="M16 1L22 6L16 11M21 6H0"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
