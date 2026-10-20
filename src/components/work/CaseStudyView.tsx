"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkProject } from "@/data/workProjects";

interface CaseStudyViewProps {
  project: WorkProject;
}

export default function CaseStudyView({ project }: CaseStudyViewProps) {
  const cs = project.caseStudyData;

  return (
    <article className="w-full px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 lg:pt-24 pb-24 text-[var(--ink)]">
      {/* ── Breadcrumb Navigation ── */}
      <div className="mb-8 flex items-center justify-between text-xs sm:text-sm font-dm font-bold uppercase tracking-wider">
        <Link
          href={`/work/${project.category}`}
          className="inline-flex items-center gap-2 text-[#FEC163] hover:text-[#DE4313] transition-colors"
        >
          <span>←</span>
          <span>Back to {project.categoryLabel}</span>
        </Link>

        <span className="text-gray-400">
          Case Study • {project.year}
        </span>
      </div>

      {/* ── 01. HERO HEADER ── */}
      <header className="relative w-full border border-[#DE4313]/60 bg-[#070B19]/80 p-6 sm:p-10 lg:p-14 mb-12 rounded-sm overflow-hidden shadow-2xl">
        <div className="relative z-10 space-y-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-dm font-bold uppercase tracking-wider text-[#FEC163]">
            <span>{project.categoryLabel}</span>
            <span>/</span>
            <span>{project.client}</span>
          </div>

          <h1 className="font-dm font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            {project.title}
          </h1>

          <p className="font-dm text-base sm:text-lg text-gray-300 leading-relaxed">
            {cs?.overview || project.description}
          </p>

          {/* Metadata Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#DE4313]/30 text-xs font-dm">
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-[10px]">
                Client
              </span>
              <strong className="text-white text-sm">
                {cs?.client || project.client}
              </strong>
            </div>
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-[10px]">
                Role
              </span>
              <strong className="text-white text-sm">
                {cs?.role || "Lead UX/UI Designer"}
              </strong>
            </div>
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-[10px]">
                Timeline
              </span>
              <strong className="text-white text-sm">
                {cs?.year || project.year}
              </strong>
            </div>
            <div>
              <span className="block text-gray-400 uppercase tracking-wider text-[10px]">
                Discipline
              </span>
              <strong className="text-white text-sm uppercase">
                {project.discipline}
              </strong>
            </div>
          </div>
        </div>
      </header>

      {/* ── 02. COVER / HERO SHOWCASE IMAGE ── */}
      <div className="relative w-full aspect-[16/9] bg-[#020510] border border-[#DE4313]/50 rounded-sm mb-16 overflow-hidden flex items-center justify-center shadow-2xl">
        <Image
          src={project.gallery[0] || project.thumbnail}
          alt={project.title}
          fill
          className="object-contain p-6 sm:p-10"
          priority
        />
      </div>

      {/* ── 03. CHALLENGE & SOLUTION ── */}
      {cs && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-6 sm:p-8 bg-[#070B19] border border-[#DE4313]/40 rounded-sm">
            <span className="text-xs uppercase font-dm font-bold text-[#DE4313] tracking-widest block mb-2">
              01. The Challenge
            </span>
            <h2 className="font-dm font-bold text-xl sm:text-2xl text-white mb-4">
              Addressing Complex User Roadblocks
            </h2>
            <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
              {cs.challenge}
            </p>
          </div>

          <div className="p-6 sm:p-8 bg-[#070B19] border border-[#DE4313]/40 rounded-sm">
            <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block mb-2">
              02. The Solution
            </span>
            <h2 className="font-dm font-bold text-xl sm:text-2xl text-white mb-4">
              Design Strategy & Architectural Shift
            </h2>
            <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed">
              {cs.solution}
            </p>
          </div>
        </section>
      )}

      {/* ── 04. DESIGN PROCESS PHASES ── */}
      {cs?.designProcess && cs.designProcess.length > 0 && (
        <section className="mb-16">
          <div className="mb-6">
            <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block mb-1">
              Methodology
            </span>
            <h2 className="font-dm font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Design Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cs.designProcess.map((step, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#070B19] border border-[#DE4313]/40 rounded-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-dm font-bold text-lg text-white mb-2">
                    {step.phase}
                  </h3>
                  <p className="font-dm text-sm text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 05. FINAL DESIGNS GALLERY ── */}
      {cs?.finalDesigns && cs.finalDesigns.length > 0 && (
        <section className="mb-16">
          <div className="mb-6">
            <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block mb-1">
              Visual Execution
            </span>
            <h2 className="font-dm font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Final Designs
            </h2>
          </div>

          <div className="space-y-8">
            {cs.finalDesigns.map((fd, idx) => (
              <div
                key={idx}
                className="bg-[#070B19] border border-[#DE4313]/40 rounded-sm overflow-hidden"
              >
                <div className="relative w-full aspect-[16/10] bg-[#020510] flex items-center justify-center">
                  <Image
                    src={fd.image}
                    alt={fd.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                <div className="p-5 flex items-center justify-between border-t border-[#DE4313]/25">
                  <h3 className="font-dm font-bold text-base text-white">
                    {fd.title}
                  </h3>
                  {fd.caption && (
                    <span className="text-xs font-dm text-gray-400">
                      {fd.caption}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── 06. RESULTS & KEY METRICS ── */}
      {cs?.results && cs.results.length > 0 && (
        <section className="p-8 sm:p-12 bg-gradient-to-r from-[#070B19] via-[#0A0F24] to-[#070B19] border border-[#DE4313]/60 rounded-sm shadow-xl mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase font-dm font-bold text-[#FEC163] tracking-widest block mb-1">
              Impact & Validation
            </span>
            <h2 className="font-dm font-bold text-2xl sm:text-3xl text-white uppercase tracking-tight">
              Measurable Results
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {cs.results.map((r, idx) => (
              <div key={idx} className="p-4 border-r last:border-none border-[#DE4313]/30">
                <span className="block font-dm font-black text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#FEC163] to-[#DE4313] mb-1">
                  {r.value}
                </span>
                <span className="text-xs font-dm uppercase tracking-wider text-gray-400">
                  {r.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Bottom Navigation ── */}
      <footer className="pt-8 border-t border-[#DE4313]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href={`/work/${project.category}`}
          className="inline-flex items-center gap-2 text-sm font-dm font-bold text-[#FEC163] hover:text-[#DE4313] transition-colors uppercase tracking-wider"
        >
          <span>←</span>
          <span>Back to {project.categoryLabel}</span>
        </Link>

        <Link
          href="/work"
          className="px-6 py-2.5 rounded-full border border-[#DE4313] text-xs font-dm font-bold uppercase tracking-wider text-white hover:bg-white/10 transition-colors"
        >
          All Portfolio Work
        </Link>
      </footer>
    </article>
  );
}
