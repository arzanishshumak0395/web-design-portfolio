"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Zap, Layers, Code2, Sparkles } from "lucide-react";

type Category = "All" | "3D & Interactive" | "Engineering UI" | "Conversion & Web";

const PROJECTS = [
  {
    id: "final-frontier",
    title: "Final Frontier — Interactive 3D Story Universe",
    category: "3D & Interactive" as Category,
    role: "Lead Frontend Developer & UI Architect",
    description:
      "Immersive multi-section web platform built for an original sci-fi urban fantasy universe. Engineered scroll-choreographed transitions, interactive 3D viewport scenes, and modular lore interfaces.",
    highlights: [
      "Custom Three.js & Framer Motion scroll-driven scene transitions",
      "Modular React component architecture with sub-second route switching",
      "Automated GitHub-to-Vercel CI/CD pipeline with asset optimization",
    ],
    stack: ["Next.js", "React", "Three.js", "Tailwind CSS", "Framer Motion"],
    ctaLabel: "Request Live Demo",
    ctaHref: "/contact",
  },
  {
    id: "robotics-telemetry-ui",
    title: "Autonomous Robotics & Telemetry Showcase System",
    category: "Engineering UI" as Category,
    role: "Full-Stack Frontend Engineer",
    description:
      "Precision dark-mode interface designed to present ROS 2 / Nav2 warehouse simulation pipelines, quadruped patrol demos, and biomechanical exoskeleton R&D with zero visual clutter.",
    highlights: [
      "Telemetry-inspired bento grid & responsive demo playback layout",
      "Mobile-first architecture achieving 98+ Lighthouse performance",
      "Direct recruiter conversion flows and streamlined portfolio routing",
    ],
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "Lucide UI"],
    ctaLabel: "Discuss Architecture",
    ctaHref: "/contact",
  },
  {
    id: "mynee-web-showcase",
    title: "Mynee Smart Knee Exoskeleton — Digital Product Showcase",
    category: "Engineering UI" as Category,
    role: "Frontend Developer & Product Designer",
    description:
      "Interactive product presentation website built to accompany a functional biomechanical knee exoskeleton prototype, translating sensor fusion and fall-mitigation specs into an investor-ready web experience.",
    highlights: [
      "Clean technical storytelling bridging hardware schematics and UX",
      "Interactive system breakdown sections for symposium & stakeholder demos",
      "Responsive layout engineered for live tablet and desktop presentations",
    ],
    stack: ["React", "Next.js", "Tailwind CSS", "UI/UX Prototyping"],
    ctaLabel: "Inquire About Build",
    ctaHref: "/contact",
  },
  {
    id: "dubai-sme-funnels",
    title: "High-Conversion Landing Pages & Rapid Client Sprints",
    category: "Conversion & Web" as Category,
    role: "Web Designer & Conversion Strategist",
    description:
      "Bespoke marketing websites and lead-capture landing pages crafted for Dubai F&B concepts, service businesses, and creator campaigns—combining sharp visual hierarchy with proven sales psychology.",
    highlights: [
      "End-to-end wireframes and responsive UI systems built in Figma & Canva",
      "Meta ad tracking pixel readiness, WhatsApp lead routing & technical SEO",
      "Rapid 72-hour concept-to-production deployment sprints on Vercel",
    ],
    stack: ["Next.js", "Tailwind CSS", "Figma", "Technical SEO", "Vercel"],
    ctaLabel: "Book a 72-Hr Sprint",
    ctaHref: "/contact",
  },
];

const CATEGORIES: Category[] = [
  "All",
  "3D & Interactive",
  "Engineering UI",
  "Conversion & Web",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          Selected Work
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Shipped Web & Interactive Systems
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
          A curated collection of frontend builds, 3D web experiences, technical interfaces, and conversion-focused landing pages engineered with Next.js, React, and Tailwind CSS.
        </p>

        {/* Category Filter Pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-lg border px-4 py-2 text-xs font-semibold transition ${
                selectedCategory === category
                  ? "border-cyan-400 bg-cyan-400 text-neutral-950"
                  : "border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:border-neutral-600 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Project Cards */}
      <section className="space-y-6">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 transition hover:border-cyan-500/40 sm:p-8"
          >
            <div className="grid gap-8 lg:grid-cols-12">
              {/* Left Column: Overview & Tech Stack */}
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-md border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1 font-mono text-xs text-cyan-300">
                    {project.category}
                  </span>
                  <span className="text-xs text-neutral-500">{project.role}</span>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-white">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-neutral-400 sm:text-base">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-neutral-800 bg-neutral-950 px-3 py-1 font-mono text-xs text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Highlights & CTA */}
              <div className="flex flex-col justify-between rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-5 lg:col-span-5">
                <div>
                  <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                    Architecture & Impact
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-neutral-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-neutral-800/80 pt-4">
                  <Link
                    href={project.ctaHref}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
                  >
                    {project.ctaLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}