/**
 * Port location data for local-SEO landing pages (/ports/:portId).
 *
 * Each entry targets searches like "ship agent <port>" / "bunkering <port>".
 * Content is grounded in real data:
 *  - `serviceIds` reference the actual service catalog in ./services
 *  - `officeId` links to a real office in ./contact (address, phone, geo)
 *  - `facts` / `about` use published port-authority & terminal figures and
 *    well-established public facts about each port
 *
 * Ports without a physical office (Suez, Ain Sokhna) are presented as
 * operational coverage — no office address is claimed for them.
 */

export interface PortFact {
  label: string;
  value: string;
}

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
  /** "Port at a glance" specification rows. */
  facts: PortFact[];
  /** Longer factual description of the port. */
  about: string;
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
    facts: [
      { label: "Location", value: "Mediterranean coast, northern Egypt" },
      { label: "UN/LOCODE", value: "EGALY" },
      { label: "Harbours", value: "West Harbour (commercial) & East Harbour" },
      { label: "Max draft", value: "Up to ~14.5 m at container berths" },
      { label: "Cargo handled", value: "Containers, general cargo, grain, dry bulk, Ro-Ro" },
      { label: "Adjacent port", value: "El-Dekheila (deep-water steel & bulk)" },
    ],
    about:
      "The Port of Alexandria is Egypt's largest and oldest seaport, handling a major share of the country's foreign trade. Its West Harbour serves commercial shipping across container, general-cargo, grain and dry-bulk terminals, while the adjacent El-Dekheila port adds deeper berths for steel, coal and bulk cargo. Together they form the primary Mediterranean gateway for goods moving to and from Cairo and the Nile Delta, making Alexandria the natural base for our headquarters and round-the-clock operations team.",
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
    facts: [
      { label: "Location", value: "Northern (Mediterranean) mouth of the Suez Canal" },
      { label: "UN/LOCODE", value: "EGPSD" },
      { label: "Key terminal", value: "Suez Canal Container Terminal (SCCT / APM Terminals)" },
      { label: "Quay & draft", value: "~3,400 m quay, dredged to ~17 m" },
      { label: "Vessels", value: "Ultra-large container & canal-transit vessels" },
      { label: "Cargo handled", value: "Container transshipment, general & project cargo" },
    ],
    about:
      "Port Said sits at the northern, Mediterranean mouth of the Suez Canal — one of the world's busiest maritime crossroads. East Port Said is home to the Suez Canal Container Terminal (SCCT), a deep-water transshipment hub with roughly 3,400 metres of quay and around 17 m of draft, capable of handling the largest container ships afloat, while West Port Said serves general and project cargo. Its position makes it a critical calling point for lines transiting the canal and a strategic base for our transit-support team.",
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
    facts: [
      { label: "Location", value: "Southern Suez Canal, Suez Bay (~130 km east of Cairo)" },
      { label: "UN/LOCODE", value: "EGSUZ (Adabiya: EGADA)" },
      { label: "Terminals", value: "Adabiya, Port Tewfik & Port Ibrahim" },
      { label: "Berths & draft", value: "~9–10 berths at Adabiya, ~8–12 m draft" },
      { label: "Cargo handled", value: "Dry & liquid bulk, grain, cement, steel, Ro-Ro, break-bulk" },
      { label: "Operations", value: "24 hours" },
    ],
    about:
      "Suez marks the southern end of the Suez Canal on Suez Bay, around 130 km east of Cairo. The complex includes Adabiya port — nine to ten berths handling grain, cement, steel, urea and bulk cargoes around the clock — together with Port Tewfik and Port Ibrahim for general, passenger and tanker traffic. It is the natural staging point for vessels forming southbound canal convoys and for supply runs to the Gulf of Suez energy sector.",
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
    facts: [
      { label: "Location", value: "Mediterranean coast, eastern Nile Delta" },
      { label: "UN/LOCODE", value: "EGDAM" },
      { label: "Berths", value: "14 main berths, >4.5 km of quay" },
      { label: "Max draft", value: "~14.5–16.5 m (new terminal up to ~18 m)" },
      { label: "Vessels", value: "Container ships up to ~400 m LOA" },
      { label: "Cargo handled", value: "Containers, grain, fertilizers, timber, general cargo" },
    ],
    about:
      "Damietta is a major Mediterranean cargo and container port on the eastern edge of the Nile Delta. With 14 main berths and more than 4.5 km of quay, it handles container vessels up to 400 m in length alongside grain, fertilizer, timber and general-cargo trades. Ongoing terminal expansion — with drafts reaching around 18 m — is making Damietta one of the deepest container gateways in the eastern Mediterranean, supported on the ground by our local office and yard.",
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
    facts: [
      { label: "Location", value: "Gulf of Suez, ~43 km south of Suez (~120 km from Cairo)" },
      { label: "UN/LOCODE", value: "EGSOK" },
      { label: "Operator", value: "DP World Sokhna" },
      { label: "Draft", value: "~17–18 m" },
      { label: "Vessels", value: "Container ships up to ~400 m LOA" },
      { label: "Cargo handled", value: "Containers, dry bulk, project & offshore cargo" },
    ],
    about:
      "Ain Sokhna is a deep-water port on the western shore of the Gulf of Suez and the closest sea gateway to Greater Cairo. Operated by DP World, its basins offer roughly 17–18 m of draft and berths able to receive the largest container vessels, alongside strong bulk and project-cargo trades. Its position makes it the hub for Red Sea traffic and a key node in Egypt's offshore energy supply chain — where our logistics-base and vessel-support services are focused.",
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
    facts: [
      { label: "Location", value: "Abu Qir Bay, ~20 km east of Alexandria" },
      { label: "Our facility", value: "Max Marine Group's primary logistics base & yard" },
      { label: "Storage", value: "Secure open & covered storage, pipe/tubular yard" },
      { label: "Equipment", value: "Heavy lifting, DNV offshore containers, workshop" },
      { label: "Focus", value: "Offshore & project logistics, petroleum support" },
      { label: "Security", value: "24-hour" },
    ],
    about:
      "Abu Qir lies on the bay just east of Alexandria and is a focal point for Egypt's offshore gas and petroleum activity. It is home to Max Marine Group's primary logistics base and yard, providing secure storage, cargo handling, DNV-certified offshore containers, a pipe yard and equipment support for offshore and marine operations across the Abu Qir and Alexandria area.",
    serviceIds: ["logistics-base", "containers-baskets", "rental-equipment", "warehousing", "vessel-attendance", "waste-management"],
    officeId: "abu-qir",
  },
];

export function getLocationById(id: string): LocationData | undefined {
  return locations.find((l) => l.id === id);
}
