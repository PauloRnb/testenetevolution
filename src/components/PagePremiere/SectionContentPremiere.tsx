"use client";

import { AccordionPremiere } from "./AccordionPremiere";
import { PagePremiere } from "./PagePremiere";

export function SectionContentPremiere() {
  return (
    <section id="section-content">
      <PagePremiere />
      <AccordionPremiere />
    </section>
  );
}
