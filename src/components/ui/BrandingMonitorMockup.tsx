"use client";

import React from "react";

/**
 * BrandingMonitorMockup
 * Vector illustration of iMac monitor displaying the 3D crystal origami branding logo,
 * geometric wireframes, and color wheel palette badge
 * matching Figma screenshot for Logo & Branding hero pixel-for-pixel.
 */
export default function BrandingMonitorMockup({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`relative w-full max-w-[560px] mx-auto select-none flex flex-col items-center justify-center ${className}`}
    >
      <svg
        viewBox="0 0 600 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)]"
      >
        <defs>
          <linearGradient id="brandStand" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#94A3B8" />
            <stop offset="50%" stopColor="#E2E8F0" />
            <stop offset="100%" stopColor="#64748B" />
          </linearGradient>

          {/* Facet gradients for 3D origami logo */}
          <linearGradient id="polyRed" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FF4B4B" />
            <stop offset="100%" stopColor="#9B002B" />
          </linearGradient>
          <linearGradient id="polyOrange" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFA41B" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>
          <linearGradient id="polyYellow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFEA20" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>
          <linearGradient id="polyGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22C55E" />
            <stop offset="100%" stopColor="#15803D" />
          </linearGradient>
          <linearGradient id="polyCyan" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#0284C7" />
          </linearGradient>
          <linearGradient id="polyPurple" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>
          <linearGradient id="polyPink" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#BE185D" />
          </linearGradient>
        </defs>

        {/* ── iMac Stand Neck & Base ── */}
        <path
          d="M285 305 L275 375 L220 392 L380 392 L325 375 L315 305 Z"
          fill="url(#brandStand)"
        />
        <rect x="218" y="390" width="164" height="4" rx="2" fill="#64748B" />

        {/* ── Outer Monitor Bezel ── */}
        <rect
          x="40"
          y="25"
          width="520"
          height="295"
          rx="14"
          fill="#1E232F"
          stroke="#475569"
          strokeWidth="3"
        />

        {/* ── Screen Glass Area (Clean White Canvas) ── */}
        <rect x="50" y="35" width="500" height="255" rx="4" fill="#FFFFFF" />

        {/* Background Grid Lines (Subtle Vector Grid) */}
        <g opacity="0.12" stroke="#475569" strokeWidth="0.8">
          <line x1="50" y1="75" x2="550" y2="75" strokeDasharray="3 3" />
          <line x1="50" y1="115" x2="550" y2="115" strokeDasharray="3 3" />
          <line x1="50" y1="155" x2="550" y2="155" strokeDasharray="3 3" />
          <line x1="50" y1="195" x2="550" y2="195" strokeDasharray="3 3" />
          <line x1="50" y1="235" x2="550" y2="235" strokeDasharray="3 3" />

          <line x1="110" y1="35" x2="110" y2="290" strokeDasharray="3 3" />
          <line x1="190" y1="35" x2="190" y2="290" strokeDasharray="3 3" />
          <line x1="270" y1="35" x2="270" y2="290" strokeDasharray="3 3" />
          <line x1="350" y1="35" x2="350" y2="290" strokeDasharray="3 3" />
          <line x1="430" y1="35" x2="430" y2="290" strokeDasharray="3 3" />
          <line x1="510" y1="35" x2="510" y2="290" strokeDasharray="3 3" />
        </g>

        {/* Left Side Small Wireframe Origami Sketches */}
        <g opacity="0.35" transform="translate(90, 60) scale(0.6)" stroke="#0284C7" strokeWidth="1.5" fill="none">
          <polygon points="50,15 85,75 15,75" />
          <polygon points="50,15 15,75 35,95" />
          <polygon points="50,15 85,75 65,95" />
          <line x1="50" y1="15" x2="50" y2="95" />
        </g>
        <g opacity="0.35" transform="translate(90, 160) scale(0.6)" stroke="#F59E0B" strokeWidth="1.5" fill="none">
          <polygon points="50,15 85,75 15,75" />
          <polygon points="50,15 15,75 35,95" />
          <polygon points="50,15 85,75 65,95" />
          <line x1="50" y1="15" x2="50" y2="95" />
        </g>

        {/* Right Side Small Wireframe Sketches */}
        <g opacity="0.35" transform="translate(430, 60) scale(0.6)" stroke="#10B981" strokeWidth="1.5" fill="none">
          <polygon points="50,15 85,75 15,75" />
          <polygon points="50,15 15,75 35,95" />
          <polygon points="50,15 85,75 65,95" />
          <line x1="50" y1="15" x2="50" y2="95" />
        </g>
        <g opacity="0.35" transform="translate(430, 160) scale(0.6)" stroke="#8B5CF6" strokeWidth="1.5" fill="none">
          <polygon points="50,15 85,75 15,75" />
          <polygon points="50,15 15,75 35,95" />
          <polygon points="50,15 85,75 65,95" />
          <line x1="50" y1="15" x2="50" y2="95" />
        </g>

        {/* ── Center 3D Colorful Crystal Origami Polygon Logo ── */}
        <g transform="translate(240, 85) scale(1.2)" drop-shadow="0 6px 16px rgba(0,0,0,0.25)">
          {/* Top Peak Pyramid */}
          <polygon points="50,0 20,40 50,30" fill="url(#polyPink)" />
          <polygon points="50,0 80,40 50,30" fill="url(#polyRed)" />

          {/* Left Wing Facets */}
          <polygon points="20,40 0,65 30,70" fill="url(#polyPurple)" />
          <polygon points="20,40 50,30 30,70" fill="url(#polyPink)" />
          <polygon points="0,65 15,95 40,85" fill="url(#polyCyan)" />
          <polygon points="0,65 30,70 40,85" fill="url(#polyPurple)" />

          {/* Right Wing Facets */}
          <polygon points="80,40 100,65 70,70" fill="url(#polyOrange)" />
          <polygon points="80,40 50,30 70,70" fill="url(#polyRed)" />
          <polygon points="100,65 85,95 60,85" fill="url(#polyYellow)" />
          <polygon points="100,65 70,70 60,85" fill="url(#polyOrange)" />

          {/* Center & Bottom Core Facets */}
          <polygon points="50,30 30,70 50,60" fill="url(#polyPurple)" />
          <polygon points="50,30 70,70 50,60" fill="url(#polyOrange)" />
          <polygon points="30,70 50,60 50,90" fill="url(#polyCyan)" />
          <polygon points="70,70 50,60 50,90" fill="url(#polyGreen)" />
          <polygon points="30,70 40,85 50,90" fill="url(#polyCyan)" />
          <polygon points="70,70 60,85 50,90" fill="url(#polyGreen)" />
          <polygon points="50,90 40,85 50,105" fill="url(#polyGreen)" />
          <polygon points="50,90 60,85 50,105" fill="url(#polyYellow)" />
        </g>

        {/* ── Bottom Monitor Chin & Apple Logo ── */}
        <rect x="50" y="290" width="500" height="28" fill="#E2E8F0" />
        <circle cx="300" cy="303" r="3.5" fill="#64748B" />

        {/* ── Color Palette Swatch Badge (Bottom-Left of Monitor Base) ── */}
        <g transform="translate(68, 290)" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.35))">
          <rect x="0" y="0" width="38" height="38" rx="6" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Circular Color Wheel Disc */}
          <circle cx="19" cy="19" r="14" fill="#E2E8F0" />
          {/* 6 Color Segments */}
          <path d="M19,19 L19,5 A14,14 0 0,1 31.1,12 L19,19 Z" fill="#EF4444" />
          <path d="M19,19 L31.1,12 A14,14 0 0,1 31.1,26 L19,19 Z" fill="#F59E0B" />
          <path d="M19,19 L31.1,26 A14,14 0 0,1 19,33 L19,19 Z" fill="#10B981" />
          <path d="M19,19 L19,33 A14,14 0 0,1 6.9,26 L19,19 Z" fill="#06B6D4" />
          <path d="M19,19 L6.9,26 A14,14 0 0,1 6.9,12 L19,19 Z" fill="#3B82F6" />
          <path d="M19,19 L6.9,12 A14,14 0 0,1 19,5 L19,19 Z" fill="#A855F7" />
          {/* Inner White Hole */}
          <circle cx="19" cy="19" r="4.5" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
}
