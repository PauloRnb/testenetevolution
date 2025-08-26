import { SectionCompanies } from "@/components/SectionCompanies/SectionCompanies";
import "@radix-ui/themes/styles.css";

export default function Security() {
  return (
    <div className="z-[1] min-w-[375px] flex-1">
      <main className="min-w-[375px]">
        <SectionCompanies />
      </main>
    </div>
  );
}
