import { createContext, ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { useFormState } from "react-hook-form";

type FormFieldProps<RegisterType extends string> = {
  colSpan?: number;
  prefix?: string;
  children: ReactNode;
  name: RegisterType;
};

type FormFieldBuildProps<RegisterType extends string> = {
  labels: Record<RegisterType, string>;
  children: ReactNode;
};

const FormFieldContext = createContext({
  labels: {} as Record<string, string>,
});

export default function FormFieldProvider<RegisterType extends string>({
  children,
  labels,
}: FormFieldBuildProps<RegisterType>) {
  return (
    <FormFieldContext.Provider value={{ labels }}>
      {children}
    </FormFieldContext.Provider>
  );
}

export function FormField<RegisterType extends string>({
  children,
  colSpan,
  name,
}: FormFieldProps<RegisterType>) {
  const { labels } = useContext(FormFieldContext);
  const { errors } = useFormState();

  const getErrors = (name: RegisterType) =>
    errors[name] && (
      <span className="text-red-500 text-xs">
        {errors[name]!.message as string}
      </span>
    );

  return (
    <div
      className={twMerge("col-span-2", colSpan ? `col-span-${colSpan}` : "")}
    >
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">
        {labels[name]}
      </label>
      {children}
      {getErrors(name)}
    </div>
  );
}
