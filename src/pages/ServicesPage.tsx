import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Anchor, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { ServiceDetailPage } from "@/components/service/ServiceDetailPage";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/lib/structured-data";

const ServicesPage = () => {
  const { serviceId } = useParams<{ serviceId: string }>();

  // If a specific service is requested, show the detail page
  if (serviceId) {
    return <ServiceDetailPage />;
  }

  // Otherwise show the services listing
  return (
    <Layout>
      <Seo
        title="Marine & Offshore Services in Egypt"
        description="Full marine services portfolio across Egypt: ship agency, Suez Canal transit, port husbandry, bunkering, ship chandlery, customs clearance, offshore logistics, waste management and more — at every major Egyptian port."
        path="/services"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
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
              <Anchor className="h-4 w-4" />
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Complete Maritime<br />Service Portfolio
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From vessel arrival to departure, we provide comprehensive support 
              for shipping lines, offshore operators, and cargo owners across Egypt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/services/${service.id}`} className="block h-full">
                    <div className="card-maritime h-full p-6 group">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                        <Icon className="h-6 w-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                      </div>
                      
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-colors">
                        {service.name}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {service.description}
                      </p>
                      
                      <div className="mb-4">
                        <ul className="space-y-1">
                          {service.scope.slice(0, 3).map((item) => (
                            <li key={item} className="text-xs text-muted-foreground flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-secondary" />
                              {item}
                            </li>
                          ))}
                          {service.scope.length > 3 && (
                            <li className="text-xs text-secondary">+{service.scope.length - 3} more</li>
                          )}
                        </ul>
                      </div>
                      
                      <div className="flex items-center text-secondary font-medium text-sm">
                        View Service <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Need a Customized Solution?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact our operations team to discuss your specific requirements. 
              We can tailor our services to meet your exact needs.
            </p>
            <Link to="/contact">
              <Button className="btn-operations">
                Contact Operations
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
