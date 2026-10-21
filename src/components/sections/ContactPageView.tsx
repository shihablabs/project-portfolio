"use client";

import React, { useState } from "react";

/**
 * Signature Notched Sparkle Action Button for Submit (Exact Figma Match)
 */
function ActionSparkleSubmitButton({
  label,
  loading = false,
}: {
  label: string;
  loading?: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="group inline-flex items-center cursor-pointer select-none border-0 bg-transparent p-0 disabled:opacity-60 transition-transform active:scale-95"
    >
      <div className="relative w-18 h-18 sm:w-20 sm:h-20 flex items-center transition-transform duration-300 group-hover:scale-105">
        <svg width="68" height="68" viewBox="0 0 52 58" fill="none">
          {/* Notched outer ring with gap on the right */}
          <path
            d="M 46 44.5 A 25 25 0 1 1 46 13.5"
            stroke="url(#contactSparkleGrad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Inner filled circle */}
          <circle cx="26" cy="29" r="17" fill="url(#contactSparkleGrad)" />
          {/* Sparkle 4-point star */}
          <path
            d="M26 20L27.6 27.4L35 29L27.6 30.6L26 38L24.4 30.6L17 29L24.4 27.4L26 20Z"
            fill="#FFF7E7"
          />
        </svg>
      </div>

      <span
        className="font-dm font-bold text-base sm:text-lg text-transparent bg-clip-text transition-all uppercase whitespace-nowrap -translate-x-5"
        style={{
          backgroundImage:
            "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
        }}
      >
        {loading ? "SENDING..." : label}
      </span>
    </button>
  );
}

