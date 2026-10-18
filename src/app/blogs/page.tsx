import React from "react";
import type { Metadata } from "next";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import BlogPageView from "@/components/sections/BlogPageView";

export const metadata: Metadata = {
  title: "Blogs | Sejuti Mehjabin",
  description:
    "Off Canvas Journal — A Personal Archive. Explore curated articles, reflections on UX/UI design, photography, and creative writing by Sejuti Mehjabin.",
  openGraph: {
    title: "Blogs | Sejuti Mehjabin",
    description:
      "Off Canvas Journal — A Personal Archive. Explore design, photography, and creative writing thoughts and ideas.",
    url: "https://sejutimehjabin.com/blogs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs | Sejuti Mehjabin",
    description:
      "Off Canvas Journal — A Personal Archive. Explore design, photography, and creative writing thoughts and ideas.",
  },
};

export default function BlogsPage() {
  return (
    <div className="min-h-screen flex flex-col text-[var(--ink)]">
      {/* ── Main Canvas Grid (max-w-[1440px] centered on 2K/4K) ── */}
      <div className="w-full max-w-[1440px] mx-auto flex-1 relative">
        {/* Unmodified shared Sidebar */}
        <Sidebar />

        <main className="w-full lg:pl-[var(--sidebar-w)] pt-14 lg:pt-0">
          <BlogPageView />
        </main>
      </div>

      {/* ── Full Width Global Footer ── */}
      <Footer />
    </div>
  );
}
