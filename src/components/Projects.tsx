import { ExternalLink } from "lucide-react";
import { portfolio, type ProjectItem } from "../data/portfolio";
import { externalLinkProps, usableHref } from "../utils/links";
import { SectionHeading } from "./SectionHeading";

function visibilityClass(visibility: ProjectItem["visibility"]) {
  if (visibility === "Public") return "border-emerald-200 bg-emerald-50 text-emerald-800";
  if (visibility === "Public links available") return "border-blue-200 bg-blue-50 text-blue-800";
  if (visibility === "Internal") return "border-slate-200 bg-slate-100 text-slate-600";
  return "border-amber-200 bg-amber-50 text-amber-800";
}

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-slate-50">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Signature projects"
          title="Editable project case studies with public-safety context"
          description="Each card separates role, tools, visibility, and source notes so public-facing details stay accurate and safe to share."
        />

        <div className="mt-10 grid gap-6">
          {portfolio.projects.map((project) => (
            <article key={project.title} className="card overflow-hidden">
              <div className="grid min-h-full lg:grid-cols-[0.36fr_0.64fr]">
                <div className="border-b border-slate-200 bg-white p-6 lg:border-b-0 lg:border-r">
                  <div className="flex flex-wrap gap-2">
                    <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${visibilityClass(project.visibility)}`}>
                      {project.visibility}
                    </span>
                    <span className="tag bg-slate-50">{project.category}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold leading-8 text-ink">{project.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{project.description}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Status</p>
                  <p className="mt-2 text-sm text-slate-600">{project.status}</p>
                </div>

                <div className="p-6 md:p-8">
                  <dl className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Role</dt>
                      <dd className="mt-2 text-sm leading-6 text-slate-700">{project.role}</dd>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                      <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Source note</dt>
                      <dd className="mt-2 text-sm leading-6 text-slate-600">{project.sourceNote}</dd>
                    </div>
                  </dl>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Tools</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="tag bg-white">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">Links</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.links.map((link) => {
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
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
