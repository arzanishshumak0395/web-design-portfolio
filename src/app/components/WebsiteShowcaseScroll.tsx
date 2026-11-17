"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Lock, Sparkles, Activity, Cpu, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_SITES = [
  {
    id: "final-frontier",
    url: "finalfrontier.universe",
    tag: "3D Narrative & WebGL Platform",
    title: "Final Frontier — Interactive Story Universe",
    metrics: "60 FPS WebGL • Scroll-Driven Lore",
    accentBorder: "border-cyan-500/40",
    glow: "from-cyan-500/20 via-blue-950/40 to-neutral-950",
    badgeColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    renderMockup: () => (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-cyan-950/60 via-neutral-950 to-indigo-950/50 p-6">
        {/* Simulated Website Navbar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px] text-neutral-400">
          <span className="font-mono font-bold tracking-widest text-cyan-300">FINAL FRONTIER</span>
          <div className="flex gap-4">
            <span>ZENITH</span>
            <span>TETHERED</span>
            <span>CODEX</span>
          </div>
        </div>

        {/* Simulated Hero Inside Browser */}
        <div className="my-auto py-4">
          <span className="inline-flex items-center gap-1 rounded border border-cyan-400/30 bg-cyan-400/10 px-2 py-0.5 font-mono text-[10px] text-cyan-300">
            <Sparkles className="h-3 w-3" /> CHAPTER 01 • INTERACTIVE REALM
          </span>
          <h4 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            BEYOND THE TETHERED HORIZON
          </h4>
          <p className="mt-2 max-w-md text-xs leading-relaxed text-neutral-300">
            Real-time WebGL particle atmosphere paired with chapter-synced audio and character dossiers.
          </p>
          <div className="mt-4 flex gap-2">
            <span className="rounded bg-cyan-400 px-3 py-1.5 text-[11px] font-bold text-neutral-950">
              Enter Simulation
            </span>
            <span className="rounded border border-white/15 bg-white/5 px-3 py-1.5 text-[11px] text-white">
              Explore Lore
            </span>
          </div>
        </div>

        {/* Simulated Bottom Telemetry Bar */}
        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-3 font-mono text-[10px] text-neutral-400">
          <div>SHADERS: CUSTOM GLSL</div>
          <div>ENGINE: THREE.JS + NEXT</div>
          <div className="text-right text-cyan-400">STATUS: LIVE</div>
        </div>
      </div>
    ),
  },
  {
    id: "robotics-telemetry",
    url: "gulfnet-robotics.ae/telemetry",
    tag: "Enterprise Engineering UI",
    title: "Autonomous Quadruped Fleet Dashboard",
    metrics: "ROS 2 / Nav2 • Live LiDAR & Camera UI",
    accentBorder: "border-emerald-500/40",
    glow: "from-emerald-500/20 via-neutral-900 to-neutral-950",
    badgeColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    renderMockup: () => (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-emerald-950/50 via-neutral-950 to-neutral-900 p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 font-mono text-[11px]">
          <span className="font-bold text-emerald-400">UNITREE GO2 // FLEET OPS</span>
          <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300">
            ● LIDAR SLAM ACTIVE
          </span>
        </div>

        {/* Simulated Dashboard Bento Grid */}
        <div className="my-auto grid grid-cols-12 gap-3 py-3">
          <div className="col-span-7 rounded-xl border border-emerald-500/20 bg-neutral-900/90 p-3.5">
            <div className="flex items-center justify-between text-[10px] text-neutral-400">
              <span>NAV2 PATHWAY TELEMETRY</span>
              <Cpu className="h-3.5 w-3.5 text-emerald-400" />
            </div>
            <div className="mt-3 flex h-20 items-end gap-1.5">
              {[40, 68, 52, 85, 74, 95, 88, 100].map((bar, i) => (
                <div
                  key={i}
                  style={{ height: `${bar}%` }}
                  className="flex-1 rounded-t bg-emerald-400/70"
                />
              ))}
            </div>
          </div>

          <div className="col-span-5 flex flex-col justify-between rounded-xl border border-white/10 bg-neutral-900/90 p-3.5 font-mono">
            <div>
              <p className="text-[10px] text-neutral-500">BATTERY</p>
              <p className="text-lg font-bold text-white">94.2%</p>
            </div>
            <div>
              <p className="text-[10px] text-neutral-500">LATENCY</p>
              <p className="text-sm font-semibold text-emerald-400">11.4 ms</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] text-neutral-400">
          <span>WAREHOUSE ZONE A-04</span>
          <span className="text-emerald-400">ZERO OBSTACLE COLLISIONS</span>
        </div>
      </div>
    ),
  },
  {
    id: "mynee-exoskeleton",
    url: "mynee-bionics.com",
    tag: "Hardware Product Showcase",
    title: "Mynee Smart Knee Exoskeleton Platform",
    metrics: "Investor Pitch UX • 3D Hardware Breakdown",
    accentBorder: "border-violet-500/40",
    glow: "from-violet-500/20 via-neutral-900 to-neutral-950",
    badgeColor: "text-violet-400 bg-violet-500/10 border-violet-500/30",
    renderMockup: () => (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-violet-950/60 via-neutral-950 to-neutral-900 p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px]">
          <span className="font-bold tracking-wider text-white">MYNEE BIONICS</span>
          <span className="font-mono text-[10px] text-violet-300">GEN-2 PROTOTYPE</span>
        </div>

        <div className="my-auto py-3">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 px-2.5 py-0.5 text-[10px] text-violet-300">
            <Activity className="h-3 w-3" /> IMU GAIT PREDICTION & TORQUE ASSIST
          </div>
          <h4 className="mt-3 text-2xl font-bold text-white">
            Adaptive Mobility. Engineered for Zero Fall Risk.
          </h4>
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <p className="font-mono text-sm font-bold text-violet-300">&lt;8ms</p>
              <p className="text-[10px] text-neutral-400">Reflex Lock</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <p className="font-mono text-sm font-bold text-violet-300">STM32</p>
              <p className="text-[10px] text-neutral-400">Sensor Fusion</p>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 p-2.5">
              <p className="font-mono text-sm font-bold text-violet-300">1.4 kg</p>
              <p className="text-[10px] text-neutral-400">Carbon Frame</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 text-[10px] text-neutral-400">
          <span>MIDDLESEX DUBAI HONOURS SHOWCASE</span>
          <span className="font-semibold text-violet-300">Download Spec Deck →</span>
        </div>
      </div>
    ),
  },
  {
    id: "dubai-conversion-funnel",
    url: "dubai-prime-estates.ae",
    tag: "High-Conversion Client Funnel",
    title: "Dubai Luxury Off-Plan Lead Engine",
    metrics: "72-Hr Sprint • Direct WhatsApp & Meta Pixel",
    accentBorder: "border-amber-500/40",
    glow: "from-amber-500/20 via-neutral-900 to-neutral-950",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/30",
    renderMockup: () => (
      <div className="relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-amber-950/50 via-neutral-950 to-neutral-900 p-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-3 text-[11px]">
          <span className="flex items-center gap-1.5 font-bold tracking-wider text-amber-300">
            <Building2 className="h-3.5 w-3.5" /> AURELIA DUBAI MARINA
          </span>
          <span className="rounded bg-amber-400 px-2 py-0.5 text-[10px] font-bold text-neutral-950">
            8.4% NET ROI
          </span>
        </div>

        <div className="my-auto py-3">
          <p className="font-mono text-[10px] uppercase tracking-widest text-amber-300">
            WATERFRONT RESIDENCES • HANDOVER Q4
          </p>
          <h4 className="mt-2 text-2xl font-bold text-white">
            Private Sky Villas Starting at AED 2.8M
          </h4>
          <p className="mt-2 text-xs text-neutral-300">
            Engineered for paid Meta traffic with instant brochure unlock and 1-tap WhatsApp advisor routing.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <span className="rounded-lg bg-amber-400 px-3.5 py-2 text-[11px] font-bold text-neutral-950">
              Get Floor Plans on WhatsApp
            </span>
            <span className="font-mono text-[10px] text-neutral-400">
              99/100 Speed Score
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[10px] text-neutral-400">
          <span>BUILT & DEPLOYED IN 72 HOURS</span>
          <span className="text-amber-300">+42% LEAD CONVERSION</span>
        </div>
      </div>
    ),
  },
];

