"use client";

import Image from "next/image";
import { Globe, CirclePercent, Airplay, Headset } from "lucide-react";
import { TitlePages } from "../TitlePages/TitlesPages";
import { CardBenefits } from "./FiberPageComponents/CardBenefits";
import NormalSwiperPlans from "../PageHome/NormalSwiperPlans";

export function SectionFiber() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-left 32md:text-4xl lg:text-5xl">
                  Fibra Óptica!
                </h1>
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Experimente a ultra velocidade da fibra óptica, com conexão
                  estável e segura para navegar, jogar e assistir sem travar, em
                  qualquer dispositivo e a qualquer hora.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <a
                  href="https://wa.me/5585997362750?text=Olá, gostaria de saber assinar o plano 500Mbps por R$74,99, que é junto com o programa cliente fiel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded border border-white bg-white px-2 py-[2px] text-lg font-medium text-blue-500 transition-colors duration-200 hover:bg-transparent hover:text-white"
                >
                  ASSINE JÁ
                </a>
                <a
                  href="https://wa.me/5585997362750?text=Olá, gostaria de saber mais sobre o plano 500Mbps com o programa cliente fiel."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded border border-white bg-transparent px-2 py-[2px] text-lg font-medium text-white transition-colors duration-200 hover:bg-white hover:text-blue-500"
                >
                  SABER MAIS
                </a>
              </div>
            </div>
            <Image
              src="/fiberpagesmobilessmall.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={748}
              height={321}
              priority={true}
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/fiberpagestablet.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={436}
              height={343}
              priority={true}
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/fiberpagestablet.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={401}
              height={315}
              priority={true}
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>

      {/* Section Plans */}
      <section className="py-24">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Ofertas sem apps"
            descriptionTitle="Nossos planos fibra óptica sem apps incluso, feito pra você voar com nossa conexão."
            align="left"
          />

          <div className="pt-16">
            <NormalSwiperPlans />
          </div>
        </div>
      </section>

      {/* Section Cards Benefits */}
      <section className="bg-white py-24 dark:bg-zinc-800">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Aqui você tem benefícios"
            descriptionTitle="Com a nossa internet fibra óptica, você conta com muito mais do que apenas velocidade. Garantimos estabilidade, segurança e suporte rápido sempre que precisar."
            align="left"
          />

          <div className="pt-16">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 32md:grid-cols-4">
              {/* Card 1 */}
              <CardBenefits
                icon={
                  <Globe
                    size={24}
                    className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                  />
                }
                title="Internet fibra"
                description="Fibra óptica de última geração."
              />
              {/* Card 2 */}
              <CardBenefits
                icon={
                  <Headset
                    size={24}
                    className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                  />
                }
                title="Atendimento"
                description="Suporte online 24hrs."
              />
              {/* Card 3 */}
              <CardBenefits
                icon={
                  <Airplay
                    size={24}
                    className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                  />
                }
                title="Straming"
                description="Os melhores apps de streaming."
              />
              {/* Card 4 */}
              <CardBenefits
                icon={
                  <CirclePercent
                    size={24}
                    className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                  />
                }
                title="Indicação"
                description="Indicou? Ganhou desconto."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
