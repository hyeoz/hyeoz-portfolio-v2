/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'gradient-to-transparent':
          'linear-gradient(to top, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0))',
      }),
      height: {
        'screen-vh': 'calc(var(--vh, 1vh) * 100)',
      },
    },
    screens: {
      mobile: { max: '768px' },
    },
  },
  plugins: [],
};
