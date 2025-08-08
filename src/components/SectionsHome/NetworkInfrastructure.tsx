import { EthernetPort } from "lucide-react";
import { Separator } from "../ui/separator";

export function NetworkInfrastructure() {
  return (
    <section className="py-24">
      <div className="container px-5 xl:px-0">
        <header className="flex max-w-4xl flex-col gap-y-1 text-left">
          <h2 className="text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
            Infraestrutura de rede
          </h2>
          <p className="text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
            A infraestrutura de rede é uma maneira de deixar todos os seus
            aparelhos conectados via cabo tais como:{" "}
            <strong>Notebook, PC, TV, Impressoras</strong> e tudo que necessita
            de uma conexão via cabo.
          </p>
        </header>

        <div className="container pt-16">
          <div className="group relative min-h-[28rem] w-full select-none overflow-hidden rounded-xl border border-white bg-white shadow-sm transition-all duration-700 dark:border-white dark:bg-zinc-800 32md:min-h-[17rem]">
            <div className="flex flex-col gap-4 p-4 32md:flex-row">
              <div className="flex flex-col gap-y-2">
                <div className="flex h-9 w-9 items-center justify-center rounded bg-blue-700 text-white dark:bg-white dark:text-zinc-800">
                  <EthernetPort size={24} strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold leading-5 text-zinc-800 dark:text-white">
                    Infraestrutura de Rede
                  </h3>
                  <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
                </div>
                <p className="text-sm font-medium leading-5 text-zinc-500 dark:text-zinc-200">
                  Mais velocidade com nossa infraestrutura de rede totalmente
                  sem custo, e incluso em todos os planos. Assine agora nossa
                  internet fibra e tenha acesso a todos os nossos benefícios.
                </p>
              </div>

              <Separator
                orientation="vertical"
                className="hidden !h-40 !w-px rounded-full bg-zinc-200 32md:block"
              />

              <img
                src="/networkinfrastructureimage.webp"
                alt="PC conectado via cabo ao roteador"
                className="mt-6 w-full sm:w-[21rem]"
              />
            </div>

            <a
              href="https://wa.me/5585997362750?text=Olá, gostaria de saber mais informações para assinar o plano de internet fibra e mais informações sobre a infraestrutura de rede."
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
            >
              ASSINE AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
