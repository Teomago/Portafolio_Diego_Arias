import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1280px",
      "2xl": "1920px",
    },
    colors: {
      'ofken_1': '#8e827a',
      'ofken_2': '#28201e',
      'ofken_3': '#cc7325',
      'ofken_4': '#e5e3e0',
      'ofken_5': '#edddb0',
      'ofken_6': '#f3a547',
      'ofken_7': '#c1b9b2',
      'ofken_8': '#aca6a9',
      'ofken_9': '#6c3a1d',
      'ofken_10': '#546c74',
      'ofken_11': 'rgba(255,255,255,1)',
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
};
