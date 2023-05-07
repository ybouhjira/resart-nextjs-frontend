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

export const materialColors: Record<(typeof colors)[number], string> = {
  red: "#F44336",
  blue: "#2196F3",
  green: "#4CAF50",
  yellow: "#FFEB3B",
  orange: "#FF9800",
  purple: "#9C27B0",
  pink: "#E91E63",
  brown: "#795548",
  black: "#000000",
  white: "#FFFFFF",
  gray: "#9E9E9E",
} as const;