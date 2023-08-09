/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#6363FF",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        }
      },
      fontFamily: {
        body: ["Nunito"],
      }
    },
  },
  plugins: [],
}

