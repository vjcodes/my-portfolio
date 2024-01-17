/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#C1C1C1", //Hello
        "gray-50": "#959595", //SoftwareEngineer
      },
    },
  },
  plugins: [],
};
