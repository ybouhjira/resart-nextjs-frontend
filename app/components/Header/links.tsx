import { ReactNode } from "react";
import CartIcon from "@/components/Icons/CartIcon";

const links: {
  text?: string;
  url: string;
  icon?: ReactNode;
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
    text: "Cart",
    icon: <CartIcon />,
  },
];

export default links;
