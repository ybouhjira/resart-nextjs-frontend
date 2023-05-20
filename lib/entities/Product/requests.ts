import { doRequest } from "@/lib/ui/doRequest";

export async function createProductRequest(data: FormData) {
  return doRequest({
    data,
    method: "POST",
    url: "/api/products",
    errorMessage: "Error creating product",
  });
}

export async function updateProductRequest(data: FormData) {
  return doRequest({
    data,
    method: "PUT",
    url: "/api/products",
    errorMessage: "Error updating product",
  });
}
