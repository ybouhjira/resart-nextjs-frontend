"use client";

import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { colors } from "@/app/data/product";
import FormFieldProvider, {
  FormField,
} from "@/app/(admin)/admin/components/FormField";
import PhotoUploadInput from "@/app/(admin)/admin/components/PhotoUploadInput";
import ColorPicker from "@/app/(admin)/admin/components/ColorPicker";
import { twMerge } from "tailwind-merge";
import { fixedLength, required } from "@/utils/form";
import { createProduct, updateProduct } from "@/utils/api/product";
import { Button } from "react-daisyui";
import cx from "classnames";
import { getPhotoURL } from "@/utils/data/product";

function getRegisters(register: any, product?: any) {
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
    photos: register("photos", { required: !product }),
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

function useUpdateProduct() {
  const { mutate, isLoading } = useMutation(updateProduct);
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("useUpdateProduct data", data);
    mutate(data, {
      onSuccess: () => {
        router.push("/admin/products");
      },
      onError: (error) => {
        console.error("Error updating product:", error);
      },
    });
  };

  return { isLoading, onSubmit };
}

function useCreateProduct() {
  const { mutate, isLoading } = useMutation(createProduct);
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log("useCreateProduct data", data);
    mutate(data, {
      onSuccess: () => {
        router.push("/admin/products");
      },
      onError: (error) => {
        console.error("Error creating product:", error);
      },
    });
  };

  return { isLoading, onSubmit };
}

export default function CreateProductForm({ pageTitle, product }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      sku: product?.sku,
      color: product?.variations[0]?.color,
      stock: product?.variations[0]?.stock,
      name: product?.name,
      referencePrice: product?.variations[0]?.referencePrice,
      currentPrice: product?.variations[0]?.currentPrice,
      description: product?.description,
    },
  });
  const registers = getRegisters(register);

  const { isLoading: isUpdating, onSubmit: onUpdate } = useUpdateProduct();
  const { isLoading: isCreating, onSubmit: onCreate } = useCreateProduct();

  return (
    <form
      onSubmit={(...args) => {
        console.log("CreateProductForm onSubmit", args);
        return handleSubmit(product ? onUpdate : onCreate)(...args);
      }}
    >
      <div className="my-4 text-2xl text-dark">{pageTitle}</div>
      <div className="space-y-6">
        <div className="grid gap-4 mb-4 grid-cols-2">
          <FormFieldProvider errors={errors} labels={labels}>
            <FormField name="name">
              <input
                {...registers.name}
                className="input"
                placeholder="Nature green necklace..."
              />
            </FormField>
            <FormField name="photos">
              <PhotoUploadInput
                preExistingPhotosUrls={product!.variations[0]!.images.map(
                  (img: { path: string }) => getPhotoURL(img.path)
                )}
                {...registers.photos}
              />
            </FormField>

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
              <input {...registers.stock} className="input" placeholder="10" />
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
