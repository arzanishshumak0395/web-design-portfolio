"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  Copy,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Smartphone,
} from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [inquiryType, setInquiryType] = useState("Full-Time / Contract Frontend Role");
  const [message, setMessage] = useState("");

  const email = "SyedArzanish33@gmail.com";
  const phoneDisplay = "+971-50-833-4925";
  const whatsappBase = "https://wa.me/971508334925";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formatted = `Hi Syed, I'm ${name || "reaching out from your portfolio"} regarding: ${inquiryType}.${
      message ? `\n\nDetails: ${message}` : ""
    }`;
    window.open(`${whatsappBase}?text=${encodeURIComponent(formatted)}`, "_blank");
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section>
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-medium text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          AVAILABLE IMMEDIATELY • DUBAI, UAE (VISA READY)
        </div>

        <h1 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Let&apos;s Build Something Fast.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400">
          Available in Dubai for full-time Frontend / Web Design roles, contract engineering, or 72-hour high-conversion website sprints. Reach out directly via WhatsApp or email for a same-day response.
        </p>
      </section>

      {/* Main Grid: Direct Channels + Quick WhatsApp Brief */}
      <section className="grid gap-8 lg:grid-cols-12">
        {/* Left Column: Direct Contact Cards */}
        <div className="space-y-4 lg:col-span-5">
          {/* Email Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2.5 text-cyan-400">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Direct Email
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">{email}</p>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <a
                href={`mailto:${email}`}
                className="flex-1 rounded-lg bg-cyan-400 px-4 py-2 text-center text-xs font-semibold text-neutral-950 transition hover:bg-cyan-300"
              >
                Open Mail App
              </a>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 rounded-lg border border-neutral-700 bg-neutral-950 px-3.5 py-2 text-xs font-medium text-neutral-300 transition hover:border-neutral-500 hover:text-white"
              >
                {copied ? (
                  <>
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    Copy
                  </>
                )}
              </button>
            </div>
          </div>

          {/* WhatsApp / Phone Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2.5 text-emerald-400">
                <Smartphone className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  UAE Mobile & WhatsApp
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  {phoneDisplay}
                </p>
              </div>
            </div>

            <a
              href={whatsappBase}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2.5 text-xs font-semibold text-emerald-300 transition hover:bg-emerald-500/20"
            >
              <MessageSquare className="h-4 w-4" />
              Message Directly on WhatsApp
            </a>
          </div>

          {/* Location Card */}
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg border border-neutral-800 bg-neutral-950 p-2.5 text-neutral-300">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                  Location & Status
                </p>
                <p className="mt-0.5 text-sm font-semibold text-white">
                  Dubai, United Arab Emirates
                </p>
                <p className="mt-0.5 text-xs text-neutral-400">
                  In-country • Ready for immediate onboarding or in-person meetings
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Inquiry Launcher */}
        <div className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6 sm:p-8 lg:col-span-7">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
            Quick Brief
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Send an Instant Project or Interview Brief
          </h2>
          <p className="mt-1 text-sm text-neutral-400">
            Fill this in to launch a pre-formatted message directly to my WhatsApp.
          </p>

          <form onSubmit={handleWhatsAppSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400">
                Your Name / Company
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Sarah — Dubai Tech Studio"
                className="mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400">
                Inquiry Type
              </label>
              <select
                value={inquiryType}
                onChange={(e) => setInquiryType(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white focus:border-cyan-400 focus:outline-none"
              >
                <option>Full-Time / Contract Frontend Role</option>
                <option>72-Hour Landing Page Sprint</option>
                <option>Custom Next.js Web App Build</option>
                <option>Interactive 3D / Motion Web Project</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-neutral-400">
                Project or Role Details
              </label>
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Share your timeline, role details, or website goals..."
                className="mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white placeholder-neutral-600 focus:border-cyan-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-cyan-300"
            >
              <Send className="h-4 w-4" />
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}