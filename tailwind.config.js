/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    "./node_modules/flowbite/**/*.js",

  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '992px',
      lg: '1024px',
      xl: '1440px',
    },
    container: {
      center: true,
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    }
    ,

    colors: {
      textPrimary: "#393D46",
      lightOrange: "#E64E08",
      lightRed: "#F3A110",
      darkSlate: "#212529",
      bgOne: "#F6F7FB"


    },
  },
  plugins: [require("daisyui"), require('flowbite/plugin')],
}
