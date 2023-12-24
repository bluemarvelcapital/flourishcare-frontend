import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        baseLight: "#F9FAF9",
        base: "#1B1B1B",
        primary: "#66ACDC",
        primary15: "#96C0E726",
        primaryV: {
          100: "#FBFCFE",
          200: "#F1F3F9",
          300: "#D2DBEC",
          400: "#BFCBE4",
          500: "#A9BADB",
          600: "#7590C5",
          700: "#607FBC",
          800: "#4C6FB4",
        },
        success: "#04BD4B",
      },
      fontFamily: {
        "myriad-pro": "Myriad Pro, sans-serif",
      },
      screens: {
        md: { min: "1200px", max: "1400px" },
      },
    },
  },
  plugins: [],
}
export default config
