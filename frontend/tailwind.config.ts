import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans Hebrew", "sans-serif"],
      },
      colors: {
        // Define your custom colors from Figma here
        // Example: 
        // primary: "#1a73e8",
        // secondary: "#f0f2f5",
        'light-gray': '#F7F7F7',
        'dark-gray': '#36454F',
        'light-blue': '#A8DADC',
        'medium-blue': '#45B8AC',
        'dark-blue': '#2D3A44',
      },
    },
  },
  plugins: [],
};
export default config; 