export default function WebsiteShowcaseScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => -(track.scrollWidth - section.offsetWidth);

      gsap.to(track, {
        x: getScrollAmount,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 14%",
          end: () => `+=${track.scrollWidth - section.offsetWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden rounded-3xl border border-neutral-800/90 bg-neutral-900/20 py-10"
    >
      {/* Section Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 px-6 sm:flex-row sm:items-end sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            // Interactive Scroll Reel
          </p>
          <h2 className="mt-1.5 text-2xl font-bold text-white sm:text-3xl">
            Scroll Through Live Web Architectures
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400">
          Keep scrolling to glide across builds ↓
        </p>
      </div>

      {/* Horizontal Gliding Track */}
      <div ref={trackRef} className="flex w-max gap-6 px-6 sm:px-8">
        {SHOWCASE_SITES.map((site) => (
          <div
            key={site.id}
            className={`flex w-[330px] shrink-0 flex-col overflow-hidden rounded-2xl border bg-neutral-950 shadow-2xl sm:w-[540px] ${site.accentBorder}`}
          >
            {/* Browser Top Window Bar */}
            <div className="flex items-center justify-between border-b border-neutral-800 bg-neutral-900/90 px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <div className="flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1 font-mono text-[11px] text-neutral-400">
                <Lock className="h-3 w-3 text-emerald-400" />
                <span>https://{site.url}</span>
              </div>

              <Link
                href="/projects"
                className="text-neutral-400 transition hover:text-white"
                title="View Case Study"
              >
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Simulated Webpage Viewport */}
            <div className="h-[260px] w-full sm:h-[290px]">
              {site.renderMockup()}
            </div>

            {/* Bottom Metadata Bar */}
            <div className="flex items-center justify-between border-t border-neutral-800/80 bg-neutral-950 px-5 py-3.5">
              <div>
                <span
                  className={`inline-block rounded border px-2 py-0.5 font-mono text-[10px] ${site.badgeColor}`}
                >
                  {site.tag}
                </span>
                <h3 className="mt-1 text-sm font-semibold text-white">
                  {site.title}
                </h3>
              </div>
              <span className="hidden font-mono text-[11px] text-neutral-500 sm:block">
                {site.metrics}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}