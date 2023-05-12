import { ComponentProps, forwardRef, LegacyRef } from "react";
import { colors, materialColors } from "@/app/data/product";
import cx from "classnames";

const ColorPicker = forwardRef(function ColorPickerComponent(
  {
    watch,
    ...inputProps
  }: ComponentProps<"input"> & { watch: (name: string) => string },
  ref: LegacyRef<HTMLInputElement>
) {
  return (
    <div className="flex flex-wrap">
      {watch("color")}

      {colors.map((color) => (
        <label key={color} className="block">
          <input
            type="radio"
            value={color}
            className="hidden"
            {...inputProps}
            ref={ref}
          />
          <div
            style={{ backgroundColor: materialColors[color] }}
            className={cx(
              { "outline-4": watch("color") === color },
              "block w-[32px] h-[32px] m-[5px] rounded-full outline outline-gray-500 cursor-pointer transition-all duration-200"
            )}
          />
        </label>
      ))}
    </div>
  );
});

export default ColorPicker;
