/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // LV light Variant
        // DV Dark Variant
        'primaryLV': "f7f7f7",
        'brand-primaryLV': "#ff7a00",
        'brand-secondaryLV': "#00088c",

      },
      fontFamily: {
        'oswald': ['Oswald', 'sans'],
        'poppins': ['Poppins', 'serif'],
      },
      screens: {
        'tab': '740px'
      },
    },
  },
  plugins: [],
}

