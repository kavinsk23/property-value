// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary color variations
        primary: {
          DEFAULT: "#FA7315",
          50: "#FF9E4C",
          100: "#FFD1AD",
          200: "#FFBC85",
          300: "#FFA65C",
          400: "#FA7315",
          500: "#E65C0E",
          600: "#CC4D07",
          700: "#B33E00",
          800: "#992F00",
          900: "#802000",
        },

        // Translucent orange variation
        "primary-translucent": "#ff8904cc",

        // White and Black with extended variations
        white: {
          DEFAULT: "#FFFFFF",
          50: "#FFFFFF",
          100: "#FAFAFA",
          200: "#F5F5F5",
        },
        black: {
          DEFAULT: "#000000",
          50: "#262626",
          100: "#1A1A1A",
          200: "#0D0D0D",
        },
        blue: "#1447e6",
        red: "#ca3500",
        purple: "#8200db",
        grey: "#4a5565",

        headerblue: "#99ADFF",
        headergreen: "#88C573",
        headeryellow: "#FFDE5A",
        headerorange: "#FC9F68",
        headerteal: "#1CABB1",
        headerpurple: "#CEA9F0",

        bluebg: "#dbeafe",
        redbg: "#ffedd4",
        purplebg: "#f3e8ff",

        success: "#16a34a",

        gradient: {
          start: "#FF9F1C",
          end: "#FF6B35",
        },
        gradientAlt: {
          start: "#FFA54C",
          end: "#FF7D35",
        },
      },
    },
  },
  plugins: [],
};
