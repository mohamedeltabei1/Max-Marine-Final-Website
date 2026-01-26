import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const offices = [
  {
    name: "Alexandria (HQ)",
    address: "14 Admon Fermon St., Navy Building, 1st Floor, Smouha",
    phone: "+20 3 123 4567",
    email: "alex@maxmarinegroup.com",
  },
  {
    name: "Abu Qir",
    address: "3 Mohamed Abdou St., 1st Floor",
    phone: "+20 3 234 5678",
    email: "abuqir@maxmarinegroup.com",
  },
];

const companies = [
  { name: "Max Marine S.A.E.", href: "/companies/max-marine" },
  { name: "Max Gulf", href: "/companies/max-gulf" },
  { name: "Max Marine Free Zone", href: "/companies/max-marine-free-zone" },
  { name: "Heat Oil Free Zone", href: "/companies/heat-oil" },
  { name: "Era Tours", href: "/companies/era-tours" },
];

const services = [
  { name: "Vessel Attendance", href: "/services/vessel-attendance" },
  { name: "Cargo & Freight", href: "/services/cargo-freight" },
  { name: "Husbandry Services", href: "/services/husbandry" },
  { name: "Logistics Base", href: "/services/logistics-base" },
  { name: "Ship Chandler", href: "/services/ship-chandler" },
  { name: "All Services", href: "/services" },
];

const quickLinks = [
  { name: "About the Group", href: "/group" },
  { name: "Industries", href: "/industries" },
  { name: "Fleet & Assets", href: "/fleet" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "QHSE & Compliance", href: "/qhse-compliance" },
  { name: "Careers", href: "/careers" },
  { name: "News", href: "/news" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Operations CTA Bar */}
      <div className="bg-primary">
        <div className="container-maritime py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary-foreground" />
              <span className="font-semibold text-primary-foreground">Operations Support Available 24/7</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+201234567890" className="flex items-center gap-2 text-primary-foreground hover:underline font-medium">
                <Phone className="h-4 w-4" />
                +20 123 456 7890
              </a>
              <a href="mailto:operations@maxmarinegroup.com" className="flex items-center gap-2 text-primary-foreground hover:underline font-medium">
                <Mail className="h-4 w-4" />
                operations@maxmarinegroup.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-maritime section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Max Marine Group" className="h-20 w-auto brightness-0 invert" />
            </div>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              A diversified and independent Egyptian organization providing comprehensive marine agency services, 
              offshore support, and logistics solutions across Egypt's major ports and free zones since 1972.
            </p>
            
            {/* ISO Certifications */}
            <div className="mb-6 p-4 rounded-lg bg-navy-medium/50 border border-navy-light/30">
              <p className="text-sm font-semibold mb-2">ISO Certified</p>
              <p className="text-xs text-secondary-foreground/70">ISO 9001 | ISO 14001 | ISO 45001</p>
            </div>
            
            {/* Office Quick Cards */}
            <div className="space-y-3">
              {offices.map((office) => (
                <div key={office.name} className="p-3 rounded-lg bg-navy-medium/50 border border-navy-light/30">
                  <div className="font-medium text-sm mb-1">{office.name}</div>
                  <div className="text-xs text-secondary-foreground/70 mb-2">{office.address}</div>
                  <div className="flex gap-3">
                    <a href={`tel:${office.phone}`} className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Phone className="h-3 w-3" /> Call
                    </a>
                    <a href={`mailto:${office.email}`} className="text-xs text-primary hover:underline flex items-center gap-1">
                      <Mail className="h-3 w-3" /> Email
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Companies */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Companies</h4>
            <ul className="space-y-2">
              {companies.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-light/30">
        <div className="container-maritime py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} Max Marine Group. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </Link>
              <Link to="/terms" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
