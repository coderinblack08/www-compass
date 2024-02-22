/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{tsx,mdx}",
    "./components/**/*.{tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin calc(var(--speed) * 2) infinite linear',
        slide: 'slide var(--speed) ease-in-out infinite alternate',
      },
      backgroundImage: {
        'blue-purple-gradient':
          'linear-gradient(83.21deg,#3245FF 0%,#B845ED 100%)',
      },
    },
    keyframes: {
      spin: {
        '0%': {
          rotate: '0deg',
        },
        '15%, 35%': {
          rotate: '90deg',
        },
        '65%, 85%': {
          rotate: '270deg',
        },
        '100%': {
          rotate: '360deg',
        },
      },
      slide: {
        to: {
          transform: 'translate(calc(100cqw - 100%), 0)',
        },
      },
    },
  },
  plugins: [],
}

