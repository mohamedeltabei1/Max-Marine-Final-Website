import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import { motion } from "framer-motion";
import { Cookie, Mail, Settings } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CookiePolicyPage = () => {
  return (
    <Layout>
      <Seo
        title="Cookie Policy"
        description="How Max Marine Group uses cookies and similar technologies on this website."
        path="/cookies"
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
              <Cookie className="h-4 w-4" />
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Cookie Policy
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
                <CardTitle>1. What Are Cookies?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Cookies are small text files that are placed on your device when you visit a website. 
                  They are widely used to make websites work more efficiently and to provide information 
                  to website owners.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>2. How We Use Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Operation:</strong> To enable basic website functionality such as 
                    page navigation and access to secure areas.
                  </li>
                  <li>
                    <strong>Preferences:</strong> To remember your settings and preferences, such as 
                    cookie consent choices.
                  </li>
                  <li>
                    <strong>Analytics:</strong> To understand how visitors interact with our website, 
                    which pages are visited most, and to improve our services.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>3. Types of Cookies We Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Necessary Cookies</h4>
                  <p className="text-sm">
                    These cookies are essential for the website to function properly. They cannot be 
                    disabled.
                  </p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Cookie consent preferences</li>
                    <li>• Session management</li>
                    <li>• Security features</li>
                  </ul>
                </div>

                <div className="border-l-4 border-gold pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Analytics Cookies</h4>
                  <p className="text-sm">
                    These cookies help us understand how visitors use our website by collecting 
                    anonymous statistical information.
                  </p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Google Analytics (GA4 - Google Analytics 4) — visitor statistics</li>
                    <li>• Page view tracking</li>
                    <li>• User journey analysis</li>
                  </ul>
                  <p className="text-xs mt-2 italic">
                    Note: Specific analytics vendors to be confirmed. This list will be updated 
                    once analytics implementation is finalized.
                  </p>
                </div>

                <div className="border-l-4 border-muted-foreground pl-4">
                  <h4 className="font-semibold text-foreground mb-2">Marketing Cookies</h4>
                  <p className="text-sm">
                    These cookies are used to track visitors across websites for advertising purposes.
                  </p>
                  <p className="text-sm mt-2 italic">
                    Currently, we do not use marketing cookies. This section will be updated if 
                    marketing cookies are implemented in the future.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>4. Cookie List</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Cookie Name</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Purpose</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Duration</th>
                        <th className="text-left py-3 px-2 font-semibold text-foreground">Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2">cookie_consent</td>
                        <td className="py-3 px-2">Stores your cookie preferences</td>
                        <td className="py-3 px-2">1 year</td>
                        <td className="py-3 px-2">Necessary</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2">_ga</td>
                        <td className="py-3 px-2">Google Analytics - visitor identification</td>
                        <td className="py-3 px-2">2 years</td>
                        <td className="py-3 px-2">Analytics</td>
                      </tr>
                      <tr className="border-b border-border">
                        <td className="py-3 px-2">_gid</td>
                        <td className="py-3 px-2">Google Analytics - session identification</td>
                        <td className="py-3 px-2">24 hours</td>
                        <td className="py-3 px-2">Analytics</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-xs italic">
                  Note: This cookie list is indicative. Actual cookies may vary based on implementation. 
                  To be confirmed once analytics setup is complete.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>5. Managing Your Cookie Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  You can manage your cookie preferences at any time:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Cookie Banner:</strong> When you first visit our website, you can choose 
                    which cookie categories to accept.
                  </li>
                  <li>
                    <strong>Browser Settings:</strong> Most web browsers allow you to control cookies 
                    through their settings. You can delete existing cookies and block new ones.
                  </li>
                </ul>
                <p className="text-sm">
                  Please note that blocking some cookies may affect your experience on our website 
                  and limit functionality.
                </p>
                
                <div className="pt-4">
                  <Button variant="outline" className="gap-2">
                    <Settings className="h-4 w-4" />
                    Update Cookie Preferences
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>6. Third-Party Cookies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Some cookies on our website are set by third-party services. These include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Google Analytics:</strong> For website analytics. See 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline ml-1">
                      Google's Privacy Policy
                    </a>
                  </li>
                </ul>
                <p className="text-xs italic">
                  Additional third-party services to be confirmed. This list will be updated as 
                  integrations are added.
                </p>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle>7. Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted 
                  on this page with an updated revision date.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  If you have questions about our use of cookies, please contact:
                </p>
                <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <Mail className="h-5 w-5 text-secondary" />
                  <div>
                    <p className="font-medium text-foreground">Privacy Contact</p>
                    <a href="mailto:privacy@maxmarinegroup.com" className="text-secondary hover:underline">
                      privacy@maxmarinegroup.com
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <p className="text-sm">
                    For more information about how we handle your data, please see our 
                    <Link to="/privacy" className="text-secondary hover:underline ml-1">Privacy Policy</Link>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicyPage;
