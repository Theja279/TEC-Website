import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function FinancepreneurPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1">
        <section className="pt-20 pb-14 sm:pb-20 sm:pt-24">
          <Container>
            <SectionTitle
              eyebrow="Financepreneur"
              title="Build capability into consistent income growth"
              description="TEC equips financepreneurs with structured training, a disciplined delivery process, and a pathway to measurable outcomes through coaching and partner-grade enablement."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur">
                <h3 className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                  Career opportunities
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-[#0F172A]/70">
                  {[
                    "Client-facing financial advisory pathways",
                    "Program delivery roles within TEC ecosystem",
                    "Partner-grade collaborations with structured delivery responsibilities",
                    "Specialization tracks based on competency and performance",
                  ].map((x) => (
                    <li key={x} className="flex gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F59E0B]/20 text-[#F59E0B]">
                        ✓
                      </span>
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur">
                <h3 className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                  Benefits
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {[
                    {
                      k: "Mentorship",
                      v: "Coaching aligned to performance milestones",
                    },
                    {
                      k: "Training",
                      v: "Skill-building with practical execution",
                    },
                    {
                      k: "Enablement",
                      v: "Partner-grade support and collaboration",
                    },
                    {
                      k: "Community",
                      v: "A peer network focused on disciplined delivery",
                    },
                  ].map((b) => (
                    <div
                      key={b.k}
                      className="rounded-2xl border border-[#0F172A]/10 bg-white/80 px-4 py-4"
                    >
                      <div className="text-sm font-semibold text-[#0F172A]">
                        {b.k}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-[#0F172A]/65">
                        {b.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {[
                {
                  title: "Training Process",
                  desc: "A structured program that converts foundational knowledge into delivery competence through guided practice and outcomes review.",
                },
                {
                  title: "Income Growth",
                  desc: "A pathway focused on disciplined acquisition, consistent service delivery, and measurable progression.",
                },
                {
                  title: "Testimonials",
                  desc: "Success stories are shared based on verified outcomes, structured learning milestones, and long-term client value.",
                },
              ].map((x) => (
                <div
                  key={x.title}
                  className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur"
                >
                  <div className="font-[var(--font-poppins)] text-lg font-semibold text-[#0F172A]">
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
                Frequently asked by financepreneurs
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  "How long is the program?",
                  "Is prior experience required?",
                  "What outcomes should I expect?",
                  "How is performance measured?",
                ].map((q) => (
                  <div
                    key={q}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="text-sm font-semibold text-white">{q}</div>
                    <div className="mt-2 text-xs leading-relaxed text-white/70">
                      Responses are delivered during program onboarding and
                      structured milestones.
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 sm:p-8 backdrop-blur">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                    Apply
                  </div>
                  <div className="mt-2 font-[var(--font-poppins)] text-2xl font-semibold text-[#0F172A]">
                    Start your Financepreneur track
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    Submit your application to receive onboarding details and
                    program alignment.
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#F59E0B] px-6 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-18px_rgba(245,158,11,0.65)] hover:shadow-[0_16px_48px_-22px_rgba(245,158,11,0.7)] transition-transform duration-200 active:scale-[0.99]"
                >
                  Apply Now
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
