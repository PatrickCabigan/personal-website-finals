/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        genshin: {
          bg: '#1B1E23',
          gold: '#ECE5D8',
          accent: '#DBB165',
          panel: '#2A3241',
        },
        vision: {
          anemo: '#72E2C2',
          geo: '#F8BA4E',
          electro: '#D3AAFF',
          dendro: '#A5C83B',
          hydro: '#00BFFF',
          pyro: '#EF7A35',
          cryo: '#99DFFF',
        }
      }
    }
  },
  plugins: [],
}