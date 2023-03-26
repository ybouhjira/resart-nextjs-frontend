import Link from "next/link";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import TailwindConfig from "../../../tailwind.config";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import { useColors } from "@/app/ColorContext";

export function Footer() {
  const colors = useColors() as Record<string, string>;
  return (
    <footer className="bg-main py-5">
      <div className="max-w-screen-max mx-auto text-dark font-bold justify-between flex">
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
        <nav className="social-nav px-md justify-center flex-row">
          <Link href="https://facebook.com/resartmaroc">
            <FacebookIcon color={colors.dark} />
          </Link>
          <Link href="">
            <WhatsappIcon />
          </Link>
          <Link href="https://instagram.com/resartmaroc">
            <InstagramIcon />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
