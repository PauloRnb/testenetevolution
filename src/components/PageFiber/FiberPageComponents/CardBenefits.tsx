"use client";

import React from "react";

interface CardBenefitsProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function CardBenefits({ icon, title, description }: CardBenefitsProps) {
  return (
    <div className="group relative h-[7.5rem] w-full select-none overflow-hidden rounded-xl bg-zinc-100 p-4 shadow-sm transition-colors duration-200 hover:bg-blue-700 dark:border dark:border-white dark:bg-zinc-900 dark:hover:border-cyan-400 dark:hover:bg-transparent">
      <div className="flex items-center gap-2">
        <div className="flex h-[2.25rem] w-[2.25rem] items-center justify-center rounded-full bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-zinc-900 group-hover:text-white dark:text-white dark:group-hover:text-cyan-400 md:text-xl">
          {title}
        </h3>
      </div>
      <p className="ml-11 text-sm font-medium text-zinc-600 group-hover:text-white dark:text-zinc-300 dark:group-hover:text-cyan-400 md:text-base">
        {description}
      </p>
      <div className="absolute left-0 top-[16px] h-9 w-[4px] rounded-r-full bg-blue-700 group-hover:bg-white dark:bg-white dark:group-hover:bg-cyan-400"></div>
    </div>
  );
}
