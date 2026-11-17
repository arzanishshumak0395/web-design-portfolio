import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";

const SERVICES = [
  {
    id: "landing-sprint",
    badge: "FASTEST LAUNCH • 72 HOURS",
    title: "High-Conversion Landing Page Sprint",
    tagline: "Built for Dubai businesses, personal brands, and ad campaigns.",
    description:
      "A single-page, mobile-first Next.js website engineered around buyer psychology, fast load speeds, and direct WhatsApp or booking conversion.",
    deliverables: [
      "Custom dark or light UI design tailored to your brand",
      "Persuasive copy hierarchy & clear call-to-action flows",
      "WhatsApp, contact form & Meta Pixel / Analytics integration",
      "Sub-second Vercel deployment + SEO metadata setup",
    ],
    idealFor: "Real estate agents, clinics, F&B brands, creators & startups",
    featured: false,
  },
  {
    id: "fullstack-web",
    badge: "MOST POPULAR • FULL BUILD",
    title: "Custom Next.js Web App & Brand Platform",
    tagline: "Multi-page architecture with interactive UI and scalable code.",
    description:
      "Complete design and frontend development using React, Next.js, TypeScript, and Tailwind CSS—giving you 100% ownership of clean, production-grade code.",
    deliverables: [
      "Multi-page architecture (Home, Portfolio/Catalog, About, Contact)",
      "Interactive state components, filtering & smooth transitions",
      "Full GitHub repository handover + automated Vercel CI/CD",
      "Cross-device QA testing across iOS, Android & Desktop",
    ],
    idealFor: "Tech companies, agencies, SaaS products & growing SMEs",
    featured: true,
  },
  {
    id: "interactive-3d",
    badge: "PREMIUM • VISUAL IMPACT",
    title: "Interactive 3D & Motion Web Experience",
    tagline: "Stand out with WebGL, Three.js, and hardware/product showcases.",
    description:
      "Immersive visual storytelling combining Three.js 3D viewports, Framer Motion scroll choreography, and precision technical layouts.",
    deliverables: [
      "Interactive 3D scenes & custom scroll-triggered animations",
      "Product showcase layouts for hardware, robotics & luxury brands",
      "Performance-tuned asset loading for smooth frame rates",
      "Custom UI/UX prototyping & design token system",
    ],
    idealFor: "Hardware startups, gaming/IP launches, luxury & creative studios",
    featured: false,
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Discovery & Wireframe",
    detail:
      "15-minute alignment on your offer, target audience, and conversion goal—followed by rapid visual structure mapping.",
  },
  {
    step: "02",
    title: "Design & Frontend Build",
    detail:
      "Clean, responsive React & Tailwind development in VS Code with live preview links so you see progress in real time.",
  },
  {
    step: "03",
    title: "Launch & Handover",
    detail:
      "Final speed/SEO polish, custom domain connection on Vercel, and full source code delivery.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      {/* Header */}
      <section>
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          Services & Capabilities
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Web Design & Frontend Engineering
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
          Whether you need a high-converting landing page shipped in 72 hours or a full Next.js frontend engineer on your team in Dubai, every build is engineered for speed, clarity, and conversion.
        </p>
      </section>

      {/* Service Packages Grid */}
      <section className="grid gap-6 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className={`flex flex-col justify-between rounded-2xl border p-6 transition sm:p-7 ${
              service.featured
                ? "border-cyan-500/60 bg-neutral-900/70 shadow-lg shadow-cyan-500/5"
                : "border-neutral-800 bg-neutral-900/30 hover:border-neutral-700"
            }`}
          >
            <div>
              <span
                className={`inline-block rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wider ${
                  service.featured
                    ? "bg-cyan-400 text-neutral-950"
                    : "border border-neutral-700 bg-neutral-950 text-cyan-300"
                }`}
              >
                {service.badge}
              </span>

              <h2 className="mt-4 text-xl font-bold text-white">
                {service.title}
              </h2>
              <p className="mt-1 text-xs font-medium text-cyan-400">
                {service.tagline}
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                {service.description}
              </p>

              <div className="mt-6 border-t border-neutral-800/80 pt-5">
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  What&apos;s Included
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-neutral-300">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-800/80 pt-5">
              <p className="text-xs text-neutral-500">
                <span className="font-semibold text-neutral-300">Ideal for:</span>{" "}
                {service.idealFor}
              </p>

              <Link
                href="/contact"
                className={`mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition ${
                  service.featured
                    ? "bg-cyan-400 text-neutral-950 hover:bg-cyan-300"
                    : "border border-neutral-700 bg-neutral-950 text-white hover:border-cyan-400/60"
                }`}
              >
                Discuss This Build
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* 3-Step Execution Process */}
      <section className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
          Workflow
        </p>
        <h2 className="mt-2 text-2xl font-bold text-white">
          From Idea to Live URL in 3 Steps
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {PROCESS.map((item) => (
            <div key={item.step} className="space-y-2">
              <span className="font-mono text-sm font-bold text-cyan-400">
                {item.step} //
              </span>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-400">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}