"use client";

import Image from "next/image";

export function SectionSecurity() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-left 32md:text-4xl lg:text-5xl">
                  Segurança!
                </h1>
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Segurança online é essencial para manter seus dados e
                  dispositivos protegidos. Nós priorizamos sua privacidade e
                  entregamos internet confiável para o dia a dia.
                </p>
              </div>
            </div>
            <Image
              src="/securitypagesmobilessmall.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={748}
              height={321}
              priority
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/securitypagestablet.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/securitypagestablet.webp"
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
