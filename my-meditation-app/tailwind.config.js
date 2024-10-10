/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1B1B1E', // Cinza escuro profundo para o fundo escuro
        lightBackground: '#FDF7F2', // Off-white suave para o fundo claro
        primary: {
          light: '#B2DFDB', // Verde-água suave para o modo claro
          dark: '#889E9B', // Verde-acinzentado escuro para o modo escuro
        },
        secondary: {
          light: '#708090', // Cinza azulado claro para o modo claro
          dark: '#4A5568', // Cinza azulado escuro para o modo escuro
        },
        accent: {
          light: '#C4B5FD', // Lavanda acinzentada claro para o modo claro
          dark: '#7C6EEB', // Lavanda acinzentada escuro para o modo escuro
        },
        darkText: '#FDF7F2', // Off-white para texto no modo escuro
        lightText: '#1B1B1E', // Cinza escuro para texto no modo claro
        gray: {
          900: '#1B1B1E',
          800: '#2E3440',
          700: '#3B4252',
          200: '#D8DEE9',
        },
      },
      fontFamily: {
        sans: ['"Roboto"', 'sans-serif'],
        serif: ['"Lora"', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
