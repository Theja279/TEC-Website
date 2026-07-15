"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/financepreneur", label: "Financepreneur" },
  { href: "/customer", label: "Customer" },
  { href: "/partner", label: "Partner" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClassName = useMemo(
    () =>
      cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter,color] duration-300",
        scrolled
          ? "bg-white/85 backdrop-blur border-b border-[#0F172A]/10 shadow-sm"
          : "bg-transparent border-b border-transparent",
      ),
    [scrolled],
  );

  return (
    <header className={navClassName}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#0F172A] text-[#F8FAFC] shadow-[0_14px_40px_-20px_rgba(15,23,42,0.9)]">
            TEC
          </span>
          <span className="hidden sm:block">
            <span className="block font-[var(--font-poppins)] text-sm font-semibold tracking-wide text-[#0F172A]">
              The Entrepreneur Cell
            </span>
            <span className="block text-xs font-medium text-[#0F172A]/60">
              TEC
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {items.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm font-semibold text-[#0F172A]/70 transition-colors hover:text-[#0F172A]"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#F59E0B] px-4 py-2 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-18px_rgba(245,158,11,0.65)] hover:shadow-[0_16px_48px_-22px_rgba(245,158,11,0.7)] transition-transform duration-200 active:scale-[0.99] lg:inline-flex"
          >
            Get in touch
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#0F172A]/10 bg-white/80 text-[#0F172A] lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300",
          mobileOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
          <div className="grid gap-2">
            {items.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl border border-[#0F172A]/10 bg-white/70 px-4 py-3 text-sm font-semibold text-[#0F172A]"
              >
                {i.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-2xl bg-[#F59E0B] px-4 py-3 text-sm font-semibold text-[#0B1220]"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>

      <div className="h-16" aria-hidden />
    </header>
  );
}
