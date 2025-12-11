/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          950: '#0f0b1f',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'first-bg': "url('../src/img/main/main.jpg')",
        'second-bg': "url('../src/img/history/history.jpg')",
      },
      fontFamily: {
        'heading': ['UStroke', 'sans-serif'],
        'body': ['Boopee', 'sans-serif'],
        'fairfax': ['Fairfax', 'sans-serif'],
      }
    },
  },
  plugins: [],
}