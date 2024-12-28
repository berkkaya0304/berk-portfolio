/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: '640px',
        md: '768px',
        lg: '960px',
        xl: '1200px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: ["var(--font-jetbrainsMono)", "monospace"],
    },
    extend: {
      minHeight: {
        'screen': '100vh',
        'content': '500px',
      },
      
      colors: {
        primary: '#1c1c22',
        accent: {
          DEFAULT: '#00dcff',
          hover: '#00e187',
        },
      },

      opacity: {
        'loading': '0.5',
      },
      
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      height: {
        'social': '50px',
        'form': '400px',
      },
      spacing: {
        'safe': '2rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}