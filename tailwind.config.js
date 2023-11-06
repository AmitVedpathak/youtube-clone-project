/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      spacing:{
        '14':'3.5rem'
      }
    },
  },
  corePlugins: {
    preflight: false, // Disable preflight to prevent conflicts
  },
  plugins: [],
}

