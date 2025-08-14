"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Separator } from "../../ui/separator";

interface CardServicesProps {
  icon: ReactNode;
  titleMain: string;
  descriptionTitle: string;
  linkCard: string;
  iconLink?: ReactNode;
  ariaLabel?: string;
}

export function CardServices({
  icon,
  titleMain,
  descriptionTitle,
  linkCard,
  iconLink,
  ariaLabel,
}: CardServicesProps) {
  return (
    <Link
      href={linkCard}
      aria-label={ariaLabel || `Saber mais sobre ${titleMain}`}
      prefetch
      className="group relative flex h-[14rem] w-full select-none flex-col overflow-hidden rounded-xl border border-zinc-100 bg-zinc-100 shadow-sm transition-all duration-700 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:border-solid dark:border-white dark:bg-zinc-900"
    >
      <div className="flex w-full flex-col gap-y-4 p-4">
        <div className="flex flex-col">
          <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded bg-blue-700 text-white dark:bg-white dark:text-zinc-800">
            {icon}
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <h3 className="text-xl font-semibold leading-5 text-zinc-800 dark:text-white">
              {titleMain}
            </h3>
            <Separator className="!h-[2px] !w-10 rounded-full bg-blue-700 dark:bg-white" />
          </div>
        </div>
        <p className="h-[50px] font-medium leading-5 text-zinc-500 dark:text-zinc-200">
          {descriptionTitle}
        </p>
      </div>

      <div className="mt-auto flex h-14 w-full items-center justify-center gap-2 rounded-b-xl bg-blue-700 text-base font-medium text-white transition-colors duration-200 group-hover:bg-blue-500 dark:bg-cyan-400 dark:group-hover:bg-cyan-500">
        SABER MAIS
        {iconLink}
      </div>
    </Link>
  );
}
