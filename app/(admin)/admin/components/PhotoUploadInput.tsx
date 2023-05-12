import {
  ChangeEvent,
  ComponentProps,
  forwardRef,
  Fragment,
  LegacyRef,
  useState,
} from "react";
import Image from "next/image";
import { UploadIcon } from "@/components/Icons/UploadIcon";
import { useFieldArray, useFormContext } from "react-hook-form";
import { getPhotoURL } from "@/utils/data/product";

type Props = ComponentProps<"input"> & {
  preExistingPhotosUrls?: string[];
  imageFilesInputProps: ComponentProps<"input">;
  imageURLsInputProps: ComponentProps<"input">[];
  removePhoto?: (photoIndex: number) => void;
  fieldArray?: ReturnType<typeof useFieldArray>;
};

const PhotoUploadInput = forwardRef(function PhotoUploadInputComponent(
  {
    preExistingPhotosUrls,
    imageURLsInputProps,
    imageFilesInputProps,
    fieldArray,
  }: Props,
  ref: LegacyRef<HTMLInputElement>
) {
  const [files, setFiles] = useState<File[]>([]);
  const { watch } = useFormContext();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  const removePhoto = (photoIndex: number) => {
    const newFiles = Array.from(files || []);
    newFiles.splice(photoIndex, 1);
    setFiles(newFiles);
  };

  const [photoURLs] = (watch("photoURLs") || [[]]) as string[][];

  return (
    <div className="flex items-center justify-center w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="h-full flex flex-col items-center justify-center w-full border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="h-full flex flex-col items-center justify-center p-0">
          {files.length > 0 || photoURLs.length > 0 ? (
            <div className="flex flex-wrap overflow-y-scroll h-full">
              {photoURLs?.map((url, index) => (
                <Fragment key={index}>
                  <RemovablePhotoItem
                    key={url}
                    onClick={(e) => {
                      e.preventDefault();
                      fieldArray?.remove(index);
                    }}
                    fileOrString={getPhotoURL(url)}
                  />
                  <input
                    className="hidden"
                    {...imageURLsInputProps[index]}
                    type="text"
                  />
                </Fragment>
              ))}
              {[...files].map((fileOrURL: File | string, index) => {
                return (
                  <RemovablePhotoItem
                    key={isFile(fileOrURL) ? fileOrURL.name : fileOrURL}
                    onClick={(e) => {
                      e.preventDefault();
                      removePhoto(index);
                    }}
                    fileOrString={fileOrURL}
                  />
                );
              })}
            </div>
          ) : (
            <>
              <UploadIcon />
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </>
          )}
        </div>

        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/*"
          multiple
          {...imageFilesInputProps}
          onChange={(e) => {
            onChange(e);
            imageFilesInputProps.onChange?.(e);
          }}
          ref={ref}
        />
      </label>
    </div>
  );
});

function isFile(fileOrString: File | string): fileOrString is File {
  return (fileOrString as File).name !== undefined;
}

function RemovablePhotoItem(props: {
  onClick: (e: any) => void;
  fileOrString: File | string;
}) {
  return (
    <div className="relative m-4 w-[120px] h-[120px] overflow-visible">
      <button
        onClick={props.onClick}
        className="cirlcular-close-button absolute -top-[12px] right-[-24px/2] z-10 w-[24px] flex justify-center items-center h-[24px] bg-dark text-white rounded-full"
      >
        x
      </button>
      <Image
        fill
        className="w-full h-full object-cover"
        src={
          isFile(props.fileOrString)
            ? URL.createObjectURL(props.fileOrString)
            : props.fileOrString
        }
        alt="preview"
      />
    </div>
  );
}

export default PhotoUploadInput;
