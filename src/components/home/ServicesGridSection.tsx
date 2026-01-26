import { motion } from "framer-motion";
import { 
  Ship, Package, Users, Building, Wrench, Droplets, 
  Trash2, Warehouse, Anchor, Plane, Container, 
  FileCheck, Fuel, Shield, ArrowRight, Settings
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceCategories = [
  {
    title: "Shipping Agency",
    icon: Ship,
    color: "from-blue-500 to-blue-700",
    services: [
      { name: "Ship Agency", href: "/services/ship-agency", icon: Ship },
      { name: "Suez Canal Transit", href: "/services/suez-canal", icon: Anchor },
      { name: "Protecting Agent", href: "/services/protecting-agent", icon: Shield },
      { name: "Husbandry Services", href: "/services/husbandry", icon: Users },
    ],
  },
  {
    title: "Logistics & Cargo",
    icon: Package,
    color: "from-emerald-500 to-emerald-700",
    services: [
      { name: "Freight Forwarding", href: "/services/freight-forwarding", icon: Package },
      { name: "Customs Clearance", href: "/services/customs-clearance", icon: FileCheck },
      { name: "Warehousing", href: "/services/warehousing", icon: Warehouse },
      { name: "Project Cargo", href: "/services/project-cargo", icon: Container },
    ],
  },
  {
    title: "Marine Services",
    icon: Anchor,
    color: "from-cyan-500 to-cyan-700",
    services: [
      { name: "Bunkering", href: "/services/bunkering", icon: Fuel },
      { name: "Ship Chandler", href: "/services/ship-chandler", icon: Anchor },
      { name: "Provisions Supply", href: "/services/provisions", icon: Package },
      { name: "Waste Management", href: "/services/waste-management", icon: Trash2 },
    ],
  },
  {
    title: "Offshore & Oil Services",
    icon: Settings,
    color: "from-orange-500 to-orange-700",
    services: [
      { name: "Logistics Base", href: "/services/logistics-base", icon: Building },
      { name: "Equipment Rental", href: "/services/rental-equipment", icon: Wrench },
      { name: "Manpower Supply", href: "/services/manpower", icon: Users },
      { name: "Aviation Support", href: "/services/aviation", icon: Plane },
    ],
  },
];

const featuredServices = [
  {
    name: "Suez Canal Transit",
    description: "Expert transit coordination with toll rebate optimization up to 75%",
    icon: Ship,
    href: "/services/suez-canal",
    highlight: "Up to 75% Rebate",
  },
  {
    name: "Crew Change & Husbandry",
    description: "Complete crew support including meet & greet, accommodation, and immigration",
    icon: Users,
    href: "/services/husbandry",
    highlight: "24/7 Available",
  },
  {
    name: "Ship Agency",
    description: "Full port agency services at all Egyptian ports with competitive PDAs",
    icon: Anchor,
    href: "/services/ship-agency",
    highlight: "All Egypt Ports",
  },
];

export function ServicesGridSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-maritime">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Anchor className="h-4 w-4" />
            Comprehensive Maritime Solutions
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Full-Service Maritime Agency
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From vessel arrival to departure, we provide end-to-end support across all Egyptian ports. 
            One partner for all your maritime needs.
          </p>
        </motion.div>

        {/* Featured Services */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link to={service.href} className="block h-full">
                <div className="card-maritime h-full p-6 bg-gradient-to-br from-secondary to-secondary/90 text-white group hover:shadow-xl">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                    <span className="text-xs font-semibold bg-primary px-3 py-1 rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2">
                    {service.name}
                  </h3>
                  <p className="text-white/80 text-sm mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Service Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
              className="card-maritime overflow-hidden bg-card"
            >
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${category.color} p-4`}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Services List */}
              <div className="p-4">
                <ul className="space-y-2">
                  {category.services.map((service) => (
                    <li key={service.name}>
                      <Link
                        to={service.href}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <service.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                          {service.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link to="/services">
            <Button className="btn-primary">
              View All Services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
