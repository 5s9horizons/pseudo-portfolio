/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#00FF88', // For easier reference if needed
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s infinite ease-in-out',
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': {
            opacity: '0.8',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.05)',
          },
        },
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-thin': {
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: '#1f2937', // theme('colors.gray.800')
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#00FF88', // PRIMARY_GREEN
            'border-radius': '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#00DD77', // Slightly darker green
          },
        },
      })
    }
  ],
}
