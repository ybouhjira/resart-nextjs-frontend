import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import { Fragment } from "react";
import { RemovablePhotoItem } from "./RemovablePhotoItem";

export function PhotoURLItem({ index }: { index: number }) {
  const { register, control } = useFormContext();
  const { remove, fields } = useFieldArray({
    control,
    name: "photoURLs",
  });
  const photoURLs: [string[]] = useWatch({
    name: "photoURLs",
  });

  return (
    <Fragment>
      <RemovablePhotoItem
        onRemoveClick={() => remove(index)}
        fileOrString={photoURLs[0][index]}
      />
      {fields[0]?.id && (
        <input
          key={fields[0].id}
          type="text"
          className="hidden"
          {...register("photoURLs", { shouldUnregister: true })}
        />
      )}
    </Fragment>
  );
}
