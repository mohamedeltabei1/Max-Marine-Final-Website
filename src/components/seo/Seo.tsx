import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  DEFAULT_TITLE,
  DEFAULT_DESCRIPTION,
  DEFAULT_OG_IMAGE,
  abs,
} from "@/config/site";

export interface SeoProps {
  /** Page title WITHOUT the brand suffix (it is appended automatically). */
  title?: string;
  /** Meta description for this page (aim ~150-160 chars). */
  description?: string;
  /**
   * Site-relative path for this page, e.g. "/services/bunkering".
   * Drives the canonical URL and og:url — this is what fixes duplicate-content
   * signals where every page previously pointed at the homepage.
   */
  path: string;
  /** Absolute or site-relative social share image. */
  image?: string;
  /** Open Graph type. "website" for most pages, "article" for posts. */
  type?: "website" | "article" | "profile";
  /** Set true on pages that should not be indexed (404, thin utility pages). */
  noindex?: boolean;
  /** One or more JSON-LD structured-data objects to embed. */
  schema?: object | object[];
}

/**
 * Per-page <head> manager. Renders a unique title, description, canonical URL,
 * Open Graph / Twitter tags and optional JSON-LD for the current route.
 *
 * Usage: place near the top of a page component:
 *   <Seo title="Ship Agency" description="..." path="/services" schema={...} />
 */
export function Seo({
  title,
  description = DEFAULT_DESCRIPTION,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noindex = false,
  schema,
}: SeoProps) {
  const fullTitle = !title
    ? DEFAULT_TITLE
    : title.includes(SITE_NAME)
      ? title
      : `${title} | ${SITE_NAME}`;

  const canonical = abs(path);
  const ogImage = abs(image);
  const schemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large" />
      )}

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
