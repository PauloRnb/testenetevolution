import Link from "next/link";
import { Router, ChevronRight, Combine, Airplay } from "lucide-react";
import { Separator } from "../ui/separator";

const servicesData = [
  {
    Icon: Router,
    title: "Internet",
    description: "Internet 100% fibra óptica, com ultra velocidade.",
    link: "/Fiber",
  },
  {
    Icon: Combine,
    title: "Combos",
    description: "Monte seu combo rápido, simples e fácil.",
    link: "/Combos",
  },
  {
    Icon: Airplay,
    title: "Streaming",
    description: "Curta seus filmes, séries e futebol 24h.",
    link: "/Streaming",
  },
];

function ServiceCard({
  Icon,
  title,
  description,
  link,
}: {
  Icon: typeof Router;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className="group relative h-[14rem] w-full select-none overflow-hidden rounded-xl border border-zinc-100 bg-zinc-100 shadow-sm transition-all duration-700 dark:border-white dark:bg-zinc-900">
      <div className="flex w-full flex-col gap-y-4 p-4">
        <div className="flex flex-col">
          <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded bg-blue-700 text-white dark:bg-white dark:text-zinc-800">
            <Icon size={24} strokeWidth={1.8} />
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="text-xl font-semibold leading-5 text-zinc-800 dark:text-white">
              {title}
            </h3>
            <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
          </div>
        </div>
        <p className="h-[50px] font-medium leading-5 text-zinc-500 dark:text-zinc-200">
          {description}
        </p>
      </div>
      <Link
        href={link}
        className="absolute bottom-0 flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus:outline-none focus-visible:bg-blue-500 dark:bg-cyan-400 dark:hover:bg-cyan-500 dark:focus-visible:bg-cyan-500"
      >
        SABER MAIS
        <ChevronRight size={20} />
      </Link>
    </div>
  );
}

export default function CardsServices() {
  return (
    <section className="bg-white py-24 dark:bg-zinc-800">
      <div className="container px-5 xl:px-0">
        <header className="flex max-w-4xl flex-col gap-y-1">
          <h2 className="text-left text-3xl font-semibold text-blue-700 dark:text-white sm:text-4xl lg:text-5xl">
            Confira nossos serviços
          </h2>
          <p className="text-left text-base font-medium leading-4 text-zinc-500 dark:text-zinc-300 md:text-xl lg:text-2xl">
            Oferecemos serviços de internet fibra, apps de streaming e uma
            variedade de serviços, levando qualidade para sua residência.
          </p>
        </header>

        <div className="container pt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {servicesData.map(({ Icon, title, description, link }) => (
              <ServiceCard
                key={title}
                Icon={Icon}
                title={title}
                description={description}
                link={link}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
