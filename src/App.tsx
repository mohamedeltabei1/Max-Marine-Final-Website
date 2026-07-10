import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ScrollToTop } from "@/components/common/ScrollToTop";

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center" aria-busy="true">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-secondary" />
  </div>
);

// App-wide providers. Rendered once as the root route; every page renders
// through its <Outlet />.
function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// Each route lazy-imports its page (kept as its own chunk for smaller initial
// JS). The import() literal is inline so vite-react-ssg can statically detect
// each route's CSS/asset dependencies and avoid a flash of unstyled content.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, lazy: () => import("./pages/Index").then((m) => ({ Component: m.default })) },
      { path: "group", lazy: () => import("./pages/GroupPage").then((m) => ({ Component: m.default })) },
      { path: "companies", lazy: () => import("./pages/CompaniesPage").then((m) => ({ Component: m.default })) },
      {
        path: "companies/:companyId",
        lazy: () => import("./pages/CompaniesPage").then((m) => ({ Component: m.default })),
        getStaticPaths: async () => {
          const { companies } = await import("./data/companies");
          return companies.map((c) => `companies/${c.id}`);
        },
      },
      { path: "services", lazy: () => import("./pages/ServicesPage").then((m) => ({ Component: m.default })) },
      {
        path: "services/:serviceId",
        lazy: () => import("./pages/ServicesPage").then((m) => ({ Component: m.default })),
        getStaticPaths: async () => {
          const { services } = await import("./data/services");
          return services.map((s) => `services/${s.id}`);
        },
      },
      { path: "fleet", lazy: () => import("./pages/FleetPage").then((m) => ({ Component: m.default })) },
      { path: "ports-offices-yards", lazy: () => import("./pages/PortsOfficesYardsPage").then((m) => ({ Component: m.default })) },
      {
        path: "ports-offices-yards/:yardId",
        lazy: () => import("./pages/PortsOfficesYardsPage").then((m) => ({ Component: m.default })),
        // Only these two ids resolve to a yard detail page (offices are not detail routes).
        getStaticPaths: () => ["ports-offices-yards/yard-abu-qir", "ports-offices-yards/yard-damietta"],
      },
      { path: "ports", lazy: () => import("./pages/LocationsPage").then((m) => ({ Component: m.default })) },
      {
        path: "ports/:portId",
        lazy: () => import("./pages/LocationsPage").then((m) => ({ Component: m.default })),
        getStaticPaths: async () => {
          const { locations } = await import("./data/locations");
          return locations.map((l) => `ports/${l.id}`);
        },
      },
      { path: "case-studies", lazy: () => import("./pages/CaseStudiesPage").then((m) => ({ Component: m.default })) },
      {
        path: "case-studies/:caseStudyId",
        lazy: () => import("./pages/CaseStudiesPage").then((m) => ({ Component: m.default })),
        getStaticPaths: () => [
          "case-studies/offshore-drilling-support",
          "case-studies/crew-rotation-project",
          "case-studies/project-cargo-import",
        ],
      },
      { path: "qhse-compliance", lazy: () => import("./pages/QHSEPage").then((m) => ({ Component: m.default })) },
      { path: "careers", lazy: () => import("./pages/ContactPage").then((m) => ({ Component: m.default })) },
      { path: "contact", lazy: () => import("./pages/ContactPage").then((m) => ({ Component: m.default })) },
      { path: "privacy", lazy: () => import("./pages/PrivacyPolicyPage").then((m) => ({ Component: m.default })) },
      { path: "cookies", lazy: () => import("./pages/CookiePolicyPage").then((m) => ({ Component: m.default })) },
      { path: "terms", lazy: () => import("./pages/TermsPage").then((m) => ({ Component: m.default })) },
      { path: "*", lazy: () => import("./pages/NotFound").then((m) => ({ Component: m.default })) },
    ],
  },
];
