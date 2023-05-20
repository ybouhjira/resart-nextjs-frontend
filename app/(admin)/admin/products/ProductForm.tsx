"use client";

import { FormProvider, useForm } from "react-hook-form";
import { productLabels } from "@/app/data/product";
import FormFieldProvider, {
  FormField,
} from "@/app/(admin)/admin/components/FormField";
import PhotosInput from "@/app/(admin)/admin/components/PhotosInput/PhotosInput";
import { twMerge } from "tailwind-merge";
import { fixedLength, required } from "@/lib/ui/form";
import { Button } from "react-daisyui";
import cx from "classnames";
import { GetProductPayload } from "@/lib/entities/Product/types";
import {
  createProductRequest,
  updateProductRequest,
} from "@/lib/entities/Product/requests";
import { useNavigateOnSubmit } from "@/lib/ui/hooks/useNavigateOnSubmit";

interface Props {
  pageTitle: string;
  product?: GetProductPayload;
}

export default function ProductForm({ pageTitle, product }: Props) {
  const useFormReturn = useForm({
    defaultValues: {
      ...product,
      photoFiles: [],
      photoURLs: product?.photoURLs || [],
    },
  });
  const { register, handleSubmit } = useFormReturn;

  const unWrapArrayField = (onSubmitFn: (data: any) => void) => (data: any) =>
    onSubmitFn({
      ...data,
      photoURLs: data.photoURLs[0],
    });

  const { isLoading: isUpdateLoading, onSubmit: onUpdate } =
    useNavigateOnSubmit(
      updateProductRequest,
      "/admin/products",
      "Error updating product:"
    );

  const { isLoading: isCreateLoading, onSubmit: onCreate } =
    useNavigateOnSubmit(
      createProductRequest,
      "/admin/products",
      "Error creating product:"
    );

  return (
    <form
      onSubmit={handleSubmit(unWrapArrayField(!!product ? onUpdate : onCreate))}
    >
      <div className="my-4 text-2xl text-dark">{pageTitle}</div>
      <div className="space-y-6">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <FormProvider {...useFormReturn}>
            <FormFieldProvider labels={productLabels}>
              <FormField name="name">
                <input
                  {...register("name", { required })}
                  className="input"
                  placeholder="Nature green necklace..."
                />
              </FormField>
              <FormField name="photos">
                <PhotosInput />
              </FormField>

              <FormField name={"sku"} colSpan={1}>
                <input
                  className="input"
                  placeholder={"010203"}
                  {...register("sku", {
                    required,
                    ...fixedLength(6),
                    pattern: /^01[A-Za-z0-9]+$/i,
                  })}
                  disabled={!!product}
                />
              </FormField>
              <FormField name="stock" colSpan={1}>
                <input
                  {...register("stock", { required, valueAsNumber: true })}
                  className="input"
                  placeholder="10"
                />
              </FormField>

              <FormField colSpan={1} name="referencePrice">
                <input
                  type="number"
                  {...register("referencePrice", {
                    required,
                    valueAsNumber: true,
                  })}
                  className={twMerge("input rounded-r-none rounded-l-md")}
                  placeholder="100"
                />
              </FormField>

              <FormField colSpan={1} name="currentPrice">
                <input
                  type="number"
                  placeholder="50"
                  className="input rounded-r-none rounded-l-md"
                  {...register("currentPrice", {
                    required,
                    valueAsNumber: true,
                  })}
                />
              </FormField>
              <FormField name="description">
                <textarea
                  {...register("description", { required })}
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
            loading: isUpdateLoading || isCreateLoading,
          })}
          type="submit"
        >
          {product ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
}
