"use client";

import { LegacyRef } from "react";
import { twMerge } from "tailwind-merge";
import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import SignOutButton from "./SignOutButton";
import MenuItem from "./MenuItem";
import StoreIcon from "@/components/Icons/StoreIcon";

const links = [
  {
    href: "/admin/products",
    label: "Products",
    icon: <StoreIcon />,
  },
] as const;
export default function AdminSideNavigation() {
  const [ref, open, setOpen] = useOnClickOutside();

  return (
    <>
      <button
        onClick={() => typeof setOpen === "function" && setOpen(true)}
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      <aside
        ref={ref as LegacyRef<HTMLElement>}
        id="default-sidebar"
        className={twMerge(
          "fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0",
          open && "translate-x-0"
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
            {links.map((link) => (
              <MenuItem {...link} key={link.href} />
            ))}
            <SignOutButton />
          </ul>
        </div>
      </aside>
    </>
  );
}
