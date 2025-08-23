import { ReactNode } from "react";

interface CardIncludesPlansProps {
  children: ReactNode;
}

export function CardIncludesPlans({ children }: CardIncludesPlansProps) {
  return (
    <div className="ml-[15px] flex flex-col gap-1">
      <p className="text-left text-xs font-medium text-zinc-600 dark:text-white">
        INCLUSO NO PLANO:
      </p>
      {children}
    </div>
  );
}
