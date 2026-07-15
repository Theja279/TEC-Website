import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

const groups: Array<{ title: string; items: Array<{ q: string; a: string }> }> =
  [
    {
      title: "Program structure",
      items: [
        {
          q: "How long does the TEC program run?",
          a: "Program timing is delivered in structured stages. Specific schedules are shared during onboarding so participants can plan with clarity.",
        },
        {
          q: "Is the program suitable for different experience levels?",
          a: "TEC is built for structured learning. Onboarding alignment identifies the right entry pathway and delivery focus.",
        },
        {
          q: "What outcomes should I expect?",
          a: "Participants can expect milestone-driven learning, governed execution, and outcome reviews designed to convert capability into consistent results.",
        },
      ],
    },
    {
      title: "Delivery & performance",
      items: [
        {
          q: "How is performance measured?",
          a: "Performance is evaluated through structured milestones, delivery checkpoints, and continuous improvement reviews.",
        },
        {
          q: "What makes TEC delivery different?",
          a: "TEC operates like a system—governance, clarity of responsibilities, documentation standards, and ongoing refinement.",
        },
        {
          q: "Do partnerships play a role?",
          a: "Yes. Partner-grade enablement is used to strengthen quality alignment and create consistent collaboration pathways.",
        },
      ],
    },
    {
      title: "Collaboration",
      items: [
        {
          q: "Can customers or partners join the ecosystem?",
          a: "TEC supports customers and partners through guided processes. Contact TEC to explore the correct collaboration pathway.",
        },
        {
          q: "How do we ensure confidentiality and professionalism?",
          a: "Engagements are governed through professional standards, structured documentation, and delivery protocols.",
        },
      ],
    },
  ];

function FaqGroup({ group }: { group: (typeof groups)[number] }) {
  return (
    <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur">
      <div className="text-sm font-semibold tracking-widest text-[#0F172A]/60 uppercase">
        {group.title}
      </div>
      <div className="mt-6 space-y-3">
        {group.items.map((it) => (
          <details
            key={it.q}
            className="group rounded-2xl border border-[#0F172A]/10 bg-white px-4 py-4"
          >
            <summary className="cursor-pointer list-none text-sm font-semibold text-[#0F172A]">
              <span>{it.q}</span>
              <span className="float-right text-[#F59E0B] transition-transform group-open:rotate-45">
                ＋
              </span>
            </summary>
            <div className="mt-2 text-sm leading-relaxed text-[#0F172A]/70">
              {it.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="pb-14 sm:pb-16">
          <Container>
            <SectionTitle
              eyebrow="FAQ"
              title="Clear answers for premium execution"
              description="Explore how TEC delivers structured programs, performance checkpoints, and partner-grade collaboration."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {groups.map((g) => (
                <FaqGroup key={g.title} group={g} />
              ))}
            </div>

            <div className="mt-10 rounded-3xl border border-[#0F172A]/10 bg-[#0F172A] p-6 sm:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                    Next step
                  </div>
                  <div className="mt-2 font-[var(--font-poppins)] text-2xl font-semibold text-white">
                    Contact TEC for program alignment
                  </div>
                  <div className="mt-3 text-sm leading-relaxed text-white/70">
                    Share your context and we will respond with the most
                    appropriate onboarding pathway.
                  </div>
                </div>
                <a
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#F59E0B] px-7 text-sm font-semibold text-[#0B1220] shadow-[0_10px_30px_-18px_rgba(245,158,11,0.65)] hover:shadow-[0_16px_48px_-22px_rgba(245,158,11,0.7)] transition-transform duration-200 active:scale-[0.99]"
                >
                  Contact us
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
