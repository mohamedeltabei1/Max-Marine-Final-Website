import { lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import Index from "./pages/Index";

// The homepage is eager-loaded for the fastest possible LCP on the primary
// landing/ranking page. Every other route is code-split so it is only fetched
// when visited, keeping the initial JavaScript bundle small (better Core Web
// Vitals, which is a Google ranking signal).
const GroupPage = lazy(() => import("./pages/GroupPage"));
const CompaniesPage = lazy(() => import("./pages/CompaniesPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const QHSEPage = lazy(() => import("./pages/QHSEPage"));
const FleetPage = lazy(() => import("./pages/FleetPage"));
const PortsOfficesYardsPage = lazy(() => import("./pages/PortsOfficesYardsPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center" aria-busy="true">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-secondary" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/group" element={<GroupPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/companies/:companyId" element={<CompaniesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/ports-offices-yards" element={<PortsOfficesYardsPage />} />
            <Route path="/ports-offices-yards/:yardId" element={<PortsOfficesYardsPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:caseStudyId" element={<CaseStudiesPage />} />
            <Route path="/qhse-compliance" element={<QHSEPage />} />
            <Route path="/careers" element={<ContactPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
