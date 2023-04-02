"use client";

import BurgerMenuIcon from "./burger-menu-svgrepo-com.svg";
import { useEffect, useRef, useState } from "react";
import links from "./links";
import Link from "next/link";
import cx from "classnames";

const useClickOutside = (ref, callback) => {
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default function BurgerMenu() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useClickOutside(ref, () => {
    if (visible) setVisible(false);
  });

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();

          setVisible((visible) => {
            return !visible;
          });
          return false;
        }}
        className="w-10 h-10 z-20 relative block"
      >
        <BurgerMenuIcon className="w-full h-full" />
      </button>
      <input type="checkbox" className="hidden peer" id="menu-toggle" />
      <div
        className={cx(
          "cover-screen left-0 bg-black z-10 animate",
          visible ? "opacity-50" : "opacity-0"
        )}
      ></div>
      <nav
        ref={ref}
        className={cx(
          `cover-screen bg-white z-10 shadow-2xl animate`,
          visible ? "translate-x-0" : "translate-x-[120%]",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        <ul className="flex flex-col text-center mt-20 w-[80vw] ">
          {links.map((link, index) => (
            <li key={index} className="py-5 text-2xl">
              <Link href={link.url}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
