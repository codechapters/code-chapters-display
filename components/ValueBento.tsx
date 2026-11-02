"use client";

import React from "react";
import { motion } from "framer-motion";
import { CodeChaptersMark } from "./BrandLogo";

function AnimatedClock() {
  return (
    <div className="relative w-14 h-14 rounded-full border-2 border-charcoal/20 flex items-center justify-center bg-white shadow-inner shrink-0">
      <svg viewBox="0 0 40 40" className="w-12 h-12" aria-hidden="true">
        {/* Tick marks at 12, 3, 6, 9 */}
        <line
          x1="20"
          y1="4"
          x2="20"
          y2="7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="text-charcoal/40"
        />
        <line
          x1="20"
          y1="33"
          x2="20"
          y2="36"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="text-charcoal/40"
        />
        <line
          x1="4"
          y1="20"
          x2="7"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="text-charcoal/40"
        />
        <line
          x1="33"
          y1="20"
          x2="36"
          y2="20"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="text-charcoal/40"
        />

        {/* Hour Hand (Rotates smoothly 360deg every 16s) */}
        <line
          x1="20"
          y1="20"
          x2="20"
          y2="11"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          className="text-charcoal origin-[20px_20px] animate-[spin_16s_linear_infinite]"
        />

        {/* Minute Hand (Rotates smoothly 360deg every 4s) */}
        <line
          x1="20"
          y1="20"
          x2="20"
          y2="7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          className="text-blue-600 origin-[20px_20px] animate-[spin_4s_linear_infinite]"
        />

        {/* Center Pivot Pin */}
        <circle cx="20" cy="20" r="2.2" className="fill-charcoal" />
        <circle cx="20" cy="20" r="1" className="fill-white" />
      </svg>
    </div>
  );
}

