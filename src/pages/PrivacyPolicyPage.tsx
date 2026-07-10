import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { motion } from "framer-motion";
import { Shield, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <Seo
        title="Privacy Policy"
        description="How Max Marine Group collects, uses and protects your personal information."
        path="/privacy"
      />
      {/* Hero */}
      <section className="gradient-navy py-16 md:py-24">
        <div className="container-maritime">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6">
              <Shield className="h-4 w-4" />
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-primary-foreground/70">
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-maritime">
          <div className="max-w-4xl mx-auto prose prose-slate">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>1. Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Max Marine Group ("we", "our", or "us") is committed to protecting the privacy of visitors 
                  to our website (maxmarinegroup.com) and individuals who interact with our services. This 
                  Privacy Policy explains how we collect, use, and protect your personal information.
                </p>
                <p>
                  By using our website or submitting information to us, you consent to the practices 
                  described in this policy.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Contact Information:</strong> Name, email address, phone number, company name, 
                    and job title when you submit inquiry forms or contact us.
                  </li>
                  <li>
                    <strong>Service Request Information:</strong> Vessel details, port information, 
                    cargo specifications, and other operational data submitted through our service request forms.
                  </li>
                  <li>
                    <strong>Career Applications:</strong> CV/resume, employment history, and qualifications 
                    when you apply for positions.
                  </li>
                  <li>
                    <strong>Website Usage Data:</strong> IP address, browser type, pages visited, and time 
                    spent on our website (collected via cookies and analytics tools).
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We use your information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To respond to your inquiries and provide requested services</li>
                  <li>To coordinate port calls, logistics, and operational support</li>
                  <li>To process job applications and contact candidates</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal and regulatory requirements</li>
                  <li>To send service-related communications (not marketing)</li>
                </ul>
                <p>
                  We do not sell your personal information to third parties or use it for 
                  unsolicited marketing purposes.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Data Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Group Companies:</strong> Our subsidiary companies (Max Marine S.A.E., Max Gulf, 
                    Max Marine Free Zone, Heat Oil, Era Tours) for service coordination.
                  </li>
                  <li>
                    <strong>Service Providers:</strong> Third-party vendors who assist with IT, website 
                    hosting, and business operations under confidentiality agreements.
                  </li>
                  <li>
                    <strong>Authorities:</strong> Government agencies, port authorities, or regulatory bodies 
                    when required for operational purposes or legal compliance.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>We retain your information for as long as necessary to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Fulfill the purposes for which it was collected</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Maintain records for business and audit purposes</li>
                </ul>
                <p>
                  Inquiry and service data is typically retained for 7 years. Job application data 
                  is retained for 2 years unless you are hired, in which case it becomes part of 
                  your employment record.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data (subject to legal retention requirements)</li>
                  <li>Withdraw consent for processing (where consent was the basis)</li>
                  <li>Object to processing of your data</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the details below.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We implement appropriate technical and organizational measures to protect your 
                  personal data against unauthorized access, alteration, disclosure, or destruction. 
                  However, no internet transmission is completely secure, and we cannot guarantee 
                  absolute security.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our website uses cookies. For detailed information about the cookies we use and 
                  your choices, please see our <a href="/cookies" className="text-secondary hover:underline">Cookie Policy</a>.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>9. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  For privacy-related inquiries or to exercise your data rights, please contact:
                </p>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Data Protection Contact</p>
                    <a href="mailto:privacy@maxmarinegroup.com" className="text-secondary hover:underline">
                      privacy@maxmarinegroup.com
                    </a>
                  </div>
                </div>
                <p className="text-sm italic">
                  Max Marine Group<br />
                  14 Admon Fermon St., Navy Building, 1st Floor<br />
                  Smouha, Alexandria, Egypt
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Privacy Policy from time to time. The updated policy will be 
                  posted on this page with a revised "Last updated" date. We encourage you to 
                  review this policy periodically.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicyPage;
