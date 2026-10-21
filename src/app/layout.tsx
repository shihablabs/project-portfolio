import type { Metadata } from "next";
import { DM_Sans, Almarai, Merriweather, Concert_One } from "next/font/google";
import { LoaderProvider } from "@/context/LoaderContext";
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import SiteLoader from "@/components/ui/SiteLoader";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const almarai = Almarai({
  subsets: ["arabic"],
  variable: "--font-almarai",
  weight: ["400", "700", "800"],
  display: "swap",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  variable: "--font-merriweather",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const concertOne = Concert_One({
  subsets: ["latin"],
  variable: "--font-concert-one",
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sejutimehjabin.com"),
  title: "Sejuti Mehjabin | Multidisciplinary UX & UI Designer",
  description: "Portfolio of Sejuti Mehjabin — crafting digital products from concept to launch with 9+ years experience and 60+ projects.",
  keywords: ["UX Design", "UI Design", "Product Design", "Sejuti Mehjabin", "Digital Designer", "Portfolio"],
  authors: [{ name: "Sejuti Mehjabin" }],
  openGraph: {
    title: "Sejuti Mehjabin | Multidisciplinary UX & UI Designer",
    description: "Crafting digital products from concept to launch with 9+ years experience and 60+ projects.",
    type: "website",
    locale: "en_US",
    images: [{ url: "/assets/logo.png", width: 300, height: 300, alt: "Sejuti Mehjabin Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sejuti Mehjabin | Multidisciplinary UX & UI Designer",
    description: "Crafting digital products from concept to launch with 9+ years experience and 60+ projects.",
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${almarai.variable} ${merriweather.variable} ${concertOne.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-200">
        <LoaderProvider>
          {/* Global Site Loader (Transparent BG, Static Logo, 360deg Spinning Gradient Border) */}
          <SiteLoader />
          <ActiveSectionProvider>{children}</ActiveSectionProvider>
        </LoaderProvider>
      </body>
    </html>
  );
}
