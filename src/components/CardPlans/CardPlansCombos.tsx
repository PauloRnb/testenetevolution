import { ReactNode } from "react";

interface CardPlansCombosProp {
  children: ReactNode;
}

export function CardPlansCombos({ children }: CardPlansCombosProp) {
  return (
    <div className="flex items-center justify-start gap-1">{children}</div>
  );
}
