"use client";

import React from "react";

/**
 * WorkDeviceMockup
 * High-fidelity, resolution-independent vector responsive devices illustration
 * matching the Figma Work hero mockup pixel-for-pixel:
 * - Desktop Monitor with stand (center back)
 * - Tablet in portrait (front left)
 * - Smartphone in portrait (front center)
 * - Laptop open (front right)
 */
export default function WorkDeviceMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 680 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[620px] drop-shadow-[0_16px_36px_rgba(0,0,0,0.65)]"
      >
        <defs>
          {/* Subtle device drop shadows */}
          <filter id="deviceShadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.55" />
          </filter>
          <filter id="laptopShadow" x="-10%" y="-10%" width="120%" height="125%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000000" floodOpacity="0.6" />
          </filter>
          <filter id="phoneShadow" x="-15%" y="-10%" width="130%" height="125%" filterUnits="userSpaceOnUse">
            <feDropShadow dx="-4" dy="8" stdDeviation="8" floodColor="#000000" floodOpacity="0.65" />
          </filter>

          {/* Screen gradients */}
          <linearGradient id="standGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>
          <linearGradient id="laptopBaseGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#94A3B8" />
          </linearGradient>
        </defs>

        {/* ════════════════════════════════════════════════════════════
            1. DESKTOP MONITOR (Center Back)
            ════════════════════════════════════════════════════════════ */}
        <g id="desktop-monitor" filter="url(#deviceShadow)">
          {/* Monitor Stand Base & Neck */}
          <path
            d="M320 320 L310 390 L260 405 L420 405 L370 390 L360 320 Z"
            fill="url(#standGrad)"
            opacity="0.95"
          />
          {/* Monitor Outer Frame / Bezel */}
          <rect
            x="190"
            y="55"
            width="410"
            height="268"
            rx="12"
            fill="#1E232F"
            stroke="#475569"
            strokeWidth="3"
          />
          {/* Monitor Screen Glass Area */}
          <rect
            x="200"
            y="65"
            width="390"
            height="234"
            rx="4"
            fill="#FFFFFF"
          />
          {/* Screen Content: Top Violet Toolbar */}
          <rect x="200" y="65" width="390" height="24" fill="#8E44AD" />
          <rect x="215" y="73" width="70" height="8" rx="4" fill="#FFFFFF" opacity="0.85" />
          <rect x="540" y="73" width="36" height="8" rx="4" fill="#FFFFFF" opacity="0.6" />

          {/* Screen Content: Sky Blue Hero Banner */}
          <rect x="200" y="89" width="390" height="74" fill="#3498DB" />
          <rect x="220" y="106" width="130" height="12" rx="3" fill="#FFFFFF" opacity="0.9" />
          <rect x="220" y="125" width="85" height="8" rx="2" fill="#FFFFFF" opacity="0.75" />
          <rect x="220" y="139" width="45" height="12" rx="3" fill="#E67E22" />

          {/* Screen Content: 3 Feature Cards (Orange, Red, Green) */}
          {/* Card 1: Orange */}
          <rect x="220" y="174" width="72" height="52" rx="4" fill="#E67E22" />
          <rect x="228" y="208" width="56" height="5" rx="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="228" y="217" width="40" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />

          {/* Card 2: Crimson Red */}
          <rect x="302" y="174" width="72" height="52" rx="4" fill="#C0392B" />
          <rect x="310" y="208" width="56" height="5" rx="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="310" y="217" width="40" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />

          {/* Card 3: Emerald Green */}
          <rect x="384" y="174" width="72" height="52" rx="4" fill="#27AE60" />
          <rect x="392" y="208" width="56" height="5" rx="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="392" y="217" width="40" height="4" rx="2" fill="#FFFFFF" opacity="0.7" />

          {/* Wireframe Text Lines below */}
          <rect x="220" y="238" width="236" height="4" rx="2" fill="#CBD5E1" />
          <rect x="220" y="247" width="210" height="4" rx="2" fill="#CBD5E1" />
          <rect x="220" y="256" width="170" height="4" rx="2" fill="#CBD5E1" />
          <rect x="220" y="265" width="236" height="4" rx="2" fill="#CBD5E1" />

          {/* Monitor Bottom Chin & Logo Dot */}
          <rect x="200" y="299" width="390" height="24" fill="#0F172A" />
          <circle cx="395" cy="311" r="3" fill="#64748B" />
        </g>

        {/* ════════════════════════════════════════════════════════════
            2. TABLET (Front Left, Portrait)
            ════════════════════════════════════════════════════════════ */}
        <g id="tablet" filter="url(#deviceShadow)">
          {/* Tablet Outer Body */}
          <rect
            x="135"
            y="190"
            width="120"
            height="180"
            rx="12"
            fill="#1E232F"
            stroke="#475569"
            strokeWidth="2.5"
          />
          {/* Camera Dot */}
          <circle cx="195" cy="197" r="1.8" fill="#64748B" />
          {/* Screen */}
          <rect
            x="143"
            y="204"
            width="104"
            height="154"
            rx="3"
            fill="#FFFFFF"
          />
          {/* Tablet Content: Purple Top Bar */}
          <rect x="143" y="204" width="104" height="12" fill="#8E44AD" />
          {/* Blue Hero Banner */}
          <rect x="143" y="216" width="104" height="34" fill="#3498DB" />
          <rect x="150" y="224" width="46" height="5" rx="1.5" fill="#FFFFFF" opacity="0.9" />
          <rect x="150" y="233" width="30" height="4" rx="1" fill="#FFFFFF" opacity="0.75" />

          {/* Stacked Cards */}
          <rect x="149" y="256" width="42" height="30" rx="3" fill="#E67E22" />
          <rect x="196" y="256" width="42" height="30" rx="3" fill="#C0392B" />

          {/* Wireframe lines */}
          <rect x="149" y="294" width="89" height="3" rx="1" fill="#CBD5E1" />
          <rect x="149" y="301" width="76" height="3" rx="1" fill="#CBD5E1" />
          <rect x="149" y="308" width="82" height="3" rx="1" fill="#CBD5E1" />
          <rect x="149" y="315" width="60" height="3" rx="1" fill="#CBD5E1" />
          <rect x="149" y="322" width="89" height="3" rx="1" fill="#CBD5E1" />
          <rect x="149" y="329" width="70" height="3" rx="1" fill="#CBD5E1" />
        </g>

        {/* ════════════════════════════════════════════════════════════
            3. SMARTPHONE (Front Center, Portrait)
            ════════════════════════════════════════════════════════════ */}
        <g id="smartphone" filter="url(#phoneShadow)">
          {/* Phone Body */}
          <rect
            x="222"
            y="280"
            width="66"
            height="124"
            rx="10"
            fill="#1E232F"
            stroke="#475569"
            strokeWidth="2.5"
          />
          {/* Speaker Slit & Front Camera */}
          <rect x="246" y="285" width="18" height="2" rx="1" fill="#64748B" />
          {/* Screen */}
          <rect
            x="227"
            y="292"
            width="56"
            height="98"
            rx="3"
            fill="#FFFFFF"
          />
          {/* Phone Content: Top Bar */}
          <rect x="227" y="292" width="56" height="8" fill="#8E44AD" />
          {/* Blue Hero */}
          <rect x="227" y="300" width="56" height="26" fill="#3498DB" />
          <rect x="232" y="307" width="28" height="4" rx="1" fill="#FFFFFF" opacity="0.9" />
          <rect x="232" y="314" width="18" height="3" rx="1" fill="#FFFFFF" opacity="0.75" />

          {/* Orange Feature Card */}
          <rect x="232" y="331" width="46" height="26" rx="3" fill="#E67E22" />
          <rect x="236" y="348" width="36" height="3" rx="1" fill="#FFFFFF" opacity="0.9" />

          {/* Wireframe lines */}
          <rect x="232" y="362" width="46" height="2.5" rx="1" fill="#CBD5E1" />
          <rect x="232" y="367" width="38" height="2.5" rx="1" fill="#CBD5E1" />
          <rect x="232" y="372" width="42" height="2.5" rx="1" fill="#CBD5E1" />

          {/* Home Indicator / Chin */}
          <circle cx="255" cy="396" r="3" fill="#334155" />
        </g>

        {/* ════════════════════════════════════════════════════════════
            4. LAPTOP (Front Right, Open Display)
            ════════════════════════════════════════════════════════════ */}
        <g id="laptop" filter="url(#laptopShadow)">
          {/* Laptop Lid Screen */}
          <rect
            x="385"
            y="200"
            width="220"
            height="148"
            rx="8"
            fill="#1E232F"
            stroke="#475569"
            strokeWidth="2.5"
          />
          {/* Camera */}
          <circle cx="495" cy="205" r="1.5" fill="#64748B" />
          {/* Screen Content Area */}
          <rect
            x="393"
            y="211"
            width="204"
            height="128"
            rx="2"
            fill="#FFFFFF"
          />
          {/* Top Bar */}
          <rect x="393" y="211" width="204" height="12" fill="#8E44AD" />
          {/* Blue Hero Banner */}
          <rect x="393" y="223" width="204" height="42" fill="#3498DB" />
          <rect x="405" y="233" width="75" height="7" rx="2" fill="#FFFFFF" opacity="0.9" />
          <rect x="405" y="244" width="50" height="5" rx="1.5" fill="#FFFFFF" opacity="0.75" />

          {/* 3 Content Cards */}
          <rect x="405" y="271" width="44" height="32" rx="3" fill="#E67E22" />
          <rect x="455" y="271" width="44" height="32" rx="3" fill="#C0392B" />
          <rect x="505" y="271" width="44" height="32" rx="3" fill="#27AE60" />

          {/* Wireframe lines below */}
          <rect x="405" y="310" width="144" height="3" rx="1" fill="#CBD5E1" />
          <rect x="405" y="316" width="128" height="3" rx="1" fill="#CBD5E1" />
          <rect x="405" y="322" width="105" height="3" rx="1" fill="#CBD5E1" />

          {/* Laptop Base (Keyboard Deck) */}
          <path
            d="M365 348 L625 348 L608 358 L382 358 Z"
            fill="url(#laptopBaseGrad)"
            stroke="#64748B"
            strokeWidth="1.5"
          />
          {/* Trackpad Notch */}
          <rect x="475" y="348.5" width="40" height="2" rx="1" fill="#475569" />
          {/* Bottom Lip */}
          <rect x="365" y="357" width="260" height="3" rx="1" fill="#64748B" />
        </g>
      </svg>
    </div>
  );
}
