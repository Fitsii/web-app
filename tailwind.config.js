module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      }
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   primary: {
    //     light: '#E5F3FE',
    //     DEFAULT: '#0483FF',
    //   },
    //   warning: {
    //     warning: '#FFEFCA',
    //     default:'#FFEFCA'
    //   },
    //   green: {
    //     light: '#AAFFBE',
    //     default: '#1DB440',
    //   },
    //   red: {
    //     darkest: '#F53C56',
    //     default: '#F53C56',
    //     light: '#FFD9D1'
    //   }
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ]
}
