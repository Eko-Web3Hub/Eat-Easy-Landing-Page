/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0px 2px 16px 5px rgba(255, 77, 31, 0.15)',
      },
      colors: {
        primary: "#129575",
        darkest: "#0A0A0A",
        secondary: "#F76631",
        gradient : "linear-gradient(0deg, #18E5B3 0%, #129575 99%)",
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}

