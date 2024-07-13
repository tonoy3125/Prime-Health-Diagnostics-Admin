/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      cinzel: ['Cinzel', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      pacifico: ['Pacifico', 'sans-serif'],
      young_serif: ['Young Serif', 'sans-serif'],
      lora: ['Lora', 'sans-serif'],
      outfit:['Outfit','sans-serif']
    },
  },
  plugins: [require("daisyui")],
};