export default function ContactPageView() {
  const [formData, setFormData] = useState({
    name: "Samantha Wells",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim()) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // Client-side simulation for static deployment
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "Samantha Wells",
        email: "",
        phone: "",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 6000);
    }, 900);
  };

  return (
    <div className="w-full relative px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-24 select-none">
      {/* SVG Gradient definition for the sparkle button */}
      <svg
        width="0"
        height="0"
        className="absolute pointer-events-none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="contactSparkleGrad"
            x1="0"
            y1="0"
            x2="1"
            y2="1"
            gradientTransform="rotate(129.89 0.5 0.5)"
          >
            <stop offset="-29.32%" stopColor="#FEC163" />
            <stop offset="100%" stopColor="#DE4313" />
          </linearGradient>
        </defs>
      </svg>

      <div className="w-full max-w-[1240px] mx-auto">
        {/* ── 01. CONTACT HERO CARD (Pixel-perfect Figma Layout) ── */}
        <div className="relative w-full max-w-[1240px] mx-auto bg-transparent min-h-[500px] lg:min-h-[540px] flex items-center pt-[50px] lg:pt-[100px] pb-[40px] lg:pb-[60px] px-[40px] lg:px-[100px]">
          {/* Top horizontal border line (starts at 0,0 and stops before Contact) */}
          <div
            className="absolute top-0 left-0 right-[155px] sm:right-[180px] h-[1.5px] pointer-events-none"
            style={{
              background:
                "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
            }}
          />

          {/* Left vertical border line (starts at 0,0 to bottom) */}
          <div
            className="absolute top-0 left-0 bottom-0 w-[1.5px] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
            }}
          />

          {/* Bottom horizontal border line */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
            style={{
              background:
                "linear-gradient(97.51deg, #FEC163 -37.59%, #DE4313 94.05%)",
            }}
          />

          {/* Right vertical border line (starts below Contact to bottom) */}
          <div
            className="absolute top-[28px] sm:top-[32px] right-0 bottom-0 w-[1.5px] pointer-events-none"
            style={{
              background: "linear-gradient(180deg, #FEC163 0%, #DE4313 100%)",
            }}
          />

          {/* Top-Right Contact heading (matching Blogs / About hero notch) */}
          <div className="absolute top-0 right-0 sm:right-2 -translate-y-1/2 flex items-center select-none z-20">
            <span className="font-dm font-normal text-3xl sm:text-4xl lg:text-[42px] text-[var(--ink)] tracking-tight leading-none">
              Contact
            </span>
          </div>

          {/* ── Inner Glow Effects (Figma Ambient Glows) ── */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Ambient orange glow on top-right behind form */}
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(222, 67, 19, 0.45) 0%, rgba(222, 67, 19, 0.15) 50%, transparent 70%)",
                filter: "blur(90px)",
                width: "420px",
                height: "380px",
                right: "40px",
                top: "20px",
              }}
            />

            {/* Soft ambient glow on left */}
            <div
              aria-hidden="true"
              className="absolute rounded-full"
              style={{
                background: "rgba(222, 67, 19, 0.12)",
                filter: "blur(90px)",
                width: "320px",
                height: "260px",
                left: "20px",
                top: "80px",
              }}
            />
          </div>

          {/* ── Two-Column Content: Left Info + Right Form (Exact Figma Proportion) ── */}
          <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* ── Left Column: Let's Collaborate + Contact Details ── */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <div className="space-y-4">
                <h1
                  className="font-dm font-bold text-3xl sm:text-4xl lg:text-[48px] leading-[1.08] text-transparent bg-clip-text"
                  style={{
                    backgroundImage:
                      "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                  }}
                >
                  Let’s
                  <br />
                  Collaborate
                </h1>

                <p className="font-dm text-base lg:text-[18px] pt-3 text-[rgba(255,247,231,0.78)] leading-[1.65] max-w-sm lg:max-w-[420px]">
                  Always open to creating something meaningful together. Please
                  feel free to reach out regarding project collaborations,
                  freelance assignments, or potential career opportunities.
                </p>
              </div>

              {/* Contact Links */}
              <div className="font-dm text-base lg:text-[18px] text-[rgba(255,247,231,0.78)] pt-1">
                <p className="p-0">
                  Call or Whatsapp at{" "}
                  <a
                    href="tel:+8801822500959"
                    style={{
                      backgroundImage:
                        "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    }}
                    className="bg-clip-text text-transparent font-medium underline underline-offset-4 decoration-[#DE4313] hover:opacity-80 transition-opacity inline-block"
                  >
                    +8801822500959
                  </a>
                </p>
                <p>
                  Drop an email at{" "}
                  <a
                    href="mailto:sejuti.m.era@gmail.com"
                    style={{
                      backgroundImage:
                        "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    }}
                    className="bg-clip-text text-transparent font-medium underline underline-offset-4 decoration-[#DE4313] hover:opacity-80 transition-opacity inline-block"
                  >
                    sejuti.m.era@gmail.com
                  </a>
                </p>
                <p>
                  Connect through{" "}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundImage:
                        "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    }}
                    className="bg-clip-text text-transparent font-medium underline underline-offset-4 decoration-[#DE4313] hover:opacity-80 transition-opacity inline-block"
                  >
                    LinkedIn
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      backgroundImage:
                        "linear-gradient(129.89deg, #FEC163 -29.32%, #DE4313 100%)",
                    }}
                    className="bg-clip-text text-transparent font-medium underline underline-offset-4 decoration-[#DE4313] hover:opacity-80 transition-opacity inline-block"
                  >
                    Instagram
                  </a>
                </p>
                <p>or simply fill out the contact form here.</p>
              </div>
            </div>

            {/* ── Right Column: Compact Form (Exact Figma Specs) ── */}
            <div className="lg:col-span-6 w-full flex justify-start lg:justify-end">
              <form
                onSubmit={handleSubmit}
                className="w-full max-w-[440px] lg:max-w-[460px] space-y-4"
              >
                {/* 1. NAME */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block font-dm font-bold text-xs lg:text-[13px] tracking-[0.1em] uppercase text-[#FEC163]"
                  >
                    NAME
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input w-full h-11 lg:h-12 px-4 rounded-[6px] bg-[#0A0F24] text-[var(--ink)] text-base lg:text-xl focus:outline-none transition-all"
                  />
                </div>

                {/* 2. EMAIL & PHONE (2 Columns Side by Side, No Placeholders) */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Email */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block font-dm font-bold text-xs lg:text-[13px] tracking-[0.1em] uppercase text-[#FEC163]"
                    >
                      EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-input w-full h-11 lg:h-12 px-4 rounded-[6px] bg-[#0A0F24] text-[var(--ink)] text-base lg:text-xl focus:outline-none transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="block font-dm font-bold text-xs lg:text-[13px] tracking-[0.1em] uppercase text-[#FEC163]"
                    >
                      PHONE
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-input w-full h-11 lg:h-12 px-4 rounded-[6px] bg-[#0A0F24] text-[var(--ink)] text-base lg:text-xl focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* 3. MESSAGE */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block font-dm font-bold text-xs lg:text-[13px] uppercase text-[#FEC163]"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-input w-full h-24 lg:h-30 p-4 rounded-[6px] bg-[#0A0F24] text-[var(--ink)] text-base lg:text-xl focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === "success" && (
                  <div className="p-2.5 rounded bg-[rgba(222,67,19,0.15)] border border-[#DE4313] text-xs font-dm text-[var(--ink)] animate-fadeIn">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-2.5 rounded bg-red-900/30 border border-red-500 text-xs font-dm text-red-200 animate-fadeIn">
                    Please provide your name and email.
                  </div>
                )}

                {/* 4. SEND MESSAGE Action Button */}
                <div className="pt-1">
                  <ActionSparkleSubmitButton
                    label="SEND MESSAGE"
                    loading={status === "submitting"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
