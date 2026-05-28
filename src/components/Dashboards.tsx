import { ExternalLink } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { trackDashboardClick } from "../lib/analytics";
import { SectionHeading } from "./SectionHeading";

export function Dashboards() {
  return (
    <section id="dashboards" className="section-padding bg-white">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Dashboards and data products"
          title="Practical public health analytics outputs"
          description="Public links are shown without embedding dashboards directly. Some dashboards may depend on public sharing settings or may be archived."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {portfolio.dashboards.map((dashboard) => (
            <article key={dashboard.title} className="card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-health-teal">{dashboard.type}</p>
              <h3 className="mt-3 text-xl font-semibold leading-7 text-ink">{dashboard.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{dashboard.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {dashboard.tools.map((tool) => (
                  <span key={tool} className="tag bg-slate-50">
                    {tool}
                  </span>
                ))}
              </div>
              <p className="mt-5 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs leading-5 text-amber-900">
                {dashboard.privacyNote}
              </p>
              <a
                href={dashboard.url}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-health-teal px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackDashboardClick(dashboard.title, dashboard.url)}
              >
                Open Dashboard
                <ExternalLink aria-hidden="true" size={15} />
              </a>
            </article>
          ))}
        </div>

        <p className="mt-6 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-600">
          Dashboard links are provided where publicly accessible. Some dashboards may depend on public sharing settings or
          may be archived.
        </p>
      </div>
    </section>
  );
}
