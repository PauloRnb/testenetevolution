import { ReactNode } from "react";

interface CardIncludesPlansProps {
  children: ReactNode;
}

export function CardIncludesPlans({ children }: CardIncludesPlansProps) {
  return (
    <div className="flex flex-col gap-1 ml-[15px]">
      <p className="text-xs text-zinc-600 font-medium dark:text-white">
        INCLUSO NO PLANO:
      </p>
      {children}
    </div>
  );
}
