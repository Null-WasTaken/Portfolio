/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor : {
       main : "#101010"
    },
    extend: {
      colors: {
        marsh : "#F7F7F1"
      },
    },
  },
  plugins: [],
}