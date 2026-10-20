import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import CategoryGridView from "@/components/work/CategoryGridView";
import { WORK_PROJECTS, CATEGORY_META, WorkCategory } from "@/data/workProjects";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

const VALID_CATEGORIES: WorkCategory[] = [
  "websites",
  "apps",
  "softwares",
  "branding",
  "marketing",
];

export async function generateStaticParams() {
  return VALID_CATEGORIES.map((cat) => ({
    category: cat,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = CATEGORY_META[category as WorkCategory];

  if (!meta) {
    return {
      title: "Work | Sejuti Mehjabin",
    };
  }

  return {
    title: `${meta.title} — Work | Sejuti Mehjabin`,
    description: meta.description,
    openGraph: {
      title: `${meta.title} — Work | Sejuti Mehjabin`,
      description: meta.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  if (!VALID_CATEGORIES.includes(category as WorkCategory)) {
    notFound();
  }

  const categoryKey = category as WorkCategory;
  const meta = CATEGORY_META[categoryKey];
  const categoryProjects = WORK_PROJECTS.filter(
    (p) => p.category === categoryKey
  );

  return (
    <div className="min-h-screen flex flex-col text-[var(--ink)]">
      <div className="w-full max-w-[1440px] mx-auto flex-1 relative">
        <Sidebar defaultActive="work" />

        <main className="w-full lg:pl-[var(--sidebar-w)] pt-14 lg:pt-0">
          <CategoryGridView
            categoryKey={categoryKey}
            meta={meta}
            projects={categoryProjects}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}
