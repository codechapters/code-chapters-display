"use client";

import React, { useEffect, useRef, useState } from "react";
import { useAnimate, stagger } from "framer-motion";
import { CodeChaptersMark } from "./BrandLogo";
import { isIntroSeen, markIntroSeen } from "@/lib/intro";

export function SplashIntro() {
  const [scope, animate] = useAnimate();
  const [isDone, setIsDone] = useState(false);
  const isRunningRef = useRef(false);

  useEffect(() => {
    if (isIntroSeen()) {
      window.dispatchEvent(new Event("splash-complete"));
      setIsDone(true);
      return;
    }

    if (isRunningRef.current) return;
    isRunningRef.current = true;

    // Prevent scrolling during splash
    const originalOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";

    const easeBounce = [0.34, 1.56, 0.64, 1]; // Pop curve
    const easeSmooth = [0.16, 1, 0.3, 1];  // Fluid curve

    const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    const runAnimation = async () => {
      // Ensure fonts and layout are ready
      await Promise.race([document.fonts?.ready, wait(700)]);

      const container = scope.current;
      if (!container) {
        document.documentElement.style.overflow = originalOverflow;
        setIsDone(true);
        return;
      }

      const lockup = container.querySelector("[data-lockup]") as HTMLElement | null;
      const mark = container.querySelector("[data-mark]") as HTMLElement | null;
      const markSvg = mark?.querySelector("svg") as SVGElement | null;
      const letters = container.querySelectorAll("[data-letter]") as NodeListOf<HTMLElement>;

      if (!lockup || !mark || !markSvg) {
        document.documentElement.style.overflow = originalOverflow;
        setIsDone(true);
        return;
      }

      const W = window.innerWidth;
      const H = window.innerHeight;

      // Base unscaled sizes
      const baseWidth = lockup.offsetWidth || 180;
      // Proportional scale factor (responsive down to small mobile)
      const o = Math.min(3.4, Math.max(1.2, (0.68 * W) / baseWidth));

      // 1. Physically scale elements in DOM pixels
      const markW = Math.round(27 * o);
      const markH = Math.round(23 * o);
      markSvg.style.width = `${markW}px`;
      markSvg.style.height = `${markH}px`;
      lockup.style.gap = `${Math.round(10 * o)}px`;

      letters.forEach((letter) => {
        letter.style.fontSize = `${Math.round(20 * o)}px`;
        letter.style.letterSpacing = `${-0.035 * Math.round(20 * o)}px`;
        letter.style.lineHeight = `${Math.round(20 * o)}px`;
      });

      // 2. Measure TRUE scaled width and height
      const x = lockup.offsetWidth;
      const c = lockup.offsetHeight;
      const sW = mark.offsetWidth;

      // Absolute viewport center coordinates
      const d = Math.round((W - x) / 2);
      const p = Math.round((H - c) / 2);
      // Offset to position ONLY the mark in the absolute horizontal center
      const g = Math.round((x - sW) / 2);

      // Lockup sits perfectly centered in viewport
      lockup.style.transform = `translate(${d}px, ${p}px)`;
      lockup.style.transformOrigin = "0 0";
      lockup.style.opacity = "1";

      // Mark starts centered with scale 0
      mark.style.opacity = "0";

      // ── Step 1: Mark pops into exact center ───────────────────
      await animate(
        mark as any,
        { scale: [0, 1], opacity: [0, 1], x: [g, g] },
        { duration: 0.72, ease: easeBounce as any }
      );

      await wait(180);

      // ── Step 2: Mark slides left, letters unfold ─────────────
      const markShift = animate(
        mark as any,
        { x: [g, 0] },
        { duration: 0.78, ease: easeSmooth as any }
      );

      const lettersReveal = animate(
        letters as any,
        { x: [Math.round(-30 * o), 0], opacity: [0, 1] },
        {
          duration: 0.58,
          ease: easeSmooth as any,
          delay: stagger(0.028, { startDelay: 0.1 }),
        }
      );

      await Promise.all([markShift, lettersReveal]);

      // Hold centered lockup for user appreciation
      await wait(400);

      // ── Step 3: Flight to Navbar Brand Position ──────────────
      const navBrand =
        (document.querySelector('[data-nav-brand="true"]') as HTMLElement | null) ||
        (document.querySelector('header a[href="/"]') as HTMLElement | null);

      if (navBrand) {
        const s = navBrand.getBoundingClientRect();
        const scaleTarget = s.width / x;

        // Perform smooth fluid flight directly to the exact navbar position
        await animate(
          lockup as any,
          {
            x: [d, s.left],
            y: [p, s.top],
            scale: [1, scaleTarget],
          },
          { duration: 0.84, ease: easeSmooth as any }
        );

        // Notify that the logo has docked right on target!
        window.dispatchEvent(new Event("splash-complete"));

        // Dissolve the splash canvas background, revealing the navbar and hero
        await animate(container as any, { opacity: 0 }, { duration: 0.35, ease: "easeOut" });
      } else {
        window.dispatchEvent(new Event("splash-complete"));
        await animate(container as any, { opacity: 0 }, { duration: 0.4, ease: "easeOut" });
      }

      markIntroSeen();

      document.documentElement.style.overflow = originalOverflow;
      setIsDone(true);
    };

    runAnimation().catch(() => {
      document.documentElement.style.overflow = originalOverflow;
      setIsDone(true);
    });

    return () => {
      document.documentElement.style.overflow = originalOverflow;
    };
  }, [animate, scope]);

  if (isDone) return null;

  // Split brand name into individual characters (non-breaking space between words)
  const brandChars = ["C", "o", "d", "e", "\u00A0", "C", "h", "a", "p", "t", "e", "r", "s"];

  return (
    <div
      id="cc-splash"
      ref={scope}
      suppressHydrationWarning
      className="fixed inset-0 z-[200] bg-canvas select-none cursor-default overflow-hidden"
      aria-hidden="true"
    >
      {/* Brand Lockup Unit */}
      <div
        data-lockup="true"
        className="absolute left-0 top-0 flex items-center will-change-transform"
        style={{ opacity: 0 }}
      >
        {/* Standalone Geometric Mark */}
        <span
          data-mark="true"
          className="inline-flex shrink-0 text-charcoal will-change-transform"
          style={{ opacity: 0 }}
        >
          <CodeChaptersMark width={27} height={23} />
        </span>

        {/* Brand Typography */}
        <span className="flex items-center overflow-hidden">
          {brandChars.map((char, index) => (
            <span
              key={index}
              data-letter="true"
              className="inline-block font-outfit font-semibold text-charcoal will-change-transform whitespace-pre"
              style={{ opacity: 0 }}
            >
              {char}
            </span>
          ))}
        </span>
      </div>
    </div>
  );
}
