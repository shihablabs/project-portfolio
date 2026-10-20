import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import CaseStudyView from "@/components/work/CaseStudyView";
import { WORK_PROJECTS } from "@/data/workProjects";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return WORK_PROJECTS
    .filter((p) => p.hasCaseStudy)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = WORK_PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Case Study | Sejuti Mehjabin",
    };
  }

  return {
    title: `${project.title} — Case Study | Sejuti Mehjabin`,
    description: project.description,
    openGraph: {
      title: `${project.title} — Case Study | Sejuti Mehjabin`,
      description: project.description,
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const project = WORK_PROJECTS.find((p) => p.slug === slug);

  if (!project || !project.hasCaseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col text-[var(--ink)]">
      <div className="w-full max-w-[1440px] mx-auto flex-1 relative">
        <Sidebar defaultActive="work" />

        <main className="w-full lg:pl-[var(--sidebar-w)] pt-14 lg:pt-0">
          <CaseStudyView project={project} />
        </main>
      </div>

      <Footer />
    </div>
  );
}
