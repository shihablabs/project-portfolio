"use client";

import React from "react";

/**
 * MarketingMonitorMockup
 * Vector illustration of iMac monitor displaying video player, popping email newsletter envelope,
 * floating social media icons (FB, IG, TikTok), roll-up banner stand, archery target bullseye,
 * and analytics tablet.
 * Matches Screenshot 2 for Print & Digital Marketing hero pixel-for-pixel.
 */
export default function MarketingMonitorMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[560px] mx-auto select-none flex flex-col items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 620 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
      >
        <defs>
          {/* Metallic stand gradient */}
          <linearGradient id="mktStand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Orange envelope gradient */}
          <linearGradient id="envGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFA41B" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>

          {/* Instagram gradient */}
          <linearGradient id="igGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#833AB4" />
            <stop offset="50%" stopColor="#FD1D1D" />
            <stop offset="100%" stopColor="#FCB045" />
          </linearGradient>

          {/* Rollup banner gradients */}
          <linearGradient id="bannerStandGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>

          {/* Tablet screen gradient */}
          <linearGradient id="tabletGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0B132B" />
            <stop offset="100%" stopColor="#1C2541" />
          </linearGradient>

          {/* Cable gradient */}
          <linearGradient id="cableGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FEC163" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>

          {/* Gold star gradient */}
          <linearGradient id="starGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFEA20" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
        </defs>

        {/* ── Orange Connecting Wire to Tablet ── */}
        <path
          d="M340 330 C300 370, 220 380, 180 340 C170 330, 160 350, 150 360"
          stroke="url(#cableGrad)"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />

        {/* ── iMac Stand Neck & Base ── */}
        <path
          d="M295 300 L285 365 L230 382 L390 382 L335 365 L325 300 Z"
          fill="url(#mktStand)"
        />
        <rect x="228" y="380" width="164" height="4" rx="2" fill="#64748B" />

        {/* ── iMac Monitor Outer Frame ── */}
        <rect
          x="100"
          y="35"
          width="420"
          height="265"
          rx="12"
          fill="#1E232F"
          stroke="#475569"
          strokeWidth="2.5"
        />

        {/* ── Screen Glass Area (Clean White Canvas) ── */}
        <rect x="110" y="45" width="400" height="225" rx="4" fill="#FFFFFF" />

        {/* Screen Header Bar with Traffic Lights */}
        <rect x="110" y="45" width="400" height="20" fill="#F1F5F9" />
        <circle cx="124" cy="55" r="3.5" fill="#EF4444" />
        <circle cx="134" cy="55" r="3.5" fill="#F59E0B" />
        <circle cx="144" cy="55" r="3.5" fill="#10B981" />

        {/* ── Screen Content: Video Player Card ── */}
        <g id="video-player">
          {/* Video card container */}
          <rect
            x="130"
            y="75"
            width="230"
            height="135"
            rx="6"
            fill="#1E293B"
            stroke="#E2E8F0"
            strokeWidth="1.5"
          />
          {/* Inner video frame */}
          <rect x="135" y="80" width="220" height="105" rx="4" fill="#334155" />
          
          {/* Red YouTube / Video Play Button */}
          <rect
            x="220"
            y="112"
            width="50"
            height="34"
            rx="8"
            fill="#DE4313"
          />
          <path
            d="M241 123 L255 129 L241 135 Z"
            fill="#FFFFFF"
          />

          {/* Video Player Progress / Controls Bar */}
          <rect x="140" y="194" width="210" height="4" rx="2" fill="#64748B" />
          <rect x="140" y="194" width="85" height="4" rx="2" fill="#DE4313" />
          <circle cx="225" cy="196" r="4" fill="#FFFFFF" stroke="#DE4313" strokeWidth="1.5" />
        </g>

        {/* ── Popping Orange Email Newsletter Envelope ── */}
        <g id="email-envelope" className="filter drop-shadow-[0_8px_16px_rgba(222,67,19,0.4)]">
          {/* Email Paper document popping out */}
          <rect
            x="235"
            y="160"
            width="140"
            height="95"
            rx="4"
            fill="#FFFFFF"
            stroke="#CBD5E1"
            strokeWidth="1"
          />
          {/* Document header badge */}
          <rect x="245" y="168" width="40" height="7" rx="2" fill="#0EA5E9" />
          {/* Document text lines */}
          <rect x="245" y="180" width="100" height="4" rx="1.5" fill="#94A3B8" />
          <rect x="245" y="188" width="120" height="4" rx="1.5" fill="#CBD5E1" />
          <rect x="245" y="196" width="90" height="4" rx="1.5" fill="#CBD5E1" />

          {/* Envelope Open Flap Top (triangle pointing up behind) */}
          <path
            d="M225 210 L305 165 L385 210 Z"
            fill="#FFA41B"
            opacity="0.85"
          />

          {/* Envelope Base Body */}
          <rect
            x="225"
            y="205"
            width="160"
            height="85"
            rx="5"
            fill="url(#envGrad)"
            stroke="#DE4313"
            strokeWidth="1.5"
          />

          {/* Envelope Front Fold Lines */}
          <path
            d="M225 205 L305 255 L385 205"
            stroke="#FFD580"
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M225 290 L285 240 M385 290 L325 240"
            stroke="#C0390F"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* ── Floating Social Media Icons & Stars ── */}
        {/* Facebook Icon */}
        <g id="social-fb" transform="translate(190, 20)">
          <circle cx="16" cy="16" r="16" fill="#1877F2" filter="drop-shadow(0 4px 8px rgba(24,119,242,0.4))" />
          <path
            d="M18.5 13H16.5C15.5 13 15 13.5 15 14.5V16H18.5L18 19.5H15V29H11.5V19.5H9V16H11.5V13.8C11.5 11.2 13 9.5 16 9.5C17.2 9.5 18 9.7 18.5 9.9V13Z"
            fill="#FFFFFF"
          />
        </g>

        {/* Instagram Icon */}
        <g id="social-ig" transform="translate(235, 10)">
          <circle cx="17" cy="17" r="17" fill="url(#igGrad)" filter="drop-shadow(0 4px 8px rgba(253,29,29,0.4))" />
          {/* Camera outline */}
          <rect x="8.5" y="8.5" width="17" height="17" rx="5" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="17" cy="17" r="4.2" fill="none" stroke="#FFFFFF" strokeWidth="2" />
          <circle cx="21.5" cy="12.5" r="1.2" fill="#FFFFFF" />
        </g>

        {/* TikTok Icon */}
        <g id="social-tiktok" transform="translate(285, 22)">
          <circle cx="15" cy="15" r="15" fill="#010101" stroke="#222" strokeWidth="1" filter="drop-shadow(0 4px 8px rgba(0,0,0,0.5))" />
          {/* Note glyph */}
          <path
            d="M17 9.5C17.8 11.2 19.5 12.2 21.5 12.3V14.8C19.9 14.7 18.3 14.1 17 13.1V18.2C17 21 14.8 23 12 23C9.2 23 7 20.8 7 18C7 15.3 9.1 13.1 11.8 13V15.6C10.5 15.7 9.5 16.8 9.5 18C9.5 19.4 10.6 20.5 12 20.5C13.4 20.5 14.5 19.4 14.5 18V9.5H17Z"
            fill="#00F2FE"
          />
          <path
            d="M16.5 9C17.3 10.7 19 11.7 21 11.8V13.8C19.6 13.7 18.2 13.1 17 12.3V17.5C17 20.2 14.8 22 12 22C9.5 22 7.5 20.1 7.5 17.6C7.5 15.1 9.5 13.1 12 13V15.2C10.8 15.3 9.8 16.3 9.8 17.5C9.8 18.7 10.8 19.8 12 19.8C13.2 19.8 14.2 18.7 14.2 17.5V9H16.5Z"
            fill="#FE2C55"
          />
        </g>

        {/* Floating Stars */}
        <path d="M180 18 L182 23 L187 25 L182 27 L180 32 L178 27 L173 25 L178 23 Z" fill="url(#starGrad)" />
        <path d="M280 12 L281.5 15.5 L285 17 L281.5 18.5 L280 22 L278.5 18.5 L275 17 L278.5 15.5 Z" fill="url(#starGrad)" />
        <path d="M325 35 L326.5 38.5 L330 40 L326.5 41.5 L325 45 L323.5 41.5 L320 40 L323.5 38.5 Z" fill="url(#starGrad)" />

        {/* ── Roll-up Exhibition Banner Stand (Right Side) ── */}
        <g id="rollup-banner" transform="translate(445, 90)">
          {/* Top Hanging Bar */}
          <rect x="0" y="0" width="55" height="5" rx="2" fill="url(#bannerStandGrad)" />

          {/* Banner Graphic Canvas */}
          <rect x="3" y="5" width="49" height="150" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="0.8" />
          
          {/* Banner Design Content */}
          {/* Top green section */}
          <rect x="5" y="8" width="45" height="38" fill="#84CC16" rx="2" opacity="0.85" />
          {/* Graphic shapes inside banner */}
          <circle cx="27" cy="27" r="10" fill="#65A30D" opacity="0.6" />
          
          {/* Body text lines in banner */}
          <rect x="8" y="52" width="39" height="3" rx="1" fill="#64748B" />
          <rect x="8" y="58" width="30" height="2" rx="1" fill="#94A3B8" />
          <rect x="8" y="63" width="35" height="2" rx="1" fill="#94A3B8" />
          <rect x="8" y="68" width="28" height="2" rx="1" fill="#94A3B8" />

          {/* Middle teal block */}
          <rect x="8" y="76" width="39" height="24" rx="2" fill="#0EA5E9" opacity="0.3" />
          <rect x="12" y="82" width="20" height="2.5" rx="1" fill="#0284C7" />
          <rect x="12" y="87" width="30" height="2" rx="1" fill="#0284C7" opacity="0.7" />

          {/* Lower text lines */}
          <rect x="8" y="106" width="39" height="2" rx="1" fill="#CBD5E1" />
          <rect x="8" y="111" width="32" height="2" rx="1" fill="#CBD5E1" />
          <rect x="8" y="116" width="36" height="2" rx="1" fill="#CBD5E1" />

          {/* Rollup Aluminum Base Stand */}
          <path
            d="M-4 155 L59 155 L56 168 L-1 168 Z"
            fill="url(#bannerStandGrad)"
            stroke="#64748B"
            strokeWidth="1"
          />
          {/* Support Feet */}
          <rect x="-6" y="167" width="16" height="3" rx="1" fill="#475569" />
          <rect x="45" y="167" width="16" height="3" rx="1" fill="#475569" />
        </g>

        {/* ── Archery Target Bullseye (Bottom Right) ── */}
        <g id="bullseye-target" transform="translate(485, 300)">
          {/* Concentric rings */}
          <circle cx="28" cy="28" r="28" fill="#1E293B" stroke="#475569" strokeWidth="1.5" />
          <circle cx="28" cy="28" r="23" fill="#3B82F6" />
          <circle cx="28" cy="28" r="17" fill="#EF4444" />
          <circle cx="28" cy="28" r="11" fill="#FFFFFF" />
          <circle cx="28" cy="28" r="6" fill="#FBBF24" />
          <circle cx="28" cy="28" r="2" fill="#DE4313" />

          {/* Dart / Arrow in center */}
          <line x1="28" y1="28" x2="48" y2="12" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M48 12 L43 14 L46 17 Z" fill="#DE4313" />
        </g>

        {/* ── Tablet with Analytics Graphs (Bottom Left) ── */}
        <g id="analytics-tablet" transform="translate(45, 290)">
          {/* Tablet Frame */}
          <rect
            x="0"
            y="0"
            width="145"
            height="95"
            rx="8"
            fill="#1E293B"
            stroke="#475569"
            strokeWidth="2"
            filter="drop-shadow(0 10px 20px rgba(0,0,0,0.6))"
          />
          {/* Tablet Glass Screen */}
          <rect x="5" y="5" width="135" height="85" rx="4" fill="url(#tabletGrad)" />

          {/* Tablet Camera / Home Sensor */}
          <circle cx="72.5" cy="2.5" r="1" fill="#64748B" />

          {/* Screen Content: Bar Chart & Line Chart */}
          {/* Grid lines */}
          <line x1="12" y1="22" x2="132" y2="22" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="12" y1="42" x2="132" y2="42" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="12" y1="62" x2="132" y2="62" stroke="#334155" strokeWidth="0.8" strokeDasharray="2 2" />
          <line x1="12" y1="78" x2="132" y2="78" stroke="#475569" strokeWidth="1" />

          {/* Bar Chart Columns */}
          <rect x="20" y="48" width="9" height="30" rx="1.5" fill="#10B981" />
          <rect x="36" y="32" width="9" height="46" rx="1.5" fill="#3B82F6" />
          <rect x="52" y="40" width="9" height="38" rx="1.5" fill="#F59E0B" />
          <rect x="68" y="24" width="9" height="54" rx="1.5" fill="#DE4313" />
          <rect x="84" y="36" width="9" height="42" rx="1.5" fill="#8B5CF6" />
          <rect x="100" y="18" width="9" height="60" rx="1.5" fill="#06B6D4" />

          {/* Upward Growth Trend Line */}
          <path
            d="M18 66 L38 48 L56 52 L72 30 L88 38 L104 18 L124 14"
            fill="none"
            stroke="#FEC163"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="124" cy="14" r="3" fill="#DE4313" stroke="#FFFFFF" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}
