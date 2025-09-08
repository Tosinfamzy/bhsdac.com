// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { "2xl": "1280px" },
    },
    extend: {
      colors: {
        "blessed-blue": "#273375", // legacy usage
        primary: "#273375",
        navy: "#040C36",
        "accent-blue": "#2B41BB",
        "accent-yellow": "#FFC039",
        overlay: "#02061C",
      },
      fontSize: {
        h1: ["4rem", { lineHeight: "1.1" }], // 64px
        h2: ["3rem", { lineHeight: "1.1" }], // 48px
        h3: ["2rem", { lineHeight: "1.2" }], // 32px
        body: ["1rem", { lineHeight: "1.6" }], // 16px
        small: ["0.875rem", { lineHeight: "1.5" }], // 14px
      },
      borderRadius: {
        button: "0.5rem", // 8px
        card: "0.75rem", // 12px
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
  plugins: [flowbite.plugin()],
};
