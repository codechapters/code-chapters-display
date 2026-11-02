"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { CodeChaptersMark } from "./BrandLogo";
import { isIntroSeen } from "@/lib/intro";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [splashFinished, setSplashFinished] = useState(false);
  const [isInstant, setIsInstant] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (isIntroSeen()) {
      setSplashFinished(true);
      setIsInstant(true);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }

    const handleSplashDone = () => setSplashFinished(true);
    window.addEventListener("splash-complete", handleSplashDone);
    const timer = setTimeout(() => setSplashFinished(true), 2800);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("splash-complete", handleSplashDone);
      clearTimeout(timer);
    };
  }, []);

  const links = [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/#services" },
    { name: "Maintenance", href: "/#maintenance" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      const hashIndex = href.indexOf("#");
      if (hashIndex !== -1) {
        const hash = href.substring(hashIndex);
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          if (mobileOpen) setMobileOpen(false);
        }
      }
    }
  };

  const easeSmooth = [0.16, 1, 0.3, 1];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center px-5 sm:px-8 md:px-10 lg:px-16 transition-all duration-300 ${
          scrolled
            ? "h-[70px] bg-canvas/95 backdrop-blur-md border-b border-black/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            : "h-[80px] bg-canvas/80 backdrop-blur-sm border-b border-black/[0.03]"
        }`}
      >
        <div className="flex items-center mr-auto">
          {/* Brand Anchor (Exact docking target for SplashIntro) */}
          <Link
            href="/"
            data-nav-brand="true"
            className={`flex items-center gap-2.5 select-none transition-opacity duration-150 ${
              splashFinished ? "opacity-100" : "opacity-0"
            }`}
          >
            <CodeChaptersMark width={27} height={23} className="text-charcoal shrink-0" />
            <span className="font-outfit font-semibold text-[20px] text-charcoal tracking-[-0.6px] leading-none whitespace-nowrap">
              Code Chapters
            </span>
          </Link>

          {/* Studio separator + subtitle (gracefully blooms in when docked) */}
          <motion.span
            data-nav-sub="true"
            initial={isInstant ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -6 }}
            animate={splashFinished ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -6 }}
            transition={isInstant ? { duration: 0 } : { duration: 0.5, delay: 0.05, ease: easeSmooth }}
            className="hidden md:flex items-center gap-2 ml-2 select-none"
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect
                x="4.25"
                y="0"
                width="1.5"
                height="10"
                rx="0.75"
                fill="#222"
                style={{ transform: "rotate(40deg)", transformOrigin: "center" }}
              />
              <rect
                x="0"
                y="4.25"
                width="10"
                height="1.5"
                rx="0.75"
                fill="#222"
                style={{ transform: "rotate(40deg)", transformOrigin: "center" }}
              />
            </svg>
            <span className="text-[13px] text-charcoal/70 font-normal tracking-tight">
              Web Design Studio
            </span>
          </motion.span>
        </div>

        {/* Desktop nav links (fade in when docked) */}
        <motion.nav
          data-nav-links="true"
          initial={isInstant ? { opacity: 1 } : { opacity: 0 }}
          animate={splashFinished ? { opacity: 1 } : { opacity: 0 }}
          transition={isInstant ? { duration: 0 } : { duration: 0.5, delay: 0.1, ease: easeSmooth }}
          className="hidden md:flex items-center gap-8 mr-8"
        >
          {links.map((l) => (
            <Link
              key={l.name}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="text-[14px] font-medium text-charcoal/70 hover:text-charcoal transition-colors cursor-pointer"
            >
              {l.name}
            </Link>
          ))}
        </motion.nav>

        {/* Contact CTA (fades in when docked) */}
        <motion.div
          data-nav-cta="true"
          initial={isInstant ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
          animate={splashFinished ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.94 }}
          transition={isInstant ? { duration: 0 } : { duration: 0.45, delay: 0.15, ease: easeSmooth }}
        >
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="hidden md:flex items-center gap-2 bg-accent-blue text-brand-dark font-medium text-[14px] h-[44px] px-5 rounded-[10px] hover:bg-accent-blue/85 transition-colors shadow-sm cursor-pointer"
          >
            Contact Us
          </Link>
        </motion.div>

        {/* Hamburger on Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-[44px] h-[44px] bg-white border border-black/10 rounded-xl flex items-center justify-center shadow-sm ml-3 text-charcoal"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed inset-x-4 top-[78px] z-50 bg-canvas/98 backdrop-blur-xl border border-black/10 rounded-2xl p-6 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.name}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href)}
                  className="text-lg font-outfit font-medium text-charcoal py-2 border-b border-black/[0.05]"
                >
                  {l.name}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="mt-2 flex items-center justify-center w-full py-3.5 rounded-xl bg-brand-dark text-white font-medium text-base shadow-sm"
              >
                Contact Us
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
