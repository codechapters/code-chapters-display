import React from "react";
import { SplashIntro } from "@/components/SplashIntro";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Services } from "@/components/Services";
import { ResponsiveShowcase } from "@/components/ResponsiveShowcase";
import { ValueBento } from "@/components/ValueBento";
import { MaintenancePlans } from "@/components/MaintenancePlans";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-canvas min-h-screen">
      {/* Intro Splash Animation */}
      <SplashIntro />

      {/* Navigation */}
      <Navbar />

      {/* Chapter 01: Hero */}
      <Hero />

      {/* Our Clients Marquee */}
      <ClientMarquee />

      {/* Chapter 02: Selected Works */}
      <WorkShowcase />

      {/* Chapter 03: Services */}
      <Services />

      {/* The Smarter Way / Colorful Value Bento */}
      <ValueBento />

      {/* Chapter 03.5: Responsive Precision Showcase */}
      <ResponsiveShowcase />

      {/* Chapter 04: Recurring Maintenance Plans */}
      <MaintenancePlans />

      {/* Chapter 05: Direct Contact Hub */}
      <ContactSection />

      {/* High-Contrast Footer */}
      <Footer />
    </main>
  );
}
