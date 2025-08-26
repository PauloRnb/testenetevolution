import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";

import { TitlePages } from "../TitlePages/TitlesPages";

export function SectionPrivacyMobile() {
  return (
    <>
      <section className="md: block bg-zinc-100 py-24 dark:bg-zinc-900 md:hidden">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Central de Privacidade"
            descriptionTitle="Nossa Central de Privacidade explica de forma simples e transparente que o site da NetEvolution não coleta informações pessoais, oferecendo segurança e confiança aos visitantes."
            align="left"
          />
          <div className="container pt-16">
            <div>
              <Accordion
                type="single"
                collapsible
                className="flex w-full select-none flex-col gap-5"
              >
                <AccordionItem
                  value="item-1"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    1. Política de Privacidade
                  </AccordionTrigger>
                  <AccordionContent className="flex w-full flex-col gap-4 text-balance pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Nós respeitamos a sua privacidade e garantimos que a
                      navegação em nosso site seja segura. Não realizamos coleta
                      de informações pessoais diretamente por meio deste site.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    2. Coleta de Informações
                  </AccordionTrigger>
                  <AccordionContent className="flex w-full flex-col gap-4 text-balance pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Nosso site não utiliza formulários e não armazena dados de
                      visitantes. O contato é feito exclusivamente através de
                      links externos, como: WhatsApp | Para atendimento e
                      suporte. SGP Central do Assinante | Para acesso de
                      clientes já cadastrados. Fast.com | Para teste de
                      velocidade da internet. Qualquer dado eventualmente
                      solicitado em plataformas externas segue a Política de
                      Privacidade própria de cada serviço.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    3. Uso de Cookies
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Nosso site não utiliza cookies para rastrear ou
                      identificar usuários.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    4. Links Externos
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Ao clicar em links externos (como WhatsApp, SGP ou
                      Fast.com), você será direcionado para sites de terceiros,
                      que possuem suas próprias políticas de privacidade e
                      segurança. Recomendamos que leia as políticas de cada
                      plataforma para entender como seus dados são tratados.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    5. Segurança do Site
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Como não coletamos nem armazenamos informações pessoais em
                      nosso site, não existe risco de exposição ou
                      compartilhamento de dados por meio desta página.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    6. Alterações nesta Política
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Podemos atualizar esta Política de Privacidade para
                      refletir mudanças em nossos serviços. Sempre que isso
                      ocorrer, a nova versão será publicada nesta página.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    7. Nosso Contato
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Podemos atualizar esta Política de Privacidade para
                      refletir mudanças em nossos serviços. Sempre que isso
                      ocorrer, a nova versão será publicada nesta página.
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <span className="font-medium text-zinc-600 dark:text-white">
                        E-mail:{" "}
                        <a
                          className="font-medium text-zinc-900 dark:text-cyan-400"
                          href="mailto:evolutionnet221@gmail.com"
                        >
                          evolutionnet221@gmail.com
                        </a>
                      </span>
                      <span className="font-medium text-zinc-600 dark:text-white">
                        WhatsApp:{" "}
                        <a
                          className="font-medium text-zinc-900 dark:text-cyan-400"
                          href="https://wa.me/5585997362750?text=Olá, estou com dúvidas sobre a Política de Privacidade."
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          (85) 9 9736-2750
                        </a>
                      </span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
