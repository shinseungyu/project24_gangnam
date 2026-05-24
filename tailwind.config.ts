import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        brand: {
          light: "#F5F3FF", // violet-50
          DEFAULT: "#7C3AED", // violet-600
          dark: "#5B21B6", // violet-800
        },
        accent: {
          light: "#FEF3C7",
          DEFAULT: "#FDE68A",
          dark: "#F59E0B",
        },
      },
      backgroundImage: {
        'premium-gradient': 'linear-gradient(to bottom right, #F5F3FF, #EDE9FE, #FFFFFF)',
      },
      boxShadow: {
        'premium': '0 10px 30px -10px rgba(124, 58, 237, 0.1), 0 4px 15px -5px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
export default config;
