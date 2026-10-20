"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface FilterOption {
  label: string;
  value: string;
}

const CATEGORIES: FilterOption[] = [
  { label: "All Categories", value: "all" },
  { label: "Logo", value: "Logo" },
  { label: "Packaging", value: "Packaging" },
  { label: "Brand Identity", value: "Brand Identity" },
  { label: "Mascot & Character", value: "Mascot" },
];

const WORK_TYPES: FilterOption[] = [
  { label: "All Types", value: "all" },
  { label: "Monograms", value: "Monograms" },
  { label: "Wordmark", value: "Wordmark" },
  { label: "Emblem & Mascot", value: "Emblem" },
  { label: "Combination Mark", value: "Combination" },
];

const INDUSTRIES: FilterOption[] = [
  { label: "All Industries", value: "all" },
  { label: "Food & Beverage", value: "Food & Beverage" },
  { label: "Mailbox & Logistics", value: "Mailbox & Logistics" },
  { label: "Consultancy", value: "Consultancy" },
  { label: "Home Decor", value: "Home Decor" },
  { label: "Govt. Initiative", value: "Government" },
];

export default function BrandingProjectsView() {
  const [selectedCategory, setSelectedCategory] = useState("Logo");
  const [selectedWorkType, setSelectedWorkType] = useState("Monograms");
  const [selectedIndustry, setSelectedIndustry] = useState("Food & Beverage");

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
      {/* ── 01. SUB-NAVIGATION FILTER BAR (3 Dropdown Columns Matching Figma Screenshot 1) ── */}
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

      {/* ── 02. MASONRY PROJECT CARDS GRID (3 Columns Matching Figma Screenshot 1) ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
        {/* ════════ COLUMN 1 ════════ */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {/* Card 1: The Vanilla Bean Bakery (Tall Card) */}
          <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
            {/* Top Section: Vanilla Bean Circular Logo Emblem */}
            <div className="w-full bg-[#FCFBF8] p-6 sm:p-8 flex flex-col items-center justify-center border-b border-gray-200">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex flex-col items-center justify-center text-center">
                {/* Delicate floral ring border */}
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 w-full h-full text-[#78644A]"
                  fill="none"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="86"
                    stroke="#8B7355"
                    strokeWidth="1.2"
                    strokeDasharray="2 3"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="92"
                    stroke="#BFA588"
                    strokeWidth="0.8"
                  />
                  {/* Vanilla flower illustration top right */}
                  <g transform="translate(138, 20) scale(0.65)">
                    <path
                      d="M20 20 C25 5, 35 5, 40 20 C45 35, 30 40, 20 40 C10 40, -5 35, 0 20 C5 5, 15 5, 20 20 Z"
                      fill="#F6E05E"
                      opacity="0.9"
                    />
                    <circle cx="20" cy="20" r="5" fill="#D97706" />
                  </g>
                </svg>

                {/* Brand typography */}
                <span className="font-serif italic text-2xl sm:text-3xl text-[#4A3B2C] tracking-wide mt-2">
                  The Vanilla Bean
                </span>
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C7A6B] font-medium mt-1 font-sans">
                  BAKERY
                </span>
                <span className="text-[9px] text-[#A89887] italic font-serif mt-2">
                  Cakes, Dreams & more
                </span>
              </div>
            </div>

            {/* Middle Section: Side-by-side Thank You Card & Branded Ribbon Mockups */}
            <div className="w-full grid grid-cols-2 bg-[#F7F4EF] border-b border-gray-200 divide-x divide-gray-200">
              {/* Left: Thank You Card */}
              <div className="p-4 flex flex-col justify-center items-center text-center bg-white shadow-sm">
                <span className="font-serif italic text-base sm:text-lg text-[#5C4D3C]">
                  thank
                </span>
                <span className="font-serif italic text-xl sm:text-2xl text-[#5C4D3C] -mt-2">
                  you
                </span>
                <p className="text-[8px] text-[#8C7A6B] mt-2 max-w-[100px] leading-tight">
                  for celebrating sweetness with
                </p>
                <span className="text-[8px] font-bold text-[#5C4D3C] mt-0.5">
                  The Vanilla Bean
                </span>
                <div className="mt-3 text-[7px] text-[#A89887] space-y-0.5">
                  <p>+880 1682 935 782</p>
                  <p>thevanillabean.bd</p>
                </div>
              </div>

              {/* Right: Golden Satin Ribbon */}
              <div className="p-4 flex items-center justify-center bg-[#F9F7F2] overflow-hidden relative">
                <div className="transform -rotate-12 bg-[#F3E8D6] border-y border-[#DFCBB5] py-2 px-6 shadow-sm flex items-center gap-3">
                  <span className="text-[9px] font-serif italic text-[#7C6650] whitespace-nowrap">
                    The Vanilla Bean
                  </span>
                  <span className="text-[7px] text-[#A38D76]">★</span>
                  <span className="text-[9px] font-serif italic text-[#7C6650] whitespace-nowrap">
                    Bakery
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Section: Gift Box Mockup */}
            <div className="w-full bg-[#EFECE6] p-5 flex items-center justify-center">
              <div className="relative w-full max-w-[210px] aspect-square bg-white shadow-md p-3 flex flex-col items-center justify-center border border-gray-100">
                {/* Tied Ribbon Illustration */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-5 bg-[#F5EEDB] border-y border-[#DFCBB5] shadow-xs" />
                <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-5 bg-[#F5EEDB] border-x border-[#DFCBB5] shadow-xs" />
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#FCFBF8] border border-[#DFCBB5] shadow-sm flex items-center justify-center">
                  <span className="text-[8px] font-serif italic text-[#7C6650] text-center leading-none">
                    Vanilla
                    <br />
                    Bean
                  </span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
              Bakery Logo, Packaging
            </div>
          </div>

          {/* Card 2: London Consulting Limited (Standard Card) */}
          <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
            <div className="w-full bg-white p-8 sm:p-10 flex items-center justify-center min-h-[170px]">
              <div className="flex items-center gap-4">
                {/* Modern LC monogram */}
                <div className="flex items-center">
                  <svg width="48" height="48" viewBox="0 0 54 54" fill="none">
                    <rect x="2" y="2" width="14" height="50" rx="3" fill="#0284C7" />
                    <rect x="2" y="38" width="30" height="14" rx="3" fill="#0284C7" />
                    <path
                      d="M32 10 C32 4, 52 4, 52 10 L52 20 L38 20 L38 34 L52 34 L52 44 C52 50, 32 50, 32 44 Z"
                      fill="#0EA5E9"
                    />
                  </svg>
                </div>
                {/* Typography */}
                <div className="flex flex-col">
                  <span className="font-sans font-extrabold text-lg sm:text-xl text-[#0284C7] leading-tight tracking-wide">
                    LONDON
                  </span>
                  <span className="font-sans font-bold text-xs sm:text-sm text-[#0284C7] tracking-wider">
                    CONSULTING
                  </span>
                  <span className="font-sans font-medium text-[10px] text-[#38BDF8] tracking-widest">
                    LIMITED
                  </span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
              Tax Consultancy Logo
            </div>
          </div>
        </div>

        {/* ════════ COLUMN 2 ════════ */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {/* Card 3: Encino Mailboxes (Standard Card) */}
          <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
            <div className="w-full bg-white p-8 sm:p-10 flex items-center justify-center min-h-[170px]">
              <div className="flex flex-col items-center text-center">
                <span className="font-serif font-black text-2xl sm:text-3xl text-[#0066B2] tracking-wider leading-none">
                  ENCINO
                </span>
                <div className="flex items-center justify-center gap-1.5 mt-1">
                  {/* Red envelope mail icon replacing M */}
                  <div className="w-5 h-4 bg-[#D32F2F] rounded-xs flex items-center justify-center relative shadow-xs">
                    <svg viewBox="0 0 20 15" className="w-full h-full text-white" fill="none">
                      <path d="M1 1 L10 8 L19 1" stroke="white" strokeWidth="2" />
                      <rect x="1" y="1" width="18" height="13" stroke="white" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <span className="font-serif font-bold text-sm sm:text-base text-[#D32F2F] tracking-[0.18em]">
                    AILBOXES
                  </span>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
              Mailbox Services Logo
            </div>
          </div>

          {/* Card 4: Soi Nana Restaurant (Tall Card) */}
          <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
            {/* Top Section: Mascot Circular Emblem Badge */}
            <div className="w-full bg-[#FCF7ED] p-6 sm:p-8 flex items-center justify-center border-b border-gray-200">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-[#F59E0B]/15 border-4 border-[#0F4C81] p-3 flex flex-col items-center justify-center text-center shadow-inner">
                {/* Cheerful cartoon chef with wok illustration */}
                <svg viewBox="0 0 160 160" className="w-28 h-28" fill="none">
                  {/* Chef Hat */}
                  <path
                    d="M60 45 C50 35, 60 20, 80 20 C100 20, 110 35, 100 45 Z"
                    fill="#FFFFFF"
                    stroke="#1E293B"
                    strokeWidth="3"
                  />
                  {/* Chef Face */}
                  <circle cx="80" cy="62" r="18" fill="#FCD34D" stroke="#1E293B" strokeWidth="3" />
                  {/* Eyes & Smile */}
                  <circle cx="74" cy="60" r="2.5" fill="#1E293B" />
                  <circle cx="86" cy="60" r="2.5" fill="#1E293B" />
                  <path d="M74 68 Q80 74 86 68" stroke="#1E293B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                  {/* Chef Coat & Neckerchief */}
                  <path d="M60 80 L100 80 L108 115 L52 115 Z" fill="#FFFFFF" stroke="#1E293B" strokeWidth="3" />
                  <path d="M75 80 L80 92 L85 80 Z" fill="#EF4444" />
                  {/* Wok with flame */}
                  <path d="M40 95 Q80 120 120 95 Z" fill="#334155" stroke="#1E293B" strokeWidth="3" />
                  <path d="M72 88 Q80 78 88 88" stroke="#F97316" strokeWidth="3" fill="none" />
                </svg>

                {/* SOI NANA Banner */}
                <div className="bg-[#0F4C81] text-white px-4 py-1 rounded-md shadow-md mt-1">
                  <span className="font-extrabold text-base sm:text-lg tracking-wider font-sans">
                    SOI NANA
                  </span>
                </div>
                <span className="text-[10px] text-[#0F4C81] font-serif italic mt-0.5">
                  By Cucine
                </span>
              </div>
            </div>

            {/* Middle Section: Roll-Up Banner Food Mockup */}
            <div className="w-full bg-[#111827] p-5 flex items-center justify-center border-b border-gray-800">
              <div className="w-36 sm:w-44 bg-gradient-to-b from-[#EA580C] to-[#C2410C] p-3 rounded-t-sm shadow-xl flex flex-col items-center text-center">
                <span className="text-white font-extrabold text-xs tracking-wider">
                  SOI NANA
                </span>
                <span className="text-[8px] text-amber-200 mt-0.5">
                  Authentic Asian Street Delights
                </span>
                {/* 3 Food Circles */}
                <div className="my-2.5 space-y-1.5 w-full">
                  <div className="w-full h-11 bg-white/20 rounded-sm flex items-center justify-center text-[8px] text-white font-medium">
                    🍢 Satay Skewers
                  </div>
                  <div className="w-full h-11 bg-white/20 rounded-sm flex items-center justify-center text-[8px] text-white font-medium">
                    🍜 Pad Thai Wok
                  </div>
                  <div className="w-full h-11 bg-white/20 rounded-sm flex items-center justify-center text-[8px] text-white font-medium">
                    🍛 Coconut Curry
                  </div>
                </div>
                <div className="w-8 h-8 bg-white p-1 rounded-xs flex items-center justify-center">
                  <div className="w-full h-full bg-black/80 rounded-xs" />
                </div>
              </div>
            </div>

            {/* Bottom Section: Pop-Up Stall Canopy */}
            <div className="w-full bg-[#3E3832] p-4 flex items-center justify-center">
              <div className="w-full max-w-[240px] bg-[#FAF8F5] p-3 rounded-sm shadow-md flex flex-col items-center">
                <div className="w-full bg-[#F59E0B] text-black font-extrabold text-center py-1 text-[10px] uppercase tracking-wider rounded-t-xs">
                  SOI NANA STREET KITCHEN
                </div>
                <div className="w-full h-14 bg-amber-50 border border-amber-200 flex items-center justify-around px-2 py-1 text-[8px] text-amber-900">
                  <div className="text-center font-bold">Pop-Up Stall #14</div>
                  <div className="text-center">Live Grilling</div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
              Restaurant Logo, Pop-Up Stall
            </div>
          </div>
        </div>

        {/* ════════ COLUMN 3 ════════ */}
        <div className="flex flex-col gap-6 sm:gap-7">
          {/* Card 5: House of Peony (Tall Card) */}
          <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
            {/* Top Section: Dusty Rose Blush Card with Gold Frame */}
            <div className="w-full bg-[#9E6B7A] p-6 sm:p-8 flex flex-col items-center justify-center border-b border-[#B88696]">
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 border-2 border-[#D4AF37] p-4 flex flex-col items-center justify-center text-center shadow-lg bg-[#925E6E]">
                {/* Corner Floral Motifs */}
                <span className="text-lg absolute -top-3 -left-3">🌸</span>
                <span className="text-lg absolute -bottom-3 -right-3">🌸</span>

                <span className="font-serif tracking-[0.25em] text-sm text-[#FDEBD0] uppercase">
                  HOUSE
                </span>
                <span className="font-serif italic text-xs text-[#FDEBD0]/80">
                  of
                </span>
                <span className="font-serif tracking-[0.25em] text-base sm:text-lg font-bold text-[#FDEBD0] uppercase">
                  PEONY
                </span>
                <span className="text-[8px] tracking-[0.3em] text-[#FDEBD0]/90 uppercase font-sans mt-2">
                  LUXURY HOME DECOR
                </span>
              </div>
            </div>

            {/* Bottom Section: White Card with Peony Botanical Wreath */}
            <div className="w-full bg-[#FFFFFF] p-6 sm:p-8 flex items-center justify-center relative overflow-hidden">
              {/* Botanical Peony floral border surrounding */}
              <div className="relative w-44 h-44 sm:w-48 sm:h-48 border-2 border-[#D4AF37] p-4 flex flex-col items-center justify-center text-center shadow-md bg-white">
                <span className="text-xl absolute -top-3 left-4">🌺</span>
                <span className="text-xl absolute -top-3 right-4">🌸</span>
                <span className="text-xl absolute -bottom-3 left-4">🌸</span>
                <span className="text-xl absolute -bottom-3 right-4">🌺</span>

                <span className="font-serif tracking-[0.25em] text-sm text-[#3E2723] uppercase">
                  HOUSE
                </span>
                <span className="font-serif italic text-xs text-[#5D4037]">
                  of
                </span>
                <span className="font-serif tracking-[0.25em] text-base sm:text-lg font-bold text-[#3E2723] uppercase">
                  PEONY
                </span>
                <span className="text-[8px] tracking-[0.25em] text-[#795548] uppercase font-sans mt-2">
                  luxury home decor
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
              Home Decor Logo
            </div>
          </div>

          {/* Card 6: Smart Bangladesh (Standard Card) */}
          <div className="group relative w-full bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden">
            <div className="w-full bg-white p-8 sm:p-10 flex items-center justify-center min-h-[170px]">
              <div className="flex flex-col items-center text-center">
                {/* Red Wifi signals over the word SMART */}
                <div className="flex items-center gap-1 font-sans font-black text-2xl sm:text-3xl tracking-tight">
                  <span className="text-[#006A4E]">SM</span>
                  <div className="relative inline-flex flex-col items-center">
                    {/* Broadcast wifi arcs */}
                    <svg width="22" height="12" viewBox="0 0 24 14" fill="none" className="-mb-0.5">
                      <path
                        d="M2 12C5 7 9 4 12 4C15 4 19 7 22 12"
                        stroke="#F42A41"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="11" r="2" fill="#F42A41" />
                    </svg>
                    <span className="text-[#F42A41]">A</span>
                  </div>
                  <span className="text-[#006A4E]">RT</span>
                </div>

                {/* BANGLADESH */}
                <span className="font-sans font-extrabold text-base sm:text-lg text-[#006A4E] tracking-[0.2em] mt-0.5">
                  BANGLADESH
                </span>
              </div>
            </div>

            {/* Caption */}
            <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
              Govt. Initiative Logo Redesign
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
