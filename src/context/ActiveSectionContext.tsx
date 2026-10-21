"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

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
  const [activeSection, setActiveSection] = useState<string>(
    defaultActive || "home"
  );

  const determineActiveSection = useCallback(() => {
    if (typeof window === "undefined") return;

    // Dedicated subpages check
    const path = window.location.pathname;
    if (path.startsWith("/work")) {
      setActiveSection("work");
      return;
    }
    if (path.startsWith("/blogs")) {
      setActiveSection("blogs");
      return;
    }
    if (path.startsWith("/about")) {
      setActiveSection("about");
      return;
    }
    if (path.startsWith("/contact")) {
      setActiveSection("contact");
      return;
    }

    // Home page scroll spy
    const scrollY = window.scrollY;

    // Near top of page -> Hero
    if (scrollY < 150) {
      setActiveSection("home");
      return;
    }

    // Near bottom of page -> Contact
    const scrollBottom = window.innerHeight + Math.round(scrollY);
    const docHeight = document.documentElement.scrollHeight;
    if (scrollBottom >= docHeight - 60) {
      setActiveSection("contact");
      return;
    }

    // Trigger line at 35% down the viewport (natural user focus level)
    const triggerY = scrollY + window.innerHeight * 0.35;
    const sections = ["contact", "blogs", "work", "about"];

    for (const id of sections) {
      const el = document.getElementById(id);
      if (el) {
        const top = el.offsetTop;
        if (triggerY >= top) {
          setActiveSection(id);
          return;
        }
      }
    }

    setActiveSection("home");
  }, []);

  useEffect(() => {
    if (defaultActive) {
      setActiveSection(defaultActive);
      return;
    }

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
  }, [defaultActive, determineActiveSection]);

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
