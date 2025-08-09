"use cliente";

import { AccordionFiber } from "./AccordionFiber";
import { SectionFiber } from "./SectionFiber";

export function SectionContentFiber() {
  return (
    <section id="section-content">
      <SectionFiber />
      <AccordionFiber />
    </section>
  );
}
