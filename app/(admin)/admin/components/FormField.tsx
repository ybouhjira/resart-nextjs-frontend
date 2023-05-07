import { ReactNode } from "react";

interface Props {
  label: string;
  colSpan?: number;
  prefix?: string;
  children: ReactNode;
}

export function FormField({ children, label, colSpan }: Props) {
  return (
    <div className={`col-span-${colSpan || 2}`}>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
        {label}
      </label>
      {children}
    </div>
  );
}
