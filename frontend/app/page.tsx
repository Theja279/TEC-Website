import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionTitle from "@/components/SectionTitle";
import Container from "@/components/Container";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />

      <main>
        <Hero
          eyebrow="Premium Corporate Programs"
          title="The Entrepreneur Cell (TEC)"
          description="A modern, corporate-grade ecosystem that helps financepreneurs, customers, and partners drive measurable growth—built for execution and long-term value."
          primaryCta={{ label: "Explore Programs", href: "/about" }}
          secondaryCta={{ label: "Talk to TEC", href: "/contact" }}
        />

        <section className="py-14 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <SectionTitle
                eyebrow="About TEC"
                title="A corporate platform for scalable outcomes"
                description="We combine structured training, disciplined delivery, and partner-grade support—so every participant can convert expertise into consistent results."
              />

              <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 sm:p-8 backdrop-blur">
                <h3 className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                  What TEC stands for
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#0F172A]/70">
                  We are dedicated to rigorous learning, ethical growth, and
                  customer-first financial services. TEC is designed to align
                  talent with real-world opportunities.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Structured Learning",
                      desc: "A curriculum built around practical competency and measurable milestones.",
                    },
                    {
                      title: "Execution Discipline",
                      desc: "Systems that support delivery, coaching, and continuous improvement.",
                    },
                    {
                      title: "Trusted Partnerships",
                      desc: "Collaborations that prioritize quality, transparency, and long-term value.",
                    },
                    {
                      title: "Outcome Orientation",
                      desc: "A focus on results across training, client acquisition, and income growth.",
                    },
                  ].map((c) => (
                    <div
                      key={c.title}
                      className="rounded-2xl border border-[#0F172A]/10 bg-white px-4 py-4"
                    >
                      <div className="font-semibold text-[#0F172A]">
                        {c.title}
                      </div>
                      <div className="mt-1 text-sm leading-relaxed text-[#0F172A]/65">
                        {c.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-20">
          <Container>
            <SectionTitle
              eyebrow="Audience"
              title="Built for three distinct audiences"
              description="Choose your path—then access the TEC ecosystem built for learning, service, and partnership."
              align="center"
            />

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Financepreneur",
                  desc: "Launch and scale with structured training, mentorship, and a pathway to measurable income growth.",
                  href: "/financepreneur",
                },
                {
                  title: "Customer",
                  desc: "Access premium financial services and guided consultation designed around clarity and outcomes.",
                  href: "/customer",
                },
                {
                  title: "Partner",
                  desc: "Grow through a partner-grade registration process, collaboration frameworks, and shared opportunities.",
                  href: "/partner",
                },
              ].map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group rounded-3xl border border-[#0F172A]/10 bg-white/80 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                      {item.title}
                    </h3>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F59E0B]/15 text-[#F59E0B] transition-colors group-hover:bg-[#F59E0B]/25">
                      ↗
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#0F172A]/70">
                    {item.desc}
                  </p>
                  <div className="mt-5 text-sm font-semibold text-[#0F172A] group-hover:text-[#F59E0B]">
                    View details
                  </div>
                </a>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
