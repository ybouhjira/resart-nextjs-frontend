import { useMutation } from "react-query";
import { updateProduct } from "@/utils/api/product";
import { useRouter } from "next/navigation";

export function useUpdateProduct() {
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
