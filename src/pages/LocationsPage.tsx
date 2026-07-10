import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema, portServiceSchema } from "@/lib/structured-data";
import { MapPin, ArrowRight, Anchor, Phone, Mail, Clock, Navigation, Ship } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locations, getLocationById } from "@/data/locations";
import { getServiceById } from "@/data/services";
import { offices } from "@/data/contact";

const LocationsPage = () => {
  const { portId } = useParams<{ portId: string }>();

  // ---- Detail page: /ports/:portId ----
  if (portId) {
    const location = getLocationById(portId);
    if (!location) {
      return (
        <Layout>
          <Seo title="Location Not Found" path="/ports" noindex />
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Location Not Found</h1>
              <p className="text-muted-foreground mb-6">The port you're looking for doesn't exist.</p>
              <Link to="/ports">
                <Button>View All Ports</Button>
              </Link>
            </div>
          </div>
        </Layout>
      );
    }

    const services = location.serviceIds.map((id) => getServiceById(id)).filter(Boolean);
    const office = location.officeId ? offices.find((o) => o.id === location.officeId) : undefined;

    return (
      <Layout>
        <Seo
          title={location.metaTitle}
          description={location.metaDescription}
          path={`/ports/${location.id}`}
          schema={[
            portServiceSchema(location),
            breadcrumbSchema([
              { name: "Home", path: "/" },
              { name: "Ports We Serve", path: "/ports" },
              { name: location.port, path: `/ports/${location.id}` },
            ]),
          ]}
        />

        {/* Hero */}
        <section className="gradient-navy py-16 md:py-24">
          <div className="container-maritime">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Link to="/ports" className="inline-flex items-center text-primary-foreground/70 hover:text-gold transition-colors mb-6">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                All Ports We Serve
              </Link>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
                <MapPin className="h-4 w-4" />
                {location.region}
              </span>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {location.headline}
              </h1>
              <p className="text-xl text-primary-foreground/80 max-w-3xl">{location.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* Main content */}
        <section className="section-padding bg-background">
          <div className="container-maritime">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Services offered here */}
              <div className="lg:col-span-2">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Our Services at {location.displayName}
                </h2>
                <p className="text-muted-foreground mb-8">{location.geoFact}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {services.map((service) => {
                    if (!service) return null;
                    const Icon = service.icon;
                    return (
                      <Link key={service.id} to={`/services/${service.id}`} className="block h-full">
                        <div className="card-maritime h-full p-5 group">
                          <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary transition-colors">
                            <Icon className="h-5 w-5 text-secondary group-hover:text-secondary-foreground transition-colors" />
                          </div>
                          <h3 className="font-display font-semibold text-foreground mb-1 group-hover:text-secondary transition-colors">
                            {service.name}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">{service.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-8">
                  <Link to="/services" className="inline-flex items-center text-secondary font-medium hover:underline">
                    View our complete service portfolio
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-border">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                    About {location.displayName}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{location.about}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Port at a glance */}
                <div className="card-maritime p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Ship className="h-5 w-5 text-secondary" />
                    Port at a Glance
                  </h3>
                  <dl className="divide-y divide-border">
                    {location.facts.map((fact) => (
                      <div key={fact.label} className="py-2.5 first:pt-0 last:pb-0">
                        <dt className="text-xs uppercase tracking-wide text-muted-foreground">{fact.label}</dt>
                        <dd className="text-sm text-foreground font-medium mt-0.5">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Office / contact */}
                <div className="card-maritime p-6">
                  {office ? (
                    <>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Anchor className="h-5 w-5 text-secondary" />
                        {office.name} Office
                      </h3>
                      <ul className="space-y-3 text-sm text-muted-foreground mb-6">
                        <li className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 text-secondary shrink-0 mt-0.5" />
                          {office.address}
                        </li>
                        <li>
                          <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Phone className="h-4 w-4 text-secondary shrink-0" />
                            {office.phone}
                          </a>
                        </li>
                        <li>
                          <a href={`mailto:${office.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
                            <Mail className="h-4 w-4 text-secondary shrink-0" />
                            {office.email}
                          </a>
                        </li>
                        <li className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-secondary shrink-0" />
                          {office.hours}
                        </li>
                      </ul>
                      {office.coordinates && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${office.coordinates.lat},${office.coordinates.lng}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-secondary font-medium hover:underline mb-6"
                        >
                          <Navigation className="h-4 w-4" />
                          View on map
                        </a>
                      )}
                    </>
                  ) : (
                    <>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Anchor className="h-5 w-5 text-secondary" />
                        Operational Coverage
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6">
                        We provide services at {location.displayName} through our regional operations team and trusted local network. Contact us for a nomination or quote.
                      </p>
                    </>
                  )}
                  <Link to="/contact">
                    <Button className="btn-operations w-full">
                      Request Service at {location.port}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // ---- Listing page: /ports ----
  return (
    <Layout>
      <Seo
        title="Egyptian Ports We Serve"
        description="Max Marine Group provides ship agency, Suez Canal transit, husbandry, bunkering and offshore support at Egypt's major ports — Alexandria, Port Said, Suez, Damietta, Ain Sokhna and Abu Qir."
        path="/ports"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Ports We Serve", path: "/ports" },
        ])}
      />
      {/* Hero */}
      <section className="gradient-navy py-20 md:py-32">
        <div className="container-maritime">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <MapPin className="h-4 w-4" />
              Ports We Serve
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Marine Services Across<br />Egypt's Major Ports
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From the Mediterranean to the Red Sea, Max Marine Group delivers ship agency, Suez Canal transit and offshore support at every major Egyptian port.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ports grid */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={`/ports/${location.id}`} className="block h-full">
                  <div className="card-maritime h-full p-6 group">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                      <MapPin className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                    </div>
                    <span className="text-xs text-secondary font-medium">{location.region}</span>
                    <h2 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                      {location.displayName}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{location.intro}</p>
                    <div className="flex items-center text-secondary font-medium text-sm">
                      Services at {location.port}
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LocationsPage;
