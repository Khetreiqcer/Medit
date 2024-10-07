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
        primary: '#5A67D8', // Ajuste para a cor principal do site
        secondary: '#34C759', // Ajuste para a cor secundária
        accent: '#A3A3A3', // Ajuste para a cor de destaque// Cinza claro para bordas e destaques
        darkText: '#E0E0E0', // Texto suave no modo escuro
        gray: {
          900: '#1F1F1F',
          800: '#2A2A35',
          700: '#3D3D45',
          200: '#E5E7EB',
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
