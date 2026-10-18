import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar";
import Footer from "@/components/layout/Footer";
import BlogDetailView from "@/components/sections/BlogDetailView";
import { blogPosts } from "@/data/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Blog Not Found | Sejuti Mehjabin",
    };
  }

  return {
    title: `${post.title} | Sejuti Mehjabin`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Sejuti Mehjabin`,
      description: post.excerpt,
      url: `https://sejutimehjabin.com/blogs/${post.slug}`,
      images: [{ url: post.coverImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Sejuti Mehjabin`,
      description: post.excerpt,
      images: [post.coverImage],
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col text-[var(--ink)]">
      {/* ── Main Canvas Grid (max-w-[1440px] centered on 2K/4K) ── */}
      <div className="w-full max-w-[1440px] mx-auto flex-1 relative">
        <Sidebar defaultActive="blogs" />

        <main className="w-full lg:pl-[var(--sidebar-w)] pt-14 lg:pt-0">
          <BlogDetailView post={post} />
        </main>
      </div>

      {/* ── Full Width Global Footer ── */}
      <Footer />
    </div>
  );
}
