import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Building2, ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { companies } from "@/data/companies";
import { CompanyDetailPage } from "@/components/company/CompanyDetailPage";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/lib/structured-data";

const CompaniesPage = () => {
  const { companyId } = useParams<{ companyId: string }>();

  // If a specific company is requested, show the detail page
  if (companyId) {
    return <CompanyDetailPage />;
  }

  // Otherwise show the companies listing
  return (
    <Layout>
      <Seo
        title="Our Companies — Divisions of Max Marine Group"
        description="Explore the five companies of Max Marine Group: Max Marine S.A.E. shipping agency, Max Gulf, Max Marine Free Zone, Heat Oil and Era Tours — specialised maritime, petroleum and logistics divisions across Egypt."
        path="/companies"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Companies", path: "/companies" },
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
              <Building2 className="h-4 w-4" />
              Our Companies
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Five Companies,<br />One Unified Group
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Each company within Max Marine Group contributes specialized expertise 
              while benefiting from shared resources and coordinated operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Companies List */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="space-y-12">
            {companies.map((company, index) => {
              const Icon = company.icon;
              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="card-maritime p-8 md:p-10"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-16 h-16 rounded-xl gradient-navy flex items-center justify-center shrink-0">
                          <Icon className="h-8 w-8 text-gold" />
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-bold text-foreground mb-1">
                            {company.name}
                          </h2>
                          <p className="text-secondary font-medium">{company.subtitle}</p>
                          <span className="text-xs text-muted-foreground">Est. {company.established}</span>
                        </div>
                      </div>

                      {company.legalNote && (
                        <p className="text-xs text-muted-foreground italic mb-4 p-3 bg-muted rounded-lg">
                          {company.legalNote}
                        </p>
                      )}

                      <p className="text-muted-foreground mb-6">
                        {company.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Services</h4>
                        <div className="flex flex-wrap gap-2">
                          {company.coreServices.slice(0, 4).map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm"
                            >
                              {service}
                            </span>
                          ))}
                          {company.coreServices.length > 4 && (
                            <span className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm">
                              +{company.coreServices.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <Link to={company.href}>
                        <Button variant="outline">
                          Learn More About {company.shortName}
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>

                    <div className="bg-muted rounded-xl p-6">
                      <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-secondary" />
                        Locations
                      </h4>
                      <ul className="space-y-2">
                        {company.locations.map((location) => (
                          <li key={location} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                            {location}
                          </li>
                        ))}
                      </ul>

                      <div className="border-t border-border mt-6 pt-6 space-y-3">
                        <a href={`tel:${company.contactPhone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
                          <Phone className="h-4 w-4" />
                          {company.contactPhone}
                        </a>
                        <a href={`mailto:${company.contactEmail}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
                          <Mail className="h-4 w-4" />
                          {company.contactEmail}
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CompaniesPage;
