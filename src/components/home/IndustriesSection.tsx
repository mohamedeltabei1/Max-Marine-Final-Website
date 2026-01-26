import { motion } from "framer-motion";
import { Flame, Anchor, Ship, Building2, Warehouse } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Flame,
    name: "Oil & Gas Operators",
    description: "Supporting offshore exploration, production, and drilling operations with specialized vessel services and logistics.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Anchor,
    name: "Offshore Contractors",
    description: "Comprehensive support for subsea, construction, and maintenance operations across Egyptian waters.",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Ship,
    name: "Shipping Lines",
    description: "Vessel agency, port call coordination, and cargo handling for international shipping operators.",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: Building2,
    name: "EPC / Projects",
    description: "Engineering, Procurement and Construction project support with logistics and material handling.",
    color: "from-slate-500 to-gray-600",
  },
  {
    icon: Warehouse,
    name: "Ports & Free Zones",
    description: "Integrated services within Egypt's major ports and free zone facilities.",
    color: "from-emerald-500 to-green-600",
  },
];

export function IndustriesSection() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-maritime relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-4">
            Industries We Serve
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            Decades of experience serving the maritime, offshore, and energy sectors 
            with specialized solutions for each industry's unique requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-navy-medium/50 border border-navy-light/30 hover:bg-navy-medium transition-all hover:border-gold/30">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <industry.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {industry.name}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {industry.description}
                </p>
              </div>
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
          <Link to="/industries" className="inline-flex items-center gap-2 text-gold font-medium hover:underline">
            Learn More About Our Industry Experience
            <span className="text-xl">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
