import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Major oil & gas, shipping, and offshore clients
const clients = [
  { name: "Shell", logo: "🐚" },
  { name: "BP", logo: "⚡" },
  { name: "ExxonMobil", logo: "🛢️" },
  { name: "Maersk", logo: "⚓" },
  { name: "MSC", logo: "🚢" },
  { name: "Hapag-Lloyd", logo: "🌊" },
  { name: "ENPPI", logo: "🏭" },
  { name: "PETROJET", logo: "🔧" },
  { name: "Apache", logo: "🦅" },
  { name: "Eni", logo: "🔶" },
  { name: "Edison", logo: "💡" },
  { name: "Transocean", logo: "🌐" },
];

const testimonials = [
  {
    quote: "Max Marine Group has been our trusted partner for Suez Canal transits. Their 24/7 operations support and local expertise are unmatched.",
    author: "Operations Manager",
    company: "Major European Shipping Line",
    rating: 5,
  },
  {
    quote: "Professional, reliable, and always responsive. They handle our crew changes and husbandry services flawlessly across all Egyptian ports.",
    author: "Fleet Manager",
    company: "International Offshore Contractor",
    rating: 5,
  },
  {
    quote: "The most comprehensive maritime agency in Egypt. From cargo handling to vessel attendance, they exceed expectations every time.",
    author: "Logistics Director",
    company: "Oil & Gas Operator",
    rating: 5,
  },
];

export function ClientsSection() {
  return (
    <section className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container-maritime">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            <Star className="h-4 w-4" />
            Trusted Partners
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Serving Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Major oil & gas operators, shipping lines, and offshore contractors trust Max Marine Group 
            for their Egyptian operations.
          </p>
        </motion.div>

        {/* Logo Slider */}
        <div className="relative mb-16">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="overflow-hidden">
            <div className="logo-slider flex items-center gap-12 whitespace-nowrap" style={{ width: "200%" }}>
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="flex flex-col items-center justify-center w-28 h-20 rounded-xl bg-muted/50 border border-border hover:border-primary/30 transition-colors group shrink-0"
                >
                  <span className="text-3xl mb-1 grayscale group-hover:grayscale-0 transition-all">
                    {client.logo}
                  </span>
                  <span className="text-xs text-muted-foreground font-medium">{client.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-maritime p-6 bg-card"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-foreground mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <div className="font-semibold text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
