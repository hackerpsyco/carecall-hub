/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E90FF',   // Electric Blue
        accent: '#39FF14',    // Neon Green
        highlight: '#FF2E8D', // Bright Magenta
        background: {
          dark: '#0f0f2d',    // Midnight Navy
          light: '#1a1a2e',   // Charcoal Gray
        },
        text: {
          primary: '#F5F5F5', // White Smoke
          secondary: '#A9A9A9', // Light Gray
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      screens: {
        xs: '450px',
      },
      animation: {
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};