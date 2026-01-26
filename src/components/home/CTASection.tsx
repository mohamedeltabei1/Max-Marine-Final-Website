import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="section-padding gradient-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <Ship className="absolute top-10 right-10 h-64 w-64 text-gold" />
      </div>
      
      <div className="container-maritime relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Request a Port Call?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Our operations team is available 24/7 to support your vessel arrival, 
            Suez transit, or any maritime service requirement across Egypt.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/contact">
              <Button className="btn-operations text-lg px-8 py-6">
                Request Port Call
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:+201234567890">
              <Button variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6">
                <Phone className="h-5 w-5 mr-2" />
                +20 123 456 7890
              </Button>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
            <a href="mailto:operations@maxmarinegroup.com" className="flex items-center gap-2 hover:text-gold transition-colors">
              <Mail className="h-5 w-5" />
              operations@maxmarinegroup.com
            </a>
            <span className="hidden sm:block">•</span>
            <span>Operations Support Available 24/7</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
