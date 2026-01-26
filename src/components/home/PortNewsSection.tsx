import { motion } from "framer-motion";
import { Newspaper, Calendar, ArrowRight, Bell, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const news = [
  {
    date: "January 2025",
    title: "Suez Canal Rebate Circulars Extended",
    excerpt: "The Suez Canal Authority has extended current rebate circulars for tankers and bulk carriers through Q2 2025.",
    category: "Suez Canal",
    isNew: true,
  },
  {
    date: "January 2025",
    title: "Alexandria Port Expansion Update",
    excerpt: "New container terminal at Alexandria Port to increase capacity by 40%. Max Marine ready to support operations.",
    category: "Port Updates",
    isNew: true,
  },
  {
    date: "December 2024",
    title: "New ISO 45001:2018 Certification",
    excerpt: "Max Marine Group achieves ISO 45001:2018 certification for occupational health and safety management.",
    category: "Company News",
    isNew: false,
  },
  {
    date: "December 2024",
    title: "Updated Port Dues at Damietta",
    excerpt: "Damietta Port Authority announces revised tariffs effective January 2025. Contact us for updated PDAs.",
    category: "Port Updates",
    isNew: false,
  },
];

const quickAlerts = [
  { port: "Alexandria", status: "Normal Operations", color: "bg-green-500" },
  { port: "Port Said", status: "Normal Operations", color: "bg-green-500" },
  { port: "Suez Canal", status: "Normal Transit", color: "bg-green-500" },
  { port: "Damietta", status: "Normal Operations", color: "bg-green-500" },
];

export function PortNewsSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-maritime">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main News */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
                <Newspaper className="h-4 w-4" />
                Hot Port News
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Latest Maritime Updates
              </h2>
              <p className="text-muted-foreground">
                Stay informed with the latest port conditions, regulatory changes, and industry news.
              </p>
            </motion.div>

            <div className="space-y-4">
              {news.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="card-maritime p-5 group cursor-pointer hover:border-primary/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {item.date}
                        </span>
                        <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-0.5 rounded">
                          {item.category}
                        </span>
                        {item.isNew && (
                          <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded animate-pulse">
                            NEW
                          </span>
                        )}
                      </div>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {item.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-6">
              <Link to="/news">
                <Button variant="outline">
                  View All News
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Sidebar - Port Status */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="card-maritime p-6 bg-secondary text-white sticky top-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold">Port Status</h3>
                  <p className="text-sm text-white/70">Live updates</p>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {quickAlerts.map((alert) => (
                  <div 
                    key={alert.port}
                    className="flex items-center justify-between p-3 bg-white/10 rounded-lg"
                  >
                    <span className="text-white/90 font-medium">{alert.port}</span>
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${alert.color}`} />
                      <span className="text-xs text-white/70">{alert.status}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/20 pt-4">
                <p className="text-sm text-white/70 mb-4">
                  Need real-time port information or urgent assistance?
                </p>
                <a href="tel:+201234567890">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                    Call Operations 24/7
                  </Button>
                </a>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20">
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Download Egypt Ports Guide (PDF)
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
