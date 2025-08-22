import { SectionContent } from "@/components/SectionsHome/SectionContent";

import "@radix-ui/themes/styles.css";

export default function Home() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionContent />
      </main>
    </div>
  );
}
