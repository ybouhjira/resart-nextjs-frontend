import { useMutation } from "react-query";
import { createProduct } from "@/utils/api/product";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export function useCreateProduct() {
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
