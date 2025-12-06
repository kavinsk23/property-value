/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f97316" /* Orange */,
          light: "#ffa500" /* Lighter orange */,
          dark: "#ff5722" /* Deeper orange */,
        },
        neutral: {
          50: "#ffffff",
          100: "#f5f5f5",
          200: "#e5e5e5",
          700: "#333333",
          800: "#1e1e1e",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};
