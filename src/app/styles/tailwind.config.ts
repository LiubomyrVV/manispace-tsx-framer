import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffc0cb',
        secondary: '#e39faa',
        dark: '#1a1a1a',
        light: '#f5f5f5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
    screens: {
      // Screen break points
      xs: '480px', // New xs size
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px', // For 4K screen
    },
  },
  plugins: [],
};
export default config;
