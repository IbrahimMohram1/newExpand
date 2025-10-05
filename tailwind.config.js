/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx,css}",],
  theme: {
    extend: {
       fontSize: {
        'base': '16px', // هنا بتحدد حجم الخط الأساسي
      },
       container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
      },
    },
       writingMode: {
        'horizontal-tb': 'horizontal-tb',
        'vertical-rl': 'vertical-rl',
        'vertical-lr': 'vertical-lr'
      }
    },
  },
   safelist: [
    'text-sm', 'text-md', 'text-lg', // هنا بتحط الكلاسات اللي مش فاكرها PurgeCSS
  ],
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.writing-horizontal-tb': {
          'writing-mode': 'horizontal-tb',
        },
        '.writing-vertical-rl': {
          'writing-mode': 'vertical-rl',
        },
        '.writing-vertical-lr': {
          'writing-mode': 'vertical-lr',
        },
      }
      addUtilities(newUtilities)
    }
  ]
}

