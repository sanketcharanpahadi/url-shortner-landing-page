/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-cyan": "hsl(180, 66%, 49%)",
        "dark-violet": "hsl(257, 27%, 26%)",
        "secondary-red": "hsl(0, 87%, 67%)",
        "neutral-gray": "hsla(0, 0%, 75%, .2)",
        "grayish-violet": "hsl(257, 7%, 63%)",
        "darker-blue": "hsl(255, 11%, 22%)",
        "darker-violet": "hsl(260, 8%, 14%)",
        "neutrall-gray": "hsl(0, 0%, 75%)",
      },
    },
  },
  plugins: [],
};
