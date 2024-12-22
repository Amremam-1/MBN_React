module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // تأكد أن هذا المسار يشمل كل ملفاتك
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        lightBg: "#fafafa ",
        lightText: "#000",
        grayText: "#aca3a3",
        orangeText: "#fca311 ",
        darkBg: "#1c1c1b",
        darkText: "#a0a0a0",
      },
    },
  },
  plugins: [],
}
