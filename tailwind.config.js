module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primaryBlue: '#2CC0C9',
      primaryPurple: '#FE53BB',
      white: '#ffffff',
      yellow: '#F4E76C',
      secondaryBlue: '#74E6ED',
      secondaryPurple: '#FE53BB',
      backgroundPurple: '#45253A',
      backgroundBlue: '#204749',
      backgroundColor: '#202023',
      backgroundTrans: 'rgba(32, 32, 35, .9)',
      backgroundSecondary : "#313134",

      // ...
    },
    fontFamily: {
      'cyber':  [ 'Orbitron'],
      'main': ['Verdana'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
