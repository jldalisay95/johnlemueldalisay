import { BookOpenCheck, Mic2, UsersRound } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function TrainingCommunity() {
  return (
    <section id="training" className="section-padding bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Training, community, and speaking"
          title="Capacity building, knowledge management, and technical community participation"
          description="Public-facing learning and community work is described without claiming formal certifications or private details."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-health-mint text-health-teal">
                <UsersRound aria-hidden="true" size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-health-teal">Training</p>
                <h3 className="text-2xl font-semibold text-ink">Coaching and capacity building</h3>
              </div>
            </div>
            <div className="mt-7 space-y-4">
              {portfolio.training.map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <h4 className="text-base font-semibold text-ink">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="card p-6 md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-health-sky text-health-blue">
                <Mic2 aria-hidden="true" size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-health-teal">Community</p>
                <h3 className="text-2xl font-semibold text-ink">Speaking and knowledge sharing</h3>
              </div>
            </div>
            <div className="mt-7 space-y-4">
              {portfolio.community.map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <div className="flex gap-3">
                    <BookOpenCheck aria-hidden="true" className="mt-1 shrink-0 text-health-teal" size={18} />
                    <div>
                      <h4 className="text-base font-semibold text-ink">{item.title}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
