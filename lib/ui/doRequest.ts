import { CreateProductData } from "@/lib/entities/Product/dto/CreateProductData";
import toFormData from "@/lib/ui/toFormData";

interface Params {
  data: object;
  method: string;
  url: string;
  errorMessage: string;
}

export async function doRequest({ data, method, url, errorMessage }: Params) {
  const formData = toFormData(data);
  const response = await fetch(url, {
    method: method,
    body: formData,
  });

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  return response.json();
}
