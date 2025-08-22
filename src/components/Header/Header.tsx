"use client";

import HeaderMobile from "./HeaderMobile";
import HeaderDesktop from "./HeaderDesktop";

export default function Header() {
  return (
    <header className="z-10 flex h-[3.75rem] min-w-[375px] items-center border-b border-zinc-400 bg-gray-100 dark:bg-zinc-900">
      <div className="block lg:hidden">
        {/* Header Mobile */}
        <HeaderMobile />
      </div>
      <div className="hidden lg:block">
        {/* Header Desktop */}
        <HeaderDesktop />
      </div>
    </header>
  );
}
