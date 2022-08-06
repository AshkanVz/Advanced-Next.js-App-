/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/containers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        wave : {
          'from' : {transform : 'scale(0)'},
          'to' : {transform : 'scale(1)'},

          
        },

        back :{
          'from' : {transform : 'translateY(100%)'},
           'to' : {transform : 'translateY(0%)'},
        }
        
      },

      animation: {
        'waving-hand': 'wave 0.5s linear ',
        'backing' : 'back 0.5s linear',
    },
  },
},
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
}
