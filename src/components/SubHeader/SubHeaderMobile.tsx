"use client";

import { DrawerAcessibility } from "../Drawer/DrawerAcessibility";
import { ModalCoverage } from "../Modal/ModalCoverage";

export default function SubHeaderMobile() {
  return (
    <div className="flex items-center justify-between px-5 py-4 lg:px-6">
      <ModalCoverage />
      <DrawerAcessibility />
    </div>
  );
}
