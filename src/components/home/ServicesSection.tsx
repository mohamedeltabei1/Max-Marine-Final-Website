import { motion } from "framer-motion";
import { ArrowRight, Ship, Package, Users, Building, Wrench, Droplets, Trash2, Warehouse, Anchor } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Ship,
    name: "Vessel Attendance",
    description: "Comprehensive port call coordination and vessel support services",
    href: "/services/vessel-attendance",
  },
  {
    icon: Package,
    name: "Cargo & Freight",
    description: "Freight forwarding, cargo handling and documentation",
    href: "/services/cargo-freight",
  },
  {
    icon: Users,
    name: "Husbandry Services",
    description: "Crew support, immigration, accommodation and transport",
    href: "/services/husbandry",
  },
  {
    icon: Building,
    name: "Logistics Base",
    description: "Port services, storage, handling and lifting operations",
    href: "/services/logistics-base",
  },
  {
    icon: Anchor,
    name: "Ship Chandler",
    description: "Marine supplies, provisions and technical stores",
    href: "/services/ship-chandler",
  },
  {
    icon: Wrench,
    name: "Rental Equipment",
    description: "Containers, baskets and specialized equipment rental",
    href: "/services/rental-equipment",
  },
  {
    icon: Droplets,
    name: "Bunkering",
    description: "Fuel supply, fresh water and lubricant services",
    href: "/services/bunkering",
  },
  {
    icon: Trash2,
    name: "Waste Management",
    description: "Compliant waste collection and disposal solutions",
    href: "/services/waste-management",
  },
  {
    icon: Warehouse,
    name: "Warehousing",
    description: "Secure storage and distribution facilities",
    href: "/services/warehousing",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-maritime">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Anchor className="h-4 w-4" />
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Complete Maritime Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From vessel arrival to departure, we provide end-to-end support for shipping lines, 
            offshore operators, and cargo owners.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Link to={service.href} className="block h-full">
                <div className="card-maritime h-full p-6 group bg-card">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                    <service.icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-secondary font-medium text-sm">
                    Learn More <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button className="btn-operations">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
