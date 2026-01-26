/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef3e2',
          100: '#fde4b8',
          200: '#fbcb7e',
          300: '#f8a843',
          400: '#f58a1a',
          500: '#e66f0a',
          600: '#c75505',
          700: '#a04008',
          800: '#81330d',
          900: '#6a2c0e',
        },
      },
    },
  },
  plugins: [],
}
