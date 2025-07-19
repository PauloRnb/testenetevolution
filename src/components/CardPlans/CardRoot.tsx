import { ReactNode } from "react";

interface CardContentProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardContentProps) {
  return (
    <div className="w-full bg-white rounded-2xl flex flex-col justify-between p-3 select-none gap-y-5 shadow-sm">
      {children}
    </div>
  );
}
