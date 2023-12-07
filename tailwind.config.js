/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/images/hero.jpg')",
        'hero-pattern-mb':"url('/images/hero_mb.jpg')"
      }
    },
  },
  plugins: [],
}