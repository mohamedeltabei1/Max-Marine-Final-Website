import { motion } from "framer-motion";
import { useState } from "react";
import { Ship, Calculator, FileText, Clock, ArrowRight, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

const transitFeatures = [
  "24/7 transit coordination",
  "Toll rebate optimization (up to 75%)",
  "Pilot and tug arrangements",
  "All documentation handling",
  "Fresh water & provisions supply",
  "Emergency support services",
];

const vesselTypes = [
  { value: "tanker", label: "Tanker" },
  { value: "bulk", label: "Bulk Carrier" },
  { value: "container", label: "Container Ship" },
  { value: "lng", label: "LNG/LPG Carrier" },
  { value: "roro", label: "RO-RO" },
  { value: "offshore", label: "Offshore Support Vessel" },
  { value: "other", label: "Other" },
];

export function SuezCanalSection() {
  const [showCalculator, setShowCalculator] = useState(false);
  const [formData, setFormData] = useState({
    vesselType: "",
    grossTonnage: "",
    netTonnage: "",
    laden: "laden",
  });

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1000 1000'%3E%3Cpath fill='%23000' d='M500 100L600 400H400L500 100ZM200 500L400 600V400L200 500ZM800 500L600 400V600L800 500Z'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container-maritime relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Ship className="h-4 w-4" />
              Suez Canal Transit
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Expert Suez Canal Transit Services
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Navigate the world's most important waterway with confidence. Our experienced team 
              handles all aspects of Suez Canal transit, from documentation to toll optimization.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {transitFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Rebate Highlight */}
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-8">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Maximize Your Rebate</h4>
                  <p className="text-sm text-muted-foreground">
                    Suez Canal Authority offers rebates up to 75% on transit dues. 
                    Our experts ensure you receive maximum applicable rebates for your vessel and cargo type.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-primary"
                onClick={() => setShowCalculator(!showCalculator)}
              >
                <Calculator className="h-5 w-5 mr-2" />
                {showCalculator ? "Hide Calculator" : "Estimate Transit Costs"}
              </Button>
              <Link to="/contact">
                <Button variant="outline">
                  <FileText className="h-5 w-5 mr-2" />
                  Request Transit Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right - Calculator / Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {showCalculator ? (
              <div className="card-maritime p-6 bg-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-navy flex items-center justify-center">
                    <Calculator className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      Transit Cost Estimator
                    </h3>
                    <p className="text-sm text-muted-foreground">Get a preliminary estimate</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="vesselType">Vessel Type</Label>
                    <Select 
                      value={formData.vesselType}
                      onValueChange={(value) => setFormData({ ...formData, vesselType: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select vessel type" />
                      </SelectTrigger>
                      <SelectContent>
                        {vesselTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="grossTonnage">Gross Tonnage (GT)</Label>
                      <Input
                        id="grossTonnage"
                        type="number"
                        placeholder="e.g., 50000"
                        value={formData.grossTonnage}
                        onChange={(e) => setFormData({ ...formData, grossTonnage: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="netTonnage">Suez Net Tonnage</Label>
                      <Input
                        id="netTonnage"
                        type="number"
                        placeholder="e.g., 30000"
                        value={formData.netTonnage}
                        onChange={(e) => setFormData({ ...formData, netTonnage: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label>Cargo Status</Label>
                    <div className="flex gap-4 mt-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="laden"
                          value="laden"
                          checked={formData.laden === "laden"}
                          onChange={(e) => setFormData({ ...formData, laden: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm">Laden</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="laden"
                          value="ballast"
                          checked={formData.laden === "ballast"}
                          onChange={(e) => setFormData({ ...formData, laden: e.target.value })}
                          className="w-4 h-4 text-primary"
                        />
                        <span className="text-sm">Ballast</span>
                      </label>
                    </div>
                  </div>

                  <Link to="/contact" className="block">
                    <Button className="w-full btn-primary">
                      Get Detailed Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>

                  <p className="text-xs text-muted-foreground text-center">
                    * For accurate quotes, contact our operations team with complete vessel details.
                  </p>
                </div>
              </div>
            ) : (
              <div className="card-maritime p-6 bg-gradient-to-br from-secondary to-secondary/80 text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Ship className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold">
                      Quick Facts
                    </h3>
                    <p className="text-sm text-white/70">Suez Canal Transit</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white/80">Average Transit Time</span>
                    <span className="font-bold">12-16 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white/80">Canal Length</span>
                    <span className="font-bold">193.3 km</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white/80">Max Depth</span>
                    <span className="font-bold">24 meters</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white/80">Available Rebates</span>
                    <span className="font-bold text-primary">Up to 75%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                    <span className="text-white/80">Our Response Time</span>
                    <span className="font-bold">&lt; 2 hours</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <Clock className="h-4 w-4" />
                    Operations available 24/7 for urgent transits
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
