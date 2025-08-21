"use client";

import { Tabs } from "@ark-ui/react/tabs";
import dynamic from "next/dynamic";

const EmblaCarousel = dynamic(
  () => import("@/components/SectionsHome/Plans/EmblaCarousel"),
  { ssr: false },
);

const EmblaCarouselPlans = dynamic(
  () => import("@/components/SectionsHome/EmblaCarouselPlans"),
  { ssr: false },
);

export function SectionOfferHome() {
  return (
    <section id="section-offer-home" className="py-24">
      <div className="container px-5 32lg:px-0">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-left text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
            Confira nossas ofertas
          </h2>
          <p className="text-left text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
            Nois te conectamos aos melhores conteúdos, com as melhores ofertas.
          </p>
        </div>
        <div className="container pt-8">
          <Tabs.Root defaultValue="combos">
            <Tabs.List className="relative border-b-[8px] border-zinc-200 dark:border-zinc-700">
              <Tabs.Trigger
                value="combos"
                className="w-[160px] px-5 py-2 text-base font-medium text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400"
              >
                Combos
              </Tabs.Trigger>
              <Tabs.Trigger
                value="internet"
                className="w-[160px] px-5 py-2 text-base font-medium text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400"
              >
                Internet
              </Tabs.Trigger>
              {/* Estilo do indicador */}
              <Tabs.Indicator className="absolute bottom-[-6px] ml-1 h-[4px] w-[160px] translate-x-[0px] rounded-full bg-blue-700 transition-all duration-300 dark:bg-cyan-400" />
            </Tabs.List>

            <Tabs.Content value="combos" className="pt-7 focus:outline-none">
              <EmblaCarouselPlans />
            </Tabs.Content>
            <Tabs.Content value="internet" className="pt-7 focus:outline-none">
              <EmblaCarousel />
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </section>
  );
}
