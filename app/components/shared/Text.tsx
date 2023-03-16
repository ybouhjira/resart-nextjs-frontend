import { PropsWithChildren } from "react";
import cx from "classnames";

export const Text = {
  H2({ children }: PropsWithChildren) {
    return (
      <h2 className="text-3xl font-bold mb-5 font-[400] leading-[26px] tracking-0 text-left">
        {children}
      </h2>
    );
  },

  P({ children }: PropsWithChildren) {
    return <p>{children}</p>;
  },

  Price({
    children: value,
    reference,
    className,
  }: {
    children: number;
    reference?: boolean;
    className?: string;
  }) {
    return (
      <span
        className={cx(
          { "line-through": reference },
          "whitespace-nowrap",
          className
        )}
      >
        {value.toFixed(2)} DH
      </span>
    );
  },
};
