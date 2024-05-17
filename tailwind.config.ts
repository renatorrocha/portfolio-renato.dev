import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-ice-blue": "#eceff4",
        "charcoal-blue": "#4c566a",
        "pale-cerulean": "#88c0d0",
        "air-blue": "#81a1c1",
        "steel-blue": "#5e81ac",
        "light-powder-blue": "#d8dee9",
      },
    },
  },
  plugins: [],
};
export default config;
