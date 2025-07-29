import { HTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CardContentTopProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function CardContentTop({ children, ...rest }: CardContentTopProps) {
  return (
    <div
      {...rest}
      className={twMerge(
        "flex h-[6.438rem] w-full flex-col gap-2 rounded-[0.5rem] bg-orange-600 p-4",
        rest.className,
      )}
    >
      {children}
    </div>
  );
}
