import { CardsServices } from "./CardsServices";
import { SectionOfferHome } from "./SectionOfferHome";

export function SectionContent() {
  return (
    <section id="section-content">
      <SectionOfferHome />
      <CardsServices />
    </section>
  );
}
