/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'curiousBlue': {
          '50': '#f3f7fc',
          '100': '#e6f0f8',
          '200': '#c6def1',
          '300': '#94c4e5',
          '400': '#5ba5d5',
          '500': '#3c91c8',
          '600': '#266ea3',
          '700': '#205984',
          '800': '#1e4b6e',
          '900': '#1e405c',
          '950': '#142a3d',
  },
},  
    extend: {},
  },
  plugins: [],
}
