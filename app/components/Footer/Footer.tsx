import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-darkBackground py-5">
      <nav className="w-[400px]">
        <ul className="flex flex-col md:flex-row text-white w-full justify-around text-center uppercase text-large">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
