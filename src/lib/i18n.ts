export const locales = ["en", "pt"] as const;
export const defaultLocale = "pt" as const;

const portugueseSpeakingCountries = new Set([
  "BR",
  "PT",
  "AO",
  "MZ",
  "CV",
  "GW",
  "ST",
  "TL"
]);

export type Locale = (typeof locales)[number];

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getPreferredLocale({
  country,
  acceptLanguage
}: {
  country?: string | null;
  acceptLanguage?: string | null;
}): Locale {
  if (country && portugueseSpeakingCountries.has(country.toUpperCase())) {
    return "pt";
  }

  if (acceptLanguage) {
    const normalized = acceptLanguage.toLowerCase();

    if (normalized.includes("pt")) {
      return "pt";
    }

    if (normalized.includes("en")) {
      return "en";
    }
  }

  return defaultLocale;
}
