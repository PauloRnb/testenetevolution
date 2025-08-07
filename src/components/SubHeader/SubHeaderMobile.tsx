"use client";

import dynamic from "next/dynamic";

const DrawerAcessibility = dynamic(
  () => import("../Drawer/DrawerAcessibility"),
  { ssr: false },
);
const ModalCoverage = dynamic(() => import("../Modal/ModalCoverage"), {
  ssr: false,
});

export default function SubHeaderMobile() {
  return (
    <div className="flex items-center justify-between px-5 py-4 lg:px-6">
      <ModalCoverage />
      <DrawerAcessibility />
    </div>
  );
}