export function ValueBento() {
  return (
    <section
      id="why-us"
      className="scroll-mt-[85px] px-4 sm:px-8 md:px-10 lg:px-14 xl:px-[80px] py-10 sm:py-12 md:py-16 select-none bg-canvas overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-7 sm:gap-8 md:gap-10">
        {/* Section Header: Studio Typographic Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-8 items-end pb-1">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] mb-3">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="font-mono text-xs font-semibold text-charcoal/70 uppercase tracking-widest">
                // WHY CODE CHAPTERS
              </span>
            </div>
            <h2 className="font-bold text-charcoal tracking-[-0.035em] leading-[1.08] text-[26px] sm:text-[38px] md:text-[46px] lg:text-[52px] font-outfit">
              <span className="block">Better websites, built faster —</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
                managed effortlessly.
              </span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:pb-1">
            <p className="text-[13.5px] sm:text-[15px] text-charcoal/65 max-w-[360px] leading-[1.6] font-outfit">
              No agency runaround, no messy templates. Direct senior engineering from initial launch to long-term care.
            </p>
          </div>
        </div>

        {/* Studio Bento Grid: Compact Full-Horizontal Banner + 3-Card Down Row */}
        <div className="flex flex-col gap-4 sm:gap-5 w-full font-outfit">
          {/* ══════════════════════════════════════════════════════════════════
              ROW 1: COMPACT HORIZONTAL HERO TILE - Direct Execution
             ══════════════════════════════════════════════════════════════════ */}
          <div className="relative bg-white rounded-[20px] overflow-hidden flex flex-col justify-between p-4 sm:p-6 lg:px-7 lg:py-5 border border-black/[0.07] shadow-xs hover:border-black/20 transition-all group w-full">
            {/* Top Bar: Compact */}
            <div className="flex items-center justify-between w-full mb-3">
              <span className="text-[12px] tracking-[-0.02em] text-charcoal/50 font-mono">
                // Direct Execution
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#84cc16]/15 text-[#4d7c0f] text-[11px] font-semibold tracking-tight">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
                Zero Agency Overhead
              </span>
            </div>

            {/* Content: Compact split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 lg:gap-6 items-center">
              {/* Left Column: Headline */}
              <div className="lg:col-span-7">
                <h3 className="font-semibold text-[18px] sm:text-[21px] lg:text-[24px] text-charcoal tracking-[-0.03em] leading-snug">
                  Work directly with the builders.{" "}
                  <span className="text-charcoal/65">No middlemen, no delays.</span>
                </h3>
              </div>

              {/* Right Column: 3 Sleek Horizontal Pill Highlights */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                <div className="flex items-center justify-between px-3 py-2 sm:flex-col sm:items-start sm:justify-center sm:p-2.5 rounded-xl bg-[#f8f8f6] border border-black/[0.04]">
                  <span className="text-[12px] font-semibold text-charcoal">Quick Delivery</span>
                  <span className="text-[10.5px] text-charcoal/50">Days, not months</span>
                </div>

                <div className="flex items-center justify-between px-3 py-2 sm:flex-col sm:items-start sm:justify-center sm:p-2.5 rounded-xl bg-[#f8f8f6] border border-black/[0.04]">
                  <span className="text-[12px] font-semibold text-charcoal">Live Previews</span>
                  <span className="text-[10.5px] text-charcoal/50">Weekly demos</span>
                </div>

                <div className="flex items-center justify-between px-3 py-2 sm:flex-col sm:items-start sm:justify-center sm:p-2.5 rounded-xl bg-[#f8f8f6] border border-black/[0.04]">
                  <span className="text-[12px] font-semibold text-charcoal">Total Ownership</span>
                  <span className="text-[10.5px] text-charcoal/50">100% code &amp; assets</span>
                </div>
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              ROW 2: 3 BALANCED TILES (Matching Heights, Perfect Alignment)
              1. Save Money Tile: 2 Columns (50% width, expansive horizontal comparison)
              2. 24hr Support Tile: 1 Column (25% width, bold centered stat)
              3. Focus on Your Business Tile: 1 Column (25% width, clean checklist + CTA)
             ══════════════════════════════════════════════════════════════════ */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 items-stretch w-full">
            {/* TILE 1: Save Money Tile (Horizontally Expansive - Spans 2 Cols) */}
            <div className="relative bg-white rounded-[20px] min-h-[290px] sm:min-h-[310px] lg:h-[330px] overflow-hidden flex flex-col justify-between p-5 sm:p-6 lg:p-7 border border-black/[0.07] shadow-xs hover:border-black/20 transition-all md:col-span-2 lg:col-span-2 group">
              {/* Top Bar */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between w-full">
                  <span className="text-[12px] sm:text-[13px] tracking-[-0.02em] text-charcoal/50 font-mono">
                    // Pricing
                  </span>
                  <span className="bg-[#bceb18] text-[#1c1c1e] text-[11.5px] font-semibold px-2.5 py-1 rounded-md tracking-tight shrink-0 shadow-xs">
                    Save up to 80%
                  </span>
                </div>

                <h3 className="font-bold text-[22px] sm:text-[24px] lg:text-[26px] text-charcoal tracking-[-0.035em] leading-[1.15]">
                  Save money without<br />sacrificing quality
                </h3>

                <p className="text-[13px] sm:text-[14px] text-charcoal/65 leading-[1.5] max-w-[460px]">
                  Cut overhead, not quality. Pay for the work, not the org chart between you and the engineer.
                </p>
              </div>

              {/* Horizontal Comparison Table */}
              <div className="flex flex-col gap-2.5 sm:gap-3 pt-3 border-t border-black/[0.06] mt-auto">
                {/* Row 1: Others */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="w-24 sm:w-28 text-[12.5px] sm:text-[13.5px] font-medium text-charcoal/65 shrink-0">
                    Others
                  </span>
                  <div className="flex-1 h-[40px] sm:h-[44px] bg-[#f4f4f2] rounded-xl flex items-center justify-end pr-4 sm:pr-5 border border-black/[0.03]">
                    <span className="text-[12.5px] sm:text-[13.5px] font-medium text-charcoal/70 tabular-nums">
                      Up to $1,000
                    </span>
                  </div>
                </div>

                {/* Row 2: Code Chapters */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="w-24 sm:w-28 text-[12.5px] sm:text-[13.5px] font-bold text-charcoal shrink-0">
                    Code Chapters
                  </span>
                  <div className="flex-1 h-[40px] sm:h-[44px] flex items-center">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.15 }}
                      style={{ originX: 0 }}
                      className="w-[50%] sm:w-[44%] h-full bg-blue-600 rounded-xl shadow-sm shadow-blue-500/20 relative overflow-hidden flex items-center px-4 sm:px-5"
                    >
                      <span className="text-[12.5px] sm:text-[13.5px] font-semibold text-white tabular-nums whitespace-nowrap z-10">
                        From $399
                      </span>
                      {/* Smooth light shimmer reflex */}
                      <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "200%" }}
                        transition={{ repeat: Infinity, duration: 2.4, ease: "linear", delay: 0.8 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* TILE 2: 24hr Support Tile (1 Col) */}
            <div className="relative bg-[#f7f7f5] border border-black/[0.07] rounded-[20px] min-h-[290px] sm:min-h-[310px] lg:h-[330px] overflow-hidden flex flex-col justify-between p-5 sm:p-6 group hover:border-black/20 transition-all md:col-span-1 lg:col-span-1">
              {/* Top Bar: Support tag + Animated Clock */}
              <div className="flex items-center justify-between w-full">
                <span className="text-[12px] sm:text-[13px] tracking-[-0.02em] text-charcoal/50 font-mono">
                  // Support
                </span>
                {/* Custom Animated 24hr Clock */}
                <AnimatedClock />
              </div>

              {/* Hero 24h Stat */}
              <div className="my-auto py-1">
                <p className="font-bold text-[84px] sm:text-[96px] lg:text-[104px] text-charcoal tracking-[-0.06em] leading-[0.85] select-none">
                  24<span className="text-blue-500">h</span>
                </p>
              </div>

              {/* Bottom Status Note */}
              <div className="flex items-center gap-2 pt-2 border-t border-black/[0.04]">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#84cc16] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#84cc16]" />
                </span>
                <p className="text-[12px] sm:text-[13px] text-charcoal/70 leading-[1.4] tracking-tight">
                  Email us anytime — a real reply within a day.
                </p>
              </div>
            </div>

            {/* TILE 3: Focus on Your Business Tile (1 Col) */}
            <div className="relative bg-[#2563eb] text-white rounded-[20px] min-h-[290px] sm:min-h-[310px] lg:h-[330px] overflow-hidden flex flex-col justify-between p-5 sm:p-6 shadow-lg shadow-blue-600/15 group hover:shadow-xl hover:shadow-blue-600/25 transition-all md:col-span-1 lg:col-span-1">
              {/* Background Watermark Geometric Mark */}
              <div className="absolute -top-7 -right-7 opacity-15 pointer-events-none group-hover:scale-105 group-hover:opacity-20 transition-all duration-500">
                <CodeChaptersMark className="w-32 h-32 text-white" />
              </div>

              {/* Title & Checklist with Right-Sized Typographic Hierarchy */}
              <div className="relative z-10 flex flex-col gap-2.5 sm:gap-3">
                <h3 className="font-bold text-[20px] sm:text-[22px] text-white tracking-[-0.035em] leading-[1.2]">
                  Focus on your business.
                  <br />
                  We’ll handle the web.
                </h3>

                {/* Checklist */}
                <div className="flex flex-col gap-1.5 sm:gap-2 pt-0.5">
                  {["Senior engineers", "Bespoke design", "Post-launch care"].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <span className="flex items-center justify-center w-4 h-4 rounded-full bg-white/25 text-white shrink-0">
                        <svg viewBox="0 0 12 12" fill="none" className="w-2.5 h-2.5">
                          <path
                            d="M2.5 6.5L4.5 8.5L9.5 3.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-[13px] sm:text-[13.5px] font-medium text-white/95">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Button (Rounded Card) */}
              <div className="relative z-10 pt-2 border-t border-white/15">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center w-full h-[44px] rounded-xl bg-white text-[#1c1c1e] font-semibold text-[13px] sm:text-[13.5px] tracking-tight hover:bg-neutral-100 hover:scale-[1.01] active:scale-[0.99] transition-all shadow-sm font-outfit"
                >
                  <span className="mr-1.5 text-xs">⚡</span> Get a project estimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
