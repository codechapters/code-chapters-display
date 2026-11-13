"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { AmbientBackground } from "./AmbientBackground";
import MacBookLaptop from "./MacBookLaptop";
import { isIntroSeen } from "@/lib/intro";

export function Hero() {
  const [ready, setReady] = useState(false);
  const [isInstant, setIsInstant] = useState(false);

  useEffect(() => {
    if (isIntroSeen()) {
      setReady(true);
      setIsInstant(true);
      return;
    }
    const onSplashDone = () => setReady(true);
    window.addEventListener("splash-complete", onSplashDone);
    const fallback = setTimeout(() => setReady(true), 2800);
    return () => {
      window.removeEventListener("splash-complete", onSplashDone);
      clearTimeout(fallback);
    };
  }, []);

  const easeFluid = [0.16, 1, 0.3, 1];

  // Masked slide-up animation variant
  const maskVariant = {
    hidden: { y: "115%", opacity: 0 },
    visible: (customDelay: number) => ({
      y: "0%",
      opacity: 1,
      transition: isInstant
        ? { duration: 0 }
        : {
            duration: 0.82,
            ease: easeFluid,
            delay: customDelay,
          },
    }),
  };

  return (
    <section className="relative flex flex-col justify-center min-h-[calc(100vh-80px)] pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 px-5 sm:px-8 md:px-12 lg:px-16 xl:px-20 overflow-hidden bg-canvas">
      <AmbientBackground />

      <div className="relative z-10 max-w-[1480px] mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4 xl:gap-8">
          
          {/* ================= LEFT COLUMN: Typography & CTAs ================= */}
          <div className="w-full lg:w-auto lg:shrink-0 flex flex-col justify-center relative z-20">
            {/* Pill Capsule: Pre-headline */}
            <div className="overflow-hidden mb-5 sm:mb-8">
              <motion.div
                data-hero-mask="true"
                custom={0.04}
                variants={maskVariant}
                initial="hidden"
                animate={ready ? "visible" : "hidden"}
              >
                <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/95 border border-black/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-sm max-w-full">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600 shrink-0" />
                  <p className="text-[11px] sm:text-[14px] leading-snug">
                    <span className="font-semibold text-charcoal">
                      You don&apos;t need just a website
                    </span>{" "}
                    <span className="font-normal text-charcoal/50">
                      — you need a chapter.
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Headline: Clean 2-Line Structure with Responsive Mobile Scale */}
            <h1 className="font-outfit font-bold text-[clamp(25px,7.5vw,42px)] sm:text-[50px] md:text-[58px] lg:text-[62px] xl:text-[72px] 2xl:text-[78px] text-charcoal tracking-[-0.04em] leading-[1.08] sm:leading-[1.06] mb-5 sm:mb-8 select-none">
              {/* Line 1: We deliver the [right] */}
              <div className="overflow-hidden pb-1">
                <motion.div
                  data-hero-mask="true"
                  custom={0.12}
                  variants={maskVariant}
                  initial="hidden"
                  animate={ready ? "visible" : "hidden"}
                  className="flex items-center gap-2 sm:gap-3 flex-nowrap"
                >
                  <span className="whitespace-nowrap">We deliver the</span>
                  <motion.span
                    data-hero-pill="true"
                    initial={
                      isInstant
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.94, opacity: 0 }
                    }
                    animate={
                      ready
                        ? { scale: 1, opacity: 1 }
                        : { scale: 0.94, opacity: 0 }
                    }
                    transition={
                      isInstant
                        ? { duration: 0 }
                        : { duration: 0.5, delay: 0.25, ease: [0.34, 1.56, 0.64, 1] }
                    }
                    className="inline-block bg-[#93c5fd] text-charcoal px-2.5 sm:px-5 py-0.5 sm:py-1 rounded-lg sm:rounded-2xl shadow-xs whitespace-nowrap"
                  >
                    right
                  </motion.span>
                </motion.div>
              </div>

              {/* Line 2: website for your brand. */}
              <div className="overflow-hidden pb-1">
                <motion.div
                  data-hero-mask="true"
                  custom={0.22}
                  variants={maskVariant}
                  initial="hidden"
                  animate={ready ? "visible" : "hidden"}
                  className="block whitespace-nowrap"
                >
                  website for your brand<span className="text-blue-600">.</span>
                </motion.div>
              </div>
            </h1>

            {/* Subtitle with Increased Vertical Presence */}
            <div className="overflow-hidden mb-6 sm:mb-10">
              <motion.p
                data-hero-mask="true"
                custom={0.32}
                variants={maskVariant}
                initial="hidden"
                animate={ready ? "visible" : "hidden"}
                className="text-[13.5px] sm:text-base md:text-lg text-charcoal/65 leading-relaxed max-w-md"
              >
                Websites, maintenance &amp; care plans.
                <br />
                Fast, clean, and built to scale.
              </motion.p>
            </div>

            {/* Action Buttons & Social Proof Row */}
            <div className="overflow-hidden">
              <motion.div
                data-hero-mask="true"
                custom={0.42}
                variants={maskVariant}
                initial="hidden"
                animate={ready ? "visible" : "hidden"}
                className="flex flex-col sm:flex-row sm:flex-nowrap items-start sm:items-center gap-4 sm:gap-6"
              >
                {/* Action Buttons */}
                <div className="flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto shrink-0">
                  <Link
                    href="#work"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-brand-dark text-white font-outfit font-semibold text-xs sm:text-sm hover:bg-black/85 active:scale-[0.98] transition-all shadow-sm group shrink-0"
                  >
                    <span>See Our Work</span>
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <Link
                    href="#contact"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-5 sm:px-7 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-white border border-black/[0.08] text-charcoal font-outfit font-medium text-xs sm:text-sm hover:border-black/20 hover:bg-black/[0.01] active:scale-[0.98] transition-all shadow-sm shrink-0"
                  >
                    Start a Project
                  </Link>
                </div>

                {/* Subtle Vertical Divider */}
                <div className="hidden sm:block h-9 sm:h-10 w-px bg-black/[0.09] mx-1 shrink-0" />

                {/* Inline Social Proof */}
                <div className="flex items-center gap-2.5 sm:gap-3.5 shrink-0">
                  <div className="flex -space-x-2 shrink-0">
                    {/* Brand 1: Green minimal G */}
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-black/10 shadow-xs flex items-center justify-center shrink-0">
                      <span className="font-outfit font-bold text-[11px] sm:text-[13px] text-[#22c55e]">G</span>
                    </div>

                    {/* Brand 2: Purple V */}
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-black/10 shadow-xs flex items-center justify-center shrink-0">
                      <span className="font-outfit font-bold text-[11px] sm:text-[13px] text-[#8b5cf6]">V</span>
                    </div>

                    {/* Brand 3: Cyan/Blue A */}
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-black/10 shadow-xs flex items-center justify-center shrink-0">
                      <span className="font-outfit font-bold text-[11px] sm:text-[13px] text-[#06b6d4]">A</span>
                    </div>

                    {/* Brand 4: Royal Blue P */}
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-black/10 shadow-xs flex items-center justify-center shrink-0">
                      <span className="font-outfit font-bold text-[11px] sm:text-[13px] text-[#2563eb]">P</span>
                    </div>

                    {/* Brand 5: Orange Rounded Bag */}
                    <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white border border-black/10 shadow-xs flex items-center justify-center p-0.5 shrink-0">
                      <div className="w-[18px] h-[18px] sm:w-6 sm:h-6 rounded-md bg-[#ea580c] flex items-center justify-center text-white shadow-2xs">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="sm:w-[11px] sm:h-[11px]">
                          <rect x="3" y="7" width="18" height="14" rx="2" />
                          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                          <line x1="12" y1="12" x2="12" y2="16" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-outfit font-bold text-xs sm:text-[14px] text-charcoal leading-none whitespace-nowrap">
                        5.0<span className="font-normal text-charcoal/40">/5</span> · 8 reviews
                      </span>
                      <div className="flex items-center gap-0.5 text-[#60a5fa] shrink-0">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
                        ))}
                      </div>
                    </div>
                    <p className="text-[11px] sm:text-xs text-charcoal/50 font-medium tracking-tight mt-0.5">
                      Trusted by 14 brands
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: 3D MacBook Showcase (2x Enlarged) ================= */}
          <div className="w-full lg:flex-1 relative flex items-center justify-center lg:justify-start mt-8 lg:mt-0 min-w-0 z-10">
            {/* Subtle, Soft Blue Radial Glow Directly Behind Laptop */}
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-[45%] w-[720px] h-[640px] xl:w-[920px] xl:h-[800px] rounded-full bg-gradient-to-tr from-[#93c5fd]/35 via-[#bfdbfe]/40 to-[#e0e7ff]/20 blur-3xl -z-10"
              aria-hidden="true"
            />
            {/* Bottom-right Corner Sweeping Ambient Crescent Bloom */}
            <div
              className="pointer-events-none absolute -bottom-24 -right-24 w-[580px] h-[580px] rounded-full bg-gradient-to-tl from-[#93c5fd]/30 via-[#dbeafe]/20 to-transparent blur-3xl -z-10"
              aria-hidden="true"
            />

            {/* Subtle Dotted Grid Pattern in Upper-Right Corner */}
            <div
              className="pointer-events-none absolute -top-2 sm:top-0 right-2 sm:right-6 xl:right-8 grid grid-cols-5 gap-2.5 opacity-35 select-none z-10"
              aria-hidden="true"
            >
              {[...Array(25)].map((_, i) => (
                <span key={i} className="w-1 h-1 rounded-full bg-slate-500/50" />
              ))}
            </div>

            {/* Laptop Presentation Container - Scaled via container width so 3D perspective stays 100% original */}
            <div className="relative z-10 w-full max-w-[820px] lg:max-w-none lg:w-[150%] xl:w-[158%] 2xl:w-[165%] lg:-ml-16 xl:-ml-24 translate-y-2 sm:translate-y-4 lg:translate-y-6">
              {/* Soft grounding depth shadow underneath laptop chassis */}
              <div
                className="pointer-events-none absolute bottom-[1%] left-[12%] right-[10%] h-10 bg-slate-900/[0.16] blur-2xl rounded-full"
                aria-hidden="true"
              />

              {/* 3D Space-Grey MacBook with Opening Lid, Keyboard, Trackpad & Auto-scrolling Mini Site */}
              <MacBookLaptop fullscreen={false} once={false} finish="space" ready={ready} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
