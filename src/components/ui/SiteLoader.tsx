"use client";

import React from "react";
import Image from "next/image";
import { useLoader } from "@/context/LoaderContext";

/**
 * ============================================================================
 * SITE LOADER COMPONENT (সাইট লোডার কম্পোনেন্ট)
 * ============================================================================
 *
 * বৈশিষ্ট্যসমূহ / FEATURES:
 * 1. Background: সম্পূর্ণ ট্রান্সপারেন্ট (কোনো ব্যাকগ্রাউন্ড নেই) - তাই Light & Dark
 *    উভয় মোডেই একইরকম নিখুঁত ও ন্যাচারাল দেখাবে।
 * 2. Center Logo: লোগোটি স্থির থাকবে (Logo will NOT spin, stays as-is).
 * 3. Outer Border: লোগোর চারপাশের অরেঞ্জ গ্রেডিয়েন্ট বর্ডারটি ৩৬০ ডিগ্রি অবিরাম ঘুরবে।
 *    - Border Stroke: 1.5px
 *    - Gradient: linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%)
 * 4. State Management: পেজ লোড হওয়ার সময় স্বয়ংক্রিয়ভাবে দেখাবে এবং যেকেউ
 *    `useLoader()` হুক অথবা `site-loader` ইভেন্ট দিয়ে যেকোনো সময় ডায়নামিকালি কল করতে পারবে।
 * ============================================================================
 */
export default function SiteLoader() {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <aside
      aria-label="Loading"
      role="status"
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-transparent pointer-events-none select-none transition-opacity duration-300"
    >
      {/* ── Loader Inner Container ── */}
      <div className="relative w-[130px] h-[130px] sm:w-[144px] sm:h-[144px] flex items-center justify-center pointer-events-auto">
        {/* ── 1. STATIC CENTER LOGO (লোগোটি ঘুরবে না, স্থির থাকবে) ── */}
        <div className="relative z-10 w-[68px] h-[68px] sm:w-[78px] sm:h-[78px] rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(222,67,19,0.35)] select-none">
          <Image
            src="/assets/icons/logo.svg"
            alt="Sejuti Logo"
            width={78}
            height={78}
            priority
            className="w-full h-full object-contain pointer-events-none"
          />
        </div>

        {/* ── 2. SPINNING 360° OUTER BORDER (শুধুমাত্র এই বর্ডারটি ৩৬০ ডিগ্রি ঘুরবে) ── */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none animate-spin"
          style={{
            animationDuration: "1.3s",
            animationTimingFunction: "linear",
          }}
        >
          <svg
            width="144"
            height="144"
            viewBox="0 0 144 144"
            fill="none"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Figma Gradient: linear-gradient(97.42deg, #FEC163 0%, #DE4313 95.67%) */}
              <linearGradient
                id="siteLoaderBorderGrad"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                gradientTransform="rotate(97.42 0.5 0.5)"
              >
                <stop offset="0%" stopColor="#FEC163" />
                <stop offset="95.67%" stopColor="#DE4313" />
              </linearGradient>
            </defs>

            {/* Circular arc with 1.5px stroke, matching screenshot media_1792534081732.png */}
            <circle
              cx="72"
              cy="72"
              r="62"
              fill="none"
              stroke="url(#siteLoaderBorderGrad)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="290 395"
            />
          </svg>
        </div>
      </div>
    </aside>
  );
}
