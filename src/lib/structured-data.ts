/**
 * JSON-LD structured data builders (schema.org).
 *
 * These produce plain objects that get serialised into <script type="application/ld+json">
 * by the <Seo> component. Structured data helps Google understand the business
 * (Organization / LocalBusiness), individual services, breadcrumbs and FAQs, and
 * can unlock rich results in the SERP.
 */

import { SITE_NAME, SITE_URL, PORTS_SERVED, abs } from "@/config/site";
import { offices, mainContact, socialMedia } from "@/data/contact";

const HQ = offices[0]; // Alexandria headquarters
const ORG_ID = `${SITE_URL}/#organization`;

/** Reference used by other schemas to point back at the Organization node. */
const orgRef = { "@id": ORG_ID };

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE_NAME,
    legalName: "Max Marine S.A.E.",
    url: SITE_URL,
    logo: abs("/logo.png"),
    image: abs("/og-max-marine.jpg"),
    description:
      "Egyptian marine agency and offshore support group providing ship agency, Suez Canal transit, husbandry, logistics and QHSE services across all major Egyptian ports.",
    foundingDate: "1972",
    email: mainContact.email,
    telephone: mainContact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: HQ.address,
      addressLocality: "Alexandria",
      addressCountry: "EG",
    },
    areaServed: PORTS_SERVED.map((name) => ({ "@type": "City", name })),
    sameAs: Object.values(socialMedia),
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: mainContact.phone,
        contactType: "customer service",
        email: mainContact.email,
        areaServed: "EG",
        availableLanguage: ["en", "ar"],
      },
      {
        "@type": "ContactPoint",
        telephone: mainContact.emergencyPhone,
        contactType: "emergency",
        contactOption: "TollFree",
        areaServed: "EG",
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: orgRef,
    inLanguage: "en",
  };
}

/**
 * LocalBusiness node for the headquarters — strengthens local SEO signals
 * (address, geo-coordinates, opening hours).
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: abs("/og-max-marine.jpg"),
    url: SITE_URL,
    telephone: HQ.phone,
    email: HQ.email,
    parentOrganization: orgRef,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: HQ.address,
      addressLocality: "Alexandria",
      addressCountry: "EG",
    },
    ...(HQ.coordinates && {
      geo: {
        "@type": "GeoCoordinates",
        latitude: HQ.coordinates.lat,
        longitude: HQ.coordinates.lng,
      },
    }),
    areaServed: PORTS_SERVED.map((name) => ({ "@type": "City", name })),
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    serviceType: service.name,
    url: abs(service.path),
    provider: orgRef,
    areaServed: PORTS_SERVED.map((name) => ({ "@type": "City", name })),
  };
}

/** Service node scoped to a single port — used by the /ports/:id location pages. */
export function portServiceSchema(location: {
  id: string;
  port: string;
  displayName: string;
  metaDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Marine & Ship Agency Services at ${location.displayName}`,
    description: location.metaDescription,
    serviceType: "Marine agency and offshore support",
    url: abs(`/ports/${location.id}`),
    provider: orgRef,
    areaServed: { "@type": "City", name: location.port },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: abs(item.path),
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
