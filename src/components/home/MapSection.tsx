import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const locations = [
  {
    name: "Alexandria",
    type: "Headquarters",
    address: "14 Admon Fermon St., Navy Building, 1st Floor, Smouha",
    phone: "+20 3 123 4567",
    email: "alex@maxmarinegroup.com",
    position: { top: "32%", left: "28%" },
    isHQ: true,
  },
  {
    name: "Abu Qir",
    type: "Office & Yard",
    address: "3 Mohamed Abdou St., 1st Floor",
    phone: "+20 3 234 5678",
    email: "abuqir@maxmarinegroup.com",
    position: { top: "28%", left: "32%" },
  },
  {
    name: "Cairo",
    type: "Office",
    address: "21B Nerko, Degla New Maadi",
    phone: "+20 2 345 6789",
    email: "cairo@maxmarinegroup.com",
    position: { top: "45%", left: "45%" },
  },
  {
    name: "Port Said",
    type: "Office",
    address: "El Nahda St., Free Port Building",
    phone: "+20 66 123 4567",
    email: "portsaid@maxmarinegroup.com",
    position: { top: "22%", left: "48%" },
  },
  {
    name: "Damietta",
    type: "Office & Yard",
    address: "Investment Building, Damietta Port",
    phone: "+20 57 123 4567",
    email: "damietta@maxmarinegroup.com",
    position: { top: "18%", left: "42%" },
  },
  {
    name: "Free Zone",
    type: "Free Zone Facility",
    address: "El-Amreya, Alexandria",
    phone: "+20 3 345 6789",
    email: "freezone@maxmarinegroup.com",
    position: { top: "35%", left: "24%" },
  },
];

export function MapSection() {
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
            <MapPin className="h-4 w-4" />
            Our Network
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Egypt-Wide Coverage
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategic locations across Egypt's major ports and free zones, 
            ensuring rapid response and comprehensive support.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/3] bg-muted rounded-2xl overflow-hidden border border-border"
          >
            {/* Simplified Egypt Map SVG */}
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {/* Mediterranean Sea */}
              <rect x="0" y="0" width="400" height="80" fill="hsl(var(--secondary) / 0.1)" />
              <text x="200" y="40" textAnchor="middle" className="fill-muted-foreground text-xs">Mediterranean Sea</text>
              
              {/* Nile Delta simplified */}
              <path
                d="M150 80 L200 150 L250 80 Z"
                fill="hsl(var(--secondary) / 0.15)"
                stroke="hsl(var(--secondary) / 0.3)"
                strokeWidth="1"
              />
              
              {/* Suez Canal */}
              <line x1="280" y1="80" x2="320" y2="200" stroke="hsl(var(--secondary))" strokeWidth="2" strokeDasharray="4" />
              <text x="310" y="140" className="fill-secondary text-xs" transform="rotate(60 310 140)">Suez Canal</text>
              
              {/* Egypt landmass simplified */}
              <path
                d="M80 80 L150 80 L200 150 L250 80 L350 80 L380 200 L320 300 L80 300 Z"
                fill="hsl(var(--muted))"
                stroke="hsl(var(--border))"
                strokeWidth="2"
              />
              
              {/* Red Sea */}
              <path
                d="M320 80 L380 80 L400 150 L380 200 L320 200 Z"
                fill="hsl(var(--destructive) / 0.1)"
              />
              <text x="360" y="140" textAnchor="middle" className="fill-muted-foreground text-xs" transform="rotate(-90 360 140)">Red Sea</text>
            </svg>
            
            {/* Location Pins */}
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="absolute group cursor-pointer"
                style={{ top: location.position.top, left: location.position.left }}
              >
                <div className={`relative ${location.isHQ ? 'z-10' : ''}`}>
                  <div className={`w-4 h-4 rounded-full ${location.isHQ ? 'bg-gold' : 'bg-secondary'} animate-pulse`} />
                  <div className={`absolute -top-1 -left-1 w-6 h-6 rounded-full ${location.isHQ ? 'bg-gold/30' : 'bg-secondary/30'} animate-ping`} />
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    <div className="bg-card border border-border rounded-lg shadow-maritime-lg p-3 whitespace-nowrap">
                      <div className="font-medium text-sm">{location.name}</div>
                      <div className="text-xs text-muted-foreground">{location.type}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Location Cards */}
          <div className="space-y-4">
            {locations.map((location, index) => (
              <motion.div
                key={location.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`card-maritime p-4 ${location.isHQ ? 'border-gold/50 bg-gold/5' : ''}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-display font-semibold text-foreground">{location.name}</h3>
                      {location.isHQ && (
                        <span className="px-2 py-0.5 rounded text-xs bg-gold text-primary font-medium">HQ</span>
                      )}
                    </div>
                    <p className="text-sm text-secondary font-medium mb-1">{location.type}</p>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${location.phone}`}
                      className="p-2 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      title="Call"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    <a
                      href={`mailto:${location.email}`}
                      className="p-2 rounded-lg bg-muted hover:bg-secondary hover:text-secondary-foreground transition-colors"
                      title="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

            <Link to="/ports-offices-yards">
              <Button variant="outline" className="w-full mt-4">
                View All Locations & Yards
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
