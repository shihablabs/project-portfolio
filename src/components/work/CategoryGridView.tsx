"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkProject, WorkCategory, WORK_PROJECTS } from "@/data/workProjects";
import ProjectPreviewModal from "@/components/work/ProjectPreviewModal";
import LaptopWebsitePreview from "@/components/ui/LaptopWebsitePreview";
import HospitalDashboardMockup from "@/components/ui/HospitalDashboardMockup";
import AppHeroPhoneMockup from "@/components/ui/AppHeroPhoneMockup";
import BrandingMonitorMockup from "@/components/ui/BrandingMonitorMockup";
import MarketingMonitorMockup from "@/components/ui/MarketingMonitorMockup";

interface CategoryGridViewProps {
  categoryKey: WorkCategory;
  meta: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
  };
  projects: WorkProject[];
}

const UX_SUBCATEGORIES = [
  { id: "websites", label: "Websites", href: "/work/websites" },
  { id: "apps", label: "Apps", href: "/work/apps" },
  { id: "softwares", label: "Softwares", href: "/work/softwares" },
];

export default function CategoryGridView({
  categoryKey,
  meta,
  projects,
}: CategoryGridViewProps) {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  // Active discipline based on category
  const activeDiscipline =
    categoryKey === "branding"
      ? "branding"
      : categoryKey === "marketing"
      ? "marketing"
      : "ux";

  // Filter dropdown state
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [selectedWorkTypeFilter, setSelectedWorkTypeFilter] = useState("All");
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState("All");

  const [catOpen, setCatOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);

  // Find a fallback project for modal when clicking UI cards
  const getProjectForModal = (id: string, title: string, category: WorkCategory): WorkProject => {
    const existing = WORK_PROJECTS.find((p) => p.id === id || p.slug === id);
    if (existing) return existing;
    return {
      id,
      slug: id,
      title,
      description: `Detailed UX & UI case study preview for ${title}, showcasing user research, wireframes, and design system components.`,
      category,
      categoryLabel: meta.title,
      discipline: "ux",
      tags: ["UX & UI Design", "Mobile App", "Interactive Prototype"],
      thumbnail: "/assets/images/work-mockup.png",
      gallery: [
        "/assets/images/work-mockup.png",
        "/assets/projects/aamar-pharma-mockup.png",
      ],
      year: "2024",
      client: "Client Showcase",
      hasCaseStudy: false,
    };
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24">
      {/* ── 01. HERO CARD (Matching Main Work Hero Frame 100%) ── */}
      <div className="relative w-full bg-transparent min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex items-center pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 pl-6 sm:pl-10 lg:pl-14 pr-6 sm:pr-10 lg:pr-14 mb-8">
        {/* Top horizontal border line (with cutout for notch) */}
        <div
          className="absolute top-0 left-0 right-[310px] sm:right-[340px] lg:right-[360px] h-[1.5px] pointer-events-none"
          style={{
            background:
              "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
          }}
        />

        {/* Left vertical border line */}
        <div
          className="absolute top-0 left-0 bottom-0 w-[1.5px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
          }}
        />

        {/* Bottom horizontal border line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
          style={{
            background:
              "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
          }}
        />

        {/* Right vertical border line */}
        <div
          className="absolute top-[28px] sm:top-[34px] right-0 bottom-0 w-[1.5px] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
          }}
        />

        {/* ── Top-Right Notch: 3 Discipline Icons + "Work" Text ── */}
        <div className="absolute top-0 right-4 sm:right-8 -translate-y-1/2 flex items-center gap-3 sm:gap-4 select-none z-20">
          {/* 1. UX & UI Design Circle */}
          <Link
            href="/work"
            title="UX & UI Design"
            aria-label="UX & UI Design"
            className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeDiscipline === "ux"
                ? "shadow-[0_0_16px_rgba(222,67,19,0.7)] scale-105"
                : "bg-[#0A0F24] border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
            }`}
            style={
              activeDiscipline === "ux"
                ? {
                    background:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }
                : undefined
            }
          >
            <Image
              src="/assets/icons/ux-icon.png"
              alt="UX & UI"
              width={26}
              height={26}
              className={activeDiscipline === "ux" ? "brightness-0 invert" : ""}
            />
          </Link>

          {/* 2. Logo & Branding Circle */}
          <Link
            href="/work?discipline=branding"
            title="Logo & Branding"
            aria-label="Logo & Branding"
            className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeDiscipline === "branding"
                ? "shadow-[0_0_16px_rgba(222,67,19,0.7)] scale-105"
                : "bg-[#0A0F24] border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
            }`}
            style={
              activeDiscipline === "branding"
                ? {
                    background:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }
                : undefined
            }
          >
            <Image
              src="/assets/icons/branding-icon.png"
              alt="Branding"
              width={26}
              height={26}
              className={activeDiscipline === "branding" ? "brightness-0 invert" : ""}
            />
          </Link>

          {/* 3. Print & Digital Marketing Circle */}
          <Link
            href="/work?discipline=marketing"
            title="Print & Digital Marketing"
            aria-label="Print & Digital Marketing"
            className={`relative w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
              activeDiscipline === "marketing"
                ? "shadow-[0_0_16px_rgba(222,67,19,0.7)] scale-105"
                : "bg-[#0A0F24] border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
            }`}
            style={
              activeDiscipline === "marketing"
                ? {
                    background:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }
                : undefined
            }
          >
            <Image
              src="/assets/icons/marketing-icon.png"
              alt="Marketing"
              width={26}
              height={26}
              className={activeDiscipline === "marketing" ? "brightness-0 invert" : ""}
            />
          </Link>

          {/* "Work" Page Heading */}
          <Link
            href="/work"
            className="font-dm font-normal text-3xl sm:text-4xl lg:text-[42px] text-[var(--ink)] tracking-tight leading-none ml-2 hover:opacity-80 transition-opacity"
          >
            Work
          </Link>
        </div>

        {/* ── Ambient Radial Glow ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(222, 67, 19, 0.45) 0%, rgba(222, 67, 19, 0.15) 50%, transparent 72%)",
              filter: "blur(85px)",
              width: "480px",
              height: "420px",
              right: "40px",
              bottom: "10px",
            }}
          />
        </div>

        {/* ── Main Hero Content Grid ── */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: UX & UI DESIGN + Vertical List of Websites / Apps / Softwares */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-4">
            <h1 className="font-dm font-bold text-3xl sm:text-4xl lg:text-[46px] leading-[1.08] text-white uppercase tracking-tight">
              UX &amp; UI DESIGN
            </h1>

            {/* 3 Subcategory items: Websites, Apps, Softwares */}
            {/* CONDITIONAL FILL LOGIC: The active subcategory has solid gradient fill, others are outline */}
            <div className="flex flex-col space-y-1.5 pt-1">
              {UX_SUBCATEGORIES.map((item) => {
                const isSelected = categoryKey === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="inline-block transition-transform hover:translate-x-1"
                  >
                    <svg
                      viewBox="0 0 260 48"
                      className="h-10 sm:h-12 w-auto overflow-visible select-none"
                    >
                      <defs>
                        <linearGradient
                          id={`catHeroGrad-${item.id}`}
                          x1="0"
                          y1="0"
                          x2="1"
                          y2="1"
                        >
                          <stop offset="0%" stopColor="#FEC163" />
                          <stop offset="100%" stopColor="#DE4313" />
                        </linearGradient>
                      </defs>
                      <text
                        x="0"
                        y="36"
                        fill={isSelected ? `url(#catHeroGrad-${item.id})` : "none"}
                        stroke={isSelected ? "none" : `url(#catHeroGrad-${item.id})`}
                        strokeWidth={isSelected ? "0" : "1.5"}
                        fontFamily="var(--font-dm), sans-serif"
                        fontWeight="700"
                        fontSize="38"
                        letterSpacing="0"
                      >
                        {item.label}
                      </text>
                    </svg>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Mockup Display matching the category */}
          <div className="lg:col-span-6 w-full flex items-center justify-center lg:justify-end">
            {categoryKey === "apps" ? (
              <AppHeroPhoneMockup className="w-full max-w-[240px] sm:max-w-[270px]" />
            ) : categoryKey === "websites" ? (
              <LaptopWebsitePreview
                clientName="ELEVATE SOLUTIONS"
                headline="UNLOCKING EXCELLENCE"
                subheadline="WITH MICROSOFT:"
              />
            ) : categoryKey === "softwares" ? (
              <HospitalDashboardMockup />
            ) : categoryKey === "branding" ? (
              <BrandingMonitorMockup className="w-full max-w-[540px]" />
            ) : (
              <MarketingMonitorMockup className="w-full max-w-[540px]" />
            )}
          </div>
        </div>
      </div>

      {/* ── 02. SUB-NAVIGATION FILTER BAR (3 Dropdown Columns Matching Screenshot) ── */}
      <div className="relative w-full bg-transparent pt-2 pb-8 select-none">
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
              <span>{categoryKey === "apps" ? "Mobile Apps" : categoryKey === "websites" ? "Websites" : "All Categories"}</span>
              <span className="text-[#DE4313]">▾</span>
            </button>
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />
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
              <span>{categoryKey === "apps" ? "Consumer & Enterprise" : "Responsive Portal"}</span>
              <span className="text-[#DE4313]">▾</span>
            </button>
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />
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
              <span>All Industries</span>
              <span className="text-[#DE4313]">▾</span>
            </button>
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── 03. MASONRY PROJECT CARDS GRID (3 Columns Matching Figma Screenshot) ── */}
      {categoryKey === "apps" ? (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-start">
          {/* ════════ COLUMN 1 ════════ */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Card 1: Chat & Collaboration App (Tall 6-Screen Grid) */}
            <div
              onClick={() =>
                setSelectedProject(
                  getProjectForModal(
                    "chat-collab-app",
                    "Chat & Collaboration App",
                    "apps"
                  )
                )
              }
              className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)]"
            >
              {/* 6-Screen App Showcase Canvas */}
              <div className="w-full bg-[#0F172A] p-3 sm:p-4 border-b border-[#DE4313]/30 grid grid-cols-2 gap-2">
                {/* Screen 1: Chat Conversation */}
                <div className="bg-[#1E293B] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-slate-700">
                  <div className="border-b border-slate-700 pb-1 flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="font-bold">Sarah Jenkins</span>
                  </div>
                  <div className="space-y-1">
                    <div className="bg-slate-700 p-1 rounded-xs max-w-[80%]">
                      Can we review the sprint wireframes?
                    </div>
                    <div className="bg-[#0284C7] p-1 rounded-xs max-w-[80%] ml-auto text-right">
                      Sure, hopping on call!
                    </div>
                  </div>
                  <div className="h-4 bg-slate-800 rounded-xs flex items-center px-1 text-slate-400">
                    Type a message...
                  </div>
                </div>

                {/* Screen 2: Direct Messages List */}
                <div className="bg-[#1E293B] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-slate-700">
                  <span className="font-bold border-b border-slate-700 pb-1">
                    Messages (14)
                  </span>
                  <div className="space-y-1.5 my-auto">
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-blue-500" />
                      <div className="flex-1 truncate">
                        <p className="font-bold">Design Sync</p>
                        <p className="text-[6px] text-slate-400">Files attached</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-purple-500" />
                      <div className="flex-1 truncate">
                        <p className="font-bold">Dev Lead</p>
                        <p className="text-[6px] text-slate-400">Sprint 42 ready</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Screen 3: User Channel List */}
                <div className="bg-[#0284C7]/20 rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-cyan-800">
                  <span className="font-bold text-cyan-300"># Channels</span>
                  <div className="space-y-1 text-[6.5px] text-slate-300">
                    <p># announcements</p>
                    <p># sprint-planning</p>
                    <p># design-critique</p>
                    <p># releases</p>
                  </div>
                  <div className="bg-cyan-600 text-center py-0.5 rounded-xs font-bold text-[6px]">
                    + Add Channel
                  </div>
                </div>

                {/* Screen 4: Voice & Audio Call */}
                <div className="bg-[#0F172A] rounded-xs p-2 text-[7px] text-white flex flex-col items-center justify-between h-32 border border-slate-700 text-center">
                  <span className="text-[6px] text-slate-400">Call active</span>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-sm">
                    🎙
                  </div>
                  <span className="font-bold text-[7px]">Product Team (4)</span>
                  <div className="w-8 h-3 bg-red-600 rounded-full text-[6px] flex items-center justify-center font-bold">
                    End
                  </div>
                </div>

                {/* Screen 5: Analytics & Stats */}
                <div className="bg-[#1E293B] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-slate-700">
                  <span className="font-bold">Activity Stats</span>
                  <div className="flex items-end justify-between h-14 px-1 pb-1">
                    <div className="w-2 h-6 bg-cyan-500 rounded-t-xs" />
                    <div className="w-2 h-10 bg-blue-500 rounded-t-xs" />
                    <div className="w-2 h-8 bg-purple-500 rounded-t-xs" />
                    <div className="w-2 h-12 bg-amber-500 rounded-t-xs" />
                  </div>
                  <span className="text-[6px] text-slate-400">
                    98.4% uptime
                  </span>
                </div>

                {/* Screen 6: Profile & Security */}
                <div className="bg-[#1E293B] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-slate-700 text-center">
                  <div className="w-8 h-8 rounded-full bg-amber-500 mx-auto flex items-center justify-center font-bold">
                    SJ
                  </div>
                  <span className="font-bold text-[7.5px]">Sarah Jenkins</span>
                  <span className="text-[6px] text-emerald-400">● Available</span>
                  <div className="bg-slate-700 py-0.5 rounded-xs text-[6px]">
                    Profile Settings
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
                Chat &amp; Collaboration App
              </div>
            </div>

            {/* Card 2: Digital Service App (Blue Header, Landscape Banner) */}
            <div
              onClick={() =>
                setSelectedProject(
                  getProjectForModal(
                    "digital-service-app",
                    "Digital Service App",
                    "apps"
                  )
                )
              }
              className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)]"
            >
              <div className="w-full bg-[#0369A1] p-3 sm:p-4 border-b border-[#DE4313]/30 flex flex-col gap-2.5">
                {/* Screen 1: Top banner */}
                <div className="bg-white rounded-xs p-2.5 shadow-sm text-left">
                  <div className="w-full h-14 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-600 rounded-xs flex items-center justify-between p-2 text-white">
                    <div>
                      <span className="font-bold text-[8px] block">
                        Citizen Portal
                      </span>
                      <span className="text-[6px] text-teal-100">
                        Digital Smart Services
                      </span>
                    </div>
                    <span className="text-xl">🌿</span>
                  </div>
                  <div className="mt-2 flex items-center justify-around text-[7px] text-gray-700">
                    <span className="font-bold text-[#0369A1]">● Services</span>
                    <span>● Track</span>
                    <span>● Support</span>
                  </div>
                </div>

                {/* Screen 2: Form & Details */}
                <div className="bg-white rounded-xs p-2.5 shadow-sm text-left">
                  <span className="font-bold text-[7.5px] text-gray-900 border-b border-gray-100 pb-1 block">
                    Online Application Tracking
                  </span>
                  <div className="space-y-1.5 mt-1.5 text-[6.5px] text-gray-600">
                    <div className="p-1 bg-sky-50 rounded-xs flex justify-between">
                      <span>e-Citizen Token #8492</span>
                      <strong className="text-emerald-600">Approved</strong>
                    </div>
                    <div className="p-1 bg-sky-50 rounded-xs flex justify-between">
                      <span>Utility Connection #1102</span>
                      <strong className="text-amber-600">In Review</strong>
                    </div>
                  </div>
                </div>

                {/* Screen 3: Category List */}
                <div className="bg-white rounded-xs p-2.5 shadow-sm text-left">
                  <span className="font-bold text-[7px] text-gray-900 mb-1 block">
                    Services Directory
                  </span>
                  <div className="space-y-1 text-[6.5px] text-gray-700">
                    <div className="flex justify-between py-0.5 border-b border-gray-100">
                      <span>Public Records</span>
                      <span>›</span>
                    </div>
                    <div className="flex justify-between py-0.5 border-b border-gray-100">
                      <span>Trade License</span>
                      <span>›</span>
                    </div>
                    <div className="flex justify-between py-0.5">
                      <span>Health Certificates</span>
                      <span>›</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
                Digital Service App
              </div>
            </div>
          </div>

          {/* ════════ COLUMN 2 ════════ */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Card 3: Financial & Trading App (Tall 6-Screen Grid) */}
            <div
              onClick={() =>
                setSelectedProject(
                  getProjectForModal(
                    "financial-trading-app",
                    "Financial & Trading App",
                    "apps"
                  )
                )
              }
              className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)]"
            >
              <div className="w-full bg-[#18181B] p-3 sm:p-4 border-b border-[#DE4313]/30 grid grid-cols-2 gap-2">
                {/* Screen 1: Balance Card */}
                <div className="bg-[#27272A] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-zinc-700">
                  <span className="text-[6px] text-zinc-400">Total Net Worth</span>
                  <span className="font-black text-sm text-white">$48,290.40</span>
                  <span className="text-emerald-400 text-[6px]">▲ +4.82% today</span>
                  <div className="w-full h-1 bg-zinc-600 rounded-full mt-2" />
                </div>

                {/* Screen 2: Candlestick Chart */}
                <div className="bg-[#27272A] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-zinc-700">
                  <div className="flex justify-between font-bold">
                    <span>BTC/USD</span>
                    <span className="text-emerald-400">$64,280</span>
                  </div>
                  {/* Candlesticks SVG */}
                  <div className="flex items-end justify-around h-16 py-1">
                    <div className="w-1.5 h-8 bg-emerald-500" />
                    <div className="w-1.5 h-12 bg-emerald-500" />
                    <div className="w-1.5 h-6 bg-red-500" />
                    <div className="w-1.5 h-10 bg-emerald-500" />
                  </div>
                  <span className="text-[5.5px] text-zinc-400">1D • 1W • 1M • 1Y</span>
                </div>

                {/* Screen 3: Asset Breakdown */}
                <div className="bg-[#27272A] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-zinc-700">
                  <span className="font-bold">Portfolio Assets</span>
                  <div className="space-y-1 text-[6.5px]">
                    <div className="flex justify-between">
                      <span>Ethereum</span>
                      <strong>$18,400</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Solana</span>
                      <strong>$8,200</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>USDT</span>
                      <strong>$21,690</strong>
                    </div>
                  </div>
                </div>

                {/* Screen 4: Transaction Ledger */}
                <div className="bg-[#27272A] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-zinc-700">
                  <span className="font-bold">Recent Transfers</span>
                  <div className="space-y-1 text-[6px] text-zinc-300">
                    <p>Deposit: +$5,000</p>
                    <p>Trade: 0.4 BTC</p>
                    <p>Withdraw: -$1,200</p>
                  </div>
                  <div className="bg-emerald-600 text-center py-0.5 rounded-xs font-bold text-[6px]">
                    Trade Now
                  </div>
                </div>

                {/* Screen 5: Market Heatmap */}
                <div className="bg-[#27272A] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-zinc-700">
                  <span className="font-bold">Market Gainers</span>
                  <div className="grid grid-cols-2 gap-1 my-auto text-[6px] text-center font-bold">
                    <div className="bg-emerald-700/80 p-1 rounded-xs">AVAX +12%</div>
                    <div className="bg-emerald-700/80 p-1 rounded-xs">NEAR +9%</div>
                    <div className="bg-red-800/80 p-1 rounded-xs">DOGE -2%</div>
                    <div className="bg-emerald-700/80 p-1 rounded-xs">LINK +6%</div>
                  </div>
                </div>

                {/* Screen 6: Card & Security */}
                <div className="bg-[#27272A] rounded-xs p-2 text-[7px] text-white flex flex-col justify-between h-32 border border-zinc-700">
                  <div className="w-full h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xs p-1 flex flex-col justify-between">
                    <span className="text-[5px]">DEBIT BLACK</span>
                    <span className="text-[6px] font-mono">•••• 8492</span>
                  </div>
                  <span className="text-[6px] text-emerald-400">
                    ✓ 2FA Verified
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
                Financial &amp; Trading App
              </div>
            </div>

            {/* Card 4: Gamified Learning App (Road Map & Milestones) */}
            <div
              onClick={() =>
                setSelectedProject(
                  getProjectForModal(
                    "gamified-learning-app",
                    "Gamified Learning App",
                    "apps"
                  )
                )
              }
              className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)]"
            >
              <div className="w-full bg-[#3B82F6]/15 p-3 sm:p-4 border-b border-[#DE4313]/30 flex flex-col gap-2.5">
                {/* Screen 1: Journey Road Map */}
                <div className="bg-[#FAF5FF] rounded-xs p-2 shadow-sm relative overflow-hidden">
                  <span className="font-bold text-[7.5px] text-purple-900 block mb-1">
                    Level 4: Expedition Trail
                  </span>
                  {/* Winding path SVG */}
                  <svg viewBox="0 0 160 50" className="w-full h-12" fill="none">
                    <path
                      d="M10 40 Q40 10 80 40 T150 15"
                      stroke="#A855F7"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <circle cx="20" cy="33" r="5" fill="#EAB308" />
                    <circle cx="65" cy="27" r="5" fill="#EAB308" />
                    <circle cx="110" cy="37" r="5" fill="#EAB308" />
                    <circle cx="145" cy="17" r="6" fill="#10B981" />
                  </svg>
                </div>

                {/* Screen 2: Interactive Question Screen */}
                <div className="bg-white rounded-xs p-2 shadow-sm text-left">
                  <div className="flex justify-between text-[7px] text-purple-800 font-bold mb-1">
                    <span>Quiz Challenge #2</span>
                    <span>⭐ 240 Pts</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1 text-[6.5px]">
                    <div className="p-1 bg-purple-50 rounded-xs border border-purple-200 text-purple-900">
                      Option A
                    </div>
                    <div className="p-1 bg-purple-600 text-white rounded-xs font-bold">
                      Option B ✓
                    </div>
                  </div>
                </div>

                {/* Screen 3: Badges */}
                <div className="bg-white rounded-xs p-2 shadow-sm flex items-center justify-around text-[12px]">
                  <span>🏆</span>
                  <span>🎖</span>
                  <span>🥇</span>
                  <span>⭐</span>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
                Gamified Learning App
              </div>
            </div>
          </div>

          {/* ════════ COLUMN 3 ════════ */}
          <div className="flex flex-col gap-6 sm:gap-7">
            {/* Card 5: Lifestyle Community App (Blue UI 4-Screen) */}
            <div
              onClick={() =>
                setSelectedProject(
                  getProjectForModal(
                    "lifestyle-community-app",
                    "Lifestyle Community App",
                    "apps"
                  )
                )
              }
              className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)]"
            >
              <div className="w-full bg-[#1E3A8A]/30 p-3 sm:p-4 border-b border-[#DE4313]/30 grid grid-cols-2 gap-2">
                <div className="bg-white rounded-xs p-2 text-[7px] text-gray-800 h-28 flex flex-col justify-between shadow-xs">
                  <span className="font-bold text-blue-900">Explore Feed</span>
                  <div className="w-full h-12 bg-sky-100 rounded-xs flex items-center justify-center text-[14px]">
                    🏔
                  </div>
                  <span className="text-[6px] text-gray-500">
                    2.4k community likes
                  </span>
                </div>

                <div className="bg-white rounded-xs p-2 text-[7px] text-gray-800 h-28 flex flex-col justify-between shadow-xs">
                  <span className="font-bold text-blue-900">Events</span>
                  <div className="space-y-1 text-[6px]">
                    <p className="font-bold text-blue-700">Design Meetup</p>
                    <p className="text-gray-500">Dhaka Center</p>
                  </div>
                  <div className="bg-blue-600 text-white text-center py-0.5 rounded-xs font-bold text-[6px]">
                    RSVP
                  </div>
                </div>

                <div className="bg-white rounded-xs p-2 text-[7px] text-gray-800 h-28 flex flex-col justify-between shadow-xs">
                  <span className="font-bold text-blue-900">Stories</span>
                  <div className="flex gap-1 justify-around text-base">
                    <span>☕</span>
                    <span>🎨</span>
                    <span>🚀</span>
                  </div>
                  <span className="text-[6px] text-gray-500">18 updates</span>
                </div>

                <div className="bg-white rounded-xs p-2 text-[7px] text-gray-800 h-28 flex flex-col justify-between shadow-xs">
                  <span className="font-bold text-blue-900">Live Space</span>
                  <div className="w-full h-8 bg-indigo-50 rounded-xs flex items-center justify-center text-[10px] text-indigo-700 font-bold">
                    Join Voice 🎧
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
                Lifestyle Community App
              </div>
            </div>

            {/* Card 6: Promotional Spin Wheel App (Red Gamified Campaign) */}
            <div
              onClick={() =>
                setSelectedProject(
                  getProjectForModal(
                    "spin-wheel-campaign-app",
                    "Promotional Spin Wheel App",
                    "apps"
                  )
                )
              }
              className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 flex flex-col overflow-hidden shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)]"
            >
              <div className="w-full bg-[#B91C1C] p-3 sm:p-4 border-b border-[#DE4313]/30 flex flex-col gap-2.5">
                {/* Screen 1: Top Campaign Options */}
                <div className="bg-white rounded-xs p-2 text-center shadow-md">
                  <div className="flex items-center justify-between text-[7px] font-bold text-red-700 pb-1 border-b border-gray-100">
                    <span>‹ CAMPAIGNS</span>
                    <span>WIN PRIZES</span>
                  </div>
                  <div className="mt-1.5 space-y-1">
                    <div className="py-1 px-2 bg-amber-400 text-black font-black text-[8px] rounded-xs shadow-xs uppercase">
                      SPIN THE WHEEL
                    </div>
                    <div className="py-1 px-2 bg-red-600 text-white font-black text-[8px] rounded-xs shadow-xs uppercase">
                      SLOT MACHINE 777
                    </div>
                  </div>
                </div>

                {/* Screen 2: Big Spinning Wheel */}
                <div className="bg-[#DC2626] rounded-xs p-2.5 text-center text-white shadow-md flex flex-col items-center">
                  <span className="text-[7.5px] font-black uppercase tracking-wider mb-1">
                    SPIN THE WHEEL!
                  </span>

                  {/* Roulette wheel circle */}
                  <div className="relative w-24 h-24 my-1">
                    <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
                      <circle cx="50" cy="50" r="48" fill="#FFFFFF" stroke="#FDE047" strokeWidth="4" />
                      {/* Red and white wedges */}
                      <path d="M50 50 L50 2 A48 48 0 0 1 84 16 Z" fill="#EF4444" />
                      <path d="M50 50 L84 16 A48 48 0 0 1 98 50 Z" fill="#FFFFFF" />
                      <path d="M50 50 L98 50 A48 48 0 0 1 84 84 Z" fill="#EF4444" />
                      <path d="M50 50 L84 84 A48 48 0 0 1 50 98 Z" fill="#FFFFFF" />
                      <path d="M50 50 L50 98 A48 48 0 0 1 16 84 Z" fill="#EF4444" />
                      <path d="M50 50 L16 84 A48 48 0 0 1 2 50 Z" fill="#FFFFFF" />
                      <path d="M50 50 L2 50 A48 48 0 0 1 16 16 Z" fill="#EF4444" />
                      <path d="M50 50 L16 16 A48 48 0 0 1 50 2 Z" fill="#FFFFFF" />
                      {/* Center hub */}
                      <circle cx="50" cy="50" r="10" fill="#FBBF24" stroke="#DC2626" strokeWidth="2" />
                    </svg>
                  </div>

                  <span className="text-[6.5px] text-amber-200 mt-1">
                    Tap to spin and win consumer prizes
                  </span>
                </div>

                {/* Screen 3: Prize Key Ring Unlock Modal */}
                <div className="bg-[#B91C1C] rounded-xs p-2 text-center text-white border border-red-500 shadow-md">
                  <span className="text-[7px] text-amber-300 font-bold uppercase block mb-1">
                    CONGRATULATIONS!
                  </span>
                  <div className="w-14 h-14 rounded-full bg-amber-400 mx-auto flex items-center justify-center text-2xl shadow-inner border-2 border-white my-1">
                    🔑
                  </div>
                  <span className="text-[8px] font-black uppercase text-white block">
                    EXCLUSIVE KEY RING
                  </span>
                  <div className="mt-2 py-1 bg-white text-red-700 font-black text-[7.5px] rounded-xs uppercase">
                    CONTINUE
                  </div>
                </div>
              </div>

              {/* Caption */}
              <div className="px-4 py-3 bg-[#070B19] text-xs sm:text-sm font-dm text-gray-300">
                Promotional Spin Wheel App
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ════════ FALLBACK CATEGORY GRID (Websites & Softwares) ════════ */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/50 hover:border-[#FEC163] transition-all duration-300 rounded-sm overflow-hidden flex flex-col shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)] transform hover:-translate-y-1"
            >
              {/* Thumbnail Canvas */}
              <div className="relative w-full aspect-[16/10] bg-[#020510] border-b border-[#DE4313]/30 overflow-hidden flex items-center justify-center">
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover Overlay Hint */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-gradient-to-r from-[#FEC163] to-[#DE4313] text-white text-xs font-dm font-bold tracking-wider uppercase shadow-md">
                    Quick Preview
                  </span>
                </div>
              </div>

              {/* Content info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#FEC163] font-dm mb-2">
                    <span>{project.client}</span>
                    <span className="text-gray-400">{project.year}</span>
                  </div>
                  <h3 className="font-dm font-bold text-base sm:text-lg text-white group-hover:text-[#FEC163] transition-colors leading-snug line-clamp-2">
                    {project.title}
                  </h3>
                </div>

                {/* Tags & Case study badge */}
                <div className="mt-4 pt-3 border-t border-[#DE4313]/20 flex items-center justify-between text-xs">
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] bg-white/5 rounded-xs text-gray-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.hasCaseStudy ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
                      Case Study ✓
                    </span>
                  ) : (
                    <span className="text-[10px] uppercase tracking-wider text-gray-500">
                      Preview Only
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ── 04. POPUP MODAL (Triggers when user clicks any thumbnail) ── */}
      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
