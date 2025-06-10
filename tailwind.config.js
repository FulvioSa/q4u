/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eafdf7',
          100: '#d0f7ed',
          200: '#a1efdb',
          300: '#64e0c3',
          400: '#34caa6',
          500: '#1aad8a',
          600: '#0e8c6f',
          700: '#0c705a',
          800: '#0c5a48',
          900: '#0b4a3c',
          950: '#052e25',
        },
        secondary: {
          50: '#eef4ff',
          100: '#e0eaff',
          200: '#c7d7ff',
          300: '#a5baff',
          400: '#8094ff',
          500: '#5b6aff',
          600: '#3a3ef7',
          700: '#2d2ce0',
          800: '#2728b4',
          900: '#252990',
          950: '#18184f',
        },
        accent: {
          50: '#fff2ed',
          100: '#ffe2d4',
          200: '#ffc1a8',
          300: '#ff9770',
          400: '#ff6937',
          500: '#ff3c0f',
          600: '#ff1d00',
          700: '#cc1900',
          800: '#a21a07',
          900: '#841c0c',
          950: '#480b05',
        },
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'elegant': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 10s ease infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
      transitionDelay: {
        '1000': '1000ms',
        '2000': '2000ms',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
        '.animation-delay-2000': {
          'animation-delay': '2000ms',
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
