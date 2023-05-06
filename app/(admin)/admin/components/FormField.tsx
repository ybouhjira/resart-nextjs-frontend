import { ReactNode } from "react";

export function FormField({
  children,
  label,
  colSpan,
  prefix,
}: {
  label: string;
  colSpan?: number;
  prefix?: string;
  children: ReactNode;
}) {
  return (
    <div className={`col-span-${colSpan || 2}`}>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize"
      >
        {label}
      </label>
      <div className="flex">
        {prefix && (
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            {prefix}
          </span>
        )}
        {children}
      </div>
    </div>
  );
}