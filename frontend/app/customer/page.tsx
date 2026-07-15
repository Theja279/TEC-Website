import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function CustomerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1">
        <section className="pt-20 pb-14 sm:pb-20 sm:pt-24">
          <Container>
            <SectionTitle
              eyebrow="Customer"
              title="Premium financial services with guided clarity"
              description="TEC provides structured consultation processes and service frameworks that help customers make informed decisions with confidence and outcome orientation."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "Financial Services",
                  desc: "Consultation-led support across planning, advisory workflows, and execution standards aligned to client goals.",
                },
                {
                  title: "Consultation Process",
                  desc: "A guided approach focused on clarity, risk awareness, and measurable next steps.",
                },
                {
                  title: "Benefits",
                  desc: "Transparent communication, disciplined documentation, and service delivery aligned to outcomes.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur"
                >
                  <div className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                    {x.title}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    {x.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-[#0F172A]/10 bg-[#0F172A] p-6 sm:p-8">
              <h3 className="font-[var(--font-poppins)] text-2xl font-semibold text-white">
                Customer-ready delivery
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Each engagement is structured with clear stages: discovery,
                recommendations, execution alignment, and progress review.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Discovery & objectives",
                  "Risk and clarity review",
                  "Execution alignment",
                  "Progress & refinement",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold text-white">{t}</div>
                    <div className="mt-2 text-xs leading-relaxed text-white/70">
                      Designed to deliver confidence and disciplined next steps.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  {
                    name: "Client leadership",
                    quote:
                      "TEC’s process created clarity. The recommendations were structured, and execution felt disciplined from day one.",
                  },
                  {
                    name: "Long-term customer",
                    quote:
                      "The team focused on outcomes, documentation, and follow-through. It felt premium and well-governed.",
                  },
                ].map((t) => (
                  <div
                    key={t.name}
                    className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur"
                  >
                    <div className="text-sm font-semibold text-[#0F172A]">
                      {t.name}
                    </div>
                    <div className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                      “{t.quote}”
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 sm:p-8 backdrop-blur">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                    Contact
                  </div>
                  <div className="mt-2 font-[var(--font-poppins)] text-2xl font-semibold text-[#0F172A]">
                    Request a guided consultation
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    Share your context and goals. TEC will respond with next
                    steps and service alignment.
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#F59E0B] px-6 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-18px_rgba(245,158,11,0.65)] hover:shadow-[0_16px_48px_-22px_rgba(245,158,11,0.7)] transition-transform duration-200 active:scale-[0.99]"
                >
                  Contact TEC
                </a>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
