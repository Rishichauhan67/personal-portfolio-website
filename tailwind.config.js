/** @type {import('tailwindcss').Config} */
export default {
  // This is the "magic" line that fixes your dark mode
  darkMode: 'selector', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
      },
    },
  },
  plugins: [],
}