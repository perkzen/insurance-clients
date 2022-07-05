/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,scss}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [],
};
