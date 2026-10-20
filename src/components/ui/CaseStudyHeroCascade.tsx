"use client";

import React from "react";

/**
 * CaseStudyHeroCascade
 * Symmetrical perspective cascade of 5 smartphone mockups
 * displaying the healthcare/wellness application UI screens,
 * matching the user's Figma screenshot of the Case Study hero pixel-for-pixel.
 */
export default function CaseStudyHeroCascade({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[780px] mx-auto select-none flex items-center justify-center py-6 sm:py-10 overflow-hidden ${className}`}
    >
      <div className="relative w-full h-[280px] sm:h-[360px] md:h-[400px] flex items-center justify-center">
        {/* ── PHONE 1 (OUTER LEFT) ── */}
        <div
          className="absolute z-10 w-[120px] sm:w-[155px] md:w-[175px] aspect-[9/18.5] bg-white rounded-[18px] sm:rounded-[24px] border-[3px] border-slate-300 shadow-[0_16px_36px_rgba(0,0,0,0.7)] p-1.5 sm:p-2 overflow-hidden flex flex-col justify-between transform -translate-x-[160px] sm:-translate-x-[220px] md:-translate-x-[250px] translate-y-6 sm:translate-y-8 -rotate-12 opacity-80 hover:opacity-100 transition-all duration-300"
        >
          <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto mb-1" />
          <div className="flex-1 bg-gradient-to-b from-[#E6FFFA] to-white rounded-xs p-1.5 flex flex-col justify-between text-left">
            <span className="font-bold text-[7px] text-[#0D9488]">Mood Tracker</span>
            <div className="flex justify-around text-[10px] my-1">
              <span>😊</span>
              <span>😌</span>
              <span>🌿</span>
            </div>
            <div className="w-full h-8 bg-[#CCFBF1] rounded-xs" />
          </div>
          <div className="w-8 h-0.5 bg-slate-400 rounded-full mx-auto mt-1" />
        </div>

        {/* ── PHONE 2 (INNER LEFT) ── */}
        <div
          className="absolute z-20 w-[130px] sm:w-[170px] md:w-[195px] aspect-[9/18.5] bg-white rounded-[20px] sm:rounded-[26px] border-[3px] border-slate-300 shadow-[0_20px_42px_rgba(0,0,0,0.75)] p-1.5 sm:p-2 overflow-hidden flex flex-col justify-between transform -translate-x-[85px] sm:-translate-x-[115px] md:-translate-x-[130px] translate-y-3 sm:translate-y-4 -rotate-6 transition-all duration-300"
        >
          <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-1" />
          <div className="flex-1 bg-[#F0FDFA] rounded-xs p-2 flex flex-col justify-between text-left border border-teal-100">
            <span className="font-bold text-[8px] text-[#0F766E]">Doctor Profile</span>
            <div className="flex items-center gap-1.5 my-1">
              <div className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-[8px] font-bold">
                Dr
              </div>
              <div className="text-[6.5px] leading-tight">
                <p className="font-bold text-gray-900">Dr. Ananya Sen</p>
                <p className="text-gray-500">Clinical Psychologist</p>
              </div>
            </div>
            <div className="w-full py-1 bg-[#0D9488] text-white text-center rounded-xs text-[6.5px] font-bold">
              Book Session
            </div>
          </div>
          <div className="w-10 h-0.5 bg-slate-400 rounded-full mx-auto mt-1" />
        </div>

        {/* ── PHONE 3 (CENTER - PROMINENT & TALLEST) ── */}
        <div
          className="absolute z-30 w-[145px] sm:w-[190px] md:w-[220px] aspect-[9/18.5] bg-white rounded-[22px] sm:rounded-[30px] border-[4px] border-slate-300 shadow-[0_25px_60px_rgba(0,0,0,0.85)] p-2 sm:p-2.5 overflow-hidden flex flex-col justify-between transform translate-x-0 translate-y-0 scale-105 transition-all duration-300"
        >
          <div className="w-12 h-1.5 bg-slate-400 rounded-full mx-auto mb-1.5" />
          <div className="flex-1 bg-gradient-to-b from-[#F0FDFA] via-white to-[#F0FDFA] rounded-xs p-2.5 flex flex-col justify-between text-left">
            <div>
              <div className="flex justify-between items-center text-[7px] text-gray-500 mb-1">
                <span className="font-bold text-[#0D9488] text-[8.5px]">MindCare</span>
                <span>🔔 ≡</span>
              </div>
              <span className="font-black text-[9px] sm:text-[10px] text-gray-900 block leading-tight">
                How are you feeling today?
              </span>
            </div>

            {/* Illustration */}
            <div className="w-full h-16 sm:h-20 bg-[#CCFBF1] rounded-xs flex items-center justify-center my-1">
              <span className="text-2xl sm:text-3xl">🧘‍♀️</span>
            </div>

            <div className="space-y-1">
              <span className="font-bold text-[7.5px] text-gray-800 block">
                Recommended Therapy
              </span>
              <div className="p-1.5 bg-white rounded-xs border border-teal-200 shadow-xs flex justify-between items-center text-[6.5px]">
                <span className="font-medium text-teal-900">Guided Meditation</span>
                <span className="text-teal-600 font-bold">15 Min ›</span>
              </div>
            </div>
          </div>
          <div className="w-12 h-1 bg-slate-400 rounded-full mx-auto mt-1.5" />
        </div>

        {/* ── PHONE 4 (INNER RIGHT) ── */}
        <div
          className="absolute z-20 w-[130px] sm:w-[170px] md:w-[195px] aspect-[9/18.5] bg-white rounded-[20px] sm:rounded-[26px] border-[3px] border-slate-300 shadow-[0_20px_42px_rgba(0,0,0,0.75)] p-1.5 sm:p-2 overflow-hidden flex flex-col justify-between transform translate-x-[85px] sm:translate-x-[115px] md:translate-x-[130px] translate-y-3 sm:translate-y-4 rotate-6 transition-all duration-300"
        >
          <div className="w-10 h-1 bg-slate-300 rounded-full mx-auto mb-1" />
          <div className="flex-1 bg-[#F0FDFA] rounded-xs p-2 flex flex-col justify-between text-left border border-teal-100">
            <span className="font-bold text-[8px] text-[#0F766E]">Live Chat Session</span>
            <div className="space-y-1 my-auto text-[6.5px]">
              <div className="bg-white p-1 rounded-xs shadow-xs text-gray-800">
                Welcome! Let&apos;s begin with deep breathing.
              </div>
              <div className="bg-[#0D9488] p-1 rounded-xs text-white ml-auto max-w-[80%] text-right">
                Feeling much calmer now.
              </div>
            </div>
            <div className="h-4 bg-white rounded-xs border border-gray-200" />
          </div>
          <div className="w-10 h-0.5 bg-slate-400 rounded-full mx-auto mt-1" />
        </div>

        {/* ── PHONE 5 (OUTER RIGHT) ── */}
        <div
          className="absolute z-10 w-[120px] sm:w-[155px] md:w-[175px] aspect-[9/18.5] bg-white rounded-[18px] sm:rounded-[24px] border-[3px] border-slate-300 shadow-[0_16px_36px_rgba(0,0,0,0.7)] p-1.5 sm:p-2 overflow-hidden flex flex-col justify-between transform translate-x-[160px] sm:translate-x-[220px] md:translate-x-[250px] translate-y-6 sm:translate-y-8 rotate-12 opacity-80 hover:opacity-100 transition-all duration-300"
        >
          <div className="w-8 h-1 bg-slate-300 rounded-full mx-auto mb-1" />
          <div className="flex-1 bg-gradient-to-b from-[#E6FFFA] to-white rounded-xs p-1.5 flex flex-col justify-between text-left">
            <span className="font-bold text-[7px] text-[#0D9488]">Progress Stats</span>
            <div className="flex items-end justify-around h-12 py-1">
              <div className="w-2 h-6 bg-teal-400 rounded-t-xs" />
              <div className="w-2 h-8 bg-teal-500 rounded-t-xs" />
              <div className="w-2 h-11 bg-teal-600 rounded-t-xs" />
              <div className="w-2 h-10 bg-teal-500 rounded-t-xs" />
            </div>
            <span className="text-[6px] text-teal-800 font-bold">7-day streak!</span>
          </div>
          <div className="w-8 h-0.5 bg-slate-400 rounded-full mx-auto mt-1" />
        </div>
      </div>
    </div>
  );
}
