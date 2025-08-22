import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <header className="z-10 flex h-[3.75rem] min-w-[375px] items-center border-b border-zinc-400 bg-gray-100 dark:bg-zinc-900">
      {/* Mobile: aparece em telas menores que lg */}
      <div className="w-full lg:hidden">
        <HeaderMobile />
      </div>

      {/* Desktop: aparece em telas lg ou maiores */}
      <div className="hidden w-full lg:flex">
        <HeaderDesktop />
      </div>
    </header>
  );
}
