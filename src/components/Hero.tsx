import { MapPin } from "lucide-react";
import healthDataFlow from "../assets/health-data-flow.svg";
import { portfolio } from "../data/portfolio";
import { trackEvent, trackProfileLinkClick, trackProjectLinkClick, trackResumeDownload } from "../lib/analytics";
import { externalLinkProps, usableHref } from "../utils/links";
import { icons } from "./icons";

function actionClass(variant: "primary" | "secondary" | "ghost") {
  if (variant === "primary") {
    return "button-primary";
  }

  if (variant === "secondary") {
    return "button-secondary";
  }

  return "button-ghost";
}

function secondaryIcon(label: string) {
  if (label === "LinkedIn") return icons.linkedin;
  if (label === "GitHub") return icons.github;
  if (label === "Google Scholar") return icons.graduation;
  return icons.network;
}

function trackHeroAction(label: string) {
  if (label === "Download Resume") {
    trackResumeDownload("hero");
  }

  if (label === "View My Work") {
    trackEvent("section_view", { section_name: "featured-work" });
  }

  if (label === "Contact Me") {
    trackEvent("section_view", { section_name: "contact" });
  }
}

function trackHeroSecondaryLink(label: string, href: string) {
  if (label === "LinkedIn" || label === "GitHub" || label === "Google Scholar") {
    trackProfileLinkClick(label, href);
    return;
  }

  if (label === "PeReF FHIR IG") {
    trackProjectLinkClick("PeReF / Philippine eReferral FHIR Implementation Guide", href);
  }
}

export function Hero() {
  const resumeAction = portfolio.hero.actions.find((action) => action.label === "Download Resume");

  return (
    <section id="hero" className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 dashboard-grid opacity-60" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-slate-50 to-transparent" aria-hidden="true" />
      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-14 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="eyebrow">Digital Health Systems Portfolio</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-normal text-ink sm:text-5xl lg:text-5xl">
            {portfolio.hero.headline}
          </h1>
          <p className="mt-5 text-xl font-semibold leading-8 text-health-teal md:text-2xl">
            {portfolio.personalInfo.heroSubheadline}
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">{portfolio.hero.statement}</p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">{portfolio.hero.intro}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">{portfolio.hero.profileSummary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            {portfolio.hero.actions.map((action) => {
              const Icon = icons[action.icon];
              return (
                <a
                  key={action.label}
                  href={action.href}
                  className={actionClass(action.variant)}
                  download={action.label === "Download Resume" ? true : undefined}
                  onClick={() => trackHeroAction(action.label)}
                >
                  <Icon aria-hidden="true" size={18} />
                  {action.label}
                </a>
              );
            })}
          </div>

          {resumeAction?.note ? <p className="mt-3 text-sm text-slate-500">{resumeAction.note}</p> : null}

          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-slate-600">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2">
              <MapPin aria-hidden="true" size={17} className="text-health-green" />
              {portfolio.personalInfo.location}
            </span>
            {portfolio.hero.secondaryLinks.map((link) => {
              const Icon = secondaryIcon(link.label);
              const href = usableHref(link.href);

              if (!href) {
                return (
                  <span
                    key={link.label}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-slate-500"
                    aria-label={`${link.label} link pending`}
                  >
                    <Icon aria-hidden="true" size={17} />
                    {link.label}
                  </span>
                );
              }

              return (
                <a
                  key={link.label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 font-medium text-slate-700 transition hover:border-health-teal hover:text-health-teal"
                  onClick={() => trackHeroSecondaryLink(link.label, href)}
                  {...externalLinkProps(href)}
                >
                  <Icon aria-hidden="true" size={17} />
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="card overflow-hidden p-4 md:p-5">
            <img
              src={healthDataFlow}
              alt="Dashboard-style public health data flow connecting health systems, FHIR, referrals, monitoring and evaluation, and analytics."
              className="h-auto w-full rounded-lg"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {portfolio.hero.focusAreas.map((area) => (
                <div key={area} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3">
                  <p className="text-sm font-semibold text-ink">{area}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="absolute -right-4 -top-4 hidden rounded-lg border border-emerald-200 bg-white px-4 py-3 text-sm font-semibold text-health-green shadow-soft sm:block">
            South Cotabato, Philippines
          </div>
          <div className="absolute -bottom-5 left-6 hidden rounded-lg border border-blue-200 bg-white px-4 py-3 text-sm font-semibold text-health-blue shadow-soft md:block">
            Digital health · Data use · Interoperability
          </div>
        </div>
      </div>
    </section>
  );
}
