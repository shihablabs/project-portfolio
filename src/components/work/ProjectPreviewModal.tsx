"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { WorkProject } from "@/data/workProjects";

interface ProjectPreviewModalProps {
  project: WorkProject | null;
  onClose: () => void;
}

export default function ProjectPreviewModal({
  project,
  onClose,
}: ProjectPreviewModalProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reset active image index when project changes
  useEffect(() => {
    setActiveImageIndex(0);
  }, [project]);

  // Handle ESC key to close modal & Arrow keys for slider
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : 4));
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) => (prev < 4 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  // Ensure 5 thumbnails exist for the vertical strip matching Figma
  const baseGallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.thumbnail];

  // Populate 5 slots using available gallery images
  const thumbnails = [
    baseGallery[0] || project.thumbnail,
    baseGallery[1] || baseGallery[0] || project.thumbnail,
    baseGallery[2] || baseGallery[0] || project.thumbnail,
    baseGallery[3] || baseGallery[1] || project.thumbnail,
    baseGallery[4] || baseGallery[0] || project.thumbnail,
  ];

  const currentImage = thumbnails[activeImageIndex] || thumbnails[0];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : thumbnails.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev < thumbnails.length - 1 ? prev + 1 : 0));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-in select-none"
    >
      {/* ── Outer Modal Container Frame with Circular Close Button ── */}
      <div className="relative w-full max-w-5xl">
        {/* Top-Right Circular Close Button (position centered at top-right corner) */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#070B19] border-2 border-[#DE4313] hover:border-[#FEC163] text-[#DE4313] hover:text-[#FEC163] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(222,67,19,0.5)] hover:scale-105"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1.5 1.5L12.5 12.5M1.5 12.5L12.5 1.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Modal Box */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="relative w-full bg-[#070B19] border-[1.5px] border-[#DE4313]/70 rounded-xs shadow-[0_0_60px_rgba(222,67,19,0.35)] overflow-hidden flex flex-col"
        >
          {/* Main Grid: Left Gallery + Right Info */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[520px]">
            {/* ════════ LEFT AREA: MAIN PREVIEW + 5 VERTICAL THUMBNAILS (col-span-8) ════════ */}
            <div className="lg:col-span-8 p-5 sm:p-7 flex flex-col justify-between">
              {/* Image + Thumbnail Strip Row */}
              <div className="flex-1 flex gap-4 sm:gap-5 items-stretch min-h-[340px] sm:min-h-[380px]">
                {/* 1. Large Main Preview Canvas */}
                <div className="flex-1 relative bg-[#020510] border border-[#DE4313]/30 rounded-xs overflow-hidden flex items-center justify-center p-4">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={currentImage}
                      alt={project.title}
                      fill
                      className="object-contain transition-all duration-300"
                      priority
                    />
                  </div>
                </div>

                {/* 2. Vertical Thumbnail Column (5 Thumbnails matching Figma) */}
                <div className="w-16 sm:w-20 flex-shrink-0 flex flex-col justify-between gap-2.5">
                  {thumbnails.map((thumb, idx) => {
                    const isActive = activeImageIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        aria-label={`View image ${idx + 1}`}
                        className={`relative flex-1 w-full bg-[#020510] rounded-xs overflow-hidden transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "border-2 border-[#DE4313] shadow-[0_0_12px_rgba(222,67,19,0.6)] scale-[1.03]"
                            : "border border-gray-700/60 opacity-60 hover:opacity-100 hover:border-gray-500"
                        }`}
                      >
                        <Image
                          src={thumb}
                          alt={`Thumbnail ${idx + 1}`}
                          fill
                          className="object-contain p-1"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Bottom Previous / Next Slider Navigation Bar */}
              <div className="w-full pt-5 flex items-center select-none text-xs font-dm">
                {/* Left arrow and line */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex-1 flex items-center text-[#DE4313] hover:text-[#FEC163] transition-colors cursor-pointer group pr-3"
                  aria-label="Previous image"
                >
                  <svg
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="none"
                    className="flex-shrink-0 mr-1"
                  >
                    <path
                      d="M7 1L1 5L7 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div
                    className="flex-1 h-[1.5px]"
                    style={{
                      background:
                        "linear-gradient(to right, #DE4313, #FEC163)",
                    }}
                  />
                </button>

                {/* Previous & Next Text Buttons */}
                <div className="flex items-center gap-4 sm:gap-6 px-3 flex-shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="font-dm font-bold text-xs sm:text-sm text-gray-300 hover:text-[#FEC163] transition-colors cursor-pointer"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="font-dm font-bold text-xs sm:text-sm text-gray-300 hover:text-[#FEC163] transition-colors cursor-pointer"
                  >
                    Next
                  </button>
                </div>

                {/* Right line and arrow */}
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 flex items-center text-[#DE4313] hover:text-[#FEC163] transition-colors cursor-pointer group pl-3"
                  aria-label="Next image"
                >
                  <div
                    className="flex-1 h-[1.5px]"
                    style={{
                      background:
                        "linear-gradient(to right, #FEC163, #DE4313)",
                    }}
                  />
                  <svg
                    width="8"
                    height="10"
                    viewBox="0 0 8 10"
                    fill="none"
                    className="flex-shrink-0 ml-1"
                  >
                    <path
                      d="M1 1L7 5L1 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* ════════ RIGHT COLUMN: CLIENT LOGO + DETAILS + VIEW CASE STUDY (col-span-4) ════════ */}
            <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-[#DE4313]/60 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Client Logo Header */}
                <div className="flex items-center gap-2">
                  {project.id === "elevate-solutions-web" ||
                  project.slug === "elevate-solutions-brand" ? (
                    <div className="flex items-center gap-1.5">
                      <span className="font-dm font-black text-xl tracking-wider text-white">
                        ELE
                      </span>
                      <span className="text-[#DE4313] text-lg">◆</span>
                      <span className="font-dm font-black text-xl tracking-wider text-white -ml-0.5">
                        ATE
                      </span>
                    </div>
                  ) : project.id === "ezeedrop" ? (
                    <div className="flex items-center gap-0.5">
                      <span className="font-sans font-bold text-lg text-white">
                        e
                      </span>
                      <span className="font-sans font-black text-xl text-[#FEC163]">
                        Z
                      </span>
                      <span className="font-sans font-bold text-lg text-white">
                        ee
                      </span>
                      <span className="text-[#DE4313]">📍</span>
                      <span className="font-sans font-bold text-lg text-white -ml-1">
                        rop
                      </span>
                    </div>
                  ) : (
                    <span className="font-dm font-black text-lg text-white tracking-wide">
                      {project.client}
                    </span>
                  )}
                </div>

                {/* Subtitle / Title */}
                <h3
                  id="modal-project-title"
                  className="font-dm font-bold text-xs sm:text-sm tracking-[0.14em] uppercase text-white leading-snug"
                >
                  {project.title}
                </h3>

                {/* Description Paragraph */}
                <p className="font-dm text-xs sm:text-[13px] text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags Pill Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] font-dm text-gray-200 bg-[#0A0F24] border border-[#DE4313]/60 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* ── CONDITIONAL CASE STUDY ACTION BUTTON ── */}
              {/* Button ONLY renders if project hasCaseStudy === true */}
              <div className="pt-4">
                {project.hasCaseStudy && project.caseStudyUrl ? (
                  <Link
                    href={project.caseStudyUrl}
                    className="group w-full max-w-[280px] py-2.5 px-4 rounded-full border border-[#DE4313] hover:border-[#FEC163] bg-[#0A0F24] hover:bg-[#0E152E] flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(222,67,19,0.35)]"
                  >
                    {/* Orange Sparkle Icon Circle */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        background:
                          "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                      }}
                    >
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M7 0L8.8 5.2L14 7L8.8 8.8L7 14L5.2 8.8L0 7L5.2 5.2L7 0Z"
                          fill="white"
                        />
                      </svg>
                    </div>

                    {/* Text */}
                    <span className="font-dm font-bold text-xs uppercase tracking-wider text-white group-hover:text-[#FEC163] transition-colors">
                      VIEW CASE STUDY
                    </span>
                  </Link>
                ) : (
                  <div className="text-[11px] font-dm text-gray-500 italic">
                    Preview only (No case study attached)
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
