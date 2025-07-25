import { ReactNode } from "react";

interface CardBtnModalProps {
  children: ReactNode;
}

export function CardBtnModal({ children }: CardBtnModalProps) {
  return (
    <div className="flex items-center justify-center w-full px-5">
      {children}
    </div>
  );
}
