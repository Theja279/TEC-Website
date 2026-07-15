import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export default function FounderStoryPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <section className="pt-20 pb-14 sm:pb-20 sm:pt-24">
          <Container>
            <SectionTitle
              eyebrow="Founder Story"
              title="A disciplined journey built for measurable outcomes"
              description="TEC was created to turn capability into consistent results—through governance, structured learning, and partner-grade delivery."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              <div className="lg:col-span-1">
                <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur">
                  <div className="aspect-[4/3] w-full rounded-2xl bg-gradient-to-br from-[#0F172A] to-[#0F172A]/60" />
                  <div className="mt-5 font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                    TEC Founder
                  </div>
                  <div className="mt-1 text-sm text-[#0F172A]/65">
                    Governance • Execution • Trusted Collaboration
                  </div>
                  <div className="mt-5 rounded-2xl border border-[#0F172A]/10 bg-white/60 p-4">
                    <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                      Signature principle
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
                      Discipline beats improvisation when you want dependable
                      outcomes.
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur">
                    <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                      Mission
                    </div>
                    <div className="mt-3 font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                      Enable disciplined growth
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
                      Provide structured learning and delivery frameworks that
                      transform expertise into consistent performance.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur">
                    <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                      Vision
                    </div>
                    <div className="mt-3 font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                      Build a premium ecosystem
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
                      Create a trusted environment where financepreneurs,
                      customers, and partners align on measurable outcomes.
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-[#0F172A]/10 bg-[#0F172A] p-6 sm:p-8">
                  <div className="font-[var(--font-poppins)] text-2xl font-semibold text-white">
                    Journey timeline
                  </div>
                  <div className="mt-6 grid gap-4">
                    {[
                      {
                        year: "Foundation",
                        title: "Governance first",
                        desc: "Create delivery standards that guide learning and outcomes.",
                      },
                      {
                        year: "Structured Learning",
                        title: "Skills with milestones",
                        desc: "Turn capability into measurable competency through practical frameworks.",
                      },
                      {
                        year: "Partner Enablement",
                        title: "Collaboration at scale",
                        desc: "Integrate partner-grade workflows for quality and consistency.",
                      },
                      {
                        year: "Outcome Delivery",
                        title: "Disciplined execution",
                        desc: "Align delivery with measurable progress and refined next steps.",
                      },
                    ].map((s) => (
                      <div
                        key={s.title}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4"
                      >
                        <div className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                          {s.year}
                        </div>
                        <div className="mt-2 font-semibold text-white">
                          {s.title}
                        </div>
                        <div className="mt-2 text-sm leading-relaxed text-white/70">
                          {s.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                "Governed Programs",
                "Outcome Reviews",
                "Trusted Partnerships",
              ].map((a) => (
                <div
                  key={a}
                  className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur"
                >
                  <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                    Achievement
                  </div>
                  <div className="mt-3 font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                    {a}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
                    Crafted as a system to keep quality consistent and results
                    measurable.
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur sm:p-8">
              <div className="font-[var(--font-poppins)] text-2xl font-semibold text-[#0F172A]">
                A message for every participant
              </div>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#0F172A]/70">
                TEC is built for professionals who want structure without losing
                ambition. If you commit to disciplined execution, the program
                becomes a reliable system for growth—not a temporary moment.
              </p>
              <div className="mt-6 rounded-2xl border border-[#0F172A]/10 bg-white/60 p-4">
                <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                  Leadership note
                </div>
                <div className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
                  Treat every milestone as a promise. Deliver it with clarity,
                  documentation, and continuous improvement.
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
