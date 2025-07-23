import { ReactNode } from "react";

interface CardContentInforProps {
  children: ReactNode;
}

export function CardContentInfor({ children }: CardContentInforProps) {
  return <div className="flex flex-col gap-5">{children}</div>;
}
