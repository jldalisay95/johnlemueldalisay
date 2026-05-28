type AnalyticsParamValue = string | number | boolean;
type AnalyticsParams = Record<string, AnalyticsParamValue>;

type GtagCommand = "config" | "event" | "js" | "set";
type GtagFunction = (command: GtagCommand, target: string | Date, params?: AnalyticsParams) => void;

declare global {
  interface Window {
    __portfolioGaInitialized?: boolean;
    __portfolioGaInitialPagePath?: string;
    dataLayer?: unknown[];
    gtag?: GtagFunction;
  }
}

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;
const GA_SCRIPT_ID = "ga4-gtag-script";
const VALID_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;
let isInitialized = false;
let lastTrackedPagePath: string | undefined;

function hasValidMeasurementId() {
  return Boolean(GA_MEASUREMENT_ID && VALID_MEASUREMENT_ID_PATTERN.test(GA_MEASUREMENT_ID));
}

function ensureGtag() {
  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: Parameters<GtagFunction>) {
      window.dataLayer?.push(args);
    };
}

function safeExternalUrl(url: string, mode: "full" | "origin-only" = "full") {
  try {
    const parsedUrl = new URL(url);
    if (mode === "origin-only") {
      return parsedUrl.origin;
    }

    return parsedUrl.toString();
  } catch {
    return "invalid_url";
  }
}

export function initGA() {
  if (typeof window === "undefined" || !hasValidMeasurementId()) {
    return;
  }

  ensureGtag();

  if (window.__portfolioGaInitialized) {
    isInitialized = true;
    lastTrackedPagePath = window.__portfolioGaInitialPagePath;
    return;
  }

  if (!document.getElementById(GA_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  if (isInitialized) {
    return;
  }

  window.gtag?.("js", new Date());
  isInitialized = true;
}

export function trackPageView(path?: string) {
  if (typeof window === "undefined" || !hasValidMeasurementId()) {
    return;
  }

  ensureGtag();
  const pagePath = path ?? `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (pagePath === lastTrackedPagePath) {
    return;
  }

  lastTrackedPagePath = pagePath;
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    allow_ad_personalization_signals: false,
    allow_google_signals: false,
    anonymize_ip: true,
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || !hasValidMeasurementId()) {
    return;
  }

  ensureGtag();
  window.gtag?.("event", eventName, params);
}

export function trackOutboundLink(label: string, url: string) {
  trackEvent("outbound_link_click", {
    link_label: label,
    url: safeExternalUrl(url),
  });
}

export function trackResumeDownload(location: string = "unknown") {
  trackEvent("resume_download", {
    file_name: "public_resume.pdf",
    location,
  });
}

export function trackDashboardClick(label: string, url: string) {
  trackEvent("dashboard_click", {
    dashboard_name: label,
    url: safeExternalUrl(url),
  });
}

export function trackProfileLinkClick(platform: string, url: string) {
  trackEvent("profile_link_click", {
    platform,
    url: safeExternalUrl(url, "origin-only"),
  });
}

export function trackProjectLinkClick(projectName: string, url: string) {
  trackEvent("project_link_click", {
    project_name: projectName,
    url: safeExternalUrl(url),
  });
}

export function trackContactEmailClick(location: string = "unknown") {
  trackEvent("contact_email_click", {
    location,
  });
}

export function trackContentClick(title: string, platform: string, url: string) {
  trackEvent("content_click", {
    title,
    platform,
    url: platform.toLowerCase().includes("linkedin") ? safeExternalUrl(url, "origin-only") : safeExternalUrl(url),
  });
}
