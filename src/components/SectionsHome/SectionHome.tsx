"use client";

import Link from "next/link";
import { CircleArrowRight } from "lucide-react";
import { EmblaCarousel } from "./EmblaCarousel";

export default function SectionHome() {
  return (
    <section id="section-slider" className="bg-white dark:bg-zinc-800">
      <div className="container flex flex-col gap-16 pb-12 md:pb-24 2xl:pt-24">
        <EmblaCarousel />

        <div className="flex flex-col items-center gap-5 px-5 text-center xl:px-0">
          <h1 className="text-3xl font-semibold text-blue-700 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
            Não basta estar online, é preciso evoluir. Escolha quem leva
            internet a sério.
          </h1>

          <p className="mx-auto max-w-[58rem] text-base font-medium leading-5 text-zinc-500 dark:text-zinc-200 md:text-xl lg:text-2xl">
            Na Net Evolution, a tecnologia está sempre à frente. Oferecemos
            internet de alta velocidade com estabilidade e desempenho que
            acompanham sua rotina, seja para estudar, trabalhar ou se divertir.
            Evolua sua conexão com a gente.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://wa.me/5585997362750?text=Olá, gostaria de saber mais informações para assinar o plano de internet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-36 items-center justify-center gap-1 rounded-full bg-blue-700 transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:scale-105 dark:bg-cyan-400 dark:hover:bg-cyan-500 md:w-44"
            >
              <span className="text-sm font-medium text-white dark:text-zinc-800 md:text-base">
                ASSINE AGORA
              </span>
              <CircleArrowRight
                size={14}
                strokeWidth={2.2}
                className="text-white dark:text-zinc-800 md:h-4 md:w-4"
              />
            </a>

            <Link
              href="#section-offer-home"
              className="group flex h-8 w-40 items-center justify-center gap-1 rounded-full border border-zinc-500 transition-colors duration-200 hover:border-blue-700 focus:outline-none focus-visible:scale-105 dark:border-white dark:hover:border-cyan-500 md:w-48"
            >
              <span className="text-sm font-medium text-zinc-500 group-hover:text-blue-700 dark:text-white dark:group-hover:text-cyan-500 md:text-base">
                NOSSOS PLANOS
              </span>
              <CircleArrowRight
                size={14}
                strokeWidth={2.2}
                className="text-zinc-500 group-hover:text-blue-700 dark:text-white dark:group-hover:text-cyan-500 md:h-4 md:w-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
