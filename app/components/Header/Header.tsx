import Link from "next/link";
import Logo from "./logo.svg";
import BurgerMenu from "@/app/components/Header/BurgerMenu";
import links from "./links";

export default function Header() {
  debugger;
  return (
    <header className="bg-white sm:px-5 lg:px-10">
      <div className="flex justify-between items-center max-w-screen-max m-auto">
        <Link href="/" className="relative w-xl">
          <Logo className="w-full" />
        </Link>

        <nav className="block md:hidden">
          <BurgerMenu />
        </nav>
        <nav className="hidden md:block">
          <ul className="flex justify-between w-[300px] items-center">
            {links.map((link, index) => (
              <li
                key={index}
                className="hover:rotate-12 hover:scale-125 last:hover:-rotate-45 last:hover:scale-150 transition-all duration-300"
              >
                <Link className="uppercase text-dark font-bold" href={link.url}>
                  {link.icon ? link.icon : link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
