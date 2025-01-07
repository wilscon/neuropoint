/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all relevant files
  ],
  theme: {
    extend: {
      colors: {
        customTeal: '#00888E', // Add custom color
      },
    },
  },
  plugins: [],
};