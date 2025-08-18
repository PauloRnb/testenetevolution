"use cliente";

import { SectionClientsDiscounts } from "./SectionClientsDiscounts";
import { SectionIndicate } from "./SectionIndicate";
import { SectionTimelineIndicate } from "./SectionTimelineIndicate";

export function SectionContentIndicate() {
  return (
    <section id="section-content">
      <SectionIndicate />
      <SectionClientsDiscounts />
      <SectionTimelineIndicate />
    </section>
  );
}
