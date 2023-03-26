import { createContext, useContext } from "react";
import TailwindConfig from "@/tailwind.config";

const ColorContext = createContext(TailwindConfig.theme!.extend!.colors);

export const useColors = () => {
  const colors = useContext(ColorContext);
  return colors;
};
export default ColorContext;
