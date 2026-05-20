/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Northern Michigan Forest Night (Primary)
        forest: {
          50: '#f0f5f3',
          100: '#dde8e3',
          200: '#b8d4c9',
          300: '#8bb6a5',
          400: '#5f9580',
          500: '#427763',
          600: '#325f4e',
          700: '#284c3f',
          800: '#223e34',
          900: '#1d342c',
          950: '#0f1a16',
        },
        // Lake Twilight (Accent)
        lake: {
          50: '#eff8ff',
          100: '#daeeff',
          200: '#bee2ff',
          300: '#8fd0ff',
          400: '#59b5ff',
          500: '#3297ff',
          600: '#1a78ed',
          700: '#1361d9',
          800: '#164eb0',
          900: '#18448a',
          950: '#0d2447',
        },
        // Misty Gray (Neutral)
        mist: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
          950: '#101214',
        },
        // Campfire Glow (Warm Accent)
        campfire: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          950: '#431407',
        },
        // Legacy primary (for backwards compatibility)
        primary: {
          50: '#f0f5f3',
          100: '#dde8e3',
          200: '#b8d4c9',
          300: '#8bb6a5',
          400: '#5f9580',
          500: '#427763',
          600: '#325f4e',
          700: '#284c3f',
          800: '#223e34',
          900: '#1d342c',
          950: '#0f1a16',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(15, 26, 22, 0.12)',
      },
    },
  },
  plugins: [],
};
