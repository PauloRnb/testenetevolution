import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardRoot({ children, ...rest }: CardContentProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        "w-full bg-white rounded-2xl flex flex-col justify-between p-3 select-none gap-y-5 shadow-sm dark:bg-zinc-800 dark:border-2",
        rest.className
      )}
    >
      {children}
    </div>
  );
}
