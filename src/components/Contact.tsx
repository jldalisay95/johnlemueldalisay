import { Github, GraduationCap, Linkedin, Mail, MapPin, Network } from "lucide-react";
import { portfolio } from "../data/portfolio";
import {
  trackContentClick,
  trackContactEmailClick,
  trackProfileLinkClick,
  trackProjectLinkClick,
  trackResumeDownload,
} from "../lib/analytics";
import { externalLinkProps, usableHref } from "../utils/links";
import { SectionHeading } from "./SectionHeading";

function contactIcon(label: string) {
  if (label === "Email") return Mail;
  if (label === "LinkedIn") return Linkedin;
  if (label === "GitHub") return Github;
  if (label === "Google Scholar") return GraduationCap;
  if (label.includes("PeReF")) return Network;
  return Network;
}

function trackContactLink(label: string, href: string) {
  if (label === "Email") {
    trackContactEmailClick("contact_links");
    return;
  }

  if (label === "LinkedIn" || label === "GitHub" || label === "Google Scholar") {
    trackProfileLinkClick(label, href);
    return;
  }

  if (label.includes("PeReF")) {
    trackProjectLinkClick("PeReF / Philippine eReferral FHIR Implementation Guide", href);
    return;
  }

  if (label === "Frontiers Publication") {
    trackContentClick(label, "Frontiers", href);
  }
}

export function Contact() {
  const emailHref = `mailto:${portfolio.personalInfo.email}`;
  const primaryContactItems = [
    {
      label: "Email",
      value: portfolio.personalInfo.email,
      href: emailHref,
      icon: Mail,
    },
    {
      label: "LinkedIn",
      value: portfolio.personalInfo.linkedInUrl,
      href: portfolio.personalInfo.linkedInUrl,
      icon: Linkedin,
    },
    {
      label: "GitHub",
      value: portfolio.personalInfo.githubUrl,
      href: usableHref(portfolio.personalInfo.githubUrl),
      icon: Github,
    },
    {
      label: "Location",
      value: portfolio.personalInfo.location,
      href: undefined,
      icon: MapPin,
    },
  ];

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            eyebrow="Contact"
            title="Open to collaboration, scholarship review, consulting, and professional conversations"
            description="Reach out for digital health, public health data, health information systems, interoperability, M&E, implementation research, and capacity-building conversations. No visitor data is collected and there is no backend contact form."
          />

          <div className="space-y-6">
            <div className="card p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {primaryContactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <>
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-health-mint text-health-teal">
                        <Icon aria-hidden="true" size={21} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-500">{item.label}</p>
                        <p className="mt-1 break-words text-sm font-medium text-ink">{item.value}</p>
                      </div>
                    </>
                  );

                if (item.href) {
                  const href = item.href;
                  return (
                    <a
                      key={item.label}
                      href={href}
                      className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4 transition hover:border-health-teal hover:bg-health-mint/50"
                      onClick={() => {
                        if (item.label === "Email") {
                          trackContactEmailClick("contact_card");
                          return;
                        }

                        if (item.label === "LinkedIn" || item.label === "GitHub") {
                          trackProfileLinkClick(item.label, href);
                        }
                      }}
                      {...externalLinkProps(href)}
                    >
                      {content}
                    </a>
                  );
                }

                  return (
                    <div key={item.label} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                <a href={emailHref} className="button-primary" onClick={() => trackContactEmailClick("contact_cta")}>
                  <Mail aria-hidden="true" size={18} />
                  Send Email
                </a>
                <a
                  href={portfolio.personalInfo.resumeUrl}
                  download
                  className="button-secondary"
                  onClick={() => trackResumeDownload("contact")}
                >
                  Download Resume
                </a>
              </div>
              <p className="mt-3 text-sm text-slate-500">Public resume version. Full CV available upon request.</p>
            </div>

            <div className="card p-6 md:p-8">
              <p className="eyebrow">Find me online</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {portfolio.contactLinks.map((link) => {
                  const href = usableHref(link.href);
                  const Icon = contactIcon(link.label);

                  if (!href) {
                    return (
                      <span
                        key={link.label}
                        className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-medium text-slate-500"
                      >
                        <Icon aria-hidden="true" size={18} />
                        {link.label}: pending
                      </span>
                    );
                  }

                  return (
                    <a
                      key={link.label}
                      href={href}
                      className="inline-flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700 transition hover:border-health-teal hover:bg-health-mint/50 hover:text-health-teal"
                      onClick={() => trackContactLink(link.label, href)}
                      {...externalLinkProps(href)}
                    >
                      <Icon aria-hidden="true" size={18} />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
