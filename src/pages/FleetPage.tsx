import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Ship, Anchor, Container, Wrench, ArrowRight, ImageIcon, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const assetCategories = [
  {
    id: "vessels",
    name: "Support Vessels",
    icon: Ship,
    description: "Offshore support vessels and workboats available for charter or operational support.",
    count: "Specs to be confirmed",
    assets: [
      { name: "Vessel specifications pending", status: "Details to be confirmed" }
    ]
  },
  {
    id: "containers",
    name: "Containers & Baskets",
    icon: Container,
    description: "DNV-certified offshore containers and cargo baskets manufactured and available for rental.",
    count: "Available upon request",
    assets: [
      { name: "10ft DNV Containers", status: "Manufacturing & rental" },
      { name: "20ft DNV Containers", status: "Manufacturing & rental" },
      { name: "Cargo Baskets", status: "Various sizes available" },
      { name: "Waste Skips", status: "Available for rental" }
    ]
  },
  {
    id: "equipment",
    name: "Lifting Equipment",
    icon: Anchor,
    description: "Cranes, forklifts, and heavy lifting equipment available at our yard facilities.",
    count: "Yard-based equipment",
    assets: [
      { name: "Mobile Cranes", status: "Capacity to be confirmed" },
      { name: "Forklifts", status: "Various capacities" },
      { name: "Reach Stackers", status: "Container handling" }
    ]
  },
  {
    id: "tools",
    name: "Rental Equipment",
    icon: Wrench,
    description: "Specialized tools and equipment for marine and offshore operations.",
    count: "Available for short/long-term rental",
    assets: [
      { name: "Power Generators", status: "Various capacities" },
      { name: "Welding Equipment", status: "Industrial grade" },
      { name: "Safety Equipment", status: "Certified and inspected" },
      { name: "Specialized Tools", status: "Project-specific" }
    ]
  }
];

const FleetPage = () => {
  return (
    <Layout>
      <Seo
        title="Fleet, Assets & Offshore Equipment"
        description="Max Marine Group's operational assets across Egypt — support vessels, DNV-certified offshore containers and cargo baskets, lifting equipment and specialised rental tools for marine and offshore projects."
        path="/fleet"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Fleet & Assets", path: "/fleet" },
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
              <Ship className="h-4 w-4" />
              Fleet & Assets
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Operational Assets<br />& Equipment
            </h1>
            <p className="text-xl text-primary-foreground/80">
              From containers and lifting equipment to specialized tools, 
              our assets support marine and offshore operations across Egypt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Asset Categories */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="grid md:grid-cols-2 gap-8">
            {assetCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                          <Icon className="h-7 w-7 text-secondary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{category.name}</CardTitle>
                          <CardDescription>{category.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Asset List */}
                      <div className="space-y-2">
                        {category.assets.map((asset, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted">
                            <span className="text-sm font-medium text-foreground">{asset.name}</span>
                            <span className="text-xs text-muted-foreground">{asset.status}</span>
                          </div>
                        ))}
                      </div>

                      {/* Placeholder Gallery */}
                      <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border">
                        {[1, 2, 3].map((num) => (
                          <div key={num} className="aspect-square border border-dashed border-border rounded-lg flex flex-col items-center justify-center bg-muted/50">
                            <ImageIcon className="h-5 w-5 text-muted-foreground mb-1" />
                            <p className="text-xs text-muted-foreground">Photo {num}</p>
                          </div>
                        ))}
                      </div>

                      <p className="text-xs text-muted-foreground text-center italic">
                        {category.count}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Specifications Notice */}
      <section className="section-padding bg-muted">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Detailed Specifications Available on Request
            </h2>
            <p className="text-muted-foreground mb-6">
              For detailed specifications, certifications, and availability of our fleet and assets, 
              please contact our operations team. We can provide technical documentation and arrange 
              inspections as required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="btn-primary">
                  Request Asset Information
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link to="/services/containers-baskets">
                <Button variant="outline">
                  Container Services
                </Button>
              </Link>
            </div>
          </motion.div>
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
              Need Equipment for Your Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Our equipment rental and logistics base services can support your 
              offshore and marine operations. Contact us with your requirements.
            </p>
            <Link to="/services/rental-equipment">
              <Button className="btn-operations">
                View Rental Services
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FleetPage;
