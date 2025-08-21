import { Gauge, FileScan, User, LaptopMinimal } from "lucide-react";

import { CardSelfService } from "./HomePageComponents/CardSelfService";

import { TitlePages } from "../TitlePages/TitlesPages";

export function SelfService() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <TitlePages
          titleMain="Confira nosso autoatendimento"
          descriptionTitle="Com apenas poucos cliques você consegue resolver tudo o que você
            precisa com nosso autoatendimento, tudo muito rápido e fácil."
          align="left"
        />

        <div className="container pt-16">
          <div className="grid w-full grid-cols-2 gap-5 32md:grid-cols-4">
            {/* Card 1 */}
            <CardSelfService
              icon={
                <FileScan
                  width={24}
                  strokeWidth={1.8}
                  className="text-zinc-600 group-hover:text-white dark:text-white"
                />
              }
              titleMain="2ª Via da Fatura"
              descriptionTitle="Tire suas faturas rápido e fácil, através da nossa área do cliente."
              link="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
            />

            {/* Card 2 */}
            <CardSelfService
              icon={
                <Gauge
                  width={24}
                  strokeWidth={1.8}
                  className="text-zinc-600 group-hover:text-white dark:text-white"
                />
              }
              titleMain="Teste de velocidade"
              descriptionTitle="Teste a velocidade da sua conexão, rápido e com segurança."
              link="https://fast.com/pt"
            />

            {/* Card 3 */}
            <CardSelfService
              icon={
                <User
                  width={24}
                  strokeWidth={1.8}
                  className="text-zinc-600 group-hover:text-white dark:text-white"
                />
              }
              titleMain="Área do cliente"
              descriptionTitle="Veja suas faturas, planos e consumo através da central do assinante."
              link="https://netevolution.sgp.tsmx.com.br/accounts/central/login/"
            />

            {/* Card 4 */}
            <CardSelfService
              icon={
                <LaptopMinimal
                  width={24}
                  strokeWidth={1.8}
                  className="text-zinc-600 group-hover:text-white dark:text-white"
                />
              }
              titleMain="Suporte remoto"
              descriptionTitle="Suporte rápido via acesso remoto."
              link="https://wa.me/5585997362750?text=Olá, gostaria de um suporte remoto."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
