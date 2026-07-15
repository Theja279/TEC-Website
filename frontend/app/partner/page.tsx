import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function PartnerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1">
        <section className="pt-20 pb-14 sm:pb-20 sm:pt-24">
          <Container>
            <SectionTitle
              eyebrow="Partner"
              title="Partner-grade collaboration for shared growth"
              description="TEC provides structured registration, enablement, and collaboration frameworks designed to help partners scale with discipline and consistent delivery."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "Partner Benefits",
                  desc: "Enablement frameworks, governance alignment, and premium collaboration standards built for long-term value.",
                },
                {
                  title: "Registration Process",
                  desc: "A structured onboarding workflow focused on clarity, responsibilities, and delivery expectations.",
                },
                {
                  title: "Growth Opportunities",
                  desc: "Participation in collaboration pipelines designed to support quality delivery and sustainable scaling.",
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
                Partner FAQs
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  "What is required for registration?",
                  "How does TEC evaluate delivery capability?",
                  "Are there collaboration stages?",
                  "How do we manage shared outcomes?",
                ].map((q) => (
                  <div
                    key={q}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold text-white">{q}</div>
                    <div className="mt-2 text-xs leading-relaxed text-white/70">
                      Answers are provided through onboarding documents and
                      partner enablement sessions.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 sm:p-8 backdrop-blur">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                    Connect
                  </div>
                  <div className="mt-2 font-[var(--font-poppins)] text-2xl font-semibold text-[#0F172A]">
                    Register your partnership interest
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    Share your organization and collaboration focus. TEC will
                    respond with next steps for registration alignment.
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
