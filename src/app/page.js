import React from "react";

import HeroBanner from "../components/Home/HeroBanner";
import AboutSection from "../components/Home/AboutSection";
import ServicesSection from "../components/Home/ServicesSection";
import FounderSection from "../components/Home/FounderSection";
import ConsultantsSection from "../components/Home/ConsultantsSection";
import FaqSection from "../components/Home/FaqSection";
import CtaStrip from "@/components/Home/CtaStrip";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ServicesSection />
      <FounderSection />
      <ConsultantsSection />
      <FaqSection />
      <CtaStrip />
    </>
  );
}

