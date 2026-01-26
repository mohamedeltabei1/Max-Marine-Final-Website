import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  MapPin, Building2, Warehouse, Phone, Mail, Clock, 
  Navigation, ArrowRight, Wrench, Shield, ImageIcon 
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const offices = [
  {
    id: "alexandria",
    name: "Alexandria Office",
    type: "Headquarters",
    address: "14 Admon Fermon St., Navy Building, 1st Floor, Smouha, Alexandria",
    phone: "+20 3 123 4567",
    email: "alexandria@maxmarinegroup.com",
    hours: "Sunday - Thursday: 08:00 - 17:00",
    coordinates: { lat: 31.2156, lng: 29.9553 }
  },
  {
    id: "abu-qir",
    name: "Abu Qir Office",
    type: "Operations Office",
    address: "3 Mohamed Abdou St., 1st Floor, Abu Qir, Alexandria",
    phone: "+20 3 234 5678",
    email: "abuqir@maxmarinegroup.com",
    hours: "Sunday - Thursday: 08:00 - 17:00",
    coordinates: { lat: 31.3167, lng: 30.0667 }
  },
  {
    id: "cairo",
    name: "Cairo Office",
    type: "Liaison Office",
    address: "21B Nerko, Degla New Maadi, Cairo",
    phone: "+20 2 345 6789",
    email: "cairo@maxmarinegroup.com",
    hours: "Sunday - Thursday: 09:00 - 17:00",
    coordinates: { lat: 29.9602, lng: 31.2569 }
  },
  {
    id: "port-said",
    name: "Port Said Office",
    type: "Port Operations",
    address: "El Nahda St., Free Port Building, Port Said",
    phone: "+20 66 456 7890",
    email: "portsaid@maxmarinegroup.com",
    hours: "Sunday - Thursday: 08:00 - 17:00",
    coordinates: { lat: 31.2653, lng: 32.3019 }
  },
  {
    id: "damietta",
    name: "Damietta Office",
    type: "Port Operations",
    address: "Investment Building, Damietta Port, Damietta",
    phone: "+20 57 567 8901",
    email: "damietta@maxmarinegroup.com",
    hours: "Sunday - Thursday: 08:00 - 17:00",
    coordinates: { lat: 31.4175, lng: 31.8144 }
  },
  {
    id: "free-zone",
    name: "El-Amreya Free Zone",
    type: "Free Zone Operations",
    address: "El-Amreya Free Zone, Alexandria",
    phone: "+20 3 678 9012",
    email: "freezone@maxmarinegroup.com",
    hours: "Sunday - Thursday: 08:00 - 17:00",
    coordinates: { lat: 31.0833, lng: 29.8167 }
  }
];

const yards = [
  {
    id: "yard-abu-qir",
    name: "Abu Qir Yard",
    type: "Full Service Yard",
    location: "Abu Qir, Alexandria",
    description: "Our primary logistics base and yard facility, providing storage, handling, and equipment support for offshore and marine operations.",
    capabilities: [
      "Secure open and covered storage",
      "Heavy lifting equipment",
      "Container handling and storage",
      "Pipe yard and tubular management",
      "Workshop facilities",
      "24-hour security"
    ],
    equipment: [
      { name: "Mobile Cranes", spec: "Capacity to be confirmed" },
      { name: "Forklifts", spec: "Various capacities available" },
      { name: "Covered Warehouse", spec: "Area to be confirmed" },
      { name: "Open Storage", spec: "Area to be confirmed" }
    ],
    hse: [
      "HSE (Health, Safety and Environment) management system",
      "Fire fighting equipment",
      "First aid facilities",
      "Security patrols",
      "Access control"
    ]
  },
  {
    id: "yard-damietta",
    name: "Damietta Yard",
    type: "Operational Yard",
    location: "Damietta Port Area",
    description: "Supporting operations at Damietta Port with storage and logistics capabilities for project cargo and offshore support.",
    capabilities: [
      "Open storage areas",
      "Material receiving and dispatch",
      "Cargo inspection support",
      "Container storage",
      "Coordination with port facilities"
    ],
    equipment: [
      { name: "Handling Equipment", spec: "Available on request" },
      { name: "Storage Area", spec: "Capacity to be confirmed" }
    ],
    hse: [
      "HSE controls implemented",
      "Security arrangements",
      "Safety procedures in place"
    ]
  }
];

