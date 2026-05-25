import { ExternalLink } from "lucide-react";
import { portfolio } from "../data/portfolio";
import { externalLinkProps, usableHref } from "../utils/links";
import { icons } from "./icons";
import { SectionHeading } from "./SectionHeading";

export function FeaturedWork() {
  return (
    <section id="featured-work" className="section-padding bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured work"
          title="Public health systems, dashboards, M&E, and interoperability"
          description="A practical portfolio of local government digital health implementation, routine reporting modernization, public dashboards, and standards-aware referral work."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {portfolio.featuredWork.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article key={item.title} className="card relative overflow-hidden p-5">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-health-teal via-health-blue to-health-green" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-health-mint text-health-teal">
                    <Icon aria-hidden="true" size={21} />
                  </div>
                  <p className="max-w-[11rem] text-right text-xs font-semibold uppercase tracking-[0.13em] text-health-teal">
                    {item.category}
                  </p>
                </div>
                {item.shortTitle ? <p className="mt-5 text-sm font-semibold text-health-blue">{item.shortTitle}</p> : null}
                <h3 className="mt-2 text-xl font-semibold leading-7 text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
                {item.role ? <p className="mt-4 text-sm leading-6 text-slate-500">{item.role}</p> : null}
                {item.links?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.links.map((link) => {
                      const href = usableHref(link.href);
                      if (!href) {
                        return (
                          <span key={link.label} className="tag bg-white text-slate-500">
                            {link.label}: pending
                          </span>
                        );
                      }

                      return (
                        <a
                          key={link.label}
                          href={href}
                          className="inline-flex items-center gap-1.5 rounded-full border border-health-teal/25 bg-white px-3 py-1.5 text-xs font-semibold text-health-teal transition hover:border-health-teal hover:bg-health-mint"
                          {...externalLinkProps(href)}
                        >
                          {link.label}
                          <ExternalLink aria-hidden="true" size={13} />
                        </a>
                      );
                    })}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
