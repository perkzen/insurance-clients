/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '../../packages/ui/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx,scss}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
