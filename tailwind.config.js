/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        18: "18px",
      },
      borderRadius: {
        DEFAULT: "10px",
        2: "20px",
      },
      spacing: {
        sm: "8px",
        md: "16px",
        lg: "32px",
        xl: "64px",
        "2xl": "128px",
      },
      screens: {
        max: "1164px",
      },
      colors: {
        whatsapp: "#25D366",
        dark: "#001B4F",
        main: "#7DB9B6",
        lightBackground: "#feefdf",
        darkBackground: "#bb9d7e",
        primary: "#ffa225",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
