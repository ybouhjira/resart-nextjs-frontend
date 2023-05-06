import { Button, Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import { FormField } from "@/app/(admin)/admin/components/FormField";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

let required = { value: true, message: "required" };
let length = { value: 6, message: "length should be 6" };
let fixedLength = (length: number) => ({
  minLength: { value: length, message: `length should be ${length}` },
  maxLength: { value: length, message: `length should be ${length}` },
});
const inputClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500";
export default function CreateProductModal({ open, setOpen }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => console.log(data);
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
                    {...register("sku", {
                      required,
                      ...fixedLength(6),
                      pattern: /^01[A-Za-z0-9]+$/i,
                    })}
                  />
                  {errors.sku && (
                    <span className="text-red-500 text-xs">
                      {errors.sku.message as string}
                    </span>
                  )}
                </FormField>

                <FormField colSpan={1} label="stock">
                  <input {...register("stock", {})} className={inputClasses} />
                </FormField>
                <FormField label="name" {...register("name")}>
                  <input
                    {...register("name", {})}
                    className={inputClasses}
                    placeholder="Nature green necklace..."
                  />
                </FormField>
                <FormField
                  colSpan={1}
                  label={"Reference price"}
                  {...register("referencePrice")}
                >
                  <input
                    {...register("referencePrice", {})}
                    className={inputClasses}
                    placeholder="100"
                  />
                </FormField>

                <FormField
                  colSpan={1}
                  label="Current price"
                  {...register("currentPrice")}
                >
                  <input
                    placeholder="50"
                    className={inputClasses}
                    {...register("currentPrice", {})}
                  />
                </FormField>
                <FormField label="description" {...register("description")}>
                  <textarea
                    {...register("description", {})}
                    className={inputClasses}
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
