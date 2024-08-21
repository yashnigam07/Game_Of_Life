// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        slateBlue: '#6A5ACD',       // Primary Color
        coolGray: '#4A4A4A',        // Secondary Color
        mintGreen: '#98FF98',       // Accent Color
        deepNavy: '#001F3F',        // Background Gradient Start
        slateGray: '#2E2E2E',       // Background Gradient End
        lightSilver: '#E0E0E0',     // Neutral Light
        charcoal: '#333333',        // Neutral Dark
      },
      boxShadow: {
        'elegant': '0 4px 12px rgba(0, 0, 0, 0.2)',
        'focus': '0 0 0 3px rgba(152, 255, 152, 0.7)',  // Accent focus ring
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
        fadeOut: 'fadeOut 0.4s ease-in',
        smoothSlide: 'smoothSlide 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        },
        smoothSlide: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}



