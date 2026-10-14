'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavItem {
  id: string;
  label: string;
  href: string;
  iconSrc: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'HOME', href: '/#home', iconSrc: '/assets/icons/nav-home.svg' },
  { id: 'about', label: 'ABOUT', href: '/#about', iconSrc: '/assets/icons/nav-about.svg' },
  { id: 'work', label: 'WORK', href: '/#work', iconSrc: '/assets/icons/nav-work.svg' },
  { id: 'blogs', label: 'BLOGS', href: '/#blogs', iconSrc: '/assets/icons/nav-blogs.svg' },
  { id: 'contact', label: 'CONTACT', href: '/#contact', iconSrc: '/assets/icons/nav-contact.svg' },
];

export default function Sidebar() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const saved = localStorage.getItem('sejuti-theme') as 'light' | 'dark' | null;
    if (saved) {
      applyTheme(saved);
    } else {
      applyTheme('light');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const item of [...NAV_ITEMS].reverse()) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= scrollPos) {
          setActive(item.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const applyTheme = (t: 'light' | 'dark') => {
    setTheme(t);
    localStorage.setItem('sejuti-theme', t);
    document.documentElement.setAttribute('data-theme', t);
  };

  const toggle = () => applyTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <>
      {/* ─── Mobile Top Bar (<1024px) ─── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-2.5 bg-[var(--bg)]/95 backdrop-blur-md">
        <Link href="/#home" className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-[var(--accent)] shadow-sm">
            <Image
              src="/assets/icons/logo.svg"
              alt="Sejuti"
              width={40}
              height={40}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-almarai font-extrabold tracking-[0.25em] text-sm text-[var(--ink)]">
            SEJUTI
          </span>
        </Link>

        <div className="flex items-center gap-3">
          {/* Mobile Theme Switcher */}
          <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#DE4313]/40 text-xs font-dm font-bold text-[var(--ink)]"
            aria-label="Toggle dark/light mode"
          >
            {theme === 'light' ? (
              <>
                <img src="/assets/icons/icon-sun.svg" alt="Sun" className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-wider text-gradient">LIGHT</span>
              </>
            ) : (
              <>
                <img src="/assets/icons/icon-moon.svg" alt="Moon" className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-wider text-[var(--ink)]">DARK</span>
              </>
            )}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="p-1.5 rounded border border-[var(--ink-32)] text-[var(--ink)]"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-[var(--bg)] pt-20 px-6 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-4 py-3 border-b border-[var(--ink-32)] font-dm font-bold text-base tracking-wider ${
                active === item.id ? 'text-[var(--accent)]' : 'text-[var(--ink)]'
              }`}
            >
              <img src={item.iconSrc} alt={item.label} className="w-6 h-6 object-contain" />
              {item.label}
            </Link>
          ))}
        </div>
      )}

      {/* ─── Desktop Fixed Sidebar (matches Figma Node 66:3975 100%) ───
          Note: NO right border! Seamless connection to the canvas, matching Figma.
      */}
      <aside
        style={{ width: 'var(--sidebar-w)' }}
        className="hidden lg:flex fixed top-0 left-0 bottom-0 z-40 flex-col items-center pt-8 pb-8 bg-[var(--bg)] select-none"
      >
        {/* Top Logo Badge (Figma: Ellipse 42 + S logo, ~100px diameter at top) */}
        <Link href="/#home" className="group flex flex-col items-center mb-7">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-105 shadow-sm">
            <Image
              src="/assets/icons/logo.svg"
              alt="Sejuti"
              width={100}
              height={100}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Link>

        {/* ── Top-aligned Nav & Theme Switcher Section (directly underneath logo) ── */}
        <div className="w-full flex items-start justify-center px-2">
          {/* Side-by-side: Left lane (DARK/LIGHT toggle) | Right lane (Nav menus) */}
          <div className="flex items-start gap-3">
            {/* Lane 1 (Left): DARK / LIGHT Vertical Switcher */}
            <div className="flex flex-col items-center justify-center gap-2 pt-1">
              {/* "DARK" text - vertical writing */}
              <button
                onClick={() => applyTheme('dark')}
                className={`text-[11px] font-dm tracking-[0.2em] transition-colors leading-none cursor-pointer [writing-mode:vertical-rl] rotate-180 ${
                  theme === 'dark'
                    ? 'text-gradient font-black'
                    : 'text-[var(--ink)] opacity-50 hover:opacity-100 font-semibold'
                }`}
              >
                DARK
              </button>

              {/* Vertical pill toggle button containing Moon and Sun */}
              <button
                onClick={toggle}
                className="relative w-[28px] h-[64px] rounded-full border border-[#DE4313]/50 bg-[var(--card-bg)] flex flex-col items-center justify-between p-1.5 cursor-pointer shadow-sm hover:border-[var(--accent)] transition-colors"
                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              >
                {/* Moon Icon at top */}
                <div
                  className={`w-4 h-4 flex items-center justify-center transition-all ${
                    theme === 'dark' ? 'opacity-100 scale-110 drop-shadow' : 'opacity-40'
                  }`}
                >
                  <img src="/assets/icons/icon-moon.svg" alt="Moon" className="w-3.5 h-3.5" />
                </div>

                {/* Sliding indicator dot */}
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-br from-[#FEC163] to-[#DE4313] transition-all duration-200 ${
                    theme === 'dark' ? '-translate-y-0.5' : 'translate-y-0.5'
                  }`}
                />

                {/* Sun Icon at bottom */}
                <div
                  className={`w-4 h-4 flex items-center justify-center transition-all ${
                    theme === 'light' ? 'opacity-100 scale-110 drop-shadow' : 'opacity-40'
                  }`}
                >
                  <img src="/assets/icons/icon-sun.svg" alt="Sun" className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* "LIGHT" text - vertical writing */}
              <button
                onClick={() => applyTheme('light')}
                className={`text-[11px] font-dm tracking-[0.2em] transition-colors leading-none cursor-pointer [writing-mode:vertical-rl] rotate-180 ${
                  theme === 'light'
                    ? 'text-gradient font-black'
                    : 'text-[var(--ink)] opacity-50 hover:opacity-100 font-semibold'
                }`}
              >
                LIGHT
              </button>
            </div>

            {/* Lane 2 (Right): Main Nav Links column (top-aligned) */}
            <nav className="flex flex-col items-center gap-5">
              {NAV_ITEMS.map((item) => {
                const isActive = active === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group flex flex-col items-center gap-1 transition-all"
                  >
                    {/* Exact Figma Vector Icon */}
                    <div
                      className={`w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isActive ? 'scale-105' : 'opacity-70 group-hover:opacity-100'
                      }`}
                      style={{
                        filter: isActive ? 'none' : theme === 'dark' ? 'grayscale(0.4)' : 'grayscale(0.25)',
                      }}
                    >
                      <img
                        src={item.iconSrc}
                        alt={item.label}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Nav Label (DM Sans 11px) */}
                    <span
                      className={`text-[11px] font-dm tracking-[0.16em] leading-tight transition-colors ${
                        isActive
                          ? 'text-gradient font-black'
                          : 'text-[var(--ink)] opacity-75 group-hover:opacity-100 font-semibold'
                      }`}
                    >
                      {item.label}
                    </span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}
