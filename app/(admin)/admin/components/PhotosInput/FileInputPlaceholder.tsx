import { UploadIcon } from "@/components/Icons/UploadIcon";

export function FileInputPlaceholder() {
  return (
    <>
      <UploadIcon />
      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px)
      </p>
    </>
  );
}