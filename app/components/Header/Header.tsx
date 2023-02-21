import Link from "next/link";
import Logo from "./logo.svg";
import BurgerMenu from "@/app/components/Header/BurgerMenu";
import links from "@/app/components/Header/links";

export default function Header() {
  debugger;
  return (
    <header className="bg-white sm:px-5 lg:px-10">
      <div className="border-black flex justify-between items-center">
        <Link href="/" className="relative w-[100px]">
          <Logo className="w-full" />
        </Link>

        <nav className="block md:hidden">
          <BurgerMenu />
        </nav>
        <nav className="hidden md:block">
          <ul className="flex justify-between w-[300px] ">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
