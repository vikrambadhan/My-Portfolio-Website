/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Define where Tailwind should look for class usage
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      animation: {
        "slide-in": "slideIn 1.5s ease-out", // Slide-in animation
        "fade-in": "fadeIn 2s ease-in", // Fade-in animation
        "fade-in-delayed": "fadeIn 2.5s ease-in", // Delayed fade-in animation
        "float": "float 6s ease-in-out infinite", // Floating animation
        "float-delayed": "float 6s ease-in-out 3s infinite", // Delayed floating animation
      },
      keyframes: {
        slideIn: {
          "0%": {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        float: {
          "0%, 100%": {
            transform: "translate(0, 0)",
          },
          "50%": {
            transform: "translate(0, 20px)",
          },
        },
      },
      // Add colors for dark mode consistency
      colors: {
        'dark': {
          DEFAULT: '#121212',
          'surface': '#1E1E1E',
          'hover': '#2D2D2D',
        },
      },
      // Add background gradients
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [], // No additional plugins used
};

