import { Layout } from "@/components/layout/Layout";
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
