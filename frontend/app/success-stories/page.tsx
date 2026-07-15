import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const storyCards: Array<{ title: string; outcome: string; segment: string }> = [
  {
    title: "Structured onboarding converted uncertainty into execution",
    outcome: "Improved delivery consistency across client engagements.",
    segment: "Financepreneur",
  },
  {
    title: "Disciplined consultation frameworks increased client clarity",
    outcome: "Reduced decision cycles with outcome-aligned recommendations.",
    segment: "Customer",
  },
  {
    title: "Partner enablement enabled scalable collaboration",
    outcome: "Strengthened quality alignment and governance standards.",
    segment: "Partner",
  },
  {
    title: "Milestone-driven training improved readiness for service delivery",
    outcome: "Higher competency alignment and measurable progression.",
    segment: "Financepreneur",
  },
];

function VideoPlaceholder({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-[#0F172A]/10 bg-[#F8FAFC] p-5">
      <div className="aspect-video w-full rounded-xl bg-gradient-to-br from-[#0F172A] to-[#0F172A]/60" />
      <div className="text-sm font-semibold text-[#0F172A]">{title}</div>
      <div className="text-xs text-[#0F172A]/60">
        Video player to be integrated
      </div>
    </div>
  );
}

export default function SuccessStoriesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 pt-20">
        <section className="pb-14 sm:pb-16">
          <Container>
            <SectionTitle
              eyebrow="Success Stories"
              title="Proof of disciplined delivery"
              description="Outcome-oriented narratives from financepreneurs, customers, and partners. Each story reflects structured learning and governed execution."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {storyCards.map((s) => (
                <article
                  key={s.title}
                  className="group rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                      {s.segment}
                    </div>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F59E0B]/15 text-[#F59E0B] transition-colors group-hover:bg-[#F59E0B]/25">
                      ↗
                    </div>
                  </div>
                  <h3 className="mt-4 font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    {s.outcome}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="pb-14 sm:pb-16">
          <Container>
            <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 sm:p-8 backdrop-blur">
              <h3 className="font-[var(--font-poppins)] text-2xl font-semibold text-[#0F172A]">
                Videos
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
                A premium video library placeholder for TEC’s case narratives.
                Replace with real assets when available.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <VideoPlaceholder title="Case highlights" />
                <VideoPlaceholder title="Delivery frameworks" />
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-14 sm:pb-16">
          <Container>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur lg:col-span-2">
                <h3 className="font-[var(--font-poppins)] text-2xl font-semibold text-[#0F172A]">
                  Case Studies
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      title: "From training to delivery competence",
                      body: "A milestone-driven learning path that enabled consistent client-ready performance.",
                    },
                    {
                      title: "Consultation clarity at scale",
                      body: "Structured consultation stages improved alignment and reduced ambiguity in decision-making.",
                    },
                    {
                      title: "Governed collaboration for partners",
                      body: "Partner enablement frameworks reinforced quality standards and shared execution ownership.",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-[#0F172A]/10 bg-white/80 p-5"
                    >
                      <div className="text-sm font-semibold text-[#0F172A]">
                        {c.title}
                      </div>
                      <div className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
                        {c.body}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#0F172A]/10 bg-[#0F172A] p-6 sm:p-8 text-white lg:self-start">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-white/70 uppercase">
                  Testimonials
                </div>
                <h3 className="mt-3 font-[var(--font-poppins)] text-2xl font-semibold">
                  What participants say
                </h3>
                <div className="mt-6 space-y-4">
                  {[
                    {
                      quote:
                        "The program turned preparation into real delivery. Every stage felt governed, measurable, and actionable.",
                      by: "Financepreneur",
                    },
                    {
                      quote:
                        "Clarity improved immediately. Recommendations were structured and aligned to outcomes, not guesswork.",
                      by: "Customer",
                    },
                    {
                      quote:
                        "Partner collaboration became reliable. Enablement and standards created consistency across teams.",
                      by: "Partner",
                    },
                  ].map((t) => (
                    <div
                      key={t.by}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="text-sm leading-relaxed">“{t.quote}”</div>
                      <div className="mt-3 text-xs font-semibold tracking-wide text-white/70">
                        {t.by}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="pb-14 sm:pb-16">
          <Container>
            <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 sm:p-8 backdrop-blur">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-[#0F172A]/60 uppercase">
                    Next
                  </div>
                  <div className="mt-2 font-[var(--font-poppins)] text-2xl font-semibold text-[#0F172A]">
                    Get aligned with TEC
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    Explore programs and choose the audience track designed for
                    structured growth.
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#F59E0B] px-7 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-18px_rgba(245,158,11,0.65)] hover:shadow-[0_16px_48px_-22px_rgba(245,158,11,0.7)] transition-[transform,box-shadow] duration-200 active:scale-[0.99]"
                >
                  Request a consultation
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
