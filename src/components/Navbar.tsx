import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "../data/portfolio";
import { icons } from "./icons";

const navItems = [
  { label: "Work", href: "#featured-work", id: "featured-work" },
  { label: "What I Do", href: "#what-i-do", id: "what-i-do" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Dashboards", href: "#dashboards", id: "dashboards" },
  { label: "Publications", href: "#publications", id: "publications" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Training", href: "#training", id: "training" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("featured-work");
  const MarkIcon = icons.heart;

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navigation = (
    <ul className="flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-1">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        return (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-full px-3 py-2 text-sm font-medium transition ${
                isActive ? "bg-health-teal text-white" : "text-slate-600 hover:bg-slate-100 hover:text-ink"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-health-teal focus:shadow-soft"
      >
        Skip to content
      </a>
      <nav className="container-shell flex min-h-20 items-center justify-between gap-4" aria-label="Primary">
        <a href="#hero" className="flex min-w-0 items-center gap-3 rounded-full pr-3 focus-visible:outline-health-teal">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-health-teal text-white shadow-soft">
            <MarkIcon aria-hidden="true" size={22} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-semibold text-ink">{portfolio.personalInfo.shortName}</span>
            <span className="block truncate text-xs text-slate-500">Digital Health Systems Portfolio</span>
          </span>
        </a>

        <div className="hidden xl:block">{navigation}</div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm xl:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-5 py-4 shadow-soft xl:hidden">
          {navigation}
        </div>
      ) : null}
    </header>
  );
}
