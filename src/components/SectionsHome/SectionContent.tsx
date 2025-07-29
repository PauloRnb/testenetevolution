import { CardsServices } from "./CardsServices";
import { NetworkInfrastructure } from "./NetworkInfrastructure";
import { SectionOfferHome } from "./SectionOfferHome";
import { SelfService } from "./SelfService";

export function SectionContent() {
  return (
    <section id="section-content">
      <SectionOfferHome />
      <CardsServices />
      <NetworkInfrastructure />
      <SelfService />
    </section>
  );
}
