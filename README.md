# Code Chapters — Web Design & Maintenance Platform

A modern, high-conversion agency portfolio website engineered for **Code Chapters**, featuring boutique aesthetic, editorial typography, and high-performance micro-interactions.

---

## ⚡ Quick Start

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Key Features & Design System

- **Warm Canvas Aesthetic**: `#f4f4f2` paper background paired with charcoal typography and rotated highlight badges (`#6d9eff` sky blue, `#b48dff` lavender).
- **Subtle Film Grain**: Lightweight SVG fractal noise overlay for a tactile, luxury editorial feel.
- **Dynamic Portfolio Showcase**: Filterable project grid (`All`, `Web Apps`, `SaaS & Tools`, `Creative Web`) with live preview links.
- **Scope of Capabilities**: Interactive master-detail index covering custom storefronts, SaaS platforms, mobile apps, and custom software.
- **Transparent Maintenance Tiers**: Essential Care, Growth Care, and Dedicated Retainer packages to drive recurring monthly revenue.
- **Frictionless Direct Contact**: Direct founder communication, response time guarantee, and interactive inquiry form.

---

## 📁 How to Update Your Projects

All portfolio items are defined in a single file:  
`lib/projects.ts`

To add, edit, or remove your websites:
1. Open `lib/projects.ts`.
2. Edit or add your project's `title`, `client`, `subtitle`, `coverImage`, `displayUrl`, and `liveUrl`.
3. Save the file — the showcase updates automatically.

---

## 🌐 Deploying to Vercel

The recommended way to host Next.js is **Vercel** (includes automatic SSL certificates, global CDN, and automatic continuous deployment).

### Step 1: Push to GitHub
```bash
git add .
git commit -m "feat: launch code chapters production platform"
git branch -M main
git remote add origin https://github.com/codechapters/code-chapters-display.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
2. Import your GitHub repository (`code-chapters-display`) and click **Deploy**.
3. Vercel will build and launch your site in ~60 seconds.
