import Container from "@/components/Container";

const footerLinks: Array<{ label: string; href: string }> = [
  { label: "About", href: "/about" },
  { label: "Financepreneur", href: "/financepreneur" },
  { label: "Customer", href: "/customer" },
  { label: "Partner", href: "/partner" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#0F172A]/10 bg-white/60">
      <Container>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F172A] text-[#F8FAFC] shadow-[0_14px_40px_-20px_rgba(15,23,42,0.9)]">
                TEC
              </span>
              <div>
                <div className="font-[var(--font-poppins)] text-base font-semibold text-[#0F172A]">
                  The Entrepreneur Cell (TEC)
                </div>
                <div className="text-sm text-[#0F172A]/60">
                  Premium corporate programs for structured growth.
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-[#0F172A]/65 transition-colors hover:text-[#F59E0B]"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="text-sm font-semibold text-[#0F172A]">Office</div>
            <div className="text-sm leading-relaxed text-[#0F172A]/65">
              Corporate Programs Division
              <br />
              The Entrepreneur Cell (TEC)
            </div>
            <div className="text-sm font-semibold text-[#0F172A]">Contact</div>
            <a
              href="/contact"
              className="text-sm font-semibold text-[#0F172A]/70 transition-colors hover:text-[#F59E0B]"
            >
              Get in touch →
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#0F172A]/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm text-[#0F172A]/60">
            © {new Date().getFullYear()} TEC. All rights reserved.
          </div>
          <div className="text-sm text-[#0F172A]/60">
            Built with clarity, discipline, and outcome orientation.
          </div>
        </div>
      </Container>
    </footer>
  );
}
