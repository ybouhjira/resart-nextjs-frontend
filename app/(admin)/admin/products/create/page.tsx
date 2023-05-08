"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { colors } from "@/app/data/product";
import useFormField from "@/app/(admin)/admin/components/FormField";
import PhotoUploadInput from "@/app/(admin)/admin/components/PhotoUploadInput";
import ColorPicker from "@/app/(admin)/admin/components/ColorPicker";
import { twMerge } from "tailwind-merge";
import { fixedLength, required } from "@/utils/form";
import { createProduct } from "@/utils/api/product";
import { Button } from "react-daisyui";
import { memo, useMemo, useState } from "react";

function getRegisters(register: any) {
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
    photos: register("photos", { required }),
  } as const;
}

function TestComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count} <Button onClick={() => setCount(count + 1)}>Click me</Button>{" "}
    </div>
  );
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

export default function CreateProductPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const registers = getRegisters(register);
  const { mutate, isLoading } = useMutation(createProduct);
  const router = useRouter();

  const FormField = useFormField<keyof typeof registers>({ errors, labels });

  const onSubmit = (data: any) => {
    mutate(data, {
      onSuccess: () => {
        console.log("Product created successfully");
        router.refresh();
      },
      onError: (error) => {
        console.error("Error creating product:", error);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-4 text-2xl text-dark">Create a new product</div>
      <div>
        {isLoading && <div>Creating product...</div>}
        {!isLoading && (
          <div className="space-y-6">
            <div className="grid gap-4 mb-4 grid-cols-2">
              <FormField name="name">
                <input
                  {...registers.name}
                  className="input"
                  placeholder="Nature green necklace..."
                />
              </FormField>
              {/*<FormField name="photos">

              </FormField>*/}

              <PhotoUploadInput {...registers.photos} />
              <FormField name="color">
                <ColorPicker {...registers.color} watch={watch} />
              </FormField>

              <FormField name={"sku"} colSpan={1}>
                <input
                  className="input"
                  placeholder={"01...."}
                  {...registers.sku}
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
            </div>
          </div>
        )}
      </div>
      <div>
        <Button className="btn btn-primary">OK</Button>
      </div>
    </form>
  );
}
