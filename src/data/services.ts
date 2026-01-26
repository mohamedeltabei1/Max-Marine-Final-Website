import { Ship, Package, Users, Building, Wrench, Droplets, Trash2, Warehouse, Plane, Container, Anchor, FileCheck, Truck, Shield } from "lucide-react";
import { LucideIcon } from "lucide-react";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceData {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
  overview: string;
  scope: string[];
  process: { step: number; title: string; description: string }[];
  requiredDocuments: string[];
  portsSupported: string[];
  faq: ServiceFAQ[];
  relatedServices: string[];
}

export const services: ServiceData[] = [
  {
    id: "vessel-attendance",
    icon: Ship,
    name: "Vessel Attendance",
    description: "Comprehensive port call coordination and vessel support services ensuring smooth arrivals and departures.",
    overview: "Max Marine Group provides full vessel attendance services across all Egyptian ports. Our experienced operations team coordinates every aspect of port calls, from pre-arrival planning through departure, ensuring efficient turnaround and compliance with all port and regulatory requirements.",
    scope: [
      "Pre-arrival planning and documentation",
      "Port authority and terminal coordination",
      "Berth booking and confirmation",
      "Customs and immigration clearance",
      "Ship's agent representation",
      "Supplies and stores coordination",
      "Crew documentation and sign-on/off",
      "Departure procedures and clearances",
      "Port dues calculation and settlement",
      "Cargo documentation support"
    ],
    process: [
      { step: 1, title: "Pre-Arrival Nomination", description: "Receive vessel nomination with ETA (Estimated Time of Arrival), cargo details, and service requirements." },
      { step: 2, title: "Documentation Preparation", description: "Prepare and submit all required port authority, customs, and immigration documentation." },
      { step: 3, title: "Berth & Services Coordination", description: "Confirm berth allocation, arrange pilots, tugs, and all requested services." },
      { step: 4, title: "Vessel Arrival & Attendance", description: "Board vessel on arrival, attend all inspections, and coordinate cargo operations." },
      { step: 5, title: "Departure & Reporting", description: "Complete clearances, submit departure notice, and provide full disbursement account." }
    ],
    requiredDocuments: [
      "Vessel particulars (GA plan, certificates)",
      "Crew list with passport details",
      "Last 10 ports of call",
      "Cargo manifest / Bill of Lading",
      "Dangerous goods declaration (if applicable)",
      "Ship's stores declaration",
      "Maritime Declaration of Health",
      "ISPS (International Ship and Port Facility Security) Code pre-arrival notification"
    ],
    portsSupported: ["Alexandria", "Abu Qir", "Port Said", "Damietta", "Suez", "El-Dekheila", "Safaga", "Ain Sokhna"],
    faq: [
      { question: "How far in advance should we nominate you as agent?", answer: "We recommend nomination at least 72 hours before ETA for standard port calls. For complex operations or first-time callers, 5-7 days advance notice is preferred." },
      { question: "Do you handle both dry cargo and tanker vessels?", answer: "Yes, we have dedicated teams for all vessel types including bulk carriers, container vessels, tankers, offshore supply vessels, and specialized project cargo ships." },
      { question: "Can you coordinate crew changes during port calls?", answer: "Absolutely. Crew changes are a core service. We handle immigration, airport transfers, accommodation, and all documentation for sign-on and sign-off." },
      { question: "What is included in your disbursement account?", answer: "Our disbursement accounts include all port charges, pilotage, towage, agency fees, and any additional services arranged. We provide detailed breakdowns with supporting documentation." },
      { question: "Do you provide 24-hour operations support?", answer: "Our operations team provides round-the-clock coordination during active port calls. Contact response times outside standard hours may vary." }
    ],
    relatedServices: ["cargo-freight", "husbandry", "bunkering"]
  },
  {
    id: "cargo-freight",
    icon: Package,
    name: "Cargo Attendance & Freight Forwarding",
    description: "Complete cargo handling, freight forwarding, and documentation services for all cargo types.",
    overview: "From break-bulk to containerized cargo, project shipments to petroleum equipment, Max Marine Group provides comprehensive cargo attendance and freight forwarding services. Our expertise covers customs clearance, transportation, and specialized handling for the oil & gas sector.",
    scope: [
      "Cargo supervision and tallying",
      "Freight forwarding (import/export)",
      "Customs clearance for all cargo types",
      "Petroleum equipment import/export",
      "Project cargo coordination",
      "Documentation and certification",
      "Inland transportation arrangement",
      "Warehousing and storage",
      "Insurance coordination",
      "Letter of credit documentation"
    ],
    process: [
      { step: 1, title: "Shipment Planning", description: "Review cargo specifications, routing options, and documentation requirements." },
      { step: 2, title: "Customs Preparation", description: "Prepare customs declarations, obtain required permits, and coordinate with authorities." },
      { step: 3, title: "Cargo Arrival/Dispatch", description: "Supervise cargo operations, conduct surveys, and manage documentation." },
      { step: 4, title: "Clearance & Transport", description: "Complete customs clearance and arrange delivery to final destination." },
      { step: 5, title: "Documentation Close-Out", description: "Provide all original documents, certificates, and operational reports." }
    ],
    requiredDocuments: [
      "Commercial invoice",
      "Packing list",
      "Bill of Lading / Airway Bill",
      "Certificate of Origin",
      "Import/Export license (if required)",
      "Technical specifications (for equipment)",
      "Insurance certificate",
      "Letter of credit documents (if applicable)"
    ],
    portsSupported: ["Alexandria", "Port Said", "Damietta", "Ain Sokhna", "El-Dekheila", "Suez"],
    faq: [
      { question: "Do you handle petroleum and oilfield equipment?", answer: "Yes, this is a core capability. We have extensive experience with drilling equipment, pipes, valves, and other oil & gas materials including coordination with EGPC (Egyptian General Petroleum Corporation) and operating companies." },
      { question: "Can you assist with temporary import permits?", answer: "Yes, we regularly coordinate temporary admission for equipment used in offshore and onshore projects, managing all customs and regulatory requirements." },
      { question: "What cargo types do you handle?", answer: "We handle all cargo types: containers, break-bulk, project cargo, heavy lifts, hazardous goods (with proper classification), and specialized petroleum sector shipments." },
      { question: "Do you provide door-to-door service?", answer: "Yes, we can arrange complete door-to-door logistics including origin pickup, international freight, customs clearance, and final delivery anywhere in Egypt." },
      { question: "What is your typical customs clearance timeframe?", answer: "Standard clearances typically complete within 2-3 working days. Complex shipments or those requiring special permits may take longer depending on regulatory requirements." }
    ],
    relatedServices: ["vessel-attendance", "warehousing", "logistics-base"]
  },
  {
    id: "husbandry",
    icon: Users,
    name: "Husbandry Services",
    description: "Full crew support including meet & greet, accommodation, local transport, immigration, and flight booking.",
    overview: "Max Marine Group provides complete husbandry services to support vessel crews and offshore personnel. From airport meet & greet to hotel arrangements, immigration processing to medical appointments, we ensure your crew is well cared for throughout their time in Egypt.",
    scope: [
      "Crew meet & greet at airports",
      "Immigration sign-on/sign-off processing",
      "Hotel and accommodation booking",
      "Local transportation (airport transfers, city transport)",
      "Flight booking and reconfirmation",
      "Cash to Master delivery",
      "Medical appointments and evacuations",
      "Crew provisioning and personal effects",
      "Shore leave arrangements",
      "Communication and internet services"
    ],
    process: [
      { step: 1, title: "Crew Details Receipt", description: "Receive crew manifest with passport details, flight information, and specific requirements." },
      { step: 2, title: "Logistics Preparation", description: "Book accommodations, arrange transport, and prepare immigration documentation." },
      { step: 3, title: "Crew Arrival Support", description: "Meet crew at airport, assist with immigration, and transfer to vessel or hotel." },
      { step: 4, title: "Ongoing Support", description: "Provide continuous support during stay including any required services." },
      { step: 5, title: "Departure Coordination", description: "Arrange departure transport, confirm flights, and complete sign-off procedures." }
    ],
    requiredDocuments: [
      "Crew list with full passport details",
      "Seaman's books (CDC - Continuous Discharge Certificate)",
      "Flight itineraries",
      "Visa requirements (nationality dependent)",
      "Medical certificates (if required)",
      "Letter of authorization from shipowner/manager",
      "Cash advance requests (if applicable)"
    ],
    portsSupported: ["Alexandria", "Abu Qir", "Cairo (airport services)", "Port Said", "Damietta", "Suez", "Hurghada", "Sharm El Sheikh"],
    faq: [
      { question: "Can you handle multi-national crew changes?", answer: "Yes, we regularly coordinate crew changes involving multiple nationalities, managing varying visa requirements and documentation needs for each crew member." },
      { question: "Do you provide emergency medical evacuation support?", answer: "Yes, we can coordinate medical evacuations including hospital arrangements, air ambulance services, and repatriation support." },
      { question: "What hotels do you typically use?", answer: "We work with a range of hotels from economy to premium, selected based on proximity to port/airport and client budget. All hotels meet our quality and safety standards." },
      { question: "Can you deliver cash to vessels?", answer: "Yes, Cash to Master service is available. We coordinate with your treasury department to ensure secure delivery upon vessel arrival." },
      { question: "Do you handle offshore crew rotations?", answer: "Yes, we support offshore crew changes including helicopter transfers, vessel-to-vessel transfers, and coordination with offshore installation managers." }
    ],
    relatedServices: ["airport-dispatcher", "vessel-attendance", "manpower"]
  },
  {
    id: "airport-dispatcher",
    icon: Plane,
    name: "Airport Dispatcher / Aviation Coordinator",
    description: "Specialized aviation coordination services for crew changes and personnel movements.",
    overview: "Our airport dispatcher service provides dedicated aviation coordination for maritime and offshore personnel movements. Based at Cairo and Alexandria airports, our team ensures smooth transit for crew and passengers traveling to/from vessels and offshore installations.",
    scope: [
      "Airport meet & assist services",
      "Fast-track immigration coordination",
      "Landside and airside assistance",
      "Flight rebooking and changes",
      "Baggage handling and excess coordination",
      "VIP (Very Important Person) lounge access",
      "Transit passenger support",
      "Helicopter connection coordination",
      "Group movements management",
      "Aviation authority liaison"
    ],
    process: [
      { step: 1, title: "Flight Details Confirmation", description: "Receive passenger manifest with flight details and special requirements." },
      { step: 2, title: "Airport Coordination", description: "Coordinate with airport authorities and arrange meet & greet services." },
      { step: 3, title: "Passenger Arrival", description: "Meet passengers at aircraft or arrivals, assist with immigration and customs." },
      { step: 4, title: "Transit Support", description: "Manage connections, provide lounge access, and coordinate onward transport." },
      { step: 5, title: "Departure Assistance", description: "Support check-in, security, and boarding for departing passengers." }
    ],
    requiredDocuments: [
      "Passenger passport copies",
      "Flight confirmation/tickets",
      "Authorization letter from company",
      "Visa documentation (if applicable)",
      "Offshore safety certificates (for helicopter transfers)",
      "Special assistance requirements"
    ],
    portsSupported: ["Cairo International Airport", "Borg El Arab Airport (Alexandria)", "Hurghada Airport", "Sharm El Sheikh Airport"],
    faq: [
      { question: "Can you expedite immigration processing?", answer: "We coordinate with airport authorities to facilitate efficient processing. Actual processing times are subject to immigration requirements and passenger documentation." },
      { question: "Do you handle group movements?", answer: "Yes, we regularly manage group rotations for offshore crews, handling logistics for 20+ passengers simultaneously." },
      { question: "Can you arrange helicopter connections?", answer: "Yes, we coordinate with helicopter operators for connections to offshore installations, including passenger manifests and safety documentation." },
      { question: "What if flights are delayed or cancelled?", answer: "Our team monitors all flights and proactively manages rebooking, hotel arrangements, and communication with vessel agents as needed." },
      { question: "Do you provide VIP services?", answer: "Yes, VIP lounge access and premium meet & greet services are available for executives and senior personnel." }
    ],
    relatedServices: ["husbandry", "vessel-attendance"]
  },
  {
    id: "logistics-base",
    icon: Container,
    name: "Logistics Base",
    description: "Port services, storage, handling and lifting operations for offshore and project cargo.",
    overview: "Max Marine Group operates logistics base facilities at Abu Qir and within the El-Amreya Free Zone. Our bases provide secure storage, material handling, and lifting services to support offshore operations, EPC (Engineering, Procurement and Construction) contractors, and project cargo requirements.",
    scope: [
      "Secure storage areas (open and covered)",
      "Material receiving and dispatch",
      "Heavy lifting up to specified capacities",
      "Crane and forklift operations",
      "Container handling and storage",
      "Pipe yard and tubular handling",
      "Cargo inspection and quality control",
      "Inventory management",
      "Load-out and back-load operations",
      "Third-party inspection coordination"
    ],
    process: [
      { step: 1, title: "Requirement Assessment", description: "Review storage needs, handling requirements, and project timeline." },
      { step: 2, title: "Space Allocation", description: "Allocate appropriate storage areas and handling equipment." },
      { step: 3, title: "Cargo Receipt", description: "Receive materials, conduct inspections, and register in inventory system." },
      { step: 4, title: "Storage & Management", description: "Maintain materials under appropriate conditions, manage inventory." },
      { step: 5, title: "Dispatch & Delivery", description: "Prepare materials for dispatch, coordinate transport or vessel loading." }
    ],
    requiredDocuments: [
      "Material specifications and quantities",
      "Storage requirements (temperature, hazmat classification)",
      "Handling instructions",
      "Insurance certificates",
      "Import documentation (for customs bonded storage)",
      "Third-party inspection requirements",
      "Delivery/collection schedules"
    ],
    portsSupported: ["Abu Qir (dedicated yard)", "El-Amreya Free Zone", "Alexandria"],
    faq: [
      { question: "What is your maximum lifting capacity?", answer: "Capacity varies by location. Please contact us with your specific lifting requirements for confirmation of available equipment." },
      { question: "Do you handle hazardous materials?", answer: "We can handle certain hazmat classifications with proper documentation and safety protocols. Specific materials must be reviewed case by case." },
      { question: "Is the storage area bonded/customs controlled?", answer: "Our Free Zone facility operates under customs control for bonded storage. Our Abu Qir yard handles cleared cargo." },
      { question: "Can you provide 24-hour access for urgent operations?", answer: "Extended hours access can be arranged for active projects. Standard operations follow regular working hours." },
      { question: "Do you provide inventory management?", answer: "Yes, we provide computerized inventory tracking with regular stock reports and can integrate with client systems." }
    ],
    relatedServices: ["cargo-freight", "containers-baskets", "warehousing"]
  },
  {
    id: "ship-chandler",
    icon: Anchor,
    name: "Ship Chandler",
    description: "Complete marine supplies including provisions, deck stores, and technical equipment.",
    overview: "Max Marine Group provides comprehensive ship chandling services across Egyptian ports. We supply provisions, deck and engine stores, cabin supplies, safety equipment, and technical spares to ensure vessels are fully equipped for their voyages.",
    scope: [
      "Provisions (fresh, frozen, dry stores)",
      "Deck stores and equipment",
      "Engine room stores and spares",
      "Cabin stores and hotel supplies",
      "Safety equipment and PPE (Personal Protective Equipment)",
      "Bonded stores (duty-free)",
      "Technical stores and tools",
      "Publications and charts",
      "Gases (welding, medical)",
      "Paints and chemicals"
    ],
    process: [
      { step: 1, title: "Order Receipt", description: "Receive stores requisition with vessel particulars and delivery requirements." },
      { step: 2, title: "Quotation & Confirmation", description: "Provide competitive quotation, confirm availability and delivery schedule." },
      { step: 3, title: "Procurement & QC", description: "Source items, conduct quality checks, and prepare for delivery." },
      { step: 4, title: "Delivery to Vessel", description: "Coordinate with agent, deliver stores to vessel at berth or anchorage." },
      { step: 5, title: "Documentation & Invoice", description: "Provide delivery receipts, certificates where required, and commercial documentation." }
    ],
    requiredDocuments: [
      "Stores requisition list",
      "Vessel particulars and berth/anchorage",
      "Delivery date and time requirements",
      "Bonded stores declaration (if applicable)",
      "Special dietary requirements (for provisions)",
      "Certificate requirements (for safety equipment)"
    ],
    portsSupported: ["Alexandria", "Abu Qir", "Port Said", "Damietta", "Suez", "El-Dekheila", "Ain Sokhna"],
    faq: [
      { question: "Can you supply to vessels at anchorage?", answer: "Yes, we can arrange launch delivery to vessels at anchorage across all Egyptian ports." },
      { question: "Do you provide bonded stores?", answer: "Yes, duty-free bonded stores are available for qualifying vessels. We handle all customs formalities." },
      { question: "What is your lead time for stores delivery?", answer: "Standard items typically 24-48 hours. Specialized or technical items may require longer lead times. We recommend early ordering for best availability." },
      { question: "Can you supply spare parts for specific equipment?", answer: "Yes, we can source and supply marine equipment spares. Technical specifications and part numbers help ensure correct supply." },
      { question: "Do you provide halal provisions?", answer: "Yes, halal-certified provisions are standard. We can accommodate specific dietary and religious requirements." }
    ],
    relatedServices: ["vessel-attendance", "bunkering", "husbandry"]
  },
  {
    id: "bunkering",
    icon: Droplets,
    name: "Bunkering",
    description: "Fuel supply, fresh water delivery, and lubricant services across all Egyptian ports.",
    overview: "Max Marine Group coordinates bunkering operations including marine fuels, fresh water, and lubricants across Egypt's ports. We work with approved suppliers to ensure quality, quantity, and timely delivery for your vessel's requirements.",
    scope: [
      "Marine fuel oil (MFO/HFO - Marine Fuel Oil/Heavy Fuel Oil)",
      "Marine gas oil (MGO - Marine Gas Oil)",
      "Fresh water delivery",
      "Lubricating oils",
      "Barge and ex-wharf supply",
      "Quantity surveys",
      "Bunker documentation",
      "Supplier coordination",
      "Payment arrangements",
      "Sample retention"
    ],
    process: [
      { step: 1, title: "Bunker Enquiry", description: "Receive vessel requirements including quantities, grades, and delivery window." },
      { step: 2, title: "Quotation & Confirmation", description: "Obtain quotes from approved suppliers, confirm availability and pricing." },
      { step: 3, title: "Scheduling", description: "Coordinate delivery timing with vessel agent, port, and supplier." },
      { step: 4, title: "Delivery & Survey", description: "Attend bunkering operations, conduct or witness quantity surveys." },
      { step: 5, title: "Documentation", description: "Provide BDN (Bunker Delivery Note), quality certificates, and survey reports." }
    ],
    requiredDocuments: [
      "Vessel particulars",
      "Fuel specifications required",
      "Quantities (MT - Metric Tons)",
      "Delivery window (date/time range)",
      "Payment terms / credit application",
      "Last bunker receipt and analysis"
    ],
    portsSupported: ["Alexandria", "Port Said", "Suez", "Damietta", "Ain Sokhna", "El-Dekheila"],
    faq: [
      { question: "Do you supply low-sulphur fuels (VLSFO - Very Low Sulphur Fuel Oil)?", answer: "Yes, IMO (International Maritime Organization) 2020 compliant fuels are available. Please specify sulphur content requirements in your enquiry." },
      { question: "Can you arrange bunkers at short notice?", answer: "We maintain relationships with suppliers for urgent requirements, though availability and pricing are subject to market conditions. Advance planning is recommended." },
      { question: "Do you provide quantity surveys?", answer: "Yes, we can arrange independent quantity surveys or attend bunkering operations on your behalf." },
      { question: "What payment terms are available?", answer: "Payment terms vary by supplier. We can advise on options based on your company's credit status and requirements." },
      { question: "Do you supply lubricants?", answer: "Yes, we can coordinate lubricant supply from major brands. Specific grades and quantities should be confirmed in advance." }
    ],
    relatedServices: ["vessel-attendance", "ship-chandler"]
  },
  {
    id: "waste-management",
    icon: Trash2,
    name: "Waste Management",
    description: "Compliant waste collection and disposal solutions meeting international environmental standards.",
    overview: "Max Marine Group provides environmentally compliant waste management services for vessels calling at Egyptian ports. We handle garbage, oily waste, and other ship-generated waste in accordance with MARPOL (International Convention for the Prevention of Pollution from Ships) requirements and local regulations.",
    scope: [
      "Garbage collection (Annex V wastes)",
      "Oily waste and sludge disposal",
      "Dirty ballast water reception",
      "Sewage disposal (where available)",
      "Chemical waste handling",
      "Waste reception documentation",
      "MARPOL certification",
      "Recycling coordination",
      "Hazardous waste management",
      "Waste audit support"
    ],
    process: [
      { step: 1, title: "Waste Declaration", description: "Receive waste quantities, types, and vessel schedule." },
      { step: 2, title: "Service Arrangement", description: "Coordinate with licensed waste reception contractors." },
      { step: 3, title: "Collection", description: "Arrange barge or quayside collection as per port requirements." },
      { step: 4, title: "Documentation", description: "Provide waste reception certificates for vessel records." },
      { step: 5, title: "Disposal Confirmation", description: "Confirm proper disposal through licensed facilities." }
    ],
    requiredDocuments: [
      "Garbage Record Book entries",
      "Oil Record Book entries (Part I and II)",
      "Waste quantities by category",
      "Hazardous waste classification (if applicable)",
      "Vessel particulars",
      "ETA and berthing information"
    ],
    portsSupported: ["Alexandria", "Port Said", "Damietta", "Suez", "El-Dekheila"],
    faq: [
      { question: "Do you provide MARPOL-compliant certificates?", answer: "Yes, all waste collection is documented with proper waste reception certificates meeting MARPOL and port state requirements." },
      { question: "Can you handle hazardous waste?", answer: "Certain categories of hazardous waste can be handled with proper classification and documentation. Please enquire with specific waste details." },
      { question: "What is the cost structure?", answer: "Costs depend on waste type, quantity, and port. We provide quotes based on your declared quantities and vessel requirements." },
      { question: "Can waste collection be done at anchorage?", answer: "This depends on the port and waste type. Barge collection may be available for certain wastes. Please enquire for specific ports." },
      { question: "How far in advance should we notify?", answer: "We recommend 48-72 hours advance notice to arrange appropriate reception facilities and scheduling." }
    ],
    relatedServices: ["vessel-attendance", "tank-cleaning"]
  },
  {
    id: "containers-baskets",
    icon: Container,
    name: "Containers & Baskets",
    description: "Manufacturing and rental of offshore containers and cargo baskets to DNV specifications.",
    overview: "Max Marine Group offers offshore containers and cargo carrying units (CCUs) for rental, manufactured and certified to DNV (Det Norske Veritas) specifications. Our inventory supports offshore operations with properly certified equipment for deck cargo transport.",
    scope: [
      "Offshore container rental",
      "Cargo basket supply",
      "Open-top containers",
      "Half-height containers",
      "DNV 2.7-1 certified units",
      "Periodic inspection and recertification",
      "Delivery to quayside or installation",
      "Container tracking",
      "Custom specifications",
      "Long-term rental agreements"
    ],
    process: [
      { step: 1, title: "Requirement Assessment", description: "Understand container specifications, quantity, and rental duration." },
      { step: 2, title: "Availability & Quotation", description: "Confirm available inventory and provide rental terms." },
      { step: 3, title: "Delivery", description: "Arrange delivery to specified location with valid certification." },
      { step: 4, title: "On-Hire", description: "Complete handover inspection and on-hire documentation." },
      { step: 5, title: "Return & Off-Hire", description: "Inspect returned equipment and complete off-hire." }
    ],
    requiredDocuments: [
      "Container specifications required",
      "DNV certification requirements",
      "Rental period (estimated)",
      "Delivery location",
      "Insurance arrangements",
      "Lifting/handling plan (for offshore use)"
    ],
    portsSupported: ["Abu Qir (primary depot)", "Alexandria", "El-Amreya Free Zone"],
    faq: [
      { question: "Are your containers DNV certified?", answer: "Yes, our offshore containers and CCUs are certified to DNV 2.7-1 or equivalent standards with valid certification." },
      { question: "What sizes are available?", answer: "We offer various sizes including 10ft, 20ft offshore containers, half-height units, and cargo baskets. Please enquire for current inventory." },
      { question: "Can you deliver to offshore installations?", answer: "We deliver to quayside. Offshore logistics (vessel/helicopter transport) can be coordinated through our operations team." },
      { question: "What is the minimum rental period?", answer: "Minimum rental periods apply. Contact us for current terms based on equipment type and quantity." },
      { question: "Do you handle inspection and recertification?", answer: "Yes, we manage periodic inspections and recertification to maintain valid DNV status throughout the rental period." }
    ],
    relatedServices: ["logistics-base", "rental-equipment"]
  },
  {
    id: "rental-equipment",
    icon: Wrench,
    name: "Rental Equipment",
    description: "Specialized equipment rental for marine and offshore operations.",
    overview: "Max Marine Group provides equipment rental services to support marine and offshore operations. Our inventory includes lifting equipment, generators, and specialized tools available for short and long-term rental.",
    scope: [
      "Lifting equipment and slings",
      "Power generators",
      "Welding equipment",
      "Air compressors",
      "Pumps and hoses",
      "Safety equipment",
      "Testing instruments",
      "Communication equipment",
      "Lighting systems",
      "Specialized offshore tools"
    ],
    process: [
      { step: 1, title: "Equipment Request", description: "Receive specifications and rental duration requirements." },
      { step: 2, title: "Availability Check", description: "Confirm equipment availability and condition." },
      { step: 3, title: "Rental Agreement", description: "Finalize terms, insurance, and delivery arrangements." },
      { step: 4, title: "Delivery & Handover", description: "Deliver equipment with operating instructions and certificates." },
      { step: 5, title: "Return & Inspection", description: "Collect equipment and complete final inspection." }
    ],
    requiredDocuments: [
      "Equipment specifications required",
      "Rental period",
      "Delivery location",
      "Insurance certificate",
      "Operator qualifications (for certified equipment)",
      "Purpose/application details"
    ],
    portsSupported: ["Alexandria", "Abu Qir", "Cairo", "Project sites (Egypt-wide)"],
    faq: [
      { question: "Do your lifting equipment have valid certificates?", answer: "Yes, all certified lifting equipment is supplied with current test certificates. Certification status is verified before each rental." },
      { question: "Can you provide operators with the equipment?", answer: "Operator availability depends on equipment type. Please enquire for specific requirements." },
      { question: "What are your rental terms?", answer: "Rental terms vary by equipment type and duration. We offer daily, weekly, and monthly rates." },
      { question: "Can equipment be delivered to remote project sites?", answer: "Yes, we can arrange delivery to project sites across Egypt. Transport costs depend on location." },
      { question: "What if equipment breaks down during rental?", answer: "Contact our operations team immediately. Replacement or repair will be arranged based on the nature of the issue." }
    ],
    relatedServices: ["containers-baskets", "logistics-base", "manpower"]
  },
  {
    id: "manpower",
    icon: Users,
    name: "Manpower Supply Services",
    description: "Qualified personnel supply for marine and offshore operations across various disciplines.",
    overview: "Max Marine Group provides qualified manpower to support marine and offshore operations. We supply trained personnel for temporary assignments, project staffing, and ongoing operational support.",
    scope: [
      "Marine crew supply",
      "Offshore personnel",
      "Port operations staff",
      "Administrative support",
      "Technical specialists",
      "Safety personnel",
      "Drivers and logistics staff",
      "Interpreters and liaison officers",
      "Cleaning and catering support",
      "Security personnel"
    ],
    process: [
      { step: 1, title: "Requirement Definition", description: "Understand position requirements, qualifications, and duration." },
      { step: 2, title: "Candidate Selection", description: "Identify suitable candidates from our database." },
      { step: 3, title: "Screening & Verification", description: "Verify qualifications, references, and certifications." },
      { step: 4, title: "Deployment", description: "Deploy personnel with proper contracts and documentation." },
      { step: 5, title: "Ongoing Support", description: "Manage payroll, HSE (Health, Safety and Environment), and performance." }
    ],
    requiredDocuments: [
      "Position description and requirements",
      "Qualifications and certifications needed",
      "Contract duration",
      "Work location and conditions",
      "Remuneration guidelines",
      "HSE requirements"
    ],
    portsSupported: ["Egypt-wide deployment capability"],
    faq: [
      { question: "What certifications can your personnel provide?", answer: "Available certifications depend on the role. Common offshore certifications (BOSIET - Basic Offshore Safety Induction and Emergency Training, H2S, etc.) can be confirmed during the selection process." },
      { question: "How quickly can you mobilize personnel?", answer: "Mobilization time depends on role requirements and availability. Common positions may be available within days; specialized roles may require longer lead times." },
      { question: "Do you handle payroll and employment?", answer: "Yes, personnel are typically employed through our company with full payroll administration, social insurance, and HSE coverage." },
      { question: "Can you provide personnel for offshore work?", answer: "Yes, we supply personnel for offshore operations with appropriate certifications and medical fitness." },
      { question: "What about insurance and liability?", answer: "All personnel are covered by appropriate insurance. Specific coverage can be confirmed based on work scope and location." }
    ],
    relatedServices: ["husbandry", "admin-offices"]
  },
  {
    id: "admin-offices",
    icon: Building,
    name: "Turnkey Administrative Offices",
    description: "Ready-to-use office facilities with full administrative support for project-based operations.",
    overview: "Max Marine Group provides fully equipped office spaces for companies requiring operational presence in Egypt. Our turnkey offices include IT infrastructure, administrative support, and all necessary utilities for immediate operation.",
    scope: [
      "Furnished office space",
      "IT infrastructure and connectivity",
      "Reception and secretarial services",
      "Meeting room facilities",
      "Administrative support staff",
      "Mail and courier handling",
      "Telephone and fax services",
      "Printing and document services",
      "Security and access control",
      "Housekeeping and maintenance"
    ],
    process: [
      { step: 1, title: "Requirements Assessment", description: "Understand space needs, staffing, and duration." },
      { step: 2, title: "Space Allocation", description: "Identify suitable office space and confirm availability." },
      { step: 3, title: "Setup & Configuration", description: "Configure IT, communications, and furnishings." },
      { step: 4, title: "Handover", description: "Complete handover with all access credentials and orientation." },
      { step: 5, title: "Ongoing Support", description: "Provide administrative support throughout the contract." }
    ],
    requiredDocuments: [
      "Company registration documents",
      "Office space requirements",
      "IT and connectivity needs",
      "Staffing support requirements",
      "Contract duration",
      "Special equipment needs"
    ],
    portsSupported: ["Alexandria", "Cairo"],
    faq: [
      { question: "What office locations are available?", answer: "We have office facilities in Alexandria and Cairo. Specific locations can be discussed based on your operational requirements." },
      { question: "Is internet connectivity included?", answer: "Yes, business-grade internet connectivity is included as standard. Specific bandwidth requirements can be accommodated." },
      { question: "Can you provide local staff?", answer: "Yes, administrative staff, drivers, and support personnel can be included in the service package." },
      { question: "What is the minimum contract period?", answer: "Minimum terms apply and depend on the scope of services. Short-term project offices and longer-term arrangements are both available." },
      { question: "Can you assist with company registration?", answer: "We can provide guidance on local registration requirements and connect you with appropriate legal advisors." }
    ],
    relatedServices: ["manpower", "husbandry"]
  },
  {
    id: "tank-cleaning",
    icon: Droplets,
    name: "Tank Cleaning",
    description: "Professional tank cleaning services meeting industry standards for cargo changes.",
    overview: "Max Marine Group coordinates professional tank cleaning services for vessels requiring cargo tank preparation. We work with certified contractors to ensure thorough cleaning meeting industry standards and charterer requirements.",
    scope: [
      "Crude oil washing (COW) support",
      "Tank cleaning supervision",
      "Gas freeing operations",
      "Tank inspection preparation",
      "Chemical cleaning coordination",
      "Wall wash testing",
      "Certification and documentation",
      "Slop handling coordination",
      "Shore connection arrangements",
      "Inspector coordination"
    ],
    process: [
      { step: 1, title: "Requirements Review", description: "Understand cargo history, next cargo requirements, and charterer specifications." },
      { step: 2, title: "Contractor Engagement", description: "Engage certified tank cleaning contractors." },
      { step: 3, title: "Cleaning Operations", description: "Supervise tank cleaning, gas freeing, and slop disposal." },
      { step: 4, title: "Inspection & Testing", description: "Coordinate wall wash tests and inspector attendance." },
      { step: 5, title: "Documentation", description: "Provide cleaning certificates and inspection reports." }
    ],
    requiredDocuments: [
      "Previous cargo information",
      "Next cargo specifications",
      "Charterer cleaning requirements",
      "Vessel tank configuration",
      "Inspector nomination (if required)",
      "Slop disposal requirements"
    ],
    portsSupported: ["Alexandria", "Suez", "Ain Sokhna", "El-Dekheila"],
    faq: [
      { question: "Can you meet major oil company standards?", answer: "We coordinate with contractors experienced in meeting major oil company inspection standards. Specific requirements should be provided for confirmation." },
      { question: "Do you handle slop disposal?", answer: "Yes, we can coordinate slop reception and disposal in conjunction with tank cleaning operations." },
      { question: "Can you arrange independent inspectors?", answer: "Yes, we can coordinate independent inspection services as required by charterers." },
      { question: "What is the typical cleaning timeframe?", answer: "Duration depends on tank size, previous cargo, and cleaning requirements. Estimates can be provided once specifications are known." },
      { question: "Is gas freeing included?", answer: "Gas freeing services can be included in the scope. Requirements should be specified in the enquiry." }
    ],
    relatedServices: ["vessel-attendance", "waste-management", "bunkering"]
  },
  {
    id: "warehousing",
    icon: Warehouse,
    name: "Warehousing & Distribution",
    description: "Secure storage facilities and distribution services within port and free zone areas.",
    overview: "Max Marine Group operates warehouse facilities in Alexandria and the El-Amreya Free Zone. Our warehouses provide secure storage for imported goods, project materials, and spares with efficient distribution capabilities.",
    scope: [
      "Secure covered warehousing",
      "Climate-controlled storage (limited availability)",
      "Bonded warehouse facilities",
      "Inventory management",
      "Pick and pack services",
      "Distribution and delivery",
      "Cross-docking",
      "Dangerous goods storage (classified)",
      "Customs bonded storage",
      "Stock reporting"
    ],
    process: [
      { step: 1, title: "Storage Requirements", description: "Assess storage needs, conditions, and handling requirements." },
      { step: 2, title: "Space Allocation", description: "Allocate appropriate warehouse space and systems access." },
      { step: 3, title: "Goods Receipt", description: "Receive goods, inspect, and register in inventory system." },
      { step: 4, title: "Storage & Management", description: "Store goods securely with regular stock reporting." },
      { step: 5, title: "Dispatch", description: "Pick, pack, and dispatch as per client instructions." }
    ],
    requiredDocuments: [
      "Goods description and specifications",
      "Storage requirements (temperature, handling)",
      "Import documentation (for bonded storage)",
      "Dangerous goods classification (if applicable)",
      "Insurance requirements",
      "Access and authorization procedures"
    ],
    portsSupported: ["Alexandria", "El-Amreya Free Zone"],
    faq: [
      { question: "Do you offer bonded warehouse facilities?", answer: "Yes, our Free Zone facility provides customs bonded storage for goods pending customs clearance." },
      { question: "What is your warehouse capacity?", answer: "Please contact us with your specific requirements for current availability and capacity information." },
      { question: "Can you store hazardous materials?", answer: "Certain classified dangerous goods can be stored with proper documentation. Specific materials must be reviewed case by case." },
      { question: "Do you provide insurance?", answer: "Basic storage insurance may be included. Clients are advised to arrange adequate cargo insurance for their goods." },
      { question: "How do you handle inventory reporting?", answer: "Regular stock reports are provided. Frequency and format can be customized to client requirements." }
    ],
    relatedServices: ["cargo-freight", "logistics-base"]
  },
  {
    id: "suez-transit",
    icon: Ship,
    name: "Suez Canal Transit Support",
    description: "Complete support for vessel transits through the Suez Canal including coordination with the Suez Canal Authority (SCA).",
    overview: "Max Marine Group provides comprehensive Suez Canal transit support services. We coordinate all aspects of canal passage including SCA (Suez Canal Authority) formalities, pilot arrangements, and ancillary services to ensure smooth transits.",
    scope: [
      "SCA documentation and formalities",
      "Transit booking coordination",
      "Convoy scheduling",
      "Pilot arrangements",
      "Measurement and tonnage certification",
      "Crew and stores at anchor",
      "Husbandry services during transit",
      "Bunkers at anchorage",
      "Medical and emergency support",
      "Disbursement account management"
    ],
    process: [
      { step: 1, title: "Transit Nomination", description: "Receive vessel details, ETA, and transit requirements." },
      { step: 2, title: "SCA Documentation", description: "Prepare and submit all required SCA documentation." },
      { step: 3, title: "Convoy Booking", description: "Coordinate convoy booking and confirm transit schedule." },
      { step: 4, title: "Transit Support", description: "Attend vessel at anchorage and during transit, coordinate all services." },
      { step: 5, title: "Post-Transit", description: "Complete formalities and provide disbursement account." }
    ],
    requiredDocuments: [
      "International tonnage certificate",
      "Suez Canal tonnage certificate (if available)",
      "Vessel particulars and GA (General Arrangement) plan",
      "Crew list",
      "Cargo manifest",
      "Last port clearance",
      "ISPS information",
      "Dangerous goods manifest (if applicable)"
    ],
    portsSupported: ["Port Said", "Suez", "Ismailia (Great Bitter Lake)"],
    faq: [
      { question: "How far in advance should we book a transit?", answer: "We recommend booking at least 5-7 days in advance, particularly during busy periods. Urgent transits may be possible subject to availability." },
      { question: "Can you arrange services at anchorage?", answer: "Yes, we coordinate bunkers, stores, crew changes, and other services at Port Said and Suez anchorages during transit." },
      { question: "How are canal tolls calculated?", answer: "Canal tolls are based on the Suez Canal Net Tonnage (SCNT) and vessel type. We can provide estimates once vessel particulars are received." },
      { question: "What if there are convoy delays?", answer: "Convoy schedules are set by SCA. We keep you informed of any changes and coordinate services during any waiting periods." },
      { question: "Do you handle military cargo requirements?", answer: "Transits with military cargo or certain restricted items require additional approvals. Please inform us in advance of any such cargo." }
    ],
    relatedServices: ["vessel-attendance", "bunkering", "husbandry"]
  },
  {
    id: "government-permits",
    icon: FileCheck,
    name: "Government Permits & Approvals",
    description: "Coordination of permits and approvals from Egyptian government authorities for maritime and offshore operations.",
    overview: "Max Marine Group assists with the coordination of permits and approvals required from various Egyptian government authorities. Our experience navigating the regulatory environment helps ensure timely processing of required authorizations.",
    scope: [
      "Maritime authority coordination",
      "Port authority approvals",
      "Environmental permits",
      "Telecommunications approvals",
      "Aviation authority coordination (for helicopter operations)",
      "Ministry coordination",
      "Customs and trade approvals",
      "Security clearances (as required)",
      "Work permit coordination",
      "Document authentication"
    ],
    process: [
      { step: 1, title: "Requirement Assessment", description: "Identify all required permits and approvals for the operation." },
      { step: 2, title: "Documentation Preparation", description: "Prepare applications and supporting documentation." },
      { step: 3, title: "Submission", description: "Submit applications through appropriate channels." },
      { step: 4, title: "Follow-Up", description: "Track application progress and respond to queries." },
      { step: 5, title: "Permit Receipt", description: "Collect approved permits and provide to client." }
    ],
    requiredDocuments: [
      "Company registration documents",
      "Project scope and description",
      "Equipment lists (where applicable)",
      "Personnel details (where applicable)",
      "Technical specifications",
      "Authorization letters",
      "Previous approvals/permits (if renewals)"
    ],
    portsSupported: ["Egypt-wide"],
    faq: [
      { question: "How long do permits typically take?", answer: "Processing times vary significantly by permit type and issuing authority. We can provide estimates once the specific requirements are understood." },
      { question: "Can you guarantee permit approval?", answer: "We coordinate and facilitate the application process, but final approval decisions rest with the relevant authorities. We advise on requirements to support successful applications." },
      { question: "Do you handle military-related approvals?", answer: "We can advise on requirements for operations that may require military coordination, though certain approvals have specific protocols that must be followed." },
      { question: "Can you assist with telecommunications licenses?", answer: "We can coordinate applications for radio communications and other telecommunications approvals required for offshore and vessel operations." },
      { question: "What about environmental permits?", answer: "We can assist with environmental assessments and permit applications for projects requiring environmental approval." }
    ],
    relatedServices: ["vessel-attendance", "cargo-freight", "logistics-base"]
  },
  {
    id: "customs-clearance",
    icon: FileCheck,
    name: "Customs Clearance",
    description: "Import and export customs clearance services for petroleum equipment, materials, and general cargo.",
    overview: "Max Marine Group provides customs clearance services for import and export shipments, with particular expertise in petroleum sector equipment and materials. We navigate Egypt's customs procedures to ensure efficient clearance of your cargo.",
    scope: [
      "Import customs clearance",
      "Export customs clearance",
      "Petroleum equipment clearance",
      "Temporary admission procedures",
      "Duty exemption coordination",
      "Free zone procedures",
      "Tariff classification",
      "Valuation guidance",
      "Documentation preparation",
      "Customs inspection coordination"
    ],
    process: [
      { step: 1, title: "Document Receipt", description: "Receive shipping documents and review for completeness." },
      { step: 2, title: "Declaration Preparation", description: "Prepare customs declarations with correct classification." },
      { step: 3, title: "Submission & Payment", description: "Submit declarations and coordinate duty payments." },
      { step: 4, title: "Inspection", description: "Coordinate customs inspection if required." },
      { step: 5, title: "Release", description: "Obtain release and coordinate cargo delivery." }
    ],
    requiredDocuments: [
      "Commercial invoice",
      "Packing list",
      "Bill of Lading / Airway Bill",
      "Certificate of Origin",
      "Import license (if required)",
      "Technical specifications",
      "End-user certificates (where applicable)",
      "Temporary admission requests (if applicable)"
    ],
    portsSupported: ["Alexandria", "Port Said", "Damietta", "Cairo Airport", "El-Amreya Free Zone"],
    faq: [
      { question: "Do you handle petroleum sector imports?", answer: "Yes, we have extensive experience with petroleum equipment, materials, and spares including coordination with EGPC (Egyptian General Petroleum Corporation) and operating companies." },
      { question: "Can you arrange temporary admission?", answer: "Yes, we regularly handle temporary admission for equipment used in offshore and onshore projects." },
      { question: "What are typical clearance timeframes?", answer: "Standard clearances typically complete within 2-5 working days. Complex items or those requiring special permits may take longer." },
      { question: "Do you handle duty exemptions?", answer: "We can coordinate applications for applicable duty exemptions under free zone regulations or sector-specific provisions." },
      { question: "Can you clear shipments at all Egyptian ports?", answer: "We handle clearances at major ports and airports. For specialized locations, please enquire about coverage." }
    ],
    relatedServices: ["cargo-freight", "warehousing", "logistics-base"]
  }
];

export function getServiceById(id: string): ServiceData | undefined {
  return services.find(service => service.id === id);
}

export function getRelatedServices(serviceId: string): ServiceData[] {
  const service = getServiceById(serviceId);
  if (!service) return [];
  return service.relatedServices
    .map(id => getServiceById(id))
    .filter((s): s is ServiceData => s !== undefined);
}