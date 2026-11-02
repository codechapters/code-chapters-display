"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  title: string;
  description: string;
  categories: string[];
}

export function Services() {
  const [activeService, setActiveService] = useState(0);

  const services: ServiceItem[] = [
    {
      id: "service-panel-websites",
      num: "01",
      title: "Business websites & landing pages",
      description:
        "Fast, responsive custom websites — from high-converting landing pages to full multi-page business platforms with dashboards and custom features.",
      categories: [
        "Landing pages",
        "Business websites",
        "Portfolio sites",
        "Admin panels",
        "SEO setup",
        "Responsive design",
      ],
    },
    {
      id: "service-panel-ecommerce",
      num: "02",
      title: "Custom e-commerce",
      description:
        "Full-featured online stores custom-built for your business — fully owned, zero platform fees, with a complete admin panel for products, orders, and inventory.",
      categories: [
        "Custom storefronts",
        "Admin panel",
        "Cart & checkout",
        "Payment integration",
        "Inventory management",
      ],
    },
    {
      id: "service-panel-saas",
      num: "03",
      title: "SaaS products",
      description:
        "Scalable SaaS platforms with multi-tenancy, subscriptions, dashboards, and the infrastructure to grow with your users.",
      categories: [
        "Multi-tenant architecture",
        "Subscription billing",
        "Dashboards",
        "API integrations",
        "Role management",
      ],
    },
    {
      id: "service-panel-mobile",
      num: "04",
      title: "Mobile apps",
      description:
        "Cross-platform mobile apps built with React Native — one codebase that ships to both iOS and Android with native-quality performance.",
      categories: [
        "React Native",
        "iOS & Android",
        "Push notifications",
        "Offline support",
        "App Store deployment",
      ],
    },
    {
      id: "service-panel-software",
      num: "05",
      title: "Custom software",
      description:
        "Custom tools and web applications built specifically for your business — automating daily tasks, managing operations, and connecting your systems to save you time.",
      categories: [
        "Internal tools",
        "Automation",
        "Custom backends",
        "API development",
        "Third-party integrations",
      ],
    },
  ];

  // Helper to prefill contact form when user clicks an inquiry link
  const handleServiceInquire = (serviceTitle: string) => {
    let matchedName = "Business Websites";
    if (serviceTitle.toLowerCase().includes("commerce")) matchedName = "Custom E-Commerce";
    else if (serviceTitle.toLowerCase().includes("saas")) matchedName = "SaaS Platforms";
    else if (serviceTitle.toLowerCase().includes("mobile")) matchedName = "Mobile Apps";
    else if (serviceTitle.toLowerCase().includes("software")) matchedName = "Custom Software";

    window.dispatchEvent(
      new CustomEvent("select-contact-service", { detail: matchedName })
    );

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="scroll-mt-[85px] px-4 sm:px-8 md:px-10 lg:px-14 xl:px-[80px] pt-4 pb-12 sm:pt-6 sm:pb-16 select-none bg-canvas"
    >
      {/* Dark Studio Rounded Container Card */}
      <div className="relative overflow-hidden bg-[#0a0a0c] text-white rounded-[24px] sm:rounded-[30px] px-4 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-10 md:py-12 border border-white/[0.08] shadow-2xl max-w-[1240px] mx-auto font-outfit">
        
        {/* Section Header */}
        <div className="relative z-10 mb-7 sm:mb-9 pb-5 border-b border-white/10">
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 mb-3">
            <span className="w-2 h-2 rounded-full bg-accent-blue" />
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-white/80">
              Scope of Capabilities
            </span>
          </div>

          <h2 className="font-outfit font-extrabold text-white tracking-[-0.04em] leading-none text-[32px] sm:text-[40px] md:text-[46px]">
            Services.<span className="text-white/30 text-[0.42em] ml-2 font-normal font-mono">(05)</span>
          </h2>
        </div>

        {/* Studio Master-Detail Index View */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          
          {/* Left Column: Quiet Editorial Typographic Index (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-1.5">
            {services.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveService(idx)}
                onMouseEnter={() => setActiveService(idx)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                  activeService === idx
                    ? "bg-white/[0.06] border border-white/15 text-white shadow-md"
                    : "border border-transparent text-white/50 hover:text-white hover:bg-white/[0.03]"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span
                    className={`font-mono text-xs tabular-nums tracking-wider ${
                      activeService === idx ? "text-accent-blue font-bold" : "text-white/35"
                    }`}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`text-[15px] sm:text-[16px] tracking-[-0.02em] leading-snug transition-colors ${
                      activeService === idx ? "text-white font-semibold" : "text-white/65 group-hover:text-white/90"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                <ArrowRight
                  className={`w-4 h-4 transition-all duration-200 shrink-0 ${
                    activeService === idx
                      ? "text-accent-blue translate-x-1 opacity-100"
                      : "opacity-0 -translate-x-1 group-hover:opacity-40 group-hover:translate-x-0"
                  }`}
                />
              </button>
            ))}

            <div className="pt-2 text-[11px] text-white/35 font-mono px-2 hidden lg:block tracking-tight">
              Hover or click any service to inspect full deliverables.
            </div>
          </div>

          {/* Right Column: Focus Preview Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#101013] border border-white/[0.08] rounded-2xl p-4 sm:p-7 md:p-8 flex flex-col justify-between shadow-xl min-h-[320px]">
            <div>
              {/* Card Top Label */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <span className="font-mono text-[11px] text-accent-blue uppercase tracking-[0.14em] font-bold">
                  INDEX {services[activeService].num} / 05
                </span>
                <span className="text-[11px] text-white/35 font-mono uppercase tracking-[0.12em]">
                  Full Scope
                </span>
              </div>

              {/* Title with authoritative typographic balance */}
              <h3 className="font-bold text-[22px] sm:text-[25px] md:text-[28px] text-white tracking-[-0.03em] leading-snug mb-2.5">
                {services[activeService].title}
              </h3>

              {/* Refined Description */}
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed mb-5 max-w-xl font-normal font-inter tracking-[-0.01em]">
                {services[activeService].description}
              </p>

              {/* Sub-services / Scope Tactile Chips */}
              <div className="space-y-2.5 mb-6">
                <span className="block text-[11px] uppercase tracking-[0.14em] font-bold text-white/45 font-mono">
                  Core Deliverables &amp; Scope
                </span>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].categories.map((sub) => (
                    <span
                      key={sub}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs sm:text-[13px] font-medium text-white/90 font-outfit select-none hover:bg-white/[0.09] hover:border-white/20 transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-blue shrink-0" />
                      <span>{sub}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Action */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <span className="text-xs text-white/40 font-mono tracking-tight">
                Zero platform lock-in · 100% Code Ownership
              </span>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleServiceInquire(services[activeService].title);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-charcoal font-semibold text-xs sm:text-sm hover:bg-neutral-200 transition-all active:scale-[0.98] shadow-sm cursor-pointer"
              >
                <span>Inquire about this</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
