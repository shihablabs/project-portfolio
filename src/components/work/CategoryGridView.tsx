"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkProject, WorkCategory } from "@/data/workProjects";
import ProjectPreviewModal from "@/components/work/ProjectPreviewModal";

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

export default function CategoryGridView({
  categoryKey,
  meta,
  projects,
}: CategoryGridViewProps) {
  const [selectedProject, setSelectedProject] = useState<WorkProject | null>(null);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24">
      {/* ── Top Breadcrumbs / Back Navigation ── */}
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-dm font-bold text-[#FEC163] hover:text-[#DE4313] transition-colors uppercase tracking-wider"
        >
          <span>←</span>
          <span>Back to Work Hub</span>
        </Link>

        {/* Top Discipline Switcher Icons */}
        <div className="flex items-center gap-3">
          <Link
            href="/work/websites"
            title="Websites"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
              categoryKey === "websites"
                ? "bg-gradient-to-br from-[#FEC163] to-[#DE4313] shadow-[0_0_12px_rgba(222,67,19,0.7)]"
                : "bg-[#0A0F24] border border-[#DE4313]/60 hover:border-[#FEC163]"
            }`}
          >
            <Image
              src="/assets/icons/ux-icon.png"
              alt="UX/UI"
              width={20}
              height={20}
              className={categoryKey === "websites" ? "brightness-0 invert" : ""}
            />
          </Link>

          <Link
            href="/work/branding"
            title="Logo & Branding"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
              categoryKey === "branding"
                ? "bg-gradient-to-br from-[#FEC163] to-[#DE4313] shadow-[0_0_12px_rgba(222,67,19,0.7)]"
                : "bg-[#0A0F24] border border-[#DE4313]/60 hover:border-[#FEC163]"
            }`}
          >
            <Image
              src="/assets/icons/branding-icon.png"
              alt="Branding"
              width={20}
              height={20}
              className={categoryKey === "branding" ? "brightness-0 invert" : ""}
            />
          </Link>

          <Link
            href="/work/marketing"
            title="Print & Digital Marketing"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
              categoryKey === "marketing"
                ? "bg-gradient-to-br from-[#FEC163] to-[#DE4313] shadow-[0_0_12px_rgba(222,67,19,0.7)]"
                : "bg-[#0A0F24] border border-[#DE4313]/60 hover:border-[#FEC163]"
            }`}
          >
            <Image
              src="/assets/icons/marketing-icon.png"
              alt="Marketing"
              width={20}
              height={20}
              className={categoryKey === "marketing" ? "brightness-0 invert" : ""}
            />
          </Link>
        </div>
      </div>

      {/* ── Category Header Box ── */}
      <div className="relative w-full border border-[#DE4313]/60 bg-[#070B19]/70 backdrop-blur-sm p-6 sm:p-10 mb-10 overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-dm font-bold text-sm sm:text-base text-[#DE4313]">
                {meta.number}.
              </span>
              <span className="text-xs uppercase tracking-widest text-[#FEC163] font-semibold">
                Category Archive
              </span>
            </div>
            <h1 className="font-dm font-bold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-2">
              {meta.title}
            </h1>
            <p className="font-dm text-sm sm:text-base text-gray-400 max-w-2xl">
              {meta.description}
            </p>
          </div>

          <div className="text-right">
            <span className="font-dm font-black text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEC163] to-[#DE4313]">
              {projects.length.toString().padStart(2, "0")}
            </span>
            <span className="block text-[11px] uppercase tracking-wider text-gray-400">
              Curated Projects
            </span>
          </div>
        </div>
      </div>

      {/* ── 02. PROJECTS THUMBNAIL GRID ── */}
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

      {/* ── 03. POPUP MODAL (Triggers when user clicks any thumbnail) ── */}
      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
