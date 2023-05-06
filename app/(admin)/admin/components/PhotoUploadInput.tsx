import { ChangeEvent, memo, useState } from "react";
import { file } from "@babel/types";

const memoized = memo(function PhotoUploadInput() {
  const [files, setFiles] = useState<File[]>([]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setFiles(Array.from(e.target.files));
  };

  const removePhoto = (photoIndex: number) => {
    const newFiles = Array.from(files || []);
    newFiles.splice(photoIndex, 1);
    setFiles(newFiles);
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <label
        htmlFor="dropzone-file"
        className="h-full flex flex-col items-center justify-center w-full h-64 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="h-full flex flex-col items-center justify-center p-0">
          {files.length > 0 ? (
            <div className="flex flex-wrap overflow-y-scroll h-full">
              <>
                {[].map.call(files, (file: File, index) => {
                  return (
                    <div className="relative m-4 w-[120px] h-[120px] overflow-visible">
                      <button
                        onClick={() => removePhoto(index)}
                        className="cirlcular-close-button absolute -top-[12px] right-[-24px/2] z-10 w-[24px] flex justify-center items-center h-[24px] bg-dark text-white rounded-full"
                      >
                        x
                      </button>
                      <img
                        key={file.name}
                        className="w-full h-full object-cover"
                        src={URL.createObjectURL(file)}
                        alt="preview"
                      />
                    </div>
                  );
                })}
              </>
            </div>
          ) : (
            <>
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
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
          value={files}
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={onChange}
          accept="image/*"
          multiple
        />
      </label>
    </div>
  );
});

export default memoized;
