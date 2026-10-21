"use client";

import React, { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkProject, WorkCategory } from "@/data/workProjects";
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
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(
    null
  );

  // Active discipline based on category
  const activeDiscipline =
    categoryKey === "branding"
      ? "branding"
      : categoryKey === "marketing"
      ? "marketing"
      : "ux";

  // ── 01. FILTER STATE (Category, Work Type, Industry) ──
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [selectedWorkTypeFilter, setSelectedWorkTypeFilter] = useState("All");
  const [selectedIndustryFilter, setSelectedIndustryFilter] = useState("All");

  const [catOpen, setCatOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [indOpen, setIndOpen] = useState(false);

  const filterRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(e.target as Node)
      ) {
        setCatOpen(false);
        setTypeOpen(false);
        setIndOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // ── 02. DYNAMIC FILTER OPTIONS GENERATION ──
  const categoryOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.subCategory) set.add(p.subCategory);
    });
    return ["All", ...Array.from(set)];
  }, [projects]);

  const workTypeOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.workType) set.add(p.workType);
    });
    return ["All", ...Array.from(set)];
  }, [projects]);

  const industryOptions = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      if (p.industry) set.add(p.industry);
    });
    return ["All", ...Array.from(set)];
  }, [projects]);

  // ── 03. REAL-TIME FILTERED PROJECTS ──
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // 1. Subcategory filter
      const matchCategory =
        selectedCategoryFilter === "All" ||
        project.subCategory?.toLowerCase() ===
          selectedCategoryFilter.toLowerCase() ||
        project.tags.some(
          (t) => t.toLowerCase() === selectedCategoryFilter.toLowerCase()
        );

      // 2. Work type filter
      const matchWorkType =
        selectedWorkTypeFilter === "All" ||
        project.workType?.toLowerCase() ===
          selectedWorkTypeFilter.toLowerCase() ||
        project.tags.some(
          (t) => t.toLowerCase() === selectedWorkTypeFilter.toLowerCase()
        );

      // 3. Industry filter
      const matchIndustry =
        selectedIndustryFilter === "All" ||
        project.industry?.toLowerCase() ===
          selectedIndustryFilter.toLowerCase() ||
        project.tags.some(
          (t) => t.toLowerCase() === selectedIndustryFilter.toLowerCase()
        );

      return matchCategory && matchWorkType && matchIndustry;
    });
  }, [
    projects,
    selectedCategoryFilter,
    selectedWorkTypeFilter,
    selectedIndustryFilter,
  ]);

  const hasActiveFilters =
    selectedCategoryFilter !== "All" ||
    selectedWorkTypeFilter !== "All" ||
    selectedIndustryFilter !== "All";

  const handleResetFilters = () => {
    setSelectedCategoryFilter("All");
    setSelectedWorkTypeFilter("All");
    setSelectedIndustryFilter("All");
  };

  // ── 03. DYNAMIC RESPONSIVE COLUMN COUNT FOR MASONRY ──
  // 3 columns on desktop (>=1024px), 2 on tablet (>=768px), 1 on mobile (<768px)
  const [columnCount, setColumnCount] = useState(3);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setColumnCount(1);
      } else if (width < 1024) {
        setColumnCount(2);
      } else {
        setColumnCount(3);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  // Split filtered projects across columns to form a true Masonry layout:
  // Item 0, 1, 2 sit across the top row; each subsequent item tucks directly
  // below the item above it with auto-adjusted height and zero excessive gaps.
  const masonryColumns = useMemo(() => {
    const cols: WorkProject[][] = Array.from({ length: columnCount }, () => []);
    filteredProjects.forEach((project, idx) => {
      cols[idx % columnCount].push(project);
    });
    return cols;
  }, [filteredProjects, columnCount]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24">
      {/* ── 01. HERO CARD (Matching Main Work Hero Frame 100%) ── */}
      <div className="relative w-full bg-transparent min-h-[460px] sm:min-h-[500px] lg:min-h-[520px] flex items-center pt-14 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 pl-6 sm:pl-10 lg:pl-14 pr-6 sm:pr-10 lg:pr-14 mb-8">
        {/* Top horizontal border line (runs through discipline icons and stops before Work label) */}
        <div
          className="absolute top-0 left-0 right-[45px] sm:right-[70px] h-[1.5px] pointer-events-none z-[1]"
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
                : "bg-[var(--bg)] card-badge-bg border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
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
                : "bg-[var(--bg)] card-badge-bg border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
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
              className={
                activeDiscipline === "branding" ? "brightness-0 invert" : ""
              }
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
                : "bg-[var(--bg)] card-badge-bg border-[1.5px] border-[#DE4313] hover:border-[#FEC163]"
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
              className={
                activeDiscipline === "marketing" ? "brightness-0 invert" : ""
              }
            />
          </Link>

          {/* "Work" Page Heading */}
          <Link
            href="/work"
            className="font-dm font-normal text-3xl sm:text-4xl lg:text-[42px] text-[var(--ink)] tracking-tight leading-none ml-2 pl-2 sm:pl-3 bg-[var(--bg)] card-badge-bg relative z-10 hover:opacity-80 transition-opacity"
          >
            Work
          </Link>
        </div>

        {/* ── Inner Glow Effects ── */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(222, 67, 19, 0.5) 0%, rgba(222, 67, 19, 0.15) 50%, transparent 72%)",
              filter: "blur(85px)",
              width: "480px",
              height: "420px",
              right: "40px",
              bottom: "10px",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute rounded-full"
            style={{
              background: "rgba(222, 67, 19, 0.1)",
              filter: "blur(90px)",
              width: "340px",
              height: "260px",
              left: "20px",
              top: "60px",
            }}
          />
        </div>

        {/* ── Main Hero Content Grid ── */}
        <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Heading + Subtitle Links */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {activeDiscipline === "ux" ? (
              <>
                <h1 className="font-dm font-bold text-3xl sm:text-4xl lg:text-[50px] leading-[1.08] text-[var(--ink)] uppercase tracking-tight">
                  UX & UI DESIGN
                </h1>

                {/* Vertical Sub-Discipline Text Stack matching Figma Screenshot 2 */}
                <div className="flex flex-col space-y-1 sm:space-y-1.5 pt-1">
                  {UX_SUBCATEGORIES.map((sub) => {
                    const isActive = sub.id === categoryKey;
                    return (
                      <Link
                        key={sub.id}
                        href={sub.href}
                        className={`font-dm font-bold text-2xl sm:text-3xl lg:text-[40px] leading-tight transition-all text-left w-fit ${
                          isActive
                            ? "text-transparent bg-clip-text font-bold"
                            : "hover:opacity-100 transition-opacity"
                        }`}
                        style={
                          isActive
                            ? {
                                backgroundImage:
                                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                                color: "transparent",
                              }
                            : {
                                color: "transparent",
                                WebkitTextStroke: "1.5px #DE4313",
                              }
                        }
                      >
                        {sub.label}
                      </Link>
                    );
                  })}
                </div>
              </>
            ) : (
              <>
                <h1 className="font-dm font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.08] text-[var(--ink)] uppercase tracking-tight">
                  {meta.title}
                </h1>
                <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed max-w-md pt-1">
                  {meta.description}
                </p>
              </>
            )}
          </div>

          {/* Right Column: Hero Graphic Preview */}
          <div className="lg:col-span-7 w-full flex items-center justify-center lg:justify-end">
            {categoryKey === "websites" && (
              <LaptopWebsitePreview
                clientName="ELEVATE SOLUTIONS"
                headline="UNLOCKING EXCELLENCE"
                subheadline="WITH MICROSOFT:"
              />
            )}
            {categoryKey === "apps" && (
              <AppHeroPhoneMockup className="w-full max-w-[500px]" />
            )}
            {categoryKey === "softwares" && (
              <HospitalDashboardMockup className="w-full max-w-[540px]" />
            )}
            {categoryKey === "branding" && (
              <BrandingMonitorMockup className="w-full max-w-[540px]" />
            )}
            {categoryKey === "marketing" && (
              <MarketingMonitorMockup className="w-full max-w-[540px]" />
            )}
          </div>
        </div>
      </div>

      {/* ── 02. SUB-NAVIGATION REAL-TIME FILTER BAR ── */}
      <div
        ref={filterRef}
        className="relative w-full bg-transparent pt-2 pb-8 select-none"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* ── Filter 1: CATEGORY ── */}
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
              <span className="truncate">{selectedCategoryFilter}</span>
              <span
                className={`text-[#DE4313] transition-transform duration-200 ${
                  catOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />

            {/* Dropdown Menu */}
            {catOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#0A0F24] border border-[#DE4313]/60 rounded-[2px] shadow-2xl z-40 max-h-60 overflow-y-auto py-1 backdrop-blur-md">
                {categoryOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedCategoryFilter(opt);
                      setCatOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs sm:text-sm font-dm transition-colors flex items-center justify-between ${
                      selectedCategoryFilter === opt
                        ? "text-[#FEC163] font-bold bg-white/5"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{opt}</span>
                    {selectedCategoryFilter === opt && (
                      <span className="text-[#DE4313] text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Filter 2: WORK TYPE ── */}
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
              <span className="truncate">{selectedWorkTypeFilter}</span>
              <span
                className={`text-[#DE4313] transition-transform duration-200 ${
                  typeOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />

            {/* Dropdown Menu */}
            {typeOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#0A0F24] border border-[#DE4313]/60 rounded-[2px] shadow-2xl z-40 max-h-60 overflow-y-auto py-1 backdrop-blur-md">
                {workTypeOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedWorkTypeFilter(opt);
                      setTypeOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs sm:text-sm font-dm transition-colors flex items-center justify-between ${
                      selectedWorkTypeFilter === opt
                        ? "text-[#FEC163] font-bold bg-white/5"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{opt}</span>
                    {selectedWorkTypeFilter === opt && (
                      <span className="text-[#DE4313] text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ── Filter 3: INDUSTRY ── */}
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
              <span className="truncate">{selectedIndustryFilter}</span>
              <span
                className={`text-[#DE4313] transition-transform duration-200 ${
                  indOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>
            <div
              className="w-full h-[1.5px] mt-2"
              style={{
                background:
                  "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
              }}
            />

            {/* Dropdown Menu */}
            {indOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-[#0A0F24] border border-[#DE4313]/60 rounded-[2px] shadow-2xl z-40 max-h-60 overflow-y-auto py-1 backdrop-blur-md">
                {industryOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSelectedIndustryFilter(opt);
                      setIndOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-xs sm:text-sm font-dm transition-colors flex items-center justify-between ${
                      selectedIndustryFilter === opt
                        ? "text-[#FEC163] font-bold bg-white/5"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{opt}</span>
                    {selectedIndustryFilter === opt && (
                      <span className="text-[#DE4313] text-xs">✓</span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Reset Active Filters Pill */}
        {hasActiveFilters && (
          <div className="mt-4 flex items-center gap-3">
            <span className="text-xs text-gray-400 font-dm">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-xs text-[#DE4313] hover:text-[#FEC163] font-dm underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* ── 03. DIRECT SCREENSHOT CARD GRID (Masonry Layout: Auto Height, Zero Extra Gap) ── */}
      {/* Rules: 3 Columns, 26px Gap, All-Side Border, 20px-22px Padding, 18px Regular Almarai Title Inside */}
      {filteredProjects.length > 0 ? (
        <div
          className="w-full grid gap-[26px] items-start"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
          }}
        >
          {masonryColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-[26px] w-full">
              {col.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer bg-[#070B19] border border-[#DE4313]/60 hover:border-[#FEC163] transition-all duration-300 rounded-[2px] p-[20px] sm:p-[22px] flex flex-col justify-between shadow-lg hover:shadow-[0_0_30px_rgba(222,67,19,0.35)] w-full"
                >
                  {/* Screenshots: Multi-Screen Display (Supports 3, 2, or 1 screen per card) */}
                  {project.cardScreenshots && project.cardScreenshots.length > 1 ? (
                    project.cardScreenshots.length >= 3 ? (
                      /* 3 Phone Screens Side-by-Side */
                      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 w-full items-start">
                        {project.cardScreenshots.slice(0, 3).map((img, i) => (
                          <div
                            key={i}
                            className="relative w-full overflow-hidden rounded-[2px] bg-[#0A0F24]"
                          >
                            <Image
                              src={img}
                              alt={`${project.title} screen ${i + 1}`}
                              width={220}
                              height={460}
                              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 block"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* 2 Phone Screens Side-by-Side */
                      <div className="grid grid-cols-2 gap-2 sm:gap-2.5 w-full items-start">
                        {project.cardScreenshots.slice(0, 2).map((img, i) => (
                          <div
                            key={i}
                            className="relative w-full overflow-hidden rounded-[2px] bg-[#0A0F24]"
                          >
                            <Image
                              src={img}
                              alt={`${project.title} screen ${i + 1}`}
                              width={320}
                              height={640}
                              className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300 block"
                            />
                          </div>
                        ))}
                      </div>
                    )
                  ) : (
                    /* 1 Screenshot (Single screenshot or default website/software) */
                    <div className="relative w-full overflow-hidden rounded-[2px] bg-[#0A0F24]">
                      <Image
                        src={
                          project.cardScreenshots?.[0] || project.thumbnail
                        }
                        alt={project.title}
                        width={600}
                        height={1200}
                        className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-300 block"
                        priority={false}
                      />
                    </div>
                  )}

                  {/* Title Inside Card at Bottom (18px Regular Almarai Font) */}
                  <h3 className="font-almarai font-normal text-[18px] text-[var(--ink)] mt-4 text-left leading-snug group-hover:text-[#FEC163] transition-colors">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full py-16 text-center border border-[#DE4313]/30 rounded-[2px] p-8">
          <p className="font-dm text-base text-gray-300 mb-3">
            No projects found matching the selected filters.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="px-5 py-2 rounded-xs bg-gradient-to-r from-[#FEC163] to-[#DE4313] text-white font-dm font-bold text-xs uppercase tracking-wider"
          >
            Reset Filters
          </button>
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
