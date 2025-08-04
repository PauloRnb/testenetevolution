"use client";

import EmblaCarouselPlans from "../SectionsHome/EmblaCarouselPlans";

export function SectionCombos() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <header className="flex max-w-4xl flex-col gap-y-1 text-left">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
            Confira nossos combos
          </h2>
          <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
            Temos as melhores ofertas de combos para você e toda sua família
            maratonar filmes, séries e muito futebol ao vivo.
          </p>
        </header>

        <div className="container px-5 pt-16 xl:px-0">
          <EmblaCarouselPlans />
        </div>
      </div>
    </section>
  );
}
