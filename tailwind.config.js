/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // Add paths to your files
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ],
        'arrow':'inset 0px 4px 10px 2px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        'custom': '-5px -3px 30px -10px #96BEE7, 4px 5px 30px 5px #101213',
      },
      backdropBlur: {
        'custom': '52.28px',
      },
      transform: {
        'matrix-[-1,0,0,1,0,0]': 'matrix(-1, 0, 0, 1, 0, 0)',
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontWeight: {
        'extrabold': 800,
      },
      fontSize: {
        '12px': '12px',
      },
      lineHeight: {
        '6px': '6px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #272728 0%, #7392aa 100%)',
      }
      
    },
  },
  plugins: [],
}
