// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'mint-500': 'oklch(0.72 0.11 178)',
      },
      fontFamily: {
        franklin: ['"Franklin Gothic Medium"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
