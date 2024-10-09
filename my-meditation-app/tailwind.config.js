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
        darkBackground: '#121212', // Fundo escuro mais profundo
        lightBackground: '#F8F8F8', // Fundo claro com um toque suave
        primary: '#5E81AC', // Azul claro suave para destacar links e botões
        secondary: '#88C0D0', // Azul esverdeado para acentuar elementos
        accent: '#4C566A', // Cinza médio para bordas e pequenos detalhes
        darkText: '#ECEFF4', // Texto quase branco para modo escuro
        lightText: '#2E3440', // Texto escuro mais forte no modo claro
        gray: {
          900: '#1B1B1E',
          800: '#2E3440',
          700: '#3B4252',
          200: '#D8DEE9',
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'], // Fonte similar ao site de Takuya Matsuyama
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
