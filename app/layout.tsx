import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Code Chapters – Web Design & Maintenance Platform",
  description:
    "We craft high-performance websites and provide dedicated monthly maintenance for ambitious brands, founders, and growing businesses. Handcrafted engineering, zero bloat.",
  keywords: [
    "Web design agency",
    "Website maintenance",
    "Web developers",
    "Code Chapters",
    "Portfolio website",
    "UI/UX development",
  ],
  authors: [{ name: "Code Chapters" }],
  openGraph: {
    title: "Code Chapters – Web Design & Maintenance Platform",
    description:
      "Handcrafted high-performance websites and monthly maintenance for ambitious brands.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var p = new URLSearchParams(window.location.search);
                var replay = p.get('replay') === '1' || p.get('intro') === 'replay' || p.get('intro') === 'true';
                if (!replay && localStorage.getItem('codechapters_intro_seen') === 'true') {
                  document.documentElement.classList.add('intro-seen');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-inter bg-canvas text-charcoal min-h-screen selection:bg-accent-blue selection:text-brand-dark antialiased">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
