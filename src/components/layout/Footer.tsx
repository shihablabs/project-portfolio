'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed right-6 bottom-20 z-40 w-12 h-12 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-primary)] text-[var(--accent-coral)] flex items-center justify-center hover:bg-[var(--accent-coral)] hover:text-white transition-all shadow-md group"
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
      </button>

      {/* Bottom Static Bar matching Figma */}
      <footer className="w-full bg-[var(--accent-coral)] text-white py-4 px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium tracking-wider">
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
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
      </footer>
    </>
  );
}
