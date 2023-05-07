import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { FormField } from "@/app/(admin)/admin/components/FormField";
import PhotoUploadInput from "@/app/(admin)/admin/components/PhotoUploadInput";
import { useMutation } from "react-query";
import { twMerge } from "tailwind-merge";
import ColorPicker from "@/app/(admin)/admin/products/CrudActions/createProductModal/ColorPicker";
import { colors } from "@/app/data/product";
import { useRouter } from "next/navigation";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const required = { value: true, message: "required" };
const fixedLength = (length: number) => ({
  minLength: { value: length, message: `length should be ${length}` },
  maxLength: { value: length, message: `length should be ${length}` },
});

const createProduct = async (data: any) => {
  console.log(data.photos);
  const formData = new FormData();
  formData.append("sku", data.sku);
  formData.append("color", data.color);
  //add all photos to formData
  Array.from(data.photos).forEach((photo: any, i: number) => {
    console.log(photo);
    formData.append(`photos`, photo);
  });
  formData.append("stock", data.stock);
  formData.append("name", data.name);
  formData.append("referencePrice", data.referencePrice);
  formData.append("currentPrice", data.currentPrice);
  formData.append("description", data.description);

  console.log({ formData });

  const response = await fetch("/api/products", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error creating product");
  }

  return response.json();
};

export default function CreateProductModal({ open, setOpen }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { mutate, isLoading } = useMutation(createProduct);
  const router = useRouter();

  const onSubmit = (data: any) => {
    console.log(data);

    mutate(data, {
      onSuccess: () => {
        console.log("Product created successfully");
        setOpen(false);
        router.refresh();
      },
      onError: (error) => {
        console.error("Error creating product:", error);
      },
    });
  };

  const registers = {
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

  const getErrors = (name: keyof typeof registers) =>
    errors[name] && (
      <span className="text-red-500 text-xs">
        {errors[name]!.message as string}
      </span>
    );

  return (
    <>
      <Modal dismissible={true} show={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>Create new product</Modal.Header>
          <Modal.Body>
            {isLoading && <div>Creating product...</div>}
            {!isLoading && (
              <div className="space-y-6">
                <div className="grid gap-4 mb-4 grid-cols-2">
                  <div className="col-span-2">
                    <FormField label="name" colSpan={2}>
                      <input
                        {...registers.name}
                        className="input"
                        placeholder="Nature green necklace..."
                      />
                      {getErrors("name")}
                    </FormField>
                  </div>
                  <div className="col-span-2">
                    <FormField label="Photos" colSpan={2}>
                      <PhotoUploadInput {...registers.photos} />
                      {getErrors("photos")}
                    </FormField>
                  </div>

                  <FormField label="Color" colSpan={2}>
                    <ColorPicker {...registers.color} watch={watch} />
                  </FormField>

                  <FormField colSpan={1} label="sku">
                    <input
                      className="input"
                      placeholder={"01...."}
                      {...registers.sku}
                    />
                    {getErrors("sku")}
                  </FormField>
                  <FormField colSpan={1} label="stock">
                    <input
                      {...registers.stock}
                      className="input"
                      placeholder="10"
                    />
                    {getErrors("stock")}
                  </FormField>

                  <FormField colSpan={1} label={"Reference price"}>
                    <input
                      type="number"
                      {...registers.referencePrice}
                      className={twMerge("input rounded-r-none rounded-l-md")}
                      placeholder="100"
                    />
                    {getErrors("referencePrice")}
                  </FormField>

                  <FormField colSpan={1} label="Current price">
                    <input
                      type="number"
                      placeholder="50"
                      className="input rounded-r-none rounded-l-md"
                      {...registers.currentPrice}
                    />
                    {getErrors("currentPrice")}
                  </FormField>
                  <FormField label="description">
                    {getErrors("description")}
                    <textarea
                      {...registers.description}
                      className="input"
                      placeholder="This is a beautiful necklace..."
                    />
                  </FormField>
                </div>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" type="submit" disabled={isLoading}>
              OK
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
