import { usePhotoFiles } from "./usePhotoFiles";
import { useFormContext, useWatch } from "react-hook-form";
import { PhotoURLItem } from "./PhotoURLItem";
import { RemovablePhotoItem } from "./RemovablePhotoItem";
import { isFile } from "./isFile";
import { FileInputPlaceholder } from "@/app/(admin)/admin/components/PhotosInput/FileInputPlaceholder";

export default function PhotosInput() {
  const photoURLs: [string[]] = useWatch({ name: "photoURLs" });
  const { removePhoto, photoFiles } = usePhotoFiles();
  const hasPhotos = photoFiles?.length > 0 || photoURLs?.length > 0;
  const { register } = useFormContext();

  return (
    <div className="flex items-center justify-center w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="h-full flex flex-col items-center justify-center w-full border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="h-full flex flex-col items-center justify-center p-0">
          {hasPhotos ? (
            <div className="flex flex-wrap overflow-y-scroll h-full">
              {photoURLs.map((_, index) => (
                <PhotoURLItem index={index} key={index} />
              ))}
              {[...photoFiles].map(
                (fileOrURL: File | string, index: number) => {
                  return (
                    <RemovablePhotoItem
                      className="opacity-50"
                      key={isFile(fileOrURL) ? fileOrURL.name : fileOrURL}
                      onRemoveClick={() => removePhoto(index)}
                      fileOrString={fileOrURL}
                    />
                  );
                }
              )}
            </div>
          ) : (
            <FileInputPlaceholder />
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/*"
          multiple
          {...register("photoFiles")}
        />
      </label>
    </div>
  );
}
