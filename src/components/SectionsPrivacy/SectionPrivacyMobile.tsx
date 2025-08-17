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
                    Política de Privacidade
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4 pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Na NetEvolution, valorizamos a transparência e a
                      segurança. Nosso site foi criado para fornecer informações
                      sobre nossos serviços e planos de internet sem coletar
                      dados pessoais. Você pode navegar livremente, com total
                      segurança e privacidade.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    Nenhum dado pessoal coletado
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4 pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Não solicitamos cadastros, e não pedimos seu nome, e-mail,
                      telefone ou qualquer outro dado pessoal. Toda a navegação
                      em nosso site é anônima e sem necessidade de
                      identificação.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    Links para WhatsApp
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4 pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Alguns links do nosso site podem direcionar você para o
                      WhatsApp para falar diretamente com nossa equipe. Esses
                      links são apenas um meio de comunicação, e qualquer
                      informação compartilhada nesse canal fica sujeita à
                      política de privacidade do próprio WhatsApp.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    Cookies e tecnologias semelhantes
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4 pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Utilizamos cookies e tecnologias semelhantes apenas para
                      melhorar a navegação e o desempenho do site. Esses dados
                      são anônimos e não permitem identificar visitantes
                      individualmente. Você pode gerenciar ou desativar cookies
                      diretamente pelo seu navegador, se desejar.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    Segurança do site
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4 pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Embora não coletemos informações pessoais, adotamos
                      medidas de segurança para garantir que o site funcione
                      corretamente e que sua experiência de navegação seja
                      sempre segura.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="rounded-xl bg-white transition-colors data-[state=open]:border data-[state=open]:border-blue-700 dark:bg-zinc-800 data-[state=open]:dark:border-cyan-400"
                >
                  <AccordionTrigger className="p-4 text-lg font-semibold text-zinc-600">
                    Atualizações desta Política
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance px-4 pb-4 font-medium text-zinc-600 dark:text-zinc-300">
                    <Separator className="rounded-full bg-zinc-400" />
                    <p className="text-zinc-600 dark:text-zinc-300">
                      Podemos atualizar esta Política de Privacidade de tempos
                      em tempos. Recomendamos que você consulte esta página
                      regularmente para se manter informado sobre eventuais
                      mudanças.
                    </p>
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
