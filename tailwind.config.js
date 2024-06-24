/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007bff', // Blue
        'primary-hover': '#0056b3', // Darker blue
        'secondary': '#6c757d', // Gray
        'secondary-hover': '#494d53', // Darker gray
        'success': '#28a745', // Green
        'success-hover': '#19692c', // Darker green
        'danger': '#dc3545', // Red
        'danger-hover': '#a71d2a', // Darker red
        'warning': '#ffc107', // Yellow
        'warning-hover': '#ba8b00', // Darker yellow
        'info': '#17a2b8', // Teal
        'info-hover': '#0f6674', // Darker teal
        'light': '#f8f9fa', // Light gray
        'light-hover': '#dae0e5', // Slightly darker light gray
        'dark': '#343a40', // Dark gray
        'dark-hover': '#1d2124', // Darker gray
      },
        fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
        outfit: ['Outfit-Regular', 'Outfit-Bold', 'Outfit-Italic'],
      },
    
    
    },
  },
  plugins: [],
};
