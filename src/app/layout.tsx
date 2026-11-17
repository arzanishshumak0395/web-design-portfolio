import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Syed Arzanish | Web Design & Frontend Portfolio",
  description: "Web Design, UI/UX, and Next.js Frontend Development Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 antialiased">
        {/* TOP NAVIGATION BAR */}
        <header className="border-b border-neutral-800 bg-neutral-950">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-bold tracking-tight text-white">
              ARZANISH <span className="text-neutral-500">/ WEB</span>
            </Link>

            <nav className="flex items-center gap-6 text-sm font-medium text-neutral-400">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/projects" className="transition hover:text-white">
                Projects
              </Link>
              <Link href="/services" className="transition hover:text-white">
                Services
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>
      </body>
    </html>
  );
}