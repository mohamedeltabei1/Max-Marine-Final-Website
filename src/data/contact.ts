/**
 * Centralized contact and office location data for Max Marine Group
 * Used across ContactPage, Footer, MapSection, and other components
 */

export interface Office {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export const offices: Office[] = [
  {
    id: "alexandria-hq",
    name: "Alexandria (Headquarters)",
    address: "14 Admon Fermon St., Navy Building, 1st Floor, Smouha, Alexandria",
    phone: "+20 3 123 4567",
    email: "alex@maxmarinegroup.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    coordinates: { lat: 31.2156, lng: 29.9553 },
  },
  {
    id: "abu-qir",
    name: "Abu Qir",
    address: "3 Mohamed Abdou St., 1st Floor, Abu Qir",
    phone: "+20 3 234 5678",
    email: "abuqir@maxmarinegroup.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    coordinates: { lat: 31.3182, lng: 30.0742 },
  },
  {
    id: "cairo",
    name: "Cairo",
    address: "21B Nerko, Degla New Maadi, Cairo",
    phone: "+20 2 345 6789",
    email: "cairo@maxmarinegroup.com",
    hours: "Sunday - Thursday: 9:00 AM - 6:00 PM",
    coordinates: { lat: 29.9602, lng: 31.2982 },
  },
  {
    id: "port-said",
    name: "Port Said",
    address: "El Nahda St., Free Port Building, Port Said",
    phone: "+20 66 123 4567",
    email: "portsaid@maxmarinegroup.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    coordinates: { lat: 31.2653, lng: 32.3019 },
  },
  {
    id: "damietta",
    name: "Damietta",
    address: "Investment Building, Damietta Port",
    phone: "+20 57 123 4567",
    email: "damietta@maxmarinegroup.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    coordinates: { lat: 31.4165, lng: 31.8133 },
  },
  {
    id: "free-zone",
    name: "Free Zone",
    address: "El-Amreya Free Zone, Alexandria",
    phone: "+20 3 345 6789",
    email: "freezone@maxmarinegroup.com",
    hours: "Sunday - Thursday: 8:00 AM - 5:00 PM",
    coordinates: { lat: 31.0647, lng: 29.7006 },
  },
];

export const mainContact = {
  email: "info@maxmarinegroup.com",
  phone: "+20 3 123 4567",
  emergencyPhone: "+20 100 123 4567", // 24/7 Operations
  fax: "+20 3 123 4568",
};

export const socialMedia = {
  linkedin: "https://www.linkedin.com/company/max-marine-group",
  facebook: "https://www.facebook.com/maxmarinegroup",
  twitter: "https://twitter.com/maxmarinegroup",
  instagram: "https://www.instagram.com/maxmarinegroup",
};

export const inquiryTypes = [
  "Port Call / Vessel Arrival",
  "Suez Transit",
  "Cargo / Freight Services",
  "Ship Agency",
  "Crew Change",
  "Bunker Supply",
  "Offshore Support",
  "Technical Services",
  "Free Zone Services",
  "QHSE Consultation",
  "General Inquiry",
  "Partnership Opportunity",
];
