"use client";

import { useMemo } from "react";

export default function ContactForm() {
  const mailtoBase = useMemo(() => "hello@tec.example", []);

  return (
    <form
      className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        const name = String(data.get("name") || "");
        const email = String(data.get("email") || "");
        const phone = String(data.get("phone") || "");
        const audience = String(data.get("audience") || "");
        const message = String(data.get("message") || "");

        const subject = `TEC Contact Request - ${audience || "Audience"}`;
        const body = [
          `Name: ${name}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Audience: ${audience}`,
          "",
          message,
        ].join("\n");

        window.location.href = `mailto:${mailtoBase}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-[#0F172A]/75"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="h-11 rounded-2xl border border-[#0F172A]/10 bg-white px-4 text-sm font-semibold text-[#0F172A] placeholder:text-[#0F172A]/40 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            placeholder="Your full name"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-[#0F172A]/75"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-11 rounded-2xl border border-[#0F172A]/10 bg-white px-4 text-sm font-semibold text-[#0F172A] placeholder:text-[#0F172A]/40 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            placeholder="name@company.com"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-[#0F172A]/75"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="h-11 rounded-2xl border border-[#0F172A]/10 bg-white px-4 text-sm font-semibold text-[#0F172A] placeholder:text-[#0F172A]/40 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            placeholder="Optional"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            className="text-sm font-semibold text-[#0F172A]/75"
            htmlFor="audience"
          >
            Audience Selection
          </label>
          <select
            id="audience"
            name="audience"
            required
            className="h-11 rounded-2xl border border-[#0F172A]/10 bg-white px-4 text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
            defaultValue=""
          >
            <option value="" disabled>
              Select an audience
            </option>
            <option value="Financepreneur">Financepreneur</option>
            <option value="Customer">Customer</option>
            <option value="Partner">Partner</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <label
          className="text-sm font-semibold text-[#0F172A]/75"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="min-h-[140px] resize-none rounded-2xl border border-[#0F172A]/10 bg-white px-4 py-3 text-sm font-semibold text-[#0F172A] placeholder:text-[#0F172A]/40 focus:outline-none focus:ring-2 focus:ring-[#F59E0B]"
          placeholder="Tell us what you are trying to achieve and how TEC can support."
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#F59E0B] text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-18px_rgba(245,158,11,0.65)] hover:shadow-[0_16px_48px_-22px_rgba(245,158,11,0.7)] transition-[transform,box-shadow] duration-200 active:scale-[0.99] sm:w-auto sm:px-8"
      >
        Send message
      </button>

      <div className="mt-4 text-xs leading-relaxed text-[#0F172A]/60">
        Submitting your form opens your email client with your details. No
        authentication or backend is required.
      </div>
    </form>
  );
}
