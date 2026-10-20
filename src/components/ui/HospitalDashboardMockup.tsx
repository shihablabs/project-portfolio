"use client";

import React from "react";

/**
 * HospitalDashboardMockup
 * Renders the clean iMac desktop monitor displaying the Hospital Management System dashboard
 * matching the Figma screenshot for Section 03 Softwares pixel-for-pixel.
 */
export default function HospitalDashboardMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[620px] mx-auto select-none flex flex-col items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 640 430"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_20px_45px_rgba(0,0,0,0.75)]"
      >
        <defs>
          <filter
            id="hospShadow"
            x="-10%"
            y="-10%"
            width="120%"
            height="125%"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="12"
              floodColor="#000000"
              floodOpacity="0.6"
            />
          </filter>

          <linearGradient id="hospStand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          <linearGradient id="kpiBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
        </defs>

        {/* ── Stand Neck & Base ── */}
        <path
          d="M305 320 L295 385 L240 400 L400 400 L345 385 L335 320 Z"
          fill="url(#hospStand)"
        />
        <rect x="238" y="398" width="164" height="4" rx="2" fill="#64748B" />

        {/* ── Outer Monitor Bezel ── */}
        <rect
          x="30"
          y="20"
          width="580"
          height="320"
          rx="14"
          fill="#1E232F"
          stroke="#475569"
          strokeWidth="3"
        />

        {/* ── Screen Area ── */}
        <rect x="40" y="30" width="560" height="278" rx="4" fill="#F8FAFC" />

        {/* Top Navbar */}
        <rect x="40" y="30" width="560" height="28" fill="#FFFFFF" />
        <line x1="40" y1="58" x2="600" y2="58" stroke="#E2E8F0" strokeWidth="1" />

        {/* Brand / Logo */}
        <circle cx="56" cy="44" r="6" fill="#0284C7" />
        <rect x="68" y="41" width="36" height="6" rx="2" fill="#0F172A" />

        {/* User Avatar */}
        <circle cx="582" cy="44" r="7" fill="#0284C7" />
        <circle cx="582" cy="42" r="3" fill="#FFFFFF" />
        <path d="M578 48 C578 45.5 586 45.5 586 48 Z" fill="#FFFFFF" />

        {/* ── Left Sidebar Navigation ── */}
        <rect x="40" y="58" width="80" height="250" fill="#FFFFFF" />
        <line x1="120" y1="58" x2="120" y2="308" stroke="#E2E8F0" strokeWidth="1" />

        {/* Sidebar menu items */}
        {[
          { y: 72, active: true },
          { y: 88, active: false },
          { y: 104, active: false },
          { y: 120, active: false },
          { y: 136, active: false },
          { y: 152, active: false },
          { y: 168, active: false },
          { y: 184, active: false },
        ].map((item, i) => (
          <g key={i}>
            {item.active && (
              <rect
                x="44"
                y={item.y - 4}
                width="72"
                height="14"
                rx="3"
                fill="#E0F2FE"
              />
            )}
            <rect
              x="52"
              y={item.y}
              width="6"
              height="6"
              rx="1.5"
              fill={item.active ? "#0284C7" : "#94A3B8"}
            />
            <rect
              x="64"
              y={item.y + 1}
              width="44"
              height="4"
              rx="1.5"
              fill={item.active ? "#0284C7" : "#64748B"}
            />
          </g>
        ))}

        {/* ── Main Dashboard Content Area ── */}
        {/* Row 1: KPI Stat Cards */}
        {[
          { x: 132, label: "Total OPD", val: "25" },
          { x: 248, label: "Appointments", val: "15/30" },
          { x: 364, label: "Total IPD", val: "120" },
          { x: 480, label: "Available Beds", val: "18/40" },
        ].map((card, idx) => (
          <g key={idx}>
            <rect
              x={card.x}
              y="68"
              width="106"
              height="38"
              rx="4"
              fill="url(#kpiBlue)"
            />
            <rect
              x={card.x + 8}
              y="76"
              width="50"
              height="4"
              rx="1"
              fill="#FFFFFF"
              opacity="0.8"
            />
            <rect
              x={card.x + 8}
              y="86"
              width="32"
              height="8"
              rx="1.5"
              fill="#FFFFFF"
              opacity="0.95"
            />
            <circle
              cx={card.x + 90}
              cy="87"
              r="8"
              fill="#FFFFFF"
              opacity="0.2"
            />
          </g>
        ))}

        {/* Row 2: Two Donut Analytics Cards */}
        {/* Card 1: Donut 1 */}
        <rect
          x="132"
          y="114"
          width="224"
          height="92"
          rx="5"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1"
        />
        <rect x="144" y="122" width="70" height="5" rx="1.5" fill="#334155" />
        {/* Donut chart 1 */}
        <circle
          cx="190"
          cy="162"
          r="26"
          stroke="#E2E8F0"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="190"
          cy="162"
          r="26"
          stroke="#0284C7"
          strokeWidth="10"
          strokeDasharray="90 163"
          strokeDashoffset="0"
          fill="none"
        />
        <circle
          cx="190"
          cy="162"
          r="26"
          stroke="#F97316"
          strokeWidth="10"
          strokeDasharray="40 163"
          strokeDashoffset="-90"
          fill="none"
        />
        <circle
          cx="190"
          cy="162"
          r="26"
          stroke="#EF4444"
          strokeWidth="10"
          strokeDasharray="25 163"
          strokeDashoffset="-130"
          fill="none"
        />
        {/* Legend */}
        <rect x="236" y="142" width="6" height="6" rx="1" fill="#0284C7" />
        <rect x="248" y="143" width="40" height="4" rx="1" fill="#64748B" />
        <rect x="236" y="156" width="6" height="6" rx="1" fill="#F97316" />
        <rect x="248" y="157" width="48" height="4" rx="1" fill="#64748B" />
        <rect x="236" y="170" width="6" height="6" rx="1" fill="#EF4444" />
        <rect x="248" y="171" width="36" height="4" rx="1" fill="#64748B" />

        {/* Card 2: Donut 2 */}
        <rect
          x="364"
          y="114"
          width="222"
          height="92"
          rx="5"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1"
        />
        <rect x="376" y="122" width="80" height="5" rx="1.5" fill="#334155" />
        {/* Donut chart 2 */}
        <circle
          cx="422"
          cy="162"
          r="26"
          stroke="#E2E8F0"
          strokeWidth="10"
          fill="none"
        />
        <circle
          cx="422"
          cy="162"
          r="26"
          stroke="#06B6D4"
          strokeWidth="10"
          strokeDasharray="75 163"
          strokeDashoffset="0"
          fill="none"
        />
        <circle
          cx="422"
          cy="162"
          r="26"
          stroke="#0284C7"
          strokeWidth="10"
          strokeDasharray="50 163"
          strokeDashoffset="-75"
          fill="none"
        />
        <circle
          cx="422"
          cy="162"
          r="26"
          stroke="#F59E0B"
          strokeWidth="10"
          strokeDasharray="30 163"
          strokeDashoffset="-125"
          fill="none"
        />
        {/* Legend */}
        <rect x="468" y="142" width="6" height="6" rx="1" fill="#06B6D4" />
        <rect x="480" y="143" width="46" height="4" rx="1" fill="#64748B" />
        <rect x="468" y="156" width="6" height="6" rx="1" fill="#0284C7" />
        <rect x="480" y="157" width="40" height="4" rx="1" fill="#64748B" />
        <rect x="468" y="170" width="6" height="6" rx="1" fill="#F59E0B" />
        <rect x="480" y="171" width="34" height="4" rx="1" fill="#64748B" />

        {/* Row 3: Analytics Bar Chart */}
        <rect
          x="132"
          y="214"
          width="454"
          height="86"
          rx="5"
          fill="#FFFFFF"
          stroke="#E2E8F0"
          strokeWidth="1"
        />
        <rect x="144" y="222" width="90" height="5" rx="1.5" fill="#334155" />
        {/* Bar chart lines & bars */}
        <line x1="144" y1="284" x2="570" y2="284" stroke="#E2E8F0" strokeWidth="1" />
        <line x1="144" y1="260" x2="570" y2="260" stroke="#F1F5F9" strokeWidth="1" />
        <line x1="144" y1="236" x2="570" y2="236" stroke="#F1F5F9" strokeWidth="1" />

        {/* Bars */}
        {[
          { x: 160, h: 36 },
          { x: 195, h: 22 },
          { x: 230, h: 42 },
          { x: 265, h: 18 },
          { x: 300, h: 30 },
          { x: 335, h: 48 },
          { x: 370, h: 26 },
          { x: 405, h: 38 },
          { x: 440, h: 44 },
          { x: 475, h: 28 },
          { x: 510, h: 34 },
          { x: 545, h: 40 },
        ].map((bar, i) => (
          <rect
            key={i}
            x={bar.x}
            y={284 - bar.h}
            width="12"
            height={bar.h}
            rx="2"
            fill="#0284C7"
          />
        ))}

        {/* ── Bottom Monitor Chin & Logo Dot ── */}
        <rect x="40" y="308" width="560" height="24" fill="#0F172A" />
        <circle cx="320" cy="320" r="3" fill="#64748B" />
      </svg>
    </div>
  );
}
