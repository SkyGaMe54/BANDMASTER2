/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0a0a0a',
        'secondary': '#141414',
        'accent': '#2c9971',
        'accent-dark': '#1f7054',
        'accent-light': '#34b386',
        'text': '#ffffff',
        'muted': '#a3a3a3',
        'border': '#2c997133',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'wave-pattern': "url('/wave-pattern.svg')",
      },
      boxShadow: {
        'accent': '0 4px 14px 0 rgba(44, 153, 113, 0.25)',
      },
    },
  },
  plugins: [],
}