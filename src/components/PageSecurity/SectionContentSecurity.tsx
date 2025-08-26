"use cliente";

import { SectionOnlineSecurity } from "./SectionOnlineSecurity";
import { SectionSecurity } from "./SectionSecurity";
import { SectionSecurityMain } from "./SectionSecurityMain";

export function SectionContentSecurity() {
  return (
    <section id="section-content">
      <SectionSecurity />
      <SectionOnlineSecurity />
      <SectionSecurityMain />
    </section>
  );
}
