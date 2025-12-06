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
          50: "#FFE5D6",
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
      },
      boxShadow: {
        // Complex multi-layer shadow with variable shadow color
        "custom-shadow": `
          0 0 6px var(--tw-shadow-color, rgba(0,0,0,0.03)), 
          0 2px 6px var(--tw-shadow-color, rgba(0,0,0,0.08)), 
          inset 3px 3px 0.5px -3px var(--tw-shadow-color, rgba(0,0,0,0.9)), 
          inset -3px -3px 0.5px -3px var(--tw-shadow-color, rgba(0,0,0,0.85)), 
          inset 1px 1px 1px -0.5px var(--tw-shadow-color, rgba(0,0,0,0.6)), 
          inset -1px -1px 1px -0.5px var(--tw-shadow-color, rgba(0,0,0,0.6)), 
          inset 0 0 6px 6px var(--tw-shadow-color, rgba(0,0,0,0.12)), 
          inset 0 0 2px 2px var(--tw-shadow-color, rgba(0,0,0,0.06)), 
          0 0 12px var(--tw-shadow-color, rgba(255,255,255,0.15))
        `,

        // Multi-layer shadow configuration
        "multi-shadow": `
          var(--tw-inset-shadow), 
          var(--tw-inset-ring-shadow), 
          var(--tw-ring-offset-shadow), 
          var(--tw-ring-shadow), 
          var(--tw-shadow)
        `,
      },
      ringWidth: {
        DEFAULT: "1px",
        0: "0px",
        1: "1px",
        2: "2px",
        4: "4px",
      },
      ringColor: {
        DEFAULT: "rgba(59, 130, 246, 0.5)", // Adjust as needed
      },
      ringOffsetWidth: {
        DEFAULT: "2px",
      },
    },
  },
  plugins: [
    nextui(), // Ensure this is included if you're using NextUI
    function ({ addUtilities }) {
      const newUtilities = {
        // Custom shadow variables utility
        ".custom-shadow-vars": {
          "--tw-shadow": "0 0 6px rgba(0,0,0,0.03)",
          "--tw-shadow-color": "rgba(0,0,0,0.03)",
          "--tw-inset-shadow": "inset 3px 3px 0.5px -3px rgba(0,0,0,0.9)",
          "--tw-inset-ring-shadow":
            "inset -3px -3px 0.5px -3px rgba(0,0,0,0.85)",
          "--tw-ring-offset-shadow": "0 2px 6px rgba(0,0,0,0.08)",
          "--tw-ring-shadow": "inset 0 0 6px 6px rgba(0,0,0,0.12)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
};
