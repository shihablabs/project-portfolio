"use client";

import { ChevronUp, Mail } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past 300px or half the viewport
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Floating Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-6 bottom-14 z-50 w-12 h-12 flex items-center justify-center cursor-pointer transition-all duration-300 ease-out group ${
          isVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Outer Circular Ring (1.5px gradient stroke) */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 group-hover:scale-105"
          viewBox="0 0 48 48"
          fill="none"
        >
          <defs>
            <linearGradient
              id="backToTopBorderGrad"
              x1="0"
              y1="0"
              x2="0.2"
              y2="1"
              gradientTransform="rotate(97.51 0.5 0.5)"
            >
              <stop offset="-37.59%" stopColor="#FEC163" />
              <stop offset="94.05%" stopColor="#DE4313" />
            </linearGradient>
          </defs>
          <circle
            cx="24"
            cy="24"
            r="23"
            stroke="url(#backToTopBorderGrad)"
            strokeWidth="1.5"
            fill="none"
          />
        </svg>

        {/* Inner Circle with Gradient Fill & Icon */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110"
          style={{
            background: "linear-gradient(135deg, #FEC163 0%, #DE4313 100%)",
          }}
        >
          <ChevronUp className="w-4 h-4 text-white stroke-[3.2] transition-transform duration-300 group-hover:-translate-y-0.5" />
        </div>
      </button>

      {/* Bottom Static Bar — 100% Full Width Edge-to-Edge with Centered Inner Container */}
      <footer className="w-full bg-[var(--accent)] text-white py-4 px-4 sm:px-8">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wider">
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@sejutimehjabin.com"
              aria-label="Email"
              className="hover:opacity-80 transition-opacity"
            >
              <Mail size={18} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80 transition-opacity"
            >
              {/* LinkedIn SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80 transition-opacity"
            >
              {/* Instagram SVG */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>

          <div className="text-center">
            <span>Made with soul © 2025 Sejuti Mehjabin.</span>
          </div>

          <div>
            <Link
              href="/work"
              className="underline underline-offset-4 hover:opacity-80 transition-opacity font-bold"
            >
              VIEW ARCHIVE
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
