import Link from "next/link";
import Logo from "./logo.svg";
import BurgerMenu from "@/app/components/Header/BurgerMenu";
import links from "@/app/components/Header/links";
import Image from "next/image";

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
              <li key={index}>
                <Link href={link.url}>{link.text ? link.text : (
                    link.icon && <Image src={link.icon} width={28} height={28} alt="cart button"/>
                )}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
