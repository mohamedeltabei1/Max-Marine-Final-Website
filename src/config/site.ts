/**
 * Central site configuration.
 *
 * Single source of truth for the canonical domain, brand strings, and the
 * organisation details used to build meta tags and JSON-LD structured data.
 * Change the domain in ONE place here instead of hardcoding it across files.
 */

/** Canonical production origin. No trailing slash. */
export const SITE_URL = "https://maxmarinegroup.com";

export const SITE_NAME = "Max Marine Group";

/** Default title shown when a page does not set its own. */
export const DEFAULT_TITLE =
  "Max Marine Group | Marine Agency & Offshore Support in Egypt";

export const DEFAULT_DESCRIPTION =
  "Max Marine Group is a leading Egyptian marine agency providing ship agency, Suez Canal transit, port husbandry, offshore logistics and QHSE support across every major Egyptian port.";

/** Default social share image (must exist in /public). 1200x630 recommended. */
export const DEFAULT_OG_IMAGE = "/og-max-marine.jpg";

/** Ports/areas served — used for LocalBusiness areaServed and copy. */
export const PORTS_SERVED = [
  "Alexandria",
  "El-Dekheila",
  "Abu Qir",
  "Port Said",
  "Damietta",
  "Suez",
  "Ain Sokhna",
  "Safaga",
] as const;

/**
 * Build an absolute URL from a site-relative path.
 * `abs("/services")` -> "https://maxmarinegroup.com/services"
 */
export function abs(path = "/"): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
