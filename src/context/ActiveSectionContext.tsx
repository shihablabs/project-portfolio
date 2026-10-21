"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { usePathname } from "next/navigation";

interface ActiveSectionContextType {
  activeSection: string;
  setActiveSection: (id: string) => void;
}

const ActiveSectionContext = createContext<ActiveSectionContextType>({
  activeSection: "home",
  setActiveSection: () => {},
});

export function ActiveSectionProvider({
  children,
  defaultActive,
}: {
  children: React.ReactNode;
  defaultActive?: string;
}) {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>(() => {
    if (defaultActive) return defaultActive;
    if (pathname?.startsWith("/about")) return "about";
    if (pathname?.startsWith("/work")) return "work";
    if (pathname?.startsWith("/blogs")) return "blogs";
    if (pathname?.startsWith("/contact")) return "contact";
    return "home";
  });

  const determineActiveSection = useCallback(() => {
    if (typeof window === "undefined") return;

    // Home page scroll spy
    const scrollY = window.scrollY;

    // 1. Near top of page -> Hero
    if (scrollY < 150) {
      setActiveSection("home");
      return;
    }

    // 2. Near bottom of page -> Contact
    const scrollBottom = window.innerHeight + Math.round(scrollY);
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= docHeight - 80) {
      setActiveSection("contact");
      return;
    }

    // 3. Middle sections: check viewport intersection at 40% height
    const triggerLine = window.innerHeight * 0.4;
    const sections = ["about", "work", "blogs", "contact"];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerLine && rect.bottom > triggerLine) {
          setActiveSection(id);
          return;
        }
      }
    }

    // 4. Fallback if before first section
    const aboutEl = document.getElementById("about");
    if (aboutEl) {
      const aboutRect = aboutEl.getBoundingClientRect();
      if (aboutRect.top > triggerLine) {
        setActiveSection("home");
        return;
      }
    }
  }, []);

  useEffect(() => {
    // If not on Home page, set activeSection strictly based on pathname
    if (pathname && pathname !== "/") {
      if (pathname.startsWith("/about")) {
        setActiveSection("about");
      } else if (pathname.startsWith("/work")) {
        setActiveSection("work");
      } else if (pathname.startsWith("/blogs")) {
        setActiveSection("blogs");
      } else if (pathname.startsWith("/contact")) {
        setActiveSection("contact");
      }
      return;
    }

    // If on Home page, immediately evaluate and attach scroll spy
    determineActiveSection();

    window.addEventListener("scroll", determineActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", determineActiveSection, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", determineActiveSection);
      window.removeEventListener("resize", determineActiveSection);
    };
  }, [pathname, determineActiveSection]);

  return (
    <ActiveSectionContext.Provider
      value={{ activeSection, setActiveSection }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSection() {
  return useContext(ActiveSectionContext);
}
