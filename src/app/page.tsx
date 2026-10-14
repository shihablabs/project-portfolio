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
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Fixed left sidebar — 160px wide on desktop */}
      <Sidebar />

      {/*
        Main content area:
        - On desktop: left margin = sidebar width (160px) to avoid overlap
        - Max width 1440px matching Figma canvas
      */}
      <div className="lg:pl-[var(--sidebar-w)] min-h-screen flex flex-col">
        <main className="flex-1 w-full pt-14 lg:pt-0">
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

        {/* Footer bar — coral background, matching Figma Rectangle 174 at y:4490 */}
        <Footer />
      </div>
    </div>
  );
}
