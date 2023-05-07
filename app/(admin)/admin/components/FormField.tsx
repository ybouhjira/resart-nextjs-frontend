import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import cx from "classnames";

interface Props {
  label: string;
  colSpan?: number;
  prefix?: string;
  children: ReactNode;
}

export function FormField({ children, label, colSpan }: Props) {
  return (
    <div
      className={twMerge("col-span-2", colSpan ? `col-span-${colSpan}` : "")}
    >
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
        {label}
      </label>
      {children}
    </div>
  );
}
