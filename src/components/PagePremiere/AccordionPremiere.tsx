"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { TitlePages } from "../TitlePages/TitlesPages";

export function AccordionPremiere() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Duvidas sobre o Premiere?"
          descriptionTitle="Descubra como funciona o streaming, os recursos de replay, a qualidade de transmissão e tudo o que o Premiere oferece para você acompanhar futebol quando e onde quiser."
          align="left"
        />

        <div className="container pt-16">
          <div>
            <Accordion type="single" collapsible className="w-full select-none">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que é o Premiere?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    O Premiere é o serviço de pay-per-view de esportes, focado
                    principalmente em futebol. Ele transmite jogos ao vivo,
                    reprises e conteúdos exclusivos de campeonatos nacionais e
                    internacionais.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Como faço para assinar o Premiere?
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
                  Quais campeonatos posso assistir no Premiere?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Você pode acompanhar o Brasileirão Série A e B, Copa do
                    Brasil, estaduais e outros campeonatos selecionados,
                    dependendo do pacote contratado.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Posso assistir a reprises e melhores momentos?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim! O Premiere oferece replays, destaques e melhores
                    momentos para você não perder nenhum lance importante.
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
