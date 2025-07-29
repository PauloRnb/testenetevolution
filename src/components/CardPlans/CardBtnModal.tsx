import { ReactNode } from "react";

interface CardBtnModalProps {
  children: ReactNode;
}

export function CardBtnModal({ children }: CardBtnModalProps) {
  return (
    <div className="flex w-full items-center justify-center px-5">
      {children}
    </div>
  );
}
