import Image from "next/image";
import { isFile } from "./isFile";
import cx from "classnames";

type Props = {
  onRemoveClick: (e: any) => void;
  fileOrString: File | string;
  className?: string;
};

export function RemovablePhotoItem({
  onRemoveClick,
  fileOrString,
  className,
}: Props) {
  return (
    <div
      className={cx(
        "relative m-4 w-[120px] h-[120px] overflow-visible",
        className
      )}
    >
      <button
        onClick={(e, ...restArgs) => {
          e.preventDefault();
          return onRemoveClick(e, ...restArgs);
        }}
        className="cirlcular-close-button absolute -top-[12px] right-[-24px/2] z-10 w-[24px] flex justify-center items-center h-[24px] bg-dark text-white rounded-full"
      >
        x
      </button>
      <Image
        fill
        className={"w-full h-full object-cover"}
        src={
          isFile(fileOrString)
            ? URL.createObjectURL(fileOrString)
            : fileOrString
        }
        alt="preview"
      />
    </div>
  );
}
