module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bdpv': "url('/public/img/default.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
