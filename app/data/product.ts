export const colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "black",
  "white",
  "gray",
] as const;

export const productLabels = {
  sku: "SKU",
  color: "Color",
  stock: "Stock",
  name: "Name",
  referencePrice: "Reference price",
  currentPrice: "Current price",
  description: "Description",
  photos: "Photos",
} as const;

enum ProductFormField {
  sku = "sku",
  name = "name",
  description = "description",
  referencePrice = "referencePrice",
  currentPrice = "currentPrice",
  color = "color",
  stock = "stock",
  photoURLs = "photoURLs",
  photoFiles = "photoFiles",
}

export default ProductFormField;
