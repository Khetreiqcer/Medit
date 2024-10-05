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
        darkBackground: '#1F1F1F', // Cinza-escuro suave
        lightBackground: '#FFFFFF',
        primary: '#5A67D8', // Azul escuro acinzentado para botões
        secondary: '#34C759', // Verde suave para destaques
        accent: '#A3A3A3', // Cinza claro para bordas e destaques
        darkText: '#E0E0E0', // Texto suave no modo escuro
        gray: {
          900: '#1F1F1F', // Tom mais suave de preto para fundo
          800: '#2A2A35', // Azul acinzentado para destaques e bordas
          700: '#3D3D45', // Cinza escuro suave para separadores
        },
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
