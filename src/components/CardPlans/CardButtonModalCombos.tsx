import { AnchorHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface CardButtonModalCombosProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

export function CardButtonModalCombos({
  text,
  ...rest
}: CardButtonModalCombosProps) {
  return (
    <a
      href="https://wa.me/5585997362750?text=Olá, gostaria de saber sobre os planos com combos."
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
      className={twMerge(
        "flex h-8 w-full items-center justify-center rounded bg-orange-600 text-base font-medium text-white transition-colors duration-200 hover:bg-orange-500 focus:outline-none",
        rest.className,
      )}
    >
      {text}
    </a>
  );
}
