module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-red':'#FC3949',
        'primary-gray':"#283036",
        'primary-gray2':'#292d33',
      },
      screens: {
        'x-sm': '500px',
      }
    },
  },
  plugins: [],
}
