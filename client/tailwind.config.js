module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1024px',
      xl: '1281px'
    },

    extend: {
      screens: {
        '2sm': '512px',
        '2md': '920px'
      },
      container: {
        'max-width': {
          '2sm': '512px',
          '2md': '920px'
        },
        padding: {
          DEFAULT: '2rem',
          '2sm': '1.5rem',
          '2md': '2rem'
        }
      }
    },
  },
  plugins: [],
}