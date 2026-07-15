"use client";

import type { ReactNode } from "react";

import Container from "@/components/Container";

import { cn } from "@/lib/utils";

export default function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  media,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
  media?: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A] to-transparent opacity-90" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#F59E0B]/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#F59E0B]/10 blur-3xl" />

      <Container>
        <div className="relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            {eyebrow ? (
              <div className="inline-flex items-center gap-2">
                <span className="h-px w-10 bg-[#F59E0B]" />
                <span className="text-xs font-semibold tracking-widest text-white/80 uppercase">
                  {eyebrow}
                </span>
              </div>
            ) : null}

            <h1 className="font-[var(--font-poppins)] text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] text-white">
              {title}
            </h1>

            {description ? (
              <p className="text-base sm:text-lg leading-relaxed text-white/80 max-w-xl">
                {description}
              </p>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {primaryCta ? (
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = primaryCta.href;
                    }}
                    className="inline-flex h-12 items-center justify-center rounded-full bg-[#F59E0B] px-5 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-18px_rgba(245,158,11,0.65)] hover:shadow-[0_16px_48px_-22px_rgba(245,158,11,0.7)] transition-[transform,box-shadow] duration-200 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2"
                  >
                    {primaryCta.label}
                  </button>
                ) : null}

                {secondaryCta ? (
                  <button
                    type="button"
                    onClick={() => {
                      window.location.href = secondaryCta.href;
                    }}
                    className="inline-flex h-12 items-center justify-center rounded-full border border-[#0F172A]/15 bg-transparent px-5 text-sm font-semibold text-[#0F172A] transition-[background-color,border-color] duration-200 hover:bg-[#0F172A]/5 hover:border-[#0F172A]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] focus-visible:ring-offset-2 active:scale-[0.99]"
                  >
                    {secondaryCta.label}
                  </button>
                ) : null}
              </div>
            )}
          </div>

          {media ? (
            <div className="relative">{media}</div>
          ) : (
            <div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8">
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-white/10 to-white/0" />
              <div className="mt-6 grid grid-cols-3 gap-3">
                {["Strategy", "Execution", "Growth"].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                  >
                    <div className="text-sm font-semibold text-white/90">
                      {t}
                    </div>
                    <div className="mt-1 text-xs text-white/60">Aligned</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
