"use client";

import React, {
  MouseEvent,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import links from "./links";
import Link from "next/link";
import cx from "classnames";
import BurgerMenuIcon from "@/components/Icons/BurgerMenuIcon";
import useColors from "@/utils/useColors";

const useClickOutside = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClickOutside = (event: any) => {
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
  const ref = useRef<HTMLElement>(null);

  useClickOutside(
    ref,
    useCallback(() => {
      if (visible) setVisible(false);
    }, [visible, setVisible])
  );

  const colors = useColors();

  return (
    <>
      <button
        onMouseDown={(e) => {
          setVisible((v) => {
            console.log(v);
            return !v;
          });
        }}
        className="w-10 h-10 z-20 relative block"
      >
        <BurgerMenuIcon
          showX={visible}
          className="w-full h-full"
          color={colors.dark}
        />
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
          `cover-screen bg-white z-10 shadow-2xl animate flex-center shadow-2xl shadow-blue-400`,
          visible ? "translate-x-0" : "translate-x-[120%]",
          visible ? "opacity-100" : "opacity-0"
        )}
      >
        <ul className="flex flex-col text-center mt-20 w-[80vw]">
          {links.map((link, index) => (
            <li key={index} className="py-5 text-2xl">
              <Link href={link.url} className="text-dark uppercase font-bold">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
