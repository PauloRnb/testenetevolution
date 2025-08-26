"use cliente";

import { SelfService } from "../PageHome/SelfService";
import { SectionPrivacy } from "./SectionPrivacy";

export function SectionContentPrivacy() {
  return (
    <section id="section-content">
      <SectionPrivacy />
      <SelfService />
    </section>
  );
}
