import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Experience timeline"
          title="Experience across health systems, analytics, research, and capacity building"
          description="Roles and dates are based on the information provided for this portfolio upgrade."
        />

        <div className="mt-12">
          <ol className="relative space-y-6 border-l border-slate-200 pl-6 md:pl-8">
            {portfolio.experience.map((item) => (
              <li key={`${item.title}-${item.period}`} className="relative">
                <span className="absolute -left-[2.13rem] top-7 h-4 w-4 rounded-full border-4 border-white bg-health-teal shadow-sm md:-left-[2.63rem]" />
                <article className="card p-5 md:p-6">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-health-teal">{item.period}</p>
                      <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium text-slate-500">{item.organization}</p>
                    </div>
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
