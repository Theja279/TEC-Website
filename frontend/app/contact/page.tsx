import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="pb-16 sm:pb-20">
          <Container>
            <SectionTitle
              eyebrow="Contact"
              title="Request program alignment with TEC"
              description="Send your details and we will respond with onboarding guidance tailored to the audience track you select."
            />

            <div className="mt-10 grid gap-6 lg:grid-cols-5">
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              <aside className="lg:col-span-2">
                <div className="rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur sm:p-8">
                  <div className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                    Office Information
                  </div>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#0F172A]/70">
                    <div>
                      <span className="font-semibold text-[#0F172A]">
                        Head Office:
                      </span>{" "}
                      Corporate Programs Division
                    </div>
                    <div>
                      <span className="font-semibold text-[#0F172A]">
                        Email:
                      </span>{" "}
                      hello@tec.example
                    </div>
                    <div>
                      <span className="font-semibold text-[#0F172A]">
                        Response:
                      </span>{" "}
                      Within 1–2 business days
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-[#0F172A]/10 bg-white/70 p-6 backdrop-blur sm:p-8">
                  <div className="font-[var(--font-poppins)] text-xl font-semibold text-[#0F172A]">
                    Map
                  </div>
                  <div className="mt-4 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-gradient-to-br from-[#0F172A] to-[#0F172A]/60">
                    <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                      <div className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                        Google Map Placeholder
                      </div>
                      <div className="mt-3 text-sm font-semibold text-white">
                        TEC office location will be embedded here.
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
