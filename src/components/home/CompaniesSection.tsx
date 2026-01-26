import { motion } from "framer-motion";
import { ArrowRight, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const companies = [
  {
    name: "Max Marine S.A.E.",
    subtitle: "Shipping Agencies & Oil Services",
    description: "The flagship company providing comprehensive maritime agency services and oil industry support across Egypt's major ports.",
    href: "/companies/max-marine",
    established: "1972",
  },
  {
    name: "Max Gulf",
    subtitle: "Shipping Agencies & Oil Services",
    description: "Regional expansion bringing Max Marine's proven service model to Gulf shipping routes and operations.",
    href: "/companies/max-gulf",
    established: "1998",
  },
  {
    name: "Max Marine Free Zone",
    subtitle: "El-Amreya, Alexandria",
    description: "Strategic free zone operations enabling efficient import/export handling and warehousing solutions.",
    href: "/companies/max-marine-free-zone",
    established: "2005",
  },
  {
    name: "Heat Oil Free Zone",
    subtitle: "El-Amreya, Alexandria",
    description: "Specialized petroleum and energy sector services operating from Alexandria's premier free zone.",
    href: "/companies/heat-oil",
    established: "2010",
  },
  {
    name: "Era Tours",
    subtitle: "Travel & Support Services",
    description: "Comprehensive travel management supporting group operations and providing general travel services.",
    href: "/companies/era-tours",
    established: "2000",
  },
];

export function CompaniesSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-maritime">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Building2 className="h-4 w-4" />
            Our Companies
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            A Unified Group of Specialists
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five specialized companies working in coordination to deliver comprehensive marine 
            and logistics solutions across Egypt.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={company.href} className="block h-full">
                <div className="card-maritime h-full p-6 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-navy flex items-center justify-center">
                      <Building2 className="h-6 w-6 text-gold" />
                    </div>
                    <span className="text-xs text-muted-foreground">Est. {company.established}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-sm text-secondary font-medium mb-3">{company.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {company.description}
                  </p>
                  <div className="flex items-center text-secondary font-medium text-sm group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="h-4 w-4 ml-1" />
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
          <Link to="/companies">
            <Button variant="outline" size="lg">
              View All Companies
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
