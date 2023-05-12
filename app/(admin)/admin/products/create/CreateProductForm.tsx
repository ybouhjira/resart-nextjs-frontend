"use client";

import { FormProvider, useFieldArray, useForm } from "react-hook-form";
import { colors } from "@/app/data/product";
import FormFieldProvider, {
  FormField,
} from "@/app/(admin)/admin/components/FormField";
import PhotoUploadInput from "@/app/(admin)/admin/components/PhotoUploadInput";
import ColorPicker from "@/app/(admin)/admin/components/ColorPicker";
import { twMerge } from "tailwind-merge";
import { fixedLength, required } from "@/utils/form";
import { Button } from "react-daisyui";
import cx from "classnames";
import { getPhotoURL } from "@/utils/data/product";
import { useUpdateProduct } from "@/app/(admin)/admin/products/create/useUpdateProduct";
import { useCreateProduct } from "@/app/(admin)/admin/products/create/useCreateProduct";
import { ComponentProps } from "react";

function getRegisters(
  register: any,
  product?: any,
  photoURLFields?: ReturnType<typeof useFieldArray>["fields"]
) {
  return {
    sku: register("sku", {
      required,
      ...fixedLength(6),
      pattern: /^01[A-Za-z0-9]+$/i,
    }),
    color: register("color", {
      required,
      pattern: new RegExp(`^${colors.join("|")}$`),
    }),
    stock: register("stock", { required }),
    name: register("name", { required }),
    referencePrice: register("referencePrice", {
      required,
      valueAsNumber: true,
    }),
    currentPrice: register("currentPrice", { required, valueAsNumber: true }),
    description: register("description", { required }),
    photoFiles: register("photos", {
      required: { ...required, value: !product },
    }),
    photoURLs: (photoURLFields || []).map((field, index) => {
      return {
        key: field.id,
        ...register(`photos.${index}.url`),
      } as ComponentProps<"input">;
    }),
  } as const;
}

const labels = {
  sku: "SKU",
  color: "Color",
  stock: "Stock",
  name: "Name",
  referencePrice: "Reference price",
  currentPrice: "Current price",
  description: "Description",
  photos: "Photos",
} as const;

interface Props {
  pageTitle: string;
  product?: any;
}

function getDefaultValues(product: any) {
  return {
    sku: product?.sku,
    color: product?.variations[0]?.color,
    stock: product?.variations[0]?.stock,
    name: product?.name,
    referencePrice: product?.variations[0]?.referencePrice,
    currentPrice: product?.variations[0]?.currentPrice,
    description: product?.description,
    photoURLs: product?.variations.map((v: any) =>
      v.images.map((i: any) => i.path)
    ),
  };
}

export default function CreateProductForm({ pageTitle, product }: Props) {
  const useFormMethods = useForm({
    defaultValues: getDefaultValues(product),
  });

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useFormMethods;

  const photoURLsFieldArray = useFieldArray({
    control: control,
    name: "photos",
  });

  const { fields } = photoURLsFieldArray;

  const registers = getRegisters(register, product, fields);

  const { isLoading: isUpdating, onSubmit: onUpdate } = useUpdateProduct();
  const { isLoading: isCreating, onSubmit: onCreate } = useCreateProduct();

  return (
    <form
      onSubmit={handleSubmit(!!product ? onUpdate : onCreate, (errors) =>
        console.log("errors", errors)
      )}
    >
      <div className="my-4 text-2xl text-dark">{pageTitle}</div>
      <div className="space-y-6">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <FormProvider {...useFormMethods}>
            <FormFieldProvider labels={labels}>
              <FormField name="name">
                <input
                  {...registers.name}
                  className="input"
                  placeholder="Nature green necklace..."
                />
              </FormField>
              <FormField name="photos">
                <PhotoUploadInput
                  imageFilesInputProps={registers.photoFiles}
                  imageURLsInputProps={registers.photoURLs}
                />
              </FormField>

              <FormField name="color">
                <ColorPicker {...registers.color} watch={watch} />
              </FormField>

              <FormField name={"sku"} colSpan={1}>
                <input
                  className="input"
                  placeholder={"010203"}
                  {...registers.sku}
                  disabled={!!product}
                />
              </FormField>
              <FormField name="stock" colSpan={1}>
                <input
                  {...registers.stock}
                  className="input"
                  placeholder="10"
                />
              </FormField>

              <FormField colSpan={1} name="referencePrice">
                <input
                  type="number"
                  {...registers.referencePrice}
                  className={twMerge("input rounded-r-none rounded-l-md")}
                  placeholder="100"
                />
              </FormField>

              <FormField colSpan={1} name="currentPrice">
                <input
                  type="number"
                  placeholder="50"
                  className="input rounded-r-none rounded-l-md"
                  {...registers.currentPrice}
                />
              </FormField>
              <FormField name="description">
                <textarea
                  {...registers.description}
                  className="input"
                  placeholder="This is a beautiful necklace..."
                />
              </FormField>
            </FormFieldProvider>
          </FormProvider>
        </div>
      </div>
      <div>
        <Button
          className={cx(`btn btn-primary`, {
            loading: isUpdating || isCreating,
          })}
          type="submit"
        >
          {product ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
