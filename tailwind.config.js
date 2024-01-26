/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      "transparent": "transparent",
      'myblue': {
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
      'mystone': {
          '50': '#f5f5f6',
          '100': '#e6e6e7',
          '200': '#d0d0d1',
          '300': '#afafb1',
          '400': '#8f8f91',
          '500': '#6c6c6e',
          '600': '#5c5c5e',
          '700': '#4f4e50',
          '800': '#454446',
          '900': '#3c3c3d',
          '950': '#262626',
      },


},  
          extend: {
          },
        },
        plugins: [],
}
