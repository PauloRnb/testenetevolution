"use client";

import { Separator } from "@/components/ui/separator";
import { ReactNode } from "react";

interface CardContentSecurityProps {
  title: string;
  icon: ReactNode;
  description: string;
}

export function CardContentSecurity({
  title,
  icon,
  description,
}: CardContentSecurityProps) {
  return (
    <>
      <div className="relative flex h-[280px] w-full flex-col items-center gap-y-6 rounded-xl border-2 border-zinc-300 p-4 shadow-sm dark:border-white dark:bg-zinc-800 sm:w-[375px]">
        {/* Faixa superior */}
        <div className="absolute top-0 flex w-56 items-center justify-center rounded-b-2xl bg-blue-700 px-4 py-1 dark:bg-white">
          <h3 className="select-none text-lg font-semibold text-white dark:text-zinc-900">
            {title}
          </h3>
        </div>

        {/* Conteúdo */}
        <div className="mt-14 flex flex-col gap-y-5 md:mt-12">
          <div className="flex flex-col items-center justify-center gap-y-2">
            {icon}
            <Separator className="!h-[2px] !w-11 rounded-full bg-blue-700 dark:bg-white" />
          </div>
          <p className="text-center text-base font-medium text-zinc-600 dark:text-white">
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
