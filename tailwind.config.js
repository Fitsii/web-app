const daisyThemes = require('./app/daisyui.theme')
module.exports = {
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
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss'),
    require('precss'),
    require('autoprefixer')
  ],
  daisyui: {
    themes: [
      {
        'fitsii': {            /* your theme name */
          'primary': '#0090FF',           /* Primary color */
          'primary-focus': '#0081FF',     /* Primary color - focused */
          'primary-content': '#ffffff',   /* Foreground content color to use on primary color */

          'secondary': '#F0F9FF',         /* Secondary color */
          'secondary-focus': '#f3cc30',   /* Secondary color - focused */
          'secondary-content': '#ffffff', /* Foreground content color to use on secondary color */
          'secondary-dark': '#707070',
          'secondary-gray': '#8799A3',

          'accent': '#37cdbe',            /* Accent color */
          'accent-focus': '#2aa79b',      /* Accent color - focused */
          'accent-content': '#ffffff',    /* Foreground content color to use on accent color */

          'neutral': '#2D2D2D',           /* Neutral color */
          'neutral-focus': '#505050',     /* Neutral color - focused */
          'neutral-content': '#ffffff',   /* Foreground content color to use on neutral color */

          'base-100': '#ffffff',          /* Base color of page, used for blank backgrounds */
          'base-200': '#334565',          /* Base color, a little darker */
          'base-300': '#d1d5db',          /* Base color, even more darker */
          'base-content': '#7D8597',      /* Foreground content color to use on base color */

          'info': '#2094f3',              /* Info */
          'success': '#009485',           /* Success */
          'warning': '#ff9900',           /* Warning */
          'error': '#F53C56',             /* Error */
        },
      },
    ],
  },
}
