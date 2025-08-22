import SubHeaderMobile from "./SubHeaderMobile";
import SubHeaderDesktop from "./SubHeaderDesktop";

export default function SubHeader() {
  return (
    <nav
      id="top"
      className="sticky top-0 z-20 w-full min-w-[375px] bg-blue-700 dark:bg-zinc-800"
    >
      {/* Mobile: aparece em telas menores que lg */}
      <div className="w-full lg:hidden">
        <SubHeaderMobile />
      </div>

      {/* Desktop: aparece em telas lg ou maiores */}
      <div className="hidden w-full lg:flex">
        <SubHeaderDesktop />
      </div>
    </nav>
  );
}
