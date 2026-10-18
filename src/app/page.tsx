import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import HeroHeader from '@/components/sections/HeroHeader';
import AboutSection from '@/components/sections/AboutSection';
import FeaturedWorkSection from '@/components/sections/FeaturedWorkSection';
import BlogsSection from '@/components/sections/BlogsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-[var(--ink)]">
      {/*
        Main canvas wrapper:
        - Max width 1440px matching Figma canvas exactly
        - Centered on 2K/4K displays (mx-auto)
        - Sidebar on left (sticky), Main content on right
        - Prevents sidebar and content from separating on large screens!
      */}
      <div className="w-full max-w-[1440px] mx-auto flex-1 relative">
        <Sidebar />

        <main className="w-full lg:pl-[var(--sidebar-w)] pt-14 lg:pt-0">
          {/* Section 0: Hero */}
          <HeroHeader />

          {/* Section 01: About */}
          <AboutSection />

          {/* Section 02: Work */}
          <FeaturedWorkSection />

          {/* Section 03: Blogs */}
          <BlogsSection />

          {/* Section 04: Contact */}
          <ContactSection />
        </main>
      </div>

      {/* Footer bar — 100% full width edge-to-edge with centered inner container */}
      <Footer />
    </div>
  );
}
