"use client";

import Image from "next/image";

export function SectionIndicate() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col items-center gap-y-8 px-5 pt-12 md:items-start md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-left 32md:text-4xl lg:text-5xl">
                  Indicou? Ganhou!
                </h1>
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Compartilhe nossa internet com seus amigos e ganhe
                  recompensas. Cada indicação aprovada traz benefícios
                  exclusivos para você e para quem você indicou, tornando sua
                  experiência ainda mais vantajosa.
                </p>
              </div>
              <a
                href="https://wa.me/5585997362750?text=Olá, tenho um amigo para indicar, e quero aproveitar o programa *Indique e Ganhe!*"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-[190px] select-none items-center justify-center rounded border border-white bg-white py-2 text-center text-lg font-medium text-blue-500 transition-colors duration-200 hover:bg-transparent hover:text-white"
              >
                INDIQUE JÁ
              </a>
            </div>
            <Image
              src="/indicatepagesmobilessmall.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={748}
              height={321}
              priority
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/indicatepagestablet.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/indicatepagestablet.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={401}
              height={315}
              loading="lazy"
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>
    </>
  );
}
