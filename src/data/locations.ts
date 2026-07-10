/**
 * Port location data for local-SEO landing pages (/ports/:portId).
 *
 * Each entry targets searches like "ship agent <port>" / "bunkering <port>".
 * Content is grounded in real data:
 *  - `serviceIds` reference the actual service catalog in ./services
 *  - `officeId` links to a real office in ./contact (address, phone, geo)
 *  - `geoFact` states only well-established public facts about the port
 *
 * Ports without a physical office (Suez, Ain Sokhna) are presented as
 * operational coverage — no office address is claimed for them.
 */

export interface LocationData {
  id: string;
  port: string;
  displayName: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  geoFact: string;
  /** Ids from src/data/services.ts offered at this port. */
  serviceIds: string[];
  /** Id from src/data/contact.ts offices, when a branch exists here. */
  officeId?: string;
}

export const locations: LocationData[] = [
  {
    id: "alexandria",
    port: "Alexandria",
    displayName: "Port of Alexandria",
    region: "Mediterranean Coast",
    metaTitle: "Ship Agency & Marine Services in Alexandria",
    metaDescription:
      "Ship agency, vessel attendance, husbandry, bunkering, customs clearance and cargo services at the Port of Alexandria — Max Marine Group's headquarters and 24/7 operations base.",
    headline: "Marine Agency & Ship Services at the Port of Alexandria",
    intro:
      "As Max Marine Group's headquarters, our Alexandria team delivers full ship-agency and offshore-support services at Egypt's busiest Mediterranean port. From pre-arrival planning to departure clearance, we coordinate every aspect of your port call at Alexandria and neighbouring El-Dekheila.",
    geoFact:
      "Alexandria is Egypt's largest seaport and its principal gateway on the Mediterranean, handling a major share of the country's foreign trade.",
    serviceIds: ["vessel-attendance", "cargo-freight", "husbandry", "bunkering", "ship-chandler", "customs-clearance", "warehousing", "waste-management"],
    officeId: "alexandria-hq",
  },
  {
    id: "port-said",
    port: "Port Said",
    displayName: "Port of Port Said",
    region: "Suez Canal — North",
    metaTitle: "Ship Agency & Suez Canal Transit at Port Said",
    metaDescription:
      "Vessel attendance, Suez Canal transit support, husbandry, bunkering and cargo services at Port Said, the northern entrance of the Suez Canal. Local Max Marine Group office.",
    headline: "Ship Agency & Suez Canal Services at Port Said",
    intro:
      "Our Port Said office supports vessels calling at the northern gateway of the Suez Canal. We handle port calls, transit coordination, crew changes and cargo formalities for shipping lines and charterers moving through one of the world's busiest maritime corridors.",
    geoFact:
      "Port Said lies at the northern, Mediterranean entrance to the Suez Canal, making it a key transit and container hub.",
    serviceIds: ["vessel-attendance", "suez-transit", "husbandry", "bunkering", "cargo-freight", "customs-clearance"],
    officeId: "port-said",
  },
  {
    id: "suez",
    port: "Suez & Suez Canal",
    displayName: "Suez",
    region: "Suez Canal — South",
    metaTitle: "Suez Canal Transit & Ship Agency at Suez",
    metaDescription:
      "Suez Canal transit support, vessel attendance, husbandry and bunkering at Suez — the southern end of the Suez Canal on the Gulf of Suez. Coordinated by Max Marine Group.",
    headline: "Suez Canal Transit & Ship Agency at Suez",
    intro:
      "Max Marine Group provides transit and ship-agency support at Suez, the southern end of the Suez Canal. We coordinate with the Suez Canal Authority and local service providers for canal convoys, crew changes and vessel supply for ships transiting between the Mediterranean and the Red Sea.",
    geoFact:
      "Suez sits at the southern end of the Suez Canal on the Gulf of Suez, serving canal transit traffic and the Gulf's energy sector.",
    serviceIds: ["suez-transit", "vessel-attendance", "husbandry", "bunkering", "logistics-base", "government-permits"],
  },
  {
    id: "damietta",
    port: "Damietta",
    displayName: "Port of Damietta",
    region: "Mediterranean Coast",
    metaTitle: "Ship Agency & Cargo Services at Damietta Port",
    metaDescription:
      "Vessel attendance, cargo and freight forwarding, husbandry, bunkering and customs clearance at Damietta Port. Local Max Marine Group office and yard facility.",
    headline: "Ship Agency & Cargo Services at Damietta Port",
    intro:
      "Our Damietta office and yard support container, bulk and project-cargo vessels calling at this major Mediterranean port on the eastern Nile Delta. We manage port calls, cargo documentation, storage and offshore logistics for operators working the Damietta area.",
    geoFact:
      "Damietta is a major Mediterranean cargo and container port on the eastern edge of the Nile Delta.",
    serviceIds: ["vessel-attendance", "cargo-freight", "husbandry", "bunkering", "customs-clearance", "warehousing"],
    officeId: "damietta",
  },
  {
    id: "ain-sokhna",
    port: "Ain Sokhna",
    displayName: "Port of Ain Sokhna",
    region: "Gulf of Suez / Red Sea",
    metaTitle: "Offshore Support & Ship Agency at Ain Sokhna",
    metaDescription:
      "Vessel attendance, offshore logistics, husbandry, bunkering and equipment supply at Ain Sokhna, a deepwater Gulf of Suez port serving Red Sea trade and offshore energy.",
    headline: "Offshore Support & Ship Agency at Ain Sokhna",
    intro:
      "Max Marine Group supports vessels and offshore projects at Ain Sokhna, a deepwater port on the Gulf of Suez. Our team provides ship attendance, logistics-base services, crew support and equipment supply for the Red Sea trade and the offshore energy sector.",
    geoFact:
      "Ain Sokhna is a deepwater port on the Gulf of Suez, serving Red Sea trade and the offshore energy industry.",
    serviceIds: ["vessel-attendance", "logistics-base", "husbandry", "bunkering", "containers-baskets", "manpower"],
  },
  {
    id: "abu-qir",
    port: "Abu Qir",
    displayName: "Abu Qir",
    region: "Mediterranean Coast",
    metaTitle: "Logistics Base & Marine Support at Abu Qir",
    metaDescription:
      "Logistics base, offshore containers, equipment rental, warehousing and vessel support at Abu Qir, east of Alexandria. Max Marine Group's primary yard and logistics facility.",
    headline: "Logistics Base & Offshore Support at Abu Qir",
    intro:
      "Abu Qir is home to Max Marine Group's primary logistics base and yard. We provide storage, handling, DNV-certified offshore containers, equipment rental and vessel support for offshore and marine operations east of Alexandria.",
    geoFact:
      "Abu Qir lies just east of Alexandria and supports offshore operations and project logistics.",
    serviceIds: ["logistics-base", "containers-baskets", "rental-equipment", "warehousing", "vessel-attendance", "waste-management"],
    officeId: "abu-qir",
  },
];

export function getLocationById(id: string): LocationData | undefined {
  return locations.find((l) => l.id === id);
}
