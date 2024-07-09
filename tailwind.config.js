/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue-color': '#010C15',
        'marine-blue-color': '#011627',
        'dark-gray-color': '#1C2B3A',
        'gray-color': '#607B96',
        'blue-color': '#4D5BCE',
        'yellow-color': '#FEA55F',
        'white-color': '#E5E9F0',
        'light-blue-color': '#43D9AD',
      },
      fontFamily: {
        fira: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
