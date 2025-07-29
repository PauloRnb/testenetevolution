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
        "flex w-full select-none flex-col justify-between gap-y-5 rounded-2xl bg-white p-3 shadow-sm dark:border-2 dark:bg-zinc-800",
        rest.className,
      )}
    >
      {children}
    </div>
  );
}
