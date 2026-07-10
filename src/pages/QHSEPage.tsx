import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import { Shield, Award, FileCheck, Users, Download, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const qhsePoints = [
  "Commitment to zero incidents and continuous improvement",
  "Regular safety training and awareness programs for all personnel",
  "Environmental protection measures exceeding regulatory requirements",
  "Quality management systems ensuring consistent service delivery",
  "Regular audits and inspections of operations and facilities",
  "Emergency response procedures and drills",
];

const certifications = [
  { name: "ISO 9001:2015", description: "Quality Management System", status: "Active" },
  { name: "ISO 14001:2015", description: "Environmental Management", status: "Active" },
  { name: "ISO 45001:2018", description: "Occupational Health & Safety", status: "Active" },
  { name: "ISPS Code", description: "Ship and Port Facility Security", status: "Compliant" },
];

const QHSEPage = () => {
  return (
    <Layout>
      <Seo
        title="QHSE & Compliance — Quality, Health, Safety & Environment"
        description="Max Marine Group's QHSE commitment: ISO 9001, ISO 14001 and ISO 45001 management systems, ISPS Code compliance, safety training and environmental standards across all Egyptian operations."
        path="/qhse-compliance"
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "QHSE & Compliance", path: "/qhse-compliance" },
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
              <Shield className="h-4 w-4" />
              QHSE & Compliance
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Quality, Health, Safety<br />& Environment
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Our commitment to operational excellence is founded on rigorous QHSE 
              standards and ethical business practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* QHSE Policy */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Our QHSE Policy
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Max Marine Group is committed to conducting all operations in a manner that 
                  protects the health and safety of our employees, contractors, clients, and 
                  the public, while minimizing our environmental impact.
                </p>
                <p>
                  We maintain comprehensive Quality, Health, Safety and Environment (QHSE) 
                  management systems that meet international standards and exceed local 
                  regulatory requirements.
                </p>
                <p>
                  Our leadership team takes direct responsibility for QHSE performance, 
                  ensuring adequate resources, training, and systems are in place to achieve 
                  our goal of zero incidents.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {qhsePoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                    <span className="text-foreground">{point}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-maritime p-8 bg-muted">
                <Award className="h-12 w-12 text-gold mb-6" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                  Certifications
                </h3>
                <div className="space-y-4">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="p-4 bg-card rounded-lg border border-border">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-semibold text-foreground">{cert.name}</h4>
                          <p className="text-sm text-muted-foreground">{cert.description}</p>
                        </div>
                        <span className="px-2 py-1 rounded text-xs bg-secondary/10 text-secondary font-medium">
                          {cert.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  Certificate copies available upon request.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Anti-Bribery */}
      <section className="section-padding bg-muted">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-16 h-16 rounded-xl gradient-navy flex items-center justify-center mx-auto mb-6">
              <FileCheck className="h-8 w-8 text-gold" />
            </div>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">
              Anti-Bribery & Anti-Corruption Commitment
            </h2>
            <div className="space-y-4 text-muted-foreground text-left">
              <p>
                Max Marine Group maintains a zero-tolerance policy towards bribery and corruption 
                in all its forms. We are committed to conducting business ethically, with integrity, 
                and in compliance with all applicable anti-bribery and anti-corruption laws.
              </p>
              <p>
                All employees, agents, and representatives are prohibited from offering, giving, 
                soliciting, or accepting bribes or kickbacks, whether directly or through third 
                parties. This includes facilitation payments, gifts of significant value, and any 
                other form of improper inducement.
              </p>
              <p>
                We maintain robust due diligence procedures for business partners and suppliers, 
                ensuring that our commitment to ethical conduct extends throughout our supply chain 
                and business relationships.
              </p>
              <p>
                Employees are encouraged to report any suspected violations through our confidential 
                reporting channels without fear of retaliation. All reports are investigated promptly 
                and appropriate action is taken.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Section */}
      <section className="section-padding bg-background">
        <div className="container-maritime text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Download Our Policies
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Request copies of our QHSE policies, certificates, and compliance documentation.
            </p>
            <Button variant="outline" size="lg">
              <Download className="h-5 w-5 mr-2" />
              Request Documentation
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default QHSEPage;
