import React from "react";
import type { Metadata } from "next";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import WorkPageView from "@/components/sections/WorkPageView";

export const metadata: Metadata = {
  title: "Work | Sejuti Mehjabin",
  description:
    "Explore curated UX & UI design projects, digital products, apps, softwares, and branding by Sejuti Mehjabin.",
  openGraph: {
    title: "Work | Sejuti Mehjabin",
    description:
      "Explore curated UX & UI design projects, digital products, apps, softwares, and branding by Sejuti Mehjabin.",
  },
};

export default function WorkPage() {
  return (
    <div className="min-h-screen flex flex-col text-[var(--ink)]">
      {/* ── Main Canvas Grid (max-w-[1440px] centered on 2K/4K) ── */}
      <div className="w-full max-w-[1440px] mx-auto flex-1 relative">
        <Sidebar defaultActive="work" />

        <main className="w-full lg:pl-[var(--sidebar-w)] pt-14 lg:pt-0">
          <WorkPageView />
        </main>
      </div>

      {/* ── Full Width Footer ── */}
      <Footer />
    </div>
  );
}
