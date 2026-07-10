import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { 
  Building2, ArrowRight, MapPin, Phone, Mail, 
  FileText, CheckCircle2, ImageIcon, Send, Upload 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { getCompanyById, companies } from "@/data/companies";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Seo } from "@/components/seo/Seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export function CompanyDetailPage() {
  const { companyId } = useParams<{ companyId: string }>();
  const company = getCompanyById(companyId || "");
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!company) {
    return (
      <Layout>
        <Seo title="Company Not Found" path="/companies" noindex />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Company Not Found</h1>
            <p className="text-muted-foreground mb-6">The company you're looking for doesn't exist.</p>
            <Link to="/companies">
              <Button>View All Companies</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Submitted",
      description: `Your inquiry has been sent to ${company.shortName}. Our team will respond within 24 hours.`,
    });
    
    setFormData({ name: "", email: "", company: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Icon = company.icon;

  return (
    <Layout>
      <Seo
        title={`${company.shortName} — ${company.subtitle}`}
        description={company.description}
        path={`/companies/${company.id}`}
        schema={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Companies", path: "/companies" },
          { name: company.shortName, path: `/companies/${company.id}` },
        ])}
      />
      {/* Hero */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/companies" className="inline-flex items-center text-primary-foreground/70 hover:text-gold transition-colors mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Companies
            </Link>
            
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Icon className="h-10 w-10 text-gold" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-2">
                  {company.name}
                </h1>
                <p className="text-xl text-gold font-medium mb-2">{company.subtitle}</p>
                <p className="text-primary-foreground/70">Established {company.established}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Legal Note (if applicable) */}
      {company.legalNote && (
        <div className="bg-muted border-b border-border">
          <div className="container-maritime py-3">
            <p className="text-xs text-muted-foreground italic">
              {company.legalNote}
            </p>
          </div>
        </div>
      )}

      {/* Overview & Key Capabilities */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">{company.overview}</p>
              </motion.div>

              {/* Core Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Core Services</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {company.coreServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0" />
                      <span className="text-foreground">{service}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Key Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Key Capabilities</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {company.keyCapabilities.map((cap, index) => (
                    <Card key={index} className="border-border">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base font-semibold">{cap.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{cap.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Locations</h2>
                <div className="flex flex-wrap gap-3">
                  {company.locations.map((location, index) => (
                    <div 
                      key={index} 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary"
                    >
                      <MapPin className="h-4 w-4" />
                      {location}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Certifications Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Certifications</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018"].map((cert, index) => (
                    <div key={index} className="border border-dashed border-border rounded-lg p-6 text-center">
                      <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm font-medium text-foreground">{cert}</p>
                      <p className="text-xs text-muted-foreground mt-1">Available on request</p>
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
                  {["Operations", "Yards", "Equipment", "Office"].map((label, index) => (
                    <div key={index} className="aspect-square border border-dashed border-border rounded-lg flex flex-col items-center justify-center bg-muted/50">
                      <ImageIcon className="h-8 w-8 text-muted-foreground mb-2" />
                      <p className="text-xs text-muted-foreground">{label} Photo</p>
                      <p className="text-xs text-muted-foreground">Placeholder</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* How to Engage */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">How to Engage</h2>
                <p className="text-muted-foreground mb-4">
                  To begin working with {company.shortName}, please provide:
                </p>
                <ul className="space-y-2">
                  {company.howToEngage.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold shrink-0">
                        {index + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Contact {company.shortName}</CardTitle>
                  <CardDescription>Get in touch with our team</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a 
                    href={`tel:${company.contactPhone.replace(/\s/g, "")}`} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Phone className="h-5 w-5 text-secondary" />
                    <span className="text-sm">{company.contactPhone}</span>
                  </a>
                  <a 
                    href={`mailto:${company.contactEmail}`} 
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <Mail className="h-5 w-5 text-secondary" />
                    <span className="text-sm">{company.contactEmail}</span>
                  </a>
                  
                  <div className="border-t border-border pt-4 mt-4">
                    <p className="text-xs text-muted-foreground mb-2">
                      Lead routing: {company.contactEmail}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Related Companies */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Companies</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {companies
                    .filter(c => c.id !== company.id)
                    .slice(0, 3)
                    .map((c) => (
                      <Link 
                        key={c.id} 
                        to={c.href}
                        className="block p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <p className="font-medium text-sm text-foreground">{c.shortName}</p>
                        <p className="text-xs text-muted-foreground">{c.subtitle}</p>
                      </Link>
                    ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="section-padding bg-muted">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Submit an Inquiry
              </h2>
              <p className="text-muted-foreground">
                Contact {company.shortName} directly with your requirements
              </p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+20 123 456 7890"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Required</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service...</option>
                      {company.coreServices.map((service) => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your requirements..."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label>Attachments (Optional)</Label>
                    <div className="border border-dashed border-border rounded-lg p-6 text-center">
                      <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drag files here or click to upload
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        PDF, DOC, XLS up to 10MB
                      </p>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    <Send className="h-4 w-4 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
