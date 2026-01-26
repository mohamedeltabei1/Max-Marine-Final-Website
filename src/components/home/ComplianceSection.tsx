import { motion } from "framer-motion";
import { Shield, Award, FileCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const commitments = [
  {
    icon: Shield,
    title: "QHSE Policy",
    description: "Comprehensive Quality, Health, Safety and Environment standards governing all operations.",
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Industry-recognized certifications demonstrating our commitment to operational excellence.",
  },
  {
    icon: FileCheck,
    title: "Anti-Bribery & Anti-Corruption",
    description: "Zero-tolerance policy ensuring ethical business practices across all dealings.",
  },
  {
    icon: Users,
    title: "Supplier Standards",
    description: "Rigorous supplier vetting and ongoing compliance monitoring.",
  },
];

export function ComplianceSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondary/5 to-transparent" />
      
      <div className="container-maritime relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              QHSE & Compliance
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Committed to Excellence & Integrity
            </h2>
            <p className="text-muted-foreground mb-6">
              Max Marine Group maintains the highest standards of quality, health, safety, 
              and environmental protection. Our commitment to ethical business practices 
              is fundamental to everything we do.
            </p>
            <p className="text-muted-foreground mb-8">
              We operate with transparency and integrity, ensuring compliance with 
              international standards and local regulations across all our operations.
            </p>
            
            <Link to="/qhse-compliance">
              <Button variant="outline" size="lg">
                View Our Compliance Framework
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {commitments.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card-maritime p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
