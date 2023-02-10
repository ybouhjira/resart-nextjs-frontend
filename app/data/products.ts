import Product from "@/app/types/Product";

const products: Product[] = [
  {
    sku: "0000001",
    name: "",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/151729218_871604640076603_9204273158742134925_n.jpg",
  },
  {
    sku: "0000002",
    name: "",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/151780318_5412425862163062_7745499523184083421_n.jpg",
  },
  {
    sku: "0000003",
    name: "",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/152234953_2912776658999005_4504133482590280314_n.jpg",
  },
  {
    sku: "0000004",
    name: "",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/152348121_453381749147207_1840932833508423850_n.jpg",
  },
  {
    sku: "0000005",
    name: "",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/152690265_740113026646424_411832573629936491_n.jpg",
  },
];

export default products;