const PortsOfficesYardsPage = () => {
  const { yardId } = useParams<{ yardId: string }>();

  // If a specific yard is requested, show the yard detail
  if (yardId) {
    const yard = yards.find(y => y.id === yardId);
    if (!yard) {
      return (
        <Layout>
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Yard Not Found</h1>
              <p className="text-muted-foreground mb-6">The yard you're looking for doesn't exist.</p>
              <Link to="/ports-offices-yards">
                <Button>View All Locations</Button>
              </Link>
            </div>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        {/* Yard Detail Hero */}
        <section className="gradient-navy py-16 md:py-24">
          <div className="container-maritime">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/ports-offices-yards" className="inline-flex items-center text-primary-foreground/70 hover:text-gold transition-colors mb-6">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Locations
              </Link>
              
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                  <Warehouse className="h-10 w-10 text-gold" />
                </div>
                <div>
                  <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                    {yard.name}
                  </h1>
                  <p className="text-xl text-gold font-medium mb-2">{yard.type}</p>
                  <p className="text-primary-foreground/70 flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {yard.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Yard Content */}
        <section className="section-padding bg-background">
          <div className="container-maritime">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Overview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">{yard.description}</p>
                </motion.div>

                {/* Capabilities */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Capabilities</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {yard.capabilities.map((cap, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <Wrench className="h-5 w-5 text-secondary shrink-0" />
                        <span className="text-foreground text-sm">{cap}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Equipment */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Equipment</h2>
                  <Card>
                    <CardContent className="p-0">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left p-4 font-semibold text-foreground">Equipment</th>
                            <th className="text-left p-4 font-semibold text-foreground">Specification</th>
                          </tr>
                        </thead>
                        <tbody>
                          {yard.equipment.map((item, index) => (
                            <tr key={index} className="border-b border-border last:border-0">
                              <td className="p-4 text-foreground">{item.name}</td>
                              <td className="p-4 text-muted-foreground italic">{item.spec}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </CardContent>
                  </Card>
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    * Specifications subject to confirmation. Contact us for current availability.
                  </p>
                </motion.div>

                {/* HSE */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    HSE Controls
                  </h2>
                  <p className="text-xs text-muted-foreground mb-4">
                    HSE = Health, Safety and Environment
                  </p>
                  <div className="space-y-2">
                    {yard.hse.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <Shield className="h-5 w-5 text-secondary shrink-0" />
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Gallery Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Gallery</h2>
                  <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {["Yard Overview", "Storage Areas", "Equipment", "Operations"].map((label, index) => (
                      <div key={index} className="aspect-square border border-dashed border-border rounded-lg flex flex-col items-center justify-center bg-muted/50">
                        <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="text-xs text-muted-foreground">Placeholder</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Yard Inquiry</CardTitle>
                    <CardDescription>Contact us about this facility</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Link to="/contact">
                      <Button className="w-full btn-primary">
                        Submit Yard Inquiry
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                    <div className="text-center text-sm text-muted-foreground">
                      or call operations
                    </div>
                    <a 
                      href="tel:+201234567890" 
                      className="block w-full text-center p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors font-medium"
                    >
                      +20 123 456 7890
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Main hub page
  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-32">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Our Network
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Ports, Offices<br />& Yards
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Our Egypt-wide network ensures operational coverage at all major ports, 
              supported by dedicated yard facilities and free zone operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-muted py-12">
        <div className="container-maritime">
          <div className="aspect-[21/9] bg-secondary/10 rounded-xl flex items-center justify-center border border-border">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-secondary mx-auto mb-4" />
              <p className="text-lg font-medium text-foreground">Interactive Egypt Map</p>
              <p className="text-sm text-muted-foreground">Coverage visualization with location pins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              <Building2 className="h-8 w-8 text-secondary inline mr-3" />
              Offices
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our office network provides operational coordination and client support across Egypt's key commercial centers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded">
                        {office.type}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{office.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{office.address}</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                      <span className="text-muted-foreground">{office.hours}</span>
                    </div>
                    <div className="border-t border-border pt-4 space-y-2">
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-foreground hover:text-secondary transition-colors">
                        <Phone className="h-4 w-4" />
                        {office.phone}
                      </a>
                      <a href={`mailto:${office.email}`} className="flex items-center gap-3 text-sm text-foreground hover:text-secondary transition-colors">
                        <Mail className="h-4 w-4" />
                        {office.email}
                      </a>
                    </div>
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm text-secondary hover:underline"
                    >
                      <Navigation className="h-4 w-4 mr-1" />
                      Get Directions
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Yards */}
      <section className="section-padding bg-muted">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              <Warehouse className="h-8 w-8 text-secondary inline mr-3" />
              Yards & Facilities
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Our yard facilities provide logistics base capabilities for offshore operations, storage, and equipment support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {yards.map((yard, index) => (
              <motion.div
                key={yard.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                        <Warehouse className="h-7 w-7 text-secondary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-1">{yard.name}</CardTitle>
                        <CardDescription>{yard.type} — {yard.location}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{yard.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {yard.capabilities.slice(0, 4).map((cap, i) => (
                        <span key={i} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                          {cap}
                        </span>
                      ))}
                      {yard.capabilities.length > 4 && (
                        <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                          +{yard.capabilities.length - 4} more
                        </span>
                      )}
                    </div>

                    <Link to={`/ports-offices-yards/${yard.id}`}>
                      <Button variant="outline" className="w-full">
                        View Yard Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-maritime text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Operations Contact Available 24/7
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              For urgent port call support or operations coordination, 
              contact our 24/7 operations line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+201234567890">
                <Button className="btn-operations">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Operations
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Send Inquiry
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PortsOfficesYardsPage;
