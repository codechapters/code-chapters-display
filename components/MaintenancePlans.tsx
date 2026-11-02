"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";

export function MaintenancePlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const plans = [
    {
      name: "Essential Care",
      badge: "Stability & Security",
      monthlyPrice: 99,
      annualPrice: 79,
      desc: "For portfolio and business websites that need rock-solid uptime, security patches, and zero maintenance headaches.",
      features: [
        "24/7 Uptime & health monitoring",
        "Weekly cloud backups (encrypted)",
        "Security & dependency updates",
        "2 hours of monthly dev / content updates",
        "Direct email & studio support",
        "SSL & domain renewal monitoring",
      ],
      popular: false,
      ctaText: "Get Started",
    },
    {
      name: "Growth Care",
      badge: "Most Popular",
      monthlyPrice: 249,
      annualPrice: 199,
      desc: "For active businesses and e-commerce stores requiring ongoing enhancements, speed tuning, and fast turnaround.",
      features: [
        "Everything in Essential Care",
        "6 hours of dev & design updates/mo",
        "Core Web Vitals & 95+ speed tuning",
        "Technical SEO & broken link fixes",
        "Guaranteed 12-hour response SLA",
        "Monthly performance & analytics report",
        "Staging preview for every change",
      ],
      popular: true,
      ctaText: "Choose Growth",
    },
    {
      name: "Dedicated Partner",
      badge: "Full Retainer",
      monthlyPrice: 599,
      annualPrice: 499,
      desc: "An on-demand senior engineering team embedded in your business for continuous shipping and custom features.",
      features: [
        "Everything in Growth Care",
        "16 hours of design & code tasks/mo",
        "New feature building & A/B testing",
        "Private direct channel with founders",
        "Same-day emergency turnaround",
        "Bi-weekly strategy & planning call",
        "Database & API integrations",
      ],
      popular: false,
      ctaText: "Request Dedicated",
    },
  ];

  return (
    <section
      id="maintenance"
      className="scroll-mt-[85px] pt-16 pb-20 sm:pt-20 sm:pb-24 md:pt-24 md:pb-28 px-4 sm:px-8 md:px-12 bg-white/60 border-t border-black/[0.06] select-none"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/[0.04] border border-black/[0.06] mb-3">
            <ShieldCheck className="w-4 h-4 text-accent-blue" />
            <span className="font-mono text-xs font-semibold text-charcoal/70 uppercase tracking-widest">
              // ONGOING CARE · MAINTENANCE PLANS
            </span>
          </div>
          <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl text-charcoal tracking-tight mb-4">
            Maintenance &amp; Plans.
          </h2>
          <p className="text-charcoal/70 text-base sm:text-lg mb-8 leading-relaxed">
            Dedicated monthly care plans to keep your platform secure, lightning-fast, and always up-to-date. Cancel or pause anytime.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="inline-flex items-center p-1 sm:p-1.5 rounded-full bg-black/[0.05] border border-black/[0.06] shadow-inner max-w-full">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all font-outfit ${
                billingCycle === "monthly"
                  ? "bg-white text-charcoal shadow-sm"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all font-outfit ${
                billingCycle === "annual"
                  ? "bg-white text-charcoal shadow-sm"
                  : "text-charcoal/60 hover:text-charcoal"
              }`}
            >
              <span>Annual Billing</span>
              <span className="bg-[#bceb18] text-[#1c1c1e] text-[9.5px] sm:text-[10px] font-bold px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-tight">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch font-outfit">
          {plans.map((plan) => {
            const price =
              billingCycle === "annual" ? plan.annualPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col justify-between p-5 sm:p-8 rounded-3xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-[#111113] text-white shadow-2xl md:scale-[1.03] border-2 border-accent-blue/50"
                    : "bg-white text-charcoal border border-black/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:border-black/20 hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)]"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 sm:px-4 py-1 rounded-full bg-accent-blue text-brand-dark text-xs font-bold tracking-tight shadow-md flex items-center gap-1.5 whitespace-nowrap">
                    <Sparkles className="w-3.5 h-3.5 fill-current" />
                    <span>Most Popular<span className="hidden sm:inline"> for Growing Brands</span></span>
                  </div>
                )}

                <div>
                  {/* Top Badge & Plan Name */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md ${
                          plan.popular
                            ? "bg-white/10 text-white/90"
                            : "bg-black/[0.05] text-charcoal/70"
                        }`}
                      >
                        {plan.badge}
                      </span>
                    </div>

                    <h3 className="font-bold text-2xl mb-2 tracking-tight">
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm leading-relaxed ${
                        plan.popular ? "text-white/70" : "text-charcoal/70"
                      }`}
                    >
                      {plan.desc}
                    </p>
                  </div>

                  {/* Price Block */}
                  <div className="py-5 border-y border-current/10 my-4">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold opacity-70">$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold tracking-tight tabular-nums">
                        {price}
                      </span>
                      <span className="text-sm opacity-60 ml-1">/ month</span>
                    </div>
                    <p
                      className={`text-xs mt-1.5 font-medium ${
                        plan.popular ? "text-accent-blue" : "text-charcoal/50"
                      }`}
                    >
                      {billingCycle === "annual"
                        ? "Billed annually · Cancel or pause anytime"
                        : "Billed monthly · No lock-in contracts"}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="pt-2 pb-6">
                    <span
                      className={`block text-xs uppercase font-bold tracking-wider mb-4 ${
                        plan.popular ? "text-white/50" : "text-charcoal/50"
                      }`}
                    >
                      What&apos;s Included
                    </span>
                    <ul className="space-y-3 font-sans">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              plan.popular ? "text-accent-blue" : "text-emerald-600"
                            }`}
                          />
                          <span
                            className={`text-xs sm:text-sm leading-snug ${
                              plan.popular ? "text-white/90" : "text-charcoal/80"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="pt-4">
                  <Link
                    href="#contact"
                    className={`min-h-[48px] flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm ${
                      plan.popular
                        ? "bg-accent-blue text-brand-dark hover:bg-accent-blue/90 hover:scale-[1.01] active:scale-[0.99]"
                        : "bg-brand-dark text-white hover:bg-black/85 hover:scale-[1.01] active:scale-[0.99]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Build Footnote Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              <span className="text-xs font-bold uppercase tracking-wider text-charcoal/60 font-outfit">
                Need a new website build first?
              </span>
            </div>
            <p className="text-sm sm:text-base text-charcoal font-outfit font-medium">
              Complete custom websites start from <strong>$399</strong> (one-time) including 30 days of complimentary care.
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-black/[0.05] hover:bg-black/10 text-charcoal font-semibold text-xs sm:text-sm font-outfit transition-colors"
          >
            <span>Request Build Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
