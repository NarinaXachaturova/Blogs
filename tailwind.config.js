/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#1A1A1F",
        purple: "#5D37F3",
        red: "#EA1919",
        green: "#14D81C",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
