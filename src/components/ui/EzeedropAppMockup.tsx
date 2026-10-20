"use client";

import React from "react";

/**
 * EzeedropAppMockup
 * 3-smartphone responsive mockup displaying the Ezeedrop Airport Rental Car Return Valet App
 * matching the user's Figma screenshot pixel-for-pixel.
 */
export default function EzeedropAppMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[580px] mx-auto select-none flex items-center justify-center gap-2 sm:gap-4 px-2 py-3 ${className}`}
    >
      {/* ── PHONE 1 (LEFT): Booking & Intro Screen ── */}
      <div className="relative w-1/3 max-w-[170px] aspect-[9/18] bg-[#F8FAFC] rounded-[18px] sm:rounded-[24px] border-[3px] sm:border-[4px] border-[#CBD5E1] shadow-[0_12px_30px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between p-2 sm:p-2.5">
        {/* Phone Speaker & Camera Notch */}
        <div className="w-10 h-1 bg-[#94A3B8] rounded-full mx-auto mb-1 flex-shrink-0" />

        {/* Screen Header */}
        <div className="w-full flex items-center justify-between text-[7px] text-gray-500 pb-1 border-b border-gray-200">
          <span className="font-bold text-gray-800">ezeedrop</span>
          <span>≡</span>
        </div>

        {/* Content Body */}
        <div className="my-auto flex flex-col items-center text-center py-1">
          {/* Car Graphic */}
          <div className="relative w-full h-14 sm:h-16 flex items-center justify-center">
            <svg viewBox="0 0 100 50" className="w-20 h-12" fill="none">
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

          <span className="text-[7.5px] sm:text-[8.5px] font-dm font-bold text-gray-900 leading-tight mt-1">
            Airport Rental Car Return
          </span>
          <span className="text-[6.5px] text-gray-500">
            Valet drop-off in seconds
          </span>

          {/* Book Action Button */}
          <div className="w-full mt-2 py-1 bg-[#DE4313] text-white rounded-xs text-[7px] font-bold uppercase tracking-wider text-center">
            BOOK VALET
          </div>
        </div>

        {/* Bottom Home Indicator */}
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-auto mt-1 flex-shrink-0" />
      </div>

      {/* ── PHONE 2 (CENTER): Live GPS Navigation & Terminal Route ── */}
      <div className="relative w-1/3 max-w-[170px] aspect-[9/18] bg-[#F1F5F9] rounded-[18px] sm:rounded-[24px] border-[3px] sm:border-[4px] border-[#CBD5E1] shadow-[0_16px_36px_rgba(0,0,0,0.7)] overflow-hidden flex flex-col justify-between p-2 sm:p-2.5 z-10 scale-105">
        {/* Phone Speaker Notch */}
        <div className="w-10 h-1 bg-[#94A3B8] rounded-full mx-auto mb-1 flex-shrink-0" />

        {/* Map Header */}
        <div className="w-full flex items-center justify-between text-[7px] text-gray-600 pb-1">
          <span className="font-bold text-gray-800">Terminal 2 Drop</span>
          <span className="text-[6px] text-emerald-600 font-bold">● LIVE</span>
        </div>

        {/* Map Canvas with Route */}
        <div className="relative w-full flex-1 bg-[#E2E8F0] rounded-xs overflow-hidden my-1 flex items-center justify-center">
          {/* Subtle Map Grid Lines */}
          <svg viewBox="0 0 100 120" className="w-full h-full" fill="none">
            {/* Roads */}
            <path d="M0 30 Q50 35 100 20" stroke="#CBD5E1" strokeWidth="8" />
            <path d="M30 0 Q40 60 50 120" stroke="#CBD5E1" strokeWidth="10" />
            <path d="M0 90 Q60 80 100 95" stroke="#CBD5E1" strokeWidth="6" />

            {/* Active GPS Route */}
            <path
              d="M32 15 Q40 50 65 75"
              stroke="#0284C7"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeDasharray="4 2"
            />

            {/* Car Marker */}
            <circle cx="32" cy="15" r="4.5" fill="#0284C7" />
            <circle cx="32" cy="15" r="2" fill="#FFFFFF" />

            {/* Airport Pin Marker */}
            <g transform="translate(65, 75)">
              <circle cx="0" cy="0" r="5" fill="#EF4444" />
              <circle cx="0" cy="0" r="2" fill="#FFFFFF" />
            </g>
          </svg>

          {/* Valet ETA Floating Card */}
          <div className="absolute bottom-1 inset-x-1 bg-white/95 backdrop-blur-xs p-1 rounded-xs shadow-xs text-left">
            <span className="block text-[6px] text-gray-500">Valet Agent</span>
            <span className="block text-[7px] font-bold text-gray-900 leading-none">
              John D. • Bay 4
            </span>
          </div>
        </div>

        {/* Bottom Home Indicator */}
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-auto mt-1 flex-shrink-0" />
      </div>

      {/* ── PHONE 3 (RIGHT): Car Returned Confirmation ── */}
      <div className="relative w-1/3 max-w-[170px] aspect-[9/18] bg-[#F8FAFC] rounded-[18px] sm:rounded-[24px] border-[3px] sm:border-[4px] border-[#CBD5E1] shadow-[0_12px_30px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col justify-between p-2 sm:p-2.5">
        {/* Phone Speaker Notch */}
        <div className="w-10 h-1 bg-[#94A3B8] rounded-full mx-auto mb-1 flex-shrink-0" />

        {/* Screen Header */}
        <div className="w-full flex items-center gap-1 text-[7px] text-gray-700 pb-1 border-b border-gray-200">
          <span>‹</span>
          <span className="font-bold">CAR RETURNED</span>
        </div>

        {/* Confirmation Content */}
        <div className="my-auto flex flex-col items-center text-center py-1">
          {/* Green Checkmark Circle */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md mb-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M5 13L9 17L19 7"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <span className="text-[7.5px] sm:text-[8.5px] font-dm font-bold text-gray-900 leading-tight">
            Inspection Passed
          </span>
          <span className="text-[6.5px] text-gray-500 mt-0.5">
            Key handed to Hertz Valet
          </span>

          {/* Vehicle Thumbnail Box */}
          <div className="w-full bg-[#E2E8F0] p-1.5 rounded-xs mt-2 border border-gray-300 flex items-center justify-around">
            <div className="text-left">
              <span className="block text-[6.5px] font-bold text-gray-800">
                Toyota RAV4
              </span>
              <span className="block text-[5.5px] text-gray-500">
                Plate: 7XYZ99
              </span>
            </div>
            <span className="text-[8px] text-emerald-600 font-bold">✓</span>
          </div>

          {/* Done Action Button */}
          <div className="w-full mt-2 py-1 bg-gray-900 text-white rounded-xs text-[7px] font-bold uppercase tracking-wider text-center">
            DONE
          </div>
        </div>

        {/* Bottom Home Indicator */}
        <div className="w-12 h-1 bg-gray-400 rounded-full mx-auto mt-1 flex-shrink-0" />
      </div>
    </div>
  );
}
