"use client";

import Link from "next/link";

import { CircleArrowRight } from "lucide-react";
import { EmblaCarousel } from "./EmblaCarousel";

export function SectionHome() {
  return (
    <section id="section-slider" className="bg-white dark:bg-zinc-800">
      <div className="container flex flex-col gap-16 pb-12 pt-0 md:pb-24 32xl:pt-24">
        <EmblaCarousel />
        <div className="flex flex-col items-center justify-center gap-5 px-5 xl:px-0">
          <h1 className="text-center text-3xl font-semibold text-blue-700 dark:text-zinc-100 sm:text-4xl lg:text-5xl">
            Não basta estar online, é preciso evoluir. Escolha quem leva
            internet a sério.
          </h1>
          <p className="text-center text-base font-medium leading-4 text-zinc-500 dark:text-zinc-200 md:w-[39.75rem] md:text-xl lg:w-[58.125rem] lg:text-2xl">
            Na Net Evolution, a tecnologia está sempre à frente. Oferecemos
            internet de alta velocidade com estabilidade e desempenho que
            acompanham sua rotina, seja para estudar, trabalhar ou se divertir.
            Evolua sua conexão com a gente.
          </p>
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://wa.me/5585997362750?text=Olá, gostaria de saber mais informações para assinar o plano de internet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-8 w-36 select-none items-center justify-center gap-1 rounded-full bg-blue-700 transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:scale-105 dark:bg-cyan-400 dark:hover:bg-cyan-500 md:w-44"
            >
              <span className="text-sm font-medium text-white dark:text-zinc-800 md:text-base">
                ASSINE AGORA
              </span>
              <CircleArrowRight
                size={14}
                strokeWidth={2.2}
                className="transform-colors text-white duration-200 group-hover:text-blue-700 dark:text-zinc-800 dark:group-hover:text-cyan-500 md:size-4"
              />
            </a>
            <Link
              href="#section-offer-home"
              className="transform-colors group flex h-8 w-40 select-none items-center justify-center gap-1 rounded-full border border-zinc-500 duration-200 hover:border-blue-700 focus:outline-none focus-visible:scale-105 dark:border-white dark:hover:border-cyan-500 md:w-48"
            >
              <span className="transform-colors text-sm font-medium text-zinc-500 duration-200 group-hover:text-blue-700 dark:text-white dark:group-hover:text-cyan-500 md:text-base">
                NOSSOS PLANOS
              </span>
              <CircleArrowRight
                size={14}
                strokeWidth={2.2}
                className="transform-colors text-zinc-500 duration-200 group-hover:text-blue-700 dark:text-white dark:group-hover:text-cyan-500 md:size-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
