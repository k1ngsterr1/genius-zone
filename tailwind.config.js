/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0B1887",
        "custom-hover-blue": "#0f20b9",
        "custom-light-blue": "#CFD4FB",
        "custom-black": "#282828",
      },
    },
    screens: {
      mini: "448px",
    },
  },
  plugins: [],
};
