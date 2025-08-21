"use client";

import Image from "next/image";
import EmblaCarouselCompanies from "./EmblaCarouselCopanies";
import { Mail, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { RiVipCrown2Line } from "react-icons/ri";
import EmblaCarouselProducts from "./EmblaCarouselProducts";

export function SectionCompanies() {
  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-left 32md:text-4xl lg:text-5xl">
                  Conexão rápida!
                </h1>
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Conexão rápida e segura para manter seu negócio sempre online
                  e protegido. Conte com alta velocidade e estabilidade.
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 md:justify-start">
                <a
                  href="https://wa.me/5585997362750?text=Olá, gostaria de assinar os planos empresariais."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded border border-white bg-white px-2 py-[2px] text-lg font-medium text-blue-500 transition-colors duration-200 hover:bg-transparent hover:text-white"
                >
                  ASSINE JÁ
                </a>
                <a
                  href="https://wa.me/5585997362750?text=Olá, gostaria de saber mais sobre os planos empresariais"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded border border-white bg-transparent px-2 py-[2px] text-lg font-medium text-white transition-colors duration-200 hover:bg-white hover:text-blue-500"
                >
                  SABER MAIS
                </a>
              </div>
            </div>
            <Image
              src="/companiespagesmobilessmall.webp"
              alt="Mulher trabalhando na empresa com notebook."
              width={748}
              height={321}
              priority
              className="block w-full select-none rounded-t-2xl md:hidden"
            />
            <Image
              src="/companiespagestablet.webp"
              alt="Mulher trabalhando na empresa com notebook."
              width={436}
              height={343}
              priority
              className="hidden select-none md:block xl:hidden"
            />
            <Image
              src="/companiespagestablet.webp"
              alt="Mulher trabalhando na empresa com notebook."
              width={401}
              height={315}
              priority
              className="hidden w-full select-none xl:block"
            />
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container px-5 xl:px-0">
          <div className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Planos para empresas
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Nossos planos garantem uma conexão segura, suporte especializado e
              atendimento prioritário para que seu negócio nunca pare.
            </p>
          </div>

          <div className="pt-16">
            <EmblaCarouselCompanies />
          </div>
        </div>
      </section>
      <section className="bg-white py-24 dark:bg-zinc-800">
        <div className="container px-5 xl:px-0">
          <div className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Confira nossos produtos
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Descubra produtos que combinam tecnologia e confiabilidade,
              pensados para entregar os melhores resultados.
            </p>
          </div>

          <div className="pt-16">
            <EmblaCarouselProducts />
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 py-24 dark:bg-zinc-900">
        <div className="container px-5 xl:px-0">
          <div className="flex max-w-4xl flex-col gap-y-1 text-left">
            <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
              Nossos atendimento
            </h2>
            <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
              Nosso atendimento é focado em oferecer suporte rápido e eficiente,
              garantindo que suas dúvidas sejam resolvidas com agilidade.
            </p>
          </div>

          <div className="pt-16">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 32md:grid-cols-4">
              {/* Card 1 */}
              <a
                href="https://wa.me/5585997362750"
                target="_blank"
                className="group relative h-[7.5rem] w-full select-none overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-colors duration-200 hover:bg-blue-700 dark:border dark:border-white dark:bg-zinc-800 dark:hover:border-cyan-400 dark:hover:bg-transparent"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400">
                    <FaWhatsapp
                      size={24}
                      className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-800 group-hover:text-white dark:text-white dark:group-hover:text-cyan-400 md:text-xl">
                    Suporte Online
                  </h3>
                </div>
                <p className="ml-11 text-sm font-medium text-zinc-600 group-hover:text-white dark:text-zinc-300 dark:group-hover:text-cyan-400 md:text-base">
                  Suporte via Whatsapp.
                </p>
                <div className="absolute left-0 top-[16px] h-9 w-[4px] rounded-r-lg bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400"></div>
              </a>
              {/* Card 2 */}
              <a
                href="tel:+5585997362750"
                className="group relative h-[7.5rem] w-full select-none overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-colors duration-200 hover:bg-blue-700 dark:border dark:border-white dark:bg-zinc-800 dark:hover:border-cyan-400 dark:hover:bg-transparent"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400">
                    <PhoneCall
                      size={24}
                      className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-white dark:text-white dark:group-hover:text-cyan-400 md:text-xl">
                    Ligue agora
                  </h3>
                </div>
                <p className="ml-11 text-sm font-medium text-zinc-600 group-hover:text-white dark:text-zinc-300 dark:group-hover:text-cyan-400 md:text-base">
                  Ligue rápido e fácil.
                </p>
                <div className="absolute left-0 top-[16px] h-9 w-[4px] rounded-r-lg bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400"></div>
              </a>
              {/* Card 3 */}
              <a
                href="https://wa.me/5585997362750?text=Olá, gostaria de solicitar prioridade no atendimento empresarial."
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-[7.5rem] w-full select-none overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-colors duration-200 hover:bg-blue-700 dark:border dark:border-white dark:bg-zinc-800 dark:hover:border-cyan-400 dark:hover:bg-transparent"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400">
                    <RiVipCrown2Line
                      size={24}
                      className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-white dark:text-white dark:group-hover:text-cyan-400 md:text-xl">
                    Priopridade
                  </h3>
                </div>
                <p className="ml-11 text-sm font-medium text-zinc-600 group-hover:text-white dark:text-zinc-300 dark:group-hover:text-cyan-400 md:text-base">
                  Prioridade no atendimento.
                </p>
                <div className="absolute left-0 top-[16px] h-9 w-[4px] rounded-r-lg bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400"></div>
              </a>
              {/* Card 4 */}
              <a
                href="mailto:evolutionnet221@gmail.com"
                className="group relative h-[7.5rem] w-full select-none overflow-hidden rounded-xl bg-white p-4 shadow-sm transition-colors duration-200 hover:bg-blue-700 dark:border dark:border-white dark:bg-zinc-800 dark:hover:border-cyan-400 dark:hover:bg-transparent"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400">
                    <Mail
                      size={24}
                      className="text-white group-hover:text-blue-700 dark:text-zinc-900 dark:group-hover:text-zinc-800"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-zinc-900 group-hover:text-white dark:text-white dark:group-hover:text-cyan-400 md:text-xl">
                    E-mail
                  </h3>
                </div>
                <p className="ml-11 text-sm font-medium text-zinc-600 group-hover:text-white dark:text-zinc-300 dark:group-hover:text-cyan-400 md:text-base">
                  Envie um e-mail rápido.
                </p>
                <div className="absolute left-0 top-[16px] h-9 w-[4px] rounded-r-lg bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400"></div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
