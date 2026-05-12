import AboutHeroBanner from "@/components/About/AboutHeroBanner";
import AboutIntroSection from "@/components/About/AboutIntroSection";
import VisionMissionSection from "@/components/About/VisionMissionSection";
import QualityPolicySection from "@/components/About/QualityPolicySection";
import LegacySection from "@/components/About/LegacySection";
import CtaStrip from "@/components/Home/CtaStrip";

export default function AboutPage() {
  return (
    <>
      <AboutHeroBanner />
      <AboutIntroSection />
      <VisionMissionSection />
      <QualityPolicySection />
      <LegacySection />
      <CtaStrip />
    </>
  );
}
