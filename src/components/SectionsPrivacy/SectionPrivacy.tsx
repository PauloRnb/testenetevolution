"use client";

import Image from "next/image";
import { SectionPrivacyDesktop } from "./SectionPrivacyDesktop";
import { SectionPrivacyMobile } from "./SectionPrivacyMobile";

export function SectionPrivacy() {
  return (
    <>
      {/* Section Banner */}
      <section className="flex w-full flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container h-full md:px-5 md:pr-0 lg:px-6 32lg:px-0">
          <div className="flex h-full flex-col items-center justify-between gap-5 md:flex-row 32md:gap-8">
            <div className="flex flex-col gap-y-8 px-5 pt-12 md:px-0 md:pt-0">
              <div className="flex flex-col gap-y-1">
                <h1 className="text-center text-2xl font-semibold text-white sm:text-3xl md:text-left 32md:text-4xl lg:text-5xl">
                  Privacidade!
                </h1>
                <p className="text-center text-base font-medium text-white md:text-left md:text-lg 32lg:text-2xl">
                  Sua privacidade é essencial para nós. Navegue pelo nosso site
                  com segurança, sem necessidade de fornecer dados pessoais, e
                  descubra nossos serviços e planos de forma transparente e
                  confiável.
                </p>
              </div>
            </div>
            <Image
              src="/privacypagesmobilessmall.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={748}
              height={321}
              priority={true}
              className="block w-full rounded-t-2xl md:hidden"
            />
            <Image
              src="/privacypagestablet.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={436}
              height={343}
              loading="lazy"
              className="hidden md:block xl:hidden"
            />
            <Image
              src="/privacypagestablet.webp"
              alt="Mulher com telefone com olhos fechados feliz comemorando."
              width={401}
              height={315}
              loading="lazy"
              className="hidden w-full xl:block"
            />
          </div>
        </div>
      </section>

      {/* Section Terms */}
      <SectionPrivacyDesktop />
      <SectionPrivacyMobile />
    </>
  );
}
