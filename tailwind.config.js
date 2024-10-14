/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {colors: {
      primary: '#0056b3',
      secondary: '#00a86b',
      accent: '#ffd700',
  },
  fontFamily: {
      sans: ['Poppins', 'sans-serif'],
  },},
  },
  plugins: [],
};