module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  options: {
    safelist: [
      /data-theme$/,
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],

  daisyui: {
    themes: [
      'emerald', // first one will be the default theme
      'light', 
      'dark',
      'cupcake',
      'bumblebee',
      'aqua',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      {
        'masum': { // custom theme
          'primary' : '#ea5234',
          'primary-focus' : '#d43616',
          'primary-content' : '#dddddd',
          // other colors
        },
      }
    ],
  },
}
