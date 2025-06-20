/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Dosis', 'Arial', 'sans-serif'],
        'display': ['Karnivore', 'Courier', 'mono'],
      },
      container: {
        center: true,
      },
      extend: {
        colors: {
          primary: '#b93636',
          secondary: '#384795',
          tertiary: '#00b396',
          cyan: '#79d9ff',
          yellow: '#FFDB3A',
          purple: '#a072c1',
          green: '#53bd37',
          violet: '#754cff',
          magenta: '#a93cff',
          red: '#b52129',
          // red: '#FF3A5E',
          lime: '#80ff00',
          gray: '#d4d0cb',
          black: '#131313',
        },
        zIndex: {
          '-10': '-10'
        },
        maxWidth: {
          '1/2': '50%',
        }
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'xxl': '1560px'
      }
      // aspectRatio: { // defaults to {}
      //   'none': 0,
      //   'square': [1, 1], // or 1 / 1, or simply 1
      //   '16/9': [16, 9],  // or 16 / 9
      //   '4/3': [4, 3],    // or 4 / 3
      //   '21/9': [21, 9],  // or 21 / 9
      // }
    }
  },
  variants: {
    extend: {
      transform: ['hover', 'focus']
    }
  },
  plugins: [
    // require("tailwindcss-responsive-embed"),
    // require("tailwindcss-aspect-ratio"),
  ],
}
