import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Anchor, Calendar, Building2, MapPin, Ship, Award, Users, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import vesselImage from "@/assets/vessel-operations.jpg";

const timeline = [
  { year: "1972", event: "Max Marine S.A.E. founded in Alexandria, establishing roots in Egyptian maritime services" },
  { year: "1985", event: "Expanded operations to cover Port Said and Suez Canal transit services" },
  { year: "1998", event: "Established Max Gulf to serve regional shipping routes" },
  { year: "2000", event: "Era Tours founded to support group travel and logistics requirements" },
  { year: "2005", event: "Max Marine Free Zone established in El-Amreya, Alexandria" },
  { year: "2010", event: "Heat Oil Free Zone launched for specialized petroleum services" },
  { year: "2015", event: "Abu Qir and Damietta yard facilities expanded" },
  { year: "2020", event: "Digital transformation and enhanced service capabilities" },
];

const values = [
  { icon: Ship, title: "Operational Excellence", description: "Delivering reliable, efficient services across all operations" },
  { icon: Award, title: "Integrity", description: "Conducting business with transparency and ethical standards" },
  { icon: Users, title: "Client Focus", description: "Building lasting partnerships through exceptional service" },
  { icon: Globe, title: "Local Expertise", description: "Leveraging decades of Egyptian maritime knowledge" },
];

const GroupPage = () => {
  return (
    <Layout>
      <Seo
        title="About the Group — Egyptian Maritime Companies Since 1972"
        description="Max Marine Group brings together five specialised maritime companies operating across Egypt since 1972 — ship agency, offshore support, free-zone and petroleum services from Alexandria to the Suez Canal."
        path="/group"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "The Group", path: "/group" },
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
              About the Group
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Max Marine Group
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-4">
              A multi-company group built on decades of marine agency expertise and offshore 
              support, with a ports network spanning Egypt's major maritime gateways.
            </p>
            <p className="text-primary-foreground/60 text-lg">
              Founded in 1972 • Alexandria, Egypt
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Five Decades of Maritime Excellence
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Max Marine Group was established in 1972 in Alexandria, Egypt. What began as a
                  focused shipping agency has grown into a comprehensive group of five specialized
                  companies serving the maritime, offshore, and energy sectors.
                </p>
                <p>
                  Today, the Group operates from six strategic locations across Egypt, including
                  Alexandria, Abu Qir, Cairo, Port Said, Damietta, and our Free Zone facilities
                  in El-Amreya. This network ensures rapid response and comprehensive coverage
                  for all port call and logistics requirements.
                </p>
                <p>
                  Our integrated structure allows us to provide end-to-end solutions—from vessel 
                  arrival and cargo handling to husbandry services and specialized yard operations. 
                  Each company within the group contributes specific expertise while benefiting from 
                  shared resources and coordinated support.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-maritime-xl">
                <img
                  src={vesselImage}
                  alt="Maritime operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision and interaction across our group.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="card-maritime p-6 text-center bg-card"
              >
                <div className="w-14 h-14 rounded-xl gradient-navy flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-7 w-7 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              <Calendar className="h-4 w-4" />
              Our History
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Key Milestones
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-xl gradient-navy flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-gold text-sm">{item.year}</span>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pt-4">
                  <p className="text-foreground">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Companies CTA */}
      <section className="section-padding gradient-navy">
        <div className="container-maritime text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Building2 className="h-12 w-12 text-gold mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Explore Our Companies
            </h2>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Each company within Max Marine Group brings specialized expertise 
              while working together to deliver comprehensive solutions.
            </p>
            <Link to="/companies">
              <Button className="btn-operations">
                View All Companies
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GroupPage;
