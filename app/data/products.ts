import Product from "@/types/Product";

const products: Product[] = [
  {
    sku: "0000001",
    name: "Night sky blue",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/151729218_871604640076603_9204273158742134925_n.jpg",
    description:
      "This stunning handmade necklace combines the deep, rich color of dark blue with the natural beauty of thuya wood. The result is a striking accessory that's sure to turn heads. Wear it with any outfit for an instant touch of elegance and sophistication. The dark blue and natural wood necklace is perfect for those who love to make a statement without going overboard.",
  },
  {
    sku: "0000004",
    name: "Flower violet",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/152348121_453381749147207_1840932833508423850_n.jpg",
    description:
      "Bring a touch of nature to your outfit with this handmade thuya wood necklace in flower violet. The combination of blue and purple is reminiscent of wildflowers, making this necklace the perfect accessory for those who love to explore the outdoors. The natural wood adds a touch of warmth and earthiness, making this piece the perfect complement to any outfit. Wear it with a flowing dress or a simple white tee for a bohemian touch.",
  },
  {
    sku: "0000002",
    name: "Rose pink",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/151780318_5412425862163062_7745499523184083421_n.jpg",
    description:
      "Add a pop of color to your outfit with this handmade thuya wood necklace in vivid pink. The combination of natural wood and bright pink is a playful and fun way to express your personality. This necklace is perfect for those who love to be bold and stand out in a crowd. Wear it with a simple dress or a casual outfit for a touch of fun and femininity.",
  },
  {
    sku: "0000003",
    name: "Deep sea blue",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/152234953_2912776658999005_4504133482590280314_n.jpg",
    description:
      "This sky blue and natural wood necklace is a subtle yet stylish addition to any outfit. The calming blue hue is reminiscent of the clear blue sky, making it the perfect accessory for those who love the great outdoors. The natural wood complements the blue beautifully, adding a touch of warmth and earthiness to the piece. Wear it with your favorite blue dress or any casual outfit for a chic, understated look.",
  },
  {
    sku: "0000005",
    name: "Vivid orange",
    price: { referencePrice: 10, currentPrice: 8 },
    variations: [{ color: "red" }, { color: "blue" }, { color: "green" }],
    path: "photos/152690265_740113026646424_411832573629936491_n.jpg",
    description:
      "Add a pop of color to your look with this playful orange full epoxy necklace. Handmade from exquisite thuya wood, this unique piece is perfect for the person who wants to stand out and showcase their vibrant personality. Whether you're dressing up for a special occasion or just adding some flair to your everyday wardrobe, this necklace is sure to turn heads and make a statement.",
  },
];

export default products;
