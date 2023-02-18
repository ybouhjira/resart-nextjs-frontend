import Link from "next/link";
import Logo from "./logo.svg";

export default function Header() {
  return (
    <header className="bg-white px-10">
      <div className="border-solid border-b-2 border-black flex justify-between items-center">
        <Link href="/" className="relative w-[100px]">
          <Logo className="w-full"/>
        </Link>

        <nav>
          <ul className="flex justify-between w-[300px]">
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
