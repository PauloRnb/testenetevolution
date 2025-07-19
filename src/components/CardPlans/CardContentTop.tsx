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
        "w-full h-[6.438rem] flex flex-col bg-orange-600 rounded-[0.5rem] p-4 gap-2",
        rest.className
      )}
    >
      {children}
    </div>
  );
}
