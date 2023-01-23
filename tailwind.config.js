/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors : {
        hitam : "#101820",
        hijau : "#1B9326",
        "hitam-light" : "#182430",
        "hijau-light" : "#7CCC6C",
        "purple-light" : "#BE7AB3",
        "orange-light" : "#FF8F1C",
        "blue-light" : "#4BC9E3",
      },
      fontFamily : {
        'sans': ['Quicksand', 'sans-serif']
      }
    },
  },
  plugins: [],
}
