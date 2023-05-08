import { createContext, ReactNode, useMemo } from "react";
import { twMerge } from "tailwind-merge";
import { FieldErrors } from "react-hook-form";

type FormFieldProps<RegisterType extends string> = {
  colSpan?: number;
  prefix?: string;
  children: ReactNode;
  name: RegisterType;
};

type FormFieldBuildProps<RegisterType extends string> = {
  errors: FieldErrors;
  labels: Record<RegisterType, string>;
};

export default function useFormField<RegisterType extends string>({
  errors,
  labels,
}: FormFieldBuildProps<RegisterType>) {
  return useMemo(() => {
    return function FormField({
      children,
      colSpan,
      name,
    }: FormFieldProps<RegisterType>) {
      const getErrors = (name: RegisterType) =>
        errors[name] && (
          <span className="text-red-500 text-xs">
            {errors[name]!.message as string}
          </span>
        );

      return (
        <div
          className={twMerge(
            "col-span-2",
            colSpan ? `col-span-${colSpan}` : ""
          )}
        >
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
            {labels[name]}
          </label>
          {children}
          {getErrors(name)}
        </div>
      );
    };
  }, [errors, labels]);
}
