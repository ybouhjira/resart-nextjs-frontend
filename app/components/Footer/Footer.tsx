import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-main py-5">
      <div className="max-w-screen-max mx-auto text-dark font-bold">
        <nav className="md:w-[400px]">
          <ul className="flex flex-col md:flex-row w-full justify-around text-center uppercase text-large">
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
      </div>
    </footer>
  );
}
