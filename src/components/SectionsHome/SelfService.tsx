import {
  Gauge,
  CircleArrowRight,
  FileScan,
  Headset,
  LaptopMinimal,
} from "lucide-react";
import { Separator } from "../ui/separator";

const cardItems = [
  {
    icon: FileScan,
    title: "2ª Via do boleto",
    description: "Baixe suas faturas através da central do assinante.",
    href: "https://netevolution.sgp.tsmx.com.br/accounts/central/login/",
  },
  {
    icon: Gauge,
    title: "Teste de velocidade",
    description: "Teste a velocidade da sua conexão, rápido e com segurança.",
    href: "https://fast.com/pt",
  },
  {
    icon: Headset,
    title: "Área do cliente",
    description:
      "Veja suas faturas, plano e consumo através da central do assianate.",
    href: "https://netevolution.sgp.tsmx.com.br/accounts/central/login/",
  },
  {
    icon: LaptopMinimal,
    title: "Suporte remoto",
    description: "Suporte rápido via acesso remoto.",
    href: "https://wa.me/5585997362750?text=Olá, gostaria de um suporte remoto.",
  },
];

function Card({ icon: Icon, title, description, href }: (typeof cardItems)[0]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-[14.063rem] w-full select-none flex-col justify-between rounded-xl bg-zinc-100 p-4 shadow-sm hover:bg-blue-700 dark:bg-zinc-900 dark:hover:bg-zinc-900 dark:hover:ring-2 dark:hover:ring-cyan-400"
    >
      <div className="flex items-start">
        <Icon
          width={24}
          strokeWidth={1.8}
          className="text-zinc-600 group-hover:text-white dark:text-white"
        />
      </div>

      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-sm font-semibold leading-4 text-zinc-800 group-hover:text-white dark:text-white sm:text-base">
            {title}
          </h3>
          <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 group-hover:bg-white dark:bg-white" />
        </div>
        <p className="h-24 text-sm font-medium text-zinc-500 group-hover:text-zinc-100 dark:text-white">
          {description}
        </p>
      </div>

      <div className="flex justify-end">
        <CircleArrowRight
          width={24}
          strokeWidth={1.8}
          className="text-blue-700 group-hover:text-white dark:text-cyan-400"
        />
      </div>
    </a>
  );
}

export function SelfService() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <header className="flex max-w-4xl flex-col gap-y-1">
          <h2 className="text-left text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
            Confira nosso autoatendimento
          </h2>
          <p className="text-left text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
            Com apenas poucos cliques você consegue resolver tudo o que você
            precisa com nosso autoatendimento, tudo muito rápido e fácil.
          </p>
        </header>

        <div className="container pt-16">
          <div className="grid w-full grid-cols-2 gap-4 32md:grid-cols-4">
            {cardItems.map((item, index) => (
              <Card key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
