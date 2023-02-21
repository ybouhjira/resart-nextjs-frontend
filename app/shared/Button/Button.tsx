import Link from "next/link";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Link> {}

export default function Button(props: Props) {
  return (
    <Link
      href={props.href}
      className={`p-5 bg-green-600 text-white text-bold ${props.className}`}
    >
      {props.children}
    </Link>
  );
}
