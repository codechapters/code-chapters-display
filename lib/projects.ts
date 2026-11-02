export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Web Apps" | "SaaS & Tools" | "Creative Web";
  client: string;
  year: string;
  services: string[];
  liveUrl?: string;
  repoUrl?: string;
  displayUrl: string;
  coverImage: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "vanish-chat",
    title: "VanishChat",
    subtitle: "Self-destructing, end-to-end encrypted messaging with ephemeral rooms. Messages that vanish; privacy that doesn't.",
    category: "Web Apps",
    client: "Live Web App",
    year: "2024",
    services: ["Full-Stack Web", "E2E Encryption", "WebSockets", "Tailwind CSS"],
    liveUrl: "https://disappear-chat.vercel.app/",
    displayUrl: "disappear-chat.vercel.app",
    coverImage: "/projects/vanish-chat.png",
  },
  {
    slug: "work-os",
    title: "WorkOS",
    subtitle: "Enterprise project management, team productivity tracking, and business analytics platform with intuitive dashboards.",
    category: "SaaS & Tools",
    client: "SaaS Platform",
    year: "2024",
    services: ["React", "TypeScript", "Dashboard UX", "Analytics"],
    liveUrl: "https://work-os-eosin-delta.vercel.app/",
    displayUrl: "work-os-eosin-delta.vercel.app",
    coverImage: "/projects/work-os.png",
  },
  {
    slug: "send-letter",
    title: "Send Letter",
    subtitle: "Interactive digital wax-sealed letters for personal moments with vintage typography, wax unsealing animation, and no account required.",
    category: "Creative Web",
    client: "Web Experience",
    year: "2024",
    services: ["Interactive Frontend", "Supabase", "Motion UI", "Typography"],
    liveUrl: "https://send-letter.vercel.app",
    repoUrl: "https://github.com/Nithin1614/send-letter",
    displayUrl: "send-letter.vercel.app",
    coverImage: "/projects/send-letter.png",
  },
  {
    slug: "email-marketing",
    title: "Mass Mailing Platform",
    subtitle: "High-throughput email campaign and mass mailing engine with CSV contact list segmentation, automated delivery, and status tracking.",
    category: "SaaS & Tools",
    client: "Open Source Tool",
    year: "2024",
    services: ["Web Platform", "TypeScript", "Docker", "Mailing Infrastructure"],
    liveUrl: "https://email-marketing-iota-seven.vercel.app",
    repoUrl: "https://github.com/Nithin1614/email-marketing",
    displayUrl: "email-marketing-iota-seven.vercel.app",
    coverImage: "/projects/email-marketing.png",
  },
];

export const CATEGORIES = ["All", "Web Apps", "SaaS & Tools", "Creative Web"] as const;
