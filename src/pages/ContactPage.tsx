import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { offices, inquiryTypes } from "@/data/contact";
import { Seo } from "@/components/seo/Seo";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/structured-data";

const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace with real form submission
    // Example: await fetch('/api/contact', { method: 'POST', body: new FormData(e.target) })
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your inquiry. Our team will respond within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      <Seo
        title="Contact Us — 24/7 Marine Operations Across Egypt"
        description="Contact Max Marine Group for ship agency, Suez transit, crew changes and offshore support. Offices in Alexandria, Port Said, Damietta, Suez and Cairo with 24/7 operations coverage."
        path="/contact"
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
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
              <Phone className="h-4 w-4" />
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Our operations team is available to support your maritime requirements 
              across all Egyptian ports.
            </p>

            {/* Operations Hotline */}
            <div className="inline-flex items-center gap-4 px-6 py-4 rounded-xl bg-gold/20 border border-gold/30">
              <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-sm text-gold">Operations Support 24/7</div>
                <a href="tel:+201234567890" className="text-xl font-display font-bold text-primary-foreground hover:text-gold transition-colors">
                  +20 123 456 7890
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form + Offices */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Submit an Inquiry
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input id="company" name="company" required placeholder="Company name" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required placeholder="email@company.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="+20 xxx xxx xxxx" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="inquiryType">Inquiry Type *</Label>
                  <Select name="inquiryType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      {inquiryTypes.map((type) => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vesselName">Vessel Name (if applicable)</Label>
                  <Input id="vesselName" name="vesselName" placeholder="M/V Vessel Name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Please describe your requirements..."
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachment">Attachments (Optional)</Label>
                  <Input id="attachment" name="attachment" type="file" accept=".pdf,.doc,.docx,.xls,.xlsx" />
                  <p className="text-xs text-muted-foreground">PDF, DOC, or Excel files. Max 10MB.</p>
                </div>

                <Button type="submit" className="btn-operations w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Inquiry
                      <Send className="h-5 w-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Offices */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                Our Offices
              </h2>
              
              <div className="space-y-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={office.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="card-maritime p-5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg gradient-navy flex items-center justify-center shrink-0">
                        <Building2 className="h-5 w-5 text-gold" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display font-semibold text-foreground mb-2">
                          {office.name}
                        </h3>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-secondary" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="h-4 w-4 text-secondary" />
                            <span>{office.hours}</span>
                          </div>
                        </div>
                        <div className="flex gap-4 mt-3">
                          <a
                            href={`tel:${office.phone}`}
                            className="inline-flex items-center gap-1 text-sm text-secondary hover:underline"
                          >
                            <Phone className="h-3.5 w-3.5" />
                            Call
                          </a>
                          <a
                            href={`mailto:${office.email}`}
                            className="inline-flex items-center gap-1 text-sm text-secondary hover:underline"
                          >
                            <Mail className="h-3.5 w-3.5" />
                            Email
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
