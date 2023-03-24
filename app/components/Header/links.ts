const links: {
    text?: string;
    url: string;
    icon?: string;
}[] = [
  {
    text: "Products",
    url: "/products",
  },
  {
    text: "About",
    url: "/about",
  },
  {
    url: "/cart",
    icon: "icons/cart.svg",
  },
] as const;

export default links;
