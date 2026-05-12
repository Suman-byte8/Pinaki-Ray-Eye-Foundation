import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";
import CtaStrip from "@/components/Home/CtaStrip";

export default function ServicesPage() {
  return (
    <>
      <main className="flex-grow">
        <ServicesHero />
        <ServicesList />
        <CtaStrip />
      </main>
    </>
  );
}

