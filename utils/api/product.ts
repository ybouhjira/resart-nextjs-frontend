import toFormData from "@/utils/toFormData";

export const createProduct = async (data: any) => {
  const formData = toFormData(data);
  const response = await fetch("/api/products", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error creating product");
  }

  return response.json();
};

export const updateProduct = async (data: any) => {
  const formData = toFormData(data);
  const response = await fetch(`/api/products/${data.sku}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Error updating product");
  }

  return response.json();
};
