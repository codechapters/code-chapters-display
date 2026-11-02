"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/lib/projects";

// Crisp, 1-line plain-English summaries (no walls of text, no jargon)
const PROJECT_DESCRIPTIONS: Record<string, string> = {
  "vanish-chat": "Encrypted messaging web app with ephemeral rooms",
  "work-os": "Business operations and analytics dashboard platform",
  "send-letter": "Interactive digital letter and vintage typography experience",
  "email-marketing": "High-volume campaign engine and mailing platform",
};

export function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      className="scroll-mt-[85px] px-4 sm:px-8 md:px-10 lg:px-14 xl:px-[80px] py-12 md:py-16 select-none bg-canvas font-outfit"
    >
      <div className="max-w-[1280px] mx-auto flex flex-col gap-8 sm:gap-10">
        {/* Section Header: Clean & Simple */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-black/[0.06]">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] mb-2.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="font-mono text-xs font-semibold text-charcoal/70 uppercase tracking-widest">
                // SELECTED WORK ({PROJECTS.length})
              </span>
            </div>
            <h2 className="font-outfit font-bold text-charcoal tracking-[-0.035em] text-[28px] sm:text-[36px] md:text-[42px] leading-tight">
              Featured work
            </h2>
          </div>

          {/* Simple Filter Switcher */}
          <div className="inline-flex flex-wrap items-center gap-1 p-1 rounded-full bg-black/[0.03] border border-black/[0.06] self-start sm:self-auto">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-xs font-outfit transition-all cursor-pointer select-none ${
                    isActive
                      ? "bg-white text-charcoal font-semibold shadow-xs border border-black/[0.06]"
                      : "text-charcoal/60 hover:text-charcoal font-medium"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right-Sized, Simple & Effective Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {filteredProjects.map((project) => {
            const primaryLink = project.liveUrl || project.repoUrl;

            return (
              <a
                key={project.slug}
                href={primaryLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-[20px] bg-white border border-black/[0.07] p-3.5 sm:p-4 shadow-xs hover:shadow-lg hover:border-black/15 transition-all duration-300 cursor-pointer"
              >
                {/* Visual Preview */}
                <div className="relative aspect-[16/10] w-full rounded-[14px] overflow-hidden bg-[#16171d] mb-3.5">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />

                  {/* Clean Domain Pill on Image */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-white/90 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span className="truncate max-w-[200px]">{project.displayUrl}</span>
                    </span>
                  </div>

                  {/* Subtle Hover Prompt */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-charcoal font-semibold text-xs shadow-md">
                      <span>Open live site</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-blue-600" />
                    </span>
                  </div>
                </div>

                {/* Minimal Info Row: Title, Simple 1-Line Description & Live CTA */}
                <div className="flex items-center justify-between gap-3 px-1 py-1">
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-outfit font-bold text-[18px] sm:text-[20px] text-charcoal tracking-tight group-hover:text-blue-600 transition-colors flex items-center gap-1">
                        <span>{project.title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-charcoal/40 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                      </h3>
                      <span className="text-[11px] font-medium text-charcoal/50 px-2 py-0.5 rounded-full bg-black/[0.04] hidden sm:inline-block">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-[13px] text-charcoal/60 mt-0.5 font-normal truncate max-w-[380px]">
                      {PROJECT_DESCRIPTIONS[project.slug] || project.subtitle}
                    </p>
                  </div>

                  <span className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl bg-black/[0.04] group-hover:bg-blue-600 group-hover:text-white text-charcoal text-xs font-semibold shrink-0 transition-colors">
                    <span>Live</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
