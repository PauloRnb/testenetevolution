"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { TitlePages } from "../TitlePages/TitlesPages";

export function AccordionParamount() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Duvidas sobre o Paramount+?"
          descriptionTitle="Descubra como funciona o streaming, os recursos de download, a qualidade de vídeo e tudo o que o Paramount+ oferece para você curtir filmes, séries e esportes quando e onde quiser."
          align="left"
        />

        <div className="container pt-16">
          <div>
            <Accordion type="single" collapsible className="w-full select-none">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O que é o Paramount+ e quais conteúdos estão disponíveis?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    O Paramount+ é um serviço de streaming que oferece filmes,
                    séries, documentários, esportes ao vivo e conteúdos
                    exclusivos, incluindo produções originais.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  Como faço para assinar o Paramount+?
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
                    serviços do nosso plano Paramount+.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O Paramount+ oferece filmes e séries em alta definição?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim, todo o conteúdo está disponível em HD e, quando
                    suportado pelo dispositivo, também em 4K Ultra HD.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-zinc-800">
                  O conteúdo do Paramount+ está disponível offline?
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance font-medium text-zinc-600 dark:text-zinc-300">
                  <p>
                    Sim, você pode baixar filmes e séries no aplicativo móvel
                    para assistir offline quando quiser.
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
