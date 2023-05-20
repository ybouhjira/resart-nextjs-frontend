import Link from "next/link";
import FacebookIcon from "@/components/Icons/FacebookIcon";
import WhatsappIcon from "@/components/Icons/WhatsappIcon";
import InstagramIcon from "@/components/Icons/InstagramIcon";
import useColors from "@/lib/ui/hooks/useColors";

export function Footer() {
  const colors = useColors();

  return (
    <footer className="bg-main py-5">
      <div className="max-w-screen-max flex flex-col md:flex-row gap-lg mx-auto text-dark font-bold justify-between py-md md:py-lg">
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
        <nav className="social-nav px-md justify-center flex flex-row gap-x-md">
          <Link className="block" href="https://facebook.com/resartmaroc">
            <FacebookIcon color={colors.dark} className="w-lg h-lg" />
          </Link>
          <Link className="block" href="">
            <WhatsappIcon color={colors.dark} className="w-lg h-lg" />
          </Link>
          <Link className="block" href="https://instagram.com/resartmaroc">
            <InstagramIcon color={colors.dark} className="w-lg h-lg" />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
