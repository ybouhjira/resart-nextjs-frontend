"use client";

import BurgerMenuIcon from "./burger-menu-svgrepo-com.svg";
import { useCallback, useState } from "react";
import links from "./links";
import Link from "next/link";

export default function BurgerMenu() {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = useCallback(
    () => setMenuVisible((visible) => !visible),
    [setMenuVisible]
  );

  return (
    <>
      <button
        className="w-10 h-10 z-20 relative"
        onClick={toggleMenu}
        aria-label="Menu"
      >
        <BurgerMenuIcon className="w-full h-full" />
      </button>
      {menuVisible && (
        <nav className="block fixed top-0 right-0 bottom-0 bg-white w-[80vw] z-10">
          <ul className="flex flex-col text-center mt-20">
            {links.map((link, index) => (
              <li key={index} className="py-5 text-2xl" onClick={toggleMenu}>
                <Link href={link.url}>{link.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
