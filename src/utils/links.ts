export function isPlaceholder(value?: string) {
  return !value || value.includes("[INSERT");
}

export function isExternalUrl(value?: string) {
  return Boolean(value && /^https?:\/\//i.test(value));
}

export function isMailAddress(value?: string) {
  return Boolean(value && !isPlaceholder(value) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
}

export function usableHref(value?: string) {
  if (!value || isPlaceholder(value)) {
    return undefined;
  }

  return value;
}

export function externalLinkProps(href?: string) {
  if (!isExternalUrl(href)) {
    return {};
  }

  return {
    target: "_blank",
    rel: "noreferrer",
  };
}
