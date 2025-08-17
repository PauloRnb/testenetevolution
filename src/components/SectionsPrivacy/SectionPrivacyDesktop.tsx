import { TitlePages } from "../TitlePages/TitlesPages";
import { Tabs } from "@ark-ui/react/tabs";
import { Separator } from "../ui/separator";
import { CardContentPrivacy } from "./PrivacyPageComponents/CardContentPrivacy";

export function SectionPrivacyDesktop() {
  return (
    <>
      <section className="md: hidden bg-zinc-100 py-24 dark:bg-zinc-900 md:block">
        <div className="container px-5 xl:px-0">
          <TitlePages
            titleMain="Central de Privacidade"
            descriptionTitle="Nossa Central de Privacidade explica de forma simples e transparente que o site da NetEvolution não coleta informações pessoais, oferecendo segurança e confiança aos visitantes."
            align="left"
          />
          <div className="container pt-16">
            <Tabs.Root
              defaultValue="politics"
              className="flex items-start gap-x-12 32md:flex-col"
            >
              <Tabs.List className="relative flex w-full flex-col rounded-xl bg-white py-3 dark:border-zinc-700 32md:flex-row 32md:rounded-none 32md:border-b-[8px] 32md:border-zinc-200 32md:bg-transparent">
                <Tabs.Trigger
                  value="politics"
                  className="py-2 text-xl font-semibold text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400 md:w-[150px] md:px-5 md:text-left 32md:text-center"
                >
                  Política
                </Tabs.Trigger>
                <Separator className="bg-zinc-200 32md:hidden" />
                <Tabs.Trigger
                  value="datas"
                  className="py-2 text-xl font-semibold text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400 md:w-[150px] md:px-5 md:text-left 32md:text-center"
                >
                  Dados
                </Tabs.Trigger>
                <Separator className="bg-zinc-200 32md:hidden" />
                <Tabs.Trigger
                  value="links"
                  className="py-2 text-xl font-semibold text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400 md:w-[150px] md:px-5 md:text-left 32md:text-center"
                >
                  Links
                </Tabs.Trigger>
                <Separator className="bg-zinc-200 32md:hidden" />
                <Tabs.Trigger
                  value="cookies"
                  className="py-2 text-xl font-semibold text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400 md:w-[150px] md:px-5 md:text-left 32md:text-center"
                >
                  Cookies
                </Tabs.Trigger>
                <Separator className="bg-zinc-200 32md:hidden" />
                <Tabs.Trigger
                  value="security"
                  className="py-2 text-xl font-semibold text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400 md:w-[150px] md:px-5 md:text-left 32md:text-center"
                >
                  Segurança
                </Tabs.Trigger>
                <Separator className="bg-zinc-200 32md:hidden" />
                <Tabs.Trigger
                  value="updates"
                  className="py-2 text-xl font-semibold text-zinc-700 hover:text-blue-500 focus:text-blue-500 focus:outline-none data-[selected]:text-blue-700 dark:text-white dark:hover:text-cyan-500 dark:focus:text-cyan-500 dark:data-[selected]:text-cyan-400 md:w-[150px] md:px-5 md:text-left 32md:text-center"
                >
                  Atualizações
                </Tabs.Trigger>
                {/* Estilo do indicador */}
                <Tabs.Indicator className="absolute bottom-[-6px] ml-1 h-[4px] w-[150px] translate-x-[0px] rounded-full bg-blue-700 transition-all duration-300 dark:bg-cyan-400 md:hidden 32md:block" />
              </Tabs.List>

              <Tabs.Content
                value="politics"
                className="focus:outline-none 32md:pt-7"
              >
                <CardContentPrivacy
                  titleMain="Política de Privacidade"
                  descriptionTitle="Na NetEvolution, valorizamos a transparência e a segurança. Nosso site foi criado para fornecer informações sobre nossos serviços e planos de internet sem coletar dados pessoais. Você pode navegar livremente, com total segurança e privacidade."
                />
              </Tabs.Content>

              <Tabs.Content
                value="datas"
                className="focus:outline-none 32md:pt-7"
              >
                <CardContentPrivacy
                  titleMain="Nenhum Dado Pessoal Coletado"
                  descriptionTitle="Não solicitamos cadastros, e não pedimos seu nome, e-mail, telefone ou qualquer outro dado pessoal. Toda a navegação em nosso site é anônima e sem necessidade de identificação."
                />
              </Tabs.Content>

              <Tabs.Content
                value="links"
                className="focus:outline-none 32md:pt-7"
              >
                <CardContentPrivacy
                  titleMain="Links Para WhatsApp"
                  descriptionTitle="Alguns links do nosso site podem direcionar você para o WhatsApp para falar diretamente com nossa equipe. Esses links são apenas um meio de comunicação, e qualquer informação compartilhada nesse canal fica sujeita à política de privacidade do próprio WhatsApp."
                />
              </Tabs.Content>

              <Tabs.Content
                value="cookies"
                className="focus:outline-none 32md:pt-7"
              >
                <CardContentPrivacy
                  titleMain="Cookies e Tecnologias Semelhantes"
                  descriptionTitle="Alguns links do nosso site podem direcionar você para o WhatsApp para falar diretamente com nossa equipe. Esses links são apenas um meio de comunicação, e qualquer informação compartilhada nesse canal fica sujeita à política de privacidade do próprio WhatsApp."
                />
              </Tabs.Content>

              <Tabs.Content
                value="security"
                className="focus:outline-none 32md:pt-7"
              >
                <CardContentPrivacy
                  titleMain="Segurança do Site"
                  descriptionTitle="Alguns links do nosso site podem direcionar você para o WhatsApp para falar diretamente com nossa equipe. Esses links são apenas um meio de comunicação, e qualquer informação compartilhada nesse canal fica sujeita à política de privacidade do próprio WhatsApp."
                />
              </Tabs.Content>

              <Tabs.Content
                value="updates"
                className="focus:outline-none 32md:pt-7"
              >
                <CardContentPrivacy
                  titleMain="Atualizações Desta Política"
                  descriptionTitle="Alguns links do nosso site podem direcionar você para o WhatsApp para falar diretamente com nossa equipe. Esses links são apenas um meio de comunicação, e qualquer informação compartilhada nesse canal fica sujeita à política de privacidade do próprio WhatsApp."
                />
              </Tabs.Content>
            </Tabs.Root>
          </div>
        </div>
      </section>
    </>
  );
}
