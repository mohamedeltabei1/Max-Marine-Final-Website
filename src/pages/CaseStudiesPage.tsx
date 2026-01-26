import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  FileText, MapPin, Calendar, Building2, ArrowRight, 
  Filter, Ship, Package, Users, Anchor 
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useState } from "react";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  location: string;
  port: string;
  date: string;
  service: string;
  industry: string;
  challenge: string;
  scope: string[];
  execution: string;
  outcome: string;
  evidencePlaceholder: boolean;
}

const caseStudies: CaseStudy[] = [
  {
    id: "offshore-drilling-support",
    title: "Offshore Drilling Campaign Logistics Support",
    client: "Confidential Client",
    location: "Mediterranean, Egypt",
    port: "Alexandria / Abu Qir",
    date: "2023",
    service: "Logistics Base",
    industry: "Oil & Gas",
    challenge: "A major operator required comprehensive logistics base support for a multi-well drilling campaign, including equipment storage, material management, and vessel coordination over an extended project timeline.",
    scope: [
      "Dedicated storage yard allocation",
      "Material receiving and dispatch coordination",
      "Tubular and drilling equipment handling",
      "Supply vessel back-loading operations",
      "Inventory management and reporting",
      "Customs and documentation support"
    ],
    execution: "Max Marine established a dedicated logistics base at our Abu Qir facility, implementing a computerized inventory system and coordinating closely with the drilling contractor and supply vessel operators. Our team managed multiple material movements per week throughout the campaign.",
    outcome: "Successfully supported the drilling campaign with zero lost-time incidents and maintained material availability throughout the project duration. Client feedback highlighted the efficiency of back-load operations and documentation accuracy.",
    evidencePlaceholder: true
  },
  {
    id: "crew-rotation-project",
    title: "Multi-Vessel Crew Change Program",
    client: "International Shipping Line",
    location: "Egypt Ports",
    port: "Port Said / Alexandria",
    date: "2022-2023",
    service: "Husbandry Services",
    industry: "Shipping",
    challenge: "Coordination of regular crew rotations for a fleet of vessels calling at Egyptian ports, requiring efficient immigration processing, accommodation, and transport logistics for multinational crews.",
    scope: [
      "Airport meet & greet services",
      "Immigration sign-on/sign-off processing",
      "Hotel accommodation booking",
      "Airport-to-vessel transfers",
      "Flight booking and reconfirmation",
      "Cash to Master services"
    ],
    execution: "Implemented a standardized crew change workflow with dedicated coordinators for each vessel call. Pre-arrival documentation preparation ensured efficient immigration processing, while transport and accommodation were pre-arranged based on vessel schedules.",
    outcome: "Established as the preferred agent for crew changes, handling rotations efficiently with positive feedback on transport reliability and accommodation standards.",
    evidencePlaceholder: true
  },
  {
    id: "project-cargo-import",
    title: "Heavy Equipment Import for EPC Project",
    client: "Confidential Client",
    location: "Alexandria",
    port: "El-Dekheila",
    date: "2023",
    service: "Cargo & Freight",
    industry: "Construction / EPC",
    challenge: "Import and delivery of heavy equipment and fabricated structures for an industrial project, requiring coordination of specialized transport, customs clearance, and delivery to site.",
    scope: [
      "Project cargo coordination",
      "Customs clearance for industrial equipment",
      "Heavy lift and transport arrangement",
      "Delivery to project site",
      "Documentation and certification",
      "Insurance coordination"
    ],
    execution: "Coordinated the shipment from origin, prepared customs documentation in advance, and arranged specialized transport for oversized loads. Worked with port authorities and traffic management for inland transport routing.",
    outcome: "Equipment delivered to site on schedule, meeting project milestones. Customs clearance completed efficiently with all documentation in order.",
    evidencePlaceholder: true
  }
];

const serviceFilters = ["All", "Logistics Base", "Husbandry Services", "Cargo & Freight", "Vessel Attendance"];
const industryFilters = ["All", "Oil & Gas", "Shipping", "Construction / EPC"];
const locationFilters = ["All", "Alexandria", "Port Said", "Damietta"];

