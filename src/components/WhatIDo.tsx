import { portfolio } from "../data/portfolio";
import { icons } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function WhatIDo() {
  return (
    <section id="what-i-do" className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="What I do"
          title="A public health data systems practice"
          description="Short, practical service areas across digital health implementation, analytics, M&E, interoperability, research, and capacity building."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {portfolio.whatIDo.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title} className="card p-5 transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-health-mint text-health-teal">
                  <Icon aria-hidden="true" size={23} />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
