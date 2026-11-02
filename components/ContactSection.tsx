"use client";

import React, { useState, useEffect, useRef } from "react";
import { Send, CheckCircle2, Clock, Sparkles } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contactInfo: "",
    service: "Business Websites",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [promptNotice, setPromptNotice] = useState<string | null>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const servicesList = [
    "Business Websites",
    "Custom E-Commerce",
    "SaaS Platforms",
    "Mobile Apps",
    "Custom Software",
    "Maintenance Care",
  ];

  useEffect(() => {
    const handleServiceSelect = (serviceName: string) => {
      const matched =
        servicesList.find(
          (s) => s.toLowerCase() === serviceName.toLowerCase()
        ) || serviceName;

      setFormData((prev) => ({ ...prev, service: matched }));
      setPromptNotice(matched);

      // Focus the name input so the user can easily continue adding details
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 450);
    };

    const onServiceEvent = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        handleServiceSelect(customEvent.detail);
      }
    };

    window.addEventListener("select-contact-service", onServiceEvent);

    // Also check URL parameters if user navigated from another page with query param
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get("service");
      if (serviceParam) {
        handleServiceSelect(serviceParam);
      }
    }

    return () => {
      window.removeEventListener("select-contact-service", onServiceEvent);
    };
  }, []);

  const handleSendEmail = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.service} – ${formData.name || "New Client"}`
    );
    const body = encodeURIComponent(
      `Hi Code Chapters,\n\nName / Brand: ${formData.name}\nEmail / Contact: ${formData.contactInfo}\nService Needed: ${formData.service}\n\nProject Details:\n${formData.message || "(No additional notes provided)"}\n\n---\nSent from codechapters.com`
    );

    const mailtoUrl = `mailto:hello@codechapters.com?subject=${subject}&body=${body}`;

    // Open user's email client directly
    window.location.href = mailtoUrl;

    // Show clean confirmation screen
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-[85px] px-4 sm:px-8 md:px-10 lg:px-14 xl:px-[80px] pt-4 pb-14 sm:pt-6 sm:pb-20 select-none bg-canvas"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Dark Studio Enclosure Card */}
        <div className="relative overflow-hidden bg-[#0d0d10] text-white rounded-[22px] sm:rounded-[36px] p-5 sm:p-10 lg:p-16 border border-white/[0.08] shadow-2xl">
          {/* Subtle Top Radial Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(110% 60% at 50% 0%, rgba(109,158,255,0.08), transparent 70%)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start font-outfit">
            {/* Left Column: Welcoming Introduction & Studio Channel */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-8">
              <div>
                {/* Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 mb-5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                    // START A PROJECT · LET&apos;S TALK
                  </span>
                </div>

                <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.08] mb-4">
                  Start your next chapter.
                </h2>

                <p className="text-white/65 text-sm sm:text-base leading-relaxed max-w-[420px]">
                  Have a new website in mind, need monthly maintenance, or want an estimate? Send us your brief or email us directly — you talk directly with the founders building your site.
                </p>
              </div>

              {/* 24h Response SLA Pill */}
              <div className="pt-2">
                <div className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-white/60">
                  <Clock className="w-4 h-4 text-accent-blue shrink-0" />
                  <span>
                    <strong>Response SLA:</strong> We respond within 24 hours (usually within 2 hours).
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Clean, Streamlined Inquiry Card */}
            <div className="lg:col-span-7 bg-[#141418] rounded-2xl sm:rounded-3xl p-4 sm:p-7 md:p-9 border border-white/[0.08] shadow-lg">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-2xl text-white">
                    Email Client Opened!
                  </h3>
                  <p className="text-white/70 text-sm max-w-sm mx-auto leading-relaxed">
                    Your default email client has been launched with your project inquiry pre-filled to <strong>hello@codechapters.com</strong>.
                  </p>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleSendEmail()}
                      className="px-5 py-2.5 rounded-xl bg-white text-charcoal text-xs font-semibold hover:bg-neutral-200 transition-colors"
                    >
                      Re-open Email App
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          contactInfo: "",
                          service: "New Website",
                          message: "",
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
                    >
                      Edit Form
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSendEmail} className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-xl sm:text-2xl text-white mb-1">
                      Tell us about your project
                    </h3>
                    <p className="text-xs sm:text-sm text-white/50">
                      Submit this brief to launch your email directly to <strong>hello@codechapters.com</strong>.
                    </p>
                  </div>

                  {/* 1. Service Needed Chips */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-2.5">
                      What do you need?
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {servicesList.map((service) => (
                        <button
                          type="button"
                          key={service}
                          onClick={() => {
                            setFormData({ ...formData, service });
                            setPromptNotice(null);
                          }}
                          className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                            formData.service === service
                              ? "bg-white text-charcoal border-white shadow-sm font-semibold"
                              : "bg-white/[0.03] border-white/10 text-white/70 hover:bg-white/[0.07] hover:text-white"
                          }`}
                        >
                          {service}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic Helper Prompt Banner when selected from footer */}
                  {promptNotice && (
                    <div className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-accent-blue/15 border border-accent-blue/30 text-white text-xs font-medium animate-in fade-in duration-300">
                      <Sparkles className="w-4 h-4 text-accent-blue shrink-0" />
                      <span className="flex-1">
                        Selected <strong>{promptNotice}</strong>. Please add your name and contact details below so we can prepare your project scope!
                      </span>
                      <button
                        type="button"
                        onClick={() => setPromptNotice(null)}
                        className="text-white/50 hover:text-white text-xs font-bold px-1"
                        aria-label="Dismiss"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  {/* 2. Name & Contact Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        Your Name / Brand *
                      </label>
                      <input
                        ref={nameInputRef}
                        type="text"
                        required
                        placeholder="Alex Johnson or Acme Studio"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-accent-blue focus:bg-white/[0.06] focus:outline-none text-sm text-white transition-all placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.contactInfo}
                        onChange={(e) =>
                          setFormData({ ...formData, contactInfo: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-accent-blue focus:bg-white/[0.06] focus:outline-none text-sm text-white transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  {/* 3. Project Details */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-white/60 mb-1.5">
                      Project Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share a few lines about your timeline, current website link, or goals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 focus:border-accent-blue focus:bg-white/[0.06] focus:outline-none text-sm text-white transition-all placeholder:text-white/30 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-1">
                    <button
                      type="submit"
                      className="min-h-[50px] w-full py-3.5 px-3 sm:px-6 rounded-xl bg-white text-charcoal hover:bg-neutral-200 active:scale-[0.99] font-bold text-xs sm:text-base transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Send to hello@codechapters.com</span>
                      <Send className="w-4 h-4 ml-1 shrink-0" />
                    </button>
                    <p className="text-center text-[11px] text-white/40 mt-3">
                      Direct founder review · No automated marketing spam
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
