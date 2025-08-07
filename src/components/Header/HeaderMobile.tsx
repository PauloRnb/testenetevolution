"use client";

import Link from "next/link";
import Image from "next/image";
import { DrawerMain } from "../Drawer/DrawerMain";

export default function HeaderMobile() {
  return (
    <nav className="flex h-full w-full items-center justify-between px-5 dark:bg-zinc-900 lg:px-6">
      <Link href="/" className="select-none" aria-label="Página inicial">
        {["/logoblue.svg", "/logowhite.svg"].map((src, i) => (
          <Image
            key={src}
            src={src}
            alt="Logo Net Evolution"
            width={150}
            height={29}
            priority
            className={i === 0 ? "block dark:hidden" : "hidden dark:block"}
          />
        ))}
      </Link>
      <DrawerMain />
    </nav>
  );
}
