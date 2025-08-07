import dynamic from "next/dynamic";

const SectionOfferHome = dynamic(() => import("./SectionOfferHome"));
const CardsServices = dynamic(() => import("./CardsServices"));
const NetworkInfrastructure = dynamic(() => import("./NetworkInfrastructure"));
const SelfService = dynamic(() => import("./SelfService"));
const AccordionSection = dynamic(() => import("./AccordionSection"));

export default function SectionContent() {
  return (
    <section id="section-content">
      <SectionOfferHome />
      <CardsServices />
      <NetworkInfrastructure />
      <SelfService />
      <AccordionSection />
    </section>
  );
}
