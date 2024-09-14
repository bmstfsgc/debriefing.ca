import type { Config } from 'tailwindcss'

export default {


  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./messages/*.json"
  ],
      
  theme: {
    extend: {
      backgroundImage: {
        'banner1': "url('/static/images/site/home/banner11-980x525.jpg')",
        'banner2': "url('/img/footer-texture.png')",
      },
      colors: {
        transparent:'transparent',
        menubackground:'#0037A6',
        menuhighlight:'#2E8DE6',
        menucolor:'#cfcfcf',
        bodybackground:'#fff',
        bodycolor:'#011011',
        headingcolor:'#3C4D6D',
        headinglinkcolor:'#00BFFF',
       
        producedbycolor:'#282828',
        footercolor:'#05080D'
      },

      keyframes: {

      ffadeIn: {
          '0%': { opacity : '0' },
          '100%': {opacity : '1' },
      },
      ffadeOut: {
        '0%': { opacity: '1' },
        '100%': { opacity: '0' },
      },

    },

    animation: {
        'fadeIn': 'ffadeIn 100m linear forwards',
        'fadeOut': 'ffadeOut 100ms linear forwards',
    },



//    fontFamily: {
//      sans: ['var(--font-inter)'],
      //mono: ['var(--font-roboto-mono)'],
//      lato: ['var(--font-lato)']
//    },


    },
    
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },

/*
    fontFamily: {
    'sans': ['ui-sans-serif', 'system-ui'],
    'serif': ['ui-serif', 'Georgia'],
    'mono': ['ui-monospace', 'SFMono-Regular'],
    'display': ['Oswald'],
    'body': ['"Lato"', ],
    'header': ['"Lato"', ],
    },

    */
    fontSize: {
      'h1': '48px',
      'h2': '36px',
      'h3': '30px',
      'h4': '24px',
      'h5': '20px',
      'h6': '16px',
    },
  },
  plugins: [ 
            require("tailwindcss/nesting"),
            require('@tailwindcss/typography'),
            require('@tailwindcss/forms'),
            require('@tailwindcss/container-queries'),
],
  
} satisfies Config

