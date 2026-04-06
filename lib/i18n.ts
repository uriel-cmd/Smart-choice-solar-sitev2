export type Locale = "en" | "es";

export const defaultLocale: Locale = "en";
export const locales: Locale[] = ["en", "es"];

export function getLocaleFromPathname(pathname: string): Locale {
  return pathname === "/es" || pathname.startsWith("/es/") ? "es" : "en";
}

export function stripLocalePrefix(pathname: string) {
  if (pathname === "/es") {
    return "/";
  }

  if (pathname.startsWith("/es/")) {
    return pathname.replace(/^\/es/, "") || "/";
  }

  return pathname || "/";
}

export function localizeHref(href: string, locale: Locale) {
  if (typeof href !== "string") {
    return locale === "es" ? "/es" : "/";
  }

  if (!href || href.startsWith("http") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) {
    return href;
  }

  const [path, query = ""] = href.split("?");
  const normalizedPath = stripLocalePrefix(path || "/");
  const localizedPath = locale === "es" ? (normalizedPath === "/" ? "/es" : `/es${normalizedPath}`) : normalizedPath;

  return query ? `${localizedPath}?${query}` : localizedPath;
}

export function buildLocaleAlternates(path: string) {
  const normalizedPath = stripLocalePrefix(path);
  const enPath = normalizedPath;
  const esPath = normalizedPath === "/" ? "/es" : `/es${normalizedPath}`;

  return {
    "en-US": enPath,
    "es-US": esPath,
    "x-default": enPath
  };
}
