/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        secondary: "#4a4a4a",
        accent: "#ff4d4d",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      aspectRatio: {
        "2.4/1": "2.4 / 1",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [("tailwindcss-animate")],
} 