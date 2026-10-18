"use client";

import Image from "next/image";

export default function HeroHeader() {
  return (
    <section
      id="home"
      className="w-full max-w-6xl mx-auto pt-12 sm:pt-20 px-4 sm:px-6"
    >
      {/* Main Hero Container with 4-side gradient border */}
      <div className="relative w-full figma-gradient-border p-8 sm:p-14 text-center flex flex-col items-center justify-center min-h-[460px] sm:min-h-[500px]">
        {/* Top border notch mask: cleanly cuts the 1.5px border line behind SEJUTI */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] h-3 card-badge-bg z-[1]"
        />

        {/* Brand Badge on Top Border (transparent, sits on top of glow) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-6 z-30 flex items-center justify-center select-none">
          <Image
            src="/assets/header-sejuti.svg"
            alt="SEJUTI"
            width={234}
            height={42}
            className="h-7 sm:h-9 md:h-10 w-auto object-contain"
            priority
          />
          {/* Accessible text for SEO / Screen Readers */}
          <span className="sr-only">SEJUTI</span>
        </div>

        {/* Ellipse 58 Glow Background with smooth breathing animation */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 w-[435px] h-[416px] max-w-full rounded-full z-[2] animate-hero-glow"
          style={{
            backgroundColor: "rgba(222, 67, 19, 0.5)",
            filter: "blur(120px)",
            transform: "translate(-50%, -50%) translateZ(0)",
          }}
        />

        {/* Title */}
        <div className="flex flex-col items-center gap-0 relative z-20">
          <h1 className="font-dm font-medium text-4xl sm:text-6xl lg:text-7xl uppercase leading-none text-[var(--ink)]">
            BRINGING IDEAS TO LIGHT
          </h1>

          <p className="font-almarai italic text-lg sm:text-2xl text-gradient mt-4">
            by means of design
          </p>
        </div>

        {/* Artwork Image with soft glow pulse */}
        <div className="absolute z-10 bottom-5 left-1/2 -translate-x-1/2 animate-hero-bulb">
          <Image
            src="/assets/hero-lightbulb.png"
            alt="Hero Lightbulb Artwork"
            width={260}
            height={260}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