const CaseStudiesPage = () => {
  const { caseStudyId } = useParams<{ caseStudyId: string }>();
  const [serviceFilter, setServiceFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");

  // If a specific case study is requested
  if (caseStudyId) {
    const caseStudy = caseStudies.find(cs => cs.id === caseStudyId);
    if (!caseStudy) {
      return (
        <Layout>
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">Case Study Not Found</h1>
              <p className="text-muted-foreground mb-6">The case study you're looking for doesn't exist.</p>
              <Link to="/case-studies">
                <Button>View All Case Studies</Button>
              </Link>
            </div>
          </div>
        </Layout>
      );
    }

    return (
      <Layout>
        {/* Case Study Detail Hero */}
        <section className="gradient-navy py-16 md:py-24">
          <div className="container-maritime">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link to="/case-studies" className="inline-flex items-center text-primary-foreground/70 hover:text-gold transition-colors mb-6">
                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                Back to Case Studies
              </Link>
              
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gold/20 text-gold text-sm">
                  {caseStudy.service}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm">
                  {caseStudy.industry}
                </span>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                {caseStudy.title}
              </h1>
              
              <div className="flex flex-wrap gap-6 text-primary-foreground/70">
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  {caseStudy.client}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  {caseStudy.port}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {caseStudy.date}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Case Study Content */}
        <section className="section-padding bg-background">
          <div className="container-maritime">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-12">
                {/* Challenge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
                </motion.div>

                {/* Scope */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Scope of Work</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {caseStudy.scope.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                        <div className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                          {index + 1}
                        </div>
                        <span className="text-foreground text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Execution */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Execution</h2>
                  <p className="text-muted-foreground leading-relaxed">{caseStudy.execution}</p>
                </motion.div>

                {/* Outcome */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Outcome</h2>
                  <Card className="border-secondary/30 bg-secondary/5">
                    <CardContent className="p-6">
                      <p className="text-foreground leading-relaxed">{caseStudy.outcome}</p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Evidence Placeholder */}
                {caseStudy.evidencePlaceholder && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="font-display text-2xl font-bold text-foreground mb-4">Evidence & Documentation</h2>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {["Project Photos", "Letter of Satisfaction", "Certificates"].map((label, index) => (
                        <div key={index} className="aspect-square border border-dashed border-border rounded-lg flex flex-col items-center justify-center bg-muted/50">
                          <FileText className="h-8 w-8 text-muted-foreground mb-2" />
                          <p className="text-xs text-muted-foreground text-center px-2">{label}</p>
                          <p className="text-xs text-muted-foreground">Available on request</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="sticky top-24">
                  <CardHeader>
                    <CardTitle className="text-lg">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Client</span>
                        <span className="font-medium text-foreground">{caseStudy.client}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Location</span>
                        <span className="font-medium text-foreground">{caseStudy.location}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Port</span>
                        <span className="font-medium text-foreground">{caseStudy.port}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Period</span>
                        <span className="font-medium text-foreground">{caseStudy.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Service</span>
                        <span className="font-medium text-foreground">{caseStudy.service}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Industry</span>
                        <span className="font-medium text-foreground">{caseStudy.industry}</span>
                      </div>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                      <Link to="/contact">
                        <Button className="w-full btn-primary">
                          Discuss Similar Requirements
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Filter case studies
  const filteredCaseStudies = caseStudies.filter(cs => {
    const matchesService = serviceFilter === "All" || cs.service === serviceFilter;
    const matchesIndustry = industryFilter === "All" || cs.industry === industryFilter;
    return matchesService && matchesIndustry;
  });

  // Main listing page
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
              <FileText className="h-4 w-4" />
              Case Studies
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Project Experience<br />& Track Record
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Examples of our operational capabilities across shipping, offshore, and logistics projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-muted py-6 border-b border-border">
        <div className="container-maritime">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Filter:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center mr-1">Service:</span>
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setServiceFilter(filter)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    serviceFilter === filter
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="text-xs text-muted-foreground self-center mr-1">Industry:</span>
              {industryFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setIndustryFilter(filter)}
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${
                    industryFilter === filter
                      ? "bg-secondary text-secondary-foreground"
                      : "bg-background text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          {filteredCaseStudies.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No case studies match your filters.</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => { setServiceFilter("All"); setIndustryFilter("All"); }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCaseStudies.map((caseStudy, index) => (
                <motion.div
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/case-studies/${caseStudy.id}`} className="block h-full">
                    <Card className="h-full group hover:border-secondary transition-colors">
                      <CardHeader>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                            {caseStudy.service}
                          </span>
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded">
                            {caseStudy.industry}
                          </span>
                        </div>
                        <CardTitle className="text-lg group-hover:text-secondary transition-colors">
                          {caseStudy.title}
                        </CardTitle>
                        <CardDescription className="flex flex-wrap gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {caseStudy.port}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {caseStudy.date}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {caseStudy.challenge}
                        </p>
                        <div className="flex items-center text-secondary font-medium text-sm">
                          Read Case Study <ArrowRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
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
              Have a Similar Project?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Contact our operations team to discuss your requirements. 
              We can provide references and detailed capability information.
            </p>
            <Link to="/contact">
              <Button className="btn-operations">
                Discuss Your Project
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudiesPage;
