import Container from "@/components/Container";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 sm:py-20">
          <Container>
            <SectionTitle
              eyebrow="About TEC"
              title="A corporate ecosystem built for disciplined growth"
              description="TEC is designed for execution. We combine structured learning, partner-grade collaboration, and outcome-oriented delivery so participants can translate capability into consistent results."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {[
                {
                  title: "Governed Programs",
                  body: "Clear frameworks, measurable milestones, and delivery standards that keep progress consistent.",
                },
                {
                  title: "Outcome Orientation",
                  body: "We align learning with measurable impact—so effort becomes structured momentum.",
                },
                {
                  title: "Trusted Collaboration",
                  body: "We build partnerships that emphasize transparency, quality, and long-term value.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur"
                >
                  <div className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                    {c.title}
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    {c.body}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-16 sm:pb-20">
          <Container>
            <div className="rounded-3xl border border-[#0F172A]/10 bg-[#0F172A] p-8 sm:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70 uppercase">
                    <span className="h-px w-10 bg-[#F59E0B]" />
                    Why choose TEC
                  </div>
                  <h2 className="mt-3 font-[var(--font-poppins)] text-2xl sm:text-3xl font-semibold leading-tight text-white">
                    Designed like a premium corporate program—delivered like a
                    system.
                  </h2>
                  <p className="mt-4 text-sm sm:text-base leading-relaxed text-white/75">
                    From training structure to partner support, TEC is built to
                    remove uncertainty and increase clarity—so participants can
                    focus on disciplined execution.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    "Structured curriculum",
                    "Mentorship frameworks",
                    "Partner-grade enablement",
                    "Outcome reviews",
                  ].map((x) => (
                    <div
                      key={x}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="text-sm font-semibold text-white">
                        {x}
                      </div>
                      <div className="mt-1 text-xs text-white/60">
                        Aligned with measurable milestones
                      </div>
                    </div>
                  ))}
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
