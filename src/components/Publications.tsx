import { ExternalLink } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { externalLinkProps, usableHref } from "../utils/links";
import { SectionHeading } from "./SectionHeading";

function ExternalAction({ href, label }: { href: string; label: string }) {
  const usable = usableHref(href);
  if (!usable) {
    return (
      <span className="tag bg-white text-slate-500" aria-label={`${label} pending`}>
        {label}: pending
      </span>
    );
  }

  return (
    <a
      href={usable}
      className="inline-flex items-center gap-1.5 rounded-full border border-health-teal/25 bg-white px-3 py-1.5 text-xs font-semibold text-health-teal transition hover:border-health-teal hover:bg-health-mint"
      {...externalLinkProps(usable)}
    >
      {label}
      <ExternalLink aria-hidden="true" size={13} />
    </a>
  );
}

export function Publications() {
  return (
    <section id="publications" className="section-padding bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Articles, publications, and presentations"
          title="Research, public writing, and professional presentations"
          description="Public-facing evidence and communication work across mathematical modeling, dashboards, local health systems, referrals, and implementation research."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <div className="space-y-6">
            <section aria-labelledby="peer-reviewed-heading" className="card p-6">
              <p className="eyebrow" id="peer-reviewed-heading">
                Peer-reviewed publication
              </p>
              {portfolio.publications.map((publication) => (
                <article key={publication.title} className="mt-5">
                  <h3 className="text-2xl font-semibold leading-8 text-ink">{publication.title}</h3>
                  <p className="mt-3 text-sm font-semibold text-health-teal">{publication.journal}</p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{publication.description}</p>
                  <p className="mt-4 text-sm text-slate-500">DOI: {publication.doi}</p>
                  <div className="mt-5">
                    <ExternalAction href={publication.url} label="Open publication" />
                  </div>
                </article>
              ))}
            </section>

            <section aria-labelledby="articles-heading" className="card p-6">
              <p className="eyebrow" id="articles-heading">
                Articles and public posts
              </p>
              <div className="mt-5 grid gap-4">
                {portfolio.articles.map((article) => (
                  <article key={article.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-health-teal">{article.platform}</p>
                    <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">{article.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{article.description}</p>
                    <div className="mt-4">
                      <ExternalAction href={article.url} label="Open article" />
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <section aria-labelledby="presentations-heading" className="card p-6">
            <p className="eyebrow" id="presentations-heading">
              Presentations
            </p>
            <div className="mt-5 space-y-4">
              {portfolio.presentations.map((presentation) => (
                <article key={presentation.title} className="rounded-lg border border-slate-200 bg-white p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-health-teal">{presentation.type}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">{presentation.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{presentation.event}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    {presentation.location ? `${presentation.location} · ` : ""}
                    {presentation.date}
                  </p>
                  <div className="mt-4">
                    <ExternalAction href={presentation.link} label="Presentation link" />
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
