import React from 'react';
import type { Metadata } from 'next';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import AboutPageView from '@/components/sections/AboutPageView';

export const metadata: Metadata = {
  title: 'About | Sejuti Mehjabin',
  description:
    'Multidisciplinary Designer specializing in UX & UI Design. Learn more about Sejuti Mehjabin, background, design journey, philosophy, and expertise.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
      {/* Fixed left sidebar */}
      <Sidebar />

      {/* Main content wrapper */}
      <div className="lg:pl-[var(--sidebar-w)] min-h-screen flex flex-col">
        <main className="flex-1 w-full pt-14 lg:pt-0">
          <AboutPageView />
        </main>
        <Footer />
      </div>
    </div>
  );
}
