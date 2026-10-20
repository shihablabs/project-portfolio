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
      className={`relative w-full max-w-[260px] sm:max-w-[290px] mx-auto select-none flex items-center justify-center ${className}`}
    >
      {/* Smartphone Chassis */}
      <div className="relative w-full aspect-[9/18.5] bg-[#FFFFFF] rounded-[32px] sm:rounded-[36px] p-3 sm:p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.85)] border-[4px] border-[#CBD5E1] flex flex-col justify-between overflow-hidden">
        {/* Speaker & Front Camera Notch */}
        <div className="w-16 h-1.5 bg-[#94A3B8] rounded-full mx-auto mb-2 flex-shrink-0" />

        {/* Screen Header Bar */}
        <div className="w-full flex items-center justify-between text-[8px] text-gray-500 pb-2 border-b border-gray-100">
          <span className="font-bold text-gray-900 text-[10px]">ezeedrop</span>
          <div className="flex items-center gap-1.5">
            <span>●●●</span>
            <span>≡</span>
          </div>
        </div>

        {/* Screen Body */}
        <div className="my-auto flex flex-col items-center text-center py-2">
          {/* Car Graphic */}
          <div className="relative w-full h-24 sm:h-28 flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-32 h-16" fill="none">
              {/* Red/Orange Modern Sedan Car */}
              <path
                d="M10 32 L20 20 L45 16 L72 16 L88 26 L96 32 L96 38 L10 38 Z"
                fill="#DE4313"
              />
              <path
                d="M24 20 L44 18 L44 28 L18 28 Z"
                fill="#94A3B8"
                opacity="0.7"
              />
              <path
                d="M48 18 L70 18 L82 28 L48 28 Z"
                fill="#94A3B8"
                opacity="0.7"
              />
              {/* Wheels */}
              <circle cx="28" cy="38" r="7" fill="#1E293B" />
              <circle cx="28" cy="38" r="3.5" fill="#E2E8F0" />
              <circle cx="78" cy="38" r="7" fill="#1E293B" />
              <circle cx="78" cy="38" r="3.5" fill="#E2E8F0" />
            </svg>
          </div>

          <span className="text-[10px] sm:text-[11px] font-dm font-bold text-gray-900 leading-tight mt-2">
            Rental Car Return Valet
          </span>
          <span className="text-[8px] text-gray-500 mt-0.5">
            Drop off right at terminal departure
          </span>

          {/* Book Action Button */}
          <div className="w-full max-w-[160px] mt-3 py-1.5 bg-[#DE4313] text-white rounded-xs text-[9px] font-bold uppercase tracking-wider text-center shadow-md">
            BOOK NOW
          </div>
        </div>

        {/* Screen Bottom Nav */}
        <div className="w-full pt-2 border-t border-gray-100 flex items-center justify-around text-[10px] text-gray-400">
          <span className="text-[#DE4313]">🏠</span>
          <span>📍</span>
          <span>👤</span>
        </div>

        {/* Bottom Home Indicator Bar */}
        <div className="w-20 h-1 bg-gray-400 rounded-full mx-auto mt-2 flex-shrink-0" />
      </div>
    </div>
  );
}
