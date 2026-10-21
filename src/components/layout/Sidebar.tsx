"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/context/ActiveSectionContext";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "HOME", href: "/#home" },
  { id: "about", label: "ABOUT", href: "/about" },
  { id: "work", label: "WORK", href: "/work" },
  { id: "blogs", label: "BLOGS", href: "/blogs" },
  { id: "contact", label: "CONTACT", href: "/contact" },
];

const GRADIENT_ID = "sidebarIconGrad";

/**
 * Dynamic SVG Icons for Navigation Items
 * - Active: Filled with linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)
 * - Inactive: Outline only with gradient stroke
 */
function NavIcon({ id, isActive }: { id: string; isActive: boolean }) {
  if (id === "home") {
    return (
      <svg width="34" height="34" viewBox="0 0 37 37" fill="none">
        <path
          d="M1.2749 18.6216C1.2749 14.7313 1.2749 12.7862 2.15754 11.1737C3.04018 9.56115 4.65272 8.56036 7.87775 6.55882L11.2778 4.44867C14.6869 2.33289 16.3915 1.27499 18.2749 1.27499C20.1583 1.27499 21.8629 2.33289 25.2721 4.44867L28.6721 6.5588C31.8972 8.56036 33.5096 9.56115 34.3923 11.1737C35.2749 12.7862 35.2749 14.7313 35.2749 18.6216V21.2075C35.2749 27.8389 35.2749 31.1547 33.2832 33.2148C31.2916 35.275 28.0859 35.275 21.6749 35.275H14.8749C8.46379 35.275 5.25826 35.275 3.26657 33.2148C1.2749 31.1547 1.2749 27.8389 1.2749 21.2075V18.6216Z"
          fill={isActive ? `url(#${GRADIENT_ID})` : "none"}
          stroke={`url(#${GRADIENT_ID})`}
          strokeWidth="2.55"
        />
        <path
          d="M23.3748 28.475H13.1748"
          stroke={isActive ? "var(--bg)" : `url(#${GRADIENT_ID})`}
          strokeWidth="2.55"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (id === "about") {
    return (
      <svg width="34" height="34" viewBox="0 0 41 41" fill="none">
        {isActive ? (
          <>
            <circle cx="20.13" cy="10.65" r="8.5" fill={`url(#${GRADIENT_ID})`} />
            <path
              d="M5.21 34.1C4.58 34.1 4.21 33.61 4.27 33.17C5.05 26.85 9.52 21.68 15.46 19.87C17 21 18.5 21.5 20.13 21.5C21.76 21.5 23.26 21 24.8 19.87C30.74 21.68 35.21 26.85 35.99 33.17C36.05 33.61 35.68 34.1 35.05 34.1H5.21Z"
              fill={`url(#${GRADIENT_ID})`}
            />
          </>
        ) : (
          <path
            d="M25.1112 18.8547L24.557 17.9444C24.1983 18.1629 24.0014 18.5714 24.0541 18.9881C24.1065 19.4046 24.3987 19.7515 24.8004 19.8741L25.1112 18.8547ZM15.1514 18.8547L15.4622 19.8741C15.8639 19.7515 16.1561 19.4046 16.2088 18.9881C16.2612 18.5714 16.0643 18.1629 15.7056 17.9444L15.1514 18.8547ZM28.6566 10.6565C28.6566 13.7426 27.0174 16.4468 24.557 17.9444L25.6653 19.765C28.7344 17.8967 30.7879 14.5169 30.7879 10.6565H28.6566ZM20.1314 2.13129C24.8397 2.13129 28.6566 5.94814 28.6566 10.6565H30.7879C30.7879 4.77107 26.0168 0 20.1314 0V2.13129ZM11.6062 10.6565C11.6062 5.94814 15.423 2.13129 20.1314 2.13129V0C14.2459 0 9.47487 4.77107 9.47487 10.6565H11.6062ZM15.7056 17.9444C13.2453 16.4468 11.6062 13.7426 11.6062 10.6565H9.47487C9.47487 14.5169 11.5283 17.8967 14.5973 19.765L15.7056 17.9444ZM14.8407 17.8353C8.11269 19.8869 3.04604 25.7469 2.1549 32.9076L4.26987 33.1708C5.05546 26.8581 9.5257 21.6842 15.4622 19.8741L14.8407 17.8353ZM2.1549 32.9076C1.91937 34.8002 3.48719 36.232 5.21228 36.232V34.1007C4.58323 34.1007 4.21467 33.6145 4.26987 33.1708L2.1549 32.9076ZM5.21228 36.232H35.0505V34.1007H5.21228V36.232ZM35.0505 36.232C36.7755 36.232 38.3433 34.8002 38.1078 32.9076L35.9927 33.1708C36.0479 33.6145 35.6794 34.1007 35.0505 34.1007V36.232ZM38.1078 32.9076C37.2167 25.7469 32.15 19.8869 25.4219 17.8353L24.8004 19.8741C30.7369 21.6842 35.2071 26.8581 35.9927 33.1708L38.1078 32.9076Z"
            fill={`url(#${GRADIENT_ID})`}
          />
        )}
      </svg>
    );
  }

  if (id === "work") {
    return (
      <svg width="34" height="28" viewBox="0 0 38 31" fill="none">
        <path
          d="M35.2598 9.99492V6.3604C35.2598 5.35677 34.4463 4.54315 33.4426 4.54315H15.2701L13.4528 0.90863H4.36657L2.93303 3.77574C2.68069 4.28041 2.54932 4.83691 2.54932 5.40115V9.99492"
          stroke={`url(#${GRADIENT_ID})`}
          strokeWidth="1.82"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.21293 29.9844H33.6044C34.5443 29.9844 35.3292 29.2677 35.4142 28.3316L36.9011 11.9763C36.9978 10.9121 36.1598 9.99457 35.0913 9.99457H2.72609C1.65749 9.99457 0.819553 10.9121 0.916303 11.9763L2.40314 28.3316C2.48824 29.2677 3.27304 29.9844 4.21293 29.9844Z"
          fill={isActive ? `url(#${GRADIENT_ID})` : "none"}
          stroke={`url(#${GRADIENT_ID})`}
          strokeWidth="1.82"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (id === "blogs") {
    return (
      <svg width="34" height="34" viewBox="0 0 40 40" fill="none">
        {isActive ? (
          <>
            <path
              d="M1.67188 30H38.3385V10H1.67188V30ZM3.33854 11.6667H36.6719V28.3333H3.33854V11.6667ZM8.33854 33.3333H31.6719V35H8.33854V33.3333ZM8.33854 5H31.6719V6.66667H8.33854V5Z"
              fill={`url(#${GRADIENT_ID})`}
            />
            <rect
              x="3.34"
              y="11.67"
              width="33.33"
              height="16.67"
              rx="1"
              fill={`url(#${GRADIENT_ID})`}
            />
          </>
        ) : (
          <path
            d="M1.67188 30H38.3385V10H1.67188V30ZM3.33854 11.6667H36.6719V28.3333H3.33854V11.6667ZM8.33854 33.3333H31.6719V35H8.33854V33.3333ZM8.33854 5H31.6719V6.66667H8.33854V5Z"
            fill={`url(#${GRADIENT_ID})`}
          />
        )}
      </svg>
    );
  }

  if (id === "contact") {
    return (
      <svg width="34" height="34" viewBox="0 0 39 39" fill="none">
        <path
          d="M37.1182 19.0078C37.1182 28.8881 29.1087 36.8975 19.2284 36.8975C16.0837 36.8975 13.1286 36.0862 10.5608 34.6613C9.23854 33.9276 2.42846 37.9295 1.33869 36.8975C0.0886014 35.7137 4.59981 29.4527 3.73202 27.9527C2.20987 25.3213 1.33871 22.2662 1.33871 19.0078C1.33871 9.1276 9.3482 1.1181 19.2284 1.1181C29.1087 1.1181 37.1182 9.1276 37.1182 19.0078Z"
          fill={isActive ? `url(#${GRADIENT_ID})` : "none"}
          stroke={`url(#${GRADIENT_ID})`}
          strokeWidth="2.24"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return null;
}

/**
 * Dynamic Moon & Sun Icons for Theme Switcher
 * - Active: Filled with linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)
 * - Inactive: Outline only with gradient stroke
 */
function MoonIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
      <path
        d="M0.533203 9.40918C0.46614 9.2593 0.506296 9.14681 0.588867 9.06543C0.686271 8.96946 0.825481 8.93741 0.938477 8.97754C3.23 9.79318 5.85068 9.29939 7.56738 7.58203C9.29237 5.85643 9.78533 3.21909 8.95508 0.919922C8.91547 0.810252 8.94583 0.67857 9.03711 0.585938C9.11561 0.506366 9.22335 0.46972 9.36523 0.532227C9.38411 0.540569 9.40328 0.548836 9.42285 0.557617C10.5631 1.07184 11.6233 1.88944 12.3262 2.92969C13.0836 4.05083 13.4882 5.37336 13.4883 6.72656L13.4814 7.02051C13.4161 8.48929 12.8749 9.90063 11.9355 11.0381C10.9337 12.2512 9.54145 13.0783 7.99707 13.377C6.45252 13.6756 4.85142 13.4272 3.46973 12.6748C2.17258 11.9683 1.14858 10.7708 0.542969 9.43066L0.543945 9.42969L0.53418 9.4082L0.533203 9.40918Z"
        fill={isActive ? `url(#${GRADIENT_ID})` : "none"}
        stroke={`url(#${GRADIENT_ID})`}
        strokeWidth={isActive ? "0.6" : "1.2"}
      />
    </svg>
  );
}

function SunIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
      {/* Sun Center filled when active */}
      <path
        d="M9 5.44444C10.9636 5.44444 12.5556 7.03636 12.5556 9C12.5556 10.9637 10.9636 12.5556 9 12.5556C7.03632 12.5556 5.44444 10.9637 5.44444 9C5.44444 7.03636 7.03632 5.44444 9 5.44444Z"
        fill={isActive ? `url(#${GRADIENT_ID})` : "none"}
      />
      {/* 8 Rays + Center Outline */}
      <path
        d="M1 9H1.88889M16.1111 9L17 9M9 16.1111V17M3.94588 14.0541L3.22222 14.7778M3.94588 3.94587L3.22222 3.22222M14.0578 14.0541L14.7779 14.7778M14.0578 3.94587L14.7779 3.22222M9 1V1.88889M9 5.44444C10.9636 5.44444 12.5556 7.03636 12.5556 9C12.5556 10.9637 10.9636 12.5556 9 12.5556C7.03632 12.5556 5.44444 10.9637 5.44444 9C5.44444 7.03636 7.03632 5.44444 9 5.44444Z"
        stroke={`url(#${GRADIENT_ID})`}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Sidebar({ defaultActive }: { defaultActive?: string } = {}) {
  const pathname = usePathname();
  const { activeSection } = useActiveSection();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Synchronously compute active navigation item from pathname or activeSection
  let active = activeSection || "home";
  if (defaultActive) {
    active = defaultActive;
  } else if (pathname?.startsWith("/about")) {
    active = "about";
  } else if (pathname?.startsWith("/work")) {
    active = "work";
  } else if (pathname?.startsWith("/blogs")) {
    active = "blogs";
  } else if (pathname?.startsWith("/contact")) {
    active = "contact";
  } else if (pathname === "/") {
    active = activeSection || "home";
  }

  // Prevent body scrolling when mobile drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close mobile drawer on ESC or on desktop resize
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileOpen) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const applyTheme = (t: "light" | "dark") => {
    setTheme(t);
    localStorage.setItem("sejuti-theme", t);
    document.documentElement.setAttribute("data-theme", t);
  };

  const toggle = () => applyTheme(theme === "light" ? "dark" : "light");

  return (
    <>
      {/* ── Global SVG Gradient & Monotone Noise Defs for Sidebar ── */}
      <svg width="0" height="0" className="absolute pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient
            id={GRADIENT_ID}
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientTransform="rotate(129.89 0.5 0.5)"
          >
            <stop offset="-29.32%" stopColor="#FEC163" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>
        </defs>
      </svg>

      {/* ─── Mobile Top Bar (<1024px) ─── */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-14 sm:h-16 flex items-center justify-between px-4 sm:px-6 bg-[var(--bg)]/95 backdrop-blur-md border-b border-[#DE4313]/20 shadow-sm transition-colors duration-200">
        {/* Brand Logo & Name */}
        <Link
          href="/#home"
          onClick={() => setMobileOpen(false)}
          className="flex items-center gap-3 select-none"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full p-[1.5px] bg-gradient-to-tr from-[#DE4313] to-[#FEC163] shadow-[0_0_10px_rgba(222,67,19,0.35)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg)] flex items-center justify-center">
              <Image
                src="/assets/icons/logo.svg"
                alt="Sejuti"
                width={36}
                height={36}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-almarai font-extrabold tracking-[0.22em] text-xs sm:text-sm leading-tight text-[var(--ink)]">
              SEJUTI
            </span>
            <span className="font-dm font-bold text-[8.5px] tracking-[0.18em] text-[#DE4313] uppercase">
              Portfolio
            </span>
          </div>
        </Link>

        {/* Right Controls: Theme Switcher + Animated Hamburger Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Theme Switcher */}
          <button
            type="button"
            onClick={toggle}
            style={{
              backgroundColor: theme === "light" ? "#FFF7E7" : "#0A0F24",
              boxShadow: "0 0 5px 0 rgba(228, 93, 35, 0.4)",
            }}
            className="relative flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#E45D23]/70 text-xs font-dm font-bold text-[var(--ink)] cursor-pointer overflow-hidden transition-transform duration-200 active:scale-95"
            aria-label="Toggle dark/light mode"
          >
            {theme === "light" && (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-repeat pointer-events-none opacity-20"
                style={{ backgroundImage: 'url("/assets/bg-noise-tile.png")' }}
              />
            )}
            <div className="relative z-10 flex items-center gap-1.5">
              {theme === "light" ? (
                <>
                  <SunIcon isActive={true} />
                  <span className="text-[10px] tracking-wider text-gradient font-black">
                    LIGHT
                  </span>
                </>
              ) : (
                <>
                  <MoonIcon isActive={true} />
                  <span className="text-[10px] tracking-wider text-[var(--ink)] font-normal">
                    DARK
                  </span>
                </>
              )}
            </div>
          </button>

          {/* Animated Signature Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-[1.5px] border-[#DE4313]/60 hover:border-[#FEC163] bg-[var(--bg)] flex items-center justify-center transition-all duration-300 cursor-pointer shadow-[0_0_12px_rgba(222,67,19,0.25)] active:scale-95"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="w-4 sm:w-5 h-3.5 sm:h-4 flex flex-col justify-between items-center relative">
              <span
                className={`w-full h-[2px] rounded-full transition-all duration-300 transform origin-center ${
                  mobileOpen
                    ? "rotate-45 translate-y-[6px] sm:translate-y-[7px] bg-gradient-to-r from-[#FEC163] to-[#DE4313]"
                    : "bg-[var(--ink)]"
                }`}
              />
              <span
                className={`w-3/4 h-[2px] rounded-full self-start transition-all duration-200 ${
                  mobileOpen
                    ? "opacity-0 -translate-x-2"
                    : "bg-gradient-to-r from-[#FEC163] to-[#DE4313]"
                }`}
              />
              <span
                className={`w-full h-[2px] rounded-full transition-all duration-300 transform origin-center ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-[6px] sm:-translate-y-[7px] bg-gradient-to-r from-[#FEC163] to-[#DE4313]"
                    : "bg-[var(--ink)]"
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ─── Mobile Fullscreen Drawer Overlay (Theme-Harmonized) ─── */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 flex flex-col justify-between overflow-y-auto ${
          mobileOpen
            ? "opacity-100 pointer-events-auto visible"
            : "opacity-0 pointer-events-none invisible"
        }`}
        style={{
          backgroundColor: theme === "light" ? "#FFF7E7" : "#0A0F24",
        }}
      >
        {/* Ambient Background Accents */}
        {theme === "light" ? (
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-repeat pointer-events-none opacity-25 z-0"
            style={{ backgroundImage: 'url("/assets/bg-noise-tile.png")' }}
          />
        ) : (
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div
              className="absolute rounded-full"
              style={{
                background: "rgba(222, 67, 19, 0.35)",
                filter: "blur(110px)",
                width: "360px",
                height: "360px",
                top: "-40px",
                right: "-60px",
              }}
            />
            <div
              className="absolute rounded-full"
              style={{
                background: "rgba(254, 193, 99, 0.2)",
                filter: "blur(90px)",
                width: "280px",
                height: "280px",
                bottom: "40px",
                left: "-50px",
              }}
            />
          </div>
        )}

        {/* Top Spacer & Navigation Links */}
        <div className="relative z-10 pt-20 px-6 sm:px-8">
          {/* Subtle Top Gradient Divider Line */}
          <div
            className="w-full h-[1.5px] mb-6"
            style={{
              background:
                "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
            }}
          />

          {/* Navigation Links List */}
          <nav className="flex flex-col space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              const isWork = item.id === "work";
              return (
                <div key={item.id} className="flex flex-col">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`group flex items-center justify-between py-3 px-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#DE4313]/15 to-transparent border-l-4 border-[#DE4313]"
                        : "hover:bg-white/5 border-l-4 border-transparent"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Signature Icon Container */}
                      <div
                        className={`w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                          isActive
                            ? "bg-gradient-to-br from-[#DE4313]/25 to-transparent border border-[#DE4313] shadow-[0_0_12px_rgba(222,67,19,0.4)]"
                            : "border border-[#DE4313]/30 bg-[#0A0F24]/20"
                        }`}
                      >
                        <div className="scale-75">
                          <NavIcon id={item.id} isActive={isActive} />
                        </div>
                      </div>

                      {/* Text Label */}
                      <span
                        className={`font-dm text-xl sm:text-2xl tracking-[0.12em] uppercase transition-colors ${
                          isActive
                            ? "font-black text-transparent bg-clip-text"
                            : "font-bold text-[var(--ink)] opacity-85 group-hover:opacity-100 group-hover:text-[#DE4313]"
                        }`}
                        style={
                          isActive
                            ? {
                                backgroundImage:
                                  "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                              }
                            : undefined
                        }
                      >
                        {item.label}
                      </span>
                    </div>

                    {/* Active Indicator Arrow or Dot */}
                    {isActive ? (
                      <span className="text-[#DE4313] text-lg font-bold">
                        ●
                      </span>
                    ) : (
                      <span className="text-[var(--ink)] opacity-30 group-hover:opacity-100 group-hover:text-[#DE4313] transition-all group-hover:translate-x-1">
                        →
                      </span>
                    )}
                  </Link>

                  {/* Work Sub-Categories Links for Mobile */}
                  {isWork && (
                    <div className="pl-16 pr-2 py-1.5 flex flex-wrap gap-2">
                      <Link
                        href="/work/websites"
                        onClick={() => setMobileOpen(false)}
                        className="text-[11px] font-dm font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#DE4313]/40 text-[var(--ink)] hover:text-[#FEC163] hover:border-[#FEC163] transition-colors"
                      >
                        Websites
                      </Link>
                      <Link
                        href="/work/apps"
                        onClick={() => setMobileOpen(false)}
                        className="text-[11px] font-dm font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#DE4313]/40 text-[var(--ink)] hover:text-[#FEC163] hover:border-[#FEC163] transition-colors"
                      >
                        Apps
                      </Link>
                      <Link
                        href="/work/softwares"
                        onClick={() => setMobileOpen(false)}
                        className="text-[11px] font-dm font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-[#DE4313]/40 text-[var(--ink)] hover:text-[#FEC163] hover:border-[#FEC163] transition-colors"
                      >
                        Softwares
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Section: Action CTA + Social + Brand */}
        <div className="relative z-10 px-6 sm:px-8 pb-8 pt-4 flex flex-col space-y-4">
          {/* Quick Action Contact Button */}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="w-full py-3.5 rounded-[2px] font-dm font-bold text-xs uppercase tracking-[0.2em] text-white bg-gradient-to-r from-[#FEC163] to-[#DE4313] shadow-[0_0_20px_rgba(222,67,19,0.45)] text-center flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer"
          >
            <span>GET IN TOUCH / LET&apos;S TALK</span>
            <span className="text-sm">→</span>
          </Link>

          {/* Social Profiles & Copyright */}
          <div className="flex items-center justify-between text-[11px] font-dm text-[var(--ink)] opacity-70 border-t border-[var(--ink)]/15 pt-3">
            <span>Sejuti Mehjabin</span>
            <div className="flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#DE4313] transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#DE4313] transition-colors"
              >
                Behance
              </a>
              <span>•</span>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#DE4313] transition-colors"
              >
                Dribbble
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Desktop Fixed Sidebar (locked to 1440px canvas on 2K/4K) ─── */}
      <aside
        style={{
          width: "var(--sidebar-w)",
          left: "max(0px, calc((100% - 1440px) / 2))",
        }}
        className="hidden lg:flex fixed top-0 bottom-0 z-40 flex-col items-center pt-8 pb-8 select-none"
      >
        {/* Background Ellipse Glow (Figma specs: 329x329, top: 265px, left: -97px, blur) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute rounded-full z-0"
          style={{
            background: "#DE431366",
            width: "329px",
            height: "329px",
            top: "265px",
            left: "-97px",
            filter: "blur(140px)",
          }}
        />

        {/* Top Logo Badge (centered in the 160px sidebar) */}
        <Link href="/#home" className="group flex flex-col items-center relative z-10">
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

        {/* ── Navigation & Vertical Theme Switcher Section ──
            - Gap from logo: exactly 45px (mt-[45px])
            - Top aligned below logo (no vertical-center inside viewport)
            - Menu items centered with logo
            - DARK/LIGHT switcher centered vertically alongside the menu list
        */}
        <div className="w-full relative mt-[45px] flex items-center justify-center z-10">
          {/* Vertical DARK / LIGHT Switcher — Centered vertically beside the menu */}
          <div className="absolute left-2.5 sm:left-3 flex flex-col items-center justify-center gap-2">
            {/* DARK text: 900 Black when dark, 400 Regular when light */}
            <button
              onClick={() => applyTheme("dark")}
              className={`text-[10px] font-dm tracking-[0.2em] transition-all cursor-pointer [writing-mode:vertical-rl] ${
                theme === "dark"
                  ? "font-black text-transparent bg-clip-text"
                  : "font-normal text-[var(--ink)] opacity-75 hover:opacity-100"
              }`}
              style={
                theme === "dark"
                  ? {
                      backgroundImage:
                        "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    }
                  : undefined
              }
            >
              DARK
            </button>

            {/* Vertical Pill Toggle containing Moon and Sun (fixed in place, only fill changes) */}
            <button
              onClick={toggle}
              style={{
                backgroundColor: theme === "light" ? "#FFF7E7" : "#0A0F24",
                boxShadow: "0 0 4px 0 #E45D23",
              }}
              className="relative w-[24px] h-[56px] rounded-full border border-[#E45D23]/60 flex flex-col items-center justify-between py-2 cursor-pointer transition-colors duration-200 overflow-hidden"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {/* Subtle texture only in light mode */}
              {theme === "light" && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-full overflow-hidden opacity-20 bg-repeat"
                  style={{ backgroundImage: 'url("/assets/bg-noise-tile.png")' }}
                />
              )}

              <div className="relative z-10 w-4 h-4 flex items-center justify-center">
                <MoonIcon isActive={theme === "dark"} />
              </div>

              <div className="relative z-10 w-4 h-4 flex items-center justify-center">
                <SunIcon isActive={theme === "light"} />
              </div>
            </button>

            {/* LIGHT text: 900 Black when light, 400 Regular when dark */}
            <button
              onClick={() => applyTheme("light")}
              className={`text-[10px] font-dm tracking-[0.2em] transition-all cursor-pointer [writing-mode:vertical-rl] ${
                theme === "light"
                  ? "font-black text-transparent bg-clip-text"
                  : "font-normal text-[var(--ink)] opacity-75 hover:opacity-100"
              }`}
              style={
                theme === "light"
                  ? {
                      backgroundImage:
                        "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    }
                  : undefined
              }
            >
              LIGHT
            </button>
          </div>

          {/* Nav Items Column — Centered with Logo */}
          <nav className="flex flex-col items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="group flex flex-col items-center gap-1.5 transition-all"
                >
                  {/* Dynamic SVG Icon (Filled when active, Outline when inactive) */}
                  <div className="w-9 h-9 flex items-center justify-center transition-transform group-hover:scale-110">
                    <NavIcon id={item.id} isActive={isActive} />
                  </div>

                  {/* Nav Label: DM Sans 900 Gradient when active, Regular 400 Muted when inactive */}
                  <span
                    className={`text-xs font-dm tracking-[0.16em] leading-tight transition-all ${
                      isActive
                        ? "font-black text-transparent bg-clip-text"
                        : "font-normal text-[var(--ink)] opacity-75 group-hover:opacity-100"
                    }`}
                    style={
                      isActive
                        ? {
                            backgroundImage:
                              "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                          }
                        : undefined
                    }
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
}
