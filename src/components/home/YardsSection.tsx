import { motion } from "framer-motion";
import { ArrowRight, Wrench, Ship, Ruler, HardHat } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import shipyardImage from "@/assets/shipyard.jpg";

const yards = [
  {
    name: "Abu Qir Yard",
    location: "Abu Qir, Alexandria",
    description: "Full-service yard facility with dry dock capabilities, fabrication workshops, and heavy lifting equipment.",
    capabilities: ["Dry Dock Facilities", "Fabrication & Welding", "Heavy Lifting", "Storage Areas"],
    href: "/ports-offices-yards/yard-abu-qir",
  },
  {
    name: "Damietta Yard",
    location: "Damietta Port",
    description: "Strategic yard supporting operations at Egypt's second largest port with comprehensive maintenance services.",
    capabilities: ["Vessel Maintenance", "Equipment Storage", "Workshop Facilities", "Quayside Access"],
    href: "/ports-offices-yards/yard-damietta",
  },
];

export function YardsSection() {
  return (
    <section className="section-padding bg-muted">
      <div className="container-maritime">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Wrench className="h-4 w-4" />
              Yard Facilities
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Operational Yards
            </h2>
            <p className="text-muted-foreground mb-8">
              Our yard facilities provide essential support services including storage, 
              fabrication, maintenance, and heavy equipment handling.
            </p>

            <div className="space-y-6">
              {yards.map((yard, index) => (
                <motion.div
                  key={yard.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="card-maritime p-6 bg-card"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                        {yard.name}
                      </h3>
                      <p className="text-sm text-secondary">{yard.location}</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center">
                      <HardHat className="h-5 w-5 text-gold" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    {yard.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {yard.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={yard.href}
                    className="inline-flex items-center text-secondary font-medium text-sm hover:gap-2 transition-all"
                  >
                    View Yard Details <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/contact">
                <Button className="btn-operations">
                  Submit Yard Inquiry
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-maritime-xl">
              <img
                src={shipyardImage}
                alt="Max Marine Group shipyard facilities"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-maritime-lg p-6 border border-border">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">2</div>
                  <div className="text-xs text-muted-foreground">Yard Locations</div>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-foreground">50+</div>
                  <div className="text-xs text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
