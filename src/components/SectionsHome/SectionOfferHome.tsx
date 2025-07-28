"use client";

import { Tabs } from "@ark-ui/react/tabs";
import EmblaCarouselPlans from "./EmblaCarouselPlans";
import EmblaCarousel from "./Plans/EmblaCarousel";

const tabTriggerClasses =
  "px-5 py-2 w-[160px] text-base font-medium text-zinc-700 hover:text-blue-500 " +
  "data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:data-[selected]:text-cyan-400";

export function SectionOfferHome() {
  return (
    <section id="section-offer-home" className="py-24">
      <div className="container px-5 lg:px-0">
        <header className="flex flex-col gap-y-1 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-700 dark:text-white text-left">
            Confira nossas ofertas
          </h2>
          <p className="font-medium text-base md:text-xl lg:text-2xl text-zinc-500 leading-4 dark:text-zinc-300 text-left">
            Nois te conectamos aos melhores conteúdos, com as melhores ofertas.
          </p>
        </header>

        <Tabs.Root defaultValue="combos" className="pt-8 pb-10">
          <Tabs.List className="relative border-b-[8px] border-zinc-200 dark:border-zinc-700">
            <Tabs.Trigger value="combos" className={tabTriggerClasses}>
              Combos
            </Tabs.Trigger>
            <Tabs.Trigger value="internet" className={tabTriggerClasses}>
              Internet
            </Tabs.Trigger>

            <Tabs.Indicator className="absolute ml-1 bottom-[-6px] h-[4px] w-[160px] translate-x-0 bg-blue-700 transition-all duration-300 rounded-full dark:bg-cyan-400" />
          </Tabs.List>

          <Tabs.Content value="combos" className="py-7">
            <EmblaCarouselPlans />
          </Tabs.Content>

          <Tabs.Content value="internet" className="py-7">
            <EmblaCarousel />
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </section>
  );
}
