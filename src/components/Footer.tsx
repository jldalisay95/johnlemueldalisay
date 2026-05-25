import { portfolio } from "../data/portfolio";
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
        <p className="text-sm text-slate-300">
          &copy; {year} {portfolio.personalInfo.name}. Built with GitHub Pages.
        </p>
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
