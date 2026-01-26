import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const navigation = {
  group: { name: "About Us", href: "/group" },
  companies: {
    name: "Companies",
    href: "/companies",
    children: [
      { name: "Max Marine S.A.E.", href: "/companies/max-marine", description: "Shipping Agencies & Oil Services" },
      { name: "Max Gulf", href: "/companies/max-gulf", description: "Shipping Agencies & Oil Services" },
      { name: "Max Marine Free Zone", href: "/companies/max-marine-free-zone", description: "El-Amreya, Alexandria" },
      { name: "Heat Oil Free Zone", href: "/companies/heat-oil", description: "El-Amreya, Alexandria" },
      { name: "Era Tours", href: "/companies/era-tours", description: "Travel & Support Services" },
    ],
  },
  services: {
    name: "Services",
    href: "/services",
    children: [
      { name: "Vessel Attendance", href: "/services/vessel-attendance", description: "Port call coordination" },
      { name: "Cargo & Freight", href: "/services/cargo-freight", description: "Freight forwarding services" },
      { name: "Husbandry Services", href: "/services/husbandry", description: "Full crew support" },
      { name: "Logistics Base", href: "/services/logistics-base", description: "Port services & storage" },
      { name: "Ship Chandler", href: "/services/ship-chandler", description: "Marine supplies" },
      { name: "View All Services", href: "/services", description: "Complete service portfolio" },
    ],
  },
  fleet: { name: "Fleet & Assets", href: "/fleet" },
  ports: {
    name: "Locations",
    href: "/ports-offices-yards",
    children: [
      { name: "Alexandria Office", href: "/ports-offices-yards#alexandria", description: "Headquarters" },
      { name: "Abu Qir Yard", href: "/ports-offices-yards/yard-abu-qir", description: "Full service yard" },
      { name: "Damietta Yard", href: "/ports-offices-yards/yard-damietta", description: "Operational yard" },
      { name: "All Locations", href: "/ports-offices-yards", description: "Complete network" },
    ],
  },
  caseStudies: { name: "Case Studies", href: "/case-studies" },
  compliance: { name: "QHSE", href: "/qhse-compliance" },
  contact: { name: "Contact", href: "/contact" },
};

const ListItem = ({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted focus:bg-muted",
            className
          )}
        >
          <div className="text-sm font-medium leading-none text-foreground">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground">
        <div className="container-maritime flex items-center justify-between py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+201234567890" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">24/7 Operations: +20 123 456 7890</span>
              <span className="sm:hidden">24/7 Support</span>
            </a>
            <a href="mailto:operations@maxmarinegroup.com" className="hidden md:flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="h-3.5 w-3.5" />
              operations@maxmarinegroup.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-secondary-foreground/70 text-xs sm:text-sm">Serving Egypt Since 1972</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-maritime-sm">
        <div className="container-maritime">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Max Marine Group" className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList className="gap-0">
                <NavigationMenuItem>
                  <Link to={navigation.group.href}>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none">
                      About Us
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:text-primary">Companies</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      {navigation.companies.children.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:text-primary">Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 bg-card">
                      {navigation.services.children.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to={navigation.fleet.href}>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none">
                      Fleet & Assets
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:text-primary">Locations</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      {navigation.ports.children.map((item) => (
                        <ListItem key={item.name} title={item.name} href={item.href}>
                          {item.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to={navigation.caseStudies.href}>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none">
                      Case Studies
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to={navigation.compliance.href}>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none">
                      QHSE
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to={navigation.contact.href}>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-primary focus:bg-muted focus:text-primary focus:outline-none">
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link to="/contact">
                <Button className="hidden md:inline-flex btn-primary">
                  Request Service
                </Button>
              </Link>
              <button
                className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="fixed inset-0 bg-secondary/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 max-w-full bg-card shadow-maritime-xl overflow-y-auto"
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <img src={logo} alt="Max Marine" className="h-12" />
                <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md hover:bg-muted">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {Object.values(navigation).map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="block py-3 px-4 rounded-md hover:bg-muted transition-colors font-medium"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {"children" in item && (
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="p-4 border-t border-border">
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full btn-primary">Request Service</Button>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
