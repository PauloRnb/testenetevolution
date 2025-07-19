import { ReactNode } from "react";

interface CardContentTopModalProps {
  children: ReactNode;
}

export function CardContentTopModal({ children }: CardContentTopModalProps) {
  return <div className="flex items-center justify-between">{children}</div>;
}
