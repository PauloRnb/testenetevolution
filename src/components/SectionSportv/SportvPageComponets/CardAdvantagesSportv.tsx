"use client";

import { Separator } from "../../ui/separator";
import { ReactNode } from "react";

interface CardAdvantagesProps {
  title: string;
  icon: ReactNode;
  description: string;
}

export function CardAdvantagesSportv({
  title,
  icon,
  description,
}: CardAdvantagesProps) {
  return (
    <div className="relative flex h-[215px] w-full flex-col items-center gap-y-6 rounded-xl bg-zinc-100 p-4 shadow-sm dark:border dark:border-white dark:bg-zinc-900">
      {/* Faixa superior */}
      <div className="absolute top-0 flex w-56 items-center justify-center rounded-b-2xl bg-blue-700 px-4 py-1 dark:bg-white">
        <h3 className="select-none text-lg font-semibold text-white dark:text-zinc-900">
          {title}
        </h3>
      </div>

      {/* Conteúdo */}
      <div className="mt-14 flex flex-col gap-y-5 md:mt-9">
        <div className="flex flex-col items-center justify-center gap-y-2">
          {icon}
          <Separator className="!h-[2px] !w-11 rounded-full bg-blue-700 dark:bg-white" />
        </div>
        <p className="text-center text-base font-medium text-zinc-600 dark:text-white">
          {description}
        </p>
      </div>
    </div>
  );
}
