/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primario': 'var(--ion-color-primary)',
        'secundario': 'var(--ion-color-secondary)',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
