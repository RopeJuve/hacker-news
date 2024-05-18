/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'news': '1fr 30%', // Custom grid template
      },
      gridTemplateRows: {
        'custom': 'repeat(10, 150px)', // Define custom row heights
      }
    },
    plugins: [],
  }
}

