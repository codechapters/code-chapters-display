"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CodeChaptersMark } from "./BrandLogo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerServices = [
    "Business Websites",
    "Custom E-Commerce",
    "SaaS Platforms",
    "Mobile Apps",
    "Custom Software",
  ];

  const handleSelectService = (service: string) => {
    // If on homepage, dispatch event and smooth scroll
    window.dispatchEvent(
      new CustomEvent("select-contact-service", { detail: service })
    );

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#contact?service=${encodeURIComponent(service)}`;
    }
  };

  return (
    <footer className="relative bg-[#09090b] text-white pt-16 pb-12 px-4 sm:px-8 md:px-12 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid: 4 Clean Tech-Giant Style Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10 font-outfit">
          {/* Col 1: Brand Info & Status (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <CodeChaptersMark width={24} height={20} className="text-white shrink-0" />
              <span className="font-semibold text-xl tracking-tight text-white">
                Code Chapters
              </span>
            </div>

            <p className="text-white/60 text-sm max-w-sm leading-relaxed">
              Engineering-led web design and dedicated maintenance platform. We design, build, and support high-converting digital platforms for modern businesses.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-white/70">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="font-medium text-white/80">
                All systems operational · Accepting new clients
              </span>
            </div>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="uppercase tracking-wider text-xs font-semibold text-white/40 block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/#work" className="hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-white transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/#maintenance" className="hover:text-white transition-colors">
                  Maintenance
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="uppercase tracking-wider text-xs font-semibold text-white/40 block">
              Services
            </span>
            <ul className="space-y-2.5 text-sm text-white/70">
              {footerServices.map((service) => (
                <li key={service}>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleSelectService(service);
                    }}
                    className="hover:text-white transition-colors cursor-pointer block"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Direct Contact (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="uppercase tracking-wider text-xs font-semibold text-white/40 block">
              Direct Contact
            </span>
            <div className="space-y-2 text-sm text-white/70">
              <a
                href="mailto:hello@codechapters.com"
                className="font-mono text-xs text-white/80 hover:text-white transition-colors block break-all"
              >
                hello@codechapters.com
              </a>
              <p className="text-xs text-white/50">
                Worldwide remote delivery. 24h SLA.
              </p>
              <div className="pt-2">
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-blue hover:underline"
                >
                  <span>Start a project</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Tech-Giant Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-white/40 font-mono">
          <p>© {currentYear} Code Chapters. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Built with precision &amp; modern engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
