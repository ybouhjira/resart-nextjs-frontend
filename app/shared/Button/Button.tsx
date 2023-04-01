import Link from "next/link";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ComponentProps<typeof Link> {}

export default function Button({ className, children, href }: Props) {
  return (
    <Link
      href={href}
      className={twMerge(
        `bg-main text-white text-bold rounded-2 text-center text-dark font-bold py-2.5 px-10 shadow-lg shadow-dark/25 whitespace-nowrap`,
        className
      )}
    >
      {children}
    </Link>
  );
}
