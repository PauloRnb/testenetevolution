"use client";

import { TitlePages } from "../TitlePages/TitlesPages";

import SwiperSecurityCards from "./SwiperSecurityCards";

export function SectionSecurityMain() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Confira as ameaças mais comuns"
          descriptionTitle="A internet oferece inúmeras oportunidades, mas também traz riscos que podem comprometer sua segurança digital."
          align="left"
        />
      </div>
      <SwiperSecurityCards />
    </section>
  );
}
