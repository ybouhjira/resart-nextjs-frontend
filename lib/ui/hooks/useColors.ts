import TailwindConfig from "@/tailwind.config";

export default function useColors() {
  return TailwindConfig.theme!.extend!.colors as {
    whatsapp: string;
    dark: string;
    main: string;
    lightBackground: string;
    darkBackground: string;
    primary: string;
  };
}
