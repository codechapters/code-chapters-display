"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Smartphone,
  Tablet,
  Monitor,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
} from "lucide-react";

type DeviceKey = "phone" | "tablet" | "desktop";

const DEVICES: { key: DeviceKey; label: string; icon: React.ElementType }[] = [
  { key: "phone", label: "Mobile", icon: Smartphone },
  { key: "tablet", label: "Tablet", icon: Tablet },
  { key: "desktop", label: "Laptop", icon: Monitor },
];

// Target downward scroll distance for each viewport (calibrated for 5.8s downward glide)
const SCROLL_DISTANCES: Record<DeviceKey, number> = {
  phone: 390,
  tablet: 320,
  desktop: 280,
};

/* ──────────────────────────────────────────────────────────────────────────
   AESTHETIC DIGITAL PRODUCT / E-COMMERCE WEBSITE: "A U R A · Spatial Audio"
   Featuring real industrial design photography, titanium product specs,
   ratings, collection lookbook, and mobile thumb-first checkout drawer.
   ────────────────────────────────────────────────────────────────────────── */
function AuraWebsiteContent({ viewport }: { viewport: DeviceKey }) {
  return (
    <div className="w-full text-white/90 select-none bg-[#090a0e] font-outfit">
      {/* ── Top Navigation Bar ── */}
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-2.5 border-b border-white/10 bg-[#090a0e]/95 backdrop-blur-md sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <span className="font-outfit font-extrabold tracking-[0.22em] text-[10px] sm:text-[11.5px] text-white uppercase">
            A U R A
          </span>
          <span className="text-[7.5px] uppercase tracking-widest text-blue-400 font-mono hidden sm:inline">
            // ACOUSTICS
          </span>
        </div>

        {viewport === "phone" ? (
          <div className="flex items-center gap-2">
            <span className="px-1.5 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[7px] font-mono">
              NEW MK II
            </span>
            <div className="flex flex-col gap-1 items-end py-1">
              <span className="w-4 h-[1.2px] bg-white/70" />
              <span className="w-2.5 h-[1.2px] bg-white/70" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 sm:gap-4 text-[8px] sm:text-[9.5px] text-white/60 font-light tracking-wider">
            <span className="text-white font-medium">Objects</span>
            <span>Spatial Engine</span>
            <span>Atelier</span>
            <div className="flex items-center gap-1 text-white/90">
              <ShoppingBag className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-blue-400" />
              <span className="font-mono text-[8px] sm:text-[9px]">(2)</span>
            </div>
          </div>
        )}
      </div>

      {/* ── Hero Monograph ── */}
      <div className="px-3 sm:px-4 pt-3.5 sm:pt-4 pb-2">
        <div className="flex items-center gap-1.5 mb-1">
          <span className="inline-flex w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          <span className="text-[7px] sm:text-[8px] tracking-[0.2em] text-blue-400 uppercase font-mono">
            FLAGSHIP · MK II EDITION
          </span>
        </div>
        <h4 className="font-outfit font-bold text-[15px] sm:text-[18px] md:text-[20px] tracking-[-0.03em] leading-[1.12] text-white mb-1">
          Sound Sculpted in Cast Aluminum.
        </h4>
        <p className="text-[8px] sm:text-[9px] text-white/55 font-light leading-relaxed max-w-[340px]">
          Studio-grade titanium drivers with lossless spatial audio and zero resonant distortion.
        </p>
      </div>

      {/* ── Primary Visual Card: Flagship Aura One MK II ── */}
      <div className="px-3 sm:px-4 mb-3">
        <div className="relative rounded-lg overflow-hidden border border-white/10 bg-[#121319] shadow-lg">
          <div className="relative h-28 sm:h-36 md:h-40 w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
              alt="Aura One MK II Headphones"
              loading="eager"
              className="w-full h-full object-cover brightness-[0.9] contrast-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            
            {/* Price & Status Badge */}
            <div className="absolute top-2.5 right-2.5 z-10">
              <span className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[8px] font-mono text-white/90">
                $480 USD · In Stock
              </span>
            </div>

            <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-end justify-between">
              <div>
                <span className="text-[6.5px] uppercase tracking-widest text-blue-400 font-mono block">
                  ACOUSTIC OBJECT 01
                </span>
                <h5 className="font-outfit font-bold text-[11px] sm:text-[13px] text-white mt-0.5">
                  Aura Studio One
                </h5>
                <p className="text-[7.5px] sm:text-[8.5px] text-white/70 font-light mt-0.5">
                  Billet aluminum housing · 40mm titanium diaphragm.
                </p>
              </div>
              <button className="px-2.5 py-1 rounded-md bg-blue-600 text-white font-outfit font-bold text-[8px] shadow-sm">
                Pre-Order →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Secondary Product Collection: Responsive Re-flow ── */}
      <div
        className={`px-3 sm:px-4 mb-3 gap-2.5 ${
          viewport === "phone" ? "flex flex-col" : "grid grid-cols-2"
        }`}
      >
        {/* Product 02: Aura Pods */}
        <div className="rounded-lg overflow-hidden bg-[#121319] border border-white/10 flex flex-col">
          <div className="h-20 sm:h-24 w-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"
              alt="Aura Pods Pro"
              loading="eager"
              className="w-full h-full object-cover brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <span className="absolute bottom-1.5 left-2 text-[6.5px] uppercase tracking-widest text-white/80 font-mono">
              $240 · 32H BATTERY
            </span>
          </div>
          <div className="p-2 sm:p-2.5 flex items-center justify-between">
            <div>
              <h6 className="font-outfit font-semibold text-[10px] sm:text-[11px] text-white">
                Aura Pods Pro
              </h6>
              <p className="text-[7.5px] text-white/50 leading-snug mt-0.5">
                Active ANC · Titanium case
              </p>
            </div>
            <span className="text-[7.5px] text-emerald-400 font-mono font-medium">★ 4.9</span>
          </div>
        </div>

        {/* Product 03: Aura Stand */}
        <div className="rounded-lg overflow-hidden bg-[#121319] border border-white/10 flex flex-col">
          <div className="h-20 sm:h-24 w-full overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=800&q=80"
              alt="Aura Desk Stand"
              loading="eager"
              className="w-full h-full object-cover brightness-[0.88]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
            <span className="absolute bottom-1.5 left-2 text-[6.5px] uppercase tracking-widest text-white/80 font-mono">
              $140 · CNC WALNUT
            </span>
          </div>
          <div className="p-2 sm:p-2.5 flex items-center justify-between">
            <div>
              <h6 className="font-outfit font-semibold text-[10px] sm:text-[11px] text-white">
                Aura Desk Stand
              </h6>
              <p className="text-[7.5px] text-white/50 leading-snug mt-0.5">
                Solid American walnut base
              </p>
            </div>
            <span className="text-[7.5px] text-emerald-400 font-mono font-medium">★ 5.0</span>
          </div>
        </div>
      </div>

      {/* ── Studio Review Banner with Acoustic Photography ── */}
      <div className="mx-3 sm:mx-4 mb-3.5 rounded-lg overflow-hidden border border-white/10 relative">
        <div className="relative h-22 sm:h-26 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
            alt="Acoustic Atmosphere"
            loading="eager"
            className="w-full h-full object-cover brightness-[0.32]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center">
            <p className="font-serif italic text-[10px] sm:text-[11.5px] text-white/95 leading-relaxed max-w-[300px]">
              &ldquo;The purest acoustic instrument engineered for the modern space.&rdquo;
            </p>
            <span className="text-[6.5px] uppercase tracking-[0.2em] text-blue-400 font-mono mt-1">
              WALLPAPER* DESIGN AWARDS · 2025
            </span>
          </div>
        </div>
      </div>

      {/* ── Technical Specifications Grid ── */}
      <div className="px-3 sm:px-4 mb-3.5">
        <span className="text-[7px] tracking-[0.2em] text-white/40 uppercase font-mono block mb-1.5">
          TECHNICAL BENCHMARKS
        </span>
        <div className="grid grid-cols-4 gap-1.5 text-center">
          {[
            { label: "Titanium", val: "40mm Driver" },
            { label: "Distortion", val: "<0.01% THD" },
            { label: "Battery", val: "38h Lossless" },
            { label: "Chassis", val: "6061 Alloy" },
          ].map((spec) => (
            <div key={spec.label} className="p-1.5 rounded bg-white/[0.04] border border-white/5">
              <span className="text-[6.5px] text-white/40 block font-mono">{spec.label}</span>
              <span className="text-[7.5px] sm:text-[8px] text-white/90 font-medium mt-0.5 block">
                {spec.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Sticky Mobile Checkout Drawer (Only on Phone to Highlight Thumb UX) ── */}
      {viewport === "phone" && (
        <div className="sticky bottom-0 z-30 px-3 py-2 bg-[#090a0e]/95 border-t border-white/10 backdrop-blur-md flex items-center justify-between">
          <div>
            <span className="text-[7px] text-white/40 block font-mono">SELECTED OBJECT</span>
            <span className="text-[9px] font-bold text-white">Aura One MK II · $480</span>
          </div>
          <button className="px-3 py-1 rounded-full bg-blue-600 text-white font-outfit font-bold text-[8.5px] shadow-sm">
            Add to Bag →
          </button>
        </div>
      )}

      {/* ── Footer ── */}
      <div className="px-3 sm:px-4 py-3 border-t border-white/10 text-center bg-[#06070a]">
        <span className="text-[7px] text-white/40 font-mono tracking-widest block mb-0.5">
          AURA ACOUSTIC LABORATORIES · ZURICH · BERLIN
        </span>
        <span className="text-[6.5px] text-white/25 font-mono">
          © 2025 ALL RIGHTS RESERVED
        </span>
      </div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   MAIN SHOWCASE COMPONENT
   Features:
   - 6-Second Seamless Shuffle (Mobile ➔ Tablet ➔ Laptop ➔ Mobile).
   - Smooth downward-only scrolling synchronized with the 6s window.
   - Smooth 3D perspective CoverFlow stage with left/right quick buttons.
   - 3 clean architectural pillars below explaining fluid breakpoints,
     thumb-first ergonomics, and zero layout shift without text heaviness.
   ────────────────────────────────────────────────────────────────────────── */
export function ResponsiveShowcase() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // 6-Second Continuous Automatic Shuffle (Never pauses)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % DEVICES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  // Jump to specific device on user click
  const handleSelectDevice = (idx: number) => {
    setActiveIndex(idx);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % DEVICES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + DEVICES.length) % DEVICES.length);
  };

  return (
    <section
      id="responsive"
      className="scroll-mt-[85px] relative py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-10 lg:px-14 xl:px-[80px] select-none bg-white border-t border-black/[0.06] overflow-hidden font-outfit"
    >
      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col items-center gap-6 sm:gap-8 md:gap-9 w-full">
        {/* Section Header: Centered Studio Presentation */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center px-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-xs font-semibold text-charcoal/70 uppercase tracking-widest">
              // RESPONSIVE BY DEFAULT
            </span>
          </div>

          <h2 className="font-outfit font-bold text-[28px] sm:text-[38px] md:text-[48px] lg:text-[54px] tracking-[-0.035em] leading-[1.08] text-charcoal mb-3">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600">
              Optimized
            </span>{" "}
            for every screen.
          </h2>

          <p className="text-[14px] sm:text-[16px] md:text-[17px] text-charcoal/70 font-outfit leading-relaxed max-w-[560px]">
            We build responsive by default. Your site, app, or product looks and performs great on any device.
          </p>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            CENTERED DEVICE SWITCHER CONTROLS
            Pill with Chevrons, Device Selector Tabs & 6s Auto-Shuffle Progress
           ══════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 select-none w-full max-w-full px-1">
          <div className="inline-flex items-center p-1 rounded-full bg-[#f4f4f2] border border-black/[0.07] shadow-xs max-w-full">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous Device"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-charcoal/60 hover:text-charcoal hover:bg-black/[0.05] transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-0.5 sm:gap-1 mx-0.5 sm:mx-1">
              {DEVICES.map((dev, idx) => {
                const isActive = activeIndex === idx;
                const IconComponent = dev.icon;
                return (
                  <button
                    key={dev.key}
                    type="button"
                    onClick={() => handleSelectDevice(idx)}
                    className={`relative inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11.5px] sm:text-xs font-outfit font-medium transition-colors cursor-pointer select-none ${
                      isActive ? "text-charcoal font-semibold" : "text-charcoal/60 hover:text-charcoal"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeDeviceTabLight"
                        className="absolute inset-0 bg-white rounded-full shadow-xs border border-black/[0.06]"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-1 sm:gap-1.5">
                      <IconComponent className="w-3.5 h-3.5 shrink-0" />
                      <span>{dev.label}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next Device"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-charcoal/60 hover:text-charcoal hover:bg-black/[0.05] transition-all active:scale-95 cursor-pointer shrink-0"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            SINGLE ACTIVE DEVICE SHOWCASE STAGE
            - Continuous non-pausing 6s sequence
            - Downward-only 5.8s slow scroll synchronized to 6s swap
            - Desktop hardware dimensions 100% preserved
           ══════════════════════════════════════════════════════════════════ */}
        <div className="relative w-full flex items-center justify-center min-h-[460px] sm:min-h-[530px] md:min-h-[550px] py-2 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={DEVICES[activeIndex].key}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex items-center justify-center max-w-full"
            >
              {/* ────────────────────────────────────────────────────────
                  1. PHONE HARDWARE MODEL (iPhone 16 Pro - Authentic 19.5:9)
                 ──────────────────────────────────────────────────────── */}
              {DEVICES[activeIndex].key === "phone" && (
                <div className="relative w-[225px] sm:w-[260px] md:w-[275px] h-[450px] sm:h-[515px] md:h-[540px] rounded-[36px] sm:rounded-[44px] bg-[#1a1b22] p-2 sm:p-2.5 border-[4px] sm:border-[5px] border-[#2d2e38] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.22),0_15px_30px_-8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 z-30 w-16 sm:w-20 h-4 rounded-full bg-black flex items-center justify-between px-2 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80" />
                    <span className="w-1 h-1 rounded-full bg-white/30" />
                  </div>

                  {/* Phone Screen with Downward-Only Slow Scroll */}
                  <div className="relative w-full h-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#090a0e]">
                    <motion.div
                      key={`phone-${activeIndex}`}
                      initial={{ y: 0 }}
                      animate={{ y: -SCROLL_DISTANCES.phone }}
                      transition={{
                        duration: 5.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="w-full flex flex-col"
                    >
                      <AuraWebsiteContent viewport="phone" />
                    </motion.div>
                  </div>

                  {/* Bottom Gesture Bar */}
                  <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 z-30 w-20 h-1 rounded-full bg-white/40" />
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  2. TABLET HARDWARE MODEL (iPad Pro - Authentic 4:3 Slate)
                 ──────────────────────────────────────────────────────── */}
              {DEVICES[activeIndex].key === "tablet" && (
                <div className="relative w-[285px] sm:w-[380px] md:w-[420px] h-[390px] sm:h-[490px] md:h-[530px] rounded-[22px] sm:rounded-[28px] bg-[#1a1b22] p-2 sm:p-3 border-[4px] sm:border-[6px] border-[#292a34] shadow-[0_35px_80px_-15px_rgba(0,0,0,0.22),0_15px_35px_-8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden">
                  {/* Top Bezel Camera Pin */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 z-30 w-1.5 h-1.5 rounded-full bg-white/20" />

                  {/* Tablet Screen with Downward-Only Slow Scroll */}
                  <div className="relative w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden bg-[#090a0e]">
                    <motion.div
                      key={`tablet-${activeIndex}`}
                      initial={{ y: 0 }}
                      animate={{ y: -SCROLL_DISTANCES.tablet }}
                      transition={{
                        duration: 5.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                      className="w-full flex flex-col"
                    >
                      <AuraWebsiteContent viewport="tablet" />
                    </motion.div>
                  </div>
                </div>
              )}

              {/* ────────────────────────────────────────────────────────
                  3. LAPTOP HARDWARE MODEL (MacBook Pro - 16:10 + Base Lip)
                 ──────────────────────────────────────────────────────── */}
              {DEVICES[activeIndex].key === "desktop" && (
                <div className="relative flex flex-col items-center max-w-full">
                  {/* Laptop Screen Display Lid */}
                  <div className="relative w-[285px] sm:w-[540px] md:w-[660px] h-[180px] sm:h-[340px] md:h-[400px] rounded-t-xl sm:rounded-t-2xl bg-[#1a1b22] p-1.5 sm:p-2.5 border-[3px] sm:border-[5px] border-[#2b2c36] border-b-0 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.22),0_15px_30px_-8px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden">
                    {/* Top Notch Camera */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30 w-16 sm:w-24 h-2 sm:h-2.5 rounded-b-md bg-[#1a1b22] flex items-center justify-center">
                      <span className="w-1 h-1 rounded-full bg-white/30" />
                    </div>

                    {/* Laptop Screen with Downward-Only Slow Scroll */}
                    <div className="relative w-full h-full rounded-t-lg sm:rounded-t-xl overflow-hidden bg-[#090a0e]">
                      <motion.div
                        key={`desktop-${activeIndex}`}
                        initial={{ y: 0 }}
                        animate={{ y: -SCROLL_DISTANCES.desktop }}
                        transition={{
                          duration: 5.8,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        className="w-full flex flex-col"
                      >
                        <AuraWebsiteContent viewport="desktop" />
                      </motion.div>
                    </div>
                  </div>

                  {/* Laptop Bottom Aluminum Chassis Base with Center Thumb Scoop */}
                  <div className="relative w-[300px] sm:w-[580px] md:w-[700px] h-3 sm:h-4 bg-gradient-to-b from-[#2e2f3a] via-[#1c1d24] to-[#121318] rounded-b-xl border-t border-white/20 shadow-2xl flex items-start justify-center">
                    <div className="w-10 sm:w-16 h-0.5 sm:h-1 rounded-b-md bg-[#0a0a0d]" />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}