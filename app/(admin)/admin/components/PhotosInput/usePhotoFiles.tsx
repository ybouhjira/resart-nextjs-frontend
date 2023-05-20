import { ChangeEvent, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import ProductFormField from "@/app/data/product";

export function usePhotoFiles() {
  const photoFiles: FileList = useWatch({ name: ProductFormField.photoFiles });

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
  return {
    files,
    onChange,
    removePhoto,
    photoFiles,
  };
}
