"use client";

import React, { useState, useRef, useEffect } from "react";

interface FilterOption {
  label: string;
  value: string;
}

const CATEGORIES: FilterOption[] = [
  { label: "All Categories", value: "all" },
  { label: "Brochure", value: "Brochure" },
  { label: "Business Card", value: "Business Card" },
  { label: "Company Profile", value: "Company Profile" },
  { label: "Flyer", value: "Flyer" },
  { label: "Roll-up Banner", value: "Banner" },
];

const WORK_TYPES: FilterOption[] = [
  { label: "All Types", value: "all" },
  { label: "Tri - Fold", value: "Tri - Fold" },
  { label: "Bi - Fold", value: "Bi - Fold" },
  { label: "Corporate Card", value: "Corporate Card" },
  { label: "Multi-Page Booklet", value: "Booklet" },
];

const INDUSTRIES: FilterOption[] = [
  { label: "All Industries", value: "all" },
  { label: "Healthcare", value: "Healthcare" },
  { label: "Legal & Law", value: "Legal & Law" },
  { label: "Aviation & Conglomerate", value: "Aviation" },
  { label: "Enterprise Software", value: "Software" },
];

export default function MarketingProjectsView() {
  const [selectedCategory, setSelectedCategory] = useState("Brochure");
  const [selectedWorkType, setSelectedWorkType] = useState("Tri - Fold");
  const [selectedIndustry, setSelectedIndustry] = useState("Healthcare");

  // Dropdown open states
  const [catOpen, setCatOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);

  // Close dropdowns when clicking outside
  const filterBarRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (filterBarRef.current && !filterBarRef.current.contains(e.target as Node)) {
        setCatOpen(false);
        setTypeOpen(false);
        setIndOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full space-y-10 sm:space-y-12">
      {/* ── 01. SUB-NAVIGATION FILTER BAR (3 Dropdown Columns Matching Figma Screenshot 2) ── */}
      <div
        ref={filterBarRef}
        className="relative w-full bg-transparent pt-2 pb-6 select-none"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Filter 1: CATEGORY */}
          <div className="relative">
            <span className="block text-[11px] sm:text-xs font-dm font-bold uppercase tracking-wider text-[#FEC163] mb-1">
              CATEGORY
            </span>
            <button
              type="button"
              onClick={() => {
                setCatOpen(!catOpen);
                setTypeOpen(false);
                setIndOpen(false);
              }}
              className="w-full flex items-center justify-between text-left text-sm sm:text-base font-dm font-medium text-white hover:text-[#FEC163] transition-colors py-1 cursor-pointer"
            >
              <span>{selectedCategory}</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className={`transform transition-transform text-[#DE4313] ${
                  catOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#DE4313"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Horizontal underline */}
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />

            {/* Dropdown Menu */}
            {catOpen && (
              <div className="absolute left-0 top-full mt-2 w-full min-w-[200px] bg-[#0A0F24] border border-[#DE4313]/60 rounded-md shadow-2xl py-2 z-50 backdrop-blur-md">
                {CATEGORIES.map((c) => (
                  <button
                    key={c.value}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(c.label);
                      setCatOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-dm transition-colors ${
                      selectedCategory === c.label
                        ? "text-[#FEC163] bg-[#DE4313]/20 font-bold"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter 2: WORK TYPE */}
          <div className="relative">
            <span className="block text-[11px] sm:text-xs font-dm font-bold uppercase tracking-wider text-[#FEC163] mb-1">
              WORK TYPE
            </span>
            <button
              type="button"
              onClick={() => {
                setTypeOpen(!typeOpen);
                setCatOpen(false);
                setIndOpen(false);
              }}
              className="w-full flex items-center justify-between text-left text-sm sm:text-base font-dm font-medium text-white hover:text-[#FEC163] transition-colors py-1 cursor-pointer"
            >
              <span>{selectedWorkType}</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className={`transform transition-transform text-[#DE4313] ${
                  typeOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#DE4313"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Horizontal underline */}
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />

            {/* Dropdown Menu */}
            {typeOpen && (
              <div className="absolute left-0 top-full mt-2 w-full min-w-[200px] bg-[#0A0F24] border border-[#DE4313]/60 rounded-md shadow-2xl py-2 z-50 backdrop-blur-md">
                {WORK_TYPES.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => {
                      setSelectedWorkType(t.label);
                      setTypeOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-dm transition-colors ${
                      selectedWorkType === t.label
                        ? "text-[#FEC163] bg-[#DE4313]/20 font-bold"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Filter 3: INDUSTRY */}
          <div className="relative">
            <span className="block text-[11px] sm:text-xs font-dm font-bold uppercase tracking-wider text-[#FEC163] mb-1">
              INDUSTRY
            </span>
            <button
              type="button"
              onClick={() => {
                setIndOpen(!indOpen);
                setCatOpen(false);
                setTypeOpen(false);
              }}
              className="w-full flex items-center justify-between text-left text-sm sm:text-base font-dm font-medium text-white hover:text-[#FEC163] transition-colors py-1 cursor-pointer"
            >
              <span>{selectedIndustry}</span>
              <svg
                width="12"
                height="8"
                viewBox="0 0 12 8"
                fill="none"
                className={`transform transition-transform text-[#DE4313] ${
                  indOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="#DE4313"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            {/* Horizontal underline */}
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />

            {/* Dropdown Menu */}
            {indOpen && (
              <div className="absolute left-0 top-full mt-2 w-full min-w-[200px] bg-[#0A0F24] border border-[#DE4313]/60 rounded-md shadow-2xl py-2 z-50 backdrop-blur-md">
                {INDUSTRIES.map((i) => (
                  <button
                    key={i.value}
                    type="button"
                    onClick={() => {
                      setSelectedIndustry(i.label);
                      setIndOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs sm:text-sm font-dm transition-colors ${
                      selectedIndustry === i.label
                        ? "text-[#FEC163] bg-[#DE4313]/20 font-bold"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {i.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── 02. PROJECT CARDS GRID (3 Columns Matching Figma Screenshot 2) ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
        {/* ════════ COLUMN 1: Hospital Management Solution Brochure ════════ */}
        <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
          {/* Top Section: Tri-Fold Brochure Cover Mockup */}
          <div className="w-full bg-[#0B252C] p-5 sm:p-6 border-b border-gray-800 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-[4/3] bg-gradient-to-br from-[#115E59] via-[#0D9488] to-[#042F2E] p-4 rounded-sm shadow-xl flex flex-col justify-between overflow-hidden">
              {/* Geometric Facets and Angle Overlays */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-[#2DD4BF]/20 rounded-full blur-xl" />
              <div className="absolute -left-10 bottom-0 w-36 h-20 bg-black/40 transform -rotate-12" />

              {/* Top Row: System badge */}
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <span className="text-[#E11D48] font-bold text-xs">✚</span>
                  </div>
                  <span className="text-[10px] text-teal-100 font-bold tracking-wider">
                    HEALTHCARE ERP
                  </span>
                </div>
                <span className="text-[8px] text-teal-200">v4.2 PRO</span>
              </div>

              {/* Center Content: Title */}
              <div className="relative z-10 my-auto text-left">
                <span className="block text-[11px] tracking-[0.2em] uppercase text-teal-200 font-semibold">
                  HOSPITAL
                </span>
                <span className="block text-base sm:text-lg font-dm font-black text-white leading-tight">
                  MANAGEMENT
                </span>
                <span className="block text-sm sm:text-base font-dm font-bold text-[#FDE047] leading-none">
                  SOLUTION
                </span>
              </div>

              {/* Bottom Row: Medical Cross and Stats */}
              <div className="relative z-10 flex items-center justify-between pt-2 border-t border-teal-500/30 text-[8px] text-teal-100">
                <span>Enterprise Cloud Suite</span>
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-white">
                  ✚
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Open Tri-Fold Inner Spread */}
          <div className="w-full bg-[#E2E8F0] p-4 sm:p-5 flex items-center justify-center">
            <div className="w-full max-w-[280px] bg-white rounded-xs shadow-md p-2.5 grid grid-cols-3 gap-1.5 border border-gray-300">
              {/* Panel 1 */}
              <div className="bg-[#F0FDFA] p-1.5 rounded-xs border border-teal-200 flex flex-col justify-between text-[7px] text-teal-900 leading-tight">
                <span className="font-bold text-[#0D9488]">01. ADMISSION</span>
                <p className="text-[6px] text-gray-600 mt-1">
                  Automated patient registration & triage routing.
                </p>
                <div className="w-full h-8 bg-teal-100/70 rounded-xs mt-1 flex items-center justify-center text-[6px] text-teal-700">
                  Infographic Flow
                </div>
              </div>

              {/* Panel 2 */}
              <div className="bg-[#F0FDFA] p-1.5 rounded-xs border border-teal-200 flex flex-col justify-between text-[7px] text-teal-900 leading-tight">
                <span className="font-bold text-[#0D9488]">02. CLINICAL</span>
                <p className="text-[6px] text-gray-600 mt-1">
                  EMR, lab diagnostics & doctor prescription sync.
                </p>
                <div className="w-full h-8 bg-teal-100/70 rounded-xs mt-1 flex items-center justify-center text-[6px] text-teal-700">
                  Lab Modules
                </div>
              </div>

              {/* Panel 3 */}
              <div className="bg-[#F0FDFA] p-1.5 rounded-xs border border-teal-200 flex flex-col justify-between text-[7px] text-teal-900 leading-tight">
                <span className="font-bold text-[#0D9488]">03. BILLING</span>
                <p className="text-[6px] text-gray-600 mt-1">
                  Real-time pharmacy & insurance settlement.
                </p>
                <div className="w-full h-8 bg-teal-100/70 rounded-xs mt-1 flex items-center justify-center text-[6px] text-teal-700">
                  Analytics
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
            Hospital Management Solution Brochure
          </div>
        </div>

        {/* ════════ COLUMN 2: Lawyer Business Card ════════ */}
        <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
          {/* Top Section: Dark Business Card Front with QR code */}
          <div className="w-full bg-[#0B0F1A] p-5 sm:p-6 border-b border-gray-800 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-[16/9] bg-[#1E1E24] p-4 rounded-xs shadow-xl flex items-center justify-between border border-gray-700">
              <div className="flex flex-col text-left pr-2">
                <span className="font-sans font-black text-xs sm:text-sm text-white tracking-wide leading-tight">
                  TAHSIN KAMAL TONIMA
                </span>
                <span className="text-[9px] text-gray-300 mt-1 font-serif italic">
                  Barrister, of Lincoln&apos;s Inn, UK
                </span>
                <span className="text-[8px] text-gray-400 mt-0.5">
                  Advocate, District and Sessions Judge Court, Dhaka
                </span>
              </div>

              {/* QR Code Graphic */}
              <div className="flex-shrink-0 w-11 h-11 bg-white p-1 rounded-xs flex items-center justify-center shadow-xs">
                <svg viewBox="0 0 24 24" className="w-full h-full text-black" fill="currentColor">
                  <path d="M2 2h8v8H2V2zm2 2v4h4V4H4zm10-2h8v8h-8V2zm2 2v4h4V4h-4zM2 14h8v8H2v-8zm2 2v4h4v-4H4zm14 0h4v4h-4v-4zm-4 4h4v4h-4v-4zm4-4h-4v-4h4v4z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Bottom Section: White Business Card Back with Credentials & Contacts */}
          <div className="w-full bg-[#E5E7EB] p-5 sm:p-6 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] aspect-[16/9] bg-white p-4 rounded-xs shadow-md flex flex-col justify-between border border-gray-300 text-left">
              <div>
                <span className="font-sans font-black text-xs sm:text-sm text-black tracking-wide leading-none">
                  TAHSIN KAMAL TONIMA
                </span>

                {/* Academic credentials */}
                <div className="mt-2 text-[6.5px] sm:text-[7px] text-gray-700 space-y-0.5 leading-tight font-sans">
                  <p>
                    <strong className="text-black">LL.M.</strong>, London School of Economics and Political Science (LSE), UK
                  </p>
                  <p>
                    <strong className="text-black">Master of Tax Management</strong>, University of Dhaka
                  </p>
                  <p>
                    <strong className="text-black">PG Dip in BPTC</strong>, City University of London, UK
                  </p>
                  <p>
                    <strong className="text-black">Accredited Mediator</strong>, ADR ODR International, UK
                  </p>
                  <p>
                    <strong className="text-black">LL.B. (Hons)</strong>, University of London, UK
                  </p>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="pt-2 border-t border-gray-200 flex flex-col text-[7px] text-gray-800 space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#DE4313]">📞</span>
                  <span>+88015624510876</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#DE4313]">✉</span>
                  <span>tahsinkamaltonima@gmail.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
            Lawyer Business Card
          </div>
        </div>

        {/* ════════ COLUMN 3: Delta Group Company Profile ════════ */}
        <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
          {/* Top Section: Company Profile Booklet Cover with Soaring Airplane */}
          <div className="w-full bg-[#1A1816] p-5 sm:p-6 border-b border-gray-800 flex items-center justify-center">
            <div className="relative w-full max-w-[280px] bg-white rounded-xs shadow-xl overflow-hidden flex flex-col">
              {/* Airplane Aerial Hero Header */}
              <div className="relative w-full h-32 bg-gradient-to-br from-[#E2E8F0] via-[#CBD5E1] to-[#94A3B8] overflow-hidden flex items-center justify-center">
                {/* Modern Jet Airplane Silhouette SVG */}
                <svg viewBox="0 0 160 90" className="w-36 h-24 text-gray-800 drop-shadow-md" fill="none">
                  {/* Airplane Wings and Fuselage */}
                  <path
                    d="M30 65 L85 45 L150 20 L130 18 L65 35 L20 40 L10 50 L30 52 L25 60 Z"
                    fill="#334155"
                  />
                  <path
                    d="M85 45 L120 70 L115 72 L75 50 Z"
                    fill="#475569"
                  />
                  <path
                    d="M15 48 L8 35 L14 34 L25 43 Z"
                    fill="#64748B"
                  />
                </svg>

                {/* Angled Orange Architectural Facets */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-r from-[#F59E0B] via-[#EA580C] to-[#C2410C] transform -skew-y-6 origin-bottom-left" />
                <div className="absolute inset-x-0 bottom-2 h-3 bg-white transform -skew-y-6 origin-bottom-left" />
              </div>

              {/* Title & Organization Details */}
              <div className="p-4 bg-white flex flex-col text-left">
                <span className="font-sans font-bold text-xs text-gray-700 tracking-wider uppercase">
                  COMPANY
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans font-black text-base sm:text-lg text-black tracking-tight">
                    PROFILE
                  </span>
                  <span className="font-sans font-bold text-base text-[#EA580C]">
                    2022
                  </span>
                </div>

                <p className="text-[7px] text-gray-500 mt-2 leading-relaxed">
                  Delta International is a leading organization of Bangladesh engaged in Marketing Export, Import, Consulting Supply, Procurement International and Local Tender Business etc.
                </p>

                {/* Delta Group Logo */}
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {/* Delta Triangle mark */}
                    <div className="w-4 h-4 border-l-4 border-b-4 border-[#EA580C] transform rotate-45" />
                    <span className="font-sans font-black text-xs text-[#EA580C] tracking-wide">
                      deltagroup
                    </span>
                  </div>
                  <span className="text-[7px] text-gray-400">Dhaka, BD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Open Company Profile Inner Spread */}
          <div className="w-full bg-[#E5E7EB] p-4 sm:p-5 flex items-center justify-center">
            <div className="w-full max-w-[280px] bg-white rounded-xs shadow-md p-2.5 grid grid-cols-2 gap-2 border border-gray-300">
              {/* Left page: Services List */}
              <div className="p-1 flex flex-col text-left">
                <span className="font-bold text-[8px] text-black border-b border-gray-200 pb-0.5">
                  Our Services List
                </span>
                {/* 4 photo thumbnails */}
                <div className="grid grid-cols-2 gap-1 my-1.5">
                  <div className="h-9 bg-slate-700 rounded-xs flex items-center justify-center text-[5px] text-white text-center p-0.5">
                    Power Grid
                  </div>
                  <div className="h-9 bg-amber-700 rounded-xs flex items-center justify-center text-[5px] text-white text-center p-0.5">
                    Civil Bridge
                  </div>
                  <div className="h-9 bg-cyan-800 rounded-xs flex items-center justify-center text-[5px] text-white text-center p-0.5">
                    Telecom Dish
                  </div>
                  <div className="h-9 bg-emerald-800 rounded-xs flex items-center justify-center text-[5px] text-white text-center p-0.5">
                    Logistics
                  </div>
                </div>
              </div>

              {/* Right page: Services Breakdown */}
              <div className="p-1 flex flex-col text-left justify-between">
                <div>
                  <span className="font-bold text-[8px] text-black border-b border-gray-200 pb-0.5 block">
                    Services Excellence
                  </span>
                  <div className="mt-1 space-y-0.5 text-[6px] text-gray-600">
                    <p>• High Voltage Substation</p>
                    <p>• Optical Fiber Network</p>
                    <p>• Highway Infrastructure</p>
                    <p>• Global Procurement</p>
                  </div>
                </div>
                <div className="text-[6px] text-right text-[#EA580C] font-bold">
                  deltagroup.com
                </div>
              </div>
            </div>
          </div>

          {/* Caption */}
          <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
            Company Profile
          </div>
        </div>
      </div>
    </div>
  );
}
