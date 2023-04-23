import IconProps from "@/components/Icons/IconProps";
import cx from "classnames";

interface Props extends IconProps {
  showX?: boolean;
}

export default function BurgerMenuIcon({ color, className, showX }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="overflow-visible">
      <path
        d="M4 6L20 6"
        stroke={color || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        className={cx(
          showX && "translate-y-[6px] -rotate-45",
          "animate origin-center fill-box"
        )}
      />

      <path
        d="M4 12L20 12"
        stroke={color || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        className={cx(showX && "scale-0")}
      />

      <path
        d="M4 18L20 18"
        stroke={color || "#000000"}
        strokeWidth="2"
        strokeLinecap="round"
        className={cx(
          showX && "translate-y-[-6px] rotate-45",
          "animate origin-center fill-box"
        )}
      />
    </svg>
  );
}
