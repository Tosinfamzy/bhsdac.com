/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        primary: "#273375",
        navy: "#040C36",
        "accent-blue": "#2B41BB",
        "accent-yellow": "#FFC039",
        overlay: "#02061C",
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.1" }],
        h2: ["3rem", { lineHeight: "1.1" }],
        h3: ["2rem", { lineHeight: "1.2" }],
        body: ["1rem", { lineHeight: "1.6" }],
        small: ["0.875rem", { lineHeight: "1.5" }],
      },
      borderRadius: {
        button: "0.5rem",
        card: "0.75rem",
      },
      boxShadow: {
        card: "0 6px 24px rgba(0,0,0,0.12)",
        elevated: "0 12px 32px rgba(0,0,0,0.16)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
