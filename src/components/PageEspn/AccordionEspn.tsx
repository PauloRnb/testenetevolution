"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { TitlePages } from "../TitlePages/TitlesPages";

export function AccordionEspn() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Duvidas sobre a ESPN?"
          descriptionTitle="Tire suas dúvidas sobre a programação, os esportes disponíveis, a forma de acesso e todos os benefícios de ter a ESPN no seu plano."
          align="left"
        />

        <div className="container pt-16">
          <div>
            <Accordion type="single" collapsible className="w-full select-none">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que é a ESPN?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    A ESPN é um dos maiores canais de esportes do mundo, com
                    transmissões ao vivo, reprises, análises e programas
                    exclusivos sobre futebol, NBA, NFL, tênis, automobilismo e
                    muito mais.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Como faço para assinar a ESPN?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Basta entrar em contato conosco pelo WhatsApp. Lá, tiramos
                    suas dúvidas e, após a assinatura, o técnico vai até você
                    para realizar o primeiro login na plataforma.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Posso cancelar a assinatura a qualquer momento?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Não, nosso contrato é de 12 meses, você permanece com a
                    assinatura durante o periodo, após, você pode cancelar os
                    serviços do nosso plano Premiere.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  A ESPN transmite jogos ao vivo?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim! A ESPN transmite ao vivo os principais eventos
                    esportivos do Brasil e do mundo, com comentários
                    especializados e alta definição.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  A ESPN tem programas além dos jogos?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim! Além das transmissões ao vivo, você encontra o
                    SportsCenter, programas de análise, entrevistas exclusivas e
                    bastidores do esporte.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
