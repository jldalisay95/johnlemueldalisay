import { portfolio } from "../data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills and tools"
          title="A toolkit for public health data systems and implementation work"
          description="Grouped for fast scanning by scholarship reviewers, collaborators, public health teams, and technical partners."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.skills.map((group) => (
            <article key={group.title} className="card p-5">
              <h3 className="text-lg font-semibold leading-7 text-ink">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag bg-white">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
