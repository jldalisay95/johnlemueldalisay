import { portfolio } from "../data/portfolio";
import { trackProfileLinkClick, trackResumeDownload } from "../lib/analytics";
import { externalLinkProps, usableHref } from "../utils/links";

export function Footer() {
  const year = new Date().getFullYear();
  const footerLinks = [
    { label: "LinkedIn", href: portfolio.personalInfo.linkedInUrl },
    { label: "Google Scholar", href: portfolio.personalInfo.googleScholarUrl },
    { label: "GitHub", href: portfolio.personalInfo.githubUrl },
    { label: "Resume", href: portfolio.personalInfo.resumeUrl },
  ];

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-white">
      <div className="container-shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm text-slate-300">
            &copy; {year} {portfolio.personalInfo.name}. Built with GitHub Pages.
          </p>
          <p className="mt-2 text-xs leading-5 text-slate-400">
            This site uses Google Analytics to understand aggregate portfolio traffic and improve content. No contact
            forms, accounts, or sensitive personal data are collected.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          {footerLinks.map((link) => {
            const href = usableHref(link.href);
            if (!href) {
              return (
                <span key={link.label} className="text-sm text-slate-500">
                  {link.label}
                </span>
              );
            }

            return (
              <a
                key={link.label}
                href={href}
                className="text-sm font-medium text-slate-300 transition hover:text-white"
                download={link.label === "Resume" ? true : undefined}
                onClick={() => {
                  if (link.label === "Resume") {
                    trackResumeDownload("footer");
                    return;
                  }

                  trackProfileLinkClick(link.label, href);
                }}
                {...externalLinkProps(href)}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
