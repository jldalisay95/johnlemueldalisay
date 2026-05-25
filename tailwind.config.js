/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102033",
        health: {
          blue: "#1d4ed8",
          teal: "#0f766e",
          green: "#15803d",
          mint: "#dff7ee",
          sky: "#e8f3ff",
        },
      },
      boxShadow: {
        soft: "0 16px 40px -28px rgba(15, 23, 42, 0.45)",
        card: "0 20px 55px -42px rgba(15, 23, 42, 0.55)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
