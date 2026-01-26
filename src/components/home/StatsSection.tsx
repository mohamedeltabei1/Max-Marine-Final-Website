import { motion } from "framer-motion";
import { Anchor, MapPin, Building2, Shield, Clock, Award } from "lucide-react";

/**
 * PROOF SECTION - Evidence-Led Statements Only
 * 
 * VERIFIED FACTS (safe to display):
 * - Founded 1972 (company registration)
 * - 5 subsidiaries (documented)
 * - 6 locations across Egypt (documented)
 * - QHSE systems (documented)
 * 
 * UNVERIFIED (removed per acceptance criteria):
 * - "2,500+ port calls" - requires verification
 * - "500+ clients" - requires verification
 * - "24/7" - requires operational confirmation
 * 
 * To enable verified metrics, update this component with approved data.
 */

const proofPoints = [
  { 
    icon: Award,
    title: "Founded 1972",
    description: "Over five decades serving Egypt's maritime industry"
  },
  { 
    icon: Building2,
    title: "Multi-Company Group",
    description: "5 specialized subsidiaries under unified operations"
  },
  { 
    icon: MapPin,
    title: "Egypt-Wide Coverage",
    description: "Offices in Alexandria, Cairo, Port Said, Damietta & Free Zone"
  },
  { 
    icon: Anchor,
    title: "Full-Service Portfolio",
    description: "Vessel attendance, cargo, husbandry, logistics & offshore support"
  },
  { 
    icon: Shield,
    title: "QHSE Management",
    description: "Systems aligned with ISO (International Organization for Standardization) standards"
  },
  { 
    icon: Clock,
    title: "Rapid Response",
    description: "Operational coordination across all Egyptian ports"
  },
];

export function StatsSection() {
  return (
    <section className="py-16 md:py-20 gradient-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path 
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" 
            fill="hsl(var(--background))"
            className="animate-pulse opacity-30"
          />
        </svg>
      </div>

      <div className="container-maritime relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            Established Maritime Partner
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Why Procurement Teams Choose Us
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Operational reliability, documentation readiness, and Egypt-wide coordination since 1972
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {proofPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                <point.icon className="h-7 w-7 md:h-8 md:w-8 text-primary" />
              </div>
              <div className="text-base md:text-lg font-bold text-white mb-2">
                {point.title}
              </div>
              <div className="text-xs md:text-sm text-white/70">
                {point.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
