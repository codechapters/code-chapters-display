"use client";

import React, { useEffect, useRef, useState } from "react";

/**
 * <MacBookIntro /> — Code Chapters
 * A true-3D space-grey MacBook (keyboard + trackpad visible) that opens on visit
 * and auto-scrolls a mini version of your site.
 */

const KEY = "cc-macbook-seen";
const SECTION_SECONDS = 3.6;

const SLIDES = [
  {
    id: "hero",
    render: () => (
      <div className="s s-hero">
        <p className="muted">You don&apos;t need just a website — you need a chapter.</p>
        <h1>We deliver the <mark>right</mark> website for your brand.</h1>
        <p className="muted">Websites, maintenance &amp; care plans. Fast, clean, and built to scale.</p>
        <div className="row">
          <span className="btn dark">See Our Work</span>
          <span className="btn light">Start a Project</span>
          <span className="rating"><b>5.0</b>/5 · 8 reviews<br /><i>Trusted by 14 brands</i></span>
        </div>
      </div>
    ),
  },
  {
    id: "services",
    render: () => (
      <div className="s">
        <h2>What we build</h2>
        <div className="grid4">
          {[
            ["Portfolios", "Personal sites that get you hired.", "p"],
            ["Business dashboards", "Your numbers, live and readable.", "d"],
            ["E-commerce", "Stores that load fast and sell.", "e"],
            ["Custom web apps", "Anything else you need online.", "a"],
          ].map(([t, d, k]) => (
            <div className="tile" key={t}>
              <span className={`ico ico-${k}`} />
              <b>{t}</b>
              <small>{d}</small>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "work",
    render: () => (
      <div className="s">
        <h2>Recent chapters</h2>
        <div className="grid3">
          {["Studio portfolio", "Sales dashboard", "Online store"].map((n, i) => (
            <div className="proj" key={n}>
              <div className={`shot shot-${i}`}>
                <i /><i /><i />
              </div>
              <b>{n}</b>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "stats",
    render: () => (
      <div className="s s-stats">
        <h2>Trusted by builders and brands</h2>
        <div className="grid3">
          <div><strong>14</strong><small>brands trust us</small></div>
          <div><strong>5.0</strong><small>average rating</small></div>
          <div><strong>8</strong><small>client reviews</small></div>
        </div>
      </div>
    ),
  },
  {
    id: "care",
    render: () => (
      <div className="s">
        <h2>Care plans after launch</h2>
        <div className="grid3">
          {[["Essential", "Updates, backups, uptime checks"], ["Growth", "Plus monthly changes and reports"], ["Priority", "Plus fast-response support"]].map(([t, d], i) => (
            <div className={`tile ${i === 1 ? "hl" : ""}`} key={t}>
              <b>{t}</b>
              <small>{d}</small>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cta",
    render: () => (
      <div className="s s-cta">
        <h2>Ready to start your chapter?</h2>
        <p className="muted">Tell us what you need. We&apos;ll reply with a plan and a price.</p>
        <span className="btn blue">Contact Us</span>
      </div>
    ),
  },
];

const N = SLIDES.length + 1; // +1 clone of first slide for a seamless loop

function keyframes() {
  const step = 100 / (N - 1);
  const hold = step * 0.78;
  let k = "";
  for (let i = 0; i < N - 1; i++) {
    const a = i * step;
    k += `${a.toFixed(3)}%,${(a + hold).toFixed(3)}%{transform:translateY(${(-(100 / N) * i).toFixed(4)}%)}`;
  }
  k += `100%{transform:translateY(${(-(100 / N) * (N - 1)).toFixed(4)}%)}`;
  return `@keyframes cc-scroll{${k}}`;
}

const CSS = `
${keyframes()}
.cc-root{--blue:#5b8dff;--ink:#16161a;--paper:#f6f6f7;font-family:var(--font-outfit),Outfit,system-ui,sans-serif;color:var(--ink);width:100%}
.cc-root.full{position:fixed;inset:0;z-index:9999;display:grid;place-items:center;overflow:hidden;
  background:radial-gradient(70% 60% at 50% 45%,#eef2ff 0%,#f6f6f7 55%,#e4e6ec 100%);transition:opacity .7s ease,visibility .7s}
.cc-root.out{opacity:0;visibility:hidden}
.cc-wrap{width:100%;aspect-ratio:100/68;container-type:inline-size;perspective:2600px;perspective-origin:50% 35%;position:relative}

/* ---------- finishes ---------- */
.fin-space{--top-a:#43444a;--top-b:#303136;--edge:linear-gradient(90deg,#2a2b30,#63656c 50%,#2a2b30);--side:linear-gradient(#5d5f66,#2c2d32);
  --bot:#1b1c20;--side-a:#6a6c74;--side-b:#2a2b30;--hi:#8d8f97;--edge-c:#4d4f56;--back-a:#4a4c53;--back-b:#2b2c31;--kbwell:#060608;--key-a:#26272c;--key-b:#131417;--tp-a:#4b4d54;--tp-b:#393b41;--stroke:#7a7c84;--logo:#cfd2da}
.fin-silver{--top-a:#e3e5ea;--top-b:#c6c9d0;--edge:linear-gradient(90deg,#aeb1b9,#f3f4f7 50%,#aeb1b9);--side:linear-gradient(#f5f6f8,#b4b7bf);
  --bot:#a9acb4;--side-a:#f6f7f9;--side-b:#b1b4bc;--hi:#ffffff;--edge-c:#d4d7dd;--back-a:#eef0f3;--back-b:#c3c6ce;--kbwell:#101013;--key-a:#2b2c31;--key-b:#16171a;--tp-a:#d6d9df;--tp-b:#c1c4cb;--stroke:#ffffffb0;--logo:#8b8f99}

/* ---------- 3D rig (exact original perspective & proportions) ---------- */
.cc-root .rig{--W:72cqw;--D:47cqw;--T:1.25cqw;--Hl:45cqw;--LT:.8cqw;
  position:absolute;left:50%;top:74%;width:0;height:0;transform-style:preserve-3d;
  transform:rotateX(-30deg) rotateY(-6deg) scale(.86)}
.cc-root .f{position:absolute;width:var(--w);height:var(--h);left:calc(var(--w)/-2);top:calc(var(--h)/-2);backface-visibility:hidden;box-sizing:border-box}

.cc-root .gshadow{--w:calc(var(--W)*1.3);--h:calc(var(--D)*1.45);transform:rotateX(90deg) translateZ(calc(var(--T)/-2 - .2cqw));
  background:radial-gradient(closest-side,rgba(25,35,80,.4),rgba(25,35,80,.14) 60%,transparent);filter:blur(1.2cqw)}

/* slim base: top plate + stacked rounded layers = a smooth extruded wall (corners follow the curve) */
.cc-root .b-top{--w:var(--W);--h:var(--D);transform:rotateX(90deg) translateZ(calc(var(--T)/2));
  background:linear-gradient(180deg,var(--top-a),var(--top-b));border-radius:.8cqw .8cqw 1.8cqw 1.8cqw;
  box-shadow:inset 0 0 0 .1cqw var(--stroke),inset 0 -.5cqw 1cqw #0004}
.cc-root .b-top::after{content:"";position:absolute;left:50%;bottom:0;width:9cqw;height:.45cqw;transform:translateX(-50%);
  background:linear-gradient(#050507,#1a1b1f);border-radius:.7cqw .7cqw 0 0}
.cc-root .b-bot{--w:var(--W);--h:var(--D);transform:rotateX(-90deg) translateZ(calc(var(--T)/2));background:var(--bot);border-radius:.8cqw .8cqw 1.8cqw 1.8cqw}
.cc-root .layer{--w:var(--W);--h:var(--D);border-radius:.8cqw .8cqw 1.8cqw 1.8cqw;
  background:var(--side-b);background:color-mix(in srgb,var(--side-a) calc(var(--p)*1%),var(--side-b))}
.cc-root .layer.hi{background:var(--hi)}
.cc-root .b-right{--w:calc(var(--D) - 4.4cqw);--h:var(--T);transform:rotateY(90deg) translateZ(calc(var(--W)/2));
  background:
   radial-gradient(circle,#0a0a0d 0 .16cqw,transparent .18cqw) 80% 50%/1.1cqw 100% no-repeat,
   linear-gradient(#0a0a0d,#0a0a0d) 22% 50%/3.6% 36% no-repeat,
   linear-gradient(#0a0a0d,#0a0a0d) 31% 50%/3.6% 36% no-repeat,
   linear-gradient(#0a0a0d,#0a0a0d) 40% 50%/3.6% 36% no-repeat,
   linear-gradient(var(--side-a),var(--side-b))}

/* deck details */
.cc-root .deck-hinge{position:absolute;left:3%;right:3%;top:0;height:2.6%;background:linear-gradient(#08080a,#2a2b30);border-radius:0 0 .5cqw .5cqw}
.cc-root .grille{position:absolute;top:4.5%;height:53%;width:3.2%;background:radial-gradient(circle,#050507 0 .13cqw,transparent .17cqw) 0 0/.5cqw .5cqw;opacity:.8}
.cc-root .grille.l{left:1.8%}.cc-root .grille.r{right:1.8%}
.cc-root .kb{position:absolute;left:6.2%;right:6.2%;top:6%;height:48%;display:flex;flex-direction:column;gap:.42cqw;padding:.55cqw;
  background:var(--kbwell);border-radius:.8cqw;box-shadow:inset 0 .2cqw .5cqw #000,0 0 0 .1cqw var(--stroke)}
.cc-root .kr{display:flex;gap:.42cqw;flex:1}.cc-root .kr.fn{flex:.58}
.cc-root .k{background:linear-gradient(var(--key-a),var(--key-b));border-radius:.4cqw;box-shadow:0 .1cqw 0 #000,inset 0 .08cqw 0 #ffffff22;position:relative}
.cc-root .k.t::after{content:"";position:absolute;inset:0;margin:auto;width:28%;height:2px;background:#9ca0aa55;border-radius:2px}
.cc-root .k.tid::after{content:"";position:absolute;inset:0;margin:auto;width:46%;aspect-ratio:1;border:1px solid #aab0bd66;border-radius:50%;height:auto}
.cc-root .arr{flex:1;display:flex;flex-direction:column;gap:.12cqw}
.cc-root .tp{position:absolute;left:29%;width:42%;top:61%;height:33%;border-radius:1cqw;
  background:linear-gradient(160deg,var(--tp-a),var(--tp-b));box-shadow:inset 0 0 0 .1cqw #ffffff30,inset 0 -.3cqw .6cqw #0003,0 .08cqw .16cqw #0005}
.cc-root .deck-glow{position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;
  background:radial-gradient(60% 45% at 50% 0%,rgba(130,170,255,.45),transparent 70%)}

/* hinge + lid (ultra-thin) */
.cc-root .hinge{position:absolute;left:0;top:0;width:0;height:0;transform-style:preserve-3d;transform:translate3d(0,calc(var(--T)/-2),calc(var(--D)/-2 + .3cqw))}
.cc-root .lid{position:absolute;left:calc(var(--W)/-2);top:calc(var(--Hl)*-1);width:var(--W);height:var(--Hl);transform-origin:50% 100%;
  transform-style:preserve-3d;transform:rotateX(-89deg)}
.cc-root .cc-face{position:absolute;inset:0;backface-visibility:hidden;border-radius:1.5cqw 1.5cqw .4cqw .4cqw}
.cc-root .cc-front{background:linear-gradient(160deg,#17181b,#050507);padding:.85cqw .75cqw .95cqw;box-sizing:border-box;
  box-shadow:inset 0 0 0 .12cqw var(--stroke),inset 0 0 0 .22cqw #000}
.cc-root .cc-front::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;box-shadow:inset 0 .1cqw .2cqw #ffffff22}
.cc-root .cc-back{transform:translateZ(calc(var(--LT)*-1)) rotateY(180deg);display:grid;place-items:center;
  background:linear-gradient(135deg,var(--back-a) 0%,var(--back-b) 50%,var(--back-a) 100%);box-shadow:inset 0 0 0 .1cqw var(--stroke)}
.cc-root .cc-back .logo{width:6cqw;color:var(--logo);opacity:.8}
.cc-root .ll{position:absolute;inset:0;border-radius:1.5cqw 1.5cqw .4cqw .4cqw;background:var(--edge-c)}
.cc-root .ll.hi{background:var(--hi)}

/* screen: rounded corners, notch inside the menu bar */
.cc-root .cc-screen{position:relative;height:100%;border-radius:.95cqw;overflow:hidden;background:#000;container-type:inline-size}
.cc-root .cc-notch{position:absolute;top:0;left:50%;transform:translateX(-50%);width:12cqw;height:2.5cqw;background:#000;
  border-radius:0 0 1.2cqw 1.2cqw;z-index:7;display:flex;align-items:center;justify-content:center;gap:1.6cqw}
.cc-root .cc-notch i{width:.8cqw;height:.8cqw;border-radius:50%;background:radial-gradient(circle,#27354f 30%,#0a0e18 70%)}
.cc-root .cc-notch i.on{animation:cc-cam1 1s 2.9s both}
@keyframes cc-cam1{to{background:radial-gradient(circle,#4ade80 20%,#0a0e18 75%);box-shadow:0 0 .8cqw #4ade8088}}
.cc-root .cc-wall{position:absolute;inset:0;background:radial-gradient(90% 90% at 20% 0%,#9db9ff,#5b8dff 40%,#2f3fb0 100%);opacity:0}
.cc-root .cc-site{position:absolute;inset:0;background:var(--paper);opacity:0;font-size:1.6cqw;overflow:hidden}
@keyframes cc-fade{to{opacity:1}}
.cc-root .cc-glass{position:absolute;inset:0;pointer-events:none;z-index:6;
  background:linear-gradient(115deg,rgba(255,255,255,.16) 0%,rgba(255,255,255,0) 36%,rgba(255,255,255,0) 64%,rgba(255,255,255,.07) 100%)}
.cc-root .mbar{height:1.5em;display:flex;align-items:center;justify-content:space-between;padding:0 1.4em;background:rgba(255,255,255,.72);
  backdrop-filter:blur(8px);border-bottom:1px solid #0001}
.cc-root .mbar>span{display:flex;align-items:center;gap:1.3em;font-size:.62em;font-weight:500;color:#222}
.cc-root .mbar b{font-weight:700}
.cc-root .batt{width:1.9em;height:.8em;border:1px solid #333;border-radius:.25em;position:relative}
.cc-root .batt::before{content:"";position:absolute;inset:1px;width:70%;background:#333;border-radius:.1em}

/* menubar + nav */
.cc-root .nav{height:4.4em;display:flex;align-items:center;justify-content:space-between;padding:0 2.2em;border-bottom:1px solid #0001;background:var(--paper);position:relative;z-index:2}
.cc-root .nav .brand{font-weight:700;font-size:1.2em;display:flex;align-items:center;gap:.5em}
.cc-root .nav .brand svg{width:1.4em}
.cc-root .nav ul{display:flex;gap:1.6em;list-style:none;margin:0;padding:0;font-size:.85em;color:#444;align-items:center}
.cc-root .nav .btn{padding:.55em 1.1em;font-size:.85em}
.cc-root .view{height:calc(100% - 5.9em);overflow:hidden}
.cc-root .track{will-change:transform}

/* content */
.cc-root .s{height:100%;padding:3.2em 2.6em;display:flex;flex-direction:column;justify-content:center;gap:1.1em;box-sizing:border-box}
.cc-root .s h1{font-size:3.6em;line-height:1;letter-spacing:-.035em;margin:0;font-weight:800;max-width:15em}
.cc-root .s h1 mark{background:#6f9bff;color:inherit;padding:0 .12em;border-radius:.12em;transform:rotate(-1deg);display:inline-block}
.cc-root .s h2{font-size:2.3em;letter-spacing:-.03em;margin:0 0 .3em;font-weight:700}
.cc-root .s p{margin:0}.cc-root .muted{color:#6b6e77;font-size:1.05em;line-height:1.45}
.cc-root .row{display:flex;align-items:center;gap:.9em;margin-top:.5em}
.cc-root .btn{display:inline-block;padding:.85em 1.5em;border-radius:.8em;font-weight:600;font-size:.95em}
.cc-root .btn.dark{background:#0b0b0c;color:#fff}.cc-root .btn.light{background:#fff;box-shadow:0 0 0 1px #0001}
.cc-root .btn.blue{background:var(--blue);color:#fff;align-self:flex-start}
.cc-root .rating{font-size:.85em;color:#555;line-height:1.5;margin-left:.8em;padding-left:1.2em;border-left:1px solid #0002}
.cc-root .rating b{color:#111;font-size:1.1em}.cc-root .rating i{font-style:normal;color:#888}
.cc-root .grid4{display:grid;grid-template-columns:repeat(4,1fr);gap:1em}.cc-root .grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1em}
.cc-root .tile{background:#fff;border-radius:1.1em;padding:1.3em;display:flex;flex-direction:column;gap:.5em;box-shadow:0 0 0 1px #0000000f}
.cc-root .tile.hl{background:#16161a;color:#fff}.cc-root .tile.hl small{color:#b8bbc6}
.cc-root .tile b{font-size:1.1em}.cc-root .tile small{color:#6b6e77;font-size:.9em;line-height:1.4}
.cc-root .ico{width:2.6em;height:2.6em;border-radius:.8em;background:#e8efff;position:relative;margin-bottom:.4em}
.cc-root .ico::after{content:"";position:absolute;inset:.7em;border:.2em solid var(--blue);border-radius:.3em}
.cc-root .ico-d::after{border-radius:.15em;border-width:0 0 .2em .2em}.cc-root .ico-e::after{border-radius:50%}.cc-root .ico-a::after{transform:rotate(45deg)}
.cc-root .proj b{display:block;margin-top:.6em;font-size:.95em}
.cc-root .shot{aspect-ratio:16/10;border-radius:.9em;padding:.8em;display:flex;flex-direction:column;gap:.4em;justify-content:flex-end}
.cc-root .shot i{display:block;height:.45em;border-radius:1em;background:#fff9}.cc-root .shot i:first-child{width:55%;height:.8em;background:#fff}.cc-root .shot i:nth-child(2){width:80%}
.cc-root .shot-0{background:linear-gradient(140deg,#7aa2ff,#3c58d6)}.cc-root .shot-1{background:linear-gradient(140deg,#1d1f2a,#3b4260)}.cc-root .shot-2{background:linear-gradient(140deg,#ffb27a,#e8582f)}
.cc-root .s-stats strong{display:block;font-size:4.2em;line-height:1;letter-spacing:-.04em;font-weight:800}
.cc-root .s-stats small{color:#6b6e77;font-size:1em}
.cc-root .s-cta{align-items:flex-start}.cc-root .s-cta h2{font-size:3.2em;max-width:11em;line-height:1.02}

/* UI */
.cc-root .cc-actions{position:absolute;bottom:3vh;left:0;right:0;display:flex;justify-content:center;gap:.8rem;opacity:0;pointer-events:none}
.cc-root.go .cc-actions{animation:cc-fade .8s 4.6s forwards;pointer-events:auto}
.cc-root .cc-actions button{font:600 .95rem var(--font-outfit),Outfit,system-ui;border:0;border-radius:.8rem;padding:.8rem 1.4rem;cursor:pointer}
.cc-root .cc-actions .p{background:#0b0b0c;color:#fff}.cc-root .cc-actions .g{background:#fff;color:#16161a;box-shadow:0 0 0 1px #0001}
.cc-root .cc-actions button:focus-visible{outline:3px solid var(--blue);outline-offset:3px}
`;

const Logo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 60 44" aria-hidden="true">
    <path fill="currentColor" d="M18 0h9L14 44H5zM36 0h9L32 44h-9zM54 0h6L47 44h-6z" />
  </svg>
);

const ROWS = [
  { fn: true, keys: Array(14).fill(1) },
  { keys: [...Array(13).fill(1), 1.6] },
  { keys: [1.5, ...Array(12).fill(1), 1.1] },
  { keys: [1.8, ...Array(11).fill(1), 1.8] },
  { keys: [2.3, ...Array(10).fill(1), 2.3] },
  { keys: [1, 1, 1, 1.3, 5.1, 1.3, 1, "arr"] },
];

function Keyboard() {
  return (
    <div className="kb" aria-hidden="true">
      {ROWS.map((r, i) => (
        <div className={`kr ${r.fn ? "fn" : ""}`} key={i}>
          {r.keys.map((w, j) =>
            w === "arr" ? (
              <span className="arr" key={j} style={{ flex: 3, flexDirection: "row", gap: ".42cqw" }}>
                <i className="k" style={{ flex: 1 }} />
                <span className="arr"><i className="k" style={{ flex: 1 }} /><i className="k" style={{ flex: 1 }} /></span>
                <i className="k" style={{ flex: 1 }} />
              </span>
            ) : (
              <i className={`k ${i === 3 && (j === 5 || j === 8) ? "t" : ""} ${r.fn && j === 13 ? "tid" : ""}`} style={{ flex: w as number }} key={j} />
            )
          )}
        </div>
      ))}
    </div>
  );
}

// Smooth cubic ease-out
function easeOutCubic(x: number): number {
  return 1 - Math.pow(1 - x, 3);
}

// Exact original cc-open curve: 0% -> -89deg, 72% -> 18deg, 100% -> 12deg
function interpolateLidAngle(t: number): number {
  if (t <= 0) return -89;
  if (t >= 1) return 12;
  if (t < 0.72) {
    const p = easeOutCubic(t / 0.72);
    return -89 + (18 - -89) * p;
  } else {
    const p = (t - 0.72) / 0.28;
    const smooth = p * p * (3 - 2 * p);
    return 18 + (12 - 18) * smooth;
  }
}

export interface MacBookLaptopProps {
  once?: boolean;
  onEnter?: () => void;
  fullscreen?: boolean;
  finish?: "space" | "silver";
  ready?: boolean;
  className?: string;
}

export default function MacBookLaptop({
  once = false,
  onEnter,
  fullscreen = false,
  finish = "space",
  className = "",
}: MacBookLaptopProps) {
  const [show, setShow] = useState(true);
  const [go, setGo] = useState(false);
  const [out, setOut] = useState(false);

  const rigRef = useRef<HTMLDivElement>(null);
  const lidRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const wallRef = useRef<HTMLDivElement>(null);
  const siteRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      if (fullscreen && once && localStorage.getItem(KEY)) {
        setShow(false);
        onEnter?.();
        return;
      }
    } catch (e) {}

    const t = setTimeout(() => setGo(true), 150);

    // Also drive via rAF so Windows Battery Saver / prefers-reduced-motion never blocks the opening
    let rafId = 0;
    let started = false;
    let startTime = 0;

    const tick = (now: number) => {
      if (!started) {
        started = true;
        startTime = now;
      }
      const elapsed = (now - startTime) / 1000;

      // Exact original cc-cam: 4.2s duration, 0.1s delay, from (-30deg, -6deg, .86) to (-21deg, -27deg, .92)
      const camT = Math.min(1, Math.max(0, (elapsed - 0.1) / 4.2));
      const camE = easeOutCubic(camT);
      const rx = -30 + (-21 - -30) * camE;
      const ry = -6 + (-27 - -6) * camE;
      const sc = 0.86 + (0.92 - 0.86) * camE;
      if (rigRef.current) {
        rigRef.current.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
      }

      // Exact original cc-open: 2.3s duration, 0.6s delay, 0%(-89deg) -> 72%(18deg) -> 100%(12deg)
      const lidT = Math.min(1, Math.max(0, (elapsed - 0.6) / 2.3));
      const lidDeg = interpolateLidAngle(lidT);
      if (lidRef.current) {
        lidRef.current.style.transform = `rotateX(${lidDeg.toFixed(2)}deg)`;
      }

      // Exact original deck-glow: 1.2s duration, 2.3s delay
      const glowT = Math.min(1, Math.max(0, (elapsed - 2.3) / 1.2));
      if (glowRef.current) {
        glowRef.current.style.opacity = glowT.toFixed(3);
      }

      // Exact original cc-wall: fade in 0.7s @ 2.5s, fade out 0.8s @ 3.6s
      const wallIn = Math.min(1, Math.max(0, (elapsed - 2.5) / 0.7));
      const wallOut = Math.min(1, Math.max(0, (elapsed - 3.6) / 0.8));
      if (wallRef.current) {
        wallRef.current.style.opacity = Math.max(0, wallIn - wallOut).toFixed(3);
      }

      // Exact original cc-site: fade in 0.9s @ 3.4s
      const siteT = Math.min(1, Math.max(0, (elapsed - 3.4) / 0.9));
      if (siteRef.current) {
        siteRef.current.style.opacity = siteT.toFixed(3);
      }

      // Exact original track auto-scroll starting @ 3.9s
      if (elapsed > 3.9 && trackRef.current) {
        const scrollElapsed = elapsed - 3.9;
        const totalCycle = (N - 1) * SECTION_SECONDS;
        const cyclePos = (scrollElapsed % totalCycle) / SECTION_SECONDS;
        const slideIdx = Math.floor(cyclePos);
        const frac = cyclePos - slideIdx;
        const moveFrac = frac < 0.78 ? 0 : (frac - 0.78) / 0.22;
        const pct = -((slideIdx + moveFrac) * (100 / N));
        trackRef.current.style.transform = `translateY(${pct.toFixed(4)}%)`;
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(t);
      cancelAnimationFrame(rafId);
    };
  }, [fullscreen, once, onEnter]);

  const enter = () => {
    try { localStorage.setItem(KEY, "1"); } catch (e) {}
    setOut(true);
    setTimeout(() => { setShow(false); onEnter?.(); }, 700);
  };

  if (!show) return null;
  const slides = [...SLIDES, SLIDES[0]];

  return (
    <div
      className={`cc-root fin-${finish} ${fullscreen ? "full" : ""} ${out ? "out" : ""} ${go ? "go" : ""} ${className}`}
      role={fullscreen ? "dialog" : "figure"}
      aria-label="Code Chapters intro"
    >
      <style>{CSS}</style>
      <div className="cc-wrap">
        <div ref={rigRef} className="rig">
          <div className="f gshadow" />

          {/* BASE: six faces */}
          <div className="f b-bot" />
          {[1, 2, 3, 4, 5].map((k) => (
            <div
              key={k}
              className="f layer"
              style={{
                // @ts-expect-error CSS variable
                "--p": 100 - (k * 100) / 6,
                transform: `rotateX(90deg) translateZ(calc(var(--T) / 2 - var(--T) * ${k} / 6))`,
              }}
            />
          ))}
          <div className="f b-right" />
          <div className="f b-top">
            <div className="deck-hinge" />
            <div className="grille l" />
            <div className="grille r" />
            <Keyboard />
            <div className="tp" />
            <div ref={glowRef} className="deck-glow" />
          </div>

          {/* LID */}
          <div className="hinge">
            <div ref={lidRef} className="lid">
              {[1, 2, 3, 4, 5].map((k) => (
                <div key={k} className="ll" style={{ transform: `translateZ(calc(var(--LT) * -${k} / 6))` }} />
              ))}
              <div className="cc-face cc-back">
                <Logo className="logo" />
              </div>
              <div className="cc-face cc-front">
                <div className="cc-screen">
                  <div className="cc-notch">
                    <i />
                    <i className="on" />
                  </div>
                  <div ref={wallRef} className="cc-wall" />
                  <div ref={siteRef} className="cc-site">
                    <div className="mbar">
                      <span>
                        <b>Code Chapters</b>
                        <span>File</span>
                        <span>View</span>
                        <span>Window</span>
                        <span>Help</span>
                      </span>
                      <span>
                        <i className="batt" />
                        <span>Mon 9:41</span>
                      </span>
                    </div>
                    <div className="nav">
                      <span className="brand">
                        <Logo />
                        Code Chapters
                      </span>
                      <ul>
                        <li>Work</li>
                        <li>Services</li>
                        <li>Maintenance</li>
                        <li className="btn blue">Contact Us</li>
                      </ul>
                    </div>
                    <div className="view">
                      <div ref={trackRef} className="track" style={{ height: `${N * 100}%` }}>
                        {slides.map((s, i) => (
                          <div key={i} style={{ height: `${100 / N}%` }}>
                            {s.render()}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="cc-glass" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {fullscreen && (
        <div className="cc-actions">
          <button className="p" onClick={enter}>Enter site</button>
          <button className="g" onClick={enter}>Skip</button>
        </div>
      )}
    </div>
  );
}
