import { Layout } from "@/components/layout/Layout";
import { Seo } from "@/components/seo/Seo";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/lib/structured-data";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { ServicesGridSection } from "@/components/home/ServicesGridSection";
import { SuezCanalSection } from "@/components/home/SuezCanalSection";
import { CompaniesSection } from "@/components/home/CompaniesSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { MapSection } from "@/components/home/MapSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { PortNewsSection } from "@/components/home/PortNewsSection";
import { YardsSection } from "@/components/home/YardsSection";
import { ComplianceSection } from "@/components/home/ComplianceSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Seo
        title="Marine Agency & Offshore Support in Egypt"
        description="Max Marine Group is a leading Egyptian marine agency — ship agency, Suez Canal transit, port husbandry, offshore logistics, bunkering and QHSE support across Alexandria, Port Said, Damietta, Suez and every major Egyptian port."
        path="/"
        schema={[organizationSchema(), websiteSchema(), localBusinessSchema()]}
      />
      <HeroSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ServicesGridSection />
      <SuezCanalSection />
      <CompaniesSection />
      <IndustriesSection />
      <MapSection />
      <ClientsSection />
      <PortNewsSection />
      <YardsSection />
      <ComplianceSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
