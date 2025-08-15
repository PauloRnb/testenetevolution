"use client";

import Link from "next/link";
import Image from "next/image";
import {
  MessageCircleQuestionMark,
  CircleArrowRight,
  ShieldAlert,
} from "lucide-react";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagramSquare } from "react-icons/fa";
import { Separator } from "../ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowTopButton } from "../ArrowTopButton/ArrowTopButton";

// Tipagens
type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
  prefetch?: boolean;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

type CardLink = {
  title: string;
  href: string;
  icon: React.ElementType;
  external?: boolean;
};

// Dados
const footerLinks: FooterSection[] = [
  {
    title: "Sobre nós",
    links: [
      { label: "Sobre a gente", href: "/About" },
      { label: "Nosso blog", href: "/Blog" },
      { label: "Acessibilidade", href: "/Accesibility" },
    ],
  },
  {
    title: "Clientes",
    links: [
      { label: "Indicação", href: "/Indicate" },
      { label: "Segurança", href: "/Security" },
      {
        label: "Suporte",
        href: "https://wa.me/5585997362750?text=Olá, gostaria de um suporte remoto.",
        external: true,
      },
    ],
  },
  {
    title: "Planos",
    links: [
      { label: "Fibra", href: "/Fiber", prefetch: true },
      { label: "Combos", href: "/Combos", prefetch: true },
      { label: "Empresas", href: "/Companies" },
    ],
  },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/netevolution.ofc/",
    icon: FaInstagramSquare,
    label: "Instagram",
  },
  {
    href: "#",
    icon: LiaFacebookF,
    label: "Facebook",
  },
];

const cardLinks: CardLink[] = [
  {
    title: "Privacidade",
    href: "/Privacy",
    icon: ShieldAlert,
  },
  {
    title: "Ajuda",
    href: "https://wa.me/5585997362750?text=Olá, Preciso de ajuda, poderia me ajudar?.",
    icon: MessageCircleQuestionMark,
    external: true,
  },
];

export function Footer() {
  return (
    <footer className="w-full min-w-[375px] overflow-x-hidden">
      <section className="flex flex-col border-t border-zinc-300 bg-white pt-8 dark:border-zinc-600 dark:bg-zinc-900">
        <div className="container px-5 xl:px-0">
          <div className="flex flex-col justify-between lg:flex-row">
            {/* Menus de links */}
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-8 md:gap-y-16 lg:gap-0 32lg:gap-10">
              {footerLinks.map(({ title, links }) => (
                <div key={title} className="flex w-52 flex-col">
                  <h2 className="py-8 text-2xl font-semibold text-zinc-800 dark:text-white">
                    {title}
                  </h2>
                  <div className="flex select-none flex-col gap-5">
                    {links.map(({ label, href, external, prefetch }) =>
                      external ? (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          className="max-w-fit text-lg font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-500 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                        >
                          {label}
                        </a>
                      ) : (
                        <Link
                          key={label}
                          href={href}
                          prefetch={prefetch}
                          aria-label={label}
                          className="max-w-fit text-lg font-medium text-zinc-600 transition-colors duration-200 hover:text-blue-700 focus:outline-none focus-visible:text-blue-500 dark:text-cyan-400 dark:hover:text-cyan-500 dark:focus-visible:text-cyan-500"
                        >
                          {label}
                        </Link>
                      ),
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Cards e redes sociais */}
            <div className="flex flex-col gap-8 pt-16 md:flex-row lg:flex-col lg:gap-11 lg:pt-8">
              <div className="flex flex-row gap-4">
                {cardLinks.map(({ title, href, icon: Icon, external }) => {
                  const cardContent = (
                    <>
                      <div className="flex flex-col gap-y-2">
                        <div className="flex items-start">
                          <Icon
                            width={24}
                            strokeWidth={1.8}
                            className="text-zinc-600 group-hover:text-white group-focus-visible:text-white dark:text-white"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="text-sm font-semibold leading-4 text-zinc-800 group-hover:text-white group-focus-visible:text-white dark:text-white sm:text-base">
                            {title}
                          </h3>
                          <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 group-hover:bg-white group-focus-visible:bg-white dark:bg-white" />
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <CircleArrowRight
                          width={24}
                          strokeWidth={1.8}
                          className="text-blue-700 group-hover:text-white group-focus-visible:text-white dark:text-cyan-400 dark:group-focus-visible:text-white"
                        />
                      </div>
                    </>
                  );

                  const classes =
                    "group flex h-36 w-full min-w-[100px] select-none flex-col justify-between rounded-xl bg-zinc-100 p-4 shadow-sm hover:bg-blue-700 dark:bg-zinc-800 dark:hover:bg-zinc-800 dark:hover:ring-2 dark:hover:ring-cyan-400 sm:w-[155px] md:w-[165px] lg:h-[155px] lg:w-[185px] focus:outline-none focus-visible:bg-blue-700 dark:focus-visible:ring-2 dark:focus-visible:ring-cyan-400";

                  return external ? (
                    <a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={title}
                      className={classes}
                    >
                      {cardContent}
                    </a>
                  ) : (
                    <Link
                      key={title}
                      href={href}
                      aria-label={`Ir para a página de ${title}`}
                      className={classes}
                    >
                      {cardContent}
                    </Link>
                  );
                })}
              </div>

              {/* Redes sociais */}
              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-medium text-zinc-800 dark:text-white">
                  Nossas redes sociais
                </h4>
                <div className="flex items-center gap-4">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visite nosso perfil no ${label}`}
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-zinc-100 p-1 text-blue-700 transition-colors duration-200 hover:bg-blue-700 hover:text-white focus:outline-none focus-visible:bg-blue-700 focus-visible:text-white dark:bg-zinc-800 dark:text-cyan-400 dark:hover:bg-cyan-400 dark:hover:text-zinc-800 dark:focus-visible:bg-cyan-400 dark:focus-visible:text-zinc-800"
                    >
                      <Icon size={24} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informações adicionais */}
        <Separator className="mt-16 bg-zinc-300 dark:bg-zinc-600" />
        <div className="w-full bg-blue-700 dark:bg-zinc-900">
          <div className="container p-5 xl:px-0">
            <div className="flex items-center justify-between">
              <ArrowTopButton />
              <div className="flex flex-col">
                <p className="text-xs text-white lg:text-sm">
                  Net Evolution Telecom - CNPJ: 27.218.073/0001-00
                </p>
                <p className="text-xs text-white lg:text-sm">
                  Caucaia-CE - Rua 24 de Janeiro, 50 - Nova Cigana
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white dark:bg-zinc-600" />
        <div className="w-full bg-blue-700 dark:bg-zinc-900">
          <div className="container px-5 py-8 xl:px-0">
            <div className="flex items-start justify-between">
              <div className="hidden md:block">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="/"
                      aria-label="Página inicial da Net Evolution"
                      className="select-none focus:outline-none"
                    >
                      <Image
                        src="/logowhite.svg"
                        alt="Logo Net Evolution"
                        width={180}
                        height={35}
                        priority
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p className="font-semibold text-white">
                      Logo da Empresa Net Evolution
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
              <p className="text-xs font-medium text-white sm:text-sm">
                Copyright 2025 © - Net Evolution - Todos os direitos reservados
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
