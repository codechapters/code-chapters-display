"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { AmbientBackground } from "./AmbientBackground";
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

  const easeFluid = [0.16, 1, 0.3, 1]; // Fluid signature cubic-bezier

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
    <section className="relative flex flex-col justify-center pt-28 pb-10 sm:pt-36 sm:pb-12 md:pt-40 md:pb-14 px-4 sm:px-8 md:px-10 lg:px-16 overflow-hidden bg-canvas">
      <AmbientBackground />

      {/* Subtle organic botanical ambient silhouette on right */}
      <motion.div
        data-hero-bg="true"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={ready ? { opacity: 0.35, scale: 1 } : { opacity: 0, scale: 0.96 }}
        transition={isInstant ? { duration: 0 } : { duration: 1.2, delay: 0.3, ease: easeFluid }}
        className="pointer-events-none absolute right-[-5%] bottom-0 top-0 w-[55%] max-w-[650px] hidden md:block select-none -z-0 overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 500 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover object-right-bottom text-black/[0.07]"
        >
          {/* Subtle architectural botanical contour curves */}
          <path
            d="M500 600C380 580 310 490 280 400C250 310 270 200 340 120C400 50 460 20 500 0V600Z"
            fill="currentColor"
          />
          <path
            d="M500 600C410 590 350 510 320 430C290 350 310 260 380 180C430 120 470 60 500 30V600Z"
            fill="currentColor"
            fillOpacity="0.5"
          />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Line 0: Pre-headline — masked editorial reveal */}
        <div className="overflow-hidden mb-4 sm:mb-5">
          <motion.div
            data-hero-mask="true"
            custom={0.04}
            variants={maskVariant}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            className="flex items-center gap-3"
          >
            <span className="text-sm sm:text-base font-medium text-charcoal/80">
              You don&apos;t need just a website
            </span>
            <span className="text-sm sm:text-base font-normal text-charcoal/40">
              — you need a chapter.
            </span>
          </motion.div>
        </div>

        {/* Massive Headline — Dual Line Masked Reveal */}
        <h1 className="font-outfit font-bold text-[36px] sm:text-[62px] md:text-[78px] lg:text-[92px] text-charcoal tracking-[-0.04em] leading-[1.05] mb-8 select-none">
          {/* Headline Line 1: We deliver the [right] */}
          <div className="overflow-hidden pb-1">
            <motion.span
              data-hero-mask="true"
              custom={0.12}
              variants={maskVariant}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              className="inline-flex items-center gap-2.5 sm:gap-3 flex-wrap"
            >
              <span>We deliver the</span>
              <motion.span
                data-hero-pill="true"
                initial={
                  isInstant
                    ? { scale: 1, rotate: -1.5, opacity: 1 }
                    : { scale: 0.88, rotate: 0, opacity: 0 }
                }
                animate={
                  ready
                    ? { scale: 1, rotate: -1.5, opacity: 1 }
                    : { scale: 0.88, rotate: 0, opacity: 0 }
                }
                transition={
                  isInstant
                    ? { duration: 0 }
                    : { duration: 0.65, delay: 0.32, ease: [0.34, 1.56, 0.64, 1] }
                }
                className="inline-block bg-accent-blue text-brand-dark px-3 py-0.5 rounded-md shadow-xs origin-bottom-left"
              >
                right
              </motion.span>
            </motion.span>
          </div>

          {/* Headline Line 2: website for your brand. */}
          <div className="overflow-hidden pb-2">
            <motion.span
              data-hero-mask="true"
              custom={0.22}
              variants={maskVariant}
              initial="hidden"
              animate={ready ? "visible" : "hidden"}
              className="block"
            >
              website for your brand.
            </motion.span>
          </div>
        </h1>

        {/* Subtitle & Colorful Social Proof — Masked Reveal */}
        <div className="overflow-hidden mb-12">
          <motion.div
            data-hero-mask="true"
            custom={0.32}
            variants={maskVariant}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row sm:items-center gap-8 sm:gap-16"
          >
            <p className="text-sm sm:text-base text-charcoal/60 leading-relaxed max-w-xs">
              Websites, maintenance &amp; care plans.
              <br />
              Fast, clean, and built to scale.
            </p>

            {/* Inline Social Proof with Colorful Brand Logos */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 sm:gap-4">
              <div className="flex -space-x-2.5 sm:-space-x-3 shrink-0">
                {/* Brand 1: Neon Lime Minimal Geometric */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-canvas shadow-sm flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px]">
                    <path d="M4 6h3.5v12H4zM10.2 6h3.5v12h-3.5zM16.5 6H20v12h-3.5z" fill="#84cc16" />
                  </svg>
                </div>

                {/* Brand 2: Cyan & Royal Blue Gradient Network */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-canvas shadow-sm flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px]">
                    <defs>
                      <linearGradient id="g-blue" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#06b6d4" />
                        <stop offset="1" stopColor="#2563eb" />
                      </linearGradient>
                    </defs>
                    <path d="M4 5l7 14 9-15" stroke="url(#g-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="4" cy="5" r="2" fill="#06b6d4" />
                    <circle cx="20" cy="4" r="2.5" fill="#2563eb" />
                  </svg>
                </div>

                {/* Brand 3: Vibrant Purple Crest */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-canvas shadow-sm flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="sm:w-[22px] sm:h-[22px]">
                    <path d="M12 3l8 17-8-4-8 4 8-17z" fill="#8b5cf6" />
                    <circle cx="12" cy="14" r="2.5" fill="#c084fc" />
                  </svg>
                </div>

                {/* Brand 4: Cobalt Blue Modern Mark */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-canvas shadow-sm flex items-center justify-center p-1.5 shrink-0 overflow-hidden">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="sm:w-[20px] sm:h-[20px]">
                    <path d="M6 4h12a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4H10v8H6V4z" fill="#2563eb" />
                  </svg>
                </div>

                {/* Brand 5: Vibrant Orange Rounded Badge */}
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border-2 border-canvas shadow-sm flex items-center justify-center p-1 shrink-0 overflow-hidden">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-[#ea580c] flex items-center justify-center text-white shadow-xs">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="sm:w-[15px] sm:h-[15px]">
                      <rect x="3" y="7" width="18" height="14" rx="2" />
                      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                      <line x1="12" y1="12" x2="12" y2="16" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-outfit font-bold text-sm text-charcoal">
                    5.0<span className="font-normal text-charcoal/40">/5</span> · 8 reviews
                  </span>
                  <div className="flex items-center gap-0.5 text-[#60a5fa]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#60a5fa] text-[#60a5fa]" />
                    ))}
                  </div>
                </div>
                <p className="text-xs sm:text-[13px] text-charcoal/60 font-medium tracking-tight mt-0.5">
                  Trusted by 14 brands
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Action Buttons — Masked Reveal */}
        <div className="overflow-hidden pt-1">
          <motion.div
            data-hero-mask="true"
            custom={0.42}
            variants={maskVariant}
            initial="hidden"
            animate={ready ? "visible" : "hidden"}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3"
          >
            <Link
              href="#work"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-dark text-white font-outfit font-semibold text-sm sm:text-base hover:bg-black/80 active:scale-[0.98] transition-all shadow-md group"
            >
              <span>See Our Work</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-white border border-black/[0.09] text-charcoal font-medium text-sm sm:text-base hover:border-black/20 active:scale-[0.98] transition-all shadow-sm"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
