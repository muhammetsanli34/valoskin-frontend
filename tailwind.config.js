/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "valo-light-red": "#FF4655",
        "valo-dark-red": "#BD3944",
        "valo-white": "#FFFBF5",
        "valo-dark-blue": "#0f1923",
      },
    },
    plugins: [],
  }
}
