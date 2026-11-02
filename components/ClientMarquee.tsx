"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { isIntroSeen } from "@/lib/intro";

interface Client {
  name: string;
  category: string;
  logo: React.ReactNode;
}

export function ClientMarquee() {
  const row1: Client[] = [
    {
      name: "Aethel Living",
      category: "D2C Homeware",
      logo: (
        <div className="flex items-center gap-2.5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M12 2L2 22h20L12 2z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 8v10" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-serif font-bold text-[17px] tracking-tight text-charcoal/90">
            Aethel
          </span>
        </div>
      ),
    },
    {
      name: "Kinetics Audio",
      category: "Spatial Hardware",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <rect x="3" y="10" width="3" height="8" rx="1.5" fill="currentColor" />
            <rect x="8" y="6" width="3" height="15" rx="1.5" fill="currentColor" />
            <rect x="13" y="2" width="3" height="19" rx="1.5" fill="currentColor" />
            <rect x="18" y="8" width="3" height="11" rx="1.5" fill="currentColor" />
          </svg>
          <span className="font-outfit font-extrabold text-[16px] tracking-wider uppercase text-charcoal/90">
            Kinetics
          </span>
        </div>
      ),
    },
    {
      name: "Form & Matter",
      category: "Spatial Design",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <rect x="8" y="8" width="8" height="8" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-serif italic font-semibold text-[16px] tracking-tight text-charcoal/90">
            Form &amp; Matter
          </span>
        </div>
      ),
    },
    {
      name: "Prism Dynamics",
      category: "Cloud Security",
      logo: (
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <polygon points="12 2 22 19 2 19" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <line x1="12" y1="2" x2="12" y2="19" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
          </svg>
          <span className="font-mono font-bold text-[15px] tracking-tight uppercase text-charcoal/90">
            Prism.io
          </span>
        </div>
      ),
    },
    {
      name: "Solaria Health",
      category: "Telehealth",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <circle cx="12" cy="12" r="4" fill="currentColor" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="font-outfit font-semibold text-[17px] tracking-tight text-charcoal/90">
            Solaria
          </span>
        </div>
      ),
    },
    {
      name: "Nordic Roasters",
      category: "Specialty Goods",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M3 18l6-10 4 6 8-12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-sans font-bold text-[15px] uppercase tracking-[0.18em] text-charcoal/90">
            Nordic
          </span>
        </div>
      ),
    },
    {
      name: "Volta Mobility",
      category: "EV Platform",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="currentColor" />
          </svg>
          <span className="font-outfit font-black text-[17px] tracking-tight uppercase text-charcoal/90">
            Volta
          </span>
        </div>
      ),
    },
    {
      name: "Bespoke Carry",
      category: "Artisan Leather",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <rect x="3" y="6" width="18" height="15" rx="3" stroke="currentColor" strokeWidth="2" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-serif font-bold text-[16px] tracking-wide text-charcoal/90">
            Bespoke
          </span>
        </div>
      ),
    },
    {
      name: "Zephyr Logistics",
      category: "Freight Automation",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M4 8h16M4 12h12M4 16h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className="font-outfit font-extrabold text-[16px] tracking-tight uppercase text-charcoal/90">
            Zephyr
          </span>
        </div>
      ),
    },
  ];

  const row2: Client[] = [
    {
      name: "Lumina Labs",
      category: "Optics AI",
      logo: (
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <circle cx="9" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
            <circle cx="15" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-outfit font-semibold text-[17px] tracking-tight text-charcoal/90">
            Lumina
          </span>
        </div>
      ),
    },
    {
      name: "Verve Capital",
      category: "Venture Fund",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M4 4l8 16 8-16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-sans font-black text-[16px] uppercase tracking-[0.14em] text-charcoal/90">
            Verve
          </span>
        </div>
      ),
    },
    {
      name: "Arcline Studio",
      category: "Architecture",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M3 21h18M5 21V8l7-5 7 5v13" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="font-serif font-bold text-[17px] tracking-tight text-charcoal/90">
            Arcline
          </span>
        </div>
      ),
    },
    {
      name: "Chronos Capital",
      category: "Quant Equity",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
            <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-mono font-bold text-[15px] uppercase tracking-wider text-charcoal/90">
            Chronos
          </span>
        </div>
      ),
    },
    {
      name: "Solis Craft",
      category: "Organic Botanicals",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M12 2C8 6 4 10 4 15a8 8 0 0 0 16 0c0-5-4-9-8-13z" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span className="font-serif italic font-bold text-[17px] tracking-tight text-charcoal/90">
            Solis
          </span>
        </div>
      ),
    },
    {
      name: "Kite AI",
      category: "Developer Tools",
      logo: (
        <div className="flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <polygon points="12 2 20 10 12 22 4 10 12 2" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.12" />
          </svg>
          <span className="font-outfit font-extrabold text-[16px] tracking-tight uppercase text-charcoal/90">
            Kite.ai
          </span>
        </div>
      ),
    },
    {
      name: "Nuvola Systems",
      category: "Edge Compute",
      logo: (
        <div className="flex items-center gap-2.5">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="font-sans font-bold text-[16px] tracking-tight text-charcoal/90">
            Nuvola
          </span>
        </div>
      ),
    },
    {
      name: "Equinox Media",
      category: "Editorial Publication",
      logo: (
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-charcoal/85">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" />
          </svg>
          <span className="font-serif font-bold text-[16px] tracking-wide text-charcoal/90">
            Equinox
          </span>
        </div>
      ),
    },
  ];

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

  return (
    <section className="pt-4 pb-8 sm:pt-6 sm:pb-10 overflow-hidden bg-canvas">
      <motion.div
        data-marquee-wrap="true"
        initial={{ opacity: 0, y: 24 }}
        animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={isInstant ? { duration: 0 } : { duration: 0.8, delay: 0.48, ease: easeFluid }}
      >
        {/* Top Header Row matching the reference layout */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 md:px-12 mb-7 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-full bg-charcoal text-white flex items-center justify-center text-xs font-bold leading-none select-none">
            +
          </div>
          <span className="font-outfit font-semibold text-sm sm:text-base text-charcoal tracking-tight">
            Our clients
          </span>
        </div>

        <span className="font-outfit text-xs sm:text-sm text-charcoal/50 font-normal">
          (14 brands · 2025—26©)
        </span>
      </div>

      {/* Row 1 Marquee (Moving Left) */}
      <div className="pause-on-hover relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] mb-4">
        <div className="flex shrink-0 items-center gap-4 py-1 animate-marquee-slow">
          {row1.concat(row1).map((client, idx) => (
            <div
              key={idx}
              className="h-[84px] sm:h-[94px] min-w-[190px] sm:min-w-[220px] px-6 rounded-2xl md:rounded-[22px] bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-black/15 transition-all duration-300 flex items-center justify-center shrink-0 select-none group cursor-default"
            >
              <div className="opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-200">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 Marquee (Moving Reverse/Right) */}
      <div className="pause-on-hover relative w-full overflow-hidden flex [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 items-center gap-4 py-1 animate-marquee-slow-reverse">
          {row2.concat(row2).map((client, idx) => (
            <div
              key={idx}
              className="h-[84px] sm:h-[94px] min-w-[190px] sm:min-w-[220px] px-6 rounded-2xl md:rounded-[22px] bg-white border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-black/15 transition-all duration-300 flex items-center justify-center shrink-0 select-none group cursor-default"
            >
              <div className="opacity-80 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-200">
                {client.logo}
              </div>
            </div>
          ))}
        </div>
      </div>
      </motion.div>
    </section>
  );
}
