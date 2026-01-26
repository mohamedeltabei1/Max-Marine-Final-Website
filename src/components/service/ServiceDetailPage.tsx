import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { 
  ArrowRight, CheckCircle2, FileText, HelpCircle, MapPin, 
  Send, Upload, ChevronDown 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getServiceById, services } from "@/data/services";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = getServiceById(serviceId || "");
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    vesselName: "",
    port: "",
    eta: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-6">The service you're looking for doesn't exist.</p>
            <Link to="/services">
              <Button>View All Services</Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Inquiry Submitted",
      description: "Your service inquiry has been sent to our operations team. We'll respond within 24 hours.",
    });
    
    setFormData({ name: "", email: "", company: "", phone: "", vesselName: "", port: "", eta: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const Icon = service.icon;
  const relatedServices = service.relatedServices
    .map(id => services.find(s => s.id === id))
    .filter(Boolean);

  return (
    <Layout>
      {/* Hero */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/services" className="inline-flex items-center text-primary-foreground/70 hover:text-gold transition-colors mb-6">
              <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
              Back to Services
            </Link>
            
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Icon className="h-10 w-10 text-gold" />
              </div>
              <div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                  {service.name}
                </h1>
                <p className="text-xl text-primary-foreground/80 max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
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
                <p className="text-muted-foreground leading-relaxed">{service.overview}</p>
              </motion.div>

              {/* Scope of Work */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Scope of Work</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {service.scope.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Our Process</h2>
                <div className="space-y-4">
                  {service.process.map((step, index) => (
                    <div key={step.step} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold shrink-0">
                        {step.step}
                      </div>
                      <div className="flex-1 pb-4 border-b border-border last:border-0">
                        <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Required Documents */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Required Documents</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.requiredDocuments.map((doc, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Ports Supported */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Ports & Locations Supported</h2>
                <div className="flex flex-wrap gap-3">
                  {service.portsSupported.map((port, index) => (
                    <div 
                      key={index} 
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary"
                    >
                      <MapPin className="h-4 w-4" />
                      {port}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {service.faq.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`faq-${index}`}
                      className="border border-border rounded-lg px-4 data-[state=open]:bg-muted"
                    >
                      <AccordionTrigger className="text-left hover:no-underline">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                          <span className="font-medium text-foreground">{item.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pl-8 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Related Case Studies Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">Related Case Studies</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[1, 2].map((num) => (
                    <Card key={num} className="border-dashed">
                      <CardContent className="p-6 text-center">
                        <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm font-medium text-foreground">Case Study #{num}</p>
                        <p className="text-xs text-muted-foreground mt-1">Coming Soon</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Inquiry Card */}
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="text-lg">Request This Service</CardTitle>
                  <CardDescription>Get a quote or schedule a consultation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link to="#inquiry-form">
                    <Button className="w-full btn-primary">
                      Submit Inquiry
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                  <div className="text-center text-sm text-muted-foreground">
                    or call our operations team
                  </div>
                  <a 
                    href="tel:+201234567890" 
                    className="block w-full text-center p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors font-medium"
                  >
                    +20 123 456 7890
                  </a>
                </CardContent>
              </Card>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Related Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {relatedServices.map((s) => s && (
                      <Link 
                        key={s.id} 
                        to={`/services/${s.id}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                      >
                        <s.icon className="h-5 w-5 text-secondary" />
                        <div>
                          <p className="font-medium text-sm text-foreground">{s.name}</p>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="inquiry-form" className="section-padding bg-muted">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Request {service.name}
              </h2>
              <p className="text-muted-foreground">
                Submit your requirements and our operations team will respond within 24 hours
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

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vesselName">Vessel Name</Label>
                      <Input
                        id="vesselName"
                        name="vesselName"
                        value={formData.vesselName}
                        onChange={handleChange}
                        placeholder="MV Example"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="port">Port</Label>
                      <select
                        id="port"
                        name="port"
                        value={formData.port}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select port...</option>
                        {service.portsSupported.map((port) => (
                          <option key={port} value={port}>{port}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="eta">ETA</Label>
                      <Input
                        id="eta"
                        name="eta"
                        type="date"
                        value={formData.eta}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Requirements *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Describe your service requirements..."
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
                    {isSubmitting ? "Submitting..." : "Submit Service Request"}
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
