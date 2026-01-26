import { LucideIcon, Ship, Anchor, Building, Fuel, Plane } from "lucide-react";

export interface CompanyData {
  id: string;
  name: string;
  shortName: string;
  legalNote?: string;
  subtitle: string;
  description: string;
  overview: string;
  established: string;
  coreServices: string[];
  locations: string[];
  href: string;
  icon: LucideIcon;
  keyCapabilities: { title: string; description: string }[];
  howToEngage: string[];
  contactEmail: string;
  contactPhone: string;
}

export const companies: CompanyData[] = [
  {
    id: "max-marine",
    name: "Max Marine S.A.E.",
    shortName: "Max Marine",
    legalNote: "S.A.E. (Société Anonyme Égyptienne) is the Egyptian legal registration form for joint-stock companies, equivalent to a public limited company.",
    subtitle: "Shipping Agencies & Oil Services",
    description: "The flagship company of Max Marine Group, providing comprehensive maritime agency services and oil industry support across Egypt's major ports since 1972.",
    overview: "Max Marine S.A.E. is the founding company of Max Marine Group, established in 1972. Operating from our Alexandria headquarters, we provide full-service shipping agency representation across all Egyptian ports. Our shipping agency division handles vessel attendance, cargo operations, and husbandry services for international shipping lines and charterers. Our oil services division supports the petroleum sector with logistics, crew changes, and operational coordination for offshore and onshore operations.",
    established: "1972",
    coreServices: [
      "Vessel Attendance",
      "Cargo & Freight Forwarding",
      "Husbandry Services",
      "Oil & Gas Logistics",
      "Suez Canal Transit",
      "Customs Clearance"
    ],
    locations: ["Alexandria (HQ)", "Abu Qir", "Port Said", "Damietta", "Suez"],
    href: "/companies/max-marine",
    icon: Ship,
    keyCapabilities: [
      { title: "Full Port Coverage", description: "Presence at all major Egyptian ports with 24/7 operational capability" },
      { title: "Oil Sector Expertise", description: "Decades of experience supporting EGPC contractors and international operators" },
      { title: "Integrated Services", description: "Single-point contact for complete port call requirements" },
      { title: "Documentation Excellence", description: "Efficient handling of all port and customs formalities" }
    ],
    howToEngage: [
      "Vessel nomination with ETA and service requirements",
      "Cargo details and documentation for freight forwarding",
      "Crew manifest for husbandry services",
      "Project scope for oil services support"
    ],
    contactEmail: "agency@maxmarinegroup.com",
    contactPhone: "+20 3 123 4567"
  },
  {
    id: "max-gulf",
    name: "Max Gulf",
    shortName: "Max Gulf",
    subtitle: "Shipping Agencies & Oil Services",
    description: "Regional expansion of Max Marine's proven service model, serving Gulf shipping routes with the same commitment to operational excellence.",
    overview: "Max Gulf extends the Max Marine Group's service capabilities to regional markets. Leveraging the expertise developed by Max Marine S.A.E. over five decades, Max Gulf provides shipping agency and oil services support with a focus on vessels and operations connecting Egypt with Gulf destinations. We maintain the same operational standards and client service approach that has built our group's reputation.",
    established: "1998",
    coreServices: [
      "Regional Shipping Agency",
      "Oil & Gas Support",
      "Vessel Services",
      "Gulf Trade Route Coordination",
      "Documentation Services"
    ],
    locations: ["Alexandria", "Cairo"],
    href: "/companies/max-gulf",
    icon: Anchor,
    keyCapabilities: [
      { title: "Regional Expertise", description: "Specialized knowledge of Egypt-Gulf trade routes and requirements" },
      { title: "Group Resources", description: "Full access to Max Marine Group's Egypt-wide operational network" },
      { title: "Client Focus", description: "Dedicated team for regional shipping line relationships" }
    ],
    howToEngage: [
      "Vessel nomination for Egypt port calls",
      "Regional routing and coordination requirements",
      "Cargo and documentation support needs"
    ],
    contactEmail: "maxgulf@maxmarinegroup.com",
    contactPhone: "+20 3 234 5678"
  },
  {
    id: "max-marine-free-zone",
    name: "Max Marine Free Zone",
    shortName: "Max Marine FZ",
    subtitle: "El-Amreya, Alexandria",
    description: "Strategic free zone operations enabling efficient import/export handling, warehousing, and logistics solutions within Alexandria's premier free zone.",
    overview: "Max Marine Free Zone operates from the El-Amreya Free Zone in Alexandria, providing customs-advantaged warehousing, storage, and logistics services. Our free zone facility enables efficient handling of imported equipment and materials, particularly for the petroleum and offshore sectors. We provide bonded storage, temporary admission coordination, and re-export facilities for companies requiring flexible import/export capabilities.",
    established: "2005",
    coreServices: [
      "Free Zone Warehousing",
      "Bonded Storage",
      "Temporary Admission Handling",
      "Import/Export Coordination",
      "Customs Facilitation",
      "Inventory Management"
    ],
    locations: ["El-Amreya Free Zone, Alexandria"],
    href: "/companies/max-marine-free-zone",
    icon: Building,
    keyCapabilities: [
      { title: "Strategic Location", description: "Positioned in El-Amreya Free Zone with port access" },
      { title: "Customs Advantages", description: "Duty suspension for bonded goods and temporary admissions" },
      { title: "Flexible Operations", description: "Re-export and local clearance options" },
      { title: "Secure Facilities", description: "Covered and open storage with controlled access" }
    ],
    howToEngage: [
      "Storage requirements and estimated durations",
      "Cargo specifications and handling needs",
      "Import documentation for bonded storage",
      "Temporary admission requirements"
    ],
    contactEmail: "freezone@maxmarinegroup.com",
    contactPhone: "+20 3 345 6789"
  },
  {
    id: "heat-oil",
    name: "Heat Oil Free Zone",
    shortName: "Heat Oil",
    subtitle: "El-Amreya, Alexandria",
    description: "Specialized petroleum and energy sector services operating from Alexandria's premier free zone, supporting oil and gas industry requirements.",
    overview: "Heat Oil Free Zone is the dedicated petroleum services company within Max Marine Group, operating from the El-Amreya Free Zone. We specialize in supporting the upstream oil and gas sector with equipment storage, handling, and logistics. Our facility handles drilling equipment, tubulars, and offshore materials with the specialized care required for petroleum sector operations.",
    established: "2010",
    coreServices: [
      "Petroleum Equipment Storage",
      "Drilling Materials Handling",
      "Tubular Management",
      "Offshore Equipment Support",
      "Energy Sector Logistics",
      "Free Zone Operations"
    ],
    locations: ["El-Amreya Free Zone, Alexandria"],
    href: "/companies/heat-oil",
    icon: Fuel,
    keyCapabilities: [
      { title: "Sector Specialization", description: "Dedicated to oil and gas industry requirements" },
      { title: "Equipment Expertise", description: "Handling procedures for drilling and offshore equipment" },
      { title: "Free Zone Benefits", description: "Customs-advantaged storage for petroleum sector" },
      { title: "Industry Relationships", description: "Experience supporting EGPC contractors and international operators" }
    ],
    howToEngage: [
      "Equipment specifications and storage requirements",
      "Project timeline and material flow",
      "Handling and preservation requirements",
      "Customs and import coordination needs"
    ],
    contactEmail: "heatoil@maxmarinegroup.com",
    contactPhone: "+20 3 456 7890"
  },
  {
    id: "era-tours",
    name: "Era Tours",
    shortName: "Era Tours",
    subtitle: "Travel & Support Services",
    description: "Comprehensive travel management company supporting group operations while also providing general travel services to corporate and individual clients.",
    overview: "Era Tours is Max Marine Group's travel management company, providing flight booking, hotel accommodation, and transportation services. Originally established to support the group's crew change and corporate travel needs, Era Tours has developed into a full-service travel agency serving both maritime industry clients and general corporate travel requirements.",
    established: "2000",
    coreServices: [
      "Corporate Travel Management",
      "Flight Booking & Ticketing",
      "Hotel Accommodation",
      "Airport Transfers",
      "Visa Assistance",
      "Group Travel Coordination"
    ],
    locations: ["Alexandria", "Cairo"],
    href: "/companies/era-tours",
    icon: Plane,
    keyCapabilities: [
      { title: "Maritime Industry Focus", description: "Expertise in crew travel and maritime sector requirements" },
      { title: "Corporate Travel", description: "Full travel management for companies operating in Egypt" },
      { title: "Local Knowledge", description: "Extensive Egypt-wide hotel and transport relationships" },
      { title: "Integrated Service", description: "Seamless coordination with group agency operations" }
    ],
    howToEngage: [
      "Travel requirements and itinerary",
      "Passenger details and preferences",
      "Corporate account setup for ongoing needs",
      "Special arrangements (VIP, groups, etc.)"
    ],
    contactEmail: "travel@maxmarinegroup.com",
    contactPhone: "+20 3 567 8901"
  }
];

export function getCompanyById(id: string): CompanyData | undefined {
  return companies.find(company => company.id === id);
}