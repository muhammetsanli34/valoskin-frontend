/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "valo-light-red": "var(--valo-light-red)",
        "valo-dark-red": "var(--valo-dark-red)",
        "valo-white": "var(--valo-white)",
        "valo-dark-blue": "var(--valo-dark-blue)",
      },
    },
    plugins: [],
  }
}
