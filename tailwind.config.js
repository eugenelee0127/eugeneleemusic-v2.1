export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif","system-ui","Inter","sans-serif"],
        body: ["ui-sans-serif","system-ui","Inter","sans-serif"]
      },
      colors: { ink: "#0b0b0b", bone: "#f7f5f2" },
      boxShadow: { soft: "0 10px 30px rgba(0,0,0,0.08)" }
    }
  },
  plugins: []
}