/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'random-1': '#ffddcc',
        'random-2': '#ccffcc',
        'random-3': '#cceeff',
      },
    },
  },
  plugins: [],
};
