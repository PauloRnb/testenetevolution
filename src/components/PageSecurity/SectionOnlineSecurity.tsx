"use client";

import Image from "next/image";
import { TitlePages } from "../TitlePages/TitlesPages";

export function SectionOnlineSecurity() {
  return (
    <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
      <div className="container px-5 xl:px-0">
        <div className="flex flex-col items-center gap-y-8 md:flex-row">
          <TitlePages
            titleMain="Sua segurança é nossa prioridade"
            descriptionTitle="Sabemos que golpes virtuais, malwares e sites falsos estão cada vez mais comuns. Por isso, oferecemos orientações e suporte para que você e sua família naveguem com total tranquilidade."
            align="left"
          />

          <Image
            src="/securitydigitalimage.webp"
            alt="Image"
            width={750}
            height={533}
            loading="lazy"
            className="w-[22rem] xl:w-[32rem]"
          />
        </div>
      </div>
    </section>
  );
}
