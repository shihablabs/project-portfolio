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
        setActiveImageIndex((prev) =>
          prev === 0 ? project.gallery.length - 1 : prev - 1
        );
      } else if (e.key === "ArrowRight") {
        setActiveImageIndex((prev) =>
          prev === project.gallery.length - 1 ? 0 : prev + 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const gallery = project.gallery && project.gallery.length > 0
    ? project.gallery
    : [project.thumbnail];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
    >
      {/* Modal Dialog Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#070B19] border border-[#DE4313]/60 rounded-xl shadow-[0_0_50px_rgba(222,67,19,0.35)] flex flex-col text-[var(--ink)]"
      >
        {/* Header Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close Modal"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0A0F24]/80 border border-[#DE4313]/60 text-white hover:text-[#FEC163] hover:border-[#FEC163] flex items-center justify-center transition-all cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 1L13 13M1 13L13 1"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* ── 01. IMAGE GALLERY SLIDER ── */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] bg-[#020510] border-b border-[#DE4313]/30 overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={gallery[activeImageIndex]}
              alt={`${project.title} - Preview ${activeImageIndex + 1}`}
              fill
              className="object-contain p-4 sm:p-6"
              priority
            />
          </div>

          {/* Previous Button (shown only if more than 1 image) */}
          {gallery.length > 1 && (
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0A0F24]/80 border border-[#DE4313]/70 text-white hover:text-[#FEC163] hover:scale-110 flex items-center justify-center transition-all cursor-pointer shadow-lg z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 19L8 12L15 5"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Next Button (shown only if more than 1 image) */}
          {gallery.length > 1 && (
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Slide"
              className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#0A0F24]/80 border border-[#DE4313]/70 text-white hover:text-[#FEC163] hover:scale-110 flex items-center justify-center transition-all cursor-pointer shadow-lg z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5L16 12L9 19"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}

          {/* Dots Indicator */}
          {gallery.length > 1 && (
            <div className="absolute bottom-3 inset-x-0 flex items-center justify-center gap-2 z-10">
              {gallery.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIndex(idx)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? "w-7 bg-gradient-to-r from-[#FEC163] to-[#DE4313]"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* ── 02. PROJECT DETAILS & CONDITIONAL CASE STUDY BUTTON ── */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            {/* Category / Client / Year Meta Row */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-dm uppercase tracking-wider text-[#FEC163]">
              <span>{project.categoryLabel}</span>
              <span>•</span>
              <span className="text-gray-400">{project.client}</span>
              <span>•</span>
              <span className="text-gray-400">{project.year}</span>
            </div>

            {/* Title */}
            <h2
              id="modal-project-title"
              className="font-dm font-bold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight leading-snug"
            >
              {project.title}
            </h2>

            {/* Description */}
            <p className="font-dm text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
              {project.description}
            </p>

            {/* Tags Pill Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-dm text-gray-200 bg-[#0A0F24] border border-[#DE4313]/30 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* ── 03. CONDITIONAL ACTION BUTTON ── */}
          {/* CRUCIAL LOGIC: "View Case Study" button ONLY renders if project hasCaseStudy is true */}
          <div className="pt-4 border-t border-[#DE4313]/25 flex items-center justify-between">
            {project.hasCaseStudy && project.caseStudyUrl ? (
              <Link
                href={project.caseStudyUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-dm font-bold text-sm tracking-wide text-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(222,67,19,0.5)]"
                style={{
                  background:
                    "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                }}
              >
                <span>View Case Study</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            ) : (
              <span className="text-xs font-dm text-gray-500 italic">
                Preview only (No Case Study attached)
              </span>
            )}

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-dm text-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Preview
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
