import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  label: string;
  icon: React.ReactNode;
} & ({ href: string } | { onClick: () => void });

export default function MenuItem(props: Props) {
  const { label, icon } = props;
  const buttonClasses =
    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700";
  const Wrapper = ({ children }: { children: ReactNode }) =>
    "onClick" in props ? (
      <button className={buttonClasses} onClick={props.onClick}>
        {children}
      </button>
    ) : (
      <Link className={buttonClasses} href={props.href}>
        {children}
      </Link>
    );

  return (
    <li>
      <Wrapper>
        {icon}
        <span className="flex-1 ml-3 whitespace-nowrap">{label}</span>
      </Wrapper>
    </li>
  );
}
