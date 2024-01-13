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
        'cosmos': {
          '50': '#fdf3f4',
          '100': '#fbe8ea',
          '200': '#f6d3d8',
          '300': '#efb2ba',
          '400': '#e58796',
          '500': '#d85b74',
          '600': '#c23c5c',
          '700': '#a32d4c',
          '800': '#892845',
          '900': '#762540',
          '950': '#41101f',
      },

},  
    extend: {},
  },
  plugins: [],
}
