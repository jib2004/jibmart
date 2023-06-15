/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      sm:{max: '576px'}
    },
    extend: {
      keyframes:{
        'slide':{
          'from':{left: '-300px'},
          'to':{left:'0'}
        },

        'slideOut':{
            'from':{left:'0' },
            'to':{left: '-300px'}
        },
        
      },
      animation:{
        'slide': 'slide 0.5s linear ',
        'slideOut': 'slideOut 0.5s linear ',
        
      },
    },
  },
  plugins: [],
}

