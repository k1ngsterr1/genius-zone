/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@mui/material/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "custom-blue": "#0B1887",
        "custom-hover-blue": "#0f20b9",
        "custom-light-blue": "#CFD4FB",
        "custom-lightest-blue": "#EEF0FE",
        "custom-black": "#282828",
      },
    },
    screens: {
      mini: "448px",
    },
  },
  plugins: [],
};
