module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontFamily: {
      'body': ['Dosis', 'Arial', 'sans-serif'],
      'display': ['Karnivore', 'Courier', 'mono'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#f70d7d',
        secondary: '#384795',
        tertiary: '#00b396',
        cyan: '#79d9ff',
        yellow: '#FFDB3A',
        purple: '#a072c1',
        green: '#bfe685',
        violet: '#754cff',
        magenta: '#a93cff',
        red: '#FF3A5E',
        lime: '#80ff00',
      },
      zIndex: {
        '-10': '-10'
      },
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
  },
  variants: {},
  plugins: [
    // require("tailwindcss-responsive-embed"),
    // require("tailwindcss-aspect-ratio"),
  ],
}
