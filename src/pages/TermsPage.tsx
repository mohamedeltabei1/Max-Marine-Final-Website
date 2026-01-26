import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsPage = () => {
  return (
    <Layout>
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
              <FileText className="h-4 w-4" />
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Terms & Conditions
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
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  By accessing and using the Max Marine Group website (maxmarinegroup.com), you accept 
                  and agree to be bound by these Terms & Conditions. If you do not agree to these terms, 
                  please do not use our website.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. Use of Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>You may use our website for lawful purposes only. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any part of the website</li>
                  <li>Transmit any harmful code, viruses, or malicious software</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Collect or harvest any information from the website without authorization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  All content on this website, including text, graphics, logos, images, and software, 
                  is the property of Max Marine Group or its licensors and is protected by intellectual 
                  property laws. You may not reproduce, distribute, or create derivative works from 
                  our content without prior written permission.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Service Inquiries & Quotations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Information submitted through our inquiry forms is used to provide preliminary 
                  quotations and service information. Please note:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Not Binding:</strong> Website inquiries do not constitute a binding contract. 
                    Service agreements require separate written confirmation.
                  </li>
                  <li>
                    <strong>Quotation Validity:</strong> Any quotations provided are subject to confirmation 
                    and may be revised based on actual requirements and conditions.
                  </li>
                  <li>
                    <strong>Service Terms:</strong> Actual service provision is governed by our standard 
                    terms of business or specific contract terms agreed with clients.
                  </li>
                  <li>
                    <strong>Accuracy:</strong> While we strive to provide accurate information, we recommend 
                    confirming all details with our operations team before relying on website information 
                    for operational decisions.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Disclaimer of Warranties</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  This website is provided "as is" without warranties of any kind, either express or implied. 
                  We do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The website will be uninterrupted or error-free</li>
                  <li>All information on the website is complete, accurate, or current</li>
                  <li>The website is free from viruses or other harmful components</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  To the fullest extent permitted by law, Max Marine Group shall not be liable for 
                  any direct, indirect, incidental, special, or consequential damages arising from:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use of or inability to use our website</li>
                  <li>Reliance on information provided on the website</li>
                  <li>Unauthorized access to or alteration of your transmissions or data</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. External Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Our website may contain links to third-party websites. These links are provided for 
                  convenience only. We do not endorse or control these websites and are not responsible 
                  for their content or practices.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>8. Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  These Terms & Conditions shall be governed by and construed in accordance with the 
                  laws of the Arab Republic of Egypt. Any disputes arising from these terms shall be 
                  subject to the exclusive jurisdiction of the Egyptian courts.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>9. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We reserve the right to modify these Terms & Conditions at any time. Changes will 
                  be effective immediately upon posting to the website. Your continued use of the 
                  website after changes are posted constitutes acceptance of the modified terms.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  For questions about these Terms & Conditions, please contact:
                </p>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Legal Department</p>
                    <a href="mailto:legal@maxmarinegroup.com" className="text-secondary hover:underline">
                      legal@maxmarinegroup.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsPage;
