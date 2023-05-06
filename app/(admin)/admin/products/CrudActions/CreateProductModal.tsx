import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { FormField } from "@/app/(admin)/admin/components/FormField";
import PhotoUploadInput from "@/app/(admin)/admin/components/PhotoUploadInput";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const required = { value: true, message: "required" };
const fixedLength = (length: number) => ({
  minLength: { value: length, message: `length should be ${length}` },
  maxLength: { value: length, message: `length should be ${length}` },
});

export default function CreateProductModal({ open, setOpen }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  const registers = {
    sku: register("sku", {
      required,
      ...fixedLength(6),
      pattern: /^01[A-Za-z0-9]+$/i,
    }),
    stock: register("stock", { required }),
    name: register("name", { required }),
    referencePrice: register("referencePrice", { required }),
    currentPrice: register("currentPrice", { required }),
    description: register("description", { required }),
  };

  return (
    <>
      <Modal dismissible={true} show={open} onClose={() => setOpen(false)}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>Create new product</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <FormField colSpan={1} label="sku">
                  <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder={"01...."}
                    {...registers.sku}
                  />
                  {errors.sku && (
                    <span className="text-red-500 text-xs">
                      {errors.sku.message as string}
                    </span>
                  )}
                </FormField>
                <FormField colSpan={1} label="stock">
                  <input
                    {...registers.stock}
                    className="input"
                    placeholder="10"
                  />
                </FormField>
                <FormField label="name">
                  <input
                    {...register("name", {})}
                    className="input"
                    placeholder="Nature green necklace..."
                  />
                </FormField>
                <FormField label="Photos">
                  <PhotoUploadInput />
                </FormField>
                <FormField colSpan={1} label={"Reference price"}>
                  <input
                    {...registers.referencePrice}
                    className="input"
                    placeholder="100"
                  />
                </FormField>

                <FormField colSpan={1} label="Current price">
                  <input
                    placeholder="50"
                    className="input"
                    {...register("currentPrice", {})}
                  />
                </FormField>
                <FormField label="description">
                  <textarea
                    {...registers.description}
                    className="input"
                    placeholder="Celebrate the beauty of love with the Eternal Embrace Couples' Necklace Set, featuring two stunning handcrafted pieces that perfectly complement each other. Made with a harmonious blend of epoxy resin and Thuya wood, these necklaces showcase a unique fusion of modern design and natural elegance."
                  />
                </FormField>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="gray" type="submit">
              OK
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}
