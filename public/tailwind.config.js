/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'custom-blue': 'rgba(0, 102, 204, 0.4)',
      },
    },
  },
  plugins: [],
}

