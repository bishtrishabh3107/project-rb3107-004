module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  important: true,
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'main-text': 'var(--text-main)',
        'secondary-text': 'var(--text-secondary)',
      },
    },
    screens: {
      sm: { min: '100px', max: '767px' },
      md: { min: '768px', max: '980px' },
      lg: { min: '981px', max: '1279px' },
      xl: { min: '1280px', max: '2560px' },
      '2xl': { min: '2561px' },
    },
  },
  variants: {
    display: ['group-hover'],
    extend: {},
  },
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
