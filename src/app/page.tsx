"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Code2,
  Sparkles,
  Zap,
  ExternalLink,
} from "lucide-react";
import InteractiveScene from "./components/InteractiveScene";
import WebsiteShowcaseScroll from "./components/WebsiteShowcaseScroll";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const [accent, setAccent] = useState<"cyan" | "emerald" | "violet">("cyan");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Hero Kinetic Entrance
      gsap.from(".hero-stagger", {
        y: 26,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        ease: "power3.out",
      });

      // ScrollTrigger Reveal for Capability Cards
      gsap.from(".gsap-card", {
        y: 32,
        opacity: 0,
        duration: 0.65,
        stagger: 0.14,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gsap-cards-grid",
          start: "top 85%",
          once: true,
        },
      });

      // ScrollTrigger Parallax Scrub on Credibility Strip
      gsap.from(".gsap-metric", {
        y: 18,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gsap-metrics-bar",
          start: "top 90%",
          once: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const theme = {
    cyan: {
      pill: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
      dot: "bg-cyan-400",
      primaryBtn: "bg-cyan-400 text-neutral-950 hover:bg-cyan-300",
      accentText: "text-cyan-400",
      cardHover: "hover:border-cyan-500/50",
      glow: "bg-cyan-500/15",
    },
    emerald: {
      pill: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
      dot: "bg-emerald-400",
      primaryBtn: "bg-emerald-400 text-neutral-950 hover:bg-emerald-300",
      accentText: "text-emerald-400",
      cardHover: "hover:border-emerald-500/50",
      glow: "bg-emerald-500/15",
    },
    violet: {
      pill: "border-violet-500/30 bg-violet-500/10 text-violet-300",
      dot: "bg-violet-400",
      primaryBtn: "bg-violet-400 text-neutral-950 hover:bg-violet-300",
      accentText: "text-violet-400",
      cardHover: "hover:border-violet-500/50",
      glow: "bg-violet-500/15",
    },
  }[accent];

  return (
    <div ref={containerRef} className="relative space-y-20">
      {/* Ambient Top Glow */}
      <div
        className={`pointer-events-none absolute -top-24 left-1/2 -z-10 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-3xl transition-colors duration-500 ${theme.glow}`}
      />

      {/* HERO SECTION WITH LIVE GLSL 3D VIEWPORT */}
      <section className="grid items-center gap-10 pt-2 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div
            className={`hero-stagger inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium ${theme.pill}`}
          >
            <span className={`h-2 w-2 animate-pulse rounded-full ${theme.dot}`} />
            DUBAI, UAE • AVAILABLE IMMEDIATELY
          </div>

          <h1 className="hero-stagger mt-6 text-4xl font-bold tracking-tight text-white sm:text-6xl sm:leading-[1.08]">
            Syed Arzanish
            <span className="mt-2 block text-2xl font-medium text-neutral-400 sm:text-3xl">
              Web Designer & Frontend Developer
            </span>
          </h1>

          <p className="hero-stagger mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
            First-Class Honours Engineer crafting high-converting landing pages, custom GLSL 3D WebGL experiences, and GSAP-choreographed Next.js applications built to turn visitors into clients.
          </p>

          <div className="hero-stagger mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition ${theme.primaryBtn}`}
            >
              View Selected Work
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/services"
              className="rounded-lg border border-neutral-800 bg-neutral-900/70 px-6 py-3 text-sm font-semibold text-white transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Right Side: Live Custom GLSL Shader Canvas */}
        <div className="hero-stagger lg:col-span-5">
          <InteractiveScene accent={accent} />
        </div>
      </section>

      {/* Credibility Strip (GSAP ScrollTrigger) */}
      <section className="gsap-metrics-bar grid grid-cols-2 gap-4 border-y border-neutral-800/80 py-8 sm:grid-cols-4">
        <div className="gsap-metric">
          <p className="text-xs uppercase tracking-wider text-neutral-500">Core Stack</p>
          <p className="mt-1 font-mono text-sm font-semibold text-white">Next.js • React • TS</p>
        </div>
        <div className="gsap-metric">
          <p className="text-xs uppercase tracking-wider text-neutral-500">3D & Motion</p>
          <p className="mt-1 font-mono text-sm font-semibold text-white">Three.js • GLSL • GSAP</p>
        </div>
        <div className="gsap-metric">
          <p className="text-xs uppercase tracking-wider text-neutral-500">Conversion Edge</p>
          <p className="mt-1 font-mono text-sm font-semibold text-white">AED 200K+ Sales DNA</p>
        </div>
        <div className="gsap-metric">
          <p className="text-xs uppercase tracking-wider text-neutral-500">Delivery Speed</p>
          <p className="mt-1 font-mono text-sm font-semibold text-white">72-Hr Launch Sprints</p>
        </div>
      </section>

      {/* PINNED HORIZONTAL SCROLL SHOWCASE OF WEBPAGES */}
      <WebsiteShowcaseScroll />

      {/* INTERACTIVE UI + GLSL UNIFORM SWITCHER */}
      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 sm:p-8">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              // Real-Time State & GLSL Uniform Sync
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white">
              Interactive Design Token & Shader Uniform Switcher
            </h3>
            <p className="text-sm text-neutral-400">
              Updates UI design tokens and GPU fragment shader uniforms across the page in real time.
            </p>
          </div>

          <div className="flex gap-2">
            {(["cyan", "emerald", "violet"] as const).map((color) => (
              <button
                key={color}
                onClick={() => setAccent(color)}
                className={`rounded-lg border px-3.5 py-2 text-xs font-semibold capitalize transition ${
                  accent === color
                    ? "border-white bg-white text-neutral-950"
                    : "border-neutral-800 bg-neutral-950 text-neutral-400 hover:border-neutral-600 hover:text-white"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I BUILD (GSAP SCROLLTRIGGER CARDS) */}
      <section>
        <div className="flex items-end justify-between">
          <div>
            <p className={`font-mono text-xs uppercase tracking-widest ${theme.accentText}`}>
              Capabilities
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Built for Speed, Aesthetics & Conversion
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-neutral-400 transition hover:text-white sm:inline-flex"
          >
            All Projects <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="gsap-cards-grid mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Code2,
              title: "Custom Next.js Web Apps",
              desc: "Clean, modular React & TypeScript codebases deployed on Vercel with sub-second page loads and full mobile responsiveness.",
            },
            {
              icon: Sparkles,
              title: "GLSL Shaders & GSAP Motion",
              desc: "Custom GPU vertex/fragment shaders, Three.js scenes, and ScrollTrigger choreography that make brands unforgettable.",
            },
            {
              icon: Zap,
              title: "Conversion Landing Pages",
              desc: "Persuasive copy hierarchy, Meta ad pixel readiness, and direct WhatsApp/booking funnels engineered to generate leads.",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`gsap-card rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 transition duration-300 hover:-translate-y-1 ${theme.cardHover}`}
              >
                <Icon className={`h-6 w-6 ${theme.accentText}`} />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}