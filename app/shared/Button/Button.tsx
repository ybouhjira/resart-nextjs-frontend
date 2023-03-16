import Link from "next/link";
import { ComponentProps } from "react";
import cx from "classnames";

interface Props extends ComponentProps<typeof Link> {}

export default function Button({ className, children, href }: Props) {
  return (
    <Link
      href={href}
      style={{
        boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.25)",
      }}
      className={cx(
        `bg-main text-white text-bold rounded-2 text-center text-dark font-bold py-2.5 px-10`,
        className
      )}
    >
      {children}
    </Link>
  );
}
