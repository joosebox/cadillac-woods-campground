/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        forest: {
          50: '#f6fdf7',
          100: '#e9fcec',
          200: '#d3f7d9',
          300: '#aaedb8',
          400: '#78df8f',
          500: '#4fc86b',
          600: '#3ba955',
          700: '#328746',
          800: '#2b6c3a',
          900: '#265832',
          950: '#0f3119',
        },
      },
    },
  },
  plugins: [],
};