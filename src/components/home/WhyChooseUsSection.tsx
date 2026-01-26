import { motion } from "framer-motion";
import { 
  Clock, 
  Shield, 
  DollarSign, 
  Users, 
  MapPin, 
  Headphones,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const advantages = [
  {
    icon: Clock,
    title: "50+ Years Experience",
    description: "Established in 1972, we bring decades of maritime expertise and deep understanding of Egyptian port operations.",
    highlight: "Since 1972",
  },
  {
    icon: MapPin,
    title: "Egypt-Wide Coverage",
    description: "Strategic presence in Alexandria, Abu Qir, Cairo, Port Said, Damietta, and El-Amreya Free Zone.",
    highlight: "6 Locations",
  },
  {
    icon: Headphones,
    title: "24/7 Operations",
    description: "Round-the-clock support for urgent port calls, crew changes, and emergency requirements.",
    highlight: "Always Available",
  },
  {
    icon: DollarSign,
    title: "Cost-Effective PDAs",
    description: "Competitive proforma disbursement accounts with transparent pricing and no hidden charges.",
    highlight: "Best Rates",
  },
  {
    icon: Shield,
    title: "ISO Certified",
    description: "Certified to ISO 9001, 14001, and 45001 standards ensuring quality, safety, and environmental compliance.",
    highlight: "Triple Certified",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Experienced local agents at every port with direct relationships with authorities and service providers.",
    highlight: "Expert Staff",
  },
];

const keyPoints = [
  "Full agency services at all Egyptian ports",
  "Suez Canal transit expertise with rebate optimization",
  "Comprehensive husbandry and crew change support",
  "Integrated customs clearance and logistics",
  "Offshore and oil & gas specialized services",
  "Multi-company group with specialized subsidiaries",
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-muted/50 to-transparent" />
      
      <div className="container-maritime relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Strategic Maritime Partner in Egypt
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Max Marine Group combines decades of experience with modern capabilities to deliver 
              comprehensive maritime services across Egypt's entire port network.
            </p>

            {/* Key Points Checklist */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {keyPoints.map((point, index) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-start gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button className="btn-primary">
                  Request a PDA
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/group">
                <Button variant="outline">
                  Learn About Our Group
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Advantage Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {advantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="card-maritime p-5 group hover:border-primary/30"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <advantage.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded">
                    {advantage.highlight}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
